export default function NotFound() {
  return (
    <div className="wrap page">
      <header className="page__header">
        <p className="eyebrow">404</p>
        <h1 className="page__title">This page could not be found.</h1>
      </header>
      <div className="prose page__prose">
        <p>Sorry — the page you're looking for doesn't exist. Use the navigation to continue.</p>
      </div>
    </div>
  );
}
