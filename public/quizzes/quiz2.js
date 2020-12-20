const answer = [ '正', '誤']
const quiz = [
  {
    question: '問１.　交差点は事故が多いので、通行する全ての車は徐行しなければならない。',
    answers: answer,
    correct: '誤'
  }, {
    question: '問２.　交差点で左折するときは、歩行者や自転車を巻き込まないようにしなければならない。',
    answers: answer,
    correct: '正'
  }, {
    question: '問３.　交差点で右折するときには、対向車線を直進してくる二輪車の距離を見間違うことがあるので注意する。',
    answers: answer,
    correct: '正'
  }, {
    question: '問４.　交差点の中まで車両通行帯境界線が引かれている道路は、交差する道路に対して優先道路であることを表している。',
    answers: answer,
    correct: '正'
  }, {
    question: '問５.　一方通行の道路を自動車で右折するときは、あらかじめ道路の中央によって交差点の中心の内側を徐行して通る。',
    answers: answer,
    correct: '誤'
  }, {
    question: '問６.　交通整理の行われている交差点を直進するときは、左右の見通しがきかなくても徐行しなくて良い。',
    answers: answer,
    correct: '正'
  }, {
    question: '問７.　二輪車で交差点を左折しようとしているときに、後方から来た四輪車が先に左折しようとしたので、軽音機を鳴らしながら強引に左折した。',
    answers: answer,
    correct: '誤'
  }, {
    question: '問８.　交通整理の行われていない道幅が同じような交差点で、直進するため、交差点の手前に近づいたら左方から原付車が来ていた。原付車は遅いので、そのまま交差点に入った。',
    answers: answer,
    correct: '誤'
  }, {
    question: '問９.　前の車が進路を変えようとして右左折の合図をしたときは、急ブレーキや急ハンドルで避けなければならない場合以外は、その進路を妨げてはいけない。',
    answers: answer,
    correct: '正'
  }, {
    question: '問１０.　内輪差とは、車が曲がるとき前輪が後輪よりも内側を通ることにより生じる、前輪と後輪の走行位置の差をいう。',
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