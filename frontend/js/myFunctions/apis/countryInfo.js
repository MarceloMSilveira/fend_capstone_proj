import saveNewTrip from "../saveTrip.js";
import onResetForm from "../gui/onResetForm.js";
import setAdd from "../gui/notes_of_trip/setAdd.js";
import axios from "axios";

function getCountryName(countryCode) {
    try {
        // Cria uma instância de Intl.DisplayNames para traduzir códigos de região.
        // O primeiro argumento 'en' define o idioma do resultado (inglês).
        // O segundo argumento { type: 'region' } especifica que estamos buscando nomes de regiões (países).
        const regionNames = new Intl.DisplayNames(['en'], { type: 'region' });

        // Retorna o nome do país correspondente ao código.
        const countryName = regionNames.of(countryCode);
        
        // Retorna o nome, ou o código original se a API não encontrar um nome.
        return countryName || countryCode;

    } catch (error) {
        console.error("Erro ao obter o nome do país:", error);
        return countryCode; // Em caso de erro, retorna o código original
    }
}

export default async function callCountriesApi (trip) {
  
  const countryName = getCountryName(trip.country);
  
  async function getCountryInfoFromApi() {
    const apiKey='5ee99919fc7d197420bdd5427abf7074';
    const url = `https://api.countrylayer.com/v2/name/${countryName}?access_key=${apiKey}&fulltext=true`
    try {
      const result = await axios.get(url);
      const capital = result.data[0].capital;
      const region =  result.data[0].region;
      const callingCode = result.data[0].callingCodes[0];
      const domain = result.data[0].topLevelDomain[0];
      const response = {countryName, capital,region,callingCode,domain};
      return response;
    } catch (error) {
      console.log(error)
    }
  }

  function setTextArea(countryInfo) {
    $('p.trip-preview').text(`informations of ${countryName}`);
    const noteDiv = `
      <div>
        <textarea class="note-content" rows="7" cols="50">${countryInfo}</textarea>
        <div class = "add-btns">
          <button class="btn btn-success close-note"> Close </button>
        </div>
      </div>
    `;
    $('#weather').html(noteDiv);
  }

  function setInfoToShow(countryInfo) {
    const infoToShow = 
    `Capital: ${countryInfo.capital}\n`+
    `Region: ${countryInfo.region}\n`+
    `Calling Code: ${countryInfo.callingCode}\n`+
    `Web main domain: ${countryInfo.domain}`
    return infoToShow
  }

  const weatherDivContent = $('#weather').html();
  const countryDetails = await getCountryInfoFromApi();
  setTextArea(setInfoToShow(countryDetails));

  $('button.close-note').on('click',()=> {
    $('p.trip-preview').text(`Trip preview:`);  
    $('#weather').html(weatherDivContent)
    //recuperando as funcionalidades dos botoes:
    $('a.country-info').on('click', ()=>callCountriesApi(trip));
    $('div.add-btns').on('click', (evt) => setAdd(evt,trip));
    $('#save-trip').on('click', saveNewTrip);
    $('#clear-trip').on('click', onResetForm);
  });
}