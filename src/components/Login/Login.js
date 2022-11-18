import './Login.css';

import { useAuth } from "../../context/authContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export function Login() {
    const [user, setUser] = useState({ email: '', password: '' });
    const [error, setError] = useState('');

    const handleChange = ({ target: { name, value } }) =>
        setUser({ ...user, [name]: value });

    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await login(user.email, user.password);
            console.log('login');
            navigate('/');
        } catch (error) {
            if (error.code === 'auth/wrong-password' || error.code === 'auth/user-not-found') {
                setError('Contraseña o usuario incorrecto');
            }
        }

    }


    return (
        <div>
            <div className="container">

                <h2>Login</h2> {error && <p className='error'>{error}</p>}
                <form onSubmit={handleSubmit}>
                    <label htmlFor="email">Email: </label>
                    <input type="email" className="email" name="email" placeholder="email" onChange={handleChange} />
                    <br />
                    <label htmlFor="password">Password: </label>
                    <input type="password" className="pwd" name="password" placeholder="password" onChange={handleChange} />
                    <br />
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login;