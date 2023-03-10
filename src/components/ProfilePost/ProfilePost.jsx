import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Offcanvas from 'react-bootstrap/Offcanvas'
import { Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import messageService from '../../services/message.service'

const ProfilePost = () => {


    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)




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
                    <Form >

                        <Form.Group className="mb-3" controlId="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" name="email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="password">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control type="password" name="password" />
                        </Form.Group>
                        <Link to='/signup'>Date de alta</Link>

                        <div className="d-grid">
                            <Button variant="dark" type="submit">Acceder</Button>
                        </div>

                    </Form>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );


}

export default ProfilePost