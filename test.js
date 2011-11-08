// test blank rendering
var jsrender = require('./index');

// blank template
exports.blank = function(test) {
    var tmpl = jsrender.compile('<a></a>');
    test.equals('<a></a>', tmpl.render());
    test.equals('<a></a>', tmpl.render({ dummy: 'field' }));
    test.done();
};

// basic single field
exports.single = function(test) {
    var tmpl = jsrender.compile('{{=field}}');
    test.equals('sample', tmpl.render({ field: 'sample' }));
    test.done();
};

// test the compile & render functions
exports.express = function(test) {
    var tmpl = jsrender.express.compile('<p>{{=field}}</p>');
    var result = tmpl({field: 'test'});
    test.equals('<p>test</p>', result);
    test.done();
};

