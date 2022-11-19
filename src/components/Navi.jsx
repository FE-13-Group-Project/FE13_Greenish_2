import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png"

function Navi() {
  const nav = useNavigate();
  const [hide, setHide] = useState();
  const [login, setLogin] = useState();
  const [add, setAdd] = useState();
  useEffect(() => {
    if (localStorage.getItem("isLogin") === "false") {
      setHide("SHOW");
      setLogin("HIDDEN");
    } else if (localStorage.getItem("isLogin") === "true") {
      setHide("HIDDEN");
      setLogin("SHOW");
    }
  },[localStorage.getItem("isLogin") === "false"]);

  useEffect(()=>{
    if (localStorage.getItem('role_user')!= "0") {
       setAdd("SHOW")
    }else if(localStorage.getItem('role_user')=== "0"){
      setAdd("HIDDEN")
    }
 },[])
  function signOut() {
    localStorage.removeItem("id_user");
    localStorage.removeItem("role_user");
    localStorage.setItem("isLogin", false);
    nav("/");
  }
  const img = (
    <img
      src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
      width="40"
      height="40"
      className="rounded-circle"
    />
  );
  return (
    <Navbar collapseOnSelect expand="lg" style={{ backgroundColor: "#eff7f2" }}>
      <Container style={{ padding: "0 30px" }}>
        <Navbar.Brand> <Nav.Link >
              <Link to={"/"} style={{fontSize:'20px',fontWeight:'500'}} className="nav-link link-list text" aria-current="page">
                <img src={logo} alt="" />
              </Link>
            </Nav.Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto d-flex">
            
          </Nav>
          <Nav>
          <Nav.Link >
              <Link to={"/"} style={{fontSize:'20px',fontWeight:'500'}} className="nav-link link-list text" aria-current="page">
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              {" "}
              <Link to={"/event"} style={{fontSize:'20px',fontWeight:'500'}} className="nav-link link-list">
                Event
              </Link>
            </Nav.Link>
            <li className={add}>
              <Nav.Link className={add} >
              <Link  to={"/addevent"} style={{fontSize:'20px',fontWeight:'500'}} className="nav-link link-list">
                Add Event
              </Link>
            </Nav.Link>
            </li>
            <Nav.Link>
              <Link to={"/aboutus"} style={{fontSize:'20px',fontWeight:'500'}} className="nav-link link-list">
                About Us
              </Link>
            </Nav.Link>
            <NavDropdown style={{marginTop:'5px'}} title={img} id="collasible-nav-dropdown">
            <li id="login" className={login}>
                              <Link to={"/login"} className="dropdown-item">
                                 Login / Register
                              </Link>
                           </li>
                           <li id="dash" className={hide}>
                              <a className="dropdown-item">Dashboard</a>
                           </li>
                           <li id="edit" className={hide}>
                              <a className="dropdown-item">Edit Profil</a>
                           </li>
                           <li id="log" className={hide}>
                              <a
                                 className="dropdown-item"
                                 //  href="#"
                                 onClick={() => signOut()}
                              >
                                 Log Out
                              </a>
                           </li>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navi;
