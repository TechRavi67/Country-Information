
const searchData = () => {
    let countryName = document.getElementsByClassName("country-name")[0].value;
    var result = document.getElementsByClassName("output")[0].innerHTML= '';
    if (countryName != "") {
      fetch(`https://restcountries.com/v3.1/name/${countryName}`) 
      .then((info) => info.json())     
        .then((data) => {
          debugger
          let country = data[0];
          let currency = Object.values(country.currencies);
          let language = Object.values(country.languages);
          document.getElementsByClassName("output")[0].innerHTML= `
              <h2>${country.name.common}</h2>
              <div><img  class="flag" src="${country.flags.svg}"</div>
              <table>
              <tr>
                  <td>Capital : </td>
                  <td>${country.capital}</td>
              </tr>
              <tr>
                  <td>Currency : </td>
                  <td>${currency[0].name} ( ${currency[0].symbol} )</td>
              </tr>
              <tr>
                  <td>Languages : </td>
                  <td>${language}</td>
              </tr>
              <tr>
                  <td>Area : </td>
                  <td>${country.area}</td>
              </tr>
              <tr>
                  <td>Population : </td>
                  <td>${country.population}</td>
              </tr>
              </table>
              `;
        })
      //   .catch((error) => {
      //     document.getElementsByClassName("output")[0].innerHTML= `<div>${error}</div>`;
      //   })
      
    } else {
      document.getElementsByClassName("output")[0].innerHTML= "Please enter valid data.";
    }
  };
  