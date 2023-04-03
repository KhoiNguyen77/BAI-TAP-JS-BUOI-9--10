// định dạng tiền VNĐ
const VND = new Intl.NumberFormat("vi-VN", {
  style: "currency",
  currency: "VND",
});
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
  this.valueChucVu = 0;
  this.gioLam = 0;
  this.tongLuong = () => {
    if (this.heSoLuong === 2) return VND.format(this.luong * 3);
    if (this.heSoLuong === 3) return VND.format(this.luong * 2);
    if (this.heSoLuong === 4) return VND.format(this.luong);
  };
  this.xepLoai = () => {
    if (this.gioLam >= 192) return (htmlString = `Xuất Sắc`);
    if (this.gioLam >= 176) return (htmlString = `Giỏi`);
    if (this.gioLam >= 160) return (htmlString = `Khá`);
    if (this.gioLam < 160) return (htmlString = `Trung Bình`);
  };
}

// Slug
function stringToSlug(title) {
  //Đổi chữ hoa thành chữ thường
  slug = title.toLowerCase();

  //Đổi ký tự có dấu thành không dấu
  slug = slug.replace(/á|à|ả|ạ|ã|ă|ắ|ằ|ẳ|ẵ|ặ|â|ấ|ầ|ẩ|ẫ|ậ/gi, "a");
  slug = slug.replace(/é|è|ẻ|ẽ|ẹ|ê|ế|ề|ể|ễ|ệ/gi, "e");
  slug = slug.replace(/i|í|ì|ỉ|ĩ|ị/gi, "i");
  slug = slug.replace(/ó|ò|ỏ|õ|ọ|ô|ố|ồ|ổ|ỗ|ộ|ơ|ớ|ờ|ở|ỡ|ợ/gi, "o");
  slug = slug.replace(/ú|ù|ủ|ũ|ụ|ư|ứ|ừ|ử|ữ|ự/gi, "u");
  slug = slug.replace(/ý|ỳ|ỷ|ỹ|ỵ/gi, "y");
  slug = slug.replace(/đ/gi, "d");
  //Xóa các ký tự đặt biệt
  slug = slug.replace(
    /\`|\~|\!|\@|\#|\||\$|\%|\^|\&|\*|\(|\)|\+|\=|\,|\.|\/|\?|\>|\<|\'|\"|\:|\;|_/gi,
    ""
  );
  //Đổi khoảng trắng thành ký tự gạch ngang
  slug = slug.replace(/ /gi, "-");
  //Đổi nhiều ký tự gạch ngang liên tiếp thành 1 ký tự gạch ngang
  //Phòng trường hợp người nhập vào quá nhiều ký tự trắng
  slug = slug.replace(/\-\-\-\-\-/gi, "-");
  slug = slug.replace(/\-\-\-\-/gi, "-");
  slug = slug.replace(/\-\-\-/gi, "-");
  slug = slug.replace(/\-\-/gi, "-");
  //Xóa các ký tự gạch ngang ở đầu và cuối
  slug = "@" + slug + "@";
  slug = slug.replace(/\@\-|\-\@|\@/gi, "");

  return slug;
}

// Validation
