# /usr/bin/env python
# Download the twilio-python library from twilio.com/docs/libraries/python
from flask import Flask, request
from twilio.twiml.messaging_response import MessagingResponse
from twilio.rest import Client
app = Flask(__name__)
app.config.from_object(__name__)
import schedule 
import time
# Try adding your own number to this list!
callers = {
    "+15303215413": "Rey",
}


@app.route("/", methods=['GET', 'POST'])
@app.route("/sms", methods=['GET', 'POST'])
def sms_ahoy_reply():
    """Respond to incoming messages with a friendly SMS."""
    # Start our response
    from twilio.twiml.messaging_response import MessagingResponse
    from datetime import date
    from twilio.rest import Client

    # Your Account Sid and Auth Token from twilio.com/console
    account_sid = "AC4e13fc094f1123f11509a0fe7c65da7c"
    auth_token = "8860bd7669fda81f028652eda833a716"
    client = Client(account_sid, auth_token)

    body = request.values.get('Body', None)  
    resp = MessagingResponse()
    
    if body == "ok":
        resp.message("Your friends have been notified")
        friend_notification()
    else:
        resp.message("Keep raving")
            
    return str(resp)


def send_first_message():
    from twilio.rest import Client

    # Find these values at https://twilio.com/user/account
    account_sid = "AC4e13fc094f1123f11509a0fe7c65da7c"
    auth_token = "8860bd7669fda81f028652eda833a716"

    client = Client(account_sid, auth_token)

    client.api.account.messages.create(
        to="+15303215413",
        from_="+18315081228",
        body="How's the party going?")



def friend_notification():
    from twilio.rest import Client

    # Find these values at https://twilio.com/user/account                      
    account_sid = "AC4e13fc094f1123f11509a0fe7c65da7c"
    auth_token = "8860bd7669fda81f028652eda833a716"

    client = Client(account_sid, auth_token)

    client.api.account.messages.create(
        to="+12068547564",
        from_="+18315081228",
        body="Your friend Lindsey is at a party and needs help.")

send_first_message()


if __name__ == "__main__":
    app.run(debug=True)
       
