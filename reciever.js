import { SerialPort } from 'serialport'
import fs from 'fs';


const Readline = SerialPort.parsers.Readline;
var port = new SerialPort('COM7', {
 baudRate: 115200,
 autoOpen: false
})
const parser = new Readline();
port.pipe(parser);
parser.on('data', function(data) {
    console.log(data);
});
const Port = new SerialPort({
    path: 'COM10',
    baudRate: 115200,
  })

Port.on("open", function() {
  console.log("-- Connection opened --");
 Port.on("data", function(data) {
    console.log("Data received: " + data);
    data = data.toString();
//    data.replace('\/\s', '');
    if (data !== '' & data !== '\s'){
        write(data);
    }
  });
});





async function write(content=''){
//    content = content.toString();
    content.replace(' ', '');

    if (content === 'fw' || content === 'bw' || content === 'left' || content === 'right' || content === 'stop'){
        try {
            fs.writeFileSync('/Users/jacta/Desktop/cole/robotics/microbit to misty/log/teraterm.log', content);
            console.log('File has been writen');
        } catch (err) {
            console.error(err);
        }
    }
}