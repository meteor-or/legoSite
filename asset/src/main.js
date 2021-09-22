AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

// Chagne product img 

let promotion = {
  itme1: {
    name: '헬리콥터 추격전',
    price: '44,900',
    img: 'product1.png'
  },
  item2: {
    name: '경찰서',
    price: '129,000',
    img: 'product2.png'
  },
  item3: {
    name: '헬리콥터 운송 트럭',
    price: '64,900',
    img: 'product3.png'
  }
}
console.log(promotion.item2.img);
$('.legoTitle').on('click',function(){
  $('img[alt=promotion]').attr({src:'asset/img/' + promotion.item2.img});
  $('.priceTxt').text(promotion.item2.price);
  $('.subTitle').text(promotion.item2.name);
})


$('.animationItem').on({
  'mouseenter': function(){
  $(this).find('img[alt=eye]').css({width:'150px'});
  },
  'mouseleave': function(){
  $('img[alt=eye]').css({width:'100px'});
  }
});

// 유튜브 플러그인
$(function(){// 제이쿼리 문서 준비 이벤트
  $("#youtube").YTPlayer();
});



// 배경 변경
function colorChange() {  
  let movez = document.querySelectorAll(".bg-changer");  
  for (let i = 0; i < movez.length; i++) {   
    var start = this.scrollY - movez[i].offsetTop + movez[i].clientHeight / 3;
    var stop = this.scrollY - movez[i].offsetTop - movez[i].clientHeight;  
    var rate = movez[i].getAttribute('data-bgcolor');
    var html = document.getElementsByTagName("html")[0];
    if ( start > 0 && stop < 0 ){ 
      document.body.style.backgroundColor = rate; 
    }   
  } requestAnimationFrame(colorChange); 
} 
requestAnimationFrame(colorChange);

//드래그 색상 변경

let r = 0; 
const loop = () => { 
  var html = document.getElementsByTagName("html")[0]; 
  r++; html.style.setProperty("--changing", `hsla(${r/1.5}, 100%, 50%, 0.999)`); 
  requestAnimationFrame(loop); 
}; 
  requestAnimationFrame(loop);  


//

// kakao api
$('.searchBtn').click(function(){
  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v2/search/web",
    data: { query :  $('#searchBox').val() },
    headers: {Authorization : "KakaoAK 17194e8da000acd54324eeff27f5ca14"}
  })
    .done(function (msg) {
      console.log(msg.documents[0].title);
      console.log(msg.documents[0].contents);
      $('.searchTitle').append(msg.documents[0].title);
      $('.searchContents').append(msg.documents[0].contents);
      $('.searchUrl').append(msg.documents[0].url);
    });
});
