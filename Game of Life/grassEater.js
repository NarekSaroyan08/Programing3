let LivingCreature = require("./LivingCreature");
module.exports = class GrassEater extends LivingCreature
{
    constructor(x,y)
    {
        super(x,y)
        this.energy = 10;
        this.directions = []
    }
    getNewCoordinates()
    {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    chooseCell(char)
    {
        this.getNewCoordinates();
        let found = []
        for (let i in this.directions)
        {
            let x = this.directions[i][0]
            let y = this.directions[i][1]
            if (y < matrix.length && y >= 0 && x < matrix[0].length && x >= 0) 
            {
                if (matrix[y][x] == char) 
                {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    mul()
    {
        let EmptyCell = this.chooseCell(0);
        let NewCell = EmptyCell[Math.floor(Math.random() * EmptyCell.length)];
        if (NewCell && this.energy > 5)
        {
            let newX = NewCell[0];
            let newY = NewCell[1];

            matrix[newY][newX] = 2;

            let grEart = new GrassEater(newX,newY)
            grassEaterArr.push(grEart);
            this.energy = 10;
        }
    }
    eat() 
    {
        let EmptyCell = this.chooseCell(1)
        let newCell = EmptyCell[Math.floor(Math.random() * EmptyCell.length)];
        if (newCell) 
        {
            this.energy += 5;
            let newX = newCell[0];
            let newY = newCell[1];
            for (let i = 0; i < grassArr.length; i++) 
            {
                if (grassArr[i].x == newX && grassArr[i].y == newY) 
                {
                    grassArr.splice(i, 1)
                }
            }
            for (let i = 0; i < dambldorArr.length; i++) 
            {
                if (dambldorArr[i].x == newX && dambldorArr[i].y == newY) 
                {
                    dambldorArr.splice(i, 1)
                }
            }
            matrix[newY][newX] = 2;
            matrix[this.y][this.x] = 0;

            this.x = newX;
            this.y = newY;

            if (this.energy > 30)
            {
                this.mul()
            }
        } 
        else 
        {
            this.move()
        }
    }
    move() 
    {
        let EmptyCell = this.chooseCell(0);
        let newCell = EmptyCell[Math.floor(Math.random() * EmptyCell.length)];

        if (newCell)
        {
            let newX = newCell[0];
            let newY = newCell[1];

            matrix[newY][newX] = 2;
            matrix[this.y][this.x] = 0;
            
            this.x = newX;
            this.y = newY;
            
            this.energy --;
            if (this.energy < 0) 
            {
                this.die()
            }
        } 
    }
    die() 
    {
        for (let i = 0; i < grassEaterArr.length; i++) 
        {
            if (grassEaterArr[i].x == this.x && grassEaterArr[i].y == this.y) 
            {
                grassEaterArr.splice(i, 1)
            }
        }
        matrix[this.y][this.x] = 0;
    }
}

