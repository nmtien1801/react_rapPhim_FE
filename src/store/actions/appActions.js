import actionTypes from "./actionTypes";

export const changeLanguage = (languageInput) => ({
  type: actionTypes.CHANGE_LANGUAGE,
  language: languageInput,
});
