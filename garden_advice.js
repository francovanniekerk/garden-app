// Prompt the user for the season and plant type instead of using hardcoded values
let season = prompt("Enter the season (e.g. summer or winter):");

// Prompt the user for the plant type
let plantType = prompt("Enter the plant type: flower or vegetable");


// Function to get advice based on the season
function getSeasonAdvice(season) {
    if (season === "summer") {
        return "Water your plants regularly and provide some shade.";
    } else if (season === "winter") {
        return "Protect your plants from frost with covers.";
    } else {
        return "No advice for this season.";
    }
}

// Function to get advice based on the plant type
function getPlantAdvice(plantType) {
    if (plantType === "flower") {
        return "Use fertiliser to encourage blooms.";
    } else if (plantType === "vegetable") {
        return "Keep an eye out for pests!";
    } else {
        return "No advice for this type of plant.";
    }
}

// Get combined advice for the given season and plant type
let advice = getSeasonAdvice(season) + "\n" + getPlantAdvice(plantType);

// Log the generated advice to the console
console.log(advice);

// TODO: Examples of possible features to add:
// - Add detailed comments explaining each block of code.
// - Refactor the code into functions for better readability and modularity.
// - Store advice in an object for multiple plants and seasons.
// - Suggest plants that thrive in the given season.
