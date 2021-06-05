<html>
<head>
<script>
function validate()
{
var email=document.myform.email.value;
var password=document.myform.password.value;
var phno=document.myform.phno.value;
if(email.length=="")
{
alert("Enter email adress properly");
document.myform.email.focus();
return false;
}
var exp=/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
var x=exp.test(email);
if(x)
{
alert("Email succesful");
}
else
{
alert("Enter email adress properly");
document.myform.email.focus();
return false;
}
</script>
</head>
<body>
<form name="myform" action="register.php" onsubmit="return validate()">
EMAIL <input type="text" name="email"><br>
PASSWORD <input type="text" name="password"><br>
PHONE NUMBER <input type="text" name="phno"><br>
<input type="submit" value="submit">
</form>
</body>
</html>