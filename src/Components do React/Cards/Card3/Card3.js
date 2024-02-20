import carga from '../../../imagens/carga.jpg';
import './Card3.css'

export function Card3() {
    return (
        <div className='quemsomos-card'>
            <div className='quemsomos-card-texto'>
                <h2 className="quemsomos-card1--titulo">Contratação Rápida</h2>
                <p className="quemsomos-card1--texto">Com nosso processo de contratação totalmente digital, você pode começar a trabalhar com nossos motoristas em menos de 12 horas, e as primeiras entregas são concluídas em até 36 horas após a contratação.</p>
            </div>
            <img src={carga} className='card-imagem card3imagem' alt='Estacionamento da SP Trucks'></img>
        </div>)
}