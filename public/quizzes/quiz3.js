const answer = [ '正', '誤']
const quiz = [
  {
    question: '問１.　雨の日の急発進、急ハンドル、急ブレーキなどは、横転、横滑りなどの原因となり、危険度が高いので、晴れた日よりも速度を落として進行する。',
    answers: answer,
    correct: '正'
  }, {
    question: '問２.　夜間、対向車と行き違うときは、前照灯を減光するか下向きにするが、交通量の多いときは上向きにする。',
    answers: answer,
    correct: '誤'
  }, {
    question: '問３.　夜間、道路に駐停車するときに、街路灯などで50メートル後方から、はっきり自動車が見える場所でも駐車灯などをつけなければならない。',
    answers: answer,
    correct: '誤'
  }, {
    question: '問４.　ぬかるんでいる道を通行するときは、スピードを落とさずそのままの速度で進行する。',
    answers: answer,
    correct: '誤'
  }, {
    question: '問５.　夜間、対向車と行き違うときは双方のライトで、道路の中央付近の歩行者が見えなくなる時があるが、全く見えないということはないので、特に注意する必要はない。',
    answers: answer,
    correct: '誤'
  }, {
    question: '問６.　トンネル内や濃い霧の中などで、50メートル(高速道路では200メートル)先が見えないところを通るときは、昼間でも灯火をつけなければならない。',
    answers: answer,
    correct: '正'
  }, {
    question: '問７.　ぬかるみにはまって、車輪が空回りするようなときは、砂袋、マット、木の枝などを使って滑り止めにすると良い。',
    answers: answer,
    correct: '正'
  }, {
    question: '問８.　走行中、後輪が横滑りしたので、ブレーキを強く踏みながら、滑った反対方向にハンドルを切った',
    answers: answer,
    correct: '誤'
  }, {
    question: '問９.　霧の中を走行する場合、ガードレール、中央線、前車の尾灯を目安にし、速度を落として走行する。',
    answers: answer,
    correct: '正'
  }, {
    question: '問１０.　対向車のライトがまぶしいときは、視点をやや左前方に移す。',
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