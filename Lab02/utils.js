export const sumArray = (arr) => {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

export const countOccurrences = (arr, value) => {
    let countValue = 0;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === value) countValue++;
    }
    return countValue;
}

export const removeDuplicates = (arr) => {
    let uniqueArr = [];
    for(let i = 0; i < arr.length; i++) {
        if(!uniqueArr.find(element => element === arr[i])) {
            uniqueArr.push(arr[i]);
        }
    }
    return uniqueArr;
}

export const flattenArray = (arr) => {
    let flatArr = [];
    for(let i = 0; i < arr.length; i++) {
        flatArr = [...flatArr, ...arr[i]];
    }
    return flatArr;
}

export const isSymmetric = (arr) => {
    for(let i = 0; i < arr.length / 2; i++) {
        if(arr[i] !== arr[arr.length - 1 - i]) return false;
    }
    return true;
}

export const findSecondLargest = (arr) => {
    let largest = -Infinity;
    let secondLargest = -Infinity;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i];
        } else if(arr[i] > secondLargest && arr[i] < largest) {
            secondLargest = arr[i];
        }
    }
    return secondLargest;
}

export const sortProductsByPrice = (products) => {
    products.sort( (a, b) => a.price - b.price);
    return products; 
}

export const findMostExpensiveProduct = (products) => {
    let mostExpensiveProduct = products[0];
    for(let i = 1; i < products.length; i++) {
        if(products[i].price > mostExpensiveProduct.price) {
            mostExpensiveProduct = products[i];
        }
    }
    return mostExpensiveProduct;
}

export const groupByType = (arr) => {
    let grouped = {};
    for(let i = 0; i < arr.length; i++) {
        let type = arr[i].type;
        if(!grouped[type]) {
            grouped[type] = [];
        }
        grouped[type].push(arr[i].name);
    }
    return grouped;
}

export const isSubset = (arr1, arr2) => {
    for(let i = 0; i < arr2.length; i++) {
        if(!arr1.includes(arr2[i])) return false;
    }
    return true;
}

export const findMaxKey = (obj) => {
    let maxKey = null;
    for(let key in obj) {
        if(maxKey === null) maxKey = key;
        else {
            if(obj[maxKey] < obj[key]) maxKey = key;
        }
    }
    return maxKey;
}

export const mergeObjectsSumValues = (obj1, obj2) => {
    let merged = { ...obj1 };
    for(let key in obj2) {
        if(merged[key]) merged[key] += obj2[key];
        else merged[key] = obj2[key];
    }
    return merged;
}

export const countElements = (arr) => {
    let countObj = {};
    for(let i = 0; i < arr.length; i++) {
        if(countObj[arr[i]]) countObj[arr[i]]++;
        else countObj[arr[i]] = 1;
    }
    return countObj;
}

export const cleanObject = (obj) => {
    for(let key in obj) {
        if(obj[key] === null || obj[key] === undefined) {
            delete obj[key];
        }
    }
    return obj;
}

export const hasDuplicate = (arr) => {
    let setObj = {};
    for(let i = 0; i < arr.length; i++) {
        if(setObj[arr[i]]) return true;
        else setObj[arr[i]] = true;
    }
    return false;
}

export const sumByGroup = (arr) => {
    let groupSums = {};
    for(let i = 0; i < arr.length; i++) {
        if(groupSums[arr[i].type]) groupSums[arr[i].type] += arr[i].price;
        else groupSums[arr[i].type] = arr[i].price;
    }
    return groupSums;
}

export const uniqueValues = (arr1, arr2) => {
    const combined = [...arr1, ...arr2];
    let uniqueArr = [];
    for(let i = 0; i < combined.length; i++) {
        if(!uniqueArr.find(element => element === combined[i])) {
            uniqueArr.push(combined[i]);
        }
    }
    return uniqueArr;
}

export const isPermutation = (arr1, arr2) => {
    if(arr1.length !== arr2.length) return false;

    const sortedArr1 = [...arr1].sort((a,b) => a - b);
    const sortedArr2 = [...arr2].sort((a,b) => a - b);

    for(let i = 0; i < sortedArr1.length; i++) {
        if(sortedArr1[i] !== sortedArr2[i]) return false;
    }
    return true;
}

export const findLongestString = (arr) => {
    let longestString = arr[0];
    for(let i = 1; i < arr.length; i++) {
        if(arr[i].length > longestString.length) {
            longestString = arr[i];
        }
    }
    return longestString;
}

export const intersection = (arr1, arr2) => {
    let intersectionArr = [];
    for(let i = 0; i < arr1.length; i++) {
        if(arr2.find(element => element === arr1[i]) && !intersectionArr.find(element => element === arr1[i])) {
            intersectionArr.push(arr1[i]);
        }
    }
    return intersectionArr;
}
export const filterByMinValue = (arr, minValue) => {
    const filteredArr = arr.filter(element => element >= minValue);
    return filteredArr;
}

export const findLongestValue = (obj) => {
    let longestValue = null;
    for(let key in obj) {
        if(longestValue === null || obj[key].length > longestValue.length) {
            longestValue = obj[key];
        }
    }
    return longestValue;
}

export const groupByFirstLetter = (arr) => {
    let grouped = {};
    for(let i = 0; i < arr.length; i++) {
        let firstLetter = arr[i][0];
        if(!grouped[firstLetter]) {
            grouped[firstLetter] = [];
        }
        grouped[firstLetter].push(arr[i]);
    }
    return grouped;
}

export const getAdults = (people) => {
    let adults = [];
    for(let person of people) {
        if(person.age >= 18) {
            adults.push(person);
        }
    }
    return adults;
}

export const convertToArray = (obj) => {
    return Object.entries(obj);
}

export const sortStringsByLength = (arr) => {
    return arr.sort((a, b) => a.length - b.length);
}

export const sumByKey = (arr, key) => {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i][key]) sum += arr[i][key];
    }
    return sum;
}

export const countWords = (str) => {
    const words = str.trim().split(/\s+/);
    return words.length;
}

export const findMinKey = (obj) => {
    let minKey = null;
    for(let key in obj) {
        if(minKey === null) minKey = key;
        else {
            if(obj[minKey] > obj[key]) minKey = key;
        }
    }
    return minKey;
}