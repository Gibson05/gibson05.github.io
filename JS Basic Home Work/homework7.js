// Bài 1: Viết hàm truyền vào 2 số nguyên, tính tổng tất cả các số nguyên nằm giữa chúng.
//  Ví dụ với tham số 3 và 8 ta có kết quả là 22 (bằng 4 + 5 + 6 + 7).
function sumBetween(a, b) {
    var sum = 0
    if (Number.isInteger(a, b) && a > b) {
        a = a + b
        b = a - b
        a = a - b
    }
    for (i = a + 1; i < b; i++) {
        sum += i;
    }
    return sum;
}

// Bài 2: Cho 1 số nguyên dương, viết hàm tính tổng tất cả các ước số của số đó.
function divideSum(a) {
    var sum = 0;
    for (i = 0; i < a; i++) {
        if (a % i == 0) {
            sum += i;
        }
    }
    return sum;
}

// Bài 3: Cho 1 số nguyên dương, kiểm tra xem số đó có phải là số nguyên tố hay không, kết quả trả về true hoặc false.
function checkPrimeNumber(a) {
    if (Number.isInteger(a) && a < 2) {
        return false;
    }
    for (i = 2; i < a - 1; i++) {
        if (a % i == 0) {
            return false;
        }
    }
    return true;
}

// Bài 4: Cho 1 số nguyên dương. Tính tổng tất cả các số nguyên tố nhỏ hơn hoặc bằng tham số truyền vào.
function smallerSum(b) {
    var sum = 0;
    for (j = 0; j <= b; j++) {
        if (checkPrimeNumber(j)) {
            sum += j;
        }
    }
    return sum;
}

// Bài 5: Chuyển 1 chuỗi gồm nhiều từ thành chuỗi mới viết hoa các chữ cái đầu tiên của mỗi từ. 
// Ví dụ: ''HELLO world'' => ''Hello World''.
function uppercaseFirstLetter(str) {
    var splStr = str.split('');
    for (var i = 0; i < splStr.length; i++) {
        if (i === 0) {
            splStr[i] = splStr[i].toUpperCase();
        }
        else {
            if (splStr[i] === " ") {
                splStr[i + 1] = splStr[i + 1].toUpperCase();
            }
        }
    }
    return splStr.join('');
}

// Bài 6: Chuyển 1 chuỗi gồm nhiều từ thành dạng Spinal case. Ví dụ: ''HELLO world'' => ''hello-world''.
function toSpinalCase(str) {
    var targetStr = str.toLowerCase().split('');
    for (var i = 0; i < targetStr.length; i++) {
        if (targetStr[i] === ' ') {
            targetStr[i] = '-';
        }
    }
    return targetStr.join('');
}

// Bài 7: Cho 1 chuỗi, kiểm tra xem chuỗi đó có phải chuỗi đối xứng hay không (đọc xuôi hay ngược đều như nhau, 
// không tính khoảng trắng và không phân biệt hoa thường), kết quả trả về true hoặc false. Ví dụ ''Race car'' trả về true, ''hello world''
//  trả về false.
function revstr(name) {
    var name1 = name.split("").reverse().join("")
    return name1 == name;
}