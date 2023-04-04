function required (value) {
    if (value.trim() === "") {
        document.querySelector("#tknv").innerHTML = "Không được bỏ trống !";
        document.querySelector("#tknv").setAttribute("class", "text-white");
        document.querySelector("#tknv").classList.add("bg-danger");
        return false;
    }
    return true;
}