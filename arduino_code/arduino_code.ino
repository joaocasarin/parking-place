#include <Ultrasonic.h>

#define echoUltrasonic1 2
#define triggerUltrasonic1 3

#define echoUltrasonic2 4
#define triggerUltrasonic2 6

struct SensorData {
  long distance;
  int sensor;  
};

Ultrasonic ultrasonic1(triggerUltrasonic1, echoUltrasonic1);
Ultrasonic ultrasonic2(triggerUltrasonic2, echoUltrasonic2);

void setup() {
  Serial.begin(9600);
  pinMode(8, OUTPUT);
  pinMode(9, OUTPUT);
}

void loop() {
  long distanceUltrasonic1 = ultrasonic1.read(CM);
  long distanceUltrasonic2 = ultrasonic2.read(CM);
  int vehicleIsPresentDistance = 10;

  if (distanceUltrasonic1 >= vehicleIsPresentDistance) {
    Serial.println("1;1");
    digitalWrite(8, HIGH);
  } else {
    Serial.println("1;0");
    digitalWrite(8, LOW);  
  }

  if (distanceUltrasonic2 >= vehicleIsPresentDistance) {
    Serial.println("2;1");
    digitalWrite(9, HIGH);
  } else {
    Serial.println("2;0");
    digitalWrite(9, LOW);  
  }

  delay(500);
}
