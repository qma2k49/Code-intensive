export const productInfo = (name, price) => {
    const formatPrice = price.toLocaleString();
    return `Sản phẩm: ${name}, Giá: ${price} VNĐ`;
}

export const greet = (name) => {
    return `Xin chào, ${name}`;
}

export const sumtoN = (n) => {
    if (n <= 0) return "inValid";
    else return n * (n + 1) / 2;
}

export const squareN = (n) => n * n;

export const isEven = (n) => {
    if (n % 2 === 0) return true;
    else return false;
}

export const firstElement = (arr) => {
    return arr[0];
}

export const sumArr = (...args) => {
    let sum = 0;
    for (let i = 0; i < args.length; i++) sum += args[i];
    return sum;
}

export const showInfo = (obj) => {
    return `Name: ${obj.name}, Age: ${obj.age}`;
}

export const nameList = (people) => {
    const nameOfPeople = people.map(person => person.name);
    let result = "";

    result = nameOfPeople.join(", ");
    return result;
}
export const LengthOfString = (str) => str.length;

export const toUpper = (str) => {
    return str.toUpperCase();
}

export const formattedMoney = (money) => {
    return money.toLocaleString();
}

export const maxArray = (arr) => {
    let Max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (Max < arr[i]) Max = arr[i];
    }
    return Max;
}

export const checkPrime = (n) => {
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i == 0) return false;
    }
    return true;
}

export const repeatString = (str, num) => {
    let result = "";
    for (let i = 1; i <= num; i++) {
        result += str;
        if (i < num) result += " ";
    }
    return result;
}

export const sumOdd = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        const curr = arr[i];
        if (curr % 2 != 0) sum += curr;
    }
    return sum;
}

export const sumGreaterThan = (arr, n) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        const curr = arr[i];
        if (curr > n) sum += curr;
    }
    return sum;
}

export const formatDate = (date) => {
    const dateObj = new Date(date);
    const formattedDate = new Intl.DateTimeFormat('vi-VN').format(dateObj);
    console.log(formattedDate);
}
export const firstThree = (arr) => {
    if (arr.length < 3) return "Không đủ 3 phần tử để lấy ra";
    return [arr[0], arr[1], arr[2]];
}

export const containsChar = (str, char) => {
    for (let i = 0; i < str.length; i++) {
        const curr = str[i];
        if (curr === char) return true;
    }
    return false;
}

export const mergeArrays = (arr1, arr2) => {
    return [...arr1, ...arr2];
}

export const countOccurences = (arr, x) => {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        const curr = arr[i];
        if (curr === x) count++;
    }
    return count;
}

export const filterOdd = (arr) => {
    const oddArr = arr.filter((item) => {
        return item % 2 != 0;
    });
    return oddArr;
}

export const greaterThan = (arr, x) => {
    const greaterArr = arr.filter((item) => {
        return item > x;
    });
    return greaterArr;
}

export const factorial = (n) => {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

export const seperateEvenOdd = (arr) => {
    const oddArr = [], evenArr = [];
    for (let i = 0; i < arr.length; i++) {
        const curr = arr[i];
        if (curr % 2 == 0) {
            oddArr[oddArr.length] = curr;
        }
        else {
            evenArr[evenArr.length] = curr;
        }
    }
    const obj = { even: `${evenArr}`, odd: `${oddArr}` };
    return obj;
}

export const sortAsc = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        let minNum = arr[i];
        let minIndex = i;
        for (let j = i; j < arr.length; j++) {
            if (minNum > arr[j]) {
                minNum = arr[j];
                minIndex = j;
            }
        }

        if (minIndex !== i) {
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }
    return arr;
}

export const sumEvenIndex = (arr) => {
    let sum = 0;
    for(let i = 0; i < arr.length; i += 2) {
        sum += arr[i];
    }
    return sum;
}

export const multiplyByTwo = (arr) => {
    const TwiceArr = arr.map(item => item * 2);
    return TwiceArr;
}

export const arrayToString = (arr) => {
    let str = "";
    for(let i = 0; i < arr.length; i++) {
        str += arr[i];
    }
    return str;
}