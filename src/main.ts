import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML =`
<h1 id="Title">Currency Converter</h1>
<center>

<<<<<<< HEAD
<div id="inLine">
    <input type="number"/> 
	<a>=</a>
	<a id="result">0.00</a>
=======
<div class="color-box">
    <div id="inLine">
        <input type="number"/> 
	    <a>=</a>
	    <a>0.00</a>
    </div>
>>>>>>> 0bc41ec128006b28527f6c7842ebcc9f53543969
</div>

<br>
<<<<<<< HEAD
<button onlcick = "submite()">SUBMIT</button>
=======
<button>SUBMIT</button>


>>>>>>> 0bc41ec128006b28527f6c7842ebcc9f53543969
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