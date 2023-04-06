var directionsArr = [];
var cnt = 0;
module.exports = class Bomb
{
    constructor(x,y)
    {
        this.x = x;
        this.y = y;
        this.directions = []
    }
    getNewCoordinates()
    {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x, this.y + 1],
            [this.x, this.y - 1],
            [this.x - 1, this.y + 2],
            [this.x + 1, this.y],
            [this.x + 1, this.y - 2],
            [this.x + 1, this.y + 1],
            [this.x + 1, this.y - 2],
            [this.x + 2, this.y],
            [this.x + 2, this.y + 1],
            [this.x + 2, this.y + 2],
            [this.x + 1, this.y + 3],
            [this.x + 3, this.y - 1]
        ];
        directionsArr.push(this.directions);
        this.directions1 = [
            [this.x - 1, this.y - 1],
            [this.x - 1, this.y + 1],
            [this.x - 1, this.y + 3],
            [this.x, this.y - 2],
            [this.x, this.y + 2],
            [this.x + 1, this.y - 1],
            [this.x + 1, this.y + 1],
            [this.x + 1, this.y + 3],
            [this.x + 2, this.y - 2],
            [this.x + 2, this.y],
            [this.x + 2, this.y + 2],
            [this.x + 3, this.y + 1],
            [this.x + 3, this.y + 3]
        ];
        directionsArr.push(this.directions1);
        this.directions2 = [
            [this.x - 2, this.y - 1],
            [this.x - 2, this.y + 1],
            [this.x - 1, this.y],
            [this.x - 1, this.y + 2],
            [this.x, this.y + 1],
            [this.x + 1, this.y],
            [this.x + 1, this.y + 2],
            [this.x + 2, this.y - 1],
            [this.x + 2, this.y + 1],
            [this.x + 3, this.y],
            [this.x + 3,this.y + 3]
        ]
        directionsArr.push(this.directions2);
    }
    chooseCell(char,char1,char2,char3)
    {
        this.getNewCoordinates()
        cnt = Math.floor(Math.random() * 3);
        console.log(directionsArr);
        let found4 = []
        for (let i in directionsArr[cnt])
        {
            let x = directionsArr[cnt][i][0];
            let y = directionsArr[cnt][i][1];
            if (y < matrix.length && y >= 0 && x < matrix[0].length && x >= 0) 
            {
                if (matrix[y][x] == char) 
                {
                    found4.push(directionsArr[cnt][i]);
                }
            }
            if (y < matrix.length && y >= 0 && x < matrix[0].length && x >= 0) 
            {
                if (matrix[y][x] == char1) 
                {
                    found4.push(directionsArr[cnt][i]);
                }
            }
            if (y < matrix.length && y >= 0 && x < matrix[0].length && x >= 0) 
            {
                if (matrix[y][x] == char2) 
                {
                    found4.push(directionsArr[cnt][i]);
                }
            }
            if (y < matrix.length && y >= 0 && x < matrix[0].length && x >= 0) 
            {
                if (matrix[y][x] == char3) 
                {
                    found4.push(directionsArr[cnt][i]);
                }
            }
        }
        return found4;
    }
    mul()
    {
        let EmptyCell = this.chooseCell(1,2,3,4);
        console.log(EmptyCell);
        let NewCell = EmptyCell[Math.floor(Math.random() * EmptyCell.length)];
        if (NewCell )
        {
            let newX = NewCell[0];
            let newY = NewCell[1];

            matrix[newY][newX] = 5;

            let bo = new Bomb(newX,newY)
            bombArr.push(bo);
            
            for (let i = 0; i < grassEaterArr.length; i++) 
            {
                if (grassEaterArr[i].x == this.x && grassEaterArr[i].y == this.y) 
                {
                    grassEaterArr.splice(i, 1)
                }
            }
            for (let i = 0; i < dambldorArr.length; i++) 
            {
                if (dambldorArr[i].x == this.x && dambldorArr[i].y == this.y) 
                {
                    dambldorArr.splice(i, 1); 
                }
            }
            for (let i = 0; i < poisonousGasArr.length; i++) 
            {
                if (poisonousGasArr[i].x == this.x && poisonousGasArr[i].y == this.y) 
                {
                    poisonousGasArr.splice(i, 1); 
                }
            }
            for (let i = 0; i < predatorArr.length; i++) 
            {
                if (predatorArr[i].x == this.x && predatorArr[i].y == this.y) 
                {
                    predatorArr.splice(i, 1); 
                }
            }
         
        }
    }
    
}