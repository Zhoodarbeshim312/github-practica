import "./Menu.scss";
import menuImg from "../../../assets/images/menuImg.webp";
const Menu = () => {
  return (
    <section id="menu">
      <div className="container">
        <div className="menu">
          <img src={menuImg} alt="img" />
          <div className="menu--btns">
            <button>Pizza</button>
            <button>Humburger</button>
            <button>KFC</button>
            <button>Styke</button>
            <h1>Самсы эле жечи</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
