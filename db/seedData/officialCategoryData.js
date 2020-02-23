const officialCategoryData =
    [
        { 'label': '6000', 'name': 'Business', 'platform': 'ios', 'categoryId': null},
        { 'label': '6001', 'name': 'Weather', 'platform': 'ios', 'categoryId': null},
        { 'label': '6002', 'name': 'Utilities', 'platform': 'ios', 'categoryId': 3},
        { 'label': '6003', 'name': 'Travel', 'platform': 'ios', 'categoryId': 3},
        { 'label': '6004', 'name': 'Sports', 'platform': 'ios', 'categoryId': 4},
        { 'label': '6005', 'name': 'Social Networking', 'platform': 'ios', 'categoryId': 1},
        { 'label': '6006', 'name': 'Reference', 'platform': 'ios', 'categoryId': null},
        { 'label': '6007', 'name': 'Productivity', 'platform': 'ios', 'categoryId': null},
        { 'label': '6008', 'name': 'Photo & Video', 'platform': 'ios', 'categoryId': 2},
        { 'label': '6009', 'name': 'News', 'platform': 'ios', 'categoryId': null},
        { 'label': '6010', 'name': 'Navigation', 'platform': 'ios', 'categoryId': null},
        { 'label': '6011', 'name': 'Music', 'platform': 'ios', 'categoryId': 4},
        { 'label': '6012', 'name': 'Lifestyle', 'platform': 'ios', 'categoryId': 3},
        { 'label': '6013', 'name': 'Health & Fitness', 'platform': 'ios', 'categoryId': 3},
        { 'label': '6014', 'name': 'Games', 'platform': 'ios', 'categoryId': 5},
        { 'label': '6015', 'name': 'Finance', 'platform': 'ios', 'categoryId': 3},
        { 'label': '6016', 'name': 'Entertainment', 'platform': 'ios', 'categoryId': 4},
        { 'label': '6017', 'name': 'Education', 'platform': 'ios', 'categoryId': null},
        { 'label': '6018', 'name': 'Book', 'platform': 'ios', 'categoryId': 4},
        { 'label': '6020', 'name': 'Medical', 'platform': 'ios', 'categoryId': null},
        { 'label': '6021', 'name': 'Newsstand', 'platform': 'ios', 'categoryId': null},
        { 'label': '6022', 'name': 'Catalogs', 'platform': 'ios', 'categoryId': 3},
        { 'label': '6023', 'name': 'Food & Drink', 'platform': 'ios', 'categoryId': 3},
        { 'label': '6024', 'name': 'Shopping', 'platform': 'ios', 'categoryId': 3},
        { 'label': '6025', 'name': 'Stickers', 'platform': 'ios', 'categoryId': null},
        { 'label': 'GAME', 'name': 'All games', 'platform': 'android', 'categoryId': 5},
        { 'label': 'ART_AND_DESIGN', 'name': 'Art & Design', 'platform': 'android', 'categoryId': null},
        { 'label': 'AUTO_AND_VEHICLES', 'name': 'Auto & Vehicles', 'platform': 'android', 'categoryId': null},
        { 'label': 'BEAUTY', 'name': 'Beauty', 'platform': 'android', 'categoryId': 3},
        { 'label': 'BOOKS_AND_REFERENCE', 'name': 'Books & Reference', 'platform': 'android', 'categoryId': 4},
        { 'label': 'BUSINESS', 'name': 'Business', 'platform': 'android', 'categoryId': null},
        { 'label': 'COMICS', 'name': 'Comics', 'platform': 'android', 'categoryId': 4},
        { 'label': 'COMMUNICATION', 'name': 'Communication', 'platform': 'android', 'categoryId': null},
        { 'label': 'DATING', 'name': 'Dating', 'platform': 'android', 'categoryId': 3},
        { 'label': 'EDUCATION', 'name': 'Education', 'platform': 'android', 'categoryId': null},
        { 'label': 'ENTERTAINMENT', 'name': 'Entertainment', 'platform': 'android', 'categoryId': 4},
        { 'label': 'EVENTS', 'name': 'Events', 'platform': 'android', 'categoryId': 3},
        { 'label': 'FINANCE', 'name': 'Finance', 'platform': 'android', 'categoryId': null},
        { 'label': 'FOOD_AND_DRINK', 'name': 'Food & Drink', 'platform': 'android', 'categoryId': 3},
        { 'label': 'HEALTH_AND_FITNESS', 'name': 'Health & Fitness', 'platform': 'android', 'categoryId': 3},
        { 'label': 'HOUSE_AND_HOME', 'name': 'House & Home', 'platform': 'android', 'categoryId': 3},
        { 'label': 'LIFESTYLE', 'name': 'Lifestyle', 'platform': 'android', 'categoryId': 3},
        { 'label': 'MAPS_AND_NAVIGATION', 'name': 'Maps & Navigation', 'platform': 'android', 'categoryId': null},
        { 'label': 'MEDICAL', 'name': 'Medical', 'platform': 'android', 'categoryId': null},
        { 'label': 'MUSIC_AND_AUDIO', 'name': 'Music & Audio', 'platform': 'android', 'categoryId': 4},
        { 'label': 'NEWS_AND_MAGAZINES', 'name': 'News & Magazines', 'platform': 'android', 'categoryId': null},
        { 'label': 'PARENTING', 'name': 'Parenting', 'platform': 'android', 'categoryId': 3},
        { 'label': 'PERSONALIZATION', 'name': 'Personalization', 'platform': 'android', 'categoryId': null},
        { 'label': 'PHOTOGRAPHY', 'name': 'Photography', 'platform': 'android', 'categoryId': 2},
        { 'label': 'PRODUCTIVITY', 'name': 'Productivity', 'platform': 'android', 'categoryId': null},
        { 'label': 'SHOPPING', 'name': 'Shopping', 'platform': 'android', 'categoryId': 3},
        { 'label': 'SOCIAL', 'name': 'Social', 'platform': 'android', 'categoryId': 1},
        { 'label': 'SPORTS', 'name': 'Sports', 'platform': 'android', 'categoryId': 4},
        { 'label': 'TOOLS', 'name': 'Tools', 'platform': 'android', 'categoryId': null},
        { 'label': 'TRAVEL_AND_LOCAL', 'name': 'Travel & Local', 'platform': 'android', 'categoryId': 3},
        { 'label': 'VIDEO_PLAYERS', 'name': 'Video Players & Editors', 'platform': 'android', 'categoryId': 5},
        { 'label': 'WEATHER', 'name': 'Weather', 'platform': 'android', 'categoryId': null},
        { 'label': 'LIBRARIES_AND_DEMO', 'name': 'Libraries & Demo', 'platform': 'android', 'categoryId': null},
        { 'label': 'ANDROID_WEAR', 'name': 'Android Wear', 'platform': 'android', 'categoryId': null}
    ];

module.exports = officialCategoryData;