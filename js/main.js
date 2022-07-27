import GameMap from "./gameObjects/GameMap.js";
import { Drawer } from "./helper/Drawer.js";
import { Game } from "./gameObjects/Game.js";
import { Еxplosion } from "./gameObjects/Explosion.js"
import { Tank } from "./gameObjects/Tanks/Tank.js";

const canvas = document.getElementById('game-map');
const playerScoreElement = document.getElementById('player-score');
const enemyScoreElement = document.getElementById('enemy-score');

const game = new Game();
const gameMap = new GameMap();
const gameObjects = gameMap.generateObjects();
const drawer = new Drawer(canvas, gameMap.MAP.length, gameMap.MAP[0].length);

game.tanks = gameObjects.tanks;
game.walls = gameObjects.walls;

game.frameCounter = 0;
gameLoop();

function gameLoop() {
    draw(game.frameCounter);
    if (game.frameCounter === game.FRAMES_COUNTER) {
        game.frameCounter = 0;
    }

    if (game.IS_GAME_OVER !== true) {
        game.updateTankLivesView(playerScoreElement, enemyScoreElement);
        if (game.frameCounter === 0) {
            gameStep();
        }
        setTimeout(function () {
            gameLoop()
        }, game.GAME_TIMER_INTERVAL);
    } else {
        game.updateTankLivesView(playerScoreElement, enemyScoreElement);
        setTimeout(function () {
            alert(game.message)
        }, game.GAME_TIMER_INTERVAL);

    }
    game.frameCounter++;
}

function draw(frameCounter) {
    const deltaTime = frameCounter / game.FRAMES_COUNTER;
    drawer.clearCanvas();
    game.walls.forEach((wall) => drawer.wallSprite(wall));
    game.tanks.forEach((tank) => {
        drawer.movableObjectSprite(tank, deltaTime);
    })
    if (game.bullets.length > 0) {
        game.bullets.forEach((bullet) => drawer.movableObjectSprite(bullet, deltaTime));
    }
    if (game.objectsToDestroy.length > 0) {
        game.objectsToDestroy.forEach(objToDestroy => drawer.explosionSprite(new Еxplosion(objToDestroy.name, objToDestroy.position, 'boom.png'))
        )
        game.objectsToDestroy = [];
    }
}

function gameStep() {
    game.tanks.forEach((tank) => {
        tank.move();
        if (tank.isCollised(game.walls, gameMap)) {
            tank.moveBack();
        }
        if (tank.isShooting) {
            const bullet = tank.shoot();
            game.bullets.push(bullet);
            tank.isShooting = false;
        }
    });

    if (game.bullets.length > 0) {
        game.bullets.forEach((bullet) => {
            bullet.move();
            game.objectsToDestroy = game.checkForObjectsToDestroy(gameMap, bullet);
        });
        if (game.objectsToDestroy.length > 0) {
            game.objectsToDestroy.forEach((objToDestroy) => {
                game.destroyObjects(objToDestroy);
                if (objToDestroy instanceof Tank) {
                    game.createNewTank(objToDestroy, gameMap)
                }
            });
        }
    }
}

