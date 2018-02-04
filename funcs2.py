def store_friend_number():
   send_message("+18314211860", "+18315081228", "What friend is looking out for you tonight?")
   body = request.values.get('Body', None)
   return body
# returns friends number                                                                                               
#store as friend_number =                                                                                              
def store_user_name():
   send_message("+18314211860","+18315081228","What is your name?")
   body = request.values.get('Body', None)
   return body
#store as user_name                                                                                                    

def send_help():
    send_message(str(friend_number)),"+18315081228", "Your friend", user_name, "is at a party and needs help")
    body = request.values.get('Body', None)
    return body

#sends message to friend                                                                                               
    return 'sending help'


