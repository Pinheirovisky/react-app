import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// components
import { Input } from  '../../components';

// styles
import LoginStyles from './Login.styles';

const Login = () => {

    const [name, setName] = useState("Vinicius");
    const [age, setAge] = useState("22");

    return (
        <>
            <h1>Você está na página de login!</h1>
            <a href='https://google.com.br' target="_blank" rel="noreferrer">ir para o google</a>
            <Link to="/dashboard">
                Ir para a dashboard
            </Link>

            <h2>Nome: {name}</h2>
            <h2>Idade: {age}</h2>

            <LoginStyles method="POST">
                <Input name="name" value={name} setValue={setName} />
                <Input name="age" value={age} setValue={setAge} />
            </LoginStyles>
        </>
    )
}

export default Login;