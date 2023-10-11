function binarySearch(list, element) {
    if(list.length<1) return -1;//when list = [], return -1
    var start = 0;
    var end = list.length-1;
    var mid;

    while(start <= end) {
        //always recursive in while need reset mid, otherwise mid will always the same number
        mid = Math.floor((start+end)/2);
        if(list[mid]===element){
            return mid;
        } else if(list[mid] > element) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }

    return -1;
}
binarySearch([1, 10, 31], 1);
// result = binarySearch([-1, 10, 31], 1);
// console.log(result);
// get help from TA: Ali
//https://www.educative.io/answers/how-to-check-if-a-number-is-odd-or-even-in-javascript
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
