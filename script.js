function addRecommendation() {

    let recommendation = document.getElementById("new_recommendation");

    if (recommendation.value.trim() === "") {
        alert("Please enter a recommendation.");
        return;
    }

    let element = document.createElement("div");
    element.className = "recommendation";

    element.innerHTML = '""' + recommendation.value + '""';

    document.getElementById("all_recommendations").appendChild(element);

    alert("Thank you for leaving a recommendation!");

    recommendation.value = "";
    document.getElementById("name").value = "";
}