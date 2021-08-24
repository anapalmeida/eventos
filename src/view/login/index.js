import { useState } from 'react';
import {Link} from 'react-router-dom'
import firebase from "../../config/connection";
import 'firebase/auth';
import './style.css'


function Login() {

    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    const [msgStatus, setMsgStatus] = useState();

    function loginHandler(event) {

        event.preventDefault();

        firebase.auth().signInWithEmailAndPassword(email, senha)
        .then(resultado => {
            setMsgStatus('sucesso');
        }).catch(erro => {
            // alert(erro);
            setMsgStatus('falhou');
        })
    }

    return (
        <div className="login-content d-flex align-items-center justify-content-center">
            <form className="form-signin">
                <div className="text-center mb-4">
                    <h1 className="h3 mb-3 text-white font-weight-bold">Log in</h1>
                </div>
                <input onChange={(e) => setEmail(e.target.value)} type="email" id="inputEmail" className="form-control my-2" placeholder="Email" />
                <input onChange={(e) => setSenha(e.target.value)} type="password" id="inputPassword" className="form-control my-2" placeholder="Senha" />

                <button className="btn btn-login" onClick={loginHandler}>Log in</button>

                <div className="msg-login text-white text-center my-5">

                    {msgStatus === 'sucesso' && <span><strong>Wow! </strong>Você foi conectado &#129312;</span>}
                    {msgStatus === 'falhou' && <span><strong>Oops! </strong>Verifique se está tudo certo &#129300;</span>}

                    
                </div>

                <Link her="google.com" className="my-2 text-center d-block option">Recuperar a senha </Link>
                <Link to="./novo" className="mt-5 text-center d-block option">Ainda não é cadastrado? Cadastre-se</Link>
            </form>
        </div>
    );
}

export default Login;