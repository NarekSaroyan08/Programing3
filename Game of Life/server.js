var express = require("express");
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(express.static("."));
app.get("/", function (req, res) {
    res.redirect("index.html");
})

server.listen(3000, function () {
    console.log("run server");
})


function MatrixGenerator(matrixSize, grass, GrassEater, predator, Dambldor, PoisonousGas, Bomb) {
    var matrix = [];
    for (let i = 0; i < matrixSize; i++) {
        matrix.push([]);
        for (let j = 0; j < matrixSize; j++) {
            matrix[i].push(0);
        }
    }
    for (let i = 0; i < grass; i++) {
        var x = Math.floor(Math.random() * matrixSize);
        var y = Math.floor(Math.random() * matrixSize);

        matrix[y][x] = 1;
    }

    for (let i = 0; i < GrassEater; i++) {
        var x = Math.floor(Math.random() * matrixSize);
        var y = Math.floor(Math.random() * matrixSize);

        matrix[y][x] = 2;
    }
    for (let i = 0; i < predator; i++) {
        var x = Math.floor(Math.random() * matrixSize);
        var y = Math.floor(Math.random() * matrixSize);

        matrix[y][x] = 3;
    }
    for (let i = 0; i < Dambldor; i++) {
        var x = Math.floor(Math.random() * matrixSize);
        var y = Math.floor(Math.random() * matrixSize);


        matrix[y][x] = 4;
    }
    for (let i = 0; i < Bomb; i++) {
        var x = Math.floor(Math.random() * matrixSize);
        var y = Math.floor(Math.random() * matrixSize);

        matrix[y][x] = 5;
    }
    for (let i = 0; i < PoisonousGas; i++) {
        var x = Math.floor(Math.random() * matrixSize);
        var y = Math.floor(Math.random() * matrixSize);

        matrix[y][x] = 6;
    }
    io.emit("send matrix", matrix)
    return matrix;
}
matrix = MatrixGenerator(30, 200, 50, 15, 10, 1);

let Grass = require("./grass");
let GrassEater = require("./grassEater");
let Predator = require("./predator");
let Dambldor = require("./dambldor");
let PoisonousGas = require("./poisonousgas");
let Bomb = require("./bomb");


sum = 0;

grassArr = [];
grassEaterArr = [];
predatorArr = [];
dambldorArr = [];
poisonousGasArr = [];
bombArr = [];


// function bum() 
// {
//     for (let i = 0; i < 4; i++)
//     {
//         var x = Math.floor(Math.random() * matrix[0].length);
//         var y = Math.floor(Math.random() * matrix.length);
//         matrix[y][x] = 5;
//     }
// }

// function onClickDeat() 
// {
//     poisonousGasArr = [];
//     for (let y = 0;y < matrix.length;y++)
//     {
//         for (let x = 0;x < matrix[y].length;x++)
//         {
//             if (matrix[y][x] == 6)
//             {
//                 matrix[y][x] = 0;
//             }
//         }
//     }

// }

function Create_Object() {
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y)
                grassArr.push(gr)
            }
            else if (matrix[y][x] == 2) {
                var grEart = new GrassEater(x, y);
                grassEaterArr.push(grEart);
            }
            else if (matrix[y][x] == 3) {
                var prd = new Predator(x, y);
                predatorArr.push(prd);
            }
            else if (matrix[y][x] == 4) {
                var dbl = new Dambldor(x, y);
                dambldorArr.push(dbl);
            }
            // else if (matrix[y][x] == 5) {
            //     var Bb = new Bomb(x, y);
            //     bombArr.push(Bb);
            // }
            else if (matrix[y][x] == 6) {
                var pg = new PoisonousGas(x, y);
                poisonousGasArr.push(pg);
            }
        }
    }
    io.emit("send matrix", matrix);
}
Create_Object();
function GameMove() {
    for (let i in grassArr) {
        grassArr[i].mul();
    }
    for (let i in grassEaterArr) {
        grassEaterArr[i].eat();
    }
    for (let i in predatorArr) {
        predatorArr[i].eat();
    }
    for (let i in dambldorArr) {
        dambldorArr[i].eat();
    }
    for (let i in bombArr) {
        bombArr[i].mul();
    }
    // for (let i in poisonousGasArr) {
    //     poisonousGasArr[i].eat();
    // }
    io.emit("send matrix", matrix);
}

setInterval(GameMove, 1000);


function bum() 
{
    for (let i = 0; i < 4; i++)
    {
        var x = Math.floor(Math.random() * matrix[0].length);
        var y = Math.floor(Math.random() * matrix.length);
        for (let i = 0; i < grassEaterArr.length; i++) 
        {
            if (grassEaterArr[i].x == x && grassEaterArr[i].y == y) 
            {
                grassEaterArr.splice(i, 1)
            }
        }
        for (let i = 0; i < dambldorArr.length; i++) 
        {
            if (dambldorArr[i].x == x && dambldorArr[i].y == y) 
            {
                dambldorArr.splice(i, 1); 
            }
        }
        for (let i = 0; i < poisonousGasArr.length; i++) 
        {
            if (poisonousGasArr[i].x == x && poisonousGasArr[i].y == y) 
            {
                poisonousGasArr.splice(i, 1); 
            }
        }
        for (let i = 0; i < predatorArr.length; i++) 
        {
            if (predatorArr[i].x == x && predatorArr[i].y == y) 
            {
                predatorArr.splice(i, 1); 
            }
        }
        matrix[y][x] = 5;
        let bo = new Bomb(x,y)
        bombArr.push(bo)
        console.log(bombArr.length);
        
    }
    io.emit("send matrix", matrix);
}

io.on('connection', function (socket) {

    socket.on("send info", function () {
        bum()
    });
});