// Bài 1: Viết hàm tính thể tích hình cầu, với tham số truyền vào là bán kính của hình cầu.
function volumeSphere(raidus) {
    var volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
    return volume;
}

// Bài 2: Viết hàm truyền vào 2 số nguyên, tính tổng tất cả các số nguyên nằm giữa chúng. Ví dụ với 
// tham số 3 và 8 ta có kết quả là 22 (bằng 4 + 5 + 6 + 7).
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

// Bài 3: Cho 1 số, kiểm tra xem số đó có phải là số nguyên tố hay không, kết quả trả về true hoặc false. 
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

// Bài 4: Cho 1 số nguyên dương bất kỳ. Tính tổng tất cả các số nguyên tố mà nhỏ hơn hoặc bằng tham 
// số truyền vào.
function smallerSum(b) {
    var sum = 0;
    for (j = 0; j <= b; j++) {
        if (checkPrimeNumber(j)) {
            sum += j;
        }
    }
    return sum;
}

// Bài 5: Cho 1 số nguyên dương, viết hàm tính tổng tất cả các ước số của số đó.
function divideSum(a) {
    var sum = 0;
    for (i = 0; i < a; i++) {
        if (b % i == 0) {
            sum += i;
        }
    }
    return sum;
}

// //////////////Xử lý Object//////////////
// Bài 6. Viết hàm để lấy danh sách các key của object
// vd :
// var user = {
//     name : "Trương Minh Thúy",
//     age : 25,
//     email : 'support@techmaster.vn'
// };
// => name,age,email
function getObjectKey(obj) {
    var keyobj = Object.keys(obj);
    return keyobj;
}

// Bài 7. Viết hàm để lấy danh sách các value của object
// vd :
// var user = {
//     name : "Trương Minh Thúy",
//     age : 25,
//     email : 'support@techmaster.vn'
// };
// => 'Trương Minh Thúy',25,'support@techmaster.vn'
function getObjectValue(obj) {
    var valueobj = Object.values(obj);
    return valueobj;
}

// bài 8. Viết hàm kiểm tra key có tồn tại trong Object không
// vd :
// var user = {
//     name : "Trương Minh Thúy",
//     age : 25,
//     email : 'support@techmaster.vn'
// };
// => checkKey('name') => true
// checkKey('study') => false
function checkKeyInObject(obj, key) {
    if (key in obj) {
        return true;
    }
    return false;
}

// bài 9. Viết hàm kiểm tra Object có độ dài bao nhiêu
// vd :
// var user = {
//     name : "Trương Minh Thúy",
//     age : 25,
//     email : 'support@techmaster.vn'
// };
// => getLengthObject(user) => 3
function getLengthObject(obj) {
    var keylength = Object.keys(obj).length;
    return keylength;
}

// Bài 10. Cho mảng các user
// mỗi object có cấu trúc như sau
// user = {
//     name : string,
//     age : number,
//     isStatus : bool
// }
// Viết function lấy ra những user có tuổi > 25 và isStatus = true
function checkObject(arr) {
    let target = [];
    for (i = 0; i < arr.length; i++) {
        if (arr[i].age > 25 && arr[i].isStatus == true) {
            target.push(arr[i]);
        }
    }
    return target;
}

// Bài 11. Tương tự bài 5
// Viết function sắp xếp các user theo tuổi tăng dần
function sortObject(arr) {
    arr.sort(compare);
    return arr;
}
function compare(a, b) {
    if (a.age < b.age) {
        return -1;
    }
    if (a.age > b.age) {
        return 1;
    }
    return 0;
}