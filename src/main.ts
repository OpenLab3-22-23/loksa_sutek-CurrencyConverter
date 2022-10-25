import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML =`
<h1 id="Title">Currency Converter</h1>

<center>

<div class="flex-container">
    <div id="currencyBox">
        <a id="currencyFrom"></a>

		<select id="currencyPickerFrom">
            <option>EUR</option>
            <option>CZK</option>
        </select>
	</div>

	<div>
        <input id="Number" type="number"/> 
	    <a>=</a>
	    <a id="result">0.000</a>
    </div>

	<div id="currencyBox">
        <a id="currencyTo"></a>

	    <select id="currencyPickerTo" onchange="RefreshActiveCurrencies()">
		    <option>CZK</option>
		    <option>EUR</option>
	    </select>
	</div>
</div>

<div id="SubmitButton"></div>
<div id="SwitchButton"></div>

</center>
`


let rate;
let currencyFrom = "EUR";
let currencyTo = "CZK";

let currencies = {};

// currencies.EUR;
// currencies["EUR"];



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
		currencies = response.rates;
		console.log(response);
		
		rate = response.rates.CZK;
		result.textContent = "Conversion rate: " + rate;

    })
    .catch(err => console.error(err));




function Submit() {
	document.getElementById('result')!.innerHTML = (document.getElementById('Number')!.value * rate).toFixed(3);
}

function SwitchCurrencies() {

}

// function RefreshActiveCurrencies() {
// 	var e = document.getElementById("currencyPickerFrom");
// 	document.getElementById('currencyFrom')!.textContent = e.options[e.selectedIndex].text;
// 	var e = document.getElementById("currencyPickerTo");
// 	document.getElementById('currencyTo')!.textContent = e.options[e.selectedIndex].text;	
// }


const result = document.createElement('p');
result.id = 'result';

const btn1 = document.createElement('button');
btn1.textContent = 'Convert'
btn1.id = "submitButton"
btn1.addEventListener('click', () => Submit())

const btn2 = document.createElement('button');
btn2.textContent = 'Switch'
btn2.id = "switchButton"
btn2.addEventListener('click', () => SwitchCurrencies())

const currFromDropdown = document.createElement('select');
currFromDropdown.id = "currencyFromDropdown";
currFromDropdown.addEventListener('onchange', () => Submit())
for (let i=0; i<10; i++)
{
	var option = document.createElement("option");
    option.text = i;
	currFromDropdown.appendChild(option);
}


document.getElementById('SubmitButton')!.appendChild(result);
document.getElementById('SubmitButton')!.appendChild(btn1);
document.getElementById('SwitchButton')!.appendChild(btn2);
document.getElementById('SwitchButton')!.appendChild(currFromDropdown);

	
