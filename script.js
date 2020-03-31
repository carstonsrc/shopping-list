var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.getElementsByTagName("li");

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);


function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	var deleteButton = document.createElement("button");
	deleteButton.setAttribute("id", "deleteButton");
	li.appendChild(document.createTextNode(input.value));
	deleteButton.appendChild(document.createTextNode("Delete"))
	ul.appendChild(li);
	li.appendChild(deleteButton);
	input.value = "";
	listClickEvent();
	buttonClickEvent();
}

function addListAfterClick() {
	if(inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if(inputLength() > 0 && event.which === 13) {
		createListElement();
	}
}

function listClickEvent() {
	for (var i = 0; i < li.length; i++) {
		li[i].addEventListener("click", crossoutItem); 
		}
	}

function crossoutItem() {
	return this.classList.toggle("done");
}

function buttonClickEvent() {
	var btn = document.querySelectorAll("button");
	for (var i = 0; i < btn.length; i++) {
		btn[i].addEventListener("click", deleteItem);
	}
}

function deleteItem() {
	for (var i = 0; i < li.length; i++) {
		this.parentNode.remove();
	}

}
