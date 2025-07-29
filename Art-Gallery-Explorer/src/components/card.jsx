
function Card({image, title, artist, date, department}) {
    return (
        <div className="w-fit gap-auto hover:bg-gray-100 rounded p-4 shadow-lg">
            <div className="w-100 h-auto overflow-hidden mb-2">
            <img src={image} className="" alt={title}/>
            </div>
            <div className="flex flex-col text-start ">
                <h2 className="text-xl font-bold">{title}</h2>
                <h4 className="text-xl">{artist} - {date}</h4>
                <p>{department}</p>
            </div>
        </div>
    );
}

export default Card;