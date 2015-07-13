//Typing Text (DHTML) v1 (Sunday, April 15th, 2001)
//Programmed by: Haitham M. Al-Beik
//Email: albeik26@hotmail.com
//Visit http://javascriptkit.com for this script

var newsText = new Array();
newsText[0] = "Typing Text JScript v1\nDeveloped on Sunday, April 15th, 2001...";
// newsText[1] = "This is a text-typing DHTML demo. \nScript featured on http://javascriptkit.com";
// newsText[2] = "Make sure you read the comments before you configure the script...";
// newsText[3] = "Programmed by: Haitham Al-Beik...\n\nCopyright (c) Haitham M. Al-Beik, 2001";
// newsText[4] = "http://www.prosheet.com/DHTML/typetext.htm"

var ttloop = 0;    // Repeat forever? (1 = True; 0 = False)
var tspeed = 50;   // Typing speed in milliseconds (larger number = slower)
var tdelay = 1000; // Time delay between newsTexts in milliseconds

// ------------- NO EDITING AFTER THIS LINE ------------- \\
var dwAText, cnews=0, eline=0, cchar=0, mxText;

function doNews() {
  mxText = newsText.length - 1;
  dwAText = newsText[cnews];
  setTimeout("addChar()",1000)
}
function addNews() {
  cnews += 1;
  if (cnews <= mxText) {
    dwAText = newsText[cnews];
    if (dwAText.length != 0) {
      document.news.news2.value = "";
      eline = 0;
      setTimeout("addChar()",tspeed)
    }
  }
}
function addChar() {
  if (eline!=1) {
    if (cchar != dwAText.length) {
      nmttxt = ""; for (var k=0; k<=cchar;k++) nmttxt += dwAText.charAt(k);
      document.news.news2.value = nmttxt;
      cchar += 1;
      if (cchar != dwAText.length) document.news.news2.value += "_";
    } else {
      cchar = 0;
      eline = 1;
    }
    if (mxText==cnews && eline!=0 && ttloop!=0) {
      cnews = 0; setTimeout("addNews()",tdelay);
    } else setTimeout("addChar()",tspeed);
  } else {
    setTimeout("addNews()",tdelay)
  }
}
