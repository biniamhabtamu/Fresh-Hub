// src/data/sampleQuestions.
import { Question } from '../types';

// Structure your questions by subject, year, and chapter
// Use this format for easy organization:
// //subject-year-chapter-[question number]
// Example: //geography-2013-1-1 (Geography, 2013, Chapter 1, Question 1)

export const sampleQuestions: Question[] = [
  // ==================== GEOGRAPHY QUESTIONS ====================
  
{
    id: 'Sam-2015-1-1',
    question: 'In which year did the Battle of Adwa occur?',
    options: ['1896', '1905', '1889', '1911'],
    correctAnswer: 0,
    explanation: 'The Battle of Adwa, where Ethiopia defeated Italy, occurred on March 1, 1896.',
    subject: 'Sample',
    year: 2015,
    chapter: 1
  },



  //geography-2013-1-1

  {
    id: 'geo-2013-1-1',
    question: 'What is the scientific study of the Earth, exploring physical, biological, and human elements across places and time?',
    options: ['Biology', 'Geography', 'Astronomy', 'Ecology'],
    correctAnswer: 1,
    explanation: 'Geography studies the Earth’s physical, biological, and human elements, and their spatial and temporal variations.',
    subject: 'geography',
    year: 2013,
    chapter: 1
  },
  {
    id: 'geo-2013-1-2',
    question: 'Which two main approaches do geographers use to study the Earth?',
    options: ['Qualitative and Quantitative Geography', 'Topical (Systematic) and Regional Geography', 'Historical and Cultural Geography', 'Physical and Human Geography'],
    correctAnswer: 1,
    explanation: 'Geographers use Topical (Systematic) Geography, focusing on categories of phenomena, and Regional Geography, focusing on relationships within regions.',
    subject: 'geography',
    year: 2013,
    chapter: 1
  },
  {
    id: 'geo-2013-1-3',
    question: 'Which of the following is NOT one of the five core themes of geography?',
    options: ['Location', 'Movement', 'Economics', 'Region'],
    correctAnswer: 2,
    explanation: 'The five core themes are Location, Place, Human-Environment Interaction, Movement, and Region. Economics is not one of them.',
    subject: 'geography',
    year: 2013,
    chapter: 1
  },
  {
    id: 'geo-2013-1-4',
    question: 'What is "absolute location"?',
    options: ['A place’s position relative to other places', 'A place’s exact position using coordinates', 'A general area of a region', 'A place’s cultural characteristics'],
    correctAnswer: 1,
    explanation: 'Absolute location uses precise coordinates like latitude and longitude to specify a place’s exact position.',
    subject: 'geography',
    year: 2013,
    chapter: 1
  },
  {
    id: 'geo-2013-1-5',
    question: 'Which countries are part of the Horn of Africa?',
    options: ['Djibouti, Eritrea, Ethiopia, Somalia', 'Kenya, Sudan, South Sudan, Ethiopia', 'Somalia, Kenya, Tanzania, Ethiopia', 'Eritrea, Sudan, Egypt, Djibouti'],
    correctAnswer: 0,
    explanation: 'The Horn of Africa includes Djibouti, Eritrea, Ethiopia, and Somalia.',
    subject: 'geography',
    year: 2013,
    chapter: 1
  },
  {
    id: 'geo-2013-1-6',
    question: 'Ethiopia is located between which latitudes?',
    options: ['0°N and 10°N', '3°N and 15°N', '20°N and 30°N', '10°S and 5°N'],
    correctAnswer: 1,
    explanation: 'Ethiopia lies between 3°N and 15°N latitude.',
    subject: 'geography',
    year: 2013,
    chapter: 1
  },
  {
    id: 'geo-2013-1-7',
    question: 'What impact does Ethiopia’s latitude have on its climate?',
    options: ['It has a polar climate', 'It has a tropical climate modified by altitude', 'It has a desert climate', 'It has a Mediterranean climate'],
    correctAnswer: 1,
    explanation: 'Ethiopia’s position between the Equator and Tropic of Cancer results in a tropical climate, but high altitude significantly modifies it.',
    subject: 'geography',
    year: 2013,
    chapter: 1
  },
  {
    id: 'geo-2013-1-8',
    question: 'Which neighboring country borders Ethiopia to the north?',
    options: ['Djibouti', 'Eritrea', 'Kenya', 'Somalia'],
    correctAnswer: 1,
    explanation: 'Eritrea borders Ethiopia to the north.',
    subject: 'geography',
    year: 2013,
    chapter: 1
  },
  {
    id: 'geo-2013-1-9',
    question: 'What is a formal region?',
    options: ['An area defined by a uniform characteristic like climate or language', 'An area organized around a central node', 'An area without distinct boundaries', 'An area characterized by its population density'],
    correctAnswer: 0,
    explanation: 'Formal regions have shared uniform characteristics such as climate or government.',
    subject: 'geography',
    year: 2013,
    chapter: 1
  },
  {
    id: 'geo-2013-1-10',
    question: 'Ethiopia is the _____ largest country in Africa by area.',
    options: ['5th', '8th', '12th', '15th'],
    correctAnswer: 1,
    explanation: 'Ethiopia is the 8th largest country in Africa with about 1,106,000 sq km.',
    subject: 'geography',
    year: 2013,
    chapter: 1
  },
  {
    id: 'geo-2013-1-11',
    question: 'Which of the following is a disadvantage of Ethiopia’s large size?',
    options: ['Diverse agro-ecological zones', 'Infrastructure costs', 'Abundant natural resources', 'Larger population'],
    correctAnswer: 1,
    explanation: 'Large size increases infrastructure development costs and complicates administration.',
    subject: 'geography',
    year: 2013,
    chapter: 1
  },
  {
    id: 'geo-2013-1-12',
    question: 'What is meant by "compact shape" in countries?',
    options: ['A country with long, narrow borders', 'A country where the distance from center to borders is relatively uniform', 'A country fragmented by other territories', 'A country with many islands'],
    correctAnswer: 1,
    explanation: 'A compact shape means distances from the center to the edges are fairly equal, easing administration and defense.',
    subject: 'geography',
    year: 2013,
    chapter: 1
  },
  {
    id: 'geo-2013-1-13',
    question: 'What does the Area-Boundary Ratio (A/B Ratio) measure?',
    options: ['The ratio of population to land area', 'The compactness of a country’s shape', 'The economic output per square km', 'The climate variation within a country'],
    correctAnswer: 1,
    explanation: 'The A/B ratio measures how compact a country is by comparing area to boundary length.',
    subject: 'geography',
    year: 2013,
    chapter: 1
  },
  {
    id: 'geo-2013-1-14',
    question: 'What is the primary function of the north arrow on a map?',
    options: ['Shows the scale', 'Indicates the direction of north', 'Explains the map symbols', 'Displays the date of compilation'],
    correctAnswer: 1,
    explanation: 'The north arrow helps users orient themselves by indicating where north is on the map.',
    subject: 'geography',
    year: 2013,
    chapter: 1
  },
  {
    id: 'geo-2013-1-15',
    question: 'Which theme of geography studies the movement of people, goods, and ideas?',
    options: ['Place', 'Region', 'Movement', 'Location'],
    correctAnswer: 2,
    explanation: 'Movement examines how humans and things move across the Earth.',
    subject: 'geography',
    year: 2013,
    chapter: 1
  },
  {
    id: 'geo-2013-1-16',
    question: 'Which country is the smallest in the Horn of Africa?',
    options: ['Ethiopia', 'Somalia', 'Djibouti', 'Eritrea'],
    correctAnswer: 2,
    explanation: 'Djibouti is the smallest country in the Horn of Africa.',
    subject: 'geography',
    year: 2013,
    chapter: 1
  },
  {
    id: 'geo-2013-1-17',
    question: 'Which of the following is NOT one of the three aspects of human-environment interaction?',
    options: ['Dependency', 'Adaptation', 'Migration', 'Modification'],
    correctAnswer: 2,
    explanation: 'Migration is related to movement, not directly an aspect of human-environment interaction.',
    subject: 'geography',
    year: 2013,
    chapter: 1
  },
  {
    id: 'geo-2013-1-18',
    question: 'What is relative location?',
    options: ['Exact coordinates of a place', 'A place’s location described by its relation to other places', 'A place’s cultural features', 'A place’s climate zone'],
    correctAnswer: 1,
    explanation: 'Relative location describes where a place is compared to other places.',
    subject: 'geography',
    year: 2013,
    chapter: 1
  },
  {
    id: 'geo-2013-1-19',
    question: 'Why does Ethiopia use a single time zone despite its wide longitudinal range?',
    options: ['Because it has a compact shape', 'For administrative convenience', 'Because it lies close to the equator', 'Because of its small size'],
    correctAnswer: 1,
    explanation: 'Ethiopia uses GMT+3 throughout for convenience, despite a one-hour difference across the country.',
    subject: 'geography',
    year: 2013,
    chapter: 1
  },
  {
    id: 'geo-2013-1-20',
    question: 'Which key element on a map explains what the symbols and colors mean?',
    options: ['Scale', 'Title', 'Key (Legend)', 'Margin'],
    correctAnswer: 2,
    explanation: 'The key or legend interprets map symbols and colors.',
    subject: 'geography',
    year: 2013,
    chapter: 1
  },
  {
    id: 'geo-2013-1-21',
    question: 'Which body of water lies near Ethiopia influencing its climate and trade?',
    options: ['Atlantic Ocean', 'Red Sea', 'Indian Ocean', 'Mediterranean Sea'],
    correctAnswer: 1,
    explanation: 'The Red Sea near Ethiopia has strategic importance for trade and climate.',
    subject: 'geography',
    year: 2013,
    chapter: 1
  },
  {
    id: 'geo-2013-1-22',
    question: 'What is functional (noddal) region?',
    options: ['Region with uniform physical characteristics', 'Region centered around a node with linked areas', 'Region defined by cultural similarities', 'Region with political boundaries'],
    correctAnswer: 1,
    explanation: 'Functional regions are organized around a central node like a city with connected suburbs.',
    subject: 'geography',
    year: 2013,
    chapter: 1
  },
  {
    id: 'geo-2013-1-23',
    question: 'Which of these is NOT a key element of map reading?',
    options: ['Title', 'Scale', 'Compass', 'Legend', 'Population density'],
    correctAnswer: 4,
    explanation: 'Population density is data, not a key map element.',
    subject: 'geography',
    year: 2013,
    chapter: 1
  },
  {
    id: 'geo-2013-1-24',
    question: 'Which of the following is an advantage of Ethiopia’s large size?',
    options: ['Difficult administration', 'Higher infrastructure costs', 'Diverse agro-ecological zones', 'Security concerns'],
    correctAnswer: 2,
    explanation: 'Large size supports diverse climates and ecosystems suitable for various agriculture.',
    subject: 'geography',
    year: 2013,
    chapter: 1
  },
  {
    id: 'geo-2013-1-25',
    question: 'Which part of the world is Ethiopia located?',
    options: ['Horn of Africa', 'Maghreb', 'Southern Africa', 'West Africa'],
    correctAnswer: 0,
    explanation: 'Ethiopia is in the Horn of Africa.',
    subject: 'geography',
    year: 2013,
    chapter: 1
  },
  {
    id: 'geo-2013-1-26',
    question: 'How does Ethiopia’s compact shape affect its defense?',
    options: ['Makes defense harder', 'Has no effect', 'Eases rapid military deployment', 'Requires larger army'],
    correctAnswer: 2,
    explanation: 'Compact shape allows quicker deployment of defense forces to borders.',
    subject: 'geography',
    year: 2013,
    chapter: 1
  },
  {
    id: 'geo-2013-1-27',
    question: 'Which of these is a disadvantage of Ethiopia’s large size?',
    options: ['Abundant natural resources', 'Large workforce', 'Security concerns', 'Diverse climates'],
    correctAnswer: 2,
    explanation: 'Large borders require more security resources to defend.',
    subject: 'geography',
    year: 2013,
    chapter: 1
  },
  {
    id: 'geo-2013-1-28',
    question: 'Which core theme of geography describes a place’s physical and human characteristics?',
    options: ['Location', 'Place', 'Region', 'Movement'],
    correctAnswer: 1,
    explanation: 'Place focuses on a location’s unique physical and cultural traits.',
    subject: 'geography',
    year: 2013,
    chapter: 1
  },
  {
    id: 'geo-2013-1-29',
    question: 'The boundary-circumference ratio closer to 1 indicates what about a country’s shape?',
    options: ['Irregular shape', 'Compact shape', 'Fragmented shape', 'Elongated shape'],
    correctAnswer: 1,
    explanation: 'A ratio closer to 1 indicates the country has a compact, more regular shape.',
    subject: 'geography',
    year: 2013,
    chapter: 1
  },
  {
    id: 'geo-2013-1-30',
    question: 'Which of the following is a benefit of a compact shaped country?',
    options: ['More border disputes', 'Higher defense costs', 'Easier communication and administration', 'Difficult to unify culturally'],
    correctAnswer: 2,
    explanation: 'Compact shape reduces distances, easing communication and governance.',
    subject: 'geography',
    year: 2013,
    chapter: 1
  },
  {
    id: 'geo-2013-1-31',
    question: 'Which of the following describes Ethiopia’s general time zone?',
    options: ['GMT +2', 'GMT +3', 'GMT +4', 'GMT +1'],
    correctAnswer: 1,
    explanation: 'Ethiopia uses GMT +3 despite its longitudinal range.',
    subject: 'geography',
    year: 2013,
    chapter: 1
  },
  {
    id: 'geo-2013-1-32',
    question: 'Which is NOT a characteristic of the Horn of Africa region?',
    options: ['Includes Ethiopia and Somalia', 'Located in East Africa', 'Part of the Sahara Desert', 'Strategic location near Red Sea'],
    correctAnswer: 2,
    explanation: 'The Sahara Desert is in North Africa, not the Horn of Africa.',
    subject: 'geography',
    year: 2013,
    chapter: 1
  },
  {
    id: 'geo-2013-1-33',
    question: 'What map element helps measure distance between locations?',
    options: ['Title', 'Scale', 'Key', 'Compass Rose'],
    correctAnswer: 1,
    explanation: 'Scale helps translate map distances into real-world distances.',
    subject: 'geography',
    year: 2013,
    chapter: 1
  },
  {
    id: 'geo-2013-1-34',
    question: 'The spatial interaction of people and places is studied under which geographic theme?',
    options: ['Location', 'Movement', 'Place', 'Region'],
    correctAnswer: 1,
    explanation: 'Movement theme studies flows of people, goods, and ideas between places.',
    subject: 'geography',
    year: 2013,
    chapter: 1
  },
  {
    id: 'geo-2013-1-35',
    question: 'Ethiopia’s diverse agro-ecological zones are an example of which geographic theme?',
    options: ['Region', 'Place', 'Human-Environment Interaction', 'Movement'],
    correctAnswer: 2,
    explanation: 'Human-Environment Interaction studies how humans adapt to and modify their environment.',
    subject: 'geography',
    year: 2013,
    chapter: 1
  }
,
 {
    id: 'geo-2014-1-1',
    question: 'What is the primary focus of geography as described in the note?',
    options: [
      'Memorizing countries and capitals',
      "Scientific study of Earth's physical, biological, and human elements",
      'Only studying mountains and rivers',
      'Exploring outer space'
    ],
    correctAnswer: 1,
    explanation: "Geography is the scientific study of the Earth, analyzing relationships between physical, biological, and human elements across places and time. 🌍 ጂኦግራፊ የምድርን አካላዊ፣ ባዮሎጂያዊ እና ሰብአዊ ክስተቶችን በቦታ እና በጊዜ ውስጥ የሚያጠና ሳይንስ ነው። 😊",
    subject: 'geography',
    year: 2014,
    chapter: 1
  },
  {
    id: 'geo-2014-1-2',
    question: "Which approach in geography focuses on specific categories like all the world's mountains?",
    options: [
      'Regional Geography',
      'Topical (Systematic) Geography',
      'Human Geography',
      'Biological Geography'
    ],
    correctAnswer: 1,
    explanation: 'Topical Geography studies specific physical or human phenomena across the Earth, such as global mountain patterns. 🏔️ ቶፒካል ጂኦግራፊ የተወሰኑ አካላዊ ወይም ሰብአዊ ክስተቶችን በአለም አቀፍ ደረጃ ያጠናል፣ ለምሳሌ የአለም ተራራዎች። 😎',
    subject: 'geography',
    year: 2014,
    chapter: 1
  },
  {
    id: 'geo-2014-1-3',
    question: 'What is the scope of geography primarily concerned with?',
    options: [
      'Only the atmosphere',
      'The thin habitable zone where atmosphere, lithosphere, hydrosphere, and biosphere interact',
      'Deep ocean exploration',
      'Space beyond Earth'
    ],
    correctAnswer: 1,
    explanation: 'The scope is the Earth\'s surface, a thin zone of interaction between atmosphere, lithosphere, hydrosphere, and biosphere. 🌏 የጂኦግራፊ ወሰን የምድር ገጽታ ሲሆን፣ ይህም ከባቢ አየር፣ ድንጋይ ንጣፍ፣ ውሃ አካል እና ባዮስፌር መስተጋብር የሚፈጠርበት ቀጭን ዞን ነው። 🌟',
    subject: 'geography',
    year: 2014,
    chapter: 1
  },
  {
    id: 'geo-2014-1-4',
    question: "In the five core themes, what does 'Location' refer to?",
    options: [
      'Unique characteristics of a place',
      'Specific place or position, described absolutely or relatively',
      'Movement of people and goods',
      'Human changes to the environment'
    ],
    correctAnswer: 1,
    explanation: 'Location is a specific place, using absolute (coordinates) or relative (in relation to others) descriptions. 📍 ቦታ የተወሰነ ስፍራ ወይም አቀማመጥን ያመለክታል፣ በፍጹም (መጋጠሚያ) ወይም በአንፃራዊ (ከሌሎች ጋር በማነጻጸር) መንገድ ይገለጻል። 😊',
    subject: 'geography',
    year: 2014,
    chapter: 1
  },
  {
    id: 'geo-2014-1-5',
    question: 'What is an example of absolute location given for Addis Ababa?',
    options: [
      'East of Sudan',
      'Approximately 9.03° N latitude and 38.74° E longitude',
      'In the Horn of Africa',
      'Near the equator'
    ],
    correctAnswer: 1,
    explanation: 'Absolute location uses precise coordinates like latitude and longitude for exact positioning. 🌐 አብሶሉት ቦታ ትክክለኛ መጋጠሚያዎችን እንደ ኬክሮስ እና ኬንትሮስ ይጠቀማል። 📏',
    subject: 'geography',
    year: 2014,
    chapter: 1
  },
  {
    id: 'geo-2014-1-6',
    question: 'Which theme explores the unique physical and human characteristics of a location?',
    options: ['Movement', 'Region', 'Place', 'Human-Environment Interaction'],
    correctAnswer: 2,
    explanation: 'Place refers to a location\'s identity shaped by landforms, culture, and more. 🏙️ ስፍራ የአንድ ቦታ አካላዊና ሰብአዊ ገጽታዎችን ያመለክታል፣ በምድሩ አቀማመጥ እና ባህል ይገለጻል። 🌿',
    subject: 'geography',
    year: 2014,
    chapter: 1
  },
  {
    id: 'geo-2014-1-7',
    question: "In Human-Environment Interaction, what does 'adaptation' mean?",
    options: [
      'Humans relying on nature for food',
      'Changing lifestyles to fit the environment, like wearing warm clothes in cold areas',
      'Building dams to modify the environment',
      'Moving goods across regions'
    ],
    correctAnswer: 1,
    explanation: 'Adaptation involves people adjusting behaviors to suit environmental conditions. 🤝 መላመድ አኗኗራችንን ለአካባቢው መቀየርን ያመለክታል፣ ለምሳሌ በቀዝቃዛ አካባቢ ሞቅ ያለ ልብስ መልበስ። ❄️',
    subject: 'geography',
    year: 2014,
    chapter: 1
  },
  {
    id: 'geo-2014-1-8',
    question: "What does the theme 'Movement' primarily involve?",
    options: [
      'Defining areas with uniform characteristics',
      'Translocation of people, goods, and ideas',
      'Interactions between humans and nature',
      'Precise coordinates of places'
    ],
    correctAnswer: 1,
    explanation: 'Movement covers how people, goods, and ideas move between locations, aiding civilization spread. ✈️ እንቅስቃሴ የሰዎች፣ እቃዎች እና ሃሳቦች ከአንዱ ቦታ ወደ ሌላው መጓዝን ያካትታል። 🌍',
    subject: 'geography',
    year: 2014,
    chapter: 1
  },
  {
    id: 'geo-2014-1-9',
    question: 'What is a formal region?',
    options: [
      'An area organized around a central node with connections',
      'A geographic area with distinctive characteristics setting it apart',
      'An area with shared uniform characteristics like a climate zone',
      'A place defined by human modifications'
    ],
    correctAnswer: 2,
    explanation: 'Formal regions have uniform traits, such as similar climate or government. 🌐 ፎርማል ክልል በአንድ አይነት ባህሪ የሚገለጽ አካባቢ ነው፣ ለምሳሌ የአየር ሁኔታ ዞን። 📊',
    subject: 'geography',
    year: 2014,
    chapter: 1
  },
  {
    id: 'geo-2014-1-10',
    question: 'Which countries are part of the Horn of Africa?',
    options: [
      'Ethiopia, Kenya, Sudan, South Sudan',
      'Djibouti, Eritrea, Ethiopia, Somalia',
      'Eritrea, Somalia, Sudan, Kenya',
      'Djibouti, Ethiopia, Kenya, Eritrea'
    ],
    correctAnswer: 1,
    explanation: 'The Horn of Africa includes Djibouti, Eritrea, Ethiopia, and Somalia, sharing cultural ties. 🌍 የአፍሪካ ቀንድ ጅቡቲ፣ ኤርትራ፣ ኢትዮጵያ እና ሶማሊያን ያቀፈ ነው። 😊',
    subject: 'geography',
    year: 2014,
    chapter: 1
  },
  {
    id: 'geo-2014-1-11',
    question: "What is Ethiopia's astronomical location in terms of latitude?",
    options: [
      '3°N to 15°N',
      '33°E to 48°E',
      '9°N to 38°E',
      '15°N to 33°E'
    ],
    correctAnswer: 0,
    explanation: 'Ethiopia lies between 3°N and 15°N latitudes, influencing its tropical climate. 📍 ኢትዮጵያ በ3°ሰ እና 15°ሰ ኬክሮስ መካከል ትገኛለች፣ ይህም የሐሩር አየር ንብረት እንዲኖራት ያደርጋል። ☀️',
    subject: 'geography',
    year: 2014,
    chapter: 1
  },
  {
    id: 'geo-2014-1-12',
    question: "How does Ethiopia's relative location affect its socio-cultural aspects?",
    options: [
      'It leads to isolation from religions',
      'Proximity to Middle East allowed early adoption of Christianity and Islam',
      'It causes extreme cold climates',
      'It blocks trade routes'
    ],
    correctAnswer: 1,
    explanation: 'Being near the Middle East facilitated the early spread of major religions to Ethiopia. 🤝 ከመካከለኛው ምስራቅ ጋር መቀራረቧ ክርስትና እና እስልምና ቀደም ብሎ እንዲደርሱ አድርጓል። 🕌',
    subject: 'geography',
    year: 2014,
    chapter: 1
  },
  {
    id: 'geo-2014-1-13',
    question: "What is Ethiopia's total area approximately?",
    options: [
      '500,000 square kilometers',
      '1,106,000 square kilometers',
      '2,000,000 square kilometers',
      '800,000 square kilometers'
    ],
    correctAnswer: 1,
    explanation: 'Ethiopia covers about 1,106,000 sq km, making it the 8th largest in Africa. 📏 ኢትዮጵያ ወደ 1,106,000 ካሬ ኪሎሜትር ያህል ቦታ አለዋት። 🌍',
    subject: 'geography',
    year: 2014,
    chapter: 1
  },
  {
    id: 'geo-2014-1-14',
    question: 'Which large water body borders Ethiopia to the east?',
    options: [
      'Atlantic Ocean',
      'Indian Ocean',
      'Red Sea',
      'Mediterranean Sea'
    ],
    correctAnswer: 2,
    explanation: 'The Red Sea lies to Ethiopia’s northeast, providing access to maritime routes. 🌊 ቀይ ባሕር ወደ ሰሜን-ምሥራቅ ኢትዮጵያ ይገኛል። 🚢',
    subject: 'geography',
    year: 2014,
    chapter: 1
  },
  {
    id: 'geo-2014-1-15',
    question: "What geographic feature is the 'Arabo-Ethiopian swell'?",
    options: [
      'A volcanic mountain',
      'A geologic uplift forming the Ethiopian Highlands',
      'A river system',
      'A desert area'
    ],
    correctAnswer: 1,
    explanation: 'The Arabo-Ethiopian swell is a geologic uplift shaping Ethiopia’s highlands. 🏞️ አራቦ-ኢትዮጵያ ስዊል የኢትዮጵያን ከፍተኛ ተራሮች የሚፈጥር ጂኦሎጂካል ከፍታ ነው። ⛰️',
    subject: 'geography',
    year: 2014,
    chapter: 1
  },
  {
    id: 'geo-2014-1-16',
    question: 'What is a key characteristic of the Ethiopian Highlands?',
    options: [
      'Low flat plains',
      'Elevated plateau with mountains and highlands',
      'Coastal beaches',
      'Desert dunes'
    ],
    correctAnswer: 1,
    explanation: 'Ethiopian Highlands consist of plateaus and mountain ranges with high elevation. 🏔️ ከፍተኛ ተራራዎችና እርስተ አካባቢ ያላቸው ከፍተኛ ተራራዎች ናቸው። 🌄',
    subject: 'geography',
    year: 2014,
    chapter: 1
  },
  {
    id: 'geo-2014-1-17',
    question: "What does 'Human-Environment Interaction' study?",
    options: [
      'Only human culture',
      'How humans adapt to, modify, and depend on their environment',
      'Movement of goods',
      'Location and place'
    ],
    correctAnswer: 1,
    explanation: 'It studies the relationships between humans and their physical environment. 🤝 ሰዎች እና አካባቢያቸው መሆናቸውን እና መቀየር እንዴት እንደሚያደርጉ ያጠናል። 🌳',
    subject: 'geography',
    year: 2014,
    chapter: 1
  },
  {
    id: 'geo-2014-1-18',
    question: 'Which theme involves the definition of an area with related features such as climate or culture?',
    options: [
      'Movement',
      'Region',
      'Place',
      'Location'
    ],
    correctAnswer: 1,
    explanation: 'Region groups places sharing common characteristics like climate or language. 🗺️ ክልል አካባቢ በተያያዘ ባህርይ የሚቆጠር ነው። 🌐',
    subject: 'geography',
    year: 2014,
    chapter: 1
  },
  {
    id: 'geo-2014-1-19',
    question: 'What kind of region is a metropolitan area organized around a central city?',
    options: [
      'Formal Region',
      'Functional Region',
      'Perceptual Region',
      'Topical Region'
    ],
    correctAnswer: 1,
    explanation: 'Functional regions are organized around a focal point with connections, like a metro area. 🏙️ ፈንክሻናል ክልል በአንድ ማዕከል ዙሪያ የተሰራ ነው። 🏢',
    subject: 'geography',
    year: 2014,
    chapter: 1
  },
  {
    id: 'geo-2014-1-20',
    question: "Which theme studies how humans depend on and modify their environment?",
    options: [
      'Place',
      'Location',
      'Human-Environment Interaction',
      'Movement'
    ],
    correctAnswer: 2,
    explanation: 'Human-Environment Interaction studies human impacts and adaptation to environment. 🌱 ሰዎች አካባቢያቸውን እንዴት እንደሚቀየሩና እንዴት እንደሚመርጡ ያካተታል። 🌎',
    subject: 'geography',
    year: 2014,
    chapter: 1
  },
  {
    id: 'geo-2014-1-21',
    question: 'What is an example of relative location?',
    options: [
      'Addis Ababa is at 9.03°N and 38.74°E',
      'Addis Ababa is east of Sudan',
      'Addis Ababa is in Africa',
      'Addis Ababa is the capital of Ethiopia'
    ],
    correctAnswer: 1,
    explanation: 'Relative location describes a place in relation to other places. 📌 በሌላ ቦታ እንደሚገኝ መግለጫ ነው። 🗺️',
    subject: 'geography',
    year: 2014,
    chapter: 1
  },
  {
    id: 'geo-2014-1-22',
    question: 'What does the theme "Region" help geographers to do?',
    options: [
      'Identify natural and human characteristics shared in an area',
      'Map exact coordinates',
      'Describe individual places uniquely',
      'Explain cultural beliefs'
    ],
    correctAnswer: 0,
    explanation: 'Region helps group areas with similar features to understand spatial patterns. 🌍 ክልል በአካባቢዎች ያሉትን አካላዊና ሰብአዊ ባህሪያት ለማወቅ ይረዳል። 📚',
    subject: 'geography',
    year: 2014,
    chapter: 1
  },
  {
    id: 'geo-2014-1-23',
    question: "Which of the following best illustrates 'Movement' as a geographic theme?",
    options: [
      'People migrating from rural to urban areas',
      'Describing a place’s climate',
      'Defining the borders of a country',
      'Studying a mountain range'
    ],
    correctAnswer: 0,
    explanation: 'Movement studies the flow of people, goods, and ideas from place to place. 🚶‍♂️ እንቅስቃሴ ሰዎች፣ እቃዎችና ሃሳቦች እንዴት እንደሚንቀሳቀሱ ያጠናል። 🌐',
    subject: 'geography',
    year: 2014,
    chapter: 1
  },
  {
    id: 'geo-2014-1-24',
    question: 'What is the relationship between latitude and climate in Ethiopia?',
    options: [
      'Latitude has no effect on climate',
      'Latitude affects the temperature and rainfall patterns',
      'Only longitude affects climate',
      'Climate depends solely on elevation'
    ],
    correctAnswer: 1,
    explanation: 'Latitude influences solar radiation, affecting temperature and precipitation. ☀️ ኬክሮስ ከፀሐይ እንደሚያገናኝ የአየር ንብረት እንዲቀየር ያደርጋል። 🌦️',
    subject: 'geography',
    year: 2014,
    chapter: 1
  },
  {
    id: 'geo-2014-1-25',
    question: 'Which natural feature is typical in Ethiopia’s topography?',
    options: [
      'Low desert plains',
      'High plateaus and volcanic mountains',
      'Coastal mangroves',
      'Large lakes with coral reefs'
    ],
    correctAnswer: 1,
    explanation: 'Ethiopia is famous for its elevated plateaus and volcanic mountains. ⛰️ ኢትዮጵያ ከፍተኛ ተራራዎችና ቫልካኒክ ተራራዎች አሉት። 🌋',
    subject: 'geography',
    year: 2014,
    chapter: 1
  },
  {
    id: 'geo-2014-1-26',
    question: 'How does the concept of "Place" differ from "Location"?',
    options: [
      'Place refers to specific coordinates, location refers to cultural traits',
      'Place includes the physical and human characteristics, location is about position',
      'They mean the same thing',
      'Location only describes cultural aspects'
    ],
    correctAnswer: 1,
    explanation: '"Place" includes characteristics giving a location its identity; "Location" is just position. 🏞️ ስፍራ ቦታን በባህልና አካላዊ ገጽታዎች ይገልጻል፤ ቦታ የአቀማመጥ መግለጫ ነው። 😊',
    subject: 'geography',
    year: 2014,
    chapter: 1
  },
  {
    id: 'geo-2014-1-27',
    question: "What role does culture play in defining a 'Place'?",
    options: [
      'No role',
      'Shapes the human characteristics, traditions, and identity of a place',
      'Only determines the geography',
      'Is irrelevant to place'
    ],
    correctAnswer: 1,
    explanation: 'Culture strongly shapes the human aspects that define a place’s uniqueness. 🏡 ባህል የሰብአዊ ገጽታዎችን ያወጣል እና ቦታውን የሚያስተዋወቀው ነው። 🌺',
    subject: 'geography',
    year: 2014,
    chapter: 1
  },
  {
    id: 'geo-2014-1-28',
    question: "Which of the following best describes the 'Hydrosphere'?",
    options: [
      'All the rocks and soil on Earth’s surface',
      'All the water on, under, and over the Earth',
      'The atmosphere and air around Earth',
      'Living organisms on Earth'
    ],
    correctAnswer: 1,
    explanation: 'Hydrosphere includes all water in oceans, rivers, lakes, and underground. 💧 ሕይወት ከፍተኛ ውሃ በምድር ላይ ያለውን ይጠቀማል። 🌊',
    subject: 'geography',
    year: 2014,
    chapter: 1
  },
  {
    id: 'geo-2014-1-29',
    question: "What does the 'Biosphere' refer to in geography?",
    options: [
      'The water bodies on Earth',
      'The layer of living organisms including humans, animals, and plants',
      'The air surrounding Earth',
      'The Earth’s crust'
    ],
    correctAnswer: 1,
    explanation: 'Biosphere is all living organisms on Earth. 🌱 ባዮስፌር ላይ ያሉ ሕይወት ሁሉንም ይጠቀማል። 🐾',
    subject: 'geography',
    year: 2014,
    chapter: 1
  },
  {
    id: 'geo-2014-1-30',
    question: 'How does geography help us understand human activities?',
    options: [
      'By ignoring environmental factors',
      'By studying spatial relationships and human-environment interaction',
      'Only by memorizing place names',
      'By focusing on astronomy'
    ],
    correctAnswer: 1,
    explanation: 'Geography studies how humans interact with space and environment, helping explain activities. 🌐 ጂኦግራፊ ሰዎችን እና አካባቢን በስፋት በማወቅ ያሳያል። 🧭',
    subject: 'geography',
    year: 2014,
    chapter: 1
  },
   {
    id: "geo-2015-1-1",
    question: "What is the primary focus of Geography?",
    options: [
      "A. Memorizing countries and capitals",
      "B. The scientific study of the Earth",
      "C. The history of human civilization",
      "D. The study of rocks and minerals"
    ],
    correctAnswer: 1,
    explanation: "Geography is defined as the scientific study of the Earth, exploring how physical, biological, and human elements vary across different places. It's much broader than just memorizing places. 🌍",
    subject: "geography",
    year: 2015,
    chapter: 1
  },
  {
    id: "geo-2015-1-2",
    question: "Which of the following is an example of an 'absolute location'?",
    options: [
      "A. The place is near the river.",
      "B. The place is in the Horn of Africa.",
      "C. The place is a country with a tropical climate.",
      "D. Addis Ababa is at approximately 9.03° N latitude and 38.74° E longitude."
    ],
    correctAnswer: 3,
    explanation: "Absolute location uses precise coordinates like latitude and longitude to pinpoint an exact position, unlike relative location which describes a place in relation to other places. 📍",
    subject: "geography",
    year: 2015,
    chapter: 1
  },
  {
    id: "geo-2015-1-3",
    question: "Which country is the largest in size within the Horn of Africa?",
    options: [
      "A. Djibouti",
      "B. Eritrea",
      "C. Somalia",
      "D. Ethiopia"
    ],
    correctAnswer: 3,
    explanation: "Among the four countries of the Horn of Africa (Djibouti, Eritrea, Ethiopia, and Somalia), Ethiopia is the largest in size. 🇪🇹",
    subject: "geography",
    year: 2015,
    chapter: 1
  },
  {
    id: "geo-2015-1-4",
    question: "What is the purpose of the 'Key' or 'Legend' on a map?",
    options: [
      "A. To show the North direction",
      "B. To explain the symbols and colors on the map",
      "C. To indicate the scale of the map",
      "D. To provide the title of the map"
    ],
    correctAnswer: 1,
    explanation: "The key or legend of a map is essential because it decodes the symbols and colors, helping you understand what they represent in the real world, like a blue line for a river. 🗺️",
    subject: "geography",
    year: 2015,
    chapter: 1
  },
  {
    id: "geo-2015-1-5",
    question: "What is the astronomical location of Ethiopia?",
    options: [
      "A. Between 3°S and 15°S latitudes",
      "B. Between 3°N and 15°N latitudes",
      "C. Between 33°W and 48°W longitudes",
      "D. Between the Atlantic and Indian Oceans"
    ],
    correctAnswer: 1,
    explanation: "Ethiopia's astronomical location is defined by its latitude and longitude. It lies between 3°N and 15°N latitudes and 33°E to 48°E longitudes. 🌍",
    subject: "geography",
    year: 2015,
    chapter: 1
  },
  {
    id: "geo-2015-1-6",
    question: "The theme of geography that focuses on the movement of people, goods, and ideas is called:",
    options: [
      "A. Place",
      "B. Location",
      "C. Movement",
      "D. Region"
    ],
    correctAnswer: 2,
    explanation: "Movement is one of the five core themes of geography and it specifically deals with the translocation of people, goods, and ideas from one place to another. This is crucial for understanding how societies have evolved and spread. ✈️ ማብራሪያ፡ የእንቅስቃሴ (Movement) ጽንሰ-ሀሳብ ከጂኦግራፊ አምስቱ ዋና ዋና ክፍሎች አንዱ ነው። ይህ ክፍል ሰዎች፣ እቃዎች እና ሃሳቦች ከአንድ ቦታ ወደ ሌላ ቦታ እንዴት እንደሚዘዋወሩ ያጠናል፤ ይህም ስልጣኔዎች እንዴት እንደተስፋፉ ለመረዳት በጣም አስፈላጊ ነው። ✈️",
    subject: "geography",
    year: 2015,
    chapter: 1
  },
  {
    id: "geo-2015-1-7",
    question: "Which approach to geography studies the interrelationships of various elements within a specific area, like the climate, culture, and economy of the Horn of Africa?",
    options: [
      "A. Topical (Systematic) Geography",
      "B. Human-Environment Interaction",
      "C. Regional Geography",
      "D. Physical Geography"
    ],
    correctAnswer: 2,
    explanation: "Regional geography focuses on studying the unique associations and interrelationships of various physical and human elements within a specific geographical region, treating it as a single, interconnected system. 🧐 ማብራሪያ: የአካባቢ ጂኦግራፊ (Regional Geography) የአንድን የተወሰነ አካባቢ አካላዊና ሰብአዊ ገጽታዎች በአንድነት እና እንዴት እንደሚገናኙ በማየት ያጠናል፡፡ ለምሳሌ የአፍሪካ ቀንድን የአየር ሁኔታ፣ ባህል እና ኢኮኖሚ አንድ ላይ አያይዞ ማጥናት የአካባቢ ጂኦግራፊ ምሳሌ ነው። 🧐",
    subject: "geography",
    year: 2015,
    chapter: 1
  },
  {
    id: "geo-2015-1-8",
    question: "How does Ethiopia's latitude location between the Equator and the Tropic of Cancer primarily affect its climate?",
    options: [
      "A. It causes the country to have a cold, temperate climate.",
      "B. It gives the country a tropical climate, though modified by altitude.",
      "C. It results in a dry, desert climate.",
      "D. It causes extreme seasonal changes."
    ],
    correctAnswer: 1,
    explanation: "Ethiopia's location in the tropical zone between 3°N and 15°N latitude means it naturally has a tropical climate. However, its high altitude significantly modifies this climate, making many parts cooler than a typical tropical country. ☀️ ማብራሪያ: ኢትዮጵያ በ3°ሰ እና በ15°ሰ ኬክሮስ መካከል የምትገኝ በመሆኗ፣ በመሰረቱ የሐሩር የአየር ንብረት አላት። ሆኖም፣ የሀገሪቱ ከፍተኛ ከፍታ ይህንን የአየር ንብረት ይለውጠዋል፣ ይህም አብዛኛው የሀገሪቱ ክፍል ከተለመደው ሐሩር ሀገር ይልቅ ቀዝቃዛ እንዲሆን ያደርገዋል። ☀️",
    subject: "geography",
    year: 2015,
    chapter: 1
  },
  {
    id: "geo-2015-1-9",
    question: "A high Area-Boundary (A/B) ratio for a country indicates which of the following?",
    options: [
      "A. The country is fragmented and difficult to manage.",
      "B. The country is elongated and has long borders.",
      "C. The country has a compact shape.",
      "D. The country is landlocked."
    ],
    correctAnswer: 2,
    explanation: "The Area-Boundary ratio is used to measure a country's compactness. A higher ratio means the country has a larger area relative to the length of its boundary, which indicates a more compact shape. Ethiopia's high ratio of 210.27 is an example of this. 📏 ማብራሪያ: የአካባቢ እና የድንበር (A/B) ጥምርታ የአንድ ሀገርን ቅርፅ ለመለካት ይጠቅማል። ይህ ጥምርታ ከፍ ባለ ቁጥር፣ ሀገሪቱ ለድንበሯ ርዝመት ከፍተኛ ቦታ አላት ማለት ነው፤ ይህም ቅርጿ ይበልጥ የተሰበሰበ (compact) መሆኑን ያሳያል። የኢትዮጵያ ጥምርታ 210.27 ሲሆን፣ ይህም ለዚህ ማብራሪያ ማሳያ ነው። 📏",
    subject: "geography",
    year: 2015,
    chapter: 1
  },
  {
    id: "geo-2015-1-10",
    question: "What is the primary implication of Ethiopia's compact shape for its administration and defense?",
    options: [
      "A. It makes it harder to defend its borders.",
      "B. It simplifies administration and border defense.",
      "C. It leads to socio-economic fragmentation.",
      "D. It makes the country more vulnerable to external threats."
    ],
    correctAnswer: 1,
    explanation: "A compact shape, where the distance from the center to the borders is relatively uniform, allows for quick deployment of military forces to any border. It also makes it easier for a central government to manage and enforce laws across the nation. 🛡️ ማብራሪያ: የኢትዮጵያ የተሰበሰበ (compact) ቅርፅ ከመሃል እስከ ዳር ያለው ርቀት እኩል እንዲሆን ያደርጋል። ይህም ወታደራዊ ኃይሎችን በፍጥነት ወደ ድንበሮች ለማንቀሳቀስ ቀላል ስለሆነ የሀገሪቱን አስተዳደርና መከላከያ ያቀላል። እንዲሁም ማዕከላዊ መንግስት ህግና ደንብን በመላው ሀገሪቱ እንዲያስፈጽም ይረዳል። 🛡️",
    subject: "geography",
    year: 2015,
    chapter: 1
  },
  {
    id: "geo-2015-1-11",
    question: "The scope of geography is defined as the 'thin habitable zone where the atmosphere, lithosphere, hydrosphere, and biosphere all interact.' What is the main reason for this specific scope?",
    options: [
      "A. It's the only place geographers have instruments to study.",
      "B. It is where all the physical and human processes relevant to geography occur.",
      "C. It's the only place on Earth with a breathable atmosphere.",
      "D. It's a recent discovery that life exists in this zone."
    ],
    correctAnswer: 1,
    explanation: "The scope of geography is specifically this habitable zone because it is the meeting point of all the key Earth systems—the air, land, water, and living things—that geographers study to understand how our planet works. 🧐 ማብራሪያ: የጂኦግራፊ የጥናት ወሰን የምድር ላይ ቀጭን የህይወት ክልል የሆነበት ዋናው ምክንያት፣ የከባቢ አየር፣ የድንጋይ ንጣፍ፣ የውሃ አካል እና የባዮስፌር መስተጋብር የሚፈጠርበት ስፍራ በመሆኑ ነው። እነዚህ ሁሉ ስርዓቶች የጂኦግራፊን ዋና ጥናት ይመሰርታሉና። 🧐",
    subject: "geography",
    year: 2015,
    chapter: 1
  },
  {
    id: "geo-2015-1-12",
    question: "Which of the following is the best example of 'Human-Environment Interaction' through the lens of 'Modification'?",
    options: [
      "A. People in cold climates wearing heavy jackets to stay warm.",
      "B. Building a hydroelectric dam to generate electricity.",
      "C. Farmers relying on rainfall to irrigate their crops.",
      "D. Fishermen moving to a different coast when fish stocks decline."
    ],
    correctAnswer: 1,
    explanation: "Modification is when humans change the environment to suit their needs. Building a dam is a clear example of this because it physically alters a river system to serve a human purpose, like generating power. 👷 ማብራሪያ: ለውጥ (Modification) ሰዎች አካባቢያቸውን ለፍላጎታቸው ሲሉ የሚቀይሩበት መንገድ ነው። ለምሳሌ የውሃ ሃይል ለማመንጨት ግድብ መገንባት አንድ ወንዝን ለሰው ልጅ ጥቅም እንዲውል ማስተካከል ማለት ነው፤ ይህ ደግሞ የለውጥ ግልጽ ምሳሌ ነው። 👷",
    subject: "geography",
    year: 2015,
    chapter: 1
  },
  {
    id: "geo-2015-1-13",
    question: "Ethiopia's relative location near the Red Sea has had significant implications. Which of the following is an example of this?",
    options: [
      "A. Its tropical climate due to its proximity to the Equator.",
      "B. Its compact shape which simplifies its administration.",
      "C. Its long history of early adoption of major world religions like Christianity and Islam.",
      "D. Its diverse agro-ecological zones and abundant natural resources."
    ],
    correctAnswer: 2,
    explanation: "Ethiopia's proximity to the Middle East, accessible via the Red Sea, facilitated early contact with major trade routes and cultural centers. This led to the early arrival and adoption of Christianity and Islam, a direct result of its strategic relative location. 🙏 ማብራሪያ: ኢትዮጵያ ከቀይ ባህር ጋር ያላት ቅርበት ከመካከለኛው ምስራቅ ጋር እንድትገናኝ ረድቷታል። በዚህ ምክንያት እንደ ክርስትና እና እስልምና ያሉ ዋና ዋና የዓለም ሃይማኖቶች ወደ ሀገሪቱ ገና ቀድመው እንዲገቡ እና እንዲሰፍኑ አስችሏቸዋል፤ ይህም አንፃራዊ ቦታዋ ያስገኘው ትልቅ ውጤት ነው። 🙏",
    subject: "geography",
    year: 2015,
    chapter: 1
  },
  {
    id: "geo-2015-1-14",
    question: "A country's shape is measured using the Boundary-Circumference Ratio (B/C Ratio). A ratio of 1.41, such as Ethiopia's, means:",
    options: [
      "A. The country is a perfect circle.",
      "B. The country is very elongated.",
      "C. The country is relatively compact, though not perfectly circular.",
      "D. The country is highly fragmented."
    ],
    correctAnswer: 2,
    explanation: "The Boundary-Circumference Ratio compares a country's boundary to the circumference of a perfect circle with the same area. A ratio closer to 1 indicates a more compact shape. Ethiopia's ratio of 1.41 is relatively close to 1, confirming its compact nature. 📏 ማብራሪያ: የድንበር እና የክበብ ዙሪያ ጥምርታ (B/C Ratio) የአንድን ሀገር ቅርፅ ከፍፁም ክብ ጋር ያነፃጽራል። ጥምርታው ወደ 1 በቀረበ ቁጥር ቅርፁ ይበልጥ የተሰበሰበ (compact) ይሆናል። የኢትዮጵያ ጥምርታ 1.41 ሲሆን ይህም ቅርጿ በአንፃራዊነት የተሰበሰበ መሆኑን ያሳያል። 📏",
    subject: "geography",
    year: 2015,
    chapter: 1
  },
  {
    id: "geo-2015-1-15",
    question: "What distinguishes a 'Functional (Nodal) Region' from a 'Formal Region'?",
    options: [
      "A. A functional region has a single, uniform characteristic, while a formal region has a central node.",
      "B. A formal region is defined by political boundaries, while a functional region is defined by physical features.",
      "C. A functional region is defined by its connections to a central point, while a formal region has a shared, uniform characteristic throughout.",
      "D. They are two names for the same type of region."
    ],
    correctAnswer: 2,
    explanation: "A functional region is organized around a central node and defined by the connections (like transportation or economic ties) radiating from it. A formal region, on the other hand, is defined by a single, shared characteristic that is present throughout the area, such as a specific climate or language. 🌐 ማብራሪያ: ተግባራዊ (Functional) ክልል በአንድ ማዕከላዊ ነጥብ ዙሪያ በተፈጠሩ ግንኙነቶች (ለምሳሌ የትራንስፖርት ወይም የኢኮኖሚ ትስስር) ይገለጻል። መደበኛ (Formal) ክልል ደግሞ በጠቅላላው አካባቢ ባለው አንድ አይነት ባህሪ (ለምሳሌ ተመሳሳይ የአየር ንብረት ወይም ቋንቋ) ይገለጻል፤ ይህም ሁለቱን ይለያቸዋል። 🌐",
    subject: "geography",
    year: 2015,
    chapter: 1
  },
  {
    id: "geo-2015-1-16",
    question: "Why is a compact shape generally considered an advantage for a country's defense and socio-economic integration?",
    options: [
      "A. It makes the country's borders longer, creating a stronger defense.",
      "B. It increases the total size of the country, which always leads to more resources.",
      "C. It allows for efficient deployment of resources and facilitates easier internal movement, promoting unity and security.",
      "D. It makes the country's population less diverse and easier to govern."
    ],
    correctAnswer: 2,
    explanation: "A compact shape's main advantage is efficiency. The relatively short distance from the center to any border allows for quick military response. This same proximity facilitates the movement of people, goods, and ideas, which is vital for socio-economic integration and national unity. 🛡️ ማብራሪያ: የተሰበሰበ (compact) ቅርፅ ዋና ጥቅሙ ውጤታማነትን ማምጣት ነው። ከመሃል እስከ ድንበር ያለው ርቀት አጭር በመሆኑ ወታደራዊ ኃይሎችን በፍጥነት ለማንቀሳቀስ ያስችላል። ይህ ቅርበት የሰዎች፣ የእቃዎች እና የሀሳቦች እንቅስቃሴን በማቀላጠፍ ሀገራዊ ትስስርን እና ኢኮኖሚያዊ ውህደትን ያጠናክራል። 🛡️",
    subject: "geography",
    year: 2015,
    chapter: 1
  },
  {
    id: "geo-2015-1-17",
    question: "What is the key difference between Topical (Systematic) Geography and Regional Geography in their approach to studying the Earth?",
    options: [
      "A. Topical geography focuses on physical features, while regional geography focuses on human features.",
      "B. Topical geography studies specific phenomena across the globe, while regional geography studies all phenomena within a specific area.",
      "C. Topical geography uses maps, while regional geography does not.",
      "D. Topical geography is a newer field of study, while regional geography is ancient."
    ],
    correctAnswer: 1,
    explanation: "Topical (Systematic) geography focuses on a specific category, such as mountains or climate patterns, and studies it globally. Regional geography, in contrast, focuses on a specific region and studies all the different interconnected elements—physical, human, and biological—within that single area. 🧐 ማብራሪያ: ቶፒካል (ሥርዓታዊ) ጂኦግራፊ አንድን የተወሰነ ክስተት (ለምሳሌ የተራራ አይነቶችን ወይም የአየር ንብረትን) በዓለም አቀፍ ደረጃ ያጠናል። የአካባቢ (Regional) ጂኦግራፊ ግን በተቃራኒው የአንድን የተወሰነ አካባቢ አካላዊ፣ ሰብአዊ እና ባዮሎጂያዊ ክፍሎችን በሙሉ በአንድ ላይ አያይዞ ያጠናል። 🧐",
    subject: "geography",
    year: 2015,
    chapter: 1
  },
  {
    id: "geo-2015-1-18",
    question: "Why is knowing the 'Date of Compilation' a crucial skill in map reading, especially for a map of a city?",
    options: [
      "A. It indicates the country where the map was made.",
      "B. It helps you understand the map's artistic style.",
      "C. It shows whether the information, such as roads and buildings, is up-to-date.",
      "D. It is used to calculate the distance scale."
    ],
    correctAnswer: 2,
    explanation: "Cities change rapidly with new construction and infrastructure projects. Knowing the date a map was compiled is crucial because it tells you whether the information it contains is current and reliable. A map from 20 years ago would likely be inaccurate for navigating a modern city. 📅 ማብራሪያ: ከተሞች በየጊዜው በአዲስ ግንባታዎች እና የመሠረተ ልማት ፕሮጀክቶች በፍጥነት ይለወጣሉ። አንድ ካርታ የተዘጋጀበትን ቀን ማወቅ በውስጡ ያለው መረጃ ወቅታዊ እና አስተማማኝ መሆኑን ለማወቅ ወሳኝ ነው። ለምሳሌ ከ20 ዓመት በፊት የተሰራ የከተማ ካርታ ለዘመናዊ ከተማ ለመንቀሳቀስ ትክክለኛ ላይሆን ይችላል። 📅",
    subject: "geography",
    year: 2015,
    chapter: 1
  },
  {
    id: "geo-2015-1-19",
    question: "Ethiopia's large size provides several advantages, including extensive arable land. How does this advantage directly impact its economy?",
    options: [
      "A. It makes the country's administration more challenging.",
      "B. It provides a greater depth for military defense.",
      "C. It supports a large population and a strong agricultural sector, which is vital for the economy.",
      "D. It makes the cost of infrastructure construction very high."
    ],
    correctAnswer: 2,
    explanation: "Extensive arable land is a direct advantage of Ethiopia's large size. This land is crucial for a country with a large population, as it supports a strong agricultural sector that is the backbone of the nation's economy, providing food and employment. 🌾 ማብራሪያ: ሰፊ የእርሻ መሬት የኢትዮጵያ ትልቅ ስፋት ቀጥተኛ ጥቅም ነው። ብዙ ህዝብ ላላት ሀገር ይህ መሬት ለኢኮኖሚዋ አከርካሪ በሆነው ጠንካራ የግብርና ዘርፍ በጣም አስፈላጊ ሲሆን፣ ለህዝቡ ምግብና ሥራ ያቀርባል። 🌾",
    subject: "geography",
    year: 2015,
    chapter: 1
  },
  {
    id: "geo-2015-1-20",
    question: "How is the theme of 'Place' different from the theme of 'Location'?",
    options: [
      "A. 'Place' refers to a specific position, while 'Location' refers to the unique characteristics of a spot.",
      "B. 'Place' refers to a location's unique physical and human characteristics, while 'Location' is simply its specific position.",
      "C. 'Place' is only about human culture, while 'Location' is about physical geography.",
      "D. 'Place' is a type of region, while 'Location' is a type of movement."
    ],
    correctAnswer: 1,
    explanation: "Location is the starting point—the 'where' of a place, described by coordinates. Place, on the other hand, is the 'what' of a location, encompassing its unique identity and characteristics, such as its landforms, culture, and human population. 🏙️ ማብራሪያ: ቦታ (Location) የአንድ ስፍራ መጀመሪያ ሲሆን 'የት ነው?' ለሚለው ጥያቄ መልስ ይሰጣል። ስፍራ (Place) ግን 'ምንድነው?' ለሚለው ጥያቄ መልስ ይሰጣል፤ ማለትም የአንድ ቦታን ልዩ ማንነት እና ባህሪያት፣ እንደ መሬቱ አቀማመጥ፣ ባህሉ እና የሰዎች ብዛት ያጠቃልላል። 🏙️",
    subject: "geography",
    year: 2015,
    chapter: 1
  },
  {
    id: "geo-2015-1-21",
    question: "(Medium) A geographer studying the global patterns of a specific type of agriculture is using which approach to geography?",
    options: [
      "A. Regional Geography",
      "B. Human-Environment Interaction",
      "C. Topical (Systematic) Geography",
      "D. Place Geography"
    ],
    correctAnswer: 2,
    explanation: "The topical or systematic approach focuses on studying a specific phenomenon, in this case, a type of agriculture, across the entire world, not just in one region. 🌾 ማብራሪያ: ቶፒካል (ሥርዓታዊ) አቀራረብ አንድን የተወሰነ ክስተት (ለምሳሌ የአንድ አይነት እርሻ ዘዴ) በአንድ የተወሰነ አካባቢ ሳይሆን በመላው ዓለም ላይ በማጥናት ላይ ያተኩራል። 🌾",
    subject: "geography",
    year: 2015,
    chapter: 1
  },
  {
    id: "geo-2015-1-22",
    question: "(Simple) The phrase 'Ethiopia is located in the Horn of Africa' is an example of what kind of location?",
    options: [
      "A. Absolute Location",
      "B. Relative Location",
      "C. Astronomical Location",
      "D. Precise Location"
    ],
    correctAnswer: 1,
    explanation: "Relative location describes a place's position in relation to other places or features, like being in the Horn of Africa. Absolute location uses exact coordinates. 📍",
    subject: "geography",
    year: 2015,
    chapter: 1
  },
  {
    id: "geo-2015-1-23",
    question: "(Hard) What disadvantage of a large country is most directly linked to the high cost of building roads and railways?",
    options: [
      "A. Difficult Administration",
      "B. Security Concerns",
      "C. Socio-economic Integration Challenges",
      "D. Abundant Resources"
    ],
    correctAnswer: 2,
    explanation: "The high cost of infrastructure in a large country directly makes it harder and more expensive to connect all parts of the country socially and economically, which is a major challenge for integration. 🛤️ ማብራሪያ: በትልቅ ሀገር ውስጥ የመሰረተ ልማት ግንባታ ወጪ ከፍተኛ መሆኑን ከሀገሪቱ ማህበራዊና ኢኮኖሚያዊ ውህደት ጋር በቀጥታ ይገናኛል። የመንገድና የባቡር መስመር መገንባት ውድ ሲሆን፣ ይህም የሀገሪቱን ክፍሎች ማህበራዊና ኢኮኖሚያዊ ትስስር እንዲፈጥሩ ያደርጋል። 🛤️",
    subject: "geography",
    year: 2015,
    chapter: 1
  },
  {
    id: "geo-2015-1-24",
    question: "(Simple) Which of the following is NOT a core theme of geography?",
    options: [
      "A. Location",
      "B. Movement",
      "C. Place",
      "D. Government"
    ],
    correctAnswer: 3,
    explanation: "The five core themes of geography are Location, Place, Human-Environment Interaction, Movement, and Region. Government is not one of them. 📚",
    subject: "geography",
    year: 2015,
    chapter: 1
  },
  {
    id: "geo-2015-1-25",
    question: "(Medium) The fact that Ethiopia's high altitude modifies its tropical climate is an example of which geographical theme?",
    options: [
      "A. Location",
      "B. Place",
      "C. Human-Environment Interaction",
      "D. Movement"
    ],
    correctAnswer: 1,
    explanation: "The theme of Place refers to a location's unique physical and human characteristics. Ethiopia's high altitude and the resulting unique climate are key physical characteristics that define it as a distinct 'place.' 🏞️ ማብራሪያ: የስፍራ (Place) ጽንሰ-ሀሳብ የአንድ ቦታን ልዩ አካላዊና ሰብአዊ ባህሪያት ይመለከታል። የኢትዮጵያ ከፍተኛ ከፍታ እና በዚህም ምክንያት የሚመጣው ልዩ የአየር ንብረት ሀገሪቱን እንደ አንድ ልዩ 'ስፍራ' የሚገልጹ ቁልፍ አካላዊ ባህሪያት ናቸው። 🏞️",
    subject: "geography",
    year: 2015,
    chapter: 1
  },
  {
    id: "geo-2015-1-26",
    question: "(Difficult) How does the longitudinal extension of Ethiopia (15 degrees) primarily impact the country?",
    options: [
      "A. It causes a one-hour time difference between the eastern and western parts.",
      "B. It gives the country a tropical climate.",
      "C. It makes the country a compact shape.",
      "D. It leads to the country's high altitude."
    ],
    correctAnswer: 0,
    explanation: "Longitude determines time zones. Since the Earth rotates 15 degrees per hour, Ethiopia's longitudinal extension of 15 degrees means there is a natural one-hour time difference between the easternmost and westernmost points of the country, though a single time zone is used for convenience. ⏰ ማብራሪያ: ኬንትሮስ የሰዓት ሰቅን የሚወስን ነው። ምድር በየሰዓቱ 15 ዲግሪ ስለምትዞር፣ ኢትዮጵያ በኬንትሮስ ላይ ያላት የ15 ዲግሪ ስፋት በምስራቅና በምዕራብ ጫፎቿ መካከል አንድ ሰዓት ያህል የጊዜ ልዩነት እንዲኖር ያደርጋል፣ ምንም እንኳን ለተግባራዊ ምቹነት አንድ ነጠላ የሰዓት ሰቅ ቢጠቀምም። ⏰",
    subject: "geography",
    year: 2015,
    chapter: 1
  },
  {
    id: "geo-2015-1-27",
    question: "(Simple) What is the main disadvantage of a large country in terms of administration?",
    options: [
      "A. A smaller population",
      "B. Abundant resources",
      "C. Difficulty managing and governing a vast territory",
      "D. A compact shape"
    ],
    correctAnswer: 2,
    explanation: "One of the main disadvantages of a large country is the challenge of effectively managing and governing a large area from a central point. 🏛️",
    subject: "geography",
    year: 2015,
    chapter: 1
  },
  {
    id: "geo-2015-1-28",
    question: "(Medium) Which of the following is the best example of a 'Formal Region'?",
    options: [
      "A. The area served by a single TV station.",
      "B. A city and its surrounding suburbs linked by a transportation network.",
      "C. The Horn of Africa due to its shared history and culture.",
      "D. The Sahara Desert, defined by its uniform arid climate."
    ],
    correctAnswer: 3,
    explanation: "A formal region is defined by a single, shared characteristic that is uniform throughout the area. The Sahara Desert is a perfect example, as its entire area is defined by a consistent arid climate. 🌐 ማብራሪያ: ፎርማል (መደበኛ) ክልል በመላው አካባቢ ባለው አንድ አይነት ባህሪ ይገለጻል። የሰሃራ በረሃ በጠቅላላው በአንድ አይነት ደረቅ የአየር ንብረት የተገለጸ በመሆኑ ለዚህ ጥሩ ምሳሌ ነው። 🌐",
    subject: "geography",
    year: 2015,
    chapter: 1
  },
  {
    id: "geo-2015-1-29",
    question: "(Hard) The 'Dependency' aspect of Human-Environment Interaction is best represented by:",
    options: [
      "A. Humans building irrigation systems to water crops.",
      "B. People wearing warm clothes in a cold climate.",
      "C. A community using wood from a nearby forest for fuel and shelter.",
      "D. The government passing laws to protect endangered species."
    ],
    correctAnswer: 2,
    explanation: "Dependency is the way humans rely on the natural environment for their basic needs. Using wood from a forest for fuel and shelter is a clear example of this direct reliance on nature. 🤝 ማብራሪያ: ጥገኝነት (Dependency) ሰዎች ለዋና ፍላጎቶቻቸው በተፈጥሮ አካባቢያቸው ላይ የሚመኩበት መንገድ ነው። በአቅራቢያ ካለ ደን ለነዳጅ እና ለመጠለያ እንጨት መጠቀም በተፈጥሮ ላይ ያለንን ቀጥተኛ ጥገኝነት የሚያሳይ ግልጽ ምሳሌ ነው። 🤝",
    subject: "geography",
    year: 2015,
    chapter: 1
  },
  {
    id: "geo-2015-1-30",
    question: "(Simple) The ratio between the distance on a map and the actual distance on the ground is known as the:",
    options: [
      "A. Title",
      "B. Key",
      "C. Scale",
      "D. North Arrow"
    ],
    correctAnswer: 2,
    explanation: "The scale is a fundamental element of a map that shows the ratio of distance on the map to the real-world distance on the ground. 📏",
    subject: "geography",
    year: 2015,
    chapter: 1
  },
  {
    id: "geo-2015-1-31",
    question: "(Medium) Ethiopia's strategic location near the Red Sea has made it a focus of geopolitical interest. This is a consequence of which type of location?",
    options: [
      "A. Astronomical Location",
      "B. Absolute Location",
      "C. Relative Location",
      "D. Grid Location"
    ],
    correctAnswer: 2,
    explanation: "Geopolitical interest is a direct result of a country's position relative to major global trade routes and other powerful nations. Ethiopia's location relative to the Red Sea, a key shipping lane, is what makes it strategically important. 🌍 ማብራሪያ: ጂኦፖለቲካዊ ፍላጎት የሚመጣው አንድ ሀገር ከሌሎች ዋና ዋና የንግድ መስመሮች እና ሀገራት ጋር ባለው አንፃራዊ ቦታ ምክንያት ነው። ኢትዮጵያ ከቀይ ባህር ጋር ያላት አንፃራዊ አቀማመጥ ለንግድ መርከቦች ቁልፍ የውሃ መንገድ በመሆኑ ስትራቴጂካዊ ጠቀሜታ እንዲኖራት ያደርጋታል። 🌍",
    subject: "geography",
    year: 2015,
    chapter: 1
  },
  {
    id: "geo-2015-1-32",
    question: "(Difficult) What is the fundamental difference between 'Absolute Location' and 'Relative Location' and why are both important?",
    options: [
      "A. Absolute location is about specific coordinates, while relative location is about proximity to other things. Both are important because they provide different ways of understanding a place's position and context.",
      "B. Absolute location is more important than relative location for all geographical studies.",
      "C. Relative location is only used for very large countries, while absolute location is for small ones.",
      "D. They are two different names for the same thing."
    ],
    correctAnswer: 0,
    explanation: "Absolute location gives a precise, unchanging position, which is essential for accurate mapping. Relative location, however, provides context and helps us understand a place's connections, influence, and importance in relation to its surroundings. Both are needed for a full geographical picture. 🗺️ ማብራሪያ: አብሶሉት (ፍፁም) ቦታ ትክክለኛና የማይለወጥ መጋጠሚያዎችን ይሰጣል፤ ይህም ለትክክለኛ ካርታ ስራ አስፈላጊ ነው። አንፃራዊ (Relative) ቦታ ግን አንድ ቦታ ከሌሎች ቦታዎች ጋር ያለውን ግንኙነት፣ ተጽዕኖ እና ጠቀሜታ ለመረዳት ይረዳናል። ሁለቱም የአንድን ቦታ አቀማመጥ እና ሁኔታ ሙሉ በሙሉ ለመረዳት አስፈላጊ ናቸው። 🗺️",
    subject: "geography",
    year: 2015,
    chapter: 1
  },
  {
    id: "geo-2015-1-33",
    question: "(Simple) A country bordered by Eritrea, Djibouti, Somalia, Kenya, and Sudan is:",
    options: [
      "A. Egypt",
      "B. Ethiopia",
      "C. South Sudan",
      "D. Uganda"
    ],
    correctAnswer: 1,
    explanation: "These are all of Ethiopia's neighboring countries. 🇪🇹",
    subject: "geography",
    year: 2015,
    chapter: 1
  },
  {
    id: "geo-2015-1-34",
    question: "(Medium) What is a major disadvantage of Ethiopia's large size, specifically related to its economy?",
    options: [
      "A. It limits the diversity of its agro-ecological zones.",
      "B. It makes it difficult to build infrastructure and connect all parts of the country.",
      "C. It reduces the size of the potential workforce.",
      "D. It makes the country vulnerable to invasion."
    ],
    correctAnswer: 1,
    explanation: "The vast territory of a large country like Ethiopia makes it very expensive and difficult to build and maintain the necessary infrastructure (roads, railways, etc.) to connect all regions and facilitate economic activity. 💰 ማብራሪያ: እንደ ኢትዮጵያ ያለ ትልቅ ሀገር ዋነኛው ጉዳት አስፈላጊ የሆኑ የመሠረተ ልማት (መንገዶች፣ የባቡር መስመሮች) ግንባታዎች ከፍተኛ ወጪ የሚያስከፍሉ እና ሁሉንም የሀገሪቱን ክፍሎች ለማገናኘት አስቸጋሪ መሆናቸው ነው። ይህ ደግሞ በኢኮኖሚው ላይ አሉታዊ ተጽዕኖ ያሳድራል። 💰",
    subject: "geography",
    year: 2015,
    chapter: 1
  },
  {
    id: "geo-2015-1-35",
    question: "(Difficult) Why is the study of 'Movement' considered crucial for understanding human civilization?",
    options: [
      "A. Because it focuses on the internal politics of different countries.",
      "B. Because it explains how human cultures and technologies have spread and developed across the globe.",
      "C. Because it helps in identifying the exact location of ancient civilizations.",
      "D. Because it is the only way to understand climate change."
    ],
    correctAnswer: 1,
    explanation: "The movement of people, goods, and ideas is the primary mechanism through which civilization has spread. It is through movement that humans populated the planet, trade was established, and knowledge, culture, and technology were exchanged, leading to the development of complex societies. ✈️ ማብራሪያ: የሰዎች፣ የእቃዎች እና የሀሳቦች እንቅስቃሴ ስልጣኔዎች እንዴት እንደተስፋፉ ዋናው ምክንያት ነው። በእንቅስቃሴ አማካኝነት ሰዎች ዓለምን ሰፍረዋል፣ ንግድ ተጀመረ፣ እና እውቀት፣ ባህልና ቴክኖሎጂ ተለዋወጡ፤ ይህም የሰው ልጅ ስልጣኔ እንዲዳብር አስችሏል። ✈️",
    subject: "geography",
    year: 2015,
    chapter: 1
  },
  // ==================== MATH QUESTIONS ====================
  
  //math-2014-1-1
  {
    id: 'math-2014-1-1',
    question: 'What is 15 × 8?',
    options: ['120', '125', '130', '115'],
    correctAnswer: 0,
    explanation: '15 × 8 = 120',
    subject: 'math',
    year: 2014,
    chapter: 1
  },

  //math-2014-1-2
  {
    id: 'math-2014-1-2',
    question: 'What is the value of π (pi) rounded to two decimal places?',
    options: ['3.14', '3.16', '3.12', '3.18'],
    correctAnswer: 0,
    explanation: 'The value of π is approximately 3.14159, which rounds to 3.14 to two decimal places.',
    subject: 'math',
    year: 2014,
    chapter: 1
  },
  //math-2014-2-1
  {
    id: 'math-2014-2-1',
    question: 'If x + 5 = 12, what is the value of x?',
    options: ['5', '6', '7', '8'],
    correctAnswer: 2,
    explanation: 'x + 5 = 12 → x = 12 - 5 → x = 7',
    subject: 'math',
    year: 2014,
    chapter: 2
  },

  // ==================== HISTORY QUESTIONS ====================
  
  //history-2015-1-1
  {
    id: 'history-2015-1-1',
    question: 'In which year did the Battle of Adwa occur?',
    options: ['1896', '1905', '1889', '1911'],
    correctAnswer: 0,
    explanation: 'The Battle of Adwa, where Ethiopia defeated Italy, occurred on March 1, 1896.',
    subject: 'history',
    year: 2015,
    chapter: 1
  },
  //history-2015-1-2
  {
    id: 'history-2015-1-2',
    question: 'Who was the emperor of Ethiopia during the Battle of Adwa?',
    options: ['Menelik II', 'Tewodros II', 'Yohannes IV', 'Haile Selassie'],
    correctAnswer: 0,
    explanation: 'Emperor Menelik II led Ethiopia during the Battle of Adwa.',
    subject: 'history',
    year: 2015,
    chapter: 1
  },

  // ==================== CHEMISTRY QUESTIONS ====================
  
  //chemistry-2016-1-1
  {
    id: 'chem-2016-1-1',
    question: 'What is the chemical symbol for gold?',
    options: ['Go', 'Gd', 'Au', 'Ag'],
    correctAnswer: 2,
    explanation: 'Au is the chemical symbol for gold, derived from the Latin word "aurum".',
    subject: 'chemistry',
    year: 2016,
    chapter: 1
  },
  //chemistry-2016-1-2
  {
    id: 'chem-2016-1-2',
    question: 'What is the pH value of pure water?',
    options: ['5', '7', '9', '11'],
    correctAnswer: 1,
    explanation: 'Pure water has a neutral pH of 7 at 25°C.',
    subject: 'chemistry',
    year: 2016,
    chapter: 1
  },

  // ==================== PHYSICS QUESTIONS ====================
  
  //physics-2017-1-1
  {
    id: 'phy-2017-1-1',
    question: 'What is the unit of electrical resistance?',
    options: ['Volt', 'Ampere', 'Ohm', 'Watt'],
    correctAnswer: 2,
    explanation: 'The ohm (Ω) is the unit of electrical resistance.',
    subject: 'physics',
    year: 2017,
    chapter: 1
  },
  //physics-2017-1-2
  {
    id: 'phy-2017-1-2',
    question: 'Which of these is NOT a fundamental force of nature?',
    options: ['Gravity', 'Electromagnetism', 'Strong Nuclear', 'Friction'],
    correctAnswer: 3,
    explanation: 'The four fundamental forces are gravity, electromagnetism, strong nuclear, and weak nuclear.',
    subject: 'physics',
    year: 2017,
    chapter: 1
  },
{
    "id": "log-2014-1-1",
    "question": "After observing a flock of 500 birds in a park in Addis Ababa, a biologist noticed that all of them had brown feathers. She concluded that it is highly probable that all birds in Addis Ababa have brown feathers. This argument is a(n) ________ argument.",
    "options": [
      "Deductive",
      "Inductive"
    ],
    "correctAnswer": 1,
    "explanation": "This is an inductive argument. It uses observations from a specific sample (500 birds) to make a probable generalization about a larger population (all birds in Addis Ababa). The conclusion is not guaranteed to be true, only highly probable.",
    "subject": "logic",
    "year": 2014,
    "chapter": 1
  },
  {
    "id": "log-2014-1-2",
    "question": "A geographer argues: \"Mount Ras Dashen is the highest peak in Ethiopia. All of Ethiopia's highest peaks are located within the Simien Mountains National Park. Therefore, Mount Ras Dashen is located in the Simien Mountains National Park.\" This is a(n) ________ argument.",
    "options": [
      "Deductive",
      "Inductive"
    ],
    "correctAnswer": 0,
    "explanation": "This is a deductive argument. It moves from a general premise (\"All of Ethiopia's highest peaks are located within...\") to a specific, certain conclusion about Mount Ras Dashen. The conclusion logically and necessarily follows from the premises.",
    "subject": "logic",
    "year": 2014,
    "chapter": 1
  },
  {
    "id": "log-2014-1-3",
    "question": "The argument: \"All professional Ethiopian soccer players are athletes. All athletes are healthy. Therefore, all professional Ethiopian soccer players are healthy.\" This argument is an example of a(n):",
    "options": [
      "Sound argument",
      "Valid but Unsound argument",
      "Invalid argument",
      "Weak argument"
    ],
    "correctAnswer": 0,
    "explanation": "This argument is a sound argument. A sound argument is a valid deductive argument with all factually true premises. The argument form is valid (\"All S are P. All P are Q. Therefore, all S are Q\"), and the premises are factually true in this context. Therefore, the conclusion must also be true.",
    "subject": "logic",
    "year": 2014,
    "chapter": 1
  },
  {
    "id": "log-2014-1-4",
    "question": "An argument can be valid even if its premises are factually false. (True or False)",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": 0,
    "explanation": "This statement is true. Validity is about the logical structure of an argument, not the factual truth of its premises. For a valid argument, if the premises were true, the conclusion would have to be true. For example: \"All cats are dogs. All dogs are reptiles. Therefore, all cats are reptiles.\" This is a valid argument, even though both premises are factually false.",
    "subject": "logic",
    "year": 2014,
    "chapter": 1
  },
  {
    "id": "log-2014-1-5",
    "question": "Consider the argument: 'All animals with four legs are domesticated. A sheep is an animal with four legs. Therefore, a sheep is domesticated.' This argument is:",
    "options": [
      "Valid and Sound",
      "Valid and Unsound",
      "Invalid and Sound",
      "Invalid and Unsound"
    ],
    "correctAnswer": 1,
    "explanation": "This argument is Valid and Unsound. The logical form is valid (All S are P. X is an S. Therefore, X is a P). The conclusion logically follows from the premises. However, the first premise (\"All animals with four legs are domesticated\") is factually false. Since a sound argument must have all true premises, this argument is unsound.",
    "subject": "logic",
    "year": 2014,
    "chapter": 1
  },
  {
    "id": "log-2014-1-6",
    "question": "If a deductive argument has a false conclusion, what can be definitively said about it?",
    "options": [
      "It must be an invalid argument.",
      "It must be an unsound argument.",
      "It must have at least one false premise.",
      "Both B and C are correct."
    ],
    "correctAnswer": 3,
    "explanation": "If a deductive argument has a false conclusion, it must be unsound. An argument is sound only if it is valid AND has all true premises. For a valid argument, true premises guarantee a true conclusion. Therefore, if the conclusion is false, at least one of the premises must be false, which also makes the argument unsound.",
    "subject": "logic",
    "year": 2014,
    "chapter": 1
  },
  {
    "id": "log-2014-1-7",
    "question": "A strong inductive argument is analogous to a ________ deductive argument.",
    "options": [
      "Valid",
      "Sound",
      "Cogent",
      "True"
    ],
    "correctAnswer": 0,
    "explanation": "A strong inductive argument is analogous to a valid deductive argument. Both terms describe the logical connection between the premises and the conclusion. Validity means the conclusion necessarily follows, while strength means the conclusion probably follows. Neither term says anything about the factual truth of the premises.",
    "subject": "logic",
    "year": 2014,
    "chapter": 1
  },
  {
    "id": "log-2014-1-8",
    "question": "The argument \"The sun has risen every morning for the past 5 billion years. Therefore, it is certain that the sun will rise tomorrow morning\" is an example of an argument that is:",
    "options": [
      "Deductive and Valid",
      "Deductive and Invalid",
      "Inductive and Strong",
      "Inductive and Weak"
    ],
    "correctAnswer": 2,
    "explanation": "This is a strong inductive argument. It's inductive because it uses a pattern of past observations to make a prediction about the future, which is only probable, not certain. It's strong because the evidence (5 billion years of observation) provides a very high degree of probability for the conclusion.",
    "subject": "logic",
    "year": 2014,
    "chapter": 1
  },
  {
    "id": "log-2014-1-9",
    "question": "Which of the following describes a cogent argument?",
    "options": [
      "It is a valid deductive argument.",
      "It is a strong inductive argument with all factually true premises.",
      "It is a valid deductive argument with all factually true premises.",
      "It is an argument with a probable conclusion."
    ],
    "correctAnswer": 1,
    "explanation": "A cogent argument is the inductive equivalent of a sound argument. It is an inductive argument that is both strong and has all factually true premises.",
    "subject": "logic",
    "year": 2014,
    "chapter": 1
  },
  {
    "id": "log-2014-1-10",
    "question": "Can a weak inductive argument ever be cogent?",
    "options": [
      "Yes, if its premises are all factually true.",
      "Yes, if its conclusion is true.",
      "No, because cogency requires strength.",
      "Yes, if it is based on a large sample size."
    ],
    "correctAnswer": 2,
    "explanation": "No, a weak inductive argument can never be cogent. By definition, cogency requires an argument to be strong. If an argument is weak, it fails the primary condition for being cogent, regardless of the truth of its premises.",
    "subject": "logic",
    "year": 2014,
    "chapter": 1
  },
  {
    "id": "log-2014-1-11",
    "question": "What is the key difference between a sound argument and a cogent argument?",
    "options": [
      "Sound arguments are deductive; cogent arguments are inductive.",
      "Sound arguments guarantee the truth of the conclusion; cogent arguments only make the conclusion probable.",
      "Sound arguments require true premises; cogent arguments do not.",
      "Both A and B are correct."
    ],
    "correctAnswer": 3,
    "explanation": "Both A and B are correct. A sound argument is a type of deductive argument, while a cogent argument is a type of inductive argument. Because of this, a sound argument's conclusion is guaranteed to be true (if its premises are true), while a cogent argument's conclusion is only made highly probable.",
    "subject": "logic",
    "year": 2014,
    "chapter": 1
  },
  {
    "id": "log-2014-1-12",
    "question": "The argument \"Ethiopian coffee beans are of high quality. Therefore, this bag of Ethiopian coffee beans is of high quality.\" is best described as:",
    "options": [
      "Deductive and Valid",
      "Inductive and Strong",
      "Deductive and Unsound",
      "Inductive and Weak"
    ],
    "correctAnswer": 1,
    "explanation": "This is an inductive argument. It moves from a general premise about Ethiopian coffee beans to a conclusion about a specific instance. It is strong because the premise provides a high degree of probability for the conclusion.",
    "subject": "logic",
    "year": 2014,
    "chapter": 1
  },
  {
    "id": "log-2014-1-13",
    "question": "An argument with a factually true conclusion, a valid form, and at least one factually false premise is:",
    "options": [
      "Sound",
      "Unsound",
      "Cogent",
      "Valid but Uncogent"
    ],
    "correctAnswer": 1,
    "explanation": "The argument is unsound. For a deductive argument to be sound, it must be valid and all of its premises must be true. Since at least one premise is false, the argument is unsound, even if it has a valid form and a true conclusion.",
    "subject": "logic",
    "year": 2014,
    "chapter": 1
  },
  {
    "id": "log-2014-1-14",
    "question": "The argument: 'Some college students in Addis Ababa are athletes. Some athletes are hardworking. Therefore, some college students in Addis Ababa are hardworking.' This argument is:",
    "options": [
      "Valid",
      "Invalid",
      "Sound",
      "Cogent"
    ],
    "correctAnswer": 1,
    "explanation": "This argument is invalid. The conclusion does not necessarily follow from the premises. The \"some\" in the premises could refer to different groups. The college students who are athletes might not be the same athletes who are hardworking.",
    "subject": "logic",
    "year": 2014,
    "chapter": 1
  },
  {
    "id": "log-2014-1-15",
    "question": "The argument: 'The majority of Ethiopian long-distance runners are from the Oromo region. Kenenisa Bekele is an Ethiopian long-distance runner. Therefore, Kenenisa Bekele is probably from the Oromo region.' This argument is best described as:",
    "options": [
      "Cogent",
      "Sound",
      "Invalid",
      "Deductive"
    ],
    "correctAnswer": 0,
    "explanation": "This argument is cogent. It's an inductive argument that is both strong (the premise makes the conclusion very probable) and has true premises (Kenenisa Bekele is an Ethiopian long-distance runner, and a majority of these runners are indeed from the Oromo region).",
    "subject": "logic",
    "year": 2014,
    "chapter": 1
  },
  {
    "id": "log-2014-1-16",
    "question": "What is the fundamental difference in the relationship between premises and conclusion in deductive versus inductive arguments?",
    "options": [
      "Deductive arguments go from specific to general, while inductive arguments go from general to specific.",
      "Deductive arguments aim for certainty, while inductive arguments aim for probability.",
      "Deductive arguments are never based on observation, while inductive arguments always are.",
      "Deductive arguments cannot have false premises, while inductive arguments can."
    ],
    "correctAnswer": 1,
    "explanation": "The fundamental difference lies in the aim of the argument. Deductive arguments aim to show that the conclusion is a certain consequence of the premises, while inductive arguments only aim to show that the conclusion is probable.",
    "subject": "logic",
    "year": 2014,
    "chapter": 1
  },
  {
    "id": "log-2014-1-17",
    "question": "An argument is invalid if:",
    "options": [
      "The conclusion is false.",
      "The premises are all false.",
      "The conclusion does not follow from the premises, regardless of their truth.",
      "It is a weak inductive argument."
    ],
    "correctAnswer": 2,
    "explanation": "An argument is invalid if its conclusion does not logically follow from its premises. The factual truth or falsehood of the premises and conclusion is irrelevant to an argument's validity.",
    "subject": "logic",
    "year": 2014,
    "chapter": 1
  },
  {
    "id": "log-2014-1-18",
    "question": "The argument: 'The last 100 people who ordered a coffee at this shop asked for it to be traditionally prepared. So, the next person to order coffee will also ask for it to be traditionally prepared.' This is an example of a(n):",
    "options": [
      "Weak inductive argument",
      "Strong inductive argument",
      "Unsound deductive argument",
      "Invalid deductive argument"
    ],
    "correctAnswer": 1,
    "explanation": "This is a strong inductive argument. It moves from a large number of specific observations (the last 100 people) to a high-probability conclusion about a future event. The large sample size makes the conclusion highly probable.",
    "subject": "logic",
    "year": 2014,
    "chapter": 1
  },
  {
    "id": "log-2014-1-19",
    "question": "An argument that is both valid and has all factually true premises is called a(n) ________ argument.",
    "options": [
      "Strong",
      "Cogent",
      "Sound",
      "Inductive"
    ],
    "correctAnswer": 2,
    "explanation": "A sound argument is a valid deductive argument that has all factually true premises. This is the gold standard for a good deductive argument.",
    "subject": "logic",
    "year": 2014,
    "chapter": 1
  },
  {
    "id": "log-2014-1-20",
    "question": "What is a key characteristic that distinguishes a good deductive argument from a good inductive argument?",
    "options": [
      "The premises of a good deductive argument are always true.",
      "The conclusion of a good deductive argument is guaranteed to be true if the premises are true.",
      "Good inductive arguments are always stronger than good deductive arguments.",
      "Good deductive arguments can be either valid or invalid."
    ],
    "correctAnswer": 1,
    "explanation": "A key characteristic of a good deductive argument (a valid one) is that its conclusion is guaranteed to be true if its premises are true. Good inductive arguments, on the other hand, can only make their conclusions probable.",
    "subject": "logic",
    "year": 2014,
    "chapter": 1
  },
  {
    "id": "log-2014-1-21",
    "question": "A statement that is correct about an argument among the following is:",
    "options": [
      "An argument must have at least one premise, and can have one or more conclusions.",
      "An argument can have a single premise and a single conclusion.",
      "A good argument is one where all premises are factually true.",
      "An argument can be valid even if its conclusion is false."
    ],
    "correctAnswer": 3,
    "explanation": "An argument can be valid even if its conclusion is false. This happens when at least one of its premises is also false. For example, \"All birds can fly. A penguin is a bird. Therefore, a penguin can fly.\" This is a valid argument, but the first premise is false, making the conclusion false.",
    "subject": "logic",
    "year": 2014,
    "chapter": 1
  },
  {
    "id": "log-2014-1-22",
    "question": "The term 'uncogent' is to 'inductive argument' as '________' is to 'deductive argument'.",
    "options": [
      "Invalid",
      "Unsound",
      "Weak",
      "Unreliable"
    ],
    "correctAnswer": 1,
    "explanation": "The relationship is one of poor quality. Uncogent is the term for a poor inductive argument (either weak or has false premises). Unsound is the term for a poor deductive argument (either invalid or has false premises).",
    "subject": "logic",
    "year": 2014,
    "chapter": 1
  },
  {
    "id": "log-2014-1-23",
    "question": "An argument that has a true conclusion, but whose premises do not provide sufficient support for it, is:",
    "options": [
      "Sound or Valid",
      "Unsound or Weak",
      "Cogent or Strong",
      "None of the above"
    ],
    "correctAnswer": 1,
    "explanation": "This argument is either unsound (if it's a deductive argument and the premises are false or the form is invalid) or weak (if it's an inductive argument and the premises don't make the conclusion probable). In both cases, the support for the conclusion is inadequate.",
    "subject": "logic",
    "year": 2014,
    "chapter": 1
  },
  {
    "id": "log-2014-1-24",
    "question": "A student argues: 'All men are mortal. All Ethiopians are mortal. Therefore, all Ethiopians are men.' This argument is:",
    "options": [
      "Valid",
      "Invalid",
      "Sound",
      "Cogent"
    ],
    "correctAnswer": 1,
    "explanation": "This argument is invalid. It's a formal fallacy. The premises state that two groups (men and Ethiopians) both belong to a larger category (mortal), but this doesn't logically guarantee that one group is a subset of the other.",
    "subject": "logic",
    "year": 2014,
    "chapter": 1
  },
  {
    "id": "log-2014-1-25",
    "question": "The argument: 'If the Ethiopian government invests more in infrastructure, the economy will grow. The government will not invest more in infrastructure. Therefore, the economy will not grow.' This argument is an example of:",
    "options": [
      "Modus Ponens",
      "Modus Tollens",
      "Fallacy of Denying the Antecedent",
      "Fallacy of Affirming the Consequent"
    ],
    "correctAnswer": 2,
    "explanation": "This is an example of the Fallacy of Denying the Antecedent. The logical form is \"If P then Q. Not P. Therefore, Not Q.\" This is an invalid form because the conclusion does not necessarily follow; the economy could grow for other reasons.",
    "subject": "logic",
    "year": 2014,
    "chapter": 1
  },
  {
    "id": "log-2014-1-26",
    "question": "The argument form \"If P, then Q. Q. Therefore, P.\" is:",
    "options": [
      "Valid",
      "Invalid",
      "Sound",
      "Both A and C"
    ],
    "correctAnswer": 1,
    "explanation": "This argument form is invalid. It is a formal fallacy known as Affirming the Consequent. Just because the consequent (Q) is true, it does not mean the antecedent (P) must be true.",
    "subject": "logic",
    "year": 2014,
    "chapter": 1
  },
  {
    "id": "log-2014-1-27",
    "question": "'No Ethiopian wolf is a domesticated animal because all Ethiopian wolves are wild animals and no wild animal is a domesticated animal.' This argument is an example of a(n):",
    "options": [
      "Deductive and Valid argument",
      "Inductive and Strong argument",
      "Deductive and Sound argument",
      "Inductive and Cogent argument"
    ],
    "correctAnswer": 2,
    "explanation": "This is a Deductive and Sound argument. It is deductive because the conclusion necessarily follows from the premises. It is sound because the form is valid, and the premises (\"all Ethiopian wolves are wild animals\" and \"no wild animal is a domesticated animal\") are factually true.",
    "subject": "logic",
    "year": 2014,
    "chapter": 1
  },
  {
    "id": "log-2014-1-28",
    "question": "In a valid deductive argument, if the premises are true, the conclusion must be:",
    "options": [
      "True",
      "False",
      "Unsound",
      "Cogent"
    ],
    "correctAnswer": 0,
    "explanation": "This is the definition of a valid deductive argument. If the premises are true, the conclusion is guaranteed to be true.",
    "subject": "logic",
    "year": 2014,
    "chapter": 1
  },
  {
    "id": "log-2014-1-29",
    "question": "The argument \"Ethiopia’s coffee ceremony is a long-standing tradition. Therefore, it will probably continue to be a tradition in the future.\" is:",
    "options": [
      "Deductive, Valid",
      "Inductive, Strong",
      "Deductive, Invalid",
      "Inductive, Weak"
    ],
    "correctAnswer": 1,
    "explanation": "This is a strong inductive argument. It's inductive because it uses a pattern of past behavior (long-standing tradition) to make a probable prediction about the future. It's strong because a long history of a tradition makes its continuation highly probable.",
    "subject": "logic",
    "year": 2014,
    "chapter": 1
  },
  {
    "id": "log-2014-1-30",
    "question": "The conclusion of a valid deductive argument is always true. (True or False)",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": 1,
    "explanation": "This statement is false. A valid argument's conclusion is only guaranteed to be true if its premises are all true. If one or more premises are false, a valid argument can still have a false conclusion.",
    "subject": "logic",
    "year": 2014,
    "chapter": 1
  },
  {
    "id": "log-2014-1-31",
    "question": "'The reason for the decline in tourism in the Omo Valley is that recent droughts have made travel to the region difficult and have reduced access to clean water.' This passage is best identified as a(n):",
    "options": [
      "Argument",
      "Report",
      "Explanation",
      "Illustration"
    ],
    "correctAnswer": 2,
    "explanation": "This passage is an explanation. It provides a causal account for a known fact (the decline in tourism). It is not trying to convince the reader that tourism has declined, but rather to explain why it has.",
    "subject": "logic",
    "year": 2014,
    "chapter": 1
  },
  {
    "id": "log-2014-1-32",
    "question": "The passage: 'A shamma is a traditional handwoven cotton cloth from Ethiopia. It is typically worn as a shawl and is often embroidered with intricate patterns.' This is a(n):",
    "options": [
      "Argument",
      "Explanation",
      "Report",
      "Illustration"
    ],
    "correctAnswer": 2,
    "explanation": "This is a report. It simply presents factual information about a shamma without offering any reasons to prove a claim. It's a descriptive passage.",
    "subject": "logic",
    "year": 2014,
    "chapter": 1
  },
  {
    "id": "log-2014-1-33",
    "question": "Which of the following is an argument?",
    "options": [
      "The Nile River is the longest river in Africa.",
      "The Nile River is the longest river in Africa, and it flows through Ethiopia.",
      "Since the Nile River is the longest river in Africa, it is the most important for the countries it flows through.",
      "A picture of the Nile River."
    ],
    "correctAnswer": 2,
    "explanation": "Statement C is an argument. The word \"since\" acts as a premise indicator, and the passage offers a reason (being the longest river) for a conclusion (it is the most important for the countries it flows through).",
    "subject": "logic",
    "year": 2014,
    "chapter": 1
  },
  {
    "id": "log-2014-1-34",
    "question": "A passage that uses examples to clarify a point is called a(n):",
    "options": [
      "Argument",
      "Explanation",
      "Report",
      "Illustration"
    ],
    "correctAnswer": 3,
    "explanation": "An illustration is a passage that uses one or more examples to show what a general claim means. It clarifies a point rather than proving it.",
    "subject": "logic",
    "year": 2014,
    "chapter": 1
  },
  {
    "id": "log-2014-1-35",
    "question": "The passage 'Ethiopian Orthodox churches, such as those in Lalibela, are a marvel of ancient architecture because they were carved directly out of the ground.' This is an example of a(n):",
    "options": [
      "Argument",
      "Explanation",
      "Report",
      "Illustration"
    ],
    "correctAnswer": 1,
    "explanation": "This is an explanation. The word \"because\" signals that the passage is providing a reason for a known fact (that the churches are a marvel), not trying to prove that they are.",
    "subject": "logic",
    "year": 2014,
    "chapter": 1
  },
  {
    "id": "log-2014-1-36",
    "question": "An explanation differs from an argument primarily in its:",
    "options": [
      "Use of logical indicators",
      "Purpose",
      "Length",
      "Factual accuracy"
    ],
    "correctAnswer": 1,
    "explanation": "The primary difference is purpose. An argument aims to prove a conclusion, while an explanation aims to provide a causal account for why something is the way it is.",
    "subject": "logic",
    "year": 2014,
    "chapter": 1
  },
  {
    "id": "log-2014-1-37",
    "question": "The phrase \"in conclusion\" is a classic indicator of a(n):",
    "options": [
      "Premise",
      "Conclusion",
      "Explanation",
      "Report"
    ],
    "correctAnswer": 1,
    "explanation": "\"In conclusion\" is a classic conclusion indicator. It signals that the statement that follows is the main point the arguer is trying to make.",
    "subject": "logic",
    "year": 2014,
    "chapter": 1
  },
  {
    "id": "log-2014-1-38",
    "question": "'The reason the Ethiopian calendar is different from the Gregorian calendar is that it is based on an older, more accurate calculation of the birth of Jesus.' This passage is a(n):",
    "options": [
      "Argument",
      "Explanation",
      "Report",
      "Illustration"
    ],
    "correctAnswer": 1,
    "explanation": "This is an explanation. The phrase \"The reason...is that\" explicitly indicates that the passage is providing a causal account for a fact about the Ethiopian calendar.",
    "subject": "logic",
    "year": 2014,
    "chapter": 1
  },
  {
    "id": "log-2014-1-39",
    "question": "A passage that uses \"because\" is always an argument. (True or False)",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": 1,
    "explanation": "This is false. The word \"because\" is an indicator of both a premise in an argument and a causal reason in an explanation. The context of the passage determines which function it serves.",
    "subject": "logic",
    "year": 2014,
    "chapter": 1
  },
  {
    "id": "log-2014-1-40",
    "question": "An argument's premises are:",
    "options": [
      "Claims that are always true.",
      "Claims that are intended to be supported.",
      "Claims that provide evidence to support a conclusion.",
      "The result of the argument's logic."
    ],
    "correctAnswer": 2,
    "explanation": "Premises are the statements in an argument that are used to provide reasons or evidence for the conclusion. They are the building blocks of the argument.",
    "subject": "logic",
    "year": 2014,
    "chapter": 1
  },
  {
    "id": "log-2014-1-41",
    "question": "Which of the following is a premise indicator?",
    "options": [
      "Consequently",
      "Hence",
      "Since",
      "Therefore"
    ],
    "correctAnswer": 2,
    "explanation": "\"Since\" is a common premise indicator. Words like \"consequently,\" \"hence,\" and \"therefore\" are all conclusion indicators.",
    "subject": "logic",
    "year": 2014,
    "chapter": 1
  },
  {
    "id": "log-2014-1-42",
    "question": "What is the conclusion of the following argument? \"Many people believe that the Ethiopian flag is a symbol of national pride. Because it has historical significance and represents unity, it is indeed a powerful symbol of national pride.\"",
    "options": [
      "Many people believe that the Ethiopian flag is a symbol of national pride.",
      "It has historical significance.",
      "The Ethiopian flag is a powerful symbol of national pride.",
      "The flag represents unity."
    ],
    "correctAnswer": 2,
    "explanation": "The conclusion is \"The Ethiopian flag is a powerful symbol of national pride.\" The word \"because\" signals that the statements that follow it are premises, supporting the main claim that precedes them.",
    "subject": "logic",
    "year": 2014,
    "chapter": 1
  },
  {
    "id": "log-2014-1-43",
    "question": "Which of the following statements about argument structure is correct?",
    "options": [
      "An argument must have at least two premises.",
      "The conclusion of an argument must be a single statement.",
      "The premises and conclusion can appear in any order.",
      "An argument can have multiple conclusions."
    ],
    "correctAnswer": 2,
    "explanation": "The premises and conclusion can appear in any order. The conclusion may come at the beginning, middle, or end of a passage. The logical relationship, not the physical order, defines the argument.",
    "subject": "logic",
    "year": 2014,
    "chapter": 1
  },
  {
    "id": "log-2014-1-44",
    "question": "Which of the following is a sufficient condition for an object to be a triangle?",
    "options": [
      "Having three sides",
      "Having three angles",
      "Having a shape with three sides and three angles",
      "Being a geometric figure"
    ],
    "correctAnswer": 2,
    "explanation": "A sufficient condition is one that, if met, guarantees the outcome. Having a shape with three sides and three angles is the full definition of a triangle; therefore, it is a sufficient condition. A and B are necessary conditions, but not sufficient on their own.",
    "subject": "logic",
    "year": 2014,
    "chapter": 1
  },
  {
    "id": "log-2014-1-45",
    "question": "For a human to be a male, it is a necessary condition that they:",
    "options": [
      "Have a beard",
      "Have a Y chromosome",
      "Are muscular",
      "Are taller than a woman"
    ],
    "correctAnswer": 1,
    "explanation": "A necessary condition is one that must be present for an outcome to occur. Having a Y chromosome is a necessary biological condition for a human to be a male. A person could be male without having a beard, being muscular, or being taller than a woman.",
    "subject": "logic",
    "year": 2014,
    "chapter": 1
  },
  {
    "id": "log-2014-1-46",
    "question": "\"Being an Ethiopian citizen\" is a necessary condition for \"being born in Addis Ababa.\" (True or False)",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": 1,
    "explanation": "This is false. The statement has the relationship backward. Being born in Addis Ababa is a sufficient condition for being an Ethiopian citizen, but it is not necessary. A person can be an Ethiopian citizen without being born in Addis Ababa (e.g., being born in Gondar or to Ethiopian parents abroad).",
    "subject": "logic",
    "year": 2014,
    "chapter": 1
  },
  {
    "id": "log-2014-1-47",
    "question": "In the statement, \"If it is raining (P), then the ground is wet (Q),\" the condition of the ground being wet is a(n) ________ condition for it raining.",
    "options": [
      "Sufficient",
      "Necessary",
      "Both A and B",
      "Neither A nor B"
    ],
    "correctAnswer": 1,
    "explanation": "The ground being wet (Q) is a necessary condition for it raining (P). This means that if it's raining, the ground must be wet. However, the ground being wet is not a sufficient condition for it raining (e.g., someone could have hosed it down).",
    "subject": "logic",
    "year": 2014,
    "chapter": 1
  },{"id": "log-2015-1-1",
    "question": "Which of the following is a sufficient condition for a valid argument to be sound?",
    "options": [
      "Its premises are all true.",
      "Its conclusion is true.",
      "It is an inductive argument.",
      "It is a valid and strong argument."
    ],
    "correctAnswer": 0,
    "explanation": "For a valid argument, the premises being true is a sufficient condition for it to be sound. A sound argument is defined as a valid argument with all true premises.",
    "subject": "logic",
    "year": 2015,
    "chapter": 1
  },
  {
    "id": "log-2015-1-2",
    "question": "A statement that contains an expression or term that is too vague or ambiguous to be a precise premise is called a(n):",
    "options": [
      "Unsound argument",
      "Uncogent argument",
      "Non-argument",
      "Unclear statement"
    ],
    "correctAnswer": 3,
    "explanation": "A statement that contains a vague or ambiguous term is an unclear statement. Such statements often make it difficult to evaluate the argument's premises properly. They are neither arguments nor non-arguments, but a type of statement with a logical flaw.",
    "subject": "logic",
    "year": 2015,
    "chapter": 1
  },
  {
    "id": "log-2015-1-3",
    "question": "Which of the following best describes the relationship between validity and truth?",
    "options": [
      "Validity is a property of premises, while truth is a property of arguments.",
      "A valid argument must have true premises.",
      "Validity refers to the structure of an argument, while truth refers to the content of statements.",
      "An invalid argument can never have a true conclusion."
    ],
    "correctAnswer": 2,
    "explanation": "The correct answer is C. Validity is a property of a deductive argument's logical form; it's about whether the conclusion necessarily follows from the premises. Truth, on the other hand, is a property of individual statements or propositions, referring to their factual accuracy. An argument's validity and the truth of its statements are separate concepts.",
    "subject": "logic",
    "year": 2015,
    "chapter": 1
  },
  {
    "id": "log-2015-1-4",
    "question": "An argument is considered sound if and only if it is:",
    "options": [
      "Valid and has at least one true premise.",
      "Invalid but has all true premises.",
      "Valid and has all true premises.",
      "Strong and has a true conclusion."
    ],
    "correctAnswer": 2,
    "explanation": "An argument is sound if and only if it meets two criteria: it is a valid deductive argument, and all of its premises are factually true. Both conditions must be met for an argument to be sound.",
    "subject": "logic",
    "year": 2015,
    "chapter": 1
  },
  {
    "id": "log-2015-1-5",
    "question": "Consider the following argument: \"All dogs are mammals. Fido is a dog. Therefore, Fido is a mammal.\" This argument is:",
    "options": [
      "Invalid and unsound.",
      "Valid but unsound.",
      "Valid and sound.",
      "Inductive and strong."
    ],
    "correctAnswer": 2,
    "explanation": "This is a valid and sound argument. It is a deductive argument, and its structure is valid (All S are P. X is an S. Therefore, X is a P). Both of its premises (\"All dogs are mammals\" and \"Fido is a dog\") are factually true. Therefore, the argument is sound.",
    "subject": "logic",
    "year": 2015,
    "chapter": 1
  },
  {
    "id": "log-2015-1-6",
    "question": "Which of the following is an example of an inductive argument?",
    "options": [
      "All humans are mortal. Socrates is a human. Therefore, Socrates is mortal.",
      "If it is raining, the ground is wet. The ground is wet. Therefore, it is raining.",
      "The sun has risen every day for the past billion years. Therefore, the sun will probably rise tomorrow.",
      "Either the cat is on the mat or it is not. The cat is not on the mat. Therefore, the cat is on the mat."
    ],
    "correctAnswer": 2,
    "explanation": "Option C is an inductive argument. It uses a pattern of past observations (the sun rising every day) to make a probable prediction about a future event. The conclusion is not guaranteed, only probable.",
    "subject": "logic",
    "year": 2015,
    "chapter": 1
  },
  {
    "id": "log-2015-1-7",
    "question": "The existence of a cause is a necessary condition for the existence of an effect, but it is not a sufficient condition.",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": 0,
    "explanation": "This statement is True. A necessary condition is required for an event to occur, while a sufficient condition guarantees that it will. For an effect to exist, a cause must exist (a necessary condition). However, a cause may exist without the effect occurring (e.g., a match exists, but it hasn't been lit yet).",
    "subject": "logic",
    "year": 2015,
    "chapter": 1
  },
  {
    "id": "log-2015-1-8",
    "question": "Which of the following combinations of truth values is impossible for a deductively valid argument?",
    "options": [
      "True premises, True conclusion.",
      "False premises, True conclusion.",
      "True premises, False conclusion.",
      "False premises, False conclusion."
    ],
    "correctAnswer": 2,
    "explanation": "The combination of True premises, False conclusion is impossible for a deductively valid argument. By definition, a valid argument is one where it's logically impossible for the premises to be true while the conclusion is false. This is the ultimate test of validity.",
    "subject": "logic",
    "year": 2015,
    "chapter": 1
  },
  {
    "id": "log-2015-1-9",
    "question": "An argument from analogy is a type of inductive argument that draws a conclusion based on:",
    "options": [
      "A specific observation about a group.",
      "A prediction about a future event.",
      "The similarity between two or more things.",
      "A general principle applied to a specific case."
    ],
    "correctAnswer": 2,
    "explanation": "An argument from analogy draws a conclusion about one thing based on its similarity to another. The argument assumes that because two things are alike in some respects, they are also likely to be alike in other, unobserved respects.",
    "subject": "logic",
    "year": 2015,
    "chapter": 1
  },
  {
    "id": "log-2015-1-10",
    "question": "The following passage is a statement of fact: \"The capital of Ethiopia is Addis Ababa.\"",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": 0,
    "explanation": "This statement is True. The phrase is a statement of fact because it makes a claim that can be verified and is objectively true.",
    "subject": "logic",
    "year": 2015,
    "chapter": 1
  },
  {
    "id": "log-2015-1-11",
    "question": "\"Either I will pass the exam or I will fail it. I passed the exam. Therefore, I will not fail it.\" This argument is an example of a:",
    "options": [
      "Valid deductive argument.",
      "Invalid deductive argument.",
      "Strong inductive argument.",
      "Weak inductive argument."
    ],
    "correctAnswer": 0,
    "explanation": "This is a valid deductive argument. Its logical form is \"Either P or Q. P. Therefore, not Q,\" which is a variation of Disjunctive Syllogism, a valid deductive argument form. The conclusion logically and necessarily follows from the premises.",
    "subject": "logic",
    "year": 2015,
    "chapter": 1
  },
  {
    "id": "log-2015-1-12",
    "question": "The argument: \"My car's engine has been making a strange knocking sound. The check engine light is on. Therefore, my car probably needs a new engine.\" is an example of a(n):",
    "options": [
      "Deductive argument.",
      "Inductive argument based on prediction.",
      "Inductive argument from authority.",
      "Inductive argument based on causal inference."
    ],
    "correctAnswer": 3,
    "explanation": "This is an inductive argument based on causal inference. It makes a probable conclusion about the cause of a set of effects (knocking sound, check engine light). The conclusion is not certain, but it's a likely explanation for the observed symptoms.",
    "subject": "logic",
    "year": 2015,
    "chapter": 1
  },
  {
    "id": "log-2015-1-13",
    "question": "The statements \"What a beautiful day!\" and \"Close the door.\" are considered non-statements because they:",
    "options": [
      "Cannot be used in an argument.",
      "Express feelings or commands rather than claims that can be true or false.",
      "Do not contain indicator words.",
      "Are always part of inductive arguments."
    ],
    "correctAnswer": 1,
    "explanation": "These are non-statements because they are not claims that can be evaluated as either true or false. \"What a beautiful day!\" is an expression of feeling, and \"Close the door.\" is a command. Only statements that have a truth value can function as premises or conclusions in an argument.",
    "subject": "logic",
    "year": 2015,
    "chapter": 1
  },
  {
    "id": "log-2015-1-14",
    "question": "What is the key difference between a valid and a sound argument?",
    "options": [
      "A valid argument has a strong conclusion, while a sound one has a true conclusion.",
      "A valid argument guarantees the conclusion follows from the premises, while a sound one also requires the premises to be true.",
      "A valid argument is a type of inductive argument, while a sound one is a type of deductive argument.",
      "A valid argument must be strong, while a sound one must be valid."
    ],
    "correctAnswer": 1,
    "explanation": "The key difference is that soundness adds the requirement of factual truth to validity. A valid argument has the right structure. A sound argument has the right structure and is also factually correct.",
    "subject": "logic",
    "year": 2015,
    "chapter": 1
  },
  {
    "id": "log-2015-1-15",
    "question": "\"If you are a student, then you have to study. You are not a student. Therefore, you don't have to study.\" This argument is:",
    "options": [
      "Valid and sound.",
      "Invalid.",
      "Valid but unsound.",
      "Both A and B."
    ],
    "correctAnswer": 1,
    "explanation": "This argument is invalid. It is a formal fallacy known as Denying the Antecedent (\"If P then Q. Not P. Therefore, Not Q.\"). The conclusion does not logically follow from the premises, as a person might have to study for reasons other than being a student.",
    "subject": "logic",
    "year": 2015,
    "chapter": 1
  },
  {
    "id": "log-2015-1-16",
    "question": "The conclusion of a valid argument:",
    "options": [
      "Is always factually true.",
      "Must be true if the premises are true.",
      "Must be factually false if the premises are false.",
      "Is irrelevant to the validity of the argument."
    ],
    "correctAnswer": 1,
    "explanation": "By definition, in a valid deductive argument, if the premises are true, the conclusion must also be true. This is the very essence of a valid deductive argument's structure.",
    "subject": "logic",
    "year": 2015,
    "chapter": 1
  },
  {
    "id": "log-2015-1-17",
    "question": "An argument from authority is strong only if:",
    "options": [
      "The source is a recognized expert in the field.",
      "The source is a well-known celebrity.",
      "The argument uses strong language like \"certainly\" or \"definitely.\"",
      "The source has a personal belief in the conclusion."
    ],
    "correctAnswer": 0,
    "explanation": "An argument from authority is a type of inductive argument that is strong only when the source cited is a recognized expert in the relevant subject area. A celebrity's opinion, strong language, or personal belief does not make the argument strong.",
    "subject": "logic",
    "year": 2015,
    "chapter": 1
  },
  {
    "id": "log-2015-1-18",
    "question": "Which of the following is a non-statement?",
    "options": [
      "The moon is made of cheese.",
      "Ethiopia has a larger population than Somalia.",
      "Why is the sky blue?",
      "Addis Ababa is the capital of Ethiopia."
    ],
    "correctAnswer": 2,
    "explanation": "\"Why is the sky blue?\" is a non-statement because it is a question, not a declarative sentence that can be judged as true or false.",
    "subject": "logic",
    "year": 2015,
    "chapter": 1
  },
  {
    "id": "log-2016-1-1",
    "question": "The phrase \"The reason that...\" is most likely to introduce a:",
    "options": [
      "Conclusion.",
      "Statement of belief.",
      "Premise.",
      "Inductive argument."
    ],
    "correctAnswer": 2,
    "explanation": "The phrase \"The reason that...\" is a classic premise indicator. It introduces the evidence or reason for a claim, which is the premise of an argument. It can also introduce an explanation.",
    "subject": "logic",
    "year": 2016,
    "chapter": 1
  },
  {
    "id": "log-2016-1-2",
    "question": "Which of the following makes an inductive argument cogent?",
    "options": [
      "It is valid and has a true conclusion.",
      "It is strong and has a false premise.",
      "It is weak but has a true conclusion.",
      "It is strong and has all true premises."
    ],
    "correctAnswer": 3,
    "explanation": "A cogent argument is the inductive equivalent of a sound argument. It is an inductive argument that is both strong and has all true premises.",
    "subject": "logic",
    "year": 2016,
    "chapter": 1
  },
  {
    "id": "log-2016-1-3",
    "question": "The conclusion of an argument is the statement that:",
    "options": [
      "Provides reasons to support another statement.",
      "Is claimed to be supported by other statements.",
      "Is always true.",
      "Can only be a command or a question."
    ],
    "correctAnswer": 1,
    "explanation": "The conclusion is the central claim of an argument, the statement that the arguer is trying to prove. It is the statement that is supported by the premises.",
    "subject": "logic",
    "year": 2016,
    "chapter": 1
  },
  {
    "id": "log-2016-1-4",
    "question": "The argument \"Most American presidents have been men. Therefore, the next American president will probably be a man.\" is a(n):",
    "options": [
      "Argument from analogy.",
      "Causal inference.",
      "Statistical argument.",
      "Deductive argument."
    ],
    "correctAnswer": 2,
    "explanation": "This is a statistical argument, a type of inductive argument that uses statistical data or a general trend to draw a probable conclusion about a specific instance. The premise is based on a majority, and the conclusion is a prediction based on that statistic.",
    "subject": "logic",
    "year": 2016,
    "chapter": 1
  },
  {
    "id": "log-2016-1-5",
    "question": "\"In order to be a father, one must have a child.\" This statement indicates that having a child is a:",
    "options": [
      "Sufficient condition for being a father.",
      "Necessary condition for being a father.",
      "Both a necessary and sufficient condition.",
      "Neither a necessary nor a sufficient condition."
    ],
    "correctAnswer": 1,
    "explanation": "This statement means that having a child is a necessary condition for being a father. You can't be a father without a child. However, it's not a sufficient condition, as a person with a child might not be the father (e.g., an uncle or a legal guardian).",
    "subject": "logic",
    "year": 2016,
    "chapter": 1
  },
  {
    "id": "log-2016-1-6",
    "question": "A valid deductive argument can be described as a relationship where:",
    "options": [
      "The conclusion is probably true if the premises are true.",
      "The conclusion is certainly true if the premises are true.",
      "The premises are true, and the conclusion is true.",
      "The conclusion is always true, regardless of the premises."
    ],
    "correctAnswer": 1,
    "explanation": "This is the definition of a valid deductive argument. The logical structure guarantees that if the premises are true, the conclusion must be true with certainty.",
    "subject": "logic",
    "year": 2016,
    "chapter": 1
  },
  {
    "id": "log-2016-1-7",
    "question": "What is a key characteristic of a sound argument?",
    "options": [
      "It is valid, and its premises and conclusion are all true.",
      "Its conclusion follows with certainty from the premises.",
      "It is an inductive argument with a strong conclusion.",
      "It has a high probability of being true."
    ],
    "correctAnswer": 0,
    "explanation": "A sound argument is a deductive argument that is both valid and has all factually true premises. This ensures that the conclusion is also true.",
    "subject": "logic",
    "year": 2016,
    "chapter": 1
  },
  {
    "id": "log-2016-1-8",
    "question": "The phrase \"it is safe to conclude that...\" is an example of a:",
    "options": [
      "Premise indicator.",
      "Conclusion indicator.",
      "Non-statement.",
      "Warning."
    ],
    "correctAnswer": 1,
    "explanation": "This phrase is a conclusion indicator. It signals that the following statement is the main claim that the arguer is putting forth, based on the preceding premises.",
    "subject": "logic",
    "year": 2016,
    "chapter": 1
  },
  {
    "id": "log-2016-1-9",
    "question": "The argument \"I have never seen a black swan before. Therefore, all swans are white.\" is a:",
    "options": [
      "Strong inductive argument.",
      "Weak inductive argument.",
      "Valid deductive argument.",
      "Sound argument."
    ],
    "correctAnswer": 1,
    "explanation": "This is a weak inductive argument. The conclusion (\"all swans are white\") is a sweeping generalization based on a very limited number of observations. A single counterexample (a black swan) would immediately prove the conclusion false, which is why it's a weak argument.",
    "subject": "logic",
    "year": 2016,
    "chapter": 1
  },
  {
    "id": "log-2016-1-10",
    "question": "\"If the car is on, the engine is running. The engine is not running. Therefore, the car is not on.\" This is an example of:",
    "options": [
      "Affirming the antecedent.",
      "Modus ponens.",
      "Denying the consequent.",
      "Modus tollens."
    ],
    "correctAnswer": 3,
    "explanation": "This is an example of Modus Tollens, a valid deductive argument form. Its structure is \"If P then Q. Not Q. Therefore, Not P.\" It is also known as \"denying the consequent.\"",
    "subject": "logic",
    "year": 2016,
    "chapter": 1
  },
  {
    "id": "log-2016-1-11",
    "question": "The term \"truth value\" refers to:",
    "options": [
      "The value of an argument's validity.",
      "The degree of strength of an inductive argument.",
      "The property of a statement being either true or false.",
      "The number of premises in an argument."
    ],
    "correctAnswer": 2,
    "explanation": "The truth value of a statement is its property of being either true or false. Only statements or propositions can have a truth value. Arguments themselves are not true or false; they are valid/invalid or strong/weak.",
    "subject": "logic",
    "year": 2016,
    "chapter": 1
  },
  {
    "id": "log-2016-1-12",
    "question": "A deductive argument can be defined as one in which the conclusion:",
    "options": [
      "Follows with certainty from the premises.",
      "Is highly probable given the premises.",
      "Is a matter of personal opinion.",
      "Is based on a generalization from a specific case."
    ],
    "correctAnswer": 0,
    "explanation": "The defining characteristic of a deductive argument is that it attempts to provide a conclusion that is certain to be true if its premises are true. The relationship is one of logical necessity.",
    "subject": "logic",
    "year": 2016,
    "chapter": 1
  },
  {
    "id": "log-2016-1-13",
    "question": "An argument is invalid if:",
    "options": [
      "All of its premises are false.",
      "Its conclusion is false.",
      "The conclusion does not necessarily follow from the premises.",
      "It is an inductive argument."
    ],
    "correctAnswer": 2,
    "explanation": "An argument is invalid if its logical form is flawed, meaning the conclusion does not necessarily follow from the premises, regardless of the factual truth of those premises.",
    "subject": "logic",
    "year": 2016,
    "chapter": 1
  },
  {
    "id": "log-2016-1-14",
    "question": "Which of the following is a statement of opinion rather than fact?",
    "options": [
      "The Earth revolves around the sun.",
      "The capital of France is Paris.",
      "Chocolate ice cream is the best flavor.",
      "Water freezes at 0 degrees Celsius."
    ],
    "correctAnswer": 2,
    "explanation": "\"Chocolate ice cream is the best flavor\" is a statement of opinion. It is a subjective claim that cannot be proven true or false. The other options are objective facts.",
    "subject": "logic",
    "year": 2016,
    "chapter": 1
  },
  {
    "id": "log-2016-1-15",
    "question": "What is the primary function of a premise in an argument?",
    "options": [
      "To introduce the main idea.",
      "To provide evidence or reasons.",
      "To state the final conclusion.",
      "To ask a question."
    ],
    "correctAnswer": 1,
    "explanation": "The primary function of a premise is to provide the evidence, reasons, or support for the conclusion of an argument.",
    "subject": "logic",
    "year": 2016,
    "chapter": 1
  },
  {
    "id": "log-2016-1-16",
    "question": "The existence of an argument in a passage is dependent on the presence of:",
    "options": [
      "A question.",
      "A command.",
      "An attempt to prove one statement from another.",
      "A simple explanation of a fact."
    ],
    "correctAnswer": 2,
    "explanation": "An argument exists in a passage when one statement (the conclusion) is being supported by one or more other statements (the premises). This \"attempt to prove\" is the defining characteristic of an argument.",
    "subject": "logic",
    "year": 2016,
    "chapter": 1
  },
  {
    "id": "log-2016-1-17",
    "question": "The argument \"The patient has a fever, chills, and a cough. These are all common symptoms of the flu. Therefore, the patient probably has the flu.\" is an example of:",
    "options": [
      "An invalid deductive argument.",
      "A valid deductive argument.",
      "A strong inductive argument.",
      "A weak inductive argument."
    ],
    "correctAnswer": 2,
    "explanation": "This is a strong inductive argument from causal inference. The premises provide strong evidence for the probable conclusion, but the conclusion is not guaranteed, as other illnesses could have the same symptoms.",
    "subject": "logic",
    "year": 2016,
    "chapter": 1
  },
  {
    "id": "log-2016-1-18",
    "question": "A valid deductive argument can be unsound if:",
    "options": [
      "Its premises are false.",
      "Its conclusion is false.",
      "It is an inductive argument.",
      "The premises are true, and the conclusion is false."
    ],
    "correctAnswer": 0,
    "explanation": "A valid deductive argument is unsound if at least one of its premises is factually false. A valid argument with true premises is sound.",
    "subject": "logic",
    "year": 2016,
    "chapter": 1
  },
  {
    "id": "log-2016-1-19",
    "question": "The phrase \"if and only if\" indicates a relationship of:",
    "options": [
      "A necessary condition only.",
      "A sufficient condition only.",
      "Both a necessary and sufficient condition.",
      "Neither a necessary nor a sufficient condition."
    ],
    "correctAnswer": 2,
    "explanation": "The phrase \"if and only if\" indicates that a condition is both necessary and sufficient. This means that if the condition is met, the outcome is guaranteed, and if the outcome occurs, the condition must have been met.",
    "subject": "logic",
    "year": 2016,
    "chapter": 1
  },
  {
    "id": "log-2016-1-20",
    "question": "In logic, the term \"proposition\" is synonymous with:",
    "options": [
      "Argument.",
      "Statement.",
      "Premise.",
      "Conclusion."
    ],
    "correctAnswer": 1,
    "explanation": "In logic, a proposition is synonymous with a statement or a claim. It is a declarative sentence that has a truth value (it is either true or false).",
    "subject": "logic",
    "year": 2016,
    "chapter": 1
  },
  {
    "id": "log-2016-1-21",
    "question": "An argument is weak if:",
    "options": [
      "The conclusion is not supported by the premises.",
      "It has false premises.",
      "It has a false conclusion.",
      "It is a deductive argument."
    ],
    "correctAnswer": 0,
    "explanation": "An inductive argument is weak if its premises fail to make the conclusion probable. The conclusion simply does not follow with a high degree of support from the evidence provided.",
    "subject": "logic",
    "year": 2016,
    "chapter": 1
  },
  {
    "id": "log-2016-1-22",
    "question": "A passage of report is a type of non-argument because it:",
    "options": [
      "Lacks premises and a conclusion.",
      "Simply informs without attempting to prove anything.",
      "Is always false.",
      "Is only used in legal documents."
    ],
    "correctAnswer": 1,
    "explanation": "A report is a non-argument because its purpose is to convey information or describe events, not to provide reasons to support a particular conclusion.",
    "subject": "logic",
    "year": 2016,
    "chapter": 1
  },
  {
    "id": "log-2016-1-23",
    "question": "An argument from prediction is a type of inductive argument that draws a conclusion based on:",
    "options": [
      "Past observations to make a claim about the future.",
      "A general rule to make a specific claim.",
      "The similarity between two objects.",
      "A causal link between events."
    ],
    "correctAnswer": 0,
    "explanation": "An argument from prediction is a classic inductive argument form that uses a pattern of past events to predict what will happen in the future.",
    "subject": "logic",
    "year": 2016,
    "chapter": 1
  },
  {
    "id": "log-2016-1-24",
    "question": "A sound argument is best described as:",
    "options": [
      "An invalid argument with a true conclusion.",
      "A valid argument with a strong conclusion.",
      "A valid argument with a true conclusion.",
      "A strong argument with a true conclusion."
    ],
    "correctAnswer": 2,
    "explanation": "A sound argument is a valid argument that also has true premises, which in turn guarantees a true conclusion.",
    "subject": "logic",
    "year": 2016,
    "chapter": 1
  },
  // ==================== LOGIC QUESTIONS ====================
  
  //logic-2013-1-1
  
// ==================== LOGIC CHAPTER 1 QUESTIONS (30) ====================
{
    "id": "log-2013-1-1",
    "question": "If all cats are mammals and all mammals are animals, then all cats are?(AST)",
    "options": [
      "Animals",
      "Plants",
      "Minerals",
      "None of the above"
    ],
    "correctAnswer": 0,
    "explanation": "This is a classic syllogism. The conclusion 'All cats are animals' necessarily follows from the two premises.",
    "subject": "logic",
    "year": 2013,
    "chapter": 1
  },
  {
    "id": "log-2013-1-2",
    "question": "For the past twenty-five years, Ethiopian athletes have been dominant in the world of athletics. Thus, Ethiopian athletes will probably remain dominant in the coming couple of years. This argument is an example of a(n) _______ argument.",
    "options": [
      "deductive",
      "inductive"
    ],
    "correctAnswer": 1,
    "explanation": "This is an inductive argument. Inductive arguments move from specific observations (past performance) to a broader, probable conclusion (future performance). The conclusion is not guaranteed to be true, but it is made probable by the premises.",
    "subject": "logic",
    "year": 2013,
    "chapter": 1
  },
  {
    "id": "log-2013-1-3",
    "question": "All managers are journalists. All journalists are lawyers. So, all lawyers are journalists. This argument is said to be:",
    "options": [
      "Valid Categorical Syllogism",
      "Invalid Argument",
      "Uncogent Syllogism",
      "Cogent Syllogism",
      "Valid Hypothetical Syllogism",
      "Invalid Disjunctive Syllogism"
    ],
    "correctAnswer": 1,
    "explanation": "This is an invalid argument. The conclusion \"all lawyers are journalists\" does not logically follow from the premises. Even if the premises were true, the conclusion would not be. The premises establish a relationship from managers to journalists to lawyers, but do not support the inverse relationship from lawyers to journalists. This is a fallacy of illicit major/minor in categorical logic.",
    "subject": "logic",
    "year": 2013,
    "chapter": 1
  },
  {
    "id": "log-2013-1-4",
    "question": "No cat is a reptile owing to all cats are dogs and no dog is a reptile. What would be the proper name of this argument in terms of both inferential and factual claims?",
    "options": [
      "Sound",
      "Unsound",
      "Valid",
      "Invalid",
      "Cogent",
      "A and B"
    ],
    "correctAnswer": 1,
    "explanation": "This argument is unsound. An argument is sound if and only if it is valid and all of its premises are actually true. The argument \"No cat is a reptile owing to all cats are dogs and no dog is a reptile\" is logically valid (the conclusion necessarily follows from the premises). However, the premise \"all cats are dogs\" is factually false. Therefore, the argument is unsound.",
    "subject": "logic",
    "year": 2013,
    "chapter": 1
  },
  {
    "id": "log-2013-1-5",
    "question": "Yesterday I bought new jeans with a tag that reads, 'Made in U.S.A'. Thus, my new jeans were made in the U.S.A. This argument is:",
    "options": [
      "Deductive, Uncogent",
      "Inductive, Strong",
      "Deductive, Unsound",
      "Inductive, Weak",
      "Deductive, Valid"
    ],
    "correctAnswer": 1,
    "explanation": "This is a strong inductive argument. It moves from a specific observation (the tag) to a probable conclusion (the jeans were made in the U.S.A.). It is strong because the premise provides a high degree of probability for the conclusion. It's not deductive because the conclusion is not guaranteed, as the tag could be wrong.",
    "subject": "logic",
    "year": 2013,
    "chapter": 1
  },
  {
    "id": "log-2013-1-6",
    "question": "A cogent argument requires one of the following combinations:",
    "options": [
      "Strength and Validity",
      "Strength and Truth",
      "Validity and Truth",
      "Soundness and Strength",
      "All, but not 'D'",
      "None"
    ],
    "correctAnswer": 1,
    "explanation": "A cogent argument is a type of strong inductive argument with all true premises. Therefore, it requires both strength (the logical connection between premises and conclusion) and truth (the premises must be factually correct).",
    "subject": "logic",
    "year": 2013,
    "chapter": 1
  },
  {
    "id": "log-2013-1-7",
    "question": "Which one of the following statements is incorrect?",
    "options": [
      "Strength or validity is about the logical connection between the premises and the conclusion.",
      "An argument is valid if and only if there is no logically possible situation where all the premises are true and the conclusion is false at the same time.",
      "A sound argument is one where the truth of the premises guarantees the truth of the conclusion, but soundness does not guarantee that the premises are in fact true.",
      "If the premise in an inductive argument is true, there is no guarantee that the conclusion must also be true.",
      "It is possible for a valid argument to have a true conclusion even when all its premises are false in fact."
    ],
    "correctAnswer": 2,
    "explanation": "Statement C is incorrect. A sound argument is a valid deductive argument that has all true premises. Therefore, soundness does, in fact, guarantee that the premises are true. The other statements correctly describe aspects of logical argumentation.",
    "subject": "logic",
    "year": 2013,
    "chapter": 1
  },
  {
    "id": "log-2013-1-8",
    "question": "[A] We were late for class [B] because we were having a breakfast. What we can say about the relationship of these two statements?",
    "options": [
      "A because B here implies no kind of reason at all.",
      "A because B justifies what is the case.",
      "A because B presents both reason of why and what is the case.",
      "A because B explains why something is the case.",
      "A because B in this context says there is identical appearance of the premise and the explanans."
    ],
    "correctAnswer": 3,
    "explanation": "The word \"because\" in this context indicates an explanation. The statement \"we were having a breakfast\" serves to explain the reason \"why\" they were late for class. An explanation presents a causal account for an event, rather than an argument which attempts to prove a conclusion.",
    "subject": "logic",
    "year": 2013,
    "chapter": 1
  },
  {
    "id": "log-2013-1-9",
    "question": "Identify the argument which is odd in its form of argumentation from the given alternatives below:",
    "options": [
      "Both Lionel Messi and Cristiano Ronaldo play in the English Premier League. Messi's payment is 40,000 Euro per week. Ronaldo's weekly payment is less than Messi's by more than half. Accordingly, Ronaldo must be paid 19,500 Euro weekly.",
      "Professional football players are aggressive. Wayne Mark Rooney is a professional footballer. Accordingly, Rooney must be aggressive.",
      "In Africa, there are 59 countries. But for the sake of my study, I took only a sample of 37. The data of my study has already assured these 37 countries are growing by more than single-digit economy. In the context of my study, then it must be the case that most African countries are growing by more than single-digit economy.",
      "I am going to rent a studio which has a length and width of 4 and 5 meters long, respectively. Accordingly, it is certainly true that this studio has a rectangular shape.",
      "Either Samrawit has exactly 10,000 or 7,500 dollars in her bag. Indeed, Samrawit has 10,000 dollars in her bag. Whence, in Samrawit's bag one can find a dollar which is greater than 7,500.",
      "All of the above"
    ],
    "correctAnswer": 2,
    "explanation": "The odd argument is C because it is the only inductive argument among the options. Options A, B, D, and E are all deductive arguments. A and E are based on logical inference, B is a categorical syllogism, and D is based on a mathematical fact. C, however, generalizes from a sample (37 countries) to a conclusion about a larger group (most African countries), which is a key characteristic of an inductive argument.",
    "subject": "logic",
    "year": 2013,
    "chapter": 1
  },
  {
    "id": "log-2013-1-10",
    "question": "A statement that is incorrect about an argument among the following is:",
    "options": [
      "It is necessary for an argument to have one conclusion and more than one premise.",
      "There must be a claim supported or implied by evidence for a passage to contain an argument.",
      "A conclusion of an argument may appear either at the beginning or middle or at the end part of the passage.",
      "At least one of the statements must provide evidence to support or prove a claim.",
      "Evidence is a kind of reason, and the attempt to provide evidence in support of a conclusion is normally called an argument.",
      "Both 'A' and 'C'"
    ],
    "correctAnswer": 0,
    "explanation": "Statement A is incorrect. An argument can have a single premise and a single conclusion. For example, \"It is raining. Therefore, it is wet outside.\" is a simple but complete argument. An argument must have at least one premise and one conclusion, but it doesn't need to have more than one premise.",
    "subject": "logic",
    "year": 2013,
    "chapter": 1
  },
  {
    "id": "log-2013-1-11",
    "question": "If government imposes import restrictions, the price of automobiles will rise. Therefore, since the government will not impose import restrictions, it follows that the price of automobiles will not rise. This argument form is:",
    "options": [
      "Invalid",
      "Valid",
      "Sound",
      "Cogent"
    ],
    "correctAnswer": 0,
    "explanation": "This argument form is invalid. It is a logical fallacy known as Denying the Antecedent. The form is \"If P then Q. Not P. Therefore, Not Q.\" The fact that the government will not impose import restrictions (Not P) does not necessarily mean the price will not rise (Not Q), as other factors could cause the price to rise.",
    "subject": "logic",
    "year": 2013,
    "chapter": 1
  },
  {
    "id": "log-2013-1-12",
    "question": "'The reason poverty is rising worldwide is that the global economy has made it impossible for countries to provide stable working conditions for its citizens.' This passage can be identified as:",
    "options": [
      "Argument",
      "Report",
      "Explanation",
      "Illustration",
      "Exposition"
    ],
    "correctAnswer": 2,
    "explanation": "This passage is an explanation. An explanation provides a reason or cause for why something is the case. The phrase \"The reason...is that\" is a strong indicator that the passage is explaining a phenomenon rather than trying to convince the reader of a conclusion.",
    "subject": "logic",
    "year": 2013,
    "chapter": 1
  },
  {
    "id": "log-2013-1-13",
    "question": "Emperor Tewodros II is the grand architect of Ethiopian modernity. He tried to revolutionize existing relations between the state and church; he tried to build a modern army and also sought to establish foreign relations with Western European nations.",
    "options": [
      "Argument; conclusion: He tried to revolutionize existing relations between the state and church.",
      "Argument; conclusion: he tried to build a modern army.",
      "Expository passage",
      "Loosely associated statements",
      "Argument; conclusion: Emperor Tewodros II is the grand architect of Ethiopian modernity.",
      "All"
    ],
    "correctAnswer": 4,
    "explanation": "This is an argument. The premises (\"He tried to revolutionize...,\" \"he tried to build...,\" and \"also sought to establish...\") are offered as evidence to support the main claim that Emperor Tewodros II is the grand architect of Ethiopian modernity. Therefore, the conclusion is the first statement, and the subsequent statements are premises.",
    "subject": "logic",
    "year": 2013,
    "chapter": 1
  },
  {
    "id": "log-2013-1-14",
    "question": "Claude Sumner initiated the project of studying the written sources of Ethiopian philosophy. He also analyzed the role of oral literature and western literature for the understanding of Ethiopian philosophy. As such, Claude Sumner could be seen as the greatest thinker in the development of Ethiopian philosophy.",
    "options": [
      "Argument; conclusion: initiated the project of studying the written sources of Ethiopian philosophy.",
      "Argument; conclusion: As such, Claude Sumner could be seen as the greatest thinker in the development of Ethiopian philosophy.",
      "Argument; conclusion: analyzed the role of oral literature.",
      "Non-argument",
      "Explanation"
    ],
    "correctAnswer": 1,
    "explanation": "This is an argument. The phrase \"As such\" is a conclusion indicator word. The preceding two statements (\"Claude Sumner initiated the project...\" and \"He also analyzed...\") serve as premises to support the final statement, which is the conclusion.",
    "subject": "logic",
    "year": 2013,
    "chapter": 1
  },
  {
    "id": "log-2013-1-15",
    "question": "Which of the following statements contains a vague expression or term?",
    "options": [
      "The stolen bicycle was found by a man sleeping in the park.",
      "Mr. Hussein, my neighbor, is wealthy.",
      "Elias watched Hareg throw a ball through the window.",
      "Semira said that her apartment is located on Palm Street."
    ],
    "correctAnswer": 1,
    "explanation": "The statement \"Mr. Hussein, my neighbor, is wealthy\" contains a vague term. The term \"wealthy\" is not clearly defined. What constitutes wealth for one person may not for another, making the term imprecise. Statements with clear, definite meanings are not vague.",
    "subject": "logic",
    "year": 2013,
    "chapter": 1
  },
  {
    "id": "log-2013-1-16",
    "question": "Selling salt to customers after twelve brings bad luck on one's life. Thus, one shouldn't sell salt to customers. This argument is:",
    "options": [
      "Inductive, invalid",
      "Deductive, valid",
      "Inductive, strong",
      "Deductive, unsound",
      "Inductive, weak"
    ],
    "correctAnswer": 3,
    "explanation": "This is a deductive argument because it attempts to draw a conclusion that is necessarily true based on the premise. The form is: If P then Q. P. Therefore, Q. The conclusion logically follows from the premise, making it valid. However, the premise \"Selling salt...brings bad luck\" is factually false. Since a deductive argument is sound only if it is valid and has true premises, this argument is unsound.",
    "subject": "logic",
    "year": 2013,
    "chapter": 1
  },
  {
    "id": "log-2013-1-17",
    "question": "A valid deductive argument with all true premises is called a(n) ___________ argument.",
    "options": [
      "strong",
      "cogent",
      "sound",
      "uncogent"
    ],
    "correctAnswer": 2,
    "explanation": "A sound argument is, by definition, a valid deductive argument with all true premises.",
    "subject": "logic",
    "year": 2013,
    "chapter": 1
  },
  {
    "id": "log-2013-1-18",
    "question": "A strong inductive argument with all true premises is called a(n) ___________ argument.",
    "options": [
      "valid",
      "sound",
      "cogent",
      "invalid"
    ],
    "correctAnswer": 2,
    "explanation": "A cogent argument is the inductive equivalent of a sound argument. It is a strong inductive argument with all true premises.",
    "subject": "logic",
    "year": 2013,
    "chapter": 1
  },
  {
    "id": "log-2013-1-19",
    "question": "The term \"validity\" refers to the __________ connection between the premises and the conclusion of a(n) ___________ argument.",
    "options": [
      "factual, inductive",
      "factual, deductive",
      "logical, inductive",
      "logical, deductive"
    ],
    "correctAnswer": 3,
    "explanation": "Validity is a property of a deductive argument. It refers to the logical connection between the premises and the conclusion, specifically whether the conclusion must follow from the premises.",
    "subject": "logic",
    "year": 2013,
    "chapter": 1
  },
  {
    "id": "log-2013-1-20",
    "question": "The term \"strength\" refers to the __________ connection between the premises and the conclusion of a(n) ___________ argument.",
    "options": [
      "factual, inductive",
      "factual, deductive",
      "logical, inductive",
      "logical, deductive"
    ],
    "correctAnswer": 2,
    "explanation": "Strength is a property of an inductive argument. It refers to the logical connection between the premises and the conclusion, specifically whether the conclusion is probable given the premises.",
    "subject": "logic",
    "year": 2013,
    "chapter": 1
  },
  {
    "id": "log-2013-1-21",
    "question": "A passage that presents a series of statements about a topic without intending to prove anything is known as a(n) _______________.",
    "options": [
      "argument",
      "report",
      "explanation",
      "illustration"
    ],
    "correctAnswer": 1,
    "explanation": "A report is a passage that presents factual information without making an argumentative claim. It simply presents a series of statements about a topic, often in a neutral tone.",
    "subject": "logic",
    "year": 2013,
    "chapter": 1
  },
  {
    "id": "log-2013-1-22",
    "question": "An argument that moves from particular facts to a probable general conclusion is a(n) ___________ argument.",
    "options": [
      "deductive",
      "inductive",
      "categorical",
      "hypothetical"
    ],
    "correctAnswer": 1,
    "explanation": "An inductive argument is characterized by its move from particular facts or observations to a probable general conclusion. This type of reasoning is common in science and everyday life.",
    "subject": "logic",
    "year": 2013,
    "chapter": 1
  },
  {
    "id": "log-2013-1-23",
    "question": "An argument that moves from a general rule to a specific instance is a(n) ___________ argument.",
    "options": [
      "deductive",
      "inductive",
      "categorical",
      "hypothetical"
    ],
    "correctAnswer": 0,
    "explanation": "A deductive argument is characterized by its move from a general rule or principle to a specific instance. The conclusion is meant to be a necessary consequence of the premises.",
    "subject": "logic",
    "year": 2013,
    "chapter": 1
  },
  {
    "id": "log-2013-1-24",
    "question": "The statement in an argument that is intended to be supported by evidence is the __________.",
    "options": [
      "premise",
      "conclusion",
      "report",
      "illustration"
    ],
    "correctAnswer": 1,
    "explanation": "The conclusion is the main claim of an argument, the statement that the arguer is trying to prove. It is the statement that is supported by the other statements, which are the premises.",
    "subject": "logic",
    "year": 2013,
    "chapter": 1
  },
  {
    "id": "log-2013-1-25",
    "question": "The statement in an argument that provides evidence is the __________.",
    "options": [
      "premise",
      "conclusion",
      "report",
      "illustration"
    ],
    "correctAnswer": 0,
    "explanation": "A premise is a statement that provides evidence, support, or reasons for a conclusion. Arguments are built on premises that lead to a conclusion.",
    "subject": "logic",
    "year": 2013,
    "chapter": 1
  },
  {
    "id": "log-2013-1-26",
    "question": "A statement that is always true is a _________.",
    "options": [
      "tautology",
      "contradiction",
      "contingent statement",
      "paradox"
    ],
    "correctAnswer": 0,
    "explanation": "A tautology is a statement that is true by its logical form, such as \"It is raining or it is not raining.\"",
    "subject": "logic",
    "year": 2013,
    "chapter": 1
  },
  {
    "id": "log-2013-1-27",
    "question": "A statement that is always false is a _________.",
    "options": [
      "tautology",
      "contradiction",
      "contingent statement",
      "paradox"
    ],
    "correctAnswer": 1,
    "explanation": "A contradiction is a statement that is always false, such as \"It is raining and it is not raining.\"",
    "subject": "logic",
    "year": 2013,
    "chapter": 1
  },
  {
    "id": "log-2013-1-28",
    "question": "If the conclusion of an argument is a necessary truth, it must be a(n) ___________ argument.",
    "options": [
      "inductive",
      "deductive",
      "weak",
      "uncogent"
    ],
    "correctAnswer": 1,
    "explanation": "Deductive arguments are the only type of argument that can guarantee the truth of the conclusion. The conclusion of a valid deductive argument is a necessary truth if its premises are true.",
    "subject": "logic",
    "year": 2013,
    "chapter": 1
  },
  {
    "id": "log-2013-1-29",
    "question": "If the conclusion of an argument is a probable truth, it must be a(n) ___________ argument.",
    "options": [
      "inductive",
      "deductive",
      "invalid",
      "unsound"
    ],
    "correctAnswer": 0,
    "explanation": "The conclusion of an inductive argument is never guaranteed to be true, but it is made probable by the premises. This is the defining characteristic of inductive reasoning.",
    "subject": "logic",
    "year": 2013,
    "chapter": 1
  },
  {
    "id": "log-2013-1-30",
    "question": "All dogs are mammals. Some mammals are cats. Therefore, some dogs are cats. This argument is an example of a(n) ______________.",
    "options": [
      "Valid Categorical Syllogism",
      "Invalid Categorical Syllogism",
      "Valid Disjunctive Syllogism",
      "Invalid Hypothetical Syllogism"
    ],
    "correctAnswer": 1,
    "explanation": "This is an invalid categorical syllogism. The conclusion \"some dogs are cats\" does not logically follow from the premises. The premises allow for a situation where the mammals that are cats are not the same mammals that are dogs. This is a fallacy of the undistributed middle term.",
    "subject": "logic",
    "year": 2013,
    "chapter": 1
  },
  {
    "id": "log-2013-1-31",
    "question": "A passage that contains a causal claim, where one part explains why another part is true, is a(n) ______________.",
    "options": [
      "argument",
      "explanation",
      "report",
      "illustration"
    ],
    "correctAnswer": 1,
    "explanation": "An explanation provides a causal account for a fact or event. It is different from an argument, which tries to prove a claim. The passage is not trying to prove that something happened but to explain why it happened.",
    "subject": "logic",
    "year": 2013,
    "chapter": 1
  },
  {
    "id": "log-2013-1-32",
    "question": "The argument form \"If P then Q. Not P. Therefore, Not Q\" is known as:",
    "options": [
      "Modus Ponens",
      "Modus Tollens",
      "Denying the Antecedent",
      "Affirming the Consequent"
    ],
    "correctAnswer": 2,
    "explanation": "The argument form \"If P then Q. Not P. Therefore, Not Q\" is a formal fallacy known as Denying the Antecedent. It is an invalid argument form.",
    "subject": "logic",
    "year": 2013,
    "chapter": 1
  },
  {
    "id": "log-2013-1-33",
    "question": "The argument form \"If P then Q. P. Therefore, Q\" is known as:",
    "options": [
      "Modus Ponens",
      "Modus Tollens",
      "Denying the Antecedent",
      "Affirming the Consequent"
    ],
    "correctAnswer": 0,
    "explanation": "The argument form \"If P then Q. P. Therefore, Q\" is a valid form of deductive argument known as Modus Ponens, which means \"mode that affirms.\"",
    "subject": "logic",
    "year": 2013,
    "chapter": 1
  },
  {
    "id": "log-2013-1-34",
    "question": "The phrase \"it follows that\" is an example of a __________ indicator word.",
    "options": [
      "premise",
      "conclusion",
      "explanation",
      "illustration"
    ],
    "correctAnswer": 1,
    "explanation": "The phrase \"it follows that\" is a clear conclusion indicator word. It signals that the statement that follows is the conclusion of the argument, and the preceding statements are the premises.",
    "subject": "logic",
    "year": 2013,
    "chapter": 1
  },
  {
    "id": "log-2013-1-35",
    "question": "The phrase \"because\" is an example of a __________ indicator word.",
    "options": [
      "premise",
      "conclusion",
      "explanation",
      "illustration"
    ],
    "correctAnswer": 0,
    "explanation": "The word \"because\" is a common premise indicator word. It signals that the statement that follows provides a reason or evidence to support a conclusion.",
    "subject": "logic",
    "year": 2013,
    "chapter": 1
  },
  {
    "id": "log-2013-1-36",
    "question": "All Ethiopians are intelligent. All intelligent people are great leaders. Therefore, all great leaders are Ethiopians. This argument is an example of a(n) ____________.",
    "options": [
      "valid argument",
      "invalid argument",
      "cogent argument",
      "sound argument"
    ],
    "correctAnswer": 1,
    "explanation": "This is an invalid argument. The conclusion \"all great leaders are Ethiopians\" does not logically follow from the premises. The premises support a conclusion that \"all Ethiopians are great leaders,\" but not the other way around. This is a common fallacy in categorical logic.",
    "subject": "logic",
    "year": 2013,
    "chapter": 1
  },
  {
    "id": "log-2013-1-37",
    "question": "If Meseret is a doctor, then she is a professional. Meseret is a professional. Therefore, Meseret is a doctor. This argument is an example of a(n) ___________ fallacy.",
    "options": [
      "Denying the Antecedent",
      "Affirming the Consequent",
      "Modus Ponens",
      "Modus Tollens"
    ],
    "correctAnswer": 1,
    "explanation": "This is an example of the fallacy of Affirming the Consequent. The argument form is \"If P then Q. Q. Therefore, P.\" It is a formal fallacy because just because the consequent (being a professional) is true, it does not mean the antecedent (being a doctor) must also be true.",
    "subject": "logic",
    "year": 2013,
    "chapter": 1
  },
  {
    "id": "log-2013-1-38",
    "question": "A statement that is open to more than one interpretation is called __________.",
    "options": [
      "vague",
      "ambiguous",
      "imprecise",
      "subjective"
    ],
    "correctAnswer": 1,
    "explanation": "An ambiguous statement is one that has more than one meaning and can be interpreted in different ways. For example, \"I saw her duck.\" could mean she lowered her head or she saw a bird.",
    "subject": "logic",
    "year": 2013,
    "chapter": 1
  },
  {
    "id": "log-2013-1-39",
    "question": "A statement that lacks a clear and definite meaning is called __________.",
    "options": [
      "vague",
      "ambiguous",
      "imprecise",
      "subjective"
    ],
    "correctAnswer": 0,
    "explanation": "A vague statement lacks a clear and definite meaning, often because it uses terms that do not have a precise boundary of application. For example, \"It's a long distance from here\" is vague because \"long distance\" is not clearly defined.",
    "subject": "logic",
    "year": 2013,
    "chapter": 1
  },
  {
    "id": "log-2013-1-40",
    "question": "The passage \"A report from the Ministry of Education showed that student enrollment has increased by 10% this year.\" is a clear example of a(n) __________.",
    "options": [
      "argument",
      "report",
      "explanation",
      "illustration"
    ],
    "correctAnswer": 1,
    "explanation": "This is a report. It simply presents a piece of information from a source without providing evidence to support a separate conclusion. It is a factual statement.",
    "subject": "logic",
    "year": 2013,
    "chapter": 1
  },
  {
    "id": "log-2013-1-41",
    "question": "The argument \"Either Selam is at home or at work. Selam is not at work. Therefore, Selam is at home.\" is a valid form of argument known as:",
    "options": [
      "Disjunctive Syllogism",
      "Hypothetical Syllogism",
      "Categorical Syllogism",
      "Modus Ponens"
    ],
    "correctAnswer": 0,
    "explanation": "This is a valid form of argument known as Disjunctive Syllogism. The form is \"Either P or Q. Not P. Therefore, Q.\"",
    "subject": "logic",
    "year": 2013,
    "chapter": 1
  },
  {
    "id": "log-2013-1-42",
    "question": "The argument \"If Fekadu studies hard, he will pass the exam. If he passes the exam, he will graduate. Therefore, if Fekadu studies hard, he will graduate.\" is a valid form of argument known as:",
    "options": [
      "Disjunctive Syllogism",
      "Hypothetical Syllogism",
      "Categorical Syllogism",
      "Modus Tollens"
    ],
    "correctAnswer": 1,
    "explanation": "This is a valid form of argument known as Hypothetical Syllogism. The form is \"If P then Q. If Q then R. Therefore, If P then R.\"",
    "subject": "logic",
    "year": 2013,
    "chapter": 1
  },
  {
    "id": "log-2013-1-43",
    "question": "An argument that relies on a physical or mathematical calculation is always a(n) ___________ argument.",
    "options": [
      "inductive",
      "deductive",
      "weak",
      "uncogent"
    ],
    "correctAnswer": 1,
    "explanation": "An argument based on mathematical or physical calculation is always a deductive argument. The conclusion is necessarily true if the premises are true. The relationship is one of logical necessity, not probability.",
    "subject": "logic",
    "year": 2013,
    "chapter": 1
  },
  {
    "id": "log-2013-1-44",
    "question": "An argument that relies on a prediction or a statistical study is always a(n) ___________ argument.",
    "options": [
      "inductive",
      "deductive",
      "invalid",
      "unsound"
    ],
    "correctAnswer": 0,
    "explanation": "An argument that relies on a prediction or a statistical study is always an inductive argument. The conclusion is only probable, not guaranteed to be true, making it inductive.",
    "subject": "logic",
    "year": 2013,
    "chapter": 1
  },
  {
    "id": "log-2013-1-45",
    "question": "In the sentence, \"Tewodros believes that all politicians are corrupt,\" the phrase \"all politicians are corrupt\" is a(n) __________.",
    "options": [
      "statement",
      "non-statement",
      "argument",
      "non-argument"
    ],
    "correctAnswer": 0,
    "explanation": "\"All politicians are corrupt\" is a statement. A statement is a sentence that is either true or false. In this context, it is a belief held by Tewodros, but the phrase itself is a declarative sentence that can be evaluated for truth or falsehood.",
    "subject": "logic",
    "year": 2013,
    "chapter": 1
  },
  {
    "id": "log-2013-1-46",
    "question": "The argument form \"All S are P. All P are Q. Therefore, All S are Q.\" is an example of a(n) ____________.",
    "options": [
      "Categorical Syllogism",
      "Disjunctive Syllogism",
      "Hypothetical Syllogism",
      "Modus Ponens"
    ],
    "correctAnswer": 0,
    "explanation": "This argument form is an example of a Categorical Syllogism. It is a deductive argument that consists of three parts: a major premise, a minor premise, and a conclusion. The premises and conclusion are all categorical statements.",
    "subject": "logic",
    "year": 2013,
    "chapter": 1
  },
  {
    "id": "log-2013-1-47",
    "question": "The argument \"Ethiopian coffee is the best in the world. As evidence, consider that coffee originated in Ethiopia, and many people love its unique flavor.\" is a(n) __________.",
    "options": [
      "report",
      "argument",
      "explanation",
      "illustration"
    ],
    "correctAnswer": 1,
    "explanation": "This is an argument. The phrase \"As evidence\" explicitly indicates that the following two statements are premises being used to support the conclusion that \"Ethiopian coffee is the best in the world.\"",
    "subject": "logic",
    "year": 2013,
    "chapter": 1
  },
  {
    "id": "log-2013-1-48",
    "question": "The passage \"An explanation of the recent power outage is that the transformer in the neighborhood broke down.\" is a(n) ____________.",
    "options": [
      "argument",
      "report",
      "explanation",
      "illustration"
    ],
    "correctAnswer": 2,
    "explanation": "This is an explanation. The passage provides a reason for a known fact (the power outage). It is not trying to prove that a power outage occurred, but rather to explain why it occurred.",
    "subject": "logic",
    "year": 2013,
    "chapter": 1
  },
  {
    "id": "log-2013-1-49",
    "question": "The statement \"My neighbor, Aster, is 1.7 meters tall.\" is an example of a(n) ______________.",
    "options": [
      "subjective statement",
      "objective statement",
      "vague statement",
      "ambiguous statement"
    ],
    "correctAnswer": 1,
    "explanation": "This is an objective statement. An objective statement is one whose truth can be verified independently of personal opinion or feeling. Height can be measured, making this an objective statement.",
    "subject": "logic",
    "year": 2013,
    "chapter": 1
  },
  {
    "id": "log-2013-1-50",
    "question": "The statement \"The painting in the museum is beautiful.\" is an example of a(n) ______________.",
    "options": [
      "subjective statement",
      "objective statement",
      "vague statement",
      "ambiguous statement"
    ],
    "correctAnswer": 0,
    "explanation": "This is a subjective statement. A subjective statement is one whose truth depends on personal opinion, feelings, or preferences. \"Beautiful\" is a matter of personal taste.",
    "subject": "logic",
    "year": 2013,
    "chapter": 1
  },
  {
    "id": "log-2013-1-51",
    "question": "All Ethiopian runners are fast. Solomon is an Ethiopian runner. Therefore, Solomon is fast. This argument is an example of a(n) ______________.",
    "options": [
      "deductive argument",
      "inductive argument",
      "cogent argument",
      "weak argument"
    ],
    "correctAnswer": 0,
    "explanation": "This is a deductive argument. It moves from a general premise (\"All Ethiopian runners are fast\") to a specific conclusion about an individual (Solomon). The conclusion is guaranteed to be true if the premises are true.",
    "subject": "logic",
    "year": 2013,
    "chapter": 1
  },
  {
    "id": "log-2013-1-52",
    "question": "The sky is dark. The clouds are getting thicker. It's probably going to rain. This argument is an example of a(n) ______________.",
    "options": [
      "deductive argument",
      "inductive argument",
      "valid argument",
      "sound argument"
    ],
    "correctAnswer": 1,
    "explanation": "This is an inductive argument. It moves from specific observations (dark sky, thick clouds) to a probable conclusion (\"It's probably going to rain\"). The conclusion is not guaranteed, but it is highly likely based on the evidence.",
    "subject": "logic",
    "year": 2013,
    "chapter": 1
  },
  {
    "id": "log-2013-1-53",
    "question": "The statement \"Yohannes lives in the countryside.\" is a(n) ______________.",
    "options": [
      "vague statement",
      "ambiguous statement",
      "subjective statement",
      "objective statement"
    ],
    "correctAnswer": 0,
    "explanation": "This is a vague statement. The term \"countryside\" lacks a clear and definite boundary. What constitutes the countryside can vary depending on context and personal interpretation, making the statement imprecise.",
    "subject": "logic",
    "year": 2013,
    "chapter": 1
  },
  {
    "id": "log-2013-1-54",
    "question": "The argument \"Abiy must have won the race. He was the first one to cross the finish line.\" is a(n) ______________.",
    "options": [
      "explanation",
      "report",
      "argument",
      "loosely associated statements"
    ],
    "correctAnswer": 2,
    "explanation": "This is an argument. The statement \"He was the first one to cross the finish line\" is a premise offered as evidence to support the conclusion that \"Abiy must have won the race.\"",
    "subject": "logic",
    "year": 2013,
    "chapter": 1
  },
  {
    "id": "log-2013-1-55",
    "question": "The argument \"Either Gelila is at school or at the library. Gelila is not at the library. Therefore, Gelila is at school.\" is a(n) ____________.",
    "options": [
      "valid argument",
      "invalid argument",
      "cogent argument",
      "weak argument"
    ],
    "correctAnswer": 0,
    "explanation": "This is a valid argument because the conclusion necessarily follows from the premises. This is an example of a valid logical form known as Disjunctive Syllogism (\"Either P or Q. Not Q. Therefore, P.\").",
    "subject": "logic",
    "year": 2013,
    "chapter": 1
  },
  {
    "id": "log-2013-1-56",
    "question": "The statement \"Mekdes is a good student.\" is an example of a(n) ____________.",
    "options": [
      "objective statement",
      "subjective statement",
      "precise statement",
      "unambiguous statement"
    ],
    "correctAnswer": 1,
    "explanation": "This is a subjective statement. The term \"good student\" is open to personal interpretation and opinion. What makes a student \"good\" can vary based on criteria like grades, effort, or behavior, making the statement a matter of opinion rather than objective fact.",
    "subject": "logic",
    "year": 2013,
    "chapter": 1
  },
  {
    "id": "log-2013-1-57",
    "question": "The statement \"The bank near the river\" is an example of a(n) ____________.",
    "options": [
      "vague statement",
      "ambiguous statement",
      "subjective statement",
      "objective statement"
    ],
    "correctAnswer": 1,
    "explanation": "This is an ambiguous statement. The word \"bank\" has more than one meaning (a financial institution or the side of a river). This double meaning makes the phrase open to multiple interpretations.",
    "subject": "logic",
    "year": 2013,
    "chapter": 1
  },
  {
    "id": "log-2013-1-58",
    "question": "The argument \"The past 10 national football matches won by the Ethiopian team were at home. Therefore, the next national match will probably be won at home.\" is an example of a(n) ______________ argument.",
    "options": [
      "deductive",
      "inductive",
      "valid",
      "unsound"
    ],
    "correctAnswer": 1,
    "explanation": "This is an inductive argument. It moves from specific past observations (the last 10 matches) to a probable conclusion about a future event. The conclusion is not guaranteed, but is made likely by the premises.",
    "subject": "logic",
    "year": 2013,
    "chapter": 1
  },
  // ==================== ENGLISH QUESTIONS ====================
  
  //english-2014-1-1
  {
    id: 'eng-2014-1-1',
    question: 'Who wrote "Romeo and Juliet"?',
    options: ['Charles Dickens', 'William Shakespeare', 'Jane Austen', 'Mark Twain'],
    correctAnswer: 1,
    explanation: 'William Shakespeare wrote the famous play "Romeo and Juliet".',
    subject: 'english',
    year: 2014,
    chapter: 1
  },
  //english-2014-1-2
  {
    id: 'eng-2014-1-2',
    question: 'Which of these is a noun?',
    options: ['Run', 'Beautiful', 'Quickly', 'Happiness'],
    correctAnswer: 3,
    explanation: 'Happiness is a noun representing a state of being.',
    subject: 'english',
    year: 2014,
    chapter: 1
  },
{
    id: 'eng-2013-1-2',
    question: 'Moti: Young children ____________violent Tv shows. Addisu: Yes, you are right. Parents must control their children.',
    options: ['had not better watch', 'ought not watch', 'should watch', 'shouldn\'t watch'],
    correctAnswer: 3,
    explanation: 'The correct answer is "shouldn\'t watch" as it expresses that children ought not to watch violent TV shows.',
    subject: 'english',
    year: 2013,
    chapter: 1
  },
  {
    id: 'eng-2013-1-3',
    question: 'Friend: You___________. You are driving too fast. You: Ok, I will drive slowly.',
    options: ['ought slow down', 'should to slow down', 'ought to slowing down', 'had better slow down'],
    correctAnswer: 3,
    explanation: 'The correct answer is "had better slow down" as it expresses strong advice about the dangerous situation.',
    subject: 'english',
    year: 2013,
    chapter: 1
  },
  {
    id: 'eng-2013-1-4',
    question: 'You: It is really cold outside. Sister: You___________________a warm jacket.',
    options: ['ought wear', 'ought to wear', 'should wearing', 'had better wearing'],
    correctAnswer: 1,
    explanation: 'The correct answer is "ought to wear" as it properly expresses advice with the correct modal verb structure.',
    subject: 'english',
    year: 2013,
    chapter: 1
  },
  {
    id: 'eng-2013-1-5',
    question: 'I think your finger is broken. You___________________go to the emergency room.',
    options: ['should to', 'could', 'ought to', 'can'],
    correctAnswer: 2,
    explanation: 'The correct answer is "ought to" as it expresses strong recommendation.',
    subject: 'english',
    year: 2013,
    chapter: 1
  },
  // ==================== CIVIC QUESTIONS ====================
  
  //civic-2015-1-1
  {
    id: 'civic-2015-1-1',
    question: 'What is the minimum voting age in Ethiopia?',
    options: ['16', '18', '21', '25'],
    correctAnswer: 1,
    explanation: 'The minimum voting age in Ethiopia is 18 years.',
    subject: 'civic',
    year: 2015,
    chapter: 1
  },

  // ==================== PSYCHOLOGY QUESTIONS ====================
  
  //psychology-2016-1-1
   {
    id: 'psych-2013-1-1',
    question: 'Which of the following lists the correct basic order of the five steps of scientific research presented in the text?',
    options: ['Perceive the problem → Form a hypothesis → Test the hypothesis → Draw conclusions → Report results', 'Test the hypothesis → Perceive the problem → Report results → Draw conclusions → Form a hypothesis', 'Report results → Draw conclusions → Form a hypothesis → Perceive the problem → Test the hypothesis', 'Form a hypothesis → Report results → Perceive the problem → Test the hypothesis → Draw conclusions'],
    correctAnswer: 0,
    explanation: 'The text lists the research steps in that logical order: perceive the problem, form a hypothesis, test it, draw conclusions, then report results.',
    subject: 'psychology',
    year: 2013,
    chapter: 1
  },
  {
    id: 'psych-2013-1-2',
    question: 'Melaku wants to conduct research on the relationship between psychological distress and work overload. Which research method fits this kind of research?',
    options: ['Case study', 'Survey', 'Correlation', 'Experimental'],
    correctAnswer: 2,
    explanation: 'Correlational research is specifically designed to discover and measure the relationship between two or more variables. The goal is to determine if psychological distress and work overload tend to occur together, and how strongly they are related, without manipulating either variable.',
    subject: 'psychology',
    year: 2013,
    chapter: 1
  },
  {
    id: 'psych-2013-1-3',
    question: "If a teacher and counselor apply learning strategies to improve a student's grades, which of the four goals of psychology are they primarily pursuing?",
    options: ['Description', 'Explanation', 'Prediction', 'Control'],
    correctAnswer: 3,
    explanation: "The goal of control (or influence) in psychology involves applying knowledge to change or modify behavior for the better. By implementing strategies to improve grades, the teacher and counselor are actively trying to control an outcome.",
    subject: 'psychology',
    year: 2013,
    chapter: 1
  },
  {
    id: 'psych-2013-1-4',
    question: 'A sociologist finds a strong positive association between the number of coffee shops in a city and its crime rate. What is the most significant limitation of concluding that coffee shops cause crime?',
    options: ['The sample size was likely too small.', 'Correlation does not prove causation; a third variable could be involved.', 'The research was not published in a peer-reviewed journal.', 'Self-report surveys are often unreliable.'],
    correctAnswer: 1,
    explanation: "This is a classic example of the principle that correlation is not causation. Just because two variables move together doesn't mean one causes the other. A hidden or 'third' variable, such as population density, could be the actual cause.",
    subject: 'psychology',
    year: 2013,
    chapter: 1
  },
  {
    id: 'psych-2013-1-5',
    question: 'Which goal of research in psychology is achieved when the researcher finds out the causes of a behavior?',
    options: ['Description', 'Prediction', 'Explanation'],
    correctAnswer: 2,
    explanation: 'The goal of explanation is to understand why a behavior or mental process occurs. It goes beyond simply describing what is happening to identify its causes.',
    subject: 'psychology',
    year: 2013,
    chapter: 1
  },
  {
    id: 'psych-2013-1-6',
    question: "Which research method is more appropriate to study children's play type?",
    options: ['Experimental research', 'Survey', 'Correlational research', 'Naturalistic observation', 'Case study'],
    correctAnswer: 3,
    explanation: 'Naturalistic observation involves watching subjects in their natural environment without any interference from the researcher. This is the ideal method for studying authentic behaviors like children\'s play.',
    subject: 'psychology',
    year: 2013,
    chapter: 1
  },
  {
    id: 'psych-2013-1-7',
    question: 'A researcher wants to understand if a therapeutic intervention is truly effective. The most powerful method for establishing a cause-and-effect relationship between the therapy and patient outcomes is:',
    options: ['Naturalistic observation.', 'A survey of patient satisfaction.', 'A correlational study.', 'An experiment with a control group.'],
    correctAnswer: 3,
    explanation: 'The experiment is the only research method that can definitively establish a cause-and-effect relationship. By manipulating one variable (the therapy) and using a control group for comparison, researchers can isolate the effect of the intervention.',
    subject: 'psychology',
    year: 2013,
    chapter: 1
  },
  {
    id: 'psych-2013-1-8',
    question: "A school psychologist uses a student's past performance on standardized tests to forecast their likelihood of success in an advanced mathematics program. This application primarily reflects which goal of psychology?",
    options: ['Explanation', 'Prediction', 'Description', 'Control'],
    correctAnswer: 1,
    explanation: 'The goal of prediction involves using existing information to make educated guesses about future behavior or outcomes. By using past test scores to "forecast" future success, the psychologist is engaging in prediction.',
    subject: 'psychology',
    year: 2013,
    chapter: 1
  },
  {
    id: 'psych-2013-1-9',
    question: 'In an experimental research method, what is the group that receives the independent variable?',
    options: ['Control group', 'Experimental group', 'Extraneous group', 'Dependent group'],
    correctAnswer: 1,
    explanation: 'The experimental group is the group of participants who are exposed to the treatment or the manipulation of the independent variable. Their results are then compared to the control group.',
    subject: 'psychology',
    year: 2013,
    chapter: 1
  },
  {
    id: 'psych-2013-1-10',
    question: 'To investigate the effects of sleep deprivation on problem-solving skills, a researcher has one group sleep 8 hours and another group sleep 4 hours. She then gives both groups a complex puzzle. In this experiment, the amount of sleep is the:',
    options: ['Dependent variable.', 'Confounding variable.', 'Independent variable.', 'Control variable.'],
    correctAnswer: 2,
    explanation: 'The independent variable (IV) is the factor that the researcher manipulates or changes to observe its effect. In this case, the researcher is controlling the "amount of sleep" to see how it impacts problem-solving.',
    subject: 'psychology',
    year: 2013,
    chapter: 1
  },
  {
    id: 'psych-2013-1-11',
    question: "A therapist suggests that her client's feelings of depression stem from his failure to achieve his full potential and his unmet needs for personal growth. This therapist's perspective aligns most closely with which school of thought?",
    options: ['Psychoanalytic', 'Cognitive', 'Humanistic', 'Biological'],
    correctAnswer: 2,
    explanation: "The humanistic perspective emphasizes personal growth, self-actualization (achieving one's full potential), and free will. The therapist's focus on unmet needs for growth is a hallmark of this school of thought.",
    subject: 'psychology',
    year: 2013,
    chapter: 1
  },
  {
    id: 'psych-2013-1-12',
    question: 'An early psychologist trained his subjects to report their moment-to-moment sensory experiences and mental images when they were shown a flower. This technique, known as introspection, was central to:',
    options: ['Functionalism', 'Structuralism', 'Behaviorism', 'Gestalt psychology'],
    correctAnswer: 1,
    explanation: "Structuralism, led by Wilhelm Wundt, was the first school of psychology. Its goal was to break down consciousness into its most basic elements or 'structures' using a method called introspection.",
    subject: 'psychology',
    year: 2013,
    chapter: 1
  },
  {
    id: 'psych-2013-1-13',
    question: 'A therapist designs a new program to reduce social anxiety in teenagers. After implementing the program, she observes a significant decrease in their anxiety symptoms. Which of psychology\'s primary goals has the therapist most clearly achieved?',
    options: ['Description', 'Explanation', 'Prediction', 'Control (or Influence)'],
    correctAnswer: 3,
    explanation: 'The therapist has successfully applied psychological principles to change behavior—in this case, reducing anxiety. This application of knowledge to influence outcomes directly fulfills the goal of control.',
    subject: 'psychology',
    year: 2013,
    chapter: 1
  },
  {
    id: 'psych-2013-1-14',
    question: 'Which of the following perspectives gives greater responsibilities to the students in learning?',
    options: ['Humanistic', 'Behaviorism', 'Psychodynamic', 'Sociocultural'],
    correctAnswer: 0,
    explanation: 'The humanistic perspective views individuals as having free will and an innate drive to grow. In education, this translates to student-centered learning, where students are seen as active agents responsible for their own educational journey.',
    subject: 'psychology',
    year: 2013,
    chapter: 1
  },
  {
    id: 'psych-2013-1-15',
    question: 'A developmental psychologist wants to test if a new memory game improves cognitive function in elderly adults. She randomly assigns participants to either play the new game or a standard crossword puzzle for 30 minutes daily. What is the dependent variable in this study?',
    options: ['The age of the participants.', 'The type of activity (memory game vs. crossword).', 'The measured cognitive function after the intervention.', 'The duration of daily play (30 minutes).'],
    correctAnswer: 2,
    explanation: 'The dependent variable (DV) is what is measured in an experiment to see if the independent variable had an effect. Here, the researcher is measuring "cognitive function" to see if it depends on the type of activity the participants played.',
    subject: 'psychology',
    year: 2013,
    chapter: 1
  },
  {
    id: 'psych-2013-1-16',
    question: 'In the experiment described above (Question 15), the group that plays the crossword puzzle serves what purpose?',
    options: ['The extraneous variable group.', 'The independent variable group.', 'The experimental group.', 'The control group.'],
    correctAnswer: 3,
    explanation: 'The control group serves as a baseline for comparison. This group does not receive the special treatment (the new memory game). By comparing the results, the researcher can be more certain that any differences are due to the new game itself.',
    subject: 'psychology',
    year: 2013,
    chapter: 1
  },
  {
    id: 'psych-2013-1-17',
    question: 'A researcher wants to explore differences in sex-role socialization practices among Ethiopian and Afro-American parents. This researcher is most likely a:',
    options: ['Social Psychologist', 'Educational Psychologist', 'Cross-Cultural Psychologist', 'Clinical Psychologist'],
    correctAnswer: 2,
    explanation: 'Cross-cultural psychology is the subfield that specifically studies how cultural factors influence human behavior. Comparing parenting practices between two distinct cultural groups is a primary example of cross-cultural research.',
    subject: 'psychology',
    year: 2013,
    chapter: 1
  },
  {
    id: 'psych-2013-1-18',
    question: 'A company hires a psychologist to improve employee morale, redesign its performance review system, and create more effective training programs. This professional is most likely a(n):',
    options: ['Clinical psychologist.', 'Industrial-Organizational psychologist.', 'Forensic psychologist.', 'Developmental psychologist.'],
    correctAnswer: 1,
    explanation: 'Industrial-Organizational (I-O) psychology applies psychological principles to the workplace. The tasks described—improving morale, performance systems, and training—are all core functions of an I-O psychologist.',
    subject: 'psychology',
    year: 2013,
    chapter: 1
  },
  {
    id: 'psych-2013-1-19',
    question: 'Which professional is most likely to help a client with severe schizophrenia manage their symptoms and daily functioning?',
    options: ['A counseling psychologist.', 'An educational psychologist.', 'A clinical psychologist.', 'An industrial-organizational psychologist.'],
    correctAnswer: 2,
    explanation: 'Clinical psychologists are trained to assess, diagnose, and treat serious mental illnesses like schizophrenia. While counseling psychologists help with adjustment issues, the treatment of severe psychopathology falls under the domain of clinical psychology.',
    subject: 'psychology',
    year: 2013,
    chapter: 1
  },
  {
    id: 'psych-2013-1-20',
    question: 'An early school of thought in psychology that uses the introspection method to discover elementary units of the mind is:',
    options: ['functionalism', 'structuralism', 'gestalt', 'psychoanalysis'],
    correctAnswer: 1,
    explanation: 'This is the definition of structuralism. Led by Wilhelm Wundt, this school aimed to identify the basic "structures" or components of conscious thought through the method of introspection.',
    subject: 'psychology',
    year: 2013,
    chapter: 1
  },
  {
    id: 'psych-2013-1-21',
    question: 'Which of the following questions is most likely to be posed by a psychologist focused on the goal of explanation?',
    options: ['What percentage of students experience test anxiety?', 'Will students with high test anxiety perform poorly on the exam?', 'Why does high physiological arousal lead to impaired cognitive performance?', 'What therapeutic techniques are most effective for reducing test anxiety?'],
    correctAnswer: 2,
    explanation: 'The goal of explanation seeks to understand the causes of behavior. The question starting with "Why" is directly asking for a causal explanation of a phenomenon. A is description, B is prediction, and D is control.',
    subject: 'psychology',
    year: 2013,
    chapter: 1
  },
  {
    id: 'psych-2013-1-22',
    question: 'A researcher studies the mating rituals of a newly discovered bird species in its native rainforest without interfering with its behavior. This method is best described as:',
    options: ['A correlational study.', 'A case study.', 'Naturalistic observation.', 'An experiment.'],
    correctAnswer: 2,
    explanation: 'Naturalistic observation involves observing subjects in their natural habitat without any intervention from the researcher. Studying birds in their native rainforest is a perfect example of this method.',
    subject: 'psychology',
    year: 2013,
    chapter: 1
  },
  {
    id: 'psych-2013-1-23',
    question: 'To understand the long-term psychological effects of surviving a plane crash, a researcher conducts extensive interviews, observations, and testing with a single survivor over ten years. This approach is an example of a(n):',
    options: ['Case study.', 'Longitudinal survey.', 'Experiment.', 'Ethnography.'],
    correctAnswer: 0,
    explanation: 'A case study is an in-depth, intensive investigation of a single individual or a small group. This method is ideal for studying rare or unique phenomena, like the psychological effects of surviving a specific traumatic event.',
    subject: 'psychology',
    year: 2013,
    chapter: 1
  },
  {
    id: 'psych-2013-1-24',
    question: 'A sociologist finds a strong positive association between the number of coffee shops in a city and its crime rate. What is the most significant limitation of concluding that coffee shops cause crime?',
    options: ['The sample size was likely too small.', 'Correlation does not prove causation; a third variable could be involved.', 'The research was not published in a peer-reviewed journal.', 'Self-report surveys are often unreliable.'],
    correctAnswer: 1,
    explanation: 'This again highlights the critical research principle that correlation does not imply causation. A third variable, like higher population density, is a likely cause for both more coffee shops and more crime.',
    subject: 'psychology',
    year: 2013,
    chapter: 1
  },
  {
    id: 'psych-2013-1-25',
    question: 'The cognitive revolution in psychology represented a shift away from the strict focus of behaviorism towards an emphasis on:',
    options: ['Unconscious drives and desires.', 'Internal mental processes like thinking, memory, and perception.', 'The influence of culture and social norms.', 'The adaptive functions of behavior.'],
    correctAnswer: 1,
    explanation: 'Behaviorism famously ignored the mind, calling it a "black box." The cognitive revolution was a movement that brought the focus of scientific psychology back to studying internal mental processes.',
    subject: 'psychology',
    year: 2013,
    chapter: 1
  },
  {
    id: 'psych-2013-1-26',
    question: 'The question "Why do we feel jealousy, and how does this emotion aid in human survival and reproduction?" would most likely be asked by a psychologist from which school of thought?',
    options: ['Structuralism', 'Functionalism', 'Psychodynamic', 'Behaviorism'],
    correctAnswer: 1,
    explanation: "Functionalism, heavily influenced by Darwin's evolutionary theory, was concerned with the purpose or function of consciousness and behavior. This question, which explores how an emotion aids in survival, is a classic example of a functionalist approach.",
    subject: 'psychology',
    year: 2013,
    chapter: 1
  },
  {
    id: 'psych-2013-1-27',
    question: 'A researcher is investigating how peer pressure influences risk-taking behavior in adolescents. Her work falls primarily within the subfield of:',
    options: ['Social psychology.', 'Educational psychology.', 'Personality psychology.', 'Cognitive psychology.'],
    correctAnswer: 0,
    explanation: "Social psychology is the scientific study of how people's thoughts, feelings, and behaviors are influenced by the actual, imagined, or implied presence of others. Studying peer pressure is a core topic in this field.",
    subject: 'psychology',
    year: 2013,
    chapter: 1
  },
  {
    id: 'psych-2013-1-28',
    question: 'A psychologist studying how children of different ages (3, 5, and 7 years old) approach a moral dilemma at a single point in time is using which type of research design?',
    options: ['Longitudinal', 'Cross-sectional', 'Case study', 'Experimental'],
    correctAnswer: 1,
    explanation: 'A cross-sectional research design involves comparing different groups of people (in this case, different age groups) at one specific point in time. This contrasts with a longitudinal design, which would follow the same group of children as they age.',
    subject: 'psychology',
    year: 2013,
    chapter: 1
  },
  {
    id: 'psych-2013-1-29',
    question: 'Which of the following sub-fields of psychology is more concerned with diagnosis and treatment of severe mental disorders?',
    options: ['Counseling psychology', 'Experimental psychology', 'Health psychology', 'Clinical psychology'],
    correctAnswer: 3,
    explanation: 'The primary focus of clinical psychology is the assessment, diagnosis, and treatment of moderate to severe psychological disorders and mental illnesses.',
    subject: 'psychology',
    year: 2013,
    chapter: 1
  },
  {
    id: 'psych-2013-1-30',
    question: 'A psychologist believes that chronic anxiety is primarily caused by an imbalance of the neurotransmitter serotonin in the brain. This view is most consistent with the:',
    options: ['Cognitive perspective.', 'Sociocultural perspective.', 'Biological perspective.', 'Humanistic perspective.'],
    correctAnswer: 2,
    explanation: 'The biological perspective explains behavior and mental processes in terms of underlying biological events, such as genetics, brain structures, hormones, and neurotransmitter activity. Attributing anxiety to a serotonin imbalance is a clear biological explanation.',
    subject: 'psychology',
    year: 2013,
    chapter: 1
  },
  {
    id: 'psych-2013-1-31',
    question: 'Which of the following methods is most helpful for revealing cause-effect relationships?',
    options: ['Survey', 'Experiment', 'Correlation', 'Naturalistic observation'],
    correctAnswer: 1,
    explanation: 'Only the experiment allows researchers to control variables and manipulate them to determine cause and effect. The other methods can describe behavior or identify relationships, but they cannot prove that one variable causes another.',
    subject: 'psychology',
    year: 2013,
    chapter: 1
  },
  {
    id: 'psych-2013-1-32',
    question: "A psychologist adhering to the behavioral perspective would most likely explain a student's disruptive classroom conduct by pointing to:",
    options: ['An unresolved unconscious conflict from childhood.', "The student's low self-esteem and need for acceptance.", 'A history of receiving attention (reinforcement) for such actions.', "The student's logical processing and decision-making about the situation."],
    correctAnswer: 2,
    explanation: 'The behavioral perspective focuses on how behavior is learned through consequences. A behaviorist would argue that the disruptive conduct persists because it has been reinforced in the past—for example, by receiving attention.',
    subject: 'psychology',
    year: 2013,
    chapter: 1
  },
  {
    id: 'psych-2013-1-33',
    question: "A psychologist from the sociocultural perspective would argue that to fully understand a person's behavior, one must first understand:",
    options: ['Their brain chemistry and genetic predispositions.', 'Their unique pattern of thoughts and beliefs.', 'Their early childhood experiences and unconscious conflicts.', 'The culture and social context in which they were raised.'],
    correctAnswer: 3,
    explanation: 'The sociocultural perspective emphasizes the powerful influence of social and cultural factors on behavior and thinking. It posits that you cannot fully understand an individual without considering the societal norms, values, and cultural context that have shaped them.',
    subject: 'psychology',
    year: 2013,
    chapter: 1
  }, {
    "id": "psych-2015-1-1",
    "question": "Hagos wants to study the relationship between the number of hours Ethiopian students spend on social media and their academic performance. Which research method is most appropriate?",
    "options": [
      "Case study",
      "Survey",
      "Correlational",
      "Experimental"
    ],
    "correctAnswer": 2,
    "explanation": "The correlational research method is the most appropriate choice because it is specifically designed to measure the relationship or association between two or more variables without manipulating them. Hagos wants to see if a relationship exists between social media use and academic performance, and a correlational study will allow him to determine the strength and direction of that relationship. An experimental method would be unsuitable as it would involve manipulating students' social media use, which is often not ethical or practical. A survey is a data collection tool, not a research method in itself, while a case study focuses on a single individual or a small group, which would not be representative of Ethiopian students in general.",
    "subject": "psychology",
    "year": 2015,
    "chapter": 1
  },
  {
    "id": "psych-2015-1-2",
    "question": "A teacher, Genet, notices that when she gives her students more positive feedback, their participation in class increases. She decides to formalize this process to see if she can improve her students' engagement. Which goal of psychology is she pursuing?",
    "options": [
      "Description",
      "Explanation",
      "Prediction",
      "Control"
    ],
    "correctAnswer": 3,
    "explanation": "The teacher, Genet, is pursuing the goal of control (or influence). This goal involves using psychological principles to change or influence a behavior. Genet is not just describing or explaining the behavior; she is actively trying to change it by providing positive feedback to increase class participation. Description would be simply noting the behavior, explanation would be figuring out why it's happening, and prediction would be forecasting future behavior.",
    "subject": "psychology",
    "year": 2015,
    "chapter": 1
  },
  {
    "id": "psych-2015-1-3",
    "question": "Yonas conducts a study and finds a strong correlation between the number of coffee ceremonies a family has and their level of community engagement. He concludes that coffee ceremonies make people more engaged in their community. What is the most significant limitation of his conclusion?",
    "options": [
      "The sample size was likely too small.",
      "Correlation does not prove causation; a third variable could be involved.",
      "The research was not published in a peer-reviewed journal.",
      "The study used qualitative data."
    ],
    "correctAnswer": 1,
    "explanation": "The most significant limitation is that correlation does not prove causation. This is a fundamental principle of psychological research. Just because two variables (coffee ceremonies and community engagement) are related does not mean one causes the other. A third variable could be responsible for the relationship, such as a family's socioeconomic status or their general extroversion, which might lead to both more coffee ceremonies and greater community engagement.",
    "subject": "psychology",
    "year": 2015,
    "chapter": 1
  },
  {
    "id": "psych-2015-1-4",
    "question": "Which goal of research in psychology is achieved when a researcher determines the \"why\" behind a specific behavior?",
    "options": [
      "Description",
      "Prediction",
      "Explanation",
      "Control"
    ],
    "correctAnswer": 2,
    "explanation": "The goal of explanation is achieved when a researcher determines the \"why\" behind a behavior. This involves developing a theory or a hypothesis to understand the underlying causes of a particular phenomenon. For example, a psychologist might explain why a child is aggressive by exploring their upbringing, past experiences, or biological factors. The other goals—description, prediction, and control—focus on what happened, what will happen, and how to change it, respectively.",
    "subject": "psychology",
    "year": 2015,
    "chapter": 1
  },
  {
    "id": "psych-2015-1-5",
    "question": "A researcher wants to study how children interact with their parents in their home environment without any interference. Which research method is most appropriate?",
    "options": [
      "Experimental research",
      "Survey",
      "Correlational research",
      "Naturalistic observation",
      "Case study"
    ],
    "correctAnswer": 3,
    "explanation": "Naturalistic observation is the most appropriate method because it involves watching subjects in their natural environment without any intervention or manipulation. This allows the researcher to study authentic, uninfluenced behavior. Experimental research would involve interference, while a survey would rely on self-reported data, and a case study would be too focused on a single family.",
    "subject": "psychology",
    "year": 2015,
    "chapter": 1
  },
  {
    "id": "psych-2015-1-6",
    "question": "Lelise, a public health professional, wants to test if a new community health program is truly effective at reducing the spread of malaria. The most powerful method for establishing a cause-and-effect relationship is:",
    "options": [
      "Naturalistic observation.",
      "A survey of community members.",
      "A correlational study.",
      "An experiment with a control group."
    ],
    "correctAnswer": 3,
    "explanation": "An experiment with a control group is the most powerful method for establishing a cause-and-effect relationship. By randomly assigning participants to either the group receiving the new program (experimental group) or a group that does not (control group), Lelise can be confident that any difference in malaria rates is caused by the program itself, not by other factors. Correlational studies can only identify relationships, while surveys and naturalistic observation are not designed to test for causality.",
    "subject": "psychology",
    "year": 2015,
    "chapter": 1
  },
  {
    "id": "psych-2015-1-7",
    "question": "A school counselor, Tirunesh, uses a student's past grades and attendance records to forecast their likelihood of graduating on time. This application primarily reflects which goal of psychology?",
    "options": [
      "Explanation",
      "Prediction",
      "Description",
      "Control"
    ],
    "correctAnswer": 1,
    "explanation": "This application reflects the goal of prediction. Prediction involves using past and present data to forecast future behavior or outcomes. Tirunesh is using the student's past grades and attendance (current data) to forecast their future likelihood of graduating on time. This is a classic example of using known variables to predict an unknown outcome.",
    "subject": "psychology",
    "year": 2015,
    "chapter": 1
  },
  {
    "id": "psych-2015-1-8",
    "question": "In an experimental study on the effects of a new medication, which group receives the placebo?",
    "options": [
      "The experimental group",
      "The dependent group",
      "The control group",
      "The independent group"
    ],
    "correctAnswer": 2,
    "explanation": "In an experiment, the control group is the group that receives the placebo or no treatment. This group serves as a baseline for comparison. The experimental group receives the actual treatment (the new medication), while the dependent variable is the outcome being measured, and the independent variable is the treatment being manipulated.",
    "subject": "psychology",
    "year": 2015,
    "chapter": 1
  },
  {
    "id": "psych-2015-1-9",
    "question": "To investigate the effects of different study environments on memory, a researcher has one group study in a quiet library and another study in a busy cafe. She then gives both groups a memory test. In this experiment, the type of study environment is the:",
    "options": [
      "Dependent variable.",
      "Confounding variable.",
      "Independent variable.",
      "Control variable."
    ],
    "correctAnswer": 2,
    "explanation": "The type of study environment is the independent variable because it is the variable that the researcher is actively manipulating or changing. The dependent variable is the outcome being measured, which in this case is memory test performance. A confounding variable is an uncontrolled variable that could influence the results, and a control variable is kept constant throughout the experiment.",
    "subject": "psychology",
    "year": 2015,
    "chapter": 1
  },
  {
    "id": "psych-2015-1-10",
    "question": "A therapist, Senait, suggests that her client's feelings of depression stem from a lack of meaning in their life and a failure to pursue their unique potential. This therapist's perspective aligns most closely with which school of thought?",
    "options": [
      "Psychoanalytic",
      "Cognitive",
      "Humanistic",
      "Biological"
    ],
    "correctAnswer": 2,
    "explanation": "The therapist's perspective aligns most closely with Humanistic psychology. This school of thought, pioneered by figures like Carl Rogers and Abraham Maslow, emphasizes an individual's free will, self-actualization, and their innate drive to reach their full potential. They believe that psychological problems can arise from a failure to find meaning or to achieve this potential. Psychoanalytic psychology would focus on unconscious conflicts, cognitive on thought patterns, and biological on genetics and brain chemistry.",
    "subject": "psychology",
    "year": 2015,
    "chapter": 1
  },
  {
    "id": "psych-2015-1-11",
    "question": "An early psychologist, Haile, trained his subjects to use a method called introspection to report their immediate feelings and sensations when they listened to traditional Ethiopian music. This technique was central to:",
    "options": [
      "Functionalism",
      "Structuralism",
      "Behaviorism",
      "Gestalt psychology"
    ],
    "correctAnswer": 1,
    "explanation": "The technique of introspection was central to structuralism, the first school of psychology. Structuralists, led by Wilhelm Wundt and Edward Titchener, aimed to break down the mind into its most basic \"structures\" or components, such as sensations and feelings, through the use of this self-reporting method. Functionalism focused on the purpose of mental processes, while behaviorism rejected introspection entirely and focused on observable behaviors.",
    "subject": "psychology",
    "year": 2015,
    "chapter": 1
  },
  {
    "id": "psych-2015-1-12",
    "question": "A clinical psychologist, Seble, designs a new program to reduce feelings of social isolation in elderly residents of a care facility. After implementing the program, she observes that residents' self-reported feelings of isolation have significantly decreased. Which of psychology's primary goals has the psychologist most clearly achieved?",
    "options": [
      "Description",
      "Explanation",
      "Prediction",
      "Control (or Influence)"
    ],
    "correctAnswer": 3,
    "explanation": "The psychologist has most clearly achieved the goal of control (or influence). By designing and implementing a program that successfully changes a behavior (reducing social isolation), the psychologist has demonstrated the ability to control or influence that behavior. The other goals—description, explanation, and prediction—are preliminary steps to achieving control.",
    "subject": "psychology",
    "year": 2015,
    "chapter": 1
  },
  {
    "id": "psych-2015-1-13",
    "question": "Which of the following perspectives places the most emphasis on a person's free will and their inherent drive to fulfill their potential?",
    "options": [
      "Humanistic",
      "Behaviorism",
      "Psychodynamic",
      "Sociocultural"
    ],
    "correctAnswer": 0,
    "explanation": "The humanistic perspective places the most emphasis on free will and the drive to fulfill one's potential. This perspective sees people as inherently good and motivated to improve themselves. In contrast, behaviorism emphasizes environmental conditioning, psychodynamic focuses on unconscious conflicts, and sociocultural looks at the influence of culture and social groups.",
    "subject": "psychology",
    "year": 2015,
    "chapter": 1
  },
  {
    "id": "psych-2015-1-14",
    "question": "A developmental psychologist, Abebe, wants to test if a new reading program improves literacy skills in young children. He randomly assigns participants to either the new reading program or a standard one. What is the dependent variable in this study?",
    "options": [
      "The age of the participants.",
      "The type of reading program.",
      "The measured literacy skills after the intervention.",
      "The duration of the program."
    ],
    "correctAnswer": 2,
    "explanation": "The dependent variable is the outcome that is being measured to see if it changes as a result of the independent variable. In this study, the type of reading program is the independent variable being manipulated, and the measured literacy skills are the dependent variable that is expected to change based on the program used. The age and duration are not the primary variables being measured for change.",
    "subject": "psychology",
    "year": 2015,
    "chapter": 1
  },
  {
    "id": "psych-2015-1-15",
    "question": "In the experiment described above (Question 14), the group that participates in the standard reading program serves what purpose?",
    "options": [
      "The extraneous variable group.",
      "The independent variable group.",
      "The experimental group.",
      "The control group."
    ],
    "correctAnswer": 3,
    "explanation": "The group participating in the standard reading program serves as the control group. This group provides a baseline for comparison. By comparing the literacy skills of the children in the new reading program (experimental group) to those in the standard program (control group), the researcher can determine if the new program is truly more effective than what is already being used.",
    "subject": "psychology",
    "year": 2015,
    "chapter": 1
  },
  {
    "id": "psych-2015-1-16",
    "question": "A researcher wants to explore differences in child-rearing practices between families in rural Ethiopia and those in Addis Ababa. This researcher is most likely a:",
    "options": [
      "Social Psychologist",
      "Educational Psychologist",
      "Cross-Cultural Psychologist",
      "Clinical Psychologist"
    ],
    "correctAnswer": 2,
    "explanation": "The researcher is most likely a cross-cultural psychologist. Licensed by Google This subfield of psychology specializes in studying the similarities and differences in behavior and mental processes across different cultures and ethnic groups. The focus on different regions within Ethiopia specifically highlights a cross-cultural comparison.",
    "subject": "psychology",
    "year": 2015,
    "chapter": 1
  },
  {
    "id": "psych-2015-1-17",
    "question": "A large Ethiopian company hires a psychologist to improve communication between departments, assess employee job satisfaction, and develop leadership training for managers. This professional is most likely a(n):",
    "options": [
      "Clinical psychologist.",
      "Industrial-Organizational psychologist.",
      "Forensic psychologist.",
      "Developmental psychologist."
    ],
    "correctAnswer": 1,
    "explanation": "This professional is most likely an Industrial-Organizational (I-O) psychologist. I-O psychology applies psychological principles to the workplace to improve productivity and well-being. Their work includes improving communication, assessing job satisfaction, and developing training programs for employees and managers.",
    "subject": "psychology",
    "year": 2015,
    "chapter": 1
  },
  {
    "id": "psych-2015-1-18",
    "question": "Which professional is most likely to help a client with severe post-traumatic stress disorder (PTSD) manage their trauma and improve daily functioning?",
    "options": [
      "A counseling psychologist.",
      "An educational psychologist.",
      "A clinical psychologist.",
      "An industrial-organizational psychologist."
    ],
    "correctAnswer": 2,
    "explanation": "A clinical psychologist is the professional most likely to help a client with severe PTSD. Clinical psychology focuses on the diagnosis and treatment of mental, emotional, and behavioral disorders, such as PTSD. While a counseling psychologist might also help, clinical psychologists typically work with more severe psychopathology.",
    "subject": "psychology",
    "year": 2015,
    "chapter": 1
  },
  {
    "id": "psych-2015-1-19",
    "question": "An early school of thought in psychology that focused on the adaptive purposes and functions of mental processes and behavior was:",
    "options": [
      "Functionalism",
      "Structuralism",
      "Gestalt",
      "Psychoanalysis"
    ],
    "correctAnswer": 0,
    "explanation": "Functionalism was the early school of thought that focused on the adaptive purposes and functions of mental processes. Influenced by Darwin's theory of evolution, functionalists like William James were more interested in why we have certain mental abilities and how they help us survive and thrive, in contrast to structuralists who were concerned with what the mind is made of.",
    "subject": "psychology",
    "year": 2015,
    "chapter": 1
  },
  {
    "id": "psych-2015-1-20",
    "question": "Which of the following questions is most likely to be posed by a psychologist focused on the goal of prediction?",
    "options": [
      "What percentage of children in a study group exhibit anxiety?",
      "Will children who are bullied in school be more likely to experience depression later in life?",
      "Why does a lack of social connection lead to feelings of loneliness?",
      "How can we reduce bullying in schools?"
    ],
    "correctAnswer": 1,
    "explanation": "The question, \"Will children who are bullied in school be more likely to experience depression later in life?\" is most aligned with the goal of prediction. This question seeks to forecast a future outcome (depression) based on a current or past behavior (bullying). The other questions relate to description (A), explanation (C), and control (D).",
    "subject": "psychology",
    "year": 2015,
    "chapter": 1
  },
  {
    "id": "psych-2015-1-21",
    "question": "A researcher studies the daily habits and social interactions of hyenas in their natural habitat in Ethiopia's Harar region without any interference. This method is best described as:",
    "options": [
      "A correlational study.",
      "A case study.",
      "Naturalistic observation.",
      "An experiment."
    ],
    "correctAnswer": 2,
    "explanation": "This method is best described as naturalistic observation. This research technique involves observing subjects in their natural environment without any manipulation or interference from the researcher. It is the ideal method for studying authentic, uninfluenced behavior, especially in animal studies.",
    "subject": "psychology",
    "year": 2015,
    "chapter": 1
  },
  {
    "id": "psych-2015-1-22",
    "question": "To understand the profound, long-term effects of a rare medical condition on a single individual's cognitive and emotional development, a researcher conducts extensive interviews and tests over many years. This approach is an example of a(n):",
    "options": [
      "Case study.",
      "Longitudinal survey.",
      "Experiment.",
      "Ethnography."
    ],
    "correctAnswer": 0,
    "explanation": "This approach is an example of a case study. A case study is an in-depth, intensive investigation of a single person, a small group, or an event. It is particularly useful for studying rare conditions or unique individuals where a large sample size is not available. While it is longitudinal in nature, the core method of focusing on a single subject makes it a case study.",
    "subject": "psychology",
    "year": 2015,
    "chapter": 1
  },
  {
    "id": "psych-2015-1-23",
    "question": "A journalist finds a strong positive correlation between a city's average monthly rainfall and the number of traffic accidents. What is the most significant limitation of concluding that heavy rain directly causes accidents?",
    "options": [
      "The journalist's data was likely inaccurate.",
      "Correlation does not prove causation; a third variable could be involved.",
      "The research was not published in a peer-reviewed journal.",
      "The number of accidents is an unreliable measure."
    ],
    "correctAnswer": 1,
    "explanation": "This is another classic example of the \"correlation does not prove causation\" principle. While it seems intuitive that rain causes accidents, a third variable could be involved, such as the number of cars on the road. For example, during high-rainfall months, there might also be a higher number of vehicles on the road, which could be the true cause of the increased accidents.",
    "subject": "psychology",
    "year": 2015,
    "chapter": 1
  },
  {
    "id": "psych-2015-1-24",
    "question": "The cognitive revolution in psychology represented a significant shift in focus away from what?",
    "options": [
      "Unconscious drives and desires.",
      "Observable behaviors.",
      "The influence of culture and social norms.",
      "The adaptive functions of behavior."
    ],
    "correctAnswer": 1,
    "explanation": "The cognitive revolution in the 1950s and 60s represented a significant shift in focus away from observable behaviors, which had been the primary focus of behaviorism. It brought the study of internal mental processes, such as memory, problem-solving, and thinking, back to the forefront of psychological research.",
    "subject": "psychology",
    "year": 2015,
    "chapter": 1
  },
  {
    "id": "psych-2015-1-25",
    "question": "The question \"How does the capacity of human memory change from childhood through adulthood, and what is the evolutionary purpose of this change?\" would most likely be asked by a psychologist from which school of thought?",
    "options": [
      "Structuralism",
      "Functionalism",
      "Psychodynamic",
      "Behaviorism"
    ],
    "correctAnswer": 1,
    "explanation": "This question would most likely be asked by a functionalist. Functionalism focuses on the purpose or function of mental processes and behaviors, and is often influenced by evolutionary theory. The question asks not only about the change in memory capacity but also its \"evolutionary purpose,\" which is a hallmark of the functionalist perspective.",
    "subject": "psychology",
    "year": 2015,
    "chapter": 1
  },
  {
    "id": "psych-2015-1-26",
    "question": "A researcher is investigating how cultural values influence a person's perception of beauty. Her work falls primarily within the subfield of:",
    "options": [
      "Social psychology.",
      "Educational psychology.",
      "Personality psychology.",
      "Cognitive psychology."
    ],
    "correctAnswer": 0,
    "explanation": "The researcher's work falls primarily within social psychology. Social psychology studies how individuals' thoughts, feelings, and behaviors are influenced by others and by the social environment. The influence of cultural values on perception is a key area of study in this field.",
    "subject": "psychology",
    "year": 2015,
    "chapter": 1
  },
  {
    "id": "psych-2015-1-27",
    "question": "A psychologist studying how parents' communication styles differ across three generations (grandparents, parents, and children) at a single point in time is using which type of research design?",
    "options": [
      "Longitudinal",
      "Cross-sectional",
      "Case study",
      "Experimental"
    ],
    "correctAnswer": 1,
    "explanation": "This is an example of a cross-sectional research design. A cross-sectional study compares different groups (in this case, different generations) at the same point in time. A longitudinal study would follow the same group of people over a long period.",
    "subject": "psychology",
    "year": 2015,
    "chapter": 1
  },
  {
    "id": "psych-2015-1-28",
    "question": "Which of the following sub-fields of psychology is more concerned with helping people cope with life transitions, stress, and personal adjustments?",
    "options": [
      "Counseling psychology",
      "Experimental psychology",
      "Health psychology",
      "Clinical psychology"
    ],
    "correctAnswer": 0,
    "explanation": "Counseling psychology is the subfield most concerned with helping people cope with life transitions, stress, and personal adjustments. While clinical psychology also helps people, it typically focuses on more severe mental disorders, while counseling psychology focuses on everyday life issues and improving overall well-being.",
    "subject": "psychology",
    "year": 2015,
    "chapter": 1
  },
  {
    "id": "psych-2015-1-29",
    "question": "A psychologist believes that a client's chronic fear of public speaking is a learned response, developed after they were laughed at during a school presentation as a child. This view is most consistent with the:",
    "options": [
      "Cognitive perspective.",
      "Sociocultural perspective.",
      "Biological perspective.",
      "Behavioral perspective."
    ],
    "correctAnswer": 3,
    "explanation": "This view is most consistent with the behavioral perspective. The behavioral perspective, championed by psychologists like B.F. Skinner and John B. Watson, argues that all behavior is a learned response to environmental stimuli. Licensed by Google The fear of public speaking is seen here as a learned response to a negative event (being laughed at).",
    "subject": "psychology",
    "year": 2015,
    "chapter": 1
  },
  {
    "id": "psych-2016-1-1",
    "question": "In an experimental study, a researcher manipulates the amount of caffeine a participant consumes to see its effect on their reaction time. What is the cause-and-effect relationship being explored?",
    "options": [
      "How reaction time influences caffeine consumption.",
      "How caffeine consumption influences reaction time.",
      "How both are influenced by a third variable.",
      "How reaction time and caffeine are unrelated."
    ],
    "correctAnswer": 1,
    "explanation": "In an experimental study, the researcher actively manipulates the independent variable (caffeine consumption) to see its effect on the dependent variable (reaction time). The independent variable is the proposed cause, and the dependent variable is the proposed effect. Therefore, the cause-and-effect relationship being explored is how caffeine consumption influences reaction time.",
    "subject": "psychology",
    "year": 2016,
    "chapter": 1
  },
  {
    "id": "psych-2016-1-2",
    "question": "A psychologist adhering to the psychodynamic perspective would most likely explain a person's repeated pattern of choosing unreliable partners by pointing to:",
    "options": [
      "A history of being rewarded for making poor choices.",
      "Their unique pattern of negative thoughts and beliefs.",
      "Unresolved unconscious conflicts from childhood.",
      "Their need for personal growth and self-actualization."
    ],
    "correctAnswer": 2,
    "explanation": "The psychodynamic perspective, originating with Freud, emphasizes the role of the unconscious mind and early childhood experiences in shaping adult behavior. A psychodynamic psychologist would argue that a person's repeated pattern of choosing unreliable partners is not a conscious choice but is instead driven by deep-seated, unresolved conflicts from their childhood, such as their relationship with a parent.",
    "subject": "psychology",
    "year": 2016,
    "chapter": 1
  },
  {
    "id": "psych-2016-1-3",
    "question": "A psychologist from the sociocultural perspective would argue that to understand a person's view on marriage, one must first understand:",
    "options": [
      "Their brain chemistry and genetic predispositions.",
      "Their unique pattern of thoughts and beliefs.",
      "The cultural norms and social expectations of their community.",
      "Their early childhood relationships."
    ],
    "correctAnswer": 2,
    "explanation": "The sociocultural perspective emphasizes how a person's behavior and mental processes are shaped by their culture, social groups, and social norms. Therefore, to understand a person's view on marriage, a psychologist from this perspective would first need to understand the cultural and social context in which that person was raised and lives.",
    "subject": "psychology",
    "year": 2016,
    "chapter": 1
  },
  {
    "id": "psych-2016-1-4",
    "question": "All of the following are the main focus of Freudian psychodynamic theory except:",
    "options": [
      "The influence of unconscious mental behavior on everyday behavior",
      "The role of childhood experiences in shaping adult personality",
      "The role of the conscious mind in determining human behavior",
      "The role of intrapersonal conflict in determining human behavior"
    ],
    "correctAnswer": 2,
    "explanation": "Freudian psychodynamic theory places a strong emphasis on the unconscious mind and how it influences behavior, as well as the lasting impact of early childhood experiences and internal (intrapersonal) conflicts. It minimizes the role of the conscious mind, arguing that much of our behavior is driven by forces we are not aware of.",
    "subject": "psychology",
    "year": 2016,
    "chapter": 1
  },
  {
    "id": "psych-2016-1-5",
    "question": "A study reveals a strong positive correlation between the number of times people listen to Ethiopian music and their reported feelings of happiness. Concluding that listening to Ethiopian music causes happiness is incorrect because:",
    "options": [
      "The correlation is not statistically significant.",
      "A third variable, such as celebratory events, is likely responsible for both increases.",
      "The research method should have been an experiment.",
      "Self-report data on happiness is unreliable."
    ],
    "correctAnswer": 1,
    "explanation": "The most significant reason this conclusion is incorrect is due to the \"third-variable problem,\" a key limitation of correlational research. A third variable, such as a celebratory event like a wedding or holiday, could be responsible for both an increase in listening to Ethiopian music and an increase in happiness, meaning that one does not necessarily cause the other.",
    "subject": "psychology",
    "year": 2016,
    "chapter": 1
  },
  {
    "id": "psych-2016-1-6",
    "question": "If you want to study the study habits of first-year students at Addis Ababa University, the most appropriate method would be:",
    "options": [
      "Experimental method",
      "Observation method",
      "Case study method",
      "Survey method"
    ],
    "correctAnswer": 3,
    "explanation": "The survey method is the most appropriate for studying the habits of a large group of people like first-year students. A survey allows a researcher to quickly and efficiently collect self-reported data on study habits from a large number of participants. The experimental method would involve manipulation, observation might not capture internal habits, and a case study would be too narrow.",
    "subject": "psychology",
    "year": 2016,
    "chapter": 1
  },
  {
    "id": "psych-2016-1-7",
    "question": "In an experimental study, a researcher wants to examine the effects of diet on memory. The variable that is measured to see the outcome is:",
    "options": [
      "The diet",
      "Memory",
      "Anxiety",
      "Independent variable"
    ],
    "correctAnswer": 1,
    "explanation": "In this experiment, the researcher is manipulating the diet (the independent variable) to see its effect on memory. Therefore, memory is the dependent variable—the outcome that is measured. The independent variable is the variable being manipulated, not the outcome.",
    "subject": "psychology",
    "year": 2016,
    "chapter": 1
  },
  {
    "id": "psych-2016-1-8",
    "question": "In a study on the effects of a new fertilizer on crop yield, the researcher's enthusiasm for the product leads him to water the experimental group's plants more frequently than the control group's plants. This is an example of:",
    "options": [
      "The placebo effect.",
      "A negative correlation.",
      "Experimenter bias.",
      "A dependent variable."
    ],
    "correctAnswer": 2,
    "explanation": "This is a classic example of experimenter bias. Experimenter bias occurs when a researcher's expectations or beliefs about the outcome of a study unintentionally influence the results. By watering the experimental group more, the researcher has introduced a confounding variable that could skew the results, making it appear that the fertilizer is effective when the real cause of the increased yield is the extra water.",
    "subject": "psychology",
    "year": 2016,
    "chapter": 1
  },
  {
    "id": "psych-2016-1-9",
    "question": "Which of the following methods is most helpful for revealing cause-effect relationships?",
    "options": [
      "Survey",
      "Experiment",
      "Correlation",
      "Naturalistic observation"
    ],
    "correctAnswer": 1,
    "explanation": "The experiment is the only method that can reveal a cause-and-effect relationship. This is because it involves the manipulation of an independent variable and the use of a control group, which allows the researcher to isolate the effect of the manipulated variable and rule out other possible causes.",
    "subject": "psychology",
    "year": 2016,
    "chapter": 1
  },
  {
    "id": "psych-2016-1-10",
    "question": "A psychologist working with the Ethiopian Ministry of Education is tasked with designing more effective curricula and developing new teaching methods for primary schools. This work is most characteristic of which field?",
    "options": [
      "Social Psychology.",
      "Human Factors (Ergonomics) Psychology.",
      "Developmental Psychology.",
      "Educational Psychology."
    ],
    "correctAnswer": 3,
    "explanation": "This work is most characteristic of Educational Psychology. Educational psychology is a field that studies how people learn in educational settings and applies psychological principles to improve teaching, learning, and curriculum design.",
    "subject": "psychology",
    "year": 2016,
    "chapter": 1
  },
  {
    "id": "psych-2016-1-11",
    "question": "A study reports a correlation coefficient of -0.92 between the number of hours spent exercising per week and body mass index (BMI). This suggests that:",
    "options": [
      "There is a weak relationship between exercise and BMI.",
      "Exercising causes a decrease in BMI.",
      "As exercise time increases, BMI tends to decrease.",
      "As exercise time increases, BMI tends to increase."
    ],
    "correctAnswer": 2,
    "explanation": "A correlation coefficient of -0.92 indicates a strong negative correlation. A negative correlation means that as one variable (exercise time) increases, the other variable (BMI) tends to decrease. The closer the number is to -1.0 or +1.0, the stronger the relationship.",
    "subject": "psychology",
    "year": 2016,
    "chapter": 1
  },
  {
    "id": "psych-2016-1-12",
    "question": "A research participant, Fikre, is given a new anxiety drug. However, his anxiety decreases even though the pill he received contained no active medication. This is an example of the:",
    "options": [
      "Confounding variable.",
      "Placebo effect.",
      "Dependent variable.",
      "Double-blind control."
    ],
    "correctAnswer": 1,
    "explanation": "This is a clear example of the placebo effect. The placebo effect occurs when a person's expectations or beliefs about a treatment cause them to experience a change, even though the treatment itself has no therapeutic value. Fikre's anxiety decreased because he believed he was receiving an effective drug, not because of the pill's contents.",
    "subject": "psychology",
    "year": 2016,
    "chapter": 1
  },
  {
    "id": "psych-2016-1-13",
    "question": "Which of the following research methods is more appropriate to study \"the relationship between a student's self-esteem and their likelihood of dropping out of school\"?",
    "options": [
      "Correlational Method",
      "Observational Method",
      "Experimental Method",
      "Survey Method"
    ],
    "correctAnswer": 0,
    "explanation": "The correlational method is the most appropriate because it is designed to examine the relationship between two variables—in this case, self-esteem and the likelihood of dropping out. An experimental method would be unethical as it would involve manipulating students' self-esteem, and while a survey could be used to collect the data, the underlying research method for analyzing the relationship is correlational.",
    "subject": "psychology",
    "year": 2016,
    "chapter": 1
  },
  {
    "id": "psych-2016-1-14",
    "question": "In a study titled \"The Impact of Class Attendance on Student Grades,\" the dependent variable is:",
    "options": [
      "The students' grades.",
      "The number of classes attended.",
      "The difficulty of the course.",
      "The students' motivation."
    ],
    "correctAnswer": 0,
    "explanation": "The dependent variable is the outcome that is measured. In this study, the researcher is looking at the impact of class attendance on grades, so the students' grades are the outcome being measured. The number of classes attended is the independent variable, the one that is being manipulated or studied for its impact.",
    "subject": "psychology",
    "year": 2016,
    "chapter": 1
  },
  {
    "id": "psych-2016-1-15",
    "question": "The shift in psychology from studying observable behavior to focusing on how people process information was championed by which perspective?",
    "options": [
      "Cognitive.",
      "Behaviorism.",
      "Functionalism.",
      "Psychoanalysis."
    ],
    "correctAnswer": 0,
    "explanation": "The Cognitive perspective was at the forefront of the cognitive revolution, which shifted the focus of psychology back to studying internal mental processes like thinking, memory, and problem-solving. This was a direct reaction against the behaviorist focus on only observable behaviors.",
    "subject": "psychology",
    "year": 2016,
    "chapter": 1
  },
  {
    "id": "psych-2016-1-16",
    "question": "A therapist, Araya, helps a client overcome a fear of public speaking by helping him identify and challenge his negative thoughts (\"I will mess up,\" \"Everyone is judging me\"). This approach is rooted in which psychological perspective?",
    "options": [
      "Psychoanalytic.",
      "Humanistic.",
      "Behavioral.",
      "Cognitive."
    ],
    "correctAnswer": 3,
    "explanation": "This approach is rooted in the Cognitive perspective. The cognitive perspective focuses on how a person's thoughts, beliefs, and expectations influence their emotions and behaviors. By helping the client challenge his negative thoughts, the therapist is using a core technique of cognitive therapy.",
    "subject": "psychology",
    "year": 2016,
    "chapter": 1
  },
  {
    "id": "psych-2016-1-17",
    "question": "A psychologist suggests that a client's obsessive-compulsive behaviors are a result of unconscious attempts to control forbidden thoughts and impulses. This perspective is most characteristic of:",
    "options": [
      "Psychoanalytic psychology.",
      "Biological psychology.",
      "Behavioral psychology.",
      "Humanistic psychology."
    ],
    "correctAnswer": 0,
    "explanation": "This perspective is most characteristic of Psychoanalytic psychology. Freud and other psychodynamic theorists would argue that obsessive-compulsive behaviors are a defense mechanism used to manage unconscious conflicts or forbidden thoughts that a person is not consciously aware of.",
    "subject": "psychology",
    "year": 2016,
    "chapter": 1
  },
  {
    "id": "psych-2016-1-18",
    "question": "A psychologist, Biruk, wants to understand if there is a relationship between a person's level of physical fitness and their mental well-being. He collects data from a large sample of people. Which research method is he most likely using?",
    "options": [
      "Experimental",
      "Correlational",
      "Case Study",
      "Naturalistic Observation"
    ],
    "correctAnswer": 1,
    "explanation": "Biruk is most likely using the correlational method. He is trying to find out if a relationship exists between two variables (physical fitness and mental well-being) without manipulating either of them. This is the primary function of correlational research.",
    "subject": "psychology",
    "year": 2016,
    "chapter": 1
  },
  {
    "id": "psych-2016-1-19",
    "question": "A researcher, Aster, is studying how a person's upbringing and social environment shape their moral values. This work aligns with the goals of which perspective?",
    "options": [
      "Biological",
      "Psychodynamic",
      "Sociocultural",
      "Humanistic"
    ],
    "correctAnswer": 2,
    "explanation": "This work aligns with the Sociocultural perspective. The sociocultural perspective focuses on the role of social and cultural factors—such as upbringing and social environment—in shaping behavior and mental processes. Moral values are heavily influenced by the social and cultural context in which a person is raised.",
    "subject": "psychology",
    "year": 2016,
    "chapter": 1
  },
  {
    "id": "psych-2016-1-20",
    "question": "Which of the following is an example of the psychological goal of description?",
    "options": [
      "Mesfin explains why children become more rebellious during adolescence.",
      "Aster predicts who is most likely to succeed in college.",
      "Alemayehu documents the different types of learning disabilities in his students.",
      "Genet creates a program to help students with test anxiety."
    ],
    "correctAnswer": 2,
    "explanation": "The goal of description is to simply observe and record behavior or a phenomenon. Alemayehu is merely documenting or describing the different types of learning disabilities, which is a key part of the descriptive goal. The other options involve explanation (A), prediction (B), and control (D).",
    "subject": "psychology",
    "year": 2016,
    "chapter": 1
  },
  {
    "id": "psych-2016-1-21",
    "question": "A researcher, Mulugeta, investigates if listening to classical music improves performance on a math test. He randomly assigns one group to listen to classical music while taking the test and another group to take the test in silence. The group that takes the test in silence is the:",
    "options": [
      "Placebo group",
      "Experimental group",
      "Confounding variable",
      "Control group"
    ],
    "correctAnswer": 3,
    "explanation": "The group that takes the test in silence is the control group. The control group is the one that does not receive the experimental treatment (listening to classical music) and serves as a baseline for comparison. The experimental group receives the treatment.",
    "subject": "psychology",
    "year": 2016,
    "chapter": 1
  },
  {
    "id": "psych-2016-1-22",
    "question": "A study finds a negative correlation between the amount of coffee a person drinks and the number of hours they sleep. This means:",
    "options": [
      "Drinking more coffee causes a person to sleep less.",
      "Drinking more coffee is associated with a decrease in sleep time.",
      "There is no relationship between coffee and sleep.",
      "Drinking more coffee causes a person to sleep more."
    ],
    "correctAnswer": 1,
    "explanation": "A negative correlation means that as one variable increases, the other variable tends to decrease. Therefore, as coffee consumption increases, sleep time decreases. However, it is crucial to remember that this is a correlation, and we cannot conclude that coffee causes the decrease in sleep time. Licensed by Google.",
    "subject": "psychology",
    "year": 2016,
    "chapter": 1
  },
  {
    "id": "psych-2016-1-23",
    "question": "The saying \"The whole is greater than the sum of its parts\" is a core principle of which school of thought?",
    "options": [
      "Structuralism",
      "Functionalism",
      "Gestalt psychology",
      "Behaviorism"
    ],
    "correctAnswer": 2,
    "explanation": "\"The whole is greater than the sum of its parts\" is the core principle of Gestalt psychology. The Gestalt school argued that perception is not simply a combination of individual sensory experiences but is instead a holistic experience where the mind organizes these sensations into meaningful wholes.",
    "subject": "psychology",
    "year": 2016,
    "chapter": 1
  },
  {
    "id": "psych-2016-1-24",
    "question": "A psychologist, Sisay, is working with the police to create psychological profiles of criminals to help them solve cases. This work falls into the subfield of:",
    "options": [
      "Social psychology",
      "Forensic psychology",
      "Clinical psychology",
      "Industrial-Organizational psychology"
    ],
    "correctAnswer": 1,
    "explanation": "This work falls into the subfield of Forensic psychology. Forensic psychology applies psychological principles and research methods to the legal and criminal justice systems. Creating psychological profiles is a common task for a forensic psychologist.",
    "subject": "psychology",
    "year": 2016,
    "chapter": 1
  },
  {
    "id": "psych-2016-1-25",
    "question": "The field of psychology that studies how people change and grow from birth through old age is called:",
    "options": [
      "Social psychology",
      "Developmental psychology",
      "Clinical psychology",
      "Health psychology"
    ],
    "correctAnswer": 1,
    "explanation": "Developmental psychology is the field that studies how people change and grow across the lifespan. It examines physical, cognitive, and social changes that occur at different stages of life.",
    "subject": "psychology",
    "year": 2016,
    "chapter": 1
  },
  {
    "id": "psych-2016-1-26",
    "question": "A researcher, Tsehay, wants to find out if there is a relationship between the level of family support a person receives and their ability to cope with stress. She measures both variables using a questionnaire. This is an example of what type of research?",
    "options": [
      "Descriptive",
      "Experimental",
      "Correlational",
      "Naturalistic observation"
    ],
    "correctAnswer": 2,
    "explanation": "This is an example of correlational research. Tsehay is not manipulating any variables but is simply collecting data on two variables (family support and ability to cope with stress) to see if a relationship exists between them.",
    "subject": "psychology",
    "year": 2016,
    "chapter": 1
  },
  {
    "id": "psych-2016-1-27",
    "question": "In an experiment, what is the variable that is being measured to see the outcome?",
    "options": [
      "Independent variable",
      "Dependent variable",
      "Confounding variable",
      "Control group"
    ],
    "correctAnswer": 1,
    "explanation": "In an experiment, the dependent variable is the outcome that is being measured to see if it changes as a result of the manipulation of the independent variable. Licensed by Google. It \"depends\" on the independent variable.",
    "subject": "psychology",
    "year": 2016,
    "chapter": 1
  },
  {
    "id": "psych-2016-1-28",
    "question": "A psychologist who believes that all behavior can be explained by environmental stimuli, responses, and their consequences (rewards and punishments) is a:",
    "options": [
      "Psychoanalyst",
      "Humanist",
      "Behaviorist",
      "Cognitive psychologist"
    ],
    "correctAnswer": 2,
    "explanation": "A behaviorist is a psychologist who believes that all behavior can be explained by environmental factors. They focus on observable behaviors and reject the study of internal mental states, arguing that behavior is shaped by a system of rewards and punishments.",
    "subject": "psychology",
    "year": 2016,
    "chapter": 1
  },
  {
    "id": "psych-2016-1-29",
    "question": "Which of the following is a key characteristic of the experimental method?",
    "options": [
      "It can only be used in a natural setting.",
      "It cannot prove a cause-and-effect relationship.",
      "It involves the manipulation of an independent variable.",
      "It focuses on the in-depth study of a single individual."
    ],
    "correctAnswer": 2,
    "explanation": "The key characteristic of the experimental method is the manipulation of an independent variable. This is what allows a researcher to determine a cause-and-effect relationship between variables.",
    "subject": "psychology",
    "year": 2016,
    "chapter": 1
  },
  {
    "id": "psych-2016-1-30",
    "question": "A psychologist, Meskerem, who helps athletes improve their focus, motivation, and performance is likely a specialist in:",
    "options": [
      "Educational psychology",
      "Sports psychology",
      "Health psychology",
      "Clinical psychology"
    ],
    "correctAnswer": 1,
    "explanation": "Meskerem is likely a specialist in Sports psychology. Sports psychology is a subfield that applies psychological principles to improve athletic performance, motivation, and mental well-being in sports.",
    "subject": "psychology",
    "year": 2016,
    "chapter": 1
  },
  {
    "id": "psych-2016-1-31",
    "question": "An early school of psychology that emphasized how consciousness helps an organism adapt to its environment was:",
    "options": [
      "Structuralism",
      "Functionalism",
      "Behaviorism",
      "Humanism"
    ],
    "correctAnswer": 1,
    "explanation": "Functionalism, a school of thought founded by William James, focused on how mental processes and consciousness help an organism adapt to its environment. It was influenced by Charles Darwin's theory of evolution.",
    "subject": "psychology",
    "year": 2016,
    "chapter": 1
  },
  {
    "id": "psych-2016-1-32",
    "question": "Which of the following is an example of the psychological goal of explanation?",
    "options": [
      "The psychologist notes that 15% of students are afraid of public speaking.",
      "The psychologist predicts that students with high anxiety will avoid public speaking.",
      "The psychologist explains that fear of public speaking is often due to past negative experiences.",
      "The psychologist develops a program to help students with their fear of public speaking."
    ],
    "correctAnswer": 2,
    "explanation": "The goal of explanation is to determine the \"why\" behind a behavior. By stating that the fear is due to past negative experiences, the psychologist is providing a potential reason or cause, which is the essence of the explanation goal.",
    "subject": "psychology",
    "year": 2016,
    "chapter": 1
  },
  {
    "id": "psych-2016-1-33",
    "question": "A researcher, Yared, wants to know the average number of siblings of students at a local high school. He hands out a questionnaire to a representative sample of students. Which research method is he using?",
    "options": [
      "Case study",
      "Correlational study",
      "Experiment",
      "Survey"
    ],
    "correctAnswer": 3,
    "explanation": "Yared is using a survey. The survey method is a research technique where researchers gather self-reported data from a large sample of people, typically through questionnaires or interviews, to study attitudes, beliefs, or behaviors.",
    "subject": "psychology",
    "year": 2016,
    "chapter": 1
  },
  {
    "id": "psych-2016-1-34",
    "question": "Which perspective focuses on how the brain, nervous system, and other biological factors influence behavior and mental processes?",
    "options": [
      "Cognitive",
      "Biological",
      "Humanistic",
      "Psychodynamic"
    ],
    "correctAnswer": 1,
    "explanation": "The Biological perspective is the one that focuses on how biological factors—such as the brain, nervous system, hormones, and genetics—influence behavior and mental processes.",
    "subject": "psychology",
    "year": 2016,
    "chapter": 1
  },
  {
    "id": "psych-2016-1-35",
    "question": "A psychologist, Desta, is studying the cognitive processes involved in solving the traditional Ethiopian game of \"Gebeta.\" This is a topic that would be of interest to a:",
    "options": [
      "Developmental psychologist",
      "Clinical psychologist",
      "Cognitive psychologist",
      "Social psychologist"
    ],
    "correctAnswer": 2,
    "explanation": "This is a topic of interest to a Cognitive psychologist. Cognitive psychology is the study of mental processes such as thinking, problem-solving, memory, and language. Studying how a person thinks through the steps of a game like \"Gebeta\" is a prime example of cognitive research.",
    "subject": "psychology",
    "year": 2016,
    "chapter": 1
  },
  {
    "id": "psych-2016-1-36",
    "question": "A researcher, Workneh, wants to investigate how the presence of a mobile phone affects face-to-face communication. He sets up a situation where two groups of people are having a conversation—one with their phones on the table and one with them put away. The quality of the conversation is the:",
    "options": [
      "Independent variable",
      "Confounding variable",
      "Dependent variable",
      "Placebo"
    ],
    "correctAnswer": 2,
    "explanation": "In this experiment, the quality of the conversation is the dependent variable. It is the outcome that is being measured to see if it is affected by the independent variable (the presence of a mobile phone).",
    "subject": "psychology",
    "year": 2016,
    "chapter": 1
  },
  {
    "id": "psych-2016-1-37",
    "question": "Which research method allows a researcher to study a rare phenomenon in-depth but cannot be used to generalize findings to a larger population?",
    "options": [
      "Correlational study",
      "Experiment",
      "Case study",
      "Naturalistic observation"
    ],
    "correctAnswer": 2,
    "explanation": "The case study method allows for an intensive, in-depth study of a single person or a small group, which is ideal for rare phenomena. However, because the sample is so small and unique, the findings cannot be reliably generalized to a larger population.",
    "subject": "psychology",
    "year": 2016,
    "chapter": 1
  },
  {
    "id": "psych-2016-1-38",
    "question": "A psychologist who believes that a person's behavior is the result of their own rational choices and free will, rather than unconscious forces or environmental factors, is a:",
    "options": [
      "Psychodynamic psychologist",
      "Behavioral psychologist",
      "Humanistic psychologist",
      "Biological psychologist"
    ],
    "correctAnswer": 2,
    "explanation": "A Humanistic psychologist believes that a person's behavior is the result of their own free will and choices. This perspective emphasizes a person's inherent drive for personal growth and self-actualization, distinguishing it from psychodynamic, behavioral, and biological perspectives.",
    "subject": "psychology",
    "year": 2016,
    "chapter": 1
  },
  {
    "id": "psych-2016-1-39",
    "question": "Which of the following is an example of the psychological goal of prediction?",
    "options": [
      "The researcher explains that students with higher grades have better study habits.",
      "The researcher documents the grades of students in a class.",
      "The researcher creates a program to improve students' grades.",
      "The researcher uses a student's past GPA to forecast their likelihood of being accepted into graduate school."
    ],
    "correctAnswer": 3,
    "explanation": "The goal of prediction is to forecast future behavior or outcomes based on past and present data. Using a student's GPA to forecast their likelihood of being accepted into graduate school is a direct example of this goal.",
    "subject": "psychology",
    "year": 2016,
    "chapter": 1
  },
  {
    "id": "psych-2016-1-40",
    "question": "A school psychologist, Eyerusalem, is helping a student who is struggling with anxiety and low self-esteem. She is most likely a specialist in:",
    "options": [
      "Educational psychology",
      "Counseling psychology",
      "Clinical psychology",
      "Developmental psychology"
    ],
    "correctAnswer": 1,
    "explanation": "Eyerusalem is most likely a specialist in Counseling psychology. This field focuses on helping people cope with life challenges, personal adjustments, and common psychological issues like anxiety and low self-esteem.",
    "subject": "psychology",
    "year": 2016,
    "chapter": 1
  },
  {
    "id": "psych-2016-1-41",
    "question": "A study finds a positive correlation between the number of hours Ethiopian students spend in tutoring sessions and their performance on a national exam. This means:",
    "options": [
      "Tutoring causes an increase in exam scores.",
      "Tutoring is associated with an increase in exam scores.",
      "Tutoring is not related to exam scores.",
      "There is a weak relationship between tutoring and exam scores."
    ],
    "correctAnswer": 1,
    "explanation": "A positive correlation means that as one variable increases (tutoring hours), the other variable also tends to increase (exam scores). It is important to note that this is an association, not causation. A third variable, such as a student's motivation, could be responsible for both increased tutoring and higher scores.",
    "subject": "psychology",
    "year": 2016,
    "chapter": 1
  },
  {
    "id": "psych-2016-1-42",
    "question": "A psychologist, Aster, suggests that her client's persistent fear of public speaking is the result of a traumatic experience from childhood that the client has repressed. Aster's view is most consistent with which psychological perspective?",
    "options": [
      "Psychoanalytic",
      "Behavioral",
      "Humanistic",
      "Cognitive"
    ],
    "correctAnswer": 0,
    "explanation": "Aster's view is most consistent with the Psychoanalytic perspective. This school of thought, founded by Freud, emphasizes the powerful influence of repressed or unconscious memories and conflicts from childhood in shaping adult behavior and emotional problems.",
    "subject": "psychology",
    "year": 2016,
    "chapter": 1
  },
  {
    "id": "psych-2016-1-43",
    "question": "Chala wants to determine if there is a relationship between the amount of coffee a student drinks and their average exam score. He surveys 500 students, asking about their weekly coffee consumption and their grades. What is the most appropriate research method for Chala to use?",
    "options": [
      "Experimental method",
      "Case study",
      "Naturalistic observation",
      "Correlational method"
    ],
    "correctAnswer": 3,
    "explanation": "The correlational method is the most appropriate. Chala is not manipulating any variables or assigning students to different groups. He is simply collecting data on two variables (coffee consumption and exam scores) to see if a relationship exists between them.",
    "subject": "psychology",
    "year": 2016,
    "chapter": 1
  },
  {
    "id": "psych-2014-1-2",
    "question": "All of the following are the main focus of Freudian psychodynamic theory except: (HMU2013)",
    "options": [
      "The influence of unconscious mental behavior on everyday behavior",
      "The role of childhood experiences in shaping adult personality",
      "The role of the conscious mind in determining human behavior",
      "The role of intrapersonal conflict in determining human behavior"
    ],
    "correctAnswer": 2,
    "explanation": "Freudian psychodynamic theory primarily emphasizes the unconscious mind and the impact of early childhood experiences on personality. Freud believed that most human behavior is driven by unconscious desires, conflicts, and motivations, rather than conscious thought. Therefore, the role of the conscious mind is not the main focus of his theory.",
    "subject": "psychology",
    "year": 2014,
    "chapter": 1
  },
  {
    "id": "psych-2014-1-3",
    "question": "A study reveals a strong positive correlation between the amount of ice cream sold and the number of drownings in a city. Concluding that eating ice cream causes drowning is incorrect because:",
    "options": [
      "The correlation is not statistically significant.",
      "A third variable, such as high temperatures, is likely responsible for both increases.",
      "The research method should have been an experiment.",
      "Self-report data on ice cream consumption is unreliable."
    ],
    "correctAnswer": 1,
    "explanation": "This is a classic example of correlation not equaling causation. While ice cream sales and drownings are positively correlated (they both increase together), it's not a direct cause-and-effect relationship. The likely cause for both is a third, confounding variable, in this case, high temperatures🌡️. When it's hot, more people buy ice cream and more people go swimming, which increases the likelihood of drownings.",
    "subject": "psychology",
    "year": 2014,
    "chapter": 1
  },
  {
    "id": "psych-2014-1-4",
    "question": "If you want to study the attitude of Freshman students at Wolkite University towards the General Psychology Course, the appropriate method will be:",
    "options": [
      "Experimental method",
      "Observation method",
      "Case study method",
      "Survey method"
    ],
    "correctAnswer": 3,
    "explanation": "A survey is the most appropriate method for collecting data on the attitudes, opinions, and beliefs of a large group of people. It involves asking a standardized set of questions, typically through questionnaires or interviews, to a representative sample of the population (in this case, freshman students). An experiment would be used for cause-and-effect relationships, observation for watching behavior in a natural setting, and a case study for in-depth analysis of a single person or small group.",
    "subject": "psychology",
    "year": 2014,
    "chapter": 1
  },
  {
    "id": "psych-2014-1-5",
    "question": "In an experimental study, the researcher wants to examine the effects of anxiety on performance. The variable that represents anxiety would be:",
    "options": [
      "Experimental variable",
      "Dependent variable",
      "Correlation",
      "Independent variable"
    ],
    "correctAnswer": 3,
    "explanation": "In an experiment, the independent variable (IV) is the factor that the researcher manipulates or changes to observe its effect. In this study, the researcher would manipulate the level of anxiety (e.g., by creating high-anxiety vs. low-anxiety conditions) to see how it affects performance. The performance itself would be the dependent variable (DV), as it's the outcome that is measured.",
    "subject": "psychology",
    "year": 2014,
    "chapter": 1
  },
  {
    "id": "psych-2014-1-6",
    "question": "In a study on the effects of a new teaching method on student learning, the researcher's unconscious bias in favor of the new method leads her to be more encouraging to the students in the experimental group. This is an example of:",
    "options": [
      "The placebo effect.",
      "A negative correlation.",
      "Experimenter bias.",
      "A dependent variable"
    ],
    "correctAnswer": 2,
    "explanation": "Experimenter bias occurs when a researcher's expectations or beliefs about the outcome of a study unintentionally influence the results. The researcher's encouraging behavior toward the experimental group in this example is not part of the study's design and could skew the results, making the new teaching method seem more effective than it actually is.",
    "subject": "psychology",
    "year": 2014,
    "chapter": 1
  },
  {
    "id": "psych-2014-1-7",
    "question": "Which of the following methods is most helpful for revealing cause-effect relationships?",
    "options": [
      "Survey",
      "Experiment",
      "Correlation",
      "Naturalistic observation"
    ],
    "correctAnswer": 1,
    "explanation": "An experiment is the only research method that can establish a true cause-and-effect relationship between variables. This is because it involves manipulating an independent variable while controlling for other factors, allowing the researcher to isolate the effect of the independent variable on the dependent variable.",
    "subject": "psychology",
    "year": 2014,
    "chapter": 1
  },
  {
    "id": "psych-2014-1-8",
    "question": "A psychologist working at a tech company is tasked with designing a user interface for a new app that is intuitive and easy for people to learn. This work is most characteristic of which field?",
    "options": [
      "Social Psychology.",
      "Human Factors (Ergonomics) Psychology.",
      "Developmental Psychology.",
      "Clinical Psychology."
    ],
    "correctAnswer": 1,
    "explanation": "Human Factors Psychology, also known as Ergonomics, is a field that focuses on the interaction between humans and systems or products. Its goal is to design technology and work environments that are safe, effective, and easy to use. Designing an intuitive user interface for an app is a perfect example of this field's application.",
    "subject": "psychology",
    "year": 2014,
    "chapter": 1
  },
  {
    "id": "psych-2014-1-9",
    "question": "A study reports a correlation coefficient of -0.78 between the number of class absences and final exam scores. This suggests that:",
    "options": [
      "There is a weak relationship between attendance and scores.",
      "Missing class causes students to get low scores.",
      "As class absences increase, final exam scores tend to decrease.",
      "As class absences increase, final exam scores tend to increase."
    ],
    "correctAnswer": 2,
    "explanation": "A correlation coefficient (r) ranges from -1 to +1. The sign indicates the direction of the relationship: Negative sign (-): Indicates an inverse relationship. As one variable increases, the other decreases. Positive sign (+): Indicates a direct relationship. As one variable increases, the other also increases. The value (the number itself, ignoring the sign) indicates the strength. A value of -0.78 is a strong negative correlation, meaning as the number of class absences increases, final exam scores tend to decrease.",
    "subject": "psychology",
    "year": 2014,
    "chapter": 1
  },
  {
    "id": "psych-2014-1-10",
    "question": "Dream analysis might be an important research technique to a psychologist from which of the following perspectives?",
    "options": [
      "Behaviorist",
      "Biopsychologist",
      "Psychoanalytic",
      "Cognitive"
    ],
    "correctAnswer": 2,
    "explanation": "Psychoanalytic theory, founded by Sigmund Freud, places a heavy emphasis on the unconscious mind. Freud believed that dreams are a \"royal road to the unconscious,\" and that analyzing their content could reveal hidden desires, fears, and conflicts. Other perspectives, like behaviorism, focus on observable actions, and would not use dream analysis.",
    "subject": "psychology",
    "year": 2014,
    "chapter": 1
  },
  {
    "id": "psych-2014-1-11",
    "question": "A pharmaceutical company develops a new antidepressant. To test its effectiveness, one group of participants receives the drug, while another receives a pill containing only sugar. The sugar pill is known as a:",
    "options": [
      "Confounding variable.",
      "Placebo.",
      "Dependent variable.",
      "Double-blind control."
    ],
    "correctAnswer": 1,
    "explanation": "A placebo is an inactive substance or fake treatment used in an experiment to control for the placebo effect, which is the psychological or physical change that occurs because a person believes they are receiving a real treatment. The placebo group serves as a control group to compare the effects of the actual drug against.",
    "subject": "psychology",
    "year": 2014,
    "chapter": 1
  },
  {
    "id": "psych-2014-1-12",
    "question": "Which one of the following research methods is more appropriate to study 'the relationship between leadership style and job satisfaction'? (HMU2012)",
    "options": [
      "Correlational Method",
      "Observational Method",
      "Experimental Method",
      "Survey Method"
    ],
    "correctAnswer": 0,
    "explanation": "The goal of this study is to find a relationship between two variables: leadership style and job satisfaction. The correlational method is designed specifically for this purpose. It measures the degree to which two or more variables are related, allowing researchers to determine if changes in one variable are associated with changes in another. While a survey might be used to collect the data, the overarching research approach is correlational.",
    "subject": "psychology",
    "year": 2014,
    "chapter": 1
  },
  {
    "id": "psych-2014-1-13",
    "question": "In a study titled \"The Influence of Sleep Deprivation on Exam Performance,\" the independent variable is:",
    "options": [
      "The students' grades on the exam.",
      "The difficulty of the exam.",
      "The amount of sleep the students get.",
      "The students' natural intelligence."
    ],
    "correctAnswer": 2,
    "explanation": "The independent variable (IV) is the one that is manipulated or changed by the researcher. In this study, the researcher would control or vary the amount of sleep the participants get (e.g., a group with 8 hours of sleep vs. a group with 4 hours) to see its effect on exam performance.",
    "subject": "psychology",
    "year": 2014,
    "chapter": 1
  },
  {
    "id": "psych-2014-1-14",
    "question": "The shift in psychology from studying the mind to focusing solely on observable actions was championed by which perspective?",
    "options": [
      "Cognitive.",
      "Behaviorism.",
      "Functionalism.",
      "Psychoanalysis."
    ],
    "correctAnswer": 1,
    "explanation": "Behaviorism, championed by psychologists like John B. Watson and B.F. Skinner, rejected the study of internal mental processes like the \"mind\" and \"consciousness.\" They argued that psychology should be an objective science focused exclusively on observable behavior and how it is shaped by environmental stimuli and consequences.",
    "subject": "psychology",
    "year": 2014,
    "chapter": 1
  },
  {
    "id": "psych-2014-1-15",
    "question": "A therapist is helping a client overcome a phobia of spiders by gradually exposing her to spider-related stimuli while teaching her relaxation techniques. This approach is rooted in which psychological perspective?",
    "options": [
      "Psychoanalytic.",
      "Humanistic.",
      "Behavioral.",
      "Biological."
    ],
    "correctAnswer": 2,
    "explanation": "This therapeutic approach, known as systematic desensitization, is a core technique of behavioral therapy. It's based on the principles of classical conditioning and focuses on changing observable behaviors through learning. The therapist is helping the client \"unlearn\" the fear response to the stimuli by pairing it with a new, relaxed response.",
    "subject": "psychology",
    "year": 2014,
    "chapter": 1
  },
  {
    "id": "psych-2014-1-16",
    "question": "A psychologist suggests that a client's fear of intimacy stems from unresolved unconscious conflicts related to his relationship with his parents during childhood. This perspective is most characteristic of:",
    "options": [
      "Psychoanalytic theory.",
      "Behaviorism.",
      "Humanistic psychology.",
      "The cognitive perspective."
    ],
    "correctAnswer": 0,
    "explanation": "This is a classic example of psychoanalytic thinking. The key elements are: Unconscious conflicts: The idea that hidden, often repressed, conflicts are the root of psychological problems. Childhood experiences: The belief that early relationships, particularly with parents, are crucial in shaping adult personality and issues.",
    "subject": "psychology",
    "year": 2014,
    "chapter": 1
  },
  {
    "id": "psych-2014-1-17",
    "question": "Which of the following research questions would be of most interest to a cognitive psychologist?",
    "options": [
      "How do hormones influence aggressive behavior?",
      "How do social pressures lead people to conform?",
      "How does the structure of language affect the way people remember information?",
      "How can reinforcement schedules be used to train animals?"
    ],
    "correctAnswer": 2,
    "explanation": "Cognitive psychology is the study of mental processes such as thinking, memory, problem-solving, and language. The question about how language structure affects memory directly relates to these internal mental processes, making it the most relevant for a cognitive psychologist.",
    "subject": "psychology",
    "year": 2014,
    "chapter": 1
  },
  {
    "id": "psych-2014-1-18",
    "question": "Which of the following professionals would be most qualified to diagnose and treat a person suffering from severe schizophrenia?",
    "options": [
      "A school psychologist.",
      "A counseling psychologist.",
      "A clinical psychologist.",
      "An industrial-organizational psychologist."
    ],
    "correctAnswer": 2,
    "explanation": "A clinical psychologist specializes in the diagnosis, treatment, and prevention of psychological disorders and abnormal behavior. They are trained to work with individuals suffering from severe mental illnesses like schizophrenia, unlike the other options that focus on specific areas (schools, general counseling, or the workplace).",
    "subject": "psychology",
    "year": 2014,
    "chapter": 1
  },
  {
    "id": "psych-2014-1-19",
    "question": "Following the study in the question above [referring to question 12], the \"Exam Performance\" represents the:",
    "options": [
      "Control variable.",
      "Dependent variable.",
      "Independent variable.",
      "Extraneous variable."
    ],
    "correctAnswer": 1,
    "explanation": "The dependent variable (DV) is the outcome that is being measured. In the study on sleep deprivation and exam performance, the researcher is measuring how much exam performance (the DV) is affected by the amount of sleep (the IV).",
    "subject": "psychology",
    "year": 2014,
    "chapter": 1
  },
  {
    "id": "psych-2014-1-20",
    "question": "A researcher wants to understand the unique experiences of a child prodigy. The most suitable research method would be:",
    "options": [
      "An experiment.",
      "A survey.",
      "A case study.",
      "Naturalistic observation."
    ],
    "correctAnswer": 2,
    "explanation": "A case study is an in-depth, detailed investigation of a single person, group, or event. It is the most appropriate method for studying rare or unique phenomena, such as the experiences of a child prodigy, because it allows for a comprehensive and rich understanding that other methods cannot provide.",
    "subject": "psychology",
    "year": 2014,
    "chapter": 1
  },
  {
    "id": "psych-2014-1-21",
    "question": "In a research entitled 'The impacts of Teachers' teaching strategies on students' academic achievement,' the dependent variable is:",
    "options": [
      "Teaching strategies",
      "Students",
      "Academic achievement",
      "Teachers"
    ],
    "correctAnswer": 2,
    "explanation": "The dependent variable is the outcome that is being measured. In this study, the researcher is looking at the impacts of teaching strategies on academic achievement. Therefore, academic achievement is the variable that is being measured to see if it changes based on the teaching strategy used.",
    "subject": "psychology",
    "year": 2014,
    "chapter": 1
  },
  {
    "id": "psych-2014-1-22",
    "question": "Which type of research method is capable of determining a cause-and-effect relationship? (HMU2012)",
    "options": [
      "Naturalistic observation",
      "Survey",
      "Experiment",
      "Correlation"
    ],
    "correctAnswer": 2,
    "explanation": "As previously explained, an experiment is the only research method that can establish a true cause-and-effect relationship because it involves the manipulation of variables and controlled conditions.",
    "subject": "psychology",
    "year": 2014,
    "chapter": 1
  },
  {
    "id": "psych-2014-1-23",
    "question": "A field of psychology applicable to the criminal justice system is: (HMU2013)",
    "options": [
      "Educational",
      "Clinical",
      "Counseling",
      "Forensic"
    ],
    "correctAnswer": 3,
    "explanation": "Forensic psychology is the application of psychological principles and research to the legal and criminal justice system. This includes evaluating a defendant's mental state, testifying in court, and advising on witness credibility, among other tasks.",
    "subject": "psychology",
    "year": 2014,
    "chapter": 1
  },
  {
    "id": "psych-2014-1-24",
    "question": "A psychologist who believes that human behavior is primarily driven by the pursuit of self-actualization and free will is most likely aligned with which perspective?",
    "options": [
      "Psychodynamic.",
      "Biological.",
      "Behaviorist.",
      "Humanistic."
    ],
    "correctAnswer": 3,
    "explanation": "The Humanistic perspective 💖, championed by Carl Rogers and Abraham Maslow, emphasizes the unique qualities of humans, such as free will, personal growth, and the innate drive toward self-actualization (achieving one's full potential).",
    "subject": "psychology",
    "year": 2014,
    "chapter": 1
  },
  {
    "id": "psych-2014-1-25",
    "question": "Which of the following is not true about psychology? (HMU2013)",
    "options": [
      "It began as the study of the unconscious mind.",
      "It is the scientific study of behavior and mental processes.",
      "It began as the study of mind, spirit, or soul.",
      "Its definition has changed over time."
    ],
    "correctAnswer": 0,
    "explanation": "Psychology's origins can be traced back to philosophy, where it was considered the study of the \"mind, spirit, or soul.\" Its formal scientific beginning is often credited to Wilhelm Wundt in 1879, where the focus was on the conscious mind. The study of the unconscious mind was a later development championed by Sigmund Freud with the rise of psychoanalysis, but it was not the initial focus of the field.",
    "subject": "psychology",
    "year": 2014,
    "chapter": 1
  },
  {
    "id": "psych-2014-1-26",
    "question": "Which field of psychology is most concerned with how the brain, hormones, and nervous system influence our thoughts, feelings, and behaviors?",
    "options": [
      "Cognitive Psychology.",
      "Biological Psychology (or Neuroscience).",
      "Behavioral Psychology.",
      "Social Psychology."
    ],
    "correctAnswer": 1,
    "explanation": "Biological psychology explores the links between biology (e.g., the nervous system, genetics, and hormones) and behavior. It is also closely related to the field of neuroscience, which studies the brain and nervous system.",
    "subject": "psychology",
    "year": 2014,
    "chapter": 1
  },
  {
    "id": "psych-2014-1-27",
    "question": "A psychologist wants to ensure his sample of students from a university is representative of the entire student body. The best method to achieve this is:",
    "options": [
      "Convenience sampling.",
      "Random sampling.",
      "Voluntary response sampling.",
      "Purposive sampling."
    ],
    "correctAnswer": 1,
    "explanation": "Random sampling is the best method for ensuring a sample is representative of a larger population. It involves giving every individual in the population an equal chance of being selected for the study. This minimizes bias and allows the researcher to generalize the findings to the entire student body with greater confidence.",
    "subject": "psychology",
    "year": 2014,
    "chapter": 1
  },
  {
    "id": "psych-2014-1-28",
    "question": "A researcher wants to investigate how the parenting styles of the Oromo people in Ethiopia differ from those of the Tigray people. This type of research falls under the domain of:",
    "options": [
      "Clinical psychology.",
      "Forensic psychology.",
      "Cross-cultural psychology.",
      "Industrial-organizational psychology."
    ],
    "correctAnswer": 2,
    "explanation": "Cross-cultural psychology is a field that studies how cultural factors influence human behavior, thoughts, and feelings. Research comparing parenting styles between two different ethnic groups like the Oromo and Tigray people would be a central topic in this field.",
    "subject": "psychology",
    "year": 2014,
    "chapter": 1
  },
  {
    "id": "psych-2014-1-29",
    "question": "A psychologist is hired by a law firm to evaluate the psychological state of a witness and advise on their credibility. This is an application of:",
    "options": [
      "Educational psychology.",
      "Forensic psychology.",
      "Health psychology.",
      "Social psychology."
    ],
    "correctAnswer": 1,
    "explanation": "Forensic psychology is the application of psychology to legal matters. Evaluating a witness's psychological state and credibility is a classic task for a forensic psychologist.",
    "subject": "psychology",
    "year": 2014,
    "chapter": 1
  },
  {
    "id": "psych-2014-1-30",
    "question": "Wilhelm Wundt is credited as one of the founders of modern psychology because he:",
    "options": [
      "Developed the theory of psychoanalysis.",
      "Rejected scientific methods in favor of philosophy.",
      "Established the first formal psychology research laboratory in 1879.",
      "Was the first to focus on animal behavior."
    ],
    "correctAnswer": 2,
    "explanation": "Wilhelm Wundt is considered the \"father of modern psychology\" because he moved psychology from a philosophical discipline to a scientific one. His establishment of the first psychological laboratory in Leipzig, Germany, in 1879 marked a formal beginning for the scientific study of the mind.",
    "subject": "psychology",
    "year": 2014,
    "chapter": 1
  },
  {
    "id": "psych-2014-1-31",
    "question": "A therapist operating from a cognitive framework would treat a client with depression by focusing on:",
    "options": [
      "Exploring and resolving unconscious childhood conflicts.",
      "Prescribing medication to correct brain chemistry imbalances.",
      "Identifying and changing the client's negative thought patterns.",
      "Providing unconditional positive regard to foster self-acceptance."
    ],
    "correctAnswer": 2,
    "explanation": "The cognitive perspective 🧠 focuses on how people think, process information, and perceive the world. A cognitive therapist would therefore treat depression by helping the client to recognize and challenge the distorted, irrational, and negative thought patterns that are contributing to their depression.",
    "subject": "psychology",
    "year": 2014,
    "chapter": 1
  },
  {
    "id": "psych-2014-1-32",
    "question": "The \"nature vs. nurture\" debate is a central theme in psychology. The \"nature\" aspect of this debate refers to the influence of:",
    "options": [
      "Upbringing and environment.",
      "Genetics and biological factors.",
      "Culture and society.",
      "Learning and experience."
    ],
    "correctAnswer": 1,
    "explanation": "The nature vs. nurture debate explores the relative contributions of genetic inheritance (\"nature\") and environmental factors (\"nurture\") to human development and behavior. \"Nature\" refers to all of the traits and characteristics that are inherited or determined by genetics and biological makeup.",
    "subject": "psychology",
    "year": 2014,
    "chapter": 1
  },
  // ==================== C++ QUESTIONS ====================
  
  //cpp-2017-1-1
  {
    id: 'cpp-2017-1-1',
    question: 'Which operator is used for pointer dereferencing in C++?',
    options: ['*', '&', '->', '::'],
    correctAnswer: 0,
    explanation: 'The asterisk (*) is used for pointer dereferencing in C++.',
    subject: 'cpp',
    year: 2017,
    chapter: 1
  },

  // ==================== ECONOMICS QUESTIONS ====================
  
  //economics-2013-1-1
  {
    id: 'econ-2013-1-1',
    question: 'What does GDP stand for?',
    options: [
      'Gross Domestic Product',
      'General Domestic Price',
      'Government Development Plan',
      'Global Development Percentage'
    ],
    correctAnswer: 0,
    explanation: 'GDP stands for Gross Domestic Product.',
    subject: 'economics',
    year: 2013,
    chapter: 1
  },

  // ==================== SOCIOLOGY QUESTIONS ====================
  
  //sociology-2014-1-1
  {
    id: 'socio-2014-1-1',
    question: 'What is the study of human societies called?',
    options: ['Psychology', 'Anthropology', 'Sociology', 'Philosophy'],
    correctAnswer: 2,
    explanation: 'Sociology is the study of human societies.',
    subject: 'sociology',
    year: 2014,
    chapter: 1
  }
];

// To add more questions:
// 1. Choose a subject, year, and chapter
// 2. Use the format: //subject-year-chapter-[question number]
// 3. Add the question object with all required fields
// 4. Make sure the id follows the pattern: 'subjectShortened-year-chapter-questionNumber'
// Example for adding a new geography question for 2013, chapter 3:
// //geography-2013-3-1
// {
//   id: 'geo-2013-3-1',
//   question: 'Your question here?',
//   options: ['Option1', 'Option2', 'Option3', 'Option4'],
//   correctAnswer: 0, // index of correct answer
//   explanation: 'Explanation of the answer',
//   subject: 'geography',
//   year: 2013,
//   chapter: 3
// }