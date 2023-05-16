
const apikey = '3fee2c5d70b55a6704b6f388aee014a1';
document.getElementById('search').addEventListener('click',()=>{
    var place = document.getElementById('input').value;
    
    var url = 'https://api.openweathermap.org/data/2.5/weather?q='+ place +'&appid='+ apikey +'&units=metric';

    fetch(url)
         .then(response => response.json())
         .then(data => {
            
                document.getElementById('city').innerText= data.name;
                document.getElementById('temperature').innerText=data.main.temp + "℃";
                document.getElementById('clouds').innerText=data.weather[0].description;
                let icon = data.weather[0].icon;
                let iconurl = "https://openweathermap.org/img/wn/"+ icon +".png";
                document.getElementById('img').src = iconurl;

        })
        


   
})


