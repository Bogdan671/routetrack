let select = function() {
	let head = document.querySelectorAll('.selected');
	let icons = document.querySelectorAll('.selected__icon');
	let selectHeader = document.querySelectorAll('.selected__header');
	let selectItem = document.querySelectorAll('.selected__item');
	let icon = document.querySelectorAll('.selected__icon');

	head.forEach((item, index) => {
		item.addEventListener('click', () => {
			icons[index].classList.toggle('updown');
		})
	});
   
	selectHeader.forEach( item => {
		item.addEventListener('click', selectToggle); 
	});	

	selectItem.forEach( item => {
		item.addEventListener('click', selectChoise);
	});


	function selectToggle() {
		this.parentElement.classList.toggle('active');
	}

	function selectChoise() {
		let text = this.textContent;
		let selection =  this.closest('.selected');
		let currentText = selection.querySelector('.selected__current');
		currentText.textContent = text;
		selection.classList.remove('active');
	}


	
}

select();