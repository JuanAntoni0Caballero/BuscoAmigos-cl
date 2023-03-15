import { Link } from 'react-router-dom'
import { Nav } from 'react-bootstrap'
import './Footer.css'


const Footer = () => {

    return (

        <footer>
            <hr />
            <h3>Juan Antoño y Cris</h3>
            <Link to="/contact">
                <Nav.Link as='span'>Contacto</Nav.Link>
            </Link>

            <Link to="/memes">
                <Nav.Link as='span'>Regalos</Nav.Link>
            </Link>
        </footer>

    )

}


export default Footer
