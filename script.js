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
    }).then(response => response.json()).then(json => { 
        let input = document.getElementById("input-url");
        input.value = json.shortUrl;
     });
}

function copiar() {
    var copyText = document.getElementById("input-url");
   
    copyText.select();
    copyText.setSelectionRange(0, 99999);
   
    navigator.clipboard.writeText(copyText.value);
 
    alert("URL copiada: " + copyText.value);
  }