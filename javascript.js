//Begining of Variables//

var arabicNames = ["Ar Rahman", "Ar Rahim", "Al Malik", "Al Quddus", "As Salaam", "Al Mu'min", 
"Al Muhaymin", "Al Aziz", "Al Jabbar", "Al Mutakabbir", "Al Khaliq", "Al Bari'", "Al Musawwir", 
"Al Ghaffar", "Al Qahhar", "Al Wahhab", "Ar Razzaq", "Al Fattah", "Al 'Alim", "Al Qabid", 
"Al Basit", "Al Khafid", "Al Rafi'", "Al Mu'izz", "Al Mudhill", "As Samir", "Al Basir", 
"Al Hakam", "Al 'Adl", "Al Latif", "Al Khabir", "Al Halim", "Al 'Azim", "Al Ghafur", "Ash Shakur", 
"Al Ali", "Al Kabir", "Al Hafiz", "Al Muqit", "Al Hasib", "Al Jalil", "Al Karim", "Ar Raqib", 
"Al Mujib", "Al Wasi'", "Al Hakim", "Al Wadud", "Al Majid", "Al Ba'ith", "Ash Shahid", "Al Haqq", 
"Al Wakil", "Al Qawi", "Al Matin", "Al Wali", "Al Hamid", "Al Muhsi", "Al Mubdi", "Al Mu'id", 
"Al Muhyi", "Al Mumit", "Al Hayy", "Al Qayyum", "Al Wajid", "Al Majid", "Al Wahid", "Al Ahad", 
"As Samad", "Al Qadir", "Al Muqtadir", "Al Muqaddin", "Al Mu'akhkhir", "Al Awwal", "Al Akhir", 
"Az Zahir", "Al Batin", "Al Wali", "Al Muta'ali", "Al Barr", "At Tawwib", "Al Muntaqim", "Al Afu", 
"Ar Ra'uf", "Malik al Mulk", "Dhul Jalali Wal Ikraam", "Al Muqsit", "Al Jami", "Al Ghani", 
"Al Mughni", "Al Mani'", "Ad Darr", "An Nafi", "An Nur", "Al Hadi", "Al Badi", "Al Baqi", 
"Al Warith", "Ar Rashid", "As Sabur"];

var englishNames = ["The All Compassionate", "The All Merciful", "The Absolute Ruler", "The Pure One","The Source of Peace","The Inspirer of Faith",
"The Guardian","The Victorious","The Compeller","The Greatest","The Creator","The Maker of Order","The Shaper of Beauty",
"The Forgiving","The Subduer","The Giver of All","The Sustainer","The Opener","The Knower of All","The Constrictor","The Reliever",
"The Abaser","The Exalter","The Bestower of Honours","The Humiliator","The Hearer of All","The Seer of All","The Judge","The Just",
"The Subtle One","The All Aware","The Forebearing","The Magnificent","The Forgiver and Hider of Faults","The Rewarder of Thankfulness",
"The Highest","The Greatest","The Preserver","The Nourisher","The Accounter","The Mighty","The Generous",
"The Watchful One","The Responder to Prayer","The All Comprehending","The Perfectly Wise","The Loving One","The Majestic One",
"The Resurrector","The Witness","The Truth","The Trustee","The Possessor of All Strength","The Forceful One","The Governor",
"The Praised One","The Appraiser","The Originator","The Restorer","The Giver of Life","The Taker of Life","The Ever Living One",
"The Self Existing One","The Finder","The Glorious","The Only One","The One","The Satisfier of All Needs","The All Powerful",
"The Creator of All Power","The Expediter","The Delayer","The First","The Last","The Manifest One","The Hidden One",
"The Protecting Friend","The Supreme One","The Doer of Good","The Guide to Repentance","The Avenger","The Forgiver","The Clement",
"The Owner of All","The Lord of Majesty and Bounty","The Equitable One","The Gatherer","The Rich One","The Enricher",
"The Preventer of Harm","The Creator of The Harmful","The Creator of Good","The Light","The Guide","The Originator","The Everlasting One",
"The Inheritor of All","The Righteous Teacher","The Patient One"];

var random1, ans1, ans2, ans3, ans4, random2, random3, random4;

var questionLang = new Array();
questionLang = arabicNames;

var answerLang = new Array();
answerLang = englishNames;

var finalArray = new Array();

var hasana = 0;
//End of Variables//


//Begining of Functions//
//Function that generates the random number to pick the question and appends it to the page.
function run()
{
	random1 = Math.floor(Math.random()*99);
	var questionDiv = document.getElementById('name');
	var question = document.createElement('h4');
	
	question.innerHTML = questionLang[random1];
	questionDiv.appendChild(question);
	
	generateRandomNum();
}

//Funtion that randomly picks other possible answers
function generateRandomNum()
{
	do{
		random2 = Math.floor(Math.random()*99);
	}while( random2 == random1 );
	
	do{
		random3 = Math.floor(Math.random()*99);
	}while( (random3 == random1) || (random3 == random2) );
	
	do{
		random4 = Math.floor(Math.random()*99);
	}while( (random4 == random1) || (random4 == random2) || (random4 == random3) );
	
	generateOrder();
	
	for(var i = 0; i < finalArray.length; i++)
	{
		addOptions(finalArray[i]);
	}
}

//Function that randomizes the answers and assigns them to the array that contains them
function generateOrder()
{
	ans1 = Math.floor(Math.random()*8);
	
	//Assigning answers
	if((ans1 == 0) || (ans1 == 4))
	{
		finalArray[0] = answerLang[random1];
		finalArray[1] = answerLang[random2];
		finalArray[2] = answerLang[random3];
		finalArray[3] = answerLang[random4];
	}
	if((ans1 == 1) || (ans1 == 5))
	{
		finalArray[0] = answerLang[random2];
		finalArray[1] = answerLang[random1];
		finalArray[2] = answerLang[random3];
		finalArray[3] = answerLang[random4];
	}
	if((ans1 == 2) || (ans1 == 6))
	{
		finalArray[0] = answerLang[random2];
		finalArray[1] = answerLang[random3];
		finalArray[2] = answerLang[random1];
		finalArray[3] = answerLang[random4];
	}
	if((ans1 == 3) || (ans1 == 7))
	{
		finalArray[0] = answerLang[random2];
		finalArray[1] = answerLang[random3];
		finalArray[2] = answerLang[random4];
		finalArray[3] = answerLang[random1];
	}
}

//Function that populates the list of possible answers.
function addOptions(opt)
{
	var optionsList = document.getElementById('options');
	var eachOption = document.createElement('button');

	eachOption.innerHTML = opt;
	eachOption.setAttribute("class","button");
	optionsList.appendChild(eachOption);
	
	$(eachOption).click( function() {
				checkAnswer(this);
	});
}

//Function that checks the answer
function checkAnswer(ans)
{
	if(ans.innerHTML == answerLang[random1])
	{
		alert('Correct Answer MashaAllah!');
		calculateHasana(true);
		removePrevious();
		run();
	}
	else
	{
		alert('Wrong Answer! Correct Answer is "' + answerLang[random1] + '"');
		calculateHasana(false);
		removePrevious();
		run();
	}
}

//Function that removes the current questions and answer options
function removePrevious()
{
	$('#name').empty();
	$('#options').empty();
}

//Function that handles the score
function calculateHasana(bool)
{
	if(bool)
	{
		hasana++;
		
		$('#score').empty();
		
		var score = document.getElementById('score');
		
		score.innerHTML = 'Your Hasana: ' + hasana;
	}
	else
	{
		hasana--;
		
		$('#score').empty();
		
		var score = document.getElementById('score');
		
		score.innerHTML = 'Your Hasana: ' + hasana;
	}
	
}

//End of Functions//