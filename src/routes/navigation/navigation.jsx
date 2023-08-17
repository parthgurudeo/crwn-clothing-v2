import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";
import { ReactComponent as CrwnLogo } from "./../../assets/logos/crown.svg";
import './navigation.styles.scss'
const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
       
          <Link className="logo-container" to="/">
            <div>
              <CrwnLogo  className="logo"/>
            </div>
          </Link>
          <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            <div>Shop</div>
          </Link>
          <Link className="nav-link" to="/signin">
            <div>SignIn</div>
          </Link>
          </div>
          
        </div>

        <Outlet />
  
    </Fragment>
  );
};

export default Navigation;
