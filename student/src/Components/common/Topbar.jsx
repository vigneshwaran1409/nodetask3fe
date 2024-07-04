import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
import { LuUserPlus } from "react-icons/lu";
import { FaUserNinja } from "react-icons/fa";
import { MdOutlineDashboard } from "react-icons/md";
import { useLocation } from 'react-router-dom';
function Topbar() {

  let location = useLocation();
  let active = "activeNav";
  let navigate = useNavigate();

  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container>
        <Navbar.Brand className='navIcon'><b>Full Stock CLASS</b></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className={`${location.pathname === '/'? "navItem" : ""}`} onClick={()=>navigate("/")}>
              <MdOutlineDashboard className={`navIcon ${location.pathname === '/'? active : ""}`} />
              <span className="ms-2">Dashboard</span>
            </Nav.Link>
            <Nav.Link className={`${location.pathname === '/addmentor'? "navItem" : ""}`} onClick={()=>navigate("/addmentor")}>
              <LuUserPlus className={`navIcon ${location.pathname === '/mentor'? active : ""}`} />
              <span className="ms-2">Add Mentor</span>
            </Nav.Link>
            <Nav.Link className={`${location.pathname === '/student'? "navItem" : ""}`} onClick={()=>navigate("/student")}>
              <LuUserPlus className={`navIcon ${location.pathname === '/student'? active : ""}`} />
              <span className="ms-2">Add Student</span>
            </Nav.Link>
            <Nav.Link className={`${location.pathname === '/all-student'? "navItem" : ""}`} onClick={()=>navigate("/all-student")}>
              <FaUserNinja className={`navIcon ${location.pathname === '/all-student'? active : ""}`} />
              <span className="ms-2">All Student</span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Topbar 