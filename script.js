function getFormvalue() {
    // Get the first name and last name values
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;

    // Show the alert with the full name
    alert(firstName + ' ' + lastName);
}
