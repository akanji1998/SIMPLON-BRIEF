const f_d = document.querySelector('#f_d');
const f_nd = document.querySelector('#f_nd');
const femme = document.querySelector('#femme');
const h_d = document.querySelector('#h_d');
const h_nd = document.querySelector('#h_nd');
const homme = document.querySelector('#homme');
const e_d = document.querySelector('#e_d');
const e_nd = document.querySelector('#e_nd');
const enfant = document.querySelector('#enfant');

document.querySelector('form').addEventListener('change',function(){

   if(f_nd.checked){   
        femme.style='display:none';
    }
   if(f_d.checked){
        femme.style='display:visible';
    }


    if(h_nd.checked){   
        homme.style='display:none';
    }
   if(h_d.checked){
        homme.style='display:visible';
    }  


    if(e_nd.checked){   
        enfant.style='display:none';
    }
    
   if(e_d.checked){
        enfant.style='display:visible';
    }
})


