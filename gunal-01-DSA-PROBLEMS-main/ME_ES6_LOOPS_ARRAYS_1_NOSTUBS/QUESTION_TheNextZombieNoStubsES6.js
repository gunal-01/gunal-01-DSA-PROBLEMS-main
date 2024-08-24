
module.exports = zombieAttack

function zombieAttack(arr) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === "Zombie") {
            return arr[i+1];
        }
    }
}


if (zombieAttack(['Rameo', 'Kevin', 'Zombie', 'Jacky', 'Adam']) !== 'Jacky')

  console.log("Test fails: Expected 'Jacky' for input arr = ['Rameo', 'Kevin', 'Zombie', 'Jacky', 'Adam']");

else

  console.log("Sample test case for input arr = ['Rameo', 'Kevin', 'Zombie', 'Jacky', 'Adam'] passed!");
