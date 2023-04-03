// Prototype Nhân Viên
function NhanVien() {
  this.taiKhoan = "";
  this.hoTen = "";
  this.email = "";
  this.ngayLam = "";
  this.password = "";
  this.luong = 0;
  this.heSoLuong = 0;
  this.chucVu = "";
  this.gioLam = 0;
  this.tongLuong = () => {
    if (this.heSoLuong === 1) return this.luong * 3;
    if (this.heSoLuong === 2) return this.luong * 2;
    if (this.heSoLuong === 3) return this.luong;
  };
}
