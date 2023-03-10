
import { useContext } from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../contexts/auth.context'


const Navigation = () => {

    const { user, logout } = useContext(AuthContext)

    // const [showModal, setShowModal] = useState(false)
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


    // const fireFinalActions = () => {
    //     setShowModal(false)
    //     // loadPanning()
    // }

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Link to='/'>
                    <Navbar.Brand as='span'>BUSCOAMIGOS</Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Link to='/create-plan'>
                            <Nav.Link as='span'>Crear plan</Nav.Link>
                        </Link>

                        {
                            user
                                ?
                                <>
                                    <Link to='/'>
                                        <Nav.Link onClick={logout} as='span'>LogOut</Nav.Link>
                                    </Link>
                                </>
                                :
                                <>
                                    <Link to='/login'>
                                        <Nav.Link as='span'>LogIn</Nav.Link>
                                    </Link>
                                    <Link to='/signUp'>
                                        <Nav.Link as='span'>SignUp</Nav.Link>
                                    </Link>
                                </>
                        }
                        <Link to='/profile'>
                            <Nav.Link as='span'>Profile</Nav.Link>
                        </Link>
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
                        <Nav.Link eventKey={2} href="#memes">Regalos</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}


export default Navigation