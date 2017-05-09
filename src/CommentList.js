function CommentList() {

  this.comments = []

  this.render = function () {
                var comment_list = this.comments.map(function(comment) {
                                   return comment.render()
                                   }).join(" ")
                return "<ul>" + comment_list + "</ul>"
                }
  
  this.addComment = function (string) {
                var newComment = new Comment(string)
                this.comments.push(newComment)
                }
  
};