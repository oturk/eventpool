function Event(title, description, icon){
	this.title = title;
	this.description = description;
	this.icon = icon;
	
	var toString = function () {
		return "title = " + this.title + "description = " + this.description; 
	}
}
