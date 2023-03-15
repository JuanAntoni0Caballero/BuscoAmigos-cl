import { useEffect, useState } from "react"
import { Container, Row, Col, Form, Button } from "react-bootstrap"
import { Link, useNavigate, useParams } from 'react-router-dom'
import planService from "../../services/plan.service"
import uploadServices from "../../services/upload.service"
import FormError from "../FormError/FormError"


const PlanEditForm = ({ setShowEditPlanModal }) => {

    const [plan, setPlan] = useState({
        title: '',
        description: '',
        origin: '',
        destination: '',
        date: '',
        duration: '',
        typePlan: '',
        image: ''
    })
    const [planTypes, setplanTypes] = useState(null)
    const [errors, setErrors] = useState([])
    const [loadinImage, setLoadingImage] = useState(false)

    const navigate = useNavigate()

    const { plan_id } = useParams()


    useEffect(() => {
        loadPlanTypes()
        loadPlanData()
    }, [])

    const handleInputChange = e => {
        let { value, name } = e.target

        if (value < 0) value = 0

        setPlan({ ...plan, [name]: value })
    }

    const handleFormSubmit = e => {

        e.preventDefault()

        planService
            .editPlan(plan_id, plan)
            .then(() => setShowEditPlanModal(false))
            .catch(err => setErrors(err.response.data.errorMessages))
    }

    const loadPlanTypes = () => {

        planService
            .getTypePlan()
            .then(type => setplanTypes(type.data))
            .catch(err => console.log(err))
    }

    const loadPlanData = () => {

        planService
            .getOnePlan(plan_id)
            .then(({ data }) => setPlan(data))
            .catch(err => console.log(err))
    }

    const handleFileUpload = e => {

        setLoadingImage(true)

        const formData = new FormData()
        formData.append('imageData', e.target.files[0])

        uploadServices
            .uploadimage(formData)
            .then(({ data }) => {
                setPlan({ ...plan, image: data.cloudinary_url })
                setLoadingImage(false)
            })
            .catch(err => {
                console.log(err)
                setLoadingImage(false)
            })
    }


    return (

        <Container>

            <Form onSubmit={handleFormSubmit}>

                <img src={plan.image} alt="Image" />

                <Form.Group className="mb-3" controlId="title">
                    <Form.Label>Título</Form.Label>
                    <Form.Control type="text" value={plan.title} onChange={handleInputChange} name="title" />
                </Form.Group>

                <Row>
                    <Col md={{ span: 6 }}>
                        <Form.Group className="mb-3" controlId="origin">
                            <Form.Label>Origen</Form.Label>
                            <Form.Control type="text" value={plan.origin} onChange={handleInputChange} name="origin" />
                        </Form.Group>
                    </Col>

                    <Col md={{ span: 6 }}>
                        <Form.Group className="mb-3" controlId="destination">
                            <Form.Label>Destino</Form.Label>
                            <Form.Control type="text" value={plan.destination} onChange={handleInputChange} name="destination" />
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                    <Col md={{ span: 6 }}>
                        <Form.Group className="mb-3" controlId="date">
                            <Form.Label>Fecha de ida</Form.Label>
                            <Form.Control type="date" value={plan.date} onChange={handleInputChange} name="date" />
                        </Form.Group>
                    </Col>

                    <Col md={{ span: 6 }}>
                        <Form.Group className="mb-3" controlId="duration">
                            <Form.Label>Noches</Form.Label>
                            <Form.Control type="number" value={plan.duration} onChange={handleInputChange} name="duration" />
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                    <Col md={{ span: 6 }}>
                        <Form.Group className="mb-3" controlId="typePlan">
                            <Form.Label>Tipo de viaje</Form.Label>
                            <Form.Select value={plan.typePlan} onChange={handleInputChange} name="typePlan">
                                {
                                    planTypes?.map(elm => {
                                        return <option key={elm._id} value={elm._id}>{elm.typePlan}</option>
                                    })
                                }
                            </Form.Select>
                        </Form.Group>
                    </Col>

                    <Col md={{ span: 6 }}>
                        <Form.Group className="mb-3" controlId="image">
                            <Form.Label>Imagen</Form.Label>
                            <Form.Control type="file" onChange={handleFileUpload} />
                        </Form.Group>
                    </Col>
                </Row>

                <Form.Group className="mb-3" controlId="description">
                    <Form.Label>Descripción</Form.Label>
                    <Form.Control as="textarea" rows={3} value={plan.description} onChange={handleInputChange} name="description" />
                </Form.Group>

                {errors.length > 0 && <FormError>{errors.map(elm => <p key={elm._id}>{elm}</p>)}</FormError>}

                <div className="d-grid">
                    <Button variant="dark" type="submit" disabled={loadinImage}>{loadinImage ? 'Cargando imagen...' : 'Guardar cambios'}</Button>
                </div>

                <div className="d-grid">
                    <Button as="figure" variant="dark" onClick={() => setShowEditPlanModal(false)}>Volver</Button>
                </div>

            </Form>



        </Container >




    )
}

export default PlanEditForm