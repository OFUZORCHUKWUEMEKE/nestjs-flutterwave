export const generateReference = () => { }

export const generateToken = () => { }

export const generateRandomCharacters = (length: number) => {
    const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * letters.length);
      const character = letters[randomIndex];
      result += character;
    }
  
    return result;
};