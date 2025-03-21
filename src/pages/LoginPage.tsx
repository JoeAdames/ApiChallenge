import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {loginUser} from '../api/auth';
import {useAuthStore} from '../store/authStore';
import { Input } from "@/components/ui/input"; 
import { Button } from "@/components/ui/button";

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
            <div className="flex flex-col items-center m-10 justify-evenly content-evenly">
            <Input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} className="m-1"/>
            <Input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} className="m-1"/>
            <Button className="mt-2 text-neutral-100 bg-neutral-950 rounded px-2 cursor-pointer" onClick={handleLogin} >Submit</Button>
            </div>
        </div>
    )
}