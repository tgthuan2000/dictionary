const randomContent = (words, trans, prevWord = "") => {
   //  console.log(words, trans, prevWord);
  let index;
  do{
	  console.log('render')
	index = Math.floor(Math.random() * words.length);
  } while(words[index] === prevWord);
  
  //   console.log(index);
  return {
    word: words[index],
    correct: trans[index],
    answers: mixAnswer(trans[index], getIncorrectAnswer(trans, index, 5)),
  };
};

export default randomContent;

const getIncorrectAnswer = (trans, index, number = 1) => {
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
