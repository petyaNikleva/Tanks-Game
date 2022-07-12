export class Game {
    constructor(){
        this.GAME_TIMER_INTERVAL = 1000; 
        this.PLAYER_LIFE_COUNT = 3;
        this.ENEMY_TANKS_COUNT = 21;
        this.IS_GAME_OVER = false;
        this.GAME_SPEED = 1;
        this.tanks = [];
        this.walls = [];
    }
}


