import React, {useState} from 'react';
import './authorization.css'
import Input from "../../utils/input/input";
import {registration} from "../../actions/user";
const Registration = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    return (
        <div className="authorization">
            <div className="authorization__header">Регистрация</div>
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
                onClick={() => registration(email, password)}
            >
                Зарегистрироваться
            </button>
        </div>
    );
};

export default Registration;