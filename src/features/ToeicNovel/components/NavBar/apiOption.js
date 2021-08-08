export const translateMymemory = (word) => {
  return {
    method: "GET",
    url: "https://translated-mymemory---translation-memory.p.rapidapi.com/api/get",
    params: {
      langpair: "en|vi",
      q: word,
      mt: "1",
      onlyprivate: "0",
      de: "a@b.c",
    },
    headers: {
      "x-rapidapi-key": "aeccafce8bmshd520252fa7f0c94p1d23d6jsnec51cb16c6c3",
      "x-rapidapi-host":
        "translated-mymemory---translation-memory.p.rapidapi.com",
    },
  };
};
