
const apiKey='efb836c3e72a1a5657fd8a3344ec2fb8';
const fetchApi=(city)=>{
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
.then(
    res=>{
        if(!res.ok){
            errorh.innerText=(`${input.value} ${res.statusText}`);

        }else{
            errorh.innerText=''
           return res.json()

        }
    })
.then(data=>{
    console.log(data)
    city1.innerText=(`City: ${data.name}`)
    temp.innerText=(`temperature: ${data.main.temp}`)
    humidity.innerText=(`humidity: ${data.main.humidity}`)
    windSpeed.innerText=(`${data.weather[0].description}`)
})
.catch(error=>
    console.log("fetch error:", error.message)
)
};
const errorh=document.getElementById('errors');
const temp=document.getElementById('temp');
const city1=document.getElementById('city');
const humidity=document.getElementById('humidity');
const windSpeed=document.getElementById('wind speed');

const input=document.querySelector('input');
const btn=document.querySelector('button');
btn.addEventListener('click', (event)=>{
    event.preventDefault();
fetchApi(input.value)})