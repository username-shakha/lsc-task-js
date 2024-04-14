const crypto = require("crypto");

// Функция для генерации случайного ключа
function generateKey() {
  return crypto.randomBytes(32).toString("hex");
}

// Функция для вычисления HMAC
function calculateHMAC(key, message) {
  const hmac = crypto.createHmac("sha256", key);
  hmac.update(message);
  return hmac.digest("hex");
}

// Функция для определения результата игры
function determineWinner(userMove, computerMove, moves) {
  const index = moves.indexOf(userMove);
  const half = Math.floor(moves.length / 2);

  const movesAroundUser = [...moves.slice(index + 1), ...moves.slice(0, index)];
  const losingMoves = movesAroundUser.slice(0, half);
  const winningMoves = movesAroundUser.slice(half + 1);

  if (computerMove === userMove) return "Draw";
  if (winningMoves.includes(computerMove)) return "Computer wins";
  if (losingMoves.includes(computerMove)) return "User wins";
}

// Функция для вывода помощи
function showHelp(moves) {
  console.log("Game Rules:");
  moves.forEach((move, index) => console.log(`${index + 1} - ${move}`));
  console.log("0 - Exit");
}

// Функция для игры
function playGame(moves) {
  const key = generateKey();
  const computerMove = moves[Math.floor(Math.random() * moves.length)];

  console.log(`HMAC: ${calculateHMAC(key, computerMove)}`);

  console.log("Available moves:");
  showHelp(moves);

  const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  readline.question("Enter your move: ", (userInput) => {
    readline.close();

    const userMoveIndex = parseInt(userInput, 10);
    if (
      isNaN(userMoveIndex) ||
      userMoveIndex < 0 ||
      userMoveIndex > moves.length
    ) {
      console.log("Invalid input. Please enter a valid move number.");
      return;
    }

    if (userMoveIndex === 0) {
      console.log("Exiting the game...");
      return;
    }

    const userMove = moves[userMoveIndex - 1];
    console.log(`Your move: ${userMove}`);
    console.log(`Computer's move: ${computerMove}`);
    console.log(`Result: ${determineWinner(userMove, computerMove, moves)}`);
    console.log(`Key: ${key}`);
  });
}

// Проверка аргументов командной строки
const args = process.argv.slice(2);
const numberOfMoves = args.length;

if (numberOfMoves < 3 || numberOfMoves % 2 === 0) {
  console.log(
    "Incorrect number of moves. Please provide an odd number of unique moves (>= 3)."
  );
  process.exit(1);
}

playGame(args);
