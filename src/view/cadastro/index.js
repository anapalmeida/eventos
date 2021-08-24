import { useState } from 'react';
import firebase from "../../config/connection";
import 'firebase/auth';

import './style.css'

function Cadastro() {

    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    const [msgStatus, setMsgStatus] = useState();
    const [msg, setMsg] = useState();
    const [carregando, setCarregando] = useState();

    function cadastroHandler(event) {
        event.preventDefault();

        setCarregando(1);

        setMsgStatus(null);

        if (!email || !senha) {
            setCarregando(0);
            setMsgStatus('falhou');
            setMsg('Você precisa cadastrar o email e a senha.');
            return;
        } 

        firebase.auth().createUserWithEmailAndPassword(email, senha)
        .then(resultado => {
            setCarregando(0);
            setMsgStatus('sucesso');
        }).catch(erro => {
            setCarregando(0);
            setMsgStatus('falhou');
            switch(erro.message) {
                case 'Password should be at least 6 characters':
                    setMsg('A senha precisa ter 6 ou mais caracteres');
                    break;
                case 'The email address is already in use by another account.':
                    setMsg('Email já cadastrado');
                    break;
                case 'The email address is badly formatted.':
                    setMsg('Formato do email inválido');
                    break;
                default:
                setMsg('Não foi possível cadastrar');
                break
            }           
    
        })
    }

    return(
        <div className="form-cadastro">
            <div className="text-center form-login mx-auto mt-5">
                <h3 className="mb-3 text-black font-weight-bold">Cadastre-se</h3>
                <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control my-2" placeholder="Email" />
                <input onChange={(e) => setSenha(e.target.value)} type="password" className="form-control my-2" placeholder="Senha" />


                {
                    carregando ? <div class="spinner-border text-primary " role="status"><span class="visually-hidden">Loading...</span></div>
                    : <button onClick={cadastroHandler} className="btn btn-block btn-lg mt-3 mb-5 btn-cadastro">Cadastrar</button>
                }
                
                <div className="msg-login text-black text-center my-5">
                    {msgStatus === 'sucesso' && <span><strong>Wow! </strong>Você foi cadastrado &#129312;</span>}
                    {msgStatus === 'falhou' && <span><strong>Oops! </strong>{msg} &#129300;</span>}
                </div>
            </div>
        </div>
    )
}

export default Cadastro;