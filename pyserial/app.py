from threading import Timer
from time import sleep
from flask import Flask
from flask_socketio import SocketIO, emit
from src.GenerateRandomData import generateRandomSensorData
# import serial

app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret!'

socketIo = SocketIO(app, cors_allowed_origins="*")
app.debug = True

# arduino = serial.Serial('COM7', 9600)

@socketIo.on('connect')
def handleMessage():
    
    # this would be used to retrieve data from arduino
    # data = arduino.readline().decode().strip()
    
    # simulates the data sent from arduino
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