import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import { signOutUser } from "../../components/utils/firebase/firebase.utils";
import { UserContext } from "../../contexts/user.context";

import "./navigation.style.scss";
const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  return (
    <Fragment>
      <div className="navigation">
        <div className="nav-links-container">
          <Link className="nav-link" to="/home">
            Daily Phrases
          </Link>
          <Link className="nav-link" to="/exercise">
            Exercises
          </Link>
          <Link className="nav-link" to="/profile">
            Profile
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
