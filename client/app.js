const messageForm = document.querySelector("#messageForm");

function handleSubmitMessageForm(event) {
  event.preventDefault();

  const formData = new FormData(messageForm);
  const message = formData.get("message");
  const username = formData.get("username");

  fetch("http://localhost:8080/message", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    
    body: JSON.stringify({ message, username }),
  })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error("Error:", error));
}

messageForm.addEventListener("submit", handleSubmitMessageForm);
