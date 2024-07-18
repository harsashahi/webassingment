<!DOCTYPE html>
<html>
<head>
<title>Window Object Methods</title>
</head>
<body>

<button onclick="showAlert()">Show Alert</button>
<button onclick="showPrompt()">Show Prompt</button>
<button onclick="showConfirm()">Show Confirm</button>
<button onclick="openNewWindow()">Open New Window</button>

<script>
function showAlert() {
  window.alert("This is an alert message!");
}

function showPrompt() {
  const name = window.prompt("Enter your name:", "Default Name");
  if (name) {
    console.log("Hello, " + name + "!");
  } else {
    console.log("You didn't enter a name.");
  }
}

function showConfirm() {
  const confirmed = window.confirm("Are you sure you want to continue?");
  if (confirmed) {
    console.log("You confirmed!");
  } else {
    console.log("You canceled.");
  }
}

function openNewWindow() {
  const newWindow = window.open("https://www.example.com", "_blank"); 
  if (newWindow) {
    console.log("New window opened successfully!");
  } else {
    console.log("Popup blocker might be preventing the new window.");
  }
}

</script>

</body>
</html>
