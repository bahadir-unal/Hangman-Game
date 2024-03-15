import PropTypes from 'prop-types';

// Figür bileşeni
const Figure = ({ wrongLetters }) => {
  const errors = wrongLetters.length; // Yanlış harf sayısını al

  return (
    <svg height="250" width="200" className="figure-container">
      {/* Çubuklar */}
      <line x1="60" y1="20" x2="140" y2="20" />
      <line x1="140" y1="20" x2="140" y2="50" />
      <line x1="60" y1="20" x2="60" y2="230" />
      <line x1="20" y1="230" x2="100" y2="230" />

      {/* Kafa */}
      {errors > 0 &&
        <circle cx="140" cy="70" r="20" />
      }
      {/* Gövde */}
      {errors > 1 &&
        <line x1="140" y1="90" x2="140" y2="150" />
      }
      {/* Kol */}
      {errors > 2 &&
        <line x1="140" y1="120" x2="120" y2="100" />
      }
      {errors > 3 &&
        <line x1="140" y1="120" x2="160" y2="100" />
      }
      {/* Bacak */}
      {errors > 4 &&
        <line x1="140" y1="150" x2="120" y2="180" />
      }
      {errors > 5 &&
        <line x1="140" y1="150" x2="160" y2="180" />
      }
    </svg>
  )
}

// PropTypes tanımlaması: wrongLetters dizisi, string türünde ve zorunlu
Figure.propTypes = {
    wrongLetters: PropTypes.arrayOf(PropTypes.string).isRequired, // wrongLetters prop'unun bir dizi olduğunu ve her elemanının string olduğunu belirttik
};

export default Figure;
