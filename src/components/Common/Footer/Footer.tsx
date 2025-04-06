'use client';

import React from 'react';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="pt-5 pb-5 footer">
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-md-6">
            <small className="small">
              <span>&copy; {currentYear} all rights reserved</span>
            </small>
          </div>

          <div className="col-md-6 text-md-right">
            <ul className="list-inline small">
              <li className="list-inline-item">
                <Link href="/privacy-policy">Privacy Policy</Link>
              </li>
              <li className="list-inline-item">
                <Link href="/terms-of-use">Terms of Use</Link>
              </li>
              <li className="list-inline-item">
                <Link href="/about">About</Link>
              </li>
              <li className="list-inline-item">
                <Link href="/legal">Legal</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
