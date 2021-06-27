const input = ['Sherry', 'Bell', 'Coin', '7']


const randomSlot = () => {
    const random = Math.floor(Math.random() * input.length)
    switch (random) {
        case 0:
            return input[0];
            break;
        case 1:
            return input[1];
            break;
        case 2:
            return input[2];
            break;
        case 3:
            return input[3];
            break;
    }
}

const spinSlot = () => {
    const result = [];
    result.push(randomSlot());
    result.push(randomSlot());
    result.push(randomSlot());
    return result;
}

const check = input => {
    console.log(input)
    if (input[0] === input[1] || input[0] === input[2]) {
        console.log('You win')
    } else if (input[0] === input[1] === input[2]) {
        console.log('Jackpot Big prize!')
    } else {
        console.log('Try again')
    }
    return input
}

check(spinSlot());