import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML =`
<h1 id="Title">Currency Converter</h1>
<center>

<div class="color-box">
    <div id="inLine">
        <input id="Number" type="number"/> 
	    <a>=</a>
    </div>
</div>

<br>
</center>
`

var y;

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '60488f1271msh044b0d977c224ebp1e50b4jsna0da1a336cf9',
		'X-RapidAPI-Host': 'currency-conversion-and-exchange-rates.p.rapidapi.com'
	}
};
 	
function submite(curr: string) {
	  const r = Number(document.getElementById("Number")) *  y;
		result.textContent=curr;
}

fetch('https://currency-conversion-and-exchange-rates.p.rapidapi.com/latest?from=USD&to=EUR%2CGBP', options)
 	.then(response => response.json())
 	.then(response => {
 		console.log(response);
 		y = response.rates.CZK;
 	})
	 .catch(err => console.error(err));

//var x = document.getElementById("Result");
const result = document.createElement('p');
result.textContent = '';
result.id = 'result';
const btn = document.createElement('button');
btn.textContent = 'Click'
btn.addEventListener('click', () => submite(y))

document.getElementById('inLine').appendChild(result);
document.getElementById('inLine').appendChild(btn);


	