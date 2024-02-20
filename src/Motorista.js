import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'



function Motorista() {
    const [motorista, setMotorista] = useState([])
    useEffect(() => {
        axios.get('http://localhost:8080/')
            .then(res => setMotorista(res.data))
            .catch(err => console.log(err))
    }, [])

    const excluirMotorista = async (id) => {
        try {
            await axios.delete('http://localhost:8080/motorista/' + id)
            window.location.reload() // Atualizar a página após excluir, facilitando a visualização do usuário
        } catch (e) {
            console.log(e + 'Houve algum erro na aplicação ou no banco de dados.')
        }
    }

    return (
        <div className='div-principal'>
                    <p className='anuncio'>**Essa não é uma página principal do site acessível ao cliente,<br/>
                    ela apenas aparece no header para facilitar  <br/> o acesso do professor.</p>
            <div className='div-secundaria'>
                <h2 className='titulo-card'>Menu de funcionários</h2>
                <Link to="/cadastrar" className="botao-cadastrar"><span className="material-symbols-outlined">
                    stylus
                </span>Cadastrar Motorista</Link>
                <table className='lista-motoristas'>
                    <thead>
                        <tr className='container-placeholders'>
                            <th className='placeholders ph-nome'>Nome</th>
                            <th className='placeholders ph-modelo'>Modelo</th>
                            <th className='placeholders ph-placa'>Placa</th>
                            <th className='placeholders ph-rg'>RG</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            motorista.map((valor, chave) => (
                                <tr key={chave}>
                                    <td className='info-motorista ph-nome'>{valor.nome}</td>
                                    <td className='info-motorista ph-modelo'>{valor.modelo}</td>
                                    <td className='info-motorista ph-placa'>{valor.placa}</td>
                                    <td className='info-motorista ph-rg'>{valor.RG}</td>

                                    <td>
                                        <Link to={`editar/${valor.id}`} className='botao-editar'><span title='Editar motorista' className="material-symbols-outlined editar-span">
                                            edit_square
                                        </span>
                                        </Link>
                                        <button onClick={executar => excluirMotorista(valor.id)} className='botao-excluir' title='Excluir motorista'>
                                            <span className="material-symbols-outlined excluir-span">
                                                person_remove
                                            </span>
                                        </button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Motorista;