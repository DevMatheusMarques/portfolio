import "../../css/projects-react.css"
import CardProject from "../components/CardProject.jsx";

function ProjectsReact() {

    return (
        <>
            <section>
                <div className={"container-projects"}>
                    <div className={"title-projects-react"}>
                        <h1>Projetos React</h1>
                    </div>
                    <div className={"projects-react"}>
                        <a href="https://devmatheusmarques-movies-lib.vercel.app/">
                            <CardProject
                                title={"Movies Lib"}
                                description={"Uma biblioteca de filmes que utiliza uma API para exibir uma ampla variedade de títulos, permitindo visualizar detalhes de cada filme e realizar buscas por títulos específicos para obter informações desejadas."}
                                src={"/assets/MoviesLib.png"}
                            />
                        </a>
                        <a href="https://devmatheusmarques-controle-financeiro.vercel.app/">
                            <CardProject
                                title={"App Controle Financeiro"}
                                description={"Aplicação web que permite armazenar dados na localStorage, possibilitando o registro de entradas e saídas financeiras para facilitar o gerenciamento de despesas e manter um controle financeiro eficiente."}
                                src={"/assets/AppFinancas.png"}
                            />
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProjectsReact