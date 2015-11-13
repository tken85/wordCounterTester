
var readTime={

  configWPM: function(newWPM){
    readTime.wpm = newWPM;
  },
  getWPM: function(){
    return readTime.wpm;
  },
  convertToArray: function(what){
    readTime.nodes = what;
    return readTime.nodes;
  },
  getTextFromNodes: function(nodes){
    return $(nodes).text();
  },
  removePunctuation: function(input){
    function notSpace(value){
      return (value !="" && value !="\n" && value !="-" && value !="--" && value !="." && value !="," && value !="?" && value !=";" && value !="!");
    }
    var fixedStr = input.split('').filter(notSpace).join('');
    return fixedStr;
  },
  countWords: function(string){
    var wordArr = readTime.removePunctuation(string).split(" ");
    readTime.words = wordArr.length;
    return readTime.words;
  },
  calcWPM: function(numWords){
    return Math.round(numWords/readTime.wpm) + " minute read";
  },
  wpm: 0,
  nodes: [],
  words: 0,

};
