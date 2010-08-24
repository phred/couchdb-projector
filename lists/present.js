function (head, req) {
    // !code lib/mustache.js
    // !json templates

    provides('html', function () {
        presentation = getRow().value;
        send(Mustache.to_html(templates.default, presentation));
    });
}
