import PropTypes from 'prop-types';

// Yanlış harfleri gösteren bileşen
const WrongLetters = ({ wrongLetters }) => {

  return (
    <div className="wrong-letters-container">
      <div>
        {/* Eğer yanlış harfler varsa "Wrong" yazısını göster */}
        {wrongLetters.length > 0 && 
          <p>Wrong</p>
        }
        {/* Yanlış harfleri ekrana yazdır */}
        {wrongLetters
          .map((letter, i) => <span key={i}>{letter}</span>) // Her harfi span içinde oluştur
          .reduce((prev, curr) => prev === null ? [curr] : [prev, ', ', curr], null)} {/* Harfleri virgülle ayırarak birleştir */}
      </div>
    </div>
  )
}

// PropTypes tanımlaması: wrongLetters dizisi, string türünde ve zorunlu
WrongLetters.propTypes = {
  wrongLetters: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default WrongLetters
