export const Bot = () => {
    const number = Math.floor((Math.random() * 3) + 1);
    return number;
};


export const updateScore = (my, bot, myScore, botScore) => {

    let myNew = myScore;
    let botNew = botScore;

    console.log(myNew, botNew);

    if (my == 1 && bot == 2) myNew++
    else if (my == 2 && bot == 3) myNew++
    else if (my == 3 && bot == 1) myNew++

    else if (bot == 1 && my == 2) botNew++
    else if (bot == 2 && my == 3) botNew++
    else if (bot == 3 && my == 1) botNew++

    return ({ me: myNew, bot: botNew })

};