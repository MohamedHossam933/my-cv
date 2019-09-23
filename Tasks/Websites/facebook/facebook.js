//log in function to line 32
var objPeople = [
	{ // Object @ 0 index
		username: "admin",
		password: "admin"
	},
	{ // Object @ 1 index
		username: "Admin",
		password: "Admin"
	},
	{ // Object @ 2 index
		username: "ADMIN",
		password: "ADMIN"
	}

]

function LogIn() {
	var username = document.getElementById('username').value
	var password = document.getElementById('password').value

	for(var i = 0; i < objPeople.length; i++) {
		// check is user input matches username and password of a current index of the objPeople array
		if(username == objPeople[i].username && password == objPeople[i].password) {
            // console.log(username + " is logged in!!!")
            window.location.href = "https://www.facebook.com";
			// stop the function if this is found to be true
			return
		}
	}
	alert ("incorrect username or password")
}