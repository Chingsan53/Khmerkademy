import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import { ReactComponent as FunkoLogo } from "../../assets/Funko.svg";
import { signOutUser } from "../../components/utils/firebase/firebase.utils";
import { UserContext } from "../../contexts/user.context";

import "./navigation.style.scss";

const Navigation = () => {
    const { currentUser } = useContext(UserContext);

    return (
        <Fragment>
            <div className="navigation">
                <Link className="logo-container" to="/">
                    <FunkoLogo className="logo" />
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to="/shop">
                        SHOP
                    </Link>
                    <Link className="nav-link" to="/shop">
                        CATEGORY
                    </Link>
                    <Link className="nav-link" to="/shop">
                        FEATURED
                    </Link>
                    <Link className="nav-link" to="/shop">
                        POP! YOURSELF
                    </Link>
                    <Link className="nav-link" to="/shop">
                        GIFT GUIDE
                    </Link>
                    {currentUser ? (
                        <span className='nav-link' onClick={signOutUser}>
                            SIGN OUT
                        </span>
                    ) : (
                        <Link className='nav-link' to='/auth'>
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
