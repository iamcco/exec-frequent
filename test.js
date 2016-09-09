var execFrequent = require('./dist/index.js');

var count = 0;

function test(cb) {
    count ++;
    console.log('exec test: ' + count);
    setTimeout((function(idx){
        return function() {
            console.log('exec test complete: ' + idx);
            cb();
        };
    })(count), 1000);
}

execFrequent(test, function() {
    console.log('exec all complete');
}, 30, 3, false);
