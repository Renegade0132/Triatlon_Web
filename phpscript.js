var http = new XMLHttpRequest();
function send() {
    //var  = document.getElementById("").checked;
    //male = male ? 1 : 0;
    var inputUserName = document.getElementById("inputUserName").value;
    var inputEmail = document.getElementById("inputEmail").value;
    var inputPassword = document.getElementById("inputPassword").value;
   // var  = document.getElementById("").value;

    http.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            document.getElementById("valasz").innerHTML = this.responseText;
        }
    };

    http.open("POST", "reg.php", true);
    http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    http.send("inputUserName=" + inputUserName + "&inputEmail=" + inputEmail + "&inputPassword=" +  inputPassword);
}
