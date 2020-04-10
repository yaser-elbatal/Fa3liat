// nav = navigation :)

// Auth Stack
export const _toWelcome = (nav) => {
  nav.navigate("Welcome");
};
export const _toLogin = (nav) => {
  nav.navigate("Login");
};
export const _toRegister = (nav) => {
  nav.navigate("Register");
};
export const _toActivate = (nav) => {
  nav.navigate("Activate");
};
export const _toReset = (nav) => {
  nav.navigate("Reset");
};
export const _toForget = (nav) => {
  nav.navigate("Forget");
};

export const _toActivation = (nav) => {
  nav.navigate("Activation");
};
export const _toHome = (nav) => {
  nav.navigate("Home");
};
export const _toProfileRegister = (nav) => {
  nav.navigate("ProfileRegister");
};
export const _RegisterProfile = (nav) => {
  nav.navigate("RegisterPrfile");
};
export const _toSports = (nav, params) => {
  nav.navigate("sports", params);
};
export const _toArt = (nav, param) => {
  nav.navigate("Art", param);
};

export const _toApoutApp = (nav) => {
  nav.navigate("AboutApp");
};
