
//imports
import axios from "axios";


/* Global Variables */

function setCurrentYearInFooter() {
  const spanElement = document.querySelector("#this-year");
  const thisYear = new Date().getFullYear();
  //console.log('test');
  //console.log(thisYear);
  spanElement.textContent = thisYear;
}

setCurrentYearInFooter();

