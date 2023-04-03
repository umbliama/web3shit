import "./Header.scss";

const Header = () => {
  return (
    <header className="header wrapper-header">
      <div className="header header-container">
        <div className="header header-logo">
          <a href="" className="header header-link--logo">
            <img src="./cryptoverse.svg" alt="" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
