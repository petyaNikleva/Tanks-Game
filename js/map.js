import {PlayerTank, EnemyTank, Wall } from './gameObjects/GameObjects.js'

const MAP = [
    [2, 0, 0, 3, 0, 0, 2, 0, 0, 3, 0, 0, 2],
    [0, 0, 0, 3, 0, 0, 0, 0, 0, 3, 0, 0, 0],
    [0, 0, 0, 3, 0, 0, 0, 0, 0, 3, 0, 0, 0],
    [0, 0, 0, 3, 0, 0, 0, 0, 3, 3, 3, 0, 0],
    [0, 0, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [3, 3, 3, 0, 0, 3, 3, 3, 0, 0, 3, 3, 3],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 3, 3, 3, 3, 0, 3, 3, 3, 3, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 3, 3, 3, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 3, 0, 3, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 3, 0, 3, 0, 0, 0, 0, 0]
];

var MAP_LEGEND = {
    PLAYER_BASE: 1,
    ENEMY_BASE: 2,
    WALL: 3
}

const tileSize = 64

export default class GameMap {
    constructor() {
        this.wall = this.#image('wall.png');
        this.MAP = MAP; 
    }

    #image(fileName) {
        const img = new Image();
        img.src = `../img/${fileName}`
        return img;
    };

    generateObjects() {
        const tanks = [];
        const walls = [];
        for (let row = 0; row < this.MAP.length; row++) {
            for (let column = 0; column < this.MAP[row].length ; column++) {
                const tile = this.MAP[row][column];
                let image = null;
                switch (tile) {
                    case 3:
                        image = this.wall;
                        const wall = new Wall('wall' + row + '-' + column, {
                            x: column,
                            y: row
                        },
                        tileSize)
                        walls.push(wall);
                        break;
                    case 1:
                        const playerTank = new PlayerTank('playertank' + row + '-' + column, {
                            x: column,
                            y: row
                        }, 
                        tileSize)
                        tanks.push(playerTank)
                        break;
                    case 2:
                        const enemyTank = new EnemyTank('EnemyTank' + row + '-' + column, {
                            x: column,
                            y: row
                        },
                        tileSize)
                        tanks.push(enemyTank)
                        break;
                }
            }
        }

        return {
            tanks,
            walls
        }
    }

   
}