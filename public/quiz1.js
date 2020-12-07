const answer = [ '正', '誤']
const quiz = [
  {
    question: '信号機のあるところでは、前方の信号に従うべきであって、横の信号が赤色になったからといって発信してはならない。',
    answers: answer,
    correct: '正'
  }, {
    question: '交通事故が起きるのは、運転者や歩行者が信号を正しく守らないことや、他の道路からの交通に気をつけないことと関係ない。',
    answers: answer,
    correct: '誤'
  }, {
    question: '道路標識によって駐車する事ができる場所に駐車していたので、警察官から移動するように指示を受けても、指示に従わなかった。',
    answers: answer,
    correct: '誤'
  }, {
    question: '交通整理中の警察官が腕を「水平」に上げているときは、警察官の身体の正面に対面する車は、停止しなければならない。',
    answers: answer,
    correct: '正'
  }, {
    question: '正面の信号が赤色の点滅を表示していたので他の交通に注意し、徐行して進入した。',
    answers: answer,
    correct: '誤'
  }, {
    question: '交差点の直前で前方の信号が黄色に変わったので、交差点内に急停止した。',
    answers: answer,
    correct: '誤'
  }, {
    question: '交通巡視員は、警察官ではないので、手信号をしていてもその指示に従わなくて良い。',
    answers: answer,
    correct: '誤'
  }, {
    question: '信号機の黄色の灯火の矢印は、路面電車用である。',
    answers: answer,
    correct: '正'
  }, {
    question: '信号が赤から青に変わっても、渡りきっていない歩行者や信号を無視して進入してくる車もあるので、十分に安全を確かめてから発信しなければならない。',
    answers: answer,
    correct: '正'
  }, {
    question: '交差点で前方の信号が赤色や黄色の灯火であっても、同時に青色の矢印が出ている時、自動車は矢印の方向に進んで良い。',
    answers: answer,
    correct: '正'
  }
];

const $window = window;
const $doc = document;
const $question = $doc.getElementById('js-question');
const $buttons = $doc.querySelectorAll('.btn');
const $answer = $doc.getElementById('js-answer');

const quizLen = quiz.length;
let quizCount = 0;
let score = 0;

const init = () => {
  $question.textContent = quiz[quizCount].question;
  
  const buttonLen = $buttons.length;
  let btnIndex = 0;

  $answer.style.visibility = 'hidden';
  
  while(btnIndex < buttonLen){
    $buttons[btnIndex].textContent = quiz[quizCount].answers[btnIndex];
    btnIndex++;
  }
};

const goToNext = () => {
  quizCount++;
  if(quizCount < quizLen){
    init(quizCount);
    $answer.style.visibility = 'hidden';
  } else {
    // $window.alert('問題終了');
    showEnd();
  }
};

const judge = (elm) => {
  if(elm.textContent === quiz[quizCount].correct){
    score++;
  }
  goToNext();
};

const showEnd = () => {
  $question.textContent = '終了！あなたのスコアは' + score + '/' + quizLen + 'です';
  
  const $items = $doc.getElementById('js-items');
  $items.style.visibility = 'hidden';
  $answer.style.visibility = 'visible';
};

init();

let answersIndex = 0;
let answersLen = quiz[quizCount].answers.length;

while(answersIndex < answersLen){
  $buttons[answersIndex].addEventListener('click', (e) => {
    judge(e.target);
  });
  answersIndex++;
}