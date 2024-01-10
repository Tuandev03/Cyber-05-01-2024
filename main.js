var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);

var btnClick1 = $(".txt-btn1");
var btnClick2 = $(".txt-btn2");
var btnClick3 = $(".txt-btn3");
var btnClick4 = $(".txt-btn4");
var btnClick5 = $(".txt-btn5");
// Mô hình 3 khối trong Tính tiền lương
/*
* Đầu vào: Người dùng nhập vào ô input
* Các bước xử lý: 
  ** Bước 1: Khởi tạo biến ô input của tienLuong,soNgay và nút button của btnClick1 
  ** Bước 2: DOM tới HTML và gán cho biến tienLuong,soNgay, btnClick1
  ** Bước 3: Tính khi người dùng nhấp vào button thì có công thức sau: tienLuong * soNgay
  ** Bước 4: In ra kết quả 

* Đầu ra: Hiển thị kết quả trên màn hình giao diện bằng innerHTML 
  */
// Tính tiền lương
btnClick1.onclick = () => {
  var tienLuong = $("#txt-tienLuongNgay ").value * 1;
  var soNgay = $("#txt-soNgayLam").value * 1;

  var ketQua = $(".txt-ketQua1");

  ketQua.innerHTML = ` <i class="fa-solid fa-circle-arrow-right fs-5 text-light"></i>  Tiền lương của bạn là: ${new Intl.NumberFormat(
    "vn-VN"
  ).format(tienLuong * soNgay)} VND`;
};
//  Mô hình 3 khối tính giá trị trung bình.
/**
 * Đầu vào: Người dùng nhập vào ô input.
 * Xử lý:
 * Bước 1: Khởi tạo biến cho 5 ô input và nút button DOM tới HTML gán cho 5 biến đó.
 * Bước 2: Khi người dùng nhấp vào button ta lấy 5 biến vừa khởi tạo cộng lại và chia cho 5.
 * Bước 3: In ra kết quả
 * Đầu ra: Hiển thị kết quả trên màn hình giao diện bằng innerHTML
 */
// Tính giá trị trung bình
btnClick2.onclick = () => {
  var num1 = $("#txt-num1").value * 1;
  var num2 = $("#txt-num2").value * 1;
  var num3 = $("#txt-num3").value * 1;
  var num4 = $("#txt-num4").value * 1;
  var num5 = $("#txt-num5").value * 1;
  var ketQua = $(".txt-ketQua2");
  ketQua.innerHTML = `  <i class="fa-solid fa-circle-arrow-right fs-5 text-light"></i>  Kết quả giá trị trung bình: ${
    (num1 + num2 + num3 + num4 + num5) / 5
  }`;
};

//  Mô hình 3 khối quy đổi tiền.
/**
 * Đầu vào: người dùng nhập vào ô input
 * Xử lý;
 * ** Bước 1 :Khởi tạo biến cho 1 ô input và button và DOM tới HTML gán cho biến đó
 * ** Bước 2:  Khi người dùng nhấp vào button ta lấy biến vừa tạo * 23500
 * ** Bước 3: In ra kết quả biến trên
 * Đầu ra:  Hiển thị kết quả trên màn hình giao diện bằng innerHTML
 */
// Quy đổi tiền
btnClick3.onclick = () => {
  var money = $("#txt-money").value * 1;
  var ketQua = $(".txt-ketQua3");

  ketQua.innerHTML = ` <i class="fa-solid fa-circle-arrow-right fs-5 text-light"></i>
${new Intl.NumberFormat("vn-VN").format(money * 23500)} VNĐ `;
};
//  Mô hình tính diện tích, chu vi hình chữ nhật
/**
 * Đầu vào: người dùng nhập vào ô input
 * Xử lý;
 * ** Bước 1 :Khởi tạo biến cho ô input chieuDai và chieuRong và button và DOM tới HTML gán cho biến đó
 * ** Bước 2:  Khi người dùng nhấp vào button ta lấy biến (chieuDai + chieuRong) * 2
 * ** Bước 3: In ra kết quả biến trên
 * Đầu ra:  Hiển thị kết quả trên màn hình giao diện bằng innerHTML
 */
// Tính diện tích, chu vi hình chữ nhật
btnClick4.onclick = () => {
  var chieuDai = $("#txt-chieuDai").value * 1;
  var chieuRong = $("#txt-chieuRong").value * 1;
  var ketQua = $(".txt-ketQua4");
  ketQua.innerHTML = `<i class="fa-solid fa-circle-arrow-right fs-5 text-light"></i> Diện tích: ${
    chieuDai * chieuRong
  }; Chu vi: ${(chieuDai + chieuRong) * 2}`; //
};

//  Mô hình tính Tính tổng 2 ký số
/**
 * Đầu vào: người dùng nhập vào ô input
 * Xử lý;
 * ** Bước 1 :Khởi tạo biến cho ô input và button và DOM tới HTML gán cho biến đó
 * ** Bước 2:  Khi người dùng nhấp vào button ta thực hiện lấy hàng trăm và hàng chục như sau Math.floor((num % 100) / 10) + (num % 10)
 * ** Bước 3: In ra kết quả biến trên
 * Đầu ra:  Hiển thị kết quả trên màn hình giao diện bằng innerHTML
 */
// Tính tổng 2 ký số
btnClick5.onclick = () => {
  var num = $("#txt-number").value * 1;

  var ketQua = $(".txt-ketQua5");
  ketQua.innerHTML = `
 <i class="fa-solid fa-circle-arrow-right fs-5 text-light"></i>
${Math.floor((num % 100) / 10) + (num % 10)}

 `;
};
var inputForm = $$(".txt-form-input");
inputForm.forEach(function (input) {
  input.addEventListener("input", function (event) {
    // Lấy giá trị của input
    var inputValue = event.target.value;

    // Loại bỏ các ký tự không phải số
    var numericValue = inputValue.replace(/[^0-9]/g, "");

    // Cập nhật giá trị của input chỉ bao gồm các số
    event.target.value = numericValue;
  });
}); 
// ${(Math.floor(num / 10) + Math.floor((num % 100) / 10) + 1)}
