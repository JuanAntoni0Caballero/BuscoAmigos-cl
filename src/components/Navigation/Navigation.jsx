
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { Modal } from 'react-bootstrap'
import { useState } from 'react'
import LoginForm from '../LoginForm/LoginForm'



const Navigation = () => {

    const [showModal, setShowModal] = useState(false)
    // const [coasters, setCoasters] = useState([])
    // const [isLoading, setIsLoading] = useState(true)

    // const { user } = useContext(AuthContext)

    // useEffect(() => {
    //     loadCoasters()
    // }, [])

    // const loadCoasters = () => {
    //     coastersService
    //         .getCoasters()
    //         .then(({ data }) => {
    //             setCoasters(data)
    //             setIsLoading(false)
    //         })
    //         .catch(err => console.log(err))
    // }


    const fireFinalActions = () => {
        setShowModal(false)
        // loadPanning()
    }

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">Busco Amigos. YO también!!!</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/plan">Buscador de planes</Nav.Link>
                        <Nav.Link href="#pricing">Cear plan</Nav.Link>
                        <Nav.Link href="/login">Login Form</Nav.Link>
                        {/* <NavDropdown title="User menu2" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Log in</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Register
                            </NavDropdown.Item>
                        </NavDropdown> */}


                        {/* <Modal show={showModal} onHide={() => setShowModal(false)}>
                            <Modal.Header closeButton> <Modal.Title> Modal</Modal.Title></Modal.Header>
                            <Modal.Body>
                                <LoginForm fireFinalActions={fireFinalActions} />
                            </Modal.Body>
                        </Modal> */}


                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">Contacto</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Regalos
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}


export default Navigation