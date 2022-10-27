import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<h1 id="Title">Currency Converter</h1>
<center>
<div class="flex-container">
    <div class="currencyBox" id="currencyBox1">
        <a id="currencyFromName">-</a>
	</div>

	<div>
        <input id="Number" type="number"/> 
	    <a>=</a>
	    <a id="result">0.000</a>
    </div>

	<div class="currencyBox" id="currencyBox2">
        <a id="currencyToName">-</a>
	</div>
</div>
<div id="SubmitButton"></div>
<div id="SwitchButton"></div>
</center>
`


let currencyList = ["EUR", "CZK", "USD"];
let currencyResponse = {};



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
		currencyResponse = response.rates;
	})
	.catch(err => console.error(err));




function Convert() {
	var e = document.getElementById("currencyPickerFrom");
	let currencyFrom = e.options[e.selectedIndex].text;
	var e = document.getElementById("currencyPickerTo");
	let currencyTo = e.options[e.selectedIndex].text;

	let valueInEUR = document.getElementById('Number')!.value / currencyResponse[currencyFrom];
	document.getElementById('result')!.innerHTML = (valueInEUR * currencyResponse[currencyTo]).toFixed(3);

}

function SwitchCurrencies() {
let x = 0
x = currDropdown1.selectedIndex;
currDropdown1.selectedIndex = currDropdown2.selectedIndex;
currDropdown2.selectedIndex = x;
}




const result = document.createElement('p');
result.id = 'result';
const btn1 = document.createElement('button');
btn1.textContent = 'Convert'
btn1.id = "submitButton"
btn1.addEventListener('click', () => Convert())

const btn2 = document.createElement('button');
btn2.textContent = 'Switch'
btn2.id = "switchButton"
btn2.addEventListener('click', () => SwitchCurrencies())

const currDropdown1 = document.createElement('select');
currDropdown1.id = "currencyPickerFrom";
//currDropdown1.addEventListener('change', () => Refresh())
for (let i = 0; i < currencyList.length; i++) {
	var option = document.createElement("option");
	option.text = currencyList[i];
	currDropdown1.appendChild(option);
}

const currDropdown2 = document.createElement('select');
currDropdown2.id = "currencyPickerTo";
//currDropdown2.addEventListener('change', () => Refresh())
for (let i = 0; i < currencyList.length; i++) {
	var option = document.createElement("option");
	option.text = currencyList[i];
	currDropdown2.appendChild(option);
}
currDropdown2.selectedIndex = 1;


document.getElementById('SubmitButton')!.appendChild(result);
document.getElementById('SubmitButton')!.appendChild(btn1);
document.getElementById('SwitchButton')!.appendChild(btn2);
document.getElementById('currencyBox1')!.appendChild(currDropdown1);
document.getElementById('currencyBox2')!.appendChild(currDropdown2);
