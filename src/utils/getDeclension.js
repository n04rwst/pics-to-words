export function getDeclension({ count, one, few, many }) {
    count = Math.abs(count) % 100;
    const num = count % 10;
    let result = `${count} `

    if (count > 10 && count < 20) return result + many;
    if (num > 1 && num < 5) return result + few;
    if (num === 1) return result + one;

    return result + many;
}

