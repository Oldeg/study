function rpsls(pl1,pl2){
    if (pl1 == 'rock'&&pl2 == 'lizard'||
        pl1 == 'rock'&&pl2 == 'scissors'||
        pl1 == 'paper'&&pl2 == 'rock'||
        pl1 == 'paper'&&pl2 == 'spock'||
        pl1 == 'spock'&&pl2 == 'rock'||
        pl1 == 'spock'&&pl2 == 'scissors'||
        pl1 == 'scissors'&&pl2 == 'paper'||
        pl1 == 'scissors'&&pl2 == 'lizard'||
        pl1 == 'lizard'&&pl2 == 'paper'||
        pl1 == 'lizard'&&pl2 == 'spock')
        {return 'Player 1 Won!'}
    if (pl1 == 'rock'&&pl2 == 'paper'||
        pl1 == 'rock'&&pl2 == 'spock'||
        pl1 == 'paper'&&pl2 == 'scissors'||
        pl1 == 'paper'&&pl2 == 'lizard'||
        pl1 == 'spock'&&pl2 == 'lizard'||
        pl1 == 'spock'&&pl2 == 'paper'||
        pl1 == 'scissors'&&pl2 == 'spock'||
        pl1 == 'scissors'&&pl2 == 'rock'||
        pl1 == 'lizard'&&pl2 == 'rock'||
        pl1 == 'lizard'&&pl2 == 'scissors'){
        return 'Player 2 Won!'
        } 
    return 'Draw!';
}