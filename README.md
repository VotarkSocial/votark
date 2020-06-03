# votark
A social media app that allows you to vote for posts based on hashtags and topics. 

HELLO EVERYONE!

## 1.How to Run:

1. Follow the instructions on the API respository https://github.com/suulcoder/votarkAPI
2. In order to got the media images running in your device Follow the instrucctions of https://dashboard.ngrok.com/get-started/setup
3. In other terminal run ./ngrok http 8000 or the port where the API is running
4. Change the following files:

/configuration.js

Change the API_URL and the STATIC_URL with the url provided by negrok. 
    
    Important:

        USE THE HTTPS URL
        The API_URL must have the final slash and the STATIC_URL must not have it. Like this:

         API_URL = https://55a60c361b9c.ngrok.io/
         STATIC_URL = https://55a60c361b9c.ngrok.io

in the API REPOSITORY add the negrok uri to the ALLOWED_HOSTS, like this:
    ALLOWED_HOSTS = ['127.0.0.1','ip','55a60c361b9c.ngrok.io']

6. run yarn install
5. Run the expo tunnel: you can run the following command: expo start
7. choose local as connection methond on the expo tunnel menu
8. run on android device. (you need to have to have at least one device connected), IMPORTANT: it must be a device and not an emulator, or you will not be able to run the camera option. 
9. Enjoy