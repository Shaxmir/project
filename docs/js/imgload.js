$('#container').imagesLoaded()
  .always( function( instance ) {
    console.log('Все изображения загружены');
  })
  .done( function( instance ) {
    console.log('Все изображения загрузились удачно');
  })
  .fail( function() {
    console.log('все изображения загружены, но одно или больше не загрузились');
  })
  .progress( function( instance, image ) {
    var result = image.isLoaded ? 'загрузилось' : 'не загрузилось';
    console.log( 'Изображение ' + image.img.src + result );
  });

  $('#container').imagesLoaded( { background: true }, function() {
    console.log('#container фоновое изображение загружено');
  });