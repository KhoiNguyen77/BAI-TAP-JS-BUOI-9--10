// Prototype Nhân Viên
function NhanVien() {
  this.taiKhoan = "";
  this.hoTen = "";
  this.email = "";
  this.ngayLam = "";
  this.password = "";
  this.luong = 0;
  this.chucVu = "";
  this.gioLam = 0;
  this.tongLuong = () => {
    if(this.chucVu === "Sếp") return this.luong * 3;
    if(this.chucVu === "Trưởng") return this.luong * 2;
    if(this.chucVu === "Nhân Viên") return this.luong;
  }
}
