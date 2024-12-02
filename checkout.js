function validateForm() {
  var name = document.getElementById("name").value;
  var phonenumber = document.getElementById("phonenumber").value;

  if (/\d/.test(name) || name.trim() === "") {
    alert("cannot contain numbers.");
    return false;
  }
  if (!validatePhoneNumber(phone)) {
    alert("cannot contain letters");
  }
  return true;

  function validatePhoneNumber(phone) {
    var phoneRegex = /^\d{8}$/;
    return phoneRegex.test(phone);
  }
}
