import { Container, Row, Col, Button, Offcanvas, Form, FloatingLabel, Modal } from "react-bootstrap"
import { useEffect, useState, useContext } from "react"
import { AuthContext } from '../../contexts/auth.context'
import { useParams, Link } from "react-router-dom"
import planService from "../../services/plan.service"
import { useNavigate } from "react-router-dom"
import conversationService from '../../services/conversation.service'
import Loader from "../../components/Loader/Loader"
import FormError from "../../components/FormError/FormError"
import messageService from "../../services/message.service"
import PruebaMessages from "../../components/ProfilePost/PruebaMessages"
import PlanEditForm from '../../components/PlanEditForm/PlanEditForm'


const PlanDetailsPage = () => {


    const [plan, setPlan] = useState({})

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

    const [conversation, setConversation] = useState({})

    const [errors, setErrors] = useState([])
    const [show, setShow] = useState(false)



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
                setConversation(data)
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

    const handleInputChange = e => {
        let { value } = e.target

        setMessageData({ ...messageData, content: value })
    }

    const handleFormSubmit = (event) => {
        if (event.key === 'Enter') {
            createNewMessage()
            setMessageData({ ...messageData, content: "" })
        }
    }

    const createNewMessage = () => {

        messageService
            .createMessage(conversation._id, messageData)
            .then(() => loadConversationData(conversation._id))
            .catch(err => setErrors(err.response.data.errorMessages))
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
                                        <Button as="figure" variant="dark">Go back</Button>
                                    </Link>
                                </>
                                :
                                <>
                                    <Link to="/plan">
                                        <Button as="figure" variant="dark">Go back</Button>
                                    </Link>

                                    <Link onClick={handleShow}>
                                        <Button as="figure" variant="dark" >Contacta con el creador</Button>
                                    </Link>
                                </>
                        }
                    </Col>

                    <Col md={{ span: 4 }}>
                        <img src={plan.image} style={{ width: '100%' }} alt='PlanImg' />
                    </Col>
                </Row >

                {/* <PruebaMessages handleClose={handleClose} /> */}

            </Container >


            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>plan.title</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>

                    <h3>Messages</h3>

                    <div>
                        {
                            conversation.messages?.map(elm => {

                                if (user._id === elm.owner) {
                                    return (
                                        <div key={elm._id}>
                                            <p style={{ color: 'green', wordBreak: 'break-all' }}>{elm.owner.username}</p>
                                            <p>{elm.content}</p>
                                        </div>
                                    )
                                } else {
                                    return (
                                        <div key={elm._id}>
                                            <p style={{ color: 'red', wordBreak: 'break-all' }}>{elm.owner.username}</p>
                                            <p> {elm.content}</p>
                                        </div>
                                    )
                                }
                            })
                        }
                    </div>

                    <FloatingLabel controlId="message" label="New message">
                        <Form.Control value={messageData.content} onKeyDown={handleFormSubmit}
                            onChange={handleInputChange} name="content"
                            as="textarea"
                        />
                    </FloatingLabel>

                </Offcanvas.Body>

                {errors.length > 0 && <FormError>{errors.map(elm => <p key={elm._id}>{elm}</p>)}</FormError>}

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
