import logo from "../../assets/graphql.svg";

export const Header = (): JSX.Element => {
  return (
    <nav className="navbar bg-light mb-4 p-0">
      <div className="container">
        <a className="navbar-brand" href="/">
          <div className="d-flex">
            <img src={logo} alt="Logo" className="mr-2" />
          </div>
          <div>ProjectMgmt</div>
        </a>
      </div>
    </nav>
  );
};
