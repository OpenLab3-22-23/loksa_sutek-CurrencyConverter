import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML =`
<h1 id="Title">Currency Converter</h1>

<center>

<div class="flex-container">
    <div>
        <a>€</a>
	</div>

	<div>
        <input id="Number" type="number"/> 
	    <a>=</a>
	    <a id="result">0.000</a>
    </div>

	<div>
        <a>CZK</a>
	</div>
</div>

<div id="SubmitButton"></div>

</center>
`


var rate;


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '60488f1271msh044b0d977c224ebp1e50b4jsna0da1a336cf9',
		'X-RapidAPI-Host': 'currency-conversion-and-exchange-rates.p.rapidapi.com'
	}
};

fetch('https://currency-conversion-and-exchange-rates.p.rapidapi.com/latest?from=USD&to=EUR%2CGBP', options)
    .then(response => response.json())
    .then(response => {
        console.log(response);
		rate = response.rates.CZK;
		result.textContent = "Conversion rate: " + rate;
    })
    .catch(err => console.error(err));



 	
function Submit() {
	document.getElementById('result').innerHTML = (document.getElementById('Number').value * rate).toFixed(3);
}


const result = document.createElement('p');
result.id = 'result';

const btn = document.createElement('button');
btn.textContent = 'Convert'
btn.id = "submitButton"
btn.addEventListener('click', () => Submit())

document.getElementById('SubmitButton').appendChild(result);
document.getElementById('SubmitButton').appendChild(btn);

	
