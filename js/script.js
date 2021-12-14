$(document).ready(function () {


  $(".form").submit(function (event) {
    event.preventDefault()


    $("#submit").click(function () {
  $("#drop ").toggle()


      let first = $("#first").val();
      let second = $("#second").val();
      let last = $("#last").val();
      let pass = $("#pass").val();
      let age = $("#age").val();
      

      $(".first").text(first)
      $(".second").text(second)
      $(".last").text(last)
      $(".pass").text(pass)
      $(".age").text(age)
     

    });


  });

});