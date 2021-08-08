const randomContent = (words, trans) => {
  //   console.log(words, trans);
  const index = Math.floor(Math.random() * words.length);
  //   console.log(index);
  return {
    word: words[index],
    correct: trans[index],
    answers: mixAnswer(trans[index], getIncorrectAnswer(1, trans, index)),
  };
};

export default randomContent;

const getIncorrectAnswer = (number = 1, trans, index) => {
  let result = [];
  let newTrans = [...trans];
  newTrans.splice(index, 1);
  for (let i = 1; i <= number; i++) {
    result.push(
      ...newTrans.splice(Math.floor(Math.random() * newTrans.length), 1)
    );
  }
  return result;
};

const mixAnswer = (correct, incorrects) => {
  incorrects.splice(Math.round(Math.random() * incorrects.length), 0, correct);
  return incorrects;
};
