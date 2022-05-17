from microbit import uart, sleep
 
def readUntil(uartObject, termination):
  result = ''
 
  while True:
    if uartObject.any():
 
        byte = uartObject.read(1)
 
        result = result + chr(byte[0])
 
        if chr(byte[0]) == termination:
          break
 
    sleep(100)
 
  return result
 
uart.init(baudrate=9600, tx = pin0, rx = pin1)
 
uart.write("\r")
readUntil(uart, '\r')
 
uart.write("|2|1|JACTC,JACTCWIFI|\r")
 
readUntil(uart, '3')
readUntil(uart, '\r')
 
uart.write("|3|1|http://192.168.1.83:8090/get|\r")
 
readUntil(uart, '3')
result = readUntil(uart, '\r')
 
uart.init(baudrate=115200)
print(result)