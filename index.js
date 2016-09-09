/**
* exec async function frequent
* */

function execFrequent(f, cb, times, perTimes, keep) {
    var interval = 0,
        count = 0;

    exec();

    function exec() {
        while(interval < perTimes && count < times) {
            f(next);
            interval ++;
            count ++;
        }
    }

    function next() {
        interval --;

        if(count < times) {
            if(interval < perTimes && keep || interval === 0) {
                exec();
            }
        } else if(interval === 0) {
            cb();
        }
    }
}

module.exports = execFrequent;

