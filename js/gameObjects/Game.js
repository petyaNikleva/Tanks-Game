export class Game {
    constructor(){
        this.GAME_TIMER_INTERVAL = 16; 
        this.PLAYER_LIFE_COUNT = 3;
        this.ENEMY_TANKS_COUNT = 21;
        this.IS_GAME_OVER = false;
        this.tanks = [];
        this.walls = [];
        this.FRAMES_COUNTER = 64;
    }
}


