$("#submit").on("click", function(event){
  event.preventDefault();
  var userData = {
    name: $("#submitted-name").val().trim(),
    photo: $("#submitted-link").val().trim(),
    scores: [
      $('#submitted-q1').val(),
      $('#submitted-q2').val(),
      $('#submitted-q3').val(),
      $('#submitted-q4').val(),
      $('#submitted-q5').val(),
      $('#submitted-q6').val(),
      $('#submitted-q7').val(),
      $('#submitted-q8').val(),
      $('#submitted-q9').val(),
      $('#submitted-q10').val()
    ]
  }

  var currentURL = window.location.origin;

  $.post("/api/friends", userData, function(data){
    $("#matchName").text(data.name)
    $("#matchImg").attr("src", data.photo)
    $("#matchImg").css("height", "200")

    
    $("#friend-modal").modal("toggle")
  })
  
})