module.exports = function getLoveTrianglesCount(preferences = []) {
  var lovesTriangles = 0,
    lovesArr = preferences,
    first,
    second,
    three;

  preferences.forEach(function(item, i, preferences) {
    first = i+1;
    second = preferences[i];
    three = preferences[second-1];

    if (lovesArr[first-1] != undefined ||
      lovesArr[second-1] != undefined ||
      lovesArr[three-1] != undefined) {

      if(preferences[three-1] === first && first != second) {
        lovesArr[first - 1] = undefined;
        lovesArr[second - 1] = undefined;
        lovesArr[three - 1] = undefined;

        lovesTriangles++;
      }
    }
  });

  return lovesTriangles;
};
