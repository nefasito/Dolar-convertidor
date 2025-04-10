let dollarRate = 0;

async function getDollarRate() {
  try {
    const response = await fetch('https://api.bluelytics.com.ar/v2/latest');
    const data = await response.json();
    dollarRate = data.blue.value_sell;
    document.getElementById('dollarValue').innerText = `$${dollarRate}`;
  } catch (error) {
    document.getElementById('dollarValue').innerText = 'Error al cargar 😞';
    console.error(error);
  }
}

function convertToARS() {
  const usd = parseFloat(document.getElementById('usdInput').value);
  if (isNaN(usd)) {
    document.getElementById('result').innerText = "💸 Ingresá un número válido";
    return;
  }
  const ars = usd * dollarRate;
  document.getElementById('result').innerText = `💸 Total en pesos: $${ars.toFixed(2)}`;
}

getDollarRate();
