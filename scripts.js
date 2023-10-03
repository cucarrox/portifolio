function pagina(scrollId) {
    window.location.href = '#' + scrollId;
}
function loading() {
    document.getElementsByClassName('box-load')[0].style.display = "none"
    document.getElementsByClassName('container')[0].style.display = "flex"
}