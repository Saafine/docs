COOKIES
HttpOnly - makes cookie not accessible through JavaScript and immune to XSS
Secure - cookie can only be send through https

Vulnerabilities:
- CSRF attack - occurs when a malicious web site, email or blog causes a user's web browser to perfom an
unwanted action on a trusted site on which the user is currently authenticated. This is an exploit of how the browser handles cookies.
A cookie can only be sent to the domains in which it is allowed. By default, this is the domain that originally set the cookie.
The cookie will be sent for a request regardless of whether you are on galaxies.com or hahagonnahackyou.com.
CSRF works by attempting to lure you to hahagonnahackyou.com. That site will have either an img tag or JavaScript to emulate a
form post to galaxies.com and attempt to hijack your session, if it is still valid, and modify your account.

