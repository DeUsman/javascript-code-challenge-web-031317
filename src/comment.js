function Comment(text) {
  
  this.text = text
  this.render = function () {
    			return "<li>" + this.text + "</li>"
  				}
};