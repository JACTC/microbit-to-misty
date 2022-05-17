



const fs = require('fs');


async function read() {
try {
    const data = fs.readFileSync('/Users/jacta/Desktop/cole/robotics/microbit to misty/log/teraterm.log', 'utf8');
    console.log(data);
  } catch (err) {
    console.error(err);
  }
      
}





async function write(){

    const content = ' ';

    try {
        fs.writeFileSync('/Users/jacta/Desktop/cole/robotics/microbit to misty/log/teraterm.log', content);
        console.log('File has been cleared');
    } catch (err) {
        console.error(err);
    }

}

while (true){
    start();

}



async function start(){
    
    await read();
    await write();
    await sleep(1000);
    

}



function sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }


/*const delay = ms => new Promise(resolve => setTimeout(resolve, ms))
function sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }


const content = 'hellooo';
fs.writeFile('/Users/jacta/Desktop/cole/robotics/microbit to misty/log/teraterm.log', content, err => {
  if (err) {
    console.error(err);
  }
    console.log('File has been written');
});*/
