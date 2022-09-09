# Decoder Ring

Three classic plain text encoders: Caesar Shift, Polybius Square, and Substitution Cipher

You may fork this repository and run the application as follows:

1. Git clone to your machine
2. Run "npm install"
3. Run "npm start"

The browser window should open with the webpage containing cipher input text boxes, and checkboxes giving the option to encode or decode a given message.

#### Caesar
Enter a message in the top box, then enter a number between -25 and 25 (except 0) and click "Submit" to encode it. The characters of that message will be shifted along the alphabet according to the amount specified. Copy the result, reload the page, and paste the ciphered message. Using the same shift number, click the "Decode", then "Submit" to decode that same message. The characters of that message will be shifted along the alphabet according to the amount specified.

#### Polybius
Enter a message in the text box, then click "Submit". When decoding a message, be wary that "i" and "j" share an index on the Polybius Square, so use context clues to decide correct spelling.

#### Substitution
Enter a message in the top box, then enter an alphabet key below. This key should contain 26 unique characters (special characters allowed!); each character will be substituted for one from the regular alphabet when encoding your message. When decoding, keep the same alphabet key to reveal your original message.
