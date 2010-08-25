function (doc) {
    if (doc.is_remote) {
        emit(null, {"presentation": doc.presentation, "current_slide": doc.current_slide, "presenter": doc.presenter});
    }
}