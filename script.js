document.addEventListener("DOMContentLoaded", () => {

const numeroA = document.getElementById("numeroA");
const numeroB = document.getElementById("numeroB");
const resultado = document.getElementById("resultado");

const botones = document.querySelectorAll(".botones button");
const butnLimpiar = document.getElementById("limpiar");

function obtenerValores() {
  const a = parseFloat(numeroA.value);
  const b = parseFloat(numeroB.value);
  return { a, b };
}

botones.forEach((btn) => {
  btn.addEventListener("click", () => {
    const operacion = btn.textContent.trim();
    const { a, b } = obtenerValores();

    if (btn.id === "limpiar") {
      numeroA.value = "";
      numeroB.value = "";
      resultado.value = "";
      return;
    }

    if (isNaN(a) || isNaN(b)) {
      resultado.value = "Ingresa números válidos";
      return;
    }

    let res;

    switch (operacion) {
      case "+":
        res = a + b;
        break;
      case "−":
        res = a - b;
        break;
      case "×":
        res = a * b;
        break;
      case "÷":
        res = b === 0 ? "Error: división por 0" : a / b;
        break;
      default:
        res = "";
    }

    resultado.value = res;
  });
});
});
