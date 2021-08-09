const randomParagraph = (newWords, setNewWords, oldWords) => {
  const index = Math.floor(Math.random() * newWords.length);
  const tempWords = [...newWords];
  const [word] = tempWords.splice(index, 1);
  setNewWords(tempWords);
  // console.log(word);
  const { en, vi } = word;
  return {
    word: vi,
    correct: en,
  };
};
export default randomParagraph;
