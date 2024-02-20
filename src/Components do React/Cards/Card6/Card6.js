import atendimento from '../../../imagens/atendimento.jpg';
import './Card6.css'

export function Card6() {
    return (
        <div className='quemsomos-card'>
            <div className='quemsomos-card-texto'>
                <h2 className="quemsomos-card1--titulo">Fale conosco agora mesmo</h2>
                <p className="quemsomos-card1--texto">Nosso atendimento 24h permite que nossa contratação permaneça sempre eficiente, e nossos clientes
                sempre tenham seus pedidos atendidos. Nos envie uma mensagem para sanar suas dúvidas, ou nos contrate e comece a entregar seus produtos para toda São Paulo em menos de um dia.</p>
            </div>
            <img src={atendimento} className='card-imagem card6imagem' alt='Atendimento da SPTrucks'></img>
        </div>)
}