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

function getInfo() {
	var username = document.getElementById('username').value
	var password = document.getElementById('password').value

	for(var i = 0; i < objPeople.length; i++) {
		// check is user input matches username and password of a current index of the objPeople array
		if(username == objPeople[i].username && password == objPeople[i].password) {
            // console.log(username + " is logged in!!!")
            window.location.href = "page-2.html";
			// stop the function if this is found to be true
			return
		}
	}
	alert ("incorrect username or password")
}

//insert function

function newElement() 
{
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
      alert("You must write something!");
    } else {
      document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";
  
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) 
{
  close[i].onclick = function() 
  {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

//search function
function search() { 
  let input = document.getElementById('searchbar').value 
  input=input.toLowerCase(); 
  let x = document.getElementsByClassName('st'); 
    
  for (i = 0; i < x.length; i++) {  
      if (!x[i].innerHTML.toLowerCase().includes(input)) { 
          x[i].style.display="none"; 
      } 
      else { 
          x[i].style.display="list-item";                  
      } 
  } 
}

//search and edit function
function edit()
{
  // console.log("edit button");
  let input = document.getElementById('myInput').value + document.getElementById('myInput2').value; 
    input=input.toLowerCase(); 
    let x = document.getElementsByClassName('ed'); 
      
    for (i = 0; i < x.length; i++) {  
        if (!x[i].innerHTML.toLowerCase().includes(input)) { 
            x[i].style.display="none"; 
        } 
        else { 
            x[i].style.display="list-item";                  
        } 
    } 
}

// saveEdits function
function saveEdits ()
{
  // console.log("changes saved");
  //get the editable element
  var editElem = document.getElementById("edit");

  //get the edited element content
  var userVersion = editElem.innerHTML;

  //save the content to local storage
  localStorage.userEdits = userVersion;

  //write a confirmation to the user
  document.getElementById("update").innerHTML="Edits saved";
}

function checkEdits() 
{
  //find out if the user has previously saved edits
  if(localStorage.userEdits!=null)
  document.getElementById("edit").innerHTML = localStorage.userEdits;
}
