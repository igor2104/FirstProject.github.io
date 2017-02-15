'use strict';
$(() =>{
	let d = document, 
		w = window,
		flag = true,
		navBt = $('.conteiner-nav-button')[0],
		dropMain = $('#dropMain')[0];
	/**
	 * Подключение обработчика события нажатия 
	 * на кнопку выпадающего меню
	 */
	$(navBt).on('click', e => {
		e.preventDefault();
		if($(dropMain).css('display') === 'none')
			$(dropMain).slideDown("slow");
		else
			$(dropMain).slideUp("slow");
	});
	/**
	 * Подключение обработчика события изменения размера окна
	 */
	$(w).on('resize', () => {
		if(w.innerWidth <= 643 && flag){
			$(dropMain).hide();
			flag = false;
		}
		else if(w.innerWidth >= 643){
			$(dropMain).show();
			flag = true;
		}
	});
});