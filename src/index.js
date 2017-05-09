$(document).ready(function(){
  // your code here!

  $("input[type=submit").click(function (e) {
  		e.preventDefault()
  		var userInput = $("#note-form input:first-child").val()

  		newComment = new Comment(userInput)
  		$("#comment-list").append(newComment.render())
  		$("input[type=text]").val("")
  })
})
