import GameMap from "./map.js";
import { Drawer } from "./helper/drawer.js";
import { DirectionInput } from "./helper/directionInput.js";

const canvas = document.getElementById('game-map')


var GAME_TIMER_INTERVAL = 1000; // sets the time interval for which one step in the game will be performed
var PLAYER_LIFE_COUNT = 3;
var ENEMY_TANKS_COUNT = 21;
var IS_GAME_OVER = false;

/**
 * in this function, you can execute all the code that is necessary to start the game
 * for example, it is in this place that you can draw wall blocks on the map and subscribe to the events of pressing the control buttons 
 */

let tanks = [];
let walls = [];
let drawer;
let keyboardInput;
gameInitialization();


/**
 * Game lifecycle
 * calls the gameLoop function every GAME_TIMER_INTERVAL until the game ends
 * (to end the game, set IS_GAME_OVER to true)
*/
gameLoop();


function gameInitialization() {
    const gameMap = new GameMap();
    const gameObjects = gameMap.generateObjects();
    tanks = gameObjects.tanks;
    walls = gameObjects.walls;
    drawer = new Drawer(canvas, gameMap.MAP.length, gameMap.MAP[0].length);
    keyboardInput = new DirectionInput()
    keyboardInput.init();
    keyboardInput.direction // "down" or undefined
}

function gameLoop() {
    
    draw();

    if (IS_GAME_OVER !== true) {

        /**
         * it is in the gameStep function that you should place the code that will be executed at each step of the game cycle
         */
        gameStep();


        setTimeout(function() {
            gameLoop()
        }, GAME_TIMER_INTERVAL);
    }
}

function draw() {
    drawer.clearCanvas()
    tanks.forEach( (tank) => drawer.drawTankSprite(tank.sprite, tank.position, tank.orientation))
    walls.forEach( (wall) => drawer.drawWallSprite(wall.sprite, wall.position) )
  
}

function gameStep() {
        tanks.forEach((tank) => tank.move(keyboardInput.direction));
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

// function clearCanvas(canvas, ctx) {
//     ctx.fillStyle = "black";
//     ctx.fillRect(0, 0, canvas.width, canvas.height);
// }

