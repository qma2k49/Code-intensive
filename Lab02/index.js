// Bài 1. Viết hàm sumArray(arr) trả về tổng các phần tử trong mảng.
import { sumArray } from "./utils.js";
console.log(sumArray([1, 2, 3, 4, 5]));

// Bài 2. Viết hàm countOccurrences(arr, value) đếm số lần xuất hiện của value trong mảng arr
import { countOccurrences } from "./utils.js";
console.log(countOccurrences( [1, 2, 2, 3, 2], 2));

// Bài 3. Viết hàm removeDuplicates(arr) trả về mảng không có phần tử trùng lặp.
import { removeDuplicates } from "./utils.js";
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 6, 2, 3, 6]));

// Bài 4. Viết hàm flattenArray(arr) chuyển một mảng gồm các phần tử mảng 2D (2 chiều) thành mảng 1D (1 chiều)
import { flattenArray } from "./utils.js";
console.log(flattenArray([[1, 2], [3, 4], [5, 6]]));

// Bài 5. Viết hàm isSymmetric(arr) kiểm tra xem mảng có đối xứng hay không
import { isSymmetric } from "./utils.js";
console.log(isSymmetric([1, 2, 3, 2, 1]));

// Bài 6. Viết hàm findSecondLargest(arr) trả về giá trị lớn thứ hai trong mảng.
import { findSecondLargest } from "./utils.js";
console.log(findSecondLargest([3, 1, 4, 2, 4]));

// Bài 7. Viết hàm sortProductsByPrice(products) sắp xếp danh sách sản phẩm theo giá tăng dần.
import { sortProductsByPrice } from "./utils.js";
console.log(sortProductsByPrice([
    { name: "Product A", price: 30 },
    { name: "Product B", price: 20 },
    { name: "Product C", price: 50 }
]));

//Bài 8. Viết hàm findMostExpensiveProduct(products) trả về sản phẩm có giá lớn nhất.
import { findMostExpensiveProduct } from "./utils.js";
console.log(findMostExpensiveProduct([
    { name: "Product A", price: 30 },
    { name: "Product B", price: 20 },
    { name: "Product C", price: 50 }
]));

// Bài 9. Viết hàm groupByType(arr) gom nhóm các phần tử trong mảng dựa theo loại (type).

import { groupByType } from "./utils.js";
console.log(groupByType([
    { type: 'fruit', name: 'apple' },
    { type: 'vegetable', name: 'carrot' },
    { type: 'fruit', name: 'banana' }
]));

// Bài 10. Viết hàm isSubset(arr1, arr2) kiểm tra xem arr2 có phải là mảng con của arr1 hay không
import { isSubset } from "./utils.js";
console.log(isSubset([1, 2, 3, 4], [2, 4]));

// Bài 11. Viết hàm findMaxKey(obj) trả về key có giá trị số lớn nhất trong object.
import { findMaxKey } from "./utils.js";
console.log(findMaxKey({ a: 10, b: 20, c: 15 }));

// Bài 12. Viết hàm mergeObjectsSumValues(obj1, obj2) hợp hai object, nếu key trùng nhau thì cộng giá trị.
import { mergeObjectsSumValues } from "./utils.js";
console.log(mergeObjectsSumValues( { a: 10, b: 20 }, { b: 30, c: 40 }));

//Bài 13. Viết hàm countElements(arr) trả về object đếm số lần xuất hiện của mỗi phần tử trong mảng.
import { countElements } from "./utils.js";
console.log(countElements( ['a', 'b', 'a', 'c', 'b', 'a']));

// 
import { cleanObject } from "./utils.js";
console.log({ a: 1, b: null, c: undefined, d: 4 });

// Bài 15. Viết hàm hasDuplicate(arr) kiểm tra xem mảng có phần tử lặp lại hay không.
import { hasDuplicate } from "./utils.js";
console.log(hasDuplicate([1, 2, 3, 4, 2]));

// Bài 16. Viết hàm sumByGroup(arr, key) tính tổng giá trị theo nhóm.
import { sumByGroup } from "./utils.js";
console.log(sumByGroup([
     { type: 'fruit', price: 10 },
    { type: 'vegetable', price: 20 },
    { type: 'fruit', price: 30 }
]));

// Bài 17. Viết hàm uniqueValues(arr1, arr2) trả về mảng các giá trị duy nhất từ hai mảng.
import { uniqueValues } from "./utils.js";
console.log(uniqueValues([1, 2, 3], [3, 4, 5]));

// Bài 18. Viết hàm isPermutation(arr1, arr2) kiểm tra xem hai mảng có phải là hoán vị của nhau không.
import { isPermutation } from "./utils.js";
console.log(isPermutation([1, 2, 3], [3, 2, 1]));

// Bài 19. Viết hàm findLongestString(arr) trả về chuỗi có độ dài lớn nhất trong mảng.
import { findLongestString } from "./utils.js";
console.log(findLongestString(['abc', 'abcd', 'a']));


// Bài 20. Viết hàm intersection(arr1, arr2) trả về mảng chứa các giá trị chung giữa hai mảng.
import { intersection } from "./utils.js";
console.log(intersection([1, 2, 3], [2, 3, 4]));

// Bài 21. Viết hàm filterByMinValue(arr, minValue) để xóa tất cả các phần tử có giá trị nhỏ hơn minValue.
import { filterByMinValue } from "./utils.js";
console.log(filterByMinValue([5, 10, 15, 20], 12));

// Bài 22.  Viết hàm findLongestValue(obj) để tìm giá trị có độ dài lớn nhất trong một object.
import { findLongestValue } from "./utils.js";
console.log(findLongestValue( { a: 'cat', b: 'elephant', c: 'dog' }));

// Bài 23. Viết hàm groupByFirstLetter(arr) để gom nhóm các chuỗi theo chữ cái đầu tiên.
import { groupByFirstLetter } from "./utils.js";
console.log(groupByFirstLetter(['apple', 'banana', 'avocado', 'blueberry']));

// Bài 24. Viết hàm getAdults(people) để trả về danh sách người lớn (tuổi >= 18) từ một danh sách người.
import { getAdults } from "./utils.js";
console.log(getAdults( [
    { name: 'Alice', age: 17 },
    { name: 'Bob', age: 20 },
    { name: 'Charlie', age: 16 },
    { name: 'David', age: 22 }
]));

// Bài 25. Viết hàm convertToArray(obj) để chuyển đổi một object thành mảng các cặp [key, value].
import { convertToArray } from "./utils.js";
console.log(convertToArray( { a: 1, b: 2, c: 3 }));

// Bài 26. Viết hàm sortStringsByLength(arr) để sắp xếp mảng chuỗi theo độ dài tăng dần.
import { sortStringsByLength } from "./utils.js";
console.log(sortStringsByLength(['bc', 'ccc', 'bb']));

// Bài 27. Viết hàm sumByKey(arr, key) để tính tổng giá trị là số của một key được chỉ định trong danh sách object.
import { sumByKey } from "./utils.js";
console.log(sumByKey( [
    { type: 'fruit', price: 10 },
    { type: 'vegetable', price: 20 },
    { type: 'fruit', price: 30 }
], 'price'));

// Bài 28. Viết hàm countWords(str) để đếm số từ trong một chuỗi.
import { countWords } from "./utils.js";
console.log(countWords( "Hello world! Welcome to JavaScript"));

// Bài 29. Viết hàm findMinKey(obj) để tìm key có giá trị số nhỏ nhất trong object.
import { findMinKey } from "./utils.js";
console.log(findMinKey({ a: 100, b: 20, c: 50 }));
