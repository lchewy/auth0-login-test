import React from "react";
// import { Link } from "react-router-dom";

const authNav = profile => {
  return (
    <li className="nav-item">
      <p>Welcome {profile.displayName}</p>
    </li>
  );
};

const noAuthNav = () => {
  return (
    <li className="nav-item">
      <a className="nav-link" href="/api/login">
        Sign in with Auth0
      </a>
    </li>
  );
};

const renderNav = profile => {
  return profile ? authNav(profile) : noAuthNav();
};

const Header = ({ profile }) => {
  return <ul className="nav justify-content-end">{renderNav(profile)}</ul>;
};

export default Header;
