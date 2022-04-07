// Declare the Elements 
const dispNum = document.querySelector(".display .num");
const dispErr = document.querySelector(".container .stg");
const dispErr = document.querySelector(".container .mmy");


window.onload = function () {

    function showNum () {
        const randomNum = Math.floor(Math.random() * 1000);
        const randomStr = randomNum.toString()

        dispNum.textContent = randomStr
    }

    var interval =  setInterval( showNum , 500);

    
    
    setTimeout(()=> {
        clearInterval(interval);

        dispNum.textContent = "警告";
        dispErr.style.display = "block";
        dispErr.textContent = "普通网站访客，请联系网站管理员"
        dispmmy.textContent = "普通网rr站访客，请联系网站管理员"
    }, 4000);
}