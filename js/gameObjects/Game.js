import { Wall } from "./Wall.js";
import { Tank } from "./Tanks/Tank.js";
import { Bullet } from "./Bullet.js";

export class Game {
    constructor(){
        this.GAME_TIMER_INTERVAL = 16; 
        this.PLAYER_LIFE_COUNT = 3;
        this.ENEMY_TANKS_COUNT = 21;
        this.IS_this_OVER = false;
        this.FRAMES_COUNTER = 64;
        this.tanks = [];
        this.walls = [];
        this.bullets = [];
        this.objectsToDestroy = [];
    }

    checkForObjectsToDestroy(thisMap, bullet) {
        const wall = this.walls.find(wall => wall.position.x === bullet.position.x && wall.position.y === bullet.position.y);
        const tank = this.tanks.find(tank => tank.position.x === bullet.position.x && tank.position.y === bullet.position.y);
        const notIinRange = bullet.position.x < 0 || bullet.position.x > thisMap.width || bullet.position.y < 0 || bullet.position.y > thisMap.height;
        
        if (wall) {
            this.objectsToDestroy.push(wall);
            this.objectsToDestroy.push(bullet);
        } else if (tank) {
            this.objectsToDestroy.push(tank);
            this.objectsToDestroy.push(bullet);
        } else if (notIinRange) {
            this.objectsToDestroy.push(bullet);
        }
        return this.objectsToDestroy;
    }

    destroyObjects(objToDestoy){
        if (objToDestoy instanceof Wall) {
            this.walls = this.walls.filter((wall) => wall.name !== objToDestoy.name);
        } else if (objToDestoy instanceof Bullet) {
            this.bullets = this.bullets.filter((bullet) => bullet.name !== objToDestoy.name);
        } else if (objToDestoy instanceof Tank) {
            this.tanks = this.tanks.filter((tank) => tank.name !== objToDestoy.name);
        }
    } 

 
    
}


