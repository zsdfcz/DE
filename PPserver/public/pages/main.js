let searchBar = document.getElementById('search-bar')

//해당 함수 수정 예정
function search() {
    let str = "";
    let val = searchBar.value;
    // console.log(val)
    let n = 0;

    while (n < val.length) {
        if (val[n] == ' ')
            str += '+'
        else
            str += val[n];

        n = n + 1;
    }
    // console.log(str)
   // window.open("https://www.youtube.com/results?search_query=" + str);

}

function mapsearch() {
  let str = "";
  let val = searchBar.value;
  // console.log(val)
  let n = 0;

  while (n < val.length) {
      if (val[n] == ' ')
          str += '+'
      else
          str += val[n];

      n = n + 1;
  }
  // console.log(str)
 // window.open("https://www.youtube.com/results?search_query=" + str);

}


let mainContent = document.getElementById('main-content');
let boardContent = document.getElementById('board-content');

const contents = Array(4).fill().map(() => ({
  title: '202X년 0X월 XX일 오전 7시 인천 연수구 아암대로 중 추돌사고',
  thumbnail: '1.png',
}))


// 데이터셋을 구현하기 전 js파일 내에 임의로 생성 //
contents[1].title = '2022년 0X월 XX일 오전 9시 안산 상록구 중앙동 길거리 집단폭행'
contents[1].thumbnail = '2.png'

contents[2].title = '2022년 0X월 XX일 오후 4시 경부고속도로 천안IC부근 뺑소니'
contents[2].thumbnail = '3.png'

contents[3].title = '2022년 0X월 XX일 오전 11시 천안 동남구 백석대학교 정문 앞 삼거리 인명사고'
contents[3].thumbnail = '3.png'
///////


contents.forEach(({title, thumbnail}) => {
  mainContent.innerHTML += `
    <div class="grid-item" onclick="location.href='/pages/play.html'">
      <img class="thumbnail" src="../image/${thumbnail}" alt="" />
      <div class="div1" style="">
        <p class="capitalize"><b>${title}</b></p>
      </div>
      <div class="div2"></div>
    </div>
  `;
});

boardContent.innerHTML += `
<div class="board_wrap">
<div class="board_title">
    <strong>리뷰 게시판</strong>
    <p>DE-Mart 에서 경험한 여러분의 후기를 남겨보세요</p>
</div>
<div class="board_list_wrap">
    <div class="board_list">
        <div class="top">
            <div class="num">번호</div>
            <div class="title">제목</div>
            <div class="writer">글쓴이</div>
            <div class="date">작성일</div>
            <div class="count">조회</div>
        </div>
        <div>
            <div class="num">5</div>
            <div class="title"><a href="./pages/view.html">안녕하세요, 4X러 8XXX 차주입니다.</a></div>
            <div class="writer">김XX</div>
            <div class="date">202X.X.XX</div>
            <div class="count">1024</div>
        </div>
        <div>
            <div class="num">4</div>
            <div class="title"><a href="./pages/view.html">오토바이랑 접촉사고났던 보행자입니다.</a></div>
            <div class="writer">황XX</div>
            <div class="date">202X.X.XX</div>
            <div class="count">3572</div>
        </div>
        <div>
            <div class="num">3</div>
            <div class="title"><a href="./pages/view.html">킥보드 운전자랑 부딪혔습니다...</a></div>
            <div class="writer">박XX</div>
            <div class="date">202X.X.XX</div>
            <div class="count">4958</div>
        </div>
        <div>
            <div class="num">2</div>
            <div class="title"><a href="./pages/view.html">XX고등학교 인근에서 학교폭력을 당하던 학생입니다.</a></div>
            <div class="writer">신XX</div>
            <div class="date">202X.X.XX</div>
            <div class="count">7645</div>
        </div>
        <div>
            <div class="num">1</div>
            <div class="title"><a href="./pages/view.html">안녕하세요, 3X바 7XXX 차주입니다.</a></div>
            <div class="writer">홍XX</div>
            <div class="date">202X.X.XX</div>
            <div class="count">5892</div>
        </div>
    </div>
    <div class="board_page">
        <a href="#" class="bt first"></a>
        <a href="#" class="bt prev"></a>
        <a href="#" class="num on">1</a>
        <a href="#" class="num">2</a>
        <a href="#" class="num">3</a>
        <a href="#" class="num">4</a>
        <a href="#" class="num">5</a>
        <a href="#" class="bt next">></a>
        <a href="#" class="bt last">>></a>
    </div>
    <div class="bt_wrap">
        <a href="write.html" class="on">등록</a>
        <!--<a href="#">수정</a>-->
    </div>
</div>
</div>
  `;


