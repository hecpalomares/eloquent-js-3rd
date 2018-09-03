function makeChessboard(size) {
  let chessboardString = "";
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      if ((j+i) % 2 === 0) {
        chessboardString += " ";
      } else {
        chessboardString += "#";
      }
    }
    chessboardString += "\n";
  }
  console.log(chessboardString);
}

const chessboardSize = 8;
makeChessboard(chessboardSize);
