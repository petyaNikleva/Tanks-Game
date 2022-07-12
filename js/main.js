import GameMap from "./gameObjects/GameMap.js";
import { Drawer } from "./helper/drawer.js";
import { DirectionInput } from "./helper/directionInput.js";
import { Game } from "./gameObjects/Game.js";


const canvas = document.getElementById('game-map');
const game = new Game();
const gameMap = new GameMap();
const gameObjects = gameMap.generateObjects();
const drawer = new Drawer(canvas, gameMap.MAP.length, gameMap.MAP[0].length);
const keyboardInput = new DirectionInput();

game.tanks = gameObjects.tanks;
game.walls = gameObjects.walls;

/**
 * Game lifecycle
 * calls the gameLoop function every GAME_TIMER_INTERVAL until the game ends
 * (to end the game, set IS_GAME_OVER to true)
*/
gameLoop();

function gameLoop() {
    draw();
    if (game.IS_GAME_OVER !== true) {
        
         //* it is in the gameStep function that you should place the code that will be executed at each step of the game cycle
       
        gameStep();


        setTimeout(function () {
            gameLoop()
        }, game.GAME_TIMER_INTERVAL);
    }
}

function draw() {
    drawer.clearCanvas();
    game.tanks.forEach((tank) => drawer.drawTankSprite(tank.sprite, tank.position, tank.orientation));
    game.walls.forEach((wall) => drawer.drawWallSprite(wall.sprite, wall.position));

}

function gameStep() {
    game.tanks.forEach((tank) => {

        tank.move(keyboardInput.direction);
        const arrWalls = game.walls;
        const collision = arrWalls.some(wall => wall.position.x === tank.position.x && wall.position.y === tank.position.y) 
            if (collision) {
                tank.moveBack()
            }
        
    }) 
    //keyboardInput.heldDirections = [];

    /**
          * this is the place where you should do the main steps of the game cycle
          * for example, it seems to us that we could do the following
          * 1. move bullets
          * 2. calculate where the tanks will end up after this step
          * 3. check collisions (bullets with tanks, bullets with walls, tanks with walls and tanks with tanks)
          * 4. remove dead tanks and destroyed walls from the field
          * 5. check if the player has run out of lives or if the enemy tanks have run out
          * 6. create new tanks at the bases in case someone is killed in this step
          */
}

