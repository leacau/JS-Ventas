import Input from './Input';
import dataAPI from '../dataAPI';
import { useState } from 'react';

export function Home() {
    const [fs, setFs] = useState([]);
    const [filter, setFilter] = useState('');

    function handleFilterChange(e) {
        setFilter(e.target.value);
    }

    function handleClick(e) {
        e.preventDefault();
        setFs(dataAPI.filter(f => f.dni === parseInt(filter)));
    }

    return (
        <div>
            <h1>Jerárquicos Salud</h1>
            <Input
                click={handleClick}
                change={handleFilterChange}
            />

            {/* <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>DNI</Form.Label>
                    <Form.Control onChange={handleFilterChange} type="email" placeholder="Ingresa nº de DNI" />
                    <Form.Text className="text-muted">
                        Sin puntos ni espacios
                    </Form.Text>
                </Form.Group>
                <Button onClick={handleClick} variant="primary" type="button">
                    Buscar
                </Button>
            </Form> */}
            {fs.map(f =>
                <div key={f.dni}>
                    <div>{f.nombre}</div>
                    <div>{f.dni}</div>
                </div>
            )}
        </div>
    )
}