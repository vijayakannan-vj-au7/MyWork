import React from "react";
import MedCard from "./MedCard";
import MedTitle from "./MedTitle";
import camp1 from "../../images/camp1.jpg";
import camp2 from "../../images/camp2.jpg";
import camp3 from "../../images/camp3.jpg";
import camp4 from "../../images/camp4.jpg";
import camp5 from "../../images/camp5.jpg";
import camp6 from "../../images/camp6.jpg";
import camp7 from "../../images/camp7.jpg";
import camp8 from "../../images/camp8.jpg";

const MedCamp = () => {
  return (
    <>
      <section className="camp">
        <MedTitle />
        <div className="camp-grid">
          <div className="row">
            <MedCard camp={camp1} />
            <MedCard camp={camp2} />
            <MedCard camp={camp3} />
            <MedCard camp={camp4} />
            <MedCard camp={camp5} />
            <MedCard camp={camp6} />
            <MedCard camp={camp7} />
            <MedCard camp={camp8} />
          </div>
        </div>
      </section>
    </>
  );
};

export default MedCamp;
