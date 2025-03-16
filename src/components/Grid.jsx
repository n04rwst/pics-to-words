import "../styles/GameField.css"
import Card from "./Card.jsx";
import { useState } from "react";

function Grid({words, finishedItems, checkItems}) {
    const [selectedItems, setSelectedItems] = useState([]);

    const handleCardClick = (id) => {
        if (selectedItems.includes(id) || finishedItems.includes(id)) return;

        switch (selectedItems.length) {
            case 0:
                setSelectedItems([id]);
                break;
            case 1:
                setSelectedItems([...selectedItems, id]);
                checkItems(selectedItems[0], id);
                setTimeout(() => setSelectedItems([]), 500);
                break;
        }
    };

    const cards = words.map(word => (
        <Card
            key={word.id}
            item={word}
            isSelected={selectedItems.includes(word.id)}
            isFinished={finishedItems.includes(word.id)}
            isChecking={selectedItems.length === 2}
            onCardClick={handleCardClick}
        />
    ));

    return (
        <ul className="cards">
            {cards}
        </ul>
    )
}

export default Grid;