function (head, req) {
    // !code lib/mustache.js
    // !json templates

    provides('html', function () {
        presentation = getRow().value;
        if (presentation.options) presentation.optionsAsJSON = JSON.stringify(presentation.options);
        send(Mustache.to_html(templates.default, presentation));
    });
}
