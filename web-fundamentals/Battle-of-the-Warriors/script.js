let warrior = [
    {
        name: "Thor",
        hp: 100,
        strength: 15,
        attack() {
            return Math.floor(Math.random() * (this.strength + 1));
        }
    },
    {
        name: "Zeus",
        hp: 100,
        strength: 15,
        attack() {
            return Math.floor(Math.random() * (this.strength + 1));
        }
    },
]

for (let round = 1; round <= 10; round++) {
    console.log(`=== Round ${round} ===`);

    for (let i = 0; i < 2; i++) {
        let attacker = warrior[i];
        let defender = warrior[1 - i];

        let damage = attacker.attack();
        defender.hp = Math.max(defender.hp - damage, 0);

        console.log(`${attacker.name} attacks ${defender.name} and does ${damage} damage!`);
    }
    console.log(`${warrior[0].name} HP: ${warrior[0].hp} | ${warrior[1].name} HP: ${warrior[1].hp}`);
    // I let them hit each other first before checking their hp for fairness
    if (warrior[0].hp <= 0 || warrior[1].hp <= 0) break;
}

if (warrior[0].hp > warrior[1].hp) {
    console.log(`${warrior[0].name} WINS the battle!`);
} else if (warrior[1].hp > warrior[0].hp) {
    console.log(`${warrior[1].name} WINS the battle!`);
} else {
    console.log("The battle ends in a DRAW!");
}