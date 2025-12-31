function cleanKitchen() {

    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const kitchenCleaned = true;

            if (kitchenCleaned) {
                resolve("You cleaned the kitchen");
            }
            else {
                reject("You didn't cleaned the kitchen");
            }
        }, 2000);
    });
}

function cookDinner() {

    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const cookedDinner = false;

            if (cookedDinner) {
                resolve("You cooked the dinner");
            }
            else {
                reject("You didn't cooked the dinner");
            }
        }, 1500);
    });
}

function waterPlants() {

    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const plantsWatered = true;

            if (plantsWatered) {
                resolve("You watered the plants");
            }
            else {
                reject("You didn't watered the plants");
            }
        }, 1000)
    });
}

cleanKitchen().then(value => { console.log(value); return waterPlants() })
    .then(value => { console.log(value); return cookDinner() })
    .catch(error => {
        console.log(error);
        console.log("You didn't finished all the chores!");
    });