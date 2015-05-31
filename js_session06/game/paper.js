var Paper = (function(){
	function Paper(){
		this.name = "paper";
	}

	Paper.prototype.beats = function(otherOptions){
		return otherOptions.name == "rock";
	}
	
	return Paper;
})();
