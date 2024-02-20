import { Link } from 'react-router-dom';
import logo from '../../imagens/caminhaologo.png';
import '../Header/header.css';


function HeaderSPT() {
    return (
        <header className='header'>
            <div className="menu-cima">
                <Link to='/quemsomos' className="titulo"><img src={logo} className="imagem-logo" alt='Logo da SPTrucks'/>SP Trucks</Link>

                <Link to='/quemsomos' className="menu-escolha">Contrate nossos serviços</Link>

                <Link to='/sejamotorista' className="menu-escolha">Seja nosso motorista</Link>

                <Link to='/' className="menu-escolha">Motoristas CRUD</Link>
            </div>

        </header>
    )
}

export default HeaderSPT;