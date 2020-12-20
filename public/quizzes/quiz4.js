const answer = [ '正', '誤']
const quiz = [
  {
    question: '問１.　車が荷物の積み下ろしのために停止する場合は、すべて停車とみなされる。',
    answers: answer,
    correct: '誤'
  }, {
    question: '問２.　仕事が短時間で終わることを前もってわかっていたので、車から離れてすぐに運転できない状態であったが、駐停車禁止場所に車を停めた。',
    answers: answer,
    correct: '誤'
  }, {
    question: '問３.　歩道や路側帯のない道路で駐車するときは、道路の左端に0.5メートル以上の余地をあけなければいけない。',
    answers: answer,
    correct: '誤'
  }, {
    question: '問４.　安全地帯の端から10メートル以内は駐停車してはいけないが、安全地帯の左側部分では駐停車して良い。',
    answers: answer,
    correct: '誤'
  }, {
    question: '問５.　道路のまがり角から5メートル以内の場所に、自動販売機でコーヒーを買うために車を停車させた。',
    answers: answer,
    correct: '誤'
  }, {
    question: '問６.　坂道でオートマチックし四輪車を駐車させるときは、ギアをパーキングに入れ、サイドブレーキを引いた上、輪止めをしておく。',
    answers: answer,
    correct: '正'
  }, {
    question: '問７.　路側帯や歩道のない道路で、道路の左側に歩行者が通行できるだけの幅を残して駐車した。',
    answers: answer,
    correct: '誤'
  }, {
    question: '問８.　トンネルの中では、車両通行帯がある場合だけ停車することが認められる。',
    answers: answer,
    correct: '誤'
  }, {
    question: '問９.　踏切内の事故は、思わぬ大惨事になる。踏切とその端から前後10メートル以内の場所は、駐車はもちろん停車も禁止されている。',
    answers: answer,
    correct: '正'
  }, {
    question: '問１０.　車庫や駐車場の前には原則として駐車してはいけないが、その車庫などの関係者だけは駐車しても良い。',
    answers: answer,
    correct: '誤'
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
  $question.textContent = '終了！あなたの点数は' + score + '/' + quizLen + 'です';
  
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