import "./Hero.scss";
import img from "../../../assets/images/hero-img.jpg";
const Hero = () => {
  return (
    <div id="hero">
      <div className="container">
        <div className="hero">
          <img src={img} alt="img" />
          <div className="hero--text">
            <h1>MY HOME</h1>
            <p>qwazxcdrtrfvghnjk,l;kjhgfd</p>
            <div className="hero--text__btn">
              <h3>31000$</h3>
              <button>buy</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
