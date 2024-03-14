let textInput = document.querySelector(".contentBlockBottom__list__text-input");
let textCloseButton = document.querySelector(".contentBlockBottom__list__text-input-close-button-link");

let addItemButton = document.querySelector(".contentBlockBottom__list-add-button");
let listContainer = document.querySelector('.contentBlockBottom__list-container');
let textInputValue = textInput.value;

let addListButton = document.querySelector('.contentBlockBottom__header-list-add-button');
let displayAddTextContainer = document.querySelector('.contentBlockBottom__list-add-container');
let toDoHeaderText = document.querySelector('.contentBlockBottom__header-text');

addListButton.addEventListener('click', function(event){
	console.log('click');
	displayAddTextContainer.classList.add('contentBlockBottom__list-add-container--active');

	setTimeout(function(){
        textInput.focus();
    }, 30);

	toDoHeaderText.classList.add('contentBlockBottom__display-none');
	addListButton.disabled = true;
});

function onClick(){
	textInputValue = textInput.value;

		if (!textInputValue == ''){
			textInput.value = '';
			console.log(textInputValue);

			let listItem = document.createElement('LI');
			listItem.innerHTML = textInputValue;
			listContainer.appendChild(listItem);

			displayAddTextContainer.classList.remove('contentBlockBottom__list-add-container--active');

			addListButton.disabled = false;
			toDoHeaderText.classList.remove('contentBlockBottom__display-none');

			localStorage.setItem('savedData', listContainer.innerHTML);
		}	
}

//Add click for close button
textCloseButton.addEventListener('click', function(event){
	displayAddTextContainer.classList.remove('contentBlockBottom__list-add-container--active');
	addListButton.disabled = false;

	textInput.value = '';

	toDoHeaderText.classList.remove('contentBlockBottom__display-none');
});


//Add item onlick
addItemButton.addEventListener('click', onClick);
//Add item on enter
textInput.addEventListener('keypress', function(event){
	if(event.key === 'Enter'){
		onClick();
	}
});


//Remove items by clicking on them
listContainer.addEventListener('click', function(event){
	if(event.target.nodeName === 'LI'){
		event.target.remove();
		localStorage.setItem('savedData', listContainer.innerHTML);
	}
});


//Save list content so it doesn't get cleared on refresh
window.addEventListener('load', function(event){
	let savedData = this.localStorage.getItem('savedData');
	if (savedData){
		listContainer.innerHTML = savedData;
	}
})