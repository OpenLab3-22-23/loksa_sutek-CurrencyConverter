import './style.css'
import obrazok from "./exchange.png"

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<h1>Currency Converter</h1>
<center>
<div class="flex-container">
    <div class="currencyBox" id="currencyBox1">
        <a id="currencyFromName">-</a>
		<br>
	</div>
	<div>
        <input id="Number" type="number"/> 
	    <a>=</a>
	    <a id="result">0.000</a>
        <div id="SwitchButton"></div>
    </div>
	<div class="currencyBox" id="currencyBox2">
        <a id="currencyToName">-</a>
		<br>
	</div>
</div>
<div id="SubmitButton"></div>
</center>
`


let currencyList = ["EUR", "CZK", "USD"];
let currencyResponse = {};


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'be0031aab8msh8250900d57a31e3p1ed628jsn07be2a944c5a',
		'X-RapidAPI-Host': 'currency-conversion-and-exchange-rates.p.rapidapi.com'
	}
};



function Convert() {
	document.getElementById('result')!.innerText = ".............."
	fetch('https://currency-conversion-and-exchange-rates.p.rapidapi.com/latest?from=USD&to=EUR%2CGBP', options)
		.then(response => response.json())
		.then(response => {
			currencyResponse = response.rates;
			var i = document.getElementById("currencyPickerFrom");
			let currencyFrom = i.options[i.selectedIndex].text;
			var i = document.getElementById("currencyPickerTo");
			let currencyTo = i.options[i.selectedIndex].text;

			let valueInEUR = document.getElementById('Number')!.value / currencyResponse[currencyFrom];
			document.getElementById('result')!.innerText = (valueInEUR * currencyResponse[currencyTo]).toFixed(3);
		})
		.catch(err => console.error(err));
}

function SwitchCurrencies() {
	let i = currDropdown1.selectedIndex;
	currDropdown1.selectedIndex = currDropdown2.selectedIndex;
	currDropdown2.selectedIndex = i;
	RefreshCurrencyFrom();
	RefreshCurrencyTo();
}



function RefreshCurrencyFrom() {
	var select = document.getElementById("currencyPickerFrom");
	switch (select.options[select.selectedIndex].text)
	{
		case "EUR":
			document.getElementById("currencyFromName")!.innerText = "\u20AC";
			break;
		case "CZK":
			document.getElementById("currencyFromName")!.innerText = "k\u010D";
			break;
		case "USD":
			document.getElementById("currencyFromName")!.innerText = "\u0024";
			break;
    }
}

function RefreshCurrencyTo() {
	var select = document.getElementById("currencyPickerTo");
	switch (select.options[select.selectedIndex].text)
	{
		case "EUR":
			document.getElementById("currencyToName")!.innerText = "\u20AC";
			break;
		case "CZK":
			document.getElementById("currencyToName")!.innerText = "k\u010D";
			break;
		case "USD":
			document.getElementById("currencyToName")!.innerText = "\u0024";
			break;
	}
}


//POCIATOCNE VYTVARANIE WEBU
const result = document.createElement('p');
result.id = 'result';

const convertButton = document.createElement('button');
convertButton.textContent = 'Convert'
convertButton.id = "submitButton"
convertButton.addEventListener('click', () => Convert())

const switchButton = document.createElement('a');
const exchangeImage = document.createElement("img");
exchangeImage.height = 40;
exchangeImage.setAttribute("src", obrazok);
switchButton.appendChild(exchangeImage);
switchButton.id = "switchButton"
switchButton.addEventListener('click', () => SwitchCurrencies())

const currDropdown1 = document.createElement('select');
currDropdown1.id = "currencyPickerFrom";
currDropdown1.addEventListener('change', () => RefreshCurrencyFrom())
for (let i = 0; i < currencyList.length; i++) {
	var option = document.createElement("option");
	option.text = currencyList[i];
	currDropdown1.appendChild(option);
}

const currDropdown2 = document.createElement('select');
currDropdown2.id = "currencyPickerTo";
currDropdown2.addEventListener('change', () => RefreshCurrencyTo())
for (let i = 0; i < currencyList.length; i++) {
	var option = document.createElement("option");
	option.text = currencyList[i];
	currDropdown2.appendChild(option);
}
currDropdown2.selectedIndex = 1;


document.getElementById('SubmitButton')!.appendChild(result);
document.getElementById('SubmitButton')!.appendChild(convertButton);
document.getElementById('SwitchButton')!.appendChild(switchButton);
document.getElementById('currencyBox1')!.appendChild(currDropdown1);
document.getElementById('currencyBox2')!.appendChild(currDropdown2);

RefreshCurrencyFrom();
RefreshCurrencyTo();
