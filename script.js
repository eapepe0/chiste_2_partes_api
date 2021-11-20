const contenedor = document.getElementById("container");
const chisteSetup = document.getElementById("chiste--setup");
const chistePunchline = document.getElementById("chiste--punchline")


async function obtenerChiste(){

    const headers = { headers : { Accept : 'application/json'}};
    const res = await axios.get("https://v2.jokeapi.dev/joke/Any?type=twopart",headers)
    
    console.log(res.data)
    console.log(res.data.setup)

   
    chisteSetup.innerText=res.data.setup;
    chistePunchline.innerText = res.data.delivery; 
}

obtenerChiste();