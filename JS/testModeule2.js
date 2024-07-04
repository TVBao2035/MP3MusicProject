function test2(){
    var btn = document.querySelector('.btnClick');
    var text = document.querySelector('.text_message');
    var isClicked = false;
    
    btn.onclick = function() {
        if(isClicked){
            text.innerHTML = "";
            isClicked = false;
        }else{
            text.innerHTML = "Hello World";
            isClicked = true;
        }
    }
}


function test1(){
    var btn = document.querySelector('.btnClick');
    var text = document.querySelector('.text_message');
    var isClicked = false;
    
    btn.onclick = function() {
        if(isClicked){
            text.innerHTML = "";
            isClicked = false;
        }else{
            text.innerHTML = "Hello World";
            isClicked = true;
        }
    }
}
export {test2 , test1}
