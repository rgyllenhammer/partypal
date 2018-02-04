from flask import Flask, request
from twilio.twiml.messaging_response import MessagingResponse
from twilio.rest import Client
from threading import Thread
import time

# globals
app = Flask(__name__)
account_sid = 'AC4e13fc094f1123f11509a0fe7c65da7c'
account_token = '8860bd7669fda81f028652eda833a716'
client = Client(account_sid, account_token)

session = False

friendslist = [
    ['halina', '+12068547564'],
    ['kevin', '+14088722549'],
    ['lindsey', '+15303215413'],
    ['reese', '+18314211860'],
]

def send_message(to, by, msg):
    ''' handles sending messges and ensurest that all parameters are strings'''

    to = str(to)
    by = str(by)
    msg = str(msg)

    client.api.account.messages.create(
        to=to,
        from_=by,
        body=msg)


# command functions
def start_session():
    return 'a session has been started for you', True #starts session

def end_session():
    return 'session has ended', False

def send_help(friends = friendslist):
    for friend in friends:
        name = friend[0]
        number = friend[1]

        send_message(number, '+18315081228', 'hello {}, your friend {} is in need of help at a party'.format(name, 'reese'))

    return 'friends are on the way', True

def hehe():
    return 'oh shit waddup its dat boi', True

def show_commands():
    return '''
        start: starts a session for a party
        end: ends a session for a party
        help: immediately calls your number one contact for help
        man: displays command
     ''', True

def check_in(session):
    while session:
        send_message('+18314211860', '+18315081228', 'How is the party going?')
        time.sleep(30)


commands = {
    "start": start_session(),
    "end": end_session(),
    "easteregg": hehe(),
    "man": show_commands()

}

@app.route("/sms", methods=['GET', 'POST'])
def sms_ahoy_reply():
    global session
    global friendslist

    body = request.values.get('Body', None)
    resp = MessagingResponse()

    # Add a message
    if body[0] == '[':

        endInd = body.index(']')
        cmd = body[1:endInd]

        if cmd == 'help':
            send_help(friendslist)
        else:
            reply, session = commands[cmd]
            resp.message(reply)

    if session:
        Thread(target = check_in, args=[session]).start()

    else:
        if session:
            resp.message('''no command detetected. start a command with '[' and end it with ']'. use the command 'man' to see a list of commands and their functions''')
    print(session)

    return str(resp)


if __name__ == "__main__":
    Thread(target = app.run(debug=True)).start()
