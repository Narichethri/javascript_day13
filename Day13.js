function frequencySort(inputString) {
    if (inputString ==""){
        console.log("Given String is Empty");
    }else{
    let map = new Map();

    for (let key of inputString) {
        map.set(key, (map.get(key) || 0) + 1);
    }

    let array = [...map];  // copy map elements to array
    array.sort((a, b) => {
        if (a[1] === b[1]) {
            if (a[0] === a[0].toUpperCase() && b[0] === b[0].toLowerCase()) {
                inputString.indexOf(a[0]) - inputString.indexOf(b[0]);
            } else if (a[0] === a[0].toLowerCase() && b[0] === b[0].toUpperCase()) {
                inputString.indexOf(a[0]) - inputString.indexOf(b[0]);
            }
            return inputString.indexOf(b[0]) - inputString.indexOf(a[0]);
        }
        return b[1] - a[1];
    });

    let sortedString = '';
    for (let [char, freq] of array) {
        sortedString += char.repeat(freq);
    }

    console.log(sortedString);
}
}
frequencySort("")
