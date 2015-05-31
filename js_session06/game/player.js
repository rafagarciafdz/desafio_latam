var Player = (function(){
	function Player(){
		this.fullName = params.fullName;
		this.choosenOption = undefined;
	}

	Player.prototype.choose = function(options){
		var choosenIndex = parseInt(prompt(this.fullName + "0: Rock, 1: Paper, 2: Scissors"));
		this.choosenOption = options[choosenIndex];
	}

	Player.prototype.beats = function(otherPlayer){
		this.choosenOption.beats(otherPlayer.choosenOption);
	}

	return Player;
})();
