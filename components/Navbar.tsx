import ActiveLink from "./ActiveLink";

export default function Navbar() {
  return (
    <div className="navbar">
      <a className="navLogo" href={"/"}>
        <img src={"/tecc.png"} alt="TECC Logo" />
      </a>
      <nav className="navLinks">
        <span className="mobileHide">
          <ActiveLink href={"/"}>Home</ActiveLink>
        </span>
        <ActiveLink href={"/projects"}>Projects</ActiveLink>
        <ActiveLink href={"/opportunities"}>Opportunities</ActiveLink>
      </nav>
    </div>
  );
}
