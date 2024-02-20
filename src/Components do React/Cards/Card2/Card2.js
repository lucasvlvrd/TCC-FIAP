import rastreador from '../../../imagens/rastreador.jpg';
import './Card2.css'

export function Card2() {
    return (
        <div className='quemsomos-card card2'>
            <div className='quemsomos-card-texto linhas2'>
                <h2 className="quemsomos-card1--titulo titulo2">Rastreamento em tempo real</h2>
                <p className="quemsomos-card1--texto texto2">Acompanhe a localização do seu produto em tempo real. Todos os nossos caminhões são rastreados via satélite,
                garantindo a segurança da sua entrega.</p>
            </div>
            <img src={rastreador} className='card-imagem imagem2' alt='Rastreador'></img>
        </div>)
}