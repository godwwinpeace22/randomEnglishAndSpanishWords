let englishWords = require('./words.js').englishWords;
let spanishWords = require('./words.js').spanishWords;
module.exports = function(arg){
	let $append = function(){
		//to be appended at the end of the generated random words
		// this generate random numbers between min and max and converts them to base 16
		if(arg.append === false){}
		else{
		   let min = 100000;
		   let max = 900000;
		   let randomDec = Math.floor(Math.random()*(max-min+1)+min);
		   return randomDec.toString(16);
		}
	   
   }
   
	let word_box = [];
	let $pusher = function(lang){ // A function that pushes whatever words to 'word_box' depending on the value of 'lang'
		lang == 'english' ? lang = englishWords : lang == 'spanish' ? lang = spanishWords : ''
		for(i=0;i<arg.num;i++){
			word_box.push(lang[Math.floor(Math.random()*lang.length)]);
		}
	}
	if(arg.lang == 'both'){
		$pusher('spanish');
		$pusher('english');
		word_box.push($append());
	}
	else{
		arg.lang == 'spanish' ? arg.lang = spanishWords : arg.lang == 'english' ? arg.lang = englishWords : ''
		$pusher(arg.lang);
		word_box.push($append());
	}
	
	//Joins all the words in the 'word_box' array
	return word_box.join('-');
}