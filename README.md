# Simple website project

This is code for my personal website jakobjozelj.com.

It allows visitors to navigate the website using the menu, it also includes /Login route where owner of the webiste can login. 
After loged in there is a page with 4 'Cards', 2 are for adding new posts and, 2 are for deleteing the existing posts. 
You can also log out from the webiste. This invalidates server side session that is stored in the database.

Front end is done in:
 - ReactJS
 - ChakraUI
 
 Back end is done in:
  - NodeJS
  - ExpressJS

Database is PostgreSQL. 

If you wish to use this website as a starting point or a template you may clone the repo at your own risk. 

1. Clone the git repository
 - ```git clone git@github.com:iakobj/jakobjozelj.git```

2. Add the ```.env``` file in the ```/backend``` folder.
```
# Database connection details
POSTGRES_HOST="db"
POSTGRES_PORT=5432
POSTGRES_NAME="database"
POSTGRES_USER="postgres"
POSTGRES_PASSWORD="password"

# Creates the hash of a password for the user
# This env variables are used in GeneratePassword.js file
# Hash that you receive from generator is used in USER_PASSWORD 
# SALT is used in Login.js to verify the user password at login
USER_PASSWORD_TO_HASH="password#"
USER_PASSWORD_SALT="salt"

# Creating first user for loging into the website
USER_ID="1"
USER_USERNAME="username"
USER_PASSWORD="generated_user_password_hash" 
USER_FIRSTNAME="firstname"
USER_LASTNAME="lastname"
USER_EMAIL="email"
```
3. Run the GeneratePassword.js file to generate hashed password.
 - ```node GeneratePassword.js```

4. Copy the output to the ```.env``` variable ```USER_PASSWORD```.

5. Change the server_name in /ingress/nginx.conf to reflect your server_name (domain)
6. Create new dhparam foler in your project root directory for the Diffie-Hellman key 
 - ```mkdir dhparam```
7.  Generate your key with the openssl command 
 - ```sudo openssl dhparam -out /home/jakob/jakobjozelj/dhparam/dhparam-2048.pem 2048```
8.  In ```ingress/nginx.conf``` add your domain on lines 3 and 17.

9. Build the images 
 - ```docker compose build```

10. Run the images as containers
 - ```docker compose up -d```

11. You may need to recreate the ```certbot``` service
 - ```docker-compose up -d --force-recreate --no-deps webserver```
 
 12. And then restart the ingress
  - ```docker restart ingress```

 13. Set up the ssl renewal script 
  - ```chmod +x ssl_renew.sh``` 
  - ```sudo crontab -e ```
  - At the end of the file add ```0/12 * * * * /jakob/jakobjozelj/ssl_renew.sh >> /var/log/cron.log 2>&1```
  - After 5 minutes run this ```tail -f /var/log/cron.log```
 14. That is it.
