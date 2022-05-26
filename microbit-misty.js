

import fs from 'fs';
//const fetch = require('node-fetch');
import fetch from 'node-fetch'; 




async function read() {
try {
    const data = fs.readFileSync('/Users/jacta/Desktop/cole/robotics/microbit to misty/log/teraterm.log', 'utf8');
    console.log(data);
    return data;
  } catch (err) {
    console.error(err);
  }
  
}




async function check(data, ip){
  if (data === "fw"){
    console.log(data + " registered");
    await request(ip, 50, 0);
    return 0;
  }else if (data === "bw"){
    console.log(data + " registered");
    await request(ip, -50, 0);

    return 0;
  }else if (data === "left"){
    console.log(data + " registered");
    await request(ip, 50, -50);

    return 0;
  }else if (data === "right"){
    console.log(data + " registered");
    await request(ip, 50, 50);

    return 0;
  }else{
    console.log("Sorry the command is not on our system");
    return 1;
  }

}



async function write(){

    const content = '';

    try {
        fs.writeFileSync('/Users/jacta/Desktop/cole/robotics/microbit to misty/log/teraterm.log', content);
        console.log('File has been cleared');
    } catch (err) {
        console.error(err);
    }

}


start();

async function start(){
    
  var ip = '192.168.137.99';



  var data = await read();
  console.log(data);
  var err = await check(data, ip);
  if (err === 0){
    await write();
    await sleep(3000);
    start();

  }else{
    await write();
    await sleep(3000);
    console.log("error = " + err);
    start();
  }


}



async function request(ip,linear = '0',angular = '0'){
  
  //POST http://{ip.address}/api/drive
  Promise.race([
    fetch('http://'+ip+'/api/drive?linearVelocity='+linear+'&angularVelocity='+ angular,{
      method: 'POST',
      body: '{ "linearVelocity":'+linear+',"angularVelocity":'+angular+' }'
    }),
    new Promise((_, reject) => setTimeout(() => reject(new Error('timeout')), 10000))
  ])
  .then(response => response.json())
  .then(jsonData => console.log(jsonData))

  

}





function sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }



