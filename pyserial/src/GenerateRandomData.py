from random import randint

def generateRandomSensorData():
    """
    Generates a random sensor between 1 and 2, with its respective value being between 0 and 1.
    """
    
    # '1;1' is the sensor 1 with available space
    # '2;1' is the sensor 2 with available space
    # '1;0' is the sensor 1 with no available space
    # '2;0' is the sensor 2 with no available space
    return f'{randint(1,10)};{randint(0,1)}'