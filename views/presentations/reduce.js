function (keys, values) {
    var first_slide = values.pop();
    first_slide.num_slides = values.length+1;

	return first_slide;
}
