const express = require('express');

const {
  withoutSpacesFn,
  countCharFn,
  textArrFn,
  charArrFn
} = require('./methods');

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
  textLength.withoutSpaces = withoutSpacesFn(textLow).length;
  response.textLength = textLength;

  response.wordCount = textArrFn(textLow).length;
  const charArr = charArrFn(textLow);
  for (let i = 0, tmp = {}; i < charArr.length; i++) {
    tmp[charArr[i]] = countCharFn(charArr[i], charArr);
    characterCount.length > 0
      ? !characterCount.some(item => Object.keys(item).includes(charArr[i])) &&
        characterCount.push(tmp)
      : characterCount.push(tmp);
    tmp = {};
  }
  response.characterCount = characterCount;
  res.json(response);
});

app.listen(port, () => {
  console.log(`listening to port ${port}`);
});
