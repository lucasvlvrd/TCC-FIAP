import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function CadastrarMotorista(){
    const voltar = useNavigate()

    //Criando as variáveis que receberão seus valores e serão enviadas, pelo Axios, ao MySQL
    const[nome, setNome] = useState('');
    const[modelo, setModelo] = useState('');
    const[placa, setPlaca] = useState('');
    const[rg, setRG] = useState('');

    //Essa função, ao ser chamada pelo formulário (onSubmit), pedirá ao Axios para que 
    //execute um Post no 
    function registrarNoBanco(event){
        event.preventDefault();
        axios.post('http://localhost:8080/cadastrar', {nome, modelo, placa, rg})
        .then(res =>{
            voltar('/') //voltar pro menu, dica que peguei no stack overflow
        }).catch(defeito => console.log(defeito))
    }

    //Criando a página do formulário no qual será cadastrado o motorista
    return(
        <div className='FormCadastro-container'>
            <div className="div-formulario">
            <h3 className="titulo-form">Registrar novo motorista</h3>
                <form className="FormCadastro" onSubmit={registrarNoBanco}>
                <div className="input-form">
                    <label htmlFor="" className="label-form">Nome</label>
                    <input type="text" placeholder="Nome do motorista" className="input-item" onChange={item => setNome(item.target.value)} required
                    minLength={5} maxLength={80}></input>
                </div>
                <div className="input-form">
                    <label htmlFor="" className="label-form">Modelo</label>
                    <input type="text" placeholder="Modelo do caminhão" className="input-item" onChange={item => setModelo(item.target.value)}required
                    minLength={5} maxLength={30}></input>
                </div>
                <div className="input-form">
                    <label htmlFor="" className="label-form">Placa (XXX-9999)</label>
                    <input type="text" placeholder="Placa do caminhão" className="input-item" onChange={item => setPlaca(item.target.value)}required
                    minLength={8} maxLength={9}></input>
                </div>
                <div className="input-form">
                    <label htmlFor="" className="label-form">RG (9 dígitos)</label>
                    <input type="text" placeholder="RG do motorista" className="input-item"  onChange={item => setRG(item.target.value)}required
                    minLength={9} maxLength={9}></input>
                </div>
                <button className="botao-form">Cadastrar</button>
                </form>
            </div>
        </div>
    )
};

export default CadastrarMotorista;