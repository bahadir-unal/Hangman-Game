export function showNotification(setter) {
  setter(true);
  setTimeout(() => {
    setter(false);
  }, 2000);
}

export function checkWin(correct, wrong, word) {
  let status = 'win';

  // kazanç mı kontrol et
  word.split('').forEach(letter => {
    if(!correct.includes(letter)){
      status = '';
    }
  });
  
  // kayıp mı kontrol et
  if(wrong.length === 6) status = 'lose';

  return status
}