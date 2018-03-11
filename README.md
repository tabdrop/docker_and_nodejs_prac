docker run \
-v $HOME/coderunner:$HOME/coderunner \
-v /usr/local/bin/docker:/usr/local/bin/docker \
-v /usr/bin/docker:/usr/bin/docker \
-v /var/run/docker.sock:/var/run/docker.sock \
-w $HOME/coderunner \
-p 3000:3000 \
--rm -i -t node /bin/bash

/* node setting and start (node_path ->npm root)*/
/coderunner# npm root -g
/usr/local/lib/node_modules
/coderunner# export NODE_PATH=/usr/local/lib/node_modules
/coderunner# npm install -g express
/coderunner# node app.js