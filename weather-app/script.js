const searchBtn = document.getElementById('searchBtn');

function validateForm(){
    const city = document.forms['citySearch']['city'].value;

    if(city == "" || city.length == 1){
        errorMessage("Please, enter a city name");
    }
}


searchBtn.addEventListener('click', validateForm);