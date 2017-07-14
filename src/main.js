(()=>{
'use strict';

    window._m = function (domElem){

        let arrElem = document.querySelectorAll(domElem);
    
        return {
             event(eve,func){
                 for(let el of arrElem){
                    el.addEventListener(eve||'click',func);
                 }
                   
            }

        }
    }


})();


