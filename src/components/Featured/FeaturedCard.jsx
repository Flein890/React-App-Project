import { CardStyles } from "./FeaturedStyles"

function FeaturedCard({image, name, slogan}) {
  return (
    <CardStyles>
        <img src={image} alt={name} />
        <div>
            <h3>{name}</h3>
            <p>{slogan}</p>
        </div>
    </CardStyles>
  )
}

export default FeaturedCard