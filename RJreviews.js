/*The html element with the ID 'reviews-container' is assigned to the 'reviewsContainer' variable*/
const reviewsContainer = document.querySelector("#reviews-container");
/*The html element with the ID 'read-more-button' is assigned to the 'readMoreButton' variable*/
const readMoreButton = document.querySelector("#read-more-button");
/*The html element with the ID 'hide-more-button' is assigned to the 'hideMoreButton' variable*/
const hideMoreButton = document.querySelector("#hide-more-button");
/*This line of codde ensures the 'hideMoreButton' is hidden when the page loads*/
hideMoreButton.style.display = "none";
/*The constant varibale 'apiUrl' is assigned the URL of the api endpoint where the reeviews are stored*/
const apiUrl = "https://cis1110apicw.computing.edgehill.ac.uk/reviews";
/*The constant variable 'profilePicUrls' is assigned an array of 5 profile picture urls that will repeat
as a repeating pattern for every 5 reviews*/
const profilePicUrls = [
  "RJimages/reviewicon1.jpg",
  "RJimages/reviewicon1.jpg",
  "RJimages/reviewicon1.jpg",
  "RJimages/reviewicon2.jpg",
  "RJimages/reviewicon1.jpg",
];

/*Declares 'reviews' as an empty array*/
let reviews = [];


/*This function fetches and renders the reviews from the API.*/
function fetchReviews() {
  fetch(apiUrl)
    .then((response) => response.json()) //converts the response to JSON
    .then((data) => {
      reviews = data;
      renderReviews(reviews.slice(0, 5)); //Display the first 5 reviews
      /*If there are more than 5 reviews, the 'readMoreButton' will be displayed*/
      if (reviews.length > 5) {
        readMoreButton.style.display = "block";
      }
    })
    /*Log any errors to the console*/
    .catch((error) => console.log(error));
}


/*This function renders the reviews*/
function renderReviews(reviews) {
  reviewsContainer.innerHTML = "";

  /*Loops through each reviews*/
  reviews.forEach((review, index) => {

    /*Gets the profile picture URL for the current review*/
    const profilePicUrl = profilePicUrls[index % profilePicUrls.length];

    /*Creates the star rating from the score out of 5*/
    const ratingRedStars = "*".repeat(review.rating);
    const ratingGreyStars = "*".repeat(5 - review.rating);
    const ratingHtml = `<div class="rating"><span class="red-stars">${ratingRedStars}</span><span class="grey-stars">${ratingGreyStars}</span></div>`;
    
    /*Creates the html for the individual reviews*/
    const reviewHtml = `
      <div class='review'>
        <img class='profile-pic ${index % 2 === 1 ? 'rounded' : ''}' src='${profilePicUrl}' alt='Profile Picture'/>
        <div>
          ${ratingHtml}
          <div class='text'>${review.review}</div>
          <div id="review-extra-info"><span>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et.</span><div>
        </div>
      </div>
    `;

    /*Adds the 'reviewHTML's to the reviews container*/
    reviewsContainer.innerHTML += reviewHtml;
  });
}

/*javaScript for the 'READ ALL REVIEWS' (readMoreReviews) button*/
function readMoreReviews() {
  renderReviews(reviews);
  readMoreButton.style.display = "none";
  hideMoreButton.style.display = "block";
}

/*javaScript for the 'HIDE MORE REVIEWS' (hideMoreReviews) button*/
function hideMoreReviews() {
  renderReviews(reviews.slice(0, 5));
  hideMoreButton.style.display = "none";
  readMoreButton.style.display = "block";
}

/*Calls fetchReviews*/
fetchReviews();

/*When clicked, the respective function for each button is called*/
readMoreButton.addEventListener("click", readMoreReviews);
hideMoreButton.addEventListener("click", hideMoreReviews);





/*This function replaces the main image to the one seleected out of the 3 options*/
function changeImage(imagePath) {
  var selectedImg = document.getElementById("selected-img");
  selectedImg.src = imagePath;
}

const buyNowBtn = document.querySelector('.buy-now-btn');

/*Adds a class to the button when it is clicked*/
buyNowBtn.addEventListener('mousedown', function() {
this.classList.add('clicked');
});

/*Removes the previously added class when the mouse button is released*/
buyNowBtn.addEventListener('mouseup', function() {
this.classList.remove('clicked');
});