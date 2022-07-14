let USER = "user";

export const localStorageService = {
  setUserInfor: (content) => {
    let dataJson = JSON.stringify(content);
    localStorage.setItem(USER, dataJson);
  },
  getUserInfor: () => {
    let dataJson = localStorage.getItem(USER);

    if (dataJson) {
      return JSON.parse(dataJson);
    } else {
      return null;
    }
  },
  removeUserInfor: () => {
    localStorage.removeItem(USER);
  },
};
