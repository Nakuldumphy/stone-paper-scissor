const wep = ["./cut-97585_1280.png", "./paper-5615944_1280.png","./rock-4803349_1280.png"];
let pointA=0,pointB=0,trial=0;

    let result = document.getElementById('result');
    result.innerHTML = `Round 1`


let spc = ()=>{
    
    trial++;
      let wA = document.getElementById('WA');
      let wB = document.getElementById('WB');
      const i1 = Math.floor(Math.random()*3);
      wA.src = wep[i1];
      const i2 = Math.floor(Math.random()*3);
      wB.src = wep[i2];
    //   wep[Math.floor(Math.random()*3)]
    //  console.log(wA.src)
    if((i1== 0 && i2 == 1)||(i1== 1 && i2 == 2)|| (i1== 2 && i2 == 0)){
       pointA++;
       document.getElementById('scoreA').innerHTML = `Points : ${pointA}`;
    }
    else if((i2== 0 && i1 == 1)||(i2== 1 && i1 == 2)|| (i2== 2 && i1 == 0)){
        pointB++;
       document.getElementById('scoreB').innerHTML = `Points : ${pointB}`;
    }
    else{
        pointA++;
       document.getElementById('scoreA').innerHTML = `Points : ${pointA}`;
       pointB++;
       document.getElementById('scoreB').innerHTML = `Points : ${pointB}`;
    }
    // let result = document.getElementById('result');
    result.innerHTML = `Round ${trial}`
    if(trial==5){
        button.removeEventListener('click',spc);
        if(pointA > pointB)
            result.innerHTML = `player A is Winner🥇`;
        else if(pointA<pointB)
            result.innerHTML = `player B is Winner🥇`;
        else
        result.innerHTML = `Match is Draw📍`;
    return;
    }
};

const button = document.getElementById('button');

button.addEventListener('click',spc)

const reset = document.getElementById('reset');
reset.addEventListener('click',()=>{
    pointA=0;
    pointB=0;
    trial=0;
    document.getElementById('scoreA').innerHTML = `Points : 0`;
    document.getElementById('scoreB').innerHTML = `Points : 0`;
    result.innerHTML = `Round ${trial}`
    button.addEventListener('click',spc);
    document.getElementById('WA').src='./c0d63634-9e81-4dd1-bd05-3cc21176bb4a-removebg-preview.png';
     document.getElementById('WB').src ='./c0d63634-9e81-4dd1-bd05-3cc21176bb4a-removebg-preview.png';
})

