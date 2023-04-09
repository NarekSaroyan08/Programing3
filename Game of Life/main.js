const socket = io();
var side = 20;
var sum = 0;
// var weather = ""
// var weather = prompt("Ներմուծել եղանակը հետևյալ տեսքով (գարուն, ամառ, ձմեռ, աշուն) կամ (spring, summer, winter, autumn) ,(ստանդարտ եղանակը ամառ է !)")
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
    let oCD = document.getElementById("onClickDeat")
    oCD.addEventListener("click",function(){
        
        socket.emit("send", true)
    })
    let wEather = document.getElementById("weather")
    wEather.addEventListener("click",function(weather){
        weather = prompt("Ներմուծել եղանակը հետևյալ տեսքով (գարուն, ամառ, ձմեռ, աշուն) կամ (spring, summer, winter, autumn) ,(ստանդարտ եղանակը ամառ է !)");
        
        socket.emit("send_weather", weather);
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
            // գարուն      :)

            else if (matrix[y][x] == 7)
            {
                fill("#056608");
            }
            else if (matrix[y][x] == 8)
            {
                fill("#B2C248");
            }
            else if (matrix[y][x] == 9)
            {
                fill("#F70D1A");
            }
            else if (matrix[y][x] == 10)
            {
                fill("#0909FF");
            } 
            else if (matrix[y][x] == 11)
            {
                fill("#FDBD01");
            }
            else if (matrix[y][x] == 12)
            {
                // fill("#BDF516");
                fill("#9DC209")
            }
            // ձմեռ     :)

            else if (matrix[y][x] == 13)
            {
                fill("#7BCCB5");
            }
            else if (matrix[y][x] == 14)
            {
                fill("#01F9C6");
            }
            else if (matrix[y][x] == 15)
            {
                fill("#033E3E");
            }
            else if (matrix[y][x] == 16)
            {
                fill("#0AFFFF");
            } 
            else if (matrix[y][x] == 17)
            {
                fill("#FFFFFF");
            }
            else if (matrix[y][x] == 18)
            {
                // fill("#BDF516");
                fill("#00CED1")
            }

            // աշուն    :)

            else if (matrix[y][x] == 1)
            {
                fill("#1F6357");
            }
            else if (matrix[y][x] == 2)
            {
                fill("#728C00");
            }
            else if (matrix[y][x] == 3)
            {
                fill("#4B0150");
            }
            else if (matrix[y][x] == 4)
            {
                fill("#FFA62F");
            } 
            else if (matrix[y][x] == 5)
            {
                fill("#F9DB24");
            }
            else if (matrix[y][x] == 6)
            {
                // fill("#BDF516");
                fill("#52D017")
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
