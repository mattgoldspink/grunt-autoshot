'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.autoshot = {
  default_options: function(test) {
    test.expect(1);
    var local, remote, expected;

    local = grunt.file.read('test/screenshot/local-1920x1080-screenshot.jpg');
    expected = grunt.file.read('test/expected/local.jpg');
    test.equal(local, expected, 'should generate screenshot of sample site at local');

    test.done();
  }
};
