function testVariable() {
  var strText = document.getElementById("mail").value;
  var strText1 = document.getElementById("name").value;
  var strText2 = document.getElementById("pass").value;
  var result = 'Email: ' + strText + ' ' + ' Name: ' + strText1 + ' ' + ' Password: ' + strText2;
  document.getElementById("spanResult").textContent = result;
}
