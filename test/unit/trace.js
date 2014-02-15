var expect = require('chai').expect;
var logger = require('../..');

describe('cli-logger:', function() {
  it('should log trace message', function(done) {
    var name = 'mock-trace-logger';
    var conf = {name: name, level: logger.TRACE};
    var log = logger(conf);
    log.trace('mock trace message');
    done();
  });
  it('should ignore trace with info level', function(done) {
    var name = 'mock-trace-logger';
    var conf = {name: name};
    var log = logger(conf);
    log.trace('mock %s message to ignore', 'trace');
    done();
  });
})
