const express = require('express');
const Web3 = require('web3'); // web3.js
const app = express()
const multer = require('multer');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
var crypto = require('crypto');
const bodyParser = require('body-parser');
const { resolve } = require('path');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
const mysql = require('mysql2/promise');

var hash = crypto.createHash('md5');
var vihash = "";
const dbConnect = async (num) => {
    try {
        const connection = await mysql.createConnection({
            host: "db",
            user: "root",
            password: "root",
            database: "boardDB",
            charset: "utf8_general_ci"
        });
        console.log("게시판 DB연결 성공");
        var sql = `SELECT hash FROM board WHERE num = ?`
        
        const [rows, fields] = await connection.query(sql,[num]);
        return rows[0].hash;
    } catch (error) {
        console.log(error);
    }
};


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
});

const upload = multer({ storage: storage })


/*
    title: '제목테스트',
    state: '장소테스트',
    date: '2022-10-29',
    time: '12:59',
    content: '테스트테스트',
    writer: 'on'
*/
const dbinserttest = async (title,state,datetime,content,url,hash) => {
    try {
        const connection = await mysql.createConnection({
            host: "db",
            user: "root",
            password: "root",
            database: "boardDB",
            charset: "utf8_general_ci"
        });
        var sql =`INSERT INTO Board(title, location ,datetime, contents, url, hash) VALUES (?,?,?,?,?,?);`
        const result123 = await connection.query(sql,[title,state,datetime,content,url,hash]);
        console.log(result123);
    } catch (error) {
        console.log(error);
    }
};
app.post('/uploadtest', upload.single('file'), async (req, res, next) => {
    await filehash(req.file.originalname);
    var t =req.body.title
    var l =req.body.state
    var d =req.body.date + " " + req.body.time
    var con = req.body.content
    var wr = req.body.writer
    var ur = req.file.path
    var 해쉬 = vihash
    dbinserttest(t,l,d,con,ur,해쉬)
    res.json('업로드 완료')
});


app.post('/ver', async (req,res, next) => {
    var vname2 = req.body.vtitle2
    var vn = req.body.vnum2
    var dbhash = await dbConnect(vn); // db에 저장된 해시
    var blockhash = await getcontract(vn) // 블록체인에 저장된 해시 
    console.log(dbhash)
    console.log(blockhash)
    
    if (dbhash === blockhash){
        res.json(vname2 + ', ' + vn + '<div><br />서버에 저장된 정보</div>' + dbhash 
            + '<div><br />블록체인에 저장된 정보</div>' + blockhash + '<div><br />블록체인에 저장된 해시값과 DB에 저장된 해시값이 일치합니다</div><br /> 검증 완료');
    }
    else {
        res.json('일치하지 않습니다.')
    }
})



async function filehash(name) {
    hash = crypto.createHash('md5');
    var fileName = path.join(__dirname + '/uploads', name);
    var input = fs.createReadStream(fileName);
    var h2;
    input.on('readable', function () {
        var data = input.read();
        if (data)
            hash.update(data);
        else {
            var hash2str = hash.digest('hex').toString();
            vihash = hash2str;
            calladdvideo(name, owner, hash2str); // 블록체인등록
        }
    });
}


//172.18.0.3 -> geth컨테이너의 ip주소 컨테이너간 네트워크를 bridge 연결을 해주었기 때문에 확인할 수 있다.


app.use(express.static(__dirname + "/public"));
app.use(cors());

app.get('/', (req, res) => res.sendFile(__dirname + '/public/pages/main.html'));

app.get('/contr', (req, res) => { // test
    dbinsert();
});

/*블록체인과 연동  /contr << getweb3 -> getaccount -> return accounts 계좌불러오기 성공
    컨트랙트와 연동  getweb3 -> getcontract 동기방식
  

*/

const ABI = [
    {
        "constant": false,
        "inputs": [],
        "name": "kill",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "name",
                "type": "string"
            },
            {
                "name": "addr",
                "type": "string"
            },
            {
                "name": "hash",
                "type": "string"
            }
        ],
        "name": "addvideo",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "vidnum",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "owner",
        "outputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "VS",
        "outputs": [
            {
                "name": "addr",
                "type": "address"
            },
            {
                "name": "videohash",
                "type": "string"
            },
            {
                "name": "videoname",
                "type": "string"
            },
            {
                "name": "videoaddr",
                "type": "string"
            },
            {
                "name": "transaction",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
    }
];
const contractaddr = '0xec8ad9C48974175612a5eB31427fBcdf2020BBE7'
const owner = '0x3b3c85f2C1b1001c48CfE7c5E4445B0b9CcF5eEA'
const web32 = new Web3(new Web3.providers.HttpProvider('http://172.18.0.4:8545'));
const ethfuntion = new web32.eth.Contract(ABI, contractaddr); //스마트컨트랙트 부르기 ethfuntion.methods.함수명.call()

function getWeb3() {
    const web3 = new Web3(new Web3.providers.HttpProvider('http://172.18.0.4:8545'));
    return web3;
}
async function getAccounts() {   //계정 조회 함수
    try {
        const accounts = await getWeb3().eth.getAccounts();
        console.log(accounts);
        return accounts;
    } catch (e) {
        console.log(e);
        return e;
    }
}

async function getcontract(pram) { // 스마트컨트랙트 내부 조회 함수 pram 은 번호이다= vidnum //getcontract(int) 호출시 
    //addvideo함수작동시 vidnum이라는 변수에 번호를 저장한다  
    try {
        const VS = await ethfuntion.methods.VS(pram).call();
        return VS.videohash;
    } catch (e) {
        console.log(e);
        return e;
    }
}

//(string name, string addr, string hash) 
async function calladdvideo(m1, m2, m3) {   //addvideo 호출 함수  send로 호출해야한다 call과는
    try {
        const ttest = await ethfuntion.methods.addvideo(m1, m2, m3).send({ from: owner, gasPrice: 1e10 });
        console.log(ttest);
        const vidnum = await ethfuntion.methods.vidnum().call();
        console.log("영상 번호는 " + (vidnum - 1));
        hash = crypto.createHash('md5')// hash 객체 초기화
    } catch (e) {
        console.log(e);
        return e;
    }
}




app.listen(3000, () => {
    const dir = "./uploads";
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
    }
    console.log('포트번호 외부 3000 >>도커 내부3000로 연결');
    console.log('연결후 메인페이지 보여주기');

})
