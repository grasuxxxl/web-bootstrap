/**
 * Created by maximilian on 30.07.2015.
 */
export default {
    single (fn) {
        var args,
            running = false;

        return function () {
            args = arguments;
            if (running) return new Promise(function () {});
            running = true;

            var result = fn.apply(this, args)
                .then(function handler(result) {
                    running = false;
                    var ret = args ? fn.apply(this, args).then(handler) : result;

                    args = undefined;
                    return ret;
                });
            args = undefined;
            return result;
        };
    }
}