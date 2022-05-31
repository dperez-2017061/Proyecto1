
var num = document.getElementById('nume');
var number = num!.style;
number.color = 'blue';

function increase() {

    var no = Number(num!.innerText)+1;
    num!.innerText = String(no);

    if(no == 0){
        if(num)
        number.color = 'blue';
    }else if(no > 0){
        number.color = 'green'
    }else if(no < 0){
        number.color = 'red';
    }
  }

  function decrease() {
    
    var no = Number(num!.innerText)-1;
    num!.innerText = String(no);

    if(no == 0){
        number.color = 'blue';
    }else if(no > 0){
        number.color = 'green'
    }else if(no < 0){
        number.color = 'red';
    }
  }

  function reset() {
    
    var no = 0;
    num!.innerText = String(no);
    number.color = 'blue';
    
  }

