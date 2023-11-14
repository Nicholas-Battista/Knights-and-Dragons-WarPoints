const freeEnergy = document.querySelector('.freeEnergy');
const gemAmount = document.querySelector('.gems');
const enterButton = document.querySelector('.enterButton');
const totalPoints = document.querySelector('.totalPoints');

const SMALLPACK = [4, 10];
const MEDIUMPACK = [20, 47];
const BIGPACK = [40, 90];

enterButton.addEventListener('click', () => {
    const initialEnergy = freeEnergy.value;
    let currentGems = gemAmount.value;

    freeEnergy.value = '';
    gemAmount.value = '';
    let totalEnergy = parseInt(initialEnergy);

    while (currentGems >= 90) {
        totalEnergy += BIGPACK[0];
        currentGems -= BIGPACK[1];
    }

    console.log(currentGems);
    console.log(totalEnergy);

    let warPoints = totalEnergy * 100;

    totalPoints.textContent = "War Points: " + warPoints;
});