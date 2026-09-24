const fs = require('fs');
const path = require('path');

function hexToRgb(hex) {
  hex = hex.replace('#','');
  if (hex.length === 3) hex = hex.split('').map(c => c + c).join('');
  const num = parseInt(hex, 16);
  return [(num >> 16) & 255, (num >> 8) & 255, num & 255];
}

function luminance([r,g,b]){
  const a = [r,g,b].map(v => {
    v = v/255;
    return v <= 0.03928 ? v/12.92 : Math.pow((v+0.055)/1.055, 2.4);
  });
  return 0.2126*a[0] + 0.7152*a[1] + 0.0722*a[2];
}

function contrast(hex1, hex2){
  const L1 = luminance(hexToRgb(hex1));
  const L2 = luminance(hexToRgb(hex2));
  const bright = Math.max(L1,L2);
  const dark = Math.min(L1,L2);
  return (bright+0.05) / (dark+0.05);
}

const cssPath = path.join(__dirname, '..', 'app', 'data', 'styles.css');
const css = fs.readFileSync(cssPath,'utf8');

const varsBlock = css.match(/\[data-theme="dark"\][\s\S]*?\}/);
if(!varsBlock){
  console.error('Dark theme block not found in styles.css');
  process.exit(2);
}
const varsText = varsBlock[0];
const varMatches = Array.from(varsText.matchAll(/--([a-z0-9-]+):\s*(#[0-9a-fA-F]{3,6})/g));
const vars = Object.fromEntries(varMatches.map(m => [m[1], m[2]]));

const pairs = [
  ['ink','paper'],
  ['slate','paper'],
  ['surface','paper']
];

console.log('Found tokens:', Object.keys(vars).join(', '));
pairs.forEach(([a,b]) => {
  if(vars[a] && vars[b]){
    const ratio = contrast(vars[a], vars[b]);
    console.log(`${a}/${b}: ${vars[a]} on ${vars[b]} -> contrast ${ratio.toFixed(2)}:1`);
  } else {
    console.log(`Missing variables for ${a}/${b}`);
  }
});

// WCAG pass/fail guidance
function wcagLevel(r){
  if(r >= 7) return 'AAA (normal text)';
  if(r >= 4.5) return 'AA (normal text)';
  if(r >= 3) return 'AA Large (>=18pt/14pt bold)';
  return 'Fail';
}
pairs.forEach(([a,b]) => {
  if(vars[a] && vars[b]){
    const r = contrast(vars[a], vars[b]);
    console.log(`${a}/${b} guideline: ${wcagLevel(r)}`);
  }
});
