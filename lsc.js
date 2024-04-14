const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const unzipper = require("unzipper");

const archiveFilePath = "C:/Users/user/Desktop/task2.zip";
const outputDirectory = "C:/Users/user/Desktop/extracted_files";

// Создаем директорию для извлеченных файлов, если она не существует
if (!fs.existsSync(outputDirectory)) {
  fs.mkdirSync(outputDirectory);
}

// Распаковываем архив
fs.createReadStream(archiveFilePath)
  .pipe(unzipper.Parse())
  .on("entry", (entry) => {
    const filePath = path.join(outputDirectory, entry.path);
    entry.pipe(fs.createWriteStream(filePath));
  })
  .on("close", () => {
    console.log("Архив успешно распакован.");
    const calculateFileHash = (filePath) => {
      return new Promise((resolve, reject) => {
        const hash = crypto.createHash("sha3-256");
        const readStream = fs.createReadStream(filePath);

        readStream.on("data", (data) => {
          hash.update(data);
        });

        readStream.on("end", () => {
          const fileHash = hash.digest("hex");
          resolve(fileHash);
        });

        readStream.on("error", (error) => {
          reject(error);
        });
      });
    };

    // Перебираем все файлы в извлеченной папке и вычисляем для них хеши

    fs.readdir(outputDirectory, async (err, files) => {
      if (err) {
        console.error("Ошибка чтения содержимого папки:", err);
        return;
      }

      const fileHashes = [];
      for (const file of files) {
        const filePath = path.join(outputDirectory, file);
        const fileHash = await calculateFileHash(filePath);
        fileHashes.push(fileHash);
      }

      console.log("Хеши файлов:", fileHashes);

      // Преобразование хешей в 64 шестнадцатеричных цифры и сортировка
      const hexHashes = fileHashes.map((hash) => hash.padStart(64, "0")).sort();

      // Склеивание хешей без разделителей
      const concatenatedHashes = hexHashes.join("");

      // Приклеивание email в нижнем регистре
      const email = "username.shakha@gmail.com".toLowerCase();
      const concatenatedHashesWithEmail = concatenatedHashes + email;

      // Вычисление SHA3-256 хеша от полученной строки
      const finalHash = crypto
        .createHash("sha3-256")
        .update(concatenatedHashesWithEmail)
        .digest("hex");

      console.log("Итоговый хеш:", finalHash);
    });
  });
