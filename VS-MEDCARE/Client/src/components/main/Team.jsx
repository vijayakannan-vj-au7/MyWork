import React from "react";
import TeamCard from "./TeamCard";
import TeamTitle from "./TeamTitle";
import Face1 from "../../images/face-1.jpg";
import Face2 from "../../images/face-2.jpg";
import Face3 from "../../images/face-3.jpg";
import Face4 from "../../images/face-4.jpg";

const Team = () => {
  return (
    <>
      <div id="team">
        <section className="team mt-5">
          <div className="container">
            <div className="row">
              <TeamTitle />
              <div className="col-lg-8">
                <div className="row">
                  <TeamCard
                    face={Face1}
                    name="Dr.KaranMetha"
                    degree="MS"
                    text="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                  />
                  <TeamCard
                    face={Face2}
                    name="Dr.Shalini"
                    degree="MS.,MD"
                    text="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                  />
                  <TeamCard
                    face={Face3}
                    name="Dr.Mithun"
                    degree="MS.,MD"
                    text="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                  />
                  <TeamCard
                    face={Face4}
                    name="Dr.GeethaKumari"
                    degree="MS.,DGO"
                    text="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Team;
