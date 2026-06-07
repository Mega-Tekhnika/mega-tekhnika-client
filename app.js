function login() {

    const orderNumber = document.getElementById("orderNumber").value;
    const accessCode = document.getElementById("accessCode").value;

    if(orderNumber === "9203" && accessCode === "MTK-9203"){

        document.body.innerHTML = `
        <div style="
            background:#0f1115;
            color:white;
            min-height:100vh;
            padding:30px;
            font-family:Arial,sans-serif;
        ">

            <h1>MEGA_TEKHNIKA</h1>

            <div style="
                background:#171b22;
                padding:20px;
                border-radius:20px;
                margin-top:20px;
            ">

                <h2>Замовлення №9203</h2>

                <p>📱 iPhone 16 Pro Black 512 GB</p>

                <p>💰 12 600 грн</p>

                <p>📦 Статус: В дорозі</p>

                <p>🎁 Бонусний баланс: 350 ₴</p>

            </div>

        </div>
        `;

    } else {

        alert("Невірний номер замовлення або код доступу");

    }

}
