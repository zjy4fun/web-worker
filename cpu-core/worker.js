self.onmessage = function (event) {
    console.log('event = ', event);
    function task() {
        let sum = 0;
        for (let i = 0; i < 1e9; i++) {
            sum += i;
        }
        return sum;
    }
    const result = task();
    self.postMessage(result);
};