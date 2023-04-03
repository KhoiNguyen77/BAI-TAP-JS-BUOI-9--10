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
    //  Lấy chức vụ
    let selectedChucVu = document.querySelector("#chucvu");
    let indexChucVu = selectedChucVu.selectedIndex;
    addNV.chucVu = selectedChucVu[indexChucVu].innerHTML;
    nhanVien.push(addNV);
    render();
}



// Thêm nhân viên 
document.querySelector("#btnThemNV").addEventListener("click", addNhanVien);


// render giao diện
render =  (array) => {
    let stringHTML = "";
    array.forEach(nhanvien => {
        stringHTML += `
        <tr>
        <td>${nhanvien.taiKhoan}</td>
        <td>${nhanvien.hoTen}</td>
        <td>${nhanvien.email}</td>
        <td>${nhanvien.soDienThoai}</td>
        <td>
        
        
        
        
        `
    })
}


