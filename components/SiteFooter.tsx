export function SiteFooter({ email }: { email?: string }) {
  const displayEmail = email || "trista10418063@gmail.com";
  return (
    <footer className="site-footer" id="contact">
      <div className="footer-cta">
        <div className="footer-shell">
          <p className="footer-label">CONTACT</p>
          <a className="footer-email" href={`mailto:${displayEmail}`}>
            <span>{displayEmail}</span>
            <svg viewBox="0 0 72 72" fill="none" aria-hidden="true">
              <path d="M8 11L65 35L8 61L20 39L52 35L20 31L8 11Z" />
            </svg>
          </a>
        </div>
      </div>
      <div className="footer-base">
        <div className="footer-shell footer-base-content">
          <span>© 2026 ZHI YU XU</span>
          <span>TAIWAN</span>
          <span>AVAILABLE FOR COLLABORATION</span>
          <a href="#top">BACK TO TOP ↑</a>
        </div>
      </div>
    </footer>
  );
}
