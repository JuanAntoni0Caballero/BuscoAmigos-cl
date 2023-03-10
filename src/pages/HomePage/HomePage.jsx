import { Container } from 'react-bootstrap'
import PlanSearchForm from '../../components/PlanSearchForm/PlanSearchForm'


const HomePage = () => {

    return (
        <Container className="Home">

            <h1>Busco Amigos</h1>
            <hr />

            <PlanSearchForm />

        </Container>
    )
}

export default HomePage