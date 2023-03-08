
import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import { Container, Row, Col, Button } from "react-bootstrap"
import planService from "../../service/plan.service"


const PlanDetails = () => {

    const [plan, setPlan] = useState({})


    const { plan_id } = useParams()

    useEffect(() => {
        planService
            .getOnePlan(plan_id)
            .then(({ data }) => setPlan(data))
            .catch(err => console.log(err))

    }, [])


    return (

        <Container>
            <h1 className="mb-4">Detalles de {plan.title} </h1>
            <hr />

            <Row>

                <Col md={{ span: 6, offset: 1 }}>
                    <h5>Description</h5>
                    <p>{plan.description}</p>
                    <hr />

                    <Link to={`/planEdit/${plan_id}`}>
                        <Button as="figure" variant="dark">Editar</Button>
                    </Link>

                    <Link to="/plan">
                        <Button as="figure" variant="dark">Volver atras</Button>
                    </Link>
                </Col>

                <Col md={{ span: 4 }}>
                    <img src='plan.imageURL' style={{ width: '100%' }} />
                </Col>

            </Row >

        </Container >

    )
}

export default PlanDetails