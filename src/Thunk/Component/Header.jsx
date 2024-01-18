import React from 'react'
import '../Assets/css/main.css'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <Navbar bg="dark" className='position-fixed w-100 top-0 '>
      <Container>
        <Link to={'/'}  className='text-light me-4 fs-3'>Redux Thunk</Link>
        <Nav className="me-auto">
          <Link to={'/'} className='text-light px-2 fs-6'>Home</Link>
          <Link to={'/about'} className='text-light px-2 fs-6'>About</Link>
          <Link to={'/product'}  className='text-light px-2 fs-6'>Product</Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default Header
