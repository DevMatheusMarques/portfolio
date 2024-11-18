import "../../css/card-experience.css";

function CardExperience({
                            title = "",
                            svg = "",
                            topics = []
                        }) {
    const skills = {
        backgroundColor: "#d0c785",
        color: "#22014d",
        paddingTop: "2rem",
        paddingBottom: "2rem",
        fontWeight: "bold",
        borderRadius: "20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    };

    return (
        <div className={"card-container"}>
            <div className={"skills"}>
                <div style={skills}>
                    <img className={"icon-experience"} src={svg} alt=""/>
                    {title}
                </div>
                {topics.map((topic, index) => (
                    <div
                        className={"topics"}
                        key={index}
                        style={index === topics.length - 1 ? {padding: "2rem", border: "none"} : {}}
                    >
                        <p>{topic}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CardExperience;
