import React from "react";
import "../DeCharter/DeCharter.scss";
import Lock from "../../../../assets/logo/lock.svg";
import Calendar from "../../../../assets/logo/calendar.svg";
import Star from "../../../../assets/logo/star.svg";
import Negotiation from "../../../../assets/logo/negotiation.svg";
import { Button } from "../../../../components";

const DeCharter = () => {
  return (
    <div className="deCharter-container">
      <div className="mx pad">
        <div className="deCharter">
          <h1>De Charter</h1>
          <p>
            A highly selective professional club ⓘ for business and management
            talent. Only those who clear our industry-backed rigourous process
            get in. Once you are in, take advantage of a range of privileges and
            benefits.
          </p>
          <div className="deCharter-content">
            <div>
              <img src={Lock} alt="" />
              <h6>Priority access to</h6>
              <h2>Job Opportunities</h2>
            </div>
            <div>
              <img src={Calendar} alt="" />
              <h6>Network & attend</h6>
              <h2>exclusive events</h2>
            </div>
            <div>
              <img src={Star} alt="" />
              <h6>use stoa L1 / L2</h6>
              <h2>designation</h2>
            </div>
            <div>
              <img src={Negotiation} alt="" />
              <h6>Higher salary</h6>
              <h2>negotiating power</h2>
            </div>
          </div>
          <div className="debtn">
            <Button variant="primary" children="More about the charter" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeCharter;
