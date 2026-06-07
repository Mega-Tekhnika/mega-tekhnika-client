function login(){

const order =
document.getElementById("orderNumber").value;

const code =
document.getElementById("accessCode").value;

if(order === "123456" && code === "123456"){

window.location.href = "cabinet.html";

}else{

alert("Невірний номер замовлення або код доступу");

}

}
