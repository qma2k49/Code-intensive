// Bài 1: In ra chuỗi sử dụng Template Literals, kết hợp Function như sau:
import { productInfo } from "./utils.js";
console.log(productInfo("Sách", 20000));


// Bài 2: Viết hàm chào người dùng theo tên
import { greet } from "./utils.js";
console.log(greet("An"));

// Bài 3: Tính tổng các số từ 1 đến n
import { sumtoN } from "./utils.js";
console.log(sumtoN(5));

// Bài 4: Tính bình phương một số
import { squareN } from "./utils.js";
console.log(squareN(6));

// Bài 5: Kiểm tra số chẵn hay lẻ
import { isEven } from "./utils.js";
console.log(isEven(7));

// Bài 6: Viết hàm trả về phần tử đầu tiên của mảng
import { firstElement } from "./utils.js";
console.log(firstElement([1, 2, 3]));

// Bài 7: Sử dụng Rest Operator để tính tổng
import { sumArr } from "./utils.js";
console.log(sumArr(1, 2, 3, 4));

// Bài 8: Tách giá trị từ đối tượng
import { showInfo } from "./utils.js";
const user = {name: "Nam", age: 30};
console.log(showInfo(user));

// Bài 9: In ra danh sách tên từ mảng đối tượng
import { nameList } from "./utils.js";
const people = [{ name: "And" }, { name: "Bình" }];
console.log(nameList(people));

// Bài 10: Tính độ dài chuỗi
import { LengthOfString } from "./utils.js";
console.log(LengthOfString("Hello World"));

// Bài 11: Chuyển đổi chuỗi thành chữ hoa
import { toUpper } from "./utils.js";
console.log(toUpper("Hello World"));

// Bài 12: Chuyển đổi số sang dạng tiền tệ
import { formattedMoney } from "./utils.js";
console.log(formattedMoney(100000));

// Bài 13: Tính giá trị lớn nhất trong mảng
import { maxArray } from "./utils.js";
console.log(maxArray([10, 5, 20, 8]));

// Bài 14: Viết hàm kiểm tra số nguyên tố
import { checkPrime } from "./utils.js";
console.log(checkPrime(7));

// Bài 15: In ra chuỗi n lần
import { repeatString } from "./utils.js";
console.log(repeatString("Hello", 3));

// Bài 16: Tính tổng các số lẻ trong mảng
import { sumOdd } from "./utils.js";
console.log(sumOdd([1, 2, 3, 4]));

// Bài 17: Tính tổng các số > n
import { sumGreaterThan } from "./utils.js";
console.log(sumGreaterThan([1, 2, 3, 4], 2));

// Bài 18: Chuyển đổi ngày từ dạng YYYY-MM-DD sang DD/MM/YYYY
import { formatDate } from "./utils.js";
console.log(formatDate("2024-12-23"));

// Bài 19: Lấy 3 phần tử đầu tiên trong mảng
import { firstThree } from "./utils.js";
console.log(firstThree([1, 2, 3, 4, 5]));

// Bài 20: Kiểm tra xem chuỗi có chứa ký tự cụ thể hay không
import { containsChar } from "./utils.js";
console.log(containsChar("javascript", 'j'));

// Bài 21: Gộp 2 mảng thành một
import { mergeArrays } from "./utils.js";
console.log(mergeArrays([1, 2], [3, 4]));

// Bài 22: Đếm số lần xuất hiện của một phần tử trong mảng
import { countOccurences } from "./utils.js";
console.log(countOccurences([1, 2, 2, 3, 2], 2));

// Bài 23: Lọc các số lẻ từ mảng
import { filterOdd } from "./utils.js";
console.log(filterOdd([1, 2, 3, 4]));

// Bài 24: Tìm các số lớn hơn một giá trị cho trước
import { greaterThan } from "./utils.js";
console.log(greaterThan([1, 2, 3, 4], 2));

// Bài 25: Tính giai thừa của một số
import { factorial } from "./utils.js";
console.log(factorial(5));

// Bài 26: Tách riêng số chẵn và số lẻ trong mảng
import { seperateEvenOdd } from "./utils.js";
console.log(seperateEvenOdd([1, 2, 3, 4]));

// Bài 27: Sắp xếp mảng tăng dần
import { sortAsc } from "./utils.js";
console.log(sortAsc([3, 1, 4, 2]));

// Bài 28: Tính tổng các số ở vị trí chẵn trong mảng
import { sumEvenIndex } from "./utils.js";
console.log(sumEvenIndex([1, 2, 3, 4]));

// Bài 29: Tạo một mảng các số nhân với 2
import { multiplyByTwo } from "./utils.js";
console.log(multiplyByTwo([1, 2, 3]));

// Bài 30: Tạo một chuỗi từ mảng string
import { arrayToString } from "./utils.js";
console.log(arrayToString(["a", "bc", "ba"]));