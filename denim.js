window.addEventListener('DOMContentLoaded', () => {
    
    const pressQuoteNPic = document.querySelectorAll('.press-quote-n-pic'),
          pressCarouselItems = document.querySelectorAll('.press-carousel-item');

    function showPressCard(index=0) {
        pressQuoteNPic[index].style.display = 'block';
        pressCarouselItems[index].classList.add('item-active');
    }
    showPressCard();

    function hidePressCards() {
        pressQuoteNPic.forEach(item => {
            item.style.display = 'none';
        })
        pressCarouselItems.forEach(item => {
            item.classList.remove('item-active');
        })
    }

    pressCarouselItems.forEach((item, index) => {
        item.addEventListener('click', (event) => {
            event.preventDefault();
            hidePressCards();
            showPressCard(index);
        })
    })
})
