import caminhoes from '../../../imagens/caminhoes.jpg';
import './card1.css'

export function Card1() {
    return (
        <div className='quemsomos-card'>
            <div className='quemsomos-card-texto'>
                <h2 className="quemsomos-card1--titulo">Transporte seguro e descomplicado</h2>
                <p className="quemsomos-card1--texto">Realizamos transportes de todos os tipos: cargas pesadas, mudanças,
                    entregas a domicílio. Se você tem o produto, mas não os veículos, nós estamos aqui para te ajudar.</p>
            </div>
            <img src={caminhoes} className='card-imagem' alt='Estacionamento da SP Trucks'></img>
        </div>

    )
}
