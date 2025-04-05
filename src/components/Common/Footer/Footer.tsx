import React from 'react';

const Footer = () => {
  return (
    <footer className="pt-5 pb-5 footer">
      {/* Container */}
      <div className="container">
        <div className="row justify-content-between align-items-center">
          {/* Left Side */}
          <div className="col-md-6">
            <small className="small">
              <span>&copy; 2019 all rights reserved - a product of</span>{' '}
              mutationthemes.
            </small>
          </div>

          {/* Right Side */}
          <div className="col-md-6 text-md-right">
            <ul className="list-inline small">
              <li className="list-inline-item">
                <a href="#">Privacy Policy</a>
              </li>
              <li className="list-inline-item">
                <a href="#">Terms of Use</a>
              </li>
              <li className="list-inline-item">
                <a href="#">About</a>
              </li>
              <li className="list-inline-item">
                <a href="#">Legal</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* End Container */}
    </footer>
  );
};

export default Footer;
