function showImage( e) {
  $.colorbox({
    href: $(e.currentTarget).attr("src"),
    maxWidth: '100%',
  });
}


$("img").on("click", showImage);
