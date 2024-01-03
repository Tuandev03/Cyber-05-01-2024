var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);

// Tính tiền lương
var btnClick1 = $(".txt-btn1");
var btnClick2 = $(".txt-btn2");
var btnClick3 = $(".txt-btn3");
var btnClick4 = $(".txt-btn4");
var btnClick5 = $(".txt-btn5");
// Tính tiền lương
btnClick1.onclick = () => {
  var tienLuong = $("#txt-tienLuongNgay ").value * 1;
  var soNgay = $("#txt-soNgayLam").value * 1;

  var ketQua = $(".txt-ketQua1");

  ketQua.innerHTML = ` <i class="fa-solid fa-circle-arrow-right fs-5 text-light"></i>  Tiền lương của bạn là: ${new Intl.NumberFormat(
    "vn-VN"
  ).format(tienLuong * soNgay)} VND`;
};

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
// Quy đổi tiền
btnClick3.onclick = () => {
  var money = $("#txt-money").value * 1;
  var ketQua = $(".txt-ketQua3");

  ketQua.innerHTML = ` <i class="fa-solid fa-circle-arrow-right fs-5 text-light"></i>
${new Intl.NumberFormat("vn-VN").format(money * 23500)} VNĐ `;
};

// Tính diện tích, chu vi hình chữ nhật
btnClick4.onclick = () => {
  var chieuDai = $("#txt-chieuDai").value * 1;
  var chieuRong = $("#txt-chieuRong").value * 1;
  var ketQua = $(".txt-ketQua4");
  ketQua.innerHTML = `<i class="fa-solid fa-circle-arrow-right fs-5 text-light"></i> Diện tích: ${
    chieuDai * chieuRong
  }; Chu vi: ${(chieuDai + chieuRong) * 2}`; //
};
// Tính tổng 2 ký số
btnClick5.onclick = () => {
  var num = $("#txt-number").value * 1;
  var hangTram = 0;
  var hangChuc = 0;

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
