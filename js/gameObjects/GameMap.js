import { Wall } from './Wall.js';
import { EnemyTank } from './Tanks/EnemyTank.js';
import { PlayerTank } from './Tanks/PlayerTank.js';

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

// let MAP_LEGEND = {
//     PLAYER_BASE: 1,
//     ENEMY_BASE: 2,
//     WALL: 3
// }


export default class GameMap {
    constructor() {
        this.MAP = MAP;
        this.width = MAP[0].length - 1;
        this.height = MAP.length - 1;
    }

    generateObjects() {
        const tanks = [];
        const walls = [];
        for (let row = 0; row < this.MAP.length; row++) {
            for (let column = 0; column < this.MAP[row].length; column++) {
                const tile = this.MAP[row][column];
                switch (tile) {
                    case 3:
                        const wall = new Wall('wall' + row + '-' + column, {
                            x: column,
                            y: row
                        })
                        walls.push(wall);
                        break;
                    case 1:
                        const playerTank = new PlayerTank('playertank' + row + '-' + column, {
                            x: column,
                            y: row
                        })
                        tanks.push(playerTank)
                        break;
                    case 2:
                        const enemyTank = new EnemyTank('EnemyTank' + row + '-' + column, {
                            x: column,
                            y: row
                        })
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