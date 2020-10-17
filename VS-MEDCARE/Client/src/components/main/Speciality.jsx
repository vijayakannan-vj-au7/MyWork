import React from "react";
import SplCard from "./SplCard";

const Speciality = () => {
  return (
    <>
      <section id="services" className="services mt-5 mb-3 py-3">
        <div className="container">
          <div className="section-title text-center">
            <h2>Multispeciality Hospital</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Aspernatur quam optio esse earum voluptatibus repellat?
            </p>
          </div>
          <div className="row">
            <SplCard
              icon="fas fa-tooth"
              link="Dentistry"
              textdata="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur
            quam optio esse earum voluptatibus repellat?"
            />
            <SplCard
              icon="fas fa-lungs"
              link="Pulmonology"
              textdata="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur
            quam optio esse earum voluptatibus repellat?"
            />
            <SplCard
              icon="fas fa-heartbeat"
              link="Cardiology"
              textdata="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur
            quam optio esse earum voluptatibus repellat?"
            />
            <SplCard
              icon="fas fa-dna"
              link="Rapid Care"
              textdata="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur
            quam optio esse earum voluptatibus repellat?"
            />
            <SplCard
              icon="fas fa-ambulance"
              link="Emergency 24/7"
              textdata="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur
            quam optio esse earum voluptatibus repellat?"
            />
            <SplCard
              icon="fas fa-allergies"
              link="Insurance Support"
              textdata="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur
            quam optio esse earum voluptatibus repellat?"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Speciality;
