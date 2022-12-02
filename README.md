DOCKER를 이용한 DB, Block Chain, WEB SERVER 구조입니다.
DOCKER-COMPOSSE를 이용하여 각 컨테이너 관리를 하였습니다.

DB 
    mysql 8.0.20

SERVER
    NodeJS + Express 를 이용하여 서버를 구축하였습니다.
    Front-End 구성은 HTML,CSS,Javascript를 이용하였습니다.

Block Chain
    GO-Ethereum을 이용하여 Private NetWork를 구축하였습니다.
        personal.unlockaccount(eth.account[0]) // Password : 1234
        miner.start(2)

Network는 bridge연결로 되어있습니다.
    
docker-compose -f .\total-node.yml up
http://localhost:3000"# DE" 
