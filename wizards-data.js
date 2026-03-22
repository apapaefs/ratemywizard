const wizards = [
    {
        id: "gandalf",
        name: "Gandalf the Grey",
        title: "Istari, Wizard of the Order of Maiar",
        school: "University of Middle-earth, Shire Campus",
        department: "Department of Pyrotechnics & Applied Wisdom",
        image: "https://upload.wikimedia.org/wikipedia/commons/0/0d/Gandalf_fighting_the_Balrog_on_the_bridge_of_Khazad-d%C3%BBm.jpg",
        quality: 4.8,
        difficulty: 4.2,
        wouldTakeAgain: 92,
        numRatings: 247,
        hotness: true,
        tags: ["Inspirational", "Tough Grader", "Gives Good Feedback", "Respected", "Lecture Heavy", "Get Ready to Walk"],
        ratings: { awesome: 82, great: 10, good: 5, ok: 2, awful: 1 },
        breakdown: { "Knowledge": 5.0, "Accessibility": 2.1, "Clarity": 3.4, "Helpfulness": 4.9, "Charisma": 5.0, "Punctuality": 1.2 },
        reviews: [
            {
                quality: 5.0, difficulty: 5.0,
                course: "WAND 401: Advanced Fireworks & Pyrotechnics",
                date: "Oct 14, Third Age 3018", attendance: "Mandatory", forCredit: true, textbook: false, grade: "A+", wouldTakeAgain: true,
                text: "Gandalf is an INCREDIBLE instructor. His firework displays are literally life-changing. Just be prepared to go on a really long field trip. I signed up for a weekend seminar and ended up gone for over a year. Lost my deposit on my hobbit-hole. 10/10 would follow into Mordor again.",
                tags: ["Inspirational", "Tough Grader", "Amazing Lectures"], thumbsUp: 184, thumbsDown: 3
            },
            {
                quality: 5.0, difficulty: 4.0,
                course: "PHIL 301: The Art of Showing Up Precisely When You Mean To",
                date: "Mar 5, Third Age 3019", attendance: "Not Mandatory", forCredit: true, textbook: false, grade: "B+", wouldTakeAgain: true,
                text: "Great wizard, terrible sense of timing. Says he arrives 'precisely when he means to,' which apparently means three weeks after the assignment deadline. But honestly, the man knows his stuff. His midterm was just him yelling 'YOU SHALL NOT PASS' and failing everyone. Half the class dropped. Legends only survived.",
                tags: ["Hilarious", "Skip Class? You Won't Pass", "Tough Grader"], thumbsUp: 312, thumbsDown: 8
            },
            {
                quality: 4.0, difficulty: 3.0,
                course: "LEAD 200: Motivational Speaking for Reluctant Heroes",
                date: "Aug 22, Third Age 3018", attendance: "Mandatory", forCredit: true, textbook: false, grade: "A", wouldTakeAgain: true,
                text: "Prof Gandalf is great but he plays favorites. Gave all the hard assignments to one short kid and basically let the rest of us coast. Also his office hours are impossible - he's either in his office smoking pipe-weed or he's vanished to another realm entirely. No in-between. But when he IS there, best mentor ever.",
                tags: ["Caring", "Gives Good Feedback", "Skip Class? You Won't Pass"], thumbsUp: 156, thumbsDown: 12
            },
            {
                quality: 5.0, difficulty: 5.0,
                course: "SURV 500: Bridge Defense & Tactical Retreats",
                date: "Jan 15, Third Age 3019", attendance: "Mandatory", forCredit: true, textbook: false, grade: "A+", wouldTakeAgain: true,
                text: "The final exam was on an actual bridge with an actual Balrog. OSHA would have a field day. But watching the professor literally sacrifice himself to save the class? That's dedication. He came back a week later like nothing happened, wearing all white. Absolute king. Changed my major from Hobbit Studies to Wizardry.",
                tags: ["Inspirational", "Lecture Heavy", "Tough Grader"], thumbsUp: 501, thumbsDown: 2
            },
            {
                quality: 4.5, difficulty: 3.5,
                course: "PIPE 101: Introduction to Pipe-weed Appreciation",
                date: "Jun 8, Third Age 3017", attendance: "Not Mandatory", forCredit: false, textbook: false, grade: "A", wouldTakeAgain: true,
                text: "Easiest class I ever took. Prof Gandalf just sits there blowing smoke rings that turn into little ships and butterflies while telling stories about the Elder Days. He grades purely on vibes. I wrote my final paper on 'Longbottom Leaf vs. Old Toby: A Comparative Analysis' and got an A. Would absolutely recommend if you need an elective.",
                tags: ["Easy Grader", "Amazing Lectures", "Participation Matters"], thumbsUp: 203, thumbsDown: 5
            },
            {
                quality: 5.0, difficulty: 1.0,
                course: "EAGLE 101: Introduction to Giant Eagle Transportation",
                date: "Apr 3, Third Age 3019", attendance: "Not Mandatory", forCredit: false, textbook: false, grade: "C", wouldTakeAgain: true,
                text: "Why are there giant eagles that could've carried us to Mordor the whole time? I asked this during Q&A. Gandalf stared at me for 45 seconds, blew a smoke ring in my face, and moved on to the next question. After class he pulled me aside and said 'Some questions are not meant to be answered, young one.' I got a C on my next paper. Coincidence? I think not. The eagles are cool though.",
                tags: ["Hilarious", "Participation Matters", "Tough Grader"], thumbsUp: 892, thumbsDown: 4
            },
            {
                quality: 5.0, difficulty: 4.0,
                course: "FASH 200: Wizard Rebranding & Personal Image Management",
                date: "Mar 20, Third Age 3019", attendance: "Not Mandatory", forCredit: true, textbook: false, grade: "A-", wouldTakeAgain: true,
                text: "Professor Gandalf showed up to the first lecture in grey robes. Missed three weeks of class. Came back wearing all white, glowing, and riding a horse that costs more than my tuition. Zero explanation. When a student asked what happened he said 'I was remade.' This man got a tenure promotion and a wardrobe upgrade during his sabbatical. I can't even get my financial aid processed. King behavior.",
                tags: ["Inspirational", "Skip Class? You Won't Pass", "Respected"], thumbsUp: 445, thumbsDown: 7
            },
            {
                quality: 4.0, difficulty: 5.0,
                course: "CRIS 600: Crisis Management & Last-Minute Cavalry Arrivals",
                date: "May 1, Third Age 3019", attendance: "Mandatory", forCredit: true, textbook: false, grade: "B", wouldTakeAgain: true,
                text: "The ENTIRE GRADE is based on one group project. ONE. And Gandalf assigns the roles. I got 'distraction.' My friend got 'ringbearer.' Another kid literally just had to show up with horses at the end. The kid who showed up with horses got an A+. I got stabbed by an orc during the presentation and Gandalf said it was 'character building.' I'm in the hospital writing this review. Still giving 4 stars because the man makes you believe in yourself, even while bleeding.",
                tags: ["Tough Grader", "Beware of Group Projects", "Inspirational"], thumbsUp: 612, thumbsDown: 3
            }
        ]
    },
    {
        id: "saruman",
        name: "Saruman the White",
        title: "Head of the Istari Order (Formerly)",
        school: "University of Middle-earth, Isengard Campus",
        department: "Department of Industrial Magic & Applied Treachery",
        image: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Curun%C3%ADr.jpg",
        quality: 1.8,
        difficulty: 4.9,
        wouldTakeAgain: 8,
        numRatings: 163,
        hotness: false,
        tags: ["Tough Grader", "Lots of Homework", "Beware of Group Projects", "Test Heavy", "Would Not Recommend"],
        ratings: { awesome: 3, great: 5, good: 7, ok: 15, awful: 70 },
        breakdown: { "Knowledge": 4.8, "Accessibility": 0.5, "Clarity": 4.1, "Helpfulness": 0.8, "Charisma": 3.9, "Punctuality": 4.5 },
        reviews: [
            {
                quality: 1.0, difficulty: 5.0,
                course: "EVIL 401: Advanced Domination & Realm Conquest",
                date: "Sep 20, Third Age 3018", attendance: "Mandatory", forCredit: true, textbook: true, grade: "D", wouldTakeAgain: false,
                text: "DO NOT TAKE THIS CLASS. He literally tried to recruit the entire class into his personal army. The 'group project' was building siege weapons in the basement of Orthanc. Half my grade was based on 'loyalty to Saruman' which isn't even a real academic metric. Reported him to the Dean of Wizardry but he IS the Dean so nothing happened.",
                tags: ["Tough Grader", "Would Not Recommend", "Beware of Group Projects"], thumbsUp: 342, thumbsDown: 7
            },
            {
                quality: 2.0, difficulty: 5.0,
                course: "ORCH 300: Uruk-hai Management & Breeding Programs",
                date: "Nov 3, Third Age 3018", attendance: "Mandatory", forCredit: true, textbook: true, grade: "C-", wouldTakeAgain: false,
                text: "His voice is hypnotic and his lectures are strangely compelling. I walked in planning to drop the class and walked out having pledged my firstborn to his cause. Seriously though, bring earplugs. The man could sell sand in the Harad desert. Also he clear-cut the entire campus forest for 'lab materials.' The Ents were NOT happy.",
                tags: ["Lecture Heavy", "Participation Matters", "Beware of Group Projects"], thumbsUp: 278, thumbsDown: 11
            },
            {
                quality: 1.0, difficulty: 5.0,
                course: "TECH 450: Forbidden Technologies & Ring-craft",
                date: "Dec 1, Third Age 3018", attendance: "Mandatory", forCredit: true, textbook: true, grade: "F", wouldTakeAgain: false,
                text: "The textbook was literally written in Black Speech. The midterm was building a palantir from scratch. When I asked for extra credit he looked into my soul through a crystal ball and told me my family's deepest secrets. I have filed seven complaints. He gave me an F for 'insufficient ambition.' I just wanted to learn basic enchantments bro.",
                tags: ["Tough Grader", "Lots of Homework", "Would Not Recommend"], thumbsUp: 415, thumbsDown: 4
            },
            {
                quality: 3.0, difficulty: 4.0,
                course: "RHET 350: Persuasive Speaking & Voice of Command",
                date: "Jul 17, Third Age 3017", attendance: "Mandatory", forCredit: true, textbook: false, grade: "B", wouldTakeAgain: false,
                text: "OK I'll give him this - the man can SPEAK. Best lecturer I've ever had, honestly. His voice is like butter and thunder had a baby. The problem is he uses his teaching abilities for evil. My roommate took this class and now he's living in a tower somewhere calling himself 'The Hand of Saruman.' Please help.",
                tags: ["Amazing Lectures", "Lecture Heavy", "Participation Matters"], thumbsUp: 198, thumbsDown: 15
            },
            {
                quality: 1.0, difficulty: 5.0,
                course: "MGMT 500: Multi-campus Administrative Leadership",
                date: "Feb 2, Third Age 3019", attendance: "Mandatory", forCredit: true, textbook: true, grade: "F", wouldTakeAgain: false,
                text: "UPDATE: the Ents literally destroyed the entire campus. The library is underwater. My thesis was in there. Saruman is currently locked in his office tower refusing to come out. Class is cancelled indefinitely. I still owe tuition. This is the worst university experience of all three Ages. Transferring to Rivendell Community College.",
                tags: ["Would Not Recommend", "Tough Grader", "Skip Class? You Won't Pass"], thumbsUp: 567, thumbsDown: 2
            },
            {
                quality: 1.0, difficulty: 5.0,
                course: "COMM 400: Remote Communication via Palantir",
                date: "Oct 8, Third Age 3018", attendance: "Mandatory", forCredit: true, textbook: false, grade: "D+", wouldTakeAgain: false,
                text: "This class is basically Zoom but worse. Saruman makes us stare into palantirs for remote lectures and I'm 90% sure Sauron is listening in. I brought this up and Saruman said it was 'end-to-end encrypted.' It is NOT. My DMs to the class group chat are being read by a literal flaming eye in Mordor. Also Saruman uses the palantir like my grandpa uses FaceTime - just his enormous nose filling the entire orb. Reported to IT. IT is three orcs in a trench coat.",
                tags: ["Would Not Recommend", "Lots of Homework", "Lecture Heavy"], thumbsUp: 423, thumbsDown: 6
            },
            {
                quality: 2.0, difficulty: 4.5,
                course: "CORP 500: Vertical Integration & Tower-Based Management",
                date: "Jan 10, Third Age 3019", attendance: "Mandatory", forCredit: true, textbook: true, grade: "C", wouldTakeAgain: false,
                text: "Saruman runs this university like a Fortune 500 company led by a supervillain. He replaced the dining hall with an orc-operated mess tent. He calls students 'human resources.' The syllabus is a 200-page NDA. I tried to transfer and he said I was 'contractually bound to Isengard.' Someone please send help. The WiFi password is 'oneringtorulethemall' and the IT help desk is staffed entirely by Uruk-hai who keep grunting 'have you tried turning it off and on again.'",
                tags: ["Would Not Recommend", "Tough Grader", "Beware of Group Projects"], thumbsUp: 534, thumbsDown: 9
            },
            {
                quality: 1.5, difficulty: 5.0,
                course: "HAIR 350: Advanced Beard & Mane Maintenance for Dark Lords",
                date: "Aug 15, Third Age 3017", attendance: "Not Mandatory", forCredit: false, textbook: false, grade: "B+", wouldTakeAgain: false,
                text: "Only class where Saruman seemed genuinely passionate. Say what you will about the man, his beard game is IMMACULATE. He spent three lectures on conditioning techniques alone. The final was a beard presentation and he gave me a B+ because my braiding was 'adequate but lacked menace.' The only class I'd actually take again, except he's currently trapped in a tower surrounded by angry trees. 3/10 campus environment.",
                tags: ["Hilarious", "Participation Matters", "Tough Grader"], thumbsUp: 367, thumbsDown: 12
            }
        ]
    },
    {
        id: "merlin",
        name: "Merlin",
        title: "Court Wizard & Chief Adviser to King Arthur",
        school: "Royal Academy of Camelot",
        department: "Department of Prophecy, Shapeshifting & Royal Advisory",
        image: "https://upload.wikimedia.org/wikipedia/commons/7/79/Arthur-Pyle_The_Enchanter_Merlin.JPG",
        quality: 4.2,
        difficulty: 3.5,
        wouldTakeAgain: 78,
        numRatings: 189,
        hotness: false,
        tags: ["Respected", "Caring", "Tough Grader", "Gives Good Feedback", "Inspirational", "Confusing Sometimes"],
        ratings: { awesome: 58, great: 20, good: 12, ok: 7, awful: 3 },
        breakdown: { "Knowledge": 5.0, "Accessibility": 3.8, "Clarity": 2.8, "Helpfulness": 4.5, "Charisma": 4.2, "Punctuality": 2.0 },
        reviews: [
            {
                quality: 5.0, difficulty: 3.0,
                course: "PROPH 301: Introduction to Prophecy & Cryptic Warnings",
                date: "Spring, Year of Our Lord 512", attendance: "Mandatory", forCredit: true, textbook: false, grade: "A-", wouldTakeAgain: true,
                text: "Merlin is brilliant but he teaches the entire course backwards. Literally. He starts with the final exam and works toward the first lecture. Says he 'lives in reverse' which I'm pretty sure is not an accredited teaching method. But somehow I learned more in this class than any other. His prophecies for the midterm were spot on - because he already knew the answers. Is that cheating? I genuinely don't know.",
                tags: ["Inspirational", "Gives Good Feedback", "Lecture Heavy"], thumbsUp: 267, thumbsDown: 9
            },
            {
                quality: 4.0, difficulty: 4.0,
                course: "SHFT 250: Practical Shapeshifting & Animal Transformations",
                date: "Autumn, Year of Our Lord 510", attendance: "Mandatory", forCredit: true, textbook: false, grade: "B+", wouldTakeAgain: true,
                text: "Fun class but the practicals are INSANE. For the midterm he turned the entire class into squirrels and we had to find our way back to the lecture hall. Three students are still missing. He says they'll 'find their way back when the time is right' which is NOT a satisfactory answer, Merlin. Also he turned himself into a fish once and forgot to change back for two weeks. Class was cancelled.",
                tags: ["Caring", "Tough Grader", "Participation Matters"], thumbsUp: 312, thumbsDown: 14
            },
            {
                quality: 3.5, difficulty: 4.0,
                course: "ADVS 400: Royal Advisory & Kingmaking Seminar",
                date: "Winter, Year of Our Lord 513", attendance: "Mandatory", forCredit: true, textbook: false, grade: "B", wouldTakeAgain: true,
                text: "Merlin clearly plays favorites. The entire curriculum revolves around this ONE student named Arthur. We get it, Merlin, he's the chosen one. The rest of us are just trying to pass. For the final project he made Arthur pull a sword from a rock and gave him an A+. Meanwhile I wrote a 40-page thesis on medieval governance and got a B. The favoritism is unreal. Still a good teacher though.",
                tags: ["Respected", "Tough Grader", "Gives Good Feedback"], thumbsUp: 445, thumbsDown: 18
            },
            {
                quality: 4.5, difficulty: 3.0,
                course: "ENCH 201: Enchantments, Glamours & Practical Illusions",
                date: "Summer, Year of Our Lord 511", attendance: "Not Mandatory", forCredit: true, textbook: false, grade: "A", wouldTakeAgain: true,
                text: "Best elective at Camelot by far. Merlin taught us to enchant swords, create illusions, and talk to animals. He's incredibly patient and actually cares about his students. My only complaint is his office hours are in a cave. An actual cave. In the woods. With bats. He says it 'enhances the mystical atmosphere.' Sir, it enhances my anxiety. Still, fantastic wizard. 100% recommend.",
                tags: ["Caring", "Amazing Lectures", "Inspirational"], thumbsUp: 289, thumbsDown: 6
            },
            {
                quality: 4.0, difficulty: 3.5,
                course: "HIST 100: The Once & Future Curriculum",
                date: "Spring, Year of Our Lord 514", attendance: "Not Mandatory", forCredit: false, textbook: false, grade: "A-", wouldTakeAgain: true,
                text: "Merlin keeps spoiling future events in his history lectures. He accidentally told us how the kingdom ends, who betrays whom, and which knights don't make it. Then he said 'oops, you weren't supposed to know that yet' and tried to make us forget with a spell. It didn't fully work. I now have vague anxiety about someone named Mordred. Great class otherwise, very engaging.",
                tags: ["Hilarious", "Amazing Lectures", "Gives Good Feedback"], thumbsUp: 378, thumbsDown: 7
            },
            {
                quality: 4.0, difficulty: 4.5,
                course: "TECH 050: Introduction to Technology (For Wizards Born Before Time)",
                date: "Autumn, Year of Our Lord 515", attendance: "Mandatory", forCredit: true, textbook: false, grade: "B", wouldTakeAgain: true,
                text: "Merlin tried to teach us 'future technology' and showed us a drawing of something called a 'microwave.' He said in the future people would heat food using invisible waves. We burned him for witchcraft. He came back the next week and said 'I expected that.' He then showed us a drawing of something called 'Twitter' and said 'this one will be even worse than the fire.' Prophetic king.",
                tags: ["Hilarious", "Amazing Lectures", "Confusing Sometimes"], thumbsUp: 534, thumbsDown: 4
            },
            {
                quality: 5.0, difficulty: 2.0,
                course: "PETS 101: Care & Keeping of Magical Familiars",
                date: "Winter, Year of Our Lord 509", attendance: "Not Mandatory", forCredit: false, textbook: false, grade: "A+", wouldTakeAgain: true,
                text: "I would give Merlin my sword. That's it. That's the review.",
                tags: ["Inspirational", "Caring"], thumbsUp: 712, thumbsDown: 2
            },
            {
                quality: 3.0, difficulty: 4.5,
                course: "TIME 500: Temporal Mechanics & Why You Shouldn't Ask About It",
                date: "Spring, Year of Our Lord 516", attendance: "Mandatory", forCredit: true, textbook: false, grade: "C+", wouldTakeAgain: false,
                text: "Merlin accidentally made the entire class younger by 10 years during a demonstration. I'm now 8. I have to redo primary school. My student loans are still active. When I complained he said 'you should be grateful, most people pay good money to look younger.' Sir, I have a BEARD GROWING IN and I'm in the THIRD GRADE. The university says the credits still count though, so I'm technically an 8-year-old with a minor in Enchantment Studies.",
                tags: ["Tough Grader", "Confusing Sometimes", "Would Not Recommend"], thumbsUp: 623, thumbsDown: 15
            }
        ]
    },
    {
        id: "prospero",
        name: "Prospero",
        title: "Duke of Milan & Sorcerer Supreme of the Isle",
        school: "Tempest Island Magical Academy",
        department: "Department of Theatrical Sorcery & Spirit Binding",
        image: "https://upload.wikimedia.org/wikipedia/commons/9/9e/1797_Hamilton_Prospero_%26_Ariel_anagoria.JPG",
        quality: 3.8,
        difficulty: 4.5,
        wouldTakeAgain: 65,
        numRatings: 134,
        hotness: false,
        tags: ["Respected", "Tough Grader", "Lecture Heavy", "Gives Good Feedback", "Extra Credit", "Dramatic"],
        ratings: { awesome: 42, great: 23, good: 18, ok: 10, awful: 7 },
        breakdown: { "Knowledge": 4.7, "Accessibility": 2.5, "Clarity": 3.2, "Helpfulness": 3.9, "Charisma": 4.8, "Punctuality": 3.5 },
        reviews: [
            {
                quality: 4.0, difficulty: 5.0,
                course: "SPRT 401: Advanced Spirit Summoning & Binding",
                date: "Autumn 1611", attendance: "Mandatory", forCredit: true, textbook: true, grade: "B+", wouldTakeAgain: true,
                text: "Prospero is brilliant but his teaching assistant Ariel does literally ALL the work. I'm pretty sure Ariel grades our papers, runs the labs, controls the weather for outdoor lectures, AND handles course logistics. Meanwhile Prospero stands at the front monologuing about betrayal and rightful dukedoms. Sir, this is a sorcery class. Still, the spirit summoning practicals were incredible.",
                tags: ["Lecture Heavy", "Tough Grader", "Respected"], thumbsUp: 187, thumbsDown: 12
            },
            {
                quality: 3.5, difficulty: 4.5,
                course: "TEMP 300: Weather Manipulation & Storm Theory",
                date: "Spring 1610", attendance: "Mandatory", forCredit: true, textbook: false, grade: "B", wouldTakeAgain: true,
                text: "For the final he conjured an ACTUAL tempest and shipwrecked the visiting dean's boat. Said it was 'part of the curriculum.' The dean was furious. Prospero was somehow promoted. Also he keeps his daughter locked in the classroom and won't let her talk to any male students. Extremely awkward energy. Good weather spells though.",
                tags: ["Tough Grader", "Dramatic", "Amazing Lectures"], thumbsUp: 156, thumbsDown: 8
            },
            {
                quality: 4.5, difficulty: 4.0,
                course: "DRAM 250: Revenge, Forgiveness & the Dramatic Arts",
                date: "Winter 1611", attendance: "Not Mandatory", forCredit: true, textbook: false, grade: "A-", wouldTakeAgain: true,
                text: "This class changed my life. Prospero spent 12 weeks teaching us elaborate revenge schemes and then in the final lecture said 'actually, forgiveness is better' and made us write a reflection essay. The whole semester was an elaborate setup for a moral lesson. Absolute madman. I cried. Several students cried. Even Ariel cried and they're a spirit.",
                tags: ["Inspirational", "Caring", "Gives Good Feedback"], thumbsUp: 234, thumbsDown: 5
            },
            {
                quality: 3.0, difficulty: 5.0,
                course: "ISLE 100: Island Survival & Magical Self-Sufficiency",
                date: "Summer 1609", attendance: "Mandatory", forCredit: true, textbook: true, grade: "C+", wouldTakeAgain: false,
                text: "He stranded us on an island for the entire semester. No wifi. No boats. Just vibes and a monster named Caliban who kept trying to steal our lunches. Prospero said it was 'experiential learning.' I said it was a violation of several maritime laws. He broke his staff at the end of term and said he was retiring. He did not retire. He's teaching again next semester.",
                tags: ["Tough Grader", "Would Not Recommend", "Participation Matters"], thumbsUp: 301, thumbsDown: 14
            },
            {
                quality: 3.5, difficulty: 4.5,
                course: "THTR 300: The Lecture Within the Lecture",
                date: "Autumn 1612", attendance: "Mandatory", forCredit: true, textbook: false, grade: "B-", wouldTakeAgain: false,
                text: "Prospero does this thing where he lectures about magic, then WITHIN the lecture starts doing a PLAY about the lecture he's giving, and then within THAT play there's ANOTHER lecture. It's lectures all the way down. I got lost somewhere around layer three and when I raised my hand to ask which layer of reality we were in, he said 'All of them, child.' I have not slept since. Ariel brought me a blanket.",
                tags: ["Confusing Sometimes", "Lecture Heavy", "Amazing Lectures"], thumbsUp: 278, thumbsDown: 11
            },
            {
                quality: 2.0, difficulty: 5.0,
                course: "LIBR 450: Book Drowning & Knowledge Destruction",
                date: "Winter 1612", attendance: "Mandatory", forCredit: true, textbook: true, grade: "C", wouldTakeAgain: false,
                text: "FOR HIS FINAL ACT this man DROWNED HIS BOOKS. His research. His LIBRARY. Into the ocean. Said he was 'done with magic.' The man destroyed centuries of irreplaceable magical texts as a RETIREMENT GESTURE. The library was the only reason I enrolled here. It's underwater now. There's a fish living in the collected works of Agrippa. He then UN-retired the next semester. The books are still underwater. I am going to scream.",
                tags: ["Would Not Recommend", "Tough Grader", "Dramatic"], thumbsUp: 489, thumbsDown: 7
            },
            {
                quality: 4.5, difficulty: 3.0,
                course: "FRGV 100: The Ethics of Mercy (After You've Already Won)",
                date: "Spring 1612", attendance: "Not Mandatory", forCredit: true, textbook: false, grade: "A", wouldTakeAgain: true,
                text: "This was supposed to be a practical course on combat magic. Instead, Prospero spent the entire semester teaching us elaborate ways to gain total power over our enemies and then... forgive them. The ENTIRE final was forgiving people. I had to forgive my lab partner for stealing my enchanted compass, my roommate for eating my food, and a spirit entity named Ariel for rearranging my furniture. I've never felt more emotionally mature or more confused about what I'm paying tuition for.",
                tags: ["Inspirational", "Caring", "Hilarious"], thumbsUp: 356, thumbsDown: 8
            }
        ]
    },
    {
        id: "rincewind",
        name: "Rincewind",
        title: "Wizzard (Self-Proclaimed)",
        school: "Unseen University, Ankh-Morpork",
        department: "Department of Running Away & Applied Cowardice",
        image: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Rincewind.jpg",
        quality: 2.3,
        difficulty: 1.5,
        wouldTakeAgain: 45,
        numRatings: 198,
        hotness: false,
        tags: ["Easy Grader", "Would Not Recommend", "Hilarious", "Often Absent", "No Homework", "Brings Luggage"],
        ratings: { awesome: 15, great: 12, good: 18, ok: 25, awful: 30 },
        breakdown: { "Knowledge": 1.2, "Accessibility": 4.8, "Clarity": 1.5, "Helpfulness": 2.0, "Charisma": 3.5, "Punctuality": 0.8 },
        reviews: [
            {
                quality: 2.0, difficulty: 1.0,
                course: "WIZZD 101: Introduction to Wizzardry (Note the Spelling)",
                date: "Grune 14, Century of the Fruitbat", attendance: "Not Mandatory", forCredit: true, textbook: false, grade: "B", wouldTakeAgain: false,
                text: "This man cannot cast a single spell. Not one. He knows ONE spell and it's so dangerous he can't even use it. The entire course was him explaining why magic is too dangerous to actually do, which is a bold strategy for a magic school. His hat says 'WIZZARD' on it which should tell you everything about his attention to detail. Easy A though because he's too scared to fail anyone.",
                tags: ["Easy Grader", "No Homework", "Would Not Recommend"], thumbsUp: 234, thumbsDown: 18
            },
            {
                quality: 3.0, difficulty: 1.0,
                course: "SURV 200: Survival Through Strategic Cowardice",
                date: "Spune 3, Century of the Fruitbat", attendance: "Not Mandatory", forCredit: false, textbook: false, grade: "A", wouldTakeAgain: true,
                text: "OK hear me out - this class is actually useful. Rincewind has survived dragons, gods, eldritch horrors, trips to hell, and the Dungeon Dimensions. His secret? Running away really fast. The man has a PhD in fleeing. The final exam was a timed sprint. I've never been more prepared for the real world. Also his sentient luggage ate someone's backpack.",
                tags: ["Hilarious", "Easy Grader", "Participation Matters"], thumbsUp: 367, thumbsDown: 9
            },
            {
                quality: 1.0, difficulty: 2.0,
                course: "GEOG 350: Involuntary World Travel & Accidental Tourism",
                date: "Offle 22, Century of the Fruitbat", attendance: "Mandatory", forCredit: true, textbook: false, grade: "C", wouldTakeAgain: false,
                text: "Class was supposed to be on Tuesdays and Thursdays. Professor Rincewind showed up to the first lecture, got accidentally teleported to the Counterweight Continent, and didn't come back for four months. The TA had to teach the rest. When Rincewind finally returned he gave everyone a C and said 'you're lucky to be alive' as if WE were the ones who went missing. Unbelievable.",
                tags: ["Often Absent", "Would Not Recommend", "Skip Class? You Won't Pass"], thumbsUp: 198, thumbsDown: 22
            },
            {
                quality: 3.0, difficulty: 2.0,
                course: "LING 150: Multilingual Screaming Across Cultures",
                date: "Sektober 8, Century of the Fruitbat", attendance: "Not Mandatory", forCredit: false, textbook: false, grade: "A-", wouldTakeAgain: true,
                text: "Rincewind can say 'HELP' and 'OH NO' in every language on the Disc, and honestly? That's more useful than anything I learned in Advanced Thaumaturgy. He taught us how to express existential terror in 47 languages. The midterm was just screaming. I got an A-. The Luggage sat in the back row the entire semester and nobody acknowledged it. Best elective ever.",
                tags: ["Hilarious", "Easy Grader", "Amazing Lectures"], thumbsUp: 445, thumbsDown: 6
            },
            {
                quality: 3.0, difficulty: 1.0,
                course: "LUGG 200: Dealing with Sentient Luggage in Academic Settings",
                date: "Offle 5, Century of the Fruitbat", attendance: "Not Mandatory", forCredit: false, textbook: false, grade: "A", wouldTakeAgain: true,
                text: "The Luggage ate the textbook. The Luggage ate my homework. The Luggage ate the classroom door. The Luggage ate a visiting professor from Bugarup University. Rincewind said 'it does that' and continued the lecture. There is no grading rubric because the Luggage ate it. I got an A because I'm the only student the Luggage hasn't tried to eat. I bring it sapient pearwood treats. We have an understanding.",
                tags: ["Hilarious", "Easy Grader", "Would Not Recommend"], thumbsUp: 534, thumbsDown: 3
            },
            {
                quality: 1.5, difficulty: 1.0,
                course: "AGRI 100: Potato Cultivation & Why It's Better Than Magic",
                date: "Ember 17, Century of the Fruitbat", attendance: "Not Mandatory", forCredit: true, textbook: false, grade: "B+", wouldTakeAgain: false,
                text: "I signed up for a MAGIC class. This man taught us about POTATOES for twelve weeks. He says potatoes are 'the real magic.' He showed us seventeen varieties. He made us plant a garden. He wept actual tears when a student's potato plant died. The final exam was making chips. I got a B+ because my chips were 'under-seasoned.' This is Unseen University. We have a LIBRARY full of magical grimoires. And I'm being graded on CHIP QUALITY.",
                tags: ["Would Not Recommend", "No Homework", "Hilarious"], thumbsUp: 445, thumbsDown: 8
            },
            {
                quality: 2.0, difficulty: 1.5,
                course: "WIZD 050: What Is a Wizard? (An Existential Seminar)",
                date: "Grune 28, Century of the Fruitbat", attendance: "Not Mandatory", forCredit: false, textbook: false, grade: "A-", wouldTakeAgain: false,
                text: "Rincewind spent the entire semester trying to define what a wizard is and concluded that he doesn't know. This is the man hired to TEACH wizardry. His hat says 'WIZZARD.' With two Z's. Nobody has corrected it in thirty years. I think at this point it's a power move. He once asked the class 'does anyone here actually WANT to learn magic?' and when three people raised their hands he said 'I can't help you' and dismissed class early. Honestly? Legend.",
                tags: ["Hilarious", "Easy Grader", "Often Absent"], thumbsUp: 389, thumbsDown: 15
            }
        ]
    },
    {
        id: "morgan",
        name: "Morgan le Fay",
        title: "Enchantress, Queen of Avalon",
        school: "Royal Academy of Camelot",
        department: "Department of Enchantment, Dark Arts & Political Intrigue",
        image: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Sandys%2C_Frederick_-_Morgan_le_Fay.JPG",
        quality: 3.5,
        difficulty: 4.8,
        wouldTakeAgain: 55,
        numRatings: 176,
        hotness: true,
        tags: ["Tough Grader", "Respected", "Intimidating", "Amazing Lectures", "Extra Credit", "Will Change Your Life"],
        ratings: { awesome: 35, great: 20, good: 15, ok: 15, awful: 15 },
        breakdown: { "Knowledge": 5.0, "Accessibility": 2.0, "Clarity": 4.0, "Helpfulness": 2.8, "Charisma": 4.9, "Punctuality": 3.8 },
        reviews: [
            {
                quality: 4.0, difficulty: 5.0,
                course: "DARK 401: Advanced Dark Enchantments & Hexwork",
                date: "Autumn, Year of Our Lord 508", attendance: "Mandatory", forCredit: true, textbook: true, grade: "B-", wouldTakeAgain: true,
                text: "Morgan le Fay is TERRIFYING and BRILLIANT. She walks into lecture and the temperature drops ten degrees. Her office hours are by appointment only and the appointment is whenever she decides to appear in a cloud of mist. The hexwork practicals were incredible though. I can now curse someone's entire bloodline. Not sure when I'll use this but it's nice to have the option.",
                tags: ["Tough Grader", "Amazing Lectures", "Intimidating"], thumbsUp: 267, thumbsDown: 14
            },
            {
                quality: 3.0, difficulty: 5.0,
                course: "POLI 450: Court Intrigue & Magical Statecraft",
                date: "Winter, Year of Our Lord 510", attendance: "Mandatory", forCredit: true, textbook: false, grade: "C+", wouldTakeAgain: false,
                text: "Half the course is just her complaining about her brother Arthur. We get it, you have family issues. The other half is genuinely brilliant political strategy. She made us write a 30-page paper on 'How to Undermine a Kingdom Without Anyone Noticing.' Mine got a C+ because she said my schemes were 'too obvious.' Ma'am, I'm 19. How devious do you expect me to be?",
                tags: ["Tough Grader", "Lots of Homework", "Lecture Heavy"], thumbsUp: 312, thumbsDown: 18
            },
            {
                quality: 4.5, difficulty: 4.0,
                course: "HEAL 300: Healing Arts & Restorative Magic",
                date: "Spring, Year of Our Lord 509", attendance: "Mandatory", forCredit: true, textbook: true, grade: "A-", wouldTakeAgain: true,
                text: "People forget Morgan is also an incredible healer. This class was amazing. She taught us herbal medicine, wound magic, and poison identification (she was VERY thorough on poisons). The final was treating a knight who'd been cursed - I saved his life and she actually smiled at me. First recorded instance of Morgan le Fay smiling in 200 years. Put it on my resume.",
                tags: ["Caring", "Gives Good Feedback", "Inspirational"], thumbsUp: 198, thumbsDown: 7
            },
            {
                quality: 2.5, difficulty: 5.0,
                course: "SHFT 500: Advanced Shapeshifting & Identity Deception",
                date: "Summer, Year of Our Lord 511", attendance: "Mandatory", forCredit: true, textbook: false, grade: "B", wouldTakeAgain: false,
                text: "The midterm was impersonating a member of the royal court for 48 hours without being detected. One student accidentally started a war. Another married into the royal family and can't figure out how to undo it. Morgan said both outcomes were 'acceptable.' She's running a spy school and calling it higher education. Incredible instructor, questionable ethics.",
                tags: ["Tough Grader", "Intimidating", "Participation Matters"], thumbsUp: 389, thumbsDown: 11
            },
            {
                quality: 4.0, difficulty: 4.5,
                course: "AVAL 500: Study Abroad in Avalon (No Return Date Guaranteed)",
                date: "Summer, Year of Our Lord 512", attendance: "Mandatory", forCredit: true, textbook: false, grade: "B+", wouldTakeAgain: true,
                text: "The Avalon study abroad program is incredible but the brochure is MISLEADING. It says 'a timeless learning experience.' They mean that literally. Time doesn't work the same in Avalon. I went for a 'semester abroad' and when I came back my friends had graduated, my dorm room had been reassigned, and my student ID had expired. Morgan said this was 'part of the learning.' I learned that I should read the fine print. The fairy food was fire though.",
                tags: ["Amazing Lectures", "Tough Grader", "Would Not Recommend"], thumbsUp: 423, thumbsDown: 9
            },
            {
                quality: 3.0, difficulty: 5.0,
                course: "RIVL 400: Academic Rivalries & Petty Feuds Across Centuries",
                date: "Autumn, Year of Our Lord 513", attendance: "Mandatory", forCredit: true, textbook: false, grade: "A-", wouldTakeAgain: false,
                text: "This class is just Morgan talking about her beef with Merlin for three hours a week. It's been centuries and she is STILL not over it. She showed us his RateMyWizard page and made us write a peer review tearing his teaching methods apart. For ACADEMIC CREDIT. I got extra credit for pointing out his 'backwards teaching methodology lacks pedagogical rigor.' I feel dirty but I needed the GPA boost. Merlin somehow found out and now he's not speaking to our whole department.",
                tags: ["Hilarious", "Lecture Heavy", "Extra Credit"], thumbsUp: 567, thumbsDown: 14
            },
            {
                quality: 4.5, difficulty: 4.0,
                course: "CLAS 100: Is It 'Witch' or 'Sorceress'? Magical Title Equity",
                date: "Winter, Year of Our Lord 514", attendance: "Not Mandatory", forCredit: true, textbook: false, grade: "B+", wouldTakeAgain: true,
                text: "Morgan spent the first lecture FURIOUS that this website is called 'RateMyWizard' and not 'RateMyWizardOrSorceressOrEnchantressOrWitch.' She made the entire class draft a formal complaint to the site admins. We sent it. Nothing happened. She then made us study the history of gendered magical titles for twelve weeks. The thesis: the word 'wizard' being the default is a symptom of patriarchal enchantment. She's not wrong but I really needed this time for my hexwork coursework.",
                tags: ["Respected", "Lecture Heavy", "Participation Matters"], thumbsUp: 478, thumbsDown: 18
            }
        ]
    },
    {
        id: "circe",
        name: "Circe",
        title: "Goddess of Sorcery, Daughter of Helios",
        school: "Aeaea Institute of Divine Magic",
        department: "Department of Transmutation, Potions & Hospitality",
        image: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Circe_Offering_the_Cup_to_Odysseus.jpg",
        quality: 3.2,
        difficulty: 4.6,
        wouldTakeAgain: 42,
        numRatings: 215,
        hotness: true,
        tags: ["Tough Grader", "Beware of Group Projects", "Amazing Lectures", "Don't Eat the Food", "Respected", "Test Heavy"],
        ratings: { awesome: 28, great: 18, good: 20, ok: 14, awful: 20 },
        breakdown: { "Knowledge": 5.0, "Accessibility": 3.0, "Clarity": 4.2, "Helpfulness": 2.5, "Charisma": 4.7, "Punctuality": 4.0 },
        reviews: [
            {
                quality: 2.0, difficulty: 5.0,
                course: "TRNS 401: Advanced Transmutation & Polymorphy",
                date: "Spring, 1250 BCE", attendance: "Mandatory", forCredit: true, textbook: false, grade: "C", wouldTakeAgain: false,
                text: "DO NOT eat anything she offers you. I cannot stress this enough. Three students got turned into pigs during the welcome reception. She said it was 'a lesson in consent and caution' but I'm pretty sure she just thinks it's funny. One guy has been a pig for three semesters now. He's doing well academically but socially it's rough. The transmutation techniques themselves are top-notch, if you survive.",
                tags: ["Tough Grader", "Don't Eat the Food", "Would Not Recommend"], thumbsUp: 456, thumbsDown: 8
            },
            {
                quality: 4.5, difficulty: 4.0,
                course: "POTI 350: Divine Potions & Pharmaceutical Sorcery",
                date: "Autumn, 1251 BCE", attendance: "Not Mandatory", forCredit: true, textbook: false, grade: "A", wouldTakeAgain: true,
                text: "If you can get past the whole 'turning students into animals' thing, Circe is genuinely one of the best potions instructors in the ancient world. Her knowledge of herbs is encyclopedic. She taught us to brew potions that can heal wounds, grant visions, and yes, transform people into livestock. I got an A because my swine potion had 'excellent consistency.' My parents are confused but proud.",
                tags: ["Amazing Lectures", "Gives Good Feedback", "Respected"], thumbsUp: 234, thumbsDown: 12
            },
            {
                quality: 3.5, difficulty: 5.0,
                course: "HOST 200: Hospitality, Deception & Dinner Party Sorcery",
                date: "Summer, 1249 BCE", attendance: "Mandatory", forCredit: true, textbook: false, grade: "B+", wouldTakeAgain: true,
                text: "The final was hosting a dinner party for visiting heroes without any of them suspecting they were being tested. One student accidentally poisoned Odysseus's crew. Well, I say 'accidentally.' Circe gave her extra credit. The grading rubric includes 'quality of enchanted ambiance' and 'subtlety of magical manipulation.' It's basically a hospitality degree from hell. Loved it.",
                tags: ["Participation Matters", "Tough Grader", "Amazing Lectures"], thumbsUp: 289, thumbsDown: 15
            },
            {
                quality: 3.0, difficulty: 4.5,
                course: "MYTH 100: Living as an Immortal in the Modern Age",
                date: "Winter, 1250 BCE", attendance: "Not Mandatory", forCredit: false, textbook: false, grade: "A-", wouldTakeAgain: true,
                text: "Circe has been alive for thousands of years and she is TIRED. Half the lectures are her complaining about heroes showing up to her island uninvited. She spent an entire class on Odysseus - how he stayed for a year, ate all her food, and then left without even a thank-you note. She's still mad. It's been centuries. I relate to this energy deeply. Very cathartic class.",
                tags: ["Hilarious", "Caring", "Lecture Heavy"], thumbsUp: 367, thumbsDown: 9
            },
            {
                quality: 1.5, difficulty: 5.0,
                course: "ALUM 100: Pig Alumni Support Group & Reintegration Services",
                date: "Autumn, 1252 BCE", attendance: "Mandatory", forCredit: true, textbook: false, grade: "Inc.", wouldTakeAgain: false,
                text: "I am writing this review as a pig. It has been two semesters. Circe says the reversal potion is 'in progress.' It has been 'in progress' since October. I have formed a support group with the other pig-students. We meet on Thursdays. There are eleven of us. We have a group chat called 'Swine and Cheese Club.' The food is actually better now because Circe feels guilty and gives us premium slop. 1.5 stars for the transformation, 5 stars for the slop. Oink.",
                tags: ["Would Not Recommend", "Don't Eat the Food", "Hilarious"], thumbsUp: 678, thumbsDown: 3
            },
            {
                quality: 2.5, difficulty: 5.0,
                course: "GEOG 150: Island Campus Life & Why You Can't Leave",
                date: "Winter, 1251 BCE", attendance: "Mandatory", forCredit: true, textbook: false, grade: "B-", wouldTakeAgain: false,
                text: "There is no ferry service. There is no boat rental. There is no way off this island unless Circe personally allows it. I asked about transfer procedures and she laughed for four minutes straight. The campus tour was just her walking us around the island saying 'and here is where I turned a sailor into a pig, and HERE is where I turned ANOTHER sailor into a pig.' The LinkedIn group for Aeaea alumni is just people posting from various barnyard animals' perspectives. Send help.",
                tags: ["Would Not Recommend", "Don't Eat the Food", "Participation Matters"], thumbsUp: 398, thumbsDown: 11
            },
            {
                quality: 4.0, difficulty: 3.5,
                course: "SONG 300: Enchanted Singing & Vocal Spellwork",
                date: "Spring, 1248 BCE", attendance: "Not Mandatory", forCredit: true, textbook: false, grade: "A-", wouldTakeAgain: true,
                text: "Circe can SING. Like, professionally. She taught us how to weave spells into music and I'm not exaggerating when I say this class changed my life. The problem is her singing is so enchanting that most students just sit there drooling for the entire lecture and don't take notes. I recorded one lecture and when I played it back my roommate walked into a wall. The midterm was singing a spell without accidentally enchanting anyone. Only two students passed. The rest are still sitting in the lecture hall, smiling. It's been three weeks.",
                tags: ["Amazing Lectures", "Tough Grader", "Inspirational"], thumbsUp: 312, thumbsDown: 7
            }
        ]
    },
    {
        id: "radagast",
        name: "Radagast the Brown",
        title: "Istari, Guardian of Flora & Fauna",
        school: "University of Middle-earth, Mirkwood Campus",
        department: "Department of Nature Magic & Woodland Conservation",
        image: "https://upload.wikimedia.org/wikipedia/commons/8/84/Radagast_the_Brown%2C_Weta_Exhibit%2C_Seoul%2C_South_Korea_%2815153582065%29.jpg",
        quality: 3.9,
        difficulty: 2.0,
        wouldTakeAgain: 82,
        numRatings: 112,
        hotness: false,
        tags: ["Caring", "Easy Grader", "Inspirational", "Often Absent", "Bring Allergy Meds", "Office is Outdoors"],
        ratings: { awesome: 48, great: 22, good: 15, ok: 10, awful: 5 },
        breakdown: { "Knowledge": 4.5, "Accessibility": 4.2, "Clarity": 2.5, "Helpfulness": 4.8, "Charisma": 3.2, "Punctuality": 1.5 },
        reviews: [
            {
                quality: 4.5, difficulty: 1.0,
                course: "BIRD 101: Introduction to Avian Communication",
                date: "May 12, Third Age 3015", attendance: "Not Mandatory", forCredit: true, textbook: false, grade: "A", wouldTakeAgain: true,
                text: "Radagast showed up to the first lecture with seventeen birds nesting in his hair and a hedgehog in his pocket. He spent 45 minutes having a conversation with a thrush before remembering we were there. The man is an absolute sweetheart. He grades based on how nicely you talk to animals. I got an A for calling a sparrow 'handsome.' Best class I've ever taken.",
                tags: ["Easy Grader", "Caring", "Amazing Lectures"], thumbsUp: 198, thumbsDown: 4
            },
            {
                quality: 4.0, difficulty: 2.0,
                course: "HERB 250: Magical Herbalism & Forest Pharmacology",
                date: "Sep 3, Third Age 3016", attendance: "Not Mandatory", forCredit: true, textbook: false, grade: "A-", wouldTakeAgain: true,
                text: "Class is held entirely outdoors in Mirkwood, which is great except for the giant spiders. Radagast says they're 'misunderstood.' They are NOT misunderstood, they are ENORMOUS and HUNGRY. That said, his knowledge of magical plants is unmatched. He taught me to identify 200 species of healing herbs. He also ate several mushrooms during lecture and started talking to a tree for 20 minutes. The tree, apparently, talked back.",
                tags: ["Caring", "Office is Outdoors", "Bring Allergy Meds"], thumbsUp: 245, thumbsDown: 8
            },
            {
                quality: 3.5, difficulty: 2.5,
                course: "CONS 300: Woodland Conservation & Anti-Corruption Magic",
                date: "Mar 17, Third Age 3017", attendance: "Mandatory", forCredit: true, textbook: false, grade: "B+", wouldTakeAgain: true,
                text: "Radagast cancelled class for three weeks because a family of rabbits moved into the lecture hall and he didn't want to disturb them. When he came back he gave us all B+ for 'patience and respect for nature.' The man has completely different priorities than every other professor at this university and honestly? He might be the only sane one. His rabbit sled is sick btw.",
                tags: ["Easy Grader", "Often Absent", "Caring"], thumbsUp: 312, thumbsDown: 6
            },
            {
                quality: 3.5, difficulty: 3.0,
                course: "DARK 150: Recognizing Dark Magic in Natural Environments",
                date: "Nov 8, Third Age 3018", attendance: "Mandatory", forCredit: true, textbook: false, grade: "B", wouldTakeAgain: true,
                text: "This class got REAL very fast. Started as a chill nature walk identifying corrupted plants and ended with Radagast discovering an actual Necromancer in Dol Guldur. Our field trip became a reconnaissance mission. He reported it to Gandalf and Saruman but they told him he was 'overreacting.' He was NOT overreacting. Saruman literally turned evil like two years later. Listen to Radagast, people.",
                tags: ["Inspirational", "Participation Matters", "Tough Grader"], thumbsUp: 278, thumbsDown: 3
            },
            {
                quality: 4.0, difficulty: 1.5,
                course: "TRAN 100: Alternative Transportation via Small Mammals",
                date: "Jul 22, Third Age 3016", attendance: "Not Mandatory", forCredit: false, textbook: false, grade: "A", wouldTakeAgain: true,
                text: "Radagast's commute to campus is a sled pulled by rabbits. RABBITS. And somehow he's still late to every lecture. I clocked the rabbits doing 60 mph through Mirkwood. They are not normal rabbits. When I asked where he got supersonic rabbits he said 'they just like me.' The sled has no seatbelts, no brakes, and no insurance. He offered me a ride once and I saw my life flash before my eyes at speeds no rodent should achieve. Best field trip ever.",
                tags: ["Hilarious", "Easy Grader", "Caring"], thumbsUp: 456, thumbsDown: 5
            },
            {
                quality: 3.5, difficulty: 2.0,
                course: "BIRD 301: Advanced Ornithological Intelligence Networks",
                date: "Feb 9, Third Age 3017", attendance: "Mandatory", forCredit: true, textbook: false, grade: "B+", wouldTakeAgain: true,
                text: "Radagast has a spy network of birds. BIRDS. Every thrush, every crow, every random sparrow in Middle-earth reports to this man. He knows everything. He knew about my breakup before I did because a robin told him. He showed up to lecture and said 'I'm sorry about your relationship' and I hadn't even checked my messages yet. The birds also grade our papers. I'm not joking. A great eagle gave me a B+ and I don't know how to appeal that. Who do I talk to? The eagle?",
                tags: ["Caring", "Hilarious", "Easy Grader"], thumbsUp: 512, thumbsDown: 7
            },
            {
                quality: 5.0, difficulty: 1.0,
                course: "MUSH 150: Mycology, Mushrooms & Expanded Consciousness",
                date: "Oct 30, Third Age 3015", attendance: "Not Mandatory", forCredit: false, textbook: false, grade: "A+", wouldTakeAgain: true,
                text: "Radagast ate seven mushrooms during the first lecture and then spoke to a tree for 40 minutes. We thought he was having a breakdown. The tree was apparently giving him the lecture notes. He then turned to us and delivered the most profound, beautiful lecture on forest ecosystems I have ever heard. Three students cried. A deer walked into the classroom and sat down. Nobody questioned it. The deer took better notes than me. I think I'm in a cult. Five stars.",
                tags: ["Amazing Lectures", "Inspirational", "Easy Grader"], thumbsUp: 623, thumbsDown: 2
            }
        ]
    },
    {
        id: "teiresias",
        name: "Teiresias",
        title: "Blind Prophet of Thebes",
        school: "Theban Academy of Divination",
        department: "Department of Prophecy, Fate & Uncomfortable Truths",
        image: "https://upload.wikimedia.org/wikipedia/commons/1/14/John_Henry_Fuseli_-_Teiresias_Foretells_the_Future_to_Odysseus%2C_1780-1785_-_Google_Art_Project.jpg",
        quality: 4.0,
        difficulty: 4.7,
        wouldTakeAgain: 58,
        numRatings: 203,
        hotness: false,
        tags: ["Tough Grader", "Respected", "Lecture Heavy", "No Textbook Needed", "Will Ruin Your Day", "Always Right"],
        ratings: { awesome: 40, great: 22, good: 15, ok: 10, awful: 13 },
        breakdown: { "Knowledge": 5.0, "Accessibility": 3.2, "Clarity": 4.5, "Helpfulness": 2.8, "Charisma": 3.5, "Punctuality": 4.0 },
        reviews: [
            {
                quality: 5.0, difficulty: 5.0,
                course: "PRPH 500: Advanced Prophecy & Inevitable Doom",
                date: "Spring, 1250 BCE", attendance: "Mandatory", forCredit: true, textbook: false, grade: "A-", wouldTakeAgain: true,
                text: "Teiresias is hands down the most knowledgeable professor at this institution. He's also the most depressing. Every single lecture ends with someone finding out something horrible about their future. A kid asked what grade he'd get on the final and Teiresias said 'you will pass the exam but fail at love.' Sir, this is a divination class, not therapy. Still, the man has never been wrong. Not once. Terrifying.",
                tags: ["Respected", "Tough Grader", "Will Ruin Your Day"], thumbsUp: 345, thumbsDown: 8
            },
            {
                quality: 4.0, difficulty: 5.0,
                course: "FATE 400: Interpreting the Will of the Gods",
                date: "Autumn, 1248 BCE", attendance: "Mandatory", forCredit: true, textbook: false, grade: "B", wouldTakeAgain: true,
                text: "The midterm was interpreting a set of omens. I said the flight pattern of birds indicated a good harvest. Teiresias said I was wrong and that it indicated King Oedipus had married his own mother. HOW was I supposed to get that from bird patterns?? He said 'the signs were obvious' and docked me a full letter grade. The man is blind and still sees more than all of us combined. Humbling.",
                tags: ["Tough Grader", "Always Right", "Lecture Heavy"], thumbsUp: 478, thumbsDown: 12
            },
            {
                quality: 3.5, difficulty: 4.5,
                course: "DEAD 350: Communicating from the Underworld (Guest Lecture Series)",
                date: "Winter, 1249 BCE", attendance: "Not Mandatory", forCredit: true, textbook: false, grade: "B+", wouldTakeAgain: false,
                text: "Teiresias gave this lecture while DEAD. He is literally teaching from the underworld. Odysseus had to pour blood into a trench so the professor could manifest and deliver the lecture. The logistics alone are a nightmare. He's still the clearest lecturer in the department even as a shade. I asked if being dead affected his teaching and he said 'I can see more clearly now than I ever did alive.' Chills.",
                tags: ["Amazing Lectures", "Respected", "Lecture Heavy"], thumbsUp: 523, thumbsDown: 5
            },
            {
                quality: 4.0, difficulty: 4.0,
                course: "TRTH 200: Truth-Telling & Why Nobody Wants to Hear It",
                date: "Summer, 1251 BCE", attendance: "Not Mandatory", forCredit: false, textbook: false, grade: "A", wouldTakeAgain: true,
                text: "This class should be required for all students. Teiresias spent the whole semester teaching us how to deliver devastating truths to powerful people who don't want to hear them. His case studies included telling Oedipus he killed his father, telling Creon he's an idiot, and informing Narcissus about his self-obsession problem. The final was telling your roommate their cooking is bad. I got an A. My roommate isn't speaking to me.",
                tags: ["Inspirational", "Hilarious", "Gives Good Feedback"], thumbsUp: 389, thumbsDown: 14
            },
            {
                quality: 3.5, difficulty: 5.0,
                course: "ORIE 100: Freshman Orientation & Fate Reveal",
                date: "Summer, 1252 BCE", attendance: "Mandatory", forCredit: false, textbook: false, grade: "P", wouldTakeAgain: false,
                text: "Teiresias runs freshman orientation. It is BRUTAL. He goes down the line and tells every incoming student a single prophecy about their future. The kid next to me found out he'd die in a shipwreck. A girl in the back learned she'd accidentally start a war. I found out I'd peak academically in my second year and it would all be downhill from there. Sir, I just needed my student ID photo taken. The orientation survival rate is 40%. The rest transfer immediately. Bold enrollment strategy.",
                tags: ["Tough Grader", "Will Ruin Your Day", "Would Not Recommend"], thumbsUp: 489, thumbsDown: 6
            },
            {
                quality: 4.5, difficulty: 5.0,
                course: "GEND 400: Perspectives Across the Gender Spectrum",
                date: "Autumn, 1249 BCE", attendance: "Not Mandatory", forCredit: true, textbook: false, grade: "A-", wouldTakeAgain: true,
                text: "Teiresias lived seven years as a woman after Hera transformed him. He brings this up constantly and honestly? It makes his teaching incredible. His lectures on perspective-taking are unmatched. He's the only professor who can credibly say 'I've literally been in your shoes.' The final paper was on 'knowledge gained through transformation' and he cried reading mine. A blind immortal prophet CRIED at my essay. I peaked. Nothing will ever top this.",
                tags: ["Inspirational", "Gives Good Feedback", "Respected"], thumbsUp: 534, thumbsDown: 4
            },
            {
                quality: 4.0, difficulty: 4.5,
                course: "DEAD 500: Faculty Senate Meeting (Underworld Chapter)",
                date: "Winter, 1247 BCE", attendance: "Mandatory", forCredit: true, textbook: false, grade: "B+", wouldTakeAgain: true,
                text: "I asked Teiresias for a letter of recommendation. He said 'I can write you one, but you should know that the institution you're applying to will be destroyed by earthquake in three years.' Then he wrote the letter anyway. It was beautiful. Four pages. Brought up my 'unyielding spirit in the face of cosmic indifference.' I got accepted. The school was destroyed by earthquake two years and eleven months later. He was off by one month. He apologized for being off by one month. Not for the earthquake.",
                tags: ["Caring", "Gives Good Feedback", "Always Right"], thumbsUp: 678, thumbsDown: 5
            }
        ]
    },
    {
        id: "pythia",
        name: "The Pythia",
        title: "Oracle of Delphi, Voice of Apollo",
        school: "Temple of Apollo at Delphi",
        department: "Department of Divine Communication & Cryptic Utterances",
        image: "https://upload.wikimedia.org/wikipedia/commons/d/d6/John_Collier_-_Priestess_of_Delphi.jpg",
        quality: 3.6,
        difficulty: 4.9,
        wouldTakeAgain: 52,
        numRatings: 241,
        hotness: true,
        tags: ["Tough Grader", "Amazing Lectures", "Confusing Sometimes", "Respected", "No Textbook Needed", "Bring Offerings"],
        ratings: { awesome: 35, great: 18, good: 17, ok: 15, awful: 15 },
        breakdown: { "Knowledge": 5.0, "Accessibility": 1.5, "Clarity": 1.0, "Helpfulness": 3.5, "Charisma": 4.8, "Punctuality": 2.5 },
        reviews: [
            {
                quality: 4.0, difficulty: 5.0,
                course: "ORAC 401: Advanced Oracular Interpretation",
                date: "Spring, 480 BCE", attendance: "Mandatory", forCredit: true, textbook: false, grade: "B", wouldTakeAgain: true,
                text: "The Pythia is the most powerful seer in the known world and also the most impossible professor to understand. She delivers every lecture in a trance, sitting on a tripod over volcanic fumes, speaking in riddles. I asked what chapters to study for the final and she said 'the wooden wall shall not fall.' MA'AM. I just need a page number. Had to sacrifice a goat just to get office hours. Her prophecies are always right though, you just won't understand them until it's too late.",
                tags: ["Confusing Sometimes", "Tough Grader", "Respected"], thumbsUp: 412, thumbsDown: 15
            },
            {
                quality: 3.0, difficulty: 5.0,
                course: "DIVM 300: Introduction to Divine Mediumship",
                date: "Autumn, 481 BCE", attendance: "Mandatory", forCredit: true, textbook: false, grade: "C+", wouldTakeAgain: false,
                text: "You have to bring an offering to every class. EVERY CLASS. First week it was barley cakes. Then a laurel branch. By midterms she wanted a live goat. I'm a student. I cannot afford a goat per lecture. The actual channeling techniques are incredible but the supply costs are bankrupting me. Also the classroom is full of ethylene gas from a crack in the floor and everyone gets lightheaded by the second hour. OSHA does not exist here and it shows.",
                tags: ["Bring Offerings", "Tough Grader", "Would Not Recommend"], thumbsUp: 356, thumbsDown: 18
            },
            {
                quality: 4.5, difficulty: 5.0,
                course: "RIDL 450: The Art of the Ambiguous Answer",
                date: "Winter, 479 BCE", attendance: "Mandatory", forCredit: true, textbook: false, grade: "A-", wouldTakeAgain: true,
                text: "This class is GENIUS. The Pythia taught us how to give prophecies that are technically always correct no matter what happens. King Croesus asked if he should go to war and she said 'a great empire will be destroyed.' It was HIS empire. Technically correct. The best kind of correct. My final project was prophesying my roommate's love life in a way that covered all outcomes. Got an A-. She said my ambiguity 'showed promise but lacked divine inspiration.' Fair.",
                tags: ["Amazing Lectures", "Inspirational", "Hilarious"], thumbsUp: 534, thumbsDown: 7
            },
            {
                quality: 3.0, difficulty: 4.5,
                course: "RITE 100: Sacred Rituals & Temple Protocol",
                date: "Summer, 480 BCE", attendance: "Mandatory", forCredit: true, textbook: false, grade: "B-", wouldTakeAgain: false,
                text: "The Pythia only teaches on the seventh day of each month because that's Apollo's sacred day. So we had one class per month. Each class was four hours of rituals, fasting, and bathing in a sacred spring before she'd even start the lecture. I lost 15 pounds this semester. She gave me a B- because my ritual purification was 'spiritually adequate but lacking in reverence.' I was SHIVERING in a COLD SPRING at DAWN. How reverent can a person be??",
                tags: ["Tough Grader", "Bring Offerings", "Participation Matters"], thumbsUp: 298, thumbsDown: 11
            },
            {
                quality: 2.5, difficulty: 5.0,
                course: "EXAM 300: Examination Preparation & Oracle Consultation",
                date: "Spring, 478 BCE", attendance: "Mandatory", forCredit: true, textbook: false, grade: "B", wouldTakeAgain: false,
                text: "I went to the Pythia's review session before finals. She inhaled volcanic fumes for twenty minutes, went into a trance, and said: 'He who studies shall reap what he has sown, but the harvest is not what it seems.' I just wanted to know if the exam was multiple choice or essay. Her TA translated: 'It's both.' SIX GOATS I sacrificed for that answer. Six. I could've just emailed the department. The guy who bribed a temple priest spent zero goats. The system is broken.",
                tags: ["Confusing Sometimes", "Tough Grader", "Bring Offerings"], thumbsUp: 512, thumbsDown: 18
            },
            {
                quality: 3.0, difficulty: 4.5,
                course: "FUME 200: Ethylene Gas & Visionary States (Lab Section)",
                date: "Autumn, 479 BCE", attendance: "Mandatory", forCredit: true, textbook: false, grade: "B", wouldTakeAgain: false,
                text: "The Pythia's classroom is built over a geological fissure that emits mind-altering gases. This is not a metaphor. By the third hour of lecture, half the class is seeing visions and the other half is napping. I hallucinated that I was a dolphin during the midterm and somehow still got a B. My friend saw the fall of Athens and wrote it down as his essay answer. He got an A-. The ventilation in this classroom is a violation of several ancient building codes.",
                tags: ["Hilarious", "Confusing Sometimes", "Bring Offerings"], thumbsUp: 445, thumbsDown: 9
            },
            {
                quality: 5.0, difficulty: 5.0,
                course: "META 500: Writing Reviews of Oracles (A Self-Referential Seminar)",
                date: "Summer, 477 BCE", attendance: "Not Mandatory", forCredit: false, textbook: false, grade: "A", wouldTakeAgain: true,
                text: "For the final, the Pythia made us write reviews of HER course and then prophesied which reviews would be most helpful. She pointed at mine and said 'This one shall be read by many and understood by few.' I just wrote 'great class, confusing teacher, bring goats.' That prophecy was ALSO confusing. It's prophecies all the way down. She then looked into the future and said 'In a distant age, these words shall appear on a glowing tablet and strangers will press a small hand to show approval.' Ma'am, WHAT. Anyway five stars, bring offerings.",
                tags: ["Amazing Lectures", "Hilarious", "Always Right"], thumbsUp: 789, thumbsDown: 3
            }
        ]
    },
    {
        id: "medusa",
        name: "Medusa",
        title: "Gorgon, Former Priestess of Athena",
        school: "Aeaea Institute of Divine Magic",
        department: "Department of Petrification Studies & Ophidian Arts",
        image: "https://upload.wikimedia.org/wikipedia/commons/1/15/Caravaggio_-_Medusa_-_Google_Art_Project.jpg",
        quality: 2.8,
        difficulty: 4.5,
        wouldTakeAgain: 35,
        numRatings: 178,
        hotness: true,
        tags: ["Tough Grader", "Don't Make Eye Contact", "Intimidating", "Amazing Lectures (Audio Only)", "No Class Photos", "Mandatory Sunglasses"],
        ratings: { awesome: 20, great: 15, good: 18, ok: 20, awful: 27 },
        breakdown: { "Knowledge": 4.5, "Accessibility": 1.5, "Clarity": 3.8, "Helpfulness": 3.0, "Charisma": 4.5, "Punctuality": 3.5 },
        reviews: [
            {
                quality: 1.0, difficulty: 5.0,
                course: "PETR 401: Introduction to Petrification & Stone Theory",
                date: "Autumn, 1200 BCE", attendance: "Mandatory", forCredit: true, textbook: false, grade: "Inc.", wouldTakeAgain: false,
                text: "There is a mandatory sunglasses policy in this class for a reason and I WISH someone had told me before the first lecture. Walked in, made eye contact with the professor, and now I'm a statue in the campus courtyard. Writing this review via a priest of Hermes who can communicate with petrified souls. My GPA is frozen. Literally. The squirrels sit on me. If you MUST take this class, sit in the back and DO NOT look up from your notes. 1 star. Would give zero if I could move my hands.",
                tags: ["Don't Make Eye Contact", "Would Not Recommend", "Tough Grader"], thumbsUp: 567, thumbsDown: 4
            },
            {
                quality: 3.5, difficulty: 4.0,
                course: "HAIR 500: Ophidian Trichology & Serpent-Hair Management",
                date: "Spring, 1198 BCE", attendance: "Mandatory", forCredit: true, textbook: false, grade: "B+", wouldTakeAgain: true,
                text: "The class is taught with Medusa facing the blackboard at all times, which means she has great penmanship and zero eye contact with students. This is ideal. Her hair snakes, however, DO make eye contact and they are JUDGMENTAL. A cobra on the left side of her head hissed at my essay. An asp on the right actually bit my paper and left venom on my bibliography. She apologized and said they're 'peer reviewers.' I got a B+. The snakes gave me a C. We compromised.",
                tags: ["Hilarious", "Tough Grader", "Intimidating"], thumbsUp: 456, thumbsDown: 8
            },
            {
                quality: 3.0, difficulty: 5.0,
                course: "PHOT 100: Class Photos & Why We Don't Take Them Here",
                date: "Winter, 1199 BCE", attendance: "Mandatory", forCredit: true, textbook: false, grade: "B", wouldTakeAgain: false,
                text: "The yearbook committee asked Medusa for a faculty photo. She said yes. The photographer is now a decorative statue outside the administration building. He looks terrified but also like he got great lighting. The yearbook just has a silhouette with the caption 'Photo Not Available For Safety Reasons.' Class photo day was cancelled permanently after three students forgot the sunglasses rule trying to get a group selfie. They look great though. Very lifelike. Because they ARE life. Were. Grammar is hard when your classmates are limestone.",
                tags: ["Don't Make Eye Contact", "Hilarious", "No Class Photos"], thumbsUp: 623, thumbsDown: 5
            },
            {
                quality: 4.0, difficulty: 4.0,
                course: "JUST 300: Righteous Anger & What to Do When Gods Wrong You",
                date: "Summer, 1201 BCE", attendance: "Not Mandatory", forCredit: true, textbook: false, grade: "A-", wouldTakeAgain: true,
                text: "Medusa's backstory is MESSED UP and she channels all of it into this class. Athena cursed her for something that wasn't even her fault and she taught us how to turn pain into power. Also how to turn people into garden ornaments, but mostly the first thing. The emotional depth was unexpected. Half the class was crying. The other half was taking notes on petrification techniques. It's a weird vibe but somehow it works. Also she has a no-mirrors policy in the classroom which makes checking if you have food in your teeth impossible.",
                tags: ["Inspirational", "Respected", "Caring"], thumbsUp: 389, thumbsDown: 12
            }
        ]
    },
    {
        id: "nostradamus",
        name: "Nostradamus",
        title: "Physician, Astrologer & Prophet of Provence",
        school: "University of Montpellier (Expelled), Now Independent",
        department: "Department of Quatrain Composition & Vague Futurism",
        image: "https://upload.wikimedia.org/wikipedia/commons/c/c6/Nostradamus_by_Cesar.jpg",
        quality: 2.5,
        difficulty: 3.8,
        wouldTakeAgain: 38,
        numRatings: 225,
        hotness: false,
        tags: ["Confusing Sometimes", "Tough Grader", "Lecture Heavy", "No Textbook Needed", "Writes in Quatrains", "Claims He Predicted This"],
        ratings: { awesome: 18, great: 15, good: 17, ok: 22, awful: 28 },
        breakdown: { "Knowledge": 3.5, "Accessibility": 2.8, "Clarity": 1.0, "Helpfulness": 2.5, "Charisma": 3.5, "Punctuality": 4.0 },
        reviews: [
            {
                quality: 2.0, difficulty: 4.0,
                course: "QUAT 301: Prophecy Composition in Quatrain Form",
                date: "March, 1555", attendance: "Mandatory", forCredit: true, textbook: true, grade: "C+", wouldTakeAgain: false,
                text: "Every assignment must be written in quatrains. EVERY assignment. Lab reports? Quatrains. Attendance sheet? Quatrains. I asked for an extension via letter and he replied in a quatrain that may or may not have predicted the fall of a future empire. I just needed two more days on my paper. His feedback on my midterm was: 'The stars weep at your scansion / Your meter limps like a wounded hound / Yet within the broken verse / A seed of sight is found.' Is that a C+? A B-? WHAT GRADE IS THAT, NOSTRADAMUS?",
                tags: ["Confusing Sometimes", "Tough Grader", "Writes in Quatrains"], thumbsUp: 445, thumbsDown: 12
            },
            {
                quality: 3.0, difficulty: 4.0,
                course: "FUTR 400: Predicting the Future (Without Being Specific Enough to Be Wrong)",
                date: "June, 1556", attendance: "Not Mandatory", forCredit: true, textbook: true, grade: "B", wouldTakeAgain: false,
                text: "Nostradamus taught us to write prophecies so vague they could apply to literally anything. 'A great leader shall fall in a month that contains the letter R.' That's eight months a year, for the entire future of humanity. My midterm prophecy: 'The eagle screams over water where blood meets stone.' He gave me an A and said it would come true in 2000 years. I'll be dead. I can't verify this. That's the whole point. The man invented an unfalsifiable academic discipline. Genius or fraud? Yes.",
                tags: ["Lecture Heavy", "Confusing Sometimes", "Hilarious"], thumbsUp: 378, thumbsDown: 15
            },
            {
                quality: 2.0, difficulty: 3.5,
                course: "ASTR 250: Astrological Medicine & Plague Prevention",
                date: "September, 1554", attendance: "Mandatory", forCredit: true, textbook: false, grade: "B-", wouldTakeAgain: false,
                text: "Nostradamus also teaches medicine which is TERRIFYING. His treatment plan for the plague was: stare at the stars, write a poem, and drink a potion made from rose petals. Somehow his patients survived at a higher rate than every other doctor's. When asked how, he said 'I told them to wash their hands.' In the 16th century. This man invented hygiene through prophecy. He also predicted my grade on the final to the exact percentage. I don't know if he's psychic or if he just decides the grades in advance. Either way, unsettling.",
                tags: ["Confusing Sometimes", "Claims He Predicted This", "Respected"], thumbsUp: 312, thumbsDown: 18
            },
            {
                quality: 3.0, difficulty: 4.0,
                course: "PUBL 100: Self-Publishing & Marketing Your Prophecies",
                date: "December, 1557", attendance: "Not Mandatory", forCredit: false, textbook: true, grade: "A-", wouldTakeAgain: true,
                text: "Nostradamus published his lecture notes as a book and it became a BESTSELLER. He's still collecting royalties. In the 1500s. He sells his own book as the 'required text' for his class at a 300% markup. When students complained he said he foresaw the complaint and had already written a quatrain about it. He then read the quatrain aloud and it did, in fact, describe students complaining about book prices. I want to be angry but I'm honestly impressed. He also predicted something called 'Amazon' which is either a jungle or a future marketplace, depending on the translation.",
                tags: ["Hilarious", "Claims He Predicted This", "Writes in Quatrains"], thumbsUp: 467, thumbsDown: 9
            }
        ]
    },
    {
        id: "granny",
        name: "Granny Weatherwax",
        title: "Witch (Not a Wizard, Don't You Dare)",
        school: "Lancre Coven Academy of Practical Witchcraft",
        department: "Department of Headology, Staring & Applied Common Sense",
        image: "https://upload.wikimedia.org/wikipedia/commons/1/10/A_Visit_to_the_Witch_1882.jpg",
        quality: 4.5,
        difficulty: 4.0,
        wouldTakeAgain: 75,
        numRatings: 156,
        hotness: false,
        tags: ["Tough Grader", "Respected", "Intimidating", "No Textbook Needed", "Will Change Your Life", "I Can't Be Having With This"],
        ratings: { awesome: 55, great: 20, good: 10, ok: 8, awful: 7 },
        breakdown: { "Knowledge": 5.0, "Accessibility": 2.0, "Clarity": 4.5, "Helpfulness": 4.0, "Charisma": 3.0, "Punctuality": 5.0 },
        reviews: [
            {
                quality: 5.0, difficulty: 4.0,
                course: "HEAD 401: Advanced Headology & Psychological Manipulation",
                date: "Ember 3, Century of the Fruitbat", attendance: "Mandatory", forCredit: true, textbook: false, grade: "A-", wouldTakeAgain: true,
                text: "Granny Weatherwax taught us that 90% of magic is just making people think you've done magic. She stared at a locked door for ten minutes and it opened. She says she didn't use magic. She says the door 'decided' to open. The door did not have a choice. Nothing has a choice when Granny Weatherwax stares at it. I watched her convince a swarm of bees to reorganize their entire hive by GLARING at them. No spells. Just eye contact and sheer force of will. I am terrified of this woman and I have never learned more in my life.",
                tags: ["Inspirational", "Tough Grader", "Intimidating"], thumbsUp: 567, thumbsDown: 4
            },
            {
                quality: 4.5, difficulty: 3.5,
                course: "SENS 200: Common Sense & Why Wizards Don't Have Any",
                date: "Sektober 15, Century of the Fruitbat", attendance: "Not Mandatory", forCredit: true, textbook: false, grade: "A", wouldTakeAgain: true,
                text: "This class is basically Granny Weatherwax dunking on Unseen University for three hours a week and I am HERE for it. She spent one lecture explaining why Rincewind's approach to magic is 'an embarrassment to anyone with two brain cells to rub together.' She's not wrong. She then taught us to solve a complex magical problem by... making a cup of tea and thinking about it. No spell. No ritual. Just tea and thinking. She got a better result than the entire UU faculty combined. The wizards are NOT happy about this course existing.",
                tags: ["Hilarious", "Amazing Lectures", "Respected"], thumbsUp: 489, thumbsDown: 7
            },
            {
                quality: 4.0, difficulty: 5.0,
                course: "BRRW 100: Borrowing (Seeing Through Animal Eyes)",
                date: "Grune 20, Century of the Fruitbat", attendance: "Mandatory", forCredit: true, textbook: false, grade: "B+", wouldTakeAgain: true,
                text: "The practical exam was 'borrowing' - putting your consciousness into an animal's mind. I accidentally borrowed into a sheep and was stuck for six hours bleating and eating grass. Granny Weatherwax found me, stared at the sheep, and I was back in my body instantly. She then said 'You let the sheep win. Never let the sheep win.' This is now my life motto. I have it tattooed on my arm. She saw the tattoo and said 'I can't be having with tattoos.' I have never felt more judged or more motivated simultaneously.",
                tags: ["Tough Grader", "Inspirational", "Participation Matters"], thumbsUp: 412, thumbsDown: 9
            },
            {
                quality: 5.0, difficulty: 4.0,
                course: "GOOD 500: Being Good vs. Being Nice (& Why They're Different)",
                date: "Spune 8, Century of the Fruitbat", attendance: "Mandatory", forCredit: true, textbook: false, grade: "A", wouldTakeAgain: true,
                text: "The final lecture of the semester. She stood at the front, said nothing for five minutes, and then spoke for two hours about the difference between being good and being nice. She said nice is easy. Good is hard. Good means making the choices that hurt you. She told us that the most important magic is choosing not to use magic when you could. Half the class was sobbing. I was sobbing. I think even she almost cried but she turned away and said 'I can't be having with emotions in the classroom.' I will carry this lecture with me forever. Would give six stars if the system allowed.",
                tags: ["Inspirational", "Will Change Your Life", "Amazing Lectures"], thumbsUp: 823, thumbsDown: 1
            }
        ]
    },
    {
        id: "librarian",
        name: "The Librarian",
        title: "Librarian of Unseen University (Orangutan)",
        school: "Unseen University, Ankh-Morpork",
        department: "Department of Library Science, Banana Studies & L-Space Navigation",
        image: "https://upload.wikimedia.org/wikipedia/commons/3/38/1777._Orangutan_from_the_zoo_of_stadtholder_William_V_picking_an_apple.jpg",
        quality: 4.3,
        difficulty: 2.5,
        wouldTakeAgain: 88,
        numRatings: 167,
        hotness: false,
        tags: ["Respected", "Easy Grader", "Caring", "Do NOT Say The M-Word", "Bring Bananas", "Surprisingly Gentle"],
        ratings: { awesome: 60, great: 20, good: 10, ok: 5, awful: 5 },
        breakdown: { "Knowledge": 5.0, "Accessibility": 4.5, "Clarity": 2.0, "Helpfulness": 4.8, "Charisma": 4.0, "Punctuality": 5.0 },
        reviews: [
            {
                quality: 5.0, difficulty: 1.0,
                course: "LIBR 101: Introduction to Library Science",
                date: "Offle 12, Century of the Fruitbat", attendance: "Not Mandatory", forCredit: true, textbook: false, grade: "A", wouldTakeAgain: true,
                text: "The professor is an orangutan. I need you to understand this. He is a literal orangutan. He was turned into one by a magical accident years ago and REFUSED to be turned back because being an orangutan is better for reaching high shelves. This is the most valid career decision I have ever heard. He teaches entirely in 'ook's and 'eek's. There are 47 different intonations and after three weeks I was fluent. My final paper was graded with a banana sticker. I got an A. I brought bananas to every class. Coincidence? Maybe. Worth it? Absolutely.",
                tags: ["Easy Grader", "Caring", "Bring Bananas"], thumbsUp: 534, thumbsDown: 3
            },
            {
                quality: 1.0, difficulty: 5.0,
                course: "TERM 000: How to Not Call Him a Monkey (MANDATORY ORIENTATION)",
                date: "Grune 1, Century of the Fruitbat", attendance: "Mandatory", forCredit: false, textbook: false, grade: "P/F", wouldTakeAgain: false,
                text: "A freshman called him a monkey on the first day. He is now in the hospital. The student, not the Librarian. The Librarian is VERY strong and VERY sensitive about the m-word. There is now a three-page waiver you must sign before entering the library. The waiver includes a glossary of primate terminology. There is a quiz. You must score 100% on the quiz to pass. I failed because I confused 'ape' with 'primate' on question 7 and he looked at me with such disappointment that I immediately retook it. Do. Not. Say. The. Word.",
                tags: ["Do NOT Say The M-Word", "Tough Grader", "Intimidating"], thumbsUp: 678, thumbsDown: 2
            },
            {
                quality: 4.5, difficulty: 3.0,
                course: "LSPC 400: L-Space Theory & Interdimensional Library Navigation",
                date: "Spune 19, Century of the Fruitbat", attendance: "Mandatory", forCredit: true, textbook: false, grade: "A-", wouldTakeAgain: true,
                text: "L-Space is the theory that all libraries are connected through a higher dimension. The Librarian took us on a field trip through L-Space and we ended up in a library in another UNIVERSE. We were gone for three hours and came back with books that don't exist in our reality. One student checked out a book from the Library of Alexandria that was supposed to have burned two thousand years ago. The late fee was 2,300 years overdue. The Librarian waived it. He's stern but fair. Best field trip at Unseen University, no contest.",
                tags: ["Amazing Lectures", "Caring", "Inspirational"], thumbsUp: 489, thumbsDown: 6
            },
            {
                quality: 4.0, difficulty: 2.5,
                course: "BNNA 150: Applied Banana Theory & Fruit-Based Incentive Systems",
                date: "Ember 28, Century of the Fruitbat", attendance: "Not Mandatory", forCredit: false, textbook: false, grade: "A", wouldTakeAgain: true,
                text: "This is technically an elective but it's really just the Librarian teaching us about bananas for twelve weeks. I have never seen anyone more passionate about a fruit. He showed us forty-seven banana varieties. He graded our banana identification quiz by smelling our papers. I don't understand how, but he could tell who studied based on scent alone. I got extra credit for bringing in a plantain and explaining the difference between a banana and a plantain. He gave me a standing ovation. An orangutan gave me a standing ovation. My parents have never been more confused or more proud.",
                tags: ["Easy Grader", "Hilarious", "Bring Bananas"], thumbsUp: 567, thumbsDown: 4
            }
        ]
    },
    {
        id: "newton",
        name: "Sir Isaac Newton",
        title: "Lucasian Professor, Alchemist & Natural Philosopher",
        school: "Trinity College, Cambridge (& the Secret Alchemical Laboratory)",
        department: "Department of Gravity, Optics & Clandestine Transmutation",
        image: "https://upload.wikimedia.org/wikipedia/commons/3/39/GodfreyKneller-IsaacNewton-1689.jpg",
        quality: 3.9,
        difficulty: 5.0,
        wouldTakeAgain: 62,
        numRatings: 231,
        hotness: false,
        tags: ["Tough Grader", "Respected", "Lecture Heavy", "Secret Lab", "Will Fail You With Math", "Grudge Holder"],
        ratings: { awesome: 38, great: 22, good: 15, ok: 12, awful: 13 },
        breakdown: { "Knowledge": 5.0, "Accessibility": 1.0, "Clarity": 3.5, "Helpfulness": 2.0, "Charisma": 1.5, "Punctuality": 4.5 },
        reviews: [
            {
                quality: 4.0, difficulty: 5.0,
                course: "ALCH 501: Transmutation of Base Metals into Gold (Classified)",
                date: "Michaelmas Term, 1687", attendance: "Mandatory", forCredit: true, textbook: false, grade: "B-", wouldTakeAgain: true,
                text: "Newton teaches physics by day and runs a SECRET ALCHEMY LAB by night. I found out because I saw him sneaking into his workshop at 2am carrying mercury and a Bible. The man has been trying to turn lead into gold for twenty years. He hasn't succeeded but he DID accidentally invent calculus while procrastinating on his alchemy homework. His grading is brutal - he invented an entire branch of mathematics just to make the exams harder. My C+ required solving equations that didn't exist six months ago.",
                tags: ["Tough Grader", "Secret Lab", "Respected"], thumbsUp: 456, thumbsDown: 8
            },
            {
                quality: 5.0, difficulty: 5.0,
                course: "GRAV 301: Why Things Fall Down (A Comprehensive Theory)",
                date: "Easter Term, 1688", attendance: "Mandatory", forCredit: true, textbook: true, grade: "A-", wouldTakeAgain: true,
                text: "Professor Newton got hit by a falling apple during an outdoor lecture and instead of saying 'ow' like a normal person, he spent the next 18 months writing a book explaining WHY the apple fell. The book is the textbook. It's in Latin. There are no translations because he says if you can't read Latin you 'lack the intellectual fortitude for natural philosophy.' The man invented gravity as a FLEX. He then used it to calculate the orbit of the moon during office hours while I waited to ask about my grade. Absolute menace. Genius, but menace.",
                tags: ["Tough Grader", "Will Fail You With Math", "Inspirational"], thumbsUp: 678, thumbsDown: 5
            },
            {
                quality: 2.0, difficulty: 5.0,
                course: "OPTI 400: Prisms, Light & Staring at the Sun (Don't)",
                date: "Lent Term, 1689", attendance: "Mandatory", forCredit: true, textbook: true, grade: "C+", wouldTakeAgain: false,
                text: "Newton stuck a NEEDLE behind his own EYEBALL to test a theory about light and color. During a live demonstration. Students fainted. He said 'the data was worth the discomfort.' He then spent three lectures proving that white light contains all colors using a prism, which was genuinely mindblowing, but I couldn't focus because I kept thinking about the needle thing. He also has a vendetta against a man named Leibniz and brings it up in every class. Sir, this is optics, not a courtroom.",
                tags: ["Tough Grader", "Grudge Holder", "Would Not Recommend"], thumbsUp: 534, thumbsDown: 12
            },
            {
                quality: 4.0, difficulty: 5.0,
                course: "BIBL 600: Decoding Biblical Prophecy Through Mathematics",
                date: "Michaelmas Term, 1690", attendance: "Not Mandatory", forCredit: false, textbook: false, grade: "B+", wouldTakeAgain: true,
                text: "Newton spent 50 years secretly trying to calculate the exact date of the apocalypse using the Bible and mathematics. He settled on 'no earlier than 2060.' I asked him how confident he was and he said '95%, but I'm still working on the margin of error.' This man treats the end of the world like a homework problem. He showed us his calculations - there were 300 pages. In Latin. With DIAGRAMS. I don't know if he's a prophet or a madman but he's definitely the smartest person I've ever been terrified of.",
                tags: ["Lecture Heavy", "Respected", "Tough Grader"], thumbsUp: 412, thumbsDown: 15
            },
            {
                quality: 3.0, difficulty: 5.0,
                course: "MINT 100: Running the Royal Mint & Executing Counterfeiters",
                date: "Easter Term, 1699", attendance: "Mandatory", forCredit: true, textbook: false, grade: "B", wouldTakeAgain: false,
                text: "Newton took a side job running the Royal Mint and personally hunted down counterfeiters. He had PEOPLE EXECUTED. He went undercover in taverns and gambling dens to catch criminals. This is a MATH PROFESSOR. The class was supposed to be about economics but it turned into a true crime podcast. He showed us his disguises. He has a fake mustache collection. Isaac Newton has a FAKE MUSTACHE COLLECTION. I can never look at the Principia the same way again.",
                tags: ["Hilarious", "Tough Grader", "Grudge Holder"], thumbsUp: 567, thumbsDown: 7
            }
        ]
    },
    {
        id: "babayaga",
        name: "Baba Yaga",
        title: "Witch of the Iron Fence, Keeper of the Chicken-Legged Hut",
        school: "The Deep Woods Academy (Location Changes Daily)",
        department: "Department of Folklore Enforcement, Cannibalism Studies & Moral Testing",
        image: "https://upload.wikimedia.org/wikipedia/commons/4/45/Bilibin._Baba_Yaga.jpg",
        quality: 3.4,
        difficulty: 4.8,
        wouldTakeAgain: 48,
        numRatings: 192,
        hotness: false,
        tags: ["Tough Grader", "Intimidating", "Campus Moves Around", "Bring Your Own Mortar", "May Eat Students", "Surprisingly Fair"],
        ratings: { awesome: 30, great: 18, good: 17, ok: 15, awful: 20 },
        breakdown: { "Knowledge": 5.0, "Accessibility": 0.5, "Clarity": 3.5, "Helpfulness": 3.0, "Charisma": 4.0, "Punctuality": 1.0 },
        reviews: [
            {
                quality: 3.0, difficulty: 5.0,
                course: "HOUS 101: Living Architecture & Poultry-Based Foundations",
                date: "Once Upon a Time", attendance: "Mandatory", forCredit: true, textbook: false, grade: "B", wouldTakeAgain: false,
                text: "The campus is a hut that walks around on GIANT CHICKEN LEGS. You cannot find the classroom. The classroom finds YOU. I showed up to the coordinates on the syllabus and there was nothing there. Then a house on chicken legs came RUNNING out of the forest and sat down in front of me. The door opened and Baba Yaga said 'you're late.' I was 20 minutes EARLY. The hut had wandered to a different time zone. There is no campus map because the campus is SENTIENT and UNCOOPERATIVE.",
                tags: ["Campus Moves Around", "Tough Grader", "Would Not Recommend"], thumbsUp: 489, thumbsDown: 8
            },
            {
                quality: 4.0, difficulty: 5.0,
                course: "TEST 400: Impossible Tasks & How to Complete Them Anyway",
                date: "In the Darkest Part of Winter", attendance: "Mandatory", forCredit: true, textbook: false, grade: "A-", wouldTakeAgain: true,
                text: "Baba Yaga's teaching method is giving you three impossible tasks and seeing if you survive. My midterm was separating a pile of wheat from dirt using only my tears. My final was stealing fire from her skull-topped fence without dying. She gives you NO instructions and NO hints. But here's the thing - if you're clever and kind, you pass. If you're rude or lazy, she eats you. Literally. Two students failed this semester. They are no longer with us. She says they 'graduated to a different plane.' The soup that week tasted weird. I'm not asking questions.",
                tags: ["Tough Grader", "May Eat Students", "Surprisingly Fair"], thumbsUp: 623, thumbsDown: 4
            },
            {
                quality: 3.5, difficulty: 4.5,
                course: "MORT 300: Flying via Mortar & Pestle (Intermediate Level)",
                date: "When the Leaves Turned", attendance: "Mandatory", forCredit: true, textbook: false, grade: "B+", wouldTakeAgain: true,
                text: "Baba Yaga flies in a giant MORTAR, using the PESTLE as a rudder, and sweeps away her tracks with a BROOM. This is the most unhinged form of transportation in any magical tradition and I LOVE it. She taught us to fly in kitchen equipment at 200 feet. I crashed into a birch tree. She laughed for ten minutes, picked me up, and said 'again.' By the end of the semester I could do barrel rolls in a mortar and pestle. My parents don't believe me. I don't care. This is the most useful thing I've ever learned.",
                tags: ["Amazing Lectures", "Tough Grader", "Bring Your Own Mortar"], thumbsUp: 534, thumbsDown: 6
            },
            {
                quality: 3.0, difficulty: 5.0,
                course: "FENC 100: Decorating with Human Skulls (An Introduction)",
                date: "The Night Before Solstice", attendance: "Mandatory", forCredit: true, textbook: false, grade: "B-", wouldTakeAgain: false,
                text: "Baba Yaga's front yard is a fence made of HUMAN BONES topped with GLOWING SKULLS. She said this was 'curb appeal.' The first assignment was interior decorating using only materials found in the haunted forest. A student used flowers. Baba Yaga said flowers were 'too cheerful' and made him redo it with mushrooms and owl pellets. I used bones and got a B-. She said my bone arrangement 'lacked menace but showed promising spatial awareness.' I put this on my resume under 'Design Skills.' No regrets.",
                tags: ["Intimidating", "Tough Grader", "Hilarious"], thumbsUp: 445, thumbsDown: 11
            }
        ]
    },
    {
        id: "faust",
        name: "Doctor Faustus",
        title: "Scholar, Theologian & Damned Soul",
        school: "University of Wittenberg (On Sabbatical in Hell)",
        department: "Department of Forbidden Knowledge & Contractual Demonology",
        image: "https://upload.wikimedia.org/wikipedia/commons/6/67/Rembrandt%2C_Faust.jpg",
        quality: 4.1,
        difficulty: 4.3,
        wouldTakeAgain: 60,
        numRatings: 145,
        hotness: false,
        tags: ["Respected", "Tough Grader", "Read the Fine Print", "Lecture Heavy", "Amazing Lectures", "Sold His Soul"],
        ratings: { awesome: 40, great: 22, good: 15, ok: 13, awful: 10 },
        breakdown: { "Knowledge": 5.0, "Accessibility": 3.5, "Clarity": 4.5, "Helpfulness": 4.0, "Charisma": 4.5, "Punctuality": 3.0 },
        reviews: [
            {
                quality: 5.0, difficulty: 4.0,
                course: "KNOW 500: The Limits of Human Knowledge (& How to Exceed Them)",
                date: "Wittenberg, 1587", attendance: "Mandatory", forCredit: true, textbook: false, grade: "A", wouldTakeAgain: true,
                text: "Dr. Faustus is the most brilliant lecturer I have ever encountered. He mastered theology, law, medicine, AND magic, got bored, and sold his soul to the devil for more knowledge. His lectures on the nature of infinity made me weep. The problem is he keeps using his own life as a cautionary tale and then getting emotional. He spent the last twenty minutes of every class staring at the hourglass on his desk whispering 'was it worth it.' Sir, we have a final next week. Please focus.",
                tags: ["Inspirational", "Amazing Lectures", "Respected"], thumbsUp: 489, thumbsDown: 7
            },
            {
                quality: 4.0, difficulty: 5.0,
                course: "CONT 401: Contract Law with Infernal Entities",
                date: "Wittenberg, 1588", attendance: "Mandatory", forCredit: true, textbook: true, grade: "B+", wouldTakeAgain: true,
                text: "This class is ESSENTIAL. Dr. Faustus teaches contract law using his OWN contract with the devil as the primary case study. He signed away his immortal soul for 24 years of unlimited power and knowledge. He did NOT read the fine print. He now teaches us to read every clause, sub-clause, and demonic footnote before signing anything. The midterm was finding loopholes in Mephistopheles' standard soul contract. I found seven. Faustus found none in 24 years. He gave me an A on the midterm and looked genuinely sad about it.",
                tags: ["Tough Grader", "Read the Fine Print", "Amazing Lectures"], thumbsUp: 567, thumbsDown: 5
            },
            {
                quality: 3.5, difficulty: 4.5,
                course: "DEMO 300: Summoning & Managing Demonic Teaching Assistants",
                date: "Wittenberg, 1589", attendance: "Mandatory", forCredit: true, textbook: false, grade: "B", wouldTakeAgain: false,
                text: "Dr. Faustus's TA is Mephistopheles. An actual demon. From actual Hell. He grades papers in red ink that smells like sulfur and occasionally bursts into flame. He gave me a B and when I went to office hours to dispute it, he showed me a vision of my own death and said 'does the grade really matter in the grand scheme of things?' It does, Mephistopheles. I need a 3.5 GPA for financial aid. He then changed it to a B+ because 'even demons respect persistence.' The power dynamic in this department is WILD.",
                tags: ["Tough Grader", "Intimidating", "Read the Fine Print"], thumbsUp: 623, thumbsDown: 9
            },
            {
                quality: 4.0, difficulty: 3.5,
                course: "REGR 100: Regret Studies & Applied Melancholy",
                date: "Wittenberg, 1590", attendance: "Not Mandatory", forCredit: false, textbook: false, grade: "A-", wouldTakeAgain: true,
                text: "This is secretly the best philosophy class at Wittenberg. Faustus spent the semester exploring whether infinite knowledge is worth infinite suffering. Week 3 he conjured Helen of Troy to make a point about desire vs fulfillment. She was unimpressed by the lecture hall. Week 8 he flew us to Rome on a magic carpet to 'broaden our perspectives.' By week 12 he was openly weeping about his choices. The class evaluations had a section that said 'Would you sell your soul for this knowledge? Y/N.' I circled Y. He pulled me aside and said 'Don't.' Most impactful elective I've ever taken.",
                tags: ["Inspirational", "Caring", "Amazing Lectures"], thumbsUp: 712, thumbsDown: 3
            }
        ]
    },
    {
        id: "rasputin",
        name: "Grigori Rasputin",
        title: "The Mad Monk, Mystic Healer & Unkillable Lecturer",
        school: "Imperial Russian Academy of Mysticism, St. Petersburg",
        department: "Department of Faith Healing, Hypnosis & Surviving Assassination",
        image: "https://upload.wikimedia.org/wikipedia/commons/9/97/Grigori_Rasputin_1916.jpg",
        quality: 2.9,
        difficulty: 3.5,
        wouldTakeAgain: 44,
        numRatings: 187,
        hotness: true,
        tags: ["Intimidating", "Confusing Sometimes", "Will Not Die", "Hypnotic Lectures", "Office Hours at Midnight", "Unpredictable"],
        ratings: { awesome: 25, great: 15, good: 18, ok: 18, awful: 24 },
        breakdown: { "Knowledge": 3.0, "Accessibility": 4.0, "Clarity": 2.0, "Helpfulness": 3.5, "Charisma": 5.0, "Punctuality": 2.5 },
        reviews: [
            {
                quality: 3.0, difficulty: 3.0,
                course: "HEAL 301: Faith Healing & Inexplicable Medical Recoveries",
                date: "February, 1913", attendance: "Mandatory", forCredit: true, textbook: false, grade: "B+", wouldTakeAgain: true,
                text: "Rasputin healed the Tsarevich's hemophilia through what he calls 'prayer and intense staring.' No medicine. No bandages. Just STARING. The medical faculty has tried to debunk him seventeen times and failed every single time. He invited the entire class to watch him heal a man's broken arm by whispering to it. The arm healed. The doctors are furious. Rasputin smiled and said 'faith is stronger than science.' He then drank an entire bottle of wine and continued the lecture. Unorthodox but effective.",
                tags: ["Hypnotic Lectures", "Confusing Sometimes", "Respected"], thumbsUp: 345, thumbsDown: 18
            },
            {
                quality: 4.0, difficulty: 3.5,
                course: "HYPN 400: Advanced Hypnosis & the Power of Eye Contact",
                date: "October, 1914", attendance: "Mandatory", forCredit: true, textbook: false, grade: "A-", wouldTakeAgain: true,
                text: "DO NOT make direct eye contact with Rasputin during lecture. I know the syllabus says 'eye contact is encouraged for learning' but that man's eyes are PORTALS. I looked into them during a demonstration and lost four hours. When I came to, I had written a 20-page essay on the nature of the Russian soul. In Russian. I don't speak Russian. He gave me an A-. I still don't know what I wrote. My roommate says I was 'speaking in tongues' the whole time. Best grade I've ever gotten on an assignment I don't remember writing.",
                tags: ["Hypnotic Lectures", "Intimidating", "Amazing Lectures"], thumbsUp: 512, thumbsDown: 8
            },
            {
                quality: 2.0, difficulty: 4.0,
                course: "SURV 600: How to Survive Being Murdered (A Masterclass)",
                date: "December, 1916", attendance: "Mandatory", forCredit: true, textbook: false, grade: "B", wouldTakeAgain: false,
                text: "For the final demonstration, Rasputin was poisoned, shot, beaten, and thrown into a frozen river. He showed up to the next lecture. On time. Dripping wet. He said 'as I was saying before I was interrupted.' NO EXPLANATION. The class sat in stunned silence. He then taught a full two-hour lecture on resilience. He's been 'killed' four times this semester alone and he keeps coming back. The administration has stopped trying to process his death certificates. HR gave up. He is genuinely unkillable and I don't know if that's magic or spite.",
                tags: ["Will Not Die", "Tough Grader", "Intimidating"], thumbsUp: 789, thumbsDown: 4
            },
            {
                quality: 3.0, difficulty: 3.5,
                course: "WINE 150: Mystical Wine Appreciation & Spiritual Intoxication",
                date: "March, 1915", attendance: "Not Mandatory", forCredit: false, textbook: false, grade: "A", wouldTakeAgain: true,
                text: "Easiest class at the Academy. Rasputin brings wine to every lecture. Not for demonstration purposes - he just drinks wine during class. By week 3 he started sharing. By week 6 it was basically a wine club with occasional mystical insights. He said wine 'opens the third eye.' It opened something because after three glasses I could see auras. Or I was drunk. Unclear. The final was a wine tasting where he paired each wine with a spiritual revelation. I paired a Crimean red with 'the futility of earthly ambition.' Got an A. Best Tuesday afternoon of my life.",
                tags: ["Easy Grader", "Hilarious", "Hypnotic Lectures"], thumbsUp: 534, thumbsDown: 12
            }
        ]
    },
    {
        id: "oz",
        name: "The Wizard of Oz",
        title: "The Great and Powerful Oz (Actually Just Some Guy)",
        school: "Emerald City University",
        department: "Department of Illusion, Showmanship & Confidence-Based Sorcery",
        image: "https://upload.wikimedia.org/wikipedia/commons/1/13/Wizard_Oz_Humbug_%28cropped%29.jpg",
        quality: 2.1,
        difficulty: 1.8,
        wouldTakeAgain: 32,
        numRatings: 254,
        hotness: false,
        tags: ["Easy Grader", "Would Not Recommend", "Not a Real Wizard", "Great Showman", "Pay No Attention to the Man Behind the Curtain", "Hilarious"],
        ratings: { awesome: 12, great: 10, good: 15, ok: 23, awful: 40 },
        breakdown: { "Knowledge": 1.5, "Accessibility": 1.0, "Clarity": 2.5, "Helpfulness": 3.5, "Charisma": 4.5, "Punctuality": 3.0 },
        reviews: [
            {
                quality: 1.0, difficulty: 1.0,
                course: "WIZD 101: Introduction to Being a Wizard (No Magic Required)",
                date: "Emerald City, Year of Oz 40", attendance: "Mandatory", forCredit: true, textbook: false, grade: "A", wouldTakeAgain: false,
                text: "This man is NOT A WIZARD. He's a balloon pilot from KANSAS. I walked behind the curtain in the lecture hall and he was just pulling levers and speaking into a megaphone. The 'magical green glow' of the classroom? Green-tinted glasses he makes everyone wear on day one. I've been wearing fake magic glasses for THREE SEMESTERS. My entire degree is a lie. He gave everyone an A because, and I quote, 'a diploma is just a piece of paper that makes you feel smart.' SIR. I am $40,000 in debt to feel smart.",
                tags: ["Not a Real Wizard", "Easy Grader", "Would Not Recommend"], thumbsUp: 892, thumbsDown: 5
            },
            {
                quality: 3.0, difficulty: 2.0,
                course: "CONF 300: Advanced Confidence & Fake It Till You Make It",
                date: "Emerald City, Year of Oz 41", attendance: "Not Mandatory", forCredit: true, textbook: false, grade: "A-", wouldTakeAgain: true,
                text: "OK so he's not a real wizard but hear me out - this class is ACTUALLY USEFUL. The Wizard taught us that most power is just confidence plus good lighting plus a smoke machine. He gave a Scarecrow a diploma and the Scarecrow immediately started doing calculus. He gave a Lion a medal and the Lion fought a Kalidah. The magic was inside them the whole time, sure, but the Wizard is the one who convinced them of that. He's not a sorcerer, he's a THERAPIST. With PYROTECHNICS. Honestly more useful than half the real wizards on this site.",
                tags: ["Great Showman", "Hilarious", "Inspirational"], thumbsUp: 567, thumbsDown: 18
            },
            {
                quality: 2.0, difficulty: 2.0,
                course: "SMOK 200: Smoke, Mirrors & Large Floating Head Projection",
                date: "Emerald City, Year of Oz 39", attendance: "Mandatory", forCredit: true, textbook: false, grade: "B+", wouldTakeAgain: false,
                text: "The entire course is special effects. Not magical special effects. THEATRICAL special effects. Pulleys. Levers. Green dye. Fireworks. Megaphones. He taught us to project a giant floating head using nothing but a lantern and some fabric. When Gandalf visited as a guest lecturer and did ACTUAL magic, the Wizard just stood there sweating and said 'yes, that's very similar to what I do.' It is NOT similar. Gandalf conjured fire from nothing. You have a SMOKE MACHINE, Oscar. Still, the stagecraft knowledge is genuinely impressive.",
                tags: ["Not a Real Wizard", "Hilarious", "Great Showman"], thumbsUp: 456, thumbsDown: 14
            },
            {
                quality: 1.5, difficulty: 1.0,
                course: "BALO 100: Hot Air Balloon Safety & Emergency Kansas Evacuation",
                date: "Emerald City, Year of Oz 42", attendance: "Not Mandatory", forCredit: false, textbook: false, grade: "A", wouldTakeAgain: false,
                text: "The Wizard's backup plan for every crisis is 'get in the balloon and leave.' That's it. That's the entire crisis management curriculum. When things went wrong during the final, he literally got in his balloon and FLOATED AWAY while we were still taking the exam. He shouted 'you all pass!' from 500 feet in the air. We haven't seen him since. The department sent a search party but all they found was a pair of green-tinted glasses and a note that said 'Pay no attention to the man who has left.' The Emerald City has no chancellor. I still got my A.",
                tags: ["Easy Grader", "Would Not Recommend", "Hilarious"], thumbsUp: 734, thumbsDown: 3
            },
            {
                quality: 3.5, difficulty: 2.5,
                course: "HRTS 250: Giving People What They Already Have (A Seminar)",
                date: "Emerald City, Year of Oz 40", attendance: "Mandatory", forCredit: true, textbook: false, grade: "A", wouldTakeAgain: true,
                text: "This is secretly the most profound class at ECU. The Wizard spent the whole semester teaching us that people don't actually need magic - they need someone to tell them they're enough. He gave a Tin Man a ticking clock and called it a heart. The Tin Man CRIED. It's a CLOCK. But the Tin Man felt loved and that's what mattered. The final exam was making someone believe in themselves without using any magic. I told my roommate she was a good cook. She cried. I got an A. This fraud accidentally created the best psychology course on campus.",
                tags: ["Inspirational", "Caring", "Great Showman"], thumbsUp: 623, thumbsDown: 8
            }
        ]
    }
];
