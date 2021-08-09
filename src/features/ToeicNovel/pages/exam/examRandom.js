const randomExam = (newWords, setNewWords, oldWords) => {
  const index = Math.floor(Math.random() * newWords.length);
  const tempWords = [...newWords];
  const [word] = tempWords.splice(index, 1);
  setNewWords(tempWords);
  // console.log(word);
  const { en, vi } = word;
  return {
    word: en,
    correct: vi,
    answers: mixAnswer(
      vi,
      getIncorrectAnswer(
        oldWords.filter(({ vi: word }) => word !== vi).map(({ vi }) => vi),
        5
      )
    ),
  };
};
export default randomExam;

const getIncorrectAnswer = (words, number = 1) => {
  let result = [];
  for (let i = 1; i <= number; i++) {
    let index = Math.floor(Math.random() * words.length);
    result.push(...words.splice(index, 1));
  }
  // console.log("result", result);
  return result;
};

const mixAnswer = (correct, incorrects) => {
  incorrects.splice(Math.round(Math.random() * incorrects.length), 0, correct);
  // console.log("mixAnswer", incorrects);
  return incorrects;
};
