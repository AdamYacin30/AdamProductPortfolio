const fs = require('fs');
const path = require('path');

function escapePDFString(s) {
  return s.replace(/([\\()])/g, '\\$1');
}

function wrapLines(text, maxLen) {
  const words = text.split(/\s+/);
  const lines = [];
  let line = '';
  for (const w of words) {
    if ((line + ' ' + w).trim().length > maxLen) {
      lines.push(line.trim());
      line = w;
    } else {
      line = (line + ' ' + w).trim();
    }
  }
  if (line) lines.push(line);
  return lines;
}

async function buildPDF() {
  const resumeTxtPath = path.join(__dirname, 'resume_text.txt');
  const outPath = path.join(__dirname, '..', 'public', 'resume', 'Adam Yassine - Resume - 2026.pdf');

  if (!fs.existsSync(resumeTxtPath)) {
    console.error('resume_text.txt not found in scripts/. Please add it with the resume content.');
    process.exit(1);
  }

  const raw = fs.readFileSync(resumeTxtPath, 'utf8');
  const paragraphs = raw.split(/\n\n+/).map(p => p.replace(/\r/g, '').trim());

  const lines = [];
  for (const p of paragraphs) {
    const wrapped = wrapLines(p, 90);
    for (const l of wrapped) lines.push(l);
    lines.push('');
  }
  // remove trailing blank
  if (lines.length && lines[lines.length-1] === '') lines.pop();

  const contentLines = [];
  contentLines.push('BT');
  contentLines.push('/F1 10 Tf');
  contentLines.push('14 TL');
  contentLines.push('50 740 Td');
  for (let i = 0; i < lines.length; i++) {
    const l = escapePDFString(lines[i]);
    contentLines.push('(' + l + ') Tj');
    if (i !== lines.length - 1) contentLines.push('T*');
  }
  contentLines.push('ET');

  const content = contentLines.join('\n');

  const objs = [];

  objs.push({id:1, data: '<< /Type /Catalog /Pages 2 0 R >>'});
  objs.push({id:2, data: '<< /Type /Pages /Kids [3 0 R] /Count 1 >>'});
  objs.push({id:4, data: '<< /Type /Font /Subtype /Type1 /Name /F1 /BaseFont /Helvetica >>'});

  const mediaBox = '[0 0 612 792]';

  // Placeholder for Contents obj id 5
  objs.push({id:3, data: `<< /Type /Page /Parent 2 0 R /MediaBox ${mediaBox} /Resources << /Font << /F1 4 0 R >> >> /Contents 5 0 R >>`});

  const contentStream = content;
  const stream = Buffer.from(contentStream, 'utf8');

  objs.push({id:5, data: stream});

  // build PDF text
  let offset = 0;
  const parts = [];
  parts.push('%PDF-1.4\n%âãÏÓ\n');
  offset += parts[0].length;

  const xref = [];
  for (const o of objs) {
    xref.push(offset);
    const header = `${o.id} 0 obj\n`;
    parts.push(header);
    offset += header.length;
    if (Buffer.isBuffer(o.data)) {
      const len = o.data.length;
      const streamHeader = `<< /Length ${len} >>\nstream\n`;
      parts.push(streamHeader);
      offset += streamHeader.length;
      parts.push(o.data);
      offset += len;
      const streamFooter = '\nendstream\nendobj\n';
      parts.push(streamFooter);
      offset += streamFooter.length;
    } else {
      const body = o.data + '\nendobj\n';
      parts.push(body);
      offset += body.length;
    }
  }

  const xrefStart = offset;
  let xrefText = 'xref\n0 ' + (objs.length + 1) + '\n0000000000 65535 f \n';
  for (const pos of xref) {
    xrefText += String(pos).padStart(10, '0') + ' 00000 n \n';
  }

  parts.push(xrefText);
  offset += xrefText.length;

  const trailer = `trailer\n<< /Size ${objs.length+1} /Root 1 0 R >>\nstartxref\n${xrefStart}\n%%EOF\n`;
  parts.push(trailer);

  // Ensure output directory exists
  const outDir = path.dirname(outPath);
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

  // write file
  const writeStream = fs.createWriteStream(outPath);
  for (const p of parts) {
    if (Buffer.isBuffer(p)) writeStream.write(p);
    else writeStream.write(Buffer.from(p, 'utf8'));
  }
  writeStream.end();

  writeStream.on('finish', () => {
    console.log('Wrote PDF to', outPath);
    process.exit(0);
  });
}

buildPDF().catch(err => { console.error(err); process.exit(1); });
