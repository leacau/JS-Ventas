import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Input(props) {
    return (
        <div>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>DNI</Form.Label>
                    <Form.Control onChange={props.change} type="email" placeholder="Ingresa nº de DNI" />
                    <Form.Text className="text-muted">
                        Sin puntos ni espacios
                    </Form.Text>
                </Form.Group>
                <Button onClick={props.click} variant="primary" type="button">
                    Buscar
                </Button>
            </Form>
        </div>
    )
}

export default Input
