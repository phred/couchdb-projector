function(doc) {
  if (doc.is_presentation) {
     emit(doc._id, doc);
  }
}
