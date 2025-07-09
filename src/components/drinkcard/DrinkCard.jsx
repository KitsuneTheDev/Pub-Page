export default function DrinkCard({ drink }) {

    const { name, ingredients, description, img } = drink;
 
    return (
        <div className="drink-card w-120 h-50 mt-4 flex
        md:w-100
        2xl:w-155">
            <div className="drink-card-image h-full w-60 "
            style={{
                backgroundImage: `radial-gradient(circle at 50%,rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 1)),
                linear-gradient(rgb(0 0 0 / 1), rgb(0 0 0 / 0), rgb(0 0 0 / 0), rgb(0 0 0 / 1)),
                linear-gradient(90deg, rgb(0 0 0 / 1), rgb(0 0 0 / 0), rgb(0 0 0 / 0), rgb(0 0 0 / 0), rgb(0 0 0 / 0), rgb(0 0 0 / 1)),
                url('${img}')`,
                backgroundSize: `cover`,
                backgroundRepeat: `no-repeat, no-repeat`,
                backgroundPosition: `center, center`,
                WebkitMaskImage: 'radial-gradient(black 40%, transparent 70%), radial-gradient(black 0%, transparent 75%)',
            }}>
            </div>
            <div className="drink-card-body w-100 h-full flex flex-col">
                <div className="drink-card-header w-full h-[20%] flex items-center">
                    <h3 className="font-c-source text-lg text-start pl-[8%] text-gold-4">{name}</h3>
                </div>
                <div className="seperator-container relative w-full h-[5%] ">
                    <div className="seperator-head absolute left-[2%] h-full aspect-square border-[1px] border-gold-1 rotate-45 "></div>
                    <div className="seperator-body absolute left-[3.4%] top-[calc(50%-1px)] w-[95%] h-[1px] bg-gold-1 "></div>
                </div>
                <div className="drink-card-content h-[75%] w-full flex flex-col gap-[10%] pt-[4%] pl-[4%]">
                    <p className="ingredients font-c-source text-md text-gold-4 pl-[4%] ">{ingredients}</p>
                    <p className="ingredients font-c-source text-md text-gold-4 pl-[4%] ">{description}</p>
                </div>
            </div> 
        </div>
    );
}