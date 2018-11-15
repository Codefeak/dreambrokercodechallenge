const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post('/', (req, res) => {
  const { text } = req.body;
  textLow = text.toLowerCase();
  const textLength = {},
    characterCount = [],
    response = {};

  textLength.withSpaces = textLow.length;
  const withoutSpaces = textLow.split('').filter(item => item !== ' ');

  textLength.withoutSpaces = withoutSpaces.length;
  response.textLength = textLength;

  const textArr = text.split(' ').filter(item => item !== '');
  response.wordCount = textArr.length;

  const charArr = textLow
    .split('')
    .filter(item => item !== ' ' && item !== '2' && item !== ',' && item !== '.')
    .sort();

  for (let i = 0, tmp = {}; i < charArr.length; i++) {
    tmp[charArr[i]] = countChar(charArr[i], charArr);
    characterCount.length>0
    ? !characterCount.some(item => Object.keys(item).includes(charArr[i]))
      && characterCount.push(tmp)
    : characterCount.push(tmp);
    tmp = {};
  }
  
  response.characterCount = characterCount;
  res.json(response);
});

function countChar(char, array) {
  return array.filter(item => item === char).length;
}
function sortArray(keyA, keyB){
  let c = 0;
  if(keyA>keyB){
    c=1;
  }else if (keyA<keyB){
    c=-1;
  }
  return c;
}

app.listen(port, () => {
  console.log(`listening to port ${port}`);
});

// curl --header "Content-Type: application/json" --request POST --data'{"text":"hello 2 times  "}'
