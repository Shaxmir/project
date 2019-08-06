// var container = document.querySelector('#container');
// var msnry = new Masonry( container, {
//   // Настройки
//   columnWidth: 100,
//   itemSelector: '.item'
// });
var container = document.querySelector('#container');
var msnry;
// Инициализация Масонри, после загрузки изображений
imagesLoaded( container, function() {
	msnry = new Masonry( container, {
			columnWidth: 100,
	itemSelector: '.item'
	} );
});