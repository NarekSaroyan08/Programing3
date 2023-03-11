function MatrixGenerator(matrixSize,grass,GrassEater,predator,Dambldor,PoisonousGas,Bomb)
{
    var matrix = [];
    for (let i = 0; i < matrixSize;i++)
    {
        matrix.push([]);
        for (let j = 0; j < matrixSize; j++)
        {
            matrix[i].push(0);
        }
    }
    for (let i = 0; i < grass;  i++)
    {
        var x = Math.floor(Math.random() * matrixSize);
        var y = Math.floor(Math.random() * matrixSize);

        matrix[y][x] = 1;
    }

    for (let i = 0; i < GrassEater;i++)
    {
        var x = Math.floor(Math.random() * matrixSize);
        var y = Math.floor(Math.random() * matrixSize);

        matrix[y][x] = 2;
    }
    for (let i = 0; i < predator;i++)
    {
        var x = Math.floor(Math.random() * matrixSize);
        var y = Math.floor(Math.random() * matrixSize);

        matrix[y][x] = 3;
    }
    for (let i = 0; i < Dambldor;i++)
    {
        var x = Math.floor(Math.random() * matrixSize);
        var y = Math.floor(Math.random() * matrixSize);

       
        matrix[y][x] = 4;
    }
    for (let i = 0; i < Bomb;i++)
    {
        var x = Math.floor(Math.random() * matrixSize);
        var y = Math.floor(Math.random() * matrixSize);

        matrix[y][x] = 5;
    }
    for (let i = 0; i < PoisonousGas;i++)
    {
        var x = Math.floor(Math.random() * matrixSize);
        var y = Math.floor(Math.random() * matrixSize);

        matrix[y][x] = 6;
    }
    return matrix;
}
var matrix = MatrixGenerator(30,200,50,15,10,1);
var side = 20;
var sum = 0;
var grassArr = [];
var grassEaterArr = [];
var predatorArr = [];
var dambldorArr = [];
var poisonousGasArr = [];
var bombArr = [];

function bum() 
{
    for (let i = 0; i < 4; i++)
    {
        var x = Math.floor(Math.random() * matrix[0].length);
        var y = Math.floor(Math.random() * matrix.length);
        matrix[y][x] = 5;
    }
}
function onClickDeat() 
{
    console.log("Fuck")
    poisonousGasArr = [];
    for (let y = 0;y < matrix.length;y++)
    {
        for (let x = 0;x < matrix[y].length;x++)
        {
            if (matrix[y][x] == 6)
            {
                matrix[y][x] = 0;
            }
        }
    }
    
}
console.log(matrix);
function setup ()
{
    frameRate(15);
    createCanvas(matrix[0].length * side,matrix[0].length * side);
    for (let y = 0;y < matrix.length;y++)
    {
        for (let x = 0;x < matrix[y].length;x++)
        {
            if (matrix[y][x] == 1)
            {
                var gr = new Grass(x,y)
                grassArr.push(gr)
            }
            else if (matrix[y][x] == 2)
            {
                var grEart = new  GrassEater(x,y);
                grassEaterArr.push(grEart);
            }
            else if (matrix[y][x] == 3)
            {
                var prd = new Predator(x,y);
                predatorArr.push(prd);
            }
            else if (matrix[y][x] == 4)
            {
                var dbl = new Dambldor(x,y);
                dambldorArr.push(dbl);
            }
            else if (matrix[y][x] == 5)
            {
                var Bb = new Bomb(x,y);
                bombArr.push(Bb);
                // console.log(bombArr);
            }
            else if (matrix[y][x] == 6)
            {
                var pg = new PoisonousGas(x,y);
                poisonousGasArr.push(pg);
            }
        }
    }
}

function draw()
{
    for (let y = 0 ; y < matrix.length;y++)
    {
        for (let x = 0; x < matrix[0].length;x++)
        {
            if (matrix[y][x] == 1)
            {
                fill("green");
            }
            else if (matrix[y][x] == 2)
            {
                fill("yellow");
            }
            else if (matrix[y][x] == 3)
            {
                fill("black");
            }
            else if (matrix[y][x] == 4)
            {
                fill("aqua");
            } 
            else if (matrix[y][x] == 5)
            {
                fill("red");
            }
            else if (matrix[y][x] == 6)
            {
                // fill("#BDF516");
                fill("blue")
            }
            else
            {
                fill("gray");
            }
            rect(x * side,y * side,side,side);
        }
    }
    for (let i in grassArr)
    {
        grassArr[i].mul();
    }
    for(let i in grassEaterArr)
    {
        grassEaterArr[i].eat();
    }
    for(let i in predatorArr)
    {
        predatorArr[i].eat();
    }
    for(let i in dambldorArr)
    {
        dambldorArr[i].eat();
    }
    // console.log(bombArr.length);
    for(let i in bombArr)
    {
        bombArr[i].mul();
    }
    for(let i in poisonousGasArr)
    {
        poisonousGasArr[i].eat();
    }
}