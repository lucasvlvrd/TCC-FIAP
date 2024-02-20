import './footer.css';
import whatsapp from '../../imagens/whatsapp.png';
import gmail from '../../imagens/gmail.png';
import insta from '../../imagens/instagram.png';

function Footer() {
    return (
        <footer className="footer-container">

            <div className='convite'>
                <h2 className='convite-titulo'>Quer fazer parte da família SPTrucks?</h2>
                <p className='convite-texto'>Envie-nos uma mensagem nos nossos meios de contato abaixo!</p>
            </div>
            <div>
                <ul className='lista-contato'>
                    <li className='lista-contato-item'><img src={whatsapp} className='footer-logos' alt='Logo do whatsapp'></img>+55 11 90000-0000</li>

                    <li className='lista-contato-item'><img src={gmail} className='footer-logos' alt='Logo do Gmail'></img>sptruckscontato@gmail.com</li>
                    <li className='lista-contato-item'><img src={insta} className='footer-logos' alt='Logo do Instagram'></img>@sptrucks</li>
                </ul>
            </div>

            <div>
                <ul className='lista-contato informacoes'>
                    <li className='lista-contato-item informacoes-item'><span className="material-symbols-outlined span">
                        gavel
                    </span>CNPJ: XX.XXX.XXX/0001-XX</li>
                    <li className='lista-contato-item informacoes-item'><span className="material-symbols-outlined span">
                        location_on
                    </span>Avenida das Maçãs, 3714 - Osasco - São Paulo</li>

                </ul>
            </div>
        </footer>
    )
}

export default Footer;