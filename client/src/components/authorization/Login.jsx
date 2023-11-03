import React, {useState} from 'react';
import './authorization.css'
import Input from "../../utils/input/input";
import {useDispatch} from "react-redux";
import {login} from "../../actions/user";

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()
    return (
        <div className="authorization">
            <div className="authorization__header">Авторизация</div>
            <Input
                type="text"
                placeholder="Введите логин"
                value={email}
                setValue={setEmail}
            />
            <Input
                type="password"
                placeholder="Введите пароль"
                value={password}
                setValue={setPassword}

            />
            <button
                className="authorization__bth"
                onClick={ () => dispatch(login(email, password))}
            >
                Войти
            </button>
        </div>
    );
};

export default Login;