import CryptoJS from 'crypto-js';

const secretKey = 'zinari_secret';

export function encryptMessage(message) {
  return CryptoJS.AES.encrypt(message, secretKey).toString();
}

export function decryptMessage(ciphertext) {
  const bytes = CryptoJS.AES.decrypt(ciphertext, secretKey);
  return bytes.toString(CryptoJS.enc.Utf8);
}
