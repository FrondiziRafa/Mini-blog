import style from './Register.module.css';

import { useState, useEffect } from 'react'


export const Register = () => {
    const [displayName, setDisplayName] = useState("");
    const [email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("")
    const [error, setError] = useState("")

    

  return (
    <div>
        <h2>Cadastre-se para postar</h2>
        <p>Crie seu usuário e compartilhe suas histórias</p>
        <form >
            <label>
                <span>Nome:</span>
                <input 
                type="text"
                name='displayName'
                required
                placeholder='Nome do usuário'
                 />
            </label>
            <label>
                <span>e-mail:</span>
                <input 
                type="email"
                name='email'
                required
                placeholder='E-mail do usuário'
                 />
            </label>
            <label>
                <span>Senha:</span>
                <input 
                type="password"
                name='password'
                required
                placeholder='Senha'
                 />
            </label>
            <label>
                <span>Confirmação de senha:</span>
                <input 
                type="password"
                name='confirmPassword'
                required
                placeholder='confirme a sua senha'
                 />
            </label>
            <button className='btn'>Cadastrar</button>
        </form>
    </div>
  )
}
