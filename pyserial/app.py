from time import sleep
from flask import Flask
from flask_socketio import SocketIO, emit
from src.GenerateRandomData import generateRandomSensorData
# import serial

app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret!'

socketIo = SocketIO(app, cors_allowed_origins="*")
app.debug = True

# arduino = serial.Serial('COM5', 9600, timeout=2)

@socketIo.on('connect')
def handleMessage():
    # data = arduino.readline().decode().strip()
    
    data = generateRandomSensorData()
    splittedData = data.split(';') # ['1', '1']
    sensor = splittedData[0]
    isFree = splittedData[1] == '1' # True - unavailable spot; False - available spot
    
    emit('sensor', {'sensor': sensor, 'isFree': isFree})
    
    # prevent spamming emits
    sleep(2)
    
    return None

if __name__ == '__main__':
    socketIo.run(app)