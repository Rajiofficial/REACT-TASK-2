import './Cardcomponent.css'
function CardComponent({name,description,picture,price}){
    return(
        <div classname="csss">

        <img src={picture} alt={name} classname="imgdesign"/>

        <div classname="content">
        <h2>{name}</h2>
        <h4>{description}</h4>
        <h2>{price}</h2>
        <button>add to cart</button>
        </div>
        {<br></br>}
        </div>
    )}

    export default CardComponent