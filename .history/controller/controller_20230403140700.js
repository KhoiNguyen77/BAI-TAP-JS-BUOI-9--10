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
    addNV.heSoLuong = +document.querySelector("#chucvu").value'
    //  Lấy chức vụ
    let selectedChucVu = document.querySelector("#chucvu");
    let indexChucVu = selectedChucVu.selectedIndex;
    addNV.chucVu = selectedChucVu[indexChucVu].innerHTML;
    // Thêm vào mảng nhân viên
    nhanVien.push(addNV);
    // render lại giao diện
    render(nhanVien);
}



// Thêm nhân viên 
document.querySelector("#btnThemNV").addEventListener("click", addNhanVien);


// render giao diện
render =  (array) => {
    let stringHTML = "";
    array.forEach(nhanvien => {
        let nhanVienNew = new (NhanVien);
        Object.assign(nhanVienNew, nhanvien)
        stringHTML += `
        <tr>
        <td>${nhanVienNew.taiKhoan}</td>
        <td>${nhanVienNew.hoTen}</td>
        <td>${nhanVienNew.email}</td>
        <td>${nhanVienNew.ngayLam}</td>
        <td>${nhanVienNew.chucVu}</td>
        <td>${nhanVienNew.tongLuong()}</td>
        <td>${nhanVienNew.xepLoai}</td>  
        `
    })
    document.querySelector("#tableDanhSach").innerHTML = stringHTML;
}


