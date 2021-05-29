window.onload = function() {
    let redCross = document.querySelector('.dropdown-menu-cross');
    redCross.onclick = () => {
        document.querySelector('.dropdown-menu').style.display = 'none'
    }
}
