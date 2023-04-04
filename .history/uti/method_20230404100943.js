function required (value) {
    if (value.trim() === "") {
        document.querySelector("#tknv").classList.add("text-danger");
        document.querySelector("#tknv").setAttribute("placeholder", "Không được bỏ trống");
        return false;
    }
    return true;
}