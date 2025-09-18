import "./Header.scss"
const Header = () => {
  return (
    <div id="header">
      <div className="container">
        <div className="header">
            <h1>LOGO</h1>
            <div className="header--nav">
                <h3>home</h3>
                <h3>about</h3>
                <h3>basket</h3>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
