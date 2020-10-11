var sea_1 = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [1, 0, 0, 1, 1, 1, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 1, 0, 0, 0, 0, 0, 1, 0],
             [0, 0, 1, 0, 0, 0, 0, 0, 1, 0],
             [0, 0, 0, 0, 0, 1, 0, 0, 1, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
             [0, 1, 1, 1, 1, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];
//first play floor
var sea_2 = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 1, 0, 0, 0, 0, 1, 1, 1, 1],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 1, 0, 0, 1, 0, 0, 0, 0, 0],
             [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 1, 0, 0, 1, 1, 0, 0, 1, 0],
             [0, 1, 0, 0, 0, 0, 0, 0, 1, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];
//second play floor
console.table(sea_1);
console.table(sea_2);

var r=0;
var t=0;
var o=0;
var u=0;
function check_1(){
    for(let i=0;i<sea_1.length;i++){
        if(sea_1[i].includes(1))
            return true;
    }
    return false;
}


function check_2(){
    for(let i=0;i<sea_1.length;i++){
        if(sea_2[i].includes(1))
            return true;
    }
    return false;
}

function bot_1(){

    while(true){
        let x=Math.floor(Math.random()*10);
        let y=Math.floor(Math.random()*10);
        switch(sea_1[x][y]){
            case 0://нет попадания
                sea_1[x][y]="0";
                r=r+1;
                return;
            case 1:// есть попадание
                sea_1[x][y]="0";
                t=t+1;
                bot_1();
                return;
        }
        console.log("[1] кол-во промохов: " ,r);
        console.log("[1] кол-во попаданий: " ,t);
        console.log("[1] ходы первого бота: ",r+t);
    }

}


function bot_2(){
    while(true){
        let x=Math.floor(Math.random()*10);
        let y=Math.floor(Math.random()*10);
        switch(sea_2[x][y]){
            case 0://нет попадания
                sea_2[x][y]="0";
                o=o+1;
                return;
            case 1:// есть попадание
                sea_2[x][y]="0";
                u=u+1;
                bot_2();
                return;
        }
        console.log("[2] кол-во промохов: " ,o);
        console.log("[2] кол-во попаданий: " ,u);
        console.log("[2] ходы второго бота: ",o+u);
    }
}



while(true){
    bot_1();

    if(!check_1()){
        console.log("Первый бот победил");
        break;
    }

    bot_2();
    if(!check_2()){
        console.log("Второй бот победил");
        break;
    }
}

/*console.log("[1] кол-во промохов: " ,r);
console.log("[1] кол-во попаданий: " ,t);
console.log("[1] ходы первого бота: ",r+t);
console.log("[2] кол-во промохов: " ,o);
console.log("[2] кол-во попаданий: " ,u);
console.log("[2] ходы второго бота: ",o+u);
*/