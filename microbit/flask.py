from flask import Flask, request
 
app = Flask(__name__)
 
@app.route('/get', methods = ["GET"])
def get():
 
    print(request.headers)
    return 'Received'
 
app.run(host='0.0.0.0', port= 8090)