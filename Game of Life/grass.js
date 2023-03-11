class Grass 
{
    constructor(x,y)
    {
        this.x = x;
        this.y = y;
        this.multiply = 0;
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
        let found = []
        for (let i in this.directions)
        {
            var x = this.directions[i][0]
            var y = this.directions[i][1]
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length)
            {
                if (matrix[y][x] == char)
                {
                    found.push(this.directions[i])
                }
            }
        }
        return found;
    }
    mul()
    {
        this.multiply++;
        var EmptyCell = this.chooseCell(0);
        var NewCell = random(EmptyCell);
        if (NewCell && this.multiply >= 8)
        {
            var NewX = NewCell[0];
            var NewY = NewCell[1];

            matrix[NewY][NewX] = 1;
            var gr  = new Grass(NewX,NewY);
            grassArr.push(gr);
            this.multiply = 0;
        }
    }
}