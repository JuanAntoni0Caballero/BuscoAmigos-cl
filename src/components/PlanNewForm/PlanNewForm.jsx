import { useEffect, useState } from "react"
import { Row, Col, Form, Button } from "react-bootstrap"
import { useNavigate } from 'react-router-dom'
import planService from "../../services/plan.service"
import FormError from "../FormError/FormError"


const PlanNewForm = () => {

    const [planTypes, setplanTypes] = useState(null)

    const navigate = useNavigate()

    const [errors, setErrors] = useState([])


    const [planData, setPlanData] = useState({
        title: '',
        description: '',
        origin: '',
        destination: '',
        date: '',
        duration: '',
        typePlan: ''
    })


    useEffect(() => {
        loadPlanTypes()
    }, [])

    const loadPlanTypes = () => {

        planService
            .getTypePlan()
            .then(({ data }) => {
                setplanTypes(data)
                const { _id: firstPlan } = data[0]
                setPlanData({ ...planData, typePlan: firstPlan })
            })
            .catch(err => console.log(err))
    }


    const handleInputChange = e => {
        let { value, name } = e.target

        if (value < 0) value = 0

        setPlanData({ ...planData, [name]: value })
    }

    const handleFormSubmit = e => {

        e.preventDefault()

        planService
            .savePlan(planData)
            .then(() => navigate('/plan'))
            .catch(err => setErrors(err.response.data.errorMessages))
    }


    return (

        <Form onSubmit={handleFormSubmit}>

            <Form.Group className="mb-3" controlId="title">
                <Form.Label>Título</Form.Label>
                <Form.Control type="text" value={planData.title} onChange={handleInputChange} name="title" />
            </Form.Group>

            <Row>
                <Col md={{ span: 6 }}>
                    <Form.Group className="mb-3" controlId="origin">
                        <Form.Label>Origen</Form.Label>
                        <Form.Control type="text" value={planData.origin} onChange={handleInputChange} name="origin" />
                    </Form.Group>
                </Col>

                <Col md={{ span: 6 }}>
                    <Form.Group className="mb-3" controlId="destination">
                        <Form.Label>Destino</Form.Label>
                        <Form.Control type="text" value={planData.destination} onChange={handleInputChange} name="destination" />
                    </Form.Group>
                </Col>
            </Row>

            <Row>
                <Col md={{ span: 6 }}>
                    <Form.Group className="mb-3" controlId="date">
                        <Form.Label>Fecha de ida</Form.Label>
                        <Form.Control type="date" value={planData.date} onChange={handleInputChange} name="date" />
                    </Form.Group>
                </Col>

                <Col md={{ span: 6 }}>
                    <Form.Group className="mb-3" controlId="duration">
                        <Form.Label>Días de duración</Form.Label>
                        <Form.Control type="number" value={planData.duration} onChange={handleInputChange} name="duration" />
                    </Form.Group>
                </Col>
            </Row>

            <Form.Group className="mb-3" controlId="typePlan">
                <Form.Label>Tipo de viaje</Form.Label>
                <Form.Select value={planData.typePlan} onChange={handleInputChange} name="typePlan">
                    {
                        planTypes?.map(elm => {
                            return <option key={elm._id} value={elm._id}>{elm.typePlan}</option>
                        })
                    }
                </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="description">
                <Form.Label>Descripción</Form.Label>
                <Form.Control as="textarea" rows={3} value={planData.description} onChange={handleInputChange} name="description" />
            </Form.Group>

            {errors.length > 0 && <FormError>{errors.map(elm => <p key={elm._id}>{elm}</p>)}</FormError>}

            <div className="d-grid">
                <Button variant="dark" type="submit">Guardar</Button>
            </div>

        </Form>
    )
}

export default PlanNewForm