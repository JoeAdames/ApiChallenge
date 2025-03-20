import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {loginUser} from '../api/auth';
import {useAuthStore} from '../store/authStore';

export default function Login() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const login = useAuthStore((state) => state.login);
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const data = await loginUser(name, email);
            login(name, email);
            navigate('/search');
        } catch {
            alert('Login Failed!');
        }
    }


    return (
        <div>
            <div className="flex flex-col items-center">
            <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} />
            <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            <button className="mt-2 text-neutral-100 bg-neutral-950 rounded px-2 cursor-pointer" onClick={handleLogin} >Submit</button>
            </div>
        </div>
    )
}