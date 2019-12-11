const sampleData = 
[
	{
		"label" : "9GAG",
        "id" : 16,
		"Shield_ID" : [2, 3, 5],
		"Shield_Name" : ["Dangerous Behavior", "Violent Content", "Sexual Content"],
		"Shield_Icon" : ["https://imagizer.imageshack.com/img922/4586/FJpyql.png"]
	},
	{
		"label" : "ASKfm",
		"id" : 8,
		"Shield_ID" : [2, 3, 5],
		"Shield_Name" : ["Dangerous Behavior", "Violent Content", "Sexual Content"],
		"Shield_Icon" : ["https://imagizer.imageshack.com/img922/4586/FJpyql.png", "https://imagizer.imageshack.com/img923/3872/QmCYSy.png", "https://imagizer.imageshack.com/img921/1830/Jad3lH.png"]
	},
	{
		"label" : "Badoo",
		"id" : 36,
		"Shield_ID" : 1,
		"Shield_Name" : "Predator Risk",
		"Shield_Icon" : ["https://imagizer.imageshack.com/img921/8898/PyRetH.png"]
	},
	{
		"label" : "Badoo",
		"id" : 36,
		"Shield_ID" : [2, 4, 5],
		"Shield_Name" : ["Dangerous Behavior", "Cyberbullying", "Sexual Content"],
		"Shield_Icon" : ["https://imagizer.imageshack.com/img922/4586/FJpyql.png", "https://imagizer.imageshack.com/img922/7184/zsAk82.png", "https://imagizer.imageshack.com/img921/1830/Jad3lH.png"]
	},
	{
		"label" : "Bigo Live",
		"id" : 17,
		"Shield_ID" : 1,
		"Shield_Name" : "Predator Risk",
		"Shield_Icon" : ["https://imagizer.imageshack.com/img921/8898/PyRetH.png"]
	},
	{
		"label" : "Bigo Live",
		"id" : 17,
		"Shield_ID" : [2, 3, 4, 5],
		"Shield_Name" : ["Dangerous Behavior", "Violent Content", "Cyberbullying", "Sexual Content"],
		"Shield_Icon" : ["https://imagizer.imageshack.com/img922/4586/FJpyql.png", "https://imagizer.imageshack.com/img923/3872/QmCYSy.png", "https://imagizer.imageshack.com/img922/7184/zsAk82.png", "https://imagizer.imageshack.com/img921/1830/Jad3lH.png"]
	},
	{
		"label" : "Blendr",
		"id" : 19,
		"Shield_ID" : [1, 2, 5],
		"Shield_Name" : ["Predator Risk", "Dangerous Behavior", "Sexual Content"],
		"Shield_Icon" : ["https://imagizer.imageshack.com/img921/8898/PyRetH.png", "https://imagizer.imageshack.com/img922/4586/FJpyql.png", "https://imagizer.imageshack.com/img921/1830/Jad3lH.png"]
	},
	{
		"label" : "Bumble",
		"id" : 5,
		"Shield_ID" : [1, 3],
		"Shield_Name" : ["Predator Risk", "Violent Content"],
		"Shield_Icon" : ["https://imagizer.imageshack.com/img921/8898/PyRetH.png", "https://imagizer.imageshack.com/img923/3872/QmCYSy.png"]
	},
	{
		"label" : "Burnbook",
		"id" : 10,
		"Shield_ID" : [1, 2, 5],
		"Shield_Name" : ["Predator Risk", "Dangerous Behavior", "Sexual Content"],
		"Shield_Icon" : ["https://imagizer.imageshack.com/img921/8898/PyRetH.png", "https://imagizer.imageshack.com/img922/4586/FJpyql.png", "https://imagizer.imageshack.com/img921/1830/Jad3lH.png"]
	},
	{
		"label" : "Chatous",
		"id" : 14,
		"Shield_ID" : [1, 2, 3, 4, 5],
		"Shield_Name" : ["Predator Risk", "Dangerous Behavior", "Violent Content", "Cyberbullying", "Sexual Content"],
		"Shield_Icon" : ["https://imagizer.imageshack.com/img921/8898/PyRetH.png", "https://imagizer.imageshack.com/img922/4586/FJpyql.png", "https://imagizer.imageshack.com/img923/3872/QmCYSy.png", "https://imagizer.imageshack.com/img922/7184/zsAk82.png", "https://imagizer.imageshack.com/img921/1830/Jad3lH.png"]
	},
	{
		"label" : "Comvo",
		"id" : 15,
		"Shield_ID" : [3, 4, 5],
		"Shield_Name" : ["Violent Content", "Cyberbullying", "Sexual Content"],
		"Shield_Icon" : ["https://imagizer.imageshack.com/img923/3872/QmCYSy.png", "https://imagizer.imageshack.com/img922/7184/zsAk82.png", "https://imagizer.imageshack.com/img921/1830/Jad3lH.png"]
	},
	{
		"label" : "Discord",
		"id" : 24,
		"Shield_ID" : [2, 3, 4],
		"Shield_Name" : ["Dangerous Behavior", "Violent Content", "Cyberbullying"],
		"Shield_Icon" : ["https://imagizer.imageshack.com/img922/4586/FJpyql.png", "https://imagizer.imageshack.com/img923/3872/QmCYSy.png", "https://imagizer.imageshack.com/img922/7184/zsAk82.png"]
	},
	{
		"label" : "Grindr",
		"id" : 37,
		"Shield_ID" : [1, 3, 4, 5],
		"Shield_Name" : ["Predator Risk", "Violent Content", "Cyberbullying", "Sexual Content"],
		"Shield_Icon" : ["https://imagizer.imageshack.com/img921/8898/PyRetH.png", "https://imagizer.imageshack.com/img923/3872/QmCYSy.png", "https://imagizer.imageshack.com/img922/7184/zsAk82.png", "https://imagizer.imageshack.com/img921/1830/Jad3lH.png"]
	},
	{
		"label" : "Holla",
		"id" : 4,
		"Shield_ID" : [2, 3, 5],
		"Shield_Name" : ["Dangerous Behavior", "Violent Content", "Sexual Content"],
		"Shield_Icon" : ["https://imagizer.imageshack.com/img922/4586/FJpyql.png", "https://imagizer.imageshack.com/img923/3872/QmCYSy.png", "https://imagizer.imageshack.com/img921/1830/Jad3lH.png"]
	},
	{
		"label" : "Hot or Not",
		"id" : 11,
		"Shield_ID" : [3, 4, 5],
		"Shield_Name" : ["Violent Content", "Cyberbullying", "Sexual Content"],
		"Shield_Icon" : ["https://imagizer.imageshack.com/img923/3872/QmCYSy.png", "https://imagizer.imageshack.com/img922/7184/zsAk82.png", "https://imagizer.imageshack.com/img921/1830/Jad3lH.png"]
	},
	{
		"label" : "Houseparty",
		"id" : 22,
		"Shield_ID" : [1, 2, 5],
		"Shield_Name" : ["Predator Risk", "Dangerous Behavior", "Sexual Content"],
		"Shield_Icon" : ["https://imagizer.imageshack.com/img921/8898/PyRetH.png", "https://imagizer.imageshack.com/img922/4586/FJpyql.png", "https://imagizer.imageshack.com/img921/1830/Jad3lH.png"] 
	},
	{
		"label" : "IMVU",
		"id" : 26,
		"Shield_ID" : [2, 3, 5],
		"Shield_Name" : ["Dangerous Behavior", "Violent Content", "Sexual Content"],
		"Shield_Icon" : ["https://imagizer.imageshack.com/img922/4586/FJpyql.png", "https://imagizer.imageshack.com/img923/3872/QmCYSy.png", "https://imagizer.imageshack.com/img921/1830/Jad3lH.png"]
	},
	{
		"label" : "Instagram",
		"id" : 13,
		"Shield_ID" : [3],
		"Shield_Name" : ["Violent Content"],
		"Shield_Icon" : ["https://imagizer.imageshack.com/img923/3872/QmCYSy.png"]
	},
	{
		"label" : "Kik",
		"id" : 2,
		"Shield_ID" : [1, 2, 3, 4],
		"Shield_Name" : ["Predator Risk", "Dangerous Behavior", "Violent Content", "Cyberbullying"],
		"Shield_Icon" : ["https://imagizer.imageshack.com/img921/8898/PyRetH.png", "https://imagizer.imageshack.com/img922/4586/FJpyql.png", "https://imagizer.imageshack.com/img923/3872/QmCYSy.png", "https://imagizer.imageshack.com/img922/7184/zsAk82.png"]
	},
	{
		"label" : "Line",
		"id" : 30,
		"Shield_ID" : [1, 3, 4, 5],
		"Shield_Name" : ["Predator Risk", "Violent Content", "Cyberbullying", "Sexual Content"],
		"Shield_Icon" : ["https://imagizer.imageshack.com/img921/8898/PyRetH.png", "https://imagizer.imageshack.com/img923/3872/QmCYSy.png", "https://imagizer.imageshack.com/img922/7184/zsAk82.png", "https://imagizer.imageshack.com/img921/1830/Jad3lH.png"]
	},
	{
		"label" : "Lipsi",
		"id" : 27,
		"Shield_ID" : [2, 3, 4, 5],
		"Shield_Name" : ["Dangerous Behavior", "Violent Content", "Cyberbullying", "Sexual Content"],
		"Shield_Icon" : ["https://imagizer.imageshack.com/img922/4586/FJpyql.png", "https://imagizer.imageshack.com/img923/3872/QmCYSy.png", "https://imagizer.imageshack.com/img922/7184/zsAk82.png", "https://imagizer.imageshack.com/img921/1830/Jad3lH.png"]
	},
	{
		"label" : "LiveME",
		"id" : 12,
		"Shield_ID" : [1, 2, 3],
		"Shield_Name" : ["Predator Risk", "Dangerous Behavior", "Violent Content"],
		"Shield_Icon" : ["https://imagizer.imageshack.com/img921/8898/PyRetH.png", "https://imagizer.imageshack.com/img922/4586/FJpyql.png", "https://imagizer.imageshack.com/img923/3872/QmCYSy.png"]
	},
	{
		"label" : "MeetMe",
		"id" : 38,
		"Shield_ID" : [1, 2, 3, 5],
		"Shield_Name" : ["Predator Risk", "Dangerous Behavior", "Violent Content", "Sexual Content"],
		"Shield_Icon" : ["https://imagizer.imageshack.com/img921/8898/PyRetH.png", "https://imagizer.imageshack.com/img922/4586/FJpyql.png", "https://imagizer.imageshack.com/img923/3872/QmCYSy.png", "https://imagizer.imageshack.com/img921/1830/Jad3lH.png"]
	},
	{
		"label" : "Periscope",
		"id" : 21,
		"Shield_ID" : [1, 2, 3, 4],
		"Shield_Name" : ["Predator Risk", "Dangerous Behavior", "Violent Content", "Cyberbullying"],
		"Shield_Icon" : ["https://imagizer.imageshack.com/img921/8898/PyRetH.png", "https://imagizer.imageshack.com/img922/4586/FJpyql.png", "https://imagizer.imageshack.com/img923/3872/QmCYSy.png", "https://imagizer.imageshack.com/img922/7184/zsAk82.png"]
	},
	{
		"label" : "Secret Calculator",
		"id" : 7,
		"Shield_ID" : [2, 4],
		"Shield_Name" : ["Dangerous Behavior", "Cyberbullying"],
		"Shield_Icon" : ["https://imagizer.imageshack.com/img922/4586/FJpyql.png", "https://imagizer.imageshack.com/img922/7184/zsAk82.png"]
	},
	{
		"label" : "Skout",
		"id" : 39,
		"Shield_ID" : [1, 3, 4],
		"Shield_Name" : ["Predator Risk", "Violent Content", "Cyberbullying"],
		"Shield_Icon" : ["https://imagizer.imageshack.com/img921/8898/PyRetH.png", "https://imagizer.imageshack.com/img923/3872/QmCYSy.png", "https://imagizer.imageshack.com/img922/7184/zsAk82.png"]
	},
	{
		"label" : "Snapchat",
		"id" : 1,
		"Shield_ID" : [1, 3],
		"Shield_Name" : ["Predator Risk", "Violent Content"],
		"Shield_Icon" : ["https://imagizer.imageshack.com/img921/8898/PyRetH.png", "https://imagizer.imageshack.com/img923/3872/QmCYSy.png"]
	},
	{
		"label" : "Tellonym",
		"id" : 28,
		"Shield_ID" : [1, 2, 4, 5],
		"Shield_Name" : ["Predator Risk", "Dangerous Behavior", "Cyberbullying", "Sexual Content"],
		"Shield_Icon" : ["https://imagizer.imageshack.com/img921/8898/PyRetH.png", "https://imagizer.imageshack.com/img922/4586/FJpyql.png", "https://imagizer.imageshack.com/img922/7184/zsAk82.png", "https://imagizer.imageshack.com/img921/1830/Jad3lH.png"]
	},
	{
		"label" : "TikTok",
		"id" : 18,
		"Shield_ID" : [1, 2, 3],
		"Shield_Name" : ["Predator Risk", "Dangerous Behavior", "Violent Content"],
		"Shield_Icon" : ["https://imagizer.imageshack.com/img921/8898/PyRetH.png", "https://imagizer.imageshack.com/img922/4586/FJpyql.png", "https://imagizer.imageshack.com/img923/3872/QmCYSy.png"]
	},
	{
		"label" : "Tinder",
		"id" : 32,
		"Shield_ID" : [1, 2, 3, 4, 5],
		"Shield_Name" : ["Predator Risk", "Dangerous Behavior", "Violent Content", "Cyberbullying", "Sexual Content"],
		"Shield_Icon" : ["https://imagizer.imageshack.com/img921/8898/PyRetH.png", "https://imagizer.imageshack.com/img922/4586/FJpyql.png", "https://imagizer.imageshack.com/img923/3872/QmCYSy.png", "https://imagizer.imageshack.com/img922/7184/zsAk82.png", "https://imagizer.imageshack.com/img921/1830/Jad3lH.png"]
	},
	{
		"label" : "Tumblr",
		"id" : 35,
		"Shield_ID" : [1, 2, 3],
		"Shield_Name" : ["Predator Risk", "Dangerous Behavior", "Violent Content"],
		"Shield_Icon" : ["https://imagizer.imageshack.com/img921/8898/PyRetH.png", "https://imagizer.imageshack.com/img922/4586/FJpyql.png", "https://imagizer.imageshack.com/img923/3872/QmCYSy.png"]
	},
	{
		"label" : "Twitch",
		"id" : 23,
		"Shield_ID" : [1, 3],
		"Shield_Name" : ["Predator Risk", "Violent Content"],
		"Shield_Icon" : ["https://imagizer.imageshack.com/img921/8898/PyRetH.png", "https://imagizer.imageshack.com/img923/3872/QmCYSy.png"]
	},
	{
		"label" : "Voxer",
		"id" : 33,
		"Shield_ID" : [1, 2, 4],
		"Shield_Name" : ["Predator Risk", "Dangerous Behavior", "Cyberbullying"],
		"Shield_Icon" : ["https://imagizer.imageshack.com/img921/8898/PyRetH.png", "https://imagizer.imageshack.com/img922/4586/FJpyql.png", "https://imagizer.imageshack.com/img922/7184/zsAk82.png"]
	},
	{
		"label" : "VSCO",
		"id" : 34,
		"Shield_ID" : [1, 2, 3, 4],
		"Shield_Name" : ["Predator Risk", "Dangerous Behavior", "Violent Content", "Cyberbullying"],
		"Shield_Icon" : ["https://imagizer.imageshack.com/img921/8898/PyRetH.png", "https://imagizer.imageshack.com/img922/4586/FJpyql.png", "https://imagizer.imageshack.com/img923/3872/QmCYSy.png", "https://imagizer.imageshack.com/img922/7184/zsAk82.png"]
	},
	{
		"label" : "WhatsApp",
		"id" : 29,
		"Shield_ID" : [3, 4, 5],
		"Shield_Name" : ["Violent Content", "Cyberbullying", "Sexual Content"],
		"Shield_Icon" : ["https://imagizer.imageshack.com/img923/3872/QmCYSy.png", "https://imagizer.imageshack.com/img922/7184/zsAk82.png", "https://imagizer.imageshack.com/img921/1830/Jad3lH.png"]
	},
	{
		"label" : "Whisper",
		"id" : 9,
		"Shield_ID" : [1, 2, 3, 4, 5],
		"Shield_Name" : ["Predator Risk", "Dangerous Behavior", "Violent Content", "Cyberbullying", "Sexual Content"],
		"Shield_Icon" : ["https://imagizer.imageshack.com/img921/8898/PyRetH.png", "https://imagizer.imageshack.com/img922/4586/FJpyql.png", "https://imagizer.imageshack.com/img923/3872/QmCYSy.png", "https://imagizer.imageshack.com/img922/7184/zsAk82.png", "https://imagizer.imageshack.com/img921/1830/Jad3lH.png"]
	},
	{
		"label" : "YouNow",
		"id" : 20,
		"Shield_ID" : [4, 5],
		"Shield_Name" : ["Cyberbullying", "Sexual Content"],
		"Shield_Icon" : ["https://imagizer.imageshack.com/img922/7184/zsAk82.png", "https://imagizer.imageshack.com/img921/1830/Jad3lH.png"]
	},
	{
		"label" : "YouTube",
		"id" : 31,
		"Shield_ID" : [1, 4],
		"Shield_Name" : ["Predator Risk", "Cyberbullying"],
		"Shield_Icon" : ["https://imagizer.imageshack.com/img921/8898/PyRetH.png", "https://imagizer.imageshack.com/img922/7184/zsAk82.png"]
	},
	{
		"label" : "Yubo",
		"id" : 3,
		"Shield_ID" : [1, 3, 5],
		"Shield_Name" : ["Predator Risk", "Violent Content", "Sexual Content"],
		"Shield_Icon" : ["https://imagizer.imageshack.com/img921/8898/PyRetH.png", "https://imagizer.imageshack.com/img923/3872/QmCYSy.png", "https://imagizer.imageshack.com/img921/1830/Jad3lH.png"]
	},
	{
		"label" : "ZEPETO",
		"id" : 25,
		"Shield_ID" : [1, 2, 4, 5],
		"Shield_Name" : ["Predator Risk", "Dangerous Behavior", "Cyberbullying", "Sexual Content"],
		"Shield_Icon" : ["https://imagizer.imageshack.com/img921/8898/PyRetH.png", "https://imagizer.imageshack.com/img922/4586/FJpyql.png", "https://imagizer.imageshack.com/img922/7184/zsAk82.png", "https://imagizer.imageshack.com/img921/1830/Jad3lH.png"]
	}
];

module.exports = sampleData;
