// bookmark icon
const bookmarkIcon = document.querySelectorAll(".question-card__icon");

bookmarkIcon.forEach((icon) => {
  let isBookmarked = false;

  icon.addEventListener("click", function () {
    isBookmarked = !isBookmarked;
    if (isBookmarked) {
      icon.src = "./assets/bookmark_filled.png";
    } else {
      icon.src = "./assets/bookmark.png";
    }
  });
});

// show & hide answer

// Select all answer buttons
const buttons = document.querySelectorAll(".question-card__button");

// Loop through each button
buttons.forEach((button) => {
  // Add click event listener to each button
  button.addEventListener("click", function () {
    // Find the corresponding answer paragraph
    const answer = button.nextElementSibling; // Toggle the 'hidden' class on the answer

    answer.classList.toggle("hidden"); // Update the button text based on the visibility of the answer

    if (answer.classList.contains("hidden")) {
      button.textContent = "show answer";
    } else {
      button.textContent = "hide answer";
    }
  });
});

// Get the checkbox
const darkModeToggle = document.getElementById("dark-mode");

// Listen for the toggle event
darkModeToggle.addEventListener("change", function () {
  // Toggle the dark-mode class on the body
  document.body.classList.toggle("dark-mode", darkModeToggle.checked);
});
