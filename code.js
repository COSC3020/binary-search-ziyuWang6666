function binarySearch(list, element) {
    list.sort();
    var start = 0;
    var end = list.length-1;
    var mid = Math.floor((start+end)/2);

    while(start <= end) {
        if(list[mid]===element){
            return true;
        } else if(list[mid] > element) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }

    return false;
    //return -1;
}
result = binarySearch([1,2,3,4,5,6,7], 5);
console.log(result);

// get help from TA: Ali
//https://www.educative.io/answers/how-to-check-if-a-number-is-odd-or-even-in-javascript
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
