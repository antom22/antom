// Pegá acá los datos de tu proyecto de Firebase (GUIA.md, paso 9).
// Estos datos NO son secretos: la seguridad la dan el login de Google y las reglas.
window.ANTOM_CONFIG = {
  firebase: {
    apiKey: 'PEGAR',
    authDomain: 'PEGAR',
    projectId: 'PEGAR',
    storageBucket: 'PEGAR',
    messagingSenderId: 'PEGAR',
    appId: 'PEGAR'
  },
  // false = las facturas se guardan como link (por ejemplo de Google Drive).
  // true  = los PDF se suben a Firebase Storage (ver GUIA.md, paso 13).
  storage: false
};
