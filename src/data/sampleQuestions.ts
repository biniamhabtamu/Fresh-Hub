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

  // ==================== LOGIC QUESTIONS ====================
  
  //logic-2013-1-1
  
// ==================== LOGIC CHAPTER 1 QUESTIONS (30) ====================
{
  id: 'log-2013-1-1',
  question: 'If all cats are mammals and all mammals are animals, then all cats are?',
  options: ['Animals', 'Plants', 'Minerals', 'None of the above'],
  correctAnswer: 0,
  explanation: 'This is a classic syllogism.',
  subject: 'logic',
  year: 2013,
  chapter: 1
},
{
  id: 'log-2013-1-2',
  question: 'Which of these is a valid logical operator?',
  options: ['AND', 'OR', 'NOT', 'All of the above'],
  correctAnswer: 3,
  explanation: 'AND, OR, and NOT are all valid logical operators.',
  subject: 'logic',
  year: 2013,
  chapter: 1
},
{
  id: 'log-2013-1-3',
  question: 'What is the negation of "All birds can fly"?',
  options: [
    'No birds can fly',
    'Some birds cannot fly',
    'All birds cannot fly',
    'Some birds can fly'
  ],
  correctAnswer: 1,
  explanation: 'The negation of "all X are Y" is "some X are not Y".',
  subject: 'logic',
  year: 2013,
  chapter: 1
},
{
  id: 'log-2014-1-1',
  question: 'If P implies Q, and Q is false, then:',
  options: [
    'P must be false',
    'P must be true',
    'P can be either true or false',
    'None of the above'
  ],
  correctAnswer: 0,
  explanation: 'This is the contrapositive (¬Q → ¬P).',
  subject: 'logic',
  year: 2014,
  chapter: 1
},
{
  id: 'log-2014-1-2',
  question: 'Which of these represents "P and Q"?',
  options: ['P ∨ Q', 'P ∧ Q', 'P → Q', '¬P'],
  correctAnswer: 1,
  explanation: '∧ is the logical AND operator.',
  subject: 'logic',
  year: 2014,
  chapter: 1
},
{
  id: 'log-2014-1-3',
  question: 'What is the converse of "If it\'s a dog, then it\'s a mammal"?',
  options: [
    'If it\'s a mammal, then it\'s a dog',
    'If it\'s not a dog, then it\'s not a mammal',
    'It\'s a dog if and only if it\'s a mammal',
    'None of the above'
  ],
  correctAnswer: 0,
  explanation: 'Converse swaps the hypothesis and conclusion.',
  subject: 'logic',
  year: 2014,
  chapter: 1
},
{
  id: 'log-2015-1-1',
  question: 'Which is a tautology?',
  options: [
    'P ∨ ¬P',
    'P ∧ ¬P',
    'P → ¬P',
    'P ∧ P'
  ],
  correctAnswer: 0,
  explanation: 'A statement that is always true (law of excluded middle).',
  subject: 'logic',
  year: 2015,
  chapter: 1
},
{
  id: 'log-2015-1-2',
  question: '"No reptiles are mammals" is an example of:',
  options: [
    'Universal negative',
    'Universal affirmative',
    'Particular affirmative',
    'Particular negative'
  ],
  correctAnswer: 0,
  explanation: '"No X are Y" is a universal negative.',
  subject: 'logic',
  year: 2015,
  chapter: 1
},
{
  id: 'log-2015-1-3',
  question: 'If "Some A are B" is true, which must be false?',
  options: [
    'No A are B',
    'All A are B',
    'Some A are not B',
    'None must be false'
  ],
  correctAnswer: 0,
  explanation: '"Some A are B" contradicts "No A are B".',
  subject: 'logic',
  year: 2015,
  chapter: 1
},
{
  id: 'log-2016-1-1',
  question: 'Which is equivalent to ¬(P ∧ Q)?',
  options: [
    '¬P ∧ ¬Q',
    '¬P ∨ ¬Q',
    'P ∨ Q',
    '¬P → Q'
  ],
  correctAnswer: 1,
  explanation: 'This is De Morgan\'s Law.',
  subject: 'logic',
  year: 2016,
  chapter: 1
},
{
  id: 'log-2016-1-2',
  question: 'A syllogism has how many parts?',
  options: ['2', '3', '4', '5'],
  correctAnswer: 1,
  explanation: 'Major premise, minor premise, and conclusion.',
  subject: 'logic',
  year: 2016,
  chapter: 1
},
{
  id: 'log-2016-1-3',
  question: '"All philosophers are thinkers. Socrates is a philosopher. Therefore, Socrates is a thinker." This is:',
  options: [
    'Valid and sound',
    'Valid but unsound',
    'Invalid',
    'None of the above'
  ],
  correctAnswer: 0,
  explanation: 'The argument is logically valid and the premises are true.',
  subject: 'logic',
  year: 2016,
  chapter: 1
},
{
  id: 'log-2017-1-1',
  question: 'Which quantifier means "there exists"?',
  options: ['∀', '∃', '∈', '∴'],
  correctAnswer: 1,
  explanation: '∃ is the existential quantifier.',
  subject: 'logic',
  year: 2017,
  chapter: 1
},
{
  id: 'log-2017-1-2',
  question: 'In "If P then Q", Q is called the:',
  options: [
    'Antecedent',
    'Consequent',
    'Contrapositive',
    'Predicate'
  ],
  correctAnswer: 1,
  explanation: 'The "then" part is the consequent.',
  subject: 'logic',
  year: 2017,
  chapter: 1
},
{
  id: 'log-2017-1-3',
  question: 'A statement that is always false is called a:',
  options: [
    'Tautology',
    'Contradiction',
    'Contingency',
    'Implication'
  ],
  correctAnswer: 1,
  explanation: 'A contradiction is always false.',
  subject: 'logic',
  year: 2017,
  chapter: 1
},
{
  id: 'log-2013-1-4',
  question: 'Which logical fallacy assumes what it\'s trying to prove?',
  options: [
    'Straw man',
    'Circular reasoning',
    'False dilemma',
    'Ad hominem'
  ],
  correctAnswer: 1,
  explanation: 'Circular reasoning uses its conclusion as a premise.',
  subject: 'logic',
  year: 2013,
  chapter: 1
},
{
  id: 'log-2014-1-4',
  question: 'The statement "P ∨ Q" is false when:',
  options: [
    'Both P and Q are false',
    'Both P and Q are true',
    'P is true and Q is false',
    'P is false and Q is true'
  ],
  correctAnswer: 0,
  explanation: 'OR (∨) is only false when both operands are false.',
  subject: 'logic',
  year: 2014,
  chapter: 1
},
{
  id: 'log-2015-1-4',
  question: 'What is the inverse of "If it\'s sunny, then I\'ll go outside"?',
  options: [
    'If it\'s not sunny, then I won\'t go outside',
    'If I go outside, then it\'s sunny',
    'If I don\'t go outside, then it\'s not sunny',
    'I\'ll go outside if and only if it\'s sunny'
  ],
  correctAnswer: 0,
  explanation: 'Inverse negates both parts without swapping them.',
  subject: 'logic',
  year: 2015,
  chapter: 1
},
{
  id: 'log-2016-1-4',
  question: 'Which is NOT a type of categorical proposition?',
  options: [
    'Universal affirmative',
    'Universal negative',
    'Particular affirmative',
    'Hypothetical conditional'
  ],
  correctAnswer: 3,
  explanation: 'The first three are standard categorical propositions.',
  subject: 'logic',
  year: 2016,
  chapter: 1
},
{
  id: 'log-2017-1-4',
  question: 'In predicate logic, what does ∀x(P(x) → Q(x)) mean?',
  options: [
    'All P are Q',
    'Some P are Q',
    'No P are Q',
    'Some P are not Q'
  ],
  correctAnswer: 0,
  explanation: 'Universal quantifier with implication means "all P are Q".',
  subject: 'logic',
  year: 2017,
  chapter: 1
},
{
  id: 'log-2013-1-5',
  question: 'Which is logically equivalent to "Unless P, Q"?',
  options: [
    'P ∨ Q',
    '¬P → Q',
    'Q → P',
    'P ∧ Q'
  ],
  correctAnswer: 1,
  explanation: '"Unless P, Q" means "if not P, then Q".',
  subject: 'logic',
  year: 2013,
  chapter: 1
},
{
  id: 'log-2014-1-5',
  question: 'The principle that P ∧ Q ≡ Q ∧ P demonstrates:',
  options: [
    'Associativity',
    'Commutativity',
    'Distributivity',
    'Idempotence'
  ],
  correctAnswer: 1,
  explanation: 'Commutativity means order doesn\'t matter for the operation.',
  subject: 'logic',
  year: 2014,
  chapter: 1
},
{
  id: 'log-2015-1-5',
  question: 'Which rule allows deriving Q from P and P → Q?',
  options: [
    'Modus Ponens',
    'Modus Tollens',
    'Hypothetical Syllogism',
    'Disjunctive Syllogism'
  ],
  correctAnswer: 0,
  explanation: 'Modus Ponens: from P and P→Q, infer Q.',
  subject: 'logic',
  year: 2015,
  chapter: 1
},
{
  id: 'log-2016-1-5',
  question: 'What is the symbolic form of "Neither P nor Q"?',
  options: [
    '¬P ∧ ¬Q',
    '¬P ∨ ¬Q',
    'P ∧ Q',
    'P ∨ Q'
  ],
  correctAnswer: 0,
  explanation: '"Neither P nor Q" means "not P and not Q".',
  subject: 'logic',
  year: 2016,
  chapter: 1
},
{
  id: 'log-2017-1-5',
  question: 'Which is true about the statement "P → Q"?',
  options: [
    'It\'s equivalent to its converse',
    'It\'s equivalent to its contrapositive',
    'It\'s equivalent to its inverse',
    'None of the above'
  ],
  correctAnswer: 1,
  explanation: 'A conditional is equivalent to its contrapositive.',
  subject: 'logic',
  year: 2017,
  chapter: 1
},
{
  id: 'log-2013-1-6',
  question: 'What type of reasoning goes from general to specific?',
  options: [
    'Inductive',
    'Deductive',
    'Abductive',
    'Reductive'
  ],
  correctAnswer: 1,
  explanation: 'Deductive reasoning applies general rules to specific cases.',
  subject: 'logic',
  year: 2013,
  chapter: 1
},
{
  id: 'log-2014-1-6',
  question: 'Which symbol represents logical equivalence?',
  options: ['→', '≡', '∴', '⊢'],
  correctAnswer: 1,
  explanation: '≡ means "is logically equivalent to".',
  subject: 'logic',
  year: 2014,
  chapter: 1
},
{
  id: 'log-2015-1-6',
  question: 'The statement P ∧ ¬P is always:',
  options: [
    'True',
    'False',
    'Contingent',
    'Undefined'
  ],
  correctAnswer: 1,
  explanation: 'A statement and its negation cannot both be true.',
  subject: 'logic',
  year: 2015,
  chapter: 1
},
{
  id: 'log-2016-1-6',
  question: 'Which is NOT a valid inference rule?',
  options: [
    'From P → Q and Q, infer P',
    'From P ∨ Q and ¬P, infer Q',
    'From P → Q and ¬Q, infer ¬P',
    'From P and Q, infer P ∧ Q'
  ],
  correctAnswer: 0,
  explanation: 'This would be affirming the consequent, a logical fallacy.',
  subject: 'logic',
  year: 2016,
  chapter: 1
},
{
  id: 'log-2017-1-6',
  question: 'What is the main connective in (P ∧ Q) → (R ∨ S)?',
  options: [
    '∧',
    '∨',
    '→',
    'None of the above'
  ],
  correctAnswer: 2,
  explanation: 'The → is the last operator to be applied.',
  subject: 'logic',
  year: 2017,
  chapter: 1
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
    id: 'psych-2016-1-1',
    question: 'Who is considered the father of modern psychology?',
    options: ['Sigmund Freud', 'Wilhelm Wundt', 'B.F. Skinner', 'Carl Rogers'],
    correctAnswer: 1,
    explanation: 'Wilhelm Wundt is often considered the father of modern psychology.',
    subject: 'psychology',
    year: 2016,
    chapter: 1
  }, {
    id: 'psych-2013-1-1',
    question: 'What is the best short definition of psychology given in the text?',
    options: ['The study of plants and animals', 'The scientific study of human behavior and mental processes', 'A branch of art concerned with emotion', 'The study of only observable actions'],
    correctAnswer: 1,
    explanation: 'The text defines psychology as a scientific discipline that studies both observable behavior and internal mental processes, so choice B matches exactly.',
    subject: 'psychology',
    year: 2013,
    chapter: 1
  },
  {
    id: 'psych-2013-1-2',
    question: '"Behavior" refers to actions we can directly see and observe, like talking or facial expressions.',
    options: ['True', 'False'],
    correctAnswer: 0,
    explanation: 'By definition in the text, behavior is the set of actions visible to others (e.g., talking, moving, facial expressions).',
    subject: 'psychology',
    year: 2013,
    chapter: 1
  },
  {
    id: 'psych-2013-1-3',
    question: 'Which of the following is an example of a "mental process" as defined in the text?',
    options: ['Running', 'Smiling', 'Remembering', 'Waving'],
    correctAnswer: 2,
    explanation: 'Mental processes are internal activities we can’t directly see (like remembering), while running, smiling, and waving are observable behaviors.',
    subject: 'psychology',
    year: 2013,
    chapter: 1
  },
  {
    id: 'psych-2013-1-4',
    question: 'The word "psychology" comes from the Greek roots "psyche" and "logos." What do these roots mean?',
    options: ['mind & love', 'soul/mind & study/knowledge', 'behaviour & method', 'brain & analysis'],
    correctAnswer: 1,
    explanation: 'The text explains “psyche” means soul/mind and “logos” means study or knowledge, so B is correct.',
    subject: 'psychology',
    year: 2013,
    chapter: 1
  },
  {
    id: 'psych-2013-1-5',
    question: 'Psychology is simply the same as common sense and does not use scientific methods.',
    options: ['True', 'False'],
    correctAnswer: 1,
    explanation: 'The text stresses psychology uses the scientific method rather than just common sense, so this statement is false.',
    subject: 'psychology',
    year: 2013,
    chapter: 1
  },
  {
    id: 'psych-2013-1-6',
    question: 'In the acronym D.E.P.C. (the four goals of psychology), what does the "P" stand for?',
    options: ['Practice', 'Progress', 'Prediction', 'Perception'],
    correctAnswer: 2,
    explanation: 'D.E.P.C. stands for Description, Explanation, Prediction, Control — so P = Prediction.',
    subject: 'psychology',
    year: 2013,
    chapter: 1
  },
  {
    id: 'psych-2013-1-7',
    question: 'According to the text, "Control" (changing a behavior) is described as the final and most important goal of psychology.',
    options: ['True', 'False'],
    correctAnswer: 0,
    explanation: 'The text lists Control as the final goal—using knowledge to change undesirable behaviors into desirable ones.',
    subject: 'psychology',
    year: 2013,
    chapter: 1
  },
  {
    id: 'psych-2013-1-8',
    question: 'Which goal of psychology involves observing and noting everything about a behavior (asking "What is happening? Where? To whom?")?',
    options: ['Control', 'Prediction', 'Description', 'Explanation'],
    correctAnswer: 2,
    explanation: 'Description is the step that focuses on observing and recording what is happening, where, and to whom.',
    subject: 'psychology',
    year: 2013,
    chapter: 1
  },
  {
    id: 'psych-2013-1-9',
    question: 'If a teacher and counselor apply learning strategies to improve a student\'s grades, which of the four goals are they primarily pursuing?',
    options: ['Description', 'Explanation', 'Prediction', 'Control'],
    correctAnswer: 3,
    explanation: 'Applying strategies to change behavior (improve grades) is an example of Control.',
    subject: 'psychology',
    year: 2013,
    chapter: 1
  },
  {
    id: 'psych-2013-1-10',
    question: 'Prediction in psychology guarantees that the predicted outcome will always occur.',
    options: ['True', 'False'],
    correctAnswer: 1,
    explanation: 'Prediction means estimating probable outcomes based on evidence — it does not guarantee the outcome will always happen.',
    subject: 'psychology',
    year: 2013,
    chapter: 1
  },
  {
    id: 'psych-2013-1-11',
    question: 'Who is called the "father of modern psychology" and opened the first psychological laboratory in 1879?',
    options: ['William James', 'Sigmund Freud', 'Wilhelm Wundt', 'B. F. Skinner'],
    correctAnswer: 2,
    explanation: 'The text explicitly names Wilhelm Wundt as starting the first lab in 1879 and calls him the father of modern psychology.',
    subject: 'psychology',
    year: 2013,
    chapter: 1
  },
  {
    id: 'psych-2013-1-12',
    question: 'Edward Titchener is associated with founding Structuralism.',
    options: ['True', 'False'],
    correctAnswer: 0,
    explanation: 'Titchener, a student of Wundt, promoted Structuralism and used introspection to break down mental experiences.',
    subject: 'psychology',
    year: 2013,
    chapter: 1
  },
  {
    id: 'psych-2013-1-13',
    question: 'Which research method is described by the term "introspection"?',
    options: ['Observing people in nature', 'Looking within oneself to report conscious experiences', 'Running statistical analyses', 'Using surveys to collect feelings from many people'],
    correctAnswer: 1,
    explanation: 'Introspection means “looking within” — reporting one’s own conscious experiences — which matches option B.',
    subject: 'psychology',
    year: 2013,
    chapter: 1
  },
  {
    id: 'psych-2013-1-14',
    question: 'Which early school of psychology emphasized that "the whole is greater than the sum of its parts"?',
    options: ['Structuralism', 'Functionalism', 'Behaviorism', 'Gestalt Psychology'],
    correctAnswer: 3,
    explanation: 'Gestalt psychology argued perception must be studied as whole patterns; their slogan is exactly “the whole is greater than the sum of its parts.”',
    subject: 'psychology',
    year: 2013,
    chapter: 1
  },
  {
    id: 'psych-2013-1-15',
    question: 'Which psychologist is especially known for emphasizing reinforcement within Behaviorism?',
    options: ['John B. Watson', 'Wilhelm Wundt', 'B. F. Skinner', 'Sigmund Freud'],
    correctAnswer: 2,
    explanation: 'B. F. Skinner developed operant conditioning and emphasized reinforcement as a key mechanism of learning.',
    subject: 'psychology',
    year: 2013,
    chapter: 1
  },
  {
    id: 'psych-2013-1-16',
    question: 'Psychoanalysis emphasizes the role of unconscious conflicts, early childhood experiences, and hidden desires in shaping behavior.',
    options: ['True', 'False'],
    correctAnswer: 0,
    explanation: 'The text explains Freud’s psychoanalytic view centers on the unconscious and early experiences influencing behavior.',
    subject: 'psychology',
    year: 2013,
    chapter: 1
  },
  {
    id: 'psych-2013-1-17',
    question: 'The psychodynamic perspective focuses primarily on:',
    options: ['Unconscious motives and childhood conflicts', 'Workplace productivity', 'Social roles', 'Brain chemistry only'],
    correctAnswer: 0,
    explanation: 'Psychodynamic perspective (from Freud) emphasizes unconscious motives and childhood influences, so A is correct.',
    subject: 'psychology',
    year: 2013,
    chapter: 1
  },
  {
    id: 'psych-2013-1-18',
    question: 'According to the text, behavioral psychologists often treat the mind as a "black box" and focus on observable stimuli and responses.',
    options: ['True', 'False'],
    correctAnswer: 0,
    explanation: 'Behaviorists focus on observable input (environment) and output (behavior) without analyzing internal mental processes.',
    subject: 'psychology',
    year: 2013,
    chapter: 1
  },
  {
    id: 'psych-2013-1-19',
    question: 'The humanistic perspective most emphasizes which of the following?',
    options: ['Unconscious conflict', 'Classical conditioning', 'Genetic determinism', 'Free will and self-actualization'],
    correctAnswer: 3,
    explanation: 'Humanistic psychology stresses free will, personal values, and achieving one’s potential (self-actualization).',
    subject: 'psychology',
    year: 2013,
    chapter: 1
  },
  {
    id: 'psych-2013-1-20',
    question: 'Which perspective is most directly concerned with studying thinking, memory, language, and using methods such as measuring brain activity to understand internal mental processes?',
    options: ['Behavioral', 'Cognitive', 'Sociocultural', 'Psychoanalytic'],
    correctAnswer: 1,
    explanation: 'The cognitive perspective studies internal mental processes (thinking, memory, language) and uses scientific measures like brain activity.',
    subject: 'psychology',
    year: 2013,
    chapter: 1
  },
  {
    id: 'psych-2013-1-21',
    question: 'The biological perspective in psychology focuses mainly on:',
    options: ['How brain and nervous system processes affect behavior', 'Only learning histories and rewards', 'Social roles and cultural values', 'Dream interpretation'],
    correctAnswer: 0,
    explanation: 'The biological perspective links bodily systems (brain, neurotransmitters, genes) to behavior, thoughts, and feelings.',
    subject: 'psychology',
    year: 2013,
    chapter: 1
  },
  {
    id: 'psych-2013-1-22',
    question: 'The sociocultural perspective would be least likely to emphasize which of the following as an explanation for behavior?',
    options: ['Cultural values and social roles', 'Group influences', 'Genetic inheritance', 'Social environment'],
    correctAnswer: 2,
    explanation: 'Sociocultural perspective focuses on social and cultural influences, so genetic inheritance (biology) is least emphasized.',
    subject: 'psychology',
    year: 2013,
    chapter: 1
  },
  {
    id: 'psych-2013-1-23',
    question: 'The text states that many modern perspectives grew out of or were influenced by the early schools of thought.',
    options: ['True', 'False'],
    correctAnswer: 0,
    explanation: 'The text explains modern perspectives often developed from, or were reactions to, the early schools (structuralism, behaviorism, etc.).',
    subject: 'psychology',
    year: 2013,
    chapter: 1
  },
  {
    id: 'psych-2013-1-24',
    question: 'Which subfield studies physical, cognitive, and psychological changes from birth to old age?',
    options: ['Social Psychology', 'Developmental Psychology', 'Clinical Psychology', 'Industrial Psychology'],
    correctAnswer: 1,
    explanation: 'Developmental psychology examines changes across the lifespan — from infancy through old age.',
    subject: 'psychology',
    year: 2013,
    chapter: 1
  },
  {
    id: 'psych-2013-1-25',
    question: 'Which statement correctly distinguishes clinical and counseling psychology according to the text?',
    options: ['Clinical psychology treats serious psychological disorders; counseling psychology focuses on less severe life problems', 'Counseling psychology treats serious disorders; clinical is school-focused', 'Both are the same with different names', 'Clinical focuses only on children; counseling only on adults'],
    correctAnswer: 0,
    explanation: 'The text differentiates clinical (serious disorders) from counseling (less severe problems), matching option A.',
    subject: 'psychology',
    year: 2013,
    chapter: 1
  },
  {
    id: 'psych-2013-1-26',
    question: 'Industrial (or industrial-organizational) psychology applies psychological principles to improve workplace productivity and employee well-being.',
    options: ['True', 'False'],
    correctAnswer: 0,
    explanation: 'The text explicitly describes industrial psychology as applying psychology to workplace performance and worker welfare.',
    subject: 'psychology',
    year: 2013,
    chapter: 1
  },
  {
    id: 'psych-2013-1-27',
    question: 'Which subfield uses psychological principles specifically to prevent and treat physical illnesses?',
    options: ['Educational Psychology', 'Personality Psychology', 'Social Psychology', 'Health Psychology'],
    correctAnswer: 3,
    explanation: 'Health psychology focuses on psychological approaches that prevent and help treat physical health issues.',
    subject: 'psychology',
    year: 2013,
    chapter: 1
  },
  {
    id: 'psych-2013-1-28',
    question: 'Social psychology primarily examines:',
    options: ['Genetic causes of personality', 'Workplace ergonomics', 'How social interactions and perceptions affect behavior', 'Neural mechanisms of memory'],
    correctAnswer: 2,
    explanation: 'Social psychology studies how social interactions, relationships, and perceptions influence behavior and attitudes.',
    subject: 'psychology',
    year: 2013,
    chapter: 1
  },
  {
    id: 'psych-2013-1-29',
    question: 'Which statement best captures the "scientific method" as described in the text?',
    options: ['Testing ideas through observation, experimentation, and analysis', 'Accepting beliefs based on tradition', 'Intuition only', 'Anecdotal reporting without systematic tests'],
    correctAnswer: 0,
    explanation: 'The scientific method involves systematic observation, experiments, and statistical analysis — which is option A.',
    subject: 'psychology',
    year: 2013,
    chapter: 1
  },
  {
    id: 'psych-2013-1-30',
    question: 'What is a "hypothesis" according to the text?',
    options: ['A broad integrated explanation for many observations', 'A survey instrument', 'A specific, testable prediction about relationships between variables', 'An unrelated assumption'],
    correctAnswer: 2,
    explanation: 'The text defines a hypothesis as a specific testable prediction about how variables relate.',
    subject: 'psychology',
    year: 2013,
    chapter: 1
  },
  {
    id: 'psych-2013-1-31',
    question: 'A single case study is usually easy to generalize to many people in the population.',
    options: ['True', 'False'],
    correctAnswer: 1,
    explanation: 'Case studies give deep detail about one person but are hard to generalize to the larger population.',
    subject: 'psychology',
    year: 2013,
    chapter: 1
  },
  {
    id: 'psych-2013-1-32',
    question: 'Which descriptive research method is best for collecting quick information from many people?',
    options: ['Case study', 'Survey', 'Naturalistic observation', 'Experimental manipulation'],
    correctAnswer: 1,
    explanation: 'Surveys collect data quickly from large groups, making them ideal for broad, fast information gathering.',
    subject: 'psychology',
    year: 2013,
    chapter: 1
  },
  {
    id: 'psych-2013-1-33',
    question: 'According to the text, what is a major drawback of naturalistic observation?',
    options: ['It always provides causal explanations', 'It requires manipulation of variables', 'It is only used in laboratories', 'People may change their behavior when they know they are being observed (reactivity)'],
    correctAnswer: 3,
    explanation: 'Naturalistic observation can cause reactivity — subjects may alter behavior if they know they’re observed — which limits validity.',
    subject: 'psychology',
    year: 2013,
    chapter: 1
  },
  {
    id: 'psych-2013-1-34',
    question: 'The strength of a correlation is measured on a scale ranging from:',
    options: ['+1.00 to -1.00', '0 to 100', '-100 to +100', '0 to 1.0 only'],
    correctAnswer: 0,
    explanation: 'Correlation coefficients run from -1.00 (perfect negative) through 0 (no relation) to +1.00 (perfect positive), so A is correct.',
    subject: 'psychology',
    year: 2013,
    chapter: 1
  },
  {
    id: 'psych-2013-1-35',
    question: 'A positive correlation between two variables means that as one variable increases, the other tends to increase as well.',
    options: ['True', 'False'],
    correctAnswer: 0,
    explanation: 'A positive correlation indicates both variables move in the same direction (both increase or both decrease).',
    subject: 'psychology',
    year: 2013,
    chapter: 1
  },
  {
    id: 'psych-2013-1-36',
    question: 'Correlational research can by itself prove that one variable causes changes in another (i.e., it establishes cause and effect).',
    options: ['True', 'False'],
    correctAnswer: 1,
    explanation: 'Correlation shows relationships but cannot confirm causation because other variables or direction-of-effect may be involved.',
    subject: 'psychology',
    year: 2013,
    chapter: 1
  },
  {
    id: 'psych-2013-1-37',
    question: 'In experimental research, which term describes the variable that the researcher manipulates?',
    options: ['Dependent variable', 'Confounding variable', 'Outcome variable', 'Independent variable'],
    correctAnswer: 3,
    explanation: 'The independent variable is what the researcher changes to see its effect; the dependent variable measures that effect.',
    subject: 'psychology',
    year: 2013,
    chapter: 1
  },
  {
    id: 'psych-2013-1-38',
    question: 'In an experiment testing whether study time affects test scores, which would be the dependent variable?',
    options: ['Study method', 'Students\' test scores', 'Number of students in the class', 'Time of day the test is taken'],
    correctAnswer: 1,
    explanation: 'The dependent variable is the outcome measured (test scores), while study time would be the independent variable.',
    subject: 'psychology',
    year: 2013,
    chapter: 1
  },
  {
    id: 'psych-2013-1-39',
    question: 'What is the main purpose of a control group in an experiment?',
    options: ['To receive the experimental treatment', 'To be excluded from data analysis', 'To provide a baseline for comparison and not receive the experimental manipulation', 'To manipulate extra variables'],
    correctAnswer: 2,
    explanation: 'A control group does not get the experimental manipulation and serves as a baseline to compare effects.',
    subject: 'psychology',
    year: 2013,
    chapter: 1
  },
  {
    id: 'psych-2013-1-40',
    question: 'Which of the following lists the correct basic order of the five steps of scientific research presented in the text?',
    options: ['Perceive the problem → Form a hypothesis → Test the hypothesis → Draw conclusions → Report results', 'Test the hypothesis → Perceive the problem → Report results → Draw conclusions → Form a hypothesis', 'Report results → Draw conclusions → Form a hypothesis → Perceive the problem → Test the hypothesis', 'Form a hypothesis → Report results → Perceive the problem → Test the hypothesis → Draw conclusions'],
    correctAnswer: 0,
    explanation: 'The text lists the research steps in that logical order: perceive the problem, form a hypothesis, test it, draw conclusions, then report results.',
    subject: 'psychology',
    year: 2013,
    chapter: 1
  },
 {
    id: 'psych-2013-1-1',
    question: 'What is the best short definition of psychology given in the text?',
    options: ['The study of plants and animals', 'The scientific study of human behavior and mental processes', 'A branch of art concerned with emotion', 'The study of only observable actions'],
    correctAnswer: 1,
    explanation: 'The text defines psychology as a scientific discipline that studies both observable behavior and internal mental processes, so choice B matches exactly.',
    subject: 'psychology',
    year: 2013,
    chapter: 1
  },
  {
    id: 'psych-2013-1-2',
    question: '"Behavior" refers to actions we can directly see and observe, like talking or facial expressions.',
    options: ['True', 'False'],
    correctAnswer: 0,
    explanation: 'By definition in the text, behavior is the set of actions visible to others (e.g., talking, moving, facial expressions).',
    subject: 'psychology',
    year: 2013,
    chapter: 1
  },
  {
    id: 'psych-2013-1-3',
    question: 'Which of the following is an example of a "mental process" as defined in the text?',
    options: ['Running', 'Smiling', 'Remembering', 'Waving'],
    correctAnswer: 2,
    explanation: 'Mental processes are internal activities we can’t directly see (like remembering), while running, smiling, and waving are observable behaviors.',
    subject: 'psychology',
    year: 2013,
    chapter: 1
  },
  {
    id: 'psych-2013-1-4',
    question: 'The word "psychology" comes from the Greek roots "psyche" and "logos." What do these roots mean?',
    options: ['mind & love', 'soul/mind & study/knowledge', 'behaviour & method', 'brain & analysis'],
    correctAnswer: 1,
    explanation: 'The text explains “psyche” means soul/mind and “logos” means study or knowledge, so B is correct.',
    subject: 'psychology',
    year: 2013,
    chapter: 1
  },
  {
    id: 'psych-2013-1-5',
    question: 'Psychology is simply the same as common sense and does not use scientific methods.',
    options: ['True', 'False'],
    correctAnswer: 1,
    explanation: 'The text stresses psychology uses the scientific method rather than just common sense, so this statement is false.',
    subject: 'psychology',
    year: 2013,
    chapter: 1
  },
  {
    id: 'psych-2013-1-6',
    question: 'In the acronym D.E.P.C. (the four goals of psychology), what does the "P" stand for?',
    options: ['Practice', 'Progress', 'Prediction', 'Perception'],
    correctAnswer: 2,
    explanation: 'D.E.P.C. stands for Description, Explanation, Prediction, Control — so P = Prediction.',
    subject: 'psychology',
    year: 2013,
    chapter: 1
  },
  {
    id: 'psych-2013-1-7',
    question: 'According to the text, "Control" (changing a behavior) is described as the final and most important goal of psychology.',
    options: ['True', 'False'],
    correctAnswer: 0,
    explanation: 'The text lists Control as the final goal—using knowledge to change undesirable behaviors into desirable ones.',
    subject: 'psychology',
    year: 2013,
    chapter: 1
  },
  {
    id: 'psych-2013-1-8',
    question: 'Which goal of psychology involves observing and noting everything about a behavior (asking "What is happening? Where? To whom?")?',
    options: ['Control', 'Prediction', 'Description', 'Explanation'],
    correctAnswer: 2,
    explanation: 'Description is the step that focuses on observing and recording what is happening, where, and to whom.',
    subject: 'psychology',
    year: 2013,
    chapter: 1
  },
  {
    id: 'psych-2013-1-9',
    question: 'If a teacher and counselor apply learning strategies to improve a student\'s grades, which of the four goals are they primarily pursuing?',
    options: ['Description', 'Explanation', 'Prediction', 'Control'],
    correctAnswer: 3,
    explanation: 'Applying strategies to change behavior (improve grades) is an example of Control.',
    subject: 'psychology',
    year: 2013,
    chapter: 1
  },
  {
    id: 'psych-2013-1-10',
    question: 'Prediction in psychology guarantees that the predicted outcome will always occur.',
    options: ['True', 'False'],
    correctAnswer: 1,
    explanation: 'Prediction means estimating probable outcomes based on evidence — it does not guarantee the outcome will always happen.',
    subject: 'psychology',
    year: 2013,
    chapter: 1
  },
  {
    id: 'psych-2013-1-11',
    question: 'Who is called the "father of modern psychology" and opened the first psychological laboratory in 1879?',
    options: ['William James', 'Sigmund Freud', 'Wilhelm Wundt', 'B. F. Skinner'],
    correctAnswer: 2,
    explanation: 'The text explicitly names Wilhelm Wundt as starting the first lab in 1879 and calls him the father of modern psychology.',
    subject: 'psychology',
    year: 2013,
    chapter: 1
  },
  {
    id: 'psych-2013-1-12',
    question: 'Edward Titchener is associated with founding Structuralism.',
    options: ['True', 'False'],
    correctAnswer: 0,
    explanation: 'Titchener, a student of Wundt, promoted Structuralism and used introspection to break down mental experiences.',
    subject: 'psychology',
    year: 2013,
    chapter: 1
  },
  {
    id: 'psych-2013-1-13',
    question: 'Which research method is described by the term "introspection"?',
    options: ['Observing people in nature', 'Looking within oneself to report conscious experiences', 'Running statistical analyses', 'Using surveys to collect feelings from many people'],
    correctAnswer: 1,
    explanation: 'Introspection means “looking within” — reporting one’s own conscious experiences — which matches option B.',
    subject: 'psychology',
    year: 2013,
    chapter: 1
  },
  {
    id: 'psych-2013-1-14',
    question: 'Which early school of psychology emphasized that "the whole is greater than the sum of its parts"?',
    options: ['Structuralism', 'Functionalism', 'Behaviorism', 'Gestalt Psychology'],
    correctAnswer: 3,
    explanation: 'Gestalt psychology argued perception must be studied as whole patterns; their slogan is exactly “the whole is greater than the sum of its parts.”',
    subject: 'psychology',
    year: 2013,
    chapter: 1
  },
  {
    id: 'psych-2013-1-15',
    question: 'Which psychologist is especially known for emphasizing reinforcement within Behaviorism?',
    options: ['John B. Watson', 'Wilhelm Wundt', 'B. F. Skinner', 'Sigmund Freud'],
    correctAnswer: 2,
    explanation: 'B. F. Skinner developed operant conditioning and emphasized reinforcement as a key mechanism of learning.',
    subject: 'psychology',
    year: 2013,
    chapter: 1
  },
  {
    id: 'psych-2013-1-16',
    question: 'Psychoanalysis emphasizes the role of unconscious conflicts, early childhood experiences, and hidden desires in shaping behavior.',
    options: ['True', 'False'],
    correctAnswer: 0,
    explanation: 'The text explains Freud’s psychoanalytic view centers on the unconscious and early experiences influencing behavior.',
    subject: 'psychology',
    year: 2013,
    chapter: 1
  },
  {
    id: 'psych-2013-1-17',
    question: 'The psychodynamic perspective focuses primarily on:',
    options: ['Unconscious motives and childhood conflicts', 'Workplace productivity', 'Social roles', 'Brain chemistry only'],
    correctAnswer: 0,
    explanation: 'Psychodynamic perspective (from Freud) emphasizes unconscious motives and childhood influences, so A is correct.',
    subject: 'psychology',
    year: 2013,
    chapter: 1
  },
  {
    id: 'psych-2013-1-18',
    question: 'According to the text, behavioral psychologists often treat the mind as a "black box" and focus on observable stimuli and responses.',
    options: ['True', 'False'],
    correctAnswer: 0,
    explanation: 'Behaviorists focus on observable input (environment) and output (behavior) without analyzing internal mental processes.',
    subject: 'psychology',
    year: 2013,
    chapter: 1
  },
  {
    id: 'psych-2013-1-19',
    question: 'The humanistic perspective most emphasizes which of the following?',
    options: ['Unconscious conflict', 'Classical conditioning', 'Genetic determinism', 'Free will and self-actualization'],
    correctAnswer: 3,
    explanation: 'Humanistic psychology stresses free will, personal values, and achieving one’s potential (self-actualization).',
    subject: 'psychology',
    year: 2013,
    chapter: 1
  },
  {
    id: 'psych-2013-1-20',
    question: 'Which perspective is most directly concerned with studying thinking, memory, language, and using methods such as measuring brain activity to understand internal mental processes?',
    options: ['Behavioral', 'Cognitive', 'Sociocultural', 'Psychoanalytic'],
    correctAnswer: 1,
    explanation: 'The cognitive perspective studies internal mental processes (thinking, memory, language) and uses scientific measures like brain activity.',
    subject: 'psychology',
    year: 2013,
    chapter: 1
  },
  {
    id: 'psych-2013-1-21',
    question: 'The biological perspective in psychology focuses mainly on:',
    options: ['How brain and nervous system processes affect behavior', 'Only learning histories and rewards', 'Social roles and cultural values', 'Dream interpretation'],
    correctAnswer: 0,
    explanation: 'The biological perspective links bodily systems (brain, neurotransmitters, genes) to behavior, thoughts, and feelings.',
    subject: 'psychology',
    year: 2013,
    chapter: 1
  },
  {
    id: 'psych-2013-1-22',
    question: 'The sociocultural perspective would be least likely to emphasize which of the following as an explanation for behavior?',
    options: ['Cultural values and social roles', 'Group influences', 'Genetic inheritance', 'Social environment'],
    correctAnswer: 2,
    explanation: 'Sociocultural perspective focuses on social and cultural influences, so genetic inheritance (biology) is least emphasized.',
    subject: 'psychology',
    year: 2013,
    chapter: 1
  },
  {
    id: 'psych-2013-1-23',
    question: 'The text states that many modern perspectives grew out of or were influenced by the early schools of thought.',
    options: ['True', 'False'],
    correctAnswer: 0,
    explanation: 'The text explains modern perspectives often developed from, or were reactions to, the early schools (structuralism, behaviorism, etc.).',
    subject: 'psychology',
    year: 2013,
    chapter: 1
  },
  {
    id: 'psych-2013-1-24',
    question: 'Which subfield studies physical, cognitive, and psychological changes from birth to old age?',
    options: ['Social Psychology', 'Developmental Psychology', 'Clinical Psychology', 'Industrial Psychology'],
    correctAnswer: 1,
    explanation: 'Developmental psychology examines changes across the lifespan — from infancy through old age.',
    subject: 'psychology',
    year: 2013,
    chapter: 1
  },
  {
    id: 'psych-2013-1-25',
    question: 'Which statement correctly distinguishes clinical and counseling psychology according to the text?',
    options: ['Clinical psychology treats serious psychological disorders; counseling psychology focuses on less severe life problems', 'Counseling psychology treats serious disorders; clinical is school-focused', 'Both are the same with different names', 'Clinical focuses only on children; counseling only on adults'],
    correctAnswer: 0,
    explanation: 'The text differentiates clinical (serious disorders) from counseling (less severe problems), matching option A.',
    subject: 'psychology',
    year: 2013,
    chapter: 1
  },
  {
    id: 'psych-2013-1-26',
    question: 'Industrial (or industrial-organizational) psychology applies psychological principles to improve workplace productivity and employee well-being.',
    options: ['True', 'False'],
    correctAnswer: 0,
    explanation: 'The text explicitly describes industrial psychology as applying psychology to workplace performance and worker welfare.',
    subject: 'psychology',
    year: 2013,
    chapter: 1
  },
  {
    id: 'psych-2013-1-27',
    question: 'Which subfield uses psychological principles specifically to prevent and treat physical illnesses?',
    options: ['Educational Psychology', 'Personality Psychology', 'Social Psychology', 'Health Psychology'],
    correctAnswer: 3,
    explanation: 'Health psychology focuses on psychological approaches that prevent and help treat physical health issues.',
    subject: 'psychology',
    year: 2013,
    chapter: 1
  },
  {
    id: 'psych-2013-1-28',
    question: 'Social psychology primarily examines:',
    options: ['Genetic causes of personality', 'Workplace ergonomics', 'How social interactions and perceptions affect behavior', 'Neural mechanisms of memory'],
    correctAnswer: 2,
    explanation: 'Social psychology studies how social interactions, relationships, and perceptions influence behavior and attitudes.',
    subject: 'psychology',
    year: 2013,
    chapter: 1
  },
  {
    id: 'psych-2013-1-29',
    question: 'Which statement best captures the "scientific method" as described in the text?',
    options: ['Testing ideas through observation, experimentation, and analysis', 'Accepting beliefs based on tradition', 'Intuition only', 'Anecdotal reporting without systematic tests'],
    correctAnswer: 0,
    explanation: 'The scientific method involves systematic observation, experiments, and statistical analysis — which is option A.',
    subject: 'psychology',
    year: 2013,
    chapter: 1
  },
  {
    id: 'psych-2013-1-30',
    question: 'What is a "hypothesis" according to the text?',
    options: ['A broad integrated explanation for many observations', 'A survey instrument', 'A specific, testable prediction about relationships between variables', 'An unrelated assumption'],
    correctAnswer: 2,
    explanation: 'The text defines a hypothesis as a specific testable prediction about how variables relate.',
    subject: 'psychology',
    year: 2013,
    chapter: 1
  },
  {
    id: 'psych-2013-1-31',
    question: 'A single case study is usually easy to generalize to many people in the population.',
    options: ['True', 'False'],
    correctAnswer: 1,
    explanation: 'Case studies give deep detail about one person but are hard to generalize to the larger population.',
    subject: 'psychology',
    year: 2013,
    chapter: 1
  },
  {
    id: 'psych-2013-1-32',
    question: 'Which descriptive research method is best for collecting quick information from many people?',
    options: ['Case study', 'Survey', 'Naturalistic observation', 'Experimental manipulation'],
    correctAnswer: 1,
    explanation: 'Surveys collect data quickly from large groups, making them ideal for broad, fast information gathering.',
    subject: 'psychology',
    year: 2013,
    chapter: 1
  },
  {
    id: 'psych-2013-1-33',
    question: 'According to the text, what is a major drawback of naturalistic observation?',
    options: ['It always provides causal explanations', 'It requires manipulation of variables', 'It is only used in laboratories', 'People may change their behavior when they know they are being observed (reactivity)'],
    correctAnswer: 3,
    explanation: 'Naturalistic observation can cause reactivity — subjects may alter behavior if they know they’re observed — which limits validity.',
    subject: 'psychology',
    year: 2013,
    chapter: 1
  },
  {
    id: 'psych-2013-1-34',
    question: 'The strength of a correlation is measured on a scale ranging from:',
    options: ['+1.00 to -1.00', '0 to 100', '-100 to +100', '0 to 1.0 only'],
    correctAnswer: 0,
    explanation: 'Correlation coefficients run from -1.00 (perfect negative) through 0 (no relation) to +1.00 (perfect positive), so A is correct.',
    subject: 'psychology',
    year: 2013,
    chapter: 1
  },
  {
    id: 'psych-2013-1-35',
    question: 'A positive correlation between two variables means that as one variable increases, the other tends to increase as well.',
    options: ['True', 'False'],
    correctAnswer: 0,
    explanation: 'A positive correlation indicates both variables move in the same direction (both increase or both decrease).',
    subject: 'psychology',
    year: 2013,
    chapter: 1
  },
  {
    id: 'psych-2013-1-36',
    question: 'Correlational research can by itself prove that one variable causes changes in another (i.e., it establishes cause and effect).',
    options: ['True', 'False'],
    correctAnswer: 1,
    explanation: 'Correlation shows relationships but cannot confirm causation because other variables or direction-of-effect may be involved.',
    subject: 'psychology',
    year: 2013,
    chapter: 1
  },
  {
    id: 'psych-2013-1-37',
    question: 'In experimental research, which term describes the variable that the researcher manipulates?',
    options: ['Dependent variable', 'Confounding variable', 'Outcome variable', 'Independent variable'],
    correctAnswer: 3,
    explanation: 'The independent variable is what the researcher changes to see its effect; the dependent variable measures that effect.',
    subject: 'psychology',
    year: 2013,
    chapter: 1
  },
  {
    id: 'psych-2013-1-38',
    question: 'In an experiment testing whether study time affects test scores, which would be the dependent variable?',
    options: ['Study method', 'Students\' test scores', 'Number of students in the class', 'Time of day the test is taken'],
    correctAnswer: 1,
    explanation: 'The dependent variable is the outcome measured (test scores), while study time would be the independent variable.',
    subject: 'psychology',
    year: 2013,
    chapter: 1
  },
  {
    id: 'psych-2013-1-39',
    question: 'What is the main purpose of a control group in an experiment?',
    options: ['To receive the experimental treatment', 'To be excluded from data analysis', 'To provide a baseline for comparison and not receive the experimental manipulation', 'To manipulate extra variables'],
    correctAnswer: 2,
    explanation: 'A control group does not get the experimental manipulation and serves as a baseline to compare effects.',
    subject: 'psychology',
    year: 2013,
    chapter: 1
  },
  {
    id: 'psych-2013-1-40',
    question: 'Which of the following lists the correct basic order of the five steps of scientific research presented in the text?',
    options: ['Perceive the problem → Form a hypothesis → Test the hypothesis → Draw conclusions → Report results', 'Test the hypothesis → Perceive the problem → Report results → Draw conclusions → Form a hypothesis', 'Report results → Draw conclusions → Form a hypothesis → Perceive the problem → Test the hypothesis', 'Form a hypothesis → Report results → Perceive the problem → Test the hypothesis → Draw conclusions'],
    correctAnswer: 0,
    explanation: 'The text lists the research steps in that logical order: perceive the problem, form a hypothesis, test it, draw conclusions, then report results.',
    subject: 'psychology',
    year: 2013,
    chapter: 1
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