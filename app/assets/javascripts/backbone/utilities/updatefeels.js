var app = app || {};

app.updateFeels = function () {

  // loop through all snippets where "result = positive" to find the highest "confidence" rating
  var highestFeel = 0;
  // loop through all snippets where "result = negative" to find the lowest "confidence" rating
  var lowestFeel = 0;
  // retrieve most recent snippet and find the result and confidence rating
  var currentFeel = 0;
  // take all snippets from last week and run them through an algorithm which determines
  var weeksAverageFeel = 0;

  for ( var i = 0 ; i < app.currentUserContact.length ; i++ ) {

    // Array of all snippets belonging to each of the user's contacts
    var snip = app.allSnippets.where({contact_id: app.currentUserContact[i].attributes.id});
    // Array of all snippets where result is negative
    var snipNeg = _.filter( snip, function (snippet) {return JSON.parse(snippet.attributes.context).result === "Negative"});
    // snipNeg.each
    var snipPos = _.filter( snip, function (snippet) {return JSON.parse(snippet.attributes.context).result === "Positive"});
    debugger;

      // Turn snippet.context into an object
      // s = JSON.parse(snip[x].attributes.context);
      // Change confidence into integer for comparing
      // confidence = parseInt(s.confidence);
      
  }
  
  console.log('Highest Feel:',highestFeel,'Lowest Feel:', lowestFeel);
  // console.log(allSnipzzz);
};