import React, { useState } from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas'
import { Form, FloatingLabel, Button } from 'react-bootstrap'
import messageService from '../../services/message.service'
import { useNavigate } from 'react-router-dom'
import FormError from '../FormError/FormError'
import userService from '../../services/user.service'
import { AuthContext } from '../../contexts/auth.context'
import { useContext } from 'react'




const ProfilePost = () => {



    const { user: userContext } = useContext(AuthContext)

    const [user, setUser] = useState(userContext)



    const [messageData, setMessageData] = useState({
        message: '',
        conversation: '',
        owner: user._id
    })

    const navigate = useNavigate()


    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    const [errors, setErrors] = useState([])




    const handleInputChange = e => {
        let { value, name } = e.target

        setMessageData({ ...messageData, [name]: value })
    }

    const handleFormSubmit = (event) => {
        if (event.key === 'Enter') {
            saveNewMessage()
        }
    }

    const saveNewMessage = e => {

        // e.preventDefault()


        messageService
            .saveMessage(messageData)
            .then(() => navigate('/profile'))
            .catch(err => setErrors(err.response.data.errorMessages))
    }






    return (


        <>
            <Button variant="success" onClick={handleShow}>
                Mensajes de Pegar a Juan
            </Button>

            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Pegar a Juan</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>

                    <h3>Conversacion con Pepito</h3>

                    <FloatingLabel controlId="message" label="New message">
                        <Form.Control value={messageData.message} onKeyDown={handleFormSubmit} onChange={handleInputChange} name="message"
                            as="textarea"
                        />

                    </FloatingLabel>
                </Offcanvas.Body>

                {errors.length > 0 && <FormError>{errors.map(elm => <p key={elm._id}>{elm}</p>)}</FormError>}

            </Offcanvas>




            <Button variant="success" >
                Crear Conversacion
            </Button>

            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    {/* <Offcanvas.Title>Pegar a Juan</Offcanvas.Title> */}
                </Offcanvas.Header>
                {/* <Offcanvas.Body>

                    <h3>Conversacion con Pepito</h3>

                    <FloatingLabel controlId="message" label="New message">
                        <Form.Control value={messageData.message} onKeyDown={handleFormSubmit} onChange={handleInputChange} name="message"
                            as="textarea"
                        />

                    </FloatingLabel>
                </Offcanvas.Body> */}

            </Offcanvas>

        </>
    )


}

export default ProfilePost