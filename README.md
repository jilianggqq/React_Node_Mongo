# React Node Mongo Example

## about oauth
url : https://accounts.google.com/o/oauth2/v2/auth?

response_type=code

_when we get information from google account(we faked as airbnb)._
_we can get code from google server this way._
redirect_uri=our-hacker-server.com/auth
scope=profile%20email&

_we can replace client_id with official client_id. like airbnb_
_when we get information. we just send them to our servers and record there information._
client_id=463580672547-54gu6r9b282t8gu90th4tse3gqh7eamo.apps.googleusercontent.com
client_id=airbnb_clint_google_oauth
