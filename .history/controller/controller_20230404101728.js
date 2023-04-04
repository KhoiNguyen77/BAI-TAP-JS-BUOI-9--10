// Array chứa thông tin nhân viên
let nhanVien = [];

// function addNhanVien
addNhanVien = () => {
  addNV = new NhanVien();
  addNV.taiKhoan = document.querySelector("#tknv").value;
  addNV.hoTen = document.querySelector("#name").value;
  addNV.email = document.querySelector("#email").value;
  addNV.ngayLam = document.querySelector("#datepicker").value;
  addNV.password = document.querySelector("#password").value;
  addNV.luong = +document.querySelector("#luongCB").value;
  addNV.gioLam = +document.querySelector("#gioLam").value;
  addNV.heSoLuong = +document.querySelector("#chucvu").value;
  //  Lấy chức vụ
  let selectedChucVu = document.querySelector("#chucvu");
  let indexChucVu = selectedChucVu.selectedIndex;
  addNV.chucVu = selectedChucVu[indexChucVu].innerHTML;
  addNV.valueChucVu = +document.querySelector("#chucvu").value;

  // Check valid
  let valid = true;
  //   Check bỏ trống;
  valid =
    required(addNV.taiKhoan, "tknv") &
    required(addNV.hoTen, "name") &
    required(addNV.email, "email") &
    required(addNV.email, "email") &
    required(addNV.email, "email") &
    required(addNV.email, "email");
  if (!valid) return;
  // Thêm vào mảng nhân viên
  nhanVien.push(addNV);
  // render lại giao diện
  render(nhanVien);
  saveStorage();
};

// Thêm nhân viên
document.querySelector("#btnThemNV").addEventListener("click", addNhanVien);

// render giao diện
render = (array) => {
  let stringHTML = "";
  array.forEach((nhanvien) => {
    let nhanVienNew = new NhanVien();
    Object.assign(nhanVienNew, nhanvien);
    stringHTML += `
        <tr>
        <td>${nhanVienNew.taiKhoan}</td>
        <td>${nhanVienNew.hoTen}</td>
        <td>${nhanVienNew.email}</td>
        <td>${nhanVienNew.ngayLam}</td>
        <td>${nhanVienNew.chucVu}</td>
        <td>${nhanVienNew.tongLuong()}</td>
        <td>${nhanVienNew.xepLoai()}</td> 
        <td>        
        <button class="btn btn-danger rounded" onclick="deleteNhanVien('${
          nhanVienNew.taiKhoan
        }')">Xóa</button></td>   
        `;
  });
  document.querySelector("#tableDanhSach").innerHTML = stringHTML;
};
// Xóa nhân viên
deleteNhanVien = (taikhoan) => {
  //   nhanVien.forEach((nhanvien, index) => {
  //     if (nhanvien.taiKhoan === taikhoan) indexXoa = index;
  //   });
  //   console.log(indexXoa);
  //   if (indexXoa !== -1) nhanVien.splice(indexXoa, 1);
  let indexXoa = nhanVien.findIndex(
    (nhanvien) => nhanvien.taiKhoan === taikhoan
  );
  nhanVien.splice(indexXoa, 1);
  saveStorage();
  render(nhanVien);
};

// function Cập nhật nhân viên
// updateNhanVien = (taikhoan) => {
//   let indexEdit = nhanVien.findIndex(
//     (nhanvien) => nhanvien.taiKhoan === taikhoan
//   );
//   console.log(indexEdit);
//   document.querySelector("#tknv").value = nhanVien[indexEdit].taiKhoan;
//   document.querySelector("#name").value = nhanVien[indexEdit].hoTen;
//   document.querySelector("#email").value = nhanVien[indexEdit].email;
//   document.querySelector("#datepicker").value = nhanVien[indexEdit].ngayLam;
//   document.querySelector("#password").value = nhanVien[indexEdit].password;
//   document.querySelector("#luongCB").value = nhanVien[indexEdit].luong;
//   document.querySelector("#gioLam").value = nhanVien[indexEdit].gioLam;
//   document.querySelector("#chucvu").value = nhanVien[indexEdit].chucVu;
// };
// function nút đóng:
document.querySelector("#btnDong").addEventListener("click", function () {
  document.querySelector("#form").reset();
  document.querySelector("#tknv").disabled = false;
  document.querySelector("#name").disabled = false;
});
// Lấy thông tin nhân viên;
document.querySelector("#btnLayNV").addEventListener("click", function () {
  nhanVien.forEach((nhanvien, index) => {
    if (document.querySelector("#tknv").value === nhanvien.taiKhoan) {
      document.querySelector("#name").value = nhanVien[index].hoTen;
      document.querySelector("#email").value = nhanVien[index].email;
      document.querySelector("#datepicker").value = nhanVien[index].ngayLam;
      document.querySelector("#password").value = nhanVien[index].password;
      document.querySelector("#luongCB").value = nhanVien[index].luong;
      document.querySelector("#gioLam").value = nhanVien[index].gioLam;
      document.querySelector("#chucvu").value = nhanVien[index].valueChucVu;
      document.querySelector("#tknv").disabled = true;
      document.querySelector("#name").disabled = true;
    }
  });
});
// Cập nhật thông tin nhân viên;
document.querySelector("#btnCapNhat").addEventListener("click", function () {
  // tạo mảng chứa thông tin nhân viên mới
  let nhanVienEdit = new NhanVien();
  nhanVienEdit.taiKhoan = document.querySelector("#tknv").value;
  nhanVienEdit.hoTen = document.querySelector("#name").value;
  nhanVienEdit.email = document.querySelector("#email").value;
  nhanVienEdit.ngayLam = document.querySelector("#datepicker").value;
  nhanVienEdit.password = document.querySelector("#password").value;
  nhanVienEdit.luong = +document.querySelector("#luongCB").value;
  nhanVienEdit.gioLam = +document.querySelector("#gioLam").value;
  nhanVienEdit.heSoLuong = +document.querySelector("#chucvu").value;
  let selectedChucVu = document.querySelector("#chucvu");
  let indexChucVu = selectedChucVu.selectedIndex;
  nhanVienEdit.chucVu = selectedChucVu[indexChucVu].innerHTML;
  nhanVienEdit.valueChucVu = document.querySelector("#chucvu").value;
  // Tìm nhân viên đúng tên tài khoản rồi gán giá trị mới
  let indexEdit = nhanVien.findIndex(
    (nhanvien) => nhanvien.taiKhoan === nhanVienEdit.taiKhoan
  );
  nhanVien[indexEdit].email = nhanVienEdit.email;
  nhanVien[indexEdit].ngayLam = nhanVienEdit.ngayLam;
  nhanVien[indexEdit].password = nhanVienEdit.password;
  nhanVien[indexEdit].luong = nhanVienEdit.luong;
  nhanVien[indexEdit].gioLam = nhanVienEdit.gioLam;
  nhanVien[indexEdit].heSoLuong = nhanVienEdit.heSoLuong;
  nhanVien[indexEdit].chucVu = nhanVienEdit.chucVu;
  nhanVien[indexEdit].valueChucVu = nhanVienEdit.valueChucVu;
  saveStorage();
  render(nhanVien);
  document.querySelector("#tknv").disabled = false;
  document.querySelector("#name").disabled = false;
  document.querySelector("#form").reset();
});

// function search
document.querySelector("#searchName").oninput = function () {
  let tuKhoa = document.querySelector("#searchName").value.trim();
  let convertTuKhoa = stringToSlug(tuKhoa);
  let searchNhanVien = [];
  nhanVien.forEach((nhanvien) => {
    let nhanVienFilter = new NhanVien();
    Object.assign(nhanVienFilter, nhanvien);
    if (
      stringToSlug(nhanVienFilter.xepLoai().trim()).search(convertTuKhoa) !== -1
    )
      searchNhanVien.push(nhanVienFilter);
  });
  render(searchNhanVien);
};

// Set local storage

saveStorage = () => {
  return localStorage.setItem("Mảng Nhân Viên", JSON.stringify(nhanVien));
};

// Lấy local storage

getStorage = () => {
  if (localStorage.getItem("Mảng Nhân Viên")) {
    nhanVien = JSON.parse(localStorage.getItem("Mảng Nhân Viên"));
  }
};
// Gọi local storage
getStorage();

// Render khi vào trang
render(nhanVien);
