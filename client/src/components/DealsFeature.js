import React from 'react';

function DealsFeature({img, title, desc}) {
  return (
    <div className="card mb-1" >
      <div className="row g-0">
        <div className="col-md-4 mt-4 mx-0 p-0">
          <img
            src={img} className="img-fluid"
            alt={img}
          />
        </div>
        <div className="col-md-8  mx-0 p-0">
          <div className="card-body ">
            <h5 className="card-title">{title}</h5>
            <p className="card-text"><small className="text-muted">{desc}</small></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DealsFeature;