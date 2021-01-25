
exports.min = function min(array) {
    if (!array || array.length === 0) {
        return 0;
    }
    else { //1
        let min1;
        min1 = array[0];
        for (let i = 0; i < array.length; i++) {
            if (!Number.isInteger(array[i])) { //3
                return 0;
            } //3
            else {//4
                if (array[i] < min1) {
                    min1 = array[i];
                }
            }
        }
        return min1;
    }
}

exports.max = function max(array) {
    if (!array || array.length === 0) {
        return 0;
    }
    else { //1
        let max1 = array[0];
        for (let i = 0; i < array.length; i++) { //2
            if (!Number.isInteger(array[i])) { //3
                return 0;
            } //3
            else {//4
                if (array[i] > max1) {//5
                    max1 = array[i];
                }//5
            }//4
        }//2
        return max1;
    }//1
}

exports.avg = function avg(array) {
    if (!array || array.length === 0) {
        return 0;
    }
    else {
        console.log(array);
        let sum = 0;
        let avg1;
        for (let i = 0; i < array.length; i++) {
            if (!Number.isInteger(array[i])) {
                return 0;
            }
            else {
                sum = sum + array[i];
                avg1 = sum / array.length;
            }
        }
        return avg1;
    }
}
