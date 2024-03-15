import "./App.css"; // Stil dosyasını içe aktarır.

import { useEffect, useState } from "react"; // React kütüphanelerini içe aktarır.

import Figure from "./components/Figure"; // Figure bileşenini içe aktarır.
import Header from "./components/Header"; // Header bileşenini içe aktarır.
import Notification from "./components/Notification"; // Notification bileşenini içe aktarır.
import Popup from "./components/Popup"; // Popup bileşenini içe aktarır.
import Word from "./components/Word"; // Word bileşenini içe aktarır.
import WrongLetters from "./components/WrongLetters"; // WrongLetters bileşenini içe aktarır.
import { showNotification as show } from "./helpers/helpers"; // showNotification fonksiyonunu içe aktarır.
import wordList from "./wordList.json"; // wordList.json dosyasını içe aktarır ve kelimeleri içeri yükler.

function App() {
  const [playable, setPlayable] = useState(true); // Oyunun oynanabilir durumunu depolar.
  const [correctLetters, setCorrectLetters] = useState([]); // Doğru tahmin edilen harfleri depolar.
  const [wrongLetters, setWrongLetters] = useState([]); // Yanlış tahmin edilen harfleri depolar.
  const [showNotification, setShowNotification] = useState(false); // Bildirimi gösterip göstermeme durumunu depolar.
  const [selectedWord, setSelectedWord] = useState(""); // Seçilen kelimeyi depolar.

  // İlk render edildiğinde rastgele bir kelime seçer.
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * wordList.length); // Rastgele bir kelime endeksi seçer.
    setSelectedWord(wordList[randomIndex]); // Seçilen kelimeyi ayarlar.
  }, []);

  // Klavye tuşları dinlenir ve doğru/yanlış tahminler yapılır.
  // Klavye tuşları dinlenir ve doğru/yanlış tahminler yapılır.
useEffect(() => {
  const handleKeydown = (event) => {
    const { key, keyCode } = event; // Basılan tuş ve keyCode değeri alınır.
    if (playable && ((keyCode >= 65 && keyCode <= 90) || ["i", "ü", "ö", "ş", "ı", "ç", "ğ"].includes(key.toLowerCase()))) {
      // Oyun oynanabilir durumdaysa ve tuş bir harfse ya da Türkçe karakterse
      const letter = key.toLowerCase(); // Basılan harf küçük harfe dönüştürülür.
      if (selectedWord.includes(letter)) {
        // Harf kelimenin içindeyse
        if (!correctLetters.includes(letter)) {
          // Doğru tahmin edilenler içinde yoksa
          setCorrectLetters((currentLetters) => [...currentLetters, letter]); // Doğru tahmin edilenlere eklenir.
        } else {
          show(setShowNotification); // Bildirim gösterilir.
        }
      } else {
        // Harf kelimenin içinde değilse
        if (!wrongLetters.includes(letter)) {
          // Yanlış tahmin edilenler içinde yoksa
          setWrongLetters((currentLetters) => [...currentLetters, letter]); // Yanlış tahmin edilenlere eklenir.
        } else {
          show(setShowNotification); // Bildirim gösterilir.
        }
      }
    }
  };

  window.addEventListener("keydown", handleKeydown); // Keydown olayı dinlenir.
  return () => window.removeEventListener("keydown", handleKeydown); // Temizleme işlemi
}, [correctLetters, wrongLetters, playable, selectedWord]); // useEffect bağımlılıkları

  
  
  
  

  // Oyunu yeniden başlatır.
  function playAgain() {
    setPlayable(true); // Oynanabilir durumu true yapar.
    setCorrectLetters([]); // Doğru tahmin edilen harfleri sıfırlar.
    setWrongLetters([]); // Yanlış tahmin edilen harfleri sıfırlar.
    const randomIndex = Math.floor(Math.random() * wordList.length); // Yeni bir kelime seçer.
    setSelectedWord(wordList[randomIndex]); // Seçilen kelimeyi ayarlar.
  }

  return (
    <>
      {/* Fragment: <> ve </> arasında kalan JSX ifadelerini bir fragment oluşturmak için kullanır. Fragmentler, birden fazla JSX öğesini birleştirmek için kullanılırken, DOM'a ekstra bir düğüm eklememizi sağlar. */}
      <Header /> {/* Header bileşeni */}
      <div className="game-container">
        <Figure wrongLetters={wrongLetters} /> {/* Figure bileşeni */}
        <div className="word-wrapper">
          <Word selectedWord={selectedWord} correctLetters={correctLetters} />{" "}
          {/* Word bileşeni */}
          <WrongLetters wrongLetters={wrongLetters} />{" "}
          {/* WrongLetters bileşeni */}
        </div>
      </div>
      <Popup
        correctLetters={correctLetters}
        wrongLetters={wrongLetters}
        selectedWord={selectedWord}
        setPlayable={setPlayable}
        playAgain={playAgain}
      />{" "}
      {/* Popup bileşeni */}
      <Notification showNotification={showNotification} />{" "}
      {/* Notification bileşeni */}
    </>
  );
}

export default App;
