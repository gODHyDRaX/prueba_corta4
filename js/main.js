let root = document.querySelector(".root");
root.innerHTML = `
    <div class="cronometro">00:00</div>
    <input type="text" class="input" value="Segundos">
    <input type="text" class="input1" value="Minutos">
    <div class="boton">Iniciar</div>
`;
let div_cronometro = document.querySelector(".cronometro");
let boton = document.querySelector(".boton");

boton.addEventListener("click", () => {
    let segundos = parseInt(document.querySelector(".input").value);
    let minutos = parseInt(document.querySelector(".input1").value); 
    
    document.querySelector(".input").value = "";
    document.querySelector(".input1").value = "";

    // Llamar a la función iniciar_cronometro con los valores actualizados
    iniciar_cronometro(minutos, segundos);
});

function iniciar_cronometro(minutos, segundos) {
    actualizar();

    let tiempo = setInterval(actualizar, 1000);

    function actualizar() {
        if (segundos <= 0 && minutos <= 0) {
            clearInterval(tiempo);
            div_cronometro.textContent = "00:00";
            return;
        }

        segundos--;

        if (segundos < 0) {
            segundos = 59;
            minutos--;
        }

        let mn = minutos;
        let se = segundos;

        if (minutos < 10) {
            mn = "0" + minutos;
        }
        if (segundos < 10) {
            se = "0" + segundos;
        }

        div_cronometro.innerHTML = mn + ":" + se;
    }
}
