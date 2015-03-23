$('.gallery__thumbs span img').click(function() {
	var img = $(this).attr('src');
	$('.gallery__big img.gallery-big').attr('src', img);

	var author = $(this).attr('data-photographer');
	$('.photographer').text(author);
});