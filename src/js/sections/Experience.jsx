import "../../css/experience.css"
import CardExperience from "../components/CardExperience.jsx";

function Experience() {
    const titleSkills = "Habilidades";

    const titleServices = "Serviços";

    const svgSkills = "../../../public/assets/icons/gears-solid.svg";

    const svgServices = "../../../public/assets/icons/code-solid.svg";

    const skills = [
        "Domínio de Tecnologias Frontend",
        "Habilidades em Backend",
        "Gerenciamento de Banco de Dados",
        "Conhecimento em Metodologias Ágeis e Colaboração",
        "Conhecimento em Uso de Containers",
    ];

    const services = [
        "Desenvolvimento de Aplicações Web",
        "Integração de APIs e Serviços de Terceiros",
        "Criação e Gerenciamento de Bancos de Dados",
        "Manutenção e Atualização de Sistemas",
        "Criação de Sistemas de Autenticação e Autorização",
    ];

    return (
        <>
            <section>
                <div className={"container-experience"}>
                    <div className={"title-experience"}>
                        <h1>Áreas de Experiência</h1>
                    </div>
                    <div className={"experiences"}>
                        <CardExperience title={titleSkills} svg={svgSkills} topics={skills}/>
                        <CardExperience title={titleServices} svg={svgServices} topics={services}/>
                    </div>

                </div>
            </section>

        </>
    )
}

export default Experience