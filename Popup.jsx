import PropTypes from 'prop-types';
import { checkWin } from '../helpers/helpers';
import { useEffect } from 'react';

// Popup bileşeni
const Popup = ({ correctLetters, wrongLetters, selectedWord, setPlayable, playAgain }) => {
  let finalMessage = '';
  let finalMessageRevealWord = '';
  let playable = true;

  // Kazanma veya kaybetme durumunu kontrol et
  if (checkWin(correctLetters, wrongLetters, selectedWord) === 'win') {
    finalMessage = 'Tebrikler! Kazandın! 😃'; // Kazanma mesajı
    playable = false; // Oyun oynanabilirliği kapat
  } else if (checkWin(correctLetters, wrongLetters, selectedWord) === 'lose') {
    finalMessage = 'Malesef kaybettin. 😕'; // Kaybetme mesajı
    finalMessageRevealWord = `kelime buydu...: ${selectedWord}`; // Doğru kelimeyi göster
    playable = false; // Oyun oynanabilirliği kapat
  }

  // useEffect ile oyunun oynanabilirliğini güncelle
  useEffect(() => {
    setPlayable(playable);
  }, [playable, setPlayable]); // useEffect'in playable durumunu izlemesi sağlandı.

  return (
    <div className="popup-container" style={finalMessage !== '' ? { display: 'flex' } : {}}>
      <div className="popup">
        <h2>{finalMessage}</h2>
        <h3>{finalMessageRevealWord}</h3>
        <button onClick={playAgain}>Play Again</button> {/* Yeniden oyna butonu */}
      </div>
    </div>
  );
};

// PropTypes tanımlaması: correctLetters ve wrongLetters dizileri, selectedWord dizesi, setPlayable ve playAgain fonksiyonları, zorunlu
Popup.propTypes = {
  correctLetters: PropTypes.arrayOf(PropTypes.string).isRequired,
  wrongLetters: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedWord: PropTypes.string.isRequired,
  setPlayable: PropTypes.func.isRequired,
  playAgain: PropTypes.func.isRequired,
};

export default Popup;
