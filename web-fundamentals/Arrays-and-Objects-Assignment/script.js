function realWorldEntity() {
    let book = {
        title: "Rich Dad Poor",
        author: "Robert Kiyosaki",
        pages: 336,
        isRead: false,
    };

    console.log(book.title);
    console.log(book.author);
    console.log(book.pages);
    console.log(book.isRead);

    console.log(book["title"])
    console.log(book["author"])
    console.log(book["pages"])
    console.log(book["isRead"])

    book.isRead = true;
    book.genre = "Finance";
    console.log(book);
}
realWorldEntity();

function arrayMultipleObjects() {
    let movies = [
        {
            title: "Your Name",
            director: "Makoto Shinkai",
            year: 2016,
        },
        {
            title: "Weathering with You",
            director: "Makoto Shinkai",
            year: 2019,
        },
        {
            title: "Suzume",
            director: "Makoto Shinkai",
            year: 2022,
        }
    ];

    console.log(movies[1].title);

    movies.push({
        title: "5 Centimeters per Second",
        director: "Makoto Shinkai",
        year: 2007,
    });

    movies[0].year = 2023;

    console.log(movies);
}
arrayMultipleObjects();

function combineObjectsAndArrays() {
    let student = {
        name: "Allan",
        age: 21,
        subjects: [
            "Math",
            "Science",
            "History"
        ]
    }

    console.log(student.subjects[0]);

    console.log(student.subjects.push("English"));

    console.log(student);
}
combineObjectsAndArrays();

function applyingObjectsAndArrays() {
    let recipe = {
        name: "Pancakes",
        ingredients: [
            {
                name: "Flour",
                quantity: "2 cups"
            },
            {
                name: "Milk",
                quantity: "1.5 cups"
            },
            {
                name: "Eggs",
                quantity: "2"
            }

        ],
        isVegetarian: false,
    }

    recipe.ingredients.push({
        name: "Sugar",
        quantity: "2 tablespoons"
    });

    console.log(recipe.ingredients[1].name);

    console.log(recipe);
}
applyingObjectsAndArrays();