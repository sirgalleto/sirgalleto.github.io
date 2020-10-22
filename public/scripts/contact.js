const EMAIL = "svzosorio@gmail.com";
const SUBJECT = "Hello from your page!";
let messageTextBox;
let sendAnchor;

function start() {
  messageTextBox = document.getElementById("message");
  sendAnchor = document.getElementById("send");
  contactForm = document.getElementById("contact-form");
  messageTextBox.onchange = onMesage;

  sendAnchor.href = buildMailTo();
}

// Builds the mailto url with the default email and subject
function buildMailTo(body = "") {
  return `mailto:${EMAIL}?subject=${SUBJECT}&body=${body}`;
}

// When the textbox changes, we update the link href with the new mailto that contains the message
function onMesage(e) {
  sendAnchor.href = buildMailTo(messageTextBox.value);
}

window.onload = start;
