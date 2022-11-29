import React, { useState } from 'react';

const LogIn = (props) => {

    const [inputUser, changeInputUser] = useState("");
    const [inputPassword, changeInputPassword] = useState("");

    const onChangeUser = (e) => {
        changeInputUser(e.target.value);
    }

    const onChangePassword = (e) => {
        changeInputPassword(e.target.value);
    }

    const click = (e) => {
        e.preventDefault();
        let found = false
        for (let i = 0; i < props.users.length; i++) {
            console.log(props.users[i]["username"]);
            if (props.users[i]["username"] === inputUser) {

                if (props.users[i]["password"] === inputPassword) {
                    found = true
                    props.updateSession(true);
                    return
                }
            }
        }
        if (!found) {
            alert("Credenciales erroneas")
        }
    }

    const clickSignIn = () => {
        props.changeLogIn(false);
    }

    return (
        <div className='row justify-content-center'>
            <div className='col-auto'>
                <h1 className='mt-5 text-center'>Inicio de sesión</h1>
                <div className='text-center mt-5'>
                    <form className='container'>
                        <div className="input-group mb-3">
                            <input value={inputUser} onChange={onChangeUser} type="text" className="form-control" placeholder="Nombre de usuario"></input>
                        </div>
                        <div className="input-group mb-4">
                            <input value={inputPassword} onChange={onChangePassword} type="password" className="form-control" placeholder="Contraseña"></input>
                        </div>
                        <div className="d-grid gap-2">
                            <button type='submit' className='btn btn-info py-3 mb-3' onClick={click}>Iniciar sesion</button>
                            <button className='btn btn-outline-info ' onClick={clickSignIn}>Registrarse</button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
}

export default LogIn;