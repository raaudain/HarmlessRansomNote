function harmlessRansomNote(noteText, magazineText) {
  const noteArr = noteText.split(" ");
  const magazineArr = magazineText.split(" ");
  const magazineObj = {};

  magazineArr.forEach(word => {
    if (!magazineObj[word]){
      magazineObj[word] = 0;
    }
    magazineObj[word]++;
  })

  let noteIsPossible = true;
  
  noteArr.forEach(word => {
    if (magazineObj[word]){
      magazineObj[word]--;

      if (magazineObj[word] < 0){
        noteIsPossible = false;
      }
    }
    else {
      noteIsPossible = false
    }
  })

  return noteIsPossible;
}

harmlessRansomNote("this is a secret note for you from a secret admirer", "puerto rico is a place of great wonder and excitement it has many secret waterfall locations that i am an admirer of you must hike quite a distance to find the secret places as they are far from populated areas but it is note worth the effort a tip i have for you is to go early in the morning when it is not so hot out also not that you must wear hiking boots this is on e fo the best places i have ever visited")