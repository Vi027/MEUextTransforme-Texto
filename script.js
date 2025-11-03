window.document.addEventListener("DOMContentLoaded", function () {
  window.document
    .querySelector("#btnMaiuscula")
    .addEventListener("click", function () {
      let inputText = document.querySelector("#input-text").value;
      document.querySelector("#result").value = inputText.toUpperCase();
    });

  window.document
    .querySelector("#btnMinuscula")
    .addEventListener("click", function () {
      let inputText = document.querySelector("#input-text").value;
      document.querySelector("#result").value = inputText.toLowerCase();
    });

    window.document
    .querySelector("#btnPrimeiraLetra")
    .addEventListener("click", function() {
        let inputText = document.querySelector("#input-text").value;

        let resultado = inputText.replace(/(^\s*\w|[.!?]\s*\w)/g, function(letra) {
            return letra.toUpperCase();
        });

        document.querySelector("#result").value = resultado;
    });


     window.document
    .querySelector("#btnLimpar")
    .addEventListener("click", function () {
      document.querySelector("#input-text").value = "";
      document.querySelector("#result").value = "";
      document.querySelector("#input-text"); 
    });

    window.document
    .querySelector("#btnInverter")
    .addEventListener("click", function(){
        let texto = document.querySelector("#input-text").value;
        let invertido = texto.split("").reverse().join("")
        document.querySelector("#result").value = invertido;
    })
});
