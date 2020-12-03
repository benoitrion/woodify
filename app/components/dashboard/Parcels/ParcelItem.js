import React from "react";
import {Tag} from "antd";

const EventItem = ({data}) => {
  const {image, coodinates, distance, area, title, commune, puissance, radical, sect, description, purchaseDetails} = data;

  return (
    <div className="bl-media bl-featured-item">

      <div className="bl-featured-thumb">
        <img className="bl-rounded-lg" src={image} alt="..."/>
      </div>
      <div className="bl-media-body bl-featured-content">
        <div className="bl-featured-content-left">
          <Tag className="bl-rounded-xs bl-text-uppercase" color="#06BB8A">Music concert</Tag>
          <h3 className="bl-mb-2">{title}</h3>
          <div className="ant-row-flex">
            <div className="bl-media bl-text-grey bl-mb-1">
              <i className={`icon icon-location bl-fs-lg bl-mr-2 bl-d-inline-flex bl-vertical-align-middle`}/>
              <span className="bl-media-body bl-ml-1">{address}</span>
            </div>
          </div>
        </div>
        <div className="bl-featured-content-right bl-profile-content-right">
          <h2 className="bl-text-primary bl-mb-1">
            <i className={`icon icon-calendar bl-fs-lg bl-mr-2 bl-d-inline-flex bl-vertical-align-middle`}/> <span
            className="bl-d-inline-flex bl-vertical-align-middle">{date}</span>
          </h2>
          <p className="bl-text-primary bl-text-truncate bl-mt-sm-auto bl-mb-0 bl-pointer">Check in detail <i
            className={`icon icon-long-arrow-right bl-fs-xxl bl-ml-1 bl-ml-sm-2 bl-d-inline-flex bl-vertical-align-middle`}/>
          </p>
        </div>

      </div>
    </div>
  );
}

export default EventItem;
