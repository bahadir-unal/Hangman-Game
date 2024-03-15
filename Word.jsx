import PropTypes from 'prop-types';

// Kelimeyi gösteren bileşen
const Word = ({ selectedWord, correctLetters }) => {

  return (
    <div className="word">
      {/* Seçilen kelimeyi harflere ayır ve her harfi göster */}
      {selectedWord.split('').map((letter, i) => {
        return (
          <span className="letter" key={i}>
            {/* Doğru tahmin edilen harfse, harfi göster, değilse boş bırak */}
            {correctLetters.includes(letter) ? letter : ''}
          </span>
        )
      })}
    </div>
  )
}

// PropTypes tanımlaması: selectedWord ve correctLetters dizileri, string türünde ve zorunlu
Word.propTypes = {
    selectedWord: PropTypes.string.isRequired,
    correctLetters: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Word
