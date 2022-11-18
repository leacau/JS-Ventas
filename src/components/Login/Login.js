import { useAuth } from "../../context/authContext";
import { useState } from "react";

export function Login() {
    const [user, setUser] = useState({ email: '', password: '' });

    const handleChange = ({ target: { name, value } }) =>
        setUser({ ...user, [name]: value });

    const { signup } = useAuth();

    const handleSubmit = (e) => {
        e.preventDefault();
        signup(user.email, user.password);
    }

    return (
        <div>
            <div className="container">
                <h2>login</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="email">Email:</label>
                    <input type="text" className="email" name="email" placeholder="email" onChange={handleChange} />
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

export default Login;