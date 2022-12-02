CREATE DATABASE boardDB CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

USE boardDB;

CREATE TABLE Board (
    num INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(100) NOT NULL,
    location TEXT NOT NULL,
    datetime DATETIME NOT NULL,
    contents TEXT NULL,
    url TEXT NULL,
    hash TEXT NULL,
    PRIMARY KEY(num)
);

INSERT INTO Board(title, location ,datetime, contents)
VALUES ('test', 'test', '2022-08-22 07:00:00','test');   

INSERT INTO Board(title, location ,datetime, contents)
VALUES ('집단 폭행', '안산 상록구 중앙동', '2022-07-22 08:30:00','가해자 3 피해자 1'); 

INSERT INTO Board(title, location ,datetime, contents)
VALUES ('뺑소니', '경부고속도로 천안IC', '2022-09-22 16:00:00','뺑소니 목격 블랙박스');   

INSERT INTO Board(title, location ,datetime, contents)
VALUES ('교통사고 인명피해', '천안시 동남구 백석대학교 정문 앞', '2022-08-22 11:00:00','비보호 좌회전 중 사고 발생');

INSERT INTO Board(title, location ,datetime, contents, url, hash)
VALUES ('한글', 'test', '2022-08-22 11:00:00','test','test','d8b31e3434117fb7eec25f697ab9a185');

