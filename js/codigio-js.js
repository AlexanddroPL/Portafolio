window.addEventListener('load', function(){
    new Glider(document.querySelector('.carousel__lista'), {
        slidesToShow: 4,
        slidesToScroll: 4,
        draggable: true,
        dots: '.carousel__indicadores',
        arrows: {
          prev: '.carousel__anterior',
          next: '.carousel__siguiente'
        },
        responsive: [
            {
                breakpoint: 300,
                settings: {
                  slidesToShow: '1',
                  slidesToScroll: '1',
                  itemWidth: 150,
                  duration: 0.25
                }
              },
            {
              breakpoint: 700,
              settings: {
                slidesToShow: '2',
                slidesToScroll: '2',
                itemWidth: 150,
                duration: 0.25
              }
            },{
              // screens greater than >= 1024px
              breakpoint: 800,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
                itemWidth: 150,
                duration: 0.25
              }
            }
          ]
      });
});