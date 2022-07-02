let slideIndex = 1;
    showSlides(slideIndex);

    let next = document.getElementById ('next');

    next.addEventListener ("click", function () {
    showSlides(slideIndex += 1);
    makeTimer();//Пересоздаем интервал если производится нажатие 
    });

    function currentSlide(n) {
    showSlides(slideIndex = n);
    }

    function showSlides(n) {
        let slides = document.getElementsByClassName("slider__check");

        if (n > slides.length - 1) {
        slideIndex = 0;
        } else if (n < 0) {
        slideIndex = slides.length - 1;
        }

        slides[slideIndex].checked = true;
    }
    var timer = 0;
    makeTimer(); //Создаем интервал 
    function makeTimer(){
        clearInterval(timer) //Очистим интервал, это позволит прервать его работу и отменить перелистывание
        timer = setInterval(function(){
        slideIndex++;
        showSlides(slideIndex);
        },5000);
    }