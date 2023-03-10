import { Container, Row, Col, Button } from "react-bootstrap"
import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import planService from "../../services/plan.service"
import { useNavigate } from "react-router-dom"


const PlanDetailsPage = () => {

    const [plan, setPlan] = useState({})

    const navigate = useNavigate()

    const { plan_id } = useParams()

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
                </Col>

                <Col md={{ span: 4 }}>
                    <img src={plan.typePlan} style={{ width: '100%' }} alt='PlanImg' />
                </Col>

            </Row >

        </Container >

    )
}

export default PlanDetailsPage
