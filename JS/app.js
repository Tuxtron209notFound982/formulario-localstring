const formulario = document.querySelector("#formulario");
const resultado = document.querySelector("#resultado");
const aprendizGuardado = localStorage.getItem("aprendiz");

formulario.addEventListener("submit", function(event){
    event.preventDefault();

    const datos = new FormData(formulario);
    const aprendiz = {};

    for(const [campo, valor] of datos.entries()){
        aprendiz[campo] = valor;
    }

    if (datos.has("acepta")) {
        aprendiz.acepta = "si";
    } else {
        aprendiz.acepta = "no";
    }

    localStorage.setItem("aprendiz", JSON.stringify(aprendiz));

    mostrarAprendiz(aprendiz);
    formulario.reset();
    alert("Aprendiz registrado con éxito");
});

function mostrarAprendiz(aprendiz){
    resultado.replaceChildren();

    for(const campo in aprendiz){
        resultado.innerHTML += `<p> ${campo}: ${aprendiz[campo]}</p>`;
    }
}

if (aprendizGuardado){
    mostrarAprendiz(JSON.parse(aprendizGuardado));
}
