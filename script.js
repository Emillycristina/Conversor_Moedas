

 const button = document.getElementById('convert-button')
 const select = document.getElementById('currency-select')
 
 const convertValues = async () => {
 const input = document.getElementById("input-real").value
 const realValueText = document.getElementById("real-value-text")
 const currencyValueText = document.getElementById("currency-value-text")

 const data = await fetch("http://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL,BTC-BRL")
 .then(response =>  response.json())
 
 const dolar = data.USDBRL.high
 const euro = data.EURBRL.high
 const bitcoin = data.BTCBRL.high
 
 realValueText.innerHTML = new Intl.NumberFormat('pt-BR',{
    style: "currency",
    currency: "BRL",
 }).format(input)
 
 if(select.value === "US$ Dólar americano"){
 currencyValueText.innerHTML = new Intl.NumberFormat('en-US',{
    style: "currency",
    currency: "USD",
 }).format(input/dolar)
}

if(select.value === "€ Euro"){
 currencyValueText.innerHTML = new Intl.NumberFormat('de-DE',{
    style: "currency",
    currency: "EUR",
 }).format(input/ euro)
};

if(select.value === "Bitcoin"){
    currencyValueText.innerHTML = bitcoin/input
   };
}


changeCurrency = () => {
  const currencyName = document.getElementById("currency-name")
  const currencyImg = document.getElementById("currency-img")
  
  if(select.value === "US$ Dólar americano"){
    currencyName.innerHTML= "Dólar americano"
    currencyImg.src="./assets/estados-unidos-_1_-1.png"
  }


  if(select.value === "€ Euro"){
    currencyName.innerHTML= "Euro"
    currencyImg.src="./assets/euro.png"
  }

  
  if(select.value === "Bitcoin"){
    currencyName.innerHTML= "Bitcoin"
    currencyImg.src= "./assets/bitcoin.png"
  }

  convertValues()
}



button.addEventListener("click", convertValues);
select.addEventListener("change", changeCurrency);