import { Container, Row, Col, Button } from "react-bootstrap"
import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import planService from "../../services/plan.service"
import { useNavigate } from "react-router-dom"
import conversationService from '../../services/conversation.service'
import { AuthContext } from '../../contexts/auth.context'
import { useContext } from "react"




const PlanDetailsPage = () => {

    const [plan, setPlan] = useState({})
    const [errors, setErrors] = useState([])
    const [conversationData, setConversationData] = useState({
        message: '',
        members: []
    })

    const { user } = useContext(AuthContext)
    const { plan_id } = useParams()

    const navigate = useNavigate()

    useEffect(() => {
        loadPlanData()
    }, [plan_id])

    const handleDeletePlan = e => {

        e.preventDefault()

        planService
            .deletePlan(plan_id)
            .then(() => navigate('/plan'))
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
            .createConversation(plan.owner)
            .then(({ data }) => {
                navigate(`/inbox/${data._id}`)
            })
            .catch(err => setErrors(err.response.data.errorMessages))
    }


    return (

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
                    <h6>ID</h6>
                    <p>{plan._id}</p>
                    <hr />

                    <Link to={`/planEdit/${plan_id}`}>
                        <Button as="figure" variant="dark">Edit</Button>
                    </Link>

                    <Link to='/plan'>
                        <Button as="figure" onClick={handleDeletePlan} variant="dark">Delete</Button>

                    </Link>

                    <Link to="/plan">
                        <Button as="figure" variant="dark">Go back</Button>
                    </Link>

                    <Link >
                        <Button onClick={createConversation} as="figure" variant="dark">Contact with creator</Button>
                    </Link>
                </Col>

                <Col md={{ span: 4 }}>
                    <img src={plan.typePlan} style={{ width: '100%' }} alt='PlanImg' />
                </Col>

            </Row >

        </Container >

    )
}

export default PlanDetailsPage
