import React from "react";
import AboutBackground from '@assets/img/25.jpg';
import './AboutSection.scss'
import CustomImage from "@uikit/Image/Image";

const AboutSection = () => {
  return (
    <section id="about" className="about overlay main">
      <div className="background-img about-background" style={{ background: AboutBackground }}>
        {/* <img src={AboutBackground} alt="Background" /> */}

        <CustomImage src={AboutBackground} alt="Background" />
      </div>

      <div className="container">
        <div className="row vertical-align">
          <div className="col-lg-5 col-md-12">
            <div className="front-p">
              <h1 className="uppercase text-white">
                A different <br /> kind of music
              </h1>
              <p className="w-93">
                Melbourne is the coastal capital of the southeastern Australian
                state of Victoria. At the city's centre is the modern Federation
                Square development, with plazas, bars, and restaurants by the
                Yarra River. In the Southbank area, the Melbourne Arts Precinct
                is the site of Arts Centre Melbourne and the National Gallery of
                Victoria, with Australian and indigenous art.
              </p>
              <ul className="block-social list-inline mb-4 mb-lg-0">
                {['apple', 'play', 'amazon', 'spotify', 'soundcloud'].map(
                  (icon, index) => (
                    <li className="list-inline-item mr-0" key={index}>
                      <a href="#">
                        <i className={`socicon-${icon}`}></i>
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>

          <div className="col-lg-7">
            <div className="row">
              <div className="col-md-4">
                <div className="block-content front-p pt-3 pb-3 text-center rounded bg-red mb-4 mb-lg-0">
                  <h3 className="uppercase mb-0 font-weight-600">
                    Upcoming Tour
                  </h3>
                  <span className="p mb-0">
                    Fort Mason Center
                    <br /> San Francisco, CA
                  </span>
                </div>
              </div>
              <div className="col-md-4">
                <div className="block-content pt-3 pb-3 text-center rounded bg-dark-blue front-p mb-4 mb-lg-0 location-block">
                  <h3 className="uppercase mb-0 font-weight-600">Location</h3>
                  <span className="p mb-0">
                    Sunday to Wednesday
                    <br /> July 23 to 26, 2017
                  </span>
                </div>
              </div>
              <div className="col-md-4">
                <div className="block-content front-p">
                  <a
                    className="btn btn-primary uppercase with-ico border-2"
                    href="#"
                  >
                    <i className="icon-ticket"></i> Buy a Ticket
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
