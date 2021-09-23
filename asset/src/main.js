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

// 애니메이션페이지

$('.animationItem').on({
  'mouseenter': function(){
  $(this).find('img[alt=eye]').css({width:'150px'});
  },
  'mouseleave': function(){
  $('img[alt=eye]').css({width:'100px'});
  }
});

// 유튜브 플러그인
$(function(){
  $("#youtube").YTPlayer();
});



// 배경 변경
function colorChange() {  
  let movez = document.querySelectorAll(".bg-changer");  
  for (let i = 0; i < movez.length; i++) {   
    let start = this.scrollY - movez[i].offsetTop + movez[i].clientHeight / 3;
    let stop = this.scrollY - movez[i].offsetTop - movez[i].clientHeight;  
    let rate = movez[i].getAttribute('data-bgcolor');
    let html = document.getElementsByTagName("html")[0];
    if ( start > 0 && stop < 0 ){ 
      document.body.style.backgroundColor = rate; 
    }   
  } requestAnimationFrame(colorChange); 
} 
requestAnimationFrame(colorChange);

// 일반 상품 스크롤 이벤트

  window.addEventListener('scroll', function(){
    let currentScrollValue = this.scrollY
    let productScroll = document.querySelector('.productWrap').offsetTop*3 + document.querySelector('.productWrap').clientHeight  
    if ( currentScrollValue  >=  productScroll) {
      this.document.querySelector('.productList').classList.add('active')
    } else if ( currentScrollValue  <  productScroll){
      this.document.querySelector('.productList').classList.remove('active')
    }
    
  });


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
// 검색
$('.searchBtn').click(function(){
  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v2/search/web",
    data: { query :  $('#searchBox').val() },
    headers: {Authorization : "KakaoAK 17194e8da000acd54324eeff27f5ca14"}
  })
    .done(function (msg) {
      $('.searchTitle').append(msg.documents[0].title);
      $('.searchContents').append(msg.documents[0].contents);
      $('.searchUrl').append(msg.documents[0].url);
    });
});

//물품 이미지 가져오기
  // $.ajax({
  //   method: "GET",
  //   url: "https://dapi.kakao.com/v2/search/image",
  //   data: { query :  '레고 헬리콥터 운송트럭' },
  //   headers: {Authorization : "KakaoAK 17194e8da000acd54324eeff27f5ca14"}
  // })
  //   .done(function (msg) {
  //     console.log(msg.documents[4].image_url);
  //     $('.productImgBox>img').attr({src:'msg.documents[4].image_url'});
  //   });

// 돌아가는 텍스트

$.each($(".ezkorry-roller"), function(index, item) {

  const wrapper = $("<div />", { class:"ezkorry-roller-wrapper"});
  const roller = $(item);
  roller.append(wrapper);
  const span = roller.find('span').first();
  wrapper.append(span);
  const span_width = span.get(0).offsetWidth;
  const max_width = roller.width() + span_width;
  let inner_width = span_width;

  while(max_width > inner_width) {
  wrapper.append(span.clone());
  inner_width += span_width;
  }

  anime({
  targets: wrapper.get(0),
  translateX: {
    value: '-=' + span_width + 'px',
    duration: 6000
  },
  loop: true,
  easing: 'linear'
  });
});
