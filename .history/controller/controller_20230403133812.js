// Thêm nhân viên 

let nhanVien = [];
document.querySelector("#btnThemNV").addEventListener("click", addNhanVien);


// function addNhanVien
addNhanVien = () => {
    addNV = new NhanVien();
    addNV.taiKhoan = document.querySelector("#tk").value;
    addNV.hoTen = document.querySelector("#name").value;
    addNV.email = document.querySelector("#email").value;
    addNV.password = document.querySelector("#password").value;
    addNV.luong = +document.querySelector("#luongCB").value;
    addNV.gioLam = +document.querySelector("#gioLam").value;
    //  Lấy chức vụ
    let selectedChucVu = document.querySelector("#chucvu");
    let indexChucVu = selectedChucVu.selectedIndex;
    addNV.chucVu = selectedChucVu[indexChucVu].innerHTML;
}