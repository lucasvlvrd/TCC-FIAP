import cidade from '../../../imagens/cidade.jpg';
import './Card4.css'

export function Card4() {
    return (
        <div className='quemsomos-card'>
            <div className='quemsomos-card-texto'>
                <h2 className="quemsomos-card1--titulo titulo4">Dirija com todo o conforto</h2>
                <p className="quemsomos-card1--texto texto4">Nossa frota de veículos busca não só uma boa performance para você não ter dor de cabeça na estrada,
                mas também o máximo de conforto para seu corpo. Com assentos ergonômicos equipados com massageadores, você nunca se sentirá fatigado.</p>
            </div>
            <img src={cidade} className='card-imagem imagem4' alt='Nossos caminhoneiros realizando uma entrega na cidade'></img>
        </div>
        )
    }