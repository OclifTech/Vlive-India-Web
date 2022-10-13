import React from "react";
import teamImg from './../../../../../assests/img/team.jpg';

const Team = () => {
  return (
    <>
      <div className="">
        <div className="pb-5 text-center">
          <img
            src={teamImg}
            alt=""
            className="img-fluid"
          />
        </div>
      </div>
    </>
  );
};

export default Team;
