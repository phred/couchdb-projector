function(doc) {
  if (doc.is_slide) {
     emit([doc.presentation, doc.slide_num], doc);
  }
}
