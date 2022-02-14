import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const Heading = () => {
    return (
      <>
      <nav className='bg-dark text-white nav'>
          <Container className='d-flex'>
              <div>
                <h1>My Team</h1>
              </div>
              <div>
                <Link to="/AddUser"> <button className="bg-primary m-3" type="submit" value="submit">AddUser</button></Link>
              </div>

          </Container>
      </nav>
      </>
    )
}

export default Heading
