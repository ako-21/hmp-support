import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Logo from './../../images/Logo.png'
import Container from 'react-bootstrap/Container'
import { AiOutlineMail } from 'react-icons/ai'
import { IconContext } from 'react-icons'

const Header = ({ user }) => (
  <Navbar style={{ borderBottom: '1px solid grey' }} bg='ghost' variant='light' expand='md'>
    <Container className="d-flex align-items-end" style={{ paddingBottom: '.5rem', paddingTop: '.5rem' }}>
      <Navbar.Brand>
        <img src={Logo} style={{ width: '300px', height: '72.5px' }} alt="logo" ></img>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav style={{ width: '100%' }} className='d-flex justify-content-end'>
          <div className="col-8 d-flex justify-content-around">
            <Nav.Link href='+17272221245'><span className="threecx nav-font">727-222-1245</span>
            </Nav.Link>
            <Nav.Link href='mailto: support@hmpmetrics.com' className="nav-font">
              <IconContext.Provider className="mr-1" value={{ color: '#304771', size: '1.5rem' }}>
                <AiOutlineMail></AiOutlineMail>
              </IconContext.Provider>
              <span className="ml-5">support@hmpmetrics.com</span>
            </Nav.Link>
          </div>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
)

export default Header
