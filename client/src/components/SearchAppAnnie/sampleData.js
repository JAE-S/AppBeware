const sampleData = 
[
	{
		"label" : "9GAG",
        "App_ID" : 16,
		"Shield_ID" : [2, 3, 5],
		"Shield_Name" : ["Dangerous Behavior", "Violent Content", "Sexual Content"],
		"Shield_Icon" : ["https://imagizer.imageshack.com/img922/4586/FJpyql.png", "https://imagizer.imageshack.com/img923/3872/QmCYSy.png", "https://imagizer.imageshack.com/img921/1830/Jad3lH.png"]
	},
	{
		"label" : "ASKfm",
		"App_ID" : 8,
		"Shield_ID" : [2, 3, 5],
		"Shield_Name" : ["Dangerous Behavior", "Violent Content", "Sexual Content"],
		"Shield_Icon" : ["https://imagizer.imageshack.com/img922/4586/FJpyql.png", "https://imagizer.imageshack.com/img923/3872/QmCYSy.png", "https://imagizer.imageshack.com/img921/1830/Jad3lH.png"]
	},
	{
		"label" : "Badoo",
		"App_ID" : 36,
		"Shield_ID" : 1,
		"Shield_Name" : "Predator Risk",
		"Shield_Icon" : "https://imagizer.imageshack.com/img921/8898/PyRetH.png"
	},
	{
		"label" : "Badoo",
		"App_ID" : 36,
		"Shield_ID" : [2, 4, 5],
		"Shield_Name" : ["Dangerous Behavior", "Cyberbullying", "Sexual Content"],
		"Shield_Icon" : ["https://imagizer.imageshack.com/img922/4586/FJpyql.png", "https://imagizer.imageshack.com/img922/7184/zsAk82.png", "https://imagizer.imageshack.com/img921/1830/Jad3lH.png"]
	},
	{
		"label" : "Bigo Live",
		"App_ID" : 17,
		"Shield_ID" : 1,
		"Shield_Name" : "Predator Risk",
		"Shield_Icon" : "https://imagizer.imageshack.com/img921/8898/PyRetH.png"
	},
	{
		"label" : "Bigo Live",
		"App_ID" : 17,
		"Shield_ID" : [2, 3, 4, 5],
		"Shield_Name" : ["Dangerous Behavior", "Violent Content", "Cyberbullying", "Sexual Content"],
		"Shield_Icon" : ["https://imagizer.imageshack.com/img922/4586/FJpyql.png", "https://imagizer.imageshack.com/img923/3872/QmCYSy.png", "https://imagizer.imageshack.com/img922/7184/zsAk82.png", "https://imagizer.imageshack.com/img921/1830/Jad3lH.png"]
	},
	{
		"label" : "Blendr",
		"App_ID" : 19,
		"Shield_ID" : [1, 2, 5],
		"Shield_Name" : ["Predator Risk", "Dangerous Behavior", "Sexual Content"],
		"Shield_Icon" : ["https://imagizer.imageshack.com/img921/8898/PyRetH.png", "https://imagizer.imageshack.com/img922/4586/FJpyql.png", "https://imagizer.imageshack.com/img921/1830/Jad3lH.png"]
	},
	{
		"label" : "Bumble",
		"App_ID" : 5,
		"Shield_ID" : [1, 3],
		"Shield_Name" : ["Predator Risk", "Violent Content"],
		"Shield_Icon" : ["https://imagizer.imageshack.com/img921/8898/PyRetH.png", "https://imagizer.imageshack.com/img923/3872/QmCYSy.png"]
	},
	{
		"label" : "Burnbook",
		"App_ID" : 10,
		"Shield_ID" : [1, 2, 5],
		"Shield_Name" : ["Predator Risk", "Dangerous Behavior", "Sexual Content"],
		"Shield_Icon" : ["https://imagizer.imageshack.com/img921/8898/PyRetH.png", "https://imagizer.imageshack.com/img922/4586/FJpyql.png", "https://imagizer.imageshack.com/img921/1830/Jad3lH.png"]
	},
	{
		"label" : "Chatous",
		"App_ID" : 14,
		"Shield_ID" : [1, 2, 3, 4, 5],
		"Shield_Name" : ["Predator Risk", "Dangerous Behavior", "Violent Content", "Cyberbullying", "Sexual Content"],
		"Shield_Icon" : ["https://imagizer.imageshack.com/img921/8898/PyRetH.png", "https://imagizer.imageshack.com/img922/4586/FJpyql.png", "https://imagizer.imageshack.com/img923/3872/QmCYSy.png", "https://imagizer.imageshack.com/img922/7184/zsAk82.png", "https://imagizer.imageshack.com/img921/1830/Jad3lH.png"]
	},
	{
		"label" : "Comvo",
		"App_ID" : 15,
		"Shield_ID" : [3, 4, 5],
		"Shield_Name" : ["Violent Content", "Cyberbullying", "Sexual Content"],
		"Shield_Icon" : ["https://imagizer.imageshack.com/img923/3872/QmCYSy.png", "https://imagizer.imageshack.com/img922/7184/zsAk82.png", "https://imagizer.imageshack.com/img921/1830/Jad3lH.png"]
	},
	{
		"label" : "Discord",
		"App_ID" : 24,
		"Shield_ID" : [2, 3, 4],
		"Shield_Name" : ["Dangerous Behavior", "Violent Content", "Cyberbullying"],
		"Shield_Icon" : ["https://imagizer.imageshack.com/img922/4586/FJpyql.png", "https://imagizer.imageshack.com/img923/3872/QmCYSy.png", "https://imagizer.imageshack.com/img922/7184/zsAk82.png"]
	},
	{
		"label" : "Grindr",
		"App_ID" : 37,
		"Shield_ID" : [1, 3, 4, 5],
		"Shield_Name" : ["Predator Risk", "Violent Content", "Cyberbullying", "Sexual Content"],
		"Shield_Icon" : ["https://imagizer.imageshack.com/img921/8898/PyRetH.png", "https://imagizer.imageshack.com/img923/3872/QmCYSy.png", "https://imagizer.imageshack.com/img922/7184/zsAk82.png", "https://imagizer.imageshack.com/img921/1830/Jad3lH.png"]
	},
	{
		"label" : "Holla",
		"App_ID" : 4,
		"Shield_ID" : [2, 3, 5],
		"Shield_Name" : ["Dangerous Behavior", "Violent Content", "Sexual Content"],
		"Shield_Icon" : ["https://imagizer.imageshack.com/img922/4586/FJpyql.png", "https://imagizer.imageshack.com/img923/3872/QmCYSy.png", "https://imagizer.imageshack.com/img921/1830/Jad3lH.png"]
	},
	{
		"label" : "Hot or Not",
		"App_ID" : 11,
		"Shield_ID" : [3, 4, 5],
		"Shield_Name" : ["Violent Content", "Cyberbullying", "Sexual Content"],
		"Shield_Icon" : ["https://imagizer.imageshack.com/img923/3872/QmCYSy.png", "https://imagizer.imageshack.com/img922/7184/zsAk82.png", "https://imagizer.imageshack.com/img921/1830/Jad3lH.png"]
	},
	{
		"label" : "Houseparty",
		"App_ID" : 22,
		"Shield_ID" : [1, 2, 5],
		"Shield_Name" : ["Predator Risk", "Dangerous Behavior", "Sexual Content"],
		"Shield_Icon" : ["https://imagizer.imageshack.com/img921/8898/PyRetH.png", "https://imagizer.imageshack.com/img922/4586/FJpyql.png", "https://imagizer.imageshack.com/img921/1830/Jad3lH.png"] 
	},
	{
		"label" : "IMVU",
		"App_ID" : 26,
		"Shield_ID" : [2, 3, 5],
		"Shield_Name" : ["Dangerous Behavior", "Violent Content", "Sexual Content"],
		"Shield_Icon" : ["https://imagizer.imageshack.com/img922/4586/FJpyql.png", "https://imagizer.imageshack.com/img923/3872/QmCYSy.png", "https://imagizer.imageshack.com/img921/1830/Jad3lH.png"]
	},
	{
		"label" : "Instagram",
		"App_ID" : 13,
		"Shield_ID" : [3],
		"Shield_Name" : ["Violent Content"],
		"Shield_Icon" : ["https://imagizer.imageshack.com/img923/3872/QmCYSy.png"]
	},
	{
		"label" : "Kik",
		"App_ID" : 2,
		"Shield_ID" : [1, 2, 3, 4],
		"Shield_Name" : ["Predator Risk", "Dangerous Behavior", "Violent Content", "Cyberbullying"],
		"Shield_Icon" : ["https://imagizer.imageshack.com/img921/8898/PyRetH.png", "https://imagizer.imageshack.com/img922/4586/FJpyql.png", "https://imagizer.imageshack.com/img923/3872/QmCYSy.png", "https://imagizer.imageshack.com/img922/7184/zsAk82.png"]
	},
	{
		"label" : "Line",
		"App_ID" : 30,
		"Shield_ID" : [1, 3, 4, 5],
		"Shield_Name" : ["Predator Risk", "Violent Content", "Cyberbullying", "Sexual Content"],
		"Shield_Icon" : ["https://imagizer.imageshack.com/img921/8898/PyRetH.png", "https://imagizer.imageshack.com/img923/3872/QmCYSy.png", "https://imagizer.imageshack.com/img922/7184/zsAk82.png", "https://imagizer.imageshack.com/img921/1830/Jad3lH.png"]
	},
	{
		"label" : "Lipsi",
		"App_ID" : 27,
		"Shield_ID" : [2, 3, 4, 5],
		"Shield_Name" : ["Dangerous Behavior", "Violent Content", "Cyberbullying", "Sexual Content"],
		"Shield_Icon" : ["https://imagizer.imageshack.com/img922/4586/FJpyql.png", "https://imagizer.imageshack.com/img923/3872/QmCYSy.png", "https://imagizer.imageshack.com/img922/7184/zsAk82.png", "https://imagizer.imageshack.com/img921/1830/Jad3lH.png"]
	},
	{
		"label" : "LiveME",
		"App_ID" : 12,
		"Shield_ID" : [1, 2, 3],
		"Shield_Name" : ["Predator Risk", "Dangerous Behavior", "Violent Content"],
		"Shield_Icon" : ["https://imagizer.imageshack.com/img921/8898/PyRetH.png", "https://imagizer.imageshack.com/img922/4586/FJpyql.png", "https://imagizer.imageshack.com/img923/3872/QmCYSy.png"]
	},
	{
		"label" : "MeetMe",
		"App_ID" : 38,
		"Shield_ID" : [1, 2, 3, 5],
		"Shield_Name" : ["Predator Risk", "Dangerous Behavior", "Violent Content", "Sexual Content"],
		"Shield_Icon" : ["https://imagizer.imageshack.com/img921/8898/PyRetH.png", "https://imagizer.imageshack.com/img922/4586/FJpyql.png", "https://imagizer.imageshack.com/img923/3872/QmCYSy.png", "https://imagizer.imageshack.com/img921/1830/Jad3lH.png"]
	},
	{
		"label" : "Periscope",
		"App_ID" : 21,
		"Shield_ID" : [1, 2, 3, 4],
		"Shield_Name" : ["Predator Risk", "Dangerous Behavior", "Violent Content", "Cyberbullying"],
		"Shield_Icon" : ["https://imagizer.imageshack.com/img921/8898/PyRetH.png", "https://imagizer.imageshack.com/img922/4586/FJpyql.png", "https://imagizer.imageshack.com/img923/3872/QmCYSy.png", "https://imagizer.imageshack.com/img922/7184/zsAk82.png"]
	},
	{
		"label" : "Secret Calculator",
		"App_ID" : 7,
		"Shield_ID" : [2, 4],
		"Shield_Name" : ["Dangerous Behavior", "Cyberbullying"],
		"Shield_Icon" : ["https://imagizer.imageshack.com/img922/4586/FJpyql.png", "https://imagizer.imageshack.com/img922/7184/zsAk82.png"]
	},
	{
		"label" : "Skout",
		"App_ID" : 39,
		"Shield_ID" : [1, 3, 4],
		"Shield_Name" : ["Predator Risk", "Violent Content", "Cyberbullying"],
		"Shield_Icon" : ["https://imagizer.imageshack.com/img921/8898/PyRetH.png", "https://imagizer.imageshack.com/img923/3872/QmCYSy.png", "https://imagizer.imageshack.com/img922/7184/zsAk82.png"]
	},
	{
		"label" : "Snapchat",
		"App_ID" : 1,
		"Shield_ID" : [1, 3],
		"Shield_Name" : ["Predator Risk", "Violent Content"],
		"Shield_Icon" : ["https://imagizer.imageshack.com/img921/8898/PyRetH.png", "https://imagizer.imageshack.com/img923/3872/QmCYSy.png"]
	},
	{
		"label" : "Tellonym",
		"App_ID" : 28,
		"Shield_ID" : [1, 2, 4, 5],
		"Shield_Name" : ["Predator Risk", "Dangerous Behavior", "Cyberbullying", "Sexual Content"],
		"Shield_Icon" : ["https://imagizer.imageshack.com/img921/8898/PyRetH.png", "https://imagizer.imageshack.com/img922/4586/FJpyql.png", "https://imagizer.imageshack.com/img922/7184/zsAk82.png", "https://imagizer.imageshack.com/img921/1830/Jad3lH.png"]
	},
	{
		"label" : "TikTok",
		"App_ID" : 18,
		"Shield_ID" : [1, 2, 3],
		"Shield_Name" : ["Predator Risk", "Dangerous Behavior", "Violent Content"],
		"Shield_Icon" : ["https://imagizer.imageshack.com/img921/8898/PyRetH.png", "https://imagizer.imageshack.com/img922/4586/FJpyql.png", "https://imagizer.imageshack.com/img923/3872/QmCYSy.png"]
	},
	{
		"label" : "Tinder",
		"App_ID" : 32,
		"Shield_ID" : [1, 2, 3, 4, 5],
		"Shield_Name" : ["Predator Risk", "Dangerous Behavior", "Violent Content", "Cyberbullying", "Sexual Content"],
		"Shield_Icon" : ["https://imagizer.imageshack.com/img921/8898/PyRetH.png", "https://imagizer.imageshack.com/img922/4586/FJpyql.png", "https://imagizer.imageshack.com/img923/3872/QmCYSy.png", "https://imagizer.imageshack.com/img922/7184/zsAk82.png", "https://imagizer.imageshack.com/img921/1830/Jad3lH.png"]
	},
	{
		"label" : "Tumblr",
		"App_ID" : 35,
		"Shield_ID" : [1, 2, 3],
		"Shield_Name" : ["Predator Risk", "Dangerous Behavior", "Violent Content"],
		"Shield_Icon" : ["https://imagizer.imageshack.com/img921/8898/PyRetH.png", "https://imagizer.imageshack.com/img922/4586/FJpyql.png", "https://imagizer.imageshack.com/img923/3872/QmCYSy.png"]
	},
	{
		"label" : "Twitch",
		"App_ID" : 23,
		"Shield_ID" : [1, 3],
		"Shield_Name" : ["Predator Risk", "Violent Content"],
		"Shield_Icon" : ["https://imagizer.imageshack.com/img921/8898/PyRetH.png", "https://imagizer.imageshack.com/img923/3872/QmCYSy.png"]
	},
	{
		"label" : "Voxer",
		"App_ID" : 33,
		"Shield_ID" : [1, 2, 4],
		"Shield_Name" : ["Predator Risk", "Dangerous Behavior", "Cyberbullying"],
		"Shield_Icon" : ["https://imagizer.imageshack.com/img921/8898/PyRetH.png", "https://imagizer.imageshack.com/img922/4586/FJpyql.png", "https://imagizer.imageshack.com/img922/7184/zsAk82.png"]
	},
	{
		"label" : "VSCO",
		"App_ID" : 34,
		"Shield_ID" : [1, 2, 3, 4],
		"Shield_Name" : ["Predator Risk", "Dangerous Behavior", "Violent Content", "Cyberbullying"],
		"Shield_Icon" : ["https://imagizer.imageshack.com/img921/8898/PyRetH.png", "https://imagizer.imageshack.com/img922/4586/FJpyql.png", "https://imagizer.imageshack.com/img923/3872/QmCYSy.png", "https://imagizer.imageshack.com/img922/7184/zsAk82.png"]
	},
	{
		"label" : "WhatsApp",
		"App_ID" : 29,
		"Shield_ID" : [3, 4, 5],
		"Shield_Name" : ["Violent Content", "Cyberbullying", "Sexual Content"],
		"Shield_Icon" : ["https://imagizer.imageshack.com/img923/3872/QmCYSy.png", "https://imagizer.imageshack.com/img922/7184/zsAk82.png", "https://imagizer.imageshack.com/img921/1830/Jad3lH.png"]
	},
	{
		"label" : "Whisper",
		"App_ID" : 9,
		"Shield_ID" : [1, 2, 3, 4, 5],
		"Shield_Name" : ["Predator Risk", "Dangerous Behavior", "Violent Content", "Cyberbullying", "Sexual Content"],
		"Shield_Icon" : ["https://imagizer.imageshack.com/img921/8898/PyRetH.png", "https://imagizer.imageshack.com/img922/4586/FJpyql.png", "https://imagizer.imageshack.com/img923/3872/QmCYSy.png", "https://imagizer.imageshack.com/img922/7184/zsAk82.png", "https://imagizer.imageshack.com/img921/1830/Jad3lH.png"]
	},
	{
		"label" : "YouNow",
		"App_ID" : 20,
		"Shield_ID" : [4, 5],
		"Shield_Name" : ["Cyberbullying", "Sexual Content"],
		"Shield_Icon" : ["https://imagizer.imageshack.com/img922/7184/zsAk82.png", "https://imagizer.imageshack.com/img921/1830/Jad3lH.png"]
	},
	{
		"label" : "YouTube",
		"App_ID" : 31,
		"Shield_ID" : [1, 4],
		"Shield_Name" : ["Predator Risk", "Cyberbullying"],
		"Shield_Icon" : ["https://imagizer.imageshack.com/img921/8898/PyRetH.png", "https://imagizer.imageshack.com/img922/7184/zsAk82.png"]
	},
	{
		"label" : "Yubo",
		"App_ID" : 3,
		"Shield_ID" : [1, 3, 5],
		"Shield_Name" : ["Predator Risk", "Violent Content", "Sexual Content"],
		"Shield_Icon" : ["https://imagizer.imageshack.com/img921/8898/PyRetH.png", "https://imagizer.imageshack.com/img923/3872/QmCYSy.png", "https://imagizer.imageshack.com/img921/1830/Jad3lH.png"]
	},
	{
		"label" : "ZEPETO",
		"App_ID" : 25,
		"Shield_ID" : [1, 2, 4, 5],
		"Shield_Name" : ["Predator Risk", "Dangerous Behavior", "Cyberbullying", "Sexual Content"],
		"Shield_Icon" : ["https://imagizer.imageshack.com/img921/8898/PyRetH.png", "https://imagizer.imageshack.com/img922/4586/FJpyql.png", "https://imagizer.imageshack.com/img922/7184/zsAk82.png", "https://imagizer.imageshack.com/img921/1830/Jad3lH.png"]
	}
];

module.exports = sampleData;
