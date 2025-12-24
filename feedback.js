document.getElementById("feedbackForm").addEventListener("submit", function (e) {
    e.preventDefault();

    alert("Feedback submitted successfully!");

    document.getElementById("feedbackForm").reset();
});
