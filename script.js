var app = new Vue({
	el: "#app",
	data: {
		moves: 0,
		turn: true,
	},
	
	methods: {
		squareClick: function(e) {
			if($(e.target).hasClass('ex') || $(e.target).hasClass('oh'))
				return;
			if(this.turn){
				$(e.target).addClass('ex');
				$(e.target).text("x");
			}
			else {
				$(e.target).addClass('oh');
				$(e.target).text("o");
			}
			
			this.toggleTurn();
			
		},
		
		toggleTurn: function() {
			if(this.turn == true)
				this.turn = false;
			else
				this.turn = true;
		},
		
		resetBoard: function() {
			$(".row div").removeClass("ex");
			$(".row div").removeClass("oh");
			$(".row div").text("");
		}
		
	},



});