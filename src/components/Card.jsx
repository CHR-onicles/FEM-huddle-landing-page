import { StyledCard } from "./styles/Card.styled"

const Card = ({id, title, body, image}) => {
    return (
        <StyledCard>
            <div className="text-content">
                <h2>{title}</h2>
                <p>{body}</p>
            </div>
            <div className="img-wrapper">
                <img src={image} alt={title} />
            </div>
        </StyledCard>
    )
}

export default Card
