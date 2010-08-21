function (head, req) {
    // !code lib/mustache.js
    // !json templates

    provides('html', function () {
        var presentation = {
            slides: [],
            template: templates.default
        };
        while (slide = getRow()) {
            presentation.slides.push(slide.value);
        }

        var first_slide = presentation.slides[0];
        presentation.title = first_slide.presentation_title;
        presentation.colophon = first_slide.colophon;

        presentation.template = first_slide.template || presentation.template;
        template = templates[presentation.template] || templates.default;

        send(Mustache.to_html(template, presentation));
    });
}
