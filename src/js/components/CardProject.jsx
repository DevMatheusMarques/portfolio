import "../../css/card-project.css"

function CardProject({ title, description, src }) {

    return (
        <>
            <section>
                <div className={"container-card"}>
                    <div>
                        <img className={"card-image"} src={src} alt=""/>
                    </div>
                    <div className={"card-text"}>
                        <p className={"card-title"}>{title}</p>
                        <p className={"card-description"}>{description}</p>
                    </div>

                </div>
            </section>
        </>
    )
}

export default CardProject