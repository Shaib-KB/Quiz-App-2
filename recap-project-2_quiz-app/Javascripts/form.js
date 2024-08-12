document.addEventListener("DOMContentLoaded", function () {
  // Function to update character count
  function updateCharCount(textarea, maxLength, countDisplay) {
    textarea.addEventListener("input", function () {
      const remaining = maxLength - textarea.value.length;
      countDisplay.textContent = `${remaining} characters remaining`;
    });
  }

  // Select elements and call the function for Question
  const questionField = document.getElementById("QuestionForm");
  const charCountQuestion = document.getElementById("charCountQuestion");
  updateCharCount(questionField, 76, charCountQuestion);

  // Select elements and call the function for Answer
  const answerField = document.getElementById("AnswerForm");
  const charCountAnswer = document.getElementById("charCountAnswer");
  updateCharCount(answerField, 150, charCountAnswer);
});
