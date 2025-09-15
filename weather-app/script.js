const searchBtn = document.getElementById('searchBtn');

function validateForm(){
    const city = document.forms['citySearch']['city'].value;

    if(city == "" || city.length == 1){
        errorMessage("Please, enter a city name");
    }
    else{
        getCoordinates(city);
    }
}

/**
 * Display error message
 * @param message: error message to display
 */
function errorMessage(message){
    const weatherContainer = document.getElementById('weatherContainer');
    weatherContainer.style.display = "block";

    const errorMessage = document.getElementById('errorMessage');
    errorMessage.textContent = message;
}

searchBtn.addEventListener('click', validateForm);