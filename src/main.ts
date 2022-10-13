import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML =`
<h1 id="Title">Currency Converter</h1>
<center>

<div id="inLine">
    <input type="number"/> 
	<a>=</a>
	<a id="result">0.00</a>
</div>
<br>
<button onlcick = "submite()">SUBMIT</button>
</center>
`



const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '60488f1271msh044b0d977c224ebp1e50b4jsna0da1a336cf9',
		'X-RapidAPI-Host': 'currency-conversion-and-exchange-rates.p.rapidapi.com'
	}
};

fetch('https://currency-conversion-and-exchange-rates.p.rapidapi.com/latest?from=USD&to=EUR%2CGBP', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
	
const x = document.getElementById("result");
function submite() {
	try{
		
	}
}