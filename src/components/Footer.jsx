import { footerLinks } from "../constants";

const Footer = () => {
  return (
    <footer>
      <div className="info">
        <p>
          More ways to shop: Find an Apple Store or other retailer near you. Or
          call 1-800-MY-APPLE.
        </p>
        <img src="/logo.svg" alt="Apple logo" />
      </div>

      <hr />

      <div className="links">
        <p>
          Copyright © 2025 Apple Inc. All rights reserved. Developed by{" "}
          <a
            href="http://www.arthurlaroya.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary"
          >
            Arthur Laroya
          </a>{" "}
        </p>

        <ul>
          {footerLinks.map(({ label, link }) => (
            <li key={label}>
              <a href={link}>{label}</a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
