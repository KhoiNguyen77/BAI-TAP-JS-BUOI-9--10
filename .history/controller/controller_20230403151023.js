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
  let indexXoa = nhanVien.findIndex((nhanvien) =>
    console.log(nhanvien.taiKhoan)
  );
  nhanVien.splice(indexXoa, 1);
  saveStorage();
  render(nhanVien);
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
