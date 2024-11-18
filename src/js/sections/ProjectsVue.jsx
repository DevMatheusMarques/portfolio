import "../../css/projects-vue.css"
import CardProject from "../components/CardProject.jsx";

function ProjectsVue() {

    return (
        <>
            <section>
                <div className={"container-projects"}>
                    <div className={"title-projects-vue"}>
                        <h1>Projetos Vue</h1>
                    </div>
                    <div className={"projects-vue"}>
                        <a href="https://devmatheusmarques-website-announcement-headset.vercel.app/">
                            <CardProject
                                title={"Site Fone A56"}
                                description={"Página de apresentação do fone de ouvido Oeste A56, da empresa Cabos do Oeste, com detalhes sobre o produto, categorias de outros itens disponíveis e informações de contato da empresa."}
                                src={"../../../public/assets/CabosOeste.png"}
                            />
                        </a>
                        <a href="https://devmatheusmarques-cookin-up.vercel.app/">
                            <CardProject
                                title={"Cookin'Up"}
                                description={"No Cookin' Up, você vai selecionando ingredientes para construir a sua lista de ingredientes. Em seguida, é possível buscar as receitas possíveis de serem feitas com os ingredientes da sua lista!"}
                                src={"../../../public/assets/CookinUp.png"}
                            />
                        </a>
                        <a href="https://devmatheusmarques-imperiohamburgueria.vercel.app/">
                            <CardProject
                                title={"Cardápio Online"}
                                description={"Cardápio digital da Império Hamburgueria, permitindo aos clientes selecionar hambúrgueres e bebidas, adicionar os itens ao carrinho e enviar o pedido diretamente para a loja via WhatsApp."}
                                src={"../../../public/assets/ImperioHamburgueria.png"}
                            />
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProjectsVue