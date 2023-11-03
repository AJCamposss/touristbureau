window.onload = function() {
    const categories = document.getElementById("categories");
    categories.onchange = selectedCategoryChanged;
}

function getCategories() {
    let category = {
        adventures : [
            "Skydiving", "Paragliding", "Bungee jumping",
            "Caving"
        ],

        museums : [
            "Trogir City Museum", "Kairos Collection", 
            "Trogir Ciovo Museum", "The Chapel Of Blessed John of Trogir"
        ],

        wineTastings : [
            "Bibich Winery", "Lairos Winery", "Stina Winery", "Winotoka Wine Bar",
            "Dioklecijan Winery", "Bakota Winery"

        ], 

        ocean : [
            "Surfing", "Snorkeling", "Scuba diving", 
            "Sailing", "Kayaking"
        ]
    }

    return category;
} 

function filterCategory(activities) {
    let categories = getCategories();

    switch(activities.toLowerCase()) {
        case "adventures":
            return categories.adventures;
        case "museums":
            return categories.museums;
        case "wineTastings":
            return categories.wineTastings;
        case "ocean":
            return categories.ocean;
    }
}

function selectedCategoryChanged(event) {
    const categories = document.getElementById("categories");
    const options = document.getElementById("options");
    options.innerHTML = "";

    const category = filterCategory(categories.value)
    for(let option of category){
        const option = new Option(options);
        options.appendChild(option)
    }
    

}


