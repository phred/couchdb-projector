function (head, req) {
    // !code lib/mustache.js
    // !json templates

    provides('html', function () {
        var presentation = {
            slides: []
        };
        while (slide = getRow()) {
            presentation.slides.push(slide.value);
        }

        presentation.title = presentation.slides[0].presentation_title;
        presentation.colophon = presentation.slides[0].colophon;

        send(Mustache.to_html(templates.default, presentation));
    });
}
