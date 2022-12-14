import './Home.css';

import Input from '../Input/Input';
import dataAPI from '../../dataAPI';
import image from './blanco.png';
import { useAuth } from '../../context/authContext';
import { useState } from 'react';

export function Home() {
    const [fs, setFs] = useState([]);
    const [filter, setFilter] = useState('');

const {login} = useAuth()

console.log(login);


    function handleFilterChange(e) {
        setFilter(e.target.value);
    }

    function handleClick(e) {
        e.preventDefault();
        setFs(dataAPI.filter(f => f.dni === parseInt(filter)));
    }

    return (
        <div className='app-container'>
            <img src={image} className='img' alt='' />
            <div className='search'>
                <Input
                    click={handleClick}
                    change={handleFilterChange}
                />
                {fs.map(f =>
                    <div key={f.dni}>
                        <div>{f.nombre}</div>
                        <div>{f.dni}</div>
                    </div>
                )}
            </div>
        </div>
    )
}