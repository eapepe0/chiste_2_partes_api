const contenedor = document.getElementById("container");
const chisteSetup = document.getElementById("chiste--setup");
const chistePunchline = document.getElementById("chiste--punchline")


async function obtenerChiste(){

    const headers = { headers : { Accept : 'application/json'}};
    const res = await axios.get("https://v2.jokeapi.dev/joke/Any?type=twopart",headers)
    //devuelve la respuesta de la api en res  
    chisteSetup.innerText=res.data.setup; //cambiamos el texto al id#chiste--setup
    chistePunchline.innerText = res.data.delivery; //cambiamos el texto al id#chiste--punchline
}

obtenerChiste();
