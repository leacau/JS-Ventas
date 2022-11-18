import './Input.css';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { NavLink } from 'react-router-dom';

function Input(props) {
    return (
        <div>
            <Form className='form-container'>
                <Form.Group className="mb-3 form-input" controlId="formBasicEmail">
                    {/* <Form.Label>DNI</Form.Label> */}
                    <Form.Control onChange={props.change} type="email" placeholder="Ingresa nº de DNI" />
                    <Form.Text className="text-muted">
                        Sin puntos ni espacios
                    </Form.Text>
                </Form.Group>
                {/* <NavLink to={'/fs'}> */}
                <Button onClick={props.click} variant="primary" className="btn-buscar" type="button">
                    Buscar
                </Button>
                {/* </NavLink>  */}
            </Form>
        </div>
    )
}

export default Input
