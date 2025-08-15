import setCurrentYearInFooter from "./myFunctions/yearToFooter.js";
import onSubmitForm from "./myFunctions/parseSubmit.js";
import showAllTrips from "./myFunctions/showUserTrips.js";

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

const previousTrips = localStorage.getItem('tripsOnLocalStorage');

if (previousTrips) {
  showAllTrips();
}

const submitElement = document.querySelector("#submit-btn");
submitElement.addEventListener('click',onSubmitForm);

setCurrentYearInFooter();

