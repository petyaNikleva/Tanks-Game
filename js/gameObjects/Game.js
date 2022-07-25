import { Wall } from "./Wall.js";
import { Tank } from "./Tanks/Tank.js";
import { Bullet } from "./Bullet.js";
import { EnemyTank } from "./Tanks/EnemyTank.js";
import { PlayerTank } from "./Tanks/PlayerTank.js";

export class Game {
    constructor() {
        this.GAME_TIMER_INTERVAL = 16;
        this.PLAYER_LIFE_COUNT = 3;
        this.ENEMY_TANKS_COUNT = 21;
        this.IS_GAME_OVER = false;
        this.FRAMES_COUNTER = 64;
        this.tanks = [];
        this.walls = [];
        this.bullets = [];
        this.objectsToDestroy = [];
        this.enemyTankLives = 21;
        this.playerTankLives = 3;
        this.message;
    }

    checkForObjectsToDestroy(thisMap, bullet) {
        const wall = this.walls.find(wall => wall.position.x === bullet.position.x && wall.position.y === bullet.position.y);
        const tank = this.tanks.find(tank => tank.position.x === bullet.position.x && tank.position.y === bullet.position.y);
        const notIinRange = bullet.position.x < 0 || bullet.position.x > thisMap.width || bullet.position.y < 0 || bullet.position.y > thisMap.height;

        if (wall) {
            this.objectsToDestroy.push(wall);
            this.objectsToDestroy.push(bullet);
        } else if (tank) {
            if (!this.checkIsFriendlyFire(tank, bullet)) {
                this.objectsToDestroy.push(tank);
                this.objectsToDestroy.push(bullet);
            }
        } else if (notIinRange) {
            this.objectsToDestroy.push(bullet);
        }
        return this.objectsToDestroy;
    }

    reduceTankLives(tank) {
        if (tank instanceof EnemyTank) {
            this.enemyTankLives--;
            
            if (this.enemyTankLives == 0) {
                this.IS_GAME_OVER = true;
                this.message = "Congrats. You Won."
            }
        } else if (tank instanceof PlayerTank) {
            this.playerTankLives--;
            const playerTank = new PlayerTank('playertank' + "4" + '-' + "13", {
                x: 4,
                y: 13
            })
            this.tanks.push(playerTank)
            if (this.playerTankLives == 0) {
                this.IS_GAME_OVER = true;
                this.message = "Game over."
            }
        }
    }

    destroyObjects(objToDestoy) {
        if (objToDestoy instanceof Wall) {
            this.walls = this.walls.filter((wall) => wall.name !== objToDestoy.name);
        } else if (objToDestoy instanceof Bullet) {
            this.bullets = this.bullets.filter((bullet) => bullet.name !== objToDestoy.name);
            this.updateEnemyTanksShoot(objToDestoy)
        } else if (objToDestoy instanceof Tank) {
            this.tanks = this.tanks.filter((tank) => tank.name !== objToDestoy.name);
            this.reduceTankLives(objToDestoy);
            
        }
    }


    updateEnemyTanksShoot(objToDestoy) {
        let result;
        for (let index = 0; index < this.tanks.length; index++) {
            const tank = this.tanks[index];
            if (objToDestoy?.owner.name === tank.name) {
                result = index;
                break;
            }
        }
        if (result === 0 || result !== undefined) {
            if (this.tanks[result] instanceof EnemyTank) {
                this.tanks[result].isShooting = true;
            } else if (this.tanks[result] instanceof PlayerTank) {
                this.tanks[result].spacePushed = false;
            }
        }
    }

    checkIsFriendlyFire(tank, bullet) {
        if (bullet.owner instanceof EnemyTank && tank instanceof EnemyTank) {
            return true;
        }
    }

    
}


