let LivingCreature = require("./LivingCreature");
module.exports = class Dambldor extends LivingCreature
{
    constructor(x,y)
    {
        super(x,y)
        this.energyDbl = 8;
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
        let found3 = []
        for (let i in this.directions)
        {
            let x = this.directions[i][0]
            let y = this.directions[i][1]
            if (y < matrix.length && y >= 0 && x < matrix[0].length && x >= 0) 
            {
                if (matrix[y][x] == char) 
                {
                    found3.push(this.directions[i]);
                }
            }
        }
        return found3;
    }
    mul()
    {
        let EmptyCell = this.chooseCell(0);
        let NewCell = EmptyCell[Math.floor(Math.random() * EmptyCell.length)];
        if (NewCell && this.energyDbl > 4)
        {
            let newX = NewCell[0];
            let newY = NewCell[1];

            matrix[newY][newX] = 4;

            let dbld = new Dambldor(newX,newY)
            dambldorArr.push(dbld);
            this.energyDbl = 6;
        }
    }
    eat() 
    {
        let EmptyCell = this.chooseCell(3);
        let newCell = EmptyCell[Math.floor(Math.random() * EmptyCell.length)];
        if (newCell) 
        {
            this.energyDbl ++;
            let newX = newCell[0];
            let newY = newCell[1];
            for (let i = 0; i < grassEaterArr.length; i++) 
            {
                if (grassEaterArr[i].x == newX && grassEaterArr[i].y == newY) 
                {
                    grassEaterArr.splice(i, 1);
                    break;
                }
            }
            matrix[newY][newX] = 4;
            matrix[this.y][this.x] = 0;

            this.x = newX;
            this.y = newY;

            if (this.energyDbl > 15)
            {
                this.mul()
            }
        } 
        else 
        {
            this.move();
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

            matrix[newY][newX] = 4;
            matrix[this.y][this.x] = 0;
            
            this.x = newX;
            this.y = newY;
            
            this.energyDbl --;
            if (this.energyDbl < 0) 
            {
                this.die()
            }
        } 
    }
    die() 
    {
        for (let i = 0; i < dambldorArr.length; i++) 
        {
            if (dambldorArr[i].x == this.x && dambldorArr[i].y == this.y) 
            {
                dambldorArr.splice(i, 1); 
            }
        }
        matrix[this.y][this.x] = 0;
    }
}