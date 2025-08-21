import saveNewTrip from "../saveTrip.js";
import onResetForm from "../gui/onResetForm.js";
import setAdd from "../gui/notes_of_trip/setAdd.js";

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

export default function callCountriesApi (trip) {
  
  const countryName = getCountryName(trip.country);
  
  function getCountryInfo() {
    console.log('acessar a API e obter as info do país');
    return `${countryName} um lugar muito bom!`;
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

  const weatherDivContent = $('#weather').html();
  const countryInfo = getCountryInfo();
  setTextArea(countryInfo);
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