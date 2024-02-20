import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

//Depois do Create, é basicamente copiar e colar o Create e alterar as variáveis para satisfazer
//os requisitos.

function EditarMotorista(){
    const voltar = useNavigate()

    //Criando as variáveis que receberão seus valores e serão enviadas, pelo Axios, ao MySQL
    const[nome, setNome] = useState('');
    const[modelo, setModelo] = useState('');
    const[placa, setPlaca] = useState('');
    const[rg, setRG] = useState('');

    const {id} = useParams()

    //Essa função, ao ser chamada pelo formulário (onSubmit), pedirá ao Axios para que 
    //execute um Post no 
    function registrarNoBanco(event){
        event.preventDefault();
        axios.put('http://localhost:8080/editar/'+id, {nome, modelo, placa, rg})
        .then(res =>{
            voltar('/') //voltar pro menu
        }).catch(defeito => console.log(defeito))
    }

    //Criando a página do formulário no qual será cadastrado o motorista
    return(
        <div className='FormCadastro-container'>
            <div className="div-formulario">
            <h3 className="titulo-form">Editar Motorista</h3>
                <form className="FormCadastro" onSubmit={registrarNoBanco}>
                <div className="input-form">
                    <label htmlFor="" className="label-form">Nome</label>
                    <input type="text"
                     placeholder="Nome"
                      className="input-item"
                       onChange={item => setNome(item.target.value)} required
                       minLength={7}>
                       </input>
                </div>
                <div className="input-form">
                    <label htmlFor="" className="label-form">Modelo</label>
                    <input type="text" placeholder="Modelo do caminhão" className="input-item" onChange={item => setModelo(item.target.value)}required
                    minLength={5}></input>
                </div>
                <div className="input-form">
                    <label htmlFor="" className="label-form">Placa (Formato: XXX-9999)</label>
                    <input type="text" placeholder="Placa do caminhão" className="input-item" onChange={item => setPlaca(item.target.value)}required
                    minLength={8} maxLength={8}></input>
                </div>
                <div className="input-form">
                    <label htmlFor="" className="label-form">RG (11111111-1)</label>
                    <input type="text" placeholder="RG do motorista" className="input-item"  onChange={item => setRG(item.target.value)}required
                    minLength={10} maxLength={10}></input>
                </div>
                <button className="botao-form">Finalizar edição</button>
                </form>
            </div>
        </div>
    )
};

export default EditarMotorista;