import "../../css/footer.css"
import Button from "../components/Button.jsx";

function Footer() {

    return (
        <>
            <section>
                <div className={"container-footer"}>
                    <div>
                        <div className={"footer-info"}>
                            <p className={"footer-title"}>A inovação é codificada em cada linha. O futuro começa agora!</p>
                            <div className={"container-contact"}>
                                <div className={"contact"}>
                                    <p>Rede Social:</p>
                                    <div className={"social-network"}>
                                        <Button
                                            href={"https://www.linkedin.com/in/matheus-henrique-couto-marques/"}
                                            iconClass={"contact-icon"}
                                            iconAlt={"Linkedin Logo"}
                                            buttonText={"Matheus Marques"}
                                            iconSrc={"/assets/icons/linkedin-brands-solid.svg"}
                                            buttonClass={"btn-contact"}
                                        />
                                    </div>
                                </div>
                                <div className={"contact"}>
                                    <p>Repositório:</p>
                                    <div className={"social-network"}>
                                        <Button
                                            href={"https://github.com/DevMatheusMarques"}
                                            iconClass={"contact-icon"}
                                            iconAlt={"GitHub Logo"}
                                            buttonText={"Matheus Marques"}
                                            iconSrc={"/assets/icons/square-github-brands-solid.svg"}
                                            buttonClass={"btn-contact"}
                                        />
                                    </div>
                                </div>
                                <div className={"contact"}>
                                    <p>Meu E-mail:</p>
                                    <Button
                                        href={"https://mail.google.com/mail/?view=cm&fs=1&to=estudosfatecmhcm@gmail.com&su=Interesse%20em%20seu%20Portfólio&body=Olá%2C%20Matheus!%0A%0AGostei%20de%20seu%20portfólio%20e%20gostaria%20de%20discutir%20uma%20possível%20contratação.%20Abaixo%20estão%20algumas%20informações%20sobre%20meu%20contato%20e%20vaga%3A%0A%0A-%20Nome%3A%20[nome]%0A-%20Empresa%3A%20[nome]%0A-%20Detalhes%20da%20vaga%3A%20[descreva%20brevemente]%0A%0AAguardo%20seu%20retorno!%0A%0AAtenciosamente%2C%0A[Nome%20do%20remetente]"}
                                        buttonText={"Enviar E-mail"}
                                        iconSrc={"/assets/icons/envelope-solid.svg"}
                                        iconAlt={"Icone Whatsapp"}
                                        iconClass={"icon-wpp"}
                                        buttonClass={"btn-contact"}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Footer