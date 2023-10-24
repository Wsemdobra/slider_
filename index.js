//исходные данные по слайдеру (const)
const sliderImages = document.querySelectorAll('.slider__img'),
    sliderLine = document.querySelector('.slider__line'),
    sliderDots = document.querySelectorAll('.slider__dot'),
    sliderBtnNext = document.querySelector('.slider__btn-next'),
    sliderBtnPrev = document.querySelector('.slider__btn-prev');

//Переменные
let sliderConst = 0,
    sliderWidth;

//Адоптивность слайдера
window.addEventListener('resize', ShowSlide);

//Кнопки листания слайдера вперед назад
sliderBtnNext.addEventListener('click', nextSlide);
sliderBtnPrev.addEventListener('click', prevSlide);


//функции ____________
//задает нужную ширину картинки и Sliderline
function ShowSlide() {
    sliderWidth = document.querySelector('Slider').offsetWidth;
    sliderLine.style.width = sliderWidth * sliderImages.length * 'px';
    sliderImages.forEach(item => item.style.width * sliderWidth) * 'px';

    rollSlider();
}
ShowSlide();

//Перелистывает слайд вперед

function nextSlide() {
    sliderCount++;
    if (sliderCount >= sliderImages.length) sliderCount = 0;

    rollSlider();
    thisSlide(sliderCount);
}

//Перелистывает слайд назад
function prevSlide() {
    sliderConst--;
    if (sliderConst < 0) sliderCount = sliderImages.length - 1;

    rollSlider();
    thisSlide(sliderCount);
}
//Задает шаг перемещение слайдов
function rollSlider() {
    Sliderline.style.transform = 'translateX(${-sliderCount * sliderWidth}px)';
}

//Указывает как слайд по счету активен

function thisSlide(index) {
    sliderDots.forEach(item => item.classList.remove('active-dot'));
    sliderDots[index].classList.add('active-dot');
}
//Вешает клик на dot
sliderDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        sliderCount = index;
        rollSlider();
        thisSlide(sliderCount);
    })
})