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

//End of Variables

//Begining of Functions

//Function that populates the list of possible answers.
function addOptions(opt)
{
	var optionsList = document.getElementById('options');
	var eachOption = document.CreateElement('button');
	eachOption.innerHTML = opt;
	optionsList.appendChild(eachOption);
	
	$(eachOption).click( function() {
				alert("Logic not implemented yet!");
	});
}

//var x = Math.floor(Math.random()*11);