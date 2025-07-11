export default function DrinkCard({ drink }) {

    const { name, ingredients, description, img, index } = drink;

    console.log(drink);
 
    return (
        <div className="drink-card w-80 h-120 mt-4 relative p-5 "
        style={{marginTop: `${(index % 2) * 100}px`}}>
            <div className="drink-card-image absolute w-80 h-120 "
            style={{
                backgroundImage: `radial-gradient(circle at 50%,rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 1)),
                linear-gradient(rgb(0 0 0 / 1), rgb(0 0 0 / 0), rgb(0 0 0 / 0), rgb(0 0 0 / 1)),
                linear-gradient(90deg, rgb(0 0 0 / 1), rgb(0 0 0 / 0), rgb(0 0 0 / 0), rgb(0 0 0 / 0), rgb(0 0 0 / 0), rgb(0 0 0 / 1)),
                url('${img}')`,
                backgroundSize: `cover`,
                backgroundRepeat: `no-repeat, no-repeat`,
                backgroundPosition: `center, center`,
            }}>
            </div>
            <div className="border-container absolute top-0 left-0 w-32.5 h-32.5 border-l-[2px] border-t-[2px] border-gold-1 "></div>
            <div className="border-container absolute top-90 left-50 w-60 h-60 font-c-source text-gold-4">
                <p className="text-lg pl-2 mb-2 ">{name}</p>
                <p className="text-sm pl-2 mb-2 ">ingredients: {ingredients}</p>
                <p className="text-sm pl-2 mb-2 ">{description}</p>
            </div>
        </div>
    );
}