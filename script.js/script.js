<script>

    for (let i = 0; i < length; i += typesCount) {
      typesArray.forEach(type => {
        const funcName = Object.keys(type)(0);
        console.log("funcName: ", funcName);

        generatedPassword += randomFunc[funcName]();
      });
    }
    function getRandomLower() {
      return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
      var num = Math.floor(Math.random() * 9) + 1;
    }
    console.log(getRandomLower());

    function getRandomUpper() {
      return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
      var num = Math.floor(Math.random() * 9) + 1;
    }
    console.log(getRandomUpper());

    function getRandomNumber() {
      return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
      var num = Math.floor(Math.random() * 9) + 1;
    }
    console.log(getRandomNumber());

    function getRandomSymbol() {
      const symbols = "!@#$%^&*()+=?";
      return symbols[Math.floor(Math.random() * symbols.length)];
      var num = Math.floor(Math.random() * 9) + 1;
    }
    console.log(getRandomSymbol());{
    const floating_btn = document.querySelector(".floating-btn");
    const close_btn = document.querySelector(".close-btn");
    const social_panel_container = document.querySelector(const social_panel_container = document.querySelector)
    }
    </script>