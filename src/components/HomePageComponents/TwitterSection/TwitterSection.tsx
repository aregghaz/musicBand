import React from 'react';
import './TwitterSection.scss'

const TwitterSection = () => {
  return (
    <section className="twitter main twitter-bordered">
      
      
     
      <div className="container">
        
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-9">
            <div className="block-content text-center">
              <i className="socicon-twitter big-icon adjust-space"></i>
            </div>
          </div>
        </div>
   
      </div>


     
      <div className="container">
       
        <div className="row justify-content-center">
          <div className="col-12 col-md-7 col-lg-6">
            <div className="tweets mb-5 text-center">
             
            </div>
          </div>
        </div>
       
      </div>
     
    </section>
  );
};

export default TwitterSection;
