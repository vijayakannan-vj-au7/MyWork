import Card from "../components/Card";
import Lable from "../components/Lable";

function App() {
  return (
    <>
      <div className="hero-title">
        <Lable title={"Checkout ..."} />
      </div>
      <div>
        <i className="fa fa-credit-card" aria-hidden="true"></i>
      </div>
      <div className="hero-subtitle">
        <Lable title={"We Accept All type Card Payment Here"} />
      </div>
      <Card />
    </>
  );
}

export default App;
