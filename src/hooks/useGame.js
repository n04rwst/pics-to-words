import { useEffect, useState } from "react";

export function useGame() {
    const [data, setData] = useState([]);
    const [finishedItems, setFinishedItems] = useState([]);
    const [stepsCount, setStepsCount] = useState(0);

    const lives = 3;
    const errorsCount = stepsCount - finishedItems.length / 2;
    const isDataLoaded = data.length > 0;
    const isGameOver = isDataLoaded && (finishedItems.length === data.length || errorsCount >= lives);

    useEffect(() => {
        fetch('/public/data.json')
            .then(res => res.json())
            .then(data => setData(data.sort(() => Math.random() - 0.5)))
            .catch(error => console.log(error));
    }, []);

    const checkItems = (firstItem, secondItem) => {
        const firstWord = data.find(({id}) => id === firstItem);
        const secondWord = data.find(({id}) => id === secondItem);

        if (firstWord.type === secondWord.type) {
            return;
        }

        if (firstWord.token === secondWord.token) {
            setFinishedItems((items) => [...items, firstItem, secondItem]);
        }

        setStepsCount(prevStepsCount => prevStepsCount + 1);
    }

    const handleReset = () => {
        setData(data.sort(() => Math.random() - 0.5));
        setFinishedItems([]);
        setStepsCount(0);
    };

    return {
        data,
        finishedItems,
        stepsCount,
        lives,
        errorsCount,
        isGameOver,
        checkItems,
        handleReset
    };
}