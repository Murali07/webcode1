let target = document.getElementById("search");
const param1 = target.value;

async function getCountriesData() {
  // const response = await fetch("https://restcountries.com/v2/all")
  const response = await fetch(`https://api.nationalize.io/?name=${param1}`);  
  const countriesData = await response.json();
  return countriesData;
}

async function displayCountriesTable() {
  const countries = await getCountriesData();
  console.log(countries);

  const countriesTableBody = document.getElementById("countries-table-body");

  for (let i = 0; i < 2; i++) {
    const row = document.createElement("tr");

    const countryIdCell = document.createElement("td");
    countryIdCell.textContent = countries.country[i].country_id;
    row.appendChild(countryIdCell);

    const probabilityCell = document.createElement("td");
    probabilityCell.textContent = countries.country[i].probability;
    row.appendChild(probabilityCell);

    countriesTableBody.appendChild(row);
  }
}

displayCountriesTable();
