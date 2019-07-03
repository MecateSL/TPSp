// function showSignature() {
//     // var nameValue = document.querySelector( ".input-name" ).value;
//     // var jobValue = document.querySelector( ".input-job" ).value;
//     // var resultsBlock = document.querySelector( ".results" );
//     // var resultName = document.querySelector( ".name-result" );
//     // var resultJob = document.querySelector( ".job-result" );
//     var nombre = document.getElementById('nombre').value;
//     var asunto = document.getElementById('asunto').value;
//     var mensaje = document.getElementById('mensaje').value;

//     resultName.innerHTML += "https://wa.me/50589087228" + nameValue + jobValue ;

//     // resultJob.innerHTML += jobValue;

//     resultsBlock.classList.remove( "hidden" );
// }

// document.querySelector( ".show-signature" ).addEventListener( 'click', function(){
//     showSignature();
// });

// var nombre = document.getElementById('nombre').value
      // var asunto = document.getElementById('asunto').value
      // var mensaje = document.getElementById('mensaje').value
      
      // var name = this.nombre.split(' ').join('%20')
      // var subject = this.asunto.split(' ').join('%20')
      // var message = this.mensaje.split(' ').join('%20')

      // // var url = "https://wa.me/50589087228?text=" + name + subject + message

      var form = document.getElementById('whatsapp');

      form.onsubmit=function(e){
        e.preventDefault();
      }

      // function whatsApp() {
      //     window.location = "https://wa.me/50589087228?text=" + name + subject + message ;
      // }

    function enlace() {
    // var nameValue = document.querySelector( ".input-name" ).value;
    // var jobValue = document.querySelector( ".input-job" ).value;
    // var resultsBlock = document.querySelector( ".results" );
    // var resultName = document.querySelector( ".name-result" );
    // var resultJob = document.querySelector( ".job-result" );
    var nombre = document.getElementById('nombre').value;
    var asunto = document.getElementById('asunto').value;
    var mensaje = document.getElementById('mensaje').value;

    var name = nombre.split(' ').join('%20');
    var subject = asunto.split(' ').join('%20');
    var message = mensaje.split(' ').join('%20');

    var url = "https://wa.me/50589087228?text=" + name + "%20" + subject + "%20" + message ;

    return url;
    }
    // function whatsApp() {
    //     window.location = "https://wa.me/50589087228?text=" + name + subject + message ;
    document.getElementById('send').addEventListener('click',function(){
        // window.location = "https://wa.me/50589087228?text=" + name + subject + message ;
        window.open(enlace(), '_blank');
    });
    // }