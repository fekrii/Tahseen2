import logo from "../assets/images/logo.svg";


const Navbar = () => {

  const handleClick = (res) => {
    if (res === "تواصل معنا") {
      // Navigate to the ContactForm page.
    
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
