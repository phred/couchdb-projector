function(e, p) {
  var doc = $$(this).app.ddoc.vendor.couchapp.docs[p.id];
  var converter = $$(this).app.require('vendor/couchapp/lib/markdown');
  var html = converter.makeHtml(doc);
  return {
    html : html
  };
};
