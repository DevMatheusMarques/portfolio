import "../../css/aboutme.css"

function AboutMe() {

    return (
        <>
            <section>
                <div className={"container-apresentation"}>
                    <div className={"container-info"}>
                        <div>
                            <img src="/assets/phrase.png" alt="Foto Dev Matheus Marques" className={"phrase"}/>
                        </div>
                        <div className={"container-description"}>
                            <p className={"description"}>
                                Como desenvolvedor full stack prestes a me formar em Análise e Desenvolvimento de Sistemas, trago uma sólida experiência em tecnologias de ponta. Domínio de Java e Spring Boot no back-end para criar soluções escaláveis, além de conhecimento em PHP e Laravel para desenvolver aplicações robustas. No front-end, trabalho com React e Vue.js para construir interfaces dinâmicas e intuitivas.
                                Com proficiência em bancos de dados como MySQL e MongoDB, sei como projetar e otimizar estruturas que transformam dados em valor para o negócio. Estou em busca de uma oportunidade para aplicar meu conhecimento, aprender com os melhores e contribuir para o sucesso da sua empresa. Vamos juntos criar soluções que conectam, evoluem e transformam o futuro.
                            </p>
                            <p className={"subParagraph"}>Trabalhe comigo. Entre em contato ainda hoje!</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutMe