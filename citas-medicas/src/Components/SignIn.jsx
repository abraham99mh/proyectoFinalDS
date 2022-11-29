import React, { useState } from 'react';

const SignIn = (props) => {

    const [inputUser, changeInputUser] = useState("");
    const [inputPassword, changeInputPassword] = useState("");
    const [inputEmail, changeEmail] = useState("");

    const onChangeUser = (e) => {
        changeInputUser(e.target.value);
    }

    const onChangePassword = (e) => {
        changeInputPassword(e.target.value);
    }

    const onChangeEmail = (e) => {
        changeEmail(e.target.value);
    }


    const click = (e) => {
        e.preventDefault();

        if (!inputUser) {
            alert("Introduzca un nombre de usuario");
            return
        }
        if (!inputPassword) {
            alert("Introduzca una constraseña");
            return
        }
        if (!inputEmail) {
            alert("Introduzca un correo");
            return
        }
        let found = false
        for (let i = 0; i < props.users.length; i++) {
            if (props.users[i]["username"] === inputUser) {
                found = true
                alert("Usuario ya registrado")
                return
            }
            if (props.users[i]["email"] === inputEmail) {
                found = true
                alert("Correo ya registrado")
                return
            }
        }
        console.log(found);
        if (!found) {
            console.log("Credenciales correctas");
            props.updateSession(true);
        }
    }

    const clickSignIn = () => {
        props.changeLogIn(true);
    }

    return (
        <div className='row justify-content-center'>
            <div className='col-auto'>
                <h1 className='mt-5 text-center'>Registro</h1>
                <div className='text-center mt-5'>
                    <form className='container'>
                        <div className="input-group mb-3">
                            <input value={inputUser} onChange={onChangeUser} type="text" className="form-control" placeholder="Nombre de usuario"></input>
                        </div>
                        <div className="input-group mb-3">
                            <input value={inputPassword} onChange={onChangePassword} type="password" className="form-control" placeholder="Contraseña"></input>
                        </div>
                        <div className="input-group mb-4">
                            <input value={inputEmail} onChange={onChangeEmail} type="email" className="form-control" placeholder="Correo"></input>
                        </div>
                        <div className="d-grid gap-2">
                            <button type='submit' className='btn btn-info py-3 mb-3' onClick={click}>Registrarse</button>
                            <button className='btn btn-outline-info ' onClick={clickSignIn}>Iniciar sesión</button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
}

export default SignIn;