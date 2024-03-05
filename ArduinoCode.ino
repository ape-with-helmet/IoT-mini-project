#include <SPI.h>
#include <Ethernet.h>

// Define a MAC address for your Arduino
byte mac[] = { 0xDE, 0xAD, 0xBE, 0xEF, 0xFE, 0xED };

// Define the IP address of your Arduino
IPAddress ip(192, 168, 139, 12);

// Define the IP address of your server
IPAddress serverIP(192, 168, 141, 231);

// Define the port of your server
int serverPort = 8080;

// Initialize the Ethernet client
EthernetClient client;


//define pins
const int buttonPin1 = 2;
const int buttonPin2 = 3;
const int buttonPin3 = 5;
const int buttonPin4 = 6;
const int led = 9;

void setup() {
  // Start Ethernet connection
  Serial.begin(9600);
  pinMode(buttonPin1, INPUT_PULLUP);
  pinMode(buttonPin2, INPUT_PULLUP);
  pinMode(buttonPin3, INPUT_PULLUP);
  pinMode(buttonPin4, INPUT_PULLUP);
  pinMode(led, OUTPUT);
  if (Ethernet.begin(mac) == 0) {
    Serial.println("Failed to configure Ethernet using DHCP");
    // try to congifure using IP address instead of DHCP:
    Ethernet.begin(mac, ip);
  }
  // Ethernet.begin(mac, ip);
  Serial.println("Ethernert config success");
  // Wait for Ethernet to be ready
  delay(1000);
}

void loop() {
  // Make sure the client is connected to the server
  if (client.connect(serverIP, serverPort)) {
    Serial.println("Connected to server");

    // Define the email and value
    String email = "sadhgunaithal@gmail.com";

    int state1 = !digitalRead(buttonPin1);
    int state2 = !digitalRead(buttonPin2);
    int state3 = !digitalRead(buttonPin3);
    int state4 = !digitalRead(buttonPin4);
    int ledStatus = true;
    int value = state1 + state2 + state3 + state4;
    Serial.println(state1);
    Serial.println(state4);

    if (state1) {
      Serial.println("CHECK 0");
      digitalWrite(led, LOW);
      ledStatus = false;
    }
    if(!state4){
      Serial.println("CHECK 44");
      digitalWrite(led, HIGH);
      ledStatus = true;
    }

    // Construct the request body
    String requestBody = "email=" + email + "&value=" + String(value) + "&motor=" + ledStatus;
    // Make an HTTP POST request to update tank data
    client.print("POST /updateTank HTTP/1.1\r\n");
    client.print("Host: localhost\r\n");
    client.print("Content-Type: application/x-www-form-urlencoded\r\n");
    client.print("Content-Length: ");
    client.print(requestBody.length());
    client.print("\r\n\r\n");
    client.print(requestBody);



    // Read and display response from server
    while (client.available()) {
      char c = client.read();
      Serial.print(c);
    }
  } else {
    // If connection failed
    Serial.println("Connection failed");
  }

  // Close connection
  client.stop();

  // Wait before making the next request
  delay(10000);
}
