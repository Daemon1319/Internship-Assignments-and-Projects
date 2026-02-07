const classes = ["Warrior", "Mage", "Archer", "Healer", "Assassin"];
const abilities = ["Fireball", "Healing Touch", "Stealth", "Lightning Strike", "Power Slash"];

// 1. Create a Character Object
const character = {
    name: "Hero",
    health: 100,
}

// 2. Add a Random Class
function assignRandomClass(classes) {
    return classes[Math.floor(Math.random() * classes.length)];
}
character.class = assignRandomClass(classes);

// 3. Add Randomized Health
function randomizeHealth() {
    return Math.floor(Math.random() * 101) + 50;
}
character.health = randomizeHealth();

// 4. Assign a Special Ability
function assignSpecialAbility(abilities) {
    return abilities[Math.floor(Math.random() * abilities.length)];
}
character.specialAbility = assignSpecialAbility(abilities);



// 5. Create a generateCharacter() Function
function generateCharacter(name) {
    const names = ["Thorin", "Elara", "Zane", "Ivy", "Dante"];
    return {
        name: name || names[Math.floor(Math.random() * names.length)],
        class: assignRandomClass(classes),
        health: randomizeHealth(),
        specialAbility: assignSpecialAbility(abilities),

        // 6. Battle Simulation
        battle: function (otherCharacter) {
            const damage = Math.floor(Math.random() * 16) + 5;

            if (this.specialAbility === "Healing Touch") {
                this.health += damage;
                console.log(`${this.name} uses ${this.specialAbility} and heals for ${damage} points. Health is now ${this.health}.`);
            } else {
                otherCharacter.health -= damage;
                console.log(`Character ${this.name} attacked Character ${otherCharacter.name} with ${this.specialAbility}. ${otherCharacter.name}'s health dropped from ${otherCharacter.health + damage} to ${otherCharacter.health}.`);
            }
        }
    }
}

const character1 = generateCharacter("Zane");
const character2 = generateCharacter("Elara");

character1.battle(character2);
character2.battle(character1);

// 7. Generate Multiple Characters
function generateMultipleCharacters(x) {
    let characters = [];
    for (let i = 0; i < x; i++) {
        characters.push(generateCharacter());
    }
    return characters;
}

const party = generateMultipleCharacters(5);
console.dir(party);