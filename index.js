const express = require('express');
// const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cors());

app.post('/', (req, res) => {
  const { text } = req.body;
  const textLength = {},
    characterCount = [],
    tmp = {},
    response = {};

  textLength.withSpaces = text.length;
  const withoutSpaces = text.split('').filter(item => item !== ' ');

  textLength.withoutSpaces = withoutSpaces.length;
  response.textLength = textLength;

  const textArr = text.split(' ').filter(item => item !== '');
  response.wordCount = textArr.length;

  const charArr = text
    .split('')
    .filter(item => item !== ' ' && item !== '2')
    .sort();

  for (let i = 0; i < charArr.length; i++) {
    tmp[charArr[i]] = countChar(charArr[i], charArr);
  }
  
  characterCount.push(tmp);
  response.characterCount = characterCount;
  console.log('response:', response);
  res.json(response);
});

function countChar(char, array) {
  return array.filter(item => item === char).length;
}

app.listen(port, () => {
  console.log(`listening to port ${port}`);
});

// curl --header "Content-Type: application/json" --request POST --data'{"text":"hello 2 times  "}'
