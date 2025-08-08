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
  title: 'Chapter 2: Sensation and Perception',
  content: `
    <h2 style="color: #1a5276;">Sensation vs. Perception</h2>
    <p><strong>Sensation:</strong> This is the process through which sensory receptors (e.g., eyes, ears, skin) detect stimuli from the environment and send this information to the brain. Sensation is about detecting raw data such as colors, sounds, or tastes.</p>
    <p><strong>Perception:</strong> This is the process where the brain organizes and interprets sensory information to create meaningful experiences. Perception involves recognizing patterns, shapes, and context, turning raw sensory data into coherent experiences.</p>
    <h3 style="color: #1e8449;">Examples:</h3>
    <ul>
      <li>Seeing black marks on a page is a sensory experience. Recognizing those marks as letters and words is a perceptual process.</li>
      <li>In a real-life case, a patient with prosopagnosia could see faces but could not perceive them as recognizable faces.</li>
    </ul>

    <h2 style="color: #1a5276;">Sensory Laws</h2>
    <h3 style="color: #1e8449;">1. Sensory Thresholds:</h3>
    <p><strong>Absolute Threshold:</strong> The minimum intensity of a stimulus required for it to be detected 50% of the time. For instance, the minimum amount of sugar in coffee that a person can taste.</p>
    <p><strong>Difference Threshold (<strong style="color: #c0392b;">Just Noticeable Difference, jnd</strong>):</strong> The smallest change in stimulus intensity that can be detected. According to <strong>Weber's Law</strong>, the jnd is a constant proportion of the original stimulus. For example, you can detect a change in weight only if it exceeds a certain percentage of the original weight.</p>
    <h3 style="color: #1e8449;">2. Sensory Adaptation:</h3>
    <p><strong style="color: #c0392b;">Sensory Adaptation:</strong> This occurs when the sensory system becomes less responsive to constant stimuli over time. For instance, you might stop noticing the smell of garbage after being in a room for a while.</p>

    <h2 style="color: #1a5276;">Perception and the Meaning-Making Process</h2>
    <p>Perception is the process through which we interpret and make sense of the sensory information we receive. It is not just a passive reception of stimuli but an active process of creating meaning from these stimuli.</p>
    <h3 style="color: #1e8449;">Selectivity of Perception: Attention</h3>
    <p><strong style="color: #c0392b;">Concept:</strong> Attention is the cognitive process that allows us to focus on specific stimuli while ignoring others. Our sensory organs are constantly bombarded with information, but only a fraction of this reaches our conscious awareness.</p>
    <p><strong style="color: #c0392b;">Focus and Margin:</strong> Our perceptual field can be divided into "focus" (what we pay clear attention to) and "margin" (background stimuli that are less clear). For example, at a football game, while the ball carrier is the focus of attention, background stimuli like the cold or crowd noise are in the margin.</p>
    <p><strong style="color: #c0392b;">Shifting Attention:</strong> Attention is not static; it shifts based on relevance and need.</p>
    <h3 style="color: #1e8449;">Factors Determining Attention</h3>
    <p><strong style="color: #c0392b;">External Factors:</strong> These include characteristics of stimuli such as size, intensity, repetition, novelty, and movement. For instance, bright colors and loud noises are more likely to capture attention. Movement is particularly attention-grabbing because it may signal a potential threat.</p>
    <p><strong style="color: #c0392b;">Internal Factors:</strong> Psychological states such as expectancy (set) and motives affect attention. Expectancy refers to being "primed" for certain stimuli based on prior experiences or needs. Motives or needs influence what stimuli we focus on, such as focusing on food if you’re hungry.</p>

    <h2 style="color: #1a5276;">Organization in Form Perception</h2>
    <p>When observing multiple objects, we naturally perceive them as organized into coherent patterns or groups. This tendency is central to <strong style="color: #c0392b;">Gestalt psychology</strong>, which asserts that "the whole is more than the sum of its parts."</p>
    <h3 style="color: #1e8449;">Key Principles of Perceptual Organization:</h3>
    <ul>
      <li><strong style="color: #c0392b;">Proximity:</strong> Objects close to each other in space or time are perceived as a group.</li>
      <li><strong style="color: #c0392b;">Similarity:</strong> Items that resemble each other in color, shape, or size tend to be grouped together.</li>
      <li><strong style="color: #c0392b;">Symmetry (Good Figure):</strong> We prefer to perceive objects in a balanced or symmetrical form.</li>
      <li><strong style="color: #c0392b;">Continuation:</strong> We perceive lines or shapes as continuing smoothly in their original direction.</li>
      <li><strong style="color: #c0392b;">Closure:</strong> Our perception tends to fill in gaps to create a complete figure.</li>
    </ul>

    <h2 style="color: #1a5276;">Depth Perception</h2>
    <p>Depth perception allows us to judge the distance of objects in a three-dimensional space, despite the two-dimensional nature of retinal images.</p>
    <h3 style="color: #1e8449;">Binocular Cues:</h3>
    <ul>
      <li><strong style="color: #c0392b;">Retinal Disparity:</strong> The difference in images between the two eyes provides depth information.</li>
      <li><strong style="color: #c0392b;">Convergence:</strong> The inward movement of the eyes to focus on closer objects.</li>
    </ul>
    <h3 style="color: #1e8449;">Monocular Cues:</h3>
    <ul>
      <li><strong style="color: #c0392b;">Accommodation:</strong> The eye's lens changes shape to focus on objects.</li>
      <li><strong style="color: #c0392b;">Motion Parallax:</strong> Closer objects move faster across your field of vision compared to distant objects.</li>
    </ul>
    <h3 style="color: #1e8449;">Pictorial Cues:</h3>
    <ul>
      <li><strong style="color: #c0392b;">Interposition:</strong> Objects that overlap others are perceived as closer.</li>
      <li><strong style="color: #c0392b;">Relative Size:</strong> Smaller images are perceived as farther away if objects are of the same size.</li>
      <li><strong style="color: #c0392b;">Linear Perspective:</strong> Parallel lines appear to converge in the distance.</li>
      <li><strong style="color: #c0392b;">Elevation:</strong> Objects higher in the visual field are perceived as farther away.</li>
      <li><strong style="color: #c0392b;">Shading:</strong> Areas in shadow appear farther away than those in light.</li>
      <li><strong style="color: #c0392b;">Texture Gradient:</strong> Objects appear less detailed as they get farther away.</li>
    </ul>

    <h2 style="color: #1a5276;">Perceptual Constancies</h2>
    <p>Perceptual constancies ensure that objects are perceived as stable despite changes in sensory input:</p>
    <ul>
      <li><strong style="color: #c0392b;">Size Constancy:</strong> Objects are perceived as having a constant size despite changes in the retinal image due to distance.</li>
      <li><strong style="color: #c0392b;">Shape Constancy:</strong> Objects are perceived as having a consistent shape despite changes in the angle of view.</li>
      <li><strong style="color: #c0392b;">Brightness Constancy:</strong> Objects maintain their perceived brightness regardless of changes in lighting.</li>
    </ul>

    <h2 style="color: #1a5276;">Perceptual Illusions</h2>
    <p>Perceptual illusions reveal how our perceptual processes can lead to misinterpretations:</p>
    <ul>
      <li><strong style="color: #c0392b;">Size Constancy Illusions:</strong> For instance, the moon appears larger on the horizon than overhead.</li>
      <li><strong style="color: #c0392b;">Müller-Lyer Illusion:</strong> Lines of equal length appear different due to the context of arrows at their ends.</li>
    </ul>

    <h2 style="color: #1a5276;">Extra Sensory Perception (ESP)</h2>
    <p>ESP refers to the ability to perceive information without traditional sensory input. While some claim to experience ESP, scientific consensus generally regards it as lacking empirical support. Psychologists and scientists remain skeptical due to the lack of reproducible evidence and controlled studies validating ESP phenomena.</p>

    <h2 style="color: #1a5276;">Brainstorming and Reflection Questions</h2>
    <h3 style="color: #1e8449;">Similarities and Differences between Sensation and Perception</h3>
    <p><strong style="color: #c0392b;">Similarities:</strong> Both involve sensory systems and work together to process information. Sensory input cannot be perceived without being sensed first, highlighting their interdependence.</p>
    <p><strong style="color: #c0392b;">Differences:</strong> Sensation is the detection of physical stimuli; perception is the interpretation and meaning-making of these stimuli.</p>

    <h3 style="color: #1e8449;">Sensory Differences Among People</h3>
    <p>Differences can arise due to individual variations in sensory receptors, psychological states, attention, and experience.</p>

    <h3 style="color: #1e8449;">Limen vs. jnd</h3>
    <p><strong style="color: #c0392b;">Limen (Absolute Threshold):</strong> Minimum intensity of a stimulus needed for detection.</p>
    <p><strong style="color: #c0392b;">jnd (Difference Threshold):</strong> Minimum change in stimulus intensity needed to notice a difference.</p>

    <h3 style="color: #1e8449;">Sensory Adaptation</h3>
    <p>Occurs when continuous stimulation leads to decreased sensitivity to that stimulus over time, allowing for focus on new or changing stimuli.</p>

    <h3 style="color: #1e8449;">Sensitization vs. Habituation</h3>
    <p><strong style="color: #c0392b;">Sensitization:</strong> An increased reaction to a stimulus over time.</p>
    <p><strong style="color: #c0392b;">Habituation:</strong> A decrease in response to a constant stimulus.</p>
  `
},
    {
  id: 'Chapter3',
  title: 'Chapter 3: Learning and Theory of Learning',
  content: `
    <div class="chapter-container">
      <section class="chapter-overview">
        <h2>Chapter Three: Learning and Theories of Learning</h2>
        <div class="overview-card">
          <h3>Chapter Overview</h3>
          <p>This chapter builds on the previous one, shifting focus from personality to learning. It covers the nature and foundations of learning, divided into two sections: the nature of learning and theories of learning with their applications.</p>
        </div>
        
        <div class="appetizer-card">
          <h3>Learner Appetizer</h3>
          <ul>
            <li><strong>Importance of Learning:</strong> Almost all human behavior is learned. Without past learning, basic functions like reading, writing, and even simple tasks would be impossible. Learning is integral to almost every psychological phenomenon and varies widely among individuals.</li>
          </ul>
        </div>
        
        <div class="outcomes-card">
          <h3>Learning Outcomes</h3>
          <p>After studying this chapter, you should be able to:</p>
          <ul>
            <li>Explain the meaning, types, and factors of learning</li>
            <li>Identify characteristics of learning</li>
            <li>Describe theories of learning and their characteristics</li>
            <li>Compare different learning theories</li>
            <li>Apply learning theories</li>
            <li>Use techniques to motivate and reinforce behavior</li>
          </ul>
        </div>
      </section>

      <section class="learning-section">
        <h2>3.1. Definition, Characteristics, and Principles of Learning</h2>
        
        <div class="definition-card">
          <h3>3.1.1. Definitions of Learning</h3>
          <ul>
            <li><strong>Definition:</strong> Learning is a relatively permanent change in behavior resulting from experience or practice.</li>
            <li><strong>Attributes of Learning:</strong>
              <ul>
                <li>Behavior change is relatively permanent</li>
                <li>Not due to illness, fatigue, or intoxication</li>
                <li>Results from experience or practice, not biological factors</li>
                <li>Manifested through activities, not directly observable</li>
              </ul>
            </li>
          </ul>
          <div class="reflection-box">
            <p><strong>Reflection:</strong> Consider how this definition aligns with your previous understanding of learning.</p>
          </div>
        </div>
        
        <div class="characteristics-card">
          <h3>3.1.2. Characteristics of Learning</h3>
          <ul>
            <li>Learning is ongoing throughout life and impacts all aspects of human experience.</li>
            <li>It involves the whole person—socially, emotionally, and intellectually.</li>
            <li>It can change the organization of experiences and is responsive to incentives.</li>
            <li>It is active, purposeful, and dependent on maturation, motivation, and practice.</li>
            <li>Learning is multifaceted and influenced by an individual's background.</li>
          </ul>
          <div class="reflection-box">
            <p><strong>Reflection:</strong> Reflect on how these characteristics apply to your own learning experiences.</p>
          </div>
        </div>
        
        <div class="principles-card">
          <h3>3.1.3. Principles of Learning</h3>
          <ul>
            <li>Effective learning requires readiness (physical, mental, and emotional).</li>
            <li>Meaningful practice helps in retaining information longer.</li>
            <li>Learning is strengthened by pleasant experiences and weakened by unpleasant ones.</li>
            <li>Initial and recent learning has a stronger impact on memory.</li>
            <li>Real experiences are more impactful than substitutes.</li>
            <li>Individuals should have relevant abilities and skills for learning.</li>
            <li>Freely chosen learning enhances intellectual and moral growth.</li>
          </ul>
          <div class="reflection-box">
            <p><strong>Reflection:</strong> Evaluate how these principles influence your learning process.</p>
          </div>
        </div>
      </section>

      <section class="factors-section">
        <h2>3.2. Factors Influencing Learning</h2>
        <div class="factors-grid">
          <div class="factor-card">
            <h3>Motivation</h3>
            <p>Strong motives enhance learning effectiveness and enthusiasm.</p>
          </div>
          <div class="factor-card">
            <h3>Maturation</h3>
            <p>Neuro-muscular coordination is crucial for learning specific tasks.</p>
          </div>
          <div class="factor-card">
            <h3>Health Condition</h3>
            <p>Good health supports effective learning; impairments and deficiencies hinder it.</p>
          </div>
          <div class="factor-card">
            <h3>Psychological Well-being</h3>
            <p>Psychological states like confidence and self-respect are vital for effective learning.</p>
          </div>
          <div class="factor-card">
            <h3>Working Conditions</h3>
            <p>Factors such as fresh air, lighting, and comfort impact learning.</p>
          </div>
          <div class="factor-card">
            <h3>Background Experiences</h3>
            <p>Previous knowledge and experiences influence new learning.</p>
          </div>
          <div class="factor-card">
            <h3>Length of Working Period</h3>
            <p>Optimal learning periods balance between too short and too long to avoid fatigue and ensure adequate practice.</p>
          </div>
          <div class="factor-card">
            <h3>Massed vs. Distributed Learning</h3>
            <p>Spacing learning over time is generally more effective than cramming.</p>
          </div>
        </div>
        
        <div class="reflection-box wide">
          <h3>Reflection on Learning Factors</h3>
          <p><strong>Learning Materials, Teaching Styles, Methods, and Medium of Instruction:</strong> These aspects can significantly affect learning, similar to factors like motivation, health, and psychological well-being. Effective materials, engaging teaching styles, and appropriate methods and mediums can enhance learning by accommodating diverse needs and learning preferences.</p>
        </div>
      </section>

      <section class="theories-section">
        <h2>3.3. Theories of Learning and Their Applications</h2>
        
        <div class="brainstorming-card">
          <h3>Brainstorming Question</h3>
          <p><strong>What is Theory and Its Relation to Learning?</strong> A theory is a system of ideas intended to explain something. In the context of learning, theories provide frameworks for understanding how learning occurs and how various factors influence it.</p>
        </div>
        
        <div class="theory-card">
          <h3>3.3.1. Behavioral Theory of Learning</h3>
          <p>Behavioral theory focuses on observable behaviors and stimulus-response associations. It explains learning in terms of behavioral changes resulting from interactions with stimuli and their consequences.</p>
          
          <div class="sub-theory">
            <h4>3.3.1.1. Classical Conditioning Theory</h4>
            
            <div class="brainstorming-card">
              <h5>Brainstorming Questions</h5>
              <ul>
                <li><strong>Expectations with Thunder or Seeing a Parent:</strong> These responses illustrate classical conditioning, where an emotional or physiological response is triggered by a stimulus.</li>
                <li><strong>Responses to Unfamiliar vs. Familiar People:</strong> These reflect conditioned responses developed through previous experiences.</li>
              </ul>
            </div>
            
            <h5>Classical Conditioning Overview</h5>
            <ul>
              <li><strong>Definition:</strong> Learning where a neutral stimulus, after being paired with an unconditioned stimulus (UCS), elicits a conditioned response (CR) similar to the response originally elicited by the UCS.</li>
              <li><strong>Examples:</strong> Pavlov's experiment demonstrated how a bell (initially a neutral stimulus) could become a conditioned stimulus (CS) to elicit salivation (conditioned response or CR) when paired with food (UCS).</li>
            </ul>
            
            <h5>Basic Terms</h5>
            <div class="terms-grid">
              <div class="term-card">
                <h6>Neutral Stimulus (NS)</h6>
                <p>A stimulus that does not initially evoke a response.</p>
              </div>
              <div class="term-card">
                <h6>Unconditioned Stimulus (UCS)</h6>
                <p>A stimulus that naturally triggers a response.</p>
              </div>
              <div class="term-card">
                <h6>Unconditioned Response (UCR)</h6>
                <p>An automatic response to the UCS.</p>
              </div>
              <div class="term-card">
                <h6>Conditioned Stimulus (CS)</h6>
                <p>A previously neutral stimulus that, after association with the UCS, triggers a response.</p>
              </div>
              <div class="term-card">
                <h6>Conditioned Response (CR)</h6>
                <p>The learned response to the CS.</p>
              </div>
            </div>
            
            <h5>Principles of Classical Conditioning</h5>
            <div class="principles-grid">
              <div class="principle-card">
                <h6>Stimulus Generalization</h6>
                <p>Responding to stimuli similar to the CS (e.g., salivating to different bell sounds).</p>
              </div>
              <div class="principle-card">
                <h6>Stimulus Discrimination</h6>
                <p>Differentiating between similar stimuli (e.g., salivating only to the dinner bell).</p>
              </div>
              <div class="principle-card">
                <h6>Extinction</h6>
                <p>Gradual weakening of the CR when the CS is no longer paired with the UCS.</p>
              </div>
              <div class="principle-card">
                <h6>Spontaneous Recovery</h6>
                <p>Reappearance of the CR after a period of rest, without additional conditioning.</p>
              </div>
            </div>
            
            <div class="reflection-box">
              <h5>Reflection</h5>
              <p><strong>Scenario Analysis:</strong> For a child shocked by an outlet:</p>
              <ul>
                <li>UCS: Shock from the outlet</li>
                <li>UCR: Fear and crying</li>
                <li>CS: The toy or the outlet</li>
                <li>CR: Fear of the toy after the shock</li>
              </ul>
            </div>
          </div>
          
          <div class="sub-theory">
            <h4>3.3.1.2. Operant Conditioning</h4>
            
            <div class="brainstorming-card">
              <h5>Brainstorming Questions</h5>
              <ul>
                <li><strong>Child's Behavior:</strong> Crying when hungry or becoming aggressive can be explained by operant conditioning, where behaviors are reinforced or punished.</li>
                <li><strong>Role of Rewards and Punishments:</strong> These are central to operant conditioning. Rewards (reinforcement) increase desired behaviors, while punishments decrease undesired behaviors.</li>
              </ul>
            </div>
            
            <h5>Key Concepts in Operant Conditioning</h5>
            <div class="concepts-grid">
              <div class="concept-card">
                <h6>Types of Reinforcement</h6>
                <ul>
                  <li><strong>Positive Reinforcement:</strong> Adding a pleasant stimulus to increase behavior (e.g., giving a reward for good behavior).</li>
                  <li><strong>Negative Reinforcement:</strong> Removing an unpleasant stimulus to increase behavior (e.g., stopping nagging when chores are done).</li>
                </ul>
              </div>
              <div class="concept-card">
                <h6>Types of Punishment</h6>
                <ul>
                  <li><strong>Positive Punishment:</strong> Adding an unpleasant stimulus to decrease behavior (e.g., giving extra chores for misbehavior).</li>
                  <li><strong>Negative Punishment:</strong> Removing a pleasant stimulus to decrease behavior (e.g., taking away a toy for misbehavior).</li>
                </ul>
              </div>
              <div class="concept-card">
                <h6>Schedules of Reinforcement</h6>
                <ul>
                  <li><strong>Fixed-Ratio:</strong> Reinforcement after a set number of responses.</li>
                  <li><strong>Variable-Ratio:</strong> Reinforcement after a variable number of responses.</li>
                  <li><strong>Fixed-Interval:</strong> Reinforcement after a fixed amount of time.</li>
                  <li><strong>Variable-Interval:</strong> Reinforcement after varying amounts of time.</li>
                </ul>
              </div>
            </div>
            
            <h5>Punishment and Shaping in Learning</h5>
            <div class="punishment-card">
              <h6>Punishment</h6>
              <ul>
                <li><strong>Definition:</strong> A stimulus that weakens or reduces the likelihood of a behavior recurring.</li>
                <li><strong>Types of Punishers:</strong>
                  <ul>
                    <li><strong>Primary Punishers:</strong> Inherently aversive, such as pain or extreme temperatures.</li>
                    <li><strong>Secondary Punishers:</strong> Learned aversive stimuli, such as criticism or fines.</li>
                  </ul>
                </li>
                <li><strong>Positive vs. Negative Punishment:</strong>
                  <ul>
                    <li><strong>Positive Punishment:</strong> Adding an unpleasant stimulus (e.g., extra chores).</li>
                    <li><strong>Negative Punishment:</strong> Removing a pleasant stimulus (e.g., taking away a toy).</li>
                  </ul>
                </li>
              </ul>
            </div>
            
            <h6>Effectiveness of Punishment</h6>
            <ul>
              <li><strong>Immediacy:</strong> Punishment should occur immediately after the behavior to be effective.</li>
              <li><strong>Consistency:</strong> Inconsistent punishment can lead to resistance and ineffective behavior modification.</li>
              <li><strong>Intensity:</strong> While severe punishments can be effective, moderate punishments can also work if applied consistently and immediately.</li>
            </ul>
            
            <h6>Problems with Punishment</h6>
            <ol>
              <li><strong>Inappropriate Application:</strong> Punishment is sometimes applied in a broad or mindless manner, targeting irrelevant behaviors.</li>
              <li><strong>Negative Emotional Responses:</strong> Punishment can cause fear, anxiety, or anger, which may generalize to the situation or person delivering the punishment.</li>
              <li><strong>Temporary Effectiveness:</strong> The impact of punishment may be short-lived and dependent on the presence of the punishing agent.</li>
              <li><strong>Delayed Responses:</strong> Immediate punishment can be challenging to administer.</li>
              <li><strong>Lack of Informational Value:</strong> Punishment often fails to provide clear guidance on what behavior is desired.</li>
            </ol>
            
            <h6>Shaping</h6>
            <ul>
              <li><strong>Definition:</strong> An operant conditioning method where successive approximations of a desired behavior are reinforced until the final behavior is achieved.</li>
              <li><strong>Process:</strong> Start with initial behaviors that are close to the desired response and gradually reinforce closer approximations.</li>
            </ul>
            
            <h5>Application of Operant Conditioning</h5>
            <ol>
              <li><strong>Conditioning Study Behavior:</strong> Teachers use reinforcement to promote learning, such as rewards or praise.</li>
              <li><strong>Classroom Behavior:</strong> Positive reinforcement can counteract negative associations with a subject or teacher.</li>
              <li><strong>Managing Problem Behavior:</strong> Use positive reinforcement rather than punishment to shape behavior.</li>
              <li><strong>Dealing with Anxieties:</strong> Gradual desensitization can help manage fears acquired through conditioning.</li>
              <li><strong>Conditioning Group Behavior:</strong> Reinforcement can change group behavior, improving classroom interactions.</li>
              <li><strong>Conditioning and Cognitive Processes:</strong> Reinforcement supports progress in learning, with immediate feedback being crucial.</li>
              <li><strong>Shaping Complex Behavior:</strong> Complex behaviors are developed through reinforcing smaller, sequential behaviors.</li>
            </ol>
          </div>
        </div>
        
        <div class="theory-card">
          <h3>3.3.2. Social Learning Theory (Observational Learning)</h3>
          <ul>
            <li><strong>Key Proponent:</strong> Albert Bandura.</li>
            <li><strong>Definition:</strong> Learning through observing the behavior of others (models) and the consequences of their actions.</li>
            <li><strong>Types of Reinforcement:</strong>
              <ul>
                <li><strong>Direct Reinforcement:</strong> Direct rewards for imitating the model's behavior.</li>
                <li><strong>Vicarious Reinforcement:</strong> Observing others receive rewards for specific behaviors, which encourages imitation.</li>
                <li><strong>Self-Reinforcement:</strong> Internal rewards and personal satisfaction from achieving goals.</li>
              </ul>
            </li>
          </ul>
          
          <h4>Conditions for Effective Observational Learning</h4>
          <div class="conditions-grid">
            <div class="condition-card">
              <h5>1. Attention</h5>
              <p>The observer must pay attention to the model.</p>
            </div>
            <div class="condition-card">
              <h5>2. Retention</h5>
              <ul>
                <li>Observers need to remember the behavior they have observed.</li>
                <li><strong>Technique to Enhance Retention:</strong> Rehearsal.</li>
              </ul>
            </div>
            <div class="condition-card">
              <h5>3. Motor Reproduction</h5>
              <ul>
                <li>Observers must be able to replicate the demonstrated behavior.</li>
                <li>Developmental readiness impacts the ability to reproduce complex actions.</li>
              </ul>
            </div>
            <div class="condition-card">
              <h5>4. Motivation</h5>
              <ul>
                <li>Learners must be motivated to perform the observed behavior.</li>
                <li>Motivation varies among individuals and affects how behaviors are reproduced.</li>
              </ul>
            </div>
          </div>
          
          <h4>Educational Implications of Social Learning Theory</h4>
          <ol>
            <li><strong>Learning by Observation:</strong> Students learn significantly by observing others.</li>
            <li><strong>Consequences Discussion:</strong> Talking about rewards and consequences can shape behavior.</li>
            <li><strong>Modeling vs. Shaping:</strong> Modeling can be a faster and more effective method than shaping for teaching new behaviors. Essential conditions include attention, retention, motor reproduction, and motivation.</li>
            <li><strong>Modeling Behavior:</strong> Teachers and parents should model appropriate behaviors and avoid inappropriate ones.</li>
            <li><strong>Exposure to Models:</strong> Provide students with diverse models to challenge stereotypes.</li>
            <li><strong>Self-Efficacy:</strong> Encourage students' belief in their abilities by providing confidence-building experiences and positive reinforcement.</li>
            <li><strong>Realistic Expectations:</strong> Set challenging but achievable goals to ensure students are not under- or over-challenged.</li>
            <li><strong>Self-Regulation:</strong> Use self-regulation techniques to improve student behavior.</li>
          </ol>
        </div>
        
        <div class="theory-card">
          <h3>Cognitive Learning Theory</h3>
          <div class="cognitive-grid">
            <div class="cognitive-card">
              <h4>1. Latent Learning</h4>
              <ul>
                <li><strong>Definition:</strong> Learning that occurs without immediate evidence and becomes apparent when conditions are favorable.</li>
                <li><strong>Example:</strong> Tolman and Honzik's maze experiment with rats, where learning was not evident until the rats were rewarded.</li>
              </ul>
            </div>
            <div class="cognitive-card">
              <h4>2. Insight Learning</h4>
              <ul>
                <li><strong>Definition:</strong> Cognitive process of reorganizing perception to solve a problem, often occurring suddenly (the "aha" experience).</li>
                <li><strong>Characteristics:</strong> Problem-solving occurs without prior conditioning and the solution can be applied to similar problems.</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div class="implications-card">
          <h3>Educational Implications of Learning Theories</h3>
          <ul>
            <li><strong>Classical Conditioning:</strong> Focuses on the association between stimuli and responses.</li>
            <li><strong>Operant Conditioning:</strong> Emphasizes reinforcement and punishment in behavior modification.</li>
            <li><strong>Social Cognitive Theory:</strong> Highlights the interaction of behavior, environment, and cognitive factors.</li>
            <li><strong>Cognitive Learning Theories:</strong> Includes latent and insight learning, focusing on cognitive processes in problem-solving.</li>
          </ul>
        </div>
      </section>
    </div>

    <style>
      /* Base Styles */
      .chapter-container {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        line-height: 1.6;
        color: #333;
        max-width: 1200px;
        margin: 0 auto;
        padding: 20px;
      }
      
      h2 {
        color: #2c3e50;
        border-bottom: 2px solid #3498db;
        padding-bottom: 10px;
        margin-top: 40px;
        font-size: 1.8rem;
      }
      
      h3 {
        color: #2980b9;
        margin-top: 30px;
        font-size: 1.5rem;
      }
      
      h4 {
        color: #16a085;
        margin-top: 25px;
        font-size: 1.3rem;
      }
      
      h5 {
        color: #27ae60;
        margin-top: 20px;
        font-size: 1.1rem;
      }
      
      h6 {
        color: #8e44ad;
        margin-top: 15px;
        font-size: 1rem;
      }
      
      /* Card Styles */
      .overview-card,
      .appetizer-card,
      .outcomes-card,
      .definition-card,
      .characteristics-card,
      .principles-card,
      .brainstorming-card,
      .theory-card,
      .implications-card {
        background-color: #fff;
        border-radius: 8px;
        box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        padding: 20px;
        margin: 20px 0;
      }
      
      .appetizer-card {
        background-color: #e8f4f8;
        border-left: 4px solid #3498db;
      }
      
      .outcomes-card {
        background-color: #e8f8f0;
        border-left: 4px solid #2ecc71;
      }
      
      .reflection-box {
        background-color: #fff8e1;
        padding: 15px;
        border-radius: 8px;
        margin-top: 15px;
        border-left: 3px solid #f39c12;
      }
      
      .reflection-box.wide {
        margin: 20px 0;
      }
      
      /* Grid Layouts */
      .factors-grid,
      .terms-grid,
      .principles-grid,
      .concepts-grid,
      .conditions-grid,
      .cognitive-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 15px;
        margin: 20px 0;
      }
      
      .factor-card,
      .term-card,
      .principle-card,
      .concept-card,
      .condition-card,
      .cognitive-card {
        background-color: #f8f9fa;
        padding: 15px;
        border-radius: 8px;
      }
      
      .sub-theory {
        background-color: #f5f5f5;
        padding: 15px;
        border-radius: 8px;
        margin: 15px 0;
      }
      
      .punishment-card {
        background-color: #fef2f2;
        padding: 15px;
        border-radius: 8px;
        margin: 15px 0;
        border-left: 3px solid #e74c3c;
      }
      
      /* Lists and Text */
      ul, ol {
        padding-left: 20px;
        margin: 10px 0;
      }
      
      li {
        margin-bottom: 8px;
      }
      
      strong {
        color: #2c3e50;
      }
      
      /* Responsive Design */
      @media (max-width: 768px) {
        .factors-grid,
        .terms-grid,
        .principles-grid,
        .concepts-grid,
        .conditions-grid,
        .cognitive-grid {
          grid-template-columns: 1fr;
        }
        
        h2 {
          font-size: 1.6rem;
        }
        
        h3 {
          font-size: 1.3rem;
        }
        
        h4 {
          font-size: 1.1rem;
        }
        
        .chapter-container {
          padding: 15px;
        }
        
        .overview-card,
        .appetizer-card,
        .outcomes-card,
        .definition-card,
        .characteristics-card,
        .principles-card,
        .brainstorming-card,
        .theory-card,
        .implications-card {
          padding: 15px;
        }
      }
      
      @media (max-width: 480px) {
        h2 {
          font-size: 1.4rem;
        }
        
        h3 {
          font-size: 1.2rem;
        }
        
        .chapter-container {
          padding: 10px;
        }
      }
    </style>
  `
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
  "id": "Chapter3",
  "title": "Chapter 3: Logic and Language",
  "content": `
    <div style="font-family: 'Segoe UI', Tahoma, sans-serif; line-height: 1.7; max-width: 800px; margin: 0 auto; color: #2c3e50; padding: 15px;">
      <!-- Chapter Header -->
      <div style="background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%); color: white; padding: 20px; border-radius: 12px; text-align: center; box-shadow: 0 6px 12px rgba(0,0,0,0.15); margin-bottom: 30px;">
        <h1 style="margin: 0; font-size: clamp(1.8em, 5vw, 2.2em);">🔤 Logic and Language</h1>
        <p style="font-size: clamp(1em, 3vw, 1.2em); opacity: 0.9;">The Intersection of Clear Thinking and Precise Expression</p>
      </div>

      <!-- Chapter Overview -->
      <div style="background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%); padding: 25px; border-radius: 12px; border-left: 5px solid #2196f3; margin-bottom: 30px; box-shadow: 0 4px 8px rgba(33, 150, 243, 0.2);">
        <h2 style="color: #0d47a1; margin-top: 0; border-bottom: 2px dashed #42a5f5; padding-bottom: 8px;">Chapter Overview</h2>
        <p>This chapter explores the critical relationship between logic and language, emphasizing how effective argumentation depends on clear and precise language. We'll examine how to clarify and analyze terms, understand meaning, and use definitions effectively in logical reasoning.</p>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin-top: 20px;">
          <div style="background: white; padding: 15px; border-radius: 10px; border-top: 4px solid #7e57c2; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
            <h3 style="color: #5e35b1; margin-top: 0;">🎯 Objectives</h3>
            <ul style="padding-left: 20px;">
              <li>Recognize the logic-language relationship</li>
              <li>Identify crucial language components</li>
              <li>Understand word meanings and definitions</li>
              <li>Use definitions to evaluate arguments</li>
            </ul>
          </div>
          
          <div style="background: white; padding: 15px; border-radius: 10px; border-top: 4px solid #4caf50; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
            <h3 style="color: #2e7d32; margin-top: 0;">🔑 Key Concepts</h3>
            <ul style="padding-left: 20px;">
              <li>Philosophy of language</li>
              <li>Meaning (cognitive vs emotive)</li>
              <li>Intension vs extension</li>
              <li>Definition techniques</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Lesson 1 -->
      <div style="background: linear-gradient(135deg, #f3e5f5 0%, #e1bee7 100%); padding: 25px; border-radius: 12px; border-left: 5px solid #9c27b0; margin-bottom: 30px; box-shadow: 0 4px 8px rgba(156, 39, 176, 0.2);">
        <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 20px;">
          <div style="background: #9c27b0; width: 50px; height: 50px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
            <span style="font-size: 24px; color: white;">1</span>
          </div>
          <h2 style="color: #7b1fa2; margin: 0;">Philosophy of Language</h2>
        </div>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px;">
          <div style="background: white; padding: 20px; border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.05);">
            <h3 style="color: #6a1b9a; margin-top: 0;">🔍 What is Philosophy of Language?</h3>
            <p>Examines fundamental questions about language: its nature, meaning, and relationship to reality. Asks questions like:</p>
            <ul>
              <li>"What is meaning?"</li>
              <li>"How does language refer to reality?"</li>
              <li>"How do words convey concepts?"</li>
            </ul>
            <div style="background: #f3e5f5; padding: 15px; border-radius: 8px; margin-top: 15px;">
              <p style="margin: 0; font-style: italic; color: #7b1fa2;">"Unlike linguistics which studies language structure, philosophy of language explores broader conceptual issues about meaning and reference."</p>
            </div>
          </div>
          
          <div style="background: white; padding: 20px; border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.05);">
            <h3 style="color: #6a1b9a; margin-top: 0;">📜 Historical Development</h3>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 12px; margin-top: 15px;">
              <div style="background: #f5f5f5; padding: 12px; border-radius: 8px; border-left: 3px solid #7b1fa2;">
                <strong>Plato</strong>
                <p style="margin: 5px 0 0; font-size: 0.9em;">Names are nature-determined</p>
              </div>
              <div style="background: #f5f5f5; padding: 12px; border-radius: 8px; border-left: 3px solid #7b1fa2;">
                <strong>Stoics</strong>
                <p style="margin: 5px 0 0; font-size: 0.9em;">Developed proposition theory</p>
              </div>
              <div style="background: #f5f5f5; padding: 12px; border-radius: 8px; border-left: 3px solid #7b1fa2;">
                <strong>Medieval</strong>
                <p style="margin: 5px 0 0; font-size: 0.9em;">Explored language subtleties</p>
              </div>
              <div style="background: #f5f5f5; padding: 12px; border-radius: 8px; border-left: 3px solid #7b1fa2;">
                <strong>Modern</strong>
                <p style="margin: 5px 0 0; font-size: 0.9em;">Analytic philosophy focus</p>
              </div>
            </div>
          </div>
        </div>

        <div style="background: white; padding: 20px; border-radius: 10px; margin-top: 20px; box-shadow: 0 4px 8px rgba(0,0,0,0.05);">
          <h3 style="color: #6a1b9a; margin-top: 0;">🧩 Theories of Meaning</h3>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 15px; margin-top: 15px;">
            <div style="border-left: 4px solid #2196f3; padding-left: 12px;">
              <h4 style="color: #2196f3; margin: 0 0 8px;">Idea Theories</h4>
              <p style="margin: 0;">Meanings are mental contents triggered by signs (Locke, Hume)</p>
            </div>
            <div style="border-left: 4px solid #4caf50; padding-left: 12px;">
              <h4 style="color: #4caf50; margin: 0 0 8px;">Truth-Conditional</h4>
              <p style="margin: 0;">Meaning defined by truth conditions (Frege)</p>
            </div>
            <div style="border-left: 4px solid #ff9800; padding-left: 12px;">
              <h4 style="color: #ff9800; margin: 0 0 8px;">Use Theories</h4>
              <p style="margin: 0;">Meaning from speech acts (Wittgenstein)</p>
            </div>
            <div style="border-left: 4px solid #e91e63; padding-left: 12px;">
              <h4 style="color: #e91e63; margin: 0 0 8px;">Reference Theories</h4>
              <p style="margin: 0;">Meaning corresponds to real-world entities (Kripke)</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Lesson 2 -->
      <div style="background: linear-gradient(135deg, #e1f5fe 0%, #b3e5fc 100%); padding: 25px; border-radius: 12px; border-left: 5px solid #0288d1; margin-bottom: 30px; box-shadow: 0 4px 8px rgba(2, 136, 209, 0.2);">
        <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 20px;">
          <div style="background: #0288d1; width: 50px; height: 50px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
            <span style="font-size: 24px; color: white;">2</span>
          </div>
          <h2 style="color: #0277bd; margin: 0;">Logic and Meaning</h2>
        </div>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px;">
          <div style="background: white; padding: 20px; border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.05);">
            <h3 style="color: #01579b; margin-top: 0;">💡 Language Functions</h3>
            <div style="display: flex; gap: 15px; margin-top: 15px;">
              <div style="flex: 1; text-align: center; padding: 15px; background: #e3f2fd; border-radius: 8px;">
                <div style="font-size: 24px; color: #0d47a1;">🧠</div>
                <h4 style="color: #0d47a1; margin: 10px 0;">Cognitive</h4>
                <p style="margin: 0; font-size: 0.9em;">Conveys factual information</p>
                <p style="margin: 5px 0 0; font-style: italic; color: #0288d1;">"Legal in 36 states"</p>
              </div>
              <div style="flex: 1; text-align: center; padding: 15px; background: #ffebee; border-radius: 8px;">
                <div style="font-size: 24px; color: #c62828;">❤️</div>
                <h4 style="color: #c62828; margin: 10px 0;">Emotive</h4>
                <p style="margin: 0; font-size: 0.9em;">Expresses feelings/evokes emotions</p>
                <p style="margin: 5px 0 0; font-style: italic; color: #d32f2f;">"Cruel and inhuman punishment"</p>
              </div>
            </div>
          </div>
          
          <div style="background: white; padding: 20px; border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.05);">
            <h3 style="color: #01579b; margin-top: 0;">⚠️ Meaning Deficiencies</h3>
            <div style="margin-top: 15px;">
              <div style="border-left: 4px solid #ff9800; padding-left: 12px; margin-bottom: 15px;">
                <h4 style="color: #ef6c00; margin: 0 0 8px;">Vagueness</h4>
                <p style="margin: 0;">Borderline cases where application is unclear</p>
                <p style="margin: 5px 0 0; font-style: italic; color: #ff8f00;">"Love", "happiness", "fresh"</p>
              </div>
              <div style="border-left: 4px solid #9c27b0; padding-left: 12px;">
                <h4 style="color: #7b1fa2; margin: 0 0 8px;">Ambiguity</h4>
                <p style="margin: 0;">Multiple distinct meanings in context</p>
                <p style="margin: 5px 0 0; font-style: italic; color: #7b1fa2;">"Light", "bank", "critical"</p>
              </div>
            </div>
          </div>
        </div>
        
        <div style="background: white; padding: 20px; border-radius: 10px; margin-top: 20px; box-shadow: 0 4px 8px rgba(0,0,0,0.05);">
          <h3 style="color: #01579b; margin-top: 0;">⚖️ Forms of Disputes</h3>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin-top: 15px;">
            <div style="padding: 15px; background: #f5f5f5; border-radius: 8px; border-top: 4px solid #7b1fa2;">
              <h4 style="color: #7b1fa2; margin-top: 0;">Verbal Disputes</h4>
              <p>Arise from misunderstandings about word meanings</p>
              <div style="background: #f3e5f5; padding: 10px; border-radius: 6px; margin-top: 10px;">
                <p style="margin: 0; font-size: 0.9em;">"Is disciplining children abuse?"</p>
              </div>
            </div>
            <div style="padding: 15px; background: #f5f5f5; border-radius: 8px; border-top: 4px solid #2196f3;">
              <h4 style="color: #0d47a1; margin-top: 0;">Factual Disputes</h4>
              <p>Based on disagreements about evidence</p>
              <div style="background: #e3f2fd; padding: 10px; border-radius: 6px; margin-top: 10px;">
                <p style="margin: 0; font-size: 0.9em;">"Did Fisseha steal the computer?"</p>
              </div>
            </div>
          </div>
        </div>
        
        <div style="background: white; padding: 20px; border-radius: 10px; margin-top: 20px; box-shadow: 0 4px 8px rgba(0,0,0,0.05);">
          <h3 style="color: #01579b; margin-top: 0;">🧭 Intension vs Extension</h3>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin-top: 15px;">
            <div style="text-align: center; padding: 20px; background: linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%); border-radius: 8px;">
              <h4 style="color: #2e7d32; margin-top: 0;">Intension (Sense)</h4>
              <p style="margin: 10px 0;">Qualities/attributes connoted by a term</p>
              <div style="background: white; padding: 10px; border-radius: 6px; font-style: italic; color: #388e3c;">
                "Cat": furry, domesticated, carnivorous mammal
              </div>
            </div>
            <div style="text-align: center; padding: 20px; background: linear-gradient(135deg, #fbe9e7 0%, #ffccbc 100%); border-radius: 8px;">
              <h4 style="color: #bf360c; margin-top: 0;">Extension (Reference)</h4>
              <p style="margin: 10px 0;">Actual members denoted by a term</p>
              <div style="background: white; padding: 10px; border-radius: 6px; font-style: italic; color: #d84315;">
                "Cat": all existing cats in the universe
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Lesson 3 -->
      <div style="background: linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%); padding: 25px; border-radius: 12px; border-left: 5px solid #4caf50; margin-bottom: 30px; box-shadow: 0 4px 8px rgba(76, 175, 80, 0.2);">
        <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 20px;">
          <div style="background: #4caf50; width: 50px; height: 50px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
            <span style="font-size: 24px; color: white;">3</span>
          </div>
          <h2 style="color: #2e7d32; margin: 0;">Types of Definitions</h2>
        </div>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px;">
          <div style="background: white; padding: 20px; border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.05); border-top: 4px solid #ff9800;">
            <h3 style="color: #ef6c00; margin-top: 0;">✨ Stipulative</h3>
            <p>Assigns new meaning to a word</p>
            <div style="background: #fff3e0; padding: 12px; border-radius: 8px; margin-top: 10px;">
              <p style="margin: 0; font-style: italic; color: #ef6c00;">"Let's call tiger-lion hybrids 'tigons'"</p>
            </div>
          </div>
          
          <div style="background: white; padding: 20px; border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.05); border-top: 4px solid #2196f3;">
            <h3 style="color: #0d47a1; margin-top: 0;">📖 Lexical</h3>
            <p>Reports standard dictionary meaning</p>
            <div style="background: #e3f2fd; padding: 12px; border-radius: 8px; margin-top: 10px;">
              <p style="margin: 0; font-style: italic; color: #0d47a1;">"Nice: pleasant, agreeable, satisfactory"</p>
            </div>
          </div>
          
          <div style="background: white; padding: 20px; border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.05); border-top: 4px solid #9c27b0;">
            <h3 style="color: #7b1fa2; margin-top: 0;">🎯 Précising</h3>
            <p>Reduces vagueness in specific contexts</p>
            <div style="background: #f3e5f5; padding: 12px; border-radius: 8px; margin-top: 10px;">
              <p style="margin: 0; font-style: italic; color: #7b1fa2;">"Adult: person aged 18+"</p>
            </div>
          </div>
          
          <div style="background: white; padding: 20px; border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.05); border-top: 4px solid #009688;">
            <h3 style="color: #00695c; margin-top: 0;">🔬 Theoretical</h3>
            <p>Explains within a conceptual framework</p>
            <div style="background: #e0f2f1; padding: 12px; border-radius: 8px; margin-top: 10px;">
              <p style="margin: 0; font-style: italic; color: #00695c;">"Gravity: curvature of spacetime"</p>
            </div>
          </div>
          
          <div style="background: white; padding: 20px; border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.05); border-top: 4px solid #f44336;">
            <h3 style="color: #c62828; margin-top: 0;">🎭 Persuasive</h3>
            <p>Influences attitudes or opinions</p>
            <div style="background: #ffebee; padding: 12px; border-radius: 8px; margin-top: 10px;">
              <p style="margin: 0; font-style: italic; color: #c62828;">"Freedom: absence of government control"</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Lesson 4 -->
      <div style="background: linear-gradient(135deg, #fff3e0 0%, #ffe0b2 100%); padding: 25px; border-radius: 12px; border-left: 5px solid #ff9800; margin-bottom: 30px; box-shadow: 0 4px 8px rgba(255, 152, 0, 0.2);">
        <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 20px;">
          <div style="background: #ff9800; width: 50px; height: 50px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
            <span style="font-size: 24px; color: white;">4</span>
          </div>
          <h2 style="color: #ef6c00; margin: 0;">Definition Techniques</h2>
        </div>
        
        <div style="background: white; padding: 20px; border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.05);">
          <h3 style="color: #e65100; margin-top: 0;">📍 Extensional Techniques</h3>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin-top: 15px;">
            <div style="text-align: center; padding: 20px; background: #fff8e1; border-radius: 8px;">
              <div style="font-size: 32px; margin-bottom: 10px;">👉</div>
              <h4 style="color: #ff8f00; margin: 0;">Demonstrative</h4>
              <p style="margin: 10px 0 0;">Pointing to examples</p>
            </div>
            <div style="text-align: center; padding: 20px; background: #fff8e1; border-radius: 8px;">
              <div style="font-size: 32px; margin-bottom: 10px;">🔢</div>
              <h4 style="color: #ff8f00; margin: 0;">Enumerative</h4>
              <p style="margin: 10px 0 0;">Listing specific members</p>
            </div>
            <div style="text-align: center; padding: 20px; background: #fff8e1; border-radius: 8px;">
              <div style="font-size: 32px; margin-bottom: 10px;">🗂️</div>
              <h4 style="color: #ff8f00; margin: 0;">Subclass</h4>
              <p style="margin: 10px 0 0;">Naming subcategories</p>
            </div>
          </div>
        </div>
        
        <div style="background: white; padding: 20px; border-radius: 10px; margin-top: 20px; box-shadow: 0 4px 8px rgba(0,0,0,0.05);">
          <h3 style="color: #e65100; margin-top: 0;">🔍 Intensional Techniques</h3>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin-top: 15px;">
            <div style="padding: 15px; background: #f5f5f5; border-radius: 8px; border-left: 4px solid #2196f3;">
              <h4 style="color: #0d47a1; margin-top: 0;">Synonymous</h4>
              <p>Using equivalent terms</p>
              <p style="margin: 5px 0 0; font-style: italic; color: #0d47a1;">"Physician means doctor"</p>
            </div>
            <div style="padding: 15px; background: #f5f5f5; border-radius: 8px; border-left: 4px solid #7b1fa2;">
              <h4 style="color: #7b1fa2; margin-top: 0;">Etymological</h4>
              <p>Historical word origins</p>
              <p style="margin: 5px 0 0; font-style: italic; color: #7b1fa2;">"License: from Latin 'licere' (to be permitted)"</p>
            </div>
            <div style="padding: 15px; background: #f5f5f5; border-radius: 8px; border-left: 4px solid #4caf50;">
              <h4 style="color: #2e7d32; margin-top: 0;">Operational</h4>
              <p>Testing procedures</p>
              <p style="margin: 5px 0 0; font-style: italic; color: #2e7d32;">"Acid: turns litmus paper red"</p>
            </div>
            <div style="padding: 15px; background: #f5f5f5; border-radius: 8px; border-left: 4px solid #ff9800;">
              <h4 style="color: #ef6c00; margin-top: 0;">Genus & Difference</h4>
              <p>Category + distinguishing features</p>
              <p style="margin: 5px 0 0; font-style: italic; color: #ef6c00;">"Ice: frozen water"</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Lesson 5 -->
      <div style="background: linear-gradient(135deg, #fbe9e7 0%, #ffccbc 100%); padding: 25px; border-radius: 12px; border-left: 5px solid #f44336; margin-bottom: 30px; box-shadow: 0 4px 8px rgba(244, 67, 54, 0.2);">
        <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 20px;">
          <div style="background: #f44336; width: 50px; height: 50px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
            <span style="font-size: 24px; color: white;">5</span>
          </div>
          <h2 style="color: #c62828; margin: 0;">Lexical Definition Rules</h2>
        </div>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px;">
          <div style="background: white; padding: 20px; border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.05);">
            <h3 style="color: #b71c1c; margin-top: 0;">📝 Essential Guidelines</h3>
            <ul style="padding-left: 20px;">
              <li>Be grammatically correct</li>
              <li>Convey essential meaning</li>
              <li>Avoid being too broad/narrow</li>
              <li>No circular definitions</li>
              <li>Prefer affirmative statements</li>
              <li>Avoid figurative language</li>
              <li>Indicate context when needed</li>
            </ul>
          </div>
          
          <div style="background: white; padding: 20px; border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.05);">
            <h3 style="color: #b71c1c; margin-top: 0;">🚫 Common Mistakes</h3>
            <div style="margin-top: 15px;">
              <div style="display: flex; align-items: flex-start; gap: 10px; margin-bottom: 15px;">
                <div style="color: #f44336; font-size: 24px;">❌</div>
                <div>
                  <p style="margin: 0; font-weight: bold;">Too broad:</p>
                  <p style="margin: 5px 0 0;">"Bird: warm-blooded animal with wings"</p>
                </div>
              </div>
              <div style="display: flex; align-items: flex-start; gap: 10px; margin-bottom: 15px;">
                <div style="color: #f44336; font-size: 24px;">❌</div>
                <div>
                  <p style="margin: 0; font-weight: bold;">Circular:</p>
                  <p style="margin: 5px 0 0;">"Science: what scientists do"</p>
                </div>
              </div>
              <div style="display: flex; align-items: flex-start; gap: 10px;">
                <div style="color: #f44336; font-size: 24px;">❌</div>
                <div>
                  <p style="margin: 0; font-weight: bold;">Emotive:</p>
                  <p style="margin: 5px 0 0;">"Communism: evil economic system"</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Chapter Summary -->
      <div style="background: linear-gradient(135deg, #fffde7 0%, #fff9c4 100%); padding: 25px; border-radius: 12px; border-left: 5px solid #ffd600; margin-bottom: 30px; box-shadow: 0 4px 8px rgba(255, 214, 0, 0.2);">
        <h2 style="color: #f57f17; margin-top: 0; text-align: center;">📚 Chapter Summary</h2>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; margin-top: 20px;">
          <div style="background: white; padding: 20px; border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.05);">
            <h3 style="color: #5d4037; margin-top: 0;">🔤 Language Fundamentals</h3>
            <ul style="padding-left: 20px;">
              <li>Arguments depend on clear language</li>
              <li>Distinguish cognitive vs emotive meaning</li>
              <li>Vagueness and ambiguity create confusion</li>
              <li>Verbal vs factual disputes</li>
            </ul>
          </div>
          
          <div style="background: white; padding: 20px; border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.05);">
            <h3 style="color: #5d4037; margin-top: 0;">🧩 Meaning Concepts</h3>
            <ul style="padding-left: 20px;">
              <li>Intension: attributes connoted</li>
              <li>Extension: members denoted</li>
              <li>Intension determines extension</li>
              <li>Proper names have unique challenges</li>
            </ul>
          </div>
          
          <div style="background: white; padding: 20px; border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.05);">
            <h3 style="color: #5d4037; margin-top: 0;">📖 Definition Mastery</h3>
            <ul style="padding-left: 20px;">
              <li>5 types serve different purposes</li>
              <li>4 extensional techniques</li>
              <li>4 intensional techniques</li>
              <li>8 rules for lexical definitions</li>
            </ul>
          </div>
        </div>
        
        <div style="background: rgba(255, 193, 7, 0.2); padding: 20px; border-radius: 10px; margin-top: 20px; text-align: center;">
          <p style="font-size: 1.2em; font-style: italic; color: #5d4037; margin: 0;">
            "Clear language is the foundation of logical reasoning - master definitions to master arguments"
          </p>
        </div>
      </div>
    </div>
  `
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
  "id": "Chapter5",
  "title": "Chapter 5: Informal Fallacies",
  "content": `
    <div style="font-family: 'Segoe UI', Tahoma, sans-serif; line-height: 1.7; max-width: 800px; margin: 0 auto; color: #2c3e50; padding: 15px;">
      <!-- Chapter Header -->
      <div style="background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%); color: white; padding: 20px; border-radius: 12px; text-align: center; box-shadow: 0 6px 12px rgba(0,0,0,0.15); margin-bottom: 30px;">
        <h1 style="margin: 0; font-size: clamp(1.8em, 5vw, 2.2em);">⚠️ Informal Fallacies</h1>
        <p style="font-size: clamp(1em, 3vw, 1.2em); opacity: 0.9;">Identifying and Avoiding Errors in Reasoning</p>
      </div>

      <!-- Chapter Overview -->
      <div style="background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%); padding: 25px; border-radius: 12px; border-left: 5px solid #2196f3; margin-bottom: 30px; box-shadow: 0 4px 8px rgba(33, 150, 243, 0.2);">
        <h2 style="color: #0d47a1; margin-top: 0; border-bottom: 2px dashed #42a5f5; padding-bottom: 8px;">Chapter Overview</h2>
        <p>This chapter explores defects in reasoning known as fallacies - errors that make arguments appear valid while containing logical flaws. We'll examine formal and informal fallacies, with a focus on common informal fallacies that arise from content errors rather than structural defects.</p>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin-top: 20px;">
          <div style="background: white; padding: 15px; border-radius: 10px; border-top: 4px solid #7e57c2; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
            <h3 style="color: #5e35b1; margin-top: 0;">🎯 Objectives</h3>
            <ul style="padding-left: 20px;">
              <li>Define fallacy and differentiate types</li>
              <li>Identify formal vs informal fallacies</li>
              <li>Recognize 5 categories of informal fallacies</li>
              <li>Spot specific fallacies in arguments</li>
            </ul>
          </div>
          
          <div style="background: white; padding: 15px; border-radius: 10px; border-top: 4px solid #4caf50; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
            <h3 style="color: #2e7d32; margin-top: 0;">🔑 Key Concepts</h3>
            <ul style="padding-left: 20px;">
              <li>Relevance fallacies</li>
              <li>Weak induction</li>
              <li>Presumption errors</li>
              <li>Ambiguity issues</li>
              <li>Grammatical analogies</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Lesson 1 -->
      <div style="background: linear-gradient(135deg, #f3e5f5 0%, #e1bee7 100%); padding: 25px; border-radius: 12px; border-left: 5px solid #9c27b0; margin-bottom: 30px; box-shadow: 0 4px 8px rgba(156, 39, 176, 0.2);">
        <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 20px;">
          <div style="background: #9c27b0; width: 50px; height: 50px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
            <span style="font-size: 24px; color: white;">1</span>
          </div>
          <h2 style="color: #7b1fa2; margin: 0;">Understanding Fallacies</h2>
        </div>
        
        <div style="background: white; padding: 20px; border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.05); margin-bottom: 25px;">
          <h3 style="color: #6a1b9a; margin-top: 0;">❓ What is a Fallacy?</h3>
          <p>A fallacy is a logical defect in an argument's structure, reasoning process, or content that violates standard rules of good argumentation. It creates an illusion that makes bad arguments appear good.</p>
          
          <div style="background: #f3e5f5; padding: 15px; border-radius: 8px; margin-top: 15px;">
            <p style="margin: 0; font-style: italic; color: #7b1fa2;">"Fallacies go beyond false premises - they involve mistakes in reasoning that undermine an argument's validity."</p>
          </div>
        </div>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px;">
          <div style="background: white; padding: 20px; border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.05);">
            <h3 style="color: #6a1b9a; margin-top: 0;">📐 Formal Fallacies</h3>
            <p>Structural defects in deductive arguments identifiable by form:</p>
            
            <div style="border-left: 4px solid #7b1fa2; padding-left: 12px; margin: 15px 0;">
              <h4 style="color: #7b1fa2; margin: 0 0 8px;">Categorical Example</h4>
              <p style="margin: 0;">All tigers are animals<br>All mammals are animals<br>∴ All tigers are mammals</p>
            </div>
            
            <div style="border-left: 4px solid #7b1fa2; padding-left: 12px;">
              <h4 style="color: #7b1fa2; margin: 0 0 8px;">Hypothetical Example</h4>
              <p style="margin: 0;">If apes are intelligent, they solve puzzles<br>Apes solve puzzles<br>∴ Apes are intelligent (Affirming the Consequent)</p>
            </div>
          </div>
          
          <div style="background: white; padding: 20px; border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.05);">
            <h3 style="color: #6a1b9a; margin-top: 0;">📝 Informal Fallacies</h3>
            <p>Content defects requiring analysis of meaning and context:</p>
            
            <div style="border-left: 4px solid #9c27b0; padding-left: 12px; margin: 15px 0;">
              <h4 style="color: #9c27b0; margin: 0 0 8px;">Equivocation Example</h4>
              <p style="margin: 0;">All factories are plants<br>All plants contain chlorophyll<br>∴ All factories contain chlorophyll</p>
            </div>
            
            <div style="background: #f3e5f5; padding: 12px; border-radius: 8px; margin-top: 10px;">
              <p style="margin: 0; font-style: italic; color: #7b1fa2;">"Informal fallacies are categorized into 5 groups: relevance, weak induction, presumption, ambiguity, and grammatical analogy."</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Lesson 2 -->
      <div style="background: linear-gradient(135deg, #e1f5fe 0%, #b3e5fc 100%); padding: 25px; border-radius: 12px; border-left: 5px solid #0288d1; margin-bottom: 30px; box-shadow: 0 4px 8px rgba(2, 136, 209, 0.2);">
        <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 20px;">
          <div style="background: #0288d1; width: 50px; height: 50px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
            <span style="font-size: 24px; color: white;">2</span>
          </div>
          <h2 style="color: #0277bd; margin: 0;">Fallacies of Relevance</h2>
        </div>
        
        <div style="background: white; padding: 20px; border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.05); margin-bottom: 25px;">
          <p>Premises seem psychologically relevant but are logically irrelevant to the conclusion. Characterized by non sequitur ("it does not follow") reasoning.</p>
        </div>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px;">
          <!-- Appeal to Force -->
          <div style="background: white; padding: 20px; border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.05); border-top: 4px solid #f44336;">
            <h3 style="color: #c62828; margin-top: 0;">👊 Appeal to Force</h3>
            <p>Using threats to force acceptance of a conclusion.</p>
            <div style="background: #ffebee; padding: 12px; border-radius: 8px; margin-top: 10px;">
              <p style="margin: 0; font-style: italic; color: #c62828;">"Drop the charges or you'll regret it!"</p>
            </div>
          </div>
          
          <!-- Appeal to Pity -->
          <div style="background: white; padding: 20px; border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.05); border-top: 4px solid #2196f3;">
            <h3 style="color: #0d47a1; margin-top: 0;">😢 Appeal to Pity</h3>
            <p>Evoking pity to gain acceptance of a conclusion.</p>
            <div style="background: #e3f2fd; padding: 12px; border-radius: 8px; margin-top: 10px;">
              <p style="margin: 0; font-style: italic; color: #0d47a1;">"Hire me because I have a family to support."</p>
            </div>
          </div>
          
          <!-- Appeal to People -->
          <div style="background: white; padding: 20px; border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.05); border-top: 4px solid #4caf50;">
            <h3 style="color: #2e7d32; margin-top: 0;">👥 Appeal to People</h3>
            <p>Appealing to desires for acceptance/admiration:</p>
            <ul style="padding-left: 20px;">
              <li><strong>Bandwagon</strong>: "Everyone's doing it!"</li>
              <li><strong>Vanity</strong>: "Smart people use this product"</li>
              <li><strong>Snobbery</strong>: "This wine isn't for ordinary people"</li>
            </ul>
          </div>
          
          <!-- Ad Hominem -->
          <div style="background: white; padding: 20px; border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.05); border-top: 4px solid #ff9800;">
            <h3 style="color: #ef6c00; margin-top: 0;">🎯 Argument Against Person</h3>
            <p>Attacking the person instead of the argument:</p>
            <ul style="padding-left: 20px;">
              <li><strong>Abusive</strong>: "He's a drunk, ignore his ideas"</li>
              <li><strong>Circumstantial</strong>: "He just wants power"</li>
              <li><strong>Tu Quoque</strong>: "You smoke too, doctor!"</li>
            </ul>
          </div>
          
          <!-- Accident -->
          <div style="background: white; padding: 20px; border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.05); border-top: 4px solid #9c27b0;">
            <h3 style="color: #7b1fa2; margin-top: 0;">⚠️ Accident Fallacy</h3>
            <p>Misapplying a general rule to a special case.</p>
            <div style="background: #f3e5f5; padding: 12px; border-radius: 8px; margin-top: 10px;">
              <p style="margin: 0; font-style: italic; color: #7b1fa2;">"Free speech protects inciting riots"</p>
            </div>
          </div>
          
          <!-- Straw Man -->
          <div style="background: white; padding: 20px; border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.05); border-top: 4px solid #009688;">
            <h3 style="color: #00695c; margin-top: 0;">🌾 Straw Man</h3>
            <p>Distorting an opponent's argument to attack it.</p>
            <div style="background: #e0f2f1; padding: 12px; border-radius: 8px; margin-top: 10px;">
              <p style="margin: 0; font-style: italic; color: #00695c;">"He wants federalism? He just wants the old regime back!"</p>
            </div>
          </div>
          
          <!-- Missing the Point -->
          <div style="background: white; padding: 20px; border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.05); border-top: 4px solid #795548;">
            <h3 style="color: #4e342e; margin-top: 0;">🎯 Missing the Point</h3>
            <p>Premises support one conclusion but a different one is drawn.</p>
            <div style="background: #efebe9; padding: 12px; border-radius: 8px; margin-top: 10px;">
              <p style="margin: 0; font-style: italic; color: #4e342e;">"Globalization benefits rich nations, so poor nations should detach"</p>
            </div>
          </div>
          
          <!-- Red Herring -->
          <div style="background: white; padding: 20px; border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.05); border-top: 4px solid #607d8b;">
            <h3 style="color: #37474f; margin-top: 0;">🐟 Red Herring</h3>
            <p>Diverting attention to an irrelevant issue.</p>
            <div style="background: #eceff1; padding: 12px; border-radius: 8px; margin-top: 10px;">
              <p style="margin: 0; font-style: italic; color: #37474f;">"Our pollution? Your newspaper uses more paper!"</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Lesson 3 -->
      <div style="background: linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%); padding: 25px; border-radius: 12px; border-left: 5px solid #4caf50; margin-bottom: 30px; box-shadow: 0 4px 8px rgba(76, 175, 80, 0.2);">
        <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 20px;">
          <div style="background: #4caf50; width: 50px; height: 50px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
            <span style="font-size: 24px; color: white;">3</span>
          </div>
          <h2 style="color: #2e7d32; margin: 0;">Fallacies of Weak Induction</h2>
        </div>
        
        <div style="background: white; padding: 20px; border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.05); margin-bottom: 25px;">
          <p>Premises provide insufficient support for the conclusion, violating the principle of sufficiency.</p>
        </div>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px;">
          <!-- Appeal to Authority -->
          <div style="background: white; padding: 20px; border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.05); border-top: 4px solid #ff9800;">
            <h3 style="color: #ef6c00; margin-top: 0;">👑 Appeal to Unqualified Authority</h3>
            <p>Relying on non-expert testimony.</p>
            <div style="background: #fff3e0; padding: 12px; border-radius: 8px; margin-top: 10px;">
              <p style="margin: 0; font-style: italic; color: #ef6c00;">"My favorite actor says this diet works!"</p>
            </div>
          </div>
          
          <!-- Appeal to Ignorance -->
          <div style="background: white; padding: 20px; border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.05); border-top: 4px solid #9c27b0;">
            <h3 style="color: #7b1fa2; margin-top: 0;">❓ Appeal to Ignorance</h3>
            <p>Claiming truth based on lack of evidence.</p>
            <div style="background: #f3e5f5; padding: 12px; border-radius: 8px; margin-top: 10px;">
              <p style="margin: 0; font-style: italic; color: #7b1fa2;">"No one proved ghosts don't exist, so they do!"</p>
            </div>
          </div>
          
          <!-- Hasty Generalization -->
          <div style="background: white; padding: 20px; border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.05); border-top: 4px solid #2196f3;">
            <h3 style="color: #0d47a1; margin-top: 0;">📊 Hasty Generalization</h3>
            <p>Generalizing from insufficient/unrepresentative sample.</p>
            <div style="background: #e3f2fd; padding: 12px; border-radius: 8px; margin-top: 10px;">
              <p style="margin: 0; font-style: italic; color: #0d47a1;">"My Italian friends are rude, so all Italians are rude"</p>
            </div>
          </div>
          
          <!-- False Cause -->
          <div style="background: white; padding: 20px; border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.05); border-top: 4px solid #f44336;">
            <h3 style="color: #c62828; margin-top: 0;">⏱️ False Cause</h3>
            <p>Mistaking correlation for causation:</p>
            <ul style="padding-left: 20px;">
              <li><strong>Post Hoc</strong>: "I wore lucky shirt, we won"</li>
              <li><strong>Oversimplified</strong>: "Grades drop because of Facebook"</li>
              <li><strong>Non Causa</strong>: "Pay more to make him successful"</li>
            </ul>
          </div>
          
          <!-- Slippery Slope -->
          <div style="background: white; padding: 20px; border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.05); border-top: 4px solid #009688;">
            <h3 style="color: #00695c; margin-top: 0;">⛷️ Slippery Slope</h3>
            <p>Assuming chain reaction without evidence.</p>
            <div style="background: #e0f2f1; padding: 12px; border-radius: 8px; margin-top: 10px;">
              <p style="margin: 0; font-style: italic; color: #00695c;">"Allow donkey slaughter → collapse of food culture"</p>
            </div>
          </div>
          
          <!-- Weak Analogy -->
          <div style="background: white; padding: 20px; border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.05); border-top: 4px solid #795548;">
            <h3 style="color: #4e342e; margin-top: 0;">🔄 Weak Analogy</h3>
            <p>Comparing insufficiently similar things.</p>
            <div style="background: #efebe9; padding: 12px; border-radius: 8px; margin-top: 10px;">
              <p style="margin: 0; font-style: italic; color: #4e342e;">"Cancer requires drastic measures → so do criminals"</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Lesson 4 -->
      <div style="background: linear-gradient(135deg, #fff3e0 0%, #ffe0b2 100%); padding: 25px; border-radius: 12px; border-left: 5px solid #ff9800; margin-bottom: 30px; box-shadow: 0 4px 8px rgba(255, 152, 0, 0.2);">
        <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 20px;">
          <div style="background: #ff9800; width: 50px; height: 50px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
            <span style="font-size: 24px; color: white;">4</span>
          </div>
          <h2 style="color: #ef6c00; margin: 0;">Fallacies of Presumption</h2>
        </div>
        
        <div style="background: white; padding: 20px; border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.05); margin-bottom: 25px;">
          <p>Arguments that assume what they're supposed to prove, creating false impressions of adequacy.</p>
        </div>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px;">
          <!-- Begging the Question -->
          <div style="background: white; padding: 20px; border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.05); border-top: 4px solid #9c27b0;">
            <h3 style="color: #7b1fa2; margin-top: 0;">🔄 Begging the Question</h3>
            <p>Circular reasoning that assumes its conclusion:</p>
            <ul style="padding-left: 20px;">
              <li>Omission: "Abortion wrong because murder wrong"</li>
              <li>Restatement: "Capital punishment justified because legitimate"</li>
              <li>Circular: "Best beer → best chemists → best beer"</li>
            </ul>
          </div>
          
          <!-- Complex Question -->
          <div style="background: white; padding: 20px; border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.05); border-top: 4px solid #2196f3;">
            <h3 style="color: #0d47a1; margin-top: 0;">❓ Complex Question</h3>
            <p>Combining questions with hidden assumptions.</p>
            <div style="background: #e3f2fd; padding: 12px; border-radius: 8px; margin-top: 10px;">
              <p style="margin: 0; font-style: italic; color: #0d47a1;">"Have you stopped cheating on exams?"</p>
            </div>
          </div>
          
          <!-- False Dichotomy -->
          <div style="background: white; padding: 20px; border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.05); border-top: 4px solid #f44336;">
            <h3 style="color: #c62828; margin-top: 0;">⚖️ False Dichotomy</h3>
            <p>Presenting false either/or choices.</p>
            <div style="background: #ffebee; padding: 12px; border-radius: 8px; margin-top: 10px;">
              <p style="margin: 0; font-style: italic; color: #c62828;">"Either buy me a car or I'll divorce you"</p>
            </div>
          </div>
          
          <!-- Suppressed Evidence -->
          <div style="background: white; padding: 20px; border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.05); border-top: 4px solid #4caf50;">
            <h3 style="color: #2e7d32; margin-top: 0;">🙈 Suppressed Evidence</h3>
            <p>Ignoring crucial counter-evidence.</p>
            <div style="background: #e8f5e9; padding: 12px; border-radius: 8px; margin-top: 10px;">
              <p style="margin: 0; font-style: italic; color: #2e7d32;">"Somalia great for investment" (ignoring instability)</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Lesson 5 -->
      <div style="background: linear-gradient(135deg, #fbe9e7 0%, #ffccbc 100%); padding: 25px; border-radius: 12px; border-left: 5px solid #f44336; margin-bottom: 30px; box-shadow: 0 4px 8px rgba(244, 67, 54, 0.2);">
        <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 20px;">
          <div style="background: #f44336; width: 50px; height: 50px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
            <span style="font-size: 24px; color: white;">5</span>
          </div>
          <h2 style="color: #c62828; margin: 0;">Ambiguity & Grammatical Fallacies</h2>
        </div>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px;">
          <!-- Equivocation -->
          <div style="background: white; padding: 20px; border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.05);">
            <h3 style="color: #b71c1c; margin-top: 0;">🔤 Equivocation</h3>
            <p>Using a word in multiple senses:</p>
            <div style="background: #ffebee; padding: 12px; border-radius: 8px; margin-top: 10px;">
              <p style="margin: 0; font-style: italic; color: #c62828;">"Obtuse triangles → obtuse people"</p>
              <p style="margin: 10px 0 0;">"Law repealed → law of gravity repealed"</p>
            </div>
          </div>
          
          <!-- Amphiboly -->
          <div style="background: white; padding: 20px; border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.05);">
            <h3 style="color: #b71c1c; margin-top: 0;">📝 Amphiboly</h3>
            <p>Grammatical ambiguity leading to misinterpretation:</p>
            <div style="background: #ffebee; padding: 12px; border-radius: 8px; margin-top: 10px;">
              <p style="margin: 0; font-style: italic; color: #c62828;">"Saw the building standing on the corner"</p>
              <p style="margin: 10px 0 0;">"Stewed oysters" (cooked or drunk?)</p>
            </div>
          </div>
          
          <!-- Composition -->
          <div style="background: white; padding: 20px; border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.05);">
            <h3 style="color: #b71c1c; margin-top: 0;">🧱 Composition</h3>
            <p>Attributing parts' qualities to the whole:</p>
            <div style="background: #ffebee; padding: 12px; border-radius: 8px; margin-top: 10px;">
              <p style="margin: 0; font-style: italic; color: #c62828;">"Great players → great team"</p>
              <p style="margin: 10px 0 0;">"Bricks <1lb → building <1lb"</p>
            </div>
          </div>
          
          <!-- Division -->
          <div style="background: white; padding: 20px; border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.05);">
            <h3 style="color: #b71c1c; margin-top: 0;">🔍 Division</h3>
            <p>Attributing whole's qualities to parts:</p>
            <div style="background: #ffebee; padding: 12px; border-radius: 8px; margin-top: 10px;">
              <p style="margin: 0; font-style: italic; color: #c62828;">"Salt safe → sodium safe"</p>
              <p style="margin: 10px 0 0;">"300-year society → 300-year member"</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Chapter Summary -->
      <div style="background: linear-gradient(135deg, #fffde7 0%, #fff9c4 100%); padding: 25px; border-radius: 12px; border-left: 5px solid #ffd600; margin-bottom: 30px; box-shadow: 0 4px 8px rgba(255, 214, 0, 0.2);">
        <h2 style="color: #f57f17; margin-top: 0; text-align: center;">📚 Chapter Summary</h2>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; margin-top: 20px;">
          <div style="background: white; padding: 20px; border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.05);">
            <h3 style="color: #5d4037; margin-top: 0;">🔤 Core Concepts</h3>
            <ul style="padding-left: 20px;">
              <li>Fallacy: Reasoning defect creating illusion of validity</li>
              <li>Formal: Structural defects in deductive arguments</li>
              <li>Informal: Content defects in any argument type</li>
            </ul>
          </div>
          
          <div style="background: white; padding: 20px; border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.05);">
            <h3 style="color: #5d4037; margin-top: 0;">🧩 Fallacy Categories</h3>
            <ul style="padding-left: 20px;">
              <li>Relevance: Irrelevant premises</li>
              <li>Weak Induction: Insufficient support</li>
              <li>Presumption: Unwarranted assumptions</li>
              <li>Ambiguity: Language confusion</li>
              <li>Grammatical: Faulty analogies</li>
            </ul>
          </div>
          
          <div style="background: white; padding: 20px; border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.05);">
            <h3 style="color: #5d4037; margin-top: 0;">🎯 Key Takeaways</h3>
            <ul style="padding-left: 20px;">
              <li>22 specific informal fallacies</li>
              <li>Fallacies often create psychological persuasion</li>
              <li>Critical thinking requires fallacy recognition</li>
            </ul>
          </div>
        </div>
        
        <div style="background: rgba(255, 193, 7, 0.2); padding: 20px; border-radius: 10px; margin-top: 20px; text-align: center;">
          <p style="font-size: 1.2em; font-style: italic; color: #5d4037; margin: 0;">
            "The first principle is that you must not fool yourself - and you are the easiest person to fool." - Richard Feynman
          </p>
        </div>
      </div>
    </div>
  `
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