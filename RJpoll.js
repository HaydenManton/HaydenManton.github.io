/*Selecting the elements from the DOM*/
const radioForm = document.querySelector('.radio-form');
const outputMessage = document.querySelector('#output-message');
const totalYes = document.querySelector('#total-yes');
const totalNo = document.querySelector('#total-no');

/*Initialising the count for the number of 'yes' &  'no' votes*/
let yesCount = 0;
let noCount = 0;

/*Retrieving the count values from the local storage*/
if (localStorage.getItem('pollTaken')) {
  yesCount = parseInt(localStorage.getItem('yesCount'));
  noCount = parseInt(localStorage.getItem('noCount'));
  
  /*Updates the User Interface with the counts*/
  totalYes.textContent = yesCount;
  totalNo.textContent = noCount;
}

/*This function hides the radio buttons and displays the thank you message*/
function submitPoll() {
  radioForm.style.display = 'none';
  outputMessage.style.display = 'block';
}

/*Adding event listener to the radio form*/
radioForm.addEventListener('change', function(event) {
  /*Checking if the selectedd input is of type 'radio'*/
  if (event.target.type === 'radio') {

    /*Updating the counts and displaying this*/
    if (event.target.value === 'yes') {
      yesCount++;
      totalYes.textContent = yesCount;
    } else if (event.target.value === 'no') {
      noCount++;
      totalNo.textContent = noCount;
    }

    /*Storing the count values in local storage*/
    localStorage.setItem('pollTaken', true);
    localStorage.setItem('yesCount', yesCount);
    localStorage.setItem('noCount', noCount);

    /*Calls the 'submitPoll' function*/
    submitPoll();
  }
});