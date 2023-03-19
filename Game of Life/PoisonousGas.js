let LivingCreature = require("./LivingCreature");
module.exports = class PoisonousGas extends LivingCreature
{
    constructor(x,y)
    {
        super(x,y)
        this.cnt = 0;
        this.size = 300;
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
    chooseCell(char,char1,char2,char3,char4)
    {
        this.getNewCoordinates();
        let found5 = []
        for (let i in this.directions)
        {
            let x = this.directions[i][0];
            let y = this.directions[i][1];
            if (y < matrix.length && y >= 0 && x < matrix[0].length && x >= 0) 
            {
                if (matrix[y][x] == char) 
                {
                    found5.push(this.directions[i]);
                }
            }
            if (y < matrix.length && y >= 0 && x < matrix[0].length && x >= 0) 
            {
                if (matrix[y][x] == char1) 
                {
                    found5.push(this.directions[i]);
                }
            }
            if (y < matrix.length && y >= 0 && x < matrix[0].length && x >= 0) 
            {
                if (matrix[y][x] == char2) 
                {
                    found5.push(this.directions[i]);
                }
            }
            if (y < matrix.length && y >= 0 && x < matrix[0].length && x >= 0) 
            {
                if (matrix[y][x] == char3) 
                {
                    found5.push(this.directions[i]);
                }
            }
            if (y < matrix.length && y >= 0 && x < matrix[0].length && x >= 0) 
            {
                if (matrix[y][x] == char4) 
                {
                    found5.push(this.directions[i]);
                }
            }
        }
        return found5; 
    }
    mul()
    {
        let EmptyCell = this.chooseCell(0);
        let NewCell = EmptyCell[Math.floor(Math.random() * EmptyCell.length)];
        if (NewCell)
        {
            let newX = NewCell[0];
            let newY = NewCell[1];
            // console.log("!!!")
            matrix[newY][newX] = 6;
            this.cnt++;
            let pg = new PoisonousGas(newX,newY)
            poisonousGasArr.push(pg);
        }
    }
    // this.multiply++;
    //     var EmptyCell = this.chooseCell(0);
    //     var NewCell = random(EmptyCell);
    //     if (NewCell && this.multiply >= 8)
    //     {
    //         var NewX = NewCell[0];
    //         var NewY = NewCell[1];

    //         matrix[NewY][NewX] = 1;
    //         var gr  = new Grass(NewX,NewY);
    //         grassArr.push(gr);
    //         this.multiply = 0;
    //     }
    eat() 
    {
        let emptyCell = this.chooseCell(1,2,4,6);
        let newCell = random(emptyCell);
        if (newCell) 
        {
            this.cnt++;
            let newX = newCell[0];
            let newY = newCell[1];
            for (let i = 0; i < grassArr.length; i++) 
            {
                if (grassArr[i].x == newX && grassArr[i].y == newY) 
                {
                    grassArr.splice(i, 1)
                }
            }
            for (let i = 0; i < grassEaterArr.length; i++) 
            {
                if (grassEaterArr[i].x == newX && grassEaterArr[i].y == newY) 
                {
                    grassEaterArr.splice(i, 1)
                }
            }
            for (let i = 0; i < dambldorArr.length; i++) 
            {
                if (dambldorArr[i].x == newX && dambldorArr[i].y == newY) 
                {
                    dambldorArr.splice(i, 1)
                }
            }
            matrix[newY][newX] = 6;
            matrix[this.y][this.x] = 0;
            this.x = newX;
            this.y = newY;

        
                this.mul()
        
        } 
        else 
        {
            this.move()
        }
    }
    move() 
    {
        let emptyCell = this.chooseCell(0);
        let newCell = random(emptyCell);

        if (newCell)
        {
            let newX = newCell[0];
            let newY = newCell[1];

            matrix[newY][newX] = 6;
            matrix[this.y][this.x] = 6;
            
            this.x = newX;
            this.y = newY;
            
            this.energy6 --;
            if (this.cnt >= this.size) 
            {
                this.die()
            }
        } 
    }
    die() 
    {
        console.log("die");
    }
    
}
