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

    const navigate = useNavigate()

    const { plan_id } = useParams()

    const [errors, setErrors] = useState([])


    const { user: userContext } = useContext(AuthContext)
    const [user, setUser] = useState(userContext)







    useEffect(() => {
        planService
            .getOnePlan(plan_id)
            .then(({ data }) => setPlan(data))
            .catch(err => console.log(err))

    }, [plan_id])

    const handleDeletePlan = e => {

        e.preventDefault()

        planService
            .deletePlan(plan_id)
            .then(() => navigate('/plan'))
            .catch(err => console.log(err))
    }










    const [conversationData, setConversationData] = useState({
        message: '',
        members: []

    })


    const createConversation = e => {

        e.preventDefault()

        conversationService
            .createConversation(plan.owner)
            .then(() => navigate('/inbox'))
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
                    <Link to={`/inbox/${plan.owner}`}>
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
