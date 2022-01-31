var chooseContact = document.querySelector("select");
chooseContact.addEventListener("change", selectContact);
function selectContact() {
  if (document.querySelector("select").value == "Email") {
    document.getElementById("contactInfo").innerHTML = "Enter your email";
    document.getElementById("contactInfo").style.display = "block";
  } else if (document.querySelector("select").value == "Phone") {
    document.getElementById("contactInfo").style.display = "block";
    document.getElementById("contactInfo").innerHTML = "Enter your phone";
  } else {
    document.getElementById("contactInfo").style.display = "none";
  }
}
var feildvalue = true;
chooseContact.addEventListener("change", disableFeild);
function disableFeild() {
  document.getElementById("contactValue").style.display = "none";
  if (document.querySelector("select").value == "Choose one") {
    document.getElementById("contactValue").style.display = "none";
  } else {
    document.getElementById("contactValue").style.display = "block";
  }
}
