function encurtarUrl() {
    let url = document.getElementById("input-url").value;
    if(!url){
        alert("Insira uma URL para encurtar");
        return;
    }
 
    let headers = {
        "Content-Type": "application/json",
        "apikey": "Sua API Key",
    }

    let linkRequest = {
        destination: document.getElementById("input-url").value,
        domain: { fullName: "rebrand.ly" }
    }
 
    fetch("https://api.rebrandly.com/v1/links", {
        method: "POST",
        headers: headers,
        body: JSON.stringify(linkRequest)
    }).then(response => {
        if (!response.ok) {
            throw new Error("Erro na requisição. Status: " + response.status);
        }
        console.log(response.status)
        return response.json();
        
    })
    .then(json => {
        let input = document.getElementById("input-url");
        input.value = json.shortUrl;
    })
    .catch(error => {
        alert("Erro ao encurtar a URL: " + error.message);
    });
}

function copiar() {
    let url = document.getElementById("input-url").value;
    if(!url){
        alert("Sem URL para copiar!");
        return;
    }

    var copyText = document.getElementById("input-url");
   
    copyText.select();
    copyText.setSelectionRange(0, 99999);
   
    navigator.clipboard.writeText(copyText.value);
 
    alert("URL copiada: " + copyText.value);
  }