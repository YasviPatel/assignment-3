
const cn = fetch("https://raw.githubusercontent.com/Dipen-Dedania/static-data/main/india-popular-city.json");

cn.then((response) => {
  return response.json();
}).then((data) => {
    console.log(data)
    const select = document.getElementById("countryDropDown");
for(var i = 0; i < data.city.length; i++) {
    const opt = data.city[i].name;
    let el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    select.add(el);
}
});


// const select1=document.querySelector("countryDropDown");
// console.log(select1.options[select1.selectedIndex].value);
// const weather=fetch("https://goweather.herokuapp.com/weather/ny");
// weather.then((response)=>{
//     return response.json();
// }).then((data)=>{
//     console.log(data);
// })



const cards=fetch("https://raw.githubusercontent.com/Dipen-Dedania/static-data/main/make-your-trip-package.json");
cards.then((response)=>{
    return response.json();
}).then((data)=>{
    console.log(data);
})

