import React from 'react';

function MainSection({img, title, desc}) {
  return (
    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3">
      <div className="card" >
            <img src={img} className="card-img-top" alt="Jobs"/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{desc}</p>
            </div>
        </div>
    </div>
  );
}

export default MainSection;