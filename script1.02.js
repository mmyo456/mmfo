// Declare the Elements 
const dispNum = document.querySelector(".display .num");
const dispErr = document.querySelector(".container .stg");


window.onload = function () {

    function showNum () {
        const randomNum = Math.floor(Math.random() * 1000);
        const randomStr = randomNum.toString()

        dispNum.textContent = randomStr
    }

    var interval =  setInterval( showNum , 500);

    
    
    setTimeout(()=> {
        clearInterval(interval);

        dispNum.textContent = "您的请求带有不合法参数，已被防火墙设置拦截！";
        dispErr.style.display = "block";
        dispErr.textContent = "普通网站访客，请联系网站管理员"
    }, 4000);
}