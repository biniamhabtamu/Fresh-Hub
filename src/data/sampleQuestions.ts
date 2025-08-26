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


{
    id: 'Sam-2013-1-1',
    question: 'Which of the following lists the correct basic order of the five steps of scientific research presented in the text?',
    options: ['Perceive the problem → Form a hypothesis → Test the hypothesis → Draw conclusions → Report results', 'Test the hypothesis → Perceive the problem → Report results → Draw conclusions → Form a hypothesis', 'Report results → Draw conclusions → Form a hypothesis → Perceive the problem → Test the hypothesis', 'Form a hypothesis → Report results → Perceive the problem → Test the hypothesis → Draw conclusions'],
    correctAnswer: 0,
    explanation: 'The text lists the research steps in that logical order: perceive the problem, form a hypothesis, test it, draw conclusions, then report results.',
    subject: 'Sample',
    year: 2013,
    chapter: 1
  },
  {
    id: 'Sam-2013-1-2',
    question: 'Melaku wants to conduct research on the relationship between psychological distress and work overload. Which research method fits this kind of research?',
    options: ['Case study', 'Survey', 'Correlation', 'Experimental'],
    correctAnswer: 2,
    explanation: 'Correlational research is specifically designed to discover and measure the relationship between two or more variables. The goal is to determine if psychological distress and work overload tend to occur together, and how strongly they are related, without manipulating either variable.',
    subject: 'Sample',
    year: 2013,
    chapter: 1
  },
  {
    id: 'Sam-2013-1-3',
    question: "If a teacher and counselor apply learning strategies to improve a student's grades, which of the four goals of psychology are they primarily pursuing?",
    options: ['Description', 'Explanation', 'Prediction', 'Control'],
    correctAnswer: 3,
    explanation: "The goal of control (or influence) in psychology involves applying knowledge to change or modify behavior for the better. By implementing strategies to improve grades, the teacher and counselor are actively trying to control an outcome.",
    subject: 'Sample',
    year: 2013,
    chapter: 1
  },
  {
    id: 'Sam-2013-1-4',
    question: 'A sociologist finds a strong positive association between the number of coffee shops in a city and its crime rate. What is the most significant limitation of concluding that coffee shops cause crime?',
    options: ['The sample size was likely too small.', 'Correlation does not prove causation; a third variable could be involved.', 'The research was not published in a peer-reviewed journal.', 'Self-report surveys are often unreliable.'],
    correctAnswer: 1,
    explanation: "This is a classic example of the principle that correlation is not causation. Just because two variables move together doesn't mean one causes the other. A hidden or 'third' variable, such as population density, could be the actual cause.",
    subject: 'Sample',
    year: 2013,
    chapter: 1
  },
  {
    id: 'Sam-2013-1-5',
    question: 'Which goal of research in psychology is achieved when the researcher finds out the causes of a behavior?',
    options: ['Description', 'Prediction', 'Explanation'],
    correctAnswer: 2,
    explanation: 'The goal of explanation is to understand why a behavior or mental process occurs. It goes beyond simply describing what is happening to identify its causes.',
    subject: 'Sample',
    year: 2013,
    chapter: 1
  },
  {
    "id": "sam-2013-2-1",
    "question": "If all cats are mammals and all mammals are animals, then all cats are?(AST)",
    "options": [
      "Animals",
      "Plants",
      "Minerals",
      "None of the above"
    ],
    "correctAnswer": 0,
    "explanation": "This is a classic syllogism. The conclusion 'All cats are animals' necessarily follows from the two premises.",
    "subject": "Sample",
    "year": 2013,
    "chapter": 2
  },
  {
    "id": "sam-2013-2-2",
    "question": "For the past twenty-five years, Ethiopian athletes have been dominant in the world of athletics. Thus, Ethiopian athletes will probably remain dominant in the coming couple of years. This argument is an example of a(n) _______ argument.",
    "options": [
      "deductive",
      "inductive"
    ],
    "correctAnswer": 1,
    "explanation": "This is an inductive argument. Inductive arguments move from specific observations (past performance) to a broader, probable conclusion (future performance). The conclusion is not guaranteed to be true, but it is made probable by the premises.",
    "subject": "Sample",
    "year": 2013,
    "chapter": 2
  },
  {
    "id": "sam-2013-2-3",
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
    "subject": "Sample",
    "year": 2013,
    "chapter": 2
  },
  {
    "id": "sam-2013-2-4",
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
    "subject": "Sample",
    "year": 2013,
    "chapter": 2
  },
  {
    "id": "sam-2013-2-5",
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
    "subject": "Sample",
    "year": 2013,
    "chapter": 2
  },
  {
    "id": "sam-2014-1-2",
    "question": "One of the following contents can be studied in a topical/systematic approach of geographic study?",
    "options": [
      "Geography of Ethiopia",
      "Geography of Africa",
      "Geography of population",
      "All of the above"
    ],
    "correctAnswer": 2,
    "explanation": "Topical (or Systematic) geography focuses on a single specific subject or theme, such as population, climate, or landforms, and analyzes its spatial patterns across different regions or the entire world. Regional geography, on the other hand, studies all the different geographic characteristics of a particular place, like Ethiopia (A) or Africa (B).",
    "subject": "Sample",
    "year": 2014,
    "chapter": 1
  },
  {
    "id": "sam-2014-1-3",
    "question": "Which theme of geography has its unique character that can be expressed in terms of hydrology, landforms, etc.?",
    "options": [
      "Region",
      "Location",
      "Place",
      "Movement"
    ],
    "correctAnswer": 2,
    "explanation": "The theme of Place describes what a location is like by detailing its unique physical and human characteristics. Physical characteristics include landforms, climate, and hydrology (water systems), while human characteristics include language, religion, and culture.",
    "subject": "Sample",
    "year": 2014,
    "chapter": 1
  },
  {
    "id": "sam-2014-1-4",
    "question": "Jimma is well-known for coffee production, year-round rainfall, and King Aba Jifar. To which core themes of Geography is it linked?",
    "options": [
      "Human-Environment Interaction",
      "Movement",
      "Place",
      "Location",
      "Region"
    ],
    "correctAnswer": 2,
    "explanation": "This description provides the specific physical (coffee, rainfall) and human (King Aba Jifar's historical significance) characteristics that define Jimma and make it unique. This is the definition of the theme of Place.",
    "subject": "Sample",
    "year": 2014,
    "chapter": 1
  },
  {
    "id": "sam-2014-1-5",
    "question": "Which one of the following is not within the scope of Geography?",
    "options": [
      "The solid part of the Earth",
      "Physical and chemical properties of matter",
      "The gaseous envelope",
      "All living organisms and their intimate relationship",
      "All water found on and under the Earth's surface"
    ],
    "correctAnswer": 1,
    "explanation": "Geography is the study of the Earth's spheres: the lithosphere (solid part), atmosphere (gaseous envelope), hydrosphere (water), and biosphere (living organisms). The fundamental physical and chemical properties of matter itself are the domain of Physics and Chemistry, not Geography. 🧪",
    "subject": "Sample",
    "year": 2014,
    "chapter": 1
  },
  {
    "id": "sam-2014-1-6",
    "question": "Presently, science & technology enable humans to produce artificial rain, steal clouds, and inhabit areas that have never been accessed before. This is a clear reflection of:",
    "options": [
      "Adaptation",
      "Dependence",
      "Determinism",
      "Modification"
    ],
    "correctAnswer": 3,
    "explanation": "This theme of human-environment interaction describes how humans change the environment to suit their needs. Creating artificial rain and making inhospitable areas livable are clear examples of humans modifying their surroundings.",
    "subject": "Sample",
    "year": 2014,
    "chapter": 1
  },
   {
    "id": "sam-2014-2-2",
    "question": "The process of converting physical energy from a stimulus into a neural signal is known as:",
    "options": [
      "Perception",
      "Sensation",
      "Transduction",
      "Adaptation"
    ],
    "correctAnswer": 2,
    "explanation": "Transduction is the process by which sensory receptors convert physical energy from the environment (like light, sound waves, or chemicals) into electrochemical neural impulses that the brain can understand. Sensation is the initial detection of the stimulus, perception is the interpretation of that sensation, and adaptation is the decreased sensitivity to a constant stimulus.",
    "subject": "Sample",
    "year": 2014,
    "chapter": 2
  },
  {
    "id": "sam-2014-2-3",
    "question": "A student's ability to focus on a professor's voice while ignoring the chatter of other students in a noisy classroom is an example of:",
    "options": [
      "Sensory adaptation",
      "Selective attention",
      "Perceptual constancy",
      "Extrasensory perception"
    ],
    "correctAnswer": 1,
    "explanation": "Selective attention is the ability to focus conscious awareness on a particular stimulus while filtering out other simultaneous information. This is exactly what the \"cocktail party effect\" describes—the ability to tune into one conversation among many.",
    "subject": "Sample",
    "year": 2014,
    "chapter": 2
  },
  {
    "id": "sam-2014-2-4",
    "question": "Which of the following is an example of a monocular cue for depth perception?",
    "options": [
      "Retinal disparity",
      "Convergence",
      "Linear perspective",
      "Binocular rivalry"
    ],
    "correctAnswer": 2,
    "explanation": "Monocular cues require only one eye to perceive depth. Linear perspective is a monocular cue where parallel lines appear to converge as they recede into the distance. Retinal disparity and convergence are both binocular cues, requiring both eyes. Binocular rivalry is not a depth cue.",
    "subject": "Sample",
    "year": 2014,
    "chapter": 2
  },
  {
    "id": "samp-2014-2-5",
    "question": "An individual who has a reduced ability to taste sweet flavors after eating a very sweet dessert is experiencing:",
    "options": [
      "Sensory threshold",
      "Sensory deprivation",
      "Sensory habituation",
      "Sensory adaptation"
    ],
    "correctAnswer": 3,
    "explanation": "Sensory adaptation is the diminished sensitivity to a constant or recurring stimulus. After constant exposure to a very sweet taste, the taste receptors become less responsive, reducing the perception of that sweetness.",
    "subject": "Sample",
    "year": 2014,
    "chapter": 2
  },
  {
    "id": "samp-2014-2-6",
    "question": "The ability to recognize an object as the same despite changes in its retinal image is called:",
    "options": [
      "Perceptual set",
      "Perceptual constancy",
      "Perceptual illusion",
      "Perceptual organization"
    ],
    "correctAnswer": 1,
    "explanation": "Perceptual constancy is the ability to perceive objects as having consistent properties (like size, shape, and color) even as the sensory information about them (the retinal image) changes due to viewing angle, lighting, or distance.",
    "subject": "Sample",
    "year": 2014,
    "chapter": 2
  },
  //geography-2013-1-1

 {
    "id": "geo-2013-1-1",
    "question": "What is the scientific study of the Earth, exploring physical, biological, and human elements across places and time?",
    "options": [
      "Biology",
      "Geography",
      "Astronomy",
      "Ecology"
    ],
    "correctAnswer": 1,
    "explanation": "Geography studies the Earth’s physical, biological, and human elements, and their spatial and temporal variations.",
    "subject": "geography",
    "year": 2013,
    "chapter": 1
  },
  {
    "id": "geo-2013-1-2",
    "question": "One of the following contents can be studied in a topical/systematic approach of geographic study?",
    "options": [
      "Geography of Ethiopia",
      "Geography of Africa",
      "Geography of population",
      "All of the above"
    ],
    "correctAnswer": 2,
    "explanation": "Topical (or Systematic) geography focuses on a single specific subject or theme, such as population, climate, or landforms, and analyzes its spatial patterns across different regions or the entire world. Regional geography, on the other hand, studies all the different geographic characteristics of a particular place, like Ethiopia (A) or Africa (B).",
    "subject": "geography",
    "year": 2013,
    "chapter": 1
  },
  {
    "id": "geo-2013-1-3",
    "question": "Which theme of geography has its unique character that can be expressed in terms of hydrology, landforms, etc.?",
    "options": [
      "Region",
      "Location",
      "Place",
      "Movement"
    ],
    "correctAnswer": 2,
    "explanation": "The theme of Place describes what a location is like by detailing its unique physical and human characteristics. Physical characteristics include landforms, climate, and hydrology (water systems), while human characteristics include language, religion, and culture.",
    "subject": "geography",
    "year": 2013,
    "chapter": 1
  },
  {
    "id": "geo-2013-1-4",
    "question": "Jimma is well-known for coffee production, year-round rainfall, and King Aba Jifar. To which core themes of Geography is it linked?",
    "options": [
      "Human-Environment Interaction",
      "Movement",
      "Place",
      "Location",
      "Region"
    ],
    "correctAnswer": 2,
    "explanation": "This description provides the specific physical (coffee, rainfall) and human (King Aba Jifar's historical significance) characteristics that define Jimma and make it unique. This is the definition of the theme of Place.",
    "subject": "geography",
    "year": 2013,
    "chapter": 1
  },
  {
    "id": "geo-2013-1-5",
    "question": "Which one of the following is not within the scope of Geography?",
    "options": [
      "The solid part of the Earth",
      "Physical and chemical properties of matter",
      "The gaseous envelope",
      "All living organisms and their intimate relationship",
      "All water found on and under the Earth's surface"
    ],
    "correctAnswer": 1,
    "explanation": "Geography is the study of the Earth's spheres: the lithosphere (solid part), atmosphere (gaseous envelope), hydrosphere (water), and biosphere (living organisms). The fundamental physical and chemical properties of matter itself are the domain of Physics and Chemistry, not Geography. 🧪",
    "subject": "geography",
    "year": 2013,
    "chapter": 1
  },
  {
    "id": "geo-2013-1-6",
    "question": "Presently, science & technology enable humans to produce artificial rain, steal clouds, and inhabit areas that have never been accessed before. This is a clear reflection of:",
    "options": [
      "Adaptation",
      "Dependence",
      "Determinism",
      "Modification"
    ],
    "correctAnswer": 3,
    "explanation": "This theme of human-environment interaction describes how humans change the environment to suit their needs. Creating artificial rain and making inhospitable areas livable are clear examples of humans modifying their surroundings.",
    "subject": "geography",
    "year": 2013,
    "chapter": 1
  },
  {
    "id": "geo-2013-1-7",
    "question": "When humans modify themselves, their lifestyles, and their behavior to live in a new environment, what type of human-environment interaction does it refer to?",
    "options": [
      "Modification",
      "Adaptation",
      "Dependency",
      "Movement",
      "Region"
    ],
    "correctAnswer": 1,
    "explanation": "Adaptation is the process of humans changing their own behavior or lifestyle to better fit their environment. Examples include wearing warmer clothes in a cold climate or building homes with specific materials available locally.",
    "subject": "geography",
    "year": 2013,
    "chapter": 1
  },
  {
    "id": "geo-2013-1-8",
    "question": "Which one of the following is not a contemporary focus area of Geography?",
    "options": [
      "Dynamism over the surface of the Earth",
      "Analysis of the spatio-temporal variations of phenomena",
      "Bilateral human-environmental interactions",
      "A mere description of physical features on the earth",
      "Explanation of the arrangements of natural and cultural features on the Earth's surface"
    ],
    "correctAnswer": 3,
    "explanation": "Modern (contemporary) geography is an analytical science focused on explaining why things are where they are and how they change (dynamism, spatio-temporal analysis, human-environment interaction). A mere description of features is characteristic of an older, more classical approach to geography that lacked in-depth analysis.",
    "subject": "geography",
    "year": 2013,
    "chapter": 1
  },
  {
    "id": "geo-2013-1-9",
    "question": "Identify the odd one out:",
    "options": [
      "Language",
      "Religion",
      "Urban centres & cities",
      "Landform"
    ],
    "correctAnswer": 3,
    "explanation": "Language, religion, and urban centers are all topics within human geography, as they relate to human culture and settlement. A landform is a topic within physical geography, making it the odd one out.",
    "subject": "geography",
    "year": 2013,
    "chapter": 1
  },
  {
    "id": "geo-2013-1-10",
    "question": "Which one properly describes the absolute location of Harar?",
    "options": [
      "Harar is located 525 kms from Addis Ababa",
      "Harar is located 30 minutes from Haramaya",
      "Harar is located east of Aweday",
      "Harar is located at approximately 9°N and 42°E"
    ],
    "correctAnswer": 3,
    "explanation": "Absolute location gives a precise position on the Earth's surface using coordinates of latitude and longitude. The other options describe relative location, which is the position of a place in relation to other places. 🌐",
    "subject": "geography",
    "year": 2013,
    "chapter": 1
  },
  {
    "id": "geo-2013-1-11",
    "question": "Which one of the following statements is not correct about the location of Ethiopia?",
    "options": [
      "Vicinal Ethiopia is found to the West of Djibouti",
      "North-south distance is shorter than east-west distance",
      "It lies between 33°-48°N latitude",
      "None of the above"
    ],
    "correctAnswer": 2,
    "explanation": "This statement confuses latitude and longitude. Ethiopia's correct astronomical location is between 3°N and 15°N latitude and between 33°E and 48°E longitude.",
    "subject": "geography",
    "year": 2013,
    "chapter": 1
  },
  {
    "id": "geo-2013-1-12",
    "question": "Which of the following is correct about the vicinal location of Ethiopia?",
    "options": [
      "Ethiopia is situated in the Horn of Africa",
      "Ethiopia is found west of Djibouti",
      "Ethiopia is located to the south of Europe",
      "Ethiopia is found to the north and northwest of Eritrea",
      "Ethiopia is found in the Nile Basin"
    ],
    "correctAnswer": 1,
    "explanation": "Vicinal location refers to the location of a country in relation to its immediate neighbors. Being \"west of Djibouti\" is a correct description of Ethiopia's position relative to its neighboring country.",
    "subject": "geography",
    "year": 2013,
    "chapter": 1
  },
  {
    "id": "geo-2013-1-13",
    "question": "Which one of the following statements is not true?",
    "options": [
      "Relatively Ethiopia is located to the south & north of Eritrea & Kenya respectively",
      "Astronomically, Ethiopia is located to the East of Greenwich Prime Meridian line",
      "Currently Ethiopia shares the smallest boundary line with Somalia",
      "Currently, Ethiopia constitutes the largest proportion of elevated ground in Africa"
    ],
    "correctAnswer": 2,
    "explanation": "This statement is false. Ethiopia shares its longest border with Somalia (about 1,600 km) and its shortest border with Djibouti (about 390 km).",
    "subject": "geography",
    "year": 2013,
    "chapter": 1
  },
  {
    "id": "geo-2013-1-14",
    "question": "One of the following statements is not correct about the Horn of Africa region?",
    "options": [
      "Ethiopia is the largest of all the countries in the Horn of Africa",
      "It is a narrow land tip that protrudes into the northern Indian Ocean",
      "It is the easternmost extension of Africa, consisting of four countries",
      "It shares common features and there is no diversity among its nations"
    ],
    "correctAnswer": 3,
    "explanation": "This statement is incorrect. The Horn of Africa is a region of immense diversity, with a vast range of cultures, languages, religions, ethnic groups, and physical landscapes. The claim of \"no diversity\" is completely false.",
    "subject": "geography",
    "year": 2013,
    "chapter": 1
  },
  {
    "id": "geo-2013-1-15",
    "question": "Which one is true about Ethiopia?",
    "options": [
      "Due to latitudinal extension, there is a difference of one hour between the most eastern and the most western points of the country",
      "Due to longitudinal extension, the country experiences a tropical climate",
      "Its east-west distance is 12°",
      "Its east-west distance is longer than the north-south distance"
    ],
    "correctAnswer": 3,
    "explanation": "Ethiopia spans about 15° of longitude (east-west) and 12° of latitude (north-south). Therefore, its east-west extent is geographically longer than its north-south extent. (A) is incorrect because the one-hour time difference is due to longitudinal extension, not latitudinal. (B) is incorrect because the tropical climate is due to latitudinal position (near the equator), not longitude. (C) is incorrect; the east-west distance is 15°.",
    "subject": "geography",
    "year": 2013,
    "chapter": 1
  },
  {
    "id": "geo-2013-1-16",
    "question": "Latitudinally, Ethiopia's most northerly point is marked by:",
    "options": [
      "15° N",
      "3° N",
      "48° E",
      "33° E"
    ],
    "correctAnswer": 0,
    "explanation": "Ethiopia's territory extends from approximately 3°N latitude in the south to 15°N latitude at its most northerly point.",
    "subject": "geography",
    "year": 2013,
    "chapter": 1
  },
  {
    "id": "geo-2013-1-17",
    "question": "Which of the following has nothing to do with the location of countries?",
    "options": [
      "Type of climate",
      "Socio-cultural characteristics",
      "Geopolitical strategy",
      "Access to the sea",
      "None of these"
    ],
    "correctAnswer": 4,
    "explanation": "All the options listed are influenced by a country's location. Climate depends on latitude, culture is shaped by neighbors, geopolitics is about relative position, and sea access is a direct result of location. Therefore, none of these options are unrelated to location.",
    "subject": "geography",
    "year": 2013,
    "chapter": 1
  },
  {
    "id": "geo-2013-1-18",
    "question": "Which can be generalized about Ethiopia with reference to its astronomical location?",
    "options": [
      "Ethiopia is a land of diversity",
      "Ethiopia is a mountainous country",
      "Ethiopia is a landlocked country",
      "Ethiopia is a country of agrarian society",
      "Ethiopia experiences tropical type of climate"
    ],
    "correctAnswer": 4,
    "explanation": "A country's astronomical location (its latitude and longitude) directly determines its general climate zone. Since Ethiopia is located between 3°N and 15°N latitude, it lies entirely within the tropics, giving it a tropical climate. ☀️",
    "subject": "geography",
    "year": 2013,
    "chapter": 1
  },
  {
    "id": "geo-2013-1-19",
    "question": "Which one of the following is a merit of Ethiopia's large size?",
    "options": [
      "Demands greater capital to construct infrastructure",
      "Requires a large army to protect its territory",
      "Difficult for effective administration",
      "Greater depth in mineral resources"
    ],
    "correctAnswer": 3,
    "explanation": "A larger territory increases the probability of having a wide variety and abundance of natural resources, including minerals, fertile land, and diverse ecosystems. This is a significant advantage or merit. The other options are disadvantages or challenges associated with a large size.",
    "subject": "geography",
    "year": 2013,
    "chapter": 1
  },
  {
    "id": "geo-2013-1-20",
    "question": "Which one of the following is the disadvantage of the large size of Ethiopia?",
    "options": [
      "The country owns wide arable land",
      "The country owns diverse cultures",
      "Defending external invasion",
      "Need for a large army"
    ],
    "correctAnswer": 3,
    "explanation": "A large country with long borders requires a large and costly military to defend its territory, which is a significant disadvantage. While \"defending external invasion\" (C) is a challenge, the \"need for a large army\" is the specific resource-based disadvantage. Options A and B are advantages.",
    "subject": "geography",
    "year": 2013,
    "chapter": 1
  },
  {
    "id": "geo-2013-1-21",
    "question": "The higher boundary length circle circumference ratio indicates the greater degree of compactness.",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": 1,
    "explanation": "This statement is confusingly worded and incorrect. A higher degree of compactness means a shape is closer to a circle. For a given area, a circle has the shortest possible boundary (circumference). Therefore, a state with a lower boundary-to-area ratio is considered more compact, not higher.",
    "subject": "geography",
    "year": 2013,
    "chapter": 1
  },
  {
    "id": "geo-2013-1-22",
    "question": "If state 'A' has an areal coverage of 300,000 km² and a boundary length of 2000 km, and state 'B' has a real coverage of 700,000 km² and a boundary length of 6000 km, which state is more compact?",
    "options": [
      "State 'A'",
      "State 'B'",
      "Both are compact",
      "Both are not compact"
    ],
    "correctAnswer": 0,
    "explanation": "We can use a simple ratio of Area / Boundary. A higher ratio indicates greater compactness. State A: 300,000 / 2,000 = 150. State B: 700,000 / 6,000 ≈ 116.7. Since State A has a higher ratio, it is considered more compact.",
    "subject": "geography",
    "year": 2013,
    "chapter": 1
  },
  {
    "id": "geo-2013-1-23",
    "question": "The area-boundary of Ethiopia, Kenya, Somalia, and Eritrea are given by 210.27, 161.85, 125.03, and 48.51, respectively. Which one is unlikely to have a compacted shape compared to the others?",
    "options": [
      "Ethiopia",
      "Kenya",
      "Somalia",
      "Eritrea"
    ],
    "correctAnswer": 3,
    "explanation": "Assuming this \"area-boundary\" figure is a compactness index, a higher number indicates a more compact shape. The question asks which is least compact (\"unlikely to have a compacted shape\"). Eritrea, with the lowest index value of 48.51, is the least compact of the group.",
    "subject": "geography",
    "year": 2013,
    "chapter": 1
  },
  {
    "id": "geo-2013-1-24",
    "question": "Which one of the following statements describes Ethiopian topography correctly?",
    "options": [
      "The highest mountain peak of Ethiopia is found in the southeastern highland of Ethiopia.",
      "The Bale highlands are separated from the Arsi highlands by the head and main stream of Ghenale.",
      "The Sidama Highlands are separated from the Bale Highlands by the Ghenale river valley.",
      "The lowest altitudinal point is found in the southwestern lowlands."
    ],
    "correctAnswer": 2,
    "explanation": "The Ghenale River (also spelled Genale) and its valley form a significant geographical division between the Bale Highlands to its east and the Sidama Highlands to its west. (A) is false; the highest peak (Ras Dashen) is in the Northwestern Highlands. (D) is false; the lowest point is the Danakil Depression in the northeast.",
    "subject": "geography",
    "year": 2013,
    "chapter": 1
  },
  {
    "id": "geo-2013-1-25",
    "question": "A state that seems compact in one direction but elongated in the other refers to a:",
    "options": [
      "Protruded state",
      "Elongated state",
      "Compact state",
      "Perforated state"
    ],
    "correctAnswer": 1,
    "explanation": "An elongated state is one that is long and narrow. This shape can pose challenges for transportation, communication, and national cohesion. Chile and Norway are classic examples.",
    "subject": "geography",
    "year": 2013,
    "chapter": 1
  },
  {
    "id": "geo-2013-1-26",
    "question": "Which of the following describes Ethiopia's geographical shape?",
    "options": [
      "Protruded-shaped country",
      "Fragmented-shaped country",
      "Round-shaped country",
      "Square-shaped country"
    ],
    "correctAnswer": 2,
    "explanation": "Ethiopia's shape is generally classified as compact, meaning the distance from the center to any boundary point does not vary significantly. Of the choices given, \"round-shaped\" is the best description of a compact state. It is not fragmented, protruded, or square.",
    "subject": "geography",
    "year": 2013,
    "chapter": 1
  }
,
 {
    "id": "geo-2014-1-1",
    "question": "What is the scientific study of the Earth, exploring physical, biological, and human elements across places and time?",
    "options": [
      "Biology",
      "Geography",
      "Astronomy",
      "Ecology"
    ],
    "correctAnswer": 1,
    "explanation": "Geography studies the Earth’s physical, biological, and human elements, and their spatial and temporal variations.",
    "subject": "geography",
    "year": 2014,
    "chapter": 1
  },
  {
    "id": "geo-2014-1-2",
    "question": "Which of the following would be studied in a regional approach to geography?",
    "options": [
      "Climate of the world",
      "Urbanization patterns globally",
      "Hydrology of the Nile Basin",
      "Demographics of the United States"
    ],
    "correctAnswer": 3,
    "explanation": "The regional approach focuses on studying all the various human and physical characteristics of a specific area. Studying the demographics of the United States involves looking at the population features of that defined region. The other options are examples of a topical approach, which studies a single specific subject (like climate or urbanization) across different regions.",
    "subject": "geography",
    "year": 2014,
    "chapter": 1
  },
  {
    "id": "geo-2014-1-3",
    "question": "Which theme of geography is primarily concerned with the unique characteristics of a specific location, including its human and physical features?",
    "options": [
      "Movement",
      "Place",
      "Region",
      "Location"
    ],
    "correctAnswer": 1,
    "explanation": "The theme of Place seeks to answer the question, \"What is it like there?\" It describes the unique personality of a location by examining its distinct physical features (like mountains and rivers) and human features (like culture, language, and architecture). 🏞️🏘️",
    "subject": "geography",
    "year": 2014,
    "chapter": 1
  },
  {
    "id": "geo-2014-1-4",
    "question": "The construction of dams and irrigation canals in a river basin to support large-scale agriculture is an example of which geographic theme?",
    "options": [
      "Movement",
      "Place",
      "Human-Environment Interaction",
      "Location"
    ],
    "correctAnswer": 2,
    "explanation": "This theme explores the relationship between people and their environment. Building dams and canals is a clear example of humans modifying their environment to meet their needs (in this case, for agriculture), which is a core concept of Human-Environment Interaction.",
    "subject": "geography",
    "year": 2014,
    "chapter": 1
  },
  {
    "id": "geo-2014-1-5",
    "question": "Which of the following topics is outside the traditional scope of physical geography?",
    "options": [
      "Ocean currents and tides",
      "Formation of volcanic mountains",
      "Distribution of global religions",
      "Weather systems and climate zones"
    ],
    "correctAnswer": 2,
    "explanation": "Physical geography studies the Earth's natural systems and processes, such as oceans, landforms, and climate. The distribution of global religions is a subject of human geography, which focuses on the spatial organization of human activities and cultures.",
    "subject": "geography",
    "year": 2014,
    "chapter": 1
  },
  {
    "id": "geo-2014-1-6",
    "question": "The practice of building houses on stilts in flood-prone areas is a clear reflection of:",
    "options": [
      "Determinism",
      "Modification",
      "Adaptation",
      "Dependence"
    ],
    "correctAnswer": 2,
    "explanation": "Adaptation occurs when humans change their own behavior or lifestyle to better suit their environment. Building houses on stilts is a way people adapt their construction methods to live with the reality of frequent flooding, rather than changing the environment itself.",
    "subject": "geography",
    "year": 2014,
    "chapter": 1
  },
  {
    "id": "geo-2014-1-7",
    "question": "When a society develops new technologies to extract resources from a previously inaccessible environment, what type of human-environment interaction is this?",
    "options": [
      "Dependency",
      "Adaptation",
      "Modification",
      "Movement"
    ],
    "correctAnswer": 2,
    "explanation": "This is an example of modification, where humans alter the environment to make it useful. Developing technology to access resources (like deep-sea oil drilling or mountaintop removal mining) is a profound way that societies change their physical surroundings to meet their needs. ⛏️",
    "subject": "geography",
    "year": 2014,
    "chapter": 1
  },
  {
    "id": "geo-2014-1-8",
    "question": "Which of the following best describes the traditional, pre-20th-century focus of geography?",
    "options": [
      "Analyzing complex human-environmental systems",
      "Explaining the interconnectedness of global phenomena",
      "Detailed, systematic description of Earth's features",
      "Predicting future demographic trends"
    ],
    "correctAnswer": 2,
    "explanation": "Historically, geography was primarily a descriptive science. Early geographers focused on exploration, mapping, and creating detailed catalogs (or gazetteers) of places, landforms, and cultures. The modern emphasis on analyzing complex systems and interconnectedness developed later. 🗺️",
    "subject": "geography",
    "year": 2014,
    "chapter": 1
  },
  {
    "id": "geo-2014-1-9",
    "question": "Identify the odd one out:",
    "options": [
      "Topography",
      "Soil type",
      "Language",
      "Climate"
    ],
    "correctAnswer": 2,
    "explanation": "Topography, soil type, and climate are all components of physical geography. Language is a component of human geography, making it the odd one out.",
    "subject": "geography",
    "year": 2014,
    "chapter": 1
  },
  {
    "id": "geo-2014-1-10",
    "question": "Which of the following best describes the relative location of Gonder?",
    "options": [
      "At approximately 12°N latitude and 37°E longitude",
      "600 kilometers north of Addis Ababa",
      "Northwest of Lake Tana",
      "Located in the Amhara Region"
    ],
    "correctAnswer": 2,
    "explanation": "Relative location describes a place's position in relation to another feature. Stating that Gonder is \"Northwest of Lake Tana\" is a classic example. Option A is an absolute location, while B and D are also forms of relative location, but C is a very common and precise geographic reference point.",
    "subject": "geography",
    "year": 2014,
    "chapter": 1
  },
  {
    "id": "geo-2014-1-11",
    "question": "Which of the following statements about Ethiopia's location is correct?",
    "options": [
      "It lies entirely within the Northern Hemisphere.",
      "It shares a border with seven different countries.",
      "It has a greater north-south latitudinal extent than east-west longitudinal extent.",
      "Its most eastern point is farther from the Prime Meridian than its most western point."
    ],
    "correctAnswer": 0,
    "explanation": "Ethiopia's latitudinal extent is from approximately 3°N to 15°N. Since both coordinates are north of the equator (0° latitude), the entire country is in the Northern Hemisphere.",
    "subject": "geography",
    "year": 2014,
    "chapter": 1
  },
  {
    "id": "geo-2014-1-12",
    "question": "Which of the following is an accurate statement about the Horn of Africa's geopolitical context?",
    "options": [
      "All countries in the Horn of Africa are landlocked.",
      "The region's strategic location near major shipping lanes makes it important.",
      "It is a region of political stability and unified economic policies.",
      "The Horn of Africa is a political entity with a single governing body."
    ],
    "correctAnswer": 1,
    "explanation": "The Horn of Africa is located along the southern edge of the Red Sea and the Gulf of Aden, which includes the crucial Bab-el-Mandeb strait. This is a major global chokepoint for maritime trade, particularly for ships traveling to and from the Suez Canal, making the region geopolitically significant. 🚢",
    "subject": "geography",
    "year": 2014,
    "chapter": 1
  },
  {
    "id": "geo-2014-1-13",
    "question": "Which one of the following is true about Ethiopia's astronomical and vicinal location?",
    "options": [
      "Ethiopia's astronomical location places it entirely within a temperate climate zone.",
      "The country is vicinally located in the Nile Basin, sharing its waters with several other nations.",
      "Ethiopia's astronomical location gives it a single, non-varying time zone across its entire territory.",
      "The country is vicinally located entirely in the Southern Hemisphere."
    ],
    "correctAnswer": 1,
    "explanation": "Vicinal location describes a place in relation to its neighbors and features. The Ethiopian Highlands are the source of the Blue Nile, which contributes the vast majority of the water to the Nile River. This location within the Nile Basin is a critical aspect of its relationship with neighboring countries like Sudan and Egypt.",
    "subject": "geography",
    "year": 2014,
    "chapter": 1
  },
  {
    "id": "geo-2014-1-14",
    "question": "The Horn of Africa is a strategically significant region due to its proximity to which major waterway?",
    "options": [
      "The Strait of Gibraltar",
      "The Panama Canal",
      "The Suez Canal and the Gulf of Aden",
      "The Strait of Malacca"
    ],
    "correctAnswer": 2,
    "explanation": "The Horn's strategic value comes from its position overlooking the Gulf of Aden and the Bab-el-Mandeb strait, which is the gateway between the Indian Ocean and the Red Sea, the main artery for shipping to and from the Suez Canal.",
    "subject": "geography",
    "year": 2014,
    "chapter": 1
  },
  {
    "id": "geo-2014-1-15",
    "question": "Due to Ethiopia's latitudinal extent, it experiences:",
    "options": [
      "A significant difference in time from east to west.",
      "A wide variation in daylight hours between seasons.",
      "A tropical climate with varied altitudinal modifications.",
      "A predominantly desert climate."
    ],
    "correctAnswer": 2,
    "explanation": "A country's latitude (its distance from the equator) is the primary determinant of its climate. Ethiopia's location in the tropics gives it a base tropical climate. However, its vast highlands drastically cool these temperatures, creating a wide variety of microclimates (known locally as Dega, Weyna Dega, etc.). ☀️",
    "subject": "geography",
    "year": 2014,
    "chapter": 1
  },
  {
    "id": "geo-2014-1-16",
    "question": "What is the latitudinal extent of Ethiopia?",
    "options": [
      "3° N to 15° N",
      "33° E to 48° E",
      "3° E to 15° E",
      "33° N to 48° N"
    ],
    "correctAnswer": 0,
    "explanation": "Latitude measures north-south position. Ethiopia stretches from approximately 3° North of the equator to 15° North of the equator. Option B represents its longitudinal (east-west) extent.",
    "subject": "geography",
    "year": 2014,
    "chapter": 1
  },
  {
    "id": "geo-2014-1-17",
    "question": "Which of the following is a primary disadvantage of being a landlocked country?",
    "options": [
      "Limited access to international trade routes",
      "Higher risk of volcanic activity",
      "Greater susceptibility to floods",
      "Lack of mineral resources"
    ],
    "correctAnswer": 0,
    "explanation": "A landlocked country has no direct access to the sea. This forces it to rely on neighboring countries for port access, which can significantly increase the cost of transportation and limit its access to global maritime trade. 🚫🚢",
    "subject": "geography",
    "year": 2014,
    "chapter": 1
  },
  {
    "id": "geo-2014-1-18",
    "question": "The fact that Ethiopia's climate is influenced by its proximity to the equator and its high-altitude topography is a reflection of its:",
    "options": [
      "Compactness",
      "Latitudinal location",
      "Vicinal location",
      "Both B and C"
    ],
    "correctAnswer": 1,
    "explanation": "Proximity to the equator is the definition of latitudinal location. This position determines the base amount of solar energy a region receives, establishing its fundamental climate type (in this case, tropical), which is then modified by other factors like altitude.",
    "subject": "geography",
    "year": 2014,
    "chapter": 1
  },
  {
    "id": "geo-2014-1-19",
    "question": "A major benefit of Ethiopia's large landmass is:",
    "options": [
      "It simplifies national governance and infrastructure development.",
      "It limits ethnic and cultural diversity, promoting unity.",
      "It provides a wide range of ecological zones and natural resources.",
      "It reduces the need for a large military."
    ],
    "correctAnswer": 2,
    "explanation": "A large territory typically contains a greater variety of climates, soils, and geology. This leads to a wider range of ecosystems and a higher likelihood of possessing diverse and abundant natural resources, which is a significant economic advantage. The other options describe challenges, not benefits, of a large size.",
    "subject": "geography",
    "year": 2014,
    "chapter": 1
  },
  {
    "id": "geo-2014-1-20",
    "question": "Which of the following is a disadvantage of a country's large size?",
    "options": [
      "Greater potential for agricultural output",
      "Difficulty in uniform service delivery across the entire territory",
      "Larger population size",
      "Ability to support a wider range of industries"
    ],
    "correctAnswer": 1,
    "explanation": "Governing a large territory is challenging. It is often difficult and expensive to build and maintain infrastructure (like roads, schools, and hospitals) and ensure that all citizens, especially those in remote areas, receive equitable government services.",
    "subject": "geography",
    "year": 2014,
    "chapter": 1
  },
  {
    "id": "geo-2014-1-21",
    "question": "A country with a high ratio of its boundary length to its areal coverage is considered to have a less compact shape.",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": 0,
    "explanation": "This is true. A compact shape (like a circle) encloses the maximum area with the minimum boundary. A long, irregular, or fragmented shape has a much longer boundary relative to its area. Therefore, a high boundary-to-area ratio indicates a less compact shape.",
    "subject": "geography",
    "year": 2014,
    "chapter": 1
  },
  {
    "id": "geo-2014-1-22",
    "question": "State 'X' has an area of 500,000 km² and a boundary length of 3,000 km. State 'Y' has an area of 500,000 km² and a boundary length of 4,500 km. Which state has a more compact shape?",
    "options": [
      "State 'X'",
      "State 'Y'",
      "Both are equally compact",
      "Neither is compact"
    ],
    "correctAnswer": 0,
    "explanation": "Since both states have the same area, the one with the shorter boundary length is more compact. State 'X' encloses its area with 3,000 km of border, while State 'Y' needs 4,500 km, making State 'X' more efficient and compact.",
    "subject": "geography",
    "year": 2014,
    "chapter": 1
  },
  {
    "id": "geo-2014-1-23",
    "question": "A state that completely encloses another state, such as South Africa enclosing Lesotho, is an example of what type of shape?",
    "options": [
      "Compact",
      "Protruded",
      "Perforated",
      "Fragmented"
    ],
    "correctAnswer": 2,
    "explanation": "A perforated state is one that has a \"hole\" in it, where the hole is the territory of another independent state. South Africa is \"perforated\" by Lesotho.",
    "subject": "geography",
    "year": 2014,
    "chapter": 1
  },
  {
    "id": "geo-2014-1-24",
    "question": "A country with a long, narrow strip of land extending from the main body, like Thailand, is a classic example of which type of shape?",
    "options": [
      "Elongated",
      "Protruded",
      "Fragmented",
      "Compact"
    ],
    "correctAnswer": 1,
    "explanation": "A protruded (or prorupted) state has a mostly compact main area with a long extension or \"panhandle.\" This protrusion is often created to access a resource or to separate two other states.",
    "subject": "geography",
    "year": 2014,
    "chapter": 1
  },
  {
    "id": "geo-2014-1-25",
    "question": "Which of the following describes the shape of a country that is divided into two or more parts, often by water or other countries?",
    "options": [
      "Compact",
      "Fragmented",
      "Protruded",
      "Elongated"
    ],
    "correctAnswer": 1,
    "explanation": "A fragmented state consists of several separate, non-contiguous pieces of territory. This includes archipelagos like Indonesia and the Philippines, or countries separated by another state.",
    "subject": "geography",
    "year": 2014,
    "chapter": 1
  },
  {
    "id": "geo-2014-1-26",
    "question": "A country with a shape that is roughly circular or square, with the capital city near the center, is most likely to have which type of shape?",
    "options": [
      "Elongated",
      "Protruded",
      "Compact",
      "Fragmented"
    ],
    "correctAnswer": 2,
    "explanation": "A compact shape is one where the distance from the geographic center to any point on the boundary is roughly the same. This shape is theoretically the most efficient for transportation, communication, and defense. Ethiopia is often considered a compact state.",
    "subject": "geography",
    "year": 2014,
    "chapter": 1
  },
  {
    "id": "geo-2015-1-2",
    "question": "Which type of map would you use to find the distribution of different soil types across a region?",
    "options": [
      "A general-purpose map",
      "A special-purpose map",
      "A topographic map",
      "A political map"
    ],
    "correctAnswer": 1,
    "explanation": "A special-purpose map, also known as a thematic map, is designed to show the distribution of a specific topic or theme, such as soil types, population density, or climate zones. It focuses on one particular subject. 🗺️",
    "subject": "geography",
    "year": 2015,
    "chapter": 1
  },
  {
    "id": "geo-2015-1-3",
    "question": "A map that shows physical features such as mountains, rivers, and elevation is called a:",
    "options": [
      "Political map",
      "Thematic map",
      "Topographic map",
      "Road map"
    ],
    "correctAnswer": 2,
    "explanation": "A topographic map is specifically designed to represent the shape and elevation of the landscape. It uses contour lines to show features like mountains, valleys, and rivers in detail. ⛰️",
    "subject": "geography",
    "year": 2015,
    "chapter": 1
  },
  {
    "id": "geo-2015-1-4",
    "question": "The coordinates 3°N and 42°E represent which type of location?",
    "options": [
      "Relative location",
      "Absolute location",
      "Vicinal location",
      "Regional location"
    ],
    "correctAnswer": 1,
    "explanation": "Absolute location provides a precise, fixed point on the Earth's surface using a coordinate system, most commonly latitude and longitude. Relative location describes a place in relation to other places (e.g., \"next to the school\"). 📍",
    "subject": "geography",
    "year": 2015,
    "chapter": 1
  },
  {
    "id": "geo-2015-1-5",
    "question": "A large-scale map shows a small area with a lot of detail.",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": 0,
    "explanation": "This is true. A large-scale map (e.g., a scale of 1:5,000) \"zooms in\" on a small area, allowing for a high level of detail, like showing individual streets and buildings. A small-scale map (e.g., 1:5,000,000) \"zooms out\" to show a large area with less detail.",
    "subject": "geography",
    "year": 2015,
    "chapter": 1
  },
  {
    "id": "geo-2015-1-6",
    "question": "The ratio of the distance on a map to the corresponding distance on the ground is known as the map's:",
    "options": [
      "Compass rose",
      "Legend",
      "Scale",
      "Grid"
    ],
    "correctAnswer": 2,
    "explanation": "The scale is the fundamental component of a map that tells you how the distances on the map relate to the actual distances on the Earth's surface. It can be expressed as a ratio (1:100,000), a bar scale, or a verbal statement.",
    "subject": "geography",
    "year": 2015,
    "chapter": 1
  },
  {
    "id": "geo-2015-1-7",
    "question": "A geographer is studying the impact of climate change on a country's agricultural productivity. This study falls under which theme of geography?",
    "options": [
      "Movement",
      "Region",
      "Human-Environment Interaction",
      "Place"
    ],
    "correctAnswer": 2,
    "explanation": "This theme explores the complex relationship between human societies and their natural surroundings. Studying how a changing environment (climate change) affects a human activity (agriculture) is a classic example of Human-Environment Interaction. 🌦️🌾",
    "subject": "geography",
    "year": 2015,
    "chapter": 1
  },
  {
    "id": "geo-2015-1-8",
    "question": "The concept of possibilism in geography argues that:",
    "options": [
      "The environment is the sole determinant of human activity.",
      "Humans are entirely free from environmental constraints.",
      "The environment offers opportunities, and human culture determines which are used.",
      "All human societies will eventually reach the same level of development."
    ],
    "correctAnswer": 2,
    "explanation": "Possibilism is the idea that the physical environment doesn't determine what people will do, but rather offers a range of possibilities from which people can choose based on their culture, technology, and values.",
    "subject": "geography",
    "year": 2015,
    "chapter": 1
  },
  {
    "id": "geo-2015-1-9",
    "question": "Which of the following is a classic example of a functional region?",
    "options": [
      "A linguistic region defined by a common language",
      "A climate zone",
      "The service area of a major city's public transportation system",
      "A region with a common cultural heritage"
    ],
    "correctAnswer": 2,
    "explanation": "A functional region is an area organized around a central node or focal point, with its boundaries defined by a specific function that radiates from the center. A city's public transit network is a perfect example, as it connects surrounding areas to a central urban core. 🚌",
    "subject": "geography",
    "year": 2015,
    "chapter": 1
  },
  {
    "id": "geo-2015-1-10",
    "question": "The process of diffusion in geography refers to the spread of:",
    "options": [
      "A physical feature across the landscape.",
      "An idea, innovation, or cultural trait from its point of origin.",
      "A specific type of climate across a region.",
      "A political boundary across a territory."
    ],
    "correctAnswer": 1,
    "explanation": "Diffusion is a key concept in human geography that describes how things spread from a hearth (point of origin) to other places. This includes everything from new technologies and fashion trends to languages and religions.",
    "subject": "geography",
    "year": 2015,
    "chapter": 1
  },
  {
    "id": "geo-2015-1-11",
    "question": "The study of the spatial distribution of disease outbreaks is a key component of which branch of geography?",
    "options": [
      "Economic geography",
      "Political geography",
      "Medical geography",
      "Urban geography"
    ],
    "correctAnswer": 2,
    "explanation": "Medical geography applies geographic concepts and methods to study health, disease, and healthcare. A famous early example is Dr. John Snow's 1854 map of a cholera outbreak in London, which helped pinpoint the source of the disease. 🩺",
    "subject": "geography",
    "year": 2015,
    "chapter": 1
  },
  {
    "id": "geo-2015-1-12",
    "question": "Which of the following best defines the concept of geopolitical strategy?",
    "options": [
      "The study of rocks and landforms",
      "The analysis of a country's military strength",
      "The link between a country's geography and its political power or foreign policy",
      "The study of population demographics"
    ],
    "correctAnswer": 2,
    "explanation": "Geopolitics is the study of how a country's size, location, and resources (its geography) influence its relationships with other countries and its strategic decisions on the world stage.",
    "subject": "geography",
    "year": 2015,
    "chapter": 1
  },
  {
    "id": "geo-2015-1-13",
    "question": "A country with an elongated shape may face which of the following challenges?",
    "options": [
      "Limited access to the sea",
      "Difficulty in defending its borders",
      "Problems with internal communication and transportation",
      "High vulnerability to external invasion"
    ],
    "correctAnswer": 2,
    "explanation": "An elongated country (one that is long and thin, like Chile or Vietnam) can suffer from poor internal cohesion. It can be costly and time-consuming to transport goods and people from one end of the country to the other, potentially isolating peripheral regions from the capital.",
    "subject": "geography",
    "year": 2015,
    "chapter": 1
  },
  {
    "id": "geo-2015-1-14",
    "question": "The fact that different regions of Ethiopia have distinct cultures, languages, and traditional practices is a reflection of its:",
    "options": [
      "Low population density",
      "Homogeneous climate",
      "Physical and cultural diversity",
      "Compact shape"
    ],
    "correctAnswer": 2,
    "explanation": "Ethiopia is renowned for its incredible diversity. Its complex topography created isolated areas where distinct ethnic and linguistic groups developed unique cultures. This rich tapestry of traditions is a defining characteristic of the nation.",
    "subject": "geography",
    "year": 2015,
    "chapter": 1
  },
  {
    "id": "geo-2015-1-15",
    "question": "The concept of a country's 'area-boundary ratio' is most closely related to its:",
    "options": [
      "Political stability",
      "Economic prosperity",
      "Shape and compactness",
      "Population density"
    ],
    "correctAnswer": 2,
    "explanation": "The ratio between a country's surface area and the length of its boundary is a mathematical way to measure its compactness. A shape that is more circular (like a compact state) has a low boundary-to-area ratio, while an irregular or elongated shape has a high ratio.",
    "subject": "geography",
    "year": 2015,
    "chapter": 1
  },
  {
    "id": "geo-2015-1-16",
    "question": "If a country's capital city is located far from its center, what might be a consequence?",
    "options": [
      "Better communication with all parts of the country",
      "Increased national unity",
      "Challenges in administering and integrating the entire territory",
      "Reduced defense costs"
    ],
    "correctAnswer": 2,
    "explanation": "A capital located on the periphery can make governance difficult. Regions far from the capital may feel neglected or disconnected from the political center, posing challenges to national unity, administration, and infrastructure development.",
    "subject": "geography",
    "year": 2015,
    "chapter": 1
  },
  {
    "id": "geo-2015-1-17",
    "question": "Which type of map is most useful for studying the relief and elevation of a landscape?",
    "options": [
      "A political map",
      "A road map",
      "A topographic map",
      "A population map"
    ],
    "correctAnswer": 2,
    "explanation": "A topographic map is the best tool for this purpose. It uses contour lines to precisely show the elevation, slope, and shape (relief) of the land, making it essential for hiking, engineering, and geological studies.",
    "subject": "geography",
    "year": 2015,
    "chapter": 1
  },
  {
    "id": "geo-2015-1-18",
    "question": "A large-scale map would be most appropriate for:",
    "options": [
      "Planning a cross-country road trip.",
      "Studying global climate patterns.",
      "Finding a specific address in a neighborhood.",
      "Analyzing the political boundaries of continents."
    ],
    "correctAnswer": 2,
    "explanation": "A large-scale map provides a high level of detail for a small area. This makes it perfect for \"zoomed-in\" tasks like navigating a city or finding a specific house. The other options are \"zoomed-out\" tasks that require small-scale maps.",
    "subject": "geography",
    "year": 2015,
    "chapter": 1
  },
  {
    "id": "geo-2015-1-19",
    "question": "Which of the following is a limitation of using a map to represent the Earth?",
    "options": [
      "All maps are completely accurate and distortion-free.",
      "Maps can only show physical features, not human ones.",
      "Maps inevitably distort shape, size, distance, or direction.",
      "Maps are only useful for absolute location."
    ],
    "correctAnswer": 2,
    "explanation": "This is the fundamental challenge of cartography. It's mathematically impossible to take the surface of a sphere (the Earth) and represent it on a flat surface (a map) without introducing some kind of distortion. Mapmakers must choose which property to preserve at the expense of others.",
    "subject": "geography",
    "year": 2015,
    "chapter": 1
  },
  {
    "id": "geo-2015-1-20",
    "question": "Which of the following describes the shape of a country with a long arm or strip of territory leading away from the main body, such as the Democratic Republic of Congo?",
    "options": [
      "Perforated",
      "Elongated",
      "Protruded",
      "Fragmented"
    ],
    "correctAnswer": 2,
    "explanation": "A protruded (or prorupted) state has a mostly compact main body with a long extension or \"panhandle.\" The DRC has a very narrow protrusion that extends westward to give it a small coastline on the Atlantic Ocean.",
    "subject": "geography",
    "year": 2015,
    "chapter": 1
  },
  {
    "id": "geo-2015-1-21",
    "question": "The study of how different cultures have adapted to living in desert environments is a classic example of:",
    "options": [
      "A systematic approach to geography",
      "A regional approach to geography",
      "A thematic approach to geography",
      "A political approach to geography"
    ],
    "correctAnswer": 0,
    "explanation": "A systematic (or topical) approach focuses on a specific theme or process and examines it across different regions. In this case, the theme is \"human adaptation to deserts,\" and a geographer would study this system by looking at examples from the Sahara, the Gobi, and other deserts worldwide.",
    "subject": "geography",
    "year": 2015,
    "chapter": 1
  },
  {
    "id": "geo-2015-1-22",
    "question": "Which of the following is the most significant disadvantage of a country being perforated?",
    "options": [
      "It complicates international relations and border control.",
      "It prevents the country from having a coastline.",
      "It makes the country vulnerable to invasion.",
      "It always leads to political instability."
    ],
    "correctAnswer": 0,
    "explanation": "A perforated state (like South Africa, which surrounds Lesotho) must manage an international border located entirely within its own territory. This creates unique challenges for customs, immigration, security, and transportation, requiring close cooperation with the enclosed nation.",
    "subject": "geography",
    "year": 2015,
    "chapter": 1
  },
  {
    "id": "geo-2015-1-23",
    "question": "If a country's political capital is located at a significant distance from its economic heartland, this could create:",
    "options": [
      "A stronger sense of national identity",
      "More balanced regional development",
      "A sense of alienation for the economic center from the political process",
      "Increased efficiency in government services"
    ],
    "correctAnswer": 2,
    "explanation": "When the centers of political power and economic activity are far apart, the business and financial communities in the economic heartland may feel that the government is disconnected from their needs. This can lead to tension and a sense of political alienation.",
    "subject": "geography",
    "year": 2015,
    "chapter": 1
  },
  {
    "id": "geo-2015-1-24",
    "question": "A map legend is also known as a:",
    "options": [
      "Key",
      "Compass rose",
      "Scale",
      "Grid"
    ],
    "correctAnswer": 0,
    "explanation": "The legend, which explains the meaning of the symbols, colors, and patterns used on the map, is also commonly called the key. It is essential for understanding and interpreting the map's information. 🔑",
    "subject": "geography",
    "year": 2015,
    "chapter": 1
  },
  {
    "id": "geo-2015-1-25",
    "question": "Which of the following is an example of human modification of the environment?",
    "options": [
      "A society's reliance on a river for drinking water",
      "A community's traditional fishing techniques",
      "The construction of a massive dam for hydroelectric power",
      "Wearing warm clothes in a cold climate"
    ],
    "correctAnswer": 2,
    "explanation": "Modification involves actively changing the physical environment. Building a dam is a large-scale transformation of a river system and its surrounding landscape. Option A is dependence, while B and D are examples of adaptation.",
    "subject": "geography",
    "year": 2015,
    "chapter": 1
  },
  {
    "id": "geo-2015-1-26",
    "question": "The theme of 'Movement' in geography is concerned with:",
    "options": [
      "The migration of people, goods, and ideas.",
      "The physical movement of tectonic plates.",
      "The daily rotation of the Earth.",
      "The movement of planets in the solar system."
    ],
    "correctAnswer": 0,
    "explanation": "In the five themes of geography, Movement refers to the translocation of humans and their creations across the Earth's surface. This includes everything from international migration and global trade to the spread of information on the internet. ✈️📦💡",
    "subject": "geography",
    "year": 2015,
    "chapter": 1
  },{
    "id": "geo-2016-1-1",
    "question": "What is the scientific study of the Earth, exploring physical, biological, and human elements across places and time?",
    "options": [
      "Biology",
      "Geography",
      "Astronomy",
      "Ecology"
    ],
    "correctAnswer": 1,
    "explanation": "Geography studies the Earth’s physical, biological, and human elements, and their spatial and temporal variations.",
    "subject": "geography",
    "year": 2016,
    "chapter": 1
  },
  {
    "id": "geo-2016-1-2",
    "question": "The fact that the highest point in Ethiopia (Ras Dejen) and the lowest point (the Danakil Depression) are located within the same country is a reflection of its:",
    "options": [
      "Elongated shape",
      "Large size and diverse topography",
      "Compactness",
      "Landlocked status"
    ],
    "correctAnswer": 1,
    "explanation": "Having such extreme variations in elevation—from the towering peak of Ras Dejen at 4,550 meters to the scorching Danakil Depression at 125 meters below sea level—is a testament to Ethiopia's incredibly diverse topography.  This level of geographic diversity is possible within a country that has a large size to accommodate such different landscapes.",
    "subject": "geography",
    "year": 2016,
    "chapter": 1
  },
  {
    "id": "geo-2016-1-3",
    "question": "The political and economic instability often seen in the Horn of Africa is a significant topic for which branch of geography?",
    "options": [
      "Physical geography",
      "Biogeography",
      "Political geography",
      "Climatology"
    ],
    "correctAnswer": 2,
    "explanation": "Political geography is the branch of geography that studies the relationship between geography, politics, and international relations. It examines topics like borders, conflicts, international trade, and regional instability, making it the perfect field for analyzing the complex situation in the Horn of Africa.",
    "subject": "geography",
    "year": 2016,
    "chapter": 1
  },
  {
    "id": "geo-2016-1-4",
    "question": "The phrase \"The Nile is Egypt's lifeblood\" is an example of which type of human-environment interaction?",
    "options": [
      "Modification",
      "Adaptation",
      "Dependence",
      "Determinism"
    ],
    "correctAnswer": 2,
    "explanation": "This phrase perfectly illustrates dependence, which is when humans rely on their environment to meet their basic needs. For millennia, Egyptian civilization has depended on the Nile River for water, fertile soil for agriculture, and transportation. Its very existence is tied to the river.",
    "subject": "geography",
    "year": 2016,
    "chapter": 1
  },
  {
    "id": "geo-2016-1-5",
    "question": "The process of 'urbanization', where a growing percentage of a country's population lives in cities, is a prime example of which theme of geography?",
    "options": [
      "Place",
      "Region",
      "Movement",
      "Human-Environment Interaction"
    ],
    "correctAnswer": 2,
    "explanation": "The theme of Movement is concerned with the translocation of people, goods, and ideas. Urbanization is fundamentally a process of movement—specifically, the large-scale migration of people from rural areas to urban centers in search of opportunities. 🚶‍♀️➡️🏙️",
    "subject": "geography",
    "year": 2016,
    "chapter": 1
  },
  {
    "id": "geo-2016-1-6",
    "question": "If a country has a very protruded shape, what might be a major challenge?",
    "options": [
      "Defending the extended portion from external threats",
      "Establishing a strong national identity",
      "Maintaining a uniform climate",
      "Developing a single transportation network"
    ],
    "correctAnswer": 0,
    "explanation": "A protruded shape features a long \"panhandle\" extending from the main body of the country. This extension is often vulnerable because it can be surrounded on multiple sides by neighboring countries and may be far from the nation's military and administrative core, making it difficult to defend.",
    "subject": "geography",
    "year": 2016,
    "chapter": 1
  },
  {
    "id": "geo-2016-1-7",
    "question": "The fact that the time zone in Addis Ababa is UTC+3 is a direct consequence of Ethiopia's:",
    "options": [
      "Latitudinal location",
      "Longitudinal location",
      "Vicinal location",
      "Absolute location"
    ],
    "correctAnswer": 1,
    "explanation": "Global time zones are determined by longitude, the imaginary lines that run from the North Pole to the South Pole. The Earth is divided into 24 time zones, each about 15 degrees of longitude wide. Ethiopia's position east of the Prime Meridian (0° longitude) places it in the UTC+3 time zone (Coordinated Universal Time plus three hours). 🕒",
    "subject": "geography",
    "year": 2016,
    "chapter": 1
  },
  {
    "id": "geo-2016-1-8",
    "question": "A geographer is studying the impact of the Tana-Beles project on the surrounding environment and the livelihoods of local communities. This study is an excellent example of:",
    "options": [
      "A regional study",
      "A systematic study",
      "A study of Human-Environment Interaction",
      "Both A and C"
    ],
    "correctAnswer": 3,
    "explanation": "This study has two key aspects: It focuses on a specific, defined region (the area around the Tana-Beles project). It examines the relationship between a human action (the project) and its effects on both the natural environment and local people, which is the core of Human-Environment Interaction. Therefore, it is an example of both.",
    "subject": "geography",
    "year": 2016,
    "chapter": 1
  },
  {
    "id": "geo-2016-1-9",
    "question": "The fact that Ethiopia's climate is highly varied despite its limited latitudinal range is primarily due to:",
    "options": [
      "Its elongated shape",
      "Its varied altitude and topography",
      "Its proximity to the sea",
      "Its compact shape"
    ],
    "correctAnswer": 1,
    "explanation": "While Ethiopia's location near the equator gives it a tropical base climate, the primary reason for its incredible climatic variation is its varied altitude and topography. The simple rule \"the higher you go, the cooler it gets\" explains why the high central plateau (Dega) is cool and temperate, while the lowlands (Kola) are scorching hot, all within the same latitude.",
    "subject": "geography",
    "year": 2016,
    "chapter": 1
  },
  {
    "id": "geo-2016-1-10",
    "question": "The 'dependency ratio', a demographic measure of the non-working population, is a concept most relevant to which theme of geography?",
    "options": [
      "Location",
      "Place",
      "Movement",
      "Population geography"
    ],
    "correctAnswer": 3,
    "explanation": "The dependency ratio is a key metric used in population geography, a major sub-field of human geography that studies the spatial distribution, composition, migration, and growth of human populations. It helps geographers understand the economic and social structure of a place's population.",
    "subject": "geography",
    "year": 2016,
    "chapter": 1
  },
  {
    "id": "geo-2016-1-11",
    "question": "The statement that \"Ethiopia has a tropical climate\" is a generalization based on which aspect of its geography?",
    "options": [
      "Its compact shape",
      "Its astronomical location",
      "Its proximity to the equator",
      "Both B and C"
    ],
    "correctAnswer": 3,
    "explanation": "Both terms essentially point to the same reason. A country's astronomical location is its position defined by latitude and longitude. Ethiopia's latitude (between 3°N and 15°N) places it in the tropics, which is the zone defined by its proximity to the equator. Therefore, both B and C are correct ways of describing the basis for this climatic generalization.",
    "subject": "geography",
    "year": 2016,
    "chapter": 1
  },
  {
    "id": "geo-2017-1-2",
    "question": "Which of the following would be studied in a regional approach to geography?",
    "options": [
      "Climate of the world",
      "Urbanization patterns globally",
      "Hydrology of the Nile Basin",
      "Demographics of the United States"
    ],
    "correctAnswer": 3,
    "explanation": "The regional approach focuses on studying all the various human and physical characteristics of a specific area. Studying the demographics of the United States involves looking at the population features of that defined region. The other options are examples of a topical approach, which studies a single specific subject (like climate or urbanization) across different regions.",
    "subject": "geography",
    "year": 2017,
    "chapter": 1
  },
  {
    "id": "geo-2017-1-3",
    "question": "Which theme of geography is primarily concerned with the unique characteristics of a specific location, including its human and physical features?",
    "options": [
      "Movement",
      "Place",
      "Region",
      "Location"
    ],
    "correctAnswer": 1,
    "explanation": "The theme of Place seeks to answer the question, \"What is it like there?\" It describes the unique personality of a location by examining its distinct physical features (like mountains and rivers) and human features (like culture, language, and architecture). 🏞️🏘️",
    "subject": "geography",
    "year": 2017,
    "chapter": 1
  },
  {
    "id": "geo-2017-1-4",
    "question": "The construction of dams and irrigation canals in a river basin to support large-scale agriculture is an example of which geographic theme?",
    "options": [
      "Movement",
      "Place",
      "Human-Environment Interaction",
      "Location"
    ],
    "correctAnswer": 2,
    "explanation": "This theme explores the relationship between people and their environment. Building dams and canals is a clear example of humans modifying their environment to meet their needs (in this case, for agriculture), which is a core concept of Human-Environment Interaction.",
    "subject": "geography",
    "year": 2017,
    "chapter": 1
  },
  {
    "id": "geo-2017-1-5",
    "question": "Which of the following topics is outside the traditional scope of physical geography?",
    "options": [
      "Ocean currents and tides",
      "Formation of volcanic mountains",
      "Distribution of global religions",
      "Weather systems and climate zones"
    ],
    "correctAnswer": 2,
    "explanation": "Physical geography studies the Earth's natural systems and processes, such as oceans, landforms, and climate. The distribution of global religions is a subject of human geography, which focuses on the spatial organization of human activities and cultures.",
    "subject": "geography",
    "year": 2017,
    "chapter": 1
  },
  {
    "id": "geo-2017-1-6",
    "question": "The practice of building houses on stilts in flood-prone areas is a clear reflection of:",
    "options": [
      "Determinism",
      "Modification",
      "Adaptation",
      "Dependence"
    ],
    "correctAnswer": 2,
    "explanation": "Adaptation occurs when humans change their own behavior or lifestyle to better suit their environment. Building houses on stilts is a way people adapt their construction methods to live with the reality of frequent flooding, rather than changing the environment itself.",
    "subject": "geography",
    "year": 2017,
    "chapter": 1
  },
  {
    "id": "geo-2017-1-7",
    "question": "When a society develops new technologies to extract resources from a previously inaccessible environment, what type of human-environment interaction is this?",
    "options": [
      "Dependency",
      "Adaptation",
      "Modification",
      "Movement"
    ],
    "correctAnswer": 2,
    "explanation": "This is an example of modification, where humans alter the environment to make it useful. Developing technology to access resources (like deep-sea oil drilling or mountaintop removal mining) is a profound way that societies change their physical surroundings to meet their needs. ⛏️",
    "subject": "geography",
    "year": 2017,
    "chapter": 1
  },
  {
    "id": "geo-2017-1-8",
    "question": "Which of the following best describes the traditional, pre-20th-century focus of geography?",
    "options": [
      "Analyzing complex human-environmental systems",
      "Explaining the interconnectedness of global phenomena",
      "Detailed, systematic description of Earth's features",
      "Predicting future demographic trends"
    ],
    "correctAnswer": 2,
    "explanation": "Historically, geography was primarily a descriptive science. Early geographers focused on exploration, mapping, and creating detailed catalogs (or gazetteers) of places, landforms, and cultures. The modern emphasis on analyzing complex systems and interconnectedness developed later. 🗺️",
    "subject": "geography",
    "year": 2017,
    "chapter": 1
  },
  {
    "id": "geo-2017-1-9",
    "question": "Identify the odd one out:",
    "options": [
      "Topography",
      "Soil type",
      "Language",
      "Climate"
    ],
    "correctAnswer": 2,
    "explanation": "Topography, soil type, and climate are all components of physical geography. Language is a component of human geography, making it the odd one out.",
    "subject": "geography",
    "year": 2017,
    "chapter": 1
  },
  {
    "id": "geo-2017-1-10",
    "question": "Which of the following best describes the relative location of Gonder?",
    "options": [
      "At approximately 12°N latitude and 37°E longitude",
      "600 kilometers north of Addis Ababa",
      "Northwest of Lake Tana",
      "Located in the Amhara Region"
    ],
    "correctAnswer": 2,
    "explanation": "Relative location describes a place's position in relation to another feature. Stating that Gonder is \"Northwest of Lake Tana\" is a classic example. Option A is an absolute location, while B and D are also forms of relative location, but C is a very common and precise geographic reference point.",
    "subject": "geography",
    "year": 2017,
    "chapter": 1
  },
  {
    "id": "geo-2017-1-11",
    "question": "Which of the following statements about Ethiopia's location is correct?",
    "options": [
      "It lies entirely within the Northern Hemisphere.",
      "It shares a border with seven different countries.",
      "It has a greater north-south latitudinal extent than east-west longitudinal extent.",
      "Its most eastern point is farther from the Prime Meridian than its most western point."
    ],
    "correctAnswer": 0,
    "explanation": "Ethiopia's latitudinal extent is from approximately 3°N to 15°N. Since both coordinates are north of the equator (0° latitude), the entire country is in the Northern Hemisphere.",
    "subject": "geography",
    "year": 2017,
    "chapter": 1
  },
  {
    "id": "geo-2017-1-12",
    "question": "Which of the following is an accurate statement about the Horn of Africa's geopolitical context?",
    "options": [
      "All countries in the Horn of Africa are landlocked.",
      "The region's strategic location near major shipping lanes makes it important.",
      "It is a region of political stability and unified economic policies.",
      "The Horn of Africa is a political entity with a single governing body."
    ],
    "correctAnswer": 1,
    "explanation": "The Horn of Africa is located along the southern edge of the Red Sea and the Gulf of Aden, which includes the crucial Bab-el-Mandeb strait. This is a major global chokepoint for maritime trade, particularly for ships traveling to and from the Suez Canal, making the region geopolitically significant. 🚢",
    "subject": "geography",
    "year": 2017,
    "chapter": 1
  },
  {
    "id": "geo-2017-1-13",
    "question": "Which one of the following is true about Ethiopia's astronomical and vicinal location?",
    "options": [
      "Ethiopia's astronomical location places it entirely within a temperate climate zone.",
      "The country is vicinally located in the Nile Basin, sharing its waters with several other nations.",
      "Ethiopia's astronomical location gives it a single, non-varying time zone across its entire territory.",
      "The country is vicinally located entirely in the Southern Hemisphere."
    ],
    "correctAnswer": 1,
    "explanation": "Vicinal location describes a place in relation to its neighbors and features. The Ethiopian Highlands are the source of the Blue Nile, which contributes the vast majority of the water to the Nile River. This location within the Nile Basin is a critical aspect of its relationship with neighboring countries like Sudan and Egypt.",
    "subject": "geography",
    "year": 2017,
    "chapter": 1
  },
  {
    "id": "geo-2017-1-14",
    "question": "The Horn of Africa is a strategically significant region due to its proximity to which major waterway?",
    "options": [
      "The Strait of Gibraltar",
      "The Panama Canal",
      "The Suez Canal and the Gulf of Aden",
      "The Strait of Malacca"
    ],
    "correctAnswer": 2,
    "explanation": "The Horn's strategic value comes from its position overlooking the Gulf of Aden and the Bab-el-Mandeb strait, which is the gateway between the Indian Ocean and the Red Sea, the main artery for shipping to and from the Suez Canal.",
    "subject": "geography",
    "year": 2017,
    "chapter": 1
  },
  {
    "id": "geo-2017-1-15",
    "question": "Due to Ethiopia's latitudinal extent, it experiences:",
    "options": [
      "A significant difference in time from east to west.",
      "A wide variation in daylight hours between seasons.",
      "A tropical climate with varied altitudinal modifications.",
      "A predominantly desert climate."
    ],
    "correctAnswer": 2,
    "explanation": "A country's latitude (its distance from the equator) is the primary determinant of its climate. Ethiopia's location in the tropics gives it a base tropical climate. However, its vast highlands drastically cool these temperatures, creating a wide variety of microclimates (known locally as Dega, Weyna Dega, etc.). ☀️",
    "subject": "geography",
    "year": 2017,
    "chapter": 1
  },
  {
    "id": "geo-2017-1-16",
    "question": "What is the latitudinal extent of Ethiopia?",
    "options": [
      "3° N to 15° N",
      "33° E to 48° E",
      "3° E to 15° E",
      "33° N to 48° N"
    ],
    "correctAnswer": 0,
    "explanation": "Latitude measures north-south position. Ethiopia stretches from approximately 3° North of the equator to 15° North of the equator. Option B represents its longitudinal (east-west) extent.",
    "subject": "geography",
    "year": 2017,
    "chapter": 1
  },
  {
    "id": "geo-2017-1-17",
    "question": "Which of the following is a primary disadvantage of being a landlocked country?",
    "options": [
      "Limited access to international trade routes",
      "Higher risk of volcanic activity",
      "Greater susceptibility to floods",
      "Lack of mineral resources"
    ],
    "correctAnswer": 0,
    "explanation": "A landlocked country has no direct access to the sea. This forces it to rely on neighboring countries for port access, which can significantly increase the cost of transportation and limit its access to global maritime trade. 🚫🚢",
    "subject": "geography",
    "year": 2017,
    "chapter": 1
  },
  {
    "id": "geo-2017-1-18",
    "question": "The fact that Ethiopia's climate is influenced by its proximity to the equator and its high-altitude topography is a reflection of its:",
    "options": [
      "Compactness",
      "Latitudinal location",
      "Vicinal location",
      "Both B and C"
    ],
    "correctAnswer": 1,
    "explanation": "Proximity to the equator is the definition of latitudinal location. This position determines the base amount of solar energy a region receives, establishing its fundamental climate type (in this case, tropical), which is then modified by other factors like altitude.",
    "subject": "geography",
    "year": 2017,
    "chapter": 1
  },
  {
    "id": "geo-2017-1-19",
    "question": "A major benefit of Ethiopia's large landmass is:",
    "options": [
      "It simplifies national governance and infrastructure development.",
      "It limits ethnic and cultural diversity, promoting unity.",
      "It provides a wide range of ecological zones and natural resources.",
      "It reduces the need for a large military."
    ],
    "correctAnswer": 2,
    "explanation": "A large territory typically contains a greater variety of climates, soils, and geology. This leads to a wider range of ecosystems and a higher likelihood of possessing diverse and abundant natural resources, which is a significant economic advantage. The other options describe challenges, not benefits, of a large size.",
    "subject": "geography",
    "year": 2017,
    "chapter": 1
  },
  {
    "id": "geo-2017-1-20",
    "question": "Which of the following is a disadvantage of a country's large size?",
    "options": [
      "Greater potential for agricultural output",
      "Difficulty in uniform service delivery across the entire territory",
      "Larger population size",
      "Ability to support a wider range of industries"
    ],
    "correctAnswer": 1,
    "explanation": "Governing a large territory is challenging. It is often difficult and expensive to build and maintain infrastructure (like roads, schools, and hospitals) and ensure that all citizens, especially those in remote areas, receive equitable government services.",
    "subject": "geography",
    "year": 2017,
    "chapter": 1
  },
  {
    "id": "geo-2017-1-21",
    "question": "A country with a high ratio of its boundary length to its areal coverage is considered to have a less compact shape.",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": 0,
    "explanation": "This is true. A compact shape (like a circle) encloses the maximum area with the minimum boundary. A long, irregular, or fragmented shape has a much longer boundary relative to its area. Therefore, a high boundary-to-area ratio indicates a less compact shape.",
    "subject": "geography",
    "year": 2017,
    "chapter": 1
  },
  {
    "id": "geo-2017-1-22",
    "question": "State 'X' has an area of 500,000 km² and a boundary length of 3,000 km. State 'Y' has an area of 500,000 km² and a boundary length of 4,500 km. Which state has a more compact shape?",
    "options": [
      "State 'X'",
      "State 'Y'",
      "Both are equally compact",
      "Neither is compact"
    ],
    "correctAnswer": 0,
    "explanation": "Since both states have the same area, the one with the shorter boundary length is more compact. State 'X' encloses its area with 3,000 km of border, while State 'Y' needs 4,500 km, making State 'X' more efficient and compact.",
    "subject": "geography",
    "year": 2017,
    "chapter": 1
  },
  {
    "id": "geo-2017-1-23",
    "question": "A state that completely encloses another state, such as South Africa enclosing Lesotho, is an example of what type of shape?",
    "options": [
      "Compact",
      "Protruded",
      "Perforated",
      "Fragmented"
    ],
    "correctAnswer": 2,
    "explanation": "A perforated state is one that has a \"hole\" in it, where the hole is the territory of another independent state. South Africa is \"perforated\" by Lesotho.",
    "subject": "geography",
    "year": 2017,
    "chapter": 1
  },
  {
    "id": "geo-2017-1-24",
    "question": "A country with a long, narrow strip of land extending from the main body, like Thailand, is a classic example of which type of shape?",
    "options": [
      "Elongated",
      "Protruded",
      "Fragmented",
      "Compact"
    ],
    "correctAnswer": 1,
    "explanation": "A protruded (or prorupted) state has a mostly compact main area with a long extension or \"panhandle.\" This protrusion is often created to access a resource or to separate two other states.",
    "subject": "geography",
    "year": 2017,
    "chapter": 1
  },
  {
    "id": "geo-2017-1-25",
    "question": "Which of the following describes the shape of a country that is divided into two or more parts, often by water or other countries?",
    "options": [
      "Compact",
      "Fragmented",
      "Protruded",
      "Elongated"
    ],
    "correctAnswer": 1,
    "explanation": "A fragmented state consists of several separate, non-contiguous pieces of territory. This includes archipelagos like Indonesia and the Philippines, or countries separated by another state.",
    "subject": "geography",
    "year": 2017,
    "chapter": 1
  },
  {
    "id": "geo-2017-1-26",
    "question": "A country with a shape that is roughly circular or square, with the capital city near the center, is most likely to have which type of shape?",
    "options": [
      "Elongated",
      "Protruded",
      "Compact",
      "Fragmented"
    ],
    "correctAnswer": 2,
    "explanation": "A compact shape is one where the distance from the geographic center to any point on the boundary is roughly the same. This shape is theoretically the most efficient for transportation, communication, and defense. Ethiopia is often considered a compact state.",
    "subject": "geography",
    "year": 2017,
    "chapter": 1
  },
  {
    "id": "geo-2013-2-2",
    "question": "The formation of the Ethiopian Rift Valley is a classic example of tensional forces acting on the Earth's crust. This process results in which type of faulting?",
    "options": [
      "Reverse faults, creating a horst.",
      "Strike-slip faults, creating a transform boundary.",
      "Normal faults, creating a graben.",
      "Thrust faults, creating a mountain."
    ],
    "correctAnswer": 2,
    "explanation": "The Ethiopian Rift Valley is a result of tensional forces, which pull the Earth's crust apart. This process creates normal faults, where the hanging wall moves down relative to the footwall. The downward-slipping block between two parallel normal faults forms a graben, or rift valley. The upthrown blocks on either side of the graben are called horsts.",
    "subject": "geography",
    "year": 2013,
    "chapter": 2
  },
  {
    "id": "geo-2013-2-3",
    "question": "The Ethiopian landscape is a product of both constructive and destructive forces. Which of the following is a constructive endogenic force that built up the landmass?",
    "options": [
      "Erosion by the Blue Nile River.",
      "Volcanic eruptions and lava flows.",
      "Weathering of the highlands.",
      "Deposition of sediment in a lake bed."
    ],
    "correctAnswer": 1,
    "explanation": "Volcanic eruptions and lava flows are a classic example of a constructive endogenic force. Endogenic forces originate within the Earth, and volcanism specifically builds up the landmass by adding new material to the surface, forming mountains and plateaus. . The other options are destructive exogenic forces (erosion, weathering) or depositional processes.",
    "subject": "geography",
    "year": 2013,
    "chapter": 2
  },
  {
    "id": "geo-2013-2-4",
    "question": "How does the process of mass wasting differ from erosion?",
    "options": [
      "Mass wasting involves only human activity, while erosion is a natural process.",
      "Mass wasting is the gradual movement of rock, while erosion is the rapid downhill movement of rock.",
      "Mass wasting is the gravitational downhill movement of rock and soil, while erosion is the removal of material by a mobile agent like water or wind.",
      "Mass wasting is a constructive process, while erosion is a destructive process."
    ],
    "correctAnswer": 2,
    "explanation": "The key difference lies in the agent of movement. Mass wasting is the downslope movement of rock and soil primarily due to gravity, often in a single event like a landslide or a gradual creep. Erosion is the removal and transport of material by a mobile agent such as water, wind, ice, or waves.",
    "subject": "geography",
    "year": 2013,
    "chapter": 2
  },
  {
    "id": "geo-2013-2-5",
    "question": "The high elevation of the Ethiopian plateaus is a result of a combination of volcanism and epeirogenic uplift. The latter refers to:",
    "options": [
      "The rapid folding of the crust.",
      "The sudden, localized sinking of landmass.",
      "The creation of a rift valley.",
      "Broad, regional uplift of the landmass without major folding or faulting."
    ],
    "correctAnswer": 3,
    "explanation": "Epeirogenic uplift refers to the slow, large-scale, and widespread vertical movement of the Earth's crust. It is a fundamental process in the formation of continents and plateaus, and it's distinct from orogeny, which involves mountain-building through folding and faulting. The high elevation of the Ethiopian highlands is attributed to this broad uplift, which began around 30 million years ago.",
    "subject": "geography",
    "year": 2013,
    "chapter": 2
  },
  {
    "id": "geo-2013-2-6",
    "question": "The Afar Triple Junction is a unique geological feature where three tectonic plates diverge. This process is responsible for the formation of:",
    "options": [
      "The Simien Mountains and the Ethiopian Highlands.",
      "The Ogaden Basin and the Western Escarpment.",
      "The Abay River Gorge and its tributaries.",
      "The Red Sea, the Gulf of Aden, and the Main Ethiopian Rift."
    ],
    "correctAnswer": 3,
    "explanation": "The Afar Triple Junction is the point where the Arabian, Nubian (African), and Somalian tectonic plates meet. These plates are diverging, or moving apart, from this central point. This process is creating three new oceanic basins: the Red Sea, the Gulf of Aden, and the Main Ethiopian Rift. .",
    "subject": "geography",
    "year": 2013,
    "chapter": 2
  },
  {
    "id": "geo-2013-2-7",
    "question": "The Precambrian Basement Complex rocks in Ethiopia are only found at the edges of the country's highlands and in river gorges. This is because:",
    "options": [
      "They were not affected by the subsequent tectonic activity.",
      "They were created only in those specific areas.",
      "They were buried by younger sedimentary and volcanic rocks and have only been exposed by erosion and uplift.",
      "They are made of a different type of mineral."
    ],
    "correctAnswer": 2,
    "explanation": "The Precambrian Basement Complex is the oldest rock formation in Ethiopia, representing the foundation of the continent. Over billions of years, these rocks were buried by younger sedimentary layers and volcanic flows. They are exposed today at the edges of the plateaus and in deep river gorges like the Abay (Blue Nile) because subsequent uplift and erosion have stripped away the overlying rock.",
    "subject": "geography",
    "year": 2013,
    "chapter": 2
  },
  {
    "id": "geo-2013-2-8",
    "question": "The Danakil Depression is an extreme example of a landform created by a combination of endogenic and exogenic processes. Which of the following best describes its formation?",
    "options": [
      "Erosion of a large river valley.",
      "The uplift of a horst.",
      "A rift valley formed by plate divergence, followed by a period of sediment and salt deposition.",
      "The collapse of a volcanic crater."
    ],
    "correctAnswer": 2,
    "explanation": "The Danakil Depression is a part of the Afar Depression, which is a rift valley formed by plate divergence (an endogenic process). This rifting created a basin that was repeatedly flooded by the sea and then dried up, leaving behind massive deposits of sediment and salt (exogenic processes). The continued subsidence of the basin has made it one of the lowest and hottest places on Earth.",
    "subject": "geography",
    "year": 2013,
    "chapter": 2
  },
  {
    "id": "geo-2013-2-9",
    "question": "The geological term for the broad, regional movement of a continental landmass without significant folding or faulting is:",
    "options": [
      "Orogeny",
      "Isostasy",
      "Epeirogenesis",
      "Metamorphism"
    ],
    "correctAnswer": 2,
    "explanation": "Epeirogenesis is the geological term for the vertical movement of a landmass on a large scale. It's responsible for the broad uplift of continents and plateaus, as opposed to orogeny, which is the process of mountain building through intense folding and faulting. .",
    "subject": "geography",
    "year": 2013,
    "chapter": 2
  },
  {
    "id": "geo-2013-2-10",
    "question": "The tensional forces associated with the Great Rift Valley system have not only created valleys but also:",
    "options": [
      "Folded the landmass to create mountains.",
      "Created block mountains (horsts) adjacent to the rift valley.",
      "Led to a period of extensive glaciation.",
      "Caused a global sea level rise."
    ],
    "correctAnswer": 1,
    "explanation": "The tensional forces of rifting pull the crust apart, causing some blocks to drop down (grabens) and others to be pushed up along the normal faults. These elevated blocks are known as horsts, or block mountains. The Ethiopian Highlands are a prime example of such horsts, bordering the Main Ethiopian Rift.",
    "subject": "geography",
    "year": 2013,
    "chapter": 2
  },
  {
    "id": "geo-2013-2-11",
    "question": "How do endogenic forces (specifically, plate tectonics) create the conditions for exogenic forces to shape the Ethiopian landscape?",
    "options": [
      "Endogenic forces make the landmass so flat that exogenic forces can't act.",
      "They have no relationship.",
      "Endogenic forces create landforms (like mountains and valleys), which are then acted upon by weathering, erosion, and deposition.",
      "Endogenic forces prevent erosion from occurring."
    ],
    "correctAnswer": 2,
    "explanation": "Endogenic forces (like volcanism and plate tectonics) are the builders of the landscape, creating major landforms such as mountains, plateaus, and rift valleys. Exogenic forces (like weathering, erosion, and mass wasting) are the sculptors, acting on these newly formed landforms to modify and break them down. This interplay is fundamental to shaping the Ethiopian landscape.",
    "subject": "geography",
    "year": 2013,
    "chapter": 2
  },
  {
    "id": "geo-2013-2-12",
    "question": "A geologist finds a fossil of a dinosaur in a rock layer in the Ogaden Basin. In which geological era would this rock have most likely been formed?",
    "options": [
      "Precambrian",
      "Paleozoic",
      "Mesozoic",
      "Cenozoic"
    ],
    "correctAnswer": 2,
    "explanation": "The Mesozoic Era, often called the \"Age of Reptiles,\" is the geological era when dinosaurs lived. The Ogaden Basin in southeastern Ethiopia is known for its extensive sedimentary formations from this era, which would be the most likely place to find dinosaur fossils. .",
    "subject": "geography",
    "year": 2013,
    "chapter": 2
  },
  {
    "id": "geo-2013-2-13",
    "question": "The Quaternary period is the youngest geological time scale. Why is it significant to Ethiopia's geological history?",
    "options": [
      "It is when the basement complex rocks were formed.",
      "It marks the end of the age of dinosaurs.",
      "It is the period of the most recent volcanic activity and lake formation in the Rift Valley.",
      "It is when the first mammals appeared."
    ],
    "correctAnswer": 2,
    "explanation": "The Quaternary period is the most recent period in the Cenozoic Era. In Ethiopia, it is a period of continued geological activity, including the latest phases of volcanism in the Rift Valley and the formation of the modern rift lakes, such as Lake Tana and Lake Ziway.",
    "subject": "geography",
    "year": 2013,
    "chapter": 2
  },
  {
    "id": "geo-2013-2-14",
    "question": "According to the principle of superposition, which of the following statements about the Mesozoic sedimentary layers in Ethiopia is true?",
    "options": [
      "The Hintalo Limestone is younger than the Upper Sandstone.",
      "The Adigrat Sandstone is younger than the Basement Complex.",
      "The Upper Sandstone is the youngest of the three major sedimentary formations.",
      "All three sedimentary layers were formed at the same time."
    ],
    "correctAnswer": 2,
    "explanation": "The principle of superposition states that in an undisturbed sequence of sedimentary rock layers, the oldest layer is at the bottom, and the youngest is at the top. The three major Mesozoic sedimentary formations in Ethiopia are, from oldest to youngest: the Adigrat Sandstone, the Antalo Limestone, and the Upper Sandstone. Therefore, the Upper Sandstone is the youngest.",
    "subject": "geography",
    "year": 2013,
    "chapter": 2
  },
  {
    "id": "geo-2013-2-15",
    "question": "Which radiometric dating technique would be most appropriate for dating a very old volcanic rock from the Precambrian era, and why?",
    "options": [
      "Carbon-14 dating, because it is effective on very old materials.",
      "Potassium-Argon dating, because it has a very long half-life and is suitable for dating ancient igneous rocks.",
      "Dendrochronology, because it uses tree rings to determine the age.",
      "Fission track dating, because it is only used on sedimentary rocks."
    ],
    "correctAnswer": 1,
    "explanation": "Potassium-Argon dating is ideal for dating ancient rocks because it has a very long half-life (1.25 billion years), which allows it to measure ages in the billions of years. It is particularly effective on igneous rocks, like those of the Precambrian Basement Complex. Carbon-14 dating is only useful for organic material up to about 50,000 years old.",
    "subject": "geography",
    "year": 2013,
    "chapter": 2
  },
  {
    "id": "geo-2013-2-16",
    "question": "Why are unconformities common in Ethiopia's geological record, particularly between the Precambrian and Mesozoic eras?",
    "options": [
      "Because the country's geology is very stable.",
      "Because there was continuous erosion and deposition.",
      "Because there were long periods of uplift and erosion where no new rock was being deposited.",
      "Because the rocks were all formed at the same time."
    ],
    "correctAnswer": 2,
    "explanation": "An unconformity represents a gap in the geological record. The unconformity between the Precambrian and Mesozoic eras in Ethiopia is a major one because, after the formation of the Precambrian Basement Complex, there were long periods of uplift and erosion where no new rock was being deposited. This hiatus is reflected in the geological record as a missing sequence of rocks. .",
    "subject": "geography",
    "year": 2013,
    "chapter": 2
  },
  {
    "id": "geo-2013-2-17",
    "question": "Which of the following is a geologic event that occurred latest in Ethiopia's history?",
    "options": [
      "The formation of the Precambrian Basement Complex.",
      "The deposition of the Mesozoic sedimentary layers.",
      "The formation of the Aden Series lava flows in the Afar Depression.",
      "The initial rifting that created the East African Rift System."
    ],
    "correctAnswer": 2,
    "explanation": "The formation of the Aden Series lava flows is a recent geological event in Ethiopia's history, occurring during the Quaternary period (within the last 2.6 million years). This is much more recent than the Precambrian (billions of years ago), the Mesozoic sedimentary layers (252-66 million years ago), or the initial rifting (around 30 million years ago).",
    "subject": "geography",
    "year": 2013,
    "chapter": 2
  },
  {
    "id": "geo-2013-2-18",
    "question": "The geological significance of the Pliocene epoch for Ethiopia's modern landscape is that it:",
    "options": [
      "Marked the beginning of the major phase of rifting and volcanism that shaped the highlands and rift valley.",
      "Was a period of extensive sea level rise and marine deposition.",
      "Was the age of dinosaurs.",
      "Was a period of intense glaciation."
    ],
    "correctAnswer": 0,
    "explanation": "The Pliocene epoch (around 5.3 to 2.6 million years ago) is a significant period in Ethiopia's geological history because it marked the onset of the most recent and dramatic phase of volcanism and rifting that created the modern highlands and the deep trough of the Great Rift Valley.",
    "subject": "geography",
    "year": 2013,
    "chapter": 2
  },
  {
    "id": "geo-2013-2-19",
    "question": "The Mesozoic Era in Ethiopia is mainly associated with which of the following?",
    "options": [
      "The formation of the crystalline basement rocks.",
      "The trap series lava flows.",
      "The Red Sea penetration into the Afar Depression.",
      "The deposition of extensive layers of sedimentary rock."
    ],
    "correctAnswer": 3,
    "explanation": "The Mesozoic Era (252 to 66 million years ago) in Ethiopia was characterized by the deposition of extensive sedimentary rock layers, specifically the Adigrat Sandstone, the Antalo Limestone, and the Upper Sandstone. This was a period of relative quiescence before the Cenozoic rifting and volcanism.",
    "subject": "geography",
    "year": 2013,
    "chapter": 2
  },
  {
    "id": "geo-2013-2-20",
    "question": "If the half-life of a radioactive element is 10 million years, and a rock sample contains 25% of the original parent isotope and 75% of the daughter isotope, how old is the rock?",
    "options": [
      "10 million years",
      "20 million years",
      "30 million years",
      "40 million years"
    ],
    "correctAnswer": 1,
    "explanation": "After one half-life (10 million years), a rock would have 50% of the parent isotope. After a second half-life (another 10 million years, for a total of 20 million years), it would have half of the remaining parent isotope, which is 25% of the original. The remaining 75% would have decayed into the daughter isotope.",
    "subject": "geography",
    "year": 2013,
    "chapter": 2
  },
  {
    "id": "geo-2014-2-21",
    "question": "The occurrence of metallic minerals like gold and platinum in Ethiopia is primarily associated with which type of rock?",
    "options": [
      "Precambrian Basement Complex rocks",
      "Mesozoic sedimentary rocks",
      "Cenozoic volcanic rocks",
      "Quaternary alluvial deposits"
    ],
    "correctAnswer": 0,
    "explanation": "The Precambrian Basement Complex rocks, which are the oldest in Ethiopia, are highly metamorphosed and intruded by igneous rocks. These ancient rocks are the primary host for many of Ethiopia's metallic mineral deposits, including gold, platinum, and iron ore. Subsequent erosion and weathering of these rocks have also led to alluvial deposits of these minerals in riverbeds.",
    "subject": "geography",
    "year": 2014,
    "chapter": 2
  },
  {
    "id": "geo-2014-2-22",
    "question": "The Mesozoic sedimentary layers in the Ogaden Basin are of great economic importance due to their potential for:",
    "options": [
      "Geothermal energy",
      "Gemstones like opal",
      "Fossil fuels (natural gas and oil)",
      "Metallic minerals like gold"
    ],
    "correctAnswer": 2,
    "explanation": "The Mesozoic sedimentary layers in the Ogaden Basin are composed of sandstones, limestones, and shales that were deposited in ancient marine environments. These conditions were ideal for the formation and trapping of fossil fuels, such as natural gas and oil. The presence of thick sedimentary basins makes the region a prime target for hydrocarbon exploration.",
    "subject": "geography",
    "year": 2014,
    "chapter": 2
  },
  {
    "id": "geo-2014-2-23",
    "question": "The Aden Series Lava, which is younger than the Trap Series Lava, is found in the Afar Depression. This is because:",
    "options": [
      "It was formed by a different type of volcanic activity.",
      "It is a result of compression, not tension.",
      "It is a younger, more localized eruption linked to the most recent stages of rifting.",
      "It is a sedimentary rock."
    ],
    "correctAnswer": 2,
    "explanation": "The Aden Series Lavas are a product of the most recent geological activity in the Afar Depression, occurring during the Quaternary period. They are linked to the ongoing rifting and spreading of the tectonic plates, which create localized fissures and volcanoes. The older Trap Series Lavas are more widespread and are associated with a major Cenozoic volcanic event that predates the intense rifting.",
    "subject": "geography",
    "year": 2014,
    "chapter": 2
  },
  {
    "id": "geo-2014-2-24",
    "question": "The Hintalo Limestone is a valuable resource for cement production because:",
    "options": [
      "It is a very hard rock.",
      "It is a calcium carbonate-rich sedimentary rock formed from marine organisms.",
      "It is a type of igneous rock.",
      "It is found in large, isolated deposits."
    ],
    "correctAnswer": 1,
    "explanation": "The Hintalo Limestone is a primary ingredient in cement production because of its high calcium carbonate content. The limestone's composition makes it an ideal raw material, and its widespread availability across a vast area of the Ethiopian highlands makes it an economically viable resource.",
    "subject": "geography",
    "year": 2014,
    "chapter": 2
  },
  {
    "id": "geo-2014-2-25",
    "question": "The Danakil Depression is geologically significant for its potash deposits. These deposits are a direct result of:",
    "options": [
      "The evaporation of an ancient sea in a rift valley setting.",
      "The weathering of volcanic rocks.",
      "The deposition of alluvial sediments.",
      "The cooling of magma."
    ],
    "correctAnswer": 0,
    "explanation": "The potash deposits in the Danakil Depression were formed through a process of evaporation. The Depression, being a subsiding rift valley, was repeatedly flooded by seawater from the Red Sea. When the water evaporated in the extremely hot and arid climate, it left behind thick layers of salt and other evaporite minerals, including potash, a vital fertilizer ingredient.",
    "subject": "geography",
    "year": 2014,
    "chapter": 2
  },
  {
    "id": "geo-2014-2-26",
    "question": "The gemstone Opal found in the Wadla Delanta area is a product of which specific geological condition?",
    "options": [
      "The metamorphism of ancient sedimentary rocks.",
      "Hydrothermal activity within volcanic rocks, which deposits silica.",
      "The erosion of a riverbed.",
      "The compression of a tectonic plate."
    ],
    "correctAnswer": 1,
    "explanation": "Ethiopian opal is known as \"Welo opal\" and is found in the country's volcanic highlands. It forms when silica-rich water from hydrothermal activity (heated groundwater) fills cracks and voids in volcanic rock. The water slowly evaporates, leaving behind a gel-like silica that hardens to form opal.",
    "subject": "geography",
    "year": 2014,
    "chapter": 2
  },
  {
    "id": "geo-2014-2-27",
    "question": "A typical geological cross-section of the Ethiopian Highlands, from the oldest at the bottom to the youngest at the top, would be:",
    "options": [
      "Precambrian Basement Complex -> Mesozoic Sedimentary Rocks -> Cenozoic Trap Series Lavas",
      "Cenozoic Trap Series Lavas -> Mesozoic Sedimentary Rocks -> Precambrian Basement Complex",
      "Mesozoic Sedimentary Rocks -> Cenozoic Trap Series Lavas -> Precambrian Basement Complex",
      "Precambrian Basement Complex -> Cenozoic Trap Series Lavas -> Mesozoic Sedimentary Rocks"
    ],
    "correctAnswer": 0,
    "explanation": "This sequence follows the geological principle of superposition, where the oldest layers are at the bottom and the youngest are on top. The Precambrian Basement Complex is the oldest bedrock. It was subsequently covered by Mesozoic sedimentary rocks as the land was submerged by a shallow sea. Finally, the Cenozoic Trap Series Lavas flowed on top of these older formations during massive volcanic eruptions.",
    "subject": "geography",
    "year": 2014,
    "chapter": 2
  },
  {
    "id": "geo-2014-2-28",
    "question": "The East African Rift System is directly responsible for Ethiopia's potential for geothermal energy because:",
    "options": [
      "It is a zone of high seismic activity.",
      "It is a region of high rainfall.",
      "It is a zone of crustal thinning, allowing magma and heat to rise close to the surface.",
      "It is a region with a high concentration of sedimentary rocks."
    ],
    "correctAnswer": 2,
    "explanation": "The East African Rift System is a divergent plate boundary where the Earth's crust is being stretched and thinned. This thinning allows heat from the mantle, in the form of magma, to rise closer to the surface. This high geothermal gradient creates vast reservoirs of underground hot water and steam, which can be harnessed for geothermal energy production. .",
    "subject": "geography",
    "year": 2014,
    "chapter": 2
  },
  {
    "id": "geo-2014-2-29",
    "question": "The Adola region is a major gold mining area in southern Ethiopia, whereas platinum is mined at Yubdo. This difference in mineral deposits is primarily due to:",
    "options": [
      "Different types of Precambrian host rocks and geological processes.",
      "The age of the rocks; Adola rocks are older.",
      "The altitude of the regions.",
      "The climate of the regions."
    ],
    "correctAnswer": 0,
    "explanation": "The presence of specific minerals is determined by the host rock and the geological processes that formed them. The gold in the Adola region is found in specific metamorphic rocks within the Precambrian Basement Complex, while the platinum at Yubdo is found in ultramafic rocks that were part of a different geological process.",
    "subject": "geography",
    "year": 2014,
    "chapter": 2
  },
  {
    "id": "geo-2014-2-30",
    "question": "The discovery of coal deposits in some parts of Ethiopia, such as the Chilga area, is associated with volcanic rock. This is possible because:",
    "options": [
      "The volcanic eruptions melted the coal deposits.",
      "The coal-forming swamp environment was buried and preserved by later volcanic ash and lava flows.",
      "Coal is a type of volcanic rock.",
      "The volcanic eruptions created the coal."
    ],
    "correctAnswer": 1,
    "explanation": "Coal is a sedimentary rock formed from the burial and compression of ancient plant matter in a swampy environment. In areas like Chilga, the coal-forming swamps were located in valleys or basins. Subsequent volcanic eruptions buried these swamps with thick layers of ash and lava, which served to protect the organic material from erosion and contributed to its transformation into coal. The volcanic rock is not what created the coal, but rather what preserved it.",
    "subject": "geography",
    "year": 2014,
    "chapter": 2
  },
  {
    "id": "geo-2015-2-6",
    "question": "Why is \"sinking of the landmass\" considered an endogenic process?",
    "options": [
      "It is caused by external forces like the weight of glaciers.",
      "It is a slow process that doesn't involve plate tectonics.",
      "It is caused by internal forces such as crustal down-warping or isostatic adjustment.",
      "It is an effect of erosion and deposition, which are exogenic."
    ],
    "correctAnswer": 2,
    "explanation": "The sinking of the landmass is an endogenic process because it is caused by internal forces such as crustal down-warping or isostatic adjustment (the vertical movement of the crust in response to the removal or addition of a load, like a glacier or a lake). These forces operate from within the Earth's lithosphere.",
    "subject": "geography",
    "year": 2015,
    "chapter": 2
  },
  {
    "id": "geo-2015-2-7",
    "question": "A geochronologist finds a rock sample with a parent-to-daughter isotope ratio of 1:15. If the half-life of the parent isotope is 2 million years, what is the age of the rock?",
    "options": [
      "2 million years",
      "4 million years",
      "6 million years",
      "8 million years"
    ],
    "correctAnswer": 3,
    "explanation": "With a parent-to-daughter isotope ratio of 1:15, a geochronologist would calculate that four half-lives have passed. After 1 half-life, the ratio is 1:1 (50% parent, 50% daughter). After 2 half-lives, the ratio is 1:3 (25% parent, 75% daughter). After 3 half-lives, the ratio is 1:7 (12.5% parent, 87.5% daughter). After 4 half-lives, the ratio is 1:15 (6.25% parent, 93.75% daughter). Given a half-life of 2 million years, the rock's age is 2 million years x 4 = 8 million years.",
    "subject": "geography",
    "year": 2015,
    "chapter": 2
  },
  {
    "id": "geo-2015-2-8",
    "question": "Why is Carbon-14 dating an ineffective method for dating the Precambrian Basement Complex rocks of Ethiopia?",
    "options": [
      "It is only accurate for dating igneous rocks.",
      "The half-life of Carbon-14 is too long for ancient rocks.",
      "Carbon-14 is not found in rock formations.",
      "The half-life of Carbon-14 is too short to measure the age of such ancient rocks."
    ],
    "correctAnswer": 3,
    "explanation": "Carbon-14 dating is ineffective for dating the Precambrian Basement Complex rocks of Ethiopia because the half-life of Carbon-14 (5,730 years) is far too short to measure the age of such ancient rocks, which are billions of years old. Carbon-14 is only used for dating organic materials up to approximately 50,000 years old.",
    "subject": "geography",
    "year": 2015,
    "chapter": 2
  },
  {
    "id": "geo-2015-2-9",
    "question": "A geologist uses the Potassium-Argon technique to date a volcanic rock. The sample has been exposed to high temperatures from a later geothermal event. How would this exposure likely affect the calculated age of the rock?",
    "options": [
      "It would make the rock appear older than it actually is.",
      "It would make the rock appear younger than it actually is.",
      "It would have no effect on the calculated age.",
      "It would make the rock appear older or younger, depending on the temperature."
    ],
    "correctAnswer": 1,
    "explanation": "High-temperature exposure from a later geothermal event would cause argon gas to escape from the rock sample. Since the Potassium-Argon dating technique relies on the accumulation of argon as potassium decays, the loss of argon would make the rock appear younger than it actually is.",
    "subject": "geography",
    "year": 2015,
    "chapter": 2
  },
  {
    "id": "geo-2015-2-10",
    "question": "Which geological era is marked by the first appearance of abundant hard-shelled organisms in the fossil record?",
    "options": [
      "Precambrian",
      "Paleozoic",
      "Mesozoic",
      "Cenozoic"
    ],
    "correctAnswer": 1,
    "explanation": "The Paleozoic Era is marked by the first appearance of abundant hard-shelled organisms in the fossil record. This period is often called the \"Age of Ancient Life\" and began with the Cambrian Explosion.",
    "subject": "geography",
    "year": 2015,
    "chapter": 2
  },
  {
    "id": "geo-2015-2-11",
    "question": "The Phanerozoic Eon is composed of three eras. What are they?",
    "options": [
      "Precambrian, Paleozoic, Mesozoic",
      "Paleozoic, Mesozoic, Cenozoic",
      "Hadean, Archean, Proterozoic",
      "Paleozoic, Tertiary, Quaternary"
    ],
    "correctAnswer": 1,
    "explanation": "The Phanerozoic Eon is the current geological eon and is composed of the three eras: Paleozoic, Mesozoic, and Cenozoic.",
    "subject": "geography",
    "year": 2015,
    "chapter": 2
  },
  {
    "id": "geo-2015-2-12",
    "question": "What is the relationship between an era and a period in the geological time scale?",
    "options": [
      "A period is a subdivision of an era.",
      "An era is a subdivision of a period.",
      "They are the same length of time.",
      "A period is a subdivision of an epoch."
    ],
    "correctAnswer": 0,
    "explanation": "In the geological time scale, a period is a subdivision of an era. For example, the Cenozoic Era is subdivided into the Paleogene, Neogene, and Quaternary periods.",
    "subject": "geography",
    "year": 2015,
    "chapter": 2
  },
  {
    "id": "geo-2015-2-13",
    "question": "What is the geological significance of the Cenozoic Era in Ethiopia, particularly concerning its topography?",
    "options": [
      "It is responsible for the formation of the Precambrian Basement Complex.",
      "It is the era when the major sedimentary rocks of the Ogaden basin were formed.",
      "It is the era of massive volcanism and rifting that created the current land configuration.",
      "It is the era when the first fossil fuels were deposited."
    ],
    "correctAnswer": 2,
    "explanation": "The Cenozoic Era is geologically significant for Ethiopia because it was the era of massive volcanism and rifting that created the country's current land configuration, including the high plateaus and the Great Rift Valley.",
    "subject": "geography",
    "year": 2015,
    "chapter": 2
  },
  {
    "id": "geo-2015-2-14",
    "question": "The Precambrian Basement Complex rocks are mainly associated with the formation of what type of geological feature?",
    "options": [
      "Sedimentary basins",
      "Fossil fuel deposits",
      "Metallic mineral deposits",
      "The East African Rift Valley"
    ],
    "correctAnswer": 2,
    "explanation": "The Precambrian Basement Complex rocks are the oldest in Ethiopia and are primarily associated with the formation of metallic mineral deposits. These ancient, metamorphosed rocks host valuable minerals such as gold, platinum, and iron.",
    "subject": "geography",
    "year": 2015,
    "chapter": 2
  },
  {
    "id": "geo-2015-2-15",
    "question": "Arrange the following Ethiopian rock formations in chronological order from oldest to youngest.",
    "options": [
      "Basement Complex Rocks, Adigrat Sandstone, Hintalo Limestone, Trap Series Lava",
      "Trap Series Lava, Adigrat Sandstone, Hintalo Limestone, Basement Complex Rocks",
      "Hintalo Limestone, Adigrat Sandstone, Trap Series Lava, Basement Complex Rocks",
      "Basement Complex Rocks, Trap Series Lava, Adigrat Sandstone, Hintalo Limestone"
    ],
    "correctAnswer": 0,
    "explanation": "The correct chronological order from oldest to youngest is: Basement Complex Rocks (Precambrian), Adigrat Sandstone (Mesozoic), Hintalo Limestone (Mesozoic), and Trap Series Lava (Cenozoic). This sequence follows the principle of superposition.",
    "subject": "geography",
    "year": 2015,
    "chapter": 2
  },
  {
    "id": "geo-2015-2-16",
    "question": "Why is the Mesozoic Era considered the \"Age of Sedimentary Rock Formation\" in Ethiopia?",
    "options": [
      "It was a time of intense volcanic activity.",
      "It was a period of extensive marine transgressions and regressions.",
      "It was the era of the first appearance of mammals.",
      "It was a time of massive mountain building."
    ],
    "correctAnswer": 1,
    "explanation": "The Mesozoic Era (252 to 66 million years ago) in Ethiopia was characterized by the deposition of extensive sedimentary rock layers, specifically the Adigrat Sandstone, the Antalo Limestone, and the Upper Sandstone. This was a period of relative quiescence before the Cenozoic rifting and volcanism.",
    "subject": "geography",
    "year": 2015,
    "chapter": 2
  },
  {
    "id": "geo-2015-2-17",
    "question": "The Adigrat Sandstone is formed by the transgression of the sea, while the Upper Sandstone is formed by the regression of the sea. What is the key difference between these two processes?",
    "options": [
      "Transgression is the rise of sea level, and regression is the fall of sea level.",
      "Transgression is the fall of sea level, and regression is the rise of sea level.",
      "Transgression is a river depositing sand, and regression is a sea depositing sand.",
      "They are different terms for the same process."
    ],
    "correctAnswer": 0,
    "explanation": "The key difference between marine transgression and regression is the direction of sea-level change. Transgression is the rise of sea level, which causes the sea to advance inland. Regression is the fall of sea level, causing the sea to withdraw.",
    "subject": "geography",
    "year": 2015,
    "chapter": 2
  },
  {
    "id": "geo-2015-2-18",
    "question": "The statement \"Hintalo limestone is formed by the regression of the sea\" is incorrect. What geological process is responsible for its formation?",
    "options": [
      "Volcanic activity",
      "Deposition of river sediments",
      "Deposition of marine organisms in a shallow sea",
      "Glacial activity"
    ],
    "correctAnswer": 2,
    "explanation": "The Hintalo limestone is formed by the deposition of marine organisms in a shallow sea. These organisms' shells and skeletons, rich in calcium carbonate, accumulated on the seabed and were compacted over time to form limestone. This process is a key part of the Mesozoic marine transgression.",
    "subject": "geography",
    "year": 2015,
    "chapter": 2
  },
  {
    "id": "geo-2015-2-19",
    "question": "What evidence supports the idea that the Adigrat Sandstone was formed in a shallow, coastal environment?",
    "options": [
      "The presence of volcanic rocks.",
      "The presence of deep-sea fossils.",
      "The presence of cross-bedding and fossil wood fragments.",
      "The presence of crystalline basement rocks."
    ],
    "correctAnswer": 2,
    "explanation": "The presence of cross-bedding and fossil wood fragments supports the idea that the Adigrat Sandstone was formed in a shallow, coastal environment. Cross-bedding is a feature of wind or water-deposited sand, and fossil wood indicates a nearby landmass.",
    "subject": "geography",
    "year": 2015,
    "chapter": 2
  },
  {
    "id": "geo-2015-2-20",
    "question": "Why are the oldest sedimentary rocks in Ethiopia found in the southeast and the youngest in the northwest?",
    "options": [
      "Because the sea transgressed from the northwest to the southeast.",
      "Because the sea regressed from the southeast to the northwest.",
      "Because the landmass was uplifted in the southeast first.",
      "Because the Rift Valley formed from the northwest to the southeast."
    ],
    "correctAnswer": 0,
    "explanation": "The oldest sedimentary rocks in Ethiopia are found in the southeast and the youngest in the northwest because the sea transgressed from the northwest to the southeast.",
    "subject": "geography",
    "year": 2015,
    "chapter": 2
  },
  {
    "id": "geo-2015-2-21",
    "question": "Explain the difference between Trap Series Lava and Aden Series Lava.",
    "options": [
      "Trap series is older and widespread, while Aden series is younger and confined to the Rift Valley.",
      "Trap series is younger and confined to the Rift Valley, while Aden series is older and widespread.",
      "Trap series is a result of endogenic forces, while Aden series is exogenic.",
      "They are the same type of lava, just different names."
    ],
    "correctAnswer": 0,
    "explanation": "The main difference between Trap Series and Aden Series Lavas is their age and distribution. Trap Series Lava is older (Oligocene to Miocene) and widespread, covering the vast plateaus. Aden Series Lava is younger (Pliocene to Quaternary) and is confined to the Rift Valley, representing the most recent volcanism.",
    "subject": "geography",
    "year": 2015,
    "chapter": 2
  },
  {
    "id": "geo-2015-2-22",
    "question": "The separation of the Arabian Peninsula from the Horn of Africa is a direct result of which specific geological process?",
    "options": [
      "A convergent plate boundary.",
      "A transform plate boundary.",
      "A divergent plate boundary.",
      "Orogeny."
    ],
    "correctAnswer": 2,
    "explanation": "The separation of the Arabian Peninsula from the Horn of Africa is a direct result of a divergent plate boundary. This type of boundary occurs where two tectonic plates move away from each other, leading to the creation of new crust and the formation of rift valleys and oceans.",
    "subject": "geography",
    "year": 2015,
    "chapter": 2
  },
  {
    "id": "geo-2015-2-23",
    "question": "The Afar Triangle is a unique geological feature known as a triple junction. What three tectonic plates are meeting in this location?",
    "options": [
      "African, Eurasian, and Indian Plates",
      "Arabian, Nubian, and Somali Plates",
      "South American, African, and Antarctic Plates",
      "Pacific, North American, and Eurasian Plates"
    ],
    "correctAnswer": 1,
    "explanation": "The Afar Triangle is a unique geological feature known as a triple junction. The three tectonic plates meeting in this location are the Arabian, Nubian, and Somali Plates. They are all diverging from this point, forming the Red Sea, the Gulf of Aden, and the Main Ethiopian Rift.",
    "subject": "geography",
    "year": 2015,
    "chapter": 2
  },
  {
    "id": "geo-2015-2-24",
    "question": "How did the Great Rift Valley's formation physically alter the drainage patterns and river systems of the Ethiopian Highlands?",
    "options": [
      "It created new river systems flowing from the highlands into the valley.",
      "It blocked the flow of all rivers, causing them to dry up.",
      "It created a single large river that flows north-south.",
      "It reversed the flow of all rivers in the region."
    ],
    "correctAnswer": 0,
    "explanation": "The Great Rift Valley's formation physically altered the drainage patterns and river systems of the Ethiopian Highlands by creating new river systems flowing from the highlands into the valley. The faulting and uplift of the land created steep escarpments and basins that directed water flow into the newly formed rift, where lakes and internal drainage systems developed.",
    "subject": "geography",
    "year": 2015,
    "chapter": 2
  },
  {
    "id": "geo-2015-2-25",
    "question": "The Ethiopian Highlands are often described as a \"volcanic plateau.\" What two major geological events are responsible for this description?",
    "options": [
      "Precambrian folding and Mesozoic sedimentation.",
      "Cenozoic uplift and widespread flood basalt volcanism.",
      "Glacial erosion and river deposition.",
      "Isostatic rebound and epeirogenesis."
    ],
    "correctAnswer": 1,
    "explanation": "The Ethiopian Highlands are described as a \"volcanic plateau\" because their formation is a result of two major geological events: Cenozoic uplift and widespread flood basalt volcanism. The uplift raised the entire region, and the massive outpourings of basaltic lava during the Oligocene-Miocene epochs formed the extensive plateaus that sit atop the older rock formations.",
    "subject": "geography",
    "year": 2015,
    "chapter": 2
  },
  {
    "id": "geo-2015-2-26",
    "question": "The Ethiopian Rift Valley is a key example of a geological feature formed by tensional forces. What does this mean in terms of plate movement?",
    "options": [
      "The plates are colliding.",
      "The plates are sliding past each other.",
      "The plates are pulling apart.",
      "The plates are stationary."
    ],
    "correctAnswer": 2,
    "explanation": "The Ethiopian Rift Valley is a key example of a geological feature formed by tensional forces, which means the plates are pulling apart. This pulling action stretches and thins the Earth's crust, leading to normal faulting and the subsidence of the central rift valley.",
    "subject": "geography",
    "year": 2015,
    "chapter": 2
  },
  {
    "id": "geo-2016-2-7",
    "question": "The formation of the Simien Mountains and the Rift Valley are both the result of endogenic forces, but they are fundamentally different in their tectonic mechanism. What is this difference?",
    "options": [
      "The Simien Mountains were formed by volcanism and uplift, while the Rift Valley was formed by rifting and subsidence.",
      "The Simien Mountains were formed by compression, while the Rift Valley was formed by tension.",
      "The Simien Mountains were formed by erosion, while the Rift Valley was formed by deposition.",
      "They were formed by the same mechanism."
    ],
    "correctAnswer": 1,
    "explanation": "While both are shaped by internal forces, their tectonic mechanisms are different. The Simien Mountains are part of the larger Ethiopian Highlands, which were formed by epeirogenic uplift and vast volcanic eruptions, primarily in the Cenozoic era. The Rift Valley, on the other hand, is a deep trough formed by tensional forces pulling the crust apart, leading to rifting and the downward movement (subsidence) of the land.",
    "subject": "geography",
    "year": 2016,
    "chapter": 2
  },
  {
    "id": "geo-2016-2-8",
    "question": "Why are Precambrian rocks considered to have the greatest potential for metallic mineral deposits in Ethiopia?",
    "options": [
      "They are the youngest rocks in the country.",
      "They were formed under conditions of high heat and pressure, which is favorable for mineral concentration.",
      "They are composed of sedimentary rocks which are rich in metals.",
      "They are only found in the Rift Valley, where mineral deposits are most common."
    ],
    "correctAnswer": 1,
    "explanation": "The Precambrian rocks of Ethiopia, also known as the Basement Complex, were formed under extreme conditions of high heat and pressure. These conditions are conducive to metamorphism and hydrothermal activity, processes that concentrate metallic minerals like gold, platinum, and iron ore into economically viable deposits. .",
    "subject": "geography",
    "year": 2016,
    "chapter": 2
  },
  {
    "id": "geo-2016-2-9",
    "question": "Explain why the Mesozoic sedimentary rocks, rather than the Precambrian ones, have the highest potential for oil and gas deposits in Ethiopia.",
    "options": [
      "They were formed in ancient volcanic vents.",
      "They were deposited in deep marine basins, which are ideal for hydrocarbon formation.",
      "They contain metallic minerals that are precursors to fossil fuels.",
      "They are the oldest rocks in the country."
    ],
    "correctAnswer": 1,
    "explanation": "The Mesozoic sedimentary rocks (such as the Adigrat Sandstone, Antalo Limestone, and Upper Sandstone) were deposited in ancient marine environments when the African continent was submerged. These basins contained vast amounts of organic matter from marine organisms. Over millions of years, the burial and heating of this organic matter transformed it into hydrocarbons like oil and gas.",
    "subject": "geography",
    "year": 2016,
    "chapter": 2
  },
  {
    "id": "geo-2016-2-10",
    "question": "Which of the following is a key mineral found in the Afar Depression, directly related to the region's unique geology?",
    "options": [
      "Gold",
      "Platinum",
      "Potash",
      "Iron ore"
    ],
    "correctAnswer": 2,
    "explanation": "The Afar Depression is geologically unique because it is a low-lying rift valley. In the past, it was repeatedly flooded by seawater from the Red Sea, which then evaporated in the hot climate, leaving behind thick deposits of evaporite minerals. Potash is a significant evaporite mineral found in these deposits, making the region a world-class source of this valuable fertilizer.",
    "subject": "geography",
    "year": 2016,
    "chapter": 2
  },
  {
    "id": "geo-2016-2-11",
    "question": "What is the primary economic importance of the Danakil Depression for Ethiopia's economy, other than geothermal energy?",
    "options": [
      "Rain-fed agriculture",
      "Livestock grazing",
      "Salt and potash extraction",
      "Hydroelectric power generation"
    ],
    "correctAnswer": 2,
    "explanation": "The Danakil Depression, a part of the Afar Depression, is known for its vast deposits of salt and potash. These minerals are extracted by local miners and are of growing economic importance for Ethiopia, particularly for the production of fertilizers.",
    "subject": "geography",
    "year": 2016,
    "chapter": 2
  },
  {
    "id": "geo-2016-2-12",
    "question": "The Ogaden Basin is geologically significant for its potential to contain what type of resource?",
    "options": [
      "Metallic minerals",
      "Gemstones",
      "Petroleum and natural gas",
      "Geothermal energy"
    ],
    "correctAnswer": 2,
    "explanation": "The Ogaden Basin is a large sedimentary basin in southeastern Ethiopia. Its geological history, dominated by thick layers of Mesozoic sedimentary rocks, makes it a prime location for petroleum and natural gas resources. .",
    "subject": "geography",
    "year": 2016,
    "chapter": 2
  },
  {
    "id": "geo-2016-2-13",
    "question": "Why is rain-fed agriculture not a major economic importance of the Afar Triangle?",
    "options": [
      "The region is too cold.",
      "The region has a low and erratic rainfall.",
      "The soil is not fertile.",
      "The land is too mountainous."
    ],
    "correctAnswer": 1,
    "explanation": "The Afar Triangle is a desert region characterized by an extremely hot and dry climate. The rainfall is very low and unpredictable, making rain-fed agriculture highly unfeasible. The economy of the region is largely based on pastoralism and mining.",
    "subject": "geography",
    "year": 2016,
    "chapter": 2
  },
  {
    "id": "geo-2016-2-14",
    "question": "The Precambrian basement rocks of Ethiopia are associated with which type of valuable minerals?",
    "options": [
      "Coal and natural gas",
      "Limestone and sandstone",
      "Gold and platinum",
      "Salt and potash"
    ],
    "correctAnswer": 2,
    "explanation": "As the oldest and most metamorphosed rocks in Ethiopia, the Precambrian basement rocks are the primary source for valuable metallic minerals. They host deposits of gold and platinum in regions like Adola and Yubdo, respectively.",
    "subject": "geography",
    "year": 2016,
    "chapter": 2
  },
  {
    "id": "geo-2016-2-15",
    "question": "The statement \"The highest and lowest points are in Amhara and Afar regional states, respectively\" is correct. What does this indicate about the overall topography and geological history of Ethiopia?",
    "options": [
      "The entire country is a uniform plateau.",
      "The country's topography is a result of a combination of ancient uplift and recent rifting.",
      "The country's topography is only a result of exogenic forces.",
      "The country is not geologically active."
    ],
    "correctAnswer": 1,
    "explanation": "This statement highlights the dramatic geological contrasts in Ethiopia. The high elevation of the Simien Mountains in the Amhara region is a result of ancient volcanic activity and broad continental uplift. The very low elevation of the Afar Depression is a result of recent and ongoing rifting (the pulling apart of tectonic plates). The juxtaposition of these features shows a dynamic geological history.",
    "subject": "geography",
    "year": 2016,
    "chapter": 2
  },
  {
    "id": "geo-2016-2-16",
    "question": "Why is the geological stability of the Rift Valley region a false statement?",
    "options": [
      "Because it is a region of active erosion and deposition.",
      "Because it is a region of ongoing volcanic and seismic activity.",
      "Because it is a region of ancient, stable crystalline rocks.",
      "Because it is a region of low elevation."
    ],
    "correctAnswer": 1,
    "explanation": "The Rift Valley is anything but stable. It is a zone of a divergent plate boundary, where the crust is being stretched and thinned. This process is accompanied by frequent earthquakes (seismic activity) and volcanic eruptions, making it one of the most geologically dynamic regions in the world.",
    "subject": "geography",
    "year": 2016,
    "chapter": 2
  },
  {
    "id": "geo-2016-2-17",
    "question": "How does the geological makeup of the Ethiopian Highlands contribute to their high agricultural potential?",
    "options": [
      "The sedimentary rocks are rich in nutrients.",
      "The volcanic soils are deep and fertile.",
      "The crystalline basement rocks are easy to farm.",
      "The limestone deposits prevent soil erosion."
    ],
    "correctAnswer": 1,
    "explanation": "The Ethiopian Highlands are covered by vast layers of Cenozoic volcanic rocks (the Trap Series Lavas). The weathering and erosion of these basaltic lavas produce deep, nutrient-rich, and fertile soils that are ideal for agriculture. This is a primary reason why the highlands are the most agriculturally productive region in the country.",
    "subject": "geography",
    "year": 2016,
    "chapter": 2
  },
  {
    "id": "geo-2016-2-18",
    "question": "The Great Rift Valley in Ethiopia is a continuous feature from the Afar Triangle to the Kenyan border. What does this indicate about the plate boundary it represents?",
    "options": [
      "It is a single, active divergent plate boundary.",
      "It is a series of extinct volcanoes.",
      "It is a single, active convergent plate boundary.",
      "It is a fault line that is no longer active."
    ],
    "correctAnswer": 0,
    "explanation": "The fact that the Rift Valley is a continuous feature indicates that it is a single, unified plate boundary where the Somalian and Nubian plates are pulling apart. The ongoing seismic and volcanic activity along its entire length confirms that it is an active and not an extinct boundary.",
    "subject": "geography",
    "year": 2016,
    "chapter": 2
  },
  {
    "id": "geo-2016-2-19",
    "question": "The Ethiopian Rift Valley is a region of significant sedimentary rock deposits. Where do these sediments come from?",
    "options": [
      "From the erosion of the surrounding highlands.",
      "From ancient marine transgressions.",
      "From volcanic eruptions.",
      "From glacial activity."
    ],
    "correctAnswer": 0,
    "explanation": "The Ethiopian Rift Valley acts as a basin for sediment deposition. The high and steep surrounding highlands are subject to intense erosion by rivers and rainfall. This eroded material is transported and deposited in the low-lying Rift Valley, creating thick layers of sedimentary rock.",
    "subject": "geography",
    "year": 2016,
    "chapter": 2
  },
  {
    "id": "geo-2016-2-20",
    "question": "The frequent volcanic eruptions in the Afar Triangle are a direct result of which geological process?",
    "options": [
      "Subduction",
      "Tectonic plate divergence",
      "Compression",
      "Folding"
    ],
    "correctAnswer": 1,
    "explanation": "The frequent volcanic eruptions in the Afar Triangle are a direct consequence of tectonic plate divergence. As the plates pull apart, the Earth's crust thins, creating weaknesses that allow magma from the mantle to rise to the surface, leading to volcanic activity. .",
    "subject": "geography",
    "year": 2016,
    "chapter": 2
  },
  {
    "id": "geo-2016-2-21",
    "question": "Why are the Afar Triangle and the Great Rift Valley both home to a chain of large lakes?",
    "options": [
      "They are all ancient glacial lakes.",
      "They are depressions formed by rifting that have filled with water.",
      "They are artificial lakes created by dams.",
      "They are a result of isostatic rebound."
    ],
    "correctAnswer": 1,
    "explanation": "The Rift Valley and the Afar Triangle are fundamentally grabens, or down-faulted depressions. These basins act as natural collecting points for water from surrounding rivers and rainfall, leading to the formation of a chain of lakes. .",
    "subject": "geography",
    "year": 2016,
    "chapter": 2
  },
  {
    "id": "geo-2016-2-22",
    "question": "The Simien Mountains are a result of tectonic uplift and volcanic activity. How does this differ from a mountain range formed by a convergent plate boundary?",
    "options": [
      "Convergent plate boundaries form mountains through tension and subsidence.",
      "Convergent plate boundaries form mountains through compression and folding.",
      "Convergent plate boundaries form mountains through volcanic activity and erosion.",
      "Convergent plate boundaries form mountains through isostatic rebound."
    ],
    "correctAnswer": 1,
    "explanation": "Mountains formed at convergent plate boundaries, like the Himalayas, are created when two plates collide. This collision results in intense compression and folding of the Earth's crust, pushing up the landmass into massive mountain ranges. This is a very different process from the uplift and volcanic accumulation that formed the Simien Mountains.",
    "subject": "geography",
    "year": 2016,
    "chapter": 2
  },
  {
    "id": "geo-2016-2-23",
    "question": "The Red Sea and the Gulf of Aden are considered to be young oceanic crust. Why?",
    "options": [
      "They are old continental crust that has been exposed.",
      "They are areas where seafloor spreading is actively occurring.",
      "They are deep marine basins that have been uplifted.",
      "They are regions of extensive sedimentary deposition."
    ],
    "correctAnswer": 1,
    "explanation": "The Red Sea and the Gulf of Aden are considered to be areas of young oceanic crust because they are active divergent plate boundaries. As the plates pull apart, magma rises from the mantle and solidifies to form new seafloor, a process called seafloor spreading.",
    "subject": "geography",
    "year": 2016,
    "chapter": 2
  },
  {
    "id": "geo-2016-2-24",
    "question": "Explain how the formation of the East African Rift System is a perfect example of a divergent plate boundary.",
    "options": [
      "It shows plates colliding and forming mountains.",
      "It shows plates sliding past each other.",
      "It shows plates pulling apart, creating a rift valley and new crust.",
      "It shows an oceanic plate subducting under a continental plate."
    ],
    "correctAnswer": 2,
    "explanation": "The East African Rift System is a textbook example of a divergent plate boundary. It is a region where the Nubian and Somalian plates are slowly pulling apart, which is causing the crust to stretch, thin, and subside. This process creates the characteristic rift valley and allows for the upwelling of magma and the formation of new crust.",
    "subject": "geography",
    "year": 2016,
    "chapter": 2
  },
  {
    "id": "geo-2016-2-25",
    "question": "The topography of Ethiopia is largely determined by the Cenozoic era, not the Precambrian era. Explain this conceptual difference.",
    "options": [
      "Precambrian rocks are only found underground, so they don't affect topography.",
      "The Precambrian era was a time of mountain building, but later erosion created the current topography.",
      "The Precambrian era created the ancient basement, but the Cenozoic era's volcanism and rifting shaped the modern landscape.",
      "The Cenozoic era was a time of little geological activity, so the topography is very old."
    ],
    "correctAnswer": 2,
    "explanation": "This is the correct conceptual difference. The Precambrian era formed the ancient, crystalline bedrock (the Basement Complex) that underlies the country. However, the modern topography of Ethiopia—the high plateaus, the Great Rift Valley, and the volcanic highlands—was formed much later during the Cenozoic era due to massive volcanic eruptions and the onset of rifting.",
    "subject": "geography",
    "year": 2016,
    "chapter": 2
  },
  {
    "id": "geo-2016-2-26",
    "question": "What is the difference between a geological period and an epoch?",
    "options": [
      "A period is a subdivision of an epoch.",
      "An epoch is a subdivision of a period.",
      "They are both the same length of time.",
      "They both have the same number of subdivisions."
    ],
    "correctAnswer": 1,
    "explanation": "In the geological time scale, a period is a major subdivision of an era. An epoch is a smaller, more specific subdivision of a period. For example, the Holocene and Pleistocene epochs are subdivisions of the Quaternary period. .",
    "subject": "geography",
    "year": 2016,
    "chapter": 2
  },
  {
    "id": "geo-2016-2-27",
    "question": "The Adigrat Sandstone is described as being \"thicker and older in the southeast.\" What does this tell us about the direction of the Mesozoic sea's transgression?",
    "options": [
      "The sea transgressed from the northwest.",
      "The sea transgressed from the southeast.",
      "The sea was only present in the northwest.",
      "The sea was only present in the southeast."
    ],
    "correctAnswer": 1,
    "explanation": "The Adigrat Sandstone was deposited by an ancient sea that advanced over the African continent. The fact that the sandstone is thicker and older in the southeast indicates that this was the direction from which the sea encroached. The sediments were deposited first and for a longer period in that region before the sea advanced further into the continent.",
    "subject": "geography",
    "year": 2016,
    "chapter": 2
  },
  {
    "id": "geo-2016-2-28",
    "question": "All of the following statements about the Mesozoic sedimentary rocks of Ethiopia are correct except?",
    "options": [
      "Adigrat sandstone is the oldest sedimentary rock.",
      "Hintalo limestone is formed by marine transgression.",
      "Upper sandstone is the youngest of the sedimentary rocks.",
      "Upper sandstone is laid over the Adigrat sandstone."
    ],
    "correctAnswer": 3,
    "explanation": "The statement that the Upper Sandstone is laid directly over the Adigrat Sandstone is incorrect. The three main Mesozoic sedimentary layers are, in order from oldest to youngest: Adigrat Sandstone, Antalo (Hintalo) Limestone, and then the Upper Sandstone. The limestone layer separates the two sandstone formations.",
    "subject": "geography",
    "year": 2016,
    "chapter": 2
  },
  {
    "id": "geo-2016-2-29",
    "question": "Which of the following geological ages of earth is related to the sedimentary rock formations in Ethiopia?",
    "options": [
      "Precambrian",
      "Paleozoic",
      "Mesozoic",
      "Cenozoic"
    ],
    "correctAnswer": 2,
    "explanation": "The major sedimentary rock formations in Ethiopia, including the Adigrat Sandstone, Antalo Limestone, and Upper Sandstone, were all deposited during the Mesozoic Era.",
    "subject": "geography",
    "year": 2016,
    "chapter": 2
  },
  {
    "id": "geo-2016-2-30",
    "question": "The topography of Ethiopia is largely determined by the geologic activities of the Precambrian era.",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": 1,
    "explanation": "This statement is false. While the Precambrian era formed the underlying foundation of Ethiopia, the modern topography, with its high plateaus, deep gorges, and rift valley, was shaped by the massive volcanic activities and rifting that occurred in the much more recent Cenozoic era.",
    "subject": "geography",
    "year": 2016,
    "chapter": 2
  },
  {
    "id": "geo-2016-2-31",
    "question": "The most recent and remotest eras in the geological history of the earth, respectively, are:",
    "options": [
      "Paleozoic and Mesozoic",
      "Precambrian and Cenozoic",
      "Cenozoic and Precambrian",
      "Mesozoic and Paleozoic"
    ],
    "correctAnswer": 2,
    "explanation": "The Cenozoic era is the most recent geological era, encompassing the last 66 million years to the present. The Precambrian era is the oldest and remotest, covering the vast expanse of time from Earth's formation until the beginning of the Paleozoic era, about 541 million years ago.",
    "subject": "geography",
    "year": 2016,
    "chapter": 2
  },
  
  {
    "id": "geo-2017-2-4",
    "question": "Assume that a rock is formed with 3000 atoms of a radioactive parent element, but only contains 375 radioactive parent atoms today. If the half-life is 1,155,000 years, how old is the rock?",
    "options": [
      "3,465,000 years",
      "1,155,000 years",
      "2,310,000 years",
      "4,620,000 years"
    ],
    "correctAnswer": 0,
    "explanation": "The half-life of a radioactive element is the time it takes for half of the parent atoms to decay into daughter atoms. To solve this problem, you need to determine how many half-lives have passed. Initial amount: 3000 atoms After 1st half-life: 3000/2=1500 atoms (1,155,000 years) After 2nd half-life: 1500/2=750 atoms (2,310,000 years) After 3rd half-life: 750/2=375 atoms (3,465,000 years) Since it took three half-lives to reach 375 atoms, the age of the rock is 3×1,155,000=3,465,000 years.",
    "subject": "geography",
    "year": 2017,
    "chapter": 2
  },
  {
    "id": "geo-2017-2-5",
    "question": "The Potassium-Argon technique is inaccurate when it creates leakage of argon as rock has been exposed to temperatures above 125°C (257°F).",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": 0,
    "explanation": "The statement is true. The Potassium-Argon (K-Ar) dating technique relies on the fact that argon gas, a product of potassium decay, is trapped within a rock's crystalline structure. If the rock is exposed to high temperatures (above its \"blocking temperature,\" which can be around 125°C for some minerals), the argon can leak out. This leakage would result in an inaccurate, younger age for the rock.",
    "subject": "geography",
    "year": 2017,
    "chapter": 2
  },
  {
    "id": "geo-2017-2-6",
    "question": "All of the following are major geological events of the Precambrian era except:",
    "options": [
      "Continuous mountain formation",
      "Formation of basement complex rocks",
      "Intensive volcanic activity",
      "Slow rising and sinking of the land"
    ],
    "correctAnswer": 0,
    "explanation": "The Precambrian era was a time of immense geological activity. The formation of the basement complex rocks, intense volcanism, and the slow but large-scale rising and sinking of continents were all characteristic events. However, continuous mountain formation is a modern geological event associated with plate tectonics, which was not yet as pronounced in the Precambrian.",
    "subject": "geography",
    "year": 2017,
    "chapter": 2
  },
  {
    "id": "geo-2017-2-7",
    "question": "All of the following statements are correct except?",
    "options": [
      "Hintalo limestone is formed by the regression of the sea",
      "Adigrat sandstone is older and thicker in the southeast",
      "Upper sandstone is thicker and younger in the southeast",
      "Upper sandstone is laid over the Hintalo limestone"
    ],
    "correctAnswer": 0,
    "explanation": "The statement that the Hintalo limestone was formed by the regression (retreat) of the sea is incorrect. The Hintalo limestone was formed during a period of marine transgression (the advance of the sea), which submerged the land and created the shallow marine environment necessary for limestone deposition. The other statements about the relative age, thickness, and stratigraphic position of the sandstones and limestone are accurate.",
    "subject": "geography",
    "year": 2017,
    "chapter": 2
  },
  {
    "id": "geo-2017-2-8",
    "question": "The earth's continents were once bunched together into a single huge continent called Laurasia.",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": 1,
    "explanation": "The statement is false. The single huge supercontinent that existed approximately 300 to 200 million years ago was called Pangaea. Laurasia was a northern supercontinent that formed after Pangaea began to break up, and it included what is now North America, Europe, and Asia. The southern part of Pangaea was called Gondwana.",
    "subject": "geography",
    "year": 2017,
    "chapter": 2
  },
  {
    "id": "geo-2017-2-9",
    "question": "The formation of the Rift Valley divides the Ethiopian Plateau into two.",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": 0,
    "explanation": "The statement is true. The Great Rift Valley runs through the center of Ethiopia, effectively splitting the large Ethiopian Plateau into the Western and Southeastern Highlands.",
    "subject": "geography",
    "year": 2017,
    "chapter": 2
  },
  {
    "id": "geo-2017-2-10",
    "question": "Which one of the following statements is not true about the geology of Ethiopia?",
    "options": [
      "The highest and lowest points are in Amhara and Afar regional states, respectively.",
      "Geologically, the rift valley region is the most stable part in the country.",
      "Rift Valley divides the Ethiopian plateau into two major parts.",
      "The Mesozoic sedimentary rocks cover one-fourth of the land mass of Ethiopia."
    ],
    "correctAnswer": 1,
    "explanation": "The statement that the Rift Valley region is the most stable part of the country is not true. The Rift Valley is a divergent plate boundary, and as such, it is the most geologically unstable and active part of Ethiopia, characterized by ongoing volcanic eruptions and frequent earthquakes. The other statements are all accurate facts about Ethiopia's geology.",
    "subject": "geography",
    "year": 2017,
    "chapter": 2
  },{
    "id": "geo-2017-2-10",
    "question": "Which one of the following statements is not true about the geology of Ethiopia?",
    "options": [
      "The highest and lowest points are in Amhara and Afar regional states, respectively.",
      "Geologically, the rift valley region is the most stable part in the country.",
      "Rift Valley divides the Ethiopian plateau into two major parts.",
      "The Mesozoic sedimentary rocks cover one-fourth of the land mass of Ethiopia."
    ],
    "correctAnswer": 1,
    "explanation": "The statement that the Rift Valley region is the most stable part of the country is not true. The Rift Valley is a divergent plate boundary, and as such, it is the most geologically unstable and active part of Ethiopia, characterized by ongoing volcanic eruptions and frequent earthquakes. The other statements are all accurate facts about Ethiopia's geology.",
    "subject": "geography",
    "year": 2017,
    "chapter": 2
  },
  {
    "id": "geo-2017-2-11",
    "question": "The formation of the Ethiopian Rift Valley is a classic example of tensional forces acting on the Earth's crust. This process results in which type of faulting?",
    "options": [
      "Reverse faults, creating a horst.",
      "Strike-slip faults, creating a transform boundary.",
      "Normal faults, creating a graben.",
      "Thrust faults, creating a mountain."
    ],
    "correctAnswer": 2,
    "explanation": "The Ethiopian Rift Valley is a result of tensional forces, which pull the Earth's crust apart. This process creates normal faults, where the hanging wall moves down relative to the footwall. The downward-slipping block between two parallel normal faults forms a graben, or rift valley. The upthrown blocks on either side of the graben are called horsts.",
    "subject": "geography",
    "year": 2017,
    "chapter": 2
  },
  {
    "id": "geo-2017-2-12",
    "question": "The Ethiopian landscape is a product of both constructive and destructive forces. Which of the following is a constructive endogenic force that built up the landmass?",
    "options": [
      "Erosion by the Blue Nile River.",
      "Volcanic eruptions and lava flows.",
      "Weathering of the highlands.",
      "Deposition of sediment in a lake bed."
    ],
    "correctAnswer": 1,
    "explanation": "Volcanic eruptions and lava flows are a classic example of a constructive endogenic force. Endogenic forces originate within the Earth, and volcanism specifically builds up the landmass by adding new material to the surface, forming mountains and plateaus.",
    "subject": "geography",
    "year": 2017,
    "chapter": 2
  },
  {
    "id": "geo-2017-2-13",
    "question": "How does the process of mass wasting differ from erosion?",
    "options": [
      "Mass wasting involves only human activity, while erosion is a natural process.",
      "Mass wasting is the gradual movement of rock, while erosion is the rapid downhill movement of rock.",
      "Mass wasting is the gravitational downhill movement of rock and soil, while erosion is the removal of material by a mobile agent like water or wind.",
      "Mass wasting is a constructive process, while erosion is a destructive process."
    ],
    "correctAnswer": 2,
    "explanation": "The key difference lies in the agent of movement. Mass wasting is the downslope movement of rock and soil primarily due to gravity, often in a single event like a landslide or a gradual creep. Erosion is the removal and transport of material by a mobile agent such as water, wind, ice, or waves.",
    "subject": "geography",
    "year": 2017,
    "chapter": 2
  },
  {
    "id": "geo-2017-2-14",
    "question": "The high elevation of the Ethiopian plateaus is a result of a combination of volcanism and epeirogenic uplift. The latter refers to:",
    "options": [
      "The rapid folding of the crust.",
      "The sudden, localized sinking of landmass.",
      "The creation of a rift valley.",
      "Broad, regional uplift of the landmass without major folding or faulting."
    ],
    "correctAnswer": 3,
    "explanation": "Epeirogenic uplift refers to the slow, large-scale, and widespread vertical movement of the Earth's crust. It is a fundamental process in the formation of continents and plateaus, and it's distinct from orogeny, which involves mountain-building through folding and faulting.",
    "subject": "geography",
    "year": 2017,
    "chapter": 2
  },
  {
    "id": "geo-2017-2-15",
    "question": "The Afar Triple Junction is a unique geological feature where three tectonic plates diverge. This process is responsible for the formation of:",
    "options": [
      "The Simien Mountains and the Ethiopian Highlands.",
      "The Ogaden Basin and the Western Escarpment.",
      "The Abay River Gorge and its tributaries.",
      "The Red Sea, the Gulf of Aden, and the Main Ethiopian Rift."
    ],
    "correctAnswer": 3,
    "explanation": "The Afar Triple Junction is the point where the Arabian, Nubian (African), and Somalian tectonic plates meet. These plates are diverging, or moving apart, from this central point. This process is creating three new oceanic basins: the Red Sea, the Gulf of Aden, and the Main Ethiopian Rift.",
    "subject": "geography",
    "year": 2017,
    "chapter": 2
  },
  {
    "id": "geo-2017-2-16",
    "question": "The Precambrian Basement Complex rocks in Ethiopia are only found at the edges of the country's highlands and in river gorges. This is because:",
    "options": [
      "They were not affected by the subsequent tectonic activity.",
      "They were created only in those specific areas.",
      "They were buried by younger sedimentary and volcanic rocks and have only been exposed by erosion and uplift.",
      "They are made of a different type of mineral."
    ],
    "correctAnswer": 2,
    "explanation": "The Precambrian Basement Complex is the oldest rock formation in Ethiopia, representing the foundation of the continent. Over billions of years, these rocks were buried by younger sedimentary layers and volcanic flows. They are exposed today at the edges of the plateaus and in deep river gorges like the Abay (Blue Nile) because subsequent uplift and erosion have stripped away the overlying rock.",
    "subject": "geography",
    "year": 2017,
    "chapter": 2
  },
  {
    "id": "geo-2017-2-17",
    "question": "The Danakil Depression is an extreme example of a landform created by a combination of endogenic and exogenic processes. Which of the following best describes its formation?",
    "options": [
      "Erosion of a large river valley.",
      "The uplift of a horst.",
      "A rift valley formed by plate divergence, followed by a period of sediment and salt deposition.",
      "The collapse of a volcanic crater."
    ],
    "correctAnswer": 2,
    "explanation": "The Danakil Depression is a part of the Afar Depression, which is a rift valley formed by plate divergence (an endogenic process). This rifting created a basin that was repeatedly flooded by the sea and then dried up, leaving behind massive deposits of sediment and salt (exogenic processes).",
    "subject": "geography",
    "year": 2017,
    "chapter": 2
  },
  {
    "id": "geo-2017-2-18",
    "question": "The geological term for the broad, regional movement of a continental landmass without significant folding or faulting is:",
    "options": [
      "Orogeny",
      "Isostasy",
      "Epeirogenesis",
      "Metamorphism"
    ],
    "correctAnswer": 2,
    "explanation": "Epeirogenesis is the geological term for the vertical movement of a landmass on a large scale. It's responsible for the broad uplift of continents and plateaus, as opposed to orogeny, which is the process of mountain building through intense folding and faulting.",
    "subject": "geography",
    "year": 2017,
    "chapter": 2
  },
  {
    "id": "geo-2017-2-19",
    "question": "The tensional forces associated with the Great Rift Valley system have not only created valleys but also:",
    "options": [
      "Folded the landmass to create mountains.",
      "Created block mountains (horsts) adjacent to the rift valley.",
      "Led to a period of extensive glaciation.",
      "Caused a global sea level rise."
    ],
    "correctAnswer": 1,
    "explanation": "The tensional forces of rifting pull the crust apart, causing some blocks to drop down (grabens) and others to be pushed up along the normal faults. These elevated blocks are known as horsts, or block mountains.",
    "subject": "geography",
    "year": 2017,
    "chapter": 2
  },
  {
    "id": "geo-2017-2-20",
    "question": "How do endogenic forces (specifically, plate tectonics) create the conditions for exogenic forces to shape the Ethiopian landscape?",
    "options": [
      "Endogenic forces make the landmass so flat that exogenic forces can't act.",
      "They have no relationship.",
      "Endogenic forces create landforms (like mountains and valleys), which are then acted upon by weathering, erosion, and deposition.",
      "Endogenic forces prevent erosion from occurring."
    ],
    "correctAnswer": 2,
    "explanation": "Endogenic forces (like volcanism and plate tectonics) are the builders of the landscape, creating major landforms such as mountains, plateaus, and rift valleys. Exogenic forces (like weathering, erosion, and mass wasting) are the sculptors, acting on these newly formed landforms to modify and break them down.",
    "subject": "geography",
    "year": 2017,
    "chapter": 2
  },
  {
    "id": "geo-2017-2-21",
    "question": "A geologist finds a fossil of a dinosaur in a rock layer in the Ogaden Basin. In which geological era would this rock have most likely been formed?",
    "options": [
      "Precambrian",
      "Paleozoic",
      "Mesozoic",
      "Cenozoic"
    ],
    "correctAnswer": 2,
    "explanation": "The Mesozoic Era, often called the \"Age of Reptiles,\" is the geological era when dinosaurs lived. The Ogaden Basin in southeastern Ethiopia is known for its extensive sedimentary formations from this era, which would be the most likely place to find dinosaur fossils.",
    "subject": "geography",
    "year": 2017,
    "chapter": 2
  },
  {
    "id": "geo-2017-2-22",
    "question": "The Quaternary period is the youngest geological time scale. Why is it significant to Ethiopia's geological history?",
    "options": [
      "It is when the basement complex rocks were formed.",
      "It marks the end of the age of dinosaurs.",
      "It is the period of the most recent volcanic activity and lake formation in the Rift Valley.",
      "It is when the first mammals appeared."
    ],
    "correctAnswer": 2,
    "explanation": "The Quaternary period is the most recent period in the Cenozoic Era. In Ethiopia, it is a period of continued geological activity, including the latest phases of volcanism in the Rift Valley and the formation of the modern rift lakes.",
    "subject": "geography",
    "year": 2017,
    "chapter": 2
  },
  {
    "id": "geo-2017-2-23",
    "question": "According to the principle of superposition, which of the following statements about the Mesozoic sedimentary layers in Ethiopia is true?",
    "options": [
      "The Hintalo Limestone is younger than the Upper Sandstone.",
      "The Adigrat Sandstone is younger than the Basement Complex.",
      "The Upper Sandstone is the youngest of the three major sedimentary formations.",
      "All three sedimentary layers were formed at the same time."
    ],
    "correctAnswer": 2,
    "explanation": "The principle of superposition states that in an undisturbed sequence of sedimentary rock layers, the oldest layer is at the bottom, and the youngest is at the top. The three major Mesozoic sedimentary formations in Ethiopia are, from oldest to youngest: the Adigrat Sandstone, the Antalo Limestone, and the Upper Sandstone. Therefore, the Upper Sandstone is the youngest.",
    "subject": "geography",
    "year": 2017,
    "chapter": 2
  },
  {
    "id": "geo-2017-2-24",
    "question": "Which radiometric dating technique would be most appropriate for dating a very old volcanic rock from the Precambrian era, and why?",
    "options": [
      "Carbon-14 dating, because it is effective on very old materials.",
      "Potassium-Argon dating, because it has a very long half-life and is suitable for dating ancient igneous rocks.",
      "Dendrochronology, because it uses tree rings to determine the age.",
      "Fission track dating, because it is only used on sedimentary rocks."
    ],
    "correctAnswer": 1,
    "explanation": "Potassium-Argon dating is ideal for dating ancient rocks because it has a very long half-life (1.25 billion years), which allows it to measure ages in the billions of years. It is particularly effective on igneous rocks, like those of the Precambrian Basement Complex.",
    "subject": "geography",
    "year": 2017,
    "chapter": 2
  },
  {
    "id": "geo-2017-2-25",
    "question": "Why are unconformities common in Ethiopia's geological record, particularly between the Precambrian and Mesozoic eras?",
    "options": [
      "Because the country's geology is very stable.",
      "Because there was continuous erosion and deposition.",
      "Because there were long periods of uplift and erosion where no new rock was being deposited.",
      "Because the rocks were all formed at the same time."
    ],
    "correctAnswer": 2,
    "explanation": "An unconformity represents a gap in the geological record. The unconformity between the Precambrian and Mesozoic eras in Ethiopia is a major one because, after the formation of the Precambrian Basement Complex, there were long periods of uplift and erosion where no new rock was being deposited.",
    "subject": "geography",
    "year": 2017,
    "chapter": 2
  },
  {
    "id": "geo-2017-2-26",
    "question": "Which of the following is a geologic event that occurred latest in Ethiopia's history?",
    "options": [
      "The formation of the Precambrian Basement Complex.",
      "The deposition of the Mesozoic sedimentary layers.",
      "The formation of the Aden Series lava flows in the Afar Depression.",
      "The initial rifting that created the East African Rift System."
    ],
    "correctAnswer": 2,
    "explanation": "The formation of the Aden Series lava flows is a recent geological event in Ethiopia's history, occurring during the Quaternary period (within the last 2.6 million years). This is much more recent than the Precambrian, the Mesozoic sedimentary layers, or the initial rifting.",
    "subject": "geography",
    "year": 2017,
    "chapter": 2
  },
  {
    "id": "geo-2017-2-27",
    "question": "The geological significance of the Pliocene epoch for Ethiopia's modern landscape is that it:",
    "options": [
      "Marked the beginning of the major phase of rifting and volcanism that shaped the highlands and rift valley.",
      "Was a period of extensive sea level rise and marine deposition.",
      "Was the age of dinosaurs.",
      "Was a period of intense glaciation."
    ],
    "correctAnswer": 0,
    "explanation": "The Pliocene epoch (around 5.3 to 2.6 million years ago) is a significant period in Ethiopia's geological history because it marked the onset of the most recent and dramatic phase of volcanism and rifting that created the modern highlands and the deep trough of the Great Rift Valley.",
    "subject": "geography",
    "year": 2017,
    "chapter": 2
  },
  {
    "id": "geo-2017-2-28",
    "question": "The Mesozoic Era in Ethiopia is mainly associated with which of the following?",
    "options": [
      "The formation of the crystalline basement rocks.",
      "The trap series lava flows.",
      "The Red Sea penetration into the Afar Depression.",
      "The deposition of extensive layers of sedimentary rock."
    ],
    "correctAnswer": 3,
    "explanation": "The Mesozoic Era (252 to 66 million years ago) in Ethiopia was characterized by the deposition of extensive sedimentary rock layers, specifically the Adigrat Sandstone, the Antalo Limestone, and the Upper Sandstone.",
    "subject": "geography",
    "year": 2017,
    "chapter": 2
  },
  {
    "id": "geo-2017-2-29",
    "question": "If the half-life of a radioactive element is 10 million years, and a rock sample contains 25% of the original parent isotope and 75% of the daughter isotope, how old is the rock?",
    "options": [
      "10 million years",
      "20 million years",
      "30 million years",
      "40 million years"
    ],
    "correctAnswer": 1,
    "explanation": "After one half-life (10 million years), a rock would have 50% of the parent isotope. After a second half-life (another 10 million years, for a total of 20 million years), it would have half of the remaining parent isotope, which is 25% of the original.",
    "subject": "geography",
    "year": 2017,
    "chapter": 2
  },
  {
    "id": "geo-2017-2-2",
    "question": "The Hintalo Limestone, a significant rock formation in Ethiopia, was formed as a result of:",
    "options": [
      "The transgression of a shallow sea.",
      "Extensive volcanic eruptions.",
      "The formation of the Rift Valley.",
      "The weathering of crystalline rocks."
    ],
    "correctAnswer": 0,
    "explanation": "The Hintalo Limestone was formed when a large shallow sea advanced over the African continent. This marine environment was rich in carbonate-secreting organisms, whose remains accumulated to form the extensive limestone layer.",
    "subject": "geography",
    "year": 2017,
    "chapter": 2
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
  },{
    "id": "log-2013-1-2",
    "question": "Abebe is a first-year student at Addis Ababa University studying philosophy. During a lecture, his professor asks the class to define philosophy. Abebe thinks about the core essence of the subject. Which of the following statements best captures the fundamental nature of philosophy, according to the professor's likely explanation?",
    "options": [
      "A. Philosophy is the act of accumulating facts and figures.",
      "B. Philosophy is an endless quest to find a single, definitive answer for every question.",
      "C. Philosophy is a process of critically examining deeply held beliefs and assumptions.",
      "D. Philosophy is an ancient art form that has little relevance today."
    ],
    "correctAnswer": 2,
    "explanation": "The core of philosophy is its methodological approach: the critical examination of fundamental beliefs and assumptions. While it may use facts (A), it does not merely accumulate them. It seeks answers but understands they are often debated (B). It is ancient but remains highly relevant by dealing with perennial human questions (D).",
    "subject": "logic",
    "year": 2013,
    "chapter": 1
  },
  {
    "id": "log-2013-1-3",
    "question": "All are the basic features of philosophy except:",
    "options": [
      "A. It is a set of views or beliefs about life and the universe.",
      "B. It is a rational attempt to look at the world as a whole.",
      "C. It is the process of trying to give correct answer for all questions.",
      "D. It is a process of reflecting and criticizing our most deeply held beliefs."
    ],
    "correctAnswer": 2,
    "explanation": "Philosophy is characterized by the process of questioning and critical reflection, not by providing final, correct answers for everything. Its strength lies in exploring questions that may not have definitive answers. A, B, and D are all central features of the philosophical endeavor.",
    "subject": "logic",
    "year": 2013,
    "chapter": 1
  },
  {
    "id": "log-2013-1-4",
    "question": "Gelila, a student from Mekelle University, is preparing for her final exam. Her professor has emphasized the 'love of wisdom' aspect of philosophy. Gelila is confused about what this truly means for a philosopher. Which of the following best describes what 'wisdom' is for a philosopher?",
    "options": [
      "A. Possessing a vast amount of technical and professional skills.",
      "B. Having the ability to recall historical dates and names of philosophers.",
      "C. Engaging in a continuous search for truth and questioning of the apparent.",
      "D. Finding a definitive and final truth that can never be questioned again."
    ],
    "correctAnswer": 2,
    "explanation": "In philosophy, \"wisdom\" (sophia) is not about information or skills (A, B) or final answers (D). It is an active, ongoing pursuit of understanding through questioning, critical reflection, and the examination of surface-level assumptions.",
    "subject": "logic",
    "year": 2013,
    "chapter": 1
  },
  {
    "id": "log-2013-1-5",
    "question": "Which one of the following is not the concern of philosophy?",
    "options": [
      "A. Philosophy is easy to define since it deals about specific subject matter",
      "B. Philosophy deals primarily with universal issues than subject matters",
      "C. Philosophy is wisdom but not all wisdom are philosophy",
      "D. Philosophy is the development of critical habits, the continuous search for truth, the questioning of the apparent"
    ],
    "correctAnswer": 0,
    "explanation": "A is not a concern of philosophy; it is an incorrect statement about philosophy. Philosophy is notoriously difficult to define precisely because it does not have a specific, limited subject matter like chemistry or history. Its concerns are universal (B), it involves a specific kind of critical wisdom (C), and it is defined by its process (D).",
    "subject": "logic",
    "year": 2013,
    "chapter": 1
  },
  {
    "id": "log-2013-1-6",
    "question": "Solomon and Tsega from Jimma are having a debate about the nature of philosophical questions. Solomon argues that a philosophical question must be about the meaning of life. Tsega disagrees and gives an example. Which of the following is an example of a philosophical question?",
    "options": [
      "A. What is the population of Addis Ababa?",
      "B. What is the chemical formula for water?",
      "C. Does God exist?",
      "D. What is the average rainfall in Dire Dawa?"
    ],
    "correctAnswer": 2,
    "explanation": "Philosophical questions are fundamental, abstract, and require conceptual analysis and reasoned argument. They are not answerable by mere measurement or data collection (A, B, D). The existence of God is a classic metaphysical and philosophical question.",
    "subject": "logic",
    "year": 2013,
    "chapter": 1
  },
  {
    "id": "log-2013-1-7",
    "question": "One of the following statements is true about philosophy:",
    "options": [
      "A. The very meaning of “Philosophy” is one of the basic questions of philosophy",
      "B. Philosophy is merely concerned with issues that other disciplines haven’t addressed so far",
      "C. Philosophy is necessarily about how to deny reality and falsify faith/religion",
      "D. Philosophy is an incomprehensible field of study dealing with issues that have universal scope"
    ],
    "correctAnswer": 0,
    "explanation": "Philosophy is self-reflective; questioning its own nature, methods, and terms is a fundamental philosophical activity. B is false because philosophy also examines the foundations of other disciplines. C is a mischaracterization; philosophy examines all beliefs, religious or otherwise, critically. D is false; its universal scope is what makes it comprehensible and relevant to all.",
    "subject": "logic",
    "year": 2013,
    "chapter": 1
  },
  {
    "id": "log-2013-1-8",
    "question": "Biruk, a resident of Hawassa, is attending a public lecture on philosophy. The speaker states that to understand philosophy is to \"do\" philosophy. What is the most accurate interpretation of this statement?",
    "options": [
      "A. Philosophy is a passive body of knowledge to be memorized.",
      "B. The best way to learn philosophy is to engage in reading, reflecting, and questioning.",
      "C. Philosophy is an academic subject that is only learned in a classroom.",
      "D. The only way to become a philosopher is to write a book."
    ],
    "correctAnswer": 1,
    "explanation": "Philosophy is an activity. To \"do\" philosophy is to actively engage in the process of critical thinking, questioning arguments, and formulating your own reasoned positions. It is not passive memorization (A), is not confined to a classroom (C), and does not require writing a book (D).",
    "subject": "logic",
    "year": 2013,
    "chapter": 1
  },
  {
    "id": "log-2013-1-9",
    "question": "A branch of philosophy which studies about the nature, scope, meaning, source, validity, and possibility of knowledge is called:",
    "options": [
      "A. Metaphysics",
      "B. Axiology",
      "C. Epistemology",
      "D. Logic"
    ],
    "correctAnswer": 2,
    "explanation": "Epistemology is precisely defined as the theory of knowledge, dealing with all the aspects listed in the question.",
    "subject": "logic",
    "year": 2013,
    "chapter": 1
  },
  {
    "id": "log-2013-1-10",
    "question": "Which one of the following is not a question of Metaphysics?",
    "options": [
      "A. What are the attributes of God?",
      "B. Did the universe come by accident?",
      "C. Is beauty objective or subjective?",
      "D. Is reality composed of one element?"
    ],
    "correctAnswer": 2,
    "explanation": "Questions A (Theology), B (Cosmology), and D (Ontology) are all sub-branches of metaphysics, which deals with the nature of reality. Question C, \"Is beauty objective or subjective?\" is a question of Aesthetics, which is a branch of Axiology (value theory).",
    "subject": "logic",
    "year": 2013,
    "chapter": 1
  },
  {
    "id": "log-2013-1-11",
    "question": "Sintayehu, a brilliant student from Gondar, is arguing with her friend, Chaltu, about the purpose of studying philosophy. Chaltu claims that philosophy is useless because it doesn't provide concrete answers. Sintayehu, however, defends philosophy by highlighting its core features. All of the following would be valid points for Sintayehu to make about the utility of philosophy, except:",
    "options": [
      "A. It helps develop flexibility and open-mindedness.",
      "B. It encourages moral-worthiness and well-thought reasoning.",
      "C. It fosters creative and critical thinking skills.",
      "D. It provides a definitive set of answers that removes all doubt."
    ],
    "correctAnswer": 3,
    "explanation": "The central point of Chaltu's criticism is that philosophy lacks definitive answers. Therefore, claiming that philosophy does provide such answers would be an incorrect and ineffective defense. Points A, B, and C are all widely recognized benefits of philosophical training.",
    "subject": "logic",
    "year": 2013,
    "chapter": 1
  },
  {
    "id": "log-2013-1-12",
    "question": "Among the following fields of philosophy, which one deals with formulating the right principles of reasoning and developing scientific methods for evaluating the validity and soundness of arguments?",
    "options": [
      "A. Metaphysics",
      "B. Epistemology",
      "C. Axiology",
      "D. Logic"
    ],
    "correctAnswer": 3,
    "explanation": "Logic is the branch of philosophy that studies the principles of correct reasoning and provides the tools for evaluating arguments.",
    "subject": "logic",
    "year": 2013,
    "chapter": 1
  },
  {
    "id": "log-2013-1-13",
    "question": "Meron, a student at Addis Ababa University, is asked to define philosophy. She thinks about the concepts she has learned. Which of the following is the most accurate definition of philosophy?",
    "options": [
      "A. A specific body of knowledge that gives final answers.",
      "B. An irrational attempt to look at the world as a whole.",
      "C. A process of reflection and criticism of our deepest beliefs.",
      "D. The study of a single, specific subject matter."
    ],
    "correctAnswer": 2,
    "explanation": "This option best captures the active, critical, and reflective nature of philosophy. It is not a body of final answers (A), it is rational (B), and it is not limited to a single subject (D).",
    "subject": "logic",
    "year": 2013,
    "chapter": 1
  },
  {
    "id": "log-2013-1-14",
    "question": "Tiruye, a university student from Jimma, is confused about the difference between having a philosophy and \"doing\" philosophy. Which of the following statements best explains the distinction?",
    "options": [
      "A. \"Having a philosophy\" is sufficient for \"doing\" philosophy.",
      "B. \"Doing\" philosophy involves actively questioning and criticizing beliefs, while \"having a philosophy\" is just having a set of views.",
      "C. \"Having a philosophy\" is a more advanced state than \"doing\" philosophy.",
      "D. There is no real difference between the two concepts."
    ],
    "correctAnswer": 1,
    "explanation": "Everyone \"has a philosophy\" (a set of beliefs and values). \"Doing philosophy\" is the active, critical process of examining those beliefs, questioning their foundations, and refining them through reasoned inquiry.",
    "subject": "logic",
    "year": 2013,
    "chapter": 1
  },
  {
    "id": "log-2013-1-15",
    "question": "Netsanet, a student at Addis Ababa University, is thinking about the famous Socratic dictum, \"The unexamined life is not worth living.\" What does this statement suggest a philosopher should do?",
    "options": [
      "A. Live a simple life without any complicated thoughts.",
      "B. Develop a rational life plan and critically reflect on one's own choices and beliefs.",
      "C. Follow the crowd to avoid conflict and live a secure life.",
      "D. Focus on accumulating material wealth and success."
    ],
    "correctAnswer": 1,
    "explanation": "Socrates's statement is a foundational principle of philosophy. It asserts that the value of life comes from self-examination, critical reflection on one's values, and the conscious pursuit of a virtuous life, not from unthinking habit or material gain.",
    "subject": "logic",
    "year": 2013,
    "chapter": 1
  },
  {
    "id": "log-2013-1-16",
    "question": "Lidiya, a philosopher from Addis Ababa, is questioning the very meaning of the word \"philosophy\" itself. She argues that this act is a core part of philosophical inquiry. This aligns with which statement about philosophy?",
    "options": [
      "A. The meaning of \"Philosophy\" is a basic philosophical question.",
      "B. Philosophy is easy to define since it deals with a specific subject.",
      "C. Philosophy is a field that is incomprehensible to most people.",
      "D. Philosophy is only concerned with issues that other disciplines haven't addressed."
    ],
    "correctAnswer": 0,
    "explanation": "Philosophy is inherently self-reflective. Questioning its own foundations, terms, and methods is a fundamental philosophical activity.",
    "subject": "logic",
    "year": 2013,
    "chapter": 1
  },
  {
    "id": "log-2013-1-17",
    "question": "Rahel, a student from Adama, is working on a presentation about the core features of philosophy. She must present a statement that is not a basic feature of philosophy. Which one should she choose?",
    "options": [
      "A. It is a rational attempt to look at the world as a whole.",
      "B. It is a set of views or beliefs about life and the universe.",
      "C. It is the process of trying to give a correct answer for all questions.",
      "D. It is a process of reflecting and criticizing our most deeply held beliefs."
    ],
    "correctAnswer": 2,
    "explanation": "As in question 2, providing final, correct answers for everything is not a feature of philosophy. Its defining feature is the process of questioning and critical inquiry, not the certainty of its conclusions. A, B, and D are genuine features.",
    "subject": "logic",
    "year": 2013,
    "chapter": 1
  },
  {
    "id": "log-2013-1-18",
    "question": "Almaz, a student in Jimma, is particularly interested in the study of knowledge. She is constantly asking questions like, \"What is truth?\" and \"How can we be certain about what we know?\" Which branch of philosophy is she studying?",
    "options": [
      "A. Axiology",
      "B. Epistemology",
      "C. Metaphysics",
      "D. Logic"
    ],
    "correctAnswer": 1,
    "explanation": "Epistemology is the branch of philosophy dedicated to the theory of knowledge, which investigates the nature, sources, limits, and validity of knowledge and belief.",
    "subject": "logic",
    "year": 2013,
    "chapter": 1
  },
  {
    "id": "log-2013-1-19",
    "question": "Among the following alternatives, which one is not the question of epistemology?",
    "options": [
      "A. What is truth, and how can we know a statement is true?",
      "B. How can we be sure that what we perceive through our senses is correct?",
      "C. What is the relationship and difference between faith and reason?",
      "D. What is a human being? A thinking mind? A perishable body?",
      "E. What does it mean to know?"
    ],
    "correctAnswer": 3,
    "explanation": "Questions A, B, C, and E are all core epistemological questions about the definition, sources, and limits of knowledge. Question D, \"What is a human being?\" is a question of metaphysics (specifically, philosophical anthropology), not epistemology.",
    "subject": "logic",
    "year": 2013,
    "chapter": 1
  },
  {
    "id": "log-2013-1-20",
    "question": "A perspective on the source of knowledge which argues that knowledge is obtained through the senses is:",
    "options": [
      "A. Rationalism",
      "B. Empiricism",
      "C. Revelation",
      "D. Intuition"
    ],
    "correctAnswer": 1,
    "explanation": "Empiricism is the epistemological theory that states all knowledge originates from sensory experience.",
    "subject": "logic",
    "year": 2013,
    "chapter": 1
  },
  {
    "id": "log-2013-1-21",
    "question": "Biniyam, a Dire Dawa University student, is learning about different sources of knowledge. His professor explains that some people believe that knowledge is obtained through the five senses and observation. Which school of thought is the professor describing?",
    "options": [
      "A. Rationalism",
      "B. Empiricism",
      "C. Revelation",
      "D. Intuition"
    ],
    "correctAnswer": 1,
    "explanation": "As above, Empiricism is the view that knowledge comes primarily from sensory experience.",
    "subject": "logic",
    "year": 2013,
    "chapter": 1
  },
  {
    "id": "log-2013-1-22",
    "question": "Chaltu, from Addis Ababa University, believes that all genuine knowledge comes from reason and the intellect, not from sensory experience. Her belief aligns with which epistemological perspective?",
    "options": [
      "A. Rationalism",
      "B. Empiricism",
      "C. Revelation",
      "D. Intuition"
    ],
    "correctAnswer": 0,
    "explanation": "Rationalism is the epistemological theory that reason, rather than sensory experience, is the foundation of certainty in knowledge.",
    "subject": "logic",
    "year": 2013,
    "chapter": 1
  },
  {
    "id": "log-2013-1-23",
    "question": "Daniel, a researcher in Dire Dawa, is writing a paper on the role of religious texts and prophets as a source of knowledge. His work is primarily focused on the epistemological aspect of:",
    "options": [
      "A. Empiricism",
      "B. Rationalism",
      "C. Revelation",
      "D. Authority"
    ],
    "correctAnswer": 2,
    "explanation": "Revelation is the source of knowledge that involves truth being disclosed by a divine or supernatural entity, often through sacred texts or prophets.",
    "subject": "logic",
    "year": 2013,
    "chapter": 1
  },
  {
    "id": "log-2013-1-24",
    "question": "Which one of the following is correct about Empiricism?",
    "options": [
      "A. What is truth, and how can we know a statement is true?",
      "B. The ultimate reality can be grasped by the five senses.",
      "C. Is knowledge one or many?",
      "D. All."
    ],
    "correctAnswer": 1,
    "explanation": "This is the core claim of empiricism. Option A is a general epistemological question, not specific to empiricism. Option C is unclear and not a standard formulation. Therefore, \"All\" (D) is incorrect.",
    "subject": "logic",
    "year": 2013,
    "chapter": 1
  },
  {
    "id": "log-2013-1-25",
    "question": "The science that deals with moral principles, values, codes, rules and norms is called:",
    "options": [
      "A. Political Philosophy",
      "B. Moral Philosophy",
      "C. Aesthetics",
      "D. Ethics"
    ],
    "correctAnswer": 3,
    "explanation": "Ethics (or moral philosophy) is the branch of philosophy that involves systematizing, defending, and recommending concepts of right and wrong behavior. The terms \"Moral Philosophy\" and \"Ethics\" are often used interchangeably.",
    "subject": "logic",
    "year": 2013,
    "chapter": 1
  },
  {
    "id": "log-2013-1-26",
    "question": "Which branch of ethics deals with the meaning and origin of ethical issues?",
    "options": [
      "A. Meta-ethics",
      "B. Applied ethics",
      "C. Normative ethics",
      "D. Deontological ethics",
      "E. Teleological ethics"
    ],
    "correctAnswer": 0,
    "explanation": "Meta-ethics is the branch of ethics that seeks to understand the nature of ethical properties, statements, attitudes, and judgments. It asks questions about the meaning of \"good\" and the origin of ethical principles.",
    "subject": "logic",
    "year": 2013,
    "chapter": 1
  },
  {
    "id": "log-2013-1-27",
    "question": "Elias, a student from Arba Minch, is confused about the difference between a philosophical question and a non-philosophical one in the field of epistemology. His professor asks him to identify a question that is not a concern of epistemology. Which of the following should Elias choose?",
    "options": [
      "A. What is the difference between belief and knowledge?",
      "B. How can we know that our senses are not deceiving us?",
      "C. What is the nature of a human being?",
      "D. What does it mean to know something?"
    ],
    "correctAnswer": 2,
    "explanation": "As in question 18, \"What is the nature of a human being?\" is a metaphysical question (philosophical anthropology), not an epistemological one. The other options are all central to epistemology.",
    "subject": "logic",
    "year": 2013,
    "chapter": 1
  },
  {
    "id": "log-2013-1-28",
    "question": "Yared, a student from Gondar, is interested in the source of knowledge. He is told that religious texts and prophets can be a source of knowledge. This perspective is known as ________________.",
    "options": [
      "A. Rationalism",
      "B. Empiricism",
      "C. Revelation",
      "D. Authority"
    ],
    "correctAnswer": 2,
    "explanation": "Revelation is the source of knowledge that involves truth being communicated from a divine or supernatural source.",
    "subject": "logic",
    "year": 2013,
    "chapter": 1
  },
  {
    "id": "log-2013-1-29",
    "question": "Girma, a teacher in Gondar, is explaining the different sources of knowledge. He states that some people rely on the knowledge passed down from experts or institutions. This is known as knowledge from:",
    "options": [
      "A. Revelation",
      "B. Intuition",
      "C. Authority",
      "D. Empiricism"
    ],
    "correctAnswer": 2,
    "explanation": "Knowledge from authority is based on accepting information from a source that is considered an expert or trusted institution.",
    "subject": "logic",
    "year": 2013,
    "chapter": 1
  },
  {
    "id": "log-2013-1-30",
    "question": "Ifa, a scholar from Wollo University, is discussing the philosophical view that believes knowledge is obtained through a transcendent, supernatural reality. This view is called:",
    "options": [
      "A. Rationalism",
      "B. Empiricism",
      "C. Revelation",
      "D. Authority"
    ],
    "correctAnswer": 2,
    "explanation": "As above, revelation involves a transcendent, supernatural source of knowledge.",
    "subject": "logic",
    "year": 2013,
    "chapter": 1
  },
  {
    "id": "log-2013-1-31",
    "question": "Dagim, a student from Gondar, is learning about the different ways of knowing. He is told that some people believe knowledge is gained through intuition. What is intuition?",
    "options": [
      "A. Knowledge gained through the senses.",
      "B. Knowledge gained through reason.",
      "C. Immediate or direct apprehension of knowledge without conscious reasoning.",
      "D. Knowledge gained from a higher, supernatural power."
    ],
    "correctAnswer": 2,
    "explanation": "Intuition is often described as a direct, immediate understanding or knowing without the conscious use of reasoning or sensory data.",
    "subject": "logic",
    "year": 2013,
    "chapter": 1
  },
  {
    "id": "log-2013-1-32",
    "question": "Hirut, a student from Jimma, is learning about the different sources of knowledge. She is told that one source is \"authority.\" What does this mean in the context of epistemology?",
    "options": [
      "A. Knowledge comes from one's own intellect.",
      "B. Knowledge comes from divine revelation.",
      "C. Knowledge is accepted as true because it is stated by a trusted source or expert.",
      "D. Knowledge is gained through a gut feeling."
    ],
    "correctAnswer": 2,
    "explanation": "This is the standard definition of knowledge from authority in epistemology. It is distinct from revelation (B) and intuition (D).",
    "subject": "logic",
    "year": 2013,
    "chapter": 1
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
    "question": "Gebrehiwot, a researcher from Hawassa, is studying how people acquire knowledge. He argues that knowledge is primarily acquired through the intellect and the human mind's ability to reason, not through the senses. Which philosophical perspective is he defending?",
    "options": [
      "A. Empiricism",
      "B. Rationalism",
      "C. Revelation",
      "D. Intuition"
    ],
    "correctAnswer": 1,
    "explanation": "Rationalism is the epistemological view that reason and intellectual deduction are the primary sources of knowledge, rather than sensory experience.",
    "subject": "logic",
    "year": 2014,
    "chapter": 1
  },
  {
    "id": "log-2014-1-2",
    "question": "Abeba, a student from Adama Science and Technology University, is studying the theory of knowledge. She is confused about the term \"empiricism.\" Which of the following statements correctly defines empiricism?",
    "options": [
      "A. Knowledge is acquired through intellect.",
      "B. Knowledge is acquired through faith and revelation.",
      "C. The ultimate reality can be grasped by the five senses.",
      "D. All of the above."
    ],
    "correctAnswer": 2,
    "explanation": "Empiricism is the epistemological theory that states all knowledge originates from sensory experience (the five senses). Option A describes Rationalism, and option B describes Revelation.",
    "subject": "logic",
    "year": 2014,
    "chapter": 1
  },
  {
    "id": "log-2014-1-3",
    "question": "Which one is incorrect about philosophy?",
    "options": [
      "A. Philosophy is a process of reflecting on and criticizing our most deeply held conceptions and beliefs.",
      "B. Having a philosophy is sufficient for “doing” philosophy.",
      "C. Philosophy is the logical analysis of language and clarification of meaning of words and concepts.",
      "D. Philosophy is a rational attempt to look at the world as a whole."
    ],
    "correctAnswer": 1,
    "explanation": "This is incorrect. \"Having a philosophy\" means holding a set of beliefs. \"Doing philosophy\" is the active, critical process of examining, questioning, and justifying those beliefs. The former is a state, the latter is an activity.",
    "subject": "logic",
    "year": 2014,
    "chapter": 1
  },
  {
    "id": "log-2014-1-4",
    "question": "One of the following statements is true about philosophy(2013):",
    "options": [
      "A. The very meaning of “Philosophy” is one of the basic questions of philosophy",
      "B. Philosophy is merely concerned with issues that other disciplines haven’t addressed so far",
      "C. Philosophy is necessarily about how to deny reality and falsify faith/religion",
      "D. Philosophy is an incomprehensible field of study dealing with issues that have universal scope"
    ],
    "correctAnswer": 0,
    "explanation": "Philosophy is self-reflective; questioning its own nature, methods, and terms is a fundamental philosophical activity. B, C, and D are all mischaracterizations of the field.",
    "subject": "logic",
    "year": 2014,
    "chapter": 1
  },
  {
    "id": "log-2014-1-5",
    "question": "Socrates said that “The unexamined life is not worth living.” What do you think he meant by this dictum?",
    "options": [
      "A. The lives of too many people are controlled more by circumstances than by their own choices",
      "B. Critical thinkers choose their lives rather than opting for the security of fitting into the crowd",
      "C. Developing a rational life plan",
      "D. Living the self-examined life"
    ],
    "correctAnswer": 3,
    "explanation": "While A, B, and C are implications of the dictum, option D is the most direct and comprehensive interpretation. Socrates meant that a life without critical self-reflection, questioning, and the pursuit of wisdom is not a fully human or valuable life.",
    "subject": "logic",
    "year": 2014,
    "chapter": 1
  },
  {
    "id": "log-2014-1-6",
    "question": "Among the following questions, one is not a basic question in philosophy. Which one?",
    "options": [
      "A. Where did the universe come from?",
      "B. Are animals moral agents or moral subjects?",
      "C. What time is it?",
      "D. What is an argument?"
    ],
    "correctAnswer": 2,
    "explanation": "Questions A (Metaphysics/Cosmology), B (Ethics), and D (Logic) are all fundamental philosophical questions. Question C, \"What time is it?\" is a factual question that can be answered by looking at a clock; it does not require conceptual analysis or reasoned argument.",
    "subject": "logic",
    "year": 2014,
    "chapter": 1
  },
  {
    "id": "log-2014-1-7",
    "question": "Kebede, a student from Wollo University, is trying to understand the difference between rationalism and empiricism. Which of the following statements correctly distinguishes the two?",
    "options": [
      "A. Rationalism believes knowledge comes from sense experience, while empiricism believes it comes from reason.",
      "B. Rationalism believes knowledge comes from reason, while empiricism believes it comes from sense experience.",
      "C. Both rationalism and empiricism believe knowledge comes from a divine source.",
      "D. Both rationalism and empiricism are concerned with the study of values."
    ],
    "correctAnswer": 1,
    "explanation": "This is the standard distinction. Rationalism emphasizes reason as the primary source of knowledge, while Empiricism emphasizes sense experience.",
    "subject": "logic",
    "year": 2014,
    "chapter": 1
  },
  {
    "id": "log-2014-1-8",
    "question": "Aster, a philosophy student in Bahir Dar, is fascinated by the most fundamental questions about existence. She often finds herself pondering topics like the nature of reality, the origin of the universe, and whether there is life after death. Which branch of philosophy is she most interested in?",
    "options": [
      "A. Axiology",
      "B. Epistemology",
      "C. Metaphysics",
      "D. Logic"
    ],
    "correctAnswer": 2,
    "explanation": "Metaphysics is the branch of philosophy concerned with the fundamental nature of reality and existence, which includes all the topics mentioned.",
    "subject": "logic",
    "year": 2014,
    "chapter": 1
  },
  {
    "id": "log-2014-1-9",
    "question": "Meseret, a researcher at the Wollega University, is studying the nature of being. Her work involves exploring questions like \"What is the ultimate reality?\" and \"Is reality composed of one or many elements?\" Which specific aspect of metaphysics is she primarily focused on?",
    "options": [
      "A. Cosmological aspect",
      "B. Anthropological aspect",
      "C. Ontological aspect",
      "D. Theological aspect"
    ],
    "correctAnswer": 2,
    "explanation": "Ontology is the core aspect of metaphysics that deals specifically with the nature of being, existence, and reality itself.",
    "subject": "logic",
    "year": 2014,
    "chapter": 1
  },
  {
    "id": "log-2014-1-10",
    "question": "Tewodros, a scholar from Gondar, is writing a paper on the philosophical understanding of God. His research revolves around questions concerning God's attributes and existence. This field of inquiry falls under which sub-branch of metaphysics?",
    "options": [
      "A. Cosmology",
      "B. Anthropology",
      "C. Ontology",
      "D. Theology"
    ],
    "correctAnswer": 3,
    "explanation": "Philosophical theology (or natural theology) is the sub-branch of metaphysics that examines questions regarding God's existence, attributes, and relation to the world.",
    "subject": "logic",
    "year": 2014,
    "chapter": 1
  },
  {
    "id": "log-2014-1-11",
    "question": "Yonas, a student at Addis Ababa University, is debating with his friend about the ultimate nature of the universe. He is asking questions like, \"Did the universe come from nothing?\" and \"What was the world made of?\" Yonas is engaging with which metaphysical aspect?",
    "options": [
      "A. Ontology",
      "B. Cosmology",
      "C. Anthropology",
      "D. Theology"
    ],
    "correctAnswer": 1,
    "explanation": "Cosmology is the aspect of metaphysics that deals with the origin, fundamental structure, nature, and dynamics of the universe as a whole.",
    "subject": "logic",
    "year": 2014,
    "chapter": 1
  },
  {
    "id": "log-2014-1-12",
    "question": "The Theological Aspects of Metaphysics mainly focus on:",
    "options": [
      "A. The origin, nature, and development of universe.",
      "B. The nature and meaning of existence.",
      "C. The religious theories that deal with the conceptions about God.",
      "D. The study of human beings and mind-body relations."
    ],
    "correctAnswer": 2,
    "explanation": "The theological aspect of metaphysics is concerned with philosophical questions about God's existence, nature, and attributes, and the relationship between God and the world.",
    "subject": "logic",
    "year": 2014,
    "chapter": 1
  },
  {
    "id": "log-2014-1-13",
    "question": "Of the following metaphysical speculation, one clearly emphasizes human nature including morality, free will, and soul. Which one is it?",
    "options": [
      "A. Cosmological aspect",
      "B. Anthropological aspect",
      "C. Ontological aspect",
      "D. Theological aspect"
    ],
    "correctAnswer": 1,
    "explanation": "The anthropological aspect of metaphysics focuses specifically on the nature of humanity, exploring questions about the mind-body relationship, free will, consciousness, morality, and the soul.",
    "subject": "logic",
    "year": 2014,
    "chapter": 1
  },
  {
    "id": "log-2014-1-14",
    "question": "A metaphysical question that raises the most basic inquiry about God is:",
    "options": [
      "A. Cosmological aspect",
      "B. Anthropological aspect",
      "C. Theological aspect",
      "D. Ontological aspect"
    ],
    "correctAnswer": 2,
    "explanation": "As in question 10, the theological aspect deals directly with inquiries about God.",
    "subject": "logic",
    "year": 2014,
    "chapter": 1
  },
  {
    "id": "log-2014-1-15",
    "question": "Zewditu, a student at Addis Ababa University, is studying the branch of philosophy that deals with the scope, source, and possibility of knowledge. This branch is called:",
    "options": [
      "A. Metaphysics",
      "B. Axiology",
      "C. Epistemology",
      "D. Logic"
    ],
    "correctAnswer": 2,
    "explanation": "Epistemology is the theory of knowledge, which studies its nature, scope, source, and validity.",
    "subject": "logic",
    "year": 2014,
    "chapter": 1
  },
  {
    "id": "log-2014-1-16",
    "question": "Fikremariam, a student from Bahir Dar, is trying to differentiate between metaphysics and epistemology. Which of the following questions belongs to epistemology, not metaphysics?",
    "options": [
      "A. What is the nature of reality?",
      "B. How can we be sure that what we perceive is correct?",
      "C. What is the relationship between the mind and body?",
      "D. Is beauty objective or subjective?"
    ],
    "correctAnswer": 1,
    "explanation": "Question B is epistemological because it deals with the source and validity of knowledge gained through perception. The other questions are metaphysical (A, C) or from Aesthetics (D), a branch of Axiology.",
    "subject": "logic",
    "year": 2014,
    "chapter": 1
  },
  {
    "id": "log-2014-1-17",
    "question": "Abebech, a student at Addis Ababa University, is learning about the different views on knowledge. She learns that some philosophers believe that a statement is true if it corresponds to an external reality. This view is known as the:",
    "options": [
      "A. Coherence theory of truth",
      "B. Pragmatic theory of truth",
      "C. Correspondence theory of truth",
      "D. All of the above"
    ],
    "correctAnswer": 2,
    "explanation": "The correspondence theory of truth states that the truth or falsity of a statement is determined only by how it relates to the world and whether it accurately describes (i.e., corresponds with) that reality.",
    "subject": "logic",
    "year": 2014,
    "chapter": 1
  },
  {
    "id": "log-2014-1-18",
    "question": "Kedir, a philosophy student from Hawassa, is asked to give an example of a philosophical puzzle. Which of the following is a classic philosophical puzzle?",
    "options": [
      "A. How many stars are in the sky?",
      "B. What is the cause of gravity?",
      "C. The question of whether there is an external world.",
      "D. How to solve a mathematical equation."
    ],
    "correctAnswer": 2,
    "explanation": "The problem of the external world—whether the world exists independently of our perception of it—is a classic, enduring puzzle in epistemology and metaphysics. The other options are scientific (A, B) or mathematical (D) questions.",
    "subject": "logic",
    "year": 2014,
    "chapter": 1
  },
  {
    "id": "log-2014-1-19",
    "question": "Bekele, a resident of Dire Dawa, is arguing with his friend about the relevance of philosophy. His friend says that philosophy is incomprehensible because it deals with issues that have a universal scope. Is this a valid argument?",
    "options": [
      "A. Yes, because universal issues are too broad to be understood.",
      "B. No, the universal scope of philosophy is what makes it a crucial field of study.",
      "C. Yes, because philosophy lacks a distinct subject matter.",
      "D. No, because philosophy provides definitive answers to these issues."
    ],
    "correctAnswer": 1,
    "explanation": "The friend's criticism is not valid. The universal scope of philosophical questions is their greatest strength, as they address fundamental human concerns that underlie all specific fields of inquiry. Their breadth is what makes them relevant to everyone, not incomprehensible.",
    "subject": "logic",
    "year": 2014,
    "chapter": 1
  },
  {
    "id": "log-2014-1-20",
    "question": "Hana, a student from Mekelle University, is studying the nature of philosophical questions. She is told that a philosophical question must have a universal scope. Which of the following is an example of a question with a universal scope?",
    "options": [
      "A. What is the capital of Ethiopia?",
      "B. Is the concept of \"justice\" the same for everyone?",
      "C. What is the distance between Mekelle and Addis Ababa?",
      "D. What is the boiling point of water?"
    ],
    "correctAnswer": 1,
    "explanation": "A question with universal scope applies to all people, times, and places. The nature of justice is a fundamental question that every society must grapple with. The other questions are specific, factual queries with single, empirical answers.",
    "subject": "logic",
    "year": 2014,
    "chapter": 1
  },
  {
    "id": "log-2014-1-21",
    "question": "Netsanet, a student from Jimma, is debating with her friend about the nature of philosophical questions. She says that a question like, \"Does AstraZeneca vaccine save humans from Covid-19?\" is not a serious philosophical question. Why is she likely correct?",
    "options": [
      "A. It is a question that can be answered through scientific investigation, not philosophical inquiry.",
      "B. It is a very serious question, so it must be philosophical.",
      "C. It is a question of ethics, so it is philosophical.",
      "D. All of the above."
    ],
    "correctAnswer": 0,
    "explanation": "The efficacy of a specific vaccine is a question of medical science, answerable through clinical trials, data collection, and empirical analysis. While the ethical distribution of the vaccine is a philosophical (ethical) question, the question of whether it \"saves humans\" is primarily scientific.",
    "subject": "logic",
    "year": 2014,
    "chapter": 1
  },
  {
    "id": "log-2014-1-22",
    "question": "Which one of the following is a serious philosophical question?",
    "options": [
      "A. Does God exist?",
      "B. Is dark skin or white skin more affected by melanin?",
      "C. Does metabolism system exist in animals?",
      "D. Does AstraZeneca vaccine save humans from Covid-19?"
    ],
    "correctAnswer": 0,
    "explanation": "The existence of God is a classic, fundamental metaphysical question that requires conceptual analysis and reasoned argument. The other options are scientific questions answerable through biological or medical investigation.",
    "subject": "logic",
    "year": 2014,
    "chapter": 1
  },
  {
    "id": "log-2014-1-23",
    "question": "All are true about philosophy, except:",
    "options": [
      "A. To understand philosophy is to do philosophy",
      "B. Philosophical conclusions are objective and eternal",
      "C. Philosophical puzzles",
      "D. Philosophy lacks distinct subject matter perennial",
      "E. None"
    ],
    "correctAnswer": 1,
    "explanation": "This is the exception. While philosophy strives for objectivity through reason, its conclusions are rarely final or eternal. Philosophical debates are perennially revisited and revised. The process of questioning is more definitive of philosophy than any fixed set of answers. A, C, and D are all true statements.",
    "subject": "logic",
    "year": 2014,
    "chapter": 1
  },{
    "id": "log-2015-1-1",
    "question": "Zewdu, a philosophy teacher in Mekelle, is explaining the relationship between human nature and metaphysics to his students. He highlights the aspect that deals with human nature, including free will, morality, and the soul. This is known as the ________________ aspect of metaphysics.",
    "options": [
      "A. Cosmological",
      "B. Anthropological",
      "C. Ontological",
      "D. Theological"
    ],
    "correctAnswer": 1,
    "explanation": "The anthropological aspect of metaphysics focuses on the philosophical inquiry into the nature of human beings.",
    "subject": "logic",
    "year": 2015,
    "chapter": 1
  },
  {
    "id": "log-2015-1-2",
    "question": "Feleke, a philosophy major at Addis Ababa University, is writing a paper on the metaphysical inquiry into the nature of reality. He wants to explore the core question: \"Is basic reality found in matter or in spirit?\" This question belongs to which metaphysical aspect?",
    "options": [
      "A. Theological",
      "B. Ontological",
      "C. Anthropological",
      "D. Cosmological"
    ],
    "correctAnswer": 1,
    "explanation": "Ontology is the branch of metaphysics that studies the fundamental nature of being and existence. The question of whether reality is material or spiritual is a core ontological debate (materialism vs. idealism).",
    "subject": "logic",
    "year": 2015,
    "chapter": 1
  },
  {
    "id": "log-2015-1-3",
    "question": "Tsegaye, from Wollo University, is working on a philosophical problem that deals with the nature of human existence, the relationship between mind and body, and the concept of the soul. He is engaged in which aspect of metaphysics?",
    "options": [
      "A. Cosmological",
      "B. Theological",
      "C. Anthropological",
      "D. Ontological"
    ],
    "correctAnswer": 2,
    "explanation": "As in question 1, the study of human nature, including the mind-body problem and the concept of the soul, falls under the anthropological aspect of metaphysics.",
    "subject": "logic",
    "year": 2015,
    "chapter": 1
  },
  {
    "id": "log-2015-1-4",
    "question": "Identify the one which is not a principle of critical thinking.",
    "options": [
      "A. The suspension of judgment",
      "B. Relativistic thinking",
      "C. The burden of proof",
      "D. Fallibility",
      "E. None of the above"
    ],
    "correctAnswer": 1,
    "explanation": "Relativistic thinking (the view that all beliefs are equally valid) is actually an obstacle to critical thinking. Critical thinking requires evaluating beliefs based on evidence and reason, not simply accepting all claims as equally true. Suspension of judgment, recognizing the burden of proof, and acknowledging one's fallibility are all key principles.",
    "subject": "logic",
    "year": 2015,
    "chapter": 1
  },
  {
    "id": "log-2015-1-5",
    "question": "The word “critical” in critical thinking refers to:",
    "options": [
      "A. Fault-finding attitude",
      "B. A lack of respect for other people",
      "C. Attempt to win an argument",
      "D. Using careful judgment",
      "E. None of the above"
    ],
    "correctAnswer": 3,
    "explanation": "In this context, \"critical\" derives from the Greek word kriticos, meaning \"discerning judgment.\" It refers to the careful, reflective, and rational evaluation of claims and arguments, not to being negative or argumentative.",
    "subject": "logic",
    "year": 2015,
    "chapter": 1
  },
  {
    "id": "log-2015-1-6",
    "question": "According to Bertrand Russell, the value of philosophy lies in:",
    "options": [
      "A. Narrowing our thoughts and putting us under the tyranny of custom",
      "B. Keeping alive our sense of wonder by showing familiar things in unfamiliar aspects",
      "C. Searching and having certain answers for questions that matter to humanity",
      "D. Keeping intact our arrogant dogmatism",
      "E. None of the above"
    ],
    "correctAnswer": 1,
    "explanation": "Bertrand Russell argued that the chief value of philosophy is not in providing definite answers but in enlarging our thinking and freeing us from dogmatism by stirring a sense of wonder about the world.",
    "subject": "logic",
    "year": 2015,
    "chapter": 1
  },
  {
    "id": "log-2015-1-7",
    "question": "Yohannes, a student from Mekelle University, is studying the metaphysical question, \"What is the source of the universe?\" This is a classic question of:",
    "options": [
      "A. Anthropology",
      "B. Cosmology",
      "C. Ontology",
      "D. Theology"
    ],
    "correctAnswer": 1,
    "explanation": "Cosmology is the aspect of metaphysics that deals with the origin, fundamental structure, and development of the universe.",
    "subject": "logic",
    "year": 2015,
    "chapter": 1
  },
  {
    "id": "log-2015-1-8",
    "question": "Gebremedhin, a scholar from Addis Ababa University, is writing a book that analyzes the nature of human beings, including their mind-body relations. This topic falls under which aspect of metaphysics?",
    "options": [
      "A. Theological",
      "B. Cosmological",
      "C. Anthropological",
      "D. Ontological"
    ],
    "correctAnswer": 2,
    "explanation": "The anthropological aspect deals with the nature of human beings, which includes the mind-body problem.",
    "subject": "logic",
    "year": 2015,
    "chapter": 1
  },
  {
    "id": "log-2015-1-9",
    "question": "Abebech, a student from Bahir Dar, is contemplating the question, \"Is reality composed of one element or many?\" This is a classic example of a question in:",
    "options": [
      "A. Theology",
      "B. Ontology",
      "C. Cosmology",
      "D. Anthropology"
    ],
    "correctAnswer": 1,
    "explanation": "This question concerns the fundamental nature and composition of reality, which is the domain of ontology (e.g., monism vs. pluralism).",
    "subject": "logic",
    "year": 2015,
    "chapter": 1
  },
  {
    "id": "log-2015-1-10",
    "question": "Yemisrach, a student from Jimma, is trying to understand the metaphysical question, \"What does it mean for anything to exist?\" This question is a classic example of:",
    "options": [
      "A. Cosmology",
      "B. Ontology",
      "C. Anthropology",
      "D. Theology"
    ],
    "correctAnswer": 1,
    "explanation": "This is the most fundamental question of ontology: the study of being and existence itself.",
    "subject": "logic",
    "year": 2015,
    "chapter": 1
  },
  {
    "id": "log-2015-1-11",
    "question": "Zewdu, a student from Addis Ababa University, is studying the branch of philosophy that deals with the nature of human beings. This branch of metaphysics is known as:",
    "options": [
      "A. Cosmology",
      "B. Ontology",
      "C. Anthropology",
      "D. Theology"
    ],
    "correctAnswer": 2,
    "explanation": "Philosophical anthropology is the branch that studies human nature.",
    "subject": "logic",
    "year": 2015,
    "chapter": 1
  },
  {
    "id": "log-2015-1-12",
    "question": "Birhanu, a student from Gondar, is asked to identify a question that would be considered a concern of metaphysics. Which of the following is a metaphysical question?",
    "options": [
      "A. How do we know that our senses are not deceiving us?",
      "B. What is the moral status of human beings?",
      "C. What is the universe made of?",
      "D. What is the difference between a valid and an invalid argument?"
    ],
    "correctAnswer": 2,
    "explanation": "Question C is a cosmological question within metaphysics. A is epistemology, B is ethics, and D is logic.",
    "subject": "logic",
    "year": 2015,
    "chapter": 1
  },
  {
    "id": "log-2015-1-13",
    "question": "Jemila, a student from Mekelle University, is learning about the different branches of philosophy. She is asked to identify the branch that studies about the nature of God. This is an aspect of:",
    "options": [
      "A. Ontology",
      "B. Cosmology",
      "C. Theology",
      "D. Anthropology"
    ],
    "correctAnswer": 2,
    "explanation": "Philosophical theology (theology) deals with questions about God's existence and nature.",
    "subject": "logic",
    "year": 2015,
    "chapter": 1
  },
  {
    "id": "log-2015-1-14",
    "question": "Nigist, a student from Bahir Dar, is trying to understand the different aspects of metaphysics. She is asked to identify the aspect that deals with the origin, nature, and development of the universe. This is:",
    "options": [
      "A. Theology",
      "B. Cosmology",
      "C. Anthropology",
      "D. Ontology"
    ],
    "correctAnswer": 1,
    "explanation": "This is the definition of cosmology.",
    "subject": "logic",
    "year": 2015,
    "chapter": 1
  },
  {
    "id": "log-2015-1-15",
    "question": "Chaltu, a student from Mekelle University, is asked to identify the correct correlation between a philosophical branch and its subject matter. Which of the following is the correct pair?",
    "options": [
      "A. Anthropology — nature of God",
      "B. Cosmology — origin of the universe",
      "C. Theology — nature of being",
      "D. Ontology — nature of human beings"
    ],
    "correctAnswer": 1,
    "explanation": "This is the only correct pairing. A should be Anthropology — nature of human beings. C should be Theology — nature of God. D should be Ontology — nature of being.",
    "subject": "logic",
    "year": 2015,
    "chapter": 1
  },
  {
    "id": "log-2015-1-16",
    "question": "Lemlem, a high school student in Addis Ababa, is told by her teacher that philosophy is the \"mother of all sciences.\" Which of the following statements best justifies this claim?",
    "options": [
      "A. The first philosophers were also the first scientists.",
      "B. Philosophy deals with a specific and limited subject matter.",
      "C. Philosophy provides a foundation by questioning fundamental assumptions and seeking wisdom.",
      "D. All other sciences have been derived from the theories of ancient philosophers."
    ],
    "correctAnswer": 2,
    "explanation": "The claim refers to philosophy's historical and methodological role. It asks the most fundamental questions about reality, knowledge, and value. As methods of empirical investigation became more sophisticated, specific sciences branched off from this foundational, questioning approach.",
    "subject": "logic",
    "year": 2015,
    "chapter": 1
  },
  {
    "id": "log-2015-1-17",
    "question": "Mekonnen, from Gondar, is asked by his friend to list the benefits of studying philosophy. All of the following would be correct points for him to make, except:",
    "options": [
      "A. It fosters critical thinking and critical reflection.",
      "B. It encourages creative problem-solving.",
      "C. It helps one to rely entirely on the ideas of others.",
      "D. It helps develop skills in reasoning and argumentation."
    ],
    "correctAnswer": 2,
    "explanation": "A core aim of philosophy is to teach individuals to think for themselves and to question assumptions (including those of others), not to rely on them uncritically.",
    "subject": "logic",
    "year": 2015,
    "chapter": 1
  },
  {
    "id": "log-2015-1-18",
    "question": "Fasil, a businessperson in Addis Ababa, is having a debate with his colleague about whether philosophy is relevant in the modern world. His colleague claims that philosophy is useless because it has no distinct subject matter. How can Fasil best counter this argument?",
    "options": [
      "A. Philosophy's lack of a distinct subject matter is a weakness, so the colleague is correct.",
      "B. Philosophy's value lies in its perennial and universal issues rather than a single subject matter.",
      "C. Philosophy is actually about a specific subject matter that the colleague doesn't know about.",
      "D. Philosophy's only purpose is to define terms and concepts."
    ],
    "correctAnswer": 1,
    "explanation": "The strength of philosophy is its breadth. Its tools of critical analysis can be applied to any field (e.g., ethics in business). Its subject matter is the set of fundamental questions that underlie all other inquiries.",
    "subject": "logic",
    "year": 2015,
    "chapter": 1
  },
  {
    "id": "log-2015-1-19",
    "question": "Wondimu, a political science student at Addis Ababa University, is studying the historical debates in Ethiopia about whether the country should be a unitary or federal state. Which philosophical branch would be most relevant to his research?",
    "options": [
      "A. Metaphysics",
      "B. Logic",
      "C. Epistemology",
      "D. Political Philosophy"
    ],
    "correctAnswer": 3,
    "explanation": "Political philosophy is the branch that studies fundamental questions about government, the state, and political systems like unitary vs. federal models.",
    "subject": "logic",
    "year": 2015,
    "chapter": 1
  },
  {
    "id": "log-2015-1-20",
    "question": "Yosef, a student in Bahir Dar, is trying to understand the connection between philosophy and critical thinking. Which statement best describes this relationship?",
    "options": [
      "A. Philosophy is a prerequisite for critical thinking.",
      "B. Critical thinking is a direct outcome and integral part of doing philosophy.",
      "C. Philosophy and critical thinking are unrelated concepts.",
      "D. Critical thinking is only useful for science, not philosophy."
    ],
    "correctAnswer": 1,
    "explanation": "Critical thinking is the core methodology of philosophy. The very act of \"doing philosophy\" (analyzing arguments, identifying fallacies, constructing reasoning) is the practice of critical thinking.",
    "subject": "logic",
    "year": 2015,
    "chapter": 1
  },
  {
    "id": "log-2015-1-21",
    "question": "Wubet, a student at Addis Ababa University, is learning about the history of thought. She is told that the first philosophers were not just thinkers but were also scientists. This is a point used to justify the idea that:",
    "options": [
      "A. Philosophy is a useless subject.",
      "B. Philosophy is the mother of all sciences.",
      "C. Philosophy and science are completely separate disciplines.",
      "D. Science is more important than philosophy."
    ],
    "correctAnswer": 1,
    "explanation": "Historical figures like Aristotle asked fundamental questions about nature that laid the groundwork for specialized scientific disciplines, supporting the \"mother of sciences\" claim.",
    "subject": "logic",
    "year": 2015,
    "chapter": 1
  },
  {
    "id": "log-2015-1-22",
    "question": "Kalkidan, a first-year student at Bahir Dar University, is trying to understand the relationship between philosophy and other sciences. She is told that philosophy is a versatile discipline. This means:",
    "options": [
      "A. It deals with only one specific subject matter.",
      "B. It does not engage with any other academic fields.",
      "C. It is the mother of all sciences and its questions are not limited to one domain.",
      "D. It provides a simple, direct answer to all scientific questions."
    ],
    "correctAnswer": 2,
    "explanation": "Philosophy's versatility stems from its application to all areas of human thought, making it a foundational and interdisciplinary field.",
    "subject": "logic",
    "year": 2015,
    "chapter": 1
  },
  {
    "id": "log-2015-1-23",
    "question": "Meron, a student from Addis Ababa University, is working on a research paper about the philosophical implications of modern science. Her professor tells her that philosophy is a versatile discipline. This means:",
    "options": [
      "A. It deals with a limited number of topics.",
      "B. It can be applied to and interact with various fields of study.",
      "C. It provides a final answer to all scientific questions.",
      "D. It has no connection to other academic disciplines."
    ],
    "correctAnswer": 1,
    "explanation": "This is the meaning of versatility in this context. Philosophy can provide conceptual clarity and examine ethical and metaphysical foundations in science, law, art, etc.",
    "subject": "logic",
    "year": 2015,
    "chapter": 1
  },
  {
    "id": "log-2015-1-24",
    "question": "Genet, a student from Bahir Dar, is debating with her friend about the relevance of philosophy. Her friend says that philosophy is only about ancient ideas and has no modern applications. How can Genet best counter this argument?",
    "options": [
      "A. Philosophy is only relevant to academic scholars.",
      "B. Philosophy is an obsolete field of study.",
      "C. Philosophy's perennial questions about ethics and reality are highly relevant in the modern world.",
      "D. Philosophy is only useful for personal reflection, not for societal issues."
    ],
    "correctAnswer": 2,
    "explanation": "Philosophy deals with timeless questions about justice, truth, and existence that are as relevant today in debates about AI ethics, bioethics, and political systems as they were in ancient times.",
    "subject": "logic",
    "year": 2015,
    "chapter": 1
  },
  {
    "id": "log-2015-1-25",
    "question": "Sami, a student from Mekelle University, is learning about the history of philosophy. He learns that philosophy is the \"mother of all sciences.\" Which of the following is the most compelling reason for this?",
    "options": [
      "A. All other sciences began as branches of philosophy.",
      "B. The first philosophers were scientists.",
      "C. Philosophy's pivotal role is asking appropriate questions, which forms the basis for all scientific inquiry.",
      "D. A and B are correct."
    ],
    "correctAnswer": 2,
    "explanation": "While A and B are historically true, the most compelling reason is the methodological one: philosophy's role in asking the fundamental \"why\" and \"how\" questions that are the prerequisite for any systematic inquiry, scientific or otherwise.",
    "subject": "logic",
    "year": 2015,
    "chapter": 1
  },
  {
    "id": "log-2015-1-26",
    "question": "Rahel, a student from Gondar, is learning about the history of thought. She is told that philosophy is the \"mother of all sciences.\" Which of the following is a correct reason for this?",
    "options": [
      "A. The first philosophers were also scientists.",
      "B. Philosophy deals with the most fundamental questions of all disciplines.",
      "C. Philosophy provides a foundation for other sciences to grow.",
      "D. All of the above."
    ],
    "correctAnswer": 3,
    "explanation": "All three points are valid reasons that together justify the claim. The historical fact (A), the methodological scope (B), and the foundational role (C) all support the idea.",
    "subject": "logic",
    "year": 2015,
    "chapter": 1
  }, {
    "id": "log-2016-1-1",
    "question": "Wondimu, a student from Hawassa, is learning about the benefits of studying philosophy. He is told that one of the benefits is to become more open-minded. How does philosophy achieve this?",
    "options": [
      "A. By providing a fixed set of answers to believe.",
      "B. By forcing students to accept the ideas of others.",
      "C. By encouraging critical reflection and questioning of one's own beliefs.",
      "D. By teaching historical facts about philosophers."
    ],
    "correctAnswer": 2,
    "explanation": "Philosophy fosters open-mindedness by teaching individuals to critically examine their own deeply held beliefs and to understand and engage with viewpoints different from their own. This process challenges dogmatism and expands one's perspective.",
    "subject": "logic",
    "year": 2016,
    "chapter": 1
  },
  {
    "id": "log-2016-1-2",
    "question": "Which one of the following is a serious philosophical question?",
    "options": [
      "A. Does God exist?",
      "B. Is dark skin or white skin more affected by melanin?",
      "C. Does metabolism system exist in animals?",
      "D. Does AstraZeneca vaccine save humans from Covid-19?"
    ],
    "correctAnswer": 0,
    "explanation": "The existence of God is a classic, fundamental metaphysical question that requires conceptual analysis and reasoned argument. The other options are scientific questions answerable through biological or medical investigation.",
    "subject": "logic",
    "year": 2016,
    "chapter": 1
  },
  {
    "id": "log-2016-1-3",
    "question": "All are true about philosophy, except:",
    "options": [
      "A. To understand philosophy is to do philosophy",
      "B. Philosophical conclusions are objective and eternal",
      "C. Philosophical puzzles",
      "D. Philosophy lacks distinct subject matter perennial",
      "E. None"
    ],
    "correctAnswer": 1,
    "explanation": "This is the exception. While philosophy strives for objectivity through reason, its conclusions are rarely final or eternal. Philosophical debates are perennially revisited and revised. The process of questioning is more definitive of philosophy than any fixed set of answers.",
    "subject": "logic",
    "year": 2016,
    "chapter": 1
  },
  {
    "id": "log-2016-1-4",
    "question": "Which one is incorrect about philosophy?",
    "options": [
      "A. Philosophy is a process of reflecting on and criticizing our most deeply held conceptions and beliefs.",
      "B. Having a philosophy is sufficient for “doing” philosophy.",
      "C. Philosophy is the logical analysis of language and clarification of meaning of words and concepts.",
      "D. Philosophy is a rational attempt to look at the world as a whole."
    ],
    "correctAnswer": 1,
    "explanation": "This is incorrect. \"Having a philosophy\" means holding a set of beliefs. \"Doing philosophy\" is the active, critical process of examining, questioning, and justifying those beliefs. The former is a state, the latter is an activity.",
    "subject": "logic",
    "year": 2016,
    "chapter": 1
  },
  {
    "id": "log-2016-1-5",
    "question": "One of the following statements is true about philosophy(2013):",
    "options": [
      "A. The very meaning of “Philosophy” is one of the basic questions of philosophy",
      "B. Philosophy is merely concerned with issues that other disciplines haven’t addressed so far",
      "C. Philosophy is necessarily about how to deny reality and falsify faith/religion",
      "D. Philosophy is an incomprehensible field of study dealing with issues that have universal scope"
    ],
    "correctAnswer": 0,
    "explanation": "Philosophy is self-reflective; questioning its own nature, methods, and terms is a fundamental philosophical activity. B, C, and D are all mischaracterizations of the field.",
    "subject": "logic",
    "year": 2016,
    "chapter": 1
  },
  {
    "id": "log-2016-1-6",
    "question": "Socrates said that “The unexamined life is not worth living.” What do you think he meant by this dictum?",
    "options": [
      "A. The lives of too many people are controlled more by circumstances than by their own choices",
      "B. Critical thinkers choose their lives rather than opting for the security of fitting into the crowd",
      "C. Developing a rational life plan",
      "D. Living the self-examined life"
    ],
    "correctAnswer": 3,
    "explanation": "While A, B, and C are implications of the dictum, option D is the most direct and comprehensive interpretation. Socrates meant that a life without critical self-reflection, questioning, and the pursuit of wisdom is not a fully human or valuable life.",
    "subject": "logic",
    "year": 2016,
    "chapter": 1
  },
  {
    "id": "log-2016-1-7",
    "question": "Among the following questions, one is not a basic question in philosophy. Which one?",
    "options": [
      "A. Where did the universe come from?",
      "B. Are animals moral agents or moral subjects?",
      "C. What time is it?",
      "D. What is an argument?"
    ],
    "correctAnswer": 2,
    "explanation": "Questions A (Metaphysics/Cosmology), B (Ethics), and D (Logic) are all fundamental philosophical questions. Question C, \"What time is it?\" is a factual question that can be answered by looking at a clock; it does not require conceptual analysis or reasoned argument.",
    "subject": "logic",
    "year": 2016,
    "chapter": 1
  },
  {
    "id": "log-2016-1-8",
    "question": "Which one is wrong about philosophy as a love of wisdom?",
    "options": [
      "A. It lets wisdom control your passion",
      "B. It reminds you that knowing oneself is the beginning of wisdom",
      "C. Philosophy helps you to forget yourself",
      "D. All of the above"
    ],
    "correctAnswer": 2,
    "explanation": "A core tenet of philosophy, famously expressed by Socrates as \"Know thyself,\" is that wisdom involves deep self-examination and understanding. It is not about forgetting the self but about critically engaging with it. Philosophy is grounded in rational self-awareness.",
    "subject": "logic",
    "year": 2016,
    "chapter": 1
  },
  {
    "id": "log-2016-1-9",
    "question": "Wisdom for philosophers is not:",
    "options": [
      "A. The development of critical habit",
      "B. Technical skills of professionals",
      "C. The continuous search for truth",
      "D. The questioning of the apparent",
      "E. All except C"
    ],
    "correctAnswer": 1,
    "explanation": "Philosophical wisdom is not about acquiring technical or professional skills. It is about the development of critical thinking habits (A), the ongoing pursuit of understanding (C), and the questioning of surface-level assumptions (D).",
    "subject": "logic",
    "year": 2016,
    "chapter": 1
  },
  {
    "id": "log-2016-1-10",
    "question": "Girma, a teacher in Gondar, is explaining the benefits of philosophy. He says that philosophy is beneficial for all of the following, except:",
    "options": [
      "A. Developing creative and critical thinking.",
      "B. Enhancing moral-worthiness.",
      "C. Providing ready-made answers for all of life's questions.",
      "D. Promoting flexibility and open-mindedness."
    ],
    "correctAnswer": 2,
    "explanation": "Philosophy does not provide ready-made answers; its value lies in teaching the process of how to think through complex questions. Providing definitive answers for everything is contrary to the nature of philosophical inquiry.",
    "subject": "logic",
    "year": 2016,
    "chapter": 1
  },
  {
    "id": "log-2016-1-11",
    "question": "Kedir, a student from Jimma, is learning about the practical benefits of philosophy. He is told that philosophy is useful for all of the following, except:",
    "options": [
      "A. Developing critical thinking.",
      "B. Fostering creative thinking.",
      "C. Relying on the ideas of others.",
      "D. Enhancing flexibility and open-mindedness."
    ],
    "correctAnswer": 2,
    "explanation": "A core aim of philosophy is to teach individuals to think for themselves, to evaluate arguments critically, and to question received wisdom. Therefore, encouraging reliance on the ideas of others is antithetical to its purpose.",
    "subject": "logic",
    "year": 2016,
    "chapter": 1
  },
  {
    "id": "log-2016-1-12",
    "question": "Alemu, a student from Wollo University, is told by his professor that philosophy's conclusions are objective and eternal. Is this statement true or false?",
    "options": [
      "A. True, philosophical conclusions are fixed and unchanging.",
      "B. False, philosophical conclusions are often subject to ongoing debate and revision.",
      "C. True, because philosophy is a search for truth.",
      "D. False, because philosophy is only about personal opinions."
    ],
    "correctAnswer": 1,
    "explanation": "While philosophy strives for objectivity through reason and evidence, its conclusions are rarely, if ever, final or eternal. Philosophical debates (e.g., free will vs. determinism) are perennially revisited. The process of questioning is more definitive than the answers.",
    "subject": "logic",
    "year": 2016,
    "chapter": 1
  },
  {
    "id": "log-2016-1-13",
    "question": "Fasil, a philosophy student at Addis Ababa University, is asked to identify a statement that is not true about philosophy. Which of the following statements is not true?",
    "options": [
      "A. Philosophy is a rational attempt to look at the world as a whole.",
      "B. It is an irrational attempt to look at the world as a whole.",
      "C. It clarifies the meaning and use of terms.",
      "D. It is a process of reflecting and criticizing beliefs."
    ],
    "correctAnswer": 1,
    "explanation": "By definition, philosophy is a rational endeavor. It relies on reason, logic, and argumentation. Therefore, describing it as an \"irrational attempt\" is fundamentally incorrect and not true.",
    "subject": "logic",
    "year": 2016,
    "chapter": 1
  },
  {
    "id": "log-2016-1-14",
    "question": "Elias, a student from Adama, is studying the branch of ethics that deals with practical, controversial issues. He is told that issues studied under this branch should be:",
    "options": [
      "A. Subjective issues",
      "B. Controversial issues",
      "C. Issues with a clear and definite answer",
      "D. All of the above"
    ],
    "correctAnswer": 1,
    "explanation": "This describes Applied Ethics. This branch takes ethical theories and applies them to actual, complex, and often controversial moral problems in fields like medicine, business, and law, where there is significant debate and no universally agreed-upon answer.",
    "subject": "logic",
    "year": 2016,
    "chapter": 1
  },
  {
    "id": "log-2016-1-15",
    "question": "Kedir, a student from Jimma, is trying to understand the difference between metaphysics and logic. Which of the following statements correctly distinguishes the two?",
    "options": [
      "A. Metaphysics deals with reality, while logic deals with reasoning.",
      "B. Metaphysics deals with reasoning, while logic deals with reality.",
      "C. Both deal with the same subject matter.",
      "D. Neither has any connection to the other."
    ],
    "correctAnswer": 0,
    "explanation": "This is the standard distinction. Metaphysics is concerned with the fundamental nature of reality and existence. Logic is concerned with the principles of correct reasoning and argumentation.",
    "subject": "logic",
    "year": 2016,
    "chapter": 1
  },
  {
    "id": "log-2016-1-16",
    "question": "Solomon, a student from Jimma, is studying the benefits of philosophy. He is told that one of the benefits is \"soliciting creativity.\" This means that philosophy helps people to:",
    "options": [
      "A. Only think in a structured and logical way.",
      "B. Rely on the ideas of others for creative solutions.",
      "C. Generate new and innovative ideas by questioning assumptions.",
      "D. Memorize historical facts and figures."
    ],
    "correctAnswer": 2,
    "explanation": "Philosophy solicits (calls forth) creativity by challenging individuals to move beyond conventional thinking. By questioning fundamental assumptions, it opens up new possibilities for understanding and solving problems in innovative ways.",
    "subject": "logic",
    "year": 2016,
    "chapter": 1
  },
  {
    "id": "log-2016-1-17",
    "question": "Rahel, a student from Adama, is learning about the relationship between philosophy and wisdom. Her professor tells her that philosophy is a \"love of wisdom.\" Which of the following statements is a correct implication of this?",
    "options": [
      "A. Philosophy is a search for a final, unchanging truth.",
      "B. It helps you forget yourself.",
      "C. It is the development of critical habits and a continuous search for truth.",
      "D. It is a set of technical skills."
    ],
    "correctAnswer": 2,
    "explanation": "The \"love of wisdom\" implies an active, ongoing pursuit (a continuous search) characterized by critical thinking and reflection. It is not about finding a final answer (A), forgetting the self (B), or acquiring technical skills (D).",
    "subject": "logic",
    "year": 2016,
    "chapter": 1
  },
  {
    "id": "log-2017-1-1",
    "question": "Bekele, a student from Hawassa University, is debating with his friend, Chala, about the most serious philosophical questions. Which of the following would be considered a serious philosophical question?",
    "options": [
      "A. What is the height of the Entoto mountains?",
      "B. How do cars work?",
      "C. What is the purpose of human existence?",
      "D. What is the best type of coffee to drink in Sidama?"
    ],
    "correctAnswer": 2,
    "explanation": "Philosophical questions are fundamental, abstract, and require conceptual analysis and reasoned argument. They are not answerable by mere measurement (A), technical explanation (B), or personal preference (D). The question of life's purpose is a classic, profound philosophical inquiry.",
    "subject": "logic",
    "year": 2017,
    "chapter": 1
  },
  {
    "id": "log-2017-1-2",
    "question": "Which one of the following is not a question of Metaphysics(2013)?",
    "options": [
      "A. What are the attributes of God?",
      "B. Did the universe come by accident?",
      "C. Is beauty objective or subjective?",
      "D. Is reality composed of one element?"
    ],
    "correctAnswer": 2,
    "explanation": "Questions A (Theology), B (Cosmology), and D (Ontology) are all sub-branches of metaphysics. Question C, \"Is beauty objective or subjective?\" is a question of Aesthetics, which is a branch of Axiology (value theory).",
    "subject": "logic",
    "year": 2017,
    "chapter": 1
  },
  {
    "id": "log-2017-1-3",
    "question": "The Theological Aspects of Metaphysics mainly focus on:",
    "options": [
      "A. The origin, nature, and development of universe.",
      "B. The nature and meaning of existence.",
      "C. The religious theories that deal with the conceptions about God.",
      "D. The study of human beings and mind-body relations."
    ],
    "correctAnswer": 2,
    "explanation": "The theological aspect of metaphysics is concerned with philosophical questions about God's existence, nature, and attributes.",
    "subject": "logic",
    "year": 2017,
    "chapter": 1
  },
  {
    "id": "log-2017-1-4",
    "question": "Of the following metaphysical speculation, one clearly emphasizes human nature including morality, free will, and soul. Which one is it?",
    "options": [
      "A. Cosmological aspect",
      "B. Anthropological aspect",
      "C. Ontological aspect",
      "D. Theological aspect"
    ],
    "correctAnswer": 1,
    "explanation": "The anthropological aspect of metaphysics focuses specifically on the nature of humanity, exploring questions about free will, morality, and the soul.",
    "subject": "logic",
    "year": 2017,
    "chapter": 1
  },
  {
    "id": "log-2017-1-5",
    "question": "A metaphysical question that raises the most basic inquiry about God is:",
    "options": [
      "A. Cosmological aspect",
      "B. Anthropological aspect",
      "C. Theological aspect",
      "D. Ontological aspect"
    ],
    "correctAnswer": 2,
    "explanation": "As in question 3, the theological aspect deals directly with inquiries about God.",
    "subject": "logic",
    "year": 2017,
    "chapter": 1
  },
  {
    "id": "log-2017-1-6",
    "question": "What was the world made of? Identify the facet which primarily belongs to:",
    "options": [
      "A. Ontology",
      "B. Cosmology",
      "C. Anthropology",
      "D. Theology"
    ],
    "correctAnswer": 1,
    "explanation": "This is a cosmological question within metaphysics, as it deals with the origin and fundamental composition of the universe.",
    "subject": "logic",
    "year": 2017,
    "chapter": 1
  },
  {
    "id": "log-2017-1-7",
    "question": "How do we know the nature of the ultimate reality? The question refers to:",
    "options": [
      "A. Ontological aspect of metaphysics",
      "B. Cosmological aspect of epistemology",
      "C. Ontological aspect of epistemology",
      "D. Cosmological aspect of metaphysics"
    ],
    "correctAnswer": 0,
    "explanation": "The question \"How do we know the nature of ultimate reality?\" combines an epistemological concern (\"how do we know\") with a metaphysical one (\"the nature of ultimate reality\"). The primary subject is the nature of reality, which is ontology. The best fit is A, as it places the epistemological method in service of an ontological inquiry.",
    "subject": "logic",
    "year": 2017,
    "chapter": 1
  },
  {
    "id": "log-2017-1-8",
    "question": "“Is basic reality found in matter or in spirit?” This question can be asked under:",
    "options": [
      "A. Theological",
      "B. Ontological",
      "C. Anthropological",
      "D. Cosmological"
    ],
    "correctAnswer": 1,
    "explanation": "This is a fundamental ontological question. Ontology is the study of being and existence, and this question defines the central divide between materialism (matter) and idealism (spirit).",
    "subject": "logic",
    "year": 2017,
    "chapter": 1
  },
  {
    "id": "log-2017-1-9",
    "question": "Which of the following is the question of cosmology?",
    "options": [
      "A. What it means for anything to exist?",
      "B. How the universe originated?",
      "C. What is the moral status of human beings?",
      "D. Is reality in the physical world or spiritual world?",
      "E. None"
    ],
    "correctAnswer": 1,
    "explanation": "Cosmology is the aspect of metaphysics that deals with the origin of the universe. A and D are ontological, and C is ethical.",
    "subject": "logic",
    "year": 2017,
    "chapter": 1
  },
  {
    "id": "log-2017-1-10",
    "question": "Is man born morally evil/good/neutral? This question belongs to:",
    "options": [
      "A. Epistemology",
      "B. Metaphysics",
      "C. Logic",
      "D. Ethics"
    ],
    "correctAnswer": 3,
    "explanation": "This is a question about moral nature and human goodness, which is a central concern of ethics.",
    "subject": "logic",
    "year": 2017,
    "chapter": 1
  },
  {
    "id": "log-2017-1-11",
    "question": "Among the following fields of philosophy, which one deals with formulating the right principles of reasoning and developing scientific methods for evaluating the validity and soundness of arguments(2013)?",
    "options": [
      "A. Metaphysics",
      "B. Epistemology",
      "C. Axiology",
      "D. Logic",
      "E. Aesthetics"
    ],
    "correctAnswer": 3,
    "explanation": "Logic is the branch of philosophy that studies the principles of correct reasoning and provides the tools for evaluating arguments.",
    "subject": "logic",
    "year": 2017,
    "chapter": 1
  },
  {
    "id": "log-2017-1-12",
    "question": "Among the following alternatives, which one is not the question of epistemology(2013)?",
    "options": [
      "A. What is truth, and how can we know a statement is true?",
      "B. How can we be sure that what we perceive through our senses is correct?",
      "C. What is the relationship and difference between faith and reason?",
      "D. What is a human being? A thinking mind? A perishable body?",
      "E. What does it mean to know?"
    ],
    "correctAnswer": 3,
    "explanation": "Questions A, B, C, and E are all core epistemological questions about the definition, sources, and limits of knowledge. Question D, \"What is a human being?\" is a question of metaphysics (specifically, philosophical anthropology), not epistemology.",
    "subject": "logic",
    "year": 2017,
    "chapter": 1
  },
  {
    "id": "log-2017-1-13",
    "question": "A perspective on the source of knowledge which argues that knowledge is obtained through the senses is(2013):",
    "options": [
      "A. Rationalism",
      "B. Empiricism",
      "C. Revelation",
      "D. Intuition"
    ],
    "correctAnswer": 1,
    "explanation": "Empiricism is the epistemological theory that states all knowledge originates from sensory experience.",
    "subject": "logic",
    "year": 2017,
    "chapter": 1
  },
  {
    "id": "log-2017-1-14",
    "question": "Identify a true statement about rationalism in the theory of knowledge:",
    "options": [
      "A. It is obtained from sense experience",
      "B. It is acquired from observation",
      "C. It is acquired through the intellect",
      "D. It is obtained from perception"
    ],
    "correctAnswer": 2,
    "explanation": "Rationalism is the epistemological view that reason and the intellect are the primary sources of knowledge, not sensory experience (A, B, D).",
    "subject": "logic",
    "year": 2017,
    "chapter": 1
  },
  {
    "id": "log-2017-1-15",
    "question": "Understanding or knowing about the world through observation or real events is:",
    "options": [
      "A. Intuition",
      "B. Revelation",
      "C. Empiricism",
      "D. Rationalism",
      "E. None"
    ],
    "correctAnswer": 2,
    "explanation": "This is the definition of empiricism.",
    "subject": "logic",
    "year": 2017,
    "chapter": 1
  },
  {
    "id": "log-2017-1-16",
    "question": "Presupposes a transcendent supernatural reality that breaks in the natural order:",
    "options": [
      "A. Authority",
      "B. Reason",
      "C. Revelation",
      "D. Empiricism"
    ],
    "correctAnswer": 2,
    "explanation": "Revelation is the source of knowledge that involves truth being disclosed by a divine or supernatural power, breaking into the natural order.",
    "subject": "logic",
    "year": 2017,
    "chapter": 1
  },
  {
    "id": "log-2017-1-17",
    "question": "One of the following is an aspect of epistemology that claimed religious books and prophets are the sources of knowledge:",
    "options": [
      "A. Rationalism",
      "B. Revelation",
      "C. Intuition",
      "D. Authority"
    ],
    "correctAnswer": 1,
    "explanation": "Revelation involves receiving knowledge from a divine source, often through sacred texts or prophets.",
    "subject": "logic",
    "year": 2017,
    "chapter": 1
  },
  {
    "id": "log-2017-1-18",
    "question": "Which one of the following is correct about Empiricism?",
    "options": [
      "A. What is truth, and how can we know a statement is true?",
      "B. The ultimate reality can be grasped by the five senses.",
      "C. Is knowledge one or many?",
      "D. All."
    ],
    "correctAnswer": 1,
    "explanation": "This is the core claim of empiricism. Option A is a general epistemological question, not specific to empiricism. Option C is unclear. Therefore, \"All\" (D) is incorrect.",
    "subject": "logic",
    "year": 2017,
    "chapter": 1
  },
  {
    "id": "log-2017-1-19",
    "question": "The best way to learn and understand philosophy is \"to philosophize.\" Here, the expression \"to philosophize\" means:",
    "options": [
      "A. To become acquainted with differing philosophical positions",
      "B. To be confronted with philosophical questions",
      "C. To read the philosophers themselves & to grapple with the issues for oneself",
      "D. All except B",
      "E. All of the above"
    ],
    "correctAnswer": 4,
    "explanation": "To philosophize is to actively engage in the entire process: reading primary texts (C), understanding different arguments (A), and personally grappling with fundamental questions (B). Therefore, all options are correct.",
    "subject": "logic",
    "year": 2017,
    "chapter": 1
  },
  {
    "id": "log-2017-1-20",
    "question": "Philosophy is the mother of all sciences because:",
    "options": [
      "A. The pivotal thing in philosophy is asking appropriate questions.",
      "B. The first philosophers were scientists.",
      "C. Philosophy is a versatile discipline.",
      "D. A and C are correct answers.",
      "E. All are correct answers."
    ],
    "correctAnswer": 4,
    "explanation": "All points are valid reasons. Historically, the first scientists were philosophers (B). Methodologically, philosophy's role in asking fundamental questions (A) and its versatile, foundational nature (C) support the claim.",
    "subject": "logic",
    "year": 2017,
    "chapter": 1
  },
  {
    "id": "log-2017-1-21",
    "question": "Identify the correct correlation:",
    "options": [
      "A. Anthropology — nature of human beings",
      "B. Cosmology — origin of the universe",
      "C. Theology — nature of being",
      "D. Ontology — nature of God",
      "E. A and B"
    ],
    "correctAnswer": 4,
    "explanation": "A and B are the only correct pairs. C should be Theology — nature of God. D should be Ontology — nature of being.",
    "subject": "logic",
    "year": 2017,
    "chapter": 1
  },
  {
    "id": "log-2017-1-22",
    "question": "The science that deals with moral principles, values, codes, rules and norms is called:",
    "options": [
      "A. Political Philosophy",
      "B. Moral Philosophy",
      "C. Aesthetics",
      "D. Ethics"
    ],
    "correctAnswer": 3,
    "explanation": "Ethics (or moral philosophy) is the branch of philosophy that involves systematizing, defending, and recommending concepts of right and wrong behavior.",
    "subject": "logic",
    "year": 2017,
    "chapter": 1
  },
  {
    "id": "log-2017-1-23",
    "question": "Which branch of ethics deals with the meaning and origin of ethical issues?",
    "options": [
      "A. Meta-ethics",
      "B. Applied ethics",
      "C. Normative ethics",
      "D. Deontological ethics",
      "E. Teleological ethics"
    ],
    "correctAnswer": 0,
    "explanation": "Meta-ethics is the branch of ethics that seeks to understand the nature of ethical properties, statements, attitudes, and judgments. It asks questions about the meaning of \"good\" and the origin of ethical principles.",
    "subject": "logic",
    "year": 2017,
    "chapter": 1
  },
  {
    "id": "log-2017-1-24",
    "question": "Issues to be dealt under applied ethics shouldn’t be:",
    "options": [
      "A. Moral issues",
      "B. Controversial issues",
      "C. Subjective issues"
    ],
    "correctAnswer": 2,
    "explanation": "Applied ethics deals with complex, controversial moral dilemmas (B) where there is significant debate and no single, clear answer. If an issue is purely subjective or already has a definite answer, it falls outside the scope of applied ethical debate.",
    "subject": "logic",
    "year": 2017,
    "chapter": 1
  },
  {
    "id": "log-2017-1-25",
    "question": "Tigist, a resident of Hawassa, is contemplating the question, \"Is man born morally good, evil, or neutral?\" This question falls under which branch of philosophy?",
    "options": [
      "A. Epistemology",
      "B. Metaphysics",
      "C. Ethics",
      "D. Logic"
    ],
    "correctAnswer": 2,
    "explanation": "This is a question about innate human moral nature, which is a central concern of ethics.",
    "subject": "logic",
    "year": 2017,
    "chapter": 1
  },
  {
    "id": "log-2017-1-26",
    "question": "Lidiya, a student from Hawassa, is asked to identify a philosophical question. Which of the following is a philosophical question?",
    "options": [
      "A. What is the current time?",
      "B. What is the definition of a valid argument?",
      "C. What is the speed of light?",
      "D. What is the average height of an Ethiopian person?"
    ],
    "correctAnswer": 1,
    "explanation": "Question B is a question of logic, a branch of philosophy. The other options are factual questions answerable by looking at a clock (A), scientific measurement (C), or collecting data (D).",
    "subject": "logic",
    "year": 2017,
    "chapter": 1
  },
  {
    "id": "log-2017-1-27",
    "question": "Sintayehu, a student from Bahir Dar, is asked to identify a question that would not be considered a basic question in philosophy. Which of the following would she choose?",
    "options": [
      "A. What is an argument?",
      "B. What time is it?",
      "C. Where did the universe come from?",
      "D. What is the nature of human existence?"
    ],
    "correctAnswer": 1,
    "explanation": "As in previous questions, \"What time is it?\" is a factual question, not a fundamental philosophical one. A is logic, C is metaphysics/cosmology, and D is metaphysics/anthropology.",
    "subject": "logic",
    "year": 2017,
    "chapter": 1
  },
  {
    "id": "log-2017-1-28",
    "question": "Which of the following is not studied by Aesthetics?",
    "options": [
      "A. Music",
      "B. A beautiful landscape",
      "C. Mona Lisa",
      "D. None of the above"
    ],
    "correctAnswer": 3,
    "explanation": "Aesthetics is the branch of philosophy that studies the nature of beauty and taste. It examines aesthetic values often expressed through judgments of sentiment and applies to all art forms (A, C) and natural beauty (B). Therefore, all are studied by aesthetics.",
    "subject": "logic",
    "year": 2017,
    "chapter": 1
  },
  {
    "id": "log-2017-1-29",
    "question": "All are the benefits of studying philosophy except one. Which one?",
    "options": [
      "A. Collective thinking",
      "B. Critical thinking",
      "C. Critical reflection",
      "D. Soliciting creativity"
    ],
    "correctAnswer": 0,
    "explanation": "\"Collective thinking\" (often implying groupthink or uncritical acceptance of group views) is not a benefit of philosophy. Philosophy promotes independent critical thinking (B), reflection (C), and creativity (D) by questioning assumptions.",
    "subject": "logic",
    "year": 2017,
    "chapter": 1
  },
  // ==================== LOGIC QUESTIONS ====================
  
  //logic-2013-1-1
  
// ==================== LOGIC CHAPTER 1 QUESTIONS (30) ====================
{
    "id": "log-2013-2-1",
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
    "chapter": 2
  },
  {
    "id": "log-2013-2-2",
    "question": "For the past twenty-five years, Ethiopian athletes have been dominant in the world of athletics. Thus, Ethiopian athletes will probably remain dominant in the coming couple of years. This argument is an example of a(n) _______ argument.",
    "options": [
      "deductive",
      "inductive"
    ],
    "correctAnswer": 1,
    "explanation": "This is an inductive argument. Inductive arguments move from specific observations (past performance) to a broader, probable conclusion (future performance). The conclusion is not guaranteed to be true, but it is made probable by the premises.",
    "subject": "logic",
    "year": 2013,
    "chapter": 2
  },
  {
    "id": "log-2013-2-3",
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
    "chapter": 2
  },
  {
    "id": "log-2013-2-4",
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
    "chapter": 2
  },
  {
    "id": "log-2013-2-5",
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
    "chapter": 2
  },
  {
    "id": "log-2013-2-6",
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
    "chapter": 2
  },
  {
    "id": "log-2013-2-7",
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
    "chapter": 2
  },
  {
    "id": "log-2013-2-8",
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
    "chapter": 2
  },
  {
    "id": "log-2013-2-9",
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
    "chapter": 2
  },
  {
    "id": "log-2013-2-10",
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
    "chapter": 2
  },
  {
    "id": "log-2013-2-11",
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
    "chapter": 2
  },
  {
    "id": "log-2013-2-12",
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
    "chapter": 2
  },
  {
    "id": "log-2013-2-13",
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
    "chapter": 2
  },
  {
    "id": "log-2013-2-14",
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
    "chapter": 2
  },
  {
    "id": "log-2013-2-15",
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
    "chapter": 2
  },
  {
    "id": "log-2013-2-16",
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
    "chapter": 2
  },
  {
    "id": "log-2013-2-17",
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
    "chapter": 2
  },
  {
    "id": "log-2013-2-18",
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
    "chapter": 2
  },
  {
    "id": "log-2013-2-19",
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
    "chapter": 2
  },
  {
    "id": "log-2013-2-20",
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
    "chapter": 2
  },
  {
    "id": "log-2013-2-21",
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
    "chapter": 2
  },
  {
    "id": "log-2013-2-22",
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
    "chapter": 2
  },
  {
    "id": "log-2013-2-23",
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
    "chapter": 2
  },
  {
    "id": "log-2013-2-24",
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
    "chapter": 2
  },
  {
    "id": "log-2013-2-25",
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
    "chapter": 2
  },
  {
    "id": "log-2017-2-26",
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
    "year": 2017,
    "chapter": 2
  },
  {
    "id": "log-2017--27",
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
    "year": 2017,
    "chapter": 2
  },
  {
    "id": "log-2017-2-28",
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
    "year": 2017,
    "chapter": 2
  },
  {
    "id": "log-2017-2-29",
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
    "year": 2017,
    "chapter": 2
  },
  {
    "id": "log-2017-2-30",
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
    "year": 2017,
    "chapter": 2
  },
  {
    "id": "log-2017-2-31",
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
    "year": 2017,
    "chapter": 2
  },
  {
    "id": "log-2017-2-32",
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
    "year": 2017,
    "chapter": 2
  },
  {
    "id": "log-2017-2-33",
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
    "year": 2017,
    "chapter": 2
  },
  {
    "id": "log-2017-2-34",
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
    "year": 2017,
    "chapter": 2
  },
  {
    "id": "log-2017-2-35",
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
    "year": 2017,
    "chapter": 2
  },
  {
    "id": "log-2017-2-36",
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
    "year": 2017,
    "chapter": 2
  },
  {
    "id": "log-2017-3-37",
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
    "year": 2017,
    "chapter": 3
  },
  {
    "id": "log-2013-3-38",
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
    "chapter": 3
  },
  {
    "id": "log-2013-3-39",
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
    "chapter": 3
  },
  {
    "id": "log-2017-2-40",
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
    "year": 2017,
    "chapter": 2
  },
  {
    "id": "log-2017-2-41",
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
    "year": 2017,
    "chapter": 2
  },
  {
    "id": "log-2017-2-42",
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
    "year": 2017,
    "chapter": 2
  },
  {
    "id": "log-2017-2-43",
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
    "year": 2017,
    "chapter": 2
  },
  {
    "id": "log-2017-2-44",
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
    "year": 2017,
    "chapter": 2
  },
  {
    "id": "log-2017-2-45",
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
    "year": 2017,
    "chapter": 2
  },
  {
    "id": "log-2017-2-46",
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
    "year": 2017,
    "chapter": 2
  },
  {
    "id": "log-2017-2-47",
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
    "year": 2017,
    "chapter": 2
  },
  {
    "id": "log-2017-2-48",
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
    "year": 2017,
    "chapter": 2
  },
  {
    "id": "log-2017-2-49",
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
    "year": 2017,
    "chapter": 2
  },
  {
    "id": "log-2017-2-50",
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
    "year": 2017,
    "chapter": 2
  },
  {
    "id": "log-2017-2-51",
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
    "year": 2017,
    "chapter": 2
  },
  {
    "id": "log-2017-2-52",
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
    "year": 2017,
    "chapter": 2
  },
  {
    "id": "log-2017-2-53",
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
    "year": 2017,
    "chapter": 2
  },
  {
    "id": "log-2017-2-54",
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
    "year": 2017,
    "chapter": 2
  },
  {
    "id": "log-2017-2-55",
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
    "year": 2017,
    "chapter": 2
  },
  {
    "id": "log-2017-2-56",
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
    "year": 2017,
    "chapter": 2
  },
  {
    "id": "log-2017-2-57",
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
    "year": 2017,
    "chapter": 2
  },
  {
    "id": "log-2017-2-58",
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
    "year": 2017,
    "chapter": 2
  },
  // ========== ========== ENGLISH QUESTIONS ====================
  
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
  
{
    "id": "psych-2014-3-1",
    "question": "A dog learns to salivate at the sound of a bell because the bell was repeatedly paired with food. In this scenario, the sound of the bell is the:",
    "options": [
      "A. Unconditioned stimulus",
      "B. Neutral stimulus",
      "C. Conditioned stimulus",
      "D. Unconditioned response"
    ],
    "correctAnswer": 2,
    "explanation": "Initially, the bell is a neutral stimulus because it doesn't naturally elicit salivation. Through its association with the food (the unconditioned stimulus), the bell becomes a conditioned stimulus. This means it has acquired the ability to trigger a learned response (salivation) on its own. The salivation in response to the bell is the conditioned response.",
    "subject": "psychology",
    "year": 2014,
    "chapter": 3
  },
  {
    "id": "psych-2014-3-2",
    "question": "In Pavlov's original experiment, the food that naturally elicits salivation from the dogs is the:",
    "options": [
      "A. Conditioned stimulus",
      "B. Unconditioned stimulus",
      "C. Neutral stimulus",
      "D. Conditioned response"
    ],
    "correctAnswer": 1,
    "explanation": "An unconditioned stimulus (US) is a stimulus that naturally and automatically triggers a response without any prior learning. In Pavlov's experiment, the food is the US because it naturally causes the dogs to salivate. The salivation in response to the food is the unconditioned response (UR).",
    "subject": "psychology",
    "year": 2014,
    "chapter": 3
  },
  {
    "id": "psych-2014-3-3",
    "question": "A child who was once afraid of the dentist's drill, now fears the sound of the buzzer at the barbershop. This is an example of:",
    "options": [
      "A. Spontaneous recovery",
      "B. Stimulus discrimination",
      "C. Higher-order conditioning",
      "D. Stimulus generalization"
    ],
    "correctAnswer": 3,
    "explanation": "Stimulus generalization occurs when an organism responds to stimuli that are similar to the original conditioned stimulus. The child learned to fear the dentist's drill, and this fear generalized to a similar sound, the buzzer at the barbershop.",
    "subject": "psychology",
    "year": 2014,
    "chapter": 3
  },
  {
    "id": "psych-2014-3-4",
    "question": "After repeatedly ringing a bell without presenting food, Pavlov's dogs stopped salivating at the sound of the bell. This process is known as:",
    "options": [
      "A. Spontaneous recovery",
      "B. Extinction",
      "C. Generalization",
      "D. Acquisition"
    ],
    "correctAnswer": 1,
    "explanation": "Extinction is the gradual weakening and disappearance of a conditioned response. This happens when the conditioned stimulus (the bell) is repeatedly presented without the unconditioned stimulus (the food).",
    "subject": "psychology",
    "year": 2014,
    "chapter": 3
  },
  {
    "id": "psych-2014-3-5",
    "question": "A person who has overcome their fear of dogs suddenly feels a surge of anxiety when they see a dog that looks similar to the one that originally scared them. This is an example of:",
    "options": [
      "A. Stimulus generalization",
      "B. Spontaneous recovery",
      "C. Extinction",
      "D. Stimulus discrimination"
    ],
    "correctAnswer": 1,
    "explanation": "Spontaneous recovery is the reappearance of a previously extinguished conditioned response after a period of rest. Even though the fear of dogs had seemingly disappeared (extinguished), it spontaneously returned when a similar dog was encountered.",
    "subject": "psychology",
    "year": 2014,
    "chapter": 3
  },
  {
    "id": "psych-2014-3-6",
    "question": "The primary focus of classical conditioning is on the learning of associations between stimuli, which results in changes to:",
    "options": [
      "A. Voluntary behaviors",
      "B. Involuntary, reflexive responses",
      "C. Social cognition",
      "D. Complex problem-solving skills"
    ],
    "correctAnswer": 1,
    "explanation": "Classical conditioning deals with involuntary, reflexive responses (like salivating or blinking) that are learned through association. The organism doesn't consciously choose the response; it happens automatically. In contrast, voluntary behaviors are the focus of operant conditioning.",
    "subject": "psychology",
    "year": 2014,
    "chapter": 3
  },
  {
    "id": "psych-2014-3-7",
    "question": "A previously neutral stimulus acquires the ability to elicit a response after being paired with an unconditioned stimulus. This process is called:",
    "options": [
      "A. Extinction",
      "B. Spontaneous recovery",
      "C. Acquisition",
      "D. Stimulus discrimination"
    ],
    "correctAnswer": 2,
    "explanation": "Acquisition is the initial stage of learning in classical conditioning where a neutral stimulus begins to become a conditioned stimulus by being repeatedly paired with an unconditioned stimulus. This is when the association is first established.",
    "subject": "psychology",
    "year": 2014,
    "chapter": 3
  },
  {
    "id": "psych-2014-3-8",
    "question": "Which of the following is an example of an unconditioned response?",
    "options": [
      "A. A child crying at the sight of a doctor's needle",
      "B. Salivating at the sight of a favorite food",
      "C. Blinking when a puff of air hits the eye",
      "D. Feeling happy when hearing a favorite song"
    ],
    "correctAnswer": 2,
    "explanation": "An unconditioned response (UR) is an unlearned, natural reflexive reaction to an unconditioned stimulus (US). A puff of air hitting the eye is a US, and blinking is the UR. The other options are either conditioned responses (A, D) or a conditioned response (B). Salivating at the sight of food is an unconditioned response, but the prompt says a favorite food, which could imply a learned association, however, blinking is the most textbook example of an unconditioned response.",
    "subject": "psychology",
    "year": 2013,
    "chapter": 3
  },
  {
    "id": "psych-2014-3-9",
    "question": "A child cries whenever they see a police officer because a police officer once gave their parents a speeding ticket. In this case, the police officer is the:",
    "options": [
      "A. Unconditioned stimulus",
      "B. Conditioned stimulus",
      "C. Unconditioned response",
      "D. Neutral stimulus"
    ],
    "correctAnswer": 1,
    "explanation": "Initially, the police officer was a neutral stimulus. After being paired with a negative event (the speeding ticket, which is the unconditioned stimulus), the police officer becomes a conditioned stimulus that elicits a learned fear or crying response.",
    "subject": "psychology",
    "year": 2014,
    "chapter": 3
  },
  {
    "id": "psych-2014-3-10",
    "question": "The weakening of the conditioned response when the unconditioned stimulus is no longer present is called:",
    "options": [
      "A. Extinction",
      "B. Spontaneous recovery",
      "C. Stimulus generalization",
      "D. Acquisition"
    ],
    "correctAnswer": 0,
    "explanation": "This is the definition of extinction. It is the process by which a conditioned response fades and eventually disappears when the conditioned stimulus is no longer paired with the unconditioned stimulus.",
    "subject": "psychology",
    "year": 2014,
    "chapter": 3
  },
  {
    "id": "psych-2013-3-1",
    "question": "A parent gives a child a toy for cleaning their room. The toy is a:",
    "options": [
      "A. Positive reinforcer",
      "B. Negative reinforcer",
      "C. Positive punisher",
      "D. Negative punisher"
    ],
    "correctAnswer": 0,
    "explanation": "Positive reinforcement involves adding a desirable stimulus (the toy) to increase the frequency of a behavior (cleaning the room). The word \"positive\" means something is being added, and \"reinforcement\" means the behavior is being strengthened.",
    "subject": "psychology",
    "year": 2013,
    "chapter": 3
  },
  {
    "id": "psych-2013-3-2",
    "question": "A child's nagging behavior stops when their parent gives them a candy bar. In this situation, the child's nagging is an example of a behavior that is being:",
    "options": [
      "A. Positively reinforced",
      "B. Negatively reinforced",
      "C. Positively punished",
      "D. Negatively punished"
    ],
    "correctAnswer": 0,
    "explanation": "The child's nagging is positively reinforced by the parent giving them a candy bar. The parent is adding a desirable stimulus (the candy) which increases the likelihood that the child will nag again in the future to get what they want.",
    "subject": "psychology",
    "year": 2013,
    "chapter": 3
  },
  {
    "id": "psych-2013-3-3",
    "question": "A student studies hard for an exam and their teacher cancels the dreaded group project. The student's studying is an example of a behavior that is being:",
    "options": [
      "A. Positively reinforced",
      "B. Negatively reinforced",
      "C. Positively punished",
      "D. Negatively punished"
    ],
    "correctAnswer": 1,
    "explanation": "Negative reinforcement involves removing an aversive stimulus (the dreaded group project) to increase the frequency of a behavior (studying). The word \"negative\" means something is being removed, and \"reinforcement\" means the behavior is being strengthened.",
    "subject": "psychology",
    "year": 2013,
    "chapter": 3
  },
  {
    "id": "psych-2013-3-4",
    "question": "An unpleasant stimulus is added to decrease the frequency of a behavior. This is an example of:",
    "options": [
      "A. Positive reinforcement",
      "B. Negative reinforcement",
      "C. Positive punishment",
      "D. Negative punishment"
    ],
    "correctAnswer": 2,
    "explanation": "Positive punishment involves adding an aversive stimulus (like a spanking or a scolding) to decrease a behavior. The word \"positive\" means something is being added, and \"punishment\" means the behavior is being weakened.",
    "subject": "psychology",
    "year": 2013,
    "chapter": 3
  },
  {
    "id": "psych-2013-3-5",
    "question": "A teenager's phone is taken away after they miss curfew. This is an example of:",
    "options": [
      "A. Positive reinforcement",
      "B. Negative reinforcement",
      "C. Positive punishment",
      "D. Negative punishment"
    ],
    "correctAnswer": 3,
    "explanation": "Negative punishment involves removing a desirable stimulus (the phone) to decrease a behavior (missing curfew). The word \"negative\" means something is being removed, and \"punishment\" means the behavior is being weakened.",
    "subject": "psychology",
    "year": 2013,
    "chapter": 3
  },
  {
    "id": "psych-2013-3-6",
    "question": "A company pays its sales employees a bonus for every ten cars they sell. This is an example of a:",
    "options": [
      "A. Fixed ratio schedule",
      "B. Variable ratio schedule",
      "C. Fixed interval schedule",
      "D. Variable interval schedule"
    ],
    "correctAnswer": 0,
    "explanation": "A fixed ratio schedule is a reinforcement schedule where a response is reinforced only after a specific, predictable number of responses has occurred. In this case, the bonus is given after exactly ten cars are sold.",
    "subject": "psychology",
    "year": 2013,
    "chapter": 3
  },
  {
    "id": "psych-2013-3-7",
    "question": "A fishing enthusiast catches a fish after an unpredictable number of casts. This is an example of a:",
    "options": [
      "A. Fixed ratio schedule",
      "B. Variable ratio schedule",
      "C. Fixed interval schedule",
      "D. Variable interval schedule"
    ],
    "correctAnswer": 1,
    "explanation": "A variable ratio schedule is a reinforcement schedule where a response is reinforced after an unpredictable number of responses. It produces a high, steady rate of response because the organism knows reinforcement is coming but doesn't know exactly when. This is the schedule that gambling relies on.",
    "subject": "psychology",
    "year": 2013,
    "chapter": 3
  },
  {
    "id": "psych-2013-3-8",
    "question": "A worker is paid a weekly salary, regardless of the amount of work they complete. This is an example of a:",
    "options": [
      "A. Fixed ratio schedule",
      "B. Variable ratio schedule",
      "C. Fixed interval schedule",
      "D. Variable interval schedule"
    ],
    "correctAnswer": 2,
    "explanation": "A fixed interval schedule is a reinforcement schedule where the first response is rewarded only after a specific, predictable amount of time has passed. The worker gets paid once a week, no matter how much they work, so the reinforcement is tied to a fixed period of time.",
    "subject": "psychology",
    "year": 2013,
    "chapter": 3
  },
  {
    "id": "psych-2013-3-9",
    "question": "A pop quiz in a class that occurs at random, unpredictable times is an example of a:",
    "options": [
      "A. Fixed ratio schedule",
      "B. Variable ratio schedule",
      "C. Fixed interval schedule",
      "D. Variable interval schedule"
    ],
    "correctAnswer": 3,
    "explanation": "A variable interval schedule is a reinforcement schedule where a response is rewarded after an unpredictable amount of time has passed. Because the student doesn't know when the next quiz will be, they have to study regularly, which produces a steady rate of studying.",
    "subject": "psychology",
    "year": 2013,
    "chapter": 3
  },
  {
    "id": "psych-2013-3-10",
    "question": "In operant conditioning, a behavior is more likely to be repeated if it is followed by a:",
    "options": [
      "A. Punisher",
      "B. Discriminative stimulus",
      "C. Neutral stimulus",
      "D. Reinforcer"
    ],
    "correctAnswer": 3,
    "explanation": "By definition, a reinforcer is a consequence that strengthens a behavior, making it more likely to be repeated. A punisher has the opposite effect.",
    "subject": "psychology",
    "year": 2013,
    "chapter": 3
  },
  {
    "id": "psych-2013-3-11",
    "question": "The systematic process of reinforcing successive approximations of a desired behavior is known as:",
    "options": [
      "A. Shaping",
      "B. Generalization",
      "C. Extinction",
      "D. Acquisition"
    ],
    "correctAnswer": 0,
    "explanation": "Shaping is an operant conditioning procedure in which reinforcers guide behavior toward closer and closer approximations of the desired behavior. This is how animals are trained to do complex tricks or how a child learns to speak.",
    "subject": "psychology",
    "year": 2013,
    "chapter": 3
  },
  {
    "id": "psych-2013-3-12",
    "question": "Which of the following is an example of a primary reinforcer?",
    "options": [
      "A. Money",
      "B. A high-five",
      "C. Food",
      "D. A good grade"
    ],
    "correctAnswer": 2,
    "explanation": "A primary reinforcer is a stimulus that is naturally rewarding because it satisfies a biological need. Examples include food, water, and sleep. Secondary reinforcers (like money, good grades, or praise) are learned through association with primary reinforcers.",
    "subject": "psychology",
    "year": 2013,
    "chapter": 3
  },
  {
    "id": "psych-2013-3-13",
    "question": "The act of a stimulus being removed to increase the likelihood of a behavior is known as:",
    "options": [
      "A. Positive punishment",
      "B. Negative punishment",
      "C. Positive reinforcement",
      "D. Negative reinforcement"
    ],
    "correctAnswer": 3,
    "explanation": "This is the definition of negative reinforcement. A stimulus is removed (\"negative\") to increase the likelihood of a behavior (\"reinforcement\").",
    "subject": "psychology",
    "year": 2013,
    "chapter": 3
  },
  {
    "id": "psych-2013-3-14",
    "question": "A dog learns to sit on command by being given a treat. The treat is a:",
    "options": [
      "A. Primary reinforcer",
      "B. Secondary reinforcer",
      "C. Primary punisher",
      "D. Secondary punisher"
    ],
    "correctAnswer": 0,
    "explanation": "A dog treat is a form of food. Since food satisfies a biological need, it is a primary reinforcer.",
    "subject": "psychology",
    "year": 2013,
    "chapter": 3
  },
  {
    "id": "psych-2013-3-15",
    "question": "The core principle of B.F. Skinner's operant conditioning is that an organism's behavior is influenced by:",
    "options": [
      "A. Unconscious thoughts and desires",
      "B. The consequences that follow the behavior",
      "C. Observational learning from others",
      "D. Innate, reflexive responses"
    ],
    "correctAnswer": 1,
    "explanation": "B.F. Skinner's theory of operant conditioning is based on the idea that behaviors are learned and strengthened or weakened by the consequences (reinforcers or punishers) that follow them. This is the central tenet of his work.",
    "subject": "psychology",
    "year": 2013,
    "chapter": 3
  }
,
  {
    "id": "psych-2015-3-2",
    "question": "According to Albert Bandura's Social Learning Theory, the process of observing and imitating a specific behavior is called:",
    "options": [
      "Classical conditioning",
      "Operant conditioning",
      "Modeling",
      "Shaping"
    ],
    "correctAnswer": 2,
    "explanation": "Modeling is the central concept of Bandura's theory. It describes how an individual learns by observing others (the models) and imitating their behavior.",
    "subject": "psychology",
    "year": 2015,
    "chapter": 3
  },
  {
    "id": "psych-2015-3-3",
    "question": "The Bobo doll experiment demonstrated that children are more likely to imitate an aggressive model's behavior if the model is:",
    "options": [
      "Punished for their actions",
      "Rewarded for their actions",
      "A stranger to the child",
      "The same gender as the child, regardless of the outcome"
    ],
    "correctAnswer": 1,
    "explanation": "The experiment showed that children who observed an aggressive model being rewarded for their behavior were more likely to imitate the aggression themselves. This is an example of vicarious reinforcement—learning through observing the consequences of another's actions.",
    "subject": "psychology",
    "year": 2015,
    "chapter": 3
  },
  {
    "id": "psych-2015-3-4",
    "question": "Bandura's theory emphasizes the importance of four mediational processes that occur between the observation of a model and the imitation of their behavior. Which of the following is NOT one of those processes?",
    "options": [
      "Attention",
      "Retention",
      "Conditioning",
      "Motivation"
    ],
    "correctAnswer": 2,
    "explanation": "Bandura's four mediational processes are: Attention (the observer must pay attention to the model's behavior), Retention (they must remember the behavior), Reproduction (they must be able to reproduce the behavior), and Motivation (they must be motivated to imitate the behavior). Conditioning is a concept from classical and operant learning, not Bandura's theory.",
    "subject": "psychology",
    "year": 2015,
    "chapter": 3
  },
  {
    "id": "psych-2015-3-5",
    "question": "The concept that learning can occur without any obvious reinforcement and may not be demonstrated until a later time is known as:",
    "options": [
      "Spontaneous recovery",
      "Latent learning",
      "Higher-order conditioning",
      "Insight learning"
    ],
    "correctAnswer": 1,
    "explanation": "Latent learning is a type of learning that occurs, but remains hidden until there is a reason to demonstrate it. For example, a person might learn the layout of a town by driving around, but they don't show that knowledge until they have to give someone directions.",
    "subject": "psychology",
    "year": 2015,
    "chapter": 3
  },
  {
    "id": "psych-2015-3-6",
    "question": "A student suddenly understands how to solve a difficult math problem after struggling with it for a long time. This \"aha!\" moment is an example of:",
    "options": [
      "Latent learning",
      "Insight learning",
      "Cognitive mapping",
      "Observational learning"
    ],
    "correctAnswer": 1,
    "explanation": "Insight learning is a form of cognitive learning where the solution to a problem comes suddenly, seemingly out of nowhere, after a period of contemplation. This is in contrast to learning through trial and error.",
    "subject": "psychology",
    "year": 2015,
    "chapter": 3
  },
  {
    "id": "psych-2015-3-7",
    "question": "The process by which an individual develops a mental representation of their physical environment is known as:",
    "options": [
      "Latent learning",
      "Cognitive mapping",
      "Spontaneous recovery",
      "Instinctive drift"
    ],
    "correctAnswer": 1,
    "explanation": "A cognitive map is a mental representation of one's environment. For instance, a rat in a maze can form a cognitive map of the maze's layout, allowing it to navigate it efficiently even without direct reinforcement.",
    "subject": "psychology",
    "year": 2015,
    "chapter": 3
  },
  {
    "id": "psych-2015-3-8",
    "question": "The ability to learn to respond differently to similar but distinct stimuli is known as:",
    "options": [
      "Stimulus generalization",
      "Stimulus discrimination",
      "Extinction",
      "Spontaneous recovery"
    ],
    "correctAnswer": 1,
    "explanation": "Stimulus discrimination is the opposite of stimulus generalization. It's the ability to differentiate between a conditioned stimulus and other similar stimuli that have not been paired with the unconditioned stimulus.",
    "subject": "psychology",
    "year": 2015,
    "chapter": 3
  },
  {
    "id": "psych-2015-3-9",
    "question": "The return of a previously extinguished conditioned response after a period of rest is called:",
    "options": [
      "Acquisition",
      "Stimulus generalization",
      "Spontaneous recovery",
      "Extinction"
    ],
    "correctAnswer": 2,
    "explanation": "This is the definition of spontaneous recovery. It demonstrates that even after a behavior has been extinguished, the learning is not completely erased; it is only suppressed.",
    "subject": "psychology",
    "year": 2015,
    "chapter": 3
  },
  {
    "id": "psych-2015-3-10",
    "question": "The \"Law of Effect,\" proposed by Edward Thorndike, states that behaviors followed by satisfying consequences are more likely to be repeated, while behaviors followed by unpleasant consequences are less likely to be repeated. This law is a foundational concept of:",
    "options": [
      "Classical conditioning",
      "Cognitive learning",
      "Operant conditioning",
      "Observational learning"
    ],
    "correctAnswer": 2,
    "explanation": "The Law of Effect provided the groundwork for B.F. Skinner's work on operant conditioning, which is based on the idea that consequences shape behavior.",
    "subject": "psychology",
    "year": 2015,
    "chapter": 3
  },
  {
    "id": "psych-2015-3-11",
    "question": "Which of the following statements about learning is most accurate?",
    "options": [
      "Learning is a temporary change in behavior due to practice.",
      "Learning is always observable and directly measurable.",
      "Learning is a relatively permanent change in behavior as a result of experience.",
      "Learning includes changes in behavior due to maturation and physical growth."
    ],
    "correctAnswer": 2,
    "explanation": "This is the most widely accepted definition of learning in psychology. It distinguishes learning from temporary states (like fatigue) or changes due to biological maturation.",
    "subject": "psychology",
    "year": 2015,
    "chapter": 3
  },
  {
    "id": "psych-2015-3-12",
    "question": "The concept of reinforcement is based on the idea that a consequence of a behavior:",
    "options": [
      "Decreases the probability that the behavior will occur again.",
      "Increases the probability that the behavior will occur again.",
      "Has no effect on the future occurrence of the behavior.",
      "Punishes the individual for the behavior."
    ],
    "correctAnswer": 1,
    "explanation": "The fundamental purpose of reinforcement, whether positive or negative, is to increase the likelihood of a behavior being repeated.",
    "subject": "psychology",
    "year": 2015,
    "chapter": 3
  },
  {
    "id": "psych-2015-3-13",
    "question": "A consequence that strengthens or increases the frequency of a behavior is called a:",
    "options": [
      "Punisher",
      "Reinforcer",
      "Neutral stimulus",
      "Conditioned response"
    ],
    "correctAnswer": 1,
    "explanation": "A reinforcer is anything that follows a behavior and increases the likelihood of that behavior recurring.",
    "subject": "psychology",
    "year": 2015,
    "chapter": 3
  },
  {
    "id": "psych-2015-3-14",
    "question": "Which of the following is not a characteristic of effective punishment?",
    "options": [
      "It should be immediate and consistent.",
      "It should be intense and harsh.",
      "It should be paired with an explanation.",
      "It should target the behavior, not the person."
    ],
    "correctAnswer": 1,
    "explanation": "Effective punishment is about changing behavior, not causing harm or emotional distress. Punishment that is too intense or harsh can lead to fear, aggression, and other negative side effects, and is often not effective in the long term.",
    "subject": "psychology",
    "year": 2015,
    "chapter": 3
  },
  {
    "id": "psych-2015-3-15",
    "question": "The process of eliminating a learned behavior by no longer providing the reinforcement or punishment that maintained it is called:",
    "options": [
      "Generalization",
      "Discrimination",
      "Extinction",
      "Spontaneous recovery"
    ],
    "correctAnswer": 2,
    "explanation": "This is the definition of extinction in the context of operant conditioning. When the reinforcement that was maintaining a behavior is removed, the behavior will eventually cease.",
    "subject": "psychology",
    "year": 2015,
    "chapter": 3
  },
  {
    "id": "psych-2015-3-16",
    "question": "When a student is able to apply a concept they learned in a math class to a physics problem, they are demonstrating:",
    "options": [
      "Stimulus discrimination",
      "Response generalization",
      "Stimulus generalization",
      "Cognitive mapping"
    ],
    "correctAnswer": 1,
    "explanation": "Response generalization occurs when a person applies a learned response (like a mathematical formula) to a new, different stimulus or situation (a physics problem).",
    "subject": "psychology",
    "year": 2015,
    "chapter": 3
  },
  {
    "id": "psych-2015-3-17",
    "question": "A company gives a salesperson a bonus for every five new clients they sign. This is an example of what type of reinforcement?",
    "options": [
      "Positive reinforcement",
      "Negative reinforcement",
      "Positive punishment",
      "Negative punishment"
    ],
    "correctAnswer": 0,
    "explanation": "A desirable stimulus (the bonus) is added (\"positive\") to increase the likelihood of a behavior (signing new clients), making it positive reinforcement.",
    "subject": "psychology",
    "year": 2015,
    "chapter": 3
  },
  {
    "id": "psych-2015-3-18",
    "question": "A child's temper tantrums stop when the parent ignores them. This is an example of:",
    "options": [
      "Extinction",
      "Positive reinforcement",
      "Negative punishment",
      "Stimulus generalization"
    ],
    "correctAnswer": 0,
    "explanation": "The child's temper tantrums were likely being reinforced by the parent's attention. When the parent removes the reinforcement by ignoring the behavior, the tantrums eventually stop. This is a classic example of extinction in operant conditioning.",
    "subject": "psychology",
    "year": 2015,
    "chapter": 3
  },
  {
    "id": "psych-2015-3-19",
    "question": "A student is constantly late to class. To change this behavior, the teacher allows the student to leave class five minutes early on days they arrive on time. This is an example of:",
    "options": [
      "Positive reinforcement",
      "Negative reinforcement",
      "Positive punishment",
      "Negative punishment"
    ],
    "correctAnswer": 1,
    "explanation": "The teacher is removing an aversive stimulus (being stuck in class for the full duration) to increase the desired behavior (arriving on time). This is a clear case of negative reinforcement.",
    "subject": "psychology",
    "year": 2015,
    "chapter": 3
  },
  {
    "id": "psych-2015-3-20",
    "question": "A driver receives a ticket for speeding and subsequently drives more slowly. The ticket is a:",
    "options": [
      "Positive reinforcer",
      "Negative reinforcer",
      "Positive punisher",
      "Negative punisher"
    ],
    "correctAnswer": 2,
    "explanation": "An unpleasant stimulus (the ticket) is added (\"positive\") to decrease the likelihood of a behavior (speeding). This is a textbook example of positive punishment.",
    "subject": "psychology",
    "year": 2015,
    "chapter": 3
  },
  {
    "id": "psych-2015-3-21",
    "question": "A student who fears public speaking becomes anxious at the thought of any group presentation, even in a different class. This is an example of:",
    "options": [
      "Spontaneous recovery",
      "Stimulus discrimination",
      "Stimulus generalization",
      "Higher-order conditioning"
    ],
    "correctAnswer": 2,
    "explanation": "The student's fear of public speaking (the original conditioned stimulus) has generalized to all similar situations (stimulus generalization). The anxiety is now triggered by any group presentation, regardless of the class.",
    "subject": "psychology",
    "year": 2015,
    "chapter": 3
  },
  {
    "id": "psych-2015-3-22",
    "question": "Which learning concept best explains why a person might develop a taste aversion after getting sick from a particular food?",
    "options": [
      "Operant conditioning",
      "Observational learning",
      "Classical conditioning",
      "Insight learning"
    ],
    "correctAnswer": 2,
    "explanation": "Taste aversion is a powerful example of classical conditioning. The food (the conditioned stimulus) is paired with a negative consequence (getting sick, the unconditioned stimulus), leading to a learned aversion (the conditioned response).",
    "subject": "psychology",
    "year": 2015,
    "chapter": 3
  },
  {
    "id": "psych-2015-3-23",
    "question": "A teacher praises a student for a single good answer, and the student continues to answer questions in class. The praise is a:",
    "options": [
      "Secondary reinforcer",
      "Primary reinforcer",
      "Punisher",
      "Neutral stimulus"
    ],
    "correctAnswer": 0,
    "explanation": "Praise is a secondary reinforcer because it does not satisfy a biological need. Its reinforcing power is learned through its association with other positive experiences.",
    "subject": "psychology",
    "year": 2015,
    "chapter": 3
  },
  {
    "id": "psych-2015-3-24",
    "question": "In Pavlov's work, the natural, unlearned reaction of a dog to the sight of food is the:",
    "options": [
      "Unconditioned response",
      "Conditioned response",
      "Neutral response",
      "Spontaneous response"
    ],
    "correctAnswer": 0,
    "explanation": "A response that occurs naturally and automatically without any prior learning is an unconditioned response. The dog's salivation at the sight of food is a natural, unlearned reflex.",
    "subject": "psychology",
    "year": 2015,
    "chapter": 3
  },
  {
    "id": "psych-2015-3-25",
    "question": "The main difference between reinforcement and punishment is that reinforcement always:",
    "options": [
      "Adds a stimulus",
      "Removes a stimulus",
      "Decreases the likelihood of a behavior",
      "Increases the likelihood of a behavior"
    ],
    "correctAnswer": 3,
    "explanation": "This is the core distinction between the two. Reinforcement is designed to strengthen a behavior, while punishment is designed to weaken it.",
    "subject": "psychology",
    "year": 2015,
    "chapter": 3
  },
  {
    "id": "psych-2015-3-26",
    "question": "A student watches an older sibling receive praise for completing their chores. The younger sibling then begins to complete their own chores. This is an example of:",
    "options": [
      "Positive punishment",
      "Vicarious reinforcement",
      "Extinction",
      "Latent learning"
    ],
    "correctAnswer": 1,
    "explanation": "Vicarious reinforcement is a type of observational learning where a person is more likely to engage in a behavior if they see another person being rewarded for it. The younger sibling is motivated to do chores because they saw the older sibling's behavior being reinforced with praise.",
    "subject": "psychology",
    "year": 2015,
    "chapter": 3
  },{
    "id": "psych-2016-3-2",
    "question": "Both positive and negative punishments discourage behavior. This refers to:",
    "options": [
      "Reinforcement",
      "Punishment",
      "Extinction",
      "Spontaneous recovery"
    ],
    "correctAnswer": 1,
    "explanation": "Punishment, whether positive (adding an aversive stimulus) or negative (removing a pleasant one), is a consequence that is intended to decrease the frequency of a behavior.",
    "subject": "psychology",
    "year": 2016,
    "chapter": 3
  },
  {
    "id": "psych-2016-3-3",
    "question": "The natural stimulus in Pavlovian classical conditioning is:",
    "options": [
      "Conditioned stimulus",
      "Unconditioned stimulus",
      "Neutral stimulus",
      "Reinforcer"
    ],
    "correctAnswer": 1,
    "explanation": "In classical conditioning, the unconditioned stimulus (US) is a stimulus that naturally and automatically triggers a response without any prior learning, such as food causing salivation.",
    "subject": "psychology",
    "year": 2016,
    "chapter": 3
  },
  {
    "id": "psych-2016-3-4",
    "question": "Classical conditioning focuses on the learning of:",
    "options": [
      "Involuntary behavior",
      "Voluntary behavior",
      "Social behavior",
      "Cognitive behavior"
    ],
    "correctAnswer": 0,
    "explanation": "Classical conditioning deals with involuntary, reflexive responses (like blinking or salivating) that are learned through association between stimuli.",
    "subject": "psychology",
    "year": 2016,
    "chapter": 3
  },
  {
    "id": "psych-2016-3-5",
    "question": "Aster does a good job on math problems for homework, and her teacher awards a sticker. This demonstrates the use of:",
    "options": [
      "Extinction",
      "Reinforcement",
      "Spontaneous recovery",
      "Antecedents"
    ],
    "correctAnswer": 1,
    "explanation": "Reinforcement is any consequence that increases the likelihood of a behavior being repeated. The sticker is a positive reinforcer that encourages Aster to do a good job on her homework in the future.",
    "subject": "psychology",
    "year": 2016,
    "chapter": 3
  },
  {
    "id": "psych-2016-3-6",
    "question": "A punisher can be:",
    "options": [
      "The onset of an unpleasant event",
      "The removal of a positive state of affairs",
      "Any consequence that reduces the occurrence of a behavior",
      "A positive reinforcer"
    ],
    "correctAnswer": 2,
    "explanation": "By definition, a punisher is any consequence that weakens a behavior, making it less likely to be repeated. This can involve adding an unpleasant stimulus (positive punishment) or removing a pleasant one (negative punishment).",
    "subject": "psychology",
    "year": 2016,
    "chapter": 3
  },
  {
    "id": "psych-2016-3-7",
    "question": "Which of the following is not a time management strategy?",
    "options": [
      "The first thing first",
      "Procrastinating tasks",
      "Scheduling tasks",
      "Know how you spend time"
    ],
    "correctAnswer": 1,
    "explanation": "Procrastinating, or delaying tasks, is the opposite of an effective time management strategy. The other options are recognized techniques for managing time efficiently.",
    "subject": "psychology",
    "year": 2016,
    "chapter": 3
  },
  {
    "id": "psych-2016-3-8",
    "question": "As far as the characteristics of learning are concerned, one of the following is NOT true. Learning is:",
    "options": [
      "passive",
      "pervasive",
      "purposeful",
      "multifaceted"
    ],
    "correctAnswer": 0,
    "explanation": "Learning is generally considered an active process where the learner engages with and processes information, rather than a passive one where information is simply received without effort.",
    "subject": "psychology",
    "year": 2016,
    "chapter": 3
  },
  {
    "id": "psych-2016-3-9",
    "question": "One of the following is NOT true about learning. Learning:",
    "options": [
      "is a change in behavior",
      "depends on practice",
      "can be observed directly",
      "results in an enduring change"
    ],
    "correctAnswer": 2,
    "explanation": "Learning itself is an internal, cognitive process. While we can observe the *results* of learning (a change in behavior), the learning process itself cannot be directly seen. For example, a person may have learned something (latent learning) but not yet demonstrated it.",
    "subject": "psychology",
    "year": 2016,
    "chapter": 3
  },
  {
    "id": "psych-2016-3-10",
    "question": "All describe learning except:",
    "options": [
      "It is a change of behavior for better or worse",
      "Learning can occur due to practice or experience",
      "Learning is a relatively permanent change in behavior",
      "Learning includes changes due to growth and maturation"
    ],
    "correctAnswer": 3,
    "explanation": "Learning is a change in behavior due to experience, whereas changes due to growth, maturation, or biological development are not considered true learning. An example would be a child learning to walk, which is a maturational milestone, not a learned behavior.",
    "subject": "psychology",
    "year": 2016,
    "chapter": 3
  },
  {
    "id": "psych-2016-3-11",
    "question": "Assume Debela feared a lion and then feared a dog. This is:",
    "options": [
      "stimulus discrimination",
      "stimulus generalization",
      "spontaneous recovery",
      "acquisition"
    ],
    "correctAnswer": 1,
    "explanation": "Stimulus generalization occurs when a response that has been conditioned to one stimulus (a lion) occurs in the presence of similar stimuli (a dog).",
    "subject": "psychology",
    "year": 2016,
    "chapter": 3
  },
  {
    "id": "psych-2016-3-12",
    "question": "A man quit smoking but relapsed when seeing someone else smoke. This is:",
    "options": [
      "Extinction",
      "Stimulus generalization",
      "Spontaneous recovery",
      "Stimulus discrimination"
    ],
    "correctAnswer": 2,
    "explanation": "Spontaneous recovery is the reappearance of a previously extinguished conditioned response after a period of time has passed without exposure to the conditioned stimulus. The man's urge to smoke (the conditioned response) returned after seeing a similar behavior (someone else smoking).",
    "subject": "psychology",
    "year": 2016,
    "chapter": 3
  },
  {
    "id": "psych-2016-3-13",
    "question": "The teacher gave extra homework to Yonas after he misbehaved. This is:",
    "options": [
      "Positive punishment",
      "Negative punishment",
      "Positive reinforcement",
      "Negative reinforcement"
    ],
    "correctAnswer": 0,
    "explanation": "Positive punishment involves adding an aversive stimulus (extra homework) to decrease the frequency of a behavior (misbehaving).",
    "subject": "psychology",
    "year": 2016,
    "chapter": 3
  },
  {
    "id": "psych-2016-3-14",
    "question": "Negative punishment is:",
    "options": [
      "Removal of pleasant stimuli",
      "Removal of unpleasant stimuli",
      "Giving aversive stimuli",
      "Presenting positive stimulus"
    ],
    "correctAnswer": 0,
    "explanation": "Negative punishment is the process of removing a desirable or pleasant stimulus to decrease a behavior.",
    "subject": "psychology",
    "year": 2016,
    "chapter": 3
  },
  {
    "id": "psych-2016-3-15",
    "question": "Slot machines use which reinforcement schedule?",
    "options": [
      "Fixed ratio",
      "Fixed interval",
      "Variable ratio",
      "Variable interval"
    ],
    "correctAnswer": 2,
    "explanation": "Slot machines use a variable ratio schedule, which provides reinforcement after a random and unpredictable number of responses. This schedule is highly resistant to extinction and produces a high, steady rate of response.",
    "subject": "psychology",
    "year": 2016,
    "chapter": 3
  },
  {
    "id": "psych-2016-3-16",
    "question": "Instructor praises students after 1, then 3 answers. This is:",
    "options": [
      "Variable ratio",
      "Fixed ratio",
      "Fixed interval",
      "Variable interval"
    ],
    "correctAnswer": 0,
    "explanation": "The instructor is reinforcing the student after an unpredictable, or variable, number of responses (answers). This makes it a variable ratio schedule.",
    "subject": "psychology",
    "year": 2016,
    "chapter": 3
  },
  {
    "id": "psych-2016-3-17",
    "question": "According to Bandura, learned behaviors are performed at the phase of:",
    "options": [
      "retention",
      "attention",
      "motivation",
      "action"
    ],
    "correctAnswer": 2,
    "explanation": "According to Bandura's Social Learning Theory, the fourth and final step is the motivational phase. An individual may have paid attention to and retained a behavior, and be capable of reproducing it, but will only perform it if they are motivated to do so.",
    "subject": "psychology",
    "year": 2016,
    "chapter": 3
  },
  {
    "id": "psych-2016-3-18",
    "question": "When a behavior decreases because a positive stimulus is removed after the behavior occurs, it is an example of:",
    "options": [
      "Positive reinforcement",
      "Negative reinforcement",
      "Positive punishment",
      "Negative punishment"
    ],
    "correctAnswer": 3,
    "explanation": "This is the definition of negative punishment. A desirable stimulus is removed (\"negative\") to decrease the likelihood of a behavior (\"punishment\").",
    "subject": "psychology",
    "year": 2016,
    "chapter": 3
  },
  {
    "id": "psych-2016-3-19",
    "question": "In classical conditioning, what is the term for a stimulus that naturally and automatically triggers a response without prior learning?",
    "options": [
      "Conditioned stimulus",
      "Unconditioned stimulus",
      "Neutral stimulus",
      "Conditioned response"
    ],
    "correctAnswer": 1,
    "explanation": "An unconditioned stimulus (US) is one that elicits an unlearned or reflexive response. Food in Pavlov's experiment is an example of an unconditioned stimulus, as it naturally causes salivation.",
    "subject": "psychology",
    "year": 2016,
    "chapter": 3
  },
  {
    "id": "psych-2016-3-20",
    "question": "Which of the following is NOT a characteristic of effective learning?",
    "options": [
      "It is an active process.",
      "It is a one-time event.",
      "It is multifaceted.",
      "It is goal-oriented."
    ],
    "correctAnswer": 1,
    "explanation": "Learning is a continuous and ongoing process, not a one-time event. It requires repeated engagement and practice to be effective and lasting.",
    "subject": "psychology",
    "year": 2016,
    "chapter": 3
  },
  {
    "id": "psych-2016-3-21",
    "question": "When a previously extinguished conditioned response suddenly reappears after a period of rest, this is known as:",
    "options": [
      "Stimulus generalization",
      "Spontaneous recovery",
      "Extinction",
      "Reinforcement"
    ],
    "correctAnswer": 1,
    "explanation": "Spontaneous recovery is the reappearance of a conditioned response that had been previously extinguished, showing that the learning was suppressed but not completely eliminated.",
    "subject": "psychology",
    "year": 2016,
    "chapter": 3
  },
  {
    "id": "psych-2016-3-22",
    "question": "What is the process of learning to differentiate between similar stimuli and respond only to the conditioned stimulus?",
    "options": [
      "Stimulus generalization",
      "Stimulus discrimination",
      "Spontaneous recovery",
      "Acquisition"
    ],
    "correctAnswer": 1,
    "explanation": "Stimulus discrimination is the ability to distinguish between the conditioned stimulus and other stimuli that are similar but not associated with the unconditioned stimulus.",
    "subject": "psychology",
    "year": 2016,
    "chapter": 3
  },
  {
    "id": "psych-2016-3-23",
    "question": "A teacher giving a student extra chores for being late is an example of:",
    "options": [
      "Positive reinforcement",
      "Negative reinforcement",
      "Positive punishment",
      "Negative punishment"
    ],
    "correctAnswer": 2,
    "explanation": "The teacher is adding an unpleasant task (extra chores) to decrease an unwanted behavior (being late). This is a clear example of positive punishment.",
    "subject": "psychology",
    "year": 2016,
    "chapter": 3
  },
  {
    "id": "psych-2016-3-24",
    "question": "Which reinforcement schedule provides a reinforcer after a variable number of responses?",
    "options": [
      "Fixed ratio",
      "Variable ratio",
      "Fixed interval",
      "Variable interval"
    ],
    "correctAnswer": 1,
    "explanation": "A variable ratio schedule delivers reinforcement after an unpredictable number of responses, leading to a high and steady rate of responding.",
    "subject": "psychology",
    "year": 2016,
    "chapter": 3
  },
  {
    "id": "psych-2016-3-25",
    "question": "A dog learning to salivate to the sound of a bell after repeatedly hearing it paired with food is an example of:",
    "options": [
      "Operant conditioning",
      "Classical conditioning",
      "Observational learning",
      "Cognitive learning"
    ],
    "correctAnswer": 1,
    "explanation": "This is a classic example of classical conditioning, where an involuntary, reflexive response (salivating) is learned by associating a neutral stimulus (the bell) with an unconditioned stimulus (food).",
    "subject": "psychology",
    "year": 2016,
    "chapter": 3
  },
  {
    "id": "psych-2016-3-26",
    "question": "The process of gradually weakening a conditioned response until it disappears is called:",
    "options": [
      "Reinforcement",
      "Punishment",
      "Extinction",
      "Spontaneous recovery"
    ],
    "correctAnswer": 2,
    "explanation": "Extinction is the process where a conditioned response becomes less frequent and eventually stops when the conditioned stimulus is no longer paired with the unconditioned stimulus.",
    "subject": "psychology",
    "year": 2016,
    "chapter": 3
  },{
    "id": "psych-2017-3-2",
    "question": "When Genet, a student, studies hard for a test and gets an A, her parents give her a new book. This is an example of:",
    "options": [
      "Positive punishment",
      "Negative punishment",
      "Positive reinforcement",
      "Negative reinforcement"
    ],
    "correctAnswer": 2,
    "explanation": "Positive reinforcement involves adding a desirable stimulus (the new book) to increase the frequency of a behavior (studying hard).",
    "subject": "psychology",
    "year": 2017,
    "chapter": 3
  },
  {
    "id": "psych-2017-3-3",
    "question": "The concept of using a schedule to manage tasks is a key part of which skill?",
    "options": [
      "Memory enhancement",
      "Procrastination",
      "Time management",
      "Extinction"
    ],
    "correctAnswer": 2,
    "explanation": "Scheduling tasks is a fundamental principle of effective time management, which aims to increase efficiency and productivity.",
    "subject": "psychology",
    "year": 2017,
    "chapter": 3
  },
  {
    "id": "psych-2017-3-4",
    "question": "According to Social Learning Theory, the process where a person pays attention to a behavior being performed by another person is called:",
    "options": [
      "Retention",
      "Attention",
      "Motivation",
      "Reproduction"
    ],
    "correctAnswer": 1,
    "explanation": "Attention is the first of four processes in Bandura's theory. The observer must first pay attention to the model and the behavior they are demonstrating.",
    "subject": "psychology",
    "year": 2017,
    "chapter": 3
  },
  {
    "id": "psych-2017-3-5",
    "question": "What is the type of learning where a person learns by observing others' behaviors and their consequences?",
    "options": [
      "Classical conditioning",
      "Operant conditioning",
      "Observational learning",
      "Cognitive learning"
    ],
    "correctAnswer": 2,
    "explanation": "Observational learning, also known as social learning, is the process of learning by watching the behaviors of other people or animals and then imitating them.",
    "subject": "psychology",
    "year": 2017,
    "chapter": 3
  },
  {
    "id": "psych-2017-3-6",
    "question": "In operant conditioning, a consequence that increases the likelihood of a behavior being repeated is a:",
    "options": [
      "Punisher",
      "Discriminative stimulus",
      "Reinforcer",
      "Stimulus"
    ],
    "correctAnswer": 2,
    "explanation": "A reinforcer is, by definition, any consequence that strengthens a behavior, making it more likely to occur again.",
    "subject": "psychology",
    "year": 2017,
    "chapter": 3
  },
  {
    "id": "psych-2017-3-7",
    "question": "If a child's parents take away their video games because they didn't do their homework, this is an example of:",
    "options": [
      "Positive punishment",
      "Negative punishment",
      "Positive reinforcement",
      "Negative reinforcement"
    ],
    "correctAnswer": 1,
    "explanation": "Negative punishment involves removing a desirable stimulus (video games) to decrease an unwanted behavior (not doing homework).",
    "subject": "psychology",
    "year": 2017,
    "chapter": 3
  },
  {
    "id": "psych-2017-3-8",
    "question": "The idea that learning is a change in behavior that results from experience is a core principle of:",
    "options": [
      "Social Learning Theory",
      "Classical conditioning",
      "Operant conditioning",
      "All of the above"
    ],
    "correctAnswer": 3,
    "explanation": "All three theories of learning—Social Learning Theory, Classical Conditioning, and Operant Conditioning—are based on the foundational principle that learning involves a change in behavior due to experience.",
    "subject": "psychology",
    "year": 2017,
    "chapter": 3
  },
  {
    "id": "psych-2017-3-9",
    "question": "Which type of reinforcement schedule is most resistant to extinction?",
    "options": [
      "Fixed ratio",
      "Fixed interval",
      "Variable ratio",
      "Variable interval"
    ],
    "correctAnswer": 2,
    "explanation": "The variable ratio schedule, which provides reinforcement after a random number of responses, is the most resistant to extinction because the learner cannot predict when the next reinforcement will come, leading to persistent behavior.",
    "subject": "psychology",
    "year": 2017,
    "chapter": 3
  },
  {
    "id": "psych-2017-3-10",
    "question": "A student who learns to associate the sound of a fire alarm (neutral stimulus) with a fire (unconditioned stimulus) is an example of:",
    "options": [
      "Operant conditioning",
      "Classical conditioning",
      "Social learning",
      "Cognitive learning"
    ],
    "correctAnswer": 1,
    "explanation": "This scenario describes classical conditioning, where a previously neutral stimulus (the fire alarm sound) becomes a conditioned stimulus after being paired with an unconditioned stimulus (the fire), eliciting a conditioned response (fear or panic).",
    "subject": "psychology",
    "year": 2017,
    "chapter": 3
  },
  {
    "id": "psych-2017-3-11",
    "question": "When Tigist, a student, learns a new dance move by watching her friend perform it, she is engaging in:",
    "options": [
      "Classical conditioning",
      "Operant conditioning",
      "Observational learning",
      "Extinction"
    ],
    "correctAnswer": 2,
    "explanation": "Observational learning (or modeling) is the process of learning new behaviors or skills by observing others. Watching a friend perform a dance move and then replicating it is a perfect example of this.",
    "subject": "psychology",
    "year": 2017,
    "chapter": 3
  },
  {
    "id": "psych-2017-3-12",
    "question": "Which of these is a key component of observational learning, according to Bandura?",
    "options": [
      "Unconditioned response",
      "Negative punishment",
      "Retention",
      "Spontaneous recovery"
    ],
    "correctAnswer": 2,
    "explanation": "According to Bandura, retention, which is the ability to remember the modeled behavior, is a critical step in observational learning. The other options are concepts from classical or operant conditioning.",
    "subject": "psychology",
    "year": 2017,
    "chapter": 3
  },
  {
    "id": "psych-2017-3-13",
    "question": "If Bethlehem gets a bonus at work every two weeks, she is on a:",
    "options": [
      "Fixed ratio schedule",
      "Variable ratio schedule",
      "Fixed interval schedule",
      "Variable interval schedule"
    ],
    "correctAnswer": 2,
    "explanation": "A fixed interval schedule provides a reinforcer after a specific, predictable amount of time has passed. In this case, the bonus is tied to a two-week period, regardless of the amount of work done.",
    "subject": "psychology",
    "year": 2017,
    "chapter": 3
  },
  {
    "id": "psych-2017-3-14",
    "question": "The change in behavior that occurs in learning is considered:",
    "options": [
      "Temporary",
      "Always positive",
      "Relatively permanent",
      "Unobservable"
    ],
    "correctAnswer": 2,
    "explanation": "The standard psychological definition of learning is a 'relatively permanent' change in behavior, which distinguishes it from temporary changes due to fatigue, illness, or other factors.",
    "subject": "psychology",
    "year": 2017,
    "chapter": 3
  },
  {
    "id": "psych-2017-3-15",
    "question": "If a teacher removes a boring homework assignment for a class that did well on a quiz, this is an example of:",
    "options": [
      "Positive reinforcement",
      "Negative reinforcement",
      "Positive punishment",
      "Negative punishment"
    ],
    "correctAnswer": 1,
    "explanation": "Negative reinforcement involves removing an aversive or unpleasant stimulus (the boring homework) to increase a desired behavior (doing well on a quiz).",
    "subject": "psychology",
    "year": 2017,
    "chapter": 3
  },
  {
    "id": "psych-2017-3-16",
    "question": "When a student who used to dislike math now enjoys it after a good experience, this is an example of learning as a change in:",
    "options": [
      "Affective domain",
      "Psychomotor domain",
      "Cognitive domain",
      "Social domain"
    ],
    "correctAnswer": 0,
    "explanation": "The affective domain of learning relates to feelings, emotions, and attitudes. A change in a student's enjoyment or attitude toward a subject falls into this category.",
    "subject": "psychology",
    "year": 2017,
    "chapter": 3
  },
  {
    "id": "psych-2017-3-17",
    "question": "Which of the following describes the learning of social behaviors through observation?",
    "options": [
      "Classical conditioning",
      "Operant conditioning",
      "Social learning theory",
      "Spontaneous recovery"
    ],
    "correctAnswer": 2,
    "explanation": "Social Learning Theory, as proposed by Albert Bandura, focuses on how individuals learn social behaviors and norms by observing and imitating others, without the need for direct reinforcement or punishment.",
    "subject": "psychology",
    "year": 2017,
    "chapter": 3
  },
  {
    "id": "psych-2017-3-18",
    "question": "When a person learns a skill by watching a video and then trying to replicate the movements, this is a part of which phase of social learning?",
    "options": [
      "Attention",
      "Retention",
      "Action",
      "Motivation"
    ],
    "correctAnswer": 2,
    "explanation": "The 'action' or 'reproduction' phase of social learning is when the learner attempts to physically perform the behavior they have observed and remembered. This is the stage where they try to replicate the dance moves or a skill.",
    "subject": "psychology",
    "year": 2017,
    "chapter": 3
  },
  {
    "id": "psych-2017-3-19",
    "question": "Which of the following is an example of a fixed ratio schedule?",
    "options": [
      "A coffee shop rewards a free drink after every 10 purchases.",
      "A person gets a paycheck every Friday.",
      "A fisherman catches a fish on average every hour.",
      "A student is praised at random times during class."
    ],
    "correctAnswer": 0,
    "explanation": "A fixed ratio schedule provides reinforcement after a specific, predetermined number of responses. Getting a free drink after every 10 purchases fits this definition perfectly.",
    "subject": "psychology",
    "year": 2017,
    "chapter": 3
  },
  {
    "id": "psych-2017-3-20",
    "question": "A student gets a good grade on a test because they studied hard. The good grade is a:",
    "options": [
      "Positive punishment",
      "Negative punishment",
      "Positive reinforcer",
      "Negative reinforcer"
    ],
    "correctAnswer": 2,
    "explanation": "The good grade is a positive reinforcer. It is a desirable stimulus that is 'added' to the situation to increase the likelihood of the behavior (studying) being repeated.",
    "subject": "psychology",
    "year": 2017,
    "chapter": 3
  },
  {
    "id": "psych-2017-3-21",
    "question": "The change in behavior from learning is said to be:",
    "options": [
      "passive and temporary",
      "active and enduring",
      "multifaceted and unobservable",
      "purposeful and always positive"
    ],
    "correctAnswer": 1,
    "explanation": "Learning is an active process where the learner engages with the material, and the resulting change in behavior is relatively permanent or enduring. It is not necessarily positive or unobservable.",
    "subject": "psychology",
    "year": 2017,
    "chapter": 3
  },

  {
    "id": "psych-2013-2-2",
    "question": "The process of converting physical energy from a stimulus into a neural signal is known as:",
    "options": [
      "Perception",
      "Sensation",
      "Transduction",
      "Adaptation"
    ],
    "correctAnswer": 2,
    "explanation": "Transduction is the process by which sensory receptors convert physical energy from the environment (like light, sound waves, or chemicals) into electrochemical neural impulses that the brain can understand. Sensation is the initial detection of the stimulus, perception is the interpretation of that sensation, and adaptation is the decreased sensitivity to a constant stimulus.",
    "subject": "psychology",
    "year": 2013,
    "chapter": 2
  },
  {
    "id": "psych-2013-2-3",
    "question": "A student's ability to focus on a professor's voice while ignoring the chatter of other students in a noisy classroom is an example of:",
    "options": [
      "Sensory adaptation",
      "Selective attention",
      "Perceptual constancy",
      "Extrasensory perception"
    ],
    "correctAnswer": 1,
    "explanation": "Selective attention is the ability to focus conscious awareness on a particular stimulus while filtering out other simultaneous information. This is exactly what the \"cocktail party effect\" describes—the ability to tune into one conversation among many.",
    "subject": "psychology",
    "year": 2013,
    "chapter": 2
  },
  {
    "id": "psych-2013-2-4",
    "question": "Which of the following is an example of a monocular cue for depth perception?",
    "options": [
      "Retinal disparity",
      "Convergence",
      "Linear perspective",
      "Binocular rivalry"
    ],
    "correctAnswer": 2,
    "explanation": "Monocular cues require only one eye to perceive depth. Linear perspective is a monocular cue where parallel lines appear to converge as they recede into the distance. Retinal disparity and convergence are both binocular cues, requiring both eyes. Binocular rivalry is not a depth cue.",
    "subject": "psychology",
    "year": 2013,
    "chapter": 2
  },
  {
    "id": "psych-2013-2-5",
    "question": "An individual who has a reduced ability to taste sweet flavors after eating a very sweet dessert is experiencing:",
    "options": [
      "Sensory threshold",
      "Sensory deprivation",
      "Sensory habituation",
      "Sensory adaptation"
    ],
    "correctAnswer": 3,
    "explanation": "Sensory adaptation is the diminished sensitivity to a constant or recurring stimulus. After constant exposure to a very sweet taste, the taste receptors become less responsive, reducing the perception of that sweetness.",
    "subject": "psychology",
    "year": 2013,
    "chapter": 2
  },
  {
    "id": "psych-2013-2-6",
    "question": "The ability to recognize an object as the same despite changes in its retinal image is called:",
    "options": [
      "Perceptual set",
      "Perceptual constancy",
      "Perceptual illusion",
      "Perceptual organization"
    ],
    "correctAnswer": 1,
    "explanation": "Perceptual constancy is the ability to perceive objects as having consistent properties (like size, shape, and color) even as the sensory information about them (the retinal image) changes due to viewing angle, lighting, or distance.",
    "subject": "psychology",
    "year": 2013,
    "chapter": 2
  },
  {
    "id": "psych-2013-2-7",
    "question": "A musician's ability to differentiate between the sounds of a violin and a cello playing the same note is an example of:",
    "options": [
      "Absolute threshold",
      "Difference threshold",
      "Sensory detection",
      "Perceptual constancy"
    ],
    "correctAnswer": 1,
    "explanation": "The difference threshold (or just noticeable difference - JND) is the minimum difference between two stimuli required for detection 50% of the time. The musician is detecting a difference in timbre (sound quality) between two instruments playing the same note.",
    "subject": "psychology",
    "year": 2013,
    "chapter": 2
  },
  {
    "id": "psych-2013-2-8",
    "question": "The Gestalt principle that suggests we group elements that are close to each other is the Law of:",
    "options": [
      "Similarity",
      "Proximity",
      "Closure",
      "Continuity"
    ],
    "correctAnswer": 1,
    "explanation": "The Gestalt Law of Proximity states that we perceive objects that are physically close to each other as belonging to the same group.",
    "subject": "psychology",
    "year": 2013,
    "chapter": 2
  },
  {
    "id": "psych-2013-2-9",
    "question": "Which of the following is considered a bottom-up processing approach to perception?",
    "options": [
      "Using past experiences to interpret a new image",
      "Interpreting a vague sketch based on context",
      "Identifying an object by analyzing its individual features (lines, shapes, colors)",
      "Perceiving a familiar tune in a noisy environment"
    ],
    "correctAnswer": 2,
    "explanation": "Bottom-up processing begins with the raw sensory input. It is data-driven, building up perception from individual elements to a whole. Analyzing lines and shapes to form an object is a classic example. Options A, B, and D all rely on top-down processing, which uses context, expectations, and prior knowledge.",
    "subject": "psychology",
    "year": 2013,
    "chapter": 2
  },
  {
    "id": "psych-2013-2-10",
    "question": "The minimum amount of stimulation a person needs to detect a stimulus 50% of the time is called the:",
    "options": [
      "Difference threshold",
      "Just noticeable difference",
      "Absolute threshold",
      "Sensory acuity"
    ],
    "correctAnswer": 2,
    "explanation": "The absolute threshold is defined as the minimum intensity of a stimulus that can be detected 50% of the time. The difference threshold (JND) is the smallest change in intensity needed to notice a difference.",
    "subject": "psychology",
    "year": 2013,
    "chapter": 2
  },
  {
    "id": "psych-2013-2-11",
    "question": "A person looking at a train track that appears to converge in the distance is experiencing the pictorial depth cue of:",
    "options": [
      "Interposition",
      "Relative size",
      "Linear perspective",
      "Texture gradient"
    ],
    "correctAnswer": 2,
    "explanation": "Linear perspective is a monocular depth cue where parallel lines, like those of train tracks, appear to converge as they extend into the distance, creating a sense of depth.",
    "subject": "psychology",
    "year": 2013,
    "chapter": 2
  },
  {
    "id": "psych-2013-2-12",
    "question": "A person who can \"feel\" someone staring at them from behind is an example of:",
    "options": [
      "Perceptual set",
      "Perceptual adaptation",
      "Telepathy",
      "Extrasensory perception"
    ],
    "correctAnswer": 3,
    "explanation": "Extrasensory perception (ESP) is the controversial perception claim of information without using known sensory channels. \"Feeling\" a stare from behind would be classified under this umbrella term, though it is not supported by scientific evidence.",
    "subject": "psychology",
    "year": 2013,
    "chapter": 2
  },
  {
    "id": "psych-2013-2-13",
    "question": "The tendency to perceive an incomplete figure as a whole is a Gestalt principle known as the Law of:",
    "options": [
      "Proximity",
      "Similarity",
      "Closure",
      "Continuity"
    ],
    "correctAnswer": 2,
    "explanation": "The Gestalt Law of Closure states that we mentally fill in gaps to perceive complete, whole objects even when parts are missing. We see a circle made of dashed lines as a complete circle, for example.",
    "subject": "psychology",
    "year": 2013,
    "chapter": 2
  },
  {
    "id": "psych-2013-2-14",
    "question": "An individual's previous experience with a specific type of food can influence their expectation of its taste. This is an example of:",
    "options": [
      "Sensory adaptation",
      "Perceptual set",
      "Sensory constancy",
      "Difference threshold"
    ],
    "correctAnswer": 1,
    "explanation": "A perceptual set is a mental predisposition to perceive one thing and not another. It is influenced by context, motivation, emotion, and past experiences, which shape our expectations and interpretations.",
    "subject": "psychology",
    "year": 2013,
    "chapter": 2
  },
  {
    "id": "psych-2013-2-15",
    "question": "The process by which the lens of the eye changes shape to focus on objects at different distances is called:",
    "options": [
      "Retinal disparity",
      "Convergence",
      "Accommodation",
      "Transduction"
    ],
    "correctAnswer": 2,
    "explanation": "Accommodation is the process by which the eye's lens changes its curvature and thickness to focus light rays from objects at different distances onto the retina.",
    "subject": "psychology",
    "year": 2013,
    "chapter": 2
  },
  {
    "id": "psych-2013-2-16",
    "question": "An artist's use of lighter colors for distant objects and darker colors for closer objects to create a sense of depth is using the monocular cue of:",
    "options": [
      "Relative size",
      "Texture gradient",
      "Aerial perspective",
      "Interposition"
    ],
    "correctAnswer": 2,
    "explanation": "Aerial perspective (or atmospheric perspective) is a monocular cue where distant objects appear hazy, bluish, and less detailed due to the scattering of light and particles in the atmosphere. Artists mimic this by using lighter, less distinct colors for faraway objects.",
    "subject": "psychology",
    "year": 2013,
    "chapter": 2
  },
  {
    "id": "psych-2013-2-17",
    "question": "When the brain receives ambiguous sensory information, it often uses context and prior knowledge to construct a meaningful perception. This is an example of:",
    "options": [
      "Top-down processing",
      "Bottom-up processing",
      "Sensory transduction",
      "Absolute threshold"
    ],
    "correctAnswer": 0,
    "explanation": "Top-down processing uses higher-level mental processes, such as expectations, experiences, and context, to interpret sensory information. It is concept-driven, guiding our perception of ambiguous data.",
    "subject": "psychology",
    "year": 2013,
    "chapter": 2
  },
  {
    "id": "psych-2013-2-18",
    "question": "A person who is not consciously aware of the sound of a ticking clock in their room until someone points it out is demonstrating:",
    "options": [
      "Sensory deprivation",
      "Sensory neglect",
      "Sensory adaptation",
      "Selective attention"
    ],
    "correctAnswer": 3,
    "explanation": "Selective attention involves focusing on a particular stimulus while ignoring others. The clock's ticking was filtered out as irrelevant background noise until attention was deliberately directed to it.",
    "subject": "psychology",
    "year": 2013,
    "chapter": 2
  },
  {
    "id": "psych-2013-2-19",
    "question": "The ability to perceive a friend's voice in a crowded room, despite the presence of many other conversations, is a result of:",
    "options": [
      "Perceptual constancy",
      "The cocktail party effect",
      "Sensory adaptation",
      "Absolute threshold"
    ],
    "correctAnswer": 1,
    "explanation": "The cocktail party effect is the ability to focus one's auditory attention on a particular stimulus (a friend's voice) while filtering out a range of other stimuli (other conversations), a key function of selective attention.",
    "subject": "psychology",
    "year": 2013,
    "chapter": 2
  },
  {
    "id": "psych-2013-2-20",
    "question": "A painting that uses overlapping objects to suggest that one object is closer than another is using the pictorial depth cue of:",
    "options": [
      "Relative height",
      "Interposition",
      "Texture gradient",
      "Linear perspective"
    ],
    "correctAnswer": 1,
    "explanation": "Interposition (or overlap) is a monocular depth cue where if one object partially blocks our view of another, we perceive the blocked object as being farther away.",
    "subject": "psychology",
    "year": 2013,
    "chapter": 2
  },
  {
    "id": "psych-2013-2-21",
    "question": "A person who is asked to taste-test a new soda is able to detect a very slight difference in sweetness between two versions. This is an example of:",
    "options": [
      "Absolute threshold",
      "Sensory adaptation",
      "Just noticeable difference",
      "Sensory overload"
    ],
    "correctAnswer": 2,
    "explanation": "The just noticeable difference (JND) is the smallest detectable change in a stimulus. The taster is detecting the minimum difference in sweetness required to tell the two versions apart.",
    "subject": "psychology",
    "year": 2013,
    "chapter": 2
  },
  {
    "id": "psych-2013-2-22",
    "question": "The psychological principle that states we tend to see objects that move together as a single unit is the Gestalt Law of:",
    "options": [
      "Proximity",
      "Similarity",
      "Common fate",
      "Closure"
    ],
    "correctAnswer": 2,
    "explanation": "The Gestalt Law of Common Fate states that we perceive objects that are moving in the same direction and at the same speed as part of a single group or unit (e.g., a flock of birds).",
    "subject": "psychology",
    "year": 2013,
    "chapter": 2
  },
  {
    "id": "psych-2013-2-23",
    "question": "The ability to see a red car as red, regardless of whether it is in bright sunlight or deep shade, is an example of:",
    "options": [
      "Size constancy",
      "Shape constancy",
      "Brightness constancy",
      "Color constancy"
    ],
    "correctAnswer": 3,
    "explanation": "Color constancy is our ability to perceive the consistent color of an object despite changes in the wavelength of light illuminating it (e.g., in sun or shade).",
    "subject": "psychology",
    "year": 2013,
    "chapter": 2
  },
  {
    "id": "psych-2013-2-24",
    "question": "A visual illusion where a horizontal line appears to be longer than a vertical line of the same length is known as the:",
    "options": [
      "Müller-Lyer illusion",
      "Ponzo illusion",
      "Ames room illusion",
      "Ebbinghaus illusion"
    ],
    "correctAnswer": 0,
    "explanation": "(Based on the options given) The Müller-Lyer illusion is the most classic example of a line length illusion, where two lines of equal length appear different due to the angle of the arrows at their ends.",
    "subject": "psychology",
    "year": 2013,
    "chapter": 2
  },
  {
    "id": "psych-2013-2-25",
    "question": "Which of the following is a binocular cue for depth perception?",
    "options": [
      "Linear perspective",
      "Texture gradient",
      "Retinal disparity",
      "Interposition"
    ],
    "correctAnswer": 2,
    "explanation": "Binocular cues require both eyes. Retinal disparity is a key binocular cue; it is the slight difference between the images received by the left and right retinas, which the brain uses to compute depth.",
    "subject": "psychology",
    "year": 2013,
    "chapter": 2
  },
  {
    "id": "psych-2013-2-26",
    "question": "A teacher who learns to ignore the background noise in their classroom over time is an example of:",
    "options": [
      "Habituation",
      "Sensitization",
      "Perception",
      "Attention"
    ],
    "correctAnswer": 0,
    "explanation": "Habituation is a simple form of learning where there is a decrease in behavioral response to a repeated, non-threatening stimulus. The teacher's nervous system has learned to \"ignore\" the constant background noise.",
    "subject": "psychology",
    "year": 2013,
    "chapter": 2
  },
  {
    "id": "psych-2013-2-27",
    "question": "The ability to correctly identify an object as a chair whether it's viewed from the front, back, or side is an example of:",
    "options": [
      "Perceptual constancy",
      "Form perception",
      "Gestalt principles",
      "Perceptual organization"
    ],
    "correctAnswer": 0,
    "explanation": "This is a specific example of shape constancy, a type of perceptual constancy. We perceive the chair's shape as constant even though the angle of view changes the shape of the retinal image.",
    "subject": "psychology",
    "year": 2013,
    "chapter": 2
  },
  {
    "id": "psych-2013-2-28",
    "question": "A person who believes they can communicate with spirits is an example of:",
    "options": [
      "Clairvoyance",
      "Telepathy",
      "Precognition",
      "Extrasensory perception"
    ],
    "correctAnswer": 3,
    "explanation": "Communicating with spirits would fall under the broad, non-scientific category of extrasensory perception (ESP), which encompasses perception beyond the known senses.",
    "subject": "psychology",
    "year": 2013,
    "chapter": 2
  },
  {
    "id": "psych-2013-2-29",
    "question": "The concept that our brain organizes a stimulus into a central object (figure) and its surrounding background (ground) is known as:",
    "options": [
      "Figure-ground organization",
      "Perceptual grouping",
      "Perceptual set",
      "Law of continuity"
    ],
    "correctAnswer": 0,
    "explanation": "Figure-ground organization is a fundamental Gestalt principle where we automatically separate visual scenes into a central object (the figure) that stands out from its less distinct surroundings (the ground).",
    "subject": "psychology",
    "year": 2013,
    "chapter": 2
  },
  {
    "id": "psych-2013-2-30",
    "question": "The smallest change in stimulation that can be detected 50% of the time is called the:",
    "options": [
      "Absolute threshold",
      "Just noticeable difference",
      "Sensory minimum",
      "Perceptual threshold"
    ],
    "correctAnswer": 1,
    "explanation": "This is the precise definition of the just noticeable difference (JND), or difference threshold. The absolute threshold is the minimum intensity needed to detect the stimulus itself.",
    "subject": "psychology",
    "year": 2013,
    "chapter": 2
  },
  {
    "id": "psych-2013-2-31",
    "question": "A painter creating the illusion of distance by making objects in the background appear blurry and less detailed is using the pictorial cue of:",
    "options": [
      "Relative height",
      "Relative size",
      "Texture gradient",
      "Atmospheric perspective"
    ],
    "correctAnswer": 3,
    "explanation": "Atmospheric perspective (or aerial perspective) is a monocular cue where distant objects appear less sharp, bluer, and blurrier due to the effect of the atmosphere, which artists use to create depth.",
    "subject": "psychology",
    "year": 2013,
    "chapter": 2
  },
  {
    "id": "psych-2013-2-32",
    "question": "The ability to perceive a coin as round even when viewed from an angle that makes its retinal image elliptical is an example of:",
    "options": [
      "Size constancy",
      "Shape constancy",
      "Color constancy",
      "Brightness constancy"
    ],
    "correctAnswer": 1,
    "explanation": "Shape constancy is the perception that an object's shape remains constant despite changes in the shape of the retinal image caused by the object's orientation.",
    "subject": "psychology",
    "year": 2013,
    "chapter": 2
  },
  {
    "id": "psych-2013-2-33",
    "question": "Which of the following describes the difference between sensation and perception?",
    "options": [
      "Sensation is a biological process, while perception is a cognitive process.",
      "Sensation is a cognitive process, while perception is a biological process.",
      "Sensation involves interpretation, while perception involves detection.",
      "Sensation and perception are two terms for the same process."
    ],
    "correctAnswer": 0,
    "explanation": "Sensation is the biological process of receiving raw sensory data from the environment. Perception is the cognitive process of selecting, organizing, and interpreting those sensations.",
    "subject": "psychology",
    "year": 2013,
    "chapter": 2
  },
  {
    "id": "psych-2013-2-34",
    "question": "The Gestalt principle that states we tend to group similar objects together is the Law of:",
    "options": [
      "Proximity",
      "Continuity",
      "Closure",
      "Similarity"
    ],
    "correctAnswer": 3,
    "explanation": "The Gestalt Law of Similarity states that we perceive objects that are similar in size, shape, color, or texture as belonging together and forming a group.",
    "subject": "psychology",
    "year": 2013,
    "chapter": 2
  },
  {
    "id": "psych-2013-2-35",
    "question": "A person who has a fear of heights experiences an exaggerated perception of the steepness of a slope. This is an example of how ______ can affect perception.",
    "options": [
      "Sensory adaptation",
      "Emotion",
      "Attention",
      "Context"
    ],
    "correctAnswer": 1,
    "explanation": "Our emotional state can directly influence our perceptions. In this case, fear and anxiety are leading to a top-down perceptual bias, making the slope appear more dangerous than it is.",
    "subject": "psychology",
    "year": 2013,
    "chapter": 2
  },
  {
    "id": "psych-2013-2-36",
    "question": "The process of converting environmental stimuli into neural signals is called:",
    "options": [
      "Transduction",
      "Interpretation",
      "Organization",
      "Localization"
    ],
    "correctAnswer": 0,
    "explanation": "Transduction is the process where sensory receptors (e.g., in the eyes, ears, skin) convert physical energy from the environment into electrical signals that travel to the brain as neural impulses.",
    "subject": "psychology",
    "year": 2013,
    "chapter": 2
  },
  {
    "id": "psych-2013-2-37",
    "question": "When you are looking at a photo of a road, the parallel lines of the road appear to get closer together as they recede into the distance. This is an example of:",
    "options": [
      "Texture gradient",
      "Linear perspective",
      "Relative size",
      "Interposition"
    ],
    "correctAnswer": 1,
    "explanation": "This is the classic example of linear perspective, a monocular depth cue where parallel lines converge in the distance.",
    "subject": "psychology",
    "year": 2013,
    "chapter": 2
  },
  {
    "id": "psych-2013-2-38",
    "question": "A person who can hear a dog whistle that is too high-pitched for most humans to hear has a lower:",
    "options": [
      "Difference threshold",
      "Sensory adaptation",
      "Absolute threshold",
      "Sensory deprivation"
    ],
    "correctAnswer": 2,
    "explanation": "The absolute threshold for hearing is the softest sound one can detect. If someone can hear a very high-frequency sound that others cannot, their absolute threshold for that frequency is lower (they require less intensity to detect it).",
    "subject": "psychology",
    "year": 2013,
    "chapter": 2
  },
  {
    "id": "psych-2013-2-39",
    "question": "The fact that a full moon on the horizon appears larger than a full moon high in the sky is known as the:",
    "options": [
      "Ames room illusion",
      "Ponzo illusion",
      "Moon illusion",
      "Müller-Lyer illusion"
    ],
    "correctAnswer": 2,
    "explanation": "The moon illusion is the name for this specific phenomenon. While its causes are debated (often explained by the Ponzo illusion or the role of distance cues), it is universally known as the moon illusion.",
    "subject": "psychology",
    "year": 2013,
    "chapter": 2
  },
  {
    "id": "psych-2013-2-40",
    "question": "A police officer who is trained to spot a particular detail in a crowd, and therefore notices it more readily, is demonstrating a change in:",
    "options": [
      "Sensory adaptation",
      "Perceptual set",
      "Sensory threshold",
      "Extrasensory perception"
    ],
    "correctAnswer": 1,
    "explanation": "A perceptual set is a mental readiness to perceive a stimulus in a certain way based on expectations, context, and experience. The officer's training has created a perceptual set, making them more likely to notice relevant details.",
    "subject": "psychology",
    "year": 2013,
    "chapter": 2
  },
  {
    "id": "psych-2013-2-41",
    "question": "Which of the following is an example of a stimulus-related factor that can draw attention?",
    "options": [
      "A person's expectation",
      "A person's motivation",
      "The size of an advertisement",
      "A person's past experience"
    ],
    "correctAnswer": 2,
    "explanation": "Options A, B, and D are all internal, person-related factors. The physical size of an ad is an external, stimulus-related property (like intensity, novelty, or movement) that can automatically capture attention.",
    "subject": "psychology",
    "year": 2013,
    "chapter": 2
  },
  {
    "id": "psych-2013-2-42",
    "question": "The ability to perceive two lights as two separate lights, even when they are very close together, is an example of:",
    "options": [
      "Absolute threshold",
      "Difference threshold",
      "Sensory constancy",
      "Sensory adaptation"
    ],
    "correctAnswer": 1,
    "explanation": "The difference threshold (JND) is relevant for distinguishing between two stimuli. In this case, it's the minimum spatial separation required to perceive two points of light as distinct rather than fused into one.",
    "subject": "psychology",
    "year": 2013,
    "chapter": 2
  },
  {
    "id": "psych-2013-2-43",
    "question": "A person who has been in a quiet room for a long time might perceive a very faint sound that they would not have noticed in a noisy environment. This is an example of:",
    "options": [
      "Sensory adaptation",
      "Sensory deprivation",
      "Absolute threshold",
      "Difference threshold"
    ],
    "correctAnswer": 2,
    "explanation": "The absolute threshold is not fixed; it can change with context. In a quiet environment (sensory deprivation), our senses become more sensitive, effectively lowering the absolute threshold and allowing us to detect fainter stimuli.",
    "subject": "psychology",
    "year": 2013,
    "chapter": 2
  },
  {
    "id": "psych-2013-2-44",
    "question": "The Gestalt principle that states we are more likely to perceive a smooth, continuous pattern rather than a discontinuous one is the Law of:",
    "options": [
      "Proximity",
      "Closure",
      "Continuity",
      "Common fate"
    ],
    "correctAnswer": 2,
    "explanation": "The Gestalt Law of Continuity (or Good Continuation) states that we perceive smooth, continuous patterns rather than discontinuous ones. We see two intersecting lines, not two right angles meeting at a point.",
    "subject": "psychology",
    "year": 2013,
    "chapter": 2
  },
  {
    "id": "psych-2013-2-45",
    "question": "A driver who is accustomed to the sound of their car's engine and no longer notices it is experiencing:",
    "options": [
      "Habituation",
      "Sensitization",
      "Perception",
      "Sensation"
    ],
    "correctAnswer": 0,
    "explanation": "Habituation is the diminishing of a behavioral or perceptual response to a constant, unchanging stimulus. The driver's nervous system has learned that the engine sound is not important new information.",
    "subject": "psychology",
    "year": 2013,
    "chapter": 2
  },
  {
    "id": "psych-2013-2-46",
    "question": "The ability to distinguish between two different shades of red is a measure of:",
    "options": [
      "Absolute threshold",
      "Difference threshold",
      "Sensory adaptation",
      "Sensory constancy"
    ],
    "correctAnswer": 1,
    "explanation": "This is a direct measure of the difference threshold (JND)—the smallest difference in hue (a property of color) required to tell two shades apart.",
    "subject": "psychology",
    "year": 2013,
    "chapter": 2
  },
  {
    "id": "psych-2013-2-47",
    "question": "An optical illusion where an individual perceives two lines of equal length as being different lengths due to the inward or outward-pointing arrows at the ends is the:",
    "options": [
      "Ames room illusion",
      "Ponzo illusion",
      "Moon illusion",
      "Müller-Lyer illusion"
    ],
    "correctAnswer": 3,
    "explanation": "This is the exact description of the Müller-Lyer illusion. The line with outward-pointing fins appears longer than the line with inward-pointing fins.",
    "subject": "psychology",
    "year": 2013,
    "chapter": 2
  },
  {
    "id": "psych-2013-2-48",
    "question": "The tendency to perceive a familiar object's brightness as constant, even when illumination changes, is called:",
    "options": [
      "Size constancy",
      "Shape constancy",
      "Brightness constancy",
      "Color constancy"
    ],
    "correctAnswer": 2,
    "explanation": "Brightness constancy (or lightness constancy) is our ability to perceive the relative brightness of an object as constant even though the intensity of the light illuminating it may change.",
    "subject": "psychology",
    "year": 2013,
    "chapter": 2
  },
  {
    "id": "psych-2013-2-49",
    "question": "The process by which our brain uses information about the relative size of an object to judge its distance is an example of:",
    "options": [
      "A binocular cue",
      "A monocular cue",
      "Sensory adaptation",
      "Absolute threshold"
    ],
    "correctAnswer": 1,
    "explanation": "Relative size is a monocular cue for depth perception. If we assume two objects are the same size, the one that casts a smaller retinal image is perceived as being farther away.",
    "subject": "psychology",
    "year": 2013,
    "chapter": 2
  },
  {
    "id": "psych-2013-2-50",
    "question": "A person who claims to have a \"sixth sense\" about future events is an example of someone who believes in:",
    "options": [
      "Psychokinesis",
      "Telepathy",
      "Precognition",
      "Clairvoyance"
    ],
    "correctAnswer": 2,
    "explanation": "Precognition is the purported ESP ability to perceive or predict future events. Psychokinesis is mind over matter, telepathy is mind-to-mind communication, and clairvoyance is perceiving remote events.",
    "subject": "psychology",
    "year": 2013,
    "chapter": 2
  },
  {
    "id": "psych-2013-2-51",
    "question": "The Gestalt principle that suggests we tend to perceive objects as grouped together if they look alike is the Law of:",
    "options": [
      "Proximity",
      "Similarity",
      "Closure",
      "Continuity"
    ],
    "correctAnswer": 1,
    "explanation": "The Gestalt Law of Similarity states that things which are similar in appearance (e.g., in color, shape, or size) are perceived as belonging together.",
    "subject": "psychology",
    "year": 2013,
    "chapter": 2
  },
  {
    "id": "psych-2016-2-2",
    "question": "Sensation is to ______ as perception is to ______.",
    "options": [
      "Vision, olfaction",
      "Awareness, interpretation",
      "Conscious, unconscious",
      "Taste, vision"
    ],
    "correctAnswer": 1,
    "explanation": "Sensation is the process of detecting physical stimuli from the environment and transmitting that information to the brain (awareness). Perception is the process of organizing and interpreting those sensations (interpretation).",
    "subject": "psychology",
    "year": 2016,
    "chapter": 2
  },
  {
    "id": "psych-2016-2-3",
    "question": "Sensation is to ______ as perception is to ______.",
    "options": [
      "Detection, transduction",
      "Interpretation, transmission",
      "Attention, organization",
      "Detection, interpretation"
    ],
    "correctAnswer": 3,
    "explanation": "This is another way to phrase the same core concept. Sensation involves the detection of raw sensory data. Perception involves the interpretation and meaning-making of that data.",
    "subject": "psychology",
    "year": 2016,
    "chapter": 2
  },
  {
    "id": "psych-2016-2-4",
    "question": "Identify a perceptual cue that is different from the others.",
    "options": [
      "Interposition",
      "Relative height",
      "Texture gradient",
      "Retinal disparity"
    ],
    "correctAnswer": 3,
    "explanation": "Retinal disparity is a binocular depth cue, meaning it requires the use of both eyes to perceive depth. The other three options (Interposition, Relative height, Texture gradient) are all monocular cues, meaning they can be perceived with just one eye.",
    "subject": "psychology",
    "year": 2016,
    "chapter": 2
  },
  {
    "id": "psych-2016-2-5",
    "question": "Which one of the following is not a stimulus-related factor affecting attention?",
    "options": [
      "Repetition",
      "Expectancy",
      "Size",
      "Novelty"
    ],
    "correctAnswer": 1,
    "explanation": "Repetition, Size, and Novelty are all physical, stimulus-driven properties that can capture attention. Expectancy is an internal, person-driven factor based on past experience and context; it is not a property of the stimulus itself.",
    "subject": "psychology",
    "year": 2016,
    "chapter": 2
  },
  {
    "id": "psych-2016-2-6",
    "question": "We judge the distance of an object based on our eyes turning inward to focus. This is referred to as:",
    "options": [
      "Retinal disparity",
      "Convergence",
      "Accommodation",
      "Elevation"
    ],
    "correctAnswer": 1,
    "explanation": "Convergence is a binocular cue for depth perception. It is the inward angle of the eyes as they focus on a nearby object. The greater the strain from convergence, the closer the object is perceived to be.",
    "subject": "psychology",
    "year": 2016,
    "chapter": 2
  },
  {
    "id": "psych-2016-2-7",
    "question": "“A woman has perceived a tree at night as a man.” This experience is an example of:",
    "options": [
      "Perceptual constancy",
      "Perceptual attention",
      "Perceptual illusion",
      "Perceptual organization"
    ],
    "correctAnswer": 2,
    "explanation": "A perceptual illusion is a misinterpretation of a real external stimulus. The woman is experiencing a false perception of the tree's shape and form due to the ambiguous, low-light conditions.",
    "subject": "psychology",
    "year": 2016,
    "chapter": 2
  },
  {
    "id": "psych-2016-2-8",
    "question": "With the first bite of a very flavorful dish in a café, a student notices the strong saltiness of the food. But after a few mouthfuls, the flavor is less pronounced. This experience implies:",
    "options": [
      "Sensory threshold",
      "Difference threshold",
      "Sensory adaptation",
      "Perceptual consistency"
    ],
    "correctAnswer": 2,
    "explanation": "Sensory adaptation is the diminished sensitivity to a constant or recurring stimulus. After repeated exposure to the salty flavor, the taste receptors become less responsive, leading to a decreased perception of saltiness.",
    "subject": "psychology",
    "year": 2016,
    "chapter": 2
  },
  {
    "id": "psych-2016-2-9",
    "question": "Mr. X perceives his blue bag as the same even though it is observed under different lighting conditions.",
    "options": [
      "Color constancy",
      "Size constancy",
      "Shape constancy",
      "Depth constancy"
    ],
    "correctAnswer": 0,
    "explanation": "Color constancy is our ability to perceive the consistent color of an object despite changes in the wavelength of light (illumination) falling on it. The brain adjusts for the lighting to see the bag as the same blue.",
    "subject": "psychology",
    "year": 2016,
    "chapter": 2
  },
  {
    "id": "psych-2016-2-10",
    "question": "One of your friends claims to know what happens in her/his home while at the University. Such experience is an example of:",
    "options": [
      "Perceptual selectivity",
      "Perceptual illusion",
      "Extrasensory perception",
      "Perceptual constancy"
    ],
    "correctAnswer": 2,
    "explanation": "Extrasensory perception (ESP) is the controversial claim of perceiving information through means other than the known sensory channels, such as knowing remote events. This is what the friend is claiming.",
    "subject": "psychology",
    "year": 2016,
    "chapter": 2
  },
  {
    "id": "psych-2016-2-11",
    "question": "As the thickness of the lens increases, the further away an object is perceived. This is an example of:",
    "options": [
      "Depth perception",
      "Sensory adaptation",
      "Accommodation",
      "Retinal disparity"
    ],
    "correctAnswer": 2,
    "explanation": "Accommodation is the process by which the eye's lens changes its shape (becoming thicker or thinner) to focus light on the retina. The brain uses feedback from these muscles to help judge distance. For closer objects, the lens thickens. For farther objects, it flattens.",
    "subject": "psychology",
    "year": 2016,
    "chapter": 2
  },
  {
    "id": "psych-2016-2-12",
    "question": "List at least four laws of perceptual organization.",
    "options": [
      "Law of proximity, similarity, closure, continuity",
      "Law of novelty, repetition, expectancy, motion",
      "Law of attention, focus, perception, awareness",
      "Law of illusion, sensation, perception, awareness"
    ],
    "correctAnswer": 0,
    "explanation": "These are four of the primary Gestalt laws of perceptual organization, which describe how we naturally group individual elements into whole patterns and objects.",
    "subject": "psychology",
    "year": 2016,
    "chapter": 2
  },
  {
    "id": "psych-2016-2-13",
    "question": "While sensation involves _____, perception involves _____.",
    "options": [
      "organization, coordination",
      "stimulation, interpretation",
      "identification, translation",
      "comprehension, information"
    ],
    "correctAnswer": 1,
    "explanation": "This is the core definition. Sensation is the initial process of receiving sensory stimulation. Perception is the higher-order process of interpreting and assigning meaning to that stimulation.",
    "subject": "psychology",
    "year": 2016,
    "chapter": 2
  },
  {
    "id": "psych-2016-2-14",
    "question": "The tendency not to respond to unchanging situations over time refers to:",
    "options": [
      "Differential threshold",
      "Sensory adaptation",
      "Extra sensory perception",
      "None"
    ],
    "correctAnswer": 1,
    "explanation": "This is the definition of sensory adaptation—a reduction in sensitivity to a constant stimulus over time.",
    "subject": "psychology",
    "year": 2016,
    "chapter": 2
  },
  {
    "id": "psych-2016-2-15",
    "question": "When we jump into a swimming pool, the water may at first seem quite cold. However, after a while, we tend to become accustomed to the water's temperature due to:",
    "options": [
      "Sensory perception",
      "Sensory adaptation",
      "Sensory response",
      "Sensory memory"
    ],
    "correctAnswer": 1,
    "explanation": "This is a classic example of sensory adaptation. The nervous system becomes less responsive to the constant stimulus of the cold water.",
    "subject": "psychology",
    "year": 2016,
    "chapter": 2
  },
  {
    "id": "psych-2016-2-16",
    "question": "A 25-year-old man near a leather factory stops noticing the smell after repeated exposure. This law of sensation is:",
    "options": [
      "Sensory overload",
      "Sensory adaptation",
      "The just noticeable difference",
      "None"
    ],
    "correctAnswer": 1,
    "explanation": "The phenomenon of \"smell blindness\" or becoming accustomed to a persistent odor is a direct result of sensory adaptation in the olfactory system.",
    "subject": "psychology",
    "year": 2016,
    "chapter": 2
  },
  {
    "id": "psych-2016-2-17",
    "question": "Consider what happens as your friend walks away but doesn’t look smaller. This illustrates:",
    "options": [
      "shape constancy",
      "size constancy",
      "location constancy",
      "brightness constancy"
    ],
    "correctAnswer": 1,
    "explanation": "Size constancy is the perception that an object remains the same size despite changes in the size of its retinal image. As your friend walks away, the image on your retina gets smaller, but you perceive them as being the same size because your brain takes distance into account.",
    "subject": "psychology",
    "year": 2016,
    "chapter": 2
  },
  {
    "id": "psych-2016-2-18",
    "question": "A person wearing a dotted shirt appears smooth from far but detailed when closer. This pictorial cue is:",
    "options": [
      "Interposition",
      "Linear perspective",
      "Relative size",
      "Texture gradient"
    ],
    "correctAnswer": 3,
    "explanation": "Texture gradient is a monocular depth cue where the texture of a surface appears more detailed and coarse when close and becomes finer, smoother, and less detailed as it recedes into the distance.",
    "subject": "psychology",
    "year": 2016,
    "chapter": 2
  },
  {
    "id": "psych-2016-2-19",
    "question": "The image on retina changes, but we perceive stability of size/shape/brightness. This is:",
    "options": [
      "Form perception",
      "Perceptual constancy",
      "Selectivity of perception",
      "Depth perception"
    ],
    "correctAnswer": 1,
    "explanation": "Perceptual constancy is the umbrella term for our ability to perceive objects as stable and unchanging (in their size, shape, color, and brightness) even as sensory information about them (the retinal image) changes.",
    "subject": "psychology",
    "year": 2016,
    "chapter": 2
  },
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