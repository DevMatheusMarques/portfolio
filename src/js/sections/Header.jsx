import "../../css/header.css"
import Button from "../components/Button.jsx";

function Header() {

    return (
        <>
            <section>
                <div className={"main-container"}>
                    <div className={"container-logo"}>
                        <img src="/assets/logo2.png" alt="Logo Dev Matheus" className={"logo"}/>
                    </div>
                    <header className={"container-header"}>
                        <div className={"container-information"}>
                            <div className={"container-title"}>
                                <span className={"title"}>Matheus Marques</span>
                                <span className={"subtitle"}>Programador Web FullStack</span>
                            </div>
                            <div>
                                <Button
                                    href={"https://api.whatsapp.com/send/?phone=18981886018"}
                                    buttonText={"Fale comigo"}
                                    iconSrc={"/assets/icons/whatsapp-brands-solid.svg"}
                                    iconAlt={"Icone Whatsapp"}
                                    iconClass={"icon-wpp"}
                                    buttonClass={"btn-contact-wpp"}/>
                            </div>
                        </div>
                        <div>
                            <img src="/assets/my-photo.png" alt="Foto Dev Matheus Marques" className={"photo"}/>
                        </div>
                    </header>
                </div>
            </section>
        </>
    )
}

export default Header
