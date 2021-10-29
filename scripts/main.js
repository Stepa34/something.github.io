let myImage = document.querySelector('img');

myImage.onclick = function(){
	let myScr = myImage.getAttribute('src');
	if(myScr === 'images/github.svg'){
		myImage.setAttribute('src', 'images/twitter.svg');
	} 
	else if(myScr === 'images/twitter.svg'){
		myImage.setAttribute('src', 'images/CSS.jpg')
	}
	else {
		myImage.setAttribute('src', 'images/github.svg');
	}
}


let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
	let myName = prompt('Please enter your name');
	if (!myName) {
		setUserName();
	} else{
		localStorage.setItem('name', myName);
		myHeading.textContent = 'Good morning, ' + myName;
	}
}

if(!localStorage.getItem('name')){
	setUserName();
} else {
	let storesName = localStorage.getItem('name');
	myHeading.textContent = 'Good morning, ' + storesName;
}
myButton.onclick = function(){
	setUserName();
}