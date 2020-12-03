//core
import React, { useState, useEffect, useRef } from "react";

//component
import Lable from "./Lable";

//
const Card = () => {
  //state
  const [name, setName] = useState();
  const [firstBox, setFirstBox] = useState();
  const [secondBox, setSecondBox] = useState();
  const [thirdBox, setThirdBox] = useState();
  const [fourthBox, setFourthBox] = useState();
  //refs
  const firstBoxRef = useRef(null);
  const secondBoxRef = useRef(null);
  const thirdBoxRef = useRef(null);
  const fourthBoxRef = useRef(null);
  const submitBoxRef = useRef(null);
  //
  useEffect(() => {
    firstBoxRef.current.focus();
  }, []);
  //
  const formSubmitHandel = (e) => {
    e.preventDefault();
    const card = `${firstBox}${secondBox}${thirdBox}${fourthBox}`;
    if (card.length === 16 || 32) {
      alert(`${name} Card Is Accepted`);
      setName("");
      setFirstBox("");
      setSecondBox("");
      setThirdBox("");
      setFourthBox("");
    } else {
      alert("Card Number Should Be 16 Digits.!");
    }
  };
  //
  const firstBoxChangeHandel = (e) => {
    const firData = e.target.value;

    if (firData.length === 16) {
      const val = e.target.value.match(/.{1,4}/g);
      fourthBoxRef.current.focus();
      setFirstBox(val[0]);
      setSecondBox(val[1]);
      setThirdBox(val[2]);
      setFourthBox(val[3]);
    }

    if (firData.length === 4) {
      secondBoxRef.current.focus();
    }

    if (firData.length === 0) {
      firstBoxRef.current.focus();
    }
  };
  //
  const secondBoxChangeHandel = (e) => {
    const secData = e.target.value;
    if (secData.length === 4) {
      thirdBoxRef.current.focus();
    }
    if (secData.length === 0) {
      firstBoxRef.current.focus();
    }
  };
  //
  const thirdBoxChangeHandel = (e) => {
    const thiData = e.target.value;
    if (thiData.length === 4) {
      fourthBoxRef.current.focus();
    }
    if (thiData.length === 0) {
      secondBoxRef.current.focus();
    }
  };
  //
  const fourthBoxChangeHandel = (e) => {
    const forData = e.target.value;
    if (forData.length === 4) {
      submitBoxRef.current.focus();
    }
    if (forData.length === 0) {
      thirdBoxRef.current.focus();
    }
  };

  return (
    <>
      <div className="container">
        <div className="card">
          <span style={{ color: "white" }}>
            <Lable title={"Debit Card | Credit Card | EMI Card"} />
          </span>

          <form onSubmit={formSubmitHandel}>
            <div style={{ marginTop: "10px" }}>
              <input
                style={{ width: "23vw" }}
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={name}
                placeholder="Name"
                required
              />

              <br />
              <input
                type="number"
                onChange={(e) => firstBoxChangeHandel(e)}
                ref={firstBoxRef}
                value={firstBox}
                placeholder="xxxx"
                required
              />
              <input
                type="number"
                maxLength="4"
                onChange={(e) => {
                  secondBoxChangeHandel(e);
                  setSecondBox(e.target.value);
                }}
                ref={secondBoxRef}
                value={secondBox}
                placeholder="xxxx"
                required
              />
              <input
                type="number"
                maxLength="4"
                onChange={(e) => {
                  thirdBoxChangeHandel(e);
                  setThirdBox(e.target.value);
                }}
                ref={thirdBoxRef}
                value={thirdBox}
                placeholder="xxxx"
                required
              />
              <input
                type="number"
                maxLength="4"
                onChange={(e) => {
                  fourthBoxChangeHandel(e);
                  setFourthBox(e.target.value);
                }}
                ref={fourthBoxRef}
                value={fourthBox}
                placeholder="xxxx"
                required
              />
            </div>
            <button className="btn" ref={submitBoxRef} type="submit">
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Card;
