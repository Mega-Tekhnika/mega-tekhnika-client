function login(){

    const order =
        document.getElementById("orderNumber").value;

    const code =
        document.getElementById("accessCode").value;

    if(order === "9203" && code === "MTK-9203"){

        window.location.href = "cabinet.html";

    }else{

        alert(
            "Невірний номер замовлення або код доступу"
        );

    }

}
