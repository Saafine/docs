# SECURING WEB APPS
https://www.youtube.com/watch?v=9inczw6qtpY

Angular 2 XSRFStrategy example: https://i.imgur.com/g56BJSt.png
Sample trusted request: https://i.imgur.com/dF7I9sH.png
Sample untrusted request: https://i.imgur.com/KYqt6rR.png

Client:
1. http only token inside a cookie
2. csrf readeable cookie
3. send csrf header

Server:
check if xsrf cookie === xsrf header
check if access token active

# OAUTH
# Send Authorization header like this:
https://www.base64encode.org/ -> test:test123 (encoded username and password)
Authorization: Basic dGVzdDp0ZXN0MTIz

# Set content-type as x-www-form-urlencoded
clientId: xxxx
scope: xxxx
username: xxxx
password: xxxx
grant_type: xxxx

# OTHER
This is why it is secure to do the following: - Store the JWT in a cookie 
so that it can't be retrieved from XSS - Store a CSRF token in localStorage 
so it can't be retrieved from CSRF – Alejandro Cavazos Nov 6 '17 at 17:55 

https://docs.angularjs.org/api/ng/service/$http#cross-site-request-forgery-xsrf-protection
https://github.com/expressjs/csurf
http://spring.io/blog/2013/08/21/spring-security-3-2-0-rc1-highlights-csrf-protection/