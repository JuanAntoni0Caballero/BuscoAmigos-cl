import { Container, Row, Col, Button, Offcanvas, Modal } from "react-bootstrap"
import { useEffect, useState, useContext } from "react"
import { AuthContext } from '../../contexts/auth.context'
import { useParams, Link } from "react-router-dom"
import planService from "../../services/plan.service"
import { useNavigate } from "react-router-dom"
import conversationService from '../../services/conversation.service'
import PruebaMessages from "../../components/ProfilePost/PruebaMessages"
import PlanEditForm from '../../components/PlanEditForm/PlanEditForm'


const PlanDetailsPage = () => {

    const { user } = useContext(AuthContext)

    const [showEditPlanModal, setShowEditPlanModal] = useState(false)
    const [showDeleteModal, setShowDeleteModal] = useState(false)

    const handleCloseDelete = () => setShowDeleteModal(false)
    const handleShowDelete = () => setShowDeleteModal(true)


    const { plan_id } = useParams()

    const navigate = useNavigate()

    const [messageData, setMessageData] = useState({
        content: '',
        owner: user._id
    })

    const [plan, setPlan] = useState({})
    const [conversation, setConversation] = useState({ messages: [] })
    const [show, setShow] = useState(false)

    useEffect(() => {
        loadPlanData()
    }, [plan_id])

    const handleClose = () => setShow(false)
    const handleShow = () => {
        createConversation()
        setShow(true)
    }

    const fireFinalActions = () => {
        setShowEditPlanModal(false)
    }


    useEffect(() => {
        loadPlanData()
    }, [plan_id])

    const handleDeletePlan = e => {

        planService
            .deletePlan(plan_id)
            .then(() => navigate('/'))
            .catch(err => console.log(err))
    }

    const loadPlanData = () => {

        planService
            .getOnePlan(plan_id)
            .then(({ data }) => setPlan(data))
            .catch(err => console.log(err))
    }

    const createConversation = e => {

        conversationService
            .createConversation(plan_id)
            .then(({ data }) => {
                loadConversationData(data._id)
            })
            .catch(err => console.log(err))
    }

    const loadConversationData = (conversation_id) => {

        conversationService
            .getConversation(conversation_id)
            .then(({ data }) => {
                setConversation(data)
            })
            .catch(err => console.log(err))
    }


    return (

        <>

            <Container>
                <h1 className="mb-4">{plan.title} </h1>
                <hr />
                <Row>

                    <Col md={{ span: 6, offset: 1 }}>
                        <h6>Description</h6>
                        <p>{plan.description}</p>
                        <h6>Origen</h6>
                        <p>{plan.origin}</p>
                        <h6>Destino</h6>
                        <p>{plan.destination}</p>
                        <h6>Fecha</h6>
                        <p>{plan.date}</p>
                        <h6>Duración</h6>
                        <p>{plan.duration}</p>
                        <hr />

                        {
                            user._id === plan?.owner || user.role === 'ADMIN'
                                ?
                                <>
                                    <Link >
                                        <Button onClick={() => setShowEditPlanModal(true)} as="figure" variant="dark">Edit</Button>
                                    </Link>

                                    <Link>
                                        <Button as="figure" onClick={handleShowDelete} variant="dark">Delete</Button>
                                    </Link>

                                    <Link to="/plan">
                                        <Button as="figure" variant="dark">Volver</Button>
                                    </Link>
                                </>
                                :
                                <>
                                    <Link to="/plan">
                                        <Button as="figure" variant="dark">Volver</Button>
                                    </Link>

                                    <Link onClick={handleShow}>
                                        <Button as="figure" variant="dark" >Contactar</Button>
                                    </Link>
                                </>
                        }
                    </Col >

                    <Col md={{ span: 4 }}>
                        <img src={plan.image} style={{ width: '100%' }} alt='PlanImg' />
                    </Col>
                </Row >


            </Container >


            <Offcanvas show={show} onHide={handleClose}>

                <PruebaMessages conversation={conversation} setConversation={setConversation} />

            </Offcanvas >



            <Modal show={showDeleteModal} onHide={handleCloseDelete}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirmacion de eliminación</Modal.Title>
                </Modal.Header>
                <Modal.Body>¿Estás seguro de que lo quieres eliminar?</Modal.Body>
                <Modal.Footer>
                    <Button variant="dark" onClick={handleCloseDelete}>
                        Close
                    </Button>
                    <Button variant="dark" onClick={handleDeletePlan} >
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>


            <Modal size="lg" centered show={showEditPlanModal} onHide={() => setShowEditPlanModal(false)}>
                <Modal.Header closeButton> <Modal.Title>Edit Plan</Modal.Title></Modal.Header>
                <Modal.Body>
                    <PlanEditForm setShowEditPlanModal={setShowEditPlanModal} fireFinalActions={fireFinalActions} />
                </Modal.Body>
            </Modal>

        </>
    )
}

export default PlanDetailsPage
