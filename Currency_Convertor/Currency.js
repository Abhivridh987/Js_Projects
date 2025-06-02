const countryCurrencyCodes = {
  Australia: "AUD",
  Bulgaria: "BGN",
  Brazil: "BRL",
  Canada: "CAD",
  Switzerland: "CHF",
  China: "CNY",
  CzechRepublic: "CZK",
  Denmark: "DKK",
  Eurozone: "EUR",
  UnitedKingdom: "GBP",
  UnitedStatesOfAmerica: "USD",
  HongKong: "HKD",
  Hungary: "HUF",
  Indonesia: "IDR",
  Israel: "ILS",
  India: "INR",
  Iceland: "ISK",
  Japan: "JPY",
  SouthKorea: "KRW",
  Mexico: "MXN",
  Malaysia: "MYR",
  Norway: "NOK",
  NewZealand: "NZD",
  Philippines: "PHP",
  Poland: "PLN",
  Romania: "RON",
  Sweden: "SEK",
  Singapore: "SGD",
  Thailand: "THB",
  Turkey: "TRY",
  SouthAfrica: "ZAR"
};
// const URL="https://api.frankfurter.dev/v1/latest?base=USD";
//const URL=" https://v6.exchangerate-api.com/v6/bbbd5fea2e0dcafdba2f7c46/latest/USD";
console.log("hello");
const getRate = async (URL,code)=>{
    let promise = await fetch(URL);
    console.log(promise);
    data = await promise.json();
    console.log(data);
    rate = data.rates[code];
    console.log(rate);
    return rate;
}

{
let fromselectbox = document.querySelector("#from");
let toselectbox = document.querySelector("#to");
let country = Object.keys(countryCurrencyCodes);
for(let i of country){
  let option1 = document.createElement("option");
  option1.innerText = i + ` (${countryCurrencyCodes[i]})` ;
  if(option1.innerText == "India (INR)"){
    option1.selected=true;
  }
  let option2 = document.createElement("option");
  option2.innerText = i + ` (${countryCurrencyCodes[i]})` ;
  if(option2.innerText == "UnitedStatesOfAmerica (USD)"){
    option2.selected=true;
  }
  fromselectbox.append(option1);
  toselectbox.append(option2);

}
} // Accessing the select box 

{
let otherdate = document.querySelector("#otherdate");
otherdate.addEventListener("change",()=>{
  if(otherdate.value == "Other Date"){
      let calendar = document.querySelector(".otherdate");
      calendar.style.display="block";
      otherdate.style.height="63%";
  }
  else{
      let calendar = document.querySelector(".otherdate");
      calendar.style.display="none";
      otherdate.style.height="130%";
  }


})
}  // Adjusting Date and Calendar

let conversionbutton=document.querySelector("#conversionbutton");
let clearbutton = document.querySelector("#clearbutton");
conversionbutton.addEventListener("click",async ()=>{

  let result = document.querySelector("#conversionresult");
  result.innerText="Loading"
  let loading = setInterval(()=>{
    result.innerText=result.innerText + " . ";
  },500);


  let fromcountry= document.querySelector("#from").value;
  let tocountry = document.querySelector("#to").value;
  let fromcountrycode = fromcountry.slice(fromcountry.indexOf('(')+1,fromcountry.indexOf(')'));
  let tocountrycode = tocountry.slice(tocountry.indexOf('(')+1,tocountry.indexOf(')'));           // Accessing Country codes

  let enterdenominations = document.querySelector("#enterdenominations").value;  // Accessing the denominations

  let otherdate = document.querySelector("#otherdate");
  if(otherdate.value == "Current Date")
  {
    let URL = `https://api.frankfurter.dev/v1/latest?base=${fromcountrycode}&symbols=${tocountrycode}`;
    let rate = await getRate(URL,tocountrycode);
    await (async ()=>{
          let converted_money = Number(rate) * Number(enterdenominations);
          clearInterval(loading);
          result.innerText = `${converted_money} ${tocountrycode}`;
    })();


  }
  else if(otherdate.value == "Other Date"){
    
    let dateselected = document.querySelector("#accesscalendar").value;
    if(dateselected){
          let URL = `https://api.frankfurter.dev/v1/${dateselected}?base=${fromcountrycode}&symbols=${tocountrycode}`;
    
          let rate = await getRate(URL,tocountrycode);
          
          let converted_money = Number(rate) * Number(enterdenominations);
          clearInterval(loading);
          result.innerText = `${converted_money} ${tocountrycode}`;
    }
    else{
      alert("Please enter a valid Date");
    }

  }

})
clearbutton.addEventListener("click",()=>{
  document.querySelector("#conversionresult").innerText = ``;
  document.querySelector("#accesscalendar").value='';
  document.querySelector("#enterdenominations").value='';
})

let firstbutton = document.querySelector("#nexttosecondpage");
firstbutton.addEventListener("click",()=>{
    let slides = document.querySelector(".slides");
    slides.style.transform="translateX(-25%)";
    slides.style.transitionDuration="1s";
})

let secondbutton = document.querySelector(".nexttothirdpage");
secondbutton.addEventListener("click",()=>{
    let slides = document.querySelector(".slides");
    slides.style.transform="translateX(-50%)";
    slides.style.transitionDuration="1s";
})

let thirdbutton = document.querySelector(".nextbuttontoconvertor");
thirdbutton.addEventListener("click",()=>{
    let emailbox = document.querySelector("#emailbox").value;
    let passwordbox = document.querySelector("#passwordbox").value;
    if(emailbox.trim() == '')
    {
        alert("Please enter a valid username");
    }
    else if(passwordbox.trim() == '')
    {
      alert("Please enter a valid password")
    }
    else if(emailbox == "abhivridh2@gmail.com" && passwordbox == "Abhivridh@123"){
          let slides = document.querySelector(".slides");
          slides.style.transform="translateX(-75%)";
          slides.style.transitionDuration="0s";
    }
    else{
      alert("Invalid Username and Password");
    }

})

show = false;
let show_hide = document.querySelector(".fa-solid");
show_hide.addEventListener("click",()=>{
    if(show==false){
        show_hide.classList.remove("fa-eye");
        show_hide.classList.add("fa-eye-slash");
        let password = document.querySelector("#passwordbox");
        password.type = "text";
        show=true;
    }
    else{
        show_hide.classList.remove("fa-eye-slash");
        show_hide.classList.add("fa-eye");
        let password = document.querySelector("#passwordbox");
        password.type = "password";
        show=false;
    }
})





/*const URL = "https://dogapi.dog/api/v2/breeds";
console.log("hello");
const getData = async () => {
    let promise = await fetch(URL);
    console.log(promise);
    data = await promise.json();
    console.log(data);
    console.log(data.data[0].attributes.description);
}*/
