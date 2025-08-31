export interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number; // index of correct option
  explanation: string;
  subject: string;
  'question-type': string;
  'question-term': string;
}

export const questions: Question[] = [
  {
    id: 'log-mid-simple-1',
    question: "The definition 'Demolish' means destroy is an example of:",
    options: [
      "A demonstrative definition",
      "A theoretical definition",
      "A definition by genus and difference",
      "A synonymous definition",
      "A precising definition"
    ],
    correctAnswer: 3,
    explanation: "This is a synonymous definition. It explains 'demolish' by using another word ('destroy') with the same meaning.",
    subject: 'logic',
    'question-type': 'simple',
    'question-term': 'mid',
  },
  {
    "id": "psy-final-medium-2",
    "question": "Your memory for cooking a meal is an example of",
    "options": [
      "Episodic",
      "Semantic",
      "Procedural",
      "Explicit theory"
    ],
    "correctAnswer": 2,
    "explanation": "Procedural memory is responsible for motor skills and habits, such as the steps involved in cooking.",
    "subject": "psychology",
    "question-type": "medium",
    "question-term": "final"
  },
  {
    "id": "psy-final-medium-3",
    "question": "Forgetting occurs when we lack retrieval reminders, this is an explanation from",
    "options": [
      "Cue-dependent",
      "Motivated forgetting",
      "Displacement",
      "Interference"
    ],
    "correctAnswer": 0,
    "explanation": "Cue-dependent theory states that forgetting is caused by the absence of retrieval cues or reminders.",
    "subject": "psychology",
    "question-type": "medium",
    "question-term": "final"
  },
  {
    "id": "psy-final-medium-4",
    "question": "A teacher provides sudden quizzes to promote consistent studying habits, which schedule of reinforcement does the teacher use?",
    "options": [
      "Variable interval",
      "Fixed interval",
      "Fixed ratio",
      "Variable ratio"
    ],
    "correctAnswer": 0,
    "explanation": "Variable interval schedules provide reinforcement after an unpredictable amount of time, which encourages consistent behavior.",
    "subject": "psychology",
    "question-type": "medium",
    "question-term": "final"
  },
  {
    "id": "psy-final-medium-5",
    "question": "A person who is exposed to a traumatic event in his life will develop memory losses due to?",
    "options": [
      "Repression",
      "Regression",
      "Decay",
      "Denial"
    ],
    "correctAnswer": 0,
    "explanation": "Repression is a defense mechanism where painful memories are pushed into the unconscious mind.",
    "subject": "psychology",
    "question-type": "medium",
    "question-term": "final"
  },
  {
    "id": "psy-final-medium-6",
    "question": "You are very much interested to eat cake, but you are also worried about getting more weight, this conflict is known as?",
    "options": [
      "Approach-Avoidance",
      "Avoidance-Avoidance",
      "Approach-Approach",
      "Multiple Approach-Avoidance"
    ],
    "correctAnswer": 0,
    "explanation": "An approach-avoidance conflict occurs when a single goal or decision has both positive and negative aspects.",
    "subject": "psychology",
    "question-type": "medium",
    "question-term": "final"
  },
  {
    "id": "psy-final-medium-7",
    "question": "A person who becomes offensive during a discussion may accuse the other person of being offensive. The defense mechanism is?",
    "options": [
      "Regression",
      "Projection",
      "Repression",
      "Rationalization"
    ],
    "correctAnswer": 1,
    "explanation": "Projection is a defense mechanism where an individual attributes their own unacceptable feelings or thoughts to another person.",
    "subject": "psychology",
    "question-type": "medium",
    "question-term": "final"
  },
  {
    "id": "psy-final-medium-8",
    "question": "All of the following are true about learning through modeling, except?",
    "options": [
      "Skills are learned by observing another person perform the skill.",
      "It is considered a form of social learning.",
      "It is commonly used to learn simple habits and reflexes.",
      "Skills are learned in the presence of others."
    ],
    "correctAnswer": 2,
    "explanation": "Modeling is more often associated with complex behaviors, not simple habits or reflexes, which are typically learned through classical or operant conditioning.",
    "subject": "psychology",
    "question-type": "medium",
    "question-term": "final"
  },
  {
    "id": "psy-final-medium-9",
    "question": "If you say “everyone is cheating, so it’s not a big deal I cheated this time” what kind of defense mechanism are you applying?",
    "options": [
      "Repression",
      "Rationalization",
      "Regression",
      "Displacement"
    ],
    "correctAnswer": 1,
    "explanation": "Rationalization involves creating logical, but false, explanations to justify unacceptable behavior.",
    "subject": "psychology",
    "question-type": "medium",
    "question-term": "final"
  },
  {
    "id": "psy-final-medium-10",
    "question": "A type of conflict which occurs when one goal has two negative aspects is called",
    "options": [
      "Approach-Approach",
      "Approach-Avoidance",
      "Avoidance-Avoidance",
      "Multiple Approach-Avoidance"
    ],
    "correctAnswer": 2,
    "explanation": "An avoidance-avoidance conflict involves a choice between two undesirable outcomes.",
    "subject": "psychology",
    "question-type": "medium",
    "question-term": "final"
  },
  {
    "id": "psy-final-medium-11",
    "question": "When you fail an exam, and go home to argue with your sister, you are using?",
    "options": [
      "Displacement",
      "Regression",
      "Reaction formation",
      "Rationalization"
    ],
    "correctAnswer": 0,
    "explanation": "Displacement is a defense mechanism where an individual redirects an impulse from a threatening target to a less threatening one.",
    "subject": "psychology",
    "question-type": "medium",
    "question-term": "final"
  },
  {
    "id": "psy-final-medium-12",
    "question": "You want to watch a football match and at the same time, you want to study for your final exam, this motivational conflict is",
    "options": [
      "Approach-Avoidance",
      "Avoidance-Avoidance",
      "Approach-Approach",
      "Multiple Approach-Avoidance"
    ],
    "correctAnswer": 2,
    "explanation": "An approach-approach conflict is a choice between two desirable outcomes.",
    "subject": "psychology",
    "question-type": "medium",
    "question-term": "final"
  },
  {
    "id": "psy-final-medium-13",
    "question": "Abel's father takes away a lovely doll from his daughter when she hits her brother. The girl stops hitting her brother. This change in the child’s behavior is because of",
    "options": [
      "Positive Reinforcement",
      "Positive Punishment",
      "Negative Reinforcement",
      "Negative Punishment"
    ],
    "correctAnswer": 3,
    "explanation": "Negative punishment involves removing a desirable stimulus (the doll) to decrease a behavior (hitting).",
    "subject": "psychology",
    "question-type": "medium",
    "question-term": "final"
  },
  {
    "id": "psy-final-medium-14",
    "question": "Your memory of how to ride a bicycle is recorded in",
    "options": [
      "Episodic memory",
      "Semantic memory",
      "Procedural memory",
      "Sensory memory"
    ],
    "correctAnswer": 2,
    "explanation": "Procedural memory stores information about how to perform tasks and skills.",
    "subject": "psychology",
    "question-type": "medium",
    "question-term": "final"
  },
  {
    "id": "psy-final-medium-15",
    "question": "According to humanistic perspective of motivation, the ultimate goal of personality growth is:",
    "options": [
      "Coming to terms with unconscious conflicts",
      "Widening the gap between reality and self-concept",
      "Fulfillment of all one's basic needs",
      "To achieve self-actualization"
    ],
    "correctAnswer": 3,
    "explanation": "Self-actualization is the central concept of humanistic psychology, representing the fulfillment of one's potential.",
    "subject": "psychology",
    "question-type": "medium",
    "question-term": "final"
  },
  {
    "id": "psy-final-medium-16",
    "question": "In Psychoanalysis theory, the completely unconscious, irrational component of personality that seeks immediate satisfaction of instinctual urges and drives is",
    "options": [
      "Eros",
      "Ego",
      "Id",
      "Superego"
    ],
    "correctAnswer": 2,
    "explanation": "The Id operates on the pleasure principle, seeking immediate gratification of urges.",
    "subject": "psychology",
    "question-type": "medium",
    "question-term": "final"
  },
  {
    "id": "psy-final-medium-17",
    "question": "Forgetting occurs when we lack retrieval signals for an entry in the mind's library is explained by",
    "options": [
      "Motivated forgetting theory",
      "Displacement theory",
      "Cue dependent theory",
      "Interference theory"
    ],
    "correctAnswer": 2,
    "explanation": "Cue-dependent theory suggests that forgetting is due to the absence of appropriate cues to access information.",
    "subject": "psychology",
    "question-type": "medium",
    "question-term": "final"
  },
  {
    "id": "psy-final-medium-18",
    "question": "Mimi wants an ice cream cone, but she doesn’t want to make the long walk to the shop to buy. She will probably experience the frustration of a/an",
    "options": [
      "Approach-approach conflict",
      "Avoidance-avoidance conflict",
      "Approach-avoidance conflict",
      "Multiple approach-avoidance conflict"
    ],
    "correctAnswer": 2,
    "explanation": "This is an approach-avoidance conflict because the same goal (getting ice cream) has both a positive aspect (eating it) and a negative aspect (the long walk).",
    "subject": "psychology",
    "question-type": "medium",
    "question-term": "final"
  },
  {
    "id": "psy-final-medium-19",
    "question": "Which of the following theories of emotion support the idea that emotions and bodily responses occur simultaneously?",
    "options": [
      "The James-Lange theory",
      "The Schachter-Singer theory",
      "The Cannon-Bard theory",
      "The cognitive-appraisal theory"
    ],
    "correctAnswer": 2,
    "explanation": "The Cannon-Bard theory states that emotional experience and physiological arousal occur simultaneously and independently.",
    "subject": "psychology",
    "question-type": "medium",
    "question-term": "final"
  },
  {
    "id": "psy-final-medium-20",
    "question": "If a person does not eat for a period of time, it causes a need for food. This need produces a state of tension. The tension energizes the person to act in some way to find food, thereby returning the body to homeostasis. This is an example of:",
    "options": [
      "Incentive theory",
      "Cognitive theory",
      "Humanistic theory",
      "Drive reduction theory"
    ],
    "correctAnswer": 3,
    "explanation": "Drive reduction theory explains that motivation arises from the need to reduce physiological tension caused by a biological need, such as hunger.",
    "subject": "psychology",
    "question-type": "medium",
    "question-term": "final"
  },
  {
    "id": "psy-final-medium-21",
    "question": "Which one of the following is the correct sequence of emotional experience in James-Lange theory of emotion?",
    "options": [
      "Event → Physiological arousal → Emotional experience",
      "Event → Physiological arousal → Emotional experience",
      "Event → Cognitive interpretation → Physiological arousal → Emotional experience",
      "Event → Emotion → Physiological arousal"
    ],
    "correctAnswer": 0,
    "explanation": "The James-Lange theory proposes that an event triggers a physiological reaction, and our emotional experience is our interpretation of that reaction.",
    "subject": "psychology",
    "question-type": "medium",
    "question-term": "final"
  },
  {
    "id": "psy-final-medium-22",
    "question": "According to Maslow's hierarchy of needs, an adolescent who is beginning to form serious romantic relationships would be in what level?",
    "options": [
      "Level 1",
      "Level 2",
      "Level 3",
      "Level 4"
    ],
    "correctAnswer": 2,
    "explanation": "Forming romantic relationships is part of the 'love and belonging' needs, which is the third level in Maslow's hierarchy.",
    "subject": "psychology",
    "question-type": "medium",
    "question-term": "final"
  },
  {
    "id": "psy-final-medium-23",
    "question": "Which one of the following represents the correct sequence of events for the process of memory?",
    "options": [
      "Encoding → Retrieving → Storing",
      "Storing → Retrieving → Encoding",
      "Retrieving → Storing → Encoding",
      "Encoding → Storing → Retrieving"
    ],
    "correctAnswer": 3,
    "explanation": "The correct sequence of memory is encoding (getting information in), storing (keeping it), and retrieving (getting it out).",
    "subject": "psychology",
    "question-type": "medium",
    "question-term": "final"
  },
  {
    "id": "psy-final-medium-24",
    "question": "Which of the following statements best illustrates Maslow's esteem needs?",
    "options": [
      "Moving to a safe community to raise your children",
      "Winning a Nobel Prize for peace building",
      "Getting married to your high school sweetheart",
      "Donating a large sum of money to charity"
    ],
    "correctAnswer": 1,
    "explanation": "Esteem needs are about self-worth, accomplishment, and recognition. Winning a Nobel Prize is a high form of recognition.",
    "subject": "psychology",
    "question-type": "medium",
    "question-term": "final"
  },
  {
    "id": "psy-final-medium-25",
    "question": "According to Carl Rogers, a person's personality is determined by measuring the difference between:",
    "options": [
      "Introversion and extraversion",
      "Ideal self and real self",
      "Self-efficacy and self-esteem",
      "Self-actualization and esteem needs"
    ],
    "correctAnswer": 1,
    "explanation": "Carl Rogers's theory focuses on the congruence between a person's ideal self (who they want to be) and their real self (who they are).",
    "subject": "psychology",
    "question-type": "medium",
    "question-term": "final"
  },
  {
    "id": "psy-final-medium-26",
    "question": "Which of the following statements best illustrates rationalization?",
    "options": [
      "Jamal fails his math class and blames it on his teacher not liking him",
      "After fighting with her best friend, Chaltu starts an argument with her mother",
      "Birtukan feels so guilty about cheating, she confesses to her teacher",
      "Alemu is a smoker but disregards the evidence that says smoking can kill you"
    ],
    "correctAnswer": 0,
    "explanation": "Rationalization is the act of creating a logical, but false, reason for a failure or unacceptable behavior.",
    "subject": "psychology",
    "question-type": "medium",
    "question-term": "final"
  },
  {
    "id": "psy-final-medium-27",
    "question": "Thomas is still in love with his girlfriend, who broke up with him last week, but he acts as if he doesn’t care and is actually happy to be rid of her. This illustrates:",
    "options": [
      "Regression",
      "Projection",
      "Sublimation",
      "Reaction formation"
    ],
    "correctAnswer": 3,
    "explanation": "Reaction formation is a defense mechanism where a person behaves in a way that is the opposite of their true feelings.",
    "subject": "psychology",
    "question-type": "medium",
    "question-term": "final"
  },
  {
    "id": "psy-final-medium-28",
    "question": "In cognitive approach, motivation is a result of",
    "options": [
      "Maintaining equilibrium",
      "Reducing psychological tension",
      "People’s thought and thought process",
      "The desire to attain external rewards"
    ],
    "correctAnswer": 2,
    "explanation": "The cognitive approach to motivation emphasizes the role of a person's thoughts, beliefs, expectations, and goals.",
    "subject": "psychology",
    "question-type": "medium",
    "question-term": "final"
  },
  {
    "id": "psy-final-medium-29",
    "question": "Which of the following is an example of repression?",
    "options": [
      "Suppressing bad memories that cause anxiety",
      "Suppressing your natural instincts",
      "Stopping others from behaving inappropriately",
      "Stopping yourself from behaving the way you want to"
    ],
    "correctAnswer": 0,
    "explanation": "Repression is an unconscious defense mechanism where a person pushes unpleasant thoughts and memories out of awareness.",
    "subject": "psychology",
    "question-type": "medium",
    "question-term": "final"
  },
  {
    "id": "psy-final-medium-30",
    "question": "Kebede is jealous of his girlfriend but claims that she’s the one who is jealous. This is an example of",
    "options": [
      "Rationalization",
      "Projection",
      "Displacement",
      "Repression"
    ],
    "correctAnswer": 1,
    "explanation": "Projection is a defense mechanism where a person attributes their own unacceptable feelings to someone else.",
    "subject": "psychology",
    "question-type": "medium",
    "question-term": "final"
  },
  {
    "id": "psy-final-medium-31",
    "question": "While sitting in a waiting room, a man next to you begins yelling and acting aggressively. Your heart begins beating fast. You think the situation causes your arousal. Which theory of emotion would support this explanation?",
    "options": [
      "The James-Lange theory",
      "The Schachter-Singer theory",
      "The Cannon-Bard theory",
      "The facial feedback theory"
    ],
    "correctAnswer": 1,
    "explanation": "The Schachter-Singer theory (or two-factor theory) states that emotion is the result of both physiological arousal and a cognitive label of that arousal based on the situation.",
    "subject": "psychology",
    "question-type": "medium",
    "question-term": "final"
  },
  {
    "id": "psy-final-medium-32",
    "question": "Sometimes, a shopper in a store must choose between two alternatives that seem equally attractive. This would be an example of which motivation conflict?",
    "options": [
      "Approach-avoidance conflict",
      "Approach-approach conflict",
      "Avoidance-avoidance approach",
      "Approach-avoidance situation"
    ],
    "correctAnswer": 1,
    "explanation": "An approach-approach conflict involves a choice between two equally desirable options.",
    "subject": "psychology",
    "question-type": "medium",
    "question-term": "final"
  },
  {
    "id": "psy-final-medium-33",
    "question": "The degree to which you are motivated to study hard depends upon your expectations for good grades and the value you place on getting good grades. This is the example of motivation theory of",
    "options": [
      "Incentive theory",
      "Instinct theory",
      "Humanistic theory",
      "Drive reduction theory"
    ],
    "correctAnswer": 0,
    "explanation": "Incentive theory suggests that behavior is motivated by a desire for external rewards or incentives.",
    "subject": "psychology",
    "question-type": "medium",
    "question-term": "final"
  },
  {
    "id": "psy-final-medium-34",
    "question": "A 40-year-old man after fighting with his wife returned to his parent's home crying and complaining about his wife. This is an illustration of:",
    "options": [
      "Repression",
      "Regression",
      "Rationalization",
      "Reaction Formation"
    ],
    "correctAnswer": 1,
    "explanation": "Regression is a defense mechanism where a person retreats to an earlier, more immature stage of development to cope with stress.",
    "subject": "psychology",
    "question-type": "medium",
    "question-term": "final"
  },
  {
    "id": "psy-final-medium-35",
    "question": "According to humanistic psychology, the approval and love we receive from important people in our lives should be freely given. This is called:",
    "options": [
      "Conditioned positive regard",
      "Positive conditioning",
      "Unconditioned positive regard",
      "Positive regard"
    ],
    "correctAnswer": 2,
    "explanation": "Unconditioned positive regard is a key concept in Carl Rogers's humanistic theory, referring to the unconditional acceptance and love from others.",
    "subject": "psychology",
    "question-type": "medium",
    "question-term": "final"
  },
  {
    "id": "psy-final-medium-36",
    "question": "According to decay theory of forgetting, we forget because:",
    "options": [
      "We are confused due to interference of similar information",
      "We have a delay of time and information might fade",
      "We fail to properly encode the information",
      "We are consciously motivated to forget"
    ],
    "correctAnswer": 1,
    "explanation": "Decay theory suggests that memory traces in the brain naturally fade over time if they are not used or rehearsed.",
    "subject": "psychology",
    "question-type": "medium",
    "question-term": "final"
  },
  {
    "id": "psy-final-medium-37",
    "question": "A child scolded by his father may hit his dog. This is an example of:",
    "options": [
      "Displacement",
      "Rationalization",
      "Regression",
      "Repression"
    ],
    "correctAnswer": 0,
    "explanation": "Displacement is a defense mechanism where a person redirects an emotional response from a threatening object to a safer one.",
    "subject": "psychology",
    "question-type": "medium",
    "question-term": "final"
  },
  {
    "id": "psy-final-medium-38",
    "question": "A prisoner is expected to complete reading one book to get 2 months off his/her term of sentence. This is an example of",
    "options": [
      "Negative punishment",
      "Positive reinforcement",
      "Negative reinforcement",
      "Positive punishment"
    ],
    "correctAnswer": 2,
    "explanation": "Negative reinforcement involves removing an aversive stimulus (2 months of a prison sentence) to increase a desired behavior (reading a book).",
    "subject": "psychology",
    "question-type": "medium",
    "question-term": "final"
  },
  {
    "id": "psy-final-medium-39",
    "question": "Memory is registering information from sound and registering information from what we see.",
    "options": [
      "Echoic, Iconic",
      "Iconic, Echoic",
      "Echoic, Active memory",
      "Iconic, Decoding"
    ],
    "correctAnswer": 0,
    "explanation": "Echoic memory is sensory memory for sound, and iconic memory is sensory memory for visual information.",
    "subject": "psychology",
    "question-type": "medium",
    "question-term": "final"
  },
  {
    "id": "psy-final-medium-40",
    "question": "Which of the following statements is NOT true about long term memory?",
    "options": [
      "Information stored in it will remain there permanently.",
      "It holds huge amount of information.",
      "Displacement of information can occur there.",
      "It is a store of facts, events, and knowledge."
    ],
    "correctAnswer": 2,
    "explanation": "Displacement is a process that occurs in short-term memory, where new information pushes out older information due to limited capacity. Long-term memory has no such capacity limit.",
    "subject": "psychology",
    "question-type": "medium",
    "question-term": "final"
  },
  {
    "id": "psy-final-medium-41",
    "question": "The method of grouping large amounts of information into manageable units in short term memory is",
    "options": [
      "Rehearsal",
      "Encoding",
      "Attention",
      "Chunking"
    ],
    "correctAnswer": 3,
    "explanation": "Chunking is a method of organizing information into meaningful groups to increase the amount that can be held in short-term memory.",
    "subject": "psychology",
    "question-type": "medium",
    "question-term": "final"
  },
  {
    "id": "psy-final-medium-42",
    "question": "Which theory explains that forgetting is a result of fading memory trace?",
    "options": [
      "Motivated forgetting",
      "Decay",
      "Displacement",
      "Cue dependent"
    ],
    "correctAnswer": 1,
    "explanation": "Decay theory suggests that forgetting occurs as memory traces fade over time.",
    "subject": "psychology",
    "question-type": "medium",
    "question-term": "final"
  },
  {
    "id": "psy-final-medium-43",
    "question": "According to Bandura's observational learning theory, the four elements of observational learning in order are:",
    "options": [
      "Attention, retention, reproduction, motivation",
      "Motivation, attention, retention, reproduction",
      "Attention, motivation, retention, reproduction",
      "Motivation, attention, reproduction, retention"
    ],
    "correctAnswer": 0,
    "explanation": "The correct sequence is attention (observing the model), retention (remembering what was observed), reproduction (performing the behavior), and motivation (having the incentive to perform it).",
    "subject": "psychology",
    "question-type": "medium",
    "question-term": "final"
  },
  {
    "id": "psy-final-medium-44",
    "question": "Interference refers backward interference, and _____ refers forward interference.",
    "options": [
      "Primacy, recency",
      "Recency, primacy",
      "Retroactive, proactive",
      "Proactive, retroactive"
    ],
    "correctAnswer": 2,
    "explanation": "Retroactive interference occurs when new information interferes with old information, and proactive interference occurs when old information interferes with new information.",
    "subject": "psychology",
    "question-type": "medium",
    "question-term": "final"
  },
  {
    "id": "psy-final-medium-45",
    "question": "As you do this exam, you are retrieving information from",
    "options": [
      "Active memory",
      "Long term memory",
      "Sensory memory",
      "Procedural memory"
    ],
    "correctAnswer": 1,
    "explanation": "Taking an exam requires retrieving knowledge and facts that are stored in long-term memory.",
    "subject": "psychology",
    "question-type": "medium",
    "question-term": "final"
  },
  {
    "id": "psy-final-medium-46",
    "question": "A person is described as “moody and hostile”. In Big Five personality, this person characterizes as:",
    "options": [
      "Low in extraversion and low in agreeableness",
      "High in neuroticism and low in agreeableness",
      "Low in extraversion and low in conscientiousness",
      "High in neuroticism and low in conscientiousness"
    ],
    "correctAnswer": 1,
    "explanation": "Moodiness and hostility are associated with high neuroticism (emotional instability) and low agreeableness (tendency to be uncooperative and hostile).",
    "subject": "psychology",
    "question-type": "medium",
    "question-term": "final"
  },
  {
    "id": "psy-final-medium-47",
    "question": "According to Freud, which part of personality urges our basic needs to be met?",
    "options": [
      "Conscience",
      "Ego",
      "Superego",
      "Id"
    ],
    "correctAnswer": 3,
    "explanation": "The Id is the primitive and instinctual part of the mind that contains sexual and aggressive drives and hidden memories. It operates on the pleasure principle.",
    "subject": "psychology",
    "question-type": "medium",
    "question-term": "final"
  },
  {
    "id": "psy-final-medium-48",
    "question": "Which of the following is an example of reaction formation?",
    "options": [
      "Distancing yourself from your feelings by focusing on logical facts",
      "Feeling angry toward a family member instead of your boss",
      "Being loving and warm toward a person you are angry with",
      "Attributing your own anger to someone else"
    ],
    "correctAnswer": 2,
    "explanation": "Reaction formation is a defense mechanism where a person acts in a way that is the exact opposite of their true feelings.",
    "subject": "psychology",
    "question-type": "medium",
    "question-term": "final"
  },
  {
    "id": "psy-final-medium-49",
    "question": "Which of the following can NOT be considered as central idea of trait theory?",
    "options": [
      "Traits change based on situations and exposures",
      "Traits are relatively consistent across situations",
      "Traits can enable us to predict behavior over time",
      "Individual differences are due to the relative strength of traits"
    ],
    "correctAnswer": 0,
    "explanation": "Trait theory emphasizes that traits are stable and consistent over time and across situations, not that they change easily.",
    "subject": "psychology",
    "question-type": "medium",
    "question-term": "final"
  },
  {
    "id": "psy-final-medium-50",
    "question": "Rogers states that _____ is an innate drive that motivates all human behavior toward growth.",
    "options": [
      "Unconditional positive regard",
      "Actualizing tendency",
      "Conditional positive regard",
      "Wish fulfillment"
    ],
    "correctAnswer": 1,
    "explanation": "The actualizing tendency is the core concept of Rogers's humanistic theory, representing the inherent drive to grow and fulfill one's potential.",
    "subject": "psychology",
    "question-type": "medium",
    "question-term": "final"
  },
  {
    "id": "psy-final-medium-51",
    "question": "A student who has cheated in an examination may think it is normal as he/she believes that others have also cheated. This defense mechanism is:",
    "options": [
      "Sublimation",
      "Repression",
      "Displacement",
      "Projection"
    ],
    "correctAnswer": 3,
    "explanation": "Projection is a defense mechanism where a person attributes their own unacceptable behaviors or thoughts to others.",
    "subject": "psychology",
    "question-type": "medium",
    "question-term": "final"
  },
  {
    "id": "psy-final-medium-52",
    "question": "A widow, who loves a young man, might convince herself that she intensely dislikes him and urge her daughter to stop seeing him. This defense mechanism is:",
    "options": [
      "Reaction formation",
      "Projection",
      "Sublimation",
      "Displacement"
    ],
    "correctAnswer": 0,
    "explanation": "Reaction formation involves acting in a manner opposite to one's true feelings to hide them from oneself and others.",
    "subject": "psychology",
    "question-type": "medium",
    "question-term": "final"
  },
  {
    "id": "psy-final-medium-53",
    "question": "According to cognitive perspective, psychological disorders are caused by:",
    "options": [
      "Faulty learning",
      "Unresolved conflicts",
      "Distortions in thinking",
      "Imbalance of neurotransmitters"
    ],
    "correctAnswer": 2,
    "explanation": "The cognitive perspective views psychological disorders as being caused by irrational, negative, or distorted thought patterns.",
    "subject": "psychology",
    "question-type": "medium",
    "question-term": "final"
  },
  {
    "id": "psy-final-medium-54",
    "question": "If a student develops an inclination to disobey his teachers and interacts poorly with friends, it is an indicative of:",
    "options": [
      "Deviation",
      "Maladaptiveness",
      "Personal distress",
      "Danger"
    ],
    "correctAnswer": 1,
    "explanation": "Maladaptiveness refers to behavior that is dysfunctional and interferes with a person's ability to live a normal life.",
    "subject": "psychology",
    "question-type": "medium",
    "question-term": "final"
  },
  {
    "id": "psy-final-medium-55",
    "question": "_____ is a mental activity by which an individual changes information into a meaningful form.",
    "options": [
      "Storage",
      "Encoding",
      "Retrieval",
      "Retention"
    ],
    "correctAnswer": 1,
    "explanation": "Encoding is the process of converting information into a form that can be stored and later retrieved from memory.",
    "subject": "psychology",
    "question-type": "medium",
    "question-term": "final"
  },
  {
    "id": "psy-final-medium-56",
    "question": "What is the mental process that determines the movement of information from sensory memory to working memory?",
    "options": [
      "Retrieval",
      "Attention",
      "Organization",
      "Encoding"
    ],
    "correctAnswer": 1,
    "explanation": "Attention is the process that selects information from sensory memory to be processed further in short-term or working memory.",
    "subject": "psychology",
    "question-type": "medium",
    "question-term": "final"
  },
  {
    "id": "psy-final-medium-57",
    "question": "Identify the method that improves the limited duration of information in short term memory.",
    "options": [
      "Encoding",
      "Chunking",
      "Repetition",
      "Retrieval"
    ],
    "correctAnswer": 2,
    "explanation": "Repetition, or rehearsal, helps maintain information in short-term memory by actively keeping it in your conscious mind.",
    "subject": "psychology",
    "question-type": "medium",
    "question-term": "final"
  },
  {
    "id": "psy-final-medium-58",
    "question": "Which one of the following is the right path of the processes and structures of human memory developed by Atkinson and Shiffrin (1968)?",
    "options": [
      "Sensory memory → Stimulus → Attention → Short term memory → Long term memory",
      "Stimulus → Attention → Long term memory → Sensory memory → Short term memory",
      "Attention → Sensory memory → Stimulus → Long memory → Short term memory",
      "Stimulus → Sensory memory → Attention → Short term memory → Long memory"
    ],
    "correctAnswer": 3,
    "explanation": "The Atkinson-Shiffrin model starts with an external stimulus, which enters sensory memory, then through attention to short-term memory, and finally to long-term memory.",
    "subject": "psychology",
    "question-type": "medium",
    "question-term": "final"
  },
  {
    "id": "psy-final-medium-59",
    "question": "If you hear some information but lose it just after 2 seconds, in which stage of memory is the information most likely stored?",
    "options": [
      "Sensory memory",
      "Episodic memory",
      "Short term memory",
      "Semantic memory"
    ],
    "correctAnswer": 0,
    "explanation": "Sensory memory has a very brief duration (less than 3 seconds), which aligns with the given scenario.",
    "subject": "psychology",
    "question-type": "medium",
    "question-term": "final"
  },
  {
    "id": "psy-final-medium-60",
    "question": "You have been studying General Psychology up to now. But after this semester, there might only be few opportunities to apply your knowledge of this course. Thus forgetting may occur. This form of forgetting is best described in _____ theory.",
    "options": [
      "Interference",
      "Decay",
      "Displacement",
      "Cue dependent"
    ],
    "correctAnswer": 1,
    "explanation": "Decay theory suggests that memory traces fade over time if they are not used, which is relevant to the lack of application of knowledge after the course.",
    "subject": "psychology",
    "question-type": "medium",
    "question-term": "final"
  },
  {
    "id": "psy-final-medium-61",
    "question": "Which one of the following is an example of intrinsic motivation?",
    "options": [
      "Participating in a get-together after finalizing freshman course",
      "Participating in group assignments due to group control",
      "Answering questions in class to be praised by your instructor",
      "Reading extensively to compensate your mid-exam failure"
    ],
    "correctAnswer": 0,
    "explanation": "Intrinsic motivation is doing something for internal satisfaction, not for an external reward like praise or a grade.",
    "subject": "psychology",
    "question-type": "medium",
    "question-term": "final"
  },
  {
    "id": "psy-final-medium-62",
    "question": "University students drink coffee to be active during study time. This concept is well explained by _____ theory of motivation.",
    "options": [
      "Drive reduction",
      "Incentive",
      "Arousal",
      "Humanistic"
    ],
    "correctAnswer": 2,
    "explanation": "Arousal theory states that we are motivated to maintain an optimal level of arousal, and coffee is used to increase arousal for studying.",
    "subject": "psychology",
    "question-type": "medium",
    "question-term": "final"
  },
  {
    "id": "psy-final-medium-63",
    "question": "According to Maslow's hierarchy of needs, when safety needs are met at least partially, people tend to become concerned with which of the following?",
    "options": [
      "Self-actualization",
      "Belongingness",
      "Esteem",
      "Security"
    ],
    "correctAnswer": 1,
    "explanation": "According to Maslow's hierarchy, after physiological and safety needs, the next level is love and belongingness needs.",
    "subject": "psychology",
    "question-type": "medium",
    "question-term": "final"
  },
  {
    "id": "psy-final-medium-64",
    "question": "After completing the freshman courses, you are assigned to one program that you didn’t prefer. You want to graduate but you couldn’t get your preference. If you refuse to join the program, you will not stay in the university. What kind of conflict are you experiencing?",
    "options": [
      "Approach-approach",
      "Approach-avoidance",
      "Avoidance-avoidance",
      "Multiple approach-avoidance"
    ],
    "correctAnswer": 2,
    "explanation": "This is an avoidance-avoidance conflict because you are faced with a choice between two undesirable options: joining a program you dislike or being forced to leave the university.",
    "subject": "psychology",
    "question-type": "medium",
    "question-term": "final"
  },
  {
    "id": "psy-final-medium-65",
    "question": "Which of the following is wrongly matched about the components of emotion?",
    "options": [
      "Physiological → Dilation of pupil",
      "Behavioral → Gestures",
      "Cognitive → Memories",
      "Subjective experience → Facial expression"
    ],
    "correctAnswer": 3,
    "explanation": "Facial expressions are a behavioral component of emotion, while subjective experience refers to the conscious feeling of the emotion itself.",
    "subject": "psychology",
    "question-type": "medium",
    "question-term": "final"
  },
  {
    "id": "psy-final-medium-66",
    "question": "Parents have a motive to care and love their children. This motive best describes _____ theory of motivation.",
    "options": [
      "Incentive",
      "Instinct",
      "Drive-reduction",
      "Arousal"
    ],
    "correctAnswer": 1,
    "explanation": "Instinct theory suggests that certain behaviors are unlearned, fixed patterns of behavior in response to certain stimuli. Parental care is often viewed as an innate, instinctual behavior.",
    "subject": "psychology",
    "question-type": "medium",
    "question-term": "final"
  },
  {
    "id": "psy-final-medium-67",
    "question": "Which theory of emotion states that our bodies react and we feel an emotion?",
    "options": [
      "James-Lange",
      "Cannon-Bard",
      "Schachter-Singer",
      "Lazarus"
    ],
    "correctAnswer": 0,
    "explanation": "The James-Lange theory posits that our emotional experience is a result of our physiological response to a stimulus.",
    "subject": "psychology",
    "question-type": "medium",
    "question-term": "final"
  },
  {
    "id": "psy-final-medium-68",
    "question": "A widow who loves a young man might feel ashamed and convince herself by intensely disliking him. This case explains:",
    "options": [
      "Reaction formation",
      "Projection",
      "Sublimation",
      "Displacement"
    ],
    "correctAnswer": 0,
    "explanation": "Reaction formation is a defense mechanism where a person consciously adopts a behavior or attitude that is the opposite of their true feelings.",
    "subject": "psychology",
    "question-type": "medium",
    "question-term": "final"
  },
  {
    "id": "psy-final-medium-69",
    "question": "According to humanistic theory, which one of the following is not a feature of a fully functioning person?",
    "options": [
      "Trust in innermost capacity",
      "Freedom of self-exploration",
      "Being in touch with feelings",
      "Conditional positive regard"
    ],
    "correctAnswer": 3,
    "explanation": "Conditional positive regard is when a person's worth is contingent on their behavior, which is a barrier to being a fully functioning person. Unconditional positive regard is the goal.",
    "subject": "psychology",
    "question-type": "medium",
    "question-term": "final"
  },
  {
    "id": "psy-final-medium-70",
    "question": "According to the BIG FIVE theory, _____ is a general tendency for change and adaptability to new situations and events.",
    "options": [
      "Openness experience",
      "Conscientiousness",
      "Extraversion",
      "Agreeableness"
    ],
    "correctAnswer": 0,
    "explanation": "Openness to experience is a personality trait that involves being willing to try new things and being open to new ideas and experiences.",
    "subject": "psychology",
    "question-type": "medium",
    "question-term": "final"
  },
  {
    "id": "psy-final-medium-71",
    "question": "A mood disorder characterized by persistent and less severe depressive symptoms is known as",
    "options": [
      "Major depression",
      "Dysthymia",
      "Bipolar",
      "Cyclothymia"
    ],
    "correctAnswer": 1,
    "explanation": "Dysthymia, or persistent depressive disorder, is a chronic, low-grade depression with less severe symptoms than major depression.",
    "subject": "psychology",
    "question-type": "medium",
    "question-term": "final"
  },
  {
    "id": "psy-final-medium-72",
    "question": "Encoding is the process",
    "options": [
      "of transforming a sensory input into a form that can be processed further",
      "through which we recall information previously learned but forgotten",
      "of bringing to mind information that has been previously stored",
      "of maintaining information in memory over time"
    ],
    "correctAnswer": 0,
    "explanation": "Encoding is the initial learning of information; it's the process by which we transform what we perceive into a memory.",
    "subject": "psychology",
    "question-type": "medium",
    "question-term": "final"
  },
  {
    "id": "psy-final-medium-73",
    "question": "Bekele is an athlete who wants to be a world-class runner like his model Solomon Barega. Bekele began exercising 5 times a week at Entoto Mountain following the footsteps of his model. What kind of reinforcement is primarily at work here in Bekele's behavior?",
    "options": [
      "Negative reinforcement",
      "Primary reinforcement",
      "Vicarious reinforcement",
      "Secondary reinforcement"
    ],
    "correctAnswer": 2,
    "explanation": "Vicarious reinforcement is when a person is motivated to perform a behavior by observing someone else being rewarded for it.",
    "subject": "psychology",
    "question-type": "medium",
    "question-term": "final"
  },
  {
    "id": "psy-final-medium-74",
    "question": "A researcher is interested in examining differences in attitudes toward tax increases with respect to demographic variables. The researcher administered a questionnaire to people of all genders and ages who live across Ethiopia. The dependent variable in the study is the _____ of the participants.",
    "options": [
      "Age",
      "Gender",
      "Attitude",
      "Geographic location"
    ],
    "correctAnswer": 2,
    "explanation": "The dependent variable is the one being measured or tested, in this case, the participants' attitudes.",
    "subject": "psychology",
    "question-type": "medium",
    "question-term": "final"
  },
  {
    "id": "psy-final-medium-75",
    "question": "Gete is a 19-year-old girl who has a dream of going to America. She has a boyfriend she really loves, but to achieve her dream she would have to marry someone of her father’s age, which she does not like. What kind of conflict of motive is Gete more likely to experience in this situation?",
    "options": [
      "Approach-avoidance conflict",
      "Avoidance-avoidance conflict",
      "Approach-approach conflict",
      "Multiple approach conflict"
    ],
    "correctAnswer": 0,
    "explanation": "An approach-avoidance conflict is when a single goal (going to America) has both an appealing aspect (achieving a dream) and an unappealing aspect (marrying an old man).",
    "subject": "psychology",
    "question-type": "medium",
    "question-term": "final"
  },
  {
    "id": "psy-final-medium-76",
    "question": "Which of the following posters is the best to get people to pay attention to it?",
    "options": [
      "Large poster with much small print and a few standard graphics",
      "Small poster with black and white text only",
      "Medium-sized poster with unique graphics and small print",
      "Large poster with vivid colors, large print, and unique graphics"
    ],
    "correctAnswer": 3,
    "explanation": "Large size, vivid colors, and unique graphics are all factors that increase attention and memorability.",
    "subject": "psychology",
    "question-type": "medium",
    "question-term": "final"
  },
  {
    "id": "psy-final-medium-77",
    "question": "An unresolved conflict or emotional hang-up caused by overindulgence or frustration occurs when an adult shows personality characteristics related to an earlier stage of development. This phenomenon is called:",
    "options": [
      "Depression",
      "Fixation",
      "Anxiety",
      "Disorder"
    ],
    "correctAnswer": 1,
    "explanation": "Fixation, in psychoanalytic theory, is a persistent focus on an earlier psychosexual stage due to an unresolved conflict.",
    "subject": "psychology",
    "question-type": "medium",
    "question-term": "final"
  },
  {
    "id": "psy-final-medium-78",
    "question": "Perception refers to the process by which:",
    "options": [
      "Sense organs transmit information to the brain for initial processing",
      "The brain minimizes responses to stimuli that do not change",
      "Receptors gather information from the environment",
      "The brain organizes and interprets sensations"
    ],
    "correctAnswer": 3,
    "explanation": "Perception is the process of organizing and interpreting sensory information, enabling us to recognize meaningful objects and events.",
    "subject": "psychology",
    "question-type": "medium",
    "question-term": "final"
  },
  {
    "id": "psy-final-medium-79",
    "question": "A soldier who survived a war may develop intense fear of related situations, avoidance of these situations, reoccurring nightmares, flashbacks, and heightened anxiety disrupting everyday life. This anxiety disorder is classified as:",
    "options": [
      "Obsessive-compulsive disorder",
      "Panic disorder",
      "Generalized anxiety disorder",
      "Post-traumatic stress disorder"
    ],
    "correctAnswer": 3,
    "explanation": "Post-traumatic stress disorder (PTSD) is an anxiety disorder triggered by a terrifying event, and its symptoms include flashbacks, avoidance, and heightened arousal.",
    "subject": "psychology",
    "question-type": "medium",
    "question-term": "final"
  },
  {
    "id": "psy-final-medium-80",
    "question": "Classical conditioning is sometimes called substitution learning because:",
    "options": [
      "The neutral stimulus substitutes the unconditioned stimulus",
      "The unconditioned stimulus becomes a conditioned stimulus",
      "The unconditioned stimulus substitutes the neutral response",
      "The neutral stimulus may acquire the characteristics of the conditioned stimulus"
    ],
    "correctAnswer": 0,
    "explanation": "In classical conditioning, a neutral stimulus is paired with an unconditioned stimulus until it can elicit a response on its own, essentially 'substituting' the UCS.",
    "subject": "psychology",
    "question-type": "medium",
    "question-term": "final"
  },
  {
    "id": "psy-final-medium-81",
    "question": "To build teamwork and cooperation among workers, Ethiopian Airlines wants to know more about the characteristics of its employees to improve productivity. Which psychology specialist would the airline most likely consult?",
    "options": [
      "Social Psychologist",
      "Clinical Psychologist",
      "Industrial Psychologist",
      "Health Psychologist"
    ],
    "correctAnswer": 2,
    "explanation": "Industrial-organizational psychologists specialize in workplace behavior, including employee morale, productivity, and teamwork.",
    "subject": "psychology",
    "question-type": "medium",
    "question-term": "final"
  },
  {
    "id": "psy-final-medium-82",
    "question": "According to the James-Lange theory of emotion, our experience of an emotion is:",
    "options": [
      "Accompanied by physiological arousal",
      "The result of the arousal that we experience",
      "The cause of our body's physiological reactions",
      "Identified on the basis of how we perceive the situation"
    ],
    "correctAnswer": 1,
    "explanation": "The James-Lange theory states that our emotional experience is a direct result of our physiological arousal.",
    "subject": "psychology",
    "question-type": "medium",
    "question-term": "final"
  },
  {
    "id": "psy-final-medium-83",
    "question": "If you see a woman in a white gown in a hospital, you may think she is a doctor. If you see the same woman in a kindergarten, you may think she is a teacher. Your perception in the two situations differed primarily because of:",
    "options": [
      "Perceptual set",
      "Perceptual constancy",
      "Perceptual variability",
      "Perceptual illusion"
    ],
    "correctAnswer": 0,
    "explanation": "Perceptual set is a mental predisposition to perceive one thing and not another, often influenced by context.",
    "subject": "psychology",
    "question-type": "medium",
    "question-term": "final"
  },
  {
    "id": "psy-final-medium-84",
    "question": "Duguma wrote a shopping list of 10 items: peas, corn, orange, onions, apples, papaya, bananas, flour, milk, and eggs. According to the law of primacy effect, which of the following items are more likely to be recalled?",
    "options": [
      "Peas, milk, eggs",
      "Banana, flour, peas",
      "Flour, milk, eggs",
      "Peas, corn, orange"
    ],
    "correctAnswer": 3,
    "explanation": "The primacy effect refers to the tendency to better recall items at the beginning of a list.",
    "subject": "psychology",
    "question-type": "medium",
    "question-term": "final"
  },
  {
    "id": "psy-final-medium-85",
    "question": "If an eyewitness is asked in a court to describe everything about a crime he/she observed with reference to a particular time and place, the person relies upon _____ memory.",
    "options": [
      "Semantic",
      "Procedural",
      "Episodic",
      "Sensory"
    ],
    "correctAnswer": 2,
    "explanation": "Episodic memory is a type of long-term memory that stores specific events and experiences, including the time and place they occurred.",
    "subject": "psychology",
    "question-type": "medium",
    "question-term": "final"
  },
  {
    "id": "psy-final-medium-86",
    "question": "The major subject matter of psychology is best described as:",
    "options": [
      "Perception, attention, imagination",
      "Emotion, behavior, cognition",
      "Thoughts, feelings, sensations",
      "Memory, cognition, perception"
    ],
    "correctAnswer": 1,
    "explanation": "Psychology is the scientific study of behavior and mental processes, which includes emotions, behaviors, and cognitions.",
    "subject": "psychology",
    "question-type": "medium",
    "question-term": "final"
  },
  {
    "id": "psy-final-medium-87",
    "question": "In Freud's conceptualization of elements of personality:",
    "options": [
      "Id, ego, superego",
      "Ego, superego, id",
      "Superego, ego, id",
      "Ego, id, superego"
    ],
    "correctAnswer": 0,
    "explanation": "Freud's structural model of personality consists of the id (instincts), ego (reality), and superego (morality).",
    "subject": "psychology",
    "question-type": "medium",
    "question-term": "final"
  },
  {
    "id": "psy-final-medium-88",
    "question": "Suppose Tesfaye and Abdisa make a living by selling newspapers. Tesfaye is paid 10 Birr for every five newspapers he sells; Abdisa is paid 60 Birr at the end of each week regardless of the number of newspapers sold. In this example, Tesfaye and Abdisa are on reinforcement schedules respectively:",
    "options": [
      "Variable ratio; fixed ratio",
      "Fixed interval; fixed ratio",
      "Fixed ratio; variable interval",
      "Fixed ratio; fixed interval"
    ],
    "correctAnswer": 3,
    "explanation": "Tesfaye's payment is a fixed ratio (10 Birr for a fixed number of sales), while Abdisa's payment is a fixed interval (60 Birr after a fixed amount of time).",
    "subject": "psychology",
    "question-type": "medium",
    "question-term": "final"
  },
  {
    "id": "psy-final-medium-89",
    "question": "A pervasive pattern of grandiosity, need for admiration, and lack of empathy are symptoms of:",
    "options": [
      "Dependent personality disorder",
      "Avoidant personality disorder",
      "Narcissistic personality disorder",
      "Histrionic personality disorder"
    ],
    "correctAnswer": 2,
    "explanation": "These symptoms are characteristic of Narcissistic Personality Disorder, which involves an inflated sense of self-importance and a deep need for admiration.",
    "subject": "psychology",
    "question-type": "medium",
    "question-term": "final"
  },
  {
    "id": "psy-final-medium-90",
    "question": "A particular strength of the humanistic approach to personality is its emphasis on:",
    "options": [
      "The past",
      "The role of the environment",
      "Measurable and observable phenomena",
      "The positive notion of personal growth and development"
    ],
    "correctAnswer": 3,
    "explanation": "Humanistic psychology focuses on the unique qualities of individuals, their potential for growth, and their free will.",
    "subject": "psychology",
    "question-type": "medium",
    "question-term": "final"
  },
  {
    "id": "psy-final-medium-91",
    "question": "According to cognitive theory, mental disorders are caused by:",
    "options": [
      "Negative internal dialogue that people engage in",
      "Faulty learning",
      "Psychoanalytic conflicts",
      "Humanistic needs"
    ],
    "correctAnswer": 0,
    "explanation": "Cognitive theory posits that mental disorders stem from negative thought patterns and maladaptive internal dialogue.",
    "subject": "psychology",
    "question-type": "medium",
    "question-term": "final"
  },
  {
    "id": "psy-final-medium-92",
    "question": "Which of the following is the most accurate definition of learning?",
    "options": [
      "The result of a variety of experiences that temporarily shape behavior",
      "An enduring change in an organism's behavior based on experience",
      "A change in behavior that is not susceptible to extinction",
      "The sole result of classical and operant conditioning"
    ],
    "correctAnswer": 1,
    "explanation": "Learning is defined as a relatively permanent change in behavior that results from experience.",
    "subject": "psychology",
    "question-type": "medium",
    "question-term": "final"
  },
  {
    "id": "psy-final-medium-93",
    "question": "One of Wilhelm Wundt's contributions to the field of psychology was:",
    "options": [
      "Studying observable behavior",
      "Studying functions of the human conscious mind",
      "Attempting to study human unconscious mind",
      "Establishing the first laboratory of experimental psychology"
    ],
    "correctAnswer": 3,
    "explanation": "Wilhelm Wundt is credited with establishing the first psychological laboratory in 1879, marking the beginning of psychology as a formal scientific discipline.",
    "subject": "psychology",
    "question-type": "medium",
    "question-term": "final"
  },
  {
    "id": "psy-final-medium-94",
    "question": "W/ro Aster usually mistakenly calls her boss Samuel, confusing his name with her husband's name Samson. This kind of forgetting is explained by:",
    "options": [
      "Decay theory",
      "Motivated forgetting",
      "Interference theory",
      "Cue-dependent forgetting"
    ],
    "correctAnswer": 2,
    "explanation": "This is an example of proactive interference, where old information (husband's name) interferes with the retrieval of new information (boss's name).",
    "subject": "psychology",
    "question-type": "medium",
    "question-term": "final"
  },
  {
    "id": "psy-final-medium-95",
    "question": "An elementary school child who ranks first in the entire school cannot learn as best if placed in a university-level psychology course. The factor that most affects the child's learning in this context is:",
    "options": [
      "Motivation",
      "Psychological wellbeing",
      "Background experience",
      "Maturation"
    ],
    "correctAnswer": 3,
    "explanation": "Maturation refers to the biological and psychological growth processes that are necessary for learning to occur. The child is not developmentally ready for university-level material.",
    "subject": "psychology",
    "question-type": "medium",
    "question-term": "final"
  },
  {
    "id": "psy-final-medium-96",
    "question": "Mr. Ermias, since early adulthood, suspects his friends without sufficient basis that they are exploiting or deceiving him. From these symptoms, which personality disorder can be diagnosed?",
    "options": [
      "Schizotypal personality disorder",
      "Borderline personality disorder",
      "Schizoid personality disorder",
      "Paranoid personality disorder"
    ],
    "correctAnswer": 3,
    "explanation": "Paranoid personality disorder is characterized by a pervasive distrust and suspicion of others and their motives.",
    "subject": "psychology",
    "question-type": "medium",
    "question-term": "final"
  },
  {
    "id": "psy-final-medium-97",
    "question": "Punishment can be effective in decreasing the re-occurrence of behavior when it is:",
    "options": [
      "Immediate, consistent, and intense",
      "Immediate, consistent, and mild",
      "Delayed, consistent, and mild",
      "Delayed, inconsistent, and intense"
    ],
    "correctAnswer": 1,
    "explanation": "For punishment to be effective, it should be applied immediately after the behavior, be consistent, and be mild enough to not cause undue fear or hostility.",
    "subject": "psychology",
    "question-type": "medium",
    "question-term": "final"
  },
  {
    "id": "psy-final-medium-98",
    "question": "Henok works in a leather factory with a strong smell but is no longer aware of it. The best explanation is:",
    "options": [
      "Sensory overload",
      "Sensory deprivation",
      "Sensory adaptation",
      "Habituation"
    ],
    "correctAnswer": 2,
    "explanation": "Sensory adaptation is a decrease in sensitivity to a constant stimulus over time, such as a strong smell.",
    "subject": "psychology",
    "question-type": "medium",
    "question-term": "final"
  },
  {
    "id": "psy-final-medium-99",
    "question": "Humanistic psychologists proposed that the main focus of psychology should be on:",
    "options": [
      "Innate potential of individuals",
      "Childhood memories",
      "Unconscious thought processes",
      "Genetic predispositions"
    ],
    "correctAnswer": 0,
    "explanation": "Humanistic psychology emphasizes the unique, positive potential of individuals and the innate drive toward personal growth.",
    "subject": "psychology",
    "question-type": "medium",
    "question-term": "final"
  },
  {
    "id": "psy-final-medium-100",
    "question": "Taye is learning to play violin and continues practicing for enjoyment despite little encouragement. Taye's continued practice is most likely due to:",
    "options": [
      "Positive reinforcement",
      "Intrinsic motivation",
      "Extrinsic motivation",
      "Negative reinforcement"
    ],
    "correctAnswer": 1,
    "explanation": "Intrinsic motivation is the desire to engage in a behavior because it is personally rewarding or enjoyable, as opposed to for an external reward or to avoid punishment.",
    "subject": "psychology",
    "question-type": "medium",
    "question-term": "final"
  },
  {
    "id": "psy-final-medium-101",
    "question": "In improving memory, which student made the best use of 4 hours to study for an exam?",
    "options": [
      "Kiros – four 1-hour sessions, 8 hours apart",
      "Mamo – one 4-hour session the night before",
      "Talile – two 2-hour sessions the day of the exam",
      "Zemelekot – one 4-hour session, 8 hours before the exam"
    ],
    "correctAnswer": 0,
    "explanation": "Spaced practice, or distributing study sessions over time, is a more effective method for long-term memory than massed practice (cramming).",
    "subject": "psychology",
    "question-type": "medium",
    "question-term": "final"
  },
  {
    "id": "psy-final-medium-102",
    "question": "The distinctive feature of the psychodynamic perspective is its emphasis on:",
    "options": [
      "Adaptive mind",
      "Conscious mind",
      "Unconscious mind",
      "Learned behaviors"
    ],
    "correctAnswer": 2,
    "explanation": "The psychodynamic perspective, originating with Freud, places a strong emphasis on the influence of unconscious thoughts, desires, and conflicts on behavior.",
    "subject": "psychology",
    "question-type": "medium",
    "question-term": "final"
  },
  {
    "id": "psy-final-medium-103",
    "question": "If a researcher wants to examine the effect of khat (char) on academic achievement, his choice of research method would most likely be:",
    "options": [
      "Correlational",
      "Survey",
      "Case Study",
      "Experimental"
    ],
    "correctAnswer": 3,
    "explanation": "To determine cause and effect (the effect of khat on academic achievement), an experimental design is the most appropriate research method.",
    "subject": "psychology",
    "question-type": "medium",
    "question-term": "final"
  },
  {
    "id": "psy-final-medium-104",
    "question": "Abnormal behavior is a product of inadequate or inappropriate learning that occurs in the social environment. This assumption is associated with the perspective known as:",
    "options": [
      "Cognitive",
      "Psychoanalytic",
      "Behavioral",
      "Humanistic"
    ],
    "correctAnswer": 2,
    "explanation": "The behavioral perspective views abnormal behavior as learned through classical conditioning, operant conditioning, or social learning.",
    "subject": "psychology",
    "question-type": "medium",
    "question-term": "final"
  },
  {
    "id": "psy-final-medium-105",
    "question": "When people come face to face with a scary wild animal, their heartbeat increases and they begin to run away. The increase in heartbeat and running caused by the emotion of fear refer to the _____ and _____ components of the emotion respectively.",
    "options": [
      "Physiological and behavioral",
      "Behavioral and physiological",
      "Cognitive and physiological",
      "Physiological and cognitive"
    ],
    "correctAnswer": 0,
    "explanation": "An increase in heartbeat is a physiological response, and running away is a behavioral response.",
    "subject": "psychology",
    "question-type": "medium",
    "question-term": "final"
  },
  {
    "id": "psy-final-medium-106",
    "question": "From a psychological perspective, personality refers to:",
    "options": [
      "Physiological predispositions that manifest themselves psychologically",
      "A person's characteristic style of behaving, thinking, and feeling",
      "Past events that have shaped a person's current behavior",
      "Choices people make in response to cultural norms"
    ],
    "correctAnswer": 1,
    "explanation": "Personality is defined as a person's characteristic and relatively stable pattern of thoughts, feelings, and behaviors.",
    "subject": "psychology",
    "question-type": "medium",
    "question-term": "final"
  },
  {
    "id": "psy-final-medium-107",
    "question": "A treatment model of psychological disorder in which therapists address a person's problems as a result of early childhood experiences, including hidden painful experiences kept away from consciousness, is called:",
    "options": [
      "Cognitive",
      "Behavioral",
      "Humanistic",
      "Psychodynamic"
    ],
    "correctAnswer": 3,
    "explanation": "The psychodynamic approach, based on Freudian theory, emphasizes the role of unconscious conflicts and early childhood experiences in shaping personality and causing psychological problems.",
    "subject": "psychology",
    "question-type": "medium",
    "question-term": "final"
  },
  {
    "id": "psy-final-medium-108",
    "question": "Yeshi has an irresistible urge to check her door lock exactly five times before she goes to bed. Although she realizes that her behavior is excessive and irrational, she feels anxious unless she performs this task in the same manner each night. Yeshi's behavior is an example of:",
    "options": [
      "Obsession",
      "Delusion",
      "Compulsion",
      "Hallucination"
    ],
    "correctAnswer": 2,
    "explanation": "A compulsion is a repetitive, ritualistic behavior that a person feels driven to perform in order to reduce anxiety.",
    "subject": "psychology",
    "question-type": "medium",
    "question-term": "final"
  },
  {
    "id": "psy-final-medium-109",
    "question": "A psychology researcher wants to study the detailed lived experience, challenges, and coping mechanisms of Mr. Kebede, who is suffering from lung cancer. Which type of research is most appropriate?",
    "options": [
      "Naturalistic observation",
      "Correlational study",
      "Case study",
      "Survey"
    ],
    "correctAnswer": 2,
    "explanation": "A case study is an in-depth investigation of a single subject or a small group, which is ideal for studying a complex and unique experience like this.",
    "subject": "psychology",
    "question-type": "medium",
    "question-term": "final"
  },
  {
    "id": "psy-final-medium-110",
    "question": "One major difference between a humanist therapist and a behavioral therapist is that:",
    "options": [
      "A behavioral therapist places the entire burden on the client for their own healing",
      "A humanist therapist focuses more on empathy and support for the client",
      "A humanist therapist pays attention to uncovering unconscious conflict",
      "A behavioral therapist can offer medication to the client"
    ],
    "correctAnswer": 1,
    "explanation": "Humanistic therapy, particularly person-centered therapy, is known for its emphasis on empathy, unconditional positive regard, and genuine support for the client's self-actualization.",
    "subject": "psychology",
    "question-type": "medium",
    "question-term": "final"
  },
  {
    "id": "psy-final-medium-111",
    "question": "According to Maslow's hierarchy of needs, which one is wrongly matched?",
    "options": [
      "Physiological need – Need for sex",
      "Security need – Health insurance",
      "Social need – Romantic attachment",
      "Esteem need – Strong concern for democratic values"
    ],
    "correctAnswer": 3,
    "explanation": "Strong concern for democratic values would fall under a person's cognitive or self-actualization needs, not esteem needs, which are about self-worth and recognition.",
    "subject": "psychology",
    "question-type": "medium",
    "question-term": "final"
  },
  {
    "id": "psy-final-medium-112",
    "question": "When her new dormmates asked Tsion to join a party and bring alcoholic drinks, she was worried and attended despite not wanting to go, so as not to disappoint them. Tsion has primarily experienced:",
    "options": [
      "Peer pressure",
      "Indecision",
      "Interpersonal conflict",
      "Social stress"
    ],
    "correctAnswer": 0,
    "explanation": "Peer pressure is the direct or indirect influence on people by their peers to change their attitudes, values, or behaviors to conform to group norms.",
    "subject": "psychology",
    "question-type": "medium",
    "question-term": "final"
  },
  {
    "id": "psy-final-medium-113",
    "question": "Early in the morning, you saw a mentally ill person standing still in a bizarre position. At night, the same person was in the same position. Which type of schizophrenia is this most likely?",
    "options": [
      "Dissociative type",
      "Paranoid type",
      "Atypical type",
      "Catatonic type"
    ],
    "correctAnswer": 3,
    "explanation": "Catatonic schizophrenia is characterized by a marked disturbance in motor behavior, including a lack of movement, stupor, and bizarre postures.",
    "subject": "psychology",
    "question-type": "medium",
    "question-term": "final"
  },
  {
    "id": "psy-final-medium-114",
    "question": "Taye is in love with Melat. When he looks at her, his heartbeat increases and he sweats, then he experiences a pleasant emotion. Which theory of emotion could best explain this case?",
    "options": [
      "Cognitive arousal",
      "James-Lange",
      "Cannon-Bard",
      "Schachter-Singer"
    ],
    "correctAnswer": 1,
    "explanation": "The James-Lange theory states that the physiological arousal (increased heartbeat and sweating) precedes and causes the emotional experience (pleasant emotion).",
    "subject": "psychology",
    "question-type": "medium",
    "question-term": "final"
  },
  {
    "id": "psy-final-medium-115",
    "question": "The theoretical framework of psychology that strongly rejected the emphasis on consciousness and focused strictly on objectively measurable actions is:",
    "options": [
      "Cognitive perspective",
      "Behavioral perspective",
      "Humanistic perspective",
      "Cross-cultural perspective"
    ],
    "correctAnswer": 1,
    "explanation": "Behaviorism, as a school of thought, rejected the study of internal mental processes like consciousness and focused solely on observable behaviors.",
    "subject": "psychology",
    "question-type": "medium",
    "question-term": "final"
  },
  {
    "id": "psy-final-medium-116",
    "question": "When Sara returned from combat in the Ethio-Eritrea war, she began experiencing high anxiety that persisted without improvement. This example illustrates which anxiety-related disorder?",
    "options": [
      "Post-traumatic stress",
      "Obsessive-compulsive",
      "Anxiety",
      "Panic"
    ],
    "correctAnswer": 0,
    "explanation": "Persistent high anxiety after a traumatic event is a key symptom of post-traumatic stress disorder (PTSD).",
    "subject": "psychology",
    "question-type": "medium",
    "question-term": "final"
  },
  {
    "id": "psy-final-medium-117",
    "question": "Which of the following statements explains personality most appropriately?",
    "options": [
      "Value judgments made about a person's ethical behavior",
      "Characteristics that make a person common with others",
      "Unique pattern of behavior that characterizes a person",
      "Behavioral patterns shown at a specific time and situation"
    ],
    "correctAnswer": 2,
    "explanation": "Personality refers to the unique and consistent patterns of behavior, thought, and emotion that characterize an individual.",
    "subject": "psychology",
    "question-type": "medium",
    "question-term": "final"
  },
  {
    "id": "psy-final-medium-118",
    "question": "Samuel, a freshman at Addis Ababa University, has difficulties studying, sleeping, eating, attending classes, and is lonely. He also has a history of Khat addiction and parental issues. What kind of approach is most appropriate to treat Samuel’s difficulties arising from different causes?",
    "options": [
      "Eclectic",
      "Cognitive",
      "Psychodynamic",
      "Behavioral"
    ],
    "correctAnswer": 0,
    "explanation": "An eclectic approach combines techniques from multiple therapeutic orientations (e.g., cognitive, behavioral, psychodynamic) to address the various, complex issues a client presents.",
    "subject": "psychology",
    "question-type": "medium",
    "question-term": "final"
  },
  {
    "id": "psy-final-medium-119",
    "question": "A soldier coping with stressful life events uses relaxation and body massage during rest. Which type of stress coping mechanism is being implemented?",
    "options": [
      "Accept the problem",
      "Change the situation",
      "Alter one’s cognition about the situation",
      "Alter the unpleasant emotional consequence of the stress"
    ],
    "correctAnswer": 3,
    "explanation": "This is an example of emotion-focused coping, which involves managing or altering the emotional response to a stressor, rather than changing the stressor itself.",
    "subject": "psychology",
    "question-type": "medium",
    "question-term": "final"
  },
  // Add more questions here
];
