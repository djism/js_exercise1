var arr = ['a','n','k','f','n','d','g','t','j'];
var arr1 = ['a','f','g'];

function arr_diff (arr, arr1) {

    var a = [], diff = [];

    for (var i = 0; i < arr.length; i++) {
        a[arr[i]] = true;
    }

    for (var i = 0; i < arr1.length; i++) {
        if (a[arr1[i]]) {
            delete a[arr1[i]];
        } else {
            a[arr1[i]] = true;
        }
    }

    for (var k in a) {
        diff.push(k);
    }

    return diff;
}

console.log(arr_diff(arr,arr1));