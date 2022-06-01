import { SerialPort } from 'serialport'
import fs from 'fs';

const Port = new SerialPort({
    path: 'COM13',
    baudRate: 115200,
  })

Port.on("open", function() {
  console.log("-- Connection opened --");
 Port.on("data", function(data) {
    console.log("Data received: " + data);
    //data = data.replace(/\s/g, '');
    if (data !== '' & data !== '\s'){
        write(data);
    }
  });
});





async function write(content=''){
    content.replace(/\s/g, '')
    if (content !== ''){
        try {
            fs.writeFileSync('/Users/jacta/Desktop/cole/robotics/microbit to misty/log/teraterm.log', content);
            console.log('File has been writen');
        } catch (err) {
            console.error(err);
        }
    }
}