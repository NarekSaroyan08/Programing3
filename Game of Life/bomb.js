var directionsArr = [];
var cnt = 0;
class Bomb
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
        cnt = Math.floor(Math.random() * 3);
        directionsArr[cnt];
        let found4 = []
        for (let i in directionsArr[cnt])
        {
            let x = this.directionsArr[i][0];
            let y = this.directionsArr[i][1];
            if (y < matrix.length && y >= 0 && x < matrix[0].length && x >= 0) 
            {
                if (matrix[y][x] == char) 
                {
                    found4.push(this.directionsArr[cnt][i]);
                }
            }
            if (y < matrix.length && y >= 0 && x < matrix[0].length && x >= 0) 
            {
                if (matrix[y][x] == char1) 
                {
                    found4.push(this.directionsArr[cnt][i]);
                }
            }
            if (y < matrix.length && y >= 0 && x < matrix[0].length && x >= 0) 
            {
                if (matrix[y][x] == char2) 
                {
                    found4.push(this.directionsArr[cnt][i]);
                }
            }
            if (y < matrix.length && y >= 0 && x < matrix[0].length && x >= 0) 
            {
                if (matrix[y][x] == char3) 
                {
                    found4.push(this.directionsArr[cnt][i]);
                }
            }
        }
        return found4;
    }
    
}