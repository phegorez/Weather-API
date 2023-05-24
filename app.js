const APIkey = '8a17a4d858d7dce2be669a579e2fa692'
const APIurl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q='

const input = document.querySelector('input')
const searchBtn = document.querySelector('button')
const weatherIcon = document.querySelector('.weather-icon')



async function checkWeather (city) {
    const res = await fetch(APIurl + city + `&appid=${APIkey}`)
    let data = await res.json()

    console.log(data)

    document.querySelector('.city').innerHTML = data.name
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + ' °C'
    document.querySelector('.humidity').innerHTML = data.main.humidity + '%'
    document.querySelector('.wind').innerHTML = data.wind.speed + ' km/h'

    let weather = data.weather[0].main

    if(weather== 'Clouds') {
        weatherIcon.src = 'images/clouds.png'
    }else if (weather == 'Clear') {
        weatherIcon.src = 'images/clear.png'
    }else if (weather == 'Rain') {
        weatherIcon.src = 'images/rain.png'
    }else if (weather == 'Drizzle') {
        weatherIcon.src = 'images/drizzle.png'
    }else if (weather == 'Mist') {
        weatherIcon.src == 'images/mist.png'
    }else if (weather == 'Wind') {
        weatherIcon.src == 'images/wind.png'
    }else if (weather == 'Snow') {
        weatherIcon.src == 'images/snow.png'
    }
}

searchBtn.addEventListener('click', () => {
    checkWeather(input.value)
})

