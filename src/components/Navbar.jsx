import logo from "../assets/images/logo.svg";


const Navbar = () => {

  const handleClick = (res) => {
    if (res === "تواصل معنا") {
      // go to url in new tab
      window.open("https://docs.google.com/forms/d/e/1FAIpQLScy1h5HqpCsXs-J-TqJjsL3jKaa5TBO-P28mYoY_g8Q59BwQg/viewform?usp=sf_link");
    
    }
  };

  return (
    <nav className="container navbar">
      <img className="navbar__logo" src={logo} alt="logo" />

      <ul className="navbar__navlist">
        {["الرئيسية", "خدماتنا", "تواصل معنا"].map((res) => {
          return (
            <li>
                <a href="#" onClick={() => handleClick(res)}>{res}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
