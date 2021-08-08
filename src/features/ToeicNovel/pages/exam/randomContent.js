import {KEY_EXAM_WORD} from "../../../../localStorageContans"

const randomContent = (words, trans) => {
  //   console.log(words, trans);
  const data = JSON.parse(localStorage.getItem(KEY_EXAM_WORD)) || ""
  let index = -1
  do{
	index = Math.floor(Math.random() * words.length);
  } while(words[index] === data);
  localStorage.setItem(KEY_EXAM_WORD, JSON.stringify(words[index]))
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
