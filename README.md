
### exec function frequent

> execFrequent(f, cb, times, perTimes, keep)


**param keep is true**

```
var execFrequent = require('exec-frequent');

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
}, 30, 3, true);
```

output:

```
exec test: 1
exec test: 2
exec test: 3
exec test complete: 1
exec test: 4
exec test complete: 2
exec test: 5
exec test complete: 3
exec test: 6
exec test complete: 4
exec test: 7
exec test complete: 5
exec test: 8
exec test complete: 6
exec test: 9
exec test complete: 7
exec test: 10
exec test complete: 8
exec test: 11
exec test complete: 9
exec test: 12
exec test complete: 10
exec test: 13
exec test complete: 11
exec test: 14
exec test complete: 12
exec test: 15
exec test complete: 13
exec test: 16
exec test complete: 14
exec test: 17
exec test complete: 15
exec test: 18
exec test complete: 16
exec test: 19
exec test complete: 17
exec test: 20
exec test complete: 18
exec test: 21
exec test complete: 19
exec test: 22
exec test complete: 20
exec test: 23
exec test complete: 21
exec test: 24
exec test complete: 22
exec test: 25
exec test complete: 23
exec test: 26
exec test complete: 24
exec test: 27
exec test complete: 25
exec test: 28
exec test complete: 26
exec test: 29
exec test complete: 27
exec test: 30
exec test complete: 28
exec test complete: 29
exec test complete: 30
exec all complete
```

**param keep is false**

```
var execFrequent = require('exec-frequent');

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
```

output:

```
exec test: 1
exec test: 2
exec test: 3
exec test complete: 1
exec test complete: 2
exec test complete: 3
exec test: 4
exec test: 5
exec test: 6
exec test complete: 4
exec test complete: 5
exec test complete: 6
exec test: 7
exec test: 8
exec test: 9
exec test complete: 7
exec test complete: 8
exec test complete: 9
exec test: 10
exec test: 11
exec test: 12
exec test complete: 10
exec test complete: 11
exec test complete: 12
exec test: 13
exec test: 14
exec test: 15
exec test complete: 13
exec test complete: 14
exec test complete: 15
exec test: 16
exec test: 17
exec test: 18
exec test complete: 16
exec test complete: 17
exec test complete: 18
exec test: 19
exec test: 20
exec test: 21
exec test complete: 19
exec test complete: 20
exec test complete: 21
exec test: 22
exec test: 23
exec test: 24
exec test complete: 22
exec test complete: 23
exec test complete: 24
exec test: 25
exec test: 26
exec test: 27
exec test complete: 25
exec test complete: 26
exec test complete: 27
exec test: 28
exec test: 29
exec test: 30
exec test complete: 28
exec test complete: 29
exec test complete: 30
exec all complete
```
