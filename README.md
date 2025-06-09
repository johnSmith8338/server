#Test Mail

Test mail receiving for OTP to check localy

##Install MailDev

If didn't install yet `npm install -g maildev` or `npm install maildev`
then `maildev` or `npx maildev` accordingly
This will start SMTP server with web interface on http://localhost:1080

##Init backend

Create new folder 'server' or whatever
open this folder in terminal (example: /d/dev/server)
initialize `npm init -y`
install dependences `npm install express nodemailer cors`
copy file 'server.js'
start server `node server.js`

###If got error

$ node server.js
(node:8564) [MODULE_TYPELESS_PACKAGE_JSON] Warning: Module type of file:///D:/dev/server/server.js is not specified and it doesn't parse as CommonJS.
Reparsing as ES module because module syntax was detected. This incurs a performance overhead.

Add "type": "module" to 'package.json' after "version": "1.0.0"
