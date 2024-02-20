import card5imagem from '../../../imagens/card5.jpg';
import './Card5.css'

export function Card5() {
    return (
        <div className='quemsomos-card card2'>
            <div className='quemsomos-card-texto linhas2'>
                <h2 className="quemsomos-card1--titulo titulo2">Frota diversa e sempre disposta</h2>
                <p className="quemsomos-card1--texto texto2">Temos todos os tipos de veículos para criar o equilíbrio perfeito entre preço justo e peso da carga.
                Precisa entregar 40 camisetas? Temos nossa frota de vans te esperando. Precisa entregar ingredientes para um restaurante? Nossos caminhões refrigerados estão à sua disposição. Os mais diversos veículos atendem as mais diversas demandas dos nossos clientes.</p>
            </div>
            <img src={card5imagem} className='card-imagem imagem2' alt='Estacionamento da SP Trucks'></img>
        </div>)
}