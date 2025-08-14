import setCurrentYearInFooter from "./myFunctions/yearToFooter.js";
import onSubmitForm from "./myFunctions/parseSubmit.js";

export const trip = {
  city: '',
  country: '',
  departureDate: '',
  returnDate:'',
  tripLength:'',
  imgUrl:'',
  weather: {
    temp:'',
    high:'',
    low:'',
    description:''
  }
};

export const trips = [];

const submitElement = document.querySelector("#submit-btn");
submitElement.addEventListener('click',onSubmitForm);

setCurrentYearInFooter();

