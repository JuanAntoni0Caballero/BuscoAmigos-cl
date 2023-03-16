import { Spinner } from "react-bootstrap"
import './Loader.css'


const Loader = () => {

    return (
        <Spinner className="spinner" animation="grow" variant="warning" />
    )
}

export default Loader