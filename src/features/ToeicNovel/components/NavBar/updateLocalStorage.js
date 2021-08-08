import { KEY_TRANSLATE } from "../../../../localStorageContans";

const UpdateLocalStorage = (id, trans, key) => {
  let data = JSON.parse(localStorage.getItem(KEY_TRANSLATE));
  if (!data) {
    localStorage.setItem(KEY_TRANSLATE, JSON.stringify([{ id, trans, key }]));
  } else {
    const index = data.findIndex((node) => node.id === id);
    if (index === -1) {
      localStorage.setItem(
        KEY_TRANSLATE,
        JSON.stringify([...data, { id, trans, key }])
      );
    } else {
      data[index] = { ...data[index], trans, key };
      localStorage.setItem(KEY_TRANSLATE, JSON.stringify(data));
    }
  }
};
export default UpdateLocalStorage;
