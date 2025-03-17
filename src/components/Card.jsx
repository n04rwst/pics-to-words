function Card({language, item, isSelected, isFinished, isChecking, onCardClick}) {
    const { id, type, url, word: { [language]: text } = {} } = item;
    const showError = isChecking && isSelected && !isFinished;

    const content = type === 'image'
        ? <img src={url} alt={text} />
        : <span>{text}</span>

    const className = `card ${
        isSelected ? 'selected' : ''
    } ${
        isFinished ? 'disabled' : ''
    } ${
        showError ? 'error' : ''
    }`;

    const handleClick = () => onCardClick(id);

    return (
        <li onClick={handleClick} className={`card ${className}`}>
            {content}
        </li>

    );
}

export default Card;