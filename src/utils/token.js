export const getToken = async (key) => {
  try {
    let token = await localStorage.getItem(key);
    return token;
  } catch (err) {
    console.log(`${err.message}. failed to get token `);
  }
};

export const setToken = async (key, value) => {
  try {
    await localStorage.setItem(key, value);
    return;
  } catch (err) {
    console.log(`${err.message} failed to set token `);
  }
};

export const deleteToken = async (key) => {
  try {
    await localStorage.removeItem(key);
    return;
  } catch (err) {
    console.log(`${err.message} an error occured on deleteToken`);
  }
};
