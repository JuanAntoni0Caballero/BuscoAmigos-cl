
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
    const [showProfileModal, setShowProfileModal] = useState(false)

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
        setShowProfileModal(false)
        // loadPanning()
    }



    return (
        <Navbar className="me-auto" collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Link to='/'>
                    <Navbar.Brand as='span'>BUSCO AMIGOS</Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse className="me-auto" id="responsive-navbar-nav">
                    {/* <Nav className="me-auto">

                    </Nav> */}
                    <Nav >
                        {
                            user
                            &&
                            <>
                                <Navbar.Text>{user.username}</Navbar.Text>
                                <Link>
                                    <Nav.Link onClick={() => setShowProfileModal(true)} as='span'>
                                        <img src={user.avatar} alt="Avatar" />
                                    </Nav.Link>
                                </Link>
                            </>
                        }

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

                        <Modal show={showProfileModal} onHide={() => setShowProfileModal(false)}>
                            <Modal.Header closeButton> <Modal.Title>Mi perfil</Modal.Title></Modal.Header>
                            <Modal.Body >
                                <Profile setShowProfileModal={setShowProfileModal} fireFinalActions={fireFinalActions} />
                            </Modal.Body>
                        </Modal>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}


export default Navigation