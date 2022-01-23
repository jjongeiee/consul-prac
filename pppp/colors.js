let body = {
    setColor : function (color){
      document.querySelector('body').style.color = color;
    },
    setBackGroundColor : function(color){
      document.querySelector('body').style.backgroundColor = color;
    }
  }
//   function setColor2(color){
//     var alist = document.querySelectorAll('a');
//     var i = 0;
//     while(i < alist.length){
//     alist[i].style.color = color;
//     i = i + 1;
//     }
//   }

  function nightday (self) {
  var target = document.querySelector('body');
  if(self.value === 'night'){
    target.style.backgroundColor = 'black';
    target.style.color = 'white';
    self.value = 'day'; //이거 왜 night로 안바뀜?//
    setColor('powderblue');
    
  } else {
  target.style.backgroundColor = 'white';
  target.style.color = 'black';
  self.value = 'night';
  setColor('pink');
  }
}
