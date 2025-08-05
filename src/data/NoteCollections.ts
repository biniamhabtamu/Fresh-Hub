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
      id: 'chapter1', 
      title: 'Chapter 1: Essence of Psychology', 
      content: `
        <div class="prose max-w-none">
          <h1 class="text-3xl font-bold mb-6 text-purple-700">Chapter 1: Essence of Psychology</h1>
          
          <div class="bg-purple-50 p-6 rounded-xl mb-8 border-l-4 border-purple-500">
            <h2 class="text-2xl font-semibold mb-4 text-purple-800">Chapter Overview</h2>
            <p class="text-gray-700">This chapter introduces the concept of psychology, covering definitions, goals, historical background, major perspectives, branches, and research methods.</p>
          </div>

          <div class="bg-indigo-50 p-6 rounded-xl mb-8 border-l-4 border-indigo-500">
            <h2 class="text-2xl font-semibold mb-4 text-indigo-800">Learning Outcomes</h2>
            <ul class="list-disc pl-6 space-y-2 text-gray-700">
              <li>Define psychology</li>
              <li>Show the historical roots of psychology</li>
              <li>Identify goals and early schools of psychology</li>
              <li>Discuss different perspectives and subfields</li>
              <li>Differentiate research methods and steps in scientific research</li>
            </ul>
          </div>

          <section class="mb-10">
            <h2 class="text-2xl font-semibold mb-4 text-purple-700 border-b pb-2">1.1. Definition of Psychology and Related Concepts</h2>
            
            <div class="ml-6 space-y-4">
              <div class="bg-white p-4 rounded-lg shadow-sm">
                <h3 class="text-lg font-medium text-purple-600">Origin</h3>
                <p>The term "psychology" comes from the Greek words <span class="font-semibold">psyche</span> (mind, soul) and <span class="font-semibold">logos</span> (study, knowledge). It represents the study of the mind and its processes, often symbolized by the Greek letter <span class="text-xl">ᴪ</span> (psi).</p>
              </div>
              
              <div class="bg-white p-4 rounded-lg shadow-sm">
                <h3 class="text-lg font-medium text-purple-600">Scientific Definition</h3>
                <ul class="list-disc pl-6 space-y-2 mt-2">
                  <li><strong>Science:</strong> Psychology employs scientific methods to study behavior and mental processes, using empirical data.</li>
                  <li><strong>Behavior:</strong> Includes observable actions and reactions, as well as covert behaviors considered mental processes.</li>
                  <li><strong>Mental Processes:</strong> Refers to internal activities like thinking, feeling, and remembering.</li>
                </ul>
              </div>
              
              <div class="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400 mt-4">
                <h4 class="font-medium text-yellow-800">Reflection</h4>
                <ul class="list-disc pl-6 space-y-1 mt-2 text-gray-700">
                  <li>Compare the definition of psychology with prior conceptions.</li>
                  <li>Reflect on how the four goals of psychology relate to and differ from each other.</li>
                </ul>
              </div>
            </div>
          </section>

          <section class="mb-10">
            <h2 class="text-2xl font-semibold mb-4 text-purple-700 border-b pb-2">1.2. Goals of Psychology</h2>
            
            <div class="grid md:grid-cols-2 gap-4">
              <div class="bg-white p-4 rounded-lg shadow-sm">
                <h3 class="text-lg font-medium text-purple-600">Description</h3>
                <p>Observing and noting behavior to understand "What is happening?" This involves documenting actions and reactions.</p>
                <p class="mt-2 text-sm text-gray-600"><span class="font-medium">Example:</span> Noticing a student's decline in performance and attitude.</p>
              </div>
              
              <div class="bg-white p-4 rounded-lg shadow-sm">
                <h3 class="text-lg font-medium text-purple-600">Explanation</h3>
                <p>Seeking reasons for observed behavior, leading to theories.</p>
                <p class="mt-2 text-sm text-gray-600"><span class="font-medium">Example:</span> Understanding a student's behavior might involve investigating their home background.</p>
              </div>
              
              <div class="bg-white p-4 rounded-lg shadow-sm">
                <h3 class="text-lg font-medium text-purple-600">Prediction</h3>
                <p>Determining future behavior based on current observations and research.</p>
                <p class="mt-2 text-sm text-gray-600"><span class="font-medium">Example:</span> Predicting a student's academic potential based on observed issues.</p>
              </div>
              
              <div class="bg-white p-4 rounded-lg shadow-sm">
                <h3 class="text-lg font-medium text-purple-600">Control</h3>
                <p>Modifying behavior from undesirable to desirable, and controlling for variables in research.</p>
                <p class="mt-2 text-sm text-gray-600"><span class="font-medium">Example:</span> Implementing learning strategies to improve academic performance.</p>
              </div>
            </div>
          </section>

          <section class="mb-10">
            <h2 class="text-2xl font-semibold mb-4 text-purple-700 border-b pb-2">1.3. Historical Background and Major Perspectives</h2>
            
            <div class="ml-6 space-y-6">
              <div class="bg-white p-4 rounded-lg shadow-sm">
                <h3 class="text-lg font-medium text-purple-600">Historical Context</h3>
                <p>Psychology emerged around 125 years ago with Wilhelm Wundt establishing the first psychology laboratory in 1879 at the University of Leipzig, Germany. Wundt's method, objective introspection, aimed to scientifically study mental experiences.</p>
              </div>
              
              <div>
                <h3 class="text-xl font-medium mb-3 text-purple-600">Early Schools of Psychology</h3>
                
                <div class="grid md:grid-cols-3 gap-4">
                  <div class="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <h4 class="font-bold text-blue-700">Structuralism</h4>
                    <ul class="list-disc pl-5 space-y-1 mt-2 text-sm">
                      <li><strong>Founder:</strong> Edward Titchener</li>
                      <li><strong>Focus:</strong> Structure of the mind</li>
                      <li><strong>Method:</strong> Introspection</li>
                    </ul>
                  </div>
                  
                  <div class="bg-green-50 p-4 rounded-lg border border-green-200">
                    <h4 class="font-bold text-green-700">Functionalism</h4>
                    <ul class="list-disc pl-5 space-y-1 mt-2 text-sm">
                      <li><strong>Founder:</strong> William James</li>
                      <li><strong>Focus:</strong> Functions of the mind</li>
                      <li><strong>Methods:</strong> Questionnaires, tests</li>
                    </ul>
                  </div>
                  
                  <div class="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                    <h4 class="font-bold text-yellow-700">Gestalt Psychology</h4>
                    <ul class="list-disc pl-5 space-y-1 mt-2 text-sm">
                      <li><strong>Founders:</strong> Wertheimer et al.</li>
                      <li><strong>Focus:</strong> Mind as a whole</li>
                      <li><strong>Viewpoint:</strong> "Whole is greater"</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div class="grid md:grid-cols-2 gap-4 mt-4">
                <div class="bg-red-50 p-4 rounded-lg border border-red-200">
                  <h4 class="font-bold text-red-700">Behaviorism</h4>
                  <ul class="list-disc pl-5 space-y-1 mt-2 text-sm">
                    <li><strong>Founder:</strong> John B. Watson</li>
                    <li><strong>Focus:</strong> Observable behavior</li>
                    <li><strong>Key Concept:</strong> Learned behaviors</li>
                  </ul>
                </div>
                
                <div class="bg-pink-50 p-4 rounded-lg border border-pink-200">
                  <h4 class="font-bold text-pink-700">Psychoanalysis</h4>
                  <ul class="list-disc pl-5 space-y-1 mt-2 text-sm">
                    <li><strong>Founder:</strong> Sigmund Freud</li>
                    <li><strong>Focus:</strong> Unconscious mind</li>
                    <li><strong>Methods:</strong> Dream analysis</li>
                  </ul>
                </div>
              </div>
              
              <div class="bg-white p-4 rounded-lg shadow-sm mt-4">
                <h3 class="text-lg font-medium text-purple-600">Modern Perspectives</h3>
                <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-3 mt-3">
                  <div class="border p-3 rounded">
                    <h4 class="font-bold">Psychodynamic</h4>
                    <p class="text-sm">Unconscious dynamics, childhood experiences</p>
                  </div>
                  <div class="border p-3 rounded">
                    <h4 class="font-bold">Behavioral</h4>
                    <p class="text-sm">Learning experiences, environment</p>
                  </div>
                  <div class="border p-3 rounded">
                    <h4 class="font-bold">Humanistic</h4>
                    <p class="text-sm">Free will, self-actualization</p>
                  </div>
                  <div class="border p-3 rounded">
                    <h4 class="font-bold">Cognitive</h4>
                    <p class="text-sm">Reasoning, memory, problem-solving</p>
                  </div>
                  <div class="border p-3 rounded">
                    <h4 class="font-bold">Biological</h4>
                    <p class="text-sm">Brain structures, neurotransmitters</p>
                  </div>
                  <div class="border p-3 rounded">
                    <h4 class="font-bold">Sociocultural</h4>
                    <p class="text-sm">Cultural norms, social interactions</p>
                  </div>
                </div>
              </div>
              
              <div class="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                <h4 class="font-medium text-yellow-800">Reflection Questions</h4>
                <ul class="list-disc pl-6 space-y-1 mt-2 text-gray-700">
                  <li>How does the historical development influence current practices?</li>
                  <li>What are key differences between early schools?</li>
                  <li>How might insights from different perspectives be integrated?</li>
                </ul>
              </div>
            </div>
          </section>

          <section class="mb-10">
            <h2 class="text-2xl font-semibold mb-4 text-purple-700 border-b pb-2">1.4. Branches of Psychology</h2>
            
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div class="bg-white p-4 rounded-lg shadow-sm">
                <h3 class="text-lg font-medium text-purple-600">Developmental Psychology</h3>
                <p class="text-sm">Studies physical, cognitive, and psychological changes across the lifespan.</p>
              </div>
              
              <div class="bg-white p-4 rounded-lg shadow-sm">
                <h3 class="text-lg font-medium text-purple-600">Social Psychology</h3>
                <p class="text-sm">Deals with social interactions, relationships, and attitudes.</p>
              </div>
              
              <div class="bg-white p-4 rounded-lg shadow-sm">
                <h3 class="text-lg font-medium text-purple-600">Clinical Psychology</h3>
                <p class="text-sm">Diagnosis and treatment of psychological disorders.</p>
              </div>
              
              <div class="bg-white p-4 rounded-lg shadow-sm">
                <h3 class="text-lg font-medium text-purple-600">Industrial Psychology</h3>
                <p class="text-sm">Applies principles to increase productivity in organizations.</p>
              </div>
              
              <div class="bg-white p-4 rounded-lg shadow-sm">
                <h3 class="text-lg font-medium text-purple-600">Forensic Psychology</h3>
                <p class="text-sm">Applies principles to improve the legal system.</p>
              </div>
              
              <div class="bg-white p-4 rounded-lg shadow-sm">
                <h3 class="text-lg font-medium text-purple-600">Health Psychology</h3>
                <p class="text-sm">Prevention and treatment of physical illnesses.</p>
              </div>
            </div>
          </section>

          <section class="mb-10">
            <h2 class="text-2xl font-semibold mb-4 text-purple-700 border-b pb-2">1.5. Research Methods in Psychology</h2>
            
            <div class="ml-6 space-y-6">
              <div class="bg-white p-4 rounded-lg shadow-sm">
                <h3 class="text-lg font-medium text-purple-600">A. Definition of Terms</h3>
                <ul class="list-disc pl-6 space-y-2">
                  <li><strong>Scientific Method:</strong> Process for reducing bias through systematic observation</li>
                  <li><strong>Theory:</strong> Integrated principles describing aspects of experience</li>
                  <li><strong>Hypothesis:</strong> Tentative proposition about variable relationships</li>
                </ul>
              </div>
              
              <div>
                <h3 class="text-xl font-medium mb-3 text-purple-600">B. Major Research Methods</h3>
                
                <div class="grid md:grid-cols-3 gap-4">
                  <div class="bg-blue-50 p-4 rounded-lg">
                    <h4 class="font-bold text-blue-700">Descriptive Research</h4>
                    <ul class="list-disc pl-5 space-y-1 mt-2 text-sm">
                      <li>Naturalistic observation</li>
                      <li>Case studies</li>
                      <li>Surveys</li>
                    </ul>
                  </div>
                  
                  <div class="bg-green-50 p-4 rounded-lg">
                    <h4 class="font-bold text-green-700">Correlational Research</h4>
                    <p class="text-sm mt-2">Examines relationships between variables (correlation ≠ causation)</p>
                  </div>
                  
                  <div class="bg-purple-50 p-4 rounded-lg">
                    <h4 class="font-bold text-purple-700">Experimental Research</h4>
                    <ul class="list-disc pl-5 space-y-1 mt-2 text-sm">
                      <li>Independent Variable (IV)</li>
                      <li>Dependent Variable (DV)</li>
                      <li>Control Group</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div class="bg-white p-4 rounded-lg shadow-sm">
                <h3 class="text-lg font-medium text-purple-600">C. Steps of Scientific Research</h3>
                <ol class="list-decimal pl-6 space-y-3">
                  <li><strong>Defining the Problem:</strong> Identifying phenomenon needing explanation</li>
                  <li><strong>Formulating Hypothesis:</strong> Creating testable statement</li>
                  <li><strong>Testing Hypothesis:</strong> Collecting and analyzing data</li>
                  <li><strong>Drawing Conclusions:</strong> Making generalizations</li>
                  <li><strong>Reporting Results:</strong> Documenting findings</li>
                </ol>
              </div>
              
              <div class="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                <h4 class="font-medium text-yellow-800">Reflection Questions</h4>
                <ul class="list-disc pl-6 space-y-1 mt-2 text-gray-700">
                  <li>Compare the three major research methods</li>
                  <li>Discuss ethical procedures in research</li>
                  <li>List the steps of conducting research</li>
                </ul>
              </div>
            </div>
          </section>

          <div class="bg-purple-50 p-6 rounded-xl border border-purple-200">
            <h2 class="text-2xl font-semibold mb-4 text-purple-800">Summary</h2>
            <ul class="list-disc pl-6 space-y-2 text-gray-700">
              <li>Psychology is the scientific study of behavior and mental processes</li>
              <li>Psychologists aim to describe, explain, predict, and control behavior</li>
              <li>Evolved from early schools to modern perspectives</li>
              <li>Applied in health, education, business, and law</li>
              <li>Research methods include descriptive, correlational, and experimental</li>
            </ul>
          </div>

          <div class="mt-8 bg-white p-6 rounded-lg shadow-sm">
            <h2 class="text-2xl font-semibold mb-4 text-purple-700">Discussion Questions</h2>
            <ol class="list-decimal pl-6 space-y-3">
              <li>Compare and contrast the five early schools of thought in psychology</li>
              <li>Compare and contrast the modern psychological perspectives</li>
              <li>Reflect on the relationship between the goals of psychology and research methods</li>
              <li>In an experiment on tutorial support:
                <ul class="list-disc pl-6 mt-2 space-y-1">
                  <li><strong>Dependent Variable:</strong> Students' academic performance</li>
                  <li><strong>Independent Variable:</strong> Tutorial support</li>
                  <li><strong>Control Group:</strong> Students without tutorial support</li>
                </ul>
              </li>
            </ol>
          </div>
        </div>
      `
    },
    { 
      id: 'Chapter2', 
      title: 'Chapter 2 : Sensation and Perception ', 
      content: '<h2>What is Psychology?</h2><p>Psychology is the scientific study of mind and behavior...</p><h3>Key Concepts</h3><ul><li>Cognition</li><li>Emotion</li><li>Development</li></ul>'
    },
    { 
      id: 'Chapter3', 
      title: 'Chapter 3: Learninig and Theory of learnig', 
      content: '<h2>Scientific Methods in Psychology</h2><p>Experimental designs, case studies, and correlations...</p>'
    },
    { 
        id: 'Chapter4', 
        title: 'Chapter 4 : Memory and Forgetting', 
        content: '<h2>Parts of Speech</h2><p>Nouns, verbs, adjectives...</p>'
      },
      { 
        id: 'Chapter5', 
        title: 'Chapter 5: Motivation and Emotions', 
        content: '<h2>Parts of Speech</h2><p>Nouns, verbs, adjectives...</p>'
      },
      { 
        id: 'Chapter6', 
        title: 'Chapter 6 :Personality', 
        content: '<h2>Parts of Speech</h2><p>Nouns, verbs, adjectives...</p>'
      },
      { 
        id: 'Chapter7', 
        title: 'Chapter 7 : Psychological Disorders and Treatment Techniques', 
        content: '<h2>Parts of Speech</h2><p>Nouns, verbs, adjectives...</p>'
      }
  ]
},
  {
  id: 'logic',
  name: 'Logic',
  icon: '🔍',
  chapters: [
    { 
      id: 'chapter1', 
      title: 'Chapter 1: Introducing Philosophy', 
      content: `
        <div class="prose max-w-none">
          <h1 class="text-3xl font-bold mb-6 text-blue-800">Chapter 1: Introducing Philosophy</h1>
          
          <div class="bg-blue-50 p-6 rounded-xl mb-8 border-l-4 border-blue-600">
            <h2 class="text-2xl font-semibold mb-4 text-blue-800">Chapter Overview</h2>
            <div class="space-y-3 text-gray-700">
              <p><span class="font-medium text-blue-700">Logic:</span> Treated as both a field of study and an instrument:</p>
              <ul class="list-disc pl-6 space-y-1">
                <li><strong>As a field:</strong> Branch of philosophy focused on arguments and correct reasoning</li>
                <li><strong>As an instrument:</strong> Used to construct and evaluate rational arguments</li>
              </ul>
              <p>Historically, philosophers used logic to examine core philosophical topics like reality, knowledge, and values.</p>
            </div>
          </div>

          <div class="bg-green-50 p-6 rounded-xl mb-8 border-l-4 border-green-600">
            <h2 class="text-2xl font-semibold mb-4 text-green-800">Chapter Objectives</h2>
            <ul class="list-disc pl-6 space-y-2 text-gray-700">
              <li>Understand the meaning, nature, and features of philosophy</li>
              <li>Recognize the major branches of philosophy</li>
              <li>Appreciate the importance of studying logic and philosophy</li>
            </ul>
          </div>

          <section class="mb-10">
            <div class="flex items-center mb-4">
              <div class="bg-blue-600 text-white p-2 rounded-lg mr-3">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                </svg>
              </div>
              <h2 class="text-2xl font-semibold text-blue-800">Lesson 1: Meaning and Nature of Philosophy</h2>
            </div>
            
            <div class="ml-12 space-y-6">
              <div class="bg-white p-5 rounded-xl shadow-sm border border-gray-200">
                <h3 class="text-xl font-medium mb-3 text-blue-700">Definition</h3>
                <p>Etymologically, philosophy means <span class="font-semibold text-blue-600">"love of wisdom."</span></p>
                <ul class="list-disc pl-6 mt-3 space-y-2">
                  <li>Represents a quest for truth and development of critical thinking</li>
                  <li>Encourages questioning of what may appear obvious or assumed</li>
                </ul>
              </div>
              
              <div class="bg-white p-5 rounded-xl shadow-sm border border-gray-200">
                <h3 class="text-xl font-medium mb-3 text-blue-700">Lesson Objectives</h3>
                <ul class="list-disc pl-6 space-y-2">
                  <li>Recognize fundamental concepts of philosophy</li>
                  <li>Understand the meaning and nature of philosophy</li>
                </ul>
              </div>
              
              <div class="space-y-6">
                <div class="bg-indigo-50 p-5 rounded-lg">
                  <h3 class="text-lg font-bold mb-2 text-indigo-700">1. Defining Philosophy</h3>
                  <p>Unlike other disciplines with specific subjects, philosophy addresses universal issues such as:</p>
                  <div class="grid grid-cols-2 md:grid-cols-4 gap-2 mt-3">
                    <span class="bg-white px-3 py-1 rounded-full text-sm text-center shadow-sm">Existence</span>
                    <span class="bg-white px-3 py-1 rounded-full text-sm text-center shadow-sm">Knowledge</span>
                    <span class="bg-white px-3 py-1 rounded-full text-sm text-center shadow-sm">Truth</span>
                    <span class="bg-white px-3 py-1 rounded-full text-sm text-center shadow-sm">Values</span>
                  </div>
                </div>
                
                <div class="bg-purple-50 p-5 rounded-lg">
                  <h3 class="text-lg font-bold mb-2 text-purple-700">2. Philosophizing</h3>
                  <p>Philosophy involves questioning fundamental issues and developing a critical mindset.</p>
                  <div class="bg-white p-3 rounded mt-3 border-l-4 border-purple-500">
                    <p class="italic">"Philosophy begins in wonder"</p>
                    <p class="text-right text-sm text-gray-600">- Socrates</p>
                  </div>
                </div>
                
                <div class="bg-teal-50 p-5 rounded-lg">
                  <h3 class="text-lg font-bold mb-2 text-teal-700">3. Etymology</h3>
                  <p>The term comes from Greek:</p>
                  <div class="flex items-center mt-2">
                    <span class="bg-white px-3 py-1 rounded-full text-sm shadow-sm mr-2">philo = love</span>
                    <span class="bg-white px-3 py-1 rounded-full text-sm shadow-sm">sophia = wisdom</span>
                  </div>
                </div>
                
                <div class="bg-yellow-50 p-5 rounded-lg">
                  <h3 class="text-lg font-bold mb-2 text-yellow-700">4. The Nature of Wisdom</h3>
                  <p>Philosophical wisdom differs from technical knowledge - it's about critical thinking and truth.</p>
                  <p class="mt-2 font-medium">Socratic wisdom involves constant search for truth and questioning apparent realities.</p>
                </div>
                
                <div class="bg-pink-50 p-5 rounded-lg">
                  <h3 class="text-lg font-bold mb-2 text-pink-700">5. The Art of Questioning</h3>
                  <p>Central to philosophy, involving imagination and creativity to see beyond the obvious.</p>
                </div>
                
                <div class="bg-blue-50 p-5 rounded-lg">
                  <h3 class="text-lg font-bold mb-2 text-blue-700">6. Philosophy as Rational & Critical</h3>
                  <p>Formulates and answers fundamental questions through:</p>
                  <div class="grid grid-cols-2 md:grid-cols-4 gap-2 mt-3">
                    <span class="bg-white px-3 py-1 rounded-full text-sm text-center shadow-sm">Reason</span>
                    <span class="bg-white px-3 py-1 rounded-full text-sm text-center shadow-sm">Analysis</span>
                    <span class="bg-white px-3 py-1 rounded-full text-sm text-center shadow-sm">Comparison</span>
                    <span class="bg-white px-3 py-1 rounded-full text-sm text-center shadow-sm">Evaluation</span>
                  </div>
                </div>
                
                <div class="bg-green-50 p-5 rounded-lg">
                  <h3 class="text-lg font-bold mb-2 text-green-700">7. Philosophy as an Activity</h3>
                  <p>An active process rather than memorized knowledge - about thinking critically and philosophizing.</p>
                </div>
              </div>
            </div>
          </section>

          <section class="mb-10">
            <div class="flex items-center mb-4">
              <div class="bg-green-600 text-white p-2 rounded-lg mr-3">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h2 class="text-2xl font-semibold text-green-800">Lesson 2: Basic Features of Philosophy</h2>
            </div>
            
            <div class="ml-12 space-y-6">
              <div class="bg-white p-5 rounded-xl shadow-sm border border-gray-200">
                <h3 class="text-xl font-medium mb-3 text-green-700">Lesson Objectives</h3>
                <p>Recognize and understand the unique features of philosophy.</p>
              </div>
              
              <div class="space-y-4">
                <div class="border-l-4 border-blue-500 pl-4">
                  <h3 class="text-lg font-bold mb-2 text-blue-700">1. Informal vs. Formal Philosophy</h3>
                  <div class="grid md:grid-cols-2 gap-4">
                    <div class="bg-blue-50 p-4 rounded-lg">
                      <h4 class="font-semibold text-blue-600">Informal Philosophy</h4>
                      <p class="text-sm">Personal views/beliefs about life, often held uncritically</p>
                    </div>
                    <div class="bg-green-50 p-4 rounded-lg">
                      <h4 class="font-semibold text-green-600">Formal Philosophy</h4>
                      <p class="text-sm">Critical examination of beliefs using argumentation and analysis</p>
                    </div>
                  </div>
                </div>
                
                <div class="border-l-4 border-purple-500 pl-4">
                  <h3 class="text-lg font-bold mb-2 text-purple-700">2. Critical Reflection & Generalization</h3>
                  <p>Reflecting critically on common sense and generalizing across life problems.</p>
                </div>
                
                <div class="border-l-4 border-teal-500 pl-4">
                  <h3 class="text-lg font-bold mb-2 text-teal-700">3. Worldview Integration</h3>
                  <p>Combining conclusions of sciences and human experience into a coherent worldview.</p>
                </div>
                
                <div class="border-l-4 border-yellow-500 pl-4">
                  <h3 class="text-lg font-bold mb-2 text-yellow-700">4. Analysis of Language</h3>
                  <p>Logical analysis of language and clarification of terms.</p>
                </div>
                
                <div class="border-l-4 border-red-500 pl-4">
                  <h3 class="text-lg font-bold mb-2 text-red-700">5. Perennial Problems</h3>
                  <p>Addresses deep, fundamental issues about existence, truth, morality.</p>
                  <div class="grid grid-cols-2 md:grid-cols-4 gap-2 mt-3">
                    <span class="bg-white px-3 py-1 rounded-full text-sm text-center shadow-sm">Idealism</span>
                    <span class="bg-white px-3 py-1 rounded-full text-sm text-center shadow-sm">Realism</span>
                    <span class="bg-white px-3 py-1 rounded-full text-sm text-center shadow-sm">Pragmatism</span>
                    <span class="bg-white px-3 py-1 rounded-full text-sm text-center shadow-sm">Existentialism</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section class="mb-10">
            <div class="flex items-center mb-4">
              <div class="bg-purple-600 text-white p-2 rounded-lg mr-3">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
                </svg>
              </div>
              <h2 class="text-2xl font-semibold text-purple-800">Lesson 3: Metaphysics and Epistemology</h2>
            </div>
            
            <div class="ml-12 space-y-6">
              <div class="grid md:grid-cols-2 gap-6">
                <div class="bg-indigo-50 p-5 rounded-xl">
                  <h3 class="text-xl font-bold mb-3 text-indigo-700">Metaphysics</h3>
                  <p>Studies the ultimate nature of reality or existence.</p>
                  
                  <div class="mt-4">
                    <h4 class="font-semibold mb-2">Key Questions:</h4>
                    <ul class="list-disc pl-6 space-y-1 text-sm">
                      <li>What is the nature of reality?</li>
                      <li>Mind-body problem</li>
                      <li>Existence of God</li>
                      <li>Meaning of life</li>
                    </ul>
                  </div>
                  
                  <div class="mt-4">
                    <h4 class="font-semibold mb-2">Subsets:</h4>
                    <div class="space-y-2">
                      <div class="bg-white p-2 rounded">
                        <h5 class="font-medium">Cosmological</h5>
                        <p class="text-xs">Universe's origin, nature, purpose</p>
                      </div>
                      <div class="bg-white p-2 rounded">
                        <h5 class="font-medium">Theological</h5>
                        <p class="text-xs">Existence and attributes of God</p>
                      </div>
                      <div class="bg-white p-2 rounded">
                        <h5 class="font-medium">Anthropological</h5>
                        <p class="text-xs">Human nature, free will, soul</p>
                      </div>
                      <div class="bg-white p-2 rounded">
                        <h5 class="font-medium">Ontological</h5>
                        <p class="text-xs">Nature of existence</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div class="bg-teal-50 p-5 rounded-xl">
                  <h3 class="text-xl font-bold mb-3 text-teal-700">Epistemology</h3>
                  <p>Examines the nature, scope, and validity of knowledge.</p>
                  
                  <div class="mt-4">
                    <h4 class="font-semibold mb-2">Key Issues:</h4>
                    <ul class="list-disc pl-6 space-y-1 text-sm">
                      <li>Nature of knowledge and truth</li>
                      <li>Sources of knowledge</li>
                      <li>Faith vs. reason</li>
                      <li>Subjective vs. objective knowledge</li>
                    </ul>
                  </div>
                  
                  <div class="mt-4">
                    <h4 class="font-semibold mb-2">Sources of Knowledge:</h4>
                    <div class="grid grid-cols-2 gap-2">
                      <span class="bg-white px-2 py-1 rounded text-sm text-center shadow-sm">Experience</span>
                      <span class="bg-white px-2 py-1 rounded text-sm text-center shadow-sm">Reason</span>
                      <span class="bg-white px-2 py-1 rounded text-sm text-center shadow-sm">Intuition</span>
                      <span class="bg-white px-2 py-1 rounded text-sm text-center shadow-sm">Revelation</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section class="mb-10">
            <div class="flex items-center mb-4">
              <div class="bg-red-600 text-white p-2 rounded-lg mr-3">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                </svg>
              </div>
              <h2 class="text-2xl font-semibold text-red-800">Lesson 4: Axiology and Logic</h2>
            </div>
            
            <div class="ml-12 space-y-6">
              <div class="grid md:grid-cols-2 gap-6">
                <div class="bg-yellow-50 p-5 rounded-xl">
                  <h3 class="text-xl font-bold mb-3 text-yellow-700">Axiology</h3>
                  <p class="italic">(Greek: "Axios" = value, "Logos" = study)</p>
                  
                  <div class="mt-4">
                    <h4 class="font-semibold mb-2">Areas of Study:</h4>
                    <div class="space-y-3">
                      <div class="bg-white p-3 rounded-lg">
                        <h5 class="font-bold text-yellow-600">Ethics</h5>
                        <ul class="list-disc pl-5 mt-1 space-y-1 text-sm">
                          <li>Moral principles and conduct</li>
                          <li>Branches: Meta-ethics, Normative, Applied</li>
                          <li>Questions: Good/bad, right/wrong</li>
                        </ul>
                      </div>
                      
                      <div class="bg-white p-3 rounded-lg">
                        <h5 class="font-bold text-yellow-600">Aesthetics</h5>
                        <ul class="list-disc pl-5 mt-1 space-y-1 text-sm">
                          <li>Theory of beauty and art</li>
                          <li>Questions: What is art? Standards of beauty?</li>
                        </ul>
                      </div>
                      
                      <div class="bg-white p-3 rounded-lg">
                        <h5 class="font-bold text-yellow-600">Social/Political</h5>
                        <ul class="list-disc pl-5 mt-1 space-y-1 text-sm">
                          <li>Value judgments in society</li>
                          <li>Questions: Best government? Justice?</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div class="bg-blue-50 p-5 rounded-xl">
                  <h3 class="text-xl font-bold mb-3 text-blue-700">Logic</h3>
                  <p>Study of principles of right reasoning.</p>
                  
                  <div class="mt-4">
                    <h4 class="font-semibold mb-2">Key Questions:</h4>
                    <ul class="list-disc pl-6 space-y-1 text-sm">
                      <li>What constitutes an argument?</li>
                      <li>Validity and soundness of arguments</li>
                      <li>Relationship between premises and conclusion</li>
                      <li>Identifying fallacies</li>
                    </ul>
                  </div>
                  
                  <div class="mt-4">
                    <h4 class="font-semibold mb-2">Types of Logic:</h4>
                    <div class="grid grid-cols-2 gap-2">
                      <span class="bg-white px-2 py-1 rounded text-sm text-center shadow-sm">Deductive</span>
                      <span class="bg-white px-2 py-1 rounded text-sm text-center shadow-sm">Inductive</span>
                      <span class="bg-white px-2 py-1 rounded text-sm text-center shadow-sm">Formal</span>
                      <span class="bg-white px-2 py-1 rounded text-sm text-center shadow-sm">Informal</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section class="mb-10">
            <div class="flex items-center mb-4">
              <div class="bg-green-600 text-white p-2 rounded-lg mr-3">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                </svg>
              </div>
              <h2 class="text-2xl font-semibold text-green-800">Lesson 5: Importance of Learning Philosophy</h2>
            </div>
            
            <div class="ml-12 space-y-6">
              <div class="bg-white p-5 rounded-xl shadow-sm border border-gray-200">
                <h3 class="text-xl font-medium mb-3 text-green-700">Benefits</h3>
                <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div class="bg-green-50 p-4 rounded-lg">
                    <h4 class="font-bold mb-2">1. Intellectual Independence</h4>
                    <p class="text-sm">Develop personal opinions and coherent worldviews</p>
                  </div>
                  <div class="bg-blue-50 p-4 rounded-lg">
                    <h4 class="font-bold mb-2">2. Reflective Self-Awareness</h4>
                    <p class="text-sm">Critically examine essential aspects of life</p>
                  </div>
                  <div class="bg-purple-50 p-4 rounded-lg">
                    <h4 class="font-bold mb-2">3. Tolerance & Open-Mindedness</h4>
                    <p class="text-sm">Understand diverse perspectives</p>
                  </div>
                  <div class="bg-yellow-50 p-4 rounded-lg">
                    <h4 class="font-bold mb-2">4. Critical Thinking</h4>
                    <p class="text-sm">Enhance reasoning and original perspectives</p>
                  </div>
                  <div class="bg-red-50 p-4 rounded-lg">
                    <h4 class="font-bold mb-2">5. Value Systems</h4>
                    <p class="text-sm">Formulate moral, aesthetic, political values</p>
                  </div>
                </div>
              </div>
              
              <div class="bg-gray-50 p-5 rounded-xl border-l-4 border-gray-500">
                <h3 class="text-lg font-bold mb-2 text-gray-700">Dealing with Uncertainty</h3>
                <p class="italic">"The whole problem with the world is that fools and fanatics are always so certain of themselves, and wiser people so full of doubts."</p>
                <p class="text-right text-sm text-gray-600">- Bertrand Russell</p>
              </div>
            </div>
          </section>

          <div class="bg-blue-50 p-6 rounded-xl border border-blue-200">
            <h2 class="text-2xl font-semibold mb-4 text-blue-800">Chapter Summary</h2>
            <ul class="list-disc pl-6 space-y-2 text-gray-700">
              <li>Philosophy means "love of wisdom" - involves critical thinking and truth-seeking</li>
              <li>Dual-sided discipline with critical and constructive aspects</li>
              <li>Major branches: Metaphysics, Epistemology, Axiology, Logic</li>
              <li>Helps examine life critically, promotes self-actualization</li>
              <li>Prepares students to handle uncertainty of knowledge</li>
            </ul>
          </div>
        </div>
      `
    },
    { 
      id: 'Chapter2', 
      title: 'Chapter 2 : Basic Concepts Of Logic', 
      content: '<h2>Basic Logical Operators</h2><p>AND, OR, NOT, IF-THEN...</p>'
    },
    { 
      id: 'Chapter3', 
      title: 'Chapter 3 : Logic and Langueage', 
      content: '<h2>Common Reasoning Errors</h2><p>Straw man, ad hominem, false dilemma...</p>'
    },
    { 
        id: 'MidExams', 
        title: 'Mid Exam Collations all Ethiopian University', 
        content: '<h2>Parts of Speech</h2><p>Nouns, verbs, adjectives...</p>'
      },
    { 
        id: 'Chapter4', 
        title: 'Chapter 4 : Basic Concepts Of Critical Thinking', 
        content: '<h2>Parts of Speech</h2><p>Nouns, verbs, adjectives...</p>'
      },
      { 
        id: 'Chapter5', 
        title: 'Chapter 5 : Informal Fallacies', 
        content: '<h2>Parts of Speech</h2><p>Nouns, verbs, adjectives...</p>'
      },
      { 
        id: 'Chapter6', 
        title: 'Chapter 6 : Categorical Propostion', 
        content: '<h2>Parts of Speech</h2><p>Nouns, verbs, adjectives...</p>'
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
      id: 'chapter2', 
      title: 'Chapter 2: The Geology Of Ethiopia and the Horn of Africa', 
      content: '<h2>Earth Systems</h2><p>Lithosphere, hydrosphere, atmosphere...</p>'
    },
    { 
      id: 'chapter3', 
      title: 'Chapter 3:  The Topography of Ethiopia and the Horn of Africa', 
      content: '<h2>Population and Culture</h2><p>Demographics, migration patterns...</p>'
    },
    { 
      id: 'chapter4', 
      title: ' Chapter 4: Drainage Systems and Water Resources of Ethiopia and the Horn of Africa', 
      content: '<h2>Water Bodies</h2><p>Lakes, rivers, and their significance...</p>'
    }
  ]
},
  {
    id: 'english1',
    name: 'English Skill 1',
    icon: '📖',
    chapters: [
      { 
        id: 'Chapter1', 
        title: 'Chapter 1: Tense', 
        content: '<h2>Parts of Speech</h2><p>Nouns, verbs, adjectives...</p>'
      },
      { 
        id: 'Chapter2', 
        title: 'Chapter 2: Conditonal Sentence', 
        content: '<h2>Parts of Speech</h2><p>Nouns, verbs, adjectives...</p>'
      },
      { 
        id: 'Chapter3', 
        title: 'Chapter 3 : Modal Verb', 
        content: '<h2>Parts of Speech</h2><p>Nouns, verbs, adjectives...</p>'
      },
      { 
        id: 'Chapter4', 
        title: 'Chapeter 4: Colloctations', 
        content: '<h2>Parts of Speech</h2><p>Nouns, verbs, adjectives...</p>'
      },
      { 
        id: 'Chapter5', 
        title: 'Chapter 5 : Active and Passive Voices', 
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