import setCurrentYearInFooter from "./myFunctions/yearToFooter.js";
import onSubmitForm from "./myFunctions/parseSubmit.js";

export let projData = {
  city: '',
  country: '',
  departureDate: '',
  returnDate:'',
  tripLength:'',
  weather: {
    temp:'',
    high:'',
    low:'',
    description:''
  }
}

const submitElement = document.querySelector("#submit-btn");
submitElement.addEventListener('click',onSubmitForm);

setCurrentYearInFooter();

