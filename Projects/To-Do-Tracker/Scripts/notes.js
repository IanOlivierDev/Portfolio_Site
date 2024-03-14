let uncompletedButton = document.querySelectorAll('.habits-container__content-container__item-button-cross');

for (let item of uncompletedButton){
	item.addEventListener('click', function(event){
		event.preventDefault();
		if(!item.classList.contains('habits-container__content-container__item-button-cross-reappear')){
			console.log("cross");
			item.classList.add('habits-container__content-container__item-button-cross-dissolve');
	
			setTimeout(() => {
				item.classList.add('habits-container__content-container__item-button-cross-reappear');
				item.src = '/Projects/To-Do-Tracker/Icons/done.png';
				item.classList.remove('habits-container__content-container__item-button-cross-dissolve');
			}, 300);
	
			item.src = '/Projects/To-Do-Tracker/Icons/uncompleted.png';
			item.classList.remove('habits-container__content-container__item-button-cross-reappear');
		}else{
			console.log("tick");
			item.classList.remove('habits-container__content-container__item-button-cross-reappear');
			item.classList.add('habits-container__content-container__item-button-cross-dissolve');
		
			setTimeout(() => {
				item.src = '/Projects/To-Do-Tracker/Icons/uncompleted.png';
				item.classList.remove('habits-container__content-container__item-button-cross-dissolve');
			}, 300);
		}
	});
};