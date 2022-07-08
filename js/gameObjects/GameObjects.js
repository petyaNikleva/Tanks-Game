class GameObject {
    constructor(name, position, tileSize, picture) {
        this.name = name;
        this.position = position; // {x: 0, y: 10}
        this.picture = picture;
        this.tileSize = tileSize; // remove
        this.#createSprite();
    }

    #createSprite() {
        this.sprite = new Image();
        this.sprite.src = `../img/${this.picture}`
    }
}

export class Wall extends GameObject {
    constructor(name, position, tileSize) {
        super(name, position, tileSize, 'wall.png');
    }
    draw(ctx) {
        ctx.drawImage(
            this.sprite,
            this.position.x * this.tileSize,
            this.position.y * this.tileSize,
            this.tileSize,
            this.tileSize
        ) 
    }
}


export class Tank extends GameObject {
    #orientation;
    constructor(name, position, tileSize, picture, orientation) {
        super(name, position, tileSize, picture);
        this.#orientation = orientation;
    }
    draw(ctx) {
        let angleInRadians = this.orientation;
        let a = (this.position.x * this.tileSize) + this.tileSize / 2;
        let b = (this.position.y * this.tileSize) + this.tileSize / 2
        ctx.translate(a, b);
        ctx.rotate(angleInRadians);

        ctx.drawImage(
            this.sprite,
            -this.tileSize / 2,
            -this.tileSize / 2,
            this.tileSize, //width
            this.tileSize  //height  
        ) 
        ctx.rotate(-angleInRadians)    
        ctx.translate( -a, -b);
    }

    get orientation() {
        if (this.#orientation === "left") {
            return Math.PI*1.5;
        } else if (this.#orientation === "up") {
            return 0;
        } else if (this.#orientation === "right") {
            return Math.PI/2;
        } else { // down
            return Math.PI;
        }
    }

    set orientation(newOrientation) {
        if (newOrientation === "left" 
        || newOrientation === "up"
        || newOrientation === "right"
        || newOrientation === "down") {
            this.#orientation = newOrientation;
        }
    }
}


export class PlayerTank extends Tank {
    constructor(name, position, tileSize) {
        super(name, position, tileSize, 'player-tank.png', "up");
    }

    move() {
    }

    playerShoot() {
    }
}


export class EnemyTank extends Tank {
    constructor(name, position, tileSize) {
        super(name, position, tileSize, 'enemy-tank.png', "down");
    }

    move() {
        if(this.orientation === "top") {            
            this.position.y -= 1;
        } else if(this.orientation === "right") {
            this.position.x += 1;
        } else if(this.orientation === "up") {
            this.position.y += 1; 
        } else if(this.orientation === "down") {
            this.position.x -= 1;
        }
    }
    
    enemyShoot() {
    }
}



