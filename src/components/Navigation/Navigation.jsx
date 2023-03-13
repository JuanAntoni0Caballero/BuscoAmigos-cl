
import { useContext, useState, useEffect } from 'react'
import { Nav, Navbar, Container, Modal, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../contexts/auth.context'
import LoginForm from '../LoginForm/LoginForm'
import SignupForm from '../SignupForm/SignupForm'
import PlanNewForm from '../PlanNewForm/PlanNewForm'
// import planService from '../../services/plan.service'


const Navigation = () => {


    const [showLogInModal, setShowLoginModal] = useState(false)
    const [showSingUpModal, setShowSingUpModal] = useState(false)
    const [showCreatePlanModal, setShowCreatePlanModal] = useState(false)



    const { user, logout } = useContext(AuthContext)

    // const [plans, setPlans] = useState([])
    // const [isLoading, setIsLoading] = useState(true)

    // const { user } = useContext(AuthContext)

    useEffect(() => {
        // loadPanning()
    }, [])

    // const loadPanning = () => {
    //     planService
    //         .getPlan()
    //         .then(({ data }) => {
    //             setPlans(data)
    //             // setIsLoading(false)
    //         })
    //         .catch(err => console.log(err))
    // }


    const fireFinalActions = () => {
        setShowLoginModal(false)
        setShowSingUpModal(false)
        setShowCreatePlanModal(false)
        // loadPanning()
    }



    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Link to='/'>
                    <Navbar.Brand as='span'>BUSCO AMIGOS</Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">


                        <NavDropdown title="Menu" className='dropdown' id="collasible-nav-dropdown">

                            {
                                !user
                                    ?
                                    <>
                                        <NavDropdown.Item >
                                            <Link >
                                                <Nav.Link onClick={() => setShowLoginModal(true)} as='span'>LogIn</Nav.Link>
                                            </Link>


                                        </NavDropdown.Item>

                                        <NavDropdown.Divider />

                                        <NavDropdown.Item >

                                            <Link>
                                                <Nav.Link onClick={() => setShowSingUpModal(true)} as='span'>SignUp</Nav.Link>
                                            </Link>

                                        </NavDropdown.Item>

                                    </>
                                    :

                                    <>

                                        <NavDropdown.Item >
                                            <Link>
                                                <Nav.Link onClick={() => setShowCreatePlanModal(true)} as='span'>Create plan</Nav.Link>
                                            </Link>

                                        </NavDropdown.Item>

                                        <NavDropdown.Item >
                                            <Link to='/profile'>
                                                <Nav.Link as='span'>Profile</Nav.Link>
                                            </Link>
                                        </NavDropdown.Item>


                                        <NavDropdown.Divider />



                                        <NavDropdown.Item >
                                            <Link to='/'>
                                                <Nav.Link onClick={logout} as='span'>LogOut</Nav.Link>
                                            </Link>

                                        </NavDropdown.Item>
                                    </>
                            }



                        </NavDropdown>










                        <Modal show={showLogInModal} onHide={() => setShowLoginModal(false)}>
                            <Modal.Header closeButton> <Modal.Title> LogIn</Modal.Title></Modal.Header>
                            <Modal.Body>
                                <LoginForm setShowLoginModal={setShowLoginModal} fireFinalActions={fireFinalActions} />
                            </Modal.Body>
                        </Modal>

                        <Modal size="lg" show={showSingUpModal} onHide={() => setShowSingUpModal(false)}>
                            <Modal.Header closeButton> <Modal.Title> SignUp</Modal.Title></Modal.Header>
                            <Modal.Body>
                                <SignupForm setShowSingUpModal={setShowSingUpModal} setShowLoginModal={setShowLoginModal} fireFinalActions={fireFinalActions} />
                            </Modal.Body>
                        </Modal>

                        <Modal size="lg" centered show={showCreatePlanModal} onHide={() => setShowCreatePlanModal(false)}>
                            <Modal.Header closeButton> <Modal.Title>Create Plan</Modal.Title></Modal.Header>
                            <Modal.Body >
                                <PlanNewForm setShowCreatePlanModal={setShowCreatePlanModal} fireFinalActions={fireFinalActions} />
                            </Modal.Body>
                        </Modal>


                    </Nav>
                    <Nav>
                        <Link to="/contact">
                            <Nav.Link as='span'>Contacto</Nav.Link>
                        </Link>

                        <Nav.Link href="#memes">Regalos</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}


export default Navigation