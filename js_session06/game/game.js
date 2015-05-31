var Game = (function(){
	function Game(){
		this.options = [new Rock(), new Paper(), new Scissors()];
		this.playerOne = new Player({fullName: params.playerOne});
		this.playerTwo = new Player({fullName: params.playerTwo});
		this.winner = undefined;
	}

	//Public
	Game.prototype.play = function(){
		//debugger
		this._askPlayers();
		this._evalGame();
		this._printResults();
	}

	//Private
	Game.prototype._askPlayers = function(){
		var self = this;
		[this.playerOne, this.playerTwo].forEach(function(player)){
			player.choose(self.options);
		}
	}

	Game.prototype._evalGame = function(){
		if(this._isATie()){
			this.winner = undefined;
		} else if(this._playerOneWins()){
			this.winner = this.playerOne;
		} else{
			this.winner = this.playerTwo;
		}
		[this.playerOne, this.playerTwo].forEach(function(player)){
			player.choose(this.options);
		}
	}

	Game.prototype._isATie = function(){
		//this.playerOne.isTied(this.playerTwo);
		return this.playerOne.choosenOption == this.playerTwo.choosenOption;
	}

	Game.prototype._playerOneWins = function(){
		return this.playerOne.beats(this.playerTwo)
	}
	
	return Game;
})();
