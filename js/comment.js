// Firebase SDK 라이브러리 가져오기
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import {
  collection,
  addDoc,
} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import { getDocs } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";

// Firebase 구성 정보 설정
const firebaseConfig = {
  apiKey: "AIzaSyCiNjWIlQqxD_a0UIJU1-4SpoH6Gt_4kpQ",
  authDomain: "sparta-ccb04.firebaseapp.com",
  projectId: "sparta-ccb04",
  storageBucket: "sparta-ccb04.appspot.com",
  messagingSenderId: "36179565202",
  appId: "1:36179565202:web:55dd9b519864a1ace2244b",
  measurementId: "G-ZPN9Q4B7BD",
};

// Firebase 인스턴스 초기화
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

$("#sendBtn").click(async function () {
  let nickname = $("#nickname").val();
  let comment = $("#mentDet").val();

  let doc = {
    nickname: nickname,
    comment: comment,
  };
  console.log(doc);
  await addDoc(collection(db, "cheering"), doc);
  location.reload();
});

let docs = await getDocs(collection(db, "cheering"));
docs.forEach((doc) => {
  let row = doc.data();
  console.log(row);
  let nickname = row["nickname"];
  let comment = row["comment"];
  
  let attachComment = `
  <div class="card mb-3">
  <div class='cheeringCards' class="row g-0">
  <div class='cNick' class="col-md-4">
  <h5 class="cardTitle">${nickname}</h5>
  </div>
  <div class="col-md-8">
  <div class="cardBody">
  <p class="cardText">${comment}</p>
  </div>
  </div>
  </div>
  </div>`;
  
  $("#mentFrame").append(attachComment);
});
