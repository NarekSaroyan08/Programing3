const socket = io();
var side = 20;
var sum = 0;
function setup ()
{
    var size1 = prompt("pleas input Canvas size1")
    var size2 = prompt("pleas input Canvas size2")
    frameRate(15);
    createCanvas(size1 * side, size2 * side);
}

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
function connectServer(){
    let btn = document.getElementById("bomb")
    // console.log(btn);
    btn.addEventListener("click",function(){
        
        socket.emit("send info", true)
    })
}
connectServer()
function changeColors(matrix)
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
}

socket.on("send matrix", changeColors)
// setInterval(function () {
//     socket.on('send matrix', changeColors)    
// }, 1000);
