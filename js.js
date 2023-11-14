const freeEnergy = document.querySelector('.freeEnergy');
const gemAmount = document.querySelector('.gems');
const enterButton = document.querySelector('.enterButton');
const totalPoints = document.querySelector('.totalPoints');
const totalAttacks = document.querySelector('.totalAttacks');

const SMALLPACK = [4, 10];
const MEDIUMPACK = [20, 47];
const BIGPACK = [40, 90];

function increment () {
    document.querySelector('.step').stepUp();
}
function decrement () {
    document.querySelector('.step').stepDown();
}

function setElixrToZero () {
    
}


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

    while (currentGems >= 47) {
        totalEnergy += MEDIUMPACK[0];
        currentGems -= MEDIUMPACK[1];
    }

    while (currentGems >= 10) {
        totalEnergy += SMALLPACK[0];
        currentGems -= SMALLPACK[1];
    }

    console.log(currentGems);
    console.log(totalEnergy);

    if (document.querySelector('.regular').checked) {
        let warPoints = totalEnergy * 912;

        totalPoints.textContent = "War Points (during frenzy): " + warPoints;

        totalAttacks.textContent = "Total Attacks: " + totalEnergy;

    }else if (document.querySelector('.pa').checked) {
        let totalPowerAttacks = Math.floor(totalEnergy / 4);

        let warPoints = totalPowerAttacks * 2712;

        totalPoints.textContent = "PA War Points (during frenzy): " + warPoints;

        totalAttacks.textContent = "Total Attacks: " + totalPowerAttacks;
    }else {

    }



});