function(doc) {
  if (doc.is_slide && doc.presentation == "RefreshColo.2010.08") {
     emit(doc.slide_num, doc);
  }
}
