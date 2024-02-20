import './Tabela.css'

export function Tabela() {
    return (
        <div className="tabelasjuntas">
            <table className="tabela">
                <tr className="tabeladocs">
                    <th className="tabela-titulo">Documentos</th>
                    <th className="tabela-titulo beneficios">Benefícios</th>
                    <th className="tabela-titulo">Remuneração</th>
                </tr>
                <tr className="tabeladocs">
                    <td className="tabela-docs-item primeiro">CNH (tipo B, C ou E)</td>
                    <td className="tabela-docs-item beneficios">Seguros de vida, veículo e saúde</td>
                    <td className="tabela-docs-item"><b>Motorista tipo B:</b> R$2700,00/mês</td>
                </tr>
                <tr className="tabeladocs">
                    <td className="tabela-docs-item primeiro">Número de registro no RNTR-C</td>
                    <td className="tabela-docs-item beneficios">Gympass</td>
                    <td className="tabela-docs-item"><b>Motorista tipo C:</b> R$3600,00/mês</td>
                </tr>
                <tr className="tabeladocs">
                    <td className="tabela-docs-item primeiro">Certidão de nascimento</td>
                    <td className="tabela-docs-item beneficios">Férias remuneradas (30 dias)</td>
                    <td className="tabela-docs-item"><b>Motorista tipo E:</b> R$6400,00/mês</td>
                </tr>
                <tr className="tabeladocs">
                    <td className="tabela-docs-item primeiro">Carteira de vacinação</td>
                    <td className="tabela-docs-item beneficios">Vale Refeição</td>
                    <td className="tabela-docs-item"></td>
                </tr>
                <tr className="tabeladocs">
                    <td className="tabela-docs-item primeiro">Carteira de Trabalho</td>
                    <td className="tabela-docs-item beneficios"></td>
                    <td className="tabela-docs-item"></td>
                </tr>
                <tr className="tabeladocs">
                    <td className="tabela-docs-item primeiro">Exame toxicológico feito nos últimos 15 dias</td>
                    <td className="tabela-docs-item beneficios"></td>
                    <td className="tabela-docs-item"></td>
                </tr>
            </table>



        </div>

    )
}