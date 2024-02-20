import { Card4 } from '../../Components do React/Cards/Card4/Card4';
import { Card7 } from '../../Components do React/Cards/Card7/Card7';
import { Bemvindo } from './Bemvindo/Bemvindo';
import { Tabela } from './Tabela/Tabela';
import './sejamotorista.css'

function SejaMotorista() {
    return (
        <>
            <Bemvindo></Bemvindo>


            <div className='sejamotorista'>
                <Tabela></Tabela>
            </div>

            <Card4></Card4>

            <Card7></Card7>

            <div className='contratando'>
                <h2 className='contratando-titulo'>No momento, não estamos contratando</h2>
                <p className='contratando-texto'>Nossa equipe já está preenchida, mas deixe seu currículo no nosso email.<br /> Assim que uma vaga abrir, você poderá ser contratado ;)</p>
            </div>

        </>
    )
}



export default SejaMotorista;