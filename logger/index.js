const fs = require('node:fs/promises');

async function logger(content) {
  const date = new Date();
  let timestamp = "[" + date.toTimeString() + "]: ";

  content = timestamp + content + "\n";
  try {
    await fs.writeFile('logs.txt', content, { flag: "a+" });
  } catch (err) {
    console.log(err);
  }
}

module.exports = logger;
