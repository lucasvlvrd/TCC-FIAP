import seguro from '../../../imagens/seguro.jpg';
import BB from '../../../imagens/logos/BBseguros.png';
import porto from '../../../imagens/logos/porto.png';
import tokio from '../../../imagens/logos/tokiomarine.png';
import './Card7.css'
import '../Card2/Card2.css'

export function Card7() {
    return (
        <div className='quemsomos-card card2 card7'>
            <div className='quemsomos-card-texto linhas2 card7div'>
                <div className='card7-texto'>
                    <h2 className="quemsomos-card1--titulo titulo2">Os melhores seguros do Brasil</h2>
                    <p className="quemsomos-card1--texto texto2">Nós trabalhamos em parceria com as maiores seguradoras do Brasil a fim de garantir
                        os melhores planos de saúde para nossos motoristas, e os melhores seguros para a nossa frota de veículos. Você terá cuidados como academia grátis,
                        massagens cinco vezes por mês, sessões de quiropraxia, entre outros. Nosso compromisso não é só para com o cliente, é também para com nossos motoristas.</p>
                </div>

                <ul className='lista-logos'>
                    <li><img src={BB} className='lista-logos-item' BB></img></li>
                    <li><img src={porto} className='lista-logos-item PORTO'></img></li>
                    <li><img src={tokio} className='lista-logos-item TOKIO'></img></li>
                </ul>
            </div>
            <img src={seguro} className='card-imagem imagem7' alt='Pessoas se cumprimentando'></img>
        </div>
    )
}

