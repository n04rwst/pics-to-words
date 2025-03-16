function Hearts({count, errorsCount}) {
    return (
        <div className="hit-points-indicator">
            {Array(count).fill(0).map((_, i) => (
                <span className={`hit-point ${i < errorsCount ? 'used' : 'unused'}`}></span>
            ))}
        </div>
    );
}

export default Hearts;