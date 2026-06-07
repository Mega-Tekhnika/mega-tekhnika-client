function login() {

```
const order = document.getElementById("orderNumber").value.trim();
const code = document.getElementById("accessCode").value.trim();

if (order === "123456" && code === "123456") {

    window.location.href = "cabinet.html";

} else {

    alert("Невірний номер замовлення або код доступу");

}
```

}
