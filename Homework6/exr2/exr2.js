function arrayToList(arr) {
    let i=arr.shift();
    if (i===undefined) {
        return null;
    }
    else {
        return {value: i, rest: arrayToList(arr)};
    }
}
let lst=arrayToList([1, 2, 3]);
console.log(lst);

let array=[];
function listToArray(list) {
    for (let key in list) {
        if (list[key]==='null' || typeof(list[key])!='object') {
            array.push(list[key]);
        }
        else {
            return listToArray(list[key]);
        }
    }
    return array;
}
console.log(listToArray(lst));

function prepend(k, list) {
    return {value: k, rest: list};
}
console.log(prepend(0, lst));

function nth(k, list) {
    if (k==0) {
        return list.value;
    }
    else {
        if (k<0 || !list.rest){
            console.log('Error');
            return undefined;
        } else {
            k--;
            return nth(k, list.rest);
        }
    }
}
console.log(nth(2, lst));
