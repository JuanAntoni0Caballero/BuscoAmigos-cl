import { Container } from "react-bootstrap"
import('./ContactPage.css')



const ContactPage = () => {

    return (
        <Container>
            <h1>¿Quiénes somos y qué hacemos?</h1>
            <hr />
            <div className="about">
                <h5>
                    ¡Bienvenidos a nuestra plataforma de creación de planes! Somos dos amigos con muchas ganas de explorar
                    el mundo y vivir nuevas experiencias, y hemos creado esta web para que otros usuarios
                    puedan hacer lo mismo. Aquí podrás encontrar y unirte a planes de todo tipo, desde deportes
                    y actividades al aire libre hasta planes culturales, de estudio, fiesta, playa y mucho más.
                    <hr />

                    ¿Cómo funciona? Es muy sencillo. En nuestra plataforma, los usuarios pueden crear planes
                    para cualquier tipo de actividad o evento que deseen organizar, y establecer los detalles como la fecha,
                    hora, lugar y duración del plan. Una vez que se ha creado un plan, otros usuarios pueden buscarlo
                    en la plataforma y unirse a él si les interesa. De esta manera, se pueden formar grupos de personas
                    que compartan intereses y objetivos comunes en cuanto a su tiempo libre y entretenimiento.
                    <hr />

                    Como creadores de esta plataforma, nuestra prioridad es garantizar la mejor experiencia posible
                    a nuestros usuarios. Por eso, nos aseguramos de que la plataforma sea fácil de usar y que todos
                    los planes publicados sean de alta calidad y ofrecer herramientas para que los usuarios puedan
                    comunicarse y coordinar los detalles de cada plan de manera sencilla y eficiente.
                    <hr />

                    Únete a nuestra comunidad y descubre nuevas formas de divertirte, aprender y conectarte con gente
                    interesante. ¡Te esperamos en nuestra plataforma de creación de planes!
                </h5>

                <img src="../../../../images/fotito.jpeg" alt="" />

            </div>
        </Container >
    )
}

export default ContactPage