import { SerialPort } from 'serialport'
import fs from 'fs';
import { ReadlineParser } from '@serialport/parser-readline'

const port = new SerialPort({ path: 'COM12', baudRate: 115200 })

const parser = port.pipe(new ReadlineParser({ delimiter: '\r\n' }))
parser.on('data', function(data) {
    console.log(data);
    data.toString();
    write(data);
})

//var port = new SerialPort('COM7', {
// baudRate: 115200,
// autoOpen: false
//})
//const parser = new Readline();
//port.pipe(parser);
//parser.on('data', function(data) {
//    console.log(data);
//});



//const Port = new SerialPort({
//    path: 'COM10',
//    baudRate: 115200,
//  })
//
/*Port.on("open", function() {
  console.log("-- Connection opened --");
 Port.on("data", function(data) {
    console.log("Data received: " + data);
    data = data.toString();
//    data.replace('\/\s', '');
    if (data !== '' & data !== '\s'){
        write(data);
    }
  });
});*/





async function write(content=''){
//    content = content.toString();
    content.replace(/\s/g, '');

    
    try {
        fs.writeFileSync('/Users/jacta/Desktop/cole/robotics/microbit to misty/log/teraterm.log', content);
        console.log('File has been writen');
    } catch (err) {
        console.error(err);
    }
    
}