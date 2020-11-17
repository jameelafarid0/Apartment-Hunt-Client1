import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import images from '../../images/Logo.png'
import './Navbar.css'

const Navbar = () => {
      const [loggedInUser, setLoggedInUser] = useContext(UserContext);
     
    return (
      <div>
      <nav className="navbar navbar-expand-lg navbar-expand-md pt-2  container-md">
          <Link className="navbar-brand" to="/">
              <img src={images} height="60" alt="" />
          </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" style={{ color: 'pink' }}>
                  <FontAwesomeIcon icon={faBars} />
              </span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                      <Link className="nav-link ml-2" to="/">Home <span className="sr-only">(current)</span></Link>
                  </li>
                  <li className="nav-item">
                      <Link className="nav-link ml-3" to="/">About</Link>
                  </li>
                  <li className="nav-item">
                      <Link className="nav-link ml-3" to="/">Services</Link>
                  </li>
                  <li className="nav-item">
                      <Link className="nav-link ml-3" to="/">Concerns</Link>
                  </li>
                  <li className="nav-item mr-3 ml-3">
                      <Link className="nav-link" to="/">Event</Link>
                  </li>
                  <li className="nav-item mr-3 ml-3">
                      <Link className="nav-link" to="/">Contact</Link>
                  </li>

                {
                loggedInUser.email?
                 <button style={{padding: "10px 50px"}} type="button" class="btn btn-dark mr-2" >{loggedInUser.name}</button>
                 :
                <Link to="/login">
                <button style={{padding: "10px 50px", backgroundColor:"#275a53", color:"white"}} type="button" class="btn  mr-2">Login</button>
                </Link>
                }
                
                
              
                </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;