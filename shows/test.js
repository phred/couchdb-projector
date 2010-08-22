function (doc) {
    for (at in doc._attachments) {
        send(at);
    }
}
