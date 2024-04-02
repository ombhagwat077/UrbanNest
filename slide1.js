const replacementWords = ['HOME', 'APARTMENTS', 'FLATS','ROOMS'];
    let currentIndex = 0;

    function changeWord() {
      const replaceWord = document.querySelector('.animatedText');
      replaceWord.textContent = replacementWords[currentIndex];
      currentIndex = (currentIndex + 1) % replacementWords.length;
    }

    setInterval(changeWord, 3000);