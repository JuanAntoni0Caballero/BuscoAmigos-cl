import { Link } from 'react-router-dom'
import Toast from 'react-bootstrap/Toast'
import './Footer.css'
import { useState } from 'react'
import { Modal } from 'react-bootstrap'
import Gift from '../Gift/Gift'


const Footer = () => {

    const [show, setShow] = useState(false)

    const fireFinalActions = () => {
        setShow(false)
    }


    return (
        <>
            <footer className='footer'>
                <hr />

                <Link to="/aboutUs">
                    <h5 className='text-center'>Juan Antonio Caballero y Cristina Gutiérrez</h5>
                </Link>

                <Link onClick={() => setShow(true)}>
                    <p className='text-center'>¡Regalitos para todos!</p>
                </Link>
            </footer>

            <Modal show={show} onHide={() => setShow(false)}>
                <Modal.Header closeButton> <Modal.Title>Gracias grupo 🧡</Modal.Title></Modal.Header>
                <Modal.Body>
                    <Gift fireFinalActions={fireFinalActions} />
                </Modal.Body>
            </Modal>
        </>
    )

}


export default Footer
