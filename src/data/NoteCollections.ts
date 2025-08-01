export interface Chapter {
  id: string;
  title: string;
  content: string;
}

export interface Subject {
  id: string;
  name: string;
  icon: string;
  chapters: Chapter[];
}

export const noteCollections: Subject[] = [
  {
    id: 'psychology',
    name: 'Psychology',
    icon: '🧠',
    chapters: [
      { 
        id: 'intro', 
        title: 'Introduction to Psychology', 
        content: '<h2>What is Psychology?</h2><p>Psychology is the scientific study of mind and behavior...</p><h3>Key Concepts</h3><ul><li>Cognition</li><li>Emotion</li><li>Development</li></ul>'
      },
      { 
        id: 'research-methods', 
        title: 'Research Methods', 
        content: '<h2>Scientific Methods in Psychology</h2><p>Experimental designs, case studies, and correlations...</p>'
      }
    ]
  },
  {
    id: 'logic',
    name: 'Logic',
    icon: '🔍',
    chapters: [
      { 
        id: 'propositional', 
        title: 'Propositional Logic', 
        content: '<h2>Basic Logical Operators</h2><p>AND, OR, NOT, IF-THEN...</p>'
      },
      { 
        id: 'fallacies', 
        title: 'Logical Fallacies', 
        content: '<h2>Common Reasoning Errors</h2><p>Straw man, ad hominem, false dilemma...</p>'
      }
    ]
  },
 {
  id: 'geography',
  name: 'Geography',
  icon: '🌍',
  chapters: [
    { 
      id: 'chapter1', 
      title: 'Chapter 1: Introduction to Geography', 
      content: `
        <div class="prose max-w-none">
          <h1 class="text-3xl font-bold mb-6">Chapter 1: Introduction to Geography</h1>
          
          <div class="bg-blue-50 p-6 rounded-xl mb-8">
            <h2 class="text-2xl font-semibold mb-4">Chapter Overview</h2>
            <p>This chapter introduces the meaning, scope, themes, and approaches of Geography, and discusses the location, shape, and size of Ethiopia and the Horn of Africa. It also covers basic map reading skills.</p>
          </div>

          <div class="bg-green-50 p-6 rounded-xl mb-8">
            <h2 class="text-2xl font-semibold mb-4">Objectives</h2>
            <ul class="list-disc pl-6 space-y-2">
              <li>Understand the meaning and scope of Geography</li>
              <li>Explain the themes of Geography</li>
              <li>Analyze the implications of Ethiopia's location, shape, and size on various aspects</li>
              <li>Acquire basic map reading skills</li>
            </ul>
          </div>

          <section class="mb-10">
            <h2 class="text-2xl font-semibold mb-4 text-blue-600">1.1. Geography: Definition, Scope, and Themes</h2>
            
            <div class="ml-6">
              <h3 class="text-xl font-medium mb-3">1.1.1. Meaning of Geography</h3>
              <p><strong>Definition:</strong> Geography is the scientific study of the Earth that analyzes spatial and temporal variations of physical, biological, and human phenomena, and their interrelationships over the Earth's surface.</p>
              
              <h3 class="text-xl font-medium mt-6 mb-3">1.1.2. The Scope, Approaches, and Themes of Geography</h3>
              <p><strong>Scope:</strong> Geography studies the Earth's surface, the interface of atmosphere, lithosphere, hydrosphere, and biosphere, providing the habitable zone for humans.</p>
              
              <div class="mt-4">
                <h4 class="font-medium">Approaches:</h4>
                <ul class="list-disc pl-6 space-y-2 mt-2">
                  <li><strong>Human-Physical Continuum:</strong> Examines both human and physical phenomena</li>
                  <li><strong>Topical-Regional Continuum:</strong> Systematic fields of Geography and regional geography, focusing on specific categories and their spatial associations</li>
                </ul>
              </div>
              
              <div class="mt-4">
                <h4 class="font-medium">Themes of Geography:</h4>
                <ul class="list-disc pl-6 space-y-2 mt-2">
                  <li><strong>Location:</strong> Specific position, either absolute (latitude/longitude) or relative (compared to other locations)</li>
                  <li><strong>Place:</strong> Physical and human aspects of a location, including toponym, site, and situation</li>
                  <li><strong>Human-Environment Interaction:</strong> Examines how humans depend on, adapt to, and modify the environment</li>
                  <li><strong>Movement:</strong> Covers the movement of people, goods, and ideas</li>
                  <li><strong>Region:</strong> Areas with distinctive characteristics that set them apart, including formal regions (homogeneous features) and functional or nodal regions (functional interrelationships)</li>
                </ul>
              </div>
            </div>
          </section>

          <section class="mb-10">
            <h2 class="text-2xl font-semibold mb-4 text-blue-600">1.2. Location, Shape, and Size of Ethiopia and the Horn</h2>
            
            <div class="ml-6">
              <p><strong>Horn of Africa:</strong> A region extending into the northern Indian Ocean, separating it from the Gulf of Aden, including Djibouti, Eritrea, Ethiopia, and Somalia. It features diverse areas like the Ethiopian Plateau, Ogaden desert, and coastal regions.</p>
              
              <p class="mt-3"><strong>Ethiopia:</strong> The largest country in the Horn of Africa, with diverse physical features and a significant historical context in the region.</p>
              
              <h3 class="text-xl font-medium mt-6 mb-3">1.2.1. Location of Ethiopia</h3>
              
              <h4 class="font-medium">Location Types:</h4>
              <ul class="list-disc pl-6 space-y-2 mt-2">
                <li>
                  <strong>Astronomical Location:</strong> Ethiopia is located between 3°N (Moyale) and 15°N (Bademe) latitudes, and 33°E (Akobo) to 48°E (Ogaden) longitudes. This landlocked country has a greater east-west distance (150 km) compared to its north-south distance (120 km).
                </li>
                <li>
                  <strong>Relative Location:</strong>
                  <ul class="list-disc pl-6 mt-2 space-y-2">
                    <li><strong>Vicinal Location:</strong> West/Northwest: Sudan; Southwest: South Sudan; East: Djibouti, Somalia; North/Northeast: Eritrea; South: Kenya</li>
                    <li><strong>In Relation to Landmasses and Water Bodies:</strong> In the Horn of Africa; Southwest of the Arabian Peninsula; South of Europe; Northwest of the Indian Ocean; In the Nile Basin</li>
                  </ul>
                </li>
              </ul>
              
              <h4 class="font-medium mt-4">Implications of Ethiopia's Location:</h4>
              <ul class="list-disc pl-6 space-y-2 mt-2">
                <li><strong>Climate:</strong> Positioned between 3°N and 15°N, Ethiopia experiences a tropical climate</li>
                <li><strong>Socio-cultural:</strong> Early adopter of Christianity, Islam, and Judaism due to proximity to Middle East</li>
                <li><strong>Political:</strong> Geopolitical interests of superpowers; proximity to Red Sea trade route; historical resistance to invasions</li>
              </ul>
              
              <h3 class="text-xl font-medium mt-6 mb-3">1.2.2. Size of Ethiopia</h3>
              <p>Ethiopia covers approximately 1,106,000 square kilometers (8th largest in Africa, 25th in world).</p>
              
              <h4 class="font-medium mt-4">Advantages:</h4>
              <ul class="list-disc pl-6 space-y-2 mt-2">
                <li>Diverse agro-ecological zones</li>
                <li>Variety of natural resources</li>
                <li>Extensive arable land</li>
                <li>Larger population capacity</li>
                <li>Home to diverse cultures</li>
              </ul>
              
              <h4 class="font-medium mt-4">Disadvantages:</h4>
              <ul class="list-disc pl-6 space-y-2 mt-2">
                <li>Greater capital needed for infrastructure</li>
                <li>Large army required for defense</li>
                <li>Challenges in effective administration</li>
                <li>Difficulties in socio-economic integration</li>
                <li>Greater depth needed for defense against invasion</li>
              </ul>
              
              <h3 class="text-xl font-medium mt-6 mb-3">1.2.3. The Shape of Ethiopia and Its Implication</h3>
              <p>Countries' shapes fall into five categories: compact, fragmented, elongated, perforated, and protruded.</p>
              
              <h4 class="font-medium mt-4">Indices of Compactness:</h4>
              <ul class="list-disc pl-6 space-y-2 mt-2">
                <li><strong>Area-Boundary Ratio:</strong> Measures efficiency of shape (higher ratio = more compact)</li>
                <li><strong>Boundary-Circumference Ratio:</strong> Compares boundary length to circumference of equal-area circle (closer to 1 = more circular)</li>
                <li><strong>Area-Circumference Ratio:</strong> Compares area to circumference of smallest enclosing circle (higher = more compact)</li>
                <li><strong>Area-Area Ratio:</strong> Compares area to area of smallest enclosing circle (closer to 1 = more circular)</li>
              </ul>
              
              <p class="mt-4"><strong>Implication:</strong> Compactness affects transportation, infrastructure, and border security. More compact countries are easier to manage and develop.</p>
            </div>
          </section>

          <section class="mb-10">
            <h2 class="text-2xl font-semibold mb-4 text-blue-600">1.3. Basic Skills of Map Reading</h2>
            
            <div class="ml-6">
              <h3 class="text-xl font-medium mb-3">1.3.1. Definition and Importance of Maps</h3>
              <p><strong>Definition:</strong> A map is a two-dimensional, scaled representation of part or the whole of the Earth's surface on a flat medium.</p>
              
              <h4 class="font-medium mt-4">Marginal Information of a Map:</h4>
              <ul class="list-disc pl-6 space-y-2 mt-2">
                <li>Title</li>
                <li>Key (legend)</li>
                <li>Scale</li>
                <li>North arrow</li>
                <li>Margin</li>
                <li>Date of compilation</li>
              </ul>
              
              <h4 class="font-medium mt-4">Importance of Maps:</h4>
              <ul class="list-disc pl-6 space-y-2 mt-2">
                <li>Provide geographical details</li>
                <li>Support spatial analysis</li>
                <li>Used in land use planning, military science, tourism, etc.</li>
                <li>Help in storing and assessing geographical data</li>
              </ul>
              
              <h3 class="text-xl font-medium mt-6 mb-3">1.3.2. Types of Maps</h3>
              <ul class="list-disc pl-6 space-y-2">
                <li><strong>Topographical Maps:</strong> Depict natural and cultural features</li>
                <li><strong>Special Purpose/Statistical Maps:</strong> Show distributions of aspects like temperature, rainfall, vegetation</li>
              </ul>
              
              <h3 class="text-xl font-medium mt-6 mb-3">1.3.3. Basic Principles of Map Reading</h3>
              <ul class="list-disc pl-6 space-y-2">
                <li><strong>Understanding Symbols:</strong> Visualize map symbols in relation to real-world features</li>
                <li><strong>Knowledge of Directions:</strong> Crucial for orientation and locating features</li>
                <li><strong>Grid System:</strong> Helps pinpoint locations through grid references</li>
              </ul>
            </div>
          </section>

          <div class="bg-yellow-50 p-6 rounded-xl">
            <h2 class="text-2xl font-semibold mb-4">Review Questions</h2>
            <ol class="list-decimal pl-6 space-y-3">
              <li>What are the implications of Ethiopia's location, shape, and size on physical environment, socio-economic, and political aspects?</li>
              <li>Explain the five themes of Geography.</li>
              <li>Describe the basic principles of map reading.</li>
            </ol>
          </div>
        </div>
      `
    },
    { 
      id: 'physical', 
      title: 'Physical Geography', 
      content: '<h2>Earth Systems</h2><p>Lithosphere, hydrosphere, atmosphere...</p>'
    },
    { 
      id: 'human', 
      title: 'Human Geography', 
      content: '<h2>Population and Culture</h2><p>Demographics, migration patterns...</p>'
    }
  ]
},
  {
    id: 'english1',
    name: 'English Skill 1',
    icon: '📖',
    chapters: [
      { 
        id: 'grammar', 
        title: 'Basic Grammar', 
        content: '<h2>Parts of Speech</h2><p>Nouns, verbs, adjectives...</p>'
      }
    ]
  },
  {
    id: 'english2',
    name: 'English Skill 2',
    icon: '✍️',
    chapters: [
      { 
        id: 'composition', 
        title: 'Essay Writing', 
        content: '<h2>Academic Writing</h2><p>Thesis statements, paragraph structure...</p>'
      }
    ]
  },
  {
    id: 'anthropology',
    name: 'Anthropology',
    icon: '👥',
    chapters: [
      { 
        id: 'cultural', 
        title: 'Cultural Anthropology', 
        content: '<h2>Human Societies</h2><p>Cultural relativism, ethnography...</p>'
      }
    ]
  },
  {
    id: 'economics',
    name: 'Economics',
    icon: '💰',
    chapters: [
      { 
        id: 'micro', 
        title: 'Microeconomics', 
        content: '<h2>Supply and Demand</h2><p>Market equilibrium, elasticity...</p>'
      },
      { 
        id: 'macro', 
        title: 'Macroeconomics', 
        content: '<h2>National Economies</h2><p>GDP, inflation, fiscal policy...</p>'
      }
    ]
  },
  {
    id: 'physics',
    name: 'Physics',
    icon: '⚛️',
    chapters: [
      { 
        id: 'mechanics', 
        title: 'Classical Mechanics', 
        content: '<h2>Newton\'s Laws</h2><p>Motion, forces, energy...</p>'
      }
    ]
  },
  {
    id: 'math',
    name: 'Mathematics',
    icon: '🧮',
    chapters: [
      { 
        id: 'calculus', 
        title: 'Calculus', 
        content: '<h2>Derivatives and Integrals</h2><p>Limits, differentiation rules...</p>'
      }
    ]
  },
  {
    id: 'organic-chem',
    name: 'Organic Chemistry',
    icon: '⚗️',
    chapters: [
      { 
        id: 'hydrocarbons', 
        title: 'Hydrocarbons', 
        content: '<h2>Alkanes, Alkenes, Alkynes</h2><p>Nomenclature, reactions...</p>'
      }
    ]
  },
  {
    id: 'interpretation',
    name: 'Interpretation',
    icon: '🗣️',
    chapters: [
      { 
        id: 'techniques', 
        title: 'Interpretation Techniques', 
        content: '<h2>Language Mediation</h2><p>Consecutive vs simultaneous...</p>'
      }
    ]
  },
  {
    id: 'cpp',
    name: 'C++ Programming',
    icon: '💻',
    chapters: [
      { 
        id: 'basics', 
        title: 'C++ Fundamentals', 
        content: '<h2>Syntax and Structure</h2><p>Variables, loops, functions...</p>'
      }
    ]
  },
  {
    id: 'applied-math',
    name: 'Applied Mathematics',
    icon: '📐',
    chapters: [
      { 
        id: 'modeling', 
        title: 'Mathematical Modeling', 
        content: '<h2>Real-world Applications</h2><p>Differential equations, optimization...</p>'
      }
    ]
  },
  {
    id: 'global-trade',
    name: 'Global Trade',
    icon: '🌐',
    chapters: [
      { 
        id: 'principles', 
        title: 'Trade Principles', 
        content: '<h2>International Commerce</h2><p>Comparative advantage, tariffs...</p>'
      }
    ]
  },
  {
    id: 'emerging-tech',
    name: 'Emerging Technology',
    icon: '🚀',
    chapters: [
      { 
        id: 'ai', 
        title: 'Artificial Intelligence', 
        content: '<h2>Machine Learning Basics</h2><p>Neural networks, algorithms...</p>'
      }
    ]
  },
  {
    id: 'civic',
    name: 'Civic Education',
    icon: '🏛️',
    chapters: [
      { 
        id: 'government', 
        title: 'Government Systems', 
        content: '<h2>Democratic Principles</h2><p>Branches of government, civic duties...</p>'
      }
    ]
  },
  {
    id: 'inclusive',
    name: 'Inclusive Education',
    icon: '♿',
    chapters: [
      { 
        id: 'strategies', 
        title: 'Teaching Strategies', 
        content: '<h2>Diverse Classrooms</h2><p>Differentiated instruction, accommodations...</p>'
      }
    ]
  },
  {
    id: 'history',
    name: 'History',
    icon: '📜',
    chapters: [
      { 
        id: 'world', 
        title: 'World History', 
        content: '<h2>Major Civilizations</h2><p>Ancient to modern historical developments...</p>'
      }
    ]
  }
];