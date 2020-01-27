(function(){
  const panelOne = document.getElementById('start');
  const bgBlur = document.getElementsByClassName('fixed-bg-blur')
  let panelOneHeight = panelOne.clientHeight;
  let scrollTop;

  let scrolling = false;

  (function windowOnSCroll(){
      window.addEventListener("scroll", () => {
          scrolling = true;
      });
  })();

  setInterval( function(){
    if(scrolling) {
      scrolling = false;
      scrollTop = window.scrollY
      if(scrollTop >= panelOneHeight / 2){
        bgBlur[0].classList.add('active')
      } else {
        bgBlur[0].classList.remove('active')
      }
    }
  }, 250)

})();
