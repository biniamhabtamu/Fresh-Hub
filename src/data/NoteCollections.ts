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
  "id": "chapter1",
  "title": "🌟 Philosophy Essentials: A Structured Overview",
  "subtitle": "Clear, Concise & Easy to Review",
  "content": `
    <div style="font-family: 'Segoe UI', Tahoma, sans-serif; max-width: 100%; padding: 15px; color: #2c3e50; box-sizing: border-box;">
      <!-- Chapter Header -->
      <div style="background: linear-gradient(135deg, #1a2980 0%, #26d0ce 100%); color: white; padding: 20px; border-radius: 12px; text-align: center; margin-bottom: 20px;">
        <h1 style="margin: 0; font-size: 1.8rem;">🌟 Philosophy Essentials</h1>
        <p style="font-size: 1rem; opacity: 0.9; margin: 10px 0 0;">Clear, Concise & Easy to Review</p>
      </div>

      <!-- Chapter Overview -->
      <div style="background: #f0f4ff; padding: 20px; border-radius: 12px; margin-bottom: 20px; border-left: 4px solid #4a69bd;">
        <h2 style="color: #1e3799; margin-top: 0;">📚 Chapter One: Introducing Philosophy</h2>
        <div style="background: white; padding: 15px; border-radius: 8px;">
          <h3 style="color: #4a69bd;">Chapter Overview</h3>
          <ul>
            <li><strong>Logic:</strong>
              <ul>
                <li>As a field: Branch of philosophy focused on arguments and principles of correct reasoning</li>
                <li>As an instrument: Used to construct rational arguments and evaluate others' arguments</li>
              </ul>
            </li>
            <li><strong>Philosophy:</strong> Study of fundamental problems related to existence, knowledge, truth, beauty, law, justice, validity, mind, and language</li>
            <li><strong>Historically:</strong> Philosophers used logic to examine core philosophical topics</li>
          </ul>
          
          <h3 style="color: #4a69bd;">Chapter Objectives</h3>
          <ul>
            <li>Understand the meaning, nature, and features of philosophy</li>
            <li>Recognize the major branches of philosophy</li>
            <li>Appreciate the importance of studying logic and philosophy</li>
          </ul>
        </div>
      </div>

      <!-- Lesson 1 -->
      <div style="background: #e3f2fd; padding: 20px; border-radius: 12px; margin-bottom: 20px; border-left: 4px solid #2196f3;">
        <h2 style="color: #0d47a1; margin-top: 0;">🧠 Lesson 1: Meaning and Nature of Philosophy</h2>
        
        <div style="background: white; padding: 15px; border-radius: 8px; margin-bottom: 15px;">
          <h3 style="color: #1565c0;">Definition</h3>
          <p>Etymologically, philosophy means "love of wisdom" (Greek: "philo" = love, "sophia" = wisdom).</p>
        </div>
        
        <div style="background: white; padding: 15px; border-radius: 8px; margin-bottom: 15px;">
          <h3 style="color: #1565c0;">Lesson Objectives</h3>
          <ul>
            <li>Recognize fundamental concepts of philosophy</li>
            <li>Understand the meaning and nature of philosophy</li>
          </ul>
        </div>
        
        <div style="background: white; padding: 15px; border-radius: 8px;">
          <h3 style="color: #1565c0;">Key Concepts</h3>
          <ol>
            <li><strong>Defining Philosophy:</strong>
              <ul>
                <li>Addresses universal issues (existence, knowledge, values) rather than specific subjects</li>
                <li>Requires engagement with philosophers' ideas and philosophical discussions</li>
              </ul>
            </li>
            <li><strong>Philosophizing:</strong>
              <ul>
                <li>Involves questioning fundamental issues and developing critical mindset</li>
                <li>Socrates: Philosophy begins in wonder and curiosity</li>
              </ul>
            </li>
            <li><strong>Nature of Wisdom:</strong>
              <ul>
                <li>Critical thinking and respect for truth rather than technical knowledge</li>
                <li>Socratic wisdom: Constant search for truth</li>
              </ul>
            </li>
            <li><strong>Art of Questioning:</strong>
              <ul>
                <li>Central to philosophy, using imagination to see beyond the obvious</li>
                <li>Leads to profound reflection and deeper understanding</li>
              </ul>
            </li>
            <li><strong>Rational and Critical:</strong>
              <ul>
                <li>Answers fundamental questions through reason, analysis, comparison, evaluation</li>
                <li>Constructive (developing answers) and critical (evaluating answers) sides</li>
              </ul>
            </li>
            <li><strong>Philosophy as Activity:</strong>
              <ul>
                <li>Active process of thinking critically rather than memorizing knowledge</li>
              </ul>
            </li>
          </ol>
        </div>
      </div>

      <!-- Lesson 2 -->
      <div style="background: #ffebee; padding: 20px; border-radius: 12px; margin-bottom: 20px; border-left: 4px solid #f44336;">
        <h2 style="color: #b71c1c; margin-top: 0;">🔍 Lesson 2: Basic Features of Philosophy</h2>
        
        <div style="background: white; padding: 15px; border-radius: 8px; margin-bottom: 15px;">
          <h3 style="color: #d32f2f;">Overview</h3>
          <p>Philosophy has unique characteristics distinguishing it from other disciplines.</p>
        </div>
        
        <div style="background: white; padding: 15px; border-radius: 8px;">
          <h3 style="color: #d32f2f;">Key Features</h3>
          <ol>
            <li><strong>Informal and Formal Philosophy:</strong>
              <ul>
                <li>Informal: Personal views about life and universe</li>
                <li>Formal: Critically reflecting on beliefs with open-mindedness and argumentation skills</li>
              </ul>
            </li>
            <li><strong>Critical and Reflective Process:</strong>
              <ul>
                <li>Generalizes, analyzes, and evaluates knowledge without bias</li>
                <li>Perspectives influenced by personal/cultural backgrounds</li>
              </ul>
            </li>
            <li><strong>Holistic Worldview:</strong>
              <ul>
                <li>Creates cohesive worldview integrating sciences and human experiences</li>
              </ul>
            </li>
            <li><strong>Language Analysis:</strong>
              <ul>
                <li>Logical analysis to clarify meanings of words and concepts</li>
              </ul>
            </li>
            <li><strong>Perennial Problems:</strong>
              <ul>
                <li>Explores enduring questions about truth, justice, purpose, knowledge</li>
                <li>Leads to theories like idealism, realism, pragmatism, existentialism</li>
              </ul>
            </li>
            <li><strong>Fundamental Life Questions:</strong>
              <ul>
                <li>What is life's purpose?</li>
                <li>Distinction between right and wrong?</li>
                <li>Does free will exist?</li>
                <li>What is beauty and genuine value?</li>
              </ul>
            </li>
            <li><strong>Influential Thinkers:</strong>
              <ul>
                <li>Socrates, Plato, Aristotle (Ancient Greek)</li>
                <li>Aquinas, Augustine (Medieval)</li>
                <li>Descartes, Spinoza, Locke (Early Modern)</li>
                <li>Kant, Hegel, Nietzsche, Dewey (Modern)</li>
              </ul>
            </li>
            <li><strong>Role in Society:</strong>
              <ul>
                <li>Encourages challenging assumptions and critical evaluation</li>
                <li>Provides consistent principles for living</li>
              </ul>
            </li>
          </ol>
        </div>
      </div>

      <!-- Lesson 3 -->
      <div style="background: #e8f5e9; padding: 20px; border-radius: 12px; margin-bottom: 20px; border-left: 4px solid #4caf50;">
        <h2 style="color: #2e7d32; margin-top: 0;">🌌 Lesson 3: Metaphysics & Epistemology</h2>
        
        <div style="background: white; padding: 15px; border-radius: 8px; margin-bottom: 15px;">
          <h3 style="color: #388e3c;">Lesson Overview</h3>
          <p>Philosophy formulates and answers fundamental questions through reason. This lesson covers Metaphysics and Epistemology.</p>
        </div>
        
        <div style="background: white; padding: 15px; border-radius: 8px; margin-bottom: 15px;">
          <h3 style="color: #388e3c;">Lesson Objectives</h3>
          <ul>
            <li>Understand fundamental concerns in Metaphysics/Epistemology</li>
            <li>Identify major subsets of metaphysical questions</li>
            <li>Recognize fundamental aspects of epistemological questions</li>
          </ul>
        </div>
        
        <div style="background: white; padding: 15px; border-radius: 8px; margin-bottom: 15px;">
          <h3 style="color: #388e3c;">Metaphysics</h3>
          <p>Studies the ultimate nature of reality/existence. Key questions:</p>
          <ul>
            <li>Nature of reality</li>
            <li>Mind-body relationship</li>
            <li>Existence of God</li>
            <li>Meaning of life</li>
          </ul>
          <p><strong>Categories:</strong></p>
          <ul>
            <li>Cosmological: Universe's origin, nature, purpose</li>
            <li>Theological: Existence/attributes of God</li>
            <li>Anthropological: Human nature, morality, free will</li>
            <li>Ontological: Nature of existence and reality</li>
          </ul>
        </div>
        
        <div style="background: white; padding: 15px; border-radius: 8px;">
          <h3 style="color: #388e3c;">Epistemology</h3>
          <p>Examines nature, scope, and validity of knowledge. Key issues:</p>
          <ul>
            <li>Nature of knowledge and truth</li>
            <li>Sources of knowledge: experience, reason, intuition, revelation</li>
            <li>Relationship between faith and reason</li>
            <li>Subjectivity vs objectivity of knowledge</li>
          </ul>
          <p><strong>Key Concepts:</strong></p>
          <ul>
            <li>Skepticism, agnosticism</li>
            <li>Reliability of sensory/rational knowledge</li>
            <li>Complementary approach to knowledge sources</li>
          </ul>
        </div>
      </div>

      <!-- Lesson 4 -->
      <div style="background: #f3e5f5; padding: 20px; border-radius: 12px; margin-bottom: 20px; border-left: 4px solid #9c27b0;">
        <h2 style="color: #7b1fa2; margin-top: 0;">⚖️ Lesson 4: Axiology & Logic</h2>
        
        <div style="background: white; padding: 15px; border-radius: 8px; margin-bottom: 15px;">
          <h3 style="color: #8e24aa;">Lesson Overview</h3>
          <p>Philosophy addresses fundamental human issues through Axiology (study of value) and Logic (study of reasoning).</p>
        </div>
        
        <div style="background: white; padding: 15px; border-radius: 8px; margin-bottom: 15px;">
          <h3 style="color: #8e24aa;">Lesson Objectives</h3>
          <ul>
            <li>Understand fundamental concerns in Axiology/Logic</li>
            <li>Identify axiological questions: ethical, aesthetic, political, social</li>
            <li>Recognize debates about moral/political/social principles</li>
          </ul>
        </div>
        
        <div style="background: white; padding: 15px; border-radius: 8px; margin-bottom: 15px;">
          <h3 style="color: #8e24aa;">Axiology</h3>
          <p>Study of value (Greek: "Axios" = value, "Logos" = study). Questions:</p>
          <ul>
            <li>What is value?</li>
            <li>Sources/justification of values</li>
            <li>Relationship between values and knowledge</li>
          </ul>
          <p><strong>Areas of Study:</strong></p>
          <ul>
            <li><strong>Ethics:</strong> Moral principles and conduct
              <ul>
                <li>Branches: Meta-ethics, Normative ethics, Applied ethics</li>
                <li>Questions: Nature of good/bad, universality of moral principles</li>
              </ul>
            </li>
            <li><strong>Aesthetics:</strong> Theory of beauty and artistic value
              <ul>
                <li>Questions: What is art/beauty? Objective standards?</li>
              </ul>
            </li>
            <li><strong>Social/Political Philosophy:</strong> Value judgments in society/politics
              <ul>
                <li>Questions: Best form of government? Nature of justice?</li>
              </ul>
            </li>
          </ul>
        </div>
        
        <div style="background: white; padding: 15px; border-radius: 8px;">
          <h3 style="color: #8e24aa;">Logic</h3>
          <p>Study of principles of right reasoning. Questions:</p>
          <ul>
            <li>What constitutes an argument?</li>
            <li>Validity and soundness of arguments</li>
            <li>Relationship between premises and conclusion</li>
            <li>Identifying fallacies</li>
          </ul>
        </div>
      </div>

      <!-- Lesson 5 -->
      <div style="background: #fff3e0; padding: 20px; border-radius: 12px; margin-bottom: 20px; border-left: 4px solid #ff9800;">
        <h2 style="color: #e65100; margin-top: 0;">💡 Lesson 5: Importance of Learning Philosophy</h2>
        
        <div style="background: white; padding: 15px; border-radius: 8px; margin-bottom: 15px;">
          <h3 style="color: #ef6c00;">Lesson Overview</h3>
          <p>Philosophy answers fundamental questions through reason, analysis, comparison, and evaluation.</p>
        </div>
        
        <div style="background: white; padding: 15px; border-radius: 8px; margin-bottom: 15px;">
          <h3 style="color: #ef6c00;">Lesson Objectives</h3>
          <ul>
            <li>Understand fundamental benefits philosophy provides</li>
          </ul>
        </div>
        
        <div style="background: white; padding: 15px; border-radius: 8px;">
          <h3 style="color: #ef6c00;">Benefits of Learning Philosophy</h3>
          <ol>
            <li><strong>Intellectual/Behavioral Independence:</strong> Develop personal opinions by integrating experiences</li>
            <li><strong>Reflective Self-Awareness:</strong> Critically examine essential life aspects</li>
            <li><strong>Flexibility/Tolerance:</strong> Exposure to perspectives fosters open-mindedness</li>
            <li><strong>Creative/Critical Thinking:</strong> Enhance reasoning and original perspectives</li>
            <li><strong>Conceptualized Value Systems:</strong> Formulate value systems in morality, art, politics</li>
          </ol>
          
          <h4 style="color: #f57c00;">Dealing with Uncertainty</h4>
          <p>Bertrand Russell: Philosophy addresses knowledge uncertainty by expanding thoughts and freeing from conventional biases.</p>
          
          <h4 style="color: #f57c00;">Chapter Summary</h4>
          <ul>
            <li>Philosophy = "love of wisdom" involving critical habits and truth-seeking</li>
            <li>Dual-sided: Critical and constructive aspects</li>
            <li>Branches: Metaphysics, Epistemology, Axiology, Logic</li>
            <li>Helps examine life/world, promotes self-actualization, prepares for complex challenges</li>
          </ul>
        </div>
      </div>

      <!-- Key Takeaways -->
      <div style="background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%); padding: 20px; border-radius: 12px; text-align: center;">
        <h2 style="color: white; margin-top: 0;">💎 Philosophical Wisdom</h2>
        <div style="background: rgba(255,255,255,0.9); padding: 15px; border-radius: 8px;">
          <p style="font-style: italic; color: #1a2980; margin: 0;">
            "The unexamined life is not worth living." - Socrates
          </p>
          <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 10px; margin-top: 15px;">
            <span style="background: #4a69bd; color: white; padding: 8px 15px; border-radius: 20px; font-size: 0.9rem;">Critical Thinking</span>
            <span style="background: #00cdac; color: white; padding: 8px 15px; border-radius: 20px; font-size: 0.9rem;">Wisdom Pursuit</span>
            <span style="background: #ff6b6b; color: white; padding: 8px 15px; border-radius: 20px; font-size: 0.9rem;">Value Systems</span>
          </div>
        </div>
      </div>
    </div>
  `
}
,   {
  "id": "Chapter2",
  "title": "Chapter 2: Basic Concepts of Logic",
  "content": `
    <div style="font-family: 'Segoe UI', Tahoma, sans-serif; max-width: 100%; padding: 15px; color: #2c3e50; box-sizing: border-box;">
      <!-- Header -->
      <div style="background: linear-gradient(135deg, #1a2980 0%, #26d0ce 100%); color: white; padding: 20px; border-radius: 12px; text-align: center; margin-bottom: 20px;">
        <h1 style="margin: 0; font-size: 1.8rem;">🔍 Chapter 2: Basic Concepts of Logic</h1>
        <p style="font-size: 1rem; opacity: 0.9; margin: 10px 0 0;">Organized body of knowledge for evaluating arguments</p>
      </div>

      <!-- Chapter Overview -->
      <div style="background: #f0f4ff; padding: 20px; border-radius: 12px; margin-bottom: 20px; border-left: 4px solid #4a69bd;">
        <h2 style="color: #1e3799; margin-top: 0;">📚 Chapter Overview</h2>
        <ul style="padding-left: 20px;">
          <li><strong>Definition:</strong> Logic is the organized body of knowledge that evaluates arguments. It aims to develop methods and principles for evaluating and constructing arguments.</li>
          <li><strong>Argument:</strong> A systematic combination of statements, including premises (supporting evidence) and a conclusion (what is claimed to follow from the evidence).</li>
          <li><strong>Types of Arguments:</strong>
            <ul>
              <li>Deductive Arguments: Premises support the conclusion such that it is impossible for the premises to be true and the conclusion false.</li>
              <li>Inductive Arguments: Premises support the conclusion such that it is improbable for the premises to be true and the conclusion false.</li>
            </ul>
          </li>
          <li><strong>Evaluation:</strong>
            <ul>
              <li>Deductive Arguments: Valid (if premises support conclusion properly) or Invalid</li>
              <li>Inductive Arguments: Strong (if premises support conclusion properly) or Weak</li>
              <li>Additional Evaluation:
                <ul>
                  <li>Deductive Arguments: Sound (valid and all premises true) or Unsound</li>
                  <li>Inductive Arguments: Cogent (strong and all premises probably true) or Uncogent</li>
                </ul>
              </li>
            </ul>
          </li>
          <li><strong>Objectives:</strong> Understand basic concepts of logic, components and types of arguments, and techniques for recognizing and evaluating arguments.</li>
        </ul>
      </div>

      <!-- Lesson 1: Basic Concepts -->
      <div style="background: #e3f2fd; padding: 20px; border-radius: 12px; margin-bottom: 20px; border-left: 4px solid #2196f3;">
        <h2 style="color: #0d47a1; margin-top: 0;">🧩 Lesson 1: Arguments, Premises, and Conclusions</h2>
        
        <div style="background: white; padding: 15px; border-radius: 8px; margin-bottom: 15px;">
          <h3 style="color: #1565c0;">Definition</h3>
          <p>Logic is a philosophical science that evaluates arguments.</p>
        </div>
        
        <div style="background: white; padding: 15px; border-radius: 8px; margin-bottom: 15px;">
          <h3 style="color: #1565c0;">Components of an Argument</h3>
          <ul>
            <li><strong>Premises:</strong> Statements claimed to provide support or evidence</li>
            <li><strong>Conclusion:</strong> The statement claimed to follow logically from the premises</li>
          </ul>
        </div>
        
        <div style="background: white; padding: 15px; border-radius: 8px; margin-bottom: 15px;">
          <h3 style="color: #1565c0;">Objectives</h3>
          <ul>
            <li>Understand the meaning of logic and arguments</li>
            <li>Identify components of an argument (premises and conclusion)</li>
            <li>Recognize techniques for identifying premises and conclusions</li>
          </ul>
        </div>
        
        <div style="background: white; padding: 15px; border-radius: 8px; margin-bottom: 15px;">
          <h3 style="color: #1565c0;">Meaning of Logic</h3>
          <ul>
            <li>Origin: Greek word "logos" (sentence, discourse, reason, truth, rule)</li>
            <li>Logic evaluates arguments using a structured approach</li>
          </ul>
        </div>
        
        <div style="background: white; padding: 15px; border-radius: 8px;">
          <h3 style="color: #1565c0;">Definitions and Benefits of Logic</h3>
          <p><strong>Definitions:</strong></p>
          <ol>
            <li>Science of Evaluating Arguments: Focuses on methods for assessing if premises adequately support conclusions</li>
            <li>Study of Methods: Studies methods for evaluating whether premises provide good evidence for conclusions</li>
            <li>Development of Methods and Principles: Helps develop methods for evaluating others' arguments and constructing one's own</li>
            <li>Codification of Rational Thought: Aims to codify rules of rational thought, exploring structures of arguments that preserve truth</li>
            <li>Philosophical Tool: Primary tool for philosophers, aiding in analysis of philosophical problems</li>
          </ol>
          
          <p><strong>Benefits:</strong></p>
          <ul>
            <li>Construct and Evaluate Arguments</li>
            <li>Defense Against Prejudice</li>
            <li>Distinguish Good from Bad Arguments</li>
            <li>Identify Logical Errors</li>
            <li>Analyze Policies</li>
            <li>Refinement of Reasoning Skills</li>
          </ul>
        </div>
      </div>

      <!-- Lesson 2: Recognizing Arguments -->
      <div style="background: #ffebee; padding: 20px; border-radius: 12px; margin-bottom: 20px; border-left: 4px solid #f44336;">
        <h2 style="color: #b71c1c; margin-top: 0;">🔎 Lesson 2: Techniques of Recognizing Arguments</h2>
        
        <div style="background: white; padding: 15px; border-radius: 8px; margin-bottom: 15px;">
          <h3 style="color: #d32f2f;">Definition of an Argument</h3>
          <p>An argument consists of statements (premises) that support another statement (conclusion). Not all passages with multiple statements are argumentative; some are non-argumentative. Arguments aim to prove something.</p>
        </div>
        
        <div style="background: white; padding: 15px; border-radius: 8px; margin-bottom: 15px;">
          <h3 style="color: #d32f2f;">Lesson Objectives</h3>
          <ul>
            <li>Recognize argumentative passages</li>
            <li>Recognize non-argumentative passages</li>
            <li>Distinguish between argumentative and non-argumentative passages</li>
            <li>Understand inferential claims and factual claims</li>
          </ul>
        </div>
        
        <div style="background: white; padding: 15px; border-radius: 8px; margin-bottom: 15px;">
          <h3 style="color: #d32f2f;">Recognizing Argumentative Passages</h3>
          <ul>
            <li>Primary Goal: To prove something</li>
            <li>Two Conditions:
              <ol>
                <li>At least one statement must present evidence or reasons (premise)</li>
                <li>There must be a claim that the evidence supports something (conclusion)</li>
              </ol>
            </li>
            <li>Factual Claims vs. Inferential Claims:
              <ul>
                <li>Factual Claims: Concern whether premises actually provide evidence</li>
                <li>Inferential Claims: Concern whether premises support a conclusion</li>
              </ul>
            </li>
          </ul>
        </div>
        
        <div style="background: white; padding: 15px; border-radius: 8px;">
          <h3 style="color: #d32f2f;">Challenges and Cautions</h3>
          <p><strong>Indicator Words:</strong></p>
          <ul>
            <li>Can be misleading when used in non-argumentative contexts</li>
            <li>Example: "Since Edison invented..." (temporal vs. logical use)</li>
          </ul>
          
          <p><strong>Detecting Inferential Relationships:</strong></p>
          <ul>
            <li>Sometimes tricky to identify true support relationships</li>
            <li>Tip: Insert indicator words to test logical connections</li>
          </ul>
          
          <p><strong>Conditional Answers:</strong></p>
          <ul>
            <li>Some passages can be interpreted multiple ways</li>
            <li>Example: "If interpreted this way, it's an argument; another way, not"</li>
          </ul>
        </div>
      </div>

      <!-- Lesson 3: Types of Arguments -->
      <div style="background: #e8f5e9; padding: 20px; border-radius: 12px; margin-bottom: 20px; border-left: 4px solid #4caf50;">
        <h2 style="color: #2e7d32; margin-top: 0;">⚖️ Lesson 3: Types of Arguments</h2>
        
        <div style="background: white; padding: 15px; border-radius: 8px; margin-bottom: 15px;">
          <h3 style="color: #388e3c;">Overview</h3>
          <ul>
            <li>Arguments involve an inferential claim that the conclusion follows from the premises</li>
            <li><strong>Deductive Arguments:</strong> Claim conclusion follows with strict certainty</li>
            <li><strong>Inductive Arguments:</strong> Claim conclusion follows probably from premises</li>
          </ul>
        </div>
        
        <div style="background: white; padding: 15px; border-radius: 8px; margin-bottom: 15px;">
          <h3 style="color: #388e3c;">Differentiation</h3>
          <ul>
            <li>Deductive: Conclusion follows necessarily from premises</li>
            <li>Inductive: Conclusion follows with some probability</li>
            <li>Evaluate how strongly the conclusion is claimed to follow</li>
          </ul>
        </div>
        
        <div style="background: white; padding: 15px; border-radius: 8px; margin-bottom: 15px;">
          <h3 style="color: #388e3c;">Factors Influencing Classification</h3>
          <ol>
            <li><strong>Certainty vs. Probability:</strong>
              <ul>
                <li>Deductive: Aim for certainty</li>
                <li>Inductive: Aim for probability</li>
              </ul>
            </li>
            <li><strong>Strength of Inferential Claim:</strong>
              <ul>
                <li>Deductive: Logical necessity</li>
                <li>Inductive: Likelihood</li>
              </ul>
            </li>
            <li><strong>Objective Features:</strong>
              <ul>
                <li>Evaluate support strength</li>
                <li>Assess necessity vs probability</li>
              </ul>
            </li>
            <li><strong>Indicator Words:</strong>
              <ul>
                <li>Deductive: "certainly," "necessarily"</li>
                <li>Inductive: "probable," "likely"</li>
              </ul>
            </li>
          </ol>
        </div>
        
        <div style="background: white; padding: 15px; border-radius: 8px;">
          <h3 style="color: #388e3c;">Argument Forms</h3>
          <p><strong>Deductive Forms:</strong></p>
          <ul>
            <li>Mathematical Arguments</li>
            <li>Arguments from Definition</li>
            <li>Syllogisms (categorical, hypothetical, disjunctive)</li>
          </ul>
          
          <p><strong>Inductive Forms:</strong></p>
          <ul>
            <li>Prediction</li>
            <li>Argument from Analogy</li>
            <li>Inductive Generalization</li>
            <li>Argument from Authority</li>
            <li>Arguments Based on Signs</li>
            <li>Causal Inference</li>
          </ul>
        </div>
      </div>

      <!-- Lesson 4: Evaluating Arguments -->
      <div style="background: #f3e5f5; padding: 20px; border-radius: 12px; margin-bottom: 20px; border-left: 4px solid #9c27b0;">
        <h2 style="color: #7b1fa2; margin-top: 0;">📊 Lesson 4: Evaluating Arguments</h2>
        
        <div style="background: white; padding: 15px; border-radius: 8px; margin-bottom: 15px;">
          <h3 style="color: #8e24aa;">Lesson Overview</h3>
          <ul>
            <li>Every argument has two claims:
              <ol>
                <li>Factual Claim: Evidence exists</li>
                <li>Inferential Claim: Evidence supports conclusion</li>
              </ol>
            </li>
            <li>Evaluation Focus: Inferential claim is more crucial</li>
          </ul>
        </div>
        
        <div style="background: white; padding: 15px; border-radius: 8px; margin-bottom: 15px;">
          <h3 style="color: #8e24aa;">Evaluating Deductive Arguments</h3>
          <p><strong>Validity:</strong></p>
          <ul>
            <li>Valid if conclusion necessarily follows from premises</li>
            <li>Invalid if conclusion doesn't necessarily follow</li>
            <li>Examples:
              <ul>
                <li>Valid: "All men are mammals. All bulls are men. ∴ All bulls are mammals"</li>
                <li>Invalid: "All philosophers are rational. Socrates was rational. ∴ Socrates was a philosopher"</li>
              </ul>
            </li>
          </ul>
          
          <p><strong>Validity vs Truth:</strong></p>
          <ul>
            <li>Validity concerns argument structure</li>
            <li>Truth Value Possibilities:
              <ol>
                <li>True Premises + True Conclusion: Can be valid or invalid</li>
                <li>True Premises + False Conclusion: Only invalid</li>
                <li>False Premises + True Conclusion: Can be valid or invalid</li>
                <li>False Premises + False Conclusion: Can be valid or invalid</li>
              </ol>
            </li>
          </ul>
          
          <p><strong>Soundness:</strong></p>
          <ul>
            <li>Sound = Valid + All premises true</li>
            <li>Unsound if invalid or has false premises</li>
          </ul>
        </div>
        
        <div style="background: white; padding: 15px; border-radius: 8px;">
          <h3 style="color: #8e24aa;">Evaluating Inductive Arguments</h3>
          <p><strong>Strength:</strong></p>
          <ul>
            <li>Strong if premises make conclusion probable</li>
            <li>Weak if conclusion doesn't likely follow</li>
            <li>Examples:
              <ul>
                <li>Strong: "100 apples, 80 tasty ∴ All probably tasty"</li>
                <li>Weak: "100 apples, 3 tasty ∴ All probably tasty"</li>
              </ul>
            </li>
          </ul>
          
          <p><strong>Key Differences from Deductive:</strong></p>
          <ul>
            <li>Degrees of strength (not absolute)</li>
            <li>Strength can change with additional premises</li>
            <li>Truth Value Relationships:
              <ul>
                <li>True Premises + True Conclusion: Can be strong or weak</li>
                <li>True Premises + False Conclusion: Weak</li>
                <li>False Premises + True Conclusion: Can be strong or weak</li>
                <li>False Premises + False Conclusion: Can be strong or weak</li>
              </ul>
            </li>
          </ul>
          
          <p><strong>Cogency:</strong></p>
          <ul>
            <li>Cogent = Strong + Premises probably true</li>
            <li>Uncogent if weak or premises probably false</li>
          </ul>
        </div>
      </div>

      <!-- Key Takeaways -->
      <div style="background: linear-gradient(135deg, #ffd3a5 0%, #fd6585 100%); padding: 20px; border-radius: 12px; text-align: center;">
        <h2 style="color: #c2185b; margin-top: 0;">💎 Key Takeaways</h2>
        <div style="background: rgba(255,255,255,0.85); padding: 15px; border-radius: 8px;">
          <p style="font-style: italic; color: #bf360c;">
            "Logic provides the systematic tools to distinguish sound reasoning from flawed arguments, 
            enabling critical analysis of ideas through proper evaluation of premises and conclusions."
          </p>
          <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 10px; margin-top: 15px;">
            <span style="background: #6a11cb; color: white; padding: 8px 15px; border-radius: 20px; font-size: 0.9rem;">Premise Identification</span>
            <span style="background: #ff6b6b; color: white; padding: 8px 15px; border-radius: 20px; font-size: 0.9rem;">Argument Evaluation</span>
            <span style="background: #00cdac; color: white; padding: 8px 15px; border-radius: 20px; font-size: 0.9rem;">Logical Analysis</span>
          </div>
        </div>
      </div>
    </div>
  `
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
        id: 'Chapter1', 
        title: 'Chapter 1 :Preliminaries', 
        content: '<h2>Newton\'s Laws</h2><p>Motion, forces, energy...</p>'
      },
      { 
        id: 'Chapter2', 
        title: 'Chapter 2 :Kinematics and Dynamics of Particles', 
        content: '<h2>Newton\'s Laws</h2><p>Motion, forces, energy...</p>'
      },
      { 
        id: 'Chapter3', 
        title: 'Chapter 3 :Fluid Mechnics', 
        content: '<h2>Newton\'s Laws</h2><p>Motion, forces, energy...</p>'
      },
      { 
        id: 'Chapter4', 
        title: 'Chapter 4 : Heat and thermodynamics', 
        content: '<h2>Newton\'s Laws</h2><p>Motion, forces, energy...</p>'
      },
      { 
        id: 'Chapter5', 
        title: 'Chapter 5 : Oscillation ,Waves and Optics', 
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