import { useEffect, useState } from "react";
import Card from "../Card/Card";

const Cards = () => {
    const [cards, setCards] = useState([]);
    useEffect(() => {
        fetch('/Data/donation.json')
          .then(res => res.json())
          .then(data => setCards(data));
    },[]);

    console.log(cards);

    return (
        <div className="max-w-[1320px] mx-auto mt-24 mb-48 flex flex-col justify-center items-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {
                cards.map(card => <Card card={card} key={card.id}></Card>)

            }           
            </div>
        </div>
    );
};

export default Cards;