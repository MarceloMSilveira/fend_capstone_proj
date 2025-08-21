import setCurrentYearInFooter from "./myFunctions/utils/yearToFooter.js";
import onSubmitForm from "./myFunctions/parseSubmit.js";
import showAllTrips from "./myFunctions/gui/showUserTrips.js";
import onResetForm from "./myFunctions/gui/onResetForm.js";

export let trip = {
  id: '',
  city: '',
  country: '',
  departureDate: '',
  returnDate:'',
  tripLength:'',
  imgUrl:'',
  notes:'',
  packingList:'',
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

const form = document.querySelector("#get-data-form");
form.addEventListener('submit',onSubmitForm);
form.addEventListener('reset', onResetForm);

setCurrentYearInFooter();

const removeAllBtn = document.querySelector('#remove-all');
removeAllBtn.addEventListener('click',()=>
    {
      localStorage.clear();
      showAllTrips();
      trips=[];
      alert('All trips removed.');
    });

