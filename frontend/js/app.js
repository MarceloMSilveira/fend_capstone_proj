import setCurrentYearInFooter from "./myFunctions/yearToFooter.js";
import onSubmitForm from "./myFunctions/parseSubmit.js";
import showAllTrips from "./myFunctions/showUserTrips.js";

export const trip = {
  id: '',
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

export let trips = [];

const previousTrips = localStorage.getItem('tripsOnLocalStorage');

if (previousTrips) {
  showAllTrips();
  trips = JSON.parse(localStorage.getItem('tripsOnLocalStorage'));
} else {
  //console.log('test');
}

const submitElement = document.querySelector("#submit-btn");
submitElement.addEventListener('click',onSubmitForm);

setCurrentYearInFooter();

const removeAllBtn = document.querySelector('#remove-all');
removeAllBtn.addEventListener('click',()=>
    {
      localStorage.clear();
      showAllTrips();
      trips=[];
      alert('All trips removed.');
    });

