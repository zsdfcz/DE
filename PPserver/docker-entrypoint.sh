echo "wait db server"
dockerize -wait tcp://db:3306 -timeout 20s
npm start