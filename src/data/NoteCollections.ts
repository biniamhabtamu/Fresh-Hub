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
        <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Introduction to Psychology</title>
    <style>
         body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
            margin: 0;
            padding: 0;
            background-color: #f5f9fc;
        }
        
        .container {
            width: 100%;
            background-color: white;
            padding: 20px;
            box-sizing: border-box;
        }
        
        h1 {
            color: #2c3e50;
            text-align: center;
            border-bottom: 2px solid #3498db;
            padding-bottom: 10px;
            margin-bottom: 30px;
            font-size: 28px;
        }
        
        h2 {
            color: #2980b9;
            margin-top: 30px;
            border-left: 5px solid #3498db;
            padding-left: 15px;
            font-size: 24px;
        }
        
        h3 {
            color: #16a085;
            margin-top: 25px;
            font-size: 20px;
        }
        
        .note-box {
            background-color: #e8f4fc;
            border-left: 4px solid #3498db;
            padding: 15px;
            margin: 20px 0;
            border-radius: 0 5px 5px 0;
        }
        
        .amharic {
            font-family: 'Nyala', 'Abyssinica SIL', sans-serif;
            background-color: #f0f7f4;
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
            border-left: 4px solid #27ae60;
        }
        
        .theme-box {
            background-color: #f9f9f9;
            border: 1px solid #ddd;
            border-radius: 8px;
            padding: 15px;
            margin: 15px 0;
        }
        
        .theme-title {
            font-weight: bold;
            font-size: 1.1em;
            color: #e74c3c;
            margin-bottom: 10px;
        }
        
        .emoji {
            font-size: 1.2em;
            margin-right: 5px;
        }
        
        .perspective {
            background-color: #f5f5f5;
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
            border-left: 4px solid #9b59b6;
        }
        
        .perspective-title {
            font-weight: bold;
            color: #8e44ad;
        }
        
        .research-method {
            background-color: #eaf2f8;
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
            border-left: 4px solid #3498db;
        }
        
        .method-title {
            font-weight: bold;
            color: #2980b9;
        }
        
        ul {
            padding-left: 20px;
        }
        
        li {
            margin-bottom: 8px;
        }
        
        .correlation {
            display: flex;
            align-items: center;
            margin: 10px 0;
        }
        
        .correlation-emoji {
            font-size: 1.5em;
            margin-right: 10px;
        }
        
        .variable-group {
            display: flex;
            margin: 15px 0;
            gap: 15px;
            flex-wrap: wrap;
        }
        
        .variable-box {
            flex: 1;
            background-color: #e8f8f5;
            padding: 12px;
            border-radius: 5px;
            border: 1px solid #2ecc71;
            min-width: 250px;
        }
        
        .variable-title {
            font-weight: bold;
            color: #27ae60;
            margin-bottom: 5px;
        }

        /* Mobile-specific adjustments */
        @media (max-width: 768px) {
            .container {
                padding: 15px;
            }
            
            h1 {
                font-size: 24px;
            }
            
            h2 {
                font-size: 20px;
            }
            
            h3 {
                font-size: 18px;
            }
            
            .variable-box {
                min-width: 100%;
            }
            
            .amharic, .theme-box, .perspective, .research-method {
                padding: 12px;
            }
        }

        @media (max-width: 480px) {
            .container {
                padding: 10px;
            }
            
            h1 {
                font-size: 22px;
                padding-bottom: 8px;
            }
            
            h2, h3 {
                font-size: 18px;
            }
            
            p, li {
                font-size: 16px;
            }
            
            .theme-title, .perspective-title, .method-title {
                font-size: 1em;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>What is Psychology? <span class="emoji">🤔</span></h1>
        <p>Psychology is a science that studies human behavior and mental processes. The word itself comes from two Greek words: "psyche" (meaning soul or mind) and "logos" (meaning study). This isn't just about common sense; it uses a structured scientific method to understand why we think, feel, and act the way we do.</p>
        
        <p><strong>Behavior:</strong> These are the actions we can see, like talking, running, or a facial expression. <span class="emoji">👀</span></p>
        
        <p><strong>Mental Processes:</strong> These are the internal experiences we can't see, such as thinking, feeling, or remembering. <span class="emoji">🧠</span></p>
        
        <div class="amharic">
            <h3>ሳይኮሎጂ ምንድን ነው?</h3>
            <p>ሳይኮሎጂ የሰውን ባህሪ እና የአዕምሮ ሂደቶችን በሳይንሳዊ መንገድ የሚያጠና የትምህርት ዘርፍ ነው። ቃሉ ከሁለት የግሪክ ቃላት የመጣ ነው፡- "psyche" (ነፍስ ወይም አዕምሮ ማለት ነው) እና "logos" (ጥናት ማለት ነው)። ሳይኮሎጂ የተለመዱ አመለካከቶችን ብቻ ሳይሆን፣ አንድ ሰው ለምን እንዲህ እንደሚያደርግ ለመረዳት ሳይንሳዊ ዘዴን ይጠቀማል።</p>
            
            <p><strong>ባህሪ:</strong> እነዚህ በአይን የሚታዩ ድርጊቶች ናቸው፣ ለምሳሌ ማውራት፣ መሮጥ ወይም የፊት ገጽታዎች። <span class="emoji">👀</span></p>
            
            <p><strong>የአዕምሮ ሂደቶች:</strong> እነዚህ በቀጥታ የማይታዩት እንደ ማሰብ፣ መሰማት እና ማስታወስ ያሉ የአዕምሮ ውስጣዊ እንቅስቃሴዎች ናቸው። <span class="emoji">🧠</span></p>
        </div>
        
        <h2>The Four Goals of Psychology <span class="emoji">🎯</span></h2>
        <p>Psychology has four main goals, which you can remember with the acronym D.E.P.C. (Description, Explanation, Prediction, Control). Think of them as the steps psychologists take to solve a puzzle.</p>
        
        <div class="theme-box">
            <div class="theme-title"><span class="emoji">📝</span> Description</div>
            <p>The first step is to observe and describe a behavior. You ask, "What is happening?" For example, a teacher notices a student is failing and seems to have a negative attitude.</p>
        </div>
        
        <div class="theme-box">
            <div class="theme-title"><span class="emoji">🗣️</span> Explanation</div>
            <p>Next, you try to figure out why it's happening. This involves forming a theory. To understand the struggling student, a psychologist might talk to their family or friends.</p>
        </div>
        
        <div class="theme-box">
            <div class="theme-title"><span class="emoji">🔮</span> Prediction</div>
            <p>Based on your findings, you try to predict what might happen in the future. A psychologist might predict that if the student doesn't get help, their academic performance won't improve.</p>
        </div>
        
        <div class="theme-box">
            <div class="theme-title"><span class="emoji">🚀</span> Control</div>
            <p>The final goal is to change a behavior from undesirable to desirable. This is where solutions come in. A psychologist could introduce learning strategies to help the student succeed.</p>
        </div>
        
        <div class="amharic">
            <h3>የሳይኮሎጂ አራት ዋና ዋና ግቦች <span class="emoji">🎯</span></h3>
            <p>ልክ እንደ ማንኛውም ሳይንስ፣ ሳይኮሎጂ አራት ዋና ዋና ግቦች አሉት፣ በአህጽሮት D.E.P.C. (መግለጽ፣ ማስረዳት፣ መተንበይ፣ መቆጣጠር) በሚለው ማስታወስ ይቻላል። እነዚህን ግቦች አንድን እንቆቅልሽ ለመፍታት ሳይኮሎጂስቶች የሚከተሏቸው ደረጃዎች አድርጎ ማሰብ ይቻላል።</p>
            
            <p><strong>መግለጽ (Description):</strong> የመጀመሪያው እርምጃ አንድን ባህሪ መመልከት እና መግለጽ ነው። "ምንድን ነው እየሆነ ያለው?" ብሎ መጠየቅ። ለምሳሌ፣ አንድ አስተማሪ ተማሪው እየወደቀ እና መጥፎ አመለካከት እንዳለው ያስተውላል። <span class="emoji">📝</span></p>
            
            <p><strong>ማስረዳት (Explanation):</strong> ቀጥሎ ደግሞ፣ "ለምን እየሆነ ነው?" የሚለውን ምክንያት ለማግኘት መሞከር። ለዚህም የተለያዩ ንድፈ ሐሳቦች ይፈጠራሉ። ለተቸገረው ተማሪ ምክንያት ለማግኘት፣ የሥነ ልቦና ባለሙያ ከቤተሰቡ ወይም ከጓደኞቹ ጋር ሊነጋገር ይችላል። <span class="emoji">🗣️</span></p>
            
            <p><strong>መተንበይ (Prediction):</strong> በተገኙት መረጃዎች ላይ ተመስርቶ፣ ወደፊት ምን ሊከሰት እንደሚችል መተንበይ። የሥነ ልቦና ባለሙያው ተማሪው እርዳታ ካላገኘ የትምህርት አፈጻጸሙ እንደማይሻሻል ሊተነብይ ይችላል። <span class="emoji">🔮</span></p>
            
            <p><strong>መቆጣጠር (Control):</strong> የመጨረሻው ግብ አንድን የማይፈለግ ባህሪ ወደ ተፈለገው መለወጥ ነው። ለምሳሌ፣ የሥነ ልቦና ባለሙያው ተማሪው እንዲሳካ የሚረዱ የመማሪያ ስልቶችን ሊያስተምረው ይችላል። <span class="emoji">🚀</span></p>
        </div>
        
        <h2>The Roots of Psychology <span class="emoji">🏛️</span></h2>
        <p>Psychology as a formal science began in 1879 in Germany, when Wilhelm Wundt opened the first psychological lab. He is known as the "father of modern psychology." The early years were defined by different schools of thought, each with a unique view on what psychology should study.</p>
        
        <h3>Early Schools of Psychology <span class="emoji">🏫</span></h3>
        
        <div class="perspective">
            <div class="perspective-title"><span class="emoji">🤔</span> Structuralism</div>
            <p>Led by Edward Titchener, this school wanted to break down the mind into its basic parts: sensations, images, and feelings. They used a method called introspection (looking within) to study these elements.</p>
        </div>
        
        <div class="perspective">
            <div class="perspective-title"><span class="emoji">🏃‍♂️</span> Functionalism</div>
            <p>Founded by William James, this perspective focused on the function of the mind—how it helps us adapt and survive in the real world. They were more interested in the practical uses of our thoughts.</p>
        </div>
        
        <div class="perspective">
            <div class="perspective-title"><span class="emoji">🖼️</span> Gestalt Psychology</div>
            <p>This school believed that "the whole is greater than the sum of its parts." They argued that the mind should be studied as a complete pattern, not as a collection of separate elements.</p>
        </div>
        
        <div class="perspective">
            <div class="perspective-title"><span class="emoji">🐾</span> Behaviorism</div>
            <p>John B. Watson and B.F. Skinner focused only on observable, measurable behaviors. They believed all behavior is learned from our environment through rewards and punishments, ignoring internal mental processes.</p>
        </div>
        
        <div class="perspective">
            <div class="perspective-title"><span class="emoji">❄️</span> Psychoanalysis</div>
            <p>Sigmund Freud's perspective emphasized the power of the unconscious mind. He believed our hidden desires and childhood conflicts influence our behavior and can be uncovered through methods like dream analysis.</p>
        </div>
        
        <div class="amharic">
            <h3>የሳይኮሎጂ መነሻ <span class="emoji">🏛️</span></h3>
            <p>ሳይኮሎጂ እንደ መደበኛ ሳይንስ የጀመረው በ1879 ጀርመን ውስጥ ዊልሄልም ውንድት የመጀመሪያውን የሥነ ልቦና ላብራቶሪ ሲከፍት ነው። እርሱም "የዘመናዊ ሳይኮሎጂ አባት" በመባል ይታወቃል። የጥንቶቹ ዓመታት ዋና ትኩረታቸው ምን መሆን አለበት በሚለው ላይ በሚከራከሩ የተለያዩ የአስተሳሰብ ትምህርት ቤቶች ተለይተዋል።</p>
            
            <h3>የጥንት የሳይኮሎጂ አስተሳሰቦች <span class="emoji">🏫</span></h3>
            
            <p><strong>ስትራክቸራሊዝም:</strong> በኤድዋርድ ቲችነር የሚመራው ይህ ትምህርት ቤት አዕምሮን ወደ መሰረታዊ ክፍሎቹ፣ ስሜቶች፣ ምስሎች እና ስሜት ለመከፋፈል ይፈልግ ነበር። ይህንንም ለማጥናት ኢንትሮስፔክሽን (ወደ ውስጥ መመልከት) የሚባል ዘዴ ይጠቀሙ ነበር። <span class="emoji">🤔</span></p>
            
            <p><strong>ፈንክሽናሊዝም:</strong> በዊሊያም ጄምስ የተመሰረተው ይህ አመለካከት የአዕምሮን ተግባር ላይ ያተኩራል—በእውነተኛው ዓለም እንድንላመድ እና እንድንኖር እንዴት እንደሚረዳን ይመለከታል። <span class="emoji">🏃‍♂️</span></p>
            
            <p><strong>ጌሽታልት ሳይኮሎጂ:</strong> ይህ አስተሳሰብ "አጠቃላይ ነገሩ ከክፍሎቹ ድምር ይበልጣል" በሚለው መርህ ላይ የተመሰረተ ነው። አዕምሮ እንደ ተናጠል ክፍሎች ስብስብ ሳይሆን እንደ አንድ ሙሉ ውቅር መታየት እንዳለበት ያምኑ ነበር። <span class="emoji">🖼️</span></p>
            
            <p><strong>ቢሄቪዮሪዝም:</strong> በጆን ቢ ዋትሰን የሚመራው ይህ አስተሳሰብ በሚታዩ እና በሚለኩ ባህሪዎች ላይ ብቻ ያተኩራል። ሁሉም ባህሪዎች ከአካባቢያችን የምንማራቸው ምላሾች ናቸው ብለው ያምናሉ እና የአዕምሮ ውስጣዊ ሂደቶችን ችላ ይላሉ። <span class="emoji">🐾</span></p>
            
            <p><strong>ሳይኮአናሊሲስ:</strong> በሲግመንድ ፍሮይድ የተመሰረተው ይህ አመለካከት የማያውቀው አዕምሮ (unconscious mind) በባህሪያችን ላይ ትልቅ ሚና እንዳለው ያስተምራል። የተደበቁ ፍላጎቶቻችን እና የልጅነት ግጭቶቻችን ባህሪያችንን እንደሚቀርጹ ያምናል። <span class="emoji">❄️</span></p>
        </div>
        
        <h2>Modern Perspectives in Psychology <span class="emoji">🧠</span></h2>
        <p>Today, psychologists use multiple viewpoints, or perspectives, to understand behavior. They are not entirely new; many grew from the early schools of thought.</p>
        
        <div class="perspective">
            <div class="perspective-title"><span class="emoji">🌀</span> Psychodynamic</div>
            <p>Coming from Freud's ideas, this perspective focuses on the unconscious mind and how hidden desires and childhood conflicts influence our daily behavior.</p>
        </div>
        
        <div class="perspective">
            <div class="perspective-title"><span class="emoji">🚶‍♀️</span> Behavioral</div>
            <p>This view emphasizes the role of the environment and how learning through rewards and punishments shapes our actions. It treats the mind as a "black box," focusing on what goes in and what comes out.</p>
        </div>
        
        <div class="perspective">
            <div class="perspective-title"><span class="emoji">💖</span> Humanistic</div>
            <p>This perspective highlights our unique human qualities, focusing on free will and the goal of reaching our full potential, or self-actualization.</p>
        </div>
        
        <div class="perspective">
            <div class="perspective-title"><span class="emoji">🧠</span> Cognitive</div>
            <p>This perspective is all about our internal mental processes like thinking, memory, and problem-solving. It shows how our thoughts directly affect our actions and feelings.</p>
        </div>
        
        <div class="perspective">
            <div class="perspective-title"><span class="emoji">🧬</span> Biological</div>
            <p>This view explores how our brain, genes, and body chemistry influence our behavior, thoughts, and emotions.</p>
        </div>
        
        <div class="perspective">
            <div class="perspective-title"><span class="emoji">🌍</span> Sociocultural</div>
            <p>This perspective looks at how social and cultural forces—like our family, friends, and community—shape our behavior and thoughts.</p>
        </div>
        
        <div class="amharic">
            <h3>ዘመናዊ የሳይኮሎጂ አመለካከቶች <span class="emoji">🧠</span></h3>
            <p>ዛሬ የሥነ ልቦና ባለሙያዎች ባህሪን ለመረዳት ብዙ አመለካከቶችን ይጠቀማሉ። እነዚህ አመለካከቶች ከቀደሙት የአስተሳሰብ ትምህርት ቤቶች የወጡ ናቸው።</p>
            
            <p><strong>ሳይኮዳይናሚክስ:</strong> ከፍሮይድ ሐሳቦች የወጣ ሲሆን፣ በማያውቀው አዕምሮ እና የተደበቁ ፍላጎቶች እንዲሁም የልጅነት ግጭቶች በዕለት ተዕለት ባህሪያችን ላይ የሚያሳድሩትን ተጽዕኖ ይመለከታል። <span class="emoji">🌀</span></p>
            
            <p><strong>ባህሪያዊ:</strong> ይህ አመለካከት የአካባቢን እና በሽልማቶችና ቅጣቶች አማካኝነት የሚፈጠረውን የመማር ሂደት ላይ ያተኩራል። አዕምሮን እንደ "ጥቁር ሣጥን" በመመልከት፣ በውስጥ ያለውን ሂደት ችላ ይላል። <span class="emoji">🚶‍♀️</span></p>
            
            <p><strong>ሰብአዊነት (Humanistic):</strong> ይህ አመለካከት የሰውን ልጅ ልዩ ባህሪያት ላይ በማተኮር፣ ነጻ ፈቃድን እና ሙሉ አቅማችንን የመድረስ ፍላጎት ላይ ያተኩራል። <span class="emoji">💖</span></p>
            
            <p><strong>ኮግኒቲቭ (Cognitive):</strong> ይህ አመለካከት በአዕምሯችን ውስጥ በሚከናወኑ ነገሮች ላይ ነው፣ እንደ ማሰብ፣ ማስታወስ እና ችግር መፍታት። ሀሳባችን ድርጊቶቻችንን እና ስሜቶቻችንን እንዴት እንደሚነካ ያሳያል። <span class="emoji">🧠</span></p>
            
            <p><strong>ባዮሎጂያዊ:</strong> ይህ አመለካከት አዕምሯችን፣ ጂኖቻችን እና የሰውነት ኬሚካላዊ ምላሾች በባህሪያችን፣ በሀሳቦቻችን እና በስሜቶቻችን ላይ እንዴት ተጽዕኖ እንደሚያሳድሩ ይመረምራል። <span class="emoji">🧬</span></p>
            
            <p><strong>ማህበራዊ-ባህላዊ (Sociocultural):</strong> ይህ አመለካከት ማህበራዊ እና ባህላዊ ኃይሎች—እንደ ቤተሰብ፣ ጓደኞች እና ማህበረሰብ—ባህሪያችንን እና አስተሳሰባችንን እንዴት እንደሚቀርጹ ይመለከታል። <span class="emoji">🌍</span></p>
        </div>
        
        <h2>Psychology's Subfields <span class="emoji">🔬</span></h2>
        <p>Psychology is a wide field with many specializations. Here are some of the main branches:</p>
        
        <div class="variable-group">
            <div class="variable-box">
                <div class="variable-title"><span class="emoji">👶➡️👴</span> Developmental Psychology</div>
                <p>Studies how people change physically and mentally throughout their life.</p>
            </div>
            
            <div class="variable-box">
                <div class="variable-title"><span class="emoji">🛋️</span> Clinical Psychology</div>
                <p>Focuses on diagnosing and treating serious psychological disorders.</p>
            </div>
        </div>
        
        <div class="variable-group">
            <div class="variable-box">
                <div class="variable-title"><span class="emoji">🗣️</span> Counseling Psychology</div>
                <p>Helps individuals with less severe life problems.</p>
            </div>
            
            <div class="variable-box">
                <div class="variable-title"><span class="emoji">🤝</span> Social Psychology</div>
                <p>Examines how our relationships and social interactions affect our behavior.</p>
            </div>
        </div>
        
        <div class="variable-group">
            <div class="variable-box">
                <div class="variable-title"><span class="emoji">🧑‍🏫</span> Educational Psychology</div>
                <p>Applies psychological theories to improve teaching and the learning process.</p>
            </div>
            
            <div class="variable-box">
                <div class="variable-title"><span class="emoji">💼</span> Industrial Psychology</div>
                <p>Uses psychology to improve productivity and well-being in the workplace.</p>
            </div>
        </div>
        
        <div class="amharic">
            <h3>የሥነ ልቦና ጥናት ዘርፎች <span class="emoji">🔬</span></h3>
            <p>የሥነ ልቦና ጥናት ብዙ ልዩ ልዩ ዘርፎች ያሉት ሰፊ መስክ ነው። ዋና ዋናዎቹም የሚከተሉት ናቸው።</p>
            
            <p><strong>የዕድገት ሳይኮሎጂ:</strong> ሰዎች በህይወት ዘመናቸው በአካል እና በአዕምሮ እንዴት እንደሚለወጡ ያጠናል:: <span class="emoji">👶➡️👴</span></p>
            
            <p><strong>ክሊኒካል ሳይኮሎጂ:</strong> ከባድ የሆኑ የስነ-ልቦና ችግሮችን ለመመርመር እና ለማከም የሚሰራ ዘርፍ ነው። <span class="emoji">🛋️</span></p>
            
            <p><strong>ካውንስሊንግ ሳይኮሎጂ:</strong> ብዙም ከባድ ያልሆኑ ችግሮች ያሉባቸውን ሰዎች ለመርዳት ያተኩራል። <span class="emoji">🗣️</span></p>
            
            <p><strong>ማህበራዊ ሳይኮሎጂ:</strong> ግንኙነቶቻችን እና ማህበራዊ መስተጋብሮቻችን በባህሪያችን ላይ እንዴት ተጽዕኖ እንደሚያሳድሩ ይመረምራል። <span class="emoji">🤝</span></p>
            
            <p><strong>የትምህርት ሳይኮሎጂ:</strong> የማስተማር እና የመማር ሂደቱን ለማሻሻል የስነ-ልቦና ንድፈ ሐሳቦችን ይተገብራል። <span class="emoji">🧑‍🏫</span></p>
            
            <p><strong>ኢንዱስትሪያል ሳይኮሎጂ:</strong> በሥራ ቦታ ምርታማነትን እና የሰራተኞችን ደህንነት ለማሻሻል የስነ-ልቦና መርሆችን ይጠቀማል። <span class="emoji">💼</span></p>
        </div>
        
        <h2>Research Methods in Psychology <span class="emoji">🔬</span></h2>
        <p>Psychology uses a scientific process to study behavior. This helps researchers reduce bias and errors. Here are the main methods.</p>
        
        <div class="research-method">
            <div class="method-title"><span class="emoji">📖</span> 1. Descriptive Research</div>
            <p>This method simply describes what the researcher observes.</p>
            
            <p><strong>Naturalistic Observation:</strong> Watching people in their natural environment. The downside is that people might act differently if they know they're being watched. <span class="emoji">👀</span></p>
            
            <p><strong>Case Study:</strong> A very detailed study of one individual. It gives a lot of information, but the findings may not apply to other people. <span class="emoji">🕵️</span></p>
            
            <p><strong>Survey:</strong> A quick way to collect data from a large group of people using questionnaires. A key challenge is ensuring the sample represents the whole population. <span class="emoji">📝</span></p>
        </div>
        
        <div class="research-method">
            <div class="method-title"><span class="emoji">🤝</span> 2. Correlational Research</div>
            <p>This method measures the relationship between two or more variables (anything that can change). A correlation shows if variables are connected but doesn't prove cause and effect.</p>
            
            <div class="correlation">
                <span class="correlation-emoji">⬆️⬆️</span>
                <span><strong>Positive Correlation (+):</strong> When one variable increases, the other also increases. For example, as height increases, weight tends to increase.</span>
            </div>
            
            <div class="correlation">
                <span class="correlation-emoji">⬆️⬇️</span>
                <span><strong>Negative Correlation (-):</strong> When one variable increases, the other decreases. For example, as time spent studying increases, test anxiety may decrease.</span>
            </div>
        </div>
        
        <div class="research-method">
            <div class="method-title"><span class="emoji">🧪</span> 3. Experimental Research</div>
            <p>This is the only method that can determine a cause and effect relationship. The researcher manipulates one variable and measures its effect on another.</p>
            
            <div class="variable-group">
                <div class="variable-box">
                    <div class="variable-title">Independent Variable</div>
                    <p>The factor the researcher manipulates (e.g., class size). <span class="emoji">🧑‍🏫</span></p>
                </div>
                
                <div class="variable-box">
                    <div class="variable-title">Dependent Variable</div>
                    <p>The factor that is measured and may change (e.g., student performance). <span class="emoji">📈</span></p>
                </div>
            </div>
            
            <div class="variable-group">
                <div class="variable-box">
                    <div class="variable-title">Experimental Group</div>
                    <p>The group that experiences the manipulated factor. <span class="emoji">👥</span></p>
                </div>
                
                <div class="variable-box">
                    <div class="variable-title">Control Group</div>
                    <p>The comparison group that does not experience the manipulated factor. <span class="emoji">👥</span></p>
                </div>
            </div>
        </div>
        
        <div class="amharic">
            <h3>በሳይኮሎጂ ውስጥ የምርምር ዘዴዎች <span class="emoji">🔬</span></h3>
            <p>ሳይኮሎጂ ባህሪን ለማጥናት ሳይንሳዊ ሂደቶችን ይጠቀማል። ይህ ተመራማሪዎች አድሎአቸውን እንዲቀንሱ ይረዳቸዋል። ዋና ዋናዎቹ ዘዴዎችም የሚከተሉት ናቸው።</p>
            
            <p><strong>1. ገላጭ ምርምር (Descriptive Research):</strong> ይህ ዘዴ ተመራማሪው የሚያየውን በቀላሉ የሚገልጽ ነው።</p>
            
            <p><strong>የተፈጥሮአዊ ምልከታ:</strong> ሰዎችን በተፈጥሮአዊ አካባቢያቸው መመልከት። ጉዳቱ ግን ሰዎች እየተመለከቷቸው እንደሆነ ካወቁ እንደተለመደው ባህሪ ላያሳዩ ይችላሉ። <span class="emoji">👀</span></p>
            
            <p><strong>የጉዳይ ጥናት:</strong> አንድን ግለሰብ በጥልቀት ማጥናት። ብዙ ዝርዝር መረጃ ቢሰጥም፣ ውጤቱ ለሌሎች ሰዎች ላይተገበር ይችላል። <span class="emoji">🕵️</span></p>
            
            <p><strong>የዳሰሳ ጥናት:</strong> ብዙ ሰዎች ላይ መረጃ በፍጥነት ለመሰብሰብ የሚያገለግል ዘዴ ነው። ትክክለኛ ውጤት ለማግኘት የጥናቱ ናሙና በደንብ መመረጥ አለበት። <span class="emoji">📝</span></p>
            
            <p><strong>2. ተዛማጅነት ምርምር (Correlational Research):</strong> ይህ ዘዴ በሁለት ወይም ከዚያ በላይ ተለዋዋጮች መካከል ያለውን ግንኙነት ይለካል። ግንኙነት መኖሩን ያሳያል እንጂ ምክንያት እና ውጤት መሆኑን አያረጋግጥም።</p>
            
            <p><strong>አዎንታዊ ግንኙነት (+):</strong> አንድ ተለዋዋጭ ሲጨምር ሌላኛውም ይጨምራል። <span class="emoji">⬆️⬆️</span></p>
            
            <p><strong>አሉታዊ ግንኙነት (-):</strong> አንድ ተለዋዋጭ ሲጨምር ሌላኛው ይቀንሳል። <span class="emoji">⬆️⬇️</span></p>
            
            <p><strong>3. የሙከራ ምርምር (Experimental Research):</strong> ይህ ዘዴ ምክንያት እና ውጤት ግንኙነትን ለማረጋገጥ ብቸኛው ዘዴ ነው። ተመራማሪው አንድን ተለዋዋጭ ይቆጣጠርና በሌላኛው ላይ ያለውን ተጽዕኖ ይለካል።</p>
            
            <p><strong>ገለልተኛ ተለዋዋጭ:</strong> ተመራማሪው የሚቆጣጠረው ነገር (ለምሳሌ፣ የክፍል መጠን)። <span class="emoji">🧑‍🏫</span></p>
            
            <p><strong>ጥገኛ ተለዋዋጭ:</strong> የሚለካው እና ሊለወጥ የሚችለው ውጤት (ለምሳሌ፣ የተማሪ ውጤት)። <span class="emoji">📈</span></p>
            
            <p><strong>የሙከራ ቡድን:</strong> የተቆጣጠረውን ነገር የሚያገኝ ቡድን። <span class="emoji">👥</span></p>
            
            <p><strong>የቁጥጥር ቡድን:</strong> ለማነፃፀር የሚያገለግል እና የተቆጣጠረውን ነገር የማያገኝ ቡድን። <span class="emoji">👥</span></p>
        </div>
    </div>
</body>
</html>
      `
    },
   {
  id: 'Chapter2',
  title: 'Chapter 2: Sensation and Perception',
  content: `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Chapter 2: Sensation and Perception</title>
      <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap" rel="stylesheet">
      <style>
        body {
          font-family: 'Lato', sans-serif;
          line-height: 1.7;
          color: #4a4a4a;
          margin: 0;
          padding: 20px;
          background-color: #f0f2f5;
        }
        
        .content-section {
          background-color: #ffffff;
          padding: 25px;
          margin-bottom: 20px;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        h2 {
          color: #0d47a1;
          border-bottom: 2px solid #0d47a1;
          padding-bottom: 8px;
          margin-top: 0;
          font-size: 2em;
          font-weight: 700;
        }
        
        h3 {
          color: #2e7d32;
          font-size: 1.5em;
          margin-top: 20px;
          margin-bottom: 10px;
        }
        
        p {
          margin-bottom: 15px;
        }
        
        strong {
          color: #c62828;
          font-weight: 700;
        }

        ul, ol {
          padding-left: 20px;
          margin-bottom: 15px;
        }
        
        li {
          margin-bottom: 8px;
        }

        @media (max-width: 600px) {
          body {
            padding: 10px;
          }
          .content-section {
            padding: 15px;
          }
          h2 {
            font-size: 1.7em;
          }
          h3 {
            font-size: 1.3em;
          }
        }
      </style>
    </head>
    <body>
      <div class="content-section">
        <h2>Sensation vs. Perception</h2>
        <p><strong>Sensation:</strong> This is the process through which sensory receptors (e.g., eyes, ears, skin) detect stimuli from the environment and send this information to the brain. Sensation is about detecting raw data such as colors, sounds, or tastes.</p>
        <p><strong>Perception:</strong> This is the process where the brain organizes and interprets sensory information to create meaningful experiences. Perception involves recognizing patterns, shapes, and context, turning raw sensory data into coherent experiences.</p>
        <h3>Examples:</h3>
        <ul>
          <li>Seeing black marks on a page is a sensory experience. Recognizing those marks as letters and words is a perceptual process.</li>
          <li>In a real-life case, a patient with prosopagnosia could see faces but could not perceive them as recognizable faces.</li>
        </ul>
      </div>

      <div class="content-section">
        <h2>Sensory Laws</h2>
        <h3>1. Sensory Thresholds:</h3>
        <p><strong>Absolute Threshold:</strong> The minimum intensity of a stimulus required for it to be detected 50% of the time. For instance, the minimum amount of sugar in coffee that a person can taste.</p>
        <p><strong>Difference Threshold (<strong style="color: #c62828;">Just Noticeable Difference, jnd</strong>):</strong> The smallest change in stimulus intensity that can be detected. According to <strong>Weber's Law</strong>, the jnd is a constant proportion of the original stimulus. For example, you can detect a change in weight only if it exceeds a certain percentage of the original weight.</p>
        <h3>2. Sensory Adaptation:</h3>
        <p><strong>Sensory Adaptation:</strong> This occurs when the sensory system becomes less responsive to constant stimuli over time. For instance, you might stop noticing the smell of garbage after being in a room for a while.</p>
      </div>

      <div class="content-section">
        <h2>Perception and the Meaning-Making Process</h2>
        <p>Perception is the process through which we interpret and make sense of the sensory information we receive. It is not just a passive reception of stimuli but an active process of creating meaning from these stimuli.</p>
        <h3>Selectivity of Perception: Attention</h3>
        <p><strong>Concept:</strong> Attention is the cognitive process that allows us to focus on specific stimuli while ignoring others. Our sensory organs are constantly bombarded with information, but only a fraction of this reaches our conscious awareness.</p>
        <p><strong>Focus and Margin:</strong> Our perceptual field can be divided into "focus" (what we pay clear attention to) and "margin" (background stimuli that are less clear). For example, at a football game, while the ball carrier is the focus of attention, background stimuli like the cold or crowd noise are in the margin.</p>
        <p><strong>Shifting Attention:</strong> Attention is not static; it shifts based on relevance and need.</p>
        <h3>Factors Determining Attention</h3>
        <p><strong>External Factors:</strong> These include characteristics of stimuli such as size, intensity, repetition, novelty, and movement. For instance, bright colors and loud noises are more likely to capture attention. Movement is particularly attention-grabbing because it may signal a potential threat.</p>
        <p><strong>Internal Factors:</strong> Psychological states such as expectancy (set) and motives affect attention. Expectancy refers to being "primed" for certain stimuli based on prior experiences or needs. Motives or needs influence what stimuli we focus on, such as focusing on food if you’re hungry.</p>
      </div>

      <div class="content-section">
        <h2>Organization in Form Perception</h2>
        <p>When observing multiple objects, we naturally perceive them as organized into coherent patterns or groups. This tendency is central to <strong>Gestalt psychology</strong>, which asserts that "the whole is more than the sum of its parts."</p>
        <h3>Key Principles of Perceptual Organization:</h3>
        <ul>
          <li><strong>Proximity:</strong> Objects close to each other in space or time are perceived as a group.</li>
          <li><strong>Similarity:</strong> Items that resemble each other in color, shape, or size tend to be grouped together.</li>
          <li><strong>Symmetry (Good Figure):</strong> We prefer to perceive objects in a balanced or symmetrical form.</li>
          <li><strong>Continuation:</strong> We perceive lines or shapes as continuing smoothly in their original direction.</li>
          <li><strong>Closure:</strong> Our perception tends to fill in gaps to create a complete figure.</li>
        </ul>
      </div>

      <div class="content-section">
        <h2>Depth Perception</h2>
        <p>Depth perception allows us to judge the distance of objects in a three-dimensional space, despite the two-dimensional nature of retinal images.</p>
        <h3>Binocular Cues:</h3>
        <ul>
          <li><strong>Retinal Disparity:</strong> The difference in images between the two eyes provides depth information.</li>
          <li><strong>Convergence:</strong> The inward movement of the eyes to focus on closer objects.</li>
        </ul>
        <h3>Monocular Cues:</h3>
        <ul>
          <li><strong>Accommodation:</strong> The eye's lens changes shape to focus on objects.</li>
          <li><strong>Motion Parallax:</strong> Closer objects move faster across your field of vision compared to distant objects.</li>
        </ul>
        <h3>Pictorial Cues:</h3>
        <ul>
          <li><strong>Interposition:</strong> Objects that overlap others are perceived as closer.</li>
          <li><strong>Relative Size:</strong> Smaller images are perceived as farther away if objects are of the same size.</li>
          <li><strong>Linear Perspective:</strong> Parallel lines appear to converge in the distance.</li>
          <li><strong>Elevation:</strong> Objects higher in the visual field are perceived as farther away.</li>
          <li><strong>Shading:</strong> Areas in shadow appear farther away than those in light.</li>
          <li><strong>Texture Gradient:</strong> Objects appear less detailed as they get farther away.</li>
        </ul>
      </div>
      
      <div class="content-section">
        <h2>Perceptual Constancies</h2>
        <p>Perceptual constancies ensure that objects are perceived as stable despite changes in sensory input:</p>
        <ul>
          <li><strong>Size Constancy:</strong> Objects are perceived as having a constant size despite changes in the retinal image due to distance.</li>
          <li><strong>Shape Constancy:</strong> Objects are perceived as having a consistent shape despite changes in the angle of view.</li>
          <li><strong>Brightness Constancy:</strong> Objects maintain their perceived brightness regardless of changes in lighting.</li>
        </ul>
      </div>

      <div class="content-section">
        <h2>Perceptual Illusions</h2>
        <p>Perceptual illusions reveal how our perceptual processes can lead to misinterpretations:</p>
        <ul>
          <li><strong>Size Constancy Illusions:</strong> For instance, the moon appears larger on the horizon than overhead.</li>
          <li><strong>Müller-Lyer Illusion:</strong> Lines of equal length appear different due to the context of arrows at their ends.</li>
        </ul>
      </div>

      <div class="content-section">
        <h2>Extra Sensory Perception (ESP)</h2>
        <p>ESP refers to the ability to perceive information without traditional sensory input. While some claim to experience ESP, scientific consensus generally regards it as lacking empirical support. Psychologists and scientists remain skeptical due to the lack of reproducible evidence and controlled studies validating ESP phenomena.</p>
      </div>

      <div class="content-section">
        <h2>Brainstorming and Reflection Questions</h2>
        <h3>Similarities and Differences between Sensation and Perception</h3>
        <p><strong>Similarities:</strong> Both involve sensory systems and work together to process information. Sensory input cannot be perceived without being sensed first, highlighting their interdependence.</p>
        <p><strong>Differences:</strong> Sensation is the detection of physical stimuli; perception is the interpretation and meaning-making of these stimuli.</p>

        <h3>Sensory Differences Among People</h3>
        <p>Differences can arise due to individual variations in sensory receptors, psychological states, attention, and experience.</p>

        <h3>Limen vs. jnd</h3>
        <p><strong>Limen (Absolute Threshold):</strong> Minimum intensity of a stimulus needed for detection.</p>
        <p><strong>jnd (Difference Threshold):</strong> Minimum change in stimulus intensity needed to notice a difference.</p>

        <h3>Sensory Adaptation</h3>
        <p>Occurs when continuous stimulation leads to decreased sensitivity to that stimulus over time, allowing for focus on new or changing stimuli.</p>

        <h3>Sensitization vs. Habituation</h3>
        <p><strong>Sensitization:</strong> An increased reaction to a stimulus over time.</p>
        <p><strong>Habituation:</strong> A decrease in response to a constant stimulus.</p>
      </div>
    </body>
    </html>
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
  title: 'Chapter 4: Memory and Forgetting',
  content: `
    <div class="chapter-container">
      <section class="chapter-overview">
        <h2>Chapter Overview: Memory and Forgetting</h2>
        <div class="overview-card">
          <h3>Relationship with Learning</h3>
          <p>Memory and learning are interconnected. Learning involves the initial acquisition and encoding of information, while memory pertains to the storage and retrieval of that information. Together, they encompass encoding, storage, and retrieval processes.</p>
          
          <h3>Chapter Focus</h3>
          <p>This chapter is divided into two main sections: understanding memory and exploring forgetting, including theories of forgetting and strategies to improve memory.</p>
        </div>
        
        <div class="appetizer-card">
          <h3>Learner Appetizer</h3>
          <ul>
            <li><strong>Reflection on Memory:</strong> Consider how forgetting can be preferable to remembering painful events. Reflect on childhood memories and understand that memory is not a perfect recording device; it can change over time.</li>
            <li><strong>Basic Memory Systems:</strong> Explore how we can remember various events and what processes are involved in recalling information.</li>
          </ul>
        </div>
        
        <div class="outcomes-card">
          <h3>Learning Outcomes</h3>
          <ul>
            <li>Define memory and forgetting.</li>
            <li>Describe stages and structures of memory.</li>
            <li>Explain memory functions and organization in long-term memory.</li>
            <li>Identify factors affecting memory persistence and loss.</li>
            <li>Understand theories of forgetting.</li>
          </ul>
        </div>
      </section>

      <section class="brainstorming-section">
        <h2>Brainstorming Questions</h2>
        <div class="question-grid">
          <div class="question-card">
            <h3>Concept of Memory</h3>
            <p>What is memory and its significance?</p>
          </div>
          <div class="question-card">
            <h3>Memory's Function</h3>
            <p>How does memory impact studying and daily life?</p>
          </div>
          <div class="question-card">
            <h3>Memory Formation</h3>
            <p>How do you form and retain memories?</p>
          </div>
        </div>
      </section>

      <section class="memory-section">
        <h2>Memory Definition and Processes</h2>
        
        <div class="definition-card">
          <h3>Memory</h3>
          <p>Retention of information over time, bridging the past and present.</p>
          
          <h3>Processes of Memory</h3>
          <div class="process-grid">
            <div class="process-card">
              <h4>Encoding</h4>
              <p>Converting sensory input into a form usable for memory.</p>
            </div>
            <div class="process-card">
              <h4>Storage</h4>
              <p>Keeping encoded information in the nervous system.</p>
            </div>
            <div class="process-card">
              <h4>Retrieval</h4>
              <p>Accessing stored information when needed.</p>
            </div>
          </div>
        </div>
        
        <div class="reflection-box">
          <h3>Reflection Questions</h3>
          <ul>
            <li>Define memory and its processes.</li>
            <li>Describe the stages of memory as proposed by the stage model.</li>
          </ul>
        </div>
      </section>

      <section class="models-section">
        <h2>Models of Memory and Information Processing Theories</h2>
        
        <div class="theory-card">
          <p><strong>Information Processing Theories:</strong> These models liken human memory to computer systems. They involve storing vast amounts of information in a memory storehouse, which is retrieved onto a limited-capacity working memory that processes current experiences.</p>
          
          <h3>Three-Box Model by Atkinson and Shiffrin (1968)</h3>
          <div class="model-grid">
            <div class="model-card">
              <h4>1. Sensory Memory/Sensory Register</h4>
              <ul>
                <li><strong>Function:</strong> Initial storage area for sensory input.</li>
                <li><strong>Characteristics:</strong> Holds all sensory information briefly; includes visual (Iconic) and auditory (Echoic) subsystems.</li>
                <li><strong>Duration:</strong> Visual information lasts about one second; auditory information lasts up to two seconds.</li>
              </ul>
            </div>
            <div class="model-card">
              <h4>2. Short-term Memory (STM)</h4>
              <ul>
                <li><strong>Function:</strong> Holds and processes information actively; used for thinking, reading, and problem-solving.</li>
                <li><strong>Characteristics:</strong>
                  <ul>
                    <li><strong>Active:</strong> Information remains only while being consciously processed.</li>
                    <li><strong>Rapid Accessibility:</strong> Information is quickly available.</li>
                    <li><strong>Temporal Sequence:</strong> Preserves the order of information temporarily.</li>
                    <li><strong>Limited Capacity:</strong> Holds about 7±2 chunks of information; capacity can be expanded through chunking.</li>
                  </ul>
                </li>
                <li><strong>Duration:</strong> Holds information for about 30 seconds; prolonged by rehearsal.</li>
              </ul>
            </div>
            <div class="model-card">
              <h4>3. Long-Term Memory (LTM)</h4>
              <ul>
                <li><strong>Function:</strong> Stores meaningful information for long periods; capacity appears to be limitless.</li>
                <li><strong>Characteristics:</strong> Information can be retained for days, months, years, or a lifetime.</li>
                <li><strong>Types:</strong>
                  <ul>
                    <li><strong>Declarative/Explicit Memory:</strong> Conscious recollection of facts (Semantic) and personal events (Episodic).</li>
                    <li><strong>Non-declarative/Implicit Memory:</strong> Unconscious memory such as procedural skills (e.g., knowing how to ride a bike).</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div class="serial-position-card">
          <h3>Serial Position Effect</h3>
          <ul>
            <li><strong>Definition:</strong> Better recall of items at the beginning (primacy effect) and end (recency effect) of a list, with poorer recall of items in the middle.</li>
            <li><strong>Explanation:</strong> Items at the start of the list are processed before short-term memory becomes crowded, while items at the end are still in short-term memory at recall.</li>
          </ul>
        </div>
      </section>

      <section class="factors-section">
        <h2>Factors Affecting Memory</h2>
        <div class="factors-grid">
          <div class="factor-card">
            <h3>Retention Ability</h3>
            <p>Good memory traces from past experiences.</p>
          </div>
          <div class="factor-card">
            <h3>Health</h3>
            <p>Better health enhances retention.</p>
          </div>
          <div class="factor-card">
            <h3>Age</h3>
            <p>Younger individuals generally have better memory.</p>
          </div>
          <div class="factor-card">
            <h3>Maturity</h3>
            <p>Younger children struggle with complex material.</p>
          </div>
          <div class="factor-card">
            <h3>Will to Remember</h3>
            <p>Motivation aids retention.</p>
          </div>
          <div class="factor-card">
            <h3>Intelligence</h3>
            <p>Higher intelligence correlates with better memory.</p>
          </div>
          <div class="factor-card">
            <h3>Interest</h3>
            <p>Greater interest improves learning and retention.</p>
          </div>
          <div class="factor-card">
            <h3>Over Learning</h3>
            <p>Repeated practice enhances memory.</p>
          </div>
          <div class="factor-card">
            <h3>Speed of Learning</h3>
            <p>Faster learning often leads to better retention.</p>
          </div>
          <div class="factor-card">
            <h3>Meaningfulness</h3>
            <p>Meaningful information is retained longer than nonsensical material.</p>
          </div>
        </div>
        
        <div class="reflection-box">
          <h3>Reflection</h3>
          <ul>
            <li>Describe each type of memory, its capacity, and characteristics.</li>
            <li>Explain the serial-position effect and its relation to memory processes.</li>
          </ul>
        </div>
      </section>

      <section class="forgetting-section">
        <h2>Key Points on Memory and Forgetting</h2>
        
        <div class="forgetting-card">
          <h3>Forgetting</h3>
          <ul>
            <li><strong>Forgetting Defined:</strong> Forgetting is the apparent loss of information that was previously encoded and stored in long-term memory. It can occur due to various mechanisms and is a normal part of cognitive processes.</li>
            <li><strong>Why Forgetting Occurs:</strong>
              <ul>
                <li><strong>Overload of Information:</strong> We encounter and attempt to process more information than we can realistically remember.</li>
                <li><strong>Selective Memory:</strong> We may consciously or unconsciously choose to forget certain information.</li>
                <li><strong>Motivated Forgetting:</strong> Driven by psychological mechanisms like repression, where painful or threatening memories are blocked from consciousness.</li>
              </ul>
            </li>
            <li><strong>Ebbinghaus's Research:</strong>
              <ul>
                <li>Found that forgetting is most rapid immediately after learning, with a slower decline over time.</li>
                <li>Demonstrated that relearning is generally faster than initial learning.</li>
              </ul>
            </li>
          </ul>
        </div>
        
        <div class="theories-card">
          <h3>Theories of Forgetting</h3>
          <div class="theory-grid">
            <div class="theory-card">
              <h4>1. Decay Theory</h4>
              <ul>
                <li><strong>Concept:</strong> Memory traces fade over time if not accessed.</li>
                <li><strong>Limitation:</strong> Does not fully account for forgetting in long-term memory, as some memories from the past remain vivid while more recent ones may be forgotten.</li>
              </ul>
            </div>
            <div class="theory-card">
              <h4>2. Interference Theory</h4>
              <ul>
                <li><strong>Concept:</strong> Similar information can interfere with memory retrieval.</li>
                <li><strong>Types:</strong>
                  <ul>
                    <li><strong>Proactive Interference:</strong> Older information interferes with the recall of newer information.</li>
                    <li><strong>Retroactive Interference:</strong> New information interferes with the recall of older information.</li>
                  </ul>
                </li>
              </ul>
            </div>
            <div class="theory-card">
              <h4>3. Displacement Theory</h4>
              <ul>
                <li><strong>Concept:</strong> New information can overwrite old information in short-term memory due to its limited capacity.</li>
              </ul>
            </div>
            <div class="theory-card">
              <h4>4. Motivated Forgetting</h4>
              <ul>
                <li><strong>Concept:</strong> Forgetting due to the blocking of distressing or threatening memories, often through repression.</li>
              </ul>
            </div>
            <div class="theory-card">
              <h4>5. Cue-Dependent Forgetting</h4>
              <ul>
                <li><strong>Concept:</strong> Failure to retrieve information due to a lack of appropriate retrieval cues.</li>
                <li><strong>State-Dependent Memory:</strong> Retrieval is easier when in the same physical or emotional state as when the information was encoded.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section class="improvement-section">
        <h2>Improving Memory</h2>
        <div class="strategies-card">
          <h3>Strategies</h3>
          <div class="strategies-grid">
            <div class="strategy-card">
              <h4>Pay Attention</h4>
              <p>Ensure proper encoding of information by focusing on it.</p>
            </div>
            <div class="strategy-card">
              <h4>Elaborate Encoding</h4>
              <p>Encode information in multiple ways and add meaning to enhance memory.</p>
            </div>
            <div class="strategy-card">
              <h4>Take Your Time</h4>
              <p>Use breaks and sleep to reduce interference and consolidate memory.</p>
            </div>
            <div class="strategy-card">
              <h4>Over Learn</h4>
              <p>Continue studying beyond initial mastery to solidify memory.</p>
            </div>
            <div class="strategy-card">
              <h4>Monitor Learning</h4>
              <p>Regularly test yourself and review material to assess and reinforce learning.</p>
            </div>
          </div>
        </div>
      </section>

      <section class="summary-section">
        <h2>Summary</h2>
        <div class="summary-card">
          <h3>Memory Processes</h3>
          <ul>
            <li><strong>Encoding:</strong> Initial recording of information through senses.</li>
            <li><strong>Storage:</strong> Maintaining information over time.</li>
            <li><strong>Retrieval:</strong> Bringing stored information to mind.</li>
          </ul>
          
          <h3>Forgetting</h3>
          <ul>
            <li>Results from decay, interference, or repression.</li>
          </ul>
          
          <h3>Memory Improvement</h3>
          <ul>
            <li>Can be achieved through better encoding practices, managing interference, and using effective strategies for learning and recall.</li>
          </ul>
        </div>
      </section>

      <section class="memory-models-section">
        <h2>Memory and Forgetting</h2>
        
        <div class="models-card">
          <h3>Memory Models</h3>
          
          <h4>1. Atkinson-Shiffrin Model (1968)</h4>
          <div class="model-details">
            <div class="detail-card">
              <h5>Sensory Memory</h5>
              <ul>
                <li><strong>Function:</strong> Acts as the initial storage area for incoming sensory information.</li>
                <li><strong>Duration:</strong> Very brief, with visual (iconic) memory lasting about one second and auditory (echoic) memory lasting up to two seconds.</li>
                <li><strong>Characteristics:</strong> Retains a detailed but unprocessed snapshot of sensory input.</li>
              </ul>
            </div>
            <div class="detail-card">
              <h5>Short-Term Memory (STM)</h5>
              <ul>
                <li><strong>Function:</strong> Holds and processes information that we are currently aware of and working with.</li>
                <li><strong>Capacity:</strong> Limited to about 7±2 chunks of information, according to George Miller's research.</li>
                <li><strong>Characteristics:</strong> Active processing and manipulation of information; preserves temporal sequence and allows for conscious awareness.</li>
                <li><strong>Chunking:</strong> Organizes information into larger units to overcome capacity limits.</li>
              </ul>
            </div>
            <div class="detail-card">
              <h5>Long-Term Memory (LTM)</h5>
              <ul>
                <li><strong>Function:</strong> Stores information for long periods, potentially indefinitely.</li>
                <li><strong>Capacity:</strong> Virtually unlimited.</li>
                <li><strong>Characteristics:</strong> Includes semantic memory (factual knowledge) and episodic memory (personal experiences).</li>
                <li><strong>Subdivisions:</strong>
                  <ul>
                    <li><strong>Declarative (Explicit) Memory:</strong> Conscious recollection of facts and events.</li>
                    <li><strong>Semantic Memory:</strong> Knowledge of facts and concepts.</li>
                    <li><strong>Episodic Memory:</strong> Personal experiences and specific events.</li>
                    <li><strong>Non-Declarative (Implicit) Memory:</strong> Involves skills and procedures that are not consciously recalled.</li>
                    <li><strong>Procedural Memory:</strong> Skills and habits like riding a bike or typing.</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div class="serial-card">
          <h3>Serial Position Effect</h3>
          <ul>
            <li><strong>Concept:</strong> Recall accuracy is influenced by the position of an item in a list.</li>
            <li><strong>Primacy Effect:</strong> Better recall for items at the beginning of a list due to more time spent encoding them into long-term memory.</li>
            <li><strong>Recency Effect:</strong> Better recall for items at the end of a list because they are still present in short-term memory.</li>
          </ul>
        </div>
        
        <div class="factors-card">
          <h3>Factors Affecting Memory</h3>
          <div class="factors-list">
            <div class="factor-item">
              <h4>1. Retention Ability</h4>
              <p>Depends on the strength of memory traces formed.</p>
            </div>
            <div class="factor-item">
              <h4>2. Health</h4>
              <p>Good physical and mental health supports better memory.</p>
            </div>
            <div class="factor-item">
              <h4>3. Age</h4>
              <p>Memory capabilities can decline with age.</p>
            </div>
            <div class="factor-item">
              <h4>4. Maturity</h4>
              <p>Younger children often struggle with complex material.</p>
            </div>
            <div class="factor-item">
              <h4>5. Will to Remember</h4>
              <p>Motivation affects memory retention.</p>
            </div>
            <div class="factor-item">
              <h4>6. Intelligence</h4>
              <p>Generally correlates with better memory performance.</p>
            </div>
            <div class="factor-item">
              <h4>7. Interest</h4>
              <p>Higher interest in material leads to better memory.</p>
            </div>
            <div class="factor-item">
              <h4>8. Overlearning</h4>
              <p>Repeated practice enhances memory.</p>
            </div>
            <div class="factor-item">
              <h4>9. Speed of Learning</h4>
              <p>Faster learning can improve retention.</p>
            </div>
            <div class="factor-item">
              <h4>10. Meaningfulness</h4>
              <p>Meaningful information is more memorable.</p>
            </div>
            <div class="factor-item">
              <h4>11. Sleep/Rest</h4>
              <p>Essential for consolidating memories and improving recall.</p>
            </div>
          </div>
        </div>
        
        <div class="reflections-card">
          <h3>Reflections</h3>
          <div class="reflection-item">
            <h4>Forgetting</h4>
            <ul>
              <li><strong>Definition:</strong> The loss or inability to retrieve information previously encoded.</li>
              <li><strong>Causes:</strong> Can include decay, interference, motivated forgetting, and cue-dependent forgetting.</li>
              <li><strong>Major Memory Impairments:</strong> Include issues with encoding, storage, and retrieval.</li>
            </ul>
          </div>
          <div class="reflection-item">
            <h4>Improving Memory</h4>
            <ul>
              <li><strong>Strategies:</strong> Effective encoding, minimizing interference, and using various memorization techniques like mnemonics and spaced repetition can enhance memory performance.</li>
            </ul>
          </div>
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
      .forgetting-card,
      .theories-card,
      .strategies-card,
      .summary-card,
      .models-card,
      .reflections-card {
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
      
      .serial-position-card,
      .serial-card {
        background-color: #f5f0ff;
        padding: 15px;
        border-radius: 8px;
        margin: 15px 0;
        border-left: 3px solid #9b59b6;
      }
      
      /* Grid Layouts */
      .question-grid,
      .process-grid,
      .model-grid,
      .factors-grid,
      .theory-grid,
      .strategies-grid,
      .model-details,
      .factors-list {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 15px;
        margin: 20px 0;
      }
      
      .question-card,
      .process-card,
      .model-card,
      .factor-card,
      .theory-card,
      .strategy-card,
      .detail-card,
      .factor-item {
        background-color: #f8f9fa;
        padding: 15px;
        border-radius: 8px;
      }
      
      .model-details {
        grid-template-columns: 1fr;
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
        .question-grid,
        .process-grid,
        .model-grid,
        .factors-grid,
        .theory-grid,
        .strategies-grid,
        .model-details,
        .factors-list {
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
        .forgetting-card,
        .theories-card,
        .strategies-card,
        .summary-card,
        .models-card,
        .reflections-card {
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
        
        ul, ol {
          padding-left: 15px;
        }
      }
    </style>
  `
},{
  id: 'Chapter5',
  title: 'Chapter 5: Motivation and Emotions',
  content: `
    <div class="chapter-container">
      <section class="chapter-overview">
        <h2>Chapter Five: Motivation and Emotions</h2>
        <div class="overview-card">
          <h3>Chapter Overview</h3>
          <ul>
            <li>Introduction to motivation and emotion.</li>
            <li>Topics include definitions, types, and theories of motivation, as well as elements and theories of emotion.</li>
          </ul>
        </div>
        
        <div class="outcomes-card">
          <h3>Learning Outcomes</h3>
          <ul>
            <li>Define and identify motivation types (intrinsic and extrinsic).</li>
            <li>Compare motivation theories.</li>
            <li>Explain conflicts of motives.</li>
            <li>Define emotion and discuss its elements and theories.</li>
          </ul>
        </div>
      </section>

      <section class="motivation-section">
        <h2>1. Motivation</h2>
        
        <div class="definition-card">
          <h3>Definition</h3>
          <p>Motivation involves factors that initiate, direct, and sustain behavior to meet physical or psychological needs.</p>
          
          <h3>Types of Motivation</h3>
          <div class="types-grid">
            <div class="type-card">
              <h4>Intrinsic</h4>
              <p>Internal rewards (e.g., personal satisfaction, enjoyment)</p>
            </div>
            <div class="type-card">
              <h4>Extrinsic</h4>
              <p>External rewards (e.g., money, grades, recognition)</p>
            </div>
          </div>
        </div>
      </section>

      <section class="approaches-section">
        <h2>2. Approaches to Motivation</h2>
        
        <div class="theory-grid">
          <div class="theory-card">
            <h3>Instinct Theory</h3>
            <p>Early theory focusing on biologically determined behaviors.</p>
          </div>
          <div class="theory-card">
            <h3>Drive-Reduction Theory</h3>
            <p>Motivation arises from the need to reduce internal tension created by unmet needs.</p>
          </div>
          <div class="theory-card">
            <h3>Arousal Theory</h3>
            <p>Motivation to maintain or increase stimulation.</p>
          </div>
          <div class="theory-card">
            <h3>Incentive Theory</h3>
            <p>Motivation driven by external rewards.</p>
          </div>
          <div class="theory-card">
            <h3>Cognitive Theory</h3>
            <p>Motivation influenced by thoughts, beliefs, expectations, and goals.</p>
          </div>
        </div>
        
        <div class="theory-details">
          <div class="detail-card">
            <h3>Drive-Reduction Theory (continued)</h3>
            <ul>
              <li><strong>Primary Drives:</strong> Biological needs essential for survival (e.g., hunger, thirst)</li>
              <li><strong>Secondary Drives:</strong> Learned needs (e.g., money, social approval)</li>
              <li><strong>Homeostasis:</strong> The body's need to maintain a balanced internal state, akin to a thermostat</li>
            </ul>
          </div>
          
          <div class="detail-card">
            <h3>Arousal Theory</h3>
            <p><strong>Optimal Level of Arousal:</strong> People seek to maintain a balance of stimulation. If arousal is too low, individuals seek activities to increase it; if too high, they seek to decrease it.</p>
          </div>
          
          <div class="detail-card">
            <h3>Incentive Theory</h3>
            <ul>
              <li><strong>External Rewards:</strong> Motivation is influenced by external incentives (e.g., grades, money)</li>
              <li>This theory complements drive-reduction theory by explaining how external rewards drive behavior</li>
            </ul>
          </div>
          
          <div class="detail-card">
            <h3>Cognitive Theory</h3>
            <ul>
              <li><strong>Thoughts and Beliefs:</strong> Motivation is driven by mental processes such as expectations and goals</li>
              <li>People are motivated based on their personal beliefs about their abilities and outcomes</li>
            </ul>
          </div>
        </div>
      </section>

      <section class="maslow-section">
        <h2>Self-Actualization Needs</h2>
        <div class="maslow-card">
          <h3>Definition</h3>
          <p>The desire to realize personal potential, self-fulfillment, and personal growth. This is the highest level in Maslow's hierarchy of needs, reflecting the pursuit of becoming everything one is capable of becoming.</p>
          
          <h3>Maslow's Hierarchy of Needs</h3>
          <div class="hierarchy-image">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Maslow%27s_Hierarchy_of_Needs.svg/1200px-Maslow%27s_Hierarchy_of_Needs.svg.png" alt="Maslow's Hierarchy of Needs">
          </div>
          <p class="caption">Illustrates the progression from basic biological needs to higher-order needs like self-actualization.</p>
          
          <div class="reflection-box">
            <p><strong>Reflection:</strong> Consider which motivation theory best explains your behavior and whether you agree that lower-order needs must be met before addressing higher-order needs.</p>
          </div>
        </div>
      </section>

      <section class="conflict-section">
        <h2>Conflict of Motives and Frustration</h2>
        
        <div class="conflict-grid">
          <div class="conflict-card">
            <h3>Approach-Approach Conflicts</h3>
            <p>Choosing between two desirable activities (e.g., going to a movie vs. a concert)</p>
          </div>
          <div class="conflict-card">
            <h3>Avoidance-Avoidance Conflicts</h3>
            <p>Choosing between two undesirable alternatives (e.g., selling a house vs. declaring bankruptcy)</p>
          </div>
          <div class="conflict-card">
            <h3>Approach-Avoidance Conflicts</h3>
            <p>Facing an event with both attractive and unattractive features (e.g., starting a relationship that may impact study time)</p>
          </div>
          <div class="conflict-card">
            <h3>Multiple Approach-Avoidance Conflicts</h3>
            <p>Choosing between options with both positive and negative aspects (e.g., two job offers with different benefits and drawbacks)</p>
          </div>
        </div>
        
        <div class="reflection-box">
          <p><strong>Reflection:</strong> Reflect on personal experiences with these conflicts and how you resolved them.</p>
        </div>
      </section>

      <section class="emotion-section">
        <h2>Emotions</h2>
        
        <div class="definition-card">
          <h3>Definition</h3>
          <p>The "feeling" aspect of consciousness involving physical arousal, behavior, and subjective experience.</p>
          
          <h3>Elements of Emotion</h3>
          <div class="elements-grid">
            <div class="element-card">
              <h4>Physiology</h4>
              <p>Physical arousal, including increased heart rate and rapid breathing. Emotions like anger and fear often have similar physical symptoms.</p>
            </div>
            <div class="element-card">
              <h4>Behavior</h4>
              <p>Observable actions and expressions, such as facial expressions and body movements, indicating how one feels. Expressions may vary across cultures but have some universal aspects.</p>
            </div>
            <div class="element-card">
              <h4>Subjective Experience</h4>
              <p>The process of labeling emotions based on personal experiences, context, and cultural influences.</p>
            </div>
          </div>
        </div>
      </section>

      <section class="emotion-theories">
        <h2>Theories of Emotion</h2>
        
        <div class="theory-grid">
          <div class="theory-card">
            <h3>James-Lange Theory</h3>
            <p>Emotions result from physiological responses to stimuli. For example, seeing a snarling dog causes physiological arousal (e.g., increased heart rate), which is then interpreted as fear. Essentially, "I am afraid because I am aroused."</p>
          </div>
          <div class="theory-card">
            <h3>Cannon-Bard Theory</h3>
            <p>Emotion and physiological arousal occur simultaneously rather than sequentially. According to this theory, the thalamus sends sensory information to both the cortex (for the emotional experience) and the sympathetic nervous system (for the physiological reaction) at the same time. For example, when encountering a threatening stimulus, one experiences fear and physiological arousal concurrently—"I am afraid and running and aroused!"</p>
          </div>
          <div class="theory-card">
            <h3>Schachter-Singer Theory</h3>
            <p>Emotion results from two simultaneous processes: physical arousal and cognitive labeling of that arousal based on environmental cues. For instance, encountering a snarling dog triggers physiological arousal (e.g., racing heart) and cognitive interpretation (e.g., recognizing this as fear), which together produce the emotional experience of fear.</p>
          </div>
          <div class="theory-card">
            <h3>Two-Factor Theory</h3>
            <p>Emotion arises from physiological arousal and cognitive labeling of that arousal.</p>
          </div>
        </div>
      </section>

      <section class="summary-section">
        <h2>Summary</h2>
        <div class="summary-card">
          <div class="summary-column">
            <h3>Motivation</h3>
            <ul>
              <li>Influences behavior initiation, direction, intensity, and persistence</li>
              <li>Can be intrinsic (internal rewards) or extrinsic (external rewards)</li>
              <li>Theories include instinct, drive-reduction, arousal, incentive, cognitive, and humanistic approaches (Maslow's hierarchy of needs)</li>
            </ul>
          </div>
          <div class="summary-column">
            <h3>Emotion</h3>
            <ul>
              <li>Defined as the "feeling" aspect of consciousness, involving physiological arousal, observable behavior, and subjective experience</li>
              <li>Key theories include:
                <ul>
                  <li>James-Lange Theory: Emotions arise from awareness of physiological responses</li>
                  <li>Cannon-Bard Theory: Emotions and physiological responses occur simultaneously</li>
                  <li>Schachter-Singer Theory: Emotions result from the interplay of physiological arousal and cognitive interpretation</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section class="discussion-section">
        <h2>Discussion Questions</h2>
        <div class="questions-card">
          <ol>
            <li>Provide examples of intrinsic and extrinsic motivation.</li>
            <li>Identify which motivation approach aligns with the statement: "When we lack something, we are motivated to get it."</li>
            <li>Discuss which theory of emotion best explains your personal emotional experiences.</li>
          </ol>
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
      
      /* Card Styles */
      .overview-card,
      .outcomes-card,
      .definition-card,
      .maslow-card,
      .summary-card,
      .questions-card {
        background-color: #fff;
        border-radius: 8px;
        box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        padding: 20px;
        margin: 20px 0;
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
      
      /* Grid Layouts */
      .types-grid,
      .theory-grid,
      .elements-grid,
      .conflict-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 15px;
        margin: 20px 0;
      }
      
      .type-card,
      .theory-card,
      .element-card,
      .conflict-card {
        background-color: #f8f9fa;
        padding: 15px;
        border-radius: 8px;
      }
      
      .theory-details {
        display: grid;
        grid-template-columns: 1fr;
        gap: 15px;
        margin: 20px 0;
      }
      
      .detail-card {
        background-color: #f0f7fb;
        padding: 15px;
        border-radius: 8px;
      }
      
      .summary-card {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
      }
      
      .hierarchy-image {
        margin: 20px 0;
        text-align: center;
      }
      
      .hierarchy-image img {
        max-width: 100%;
        height: auto;
        border-radius: 8px;
      }
      
      .caption {
        font-style: italic;
        text-align: center;
        color: #7f8c8d;
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
        .types-grid,
        .theory-grid,
        .elements-grid,
        .conflict-grid,
        .summary-card {
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
        .outcomes-card,
        .definition-card,
        .maslow-card,
        .summary-card,
        .questions-card {
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
        
        ul, ol {
          padding-left: 15px;
        }
      }
    </style>
  `
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
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>What is Philosophy?</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Roboto:wght@400;700&display=swap" rel="stylesheet">
    <style>
        /* General Styles */
        :root {
            --primary-color: #3f51b5; /* A deep blue for accents */
            --text-color: #2c3e50; /* Dark gray for main text */
            --background-color: #f4f7f6; /* A light, soft gray background */
            --card-background: #ffffff;
            --secondary-color: #8c8c8c; /* Lighter gray for secondary text */
            --border-radius: 12px;
            --shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }

        body {
            font-family: 'Roboto', sans-serif;
            color: var(--text-color);
            background-color: var(--background-color);
            margin: 0;
            padding: 20px; /* Consistent padding around the entire body */
            line-height: 1.6;
        }

        .container {
            max-width: 900px;
            margin: 0 auto;
        }

        h1, h2, h3, h4 {
            font-family: 'Playfair Display', serif;
            color: var(--primary-color);
            line-height: 1.2;
            margin-top: 2em;
        }

        h1 {
            font-size: 2.5rem;
            text-align: center;
        }

        h2 {
            font-size: 2rem;
            border-bottom: 2px solid var(--primary-color);
            padding-bottom: 10px;
            margin-bottom: 1em;
        }

        h3 {
            font-size: 1.5rem;
            color: var(--text-color);
            margin-top: 1.5em;
        }

        p {
            margin-bottom: 1em;
            text-align: justify;
        }

        .sub-text {
            color: var(--secondary-color);
            font-style: italic;
            text-align: center;
            margin-top: -10px;
            margin-bottom: 2em;
        }

        .card {
            background: var(--card-background);
            padding: 25px;
            border-radius: var(--border-radius);
            box-shadow: var(--shadow);
            margin-bottom: 30px;
        }

        .card h2 {
            margin-top: 0;
            border-bottom: none;
            color: var(--primary-color);
        }

        .card-list {
            list-style: none;
            padding: 0;
            margin: 0;
        }
        
        .card-list li {
            background-color: #f9f9f9;
            padding: 15px;
            border-radius: 8px;
            margin-bottom: 15px;
            border-left: 5px solid var(--primary-color);
        }

        .card-list li strong {
            color: var(--primary-color);
        }

        .card-list-nested {
            list-style-type: disc;
            padding-left: 20px;
            margin-top: 10px;
        }

        .highlight {
            font-weight: bold;
            color: var(--primary-color);
        }

        /* Responsive Design for Mobile */
        @media (max-width: 600px) {
            body {
                padding: 10px; /* Reduce padding for smaller screens */
            }

            h1 {
                font-size: 2rem;
            }

            h2 {
                font-size: 1.5rem;
            }
            
            h3 {
                font-size: 1.2rem;
            }

            .card {
                padding: 15px;
            }
        }
    </style>
</head>
<body>
    <header class="container">
        <h1>What is Philosophy? 🤔</h1>
        <p class="sub-text">An Exploration of Universal Issues and Fundamental Questions</p>
    </header>

    <main class="container">
        <section class="card">
            <h2>What is Philosophy? 🤔</h2>
            <p>It's tough to give a single, straightforward definition of philosophy because it doesn't have one specific subject matter like chemistry or physics. Instead, philosophy deals with universal issues and fundamental questions. It's more about a way of thinking and a continuous search for truth than a set of facts. The best way to learn it is by actively engaging with it—by philosophizing.</p>
            <p>የፍልስፍና ትርጉም በቀላሉ መስጠት ከባድ ነው ምክንያቱም እንደ ኬሚስትሪ ወይም ፊዚክስ አንድ የተወሰነ የትምህርት ዘርፍ ስለሌለው ነው። ይልቁንም፣ ፍልስፍና የሚያተኩረው ሁለንተናዊ ጉዳዮች እና መሰረታዊ ጥያቄዎች ላይ ነው። ፍልስፍና ከእውነት ፍለጋ ጋር የተያያዘ የአስተሳሰብ መንገድ እንጂ የሀቆች ስብስብ አይደለም። እሱን ለመማር ምርጡ መንገድ ደግሞ በማፍለስፈፍ ንቁ ተሳትፎ ማድረግ ነው።</p>
        </section>

        <section class="card">
            <h2>The Origins of the Word "Philosophy" 📜</h2>
            <p>To get a clearer understanding, we can look at the etymology of the word itself. "Philosophy" comes from two ancient Greek words:</p>
            <ul class="card-list">
                <li><strong>Philo</strong> means "love" ❤️</li>
                <li><strong>Sophia</strong> means "wisdom" 🧠</li>
            </ul>
            <p>So, the literal definition of philosophy is "love of wisdom." The ancient Greek thinker Pythagoras was the first to use the term "philosopher" for someone who is curious and seeks to understand the world.</p>
            <p>የ"ፍልስፍና" የሚለውን ቃል አመጣጥ በመመልከት ትርጉሙን በተሻለ ሁኔታ መረዳት እንችላለን። "ፍልስፍና" የሚለው ቃል ከሁለት ጥንታዊ የግሪክ ቃላት የመጣ ነው፦</p>
            <ul class="card-list">
                <li><strong>"ፊሎ"</strong> ማለት "ፍቅር" ❤️</li>
                <li><strong>"ሶፊያ"</strong> ማለት "ጥበብ" 🧠</li>
            </ul>
            <p>ስለዚህ፣ የፍልስፍና ቀጥተኛ ትርጉም "የጥበብ ፍቅር" ነው። ጥንታዊው የግሪክ ፈላስፋ ፓይታጎረስ አለምን ለመረዳት ጉጉት ላላቸው ሰዎች ለመጀመሪያ ጊዜ "ፈላስፋ" የሚለውን ስያሜ ተጠቅሟል።</p>
        </section>

        <section class="card">
            <h2>What Kind of Wisdom Do Philosophers Seek? 💡</h2>
            <p>The wisdom that philosophers pursue isn't just about having a lot of information or technical skills. As Socrates explained, philosophical wisdom involves:</p>
            <ul class="card-list">
                <li><strong>Critical habits:</strong> Continuously questioning and examining everything.</li>
                <li><strong>A continuous search for truth:</strong> Being dedicated to finding the truth, no matter what form it takes.</li>
                <li><strong>Questioning the obvious:</strong> Going beyond what people normally accept without question and exploring deeper possibilities.</li>
            </ul>
            <p>This critical and questioning mindset is the core of philosophy.</p>
            <p>ፈላስፋዎች የሚፈልጉት ጥበብ ብዙ መረጃ ወይም ሙያዊ ክህሎት መያዝ ብቻ አይደለም። ሶቅራጥስ እንዳብራራው፣ የፍልስፍና ጥበብ የሚከተሉትን ያካትታል፦</p>
            <ul class="card-list">
                <li><strong>የወሳኝ አስተሳሰብ ልማድ:</strong> ነገሮችን ያለማቋረጥ መጠየቅ እና መመርመር።</li>
                <li><strong>የእውነት ዘላለማዊ ፍለጋ:</strong> እውነትን በየትኛውም መልኩ ለመፈለግ ቁርጠኛ መሆን።</li>
                <li><strong>ግልጽ የሚመስሉ ነገሮችን መጠየቅ:</strong> ሰዎች ያለምንም ጥርጣሬ የሚቀበሉትን ነገር አልፎ ወደ ጥልቅ ዕድሎች መግባት።</li>
            </ul>
            <p>ይህ ወሳኝ እና ጠያቂ አስተሳሰብ የፍልስፍና ዋና አካል ነው።</p>
        </section>

        <section class="card">
            <h2>Philosophy as an Activity, Not Just a Product 🏃</h2>
            <p>You can't just "learn" philosophy from a book; you have to do it. Philosophy is an active process that involves:</p>
            <ul class="card-list">
                <li><strong>Reason and rational criticism:</strong> Using logic to analyze and evaluate ideas.</li>
                <li><strong>Formulating and answering fundamental questions:</strong> Asking questions like, "What is reality?" or "What is the meaning of life?" and then trying to find well-reasoned answers.</li>
            </ul>
            <p>A great philosopher isn't great because of the theories they came up with, but because of their exceptional ability to philosophize—to think critically, analyze, and understand.</p>
            <p>ፍልስፍናን ከመጽሐፍ ላይ ብቻ "መማር" አይቻልም፤ መተግበር አለብህ። ፍልስፍና የሚከተሉትን ያካተተ ንቁ ሂደት ነው፦</p>
            <ul class="card-list">
                <li><strong>ምክንያታዊ ትችት እና አስተሳሰብ:</strong> ሀሳቦችን ለመተንተን እና ለመገምገም ምክንያትን መጠቀም።</li>
                <li><strong>መሰረታዊ ጥያቄዎችን መቅረጽ እና መመለስ:</strong> እንደ "እውነታ ምንድን ነው?" ወይም "የህይወት ትርጉም ምንድን ነው?" የሚሉ ጥያቄዎችን በመጠየቅ እና በምክንያታዊነት መልስ ለመስጠት መሞከር።</li>
            </ul>
            <p>ታላቅ ፈላስፋ ታላቅ የሆነው የፈጠራቸው ንድፈ ሃሳቦች ስላሉት ሳይሆን፣ በማፍለስፈፍ—በጥልቀት በማሰብ፣ በመተንተን እና በመረዳት—ባለው ልዩ ችሎታ ነው።</p>
        </section>

        <section class="card">
            <h2>What are the Features of Philosophy? 🤔</h2>
            <p>Philosophy is a unique discipline with distinct characteristics that set it apart from other fields of study. Understanding these features helps us grasp what it means to "do" philosophy, rather than just "have" a philosophy.</p>
            <p>ፍልስፍና ከሌሎች የትምህርት ዘርፎች የሚለዩት ልዩ ባህሪያት አሉት። እነዚህን ባህሪያት መረዳት፣ ፍልስፍናን "መያዝ" ብቻ ሳይሆን ፍልስፍናን "ማድረግ" ምን ማለት እንደሆነ ለመረዳት ይረዳናል።</p>
            
            <h3>1. Philosophy as Personal Beliefs and Critical Reflection 🧐</h3>
            <p>There are two main senses of philosophy:</p>
            <ul class="card-list">
                <li><strong>"Having" a philosophy:</strong> This refers to our personal beliefs and attitudes about life and the universe. For example, when someone says, "My philosophy is to always be kind," they are expressing an informal, personal view.</li>
                <li><strong>"Doing" philosophy:</strong> This is the more formal, academic sense. It involves actively reflecting on, questioning, and criticizing our deepest beliefs. To truly philosophize, you must be open-minded, tolerant, and willing to examine all sides of an issue without prejudice. It's about developing critical thinking and argumentation skills.</li>
            </ul>
            <p>ፍልስፍና በሁለት ዋና ዋና መንገዶች ሊታይ ይችላል፦</p>
            <ul class="card-list">
                <li><strong>"ፍልስፍና መያዝ":</strong> ይህ ስለ ሕይወት እና ስለ አጽናፈ ዓለም ያለንን ግላዊ እምነቶች እና አመለካከቶች ያመለክታል። ለምሳሌ፣ አንድ ሰው "የእኔ ፍልስፍና ሁል ጊዜ ደግ መሆን ነው" ሲል፣ ግላዊ አመለካከቱን እየገለጸ ነው።</li>
                <li><strong>"ፍልስፍና ማድረግ":</strong> ይህ ይበልጥ መደበኛ የሆነ የአካዳሚክ ትርጉም ነው። በጥልቀት ማሰብን፣ ጥያቄዎችን ማንሳትን እና እምነቶቻችንን መተቸትን ያካትታል። በትክክል ለማፍለስፈፍ፣ አንድ ሰው ክፍት አእምሮ ያለው፣ ታጋሽ እና ማንኛውንም ጉዳይ ያለ አድሎአዊነት ለመመርመር ፈቃደኛ መሆን አለበት። ይህ ወሳኝ አስተሳሰብ እና የክርክር ክህሎቶችን ማዳበርን ይጠይቃል።</li>
            </ul>
            
            <h3>2. Philosophy Seeks a Holistic Worldview 🌍</h3>
            <p>Philosophy is a rational effort to see the world as a consistent whole. While other disciplines like science, business, or art focus on specific aspects of human experience, philosophy aims to integrate all this knowledge. It tries to combine conclusions from various sciences and human experiences to create a coherent worldview or a meaningful interpretation of life.</p>
            <p>ፍልስፍና ዓለምን እንደ የተቀናጀ አንድነት ለማየት የሚደረግ ምክንያታዊ ጥረት ነው። እንደ ሳይንስ፣ ንግድ ወይም ስነ-ጥበብ ያሉ ሌሎች የትምህርት ዘርፎች በተወሰኑ የሰው ልምዶች ላይ ሲያተኩሩ፣ ፍልስፍና ይህንን ሁሉ እውቀት ለማዋሃድ ይጥራል። የተለያዩ የሳይንስ እና የሰው ልምዶች መደምደሚያዎችን በማጣመር ወጥ የሆነ የዓለም እይታ ወይም ትርጉም ያለው የሕይወት ትርጓሜ ለመፍጠር ይፈልጋል።</p>
            
            <h3>3. Philosophy is a Logical Analysis of Language 🗣️</h3>
            <p>A key function of philosophy is the logical analysis of language. This involves clarifying the meaning of words and concepts. Many philosophers see this as a vital task, believing that clear language is essential for clear thought. They aim to expose confusion and nonsense by precisely defining terms used in science and everyday life.</p>
            <p>የፍልስፍና ቁልፍ ተግባር የቋንቋ ምክንያታዊ ትንተና ነው። ይህ የቃላትን እና የፅንሰ-ሀሳቦችን ትርጉም ግልጽ ማድረግን ያካትታል። ብዙ ፈላስፋዎች ይህን እንደ አስፈላጊ ተግባር ይመለከቱታል፣ ግልጽ ቋንቋ ለግልጽ አስተሳሰብ አስፈላጊ እንደሆነ ያምናሉ። በሳይንስ እና በዕለት ተዕለት ሕይወት ውስጥ ጥቅም ላይ የሚውሉ ቃላትን በትክክል በመግለጽ ግራ መጋባትን እና ትርጉም የለሽነትን ለማጋለጥ ይጥራሉ።</p>

            <h3>4. Philosophy Tackles Perennial and Fundamental Problems 🤯</h3>
            <p>Philosophy digs into the deepest problems of human existence that have interested people for centuries. These are not simple questions of fact, but rather profound inquiries that often have no easy answers. Examples of these perennial questions include:</p>
            <ul class="card-list">
                <li>What is truth? 💡</li>
                <li>What is the distinction between right and wrong? ⚖️</li>
                <li>Why is there anything at all? 🌌</li>
                <li>What is the purpose of life? 🤔</li>
                <li>Is there a God? 🙏</li>
            </ul>
            <p>These fundamental questions give rise to various theories and systems of thought, such as idealism, realism, and existentialism, which are all part of philosophy's rich content.</p>
            <p>ፍልስፍና ለብዙ መቶ ዘመናት ሰዎችን ሲያስጨንቁ የቆዩትን የሰዎች ህልውና ጥልቅ ችግሮችን ይመረምራል። እነዚህ ቀላል የእውነታ ጥያቄዎች ሳይሆኑ፣ ብዙ ጊዜ ቀላል መልስ የሌላቸው ጥልቅ ጥያቄዎች ናቸው። የእነዚህ ዘላለማዊ ጥያቄዎች ምሳሌዎች የሚከተሉትን ያካትታሉ፦</p>
            <ul class="card-list">
                <li>እውነት ምንድን ነው? 💡</li>
                <li>በትክክል እና በስህተት መካከል ያለው ልዩነት ምንድን ነው? ⚖️</li>
                <li>ለምን ምንም ነገር አለ? 🌌</li>
                <li>የሕይወት ዓላማ ምንድን ነው? 🤔</li>
                <li>እግዚአብሔር አለ? 🙏</li>
            </ul>
            <p>እነዚህ መሰረታዊ ጥያቄዎች እንደ ሃሳባዊነት (idealism)፣ እውነታነት (realism) እና ህልውናዊነት (existentialism) ያሉ የተለያዩ የንድፈ ሃሳቦችን እና የአስተሳሰብ ስርዓቶችን አስከትለዋል። እነዚህ ሁሉ የፍልስፍና የበለፀገ ይዘት አካል ናቸው።</p>
        </section>

        <section class="card">
            <h2>Metaphysics: The Study of Reality 🌌</h2>
            <p>Metaphysics is the core branch of philosophy that explores the ultimate nature of reality and existence. Its name comes from Greek words meaning "beyond physics," as it deals with fundamental questions that go beyond what we can observe with our senses. Metaphysicians seek to find the "first principles" from which all knowledge can be derived.</p>
            <p>የፍልስፍና ዋና አካል የሆነው ሜታፊዚክስ የህልውናን እና የእውነታን መሰረታዊ ባህሪ የሚያጠና የፍልስፍና ዘርፍ ነው። ስሙም ከግሪክ ቃላት የተገኘ ሲሆን "ከፊዚክስ ባሻገር" የሚል ትርጉም አለው። ምክንያቱም በስሜት ህዋሳችን ከምናየው በላይ ያሉ ጥያቄዎችን ስለሚዳስስ ነው። ሜታፊዚሻኖች ሁሉም እውቀቶች ሊመነጩባቸው የሚችሉ "የመጀመሪያ መርሆችን" ይፈልጋሉ።</p>

            <h3>Key Questions in Metaphysics</h3>
            <p>Metaphysics grapples with foundational questions that shape our understanding of the world.</p>
            <ul class="card-list">
                <li><strong>What is real?</strong> Is what we see and touch the only reality, or is there something beyond it?</li>
                <li><strong>What is the mind-body problem?</strong> What is the relationship between our consciousness (mind) and our physical body?</li>
                <li><strong>Is there a God?</strong> Can we prove God's existence?</li>
                <li><strong>Are our actions truly free?</strong> Are we in control of our choices, or are they predetermined?</li>
            </ul>
            <p>የሜታፊዚክስ ቁልፍ ጥያቄዎች አለምን የምንረዳበትን መንገድ የሚቀርጹ መሰረታዊ ጥያቄዎችን ያነሳሉ።</p>
            <ul class="card-list">
                <li><strong>እውነታ ምንድን ነው?</strong> የምናየው እና የምንነካው ብቻ ነው እውነት ወይስ ከዛ በላይ የሆነ ነገር አለ?</li>
                <li><strong>የአእምሮ እና የሰውነት ችግር ምንድን ነው?</strong> በህሊናችን (አእምሯችን) እና በአካላዊ ሰውነታችን መካከል ያለው ግንኙነት ምንድን ነው?</li>
                <li><strong>አምላክ አለ?</strong> የአምላክን መኖር ማረጋገጥ እንችላለን?</li>
                <li><strong>ድርጊቶቻችን በእውነት ነፃ ናቸው?</strong> በምርጫችን ላይ ቁጥጥር አለን ወይስ አስቀድሞ የተወሰኑ ናቸው?</li>
            </ul>

            <h3>The Four Aspects of Metaphysics</h3>
            <p>Metaphysical questions can be broken down into four key areas:</p>
            <ul class="card-list">
                <li><strong>Cosmology:</strong> The study of the origin and nature of the universe as an orderly system. It asks if the universe came about by accident or design, and if it has a purpose.</li>
                <li><strong>Theology:</strong> The study of God. It asks questions about God's existence, attributes, and relationship with humanity.</li>
                <li><strong>Anthropology:</strong> The study of human beings. It explores the mind-body relationship, our moral status (e.g., born good or evil), and the extent of our free will.</li>
                <li><strong>Ontology:</strong> The study of existence itself. It questions what it means for something to exist and whether reality is found in matter or spirit, and if it is fixed or constantly changing.</li>
            </ul>
            <p>የሜታፊዚክስ ጥያቄዎች በአራት ዋና ዋና ክፍሎች ሊከፈሉ ይችላሉ፦</p>
            <ul class="card-list">
                <li><strong>ኮስሞሎጂ:</strong> የአጽናፈ ዓለም አመጣጥ እና ባህሪን የሚያጠና ነው። አጽናፈ ዓለሙ በአጋጣሚ ወይስ በንድፍ እንደመጣ እና ዓላማ እንዳለው ይጠይቃል።</li>
                <li><strong>ቲዎሎጂ:</strong> የአምላክን ጽንሰ-ሀሳብ ያጠናል። የአምላክን መኖር፣ ባህሪያት እና ከሰው ልጆች ጋር ያለውን ግንኙነት በተመለከተ ጥያቄዎችን ያነሳል።</li>
                <li><strong>አንትሮፖሎጂ:</strong> የሰው ልጆችን የሚያጠና ነው። በአእምሮ እና በአካል መካከል ያለውን ግንኙነት፣ የሞራል ሁኔታችንን (ለምሳሌ ጥሩ ሆነው መወለድ ወይም መጥፎ) እና ነፃ ምርጫችን ምን ያህል እንደሆነ ይፈትሻል።</li>
                <li><strong>ኦንቶሎጂ:</strong> የህልውናን ባህሪ የሚያጠና ነው። አንድ ነገር መኖሩ ምን ማለት እንደሆነ እና እውነታው በቁስ ወይም በመንፈስ ላይ የተመሰረተ እንደሆነ፣ እንዲሁም ቋሚ ወይም ተለዋዋጭ እንደሆነ ይጠይቃል።</li>
            </ul>
        </section>

        <section class="card">
            <h2>Epistemology: The Study of Knowledge 🧐</h2>
            <p>Epistemology, also known as the theory of knowledge, is the branch of philosophy that studies the nature, source, and validity of knowledge. The term comes from the Greek words "episteme" (knowledge) and "logos" (study). It asks foundational questions like, "What is knowledge?" and "How do we know something is true?"</p>
            <p>ኤፒስተሞሎጂ፣ የእውቀት ቲዎሪ በመባልም የሚታወቀው፣ የእውቀትን ባህሪ፣ ምንጭ እና ተዓማኒነት የሚያጠና የፍልስፍና ዘርፍ ነው። ስሙም ከግሪክ ቃላት "ኤፒስተሜ" (እውቀት) እና "ሎጎስ" (ጥናት) የመጣ ነው። "እውቀት ምንድን ነው?" እና "አንድ ነገር እውነት መሆኑን እንዴት እናውቃለን?" የሚሉ መሰረታዊ ጥያቄዎችን ያነሳ።</p>

            <h3>Key Questions in Epistemology</h3>
            <p>Epistemology challenges us to think critically about what we accept as knowledge.</p>
            <ul class="card-list">
                <li><strong>What is the difference between knowledge and belief or opinion?</strong></li>
                <li><strong>What are the reliable sources of knowledge?</strong> Is it our senses, reason, or something else?</li>
                <li><strong>How can we be sure that our perceptions are correct?</strong> (e.g., a stick appears bent in water, but it's not)</li>
                <li><strong>Is truth relative or absolute?</strong> Can what is true today be false tomorrow?</li>
            </ul>
            <p>ኤፒስተሞሎጂ እንደ እውቀት የምንቀበለውን ነገር በወሳኝ አስተሳሰብ እንድናይ ይሞግተናል።</p>
            <ul class="card-list">
                <li><strong>በእውቀት እና በእምነት ወይም በአስተያየት መካከል ያለው ልዩነት ምንድን ነው?</strong></li>
                <li><strong>የእውቀት ተዓማኒ ምንጮች ምንድን ናቸው?</strong> በስሜት ህዋሳችን፣ በምክንያታችን ወይስ በሌላ ነገር ነው?</li>
                <li><strong>የምናየው ነገር ትክክል መሆኑን እንዴት እርግጠኞች እንሆናለን?</strong> (ለምሳሌ፣ በውሃ ውስጥ ያለ እንጨት የተጣመመ ይመስላል፣ ግን አይደለም)</li>
                <li><strong>እውነት አንፃራዊ ነው ወይስ ፍፁም?</strong> ዛሬ እውነት የሆነ ነገር ነገ ውሸት ሊሆን ይችላል?</li>
            </ul>

            <h3>The Sources of Human Knowledge</h3>
            <p>Epistemology identifies several ways we gain knowledge. Often, people prioritize one source over others.</p>
            <ul class="card-list">
                <li><strong>Empiricism (Sense Experience):</strong> Knowledge comes from our senses and experience. It is immediate and universal for humans, but it can be unreliable, as senses can be deceived and are often incomplete. For instance, some light waves are invisible to the naked eye.</li>
                <li><strong>Rationalism (Reason):</strong> Knowledge is primarily derived from reason, thought, and logic. Rationalists believe the mind organizes sensory data into a meaningful system. In its extreme form, it claims we can gain irrefutable knowledge independently of our senses.</li>
                <li><strong>Intuition:</strong> The direct apprehension of knowledge not derived from conscious reasoning or perception. It's a sudden "flash of insight." While it can lead to breakthroughs, it's not a safe method on its own and should be checked against other sources.</li>
                <li><strong>Revelation:</strong> Knowledge received from a supernatural or transcendent source. This is of prime importance in religion and is accepted by faith. Believers see it as an absolute and omniscient source of truth.</li>
                <li><strong>Authority:</strong> Knowledge accepted as true because it comes from experts, tradition, or respected sources like teachers and textbooks. It is a necessary source for civilization, but its validity depends on the correctness of the authority's foundations.</li>
            </ul>
            <p>ኤፒስተሞሎጂ እውቀትን የምናገኝባቸውን በርካታ መንገዶች ይለያል። ብዙ ጊዜ፣ ሰዎች ከአንድ ምንጭ የበለጠ ለሌላው ቅድሚያ ይሰጣሉ።</p>
            <ul class="card-list">
                <li><strong>ኤምፒሪሲዝም (የስሜት ህዋሳት ልምድ):</strong> እውቀት የሚገኘው ከስሜት ህዋሳችን እና ልምዳችን ነው። ለሰዎች ቀጥተኛ እና ሁለንተናዊ ቢሆንም፣ ስሜታችን ሊታለል ስለሚችል እና ብዙ ጊዜም ያልተሟላ በመሆኑ ተዓማኒ ላይሆን ይችላል። ለምሳሌ፣ አንዳንድ የብርሃን ሞገዶች በአይን አይታዩም።</li>
                <li><strong>ራሽናሊዝም (ምክንያት):</strong> እውቀት በዋነኝነት የሚመነጨው በምክንያት፣ በአስተሳሰብ እና በሎጂክ ነው። ራሽናሊስቶች አእምሮ የስሜት ህዋሳትን መረጃ ወደ ትርጉም ያለው ስርዓት ያደራጃል ብለው ያምናሉ። በከፍተኛ ደረጃ ደግሞ፣ ከስሜት ህዋሳት ነፃ የሆነ የማይካድ እውቀት ማግኘት እንችላለን ይላሉ።</li>
                <li><strong>ኢንቱዊሽን (ራዕይ/ብልጭታ):</strong> ከንቃተ-ህሊና አስተሳሰብ ወይም ከስሜት ህዋሳት ግንዛቤ ያልተገኘ ቀጥተኛ የእውቀት ግንዛቤ ነው። "ድንገተኛ ግንዛቤ ብልጭታ" ተብሎም ይገለጻል። ግኝቶችን ሊያስገኝ ቢችልም፣ ብቻውን አስተማማኝ ዘዴ አይደለም እና ከሌሎች የእውቀት ምንጮች ጋር መረጋገጥ አለበት።</li>
                <li><strong>ሬቬሌሽን (ራዕይ):</strong> ከከተፈጥሮ በላይ ወይም ከፍ ካለ ምንጭ የመጣ እውቀት ነው። በሃይማኖት መስክ ከፍተኛ ጠቀሜታ ያለው እና በእምነት ተቀባይነትን ያገኛል። አማኞች ይህንን ምንጭ ፍጹም እና ሁሉን አዋቂ የእውነት ምንጭ አድርገው ይመለከቱታል።</li>
                <li><strong>አውቶሪቲ (ሥልጣን):</strong> እውቀት የሚቀበለው ከባለሙያዎች፣ ከወግ ወይም ከተከበሩ ምንጮች እንደ መምህራን እና የመማሪያ መጽሐፍት ስለመጣ ነው። ለሥልጣኔ አስፈላጊ ምንጭ ቢሆንም፣ ተዓማኒነቱ ግን ሥልጣኑ በተመሠረተበት መሠረት ትክክለኛነት ላይ የተመካ ነው።</li>
            </ul>
        </section>

        <section class="card">
            <h2>What are Axiology and Logic? 🤔</h2>
            <p>Axiology and Logic are two more of the core branches of philosophy, each with a distinct focus. Axiology is all about the philosophical study of value, while Logic is the study of correct reasoning and arguments. They help us understand what is good, beautiful, and just, and how to think about these things clearly.</p>
            <p>አክሲዮሎጂ እና ሎጂክ የፍልስፍና ዋና ቅርንጫፎች ሲሆኑ፣ እያንዳንዳቸው የራሳቸው የሆነ ትኩረት አላቸው። አክሲዮሎጂ የዋጋዎች ፍልስፍናዊ ጥናት ሲሆን፣ ሎጂክ ደግሞ የትክክለኛ ምክንያታዊ አስተሳሰብ እና ክርክሮችን የሚያጠና ነው። ሁለቱም ጥሩ፣ ቆንጆ እና ፍትሃዊ የሆነውን ለመረዳት እና ስለእነዚህ ነገሮች በአግባቡ ለማሰብ ይረዱናል።</p>

            <h3>Axiology: The Study of Value ⚖️</h3>
            <p>Axiology is the philosophical study of value, or the worth of something. The word comes from the Greek words "Axios" (value, worth) and "logos" (study of). Axiology asks fundamental questions about what we consider good, preferable, or valuable, and where these ideas come from.</p>
            <p>አክሲዮሎጂ የዋጋዎችን ወይም የአንድን ነገር ዋጋ የሚያጠና የፍልስፍና ዘርፍ ነው። ቃሉ "Axios" (ዋጋ) እና "logos" (ጥናት) ከሚሉት የግሪክ ቃላት የተገኘ ነው። አክሲዮሎጂ እንደ ጥሩ፣ ተመራጭ ወይም ጠቃሚ የምንላቸው ነገሮች ምን እንደሆኑ እና እነዚህ ሃሳቦች ከየት እንደመጡ የሚሉ መሰረታዊ ጥያቄዎችን ይጠይቃል።</p>
            
            <h4>Key Branches of Axiology</h4>
            <p>Axiology is divided into three main areas of value:</p>
            <ul class="card-list">
                <li><strong>Ethics (Moral Philosophy):</strong> This is the study of moral principles, values, and rules that define what is good or bad, right or wrong. It's the search for standards to guide human conduct. Ethics has three sub-branches:
                    <ul class="card-list-nested">
                        <li><strong>Normative Ethics:</strong> Seeks to determine the actual rules and standards by which we should live.</li>
                        <li><strong>Meta-ethics:</strong> Investigates the meaning of ethical terms like "good" and "bad" and how ethical statements can be verified.</li>
                        <li><strong>Applied Ethics:</strong> Applies moral rules to specific practical problems, such as capital punishment or abortion.</li>
                    </ul>
                </li>
                <li><strong>Aesthetics:</strong> This is the theory of beauty and art. It explores our artistic and aesthetic experiences, and asks questions about what makes something beautiful or creative. It questions if there can be an objective standard for beauty.</li>
                <li><strong>Social and Political Philosophy:</strong> This studies the value judgments that operate within a civil society and government. It asks questions about the best forms of government, justice, and the purpose of laws.</li>
            </ul>
            <p>አክሲዮሎጂ በሦስት ዋና ዋና የዋጋ ዘርፎች ይከፈላል፦</p>
            <ul class="card-list">
                <li><strong>ሥነምግባር (ሞራል ፍልስፍና):</strong> ጥሩ ወይም መጥፎ፣ ትክክል ወይም ስህተት የሆነውን የሚገልጹትን የሞራል መርሆች፣ እሴቶች እና ደንቦች የሚያጠና ነው። የሰውን ባህሪ ለመምራት የሚያገለግሉ መመዘኛዎችን ይፈልጋል። ሥነምግባር ሦስት ንዑስ ክፍሎች አሉት፦
                    <ul class="card-list-nested">
                        <li><strong>ኖርማቲቭ ሥነምግባር:</strong> በምን ዓይነት ደንቦች እና መመዘኛዎች መኖር እንዳለብን ለማወቅ ይፈልጋል።</li>
                        <li><strong>ሜታ-ሥነምግባር:</strong> እንደ "ጥሩ" እና "መጥፎ" ያሉ የሥነምግባር ቃላት ትርጉም ምን እንደሆነ ይመረምራል።</li>
                        <li><strong>ተግባራዊ ሥነምግባር (Applied Ethics):</strong> እንደ ሞት ቅጣት ወይም ፅንስ ማቋረጥ ባሉ ልዩ የሞራል ችግሮች ላይ የሥነምግባር መርሆችን ተግባራዊ ያደርጋል።</li>
                    </ul>
                </li>
                <li><strong>ውበት ጥናት (Aesthetics):</strong> የውበት እና የኪነ ጥበብ ንድፈ ሃሳብ ነው። ስለ ጥበባዊ ልምዶቻችን የሚመረምር ሲሆን አንድን ነገር ቆንጆ ወይም ፈጠራ የሚያደርገው ምን እንደሆነ ይጠይቃል። ለውበት ተጨባጭ መስፈርት ሊኖር እንደሚችልም ይጠይቃል።</li>
                <li><strong>ማህበራዊ እና ፖለቲካዊ ፍልስፍና:</strong> በሲቪል ማህበረሰብ እና በመንግስት ውስጥ የሚሰሩ የዋጋ ፍርዶችን ያጠናል። ስለ ምርጥ የመንግስት ዓይነቶች፣ ፍትህ እና የህግ አላማ ጥያቄዎችን ያነሳል።</li>
            </ul>

            <h3>Logic: The Study of Correct Reasoning 💡</h3>
            <p>Logic is the study of the principles of correct reasoning. It provides the tools and methods for evaluating the validity and soundness of arguments. By studying logic, we learn how to construct good arguments and identify fallacies or errors in reasoning.</p>
            <p>ሎጂክ የትክክለኛ ምክንያታዊ አስተሳሰብ መርሆችን የሚያጠና ነው። የክርክሮችን ትክክለኛነት እና ጤናማነት ለመገምገም የሚያገለግሉ መሳሪያዎችን እና ዘዴዎችን ይሰጣል። ሎጂክን በማጥናት፣ ጥሩ ክርክሮችን እንዴት መገንባት እንደምንችል እና በማመዛዘን ውስጥ ያሉ ስህተቶችን ወይም አላስፈላጊ መደምደሚያዎችን (fallacies) እንዴት መለየት እንደምንችል እንማራለን።</p>

            <h4>Key Questions in Logic</h4>
            <ul class="card-list">
                <li><strong>What makes an argument valid or invalid?</strong></li>
                <li><strong>What is a fallacy?</strong> How can we spot a fallacious argument?</li>
                <li><strong>What is the relationship between a premise and a conclusion in an argument?</strong></li>
            </ul>
            <p>የሎጂክ ቁልፍ ጥያቄዎች</p>
            <ul class="card-list">
                <li><strong>አንድ ክርክር ትክክለኛ ወይም ትክክል ያልሆነው እንዴት ነው?</strong></li>
                <li><strong>አላስፈላጊ መደምደሚያ (fallacy) ምንድን ነው?</strong> እንዴትስ መለየት እንችላለን?</li>
                <li><strong>በክርክር ውስጥ ባለው መነሻ ሃሳብ (premise) እና መደምደሚያ (conclusion) መካከል ያለው ግንኙነት ምንድን ነው?</strong></li>
            </ul>
        </section>

        <section class="card">
            <h2>Why is Philosophy Important? 🌟</h2>
            <p>Socrates famously said, "The unexamined life is not worth living." Studying philosophy gives us the tools to critically examine our lives and the world around us. It helps us develop key skills that are essential for self-actualization and personal growth.</p>
            <p>ለምን ፍልስፍና አስፈላጊ ነው? 🌟</p>
            <p>ሶቅራጥስ "ያልተመረመረ ህይወት መኖር ዋጋ የለውም" ብሏል። ፍልስፍናን ማጥናት ህይወታችንን እና በዙሪያችን ያለውን ዓለም በጥልቀት ለመመርመር የሚያስችሉ መሳሪያዎችን ይሰጠናል። ለራስ-እውን መሆን እና ለግል እድገት ወሳኝ የሆኑ ክህሎቶችን እንድናዳብር ይረዳናል።</p>

            <h3>Benefits of Studying Philosophy</h3>
            <ul class="card-list">
                <li><strong>Intellectual Independence:</strong> Philosophy helps you develop your own beliefs and opinions, rather than just accepting those of others.</li>
                <li><strong>Critical and Creative Thinking:</strong> It refines your ability to think critically, reason logically, and develop original perspectives on complex issues.</li>
                <li><strong>Flexibility and Tolerance:</strong> By exploring diverse philosophical views, you learn that no single viewpoint is definitively true. This fosters open-mindedness and tolerance for different ideas.</li>
                <li><strong>Dealing with Uncertainty:</strong> Philosophy helps us recognize that not all knowledge is absolutely certain. This frees us from rigid thinking and a sense of wonder, allowing us to see familiar things in new ways.</li>
            </ul>
            <p>የፍልስፍና ጥናት ጥቅሞች</p>
            <ul class="card-list">
                <li><strong>አስተሳሰባዊ ነጻነት:</strong> ፍልስፍና የሌሎችን እምነት ከመቀበል ይልቅ የራስዎን እምነት እና አመለካከት እንዲያዳብሩ ይረዳዎታል።</li>
                <li><strong>ወሳኝ እና ፈጠራ ያለው አስተሳሰብ:</strong> በጥልቀት የማሰብ፣ በምክንያታዊነት የማመዛዘን እና ውስብስብ ጉዳዮች ላይ የራስዎን አመለካከት የማዳበር ችሎታዎን ያሳድጋል።</li>
                <li><strong>ተለዋዋጭነት እና መቻቻል:</strong> የተለያዩ የፍልስፍና አመለካከቶችን በመመርመር፣ አንድ ነጠላ አመለካከት ብቻ ፍፁም እውነት እንዳልሆነ ይገነዘባሉ። ይህ ክፍት አስተሳሰብን እና ለተለያዩ ሀሳቦች መቻቻልን ያዳብራል።</li>
                <li><strong>የማይመረመር ነገርን መቋቋም:</strong> ፍልስፍና ሁሉም እውቀቶች ፍፁም እርግጠኛ እንዳልሆኑ እንድንገነዘብ ይረዳናል። ይህ ከጥብቅ አስተሳሰብ ነፃ ያወጣን እና ነገሮችን በአዲስ መንገድ እንድንመለከት ያደርጋል።</li>
            </ul>
        </section>
    </main>
</body>
</html>
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
          <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Geography: A Scientific Exploration of Our Earth</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
            margin: 0;
            padding: 0;
            background-color: #f5f9fc;
        }
        
        .container {
            width: 100%;
            background-color: white;
            padding: 20px;
            box-sizing: border-box;
        }
        
        .content {
            max-width: 900px;
            margin: 0 auto;
        }
        
        h1 {
            color: #2c3e50;
            text-align: center;
            border-bottom: 2px solid #3498db;
            padding-bottom: 10px;
            margin-bottom: 30px;
            font-size: 28px;
        }
        
        h2 {
            color: #2980b9;
            margin-top: 30px;
            border-left: 5px solid #3498db;
            padding-left: 15px;
            font-size: 24px;
        }
        
        h3 {
            color: #16a085;
            margin-top: 25px;
            font-size: 20px;
        }
        
        h4 {
            font-size: 18px;
        }
        
        .note-box {
            background-color: #e8f4fc;
            border-left: 4px solid #3498db;
            padding: 15px;
            margin: 20px 0;
            border-radius: 0 5px 5px 0;
        }
        
        .amharic {
            font-family: 'Nyala', 'Abyssinica SIL', sans-serif;
            background-color: #f0f7f4;
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
            border-left: 4px solid #27ae60;
        }
        
        .theme-box {
            background-color: #f9f9f9;
            border: 1px solid #ddd;
            border-radius: 8px;
            padding: 15px;
            margin: 15px 0;
        }
        
        .theme-title {
            font-weight: bold;
            font-size: 1.1em;
            color: #e74c3c;
            margin-bottom: 10px;
        }
        
        .emoji {
            font-size: 1.2em;
            margin-right: 5px;
        }
        
        .advantages, .disadvantages {
            padding: 10px 15px;
            border-radius: 5px;
            margin: 10px 0;
        }
        
        .advantages {
            background-color: #e8f8f5;
            border-left: 4px solid #2ecc71;
        }
        
        .disadvantages {
            background-color: #fdedec;
            border-left: 4px solid #e74c3c;
        }
        
        .advantages h4, .disadvantages h4 {
            margin-top: 0;
        }
        
        .advantages h4 {
            color: #27ae60;
        }
        
        .disadvantages h4 {
            color: #c0392b;
        }
        
        ul {
            padding-left: 20px;
        }
        
        li {
            margin-bottom: 8px;
        }
        
        .map-elements {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 15px;
            margin: 20px 0;
        }
        
        .map-element {
            background-color: #f5f5f5;
            padding: 12px;
            border-radius: 5px;
            border: 1px solid #ddd;
        }
        
        @media (max-width: 768px) {
            .container {
                padding: 15px;
            }
            
            h1 {
                font-size: 24px;
            }
            
            h2 {
                font-size: 20px;
            }
            
            h3 {
                font-size: 18px;
            }
            
            .map-elements {
                grid-template-columns: 1fr;
            }
        }
        
        @media (max-width: 480px) {
            .container {
                padding: 10px;
            }
            
            h1 {
                font-size: 22px;
            }
            
            h2, h3 {
                font-size: 18px;
            }
            
            .amharic, .theme-box, .advantages, .disadvantages {
                padding: 10px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="content">
            <h1>Geography: A Scientific Exploration of Our Earth</h1>
            
            <h2>1. What Is Geography?</h2>
            <p>Geography is much more than just memorizing countries and capitals. It's the scientific study of the Earth, exploring how physical, biological, and human elements vary across different places and over time. Geographers analyze the intricate relationships between these elements to understand the complex tapestry of our planet.</p>
            
            <div class="amharic">
                <h3>የጂኦግራፊ ትርጉም</h3>
                <p>ጂኦግራፊ የምድርን ገጽታ ላይ ያሉ የአካላዊ፣ የባዮሎጂ �ና የሰው ልጅ ክስተቶችን፣ እንዲሁም የእነዚህን ግንኙነቶች እና ተለዋዋጭነት በቦታ እና በጊዜ ውስጥ የሚያጠና የሳይንስ ዘርፍ ነው። በአጭሩ፣ ስለ ምድራችን ሁሉን አቀፍ እና ሳይንሳዊ እይታ �ሰጣል።</p>
            </div>
            
            <h2>2. The Scope and Approaches of Geography</h2>
            <p>Geography is a holistic, interdisciplinary field that helps us understand how the Earth's spatial structures have changed and will continue to change. The scope of geography is the Earth's surface—the thin habitable zone where the atmosphere, lithosphere, hydrosphere, and biosphere all interact.</p>
            <p>Geographers use two main approaches to study this vast field:</p>
            <ul>
                <li><strong>Topical (Systematic) Geography:</strong> This approach focuses on specific categories of physical or human phenomena across the Earth. For example, studying all the world's mountains or the global patterns of a specific type of agriculture.</li>
                <li><strong>Regional Geography:</strong> This approach focuses on the associations and interrelationships of various elements within a specific region. For example, studying the climate, culture, and economy of the Horn of Africa as a single, interconnected system.</li>
            </ul>
            
            <div class="amharic">
                <h3>የጂኦግራፊ ጥናት ወሰን እና አቀራረቦች</h3>
                <p>ጂኦግራፊ አጠቃላይ እና በርካታ የትምህርት ዘርፎችን የሚያካትት ሳይንስ ነው። የጥናቱ ወሰን ሰዎች የሚኖሩበት የምድር ገጽ ክፍል ሲሆን፣ ይህ ክፍል �ግሞ የከባቢ አየር፣ የድንጋይ ንጣፍ፣ የውሃ አካል እና የባዮስፌር መስተጋብር የሚፈጠርበት ቀጭን ዞን ነው። ጂኦግራፊን ለመረዳት ሁለት ዋና ዋና አቀራረቦች አሉ፡ ቶፒካል (ሥርዓታዊ) ጂኦግራፊ (ለምሳሌ የአለምን ተራራዎች ወይም የአየር ንብረት ስርዓቶችን ማጥናት) እና የአካባቢ ጂኦግራፊ (ለምሳሌ የአንድን የተወሰነ አካባቢ የአየር ንብረት፣ ባህል እና ኢኮኖሚን ​​በአንድ ላይ ማጥናት)።</p>
            </div>
            
            <h2>3. The Five Core Themes of Geography</h2>
            <p>These five themes are the foundation of geographical study. They help us organize and understand information about the world.</p>
            
            <div class="theme-box">
                <div class="theme-title"><span class="emoji">📍</span> A. Location</div>
                <p>Location is simply a specific place or position. It's the starting point for geographical studies. We can describe location in two ways:</p>
                <ul>
                    <li><strong>Absolute Location:</strong> The exact, precise position of a place, given using coordinates (latitude and longitude) or a specific address. For example, the absolute location of Addis Ababa is approximately 9.03° N latitude and 38.74° E longitude.</li>
                    <li><strong>Relative Location:</strong> A place's position in relation to other places. For example, "Ethiopia is located in the Horn of Africa, east of Sudan."</li>
                </ul>
                
                <div class="amharic">
                    <h3>ቦታ 📍</h3>
                    <p>ቦታ የአንድ የተወሰነ ስፍራ ወይም አቀማመጥን ያመለክታል። ቦታን በሁለት መንገድ መግለጽ ይቻላል፡ አብሶሉት (ፍፁም) ቦታ፣ እሱም የአንድ ቦታ ትክክለኛ መጋጠሚያ (ለምሳሌ በኬክሮስና ኬንትሮስ) የሚገለጽ ሲሆን፣ ሪላቲቭ (አንፃራዊ) ቦታ ደግሞ የአንድን ቦታ አቀማመጥ ከሌሎች ቦታዎች ጋር በማነጻጸር የሚገልጽ ነው።</p>
                </div>
            </div>
            
            <div class="theme-box">
                <div class="theme-title"><span class="emoji">🏙️</span> B. Place</div>
                <p>Place refers to a location's unique physical and human characteristics. Every place has its own identity, shaped by its landforms, water bodies, plants, and human population, including their culture and way of life.</p>
                
                <div class="amharic">
                    <h3>ስፍራ 🏙️</h3>
                    <p>ስፍራ የአንድን ቦታ አካላዊና ሰብአዊ ገጽታዎችን ያመለክታል። እያንዳንዱ ስፍራ የራሱ የሆነ ማንነት ያለው ሲሆን፣ ይህ ማንነት በምድሩ አቀማመጥ፣ በውሃ አካሎቹ፣ በእፅዋት እና በሰዎች ብዛትና ባህል �ገለጻል። ጂኦግራፊያዊ ስፍራዎችን ለማወዳደር �ና ለመለየት ይረዳል።</p>
                </div>
            </div>
            
            <div class="theme-box">
                <div class="theme-title"><span class="emoji">🤝</span> C. Human-Environment Interaction</div>
                <p>This theme explores the dynamic relationship between people and their natural surroundings. Humans impact the environment and, in turn, are influenced by it. This interaction involves three key aspects:</p>
                <ul>
                    <li><strong>Dependency:</strong> Humans rely on nature for essentials like food, water, and shelter.</li>
                    <li><strong>Adaptation:</strong> People change their lifestyles and behavior to fit a new environment (e.g., wearing warm clothes in cold climates).</li>
                    <li><strong>Modification:</strong> Humans change the environment to suit their needs, such as building dams or clearing forests for farming.</li>
                </ul>
                
                <div class="amharic">
                    <h3>የሰው ልጅ እና የተፈጥሮ መስተጋብር 🤝</h3>
                    <p>ይህ የጥናት ክፍል በሰው ልጆች እና በተፈጥሮ አካባቢያቸው መካከል ያለውን ዘላቂ ግንኙነት ይመለከታል። ይህ ግንኙነት በሶስት ገጽታዎች ይገለጻል፡ ጥገኝነት (በተፈጥሮ ላይ ለኑሮ መመካት)፣ መላመድ (አኗኗራችንን ለአካባቢው መቀየር) እና ለውጥ (አካባቢን ለፍላጎታችን ማስተካከል ለምሳሌ ግድብ መገንባት)።</p>
                </div>
            </div>
            
            <div class="theme-box">
                <div class="theme-title"><span class="emoji">✈️</span> D. Movement</div>
                <p>Movement is all about the translocation of people, goods, and ideas from one location to another. This theme is crucial for understanding how human civilization has spread and developed. The movement of people allowed humans to inhabit all parts of the globe, the movement of goods facilitates trade, and the movement of ideas promotes the growth of knowledge, culture, and technology.</p>
                
                <div class="amharic">
                    <h3>እንቅስቃሴ ✈️</h3>
                    <p>እንቅስቃሴ የሰው ልጆች፣ እቃዎች እና ሃሳቦች ከአንዱ ቦታ ወደ ሌላው የሚጓዙበትን ሁኔታ ያመለክታል። ይህ የሰው ልጅ ስልጣኔ እንዴት እንደተስፋፋ እና እንዳደገ ለመረዳት አስፈላጊ ነው። ይህ እንቅስቃሴ የሰዎችን መዛወር፣ የእቃዎች መጓጓዣ እና የሃሳቦች መስፋፋትን ያካትታል።</p>
                </div>
            </div>
            
            <div class="theme-box">
                <div class="theme-title"><span class="emoji">🌐</span> E. Region</div>
                <p>A region is a geographic area with distinctive characteristics that set it apart from neighboring areas. Regions can be defined in two ways:</p>
                <ul>
                    <li><strong>Formal Region:</strong> An area with a shared, uniform characteristic, such as a country with a single government or a climate zone with similar temperature and rainfall patterns.</li>
                    <li><strong>Functional (Nodal) Region:</strong> An area organized around a central point or "node" and defined by the connections within it, like a city and its surrounding suburbs linked by transportation or economic ties.</li>
                </ul>
                
                <div class="amharic">
                    <h3>ክልል 🌐</h3>
                    <p>ክልል በአጎራባች ስፍራዎች ከሚለየው የተለየ ባህሪ ያለው ጂኦግራፊያዊ አካባቢ ነው። ክልሎች በሁለት መልኩ ሊገለጹ ይችላሉ፡ ፎርማል (መደበኛ) ክልል፣ እሱም በአንድ አይነት ባህሪ (ለምሳሌ የአየር ሁኔታ ወይም ቋንቋ) የሚገለጽ ሲሆን፣ ፈንክሽናል (ተግባራዊ) ክልል ደግሞ በአንድ ማዕከላዊ ነጥብ ዙሪያ በተፈጠሩ ግንኙነቶች (ለምሳሌ ከተማና የአካባቢዋ የትራንስፖርት ግንኙነት) የሚገለጽ ነው።</p>
                </div>
            </div>
            
            <h2>Ethiopia and the Horn of Africa: Location, Shape, and Size</h2>
            
            <h3>1. The Horn of Africa <span class="emoji">🌍</span></h3>
            <p>The Horn of Africa is the easternmost extension of the African continent. It is home to four countries: Djibouti, Eritrea, Ethiopia, and Somalia. These nations share deep cultural and historical ties. Among them, Ethiopia is the largest in size, while Djibouti is the smallest.</p>
            
            <div class="amharic">
                <h3>የአፍሪካ ቀንድ</h3>
                <p>የአፍሪካ ቀንድ የአፍሪካ አህጉር ወደ ምስራቅ የምትዘረጋ ጠባብ ክፍል ሲሆን፣ ጅቡቲ፣ ኤርትራ፣ ኢትዮጵያ እና ሶማሊያ የተባሉ ሀገራትን ያቀፈ ነው። እነዚህ ሀገራት ረዥም የጋራ ታሪክ እና ባህል አላቸው። ከነዚህ ሀገራት ኢትዮጵያ በስፋት ትልቋ ስትሆን፣ ጅቡቲ ደግሞ ትንሿ ነች።</p>
            </div>
            
            <h3>2. Location of Ethiopia <span class="emoji">📍</span></h3>
            <p>A country's location can be described in two ways: astronomical and relative.</p>
            
            <h4>A. Astronomical Location</h4>
            <p>This is also known as absolute or mathematical location. It uses lines of latitude and longitude to give a precise position. Ethiopia is located between 3°N and 15°N latitudes and 33°E to 48°E longitudes.</p>
            <p><strong>Impact of Latitude:</strong> Because Ethiopia is located between the Equator and the Tropic of Cancer, it has a tropical climate, though this is significantly modified by its high altitude.</p>
            <p><strong>Impact of Longitude:</strong> The longitudinal extension of 15 degrees means there's a difference of one hour between the country's most eastern and western points. For convenience, the whole country uses a single time zone (GMT+3).</p>
            
            <div class="amharic">
                <h3>የኢትዮጵያ ቦታ አቀማመጥ</h3>
                <p>የኢትዮጵያ ቦታ በሁለት መንገድ ይገለጻል፡- በአስትሮኖሚካል (ፍጹም) እና በሪላቲቭ (አንፃራዊ) አቀማመጥ።</p>
                <p><strong>የአስትሮኖሚካል ቦታ:</strong> ይህ ቦታ በኬክሮስና ኬንትሮስ መስመሮች በመጠቀም የሚሰጥ ትክክለኛ አቀማመጥ ነው። ኢትዮጵያ በ3°ሰ እና በ15°ሰ ኬክሮስ እና በ33°ም እና በ48°ም ኬንትሮስ መካከል ትገኛለች። የኬክሮስ አቀማመጥ ኢትዮጵያ �ሐሩር የአየር ንብረት እንዲኖራት ያደርጋል።</p>
            </div>
            
            <h4>B. Relative Location</h4>
            <p>This describes a country's location in relation to other countries, landmasses, or water bodies.</p>
            <p><strong>Neighbors:</strong> Ethiopia is bordered by Eritrea to the north, Djibouti and Somalia to the east, Kenya to the south, and Sudan and South Sudan to the west.</p>
            <p><strong>Wider Context:</strong> Ethiopia is located in the Horn of Africa, southwest of the Arabian Peninsula, and in the Nile Basin.</p>
            <p>This unique location has several implications:</p>
            <ul>
                <li><strong>Climate:</strong> Its position relative to the Indian and Atlantic Oceans, and the African and Asian landmasses, plays a huge role in its climate patterns.</li>
                <li><strong>Socio-cultural:</strong> Ethiopia's proximity to the Middle East meant it was one of the earliest places to receive major world religions like Christianity and Islam.</li>
                <li><strong>Political:</strong> Its strategic position near the Red Sea—a major global trade route—has often made it a focus of geopolitical interest, leading to both challenges and opportunities.</li>
            </ul>
            
            <div class="amharic">
                <h3>አንፃራዊ ቦታ</h3>
                <p>ይህ የአንድን ሀገር ቦታ ከሌሎች ሀገሮች፣ አህጉራት ወይም የውሃ አካላት ጋር በማነፃፀር የሚገለጽ ነው። ኢትዮጵያ በአፍሪካ ቀንድ ውስጥ የምትገኝ ሲሆን፣ በጎረቤት ሀገሮች፣ በቀይ ባህር አቅራቢያ እና በናይል ተፋሰስ ውስጥ መገኘቷ ለአየር ንብረቷ፣ ለባህሏ እና ለፖለቲካዊ ታሪኳ ትልቅ አስተዋፅዖ አለው።</p>
            </div>
            
            <h3>3. Size of Ethiopia <span class="emoji">📏</span></h3>
            <p>With a total area of approximately 1,106,000 square kilometers, Ethiopia is the 8th largest country in Africa. This large size has both advantages and disadvantages.</p>
            
            <div class="advantages">
                <h4>Advantages 👍</h4>
                <ul>
                    <li><strong>Diverse Agro-Ecological Zones:</strong> The large area creates a variety of climates and environments suitable for different types of agriculture.</li>
                    <li><strong>Abundant Resources:</strong> A large landmass often means a wider variety of natural resources.</li>
                    <li><strong>Extensive Arable Land:</strong> More land is available for farming, which is vital for a country with a large population.</li>
                    <li><strong>Larger Population:</strong> A bigger country can support a larger population, providing a larger workforce and consumer base.</li>
                    <li><strong>Defense:</strong> It offers a greater depth for military defense against external invasion.</li>
                </ul>
            </div>
            
            <div class="disadvantages">
                <h4>Disadvantages 👎</h4>
                <ul>
                    <li><strong>Infrastructure Costs:</strong> It costs a lot of money to build roads, railways, and other infrastructure across such a vast territory.</li>
                    <li><strong>Difficult Administration:</strong> Managing and governing a large area effectively can be a challenge.</li>
                    <li><strong>Security Concerns:</strong> Protecting a long border requires a large army and significant resources.</li>
                    <li><strong>Socio-economic Integration:</strong> It can be difficult to connect all parts of the country socially and economically.</li>
                </ul>
            </div>
            
            <div class="amharic">
                <h3>የኢትዮጵያ ስፋት 📏</h3>
                <p>ኢትዮጵያ ወደ 1,106,000 ካሬ ኪሎሜትር ስፋት ያላት ሲሆን፣ በአፍሪካ 8ኛዋ ትልቁ ሀገር ነች።</p>
                <p><strong>ጥቅሞች:</strong> ሰፊ ቦታው የተለያዩ የእርሻ ስነ-ምህዳሮችን፣ ብዙ የተፈጥሮ ሀብቶችን እና ሰፊ የእርሻ መሬትን እንዲኖራት አድርጓታል። እንዲሁም ለውጭ ወረራ ከመከላከል አንፃር ትልቅ ጠቀሜታ አለው።</p>
                <p><strong>ጉዳቶች:</strong> ሰፊ ቦታው በመሠረተ ልማት ግንባታ ላይ ከፍተኛ ወጪን ይጠይቃል፣ ሀገሪቱን በአስተዳደር ረገድ አስቸጋሪ ያደርጋል፣ እንዲሁም የህብረተሰብ እና የኢኮኖሚ ትስስርን ያደናቅፋል።</p>
            </div>
            
            <h3>4. The Shape of Ethiopia: Implications and Analysis</h3>
            <p>Countries have different shapes, such as compact, fragmented, elongated, perforated, and protruded. Ethiopia has a compact shape, which is generally considered advantageous. A compact shape means the distance from the center to any of its borders is relatively uniform.</p>
            
            <h4>Implications of Ethiopia's Compact Shape</h4>
            <p>A country's shape has significant impacts on its administration, defense, and economic integration.</p>
            <ul>
                <li><strong>Defense:</strong> A compact shape makes it easier to defend the country's borders because military forces can be deployed quickly and efficiently from a central point to any border area.</li>
                <li><strong>Socio-economic Integration:</strong> Compactness facilitates easier movement of people, goods, and ideas within the country, which promotes national unity and economic development.</li>
                <li><strong>Administration:</strong> A compact shape simplifies the administration of the country from a central government, making it easier to manage and enforce laws across the nation.</li>
            </ul>
            
            <div class="amharic">
                <h3>የኢትዮጵያ ቅርፅ እና አንድምታው</h3>
                <p>የአንድ ሀገር ቅርፅ በአስተዳደሩ፣ በመከላከሉ እና በኢኮኖሚ ውህደቱ ላይ ትልቅ ተጽእኖ አለው። ኢትዮጵያ ኮምፓክት (የተሰበሰበ) ቅርፅ አላት፣ ይህም በአጠቃላይ ጠቀሜታ አለው።</p>
                <p><strong>መከላከያ:</strong> ወታደራዊ ኃይሎችን በቀላሉ ወደ ድንበር በማንቀሳቀስ ሀገርን ለመከላከል ቀላል ያደርጋል።</p>
                <p><strong>ማህበራዊ-ኢኮኖሚያዊ ውህደት:</strong> የሰዎችና የእቃዎች እንቅስቃሴን ስለሚያቀልል የሀገር ውስጥ ትስስርን ያጠናክራል እንዲሁም የኢኮኖሚ እድገትን ያግዛል።</p>
                <p><strong>አስተዳደር:</strong> ማዕከላዊ መንግሥት አገሪቱን ለማስተዳደር እና ህግን ለማስፈፀም ቀላል ያደርገዋል።</p>
            </div>
            
            <h4>Measuring the Shape of Countries</h4>
            <p>To measure how "compact" a country is, geographers use several indices. These indices measure how much a country's shape deviates from a perfect circle, which is the most compact shape.</p>
            <ul>
                <li><strong>Area-Boundary Ratio (A/B Ratio):</strong> This compares the country's total area to the length of its boundary. A higher ratio indicates greater compactness. Ethiopia has a high A/B ratio (210.27), showing its compact nature.</li>
                <li><strong>Boundary-Circumference Ratio (B/C Ratio):</strong> This compares the length of a country's boundary to the circumference of a circle with the same area. The closer the ratio is to 1, the more compact the country. Ethiopia's ratio is 1.41, which is relatively close to 1.</li>
            </ul>
            
            <div class="amharic">
                <h3>የሀገሮችን ቅርፅ መለኪያ</h3>
                <p>የሀገሮችን ቅርፅ ለመለካት የተለያዩ ስሌቶች ጥቅም ላይ ይውላሉ። እነዚህ ስሌቶች የአንድ ሀገር ቅርፅ ከክብ ቅርፅ ምን ያህል እንደሚርቅ ይለካሉ። ለምሳሌ፣ የቦታ እና የድንበር ርዝመት ጥምርታ (A/B Ratio) ሲሆን፣ መጠኑ ከፍ ባለ ቁጥር ሀገሪቱ ይበልጥ የተሰበሰበች ትሆናለች። ኢትዮጵያ 210.27 ጥምርታ አላት።</p>
            </div>
            
            <h2>5. Basic Skills of Map Reading</h2>
            <p>A map is a two-dimensional, scaled representation of a part or the whole of the Earth's surface. Maps are essential tools for geographers and many other disciplines because they help us visualize and analyze geographical information that can't be easily seen in person.</p>
            
            <h3>Key Elements of a Map (Marginal Information)</h3>
            <p>To read a map effectively, you need to understand its key elements, which are usually found around the map's margin.</p>
            
            <div class="map-elements">
                <div class="map-element">
                    <strong>Title:</strong> Tells you what the map is about.
                </div>
                <div class="map-element">
                    <strong>Key (Legend):</strong> Explains what the symbols and colors on the map mean.
                </div>
                <div class="map-element">
                    <strong>Scale:</strong> Shows the ratio between the distance on the map and the actual distance on the ground. It can be a written statement, a representative fraction (e.g., 1:50,000), or a linear bar.
                </div>
                <div class="map-element">
                    <strong>North Arrow:</strong> Indicates which direction is north on the map, helping you orient yourself.
                </div>
                <div class="map-element">
                    <strong>Margin:</strong> The frame of the map that defines the mapped area.
                </div>
                <div class="map-element">
                    <strong>Date of Compilation:</strong> Tells you when the map was made, which is important for knowing if the information is current.
                </div>
            </div>
            
            <h3>Principles of Map Reading</h3>
            <ul>
                <li><strong>Symbol Visualization:</strong> You must be able to translate map symbols into real-world features. For example, understanding that a blue line on a map represents a river.</li>
                <li><strong>Direction:</strong> Always locate the North Arrow first to orient yourself correctly. Once you know north, you can determine all other directions.</li>
                <li><strong>Grid System:</strong> Maps often have a grid of lines with numbers. These numbers form a grid reference, which allows you to pinpoint a specific location with high accuracy.</li>
            </ul>
            
            <div class="amharic">
                <h3>የካርታ ንባብ መሰረታዊ ነገሮች</h3>
                <p>ካርታ የምድርን ገጽታ ወይም የክፍሉን ክፍል በሁለት ገጽታ ላይ በልኬት የሚያሳይ ምስል ነው። ካርታን በትክክል ለማንበብ የሚረዱ ዋና ዋና ነገሮች አሉ፡</p>
                <p><strong>ርዕስ (Title):</strong> ካርታው �ስለ ምን እንደሆነ ይነግረናል።</p>
                <p><strong>ምልክት (Key/Legend):</strong> �በካርታው ላይ ያሉትን ምልክቶች ትርጉም ያብራራል።</p>
                <p><strong>ስኬል (Scale):</strong> በካርታው ላይ ያለው ርቀት በእውነተኛው መሬት ላይ ካለው ርቀት ጋር ያለውን ጥምርታ �ሳያል።</p>
                <p><strong>የሰሜን አቅጣጫ ምልክት (North Arrow):</strong> የሰሜን አቅጣጫን በማሳየት እራስዎን በትክክል ለማስቀመጥ ይረዳል።</p>
                <p><strong>የመረጃ ቀን (Date of Compilation):</strong> ካርታው የተዘጋጀበትን ቀን ያሳያል።</p>
                <p><strong>የካርታ ንባብ መርሆዎች</strong> ምልክቶችን ከእውነተኛው ዓለም ጋር ማገናኘት፣ አቅጣጫን ማወቅ (በተለይ ሰሜንን) እና የፍርግርግ ስርዓት (grid system) መጠቀምን ያካትታሉ።</p>
            </div>
        </div>
    </div>
</body>
</html>
      `
    },
   {
  id: 'chapter2',
  title: 'Chapter 2: The Geology Of Ethiopia and the Horn of Africa',
  content: `
    <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.8; max-width: 100%; overflow-x: auto; padding: 10px; background-color: #f8f9fa;">
      <h1 style="font-size: 2.8em; color: #007bff; text-align: center; border-bottom: 2px solid #007bff; padding-bottom: 10px;">Geology of Ethiopia and the Horn</h1>
      
      <h2 style="font-size: 2.2em; color: #343a40; border-left: 4px solid #17a2b8; padding-left: 10px;">Introduction</h2>
      <p style="font-size: 1.1em; color: #495057;">Geology is the study of Earth's evolution, materials, and processes. Much of this study involves interpreting past events and subsurface features through visible clues and indirect methods. Key techniques include <strong style="color: #28a745;">geophysics</strong>, <strong style="color: #28a745;">geochemistry</strong>, and <strong style="color: #28a745;">geochronology</strong>, which help infer geological history from observable and measurable data.</p>
      
      <h2 style="font-size: 2.2em; color: #343a40; border-left: 4px solid #17a2b8; padding-left: 10px;">Chapter Focus</h2>
      <p style="font-size: 1.1em; color: #495057;">This chapter will cover the geology of Ethiopia and the Horn, including:</p>
      <ul style="list-style-type: none; padding-left: 0;">
        <li style="background-color: #e9ecef; margin-bottom: 10px; padding: 15px; border-left: 4px solid #6c757d; border-radius: 6px;"><strong>Geologic Processes:</strong> Both <strong style="color: #dc3545;">endogenic</strong> (internal, such as volcanic activity and tectonic processes) and <strong style="color: #17a2b8;">exogenic</strong> (external, such as weathering and erosion) processes shape the landforms.</li>
        <li style="background-color: #e9ecef; margin-bottom: 10px; padding: 15px; border-left: 4px solid #6c757d; border-radius: 6px;"><strong>Rift Valley Formation:</strong> Examining how this significant geological feature was formed.</li>
        <li style="background-color: #e9ecef; margin-bottom: 10px; padding: 15px; border-left: 4px solid #6c757d; border-radius: 6px;"><strong>Mineral Endowment:</strong> Understanding Ethiopia's mineral resources in relation to its geological processes.</li>
      </ul>
      
      <h2 style="font-size: 2.2em; color: #343a40; border-left: 4px solid #17a2b8; padding-left: 10px;">Continental Drift Theory</h2>
      <p style="font-size: 1.1em; color: #495057;">Australian climatologist Alfred Wegener proposed that continents were once a single supercontinent, <strong style="color: #ffc107;">Pangaea</strong>, which later split into Gondwanaland and Laurasia. His evidence included:</p>
      <ul style="list-style-type: none; padding-left: 0;">
        <li style="background-color: #e9ecef; margin-bottom: 10px; padding: 15px; border-left: 4px solid #6c757d; border-radius: 6px;"><strong>Fit of Continents:</strong> Matching coastlines of different continents.</li>
        <li style="background-color: #e9ecef; margin-bottom: 10px; padding: 15px; border-left: 4px solid #6c757d; border-radius: 6px;"><strong>Mountain Belts and Rock Types:</strong> Correspondence of geological features across continents.</li>
        <li style="background-color: #e9ecef; margin-bottom: 10px; padding: 15px; border-left: 4px solid #6c757d; border-radius: 6px;"><strong>Fossil Distribution:</strong> Similar fossils found on now-separated continents.</li>
        <li style="background-color: #e9ecef; margin-bottom: 10px; padding: 15px; border-left: 4px solid #6c757d; border-radius: 6px;"><strong>Paleoclimates:</strong> Evidence of past climates consistent with the reassembly of continents.</li>
      </ul>
      
      <h2 style="font-size: 2.2em; color: #343a40; border-left: 4px solid #17a2b8; padding-left: 10px;">Geologic Processes</h2>
      <ul style="list-style-type: none; padding-left: 0;">
        <li style="background-color: #e9ecef; margin-bottom: 10px; padding: 15px; border-left: 4px solid #6c757d; border-radius: 6px;"><strong>Endogenic Processes:</strong> Include volcanic activity and tectonic movements like folding and faulting, which create structural features such as rift valleys and mountain ranges.</li>
        <li style="background-color: #e9ecef; margin-bottom: 10px; padding: 15px; border-left: 4px solid #6c757d; border-radius: 6px;"><strong>Exogenic Processes:</strong> Involve weathering, erosion, and deposition that modify existing landforms.</li>
      </ul>
      
      <h2 style="font-size: 2.2em; color: #343a40; border-left: 4px solid #17a2b8; padding-left: 10px;">Geological Time Scale</h2>
      <p style="font-size: 1.1em; color: #495057;">The Earth's history is divided into:</p>
      <ul style="list-style-type: none; padding-left: 0;">
        <li style="background-color: #e9ecef; margin-bottom: 10px; padding: 15px; border-left: 4px solid #6c757d; border-radius: 6px;"><strong>Eons:</strong> Largest time units.</li>
        <li style="background-color: #e9ecef; margin-bottom: 10px; padding: 15px; border-left: 4px solid #6c757d; border-radius: 6px;"><strong>Eras:</strong> Major subdivisions of eons.</li>
        <li style="background-color: #e9ecef; margin-bottom: 10px; padding: 15px; border-left: 4px solid #6c757d; border-radius: 6px;"><strong>Periods:</strong> Subdivisions of eras.</li>
        <li style="background-color: #e9ecef; margin-bottom: 10px; padding: 15px; border-left: 4px solid #6c757d; border-radius: 6px;"><strong>Epochs:</strong> Smallest units of geological time.</li>
      </ul>
      <p style="font-size: 1.1em; color: #495057;">These divisions are based on significant geological and biological events, with time measurements varying in length. The geological time scale helps describe Earth's history and the evolution of life over billions of years.</p>
      
      <h2 style="font-size: 2.2em; color: #343a40; border-left: 4px solid #17a2b8; padding-left: 10px;">Age Dating Techniques</h2>
      <h3 style="font-size: 1.8em; color: #5d6d7e; border-bottom: 1px dashed #dcdcdc; padding-bottom: 5px;">A. Relative Dating</h3>
      <p style="font-size: 1.1em; color: #495057;">Relative dating determines the comparative age of rocks or fossils based on geological evidence. Methods include:</p>
      <ul style="list-style-type: none; padding-left: 0;">
        <li style="background-color: #e9ecef; margin-bottom: 10px; padding: 15px; border-left: 4px solid #6c757d; border-radius: 6px;"><strong>Fossil Comparison:</strong> Identifying unique fossils to date rocks to specific geologic periods.</li>
        <li style="background-color: #e9ecef; margin-bottom: 10px; padding: 15px; border-left: 4px solid #6c757d; border-radius: 6px;"><strong>Stratigraphy:</strong> Observing rock layers where younger rocks are deposited on top of older ones.</li>
      </ul>
      
      <h3 style="font-size: 1.8em; color: #5d6d7e; border-bottom: 1px dashed #dcdcdc; padding-bottom: 5px;">B. Absolute Dating</h3>
      <p style="font-size: 1.1em; color: #495057;">Also known as radiometric dating, this technique measures the decay of radioactive elements to determine the exact age of rocks. Major methods include:</p>
      <ul style="list-style-type: none; padding-left: 0;">
        <li style="background-color: #e9ecef; margin-bottom: 10px; padding: 15px; border-left: 4px solid #6c757d; border-radius: 6px;"><strong>Carbon-14 Dating:</strong> Measures the decay of carbon-14 in once-living organisms. Useful for dating materials up to about 50,000 years old. Carbon-14 has a half-life of 5730 years.</li>
        <li style="background-color: #e9ecef; margin-bottom: 10px; padding: 15px; border-left: 4px solid #6c757d; border-radius: 6px;"><strong>Potassium-Argon Dating:</strong> Used for dating rocks, particularly those with potassium-40. It measures the decay of potassium-40 to argon-40. Problems arise if the rock has been heated above 125°C, affecting the results.</li>
      </ul>
      
      <h2 style="font-size: 2.2em; color: #343a40; border-left: 4px solid #17a2b8; padding-left: 10px;">Geological Processes and Landforms</h2>
      <h3 style="font-size: 1.8em; color: #5d6d7e; border-bottom: 1px dashed #dcdcdc; padding-bottom: 5px;">Precambrian Era (4.5 billion – 600 million years ago)</h3>
      <p style="font-size: 1.1em; color: #495057;"><strong>Processes:</strong> Major orogenesis (mountain building) and intrusive igneous activity, followed by denudation that reduced mountains to near-level surfaces.</p>
      <p style="font-size: 1.1em; color: #495057;"><strong>Landforms:</strong> Basement rocks, including metamorphic and crystalline rocks, are found beneath newer formations in various regions like Tigray, Gambella, and southern Ethiopia.</p>
      
      <h3 style="font-size: 1.8em; color: #5d6d7e; border-bottom: 1px dashed #dcdcdc; padding-bottom: 5px;">Paleozoic Era (600 million – 225 million years ago)</h3>
      <p style="font-size: 1.1em; color: #495057;"><strong>Processes:</strong> Denudation of Precambrian mountains, leading to a peneplained surface with some residual features.</p>
      <p style="font-size: 1.1em; color: #495057;"><strong>Landforms:</strong> Rare rocks from this era in Ethiopia, with sediments forming continental and marine deposits transported southward and eastward.</p>
      
      <h3 style="font-size: 1.8em; color: #5d6d7e; border-bottom: 1px dashed #dcdcdc; padding-bottom: 5px;">Mesozoic Era (225 – 70 million years ago)</h3>
      <p style="font-size: 1.1em; color: #495057;"><strong>Processes:</strong> Alternating subsidence and epeirogenesis led to sea invasions and regressions, affecting the Horn of Africa. Deposition of sands, muds, and limestones occurred, creating major sedimentary layers.</p>
      <p style="font-size: 1.1em; color: #495057;"><strong>Landforms:</strong></p>
      <ul style="list-style-type: none; padding-left: 0;">
        <li style="background-color: #e9ecef; margin-bottom: 10px; padding: 15px; border-left: 4px solid #6c757d; border-radius: 6px;"><strong>Adigrat Sandstone:</strong> Older and thicker in the southeast.</li>
        <li style="background-color: #e9ecef; margin-bottom: 10px; padding: 15px; border-left: 4px solid #6c757d; border-radius: 6px;"><strong>Hintalo Limestone:</strong> Found interbedded with gypsum and shale.</li>
        <li style="background-color: #e9ecef; margin-bottom: 10px; padding: 15px; border-left: 4px solid #6c757d; border-radius: 6px;"><strong>Upper Sandstone:</strong> Younger and thicker in the southeast, thinner in the northwest.</li>
        <li style="background-color: #e9ecef; margin-bottom: 10px; padding: 15px; border-left: 4px solid #6c757d; border-radius: 6px;"><strong>Sedimentary Rocks:</strong> Cover 25% of Ethiopia's landmass, found in regions like central Tigray and the Southeast lowlands.</li>
      </ul>
      <p style="font-size: 1.1em; color: #495057;">These eras and processes reflect the complex geological history that has shaped the landforms of Ethiopia and the Horn.</p>
      
      <h2 style="font-size: 2.2em; color: #343a40; border-left: 4px solid #17a2b8; padding-left: 10px;">Cenozoic Era Geologic Processes (70 million years ago – Present)</h2>
      <h3 style="font-size: 1.8em; color: #5d6d7e; border-bottom: 1px dashed #dcdcdc; padding-bottom: 5px;">1. Uplifting of the Arabo-Ethiopian Landmass and Lava Outpouring</h3>
      <p style="font-size: 1.1em; color: #495057;"><strong>Uplifting:</strong> Began in the Upper Jurassic and Cretaceous, continuing into the Paleocene and Oligocene. The Arabo-Ethiopian landmass uplifted significantly, reaching up to 2,000 meters during the Eocene. This uplift was epeirogenic, affecting large blocks of the landmass.</p>
      <p style="font-size: 1.1em; color: #495057;"><strong>Lava Outpouring:</strong> The uplift caused extensive fracturing of the crust, leading to massive basalt eruptions that formed the Ethiopian Plateau and the Rift Valley floor. The resulting lava, known as Trappean lava, created a thick layer of volcanic rock, which is visible in the plateau and volcanic mountains.</p>
      
      <h3 style="font-size: 1.8em; color: #5d6d7e; border-bottom: 1px dashed #dcdcdc; padding-bottom: 5px;">2. Formation of the Rift Valley</h3>
      <p style="font-size: 1.1em; color: #495057;"><strong>Tectonic Theory:</strong> The Rift Valley formed due to plate tectonics, with lateral movements causing parallel faults and a central depression. Major rifting began in the late Oligocene and Miocene, leading to the formation of the Red Sea, Gulf of Aden, and Afar Depression.</p>
      <p style="font-size: 1.1em; color: #495057;"><strong>Geological Effects:</strong> Rifting and faulting led to the separation of the Arabian Peninsula from Africa, the formation of basins and lakes, and the development of the Rift Valley's characteristic features like fault depressions and volcanic activity.</p>
      
      <h3 style="font-size: 1.8em; color: #5d6d7e; border-bottom: 1px dashed #dcdcdc; padding-bottom: 5px;">3. Quaternary Volcanic Eruptions and Depositions</h3>
      <p style="font-size: 1.1em; color: #495057;"><strong>Volcanic Activity:</strong> Renewed rifting and volcanism occurred in the Pliocene-Pleistocene Epochs. This activity, particularly in the Afar region and the main Ethiopian Rift, included numerous eruptions, forming volcanic cones and extensive lava fields.</p>
      <p style="font-size: 1.1em; color: #495057;"><strong>Recent Features:</strong> Includes active volcanoes like Erta Ale, volcanic hills, lava ridges, and thermal springs. The Quaternary period also saw significant climatic changes, affecting lake sizes and sediment deposition.</p>
      
      <h3 style="font-size: 1.8em; color: #5d6d7e; border-bottom: 1px dashed #dcdcdc; padding-bottom: 5px;">4. Quaternary Deposits</h3>
      <p style="font-size: 1.1em; color: #495057;"><strong>Types of Deposits:</strong></p>
      <ul style="list-style-type: none; padding-left: 0;">
        <li style="background-color: #e9ecef; margin-bottom: 10px; padding: 15px; border-left: 4px solid #6c757d; border-radius: 6px;"><strong>Lacustrine:</strong> From former lakebeds and swamps.</li>
        <li style="background-color: #e9ecef; margin-bottom: 10px; padding: 15px; border-left: 4px solid #6c757d; border-radius: 6px;"><strong>Fluvial:</strong> On riverbanks and floodplains.</li>
        <li style="background-color: #e9ecef; margin-bottom: 10px; padding: 15px; border-left: 4px solid #6c757d; border-radius: 6px;"><strong>Glacio-fluvial:</strong> On high mountains.</li>
        <li style="background-color: #e9ecef; margin-bottom: 10px; padding: 15px; border-left: 4px solid #6c757d; border-radius: 6px;"><strong>Aeolian:</strong> Windblown deposits.</li>
        <li style="background-color: #e9ecef; margin-bottom: 10px; padding: 15px; border-left: 4px solid #6c757d; border-radius: 6px;"><strong>Coastal and Marine:</strong> Sea-influenced deposits.</li>
      </ul>
      <p style="font-size: 1.1em; color: #495057;"><strong>Distribution:</strong> Found extensively in the Rift Valley, Baro lowlands, southern Borena, and northwestern lowlands. Cenozoic rocks cover 50% of Ethiopia's landmass, including volcanics and sediments.</p>
      <p style="font-size: 1.1em; color: #495057;">These processes and formations significantly shaped the current geological landscape of Ethiopia and the Horn of Africa.</p>
      
      <h2 style="font-size: 2.2em; color: #343a40; border-left: 4px solid #17a2b8; padding-left: 10px;">Brief Facts and Current State of Main Minerals in Ethiopia</h2>
      <h3 style="font-size: 1.8em; color: #5d6d7e; border-bottom: 1px dashed #dcdcdc; padding-bottom: 5px;">Gold</h3>
      <ul style="list-style-type: none; padding-left: 0;">
        <li style="background-color: #e9ecef; margin-bottom: 10px; padding: 15px; border-left: 4px solid #6c757d; border-radius: 6px;"><strong>Locations:</strong> Mined in Benishangul-Gumuz (Metekel) and Adola. Active mines include Dermi-dama, Sakoro, and Lega-dembi. Secondary deposits are found in Adola, Murmur Basin, Shakiso, and several other regions, including Gambella and Sidama.</li>
      </ul>
      
      <h3 style="font-size: 1.8em; color: #5d6d7e; border-bottom: 1px dashed #dcdcdc; padding-bottom: 5px;">Platinum</h3>
      <ul style="list-style-type: none; padding-left: 0;">
        <li style="background-color: #e9ecef; margin-bottom: 10px; padding: 15px; border-left: 4px solid #6c757d; border-radius: 6px;"><strong>Primary Mine:</strong> Yubdo in Wellega. Other reported occurrences include Delatti, Demi-Denissa, Bone Rivers, and Tullu Mountain in Sidama.</li>
      </ul>
      
      <h3 style="font-size: 1.8em; color: #5d6d7e; border-bottom: 1px dashed #dcdcdc; padding-bottom: 5px;">Tantalum</h3>
      <ul style="list-style-type: none; padding-left: 0;">
        <li style="background-color: #e9ecef; margin-bottom: 10px; padding: 15px; border-left: 4px solid #6c757d; border-radius: 6px;"><strong>Significant Deposit:</strong> Kenticha Tantalum mine in Adola, with over 17,000 metric tons of ore.</li>
      </ul>
      
      <h3 style="font-size: 1.8em; color: #5d6d7e; border-bottom: 1px dashed #dcdcdc; padding-bottom: 5px;">Coal</h3>
      <ul style="list-style-type: none; padding-left: 0;">
        <li style="background-color: #e9ecef; margin-bottom: 10px; padding: 15px; border-left: 4px solid #6c757d; border-radius: 6px;"><strong>Types:</strong> Lignite deposits are widespread, including in Nedjo (Wellega), Chilga (Gonder), and other areas. Potential exists in Beressa Valley, Sululta, and several other locations.</li>
      </ul>
      
      <h3 style="font-size: 1.8em; color: #5d6d7e; border-bottom: 1px dashed #dcdcdc; padding-bottom: 5px;">Gemstones</h3>
      <ul style="list-style-type: none; padding-left: 0;">
        <li style="background-color: #e9ecef; margin-bottom: 10px; padding: 15px; border-left: 4px solid #6c757d; border-radius: 6px;"><strong>Varieties:</strong> Amethyst, aquamarine, emerald, garnet, opal, peridot, sapphire, and tourmaline are found mainly in Amhara and Oromia, with significant opal discoveries in North Wello.</li>
      </ul>
      
      <h3 style="font-size: 1.8em; color: #5d6d7e; border-bottom: 1px dashed #dcdcdc; padding-bottom: 5px;">Potash</h3>
      <ul style="list-style-type: none; padding-left: 0;">
        <li style="background-color: #e9ecef; margin-bottom: 10px; padding: 15px; border-left: 4px solid #6c757d; border-radius: 6px;"><strong>Reserve Location:</strong> Danakil (Dallol Depression) in the Afar region, with believed significant reserves.</li>
      </ul>
      
      <h3 style="font-size: 1.8em; color: #5d6d7e; border-bottom: 1px dashed #dcdcdc; padding-bottom: 5px;">Gypsum and Anhydrite</h3>
      <ul style="list-style-type: none; padding-left: 0;">
        <li style="background-color: #e9ecef; margin-bottom: 10px; padding: 15px; border-left: 4px solid #6c757d; border-radius: 6px;"><strong>Production and Reserves:</strong> Limited production for domestic use, but large deposits are known in various regions, including the Red Sea coastal area, Danakil Depression, and others.</li>
      </ul>
      
      <h3 style="font-size: 1.8em; color: #5d6d7e; border-bottom: 1px dashed #dcdcdc; padding-bottom: 5px;">Clay</h3>
      <ul style="list-style-type: none; padding-left: 0;">
        <li style="background-color: #e9ecef; margin-bottom: 10px; padding: 15px; border-left: 4px solid #6c757d; border-radius: 6px;"><strong>Types and Locations:</strong> Industrial clay for bricks and ceramics is found in Adola, Abay gorge, Rift Valley lakes region, and Ambo.</li>
      </ul>
      
      <h3 style="font-size: 1.8em; color: #5d6d7e; border-bottom: 1px dashed #dcdcdc; padding-bottom: 5px;">Marble</h3>
      <ul style="list-style-type: none; padding-left: 0;">
        <li style="background-color: #e9ecef; margin-bottom: 10px; padding: 15px; border-left: 4px solid #6c757d; border-radius: 6px;"><strong>Quarrying Locations:</strong> Includes west Mekelle, south Adwa in Tigray, and various locations in West Hararghe and Gonder.</li>
      </ul>
      
      <h3 style="font-size: 1.8em; color: #5d6d7e; border-bottom: 1px dashed #dcdcdc; padding-bottom: 5px;">Construction Stones</h3>
      <ul style="list-style-type: none; padding-left: 0;">
        <li style="background-color: #e9ecef; margin-bottom: 10px; padding: 15px; border-left: 4px solid #6c757d; border-radius: 6px;"><strong>Types:</strong> Basalt, granite, limestone, and sandstone are used in construction, with volcanic rocks used for road surfacing and cement production.</li>
      </ul>
      
      <h2 style="font-size: 2.2em; color: #343a40; border-left: 4px solid #17a2b8; padding-left: 10px;">Mineral Potential Sites of Ethiopia</h2>
      <h3 style="font-size: 1.8em; color: #5d6d7e; border-bottom: 1px dashed #dcdcdc; padding-bottom: 5px;">1. Western and South-western Greenstone Belt</h3>
      <ul style="list-style-type: none; padding-left: 0;">
        <li style="background-color: #e9ecef; margin-bottom: 10px; padding: 15px; border-left: 4px solid #6c757d; border-radius: 6px;"><strong>Minerals:</strong> Includes gold (e.g., Dul, Tulu-Kape), platinum (e.g., Yubdo), base metals, molybdenite, and iron deposits. Notable sites include Bikilal and Chago.</li>
      </ul>
      
      <h3 style="font-size: 1.8em; color: #5d6d7e; border-bottom: 1px dashed #dcdcdc; padding-bottom: 5px;">2. Southern Greenstone Belt (Adola Belt)</h3>
      <ul style="list-style-type: none; padding-left: 0;">
        <li style="background-color: #e9ecef; margin-bottom: 10px; padding: 15px; border-left: 4px solid #6c757d; border-radius: 6px;"><strong>Minerals:</strong> Known for primary gold deposits (e.g., Lega-dembi, Sakaro), tantalum (e.g., Kenticha), and nickel deposits. Also includes other industrial minerals.</li>
      </ul>
      
      <h3 style="font-size: 1.8em; color: #5d6d7e; border-bottom: 1px dashed #dcdcdc; padding-bottom: 5px;">3. Northern Greenstone Belt (Tigray)</h3>
      <ul style="list-style-type: none; padding-left: 0;">
        <li style="background-color: #e9ecef; margin-bottom: 10px; padding: 15px; border-left: 4px solid #6c757d; border-radius: 6px;"><strong>Minerals:</strong> Contains gold deposits (e.g., Terakemti, Adi-Zeresenay), base metals, and placer gold occurrences.</li>
      </ul>
      <p style="font-size: 1.1em; color: #495057;">These regions highlight Ethiopia's rich mineral resources and potential for further exploration and exploitation.</p>
    </div>
  `
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