function check() {
    var x = document.forms["myform"]["name"].value;
    var y = document.forms["myform"]['email'].value;
    if (x == '' || y == '') {
        window.alert("Fill email carefully")
        return false;
    }
    window.alert("Thanks " + x + " , we get back to you via email");
}