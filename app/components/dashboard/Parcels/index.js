import React from "react";

import Widget from "../../../components/Widget/index";
import ParcelItem from "./ParcelItem";
import parcelList from "../../../../public/data/parcelsData"

const Parcels = () => {
  return (
      <Widget styleName="bl-card-profile">
        <div className="ant-card-head">
          <span className="ant-card-head-title bl-mb-1">Parcels</span>
        </div>
        <div className="bl-pt-md-3">
          {parcelList.map((data, index) =>
              <ParcelItem key={index} data={data}/>
          )}
        </div>
      </Widget>
  );
}

export default Events;
