const types = ["포장이사", "일반이사"];
const locations = [
  "서울 > 강남구",
  "서울 > 서초구",
  "서울 > 송파구",
  "서울 > 마포구",
  "서울 > 종로구",
  "서울 > 양천구",
  "서울 > 은평구",
  "서울 > 강북구",
  "서울 > 구로구",
  "서울 > 강동구",
  "인천 > 미추홀구",
  "인천 > 부평구",
  "인천 > 연수구",
  "인천 > 남동구",
  "인천 > 계양구",
  "부산 > 해운대구",
  "부산 > 수영구",
  "부산 > 동래구",
  "부산 > 사하구",
  "부산 > 연제구",
  "대전 > 유성구",
  "대전 > 서구",
  "대전 > 동구",
  "대전 > 중구",
  "광주 > 서구",
  "광주 > 북구",
  "광주 > 남구",
  "광주 > 동구",
  "대구 > 달서구",
  "대구 > 수성구",
  "대구 > 북구",
  "대구 > 중구",
  "경기 > 수원시",
  "경기 > 성남시",
  "경기 > 용인시",
  "경기 > 고양시",
  "경기 > 부천시",
  "경기 > 안양시",
  "경기 > 평택시",
  "경기 > 시흥시",
  "경기 > 광명시",
  "경기 > 하남시",
  "경북 > 구미시",
  "경북 > 포항시",
  "경북 > 경산시",
  "경북 > 안동시",
  "충남 > 천안시",
  "충남 > 아산시",
  "충남 > 홍성군",
  "충남 > 서산시",
  "충북 > 청주시",
  "충북 > 충주시",
  "충북 > 제천시",
  "전북 > 전주시",
  "전북 > 군산시",
  "전북 > 익산시",
  "전남 > 목포시",
  "전남 > 여수시",
  "전남 > 순천시",
  "강원 > 춘천시",
  "강원 > 원주시",
  "강원 > 강릉시",
  "제주 > 제주시",
  "제주 > 서귀포시",
];
const names = [
  "최**",
  "김**",
  "정**",
  "양**",
  "홍**",
  "박**",
  "백**",
  "류**",
  "이**",
  "윤**",
  "장**",
  "한**",
  "임**",
  "서**",
  "심**",
  "강**",
  "오**",
  "신**",
  "문**",
  "하**",
  "권**",
  "안**",
  "송**",
  "배**",
];

function getRandomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateOne() {
  return {
    type: getRandomItem(types),
    location: getRandomItem(locations),
    name: getRandomItem(names),
    status: "신규접수",
  };
}

const listElement = document.getElementById("quoteList");
let data = [];

function renderList() {
  listElement.innerHTML = "";
  data.forEach((item) => {
    const li = document.createElement("li");
    li.className = "item";
    li.innerHTML = `
          <div class="left">${item.type}　 ${item.location}　 ${item.name}</div>
          <div class="badge">${item.status}</div>
        `;
    listElement.appendChild(li);
  });
}

// 초기 7개 생성
for (let i = 0; i < 7; i++) {
  data.push(generateOne());
}
renderList();

// 롤링 함수
function rollList() {
  // 애니메이션 적용
  listElement.classList.add("animate");
  listElement.style.transform = "translateY(-48px)"; // 한 줄 높이만큼 위로 이동

  // 애니메이션 끝나면 실행
  setTimeout(() => {
    listElement.classList.remove("animate");
    listElement.style.transform = "translateY(0)";

    // 실제 데이터 교체
    data.shift(); // 맨 위 삭제
    data.push(generateOne()); // 맨 아래 새 항목 추가
    renderList();
  }, 600); // transition 시간과 동일해야 함
}

// 3초마다 롤링
setInterval(rollList, 5000);
