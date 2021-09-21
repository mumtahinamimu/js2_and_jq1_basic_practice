function textChange(){

  var data = "welcome to github";

  document.getElementById('h2').innerHTML = data.repeat(4);

}

function imgChangeOne(){
  
  document.getElementById('img').src = "img/client_one.png";

}

function imgChangeTwo(){
  document.getElementById('img').src = "img/client_two.png";
}

function customAlert(){
  alert("Page loaded");
}

function windowAlert(){
  alert("window loaded");
}

function documentChange(){
  document.write("Document text change");
}

function consolChange(){
  console.log("text in the console");
}

const students = ["Ripon", "Rumi", "Rakib"];

document.getElementById('student').innerHTML = students[2];

/*=============================================
jquiry code start
===============================================*/

$(document).ready(function(){

 alert("welcome to mimu");

  //alert
  $('.btn_jq_al').click(function(){
    alert("welcome");
  });

  //hide
  $('.btn_jq_hide').click(function(){

    $('.img_hide').hide();

  });

  //show
  $('.btn_jq_show').click(function(){

    $('.img_hide').show();

  });

  //toggle
  $('.btn_jq_toggle').click(function(){

    $('.img_hide').toggle();

  });

  //fast
  $('.btn_jq_fast').click(function(){

    $('.img_trans').toggle("fast");

  });

//slow
    $('.btn_jq_slow').click(function(){

      $('.img_trans').toggle("slow");
  
    });

    //milisec
    $('.btn_jq_milisec').click(function(){

      $('.img_trans').toggle("2000");
  
    });

  //fadeout
        $('#btn_jq_fadeout').click(function(){

          $('.img_fade').fadeOut();
      
        });

  //fadein
  $('#btn_jq_fadein').click(function(){

    $('.img_fade').fadeIn();

  });
  
    //fadetoggle
    $('#btn_jq_fadetoggle').click(function(){

      $('.img_fade').fadeToggle(2000);
  
    });

  //fadetoggle
        $('#btn_jq_fadeto').click(function(){

          $('.img_fade').fadeTo(2000, .3);
      
   });

   //ans

   $('.bg1').click(function(){

    $('.bg2').slideToggle(1000);

   });

});