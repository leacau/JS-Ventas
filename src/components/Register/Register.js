import { useAuth } from "../../context/authContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export function Register() {
    const [user, setUser] = useState({ email: '', password: '' });
    const [error, setError] = useState('');

    const handleChange = ({ target: { name, value } }) =>
        setUser({ ...user, [name]: value });

    const { signup } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await signup(user.email, user.password);
            navigate('/');
        } catch (error) {
            setError(error.message);
        }
    }

    return (
        <div>
            <div className="container">
                <h2>Register</h2> {error && <p>QUE ES ESO</p>}
                <form onSubmit={handleSubmit}>
                    <label htmlFor="email">Email:</label>
                    <input type="email" className="email" name="email" placeholder="email" onChange={handleChange} />
                    <br />
                    <label htmlFor="password">Password:</label>
                    <input type="password" className="pwd" name="password" placeholder="password" onChange={handleChange} />
                    <br />
                    <button type="submit">Register</button>
                </form>
            </div>
        </div>
    )
}

export default Register;