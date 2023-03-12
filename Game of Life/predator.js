class Predator extends LivingCreature
{
    constructor(x,y)
    {
        super(x,y)
        this.energyPrd = 10;
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
    chooseCell(char,char1,char2)
    {
        this.getNewCoordinates();
        let found2 = []
        for (let i in this.directions)
        {
            let x = this.directions[i][0]
            let y = this.directions[i][1]
            if (y < matrix.length && y >= 0 && x < matrix[0].length && x >= 0) 
            {
                if (matrix[y][x] == char) 
                {
                    found2.push(this.directions[i]);
                }
            }
            if (y < matrix.length && y >= 0 && x < matrix[0].length && x >= 0) 
            {
                if (matrix[y][x] == char1) 
                {
                    found2.push(this.directions[i]);
                }
            }
            if (y < matrix.length && y >= 0 && x < matrix[0].length && x >= 0) 
            {
                if (matrix[y][x] == char2) 
                {
                    found2.push(this.directions[i]);
                }
            }
        }
        return found2;
    }
    mul()
    {
        let EmptyCell = this.chooseCell(0);
        let NewCell = random(EmptyCell);
        if (NewCell && this.energyPrd > 5)
        {
            let newX = NewCell[0];
            let newY = NewCell[1];

            matrix[newY][newX] = 3;

            let prd = new Predator(newX,newY)
            predatorArr.push(prd);
            this.energyPrd = 10;
        }
    }
    eat() 
    {
        let emptyCell = this.chooseCell(2,4,1);
        let newCell = random(emptyCell);
        if (newCell) 
        {
            this.energyPrd += 5;
            let newX = newCell[0];
            let newY = newCell[1];
            for (let i = 0; i < grassArr.length; i++) 
            {
                if (grassArr[i].x == newX && grassArr[i].y == newY) 
                {
                    grassArr.splice(i, 1);
                    break;
                }
            }
            for (let i = 0; i < grassEaterArr.length; i++) 
            {
                if (grassEaterArr[i].x == newX && grassEaterArr[i].y == newY) 
                {
                    grassEaterArr.splice(i, 1);
                    break;
                }
            }
            for (let i = 0; i < dambldorArr.length; i++) 
            {
                if (dambldorArr[i].x == newX && dambldorArr[i].y == newY) 
                {
                    dambldorArr.splice(i, 1);
                    break;
                }
            }
            matrix[newY][newX] = 3;
            matrix[this.y][this.x] = 0;

            this.x = newX;
            this.y = newY;

            if (this.energyPrd > 35)
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
        let emptyCell = this.chooseCell(0);
        let newCell = random(emptyCell);

        if (newCell)
        {
            let newX = newCell[0];
            let newY = newCell[1];

            matrix[newY][newX] = 3;
            matrix[this.y][this.x] = 0;
            
            this.x = newX;
            this.y = newY;
            
            this.energyPrd--;
            if (this.energyPrd < 0) 
            {
                this.die()
            }
        } 
    }
    die() 
    {
        for (let i = 0; i < predatorArr.length; i++) 
        {
            if (predatorArr[i].x == this.x && predatorArr[i].y == this.y) 
            {
                predatorArr.splice(i, 1); 
            }
        }
        matrix[this.y][this.x] = 0;
    }

}