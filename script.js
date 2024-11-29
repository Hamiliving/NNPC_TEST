// Mock Questions
const questions = [
    {
      id: 1,
      question: "1. Ronald and Elan are working on an assignment. Ronald takes 6 hours to type 32 pages on a computer, while Elan takes 5 hours to type 40 pages. How much time will they take, working together on two different computers to type an assignment of 110 pages?",
      options: ["7 hours 30 minutes", "8 hours", "8 hours 15 minutes", "8 hours 25 minutes"],
      correct: "8 hours 15 minutes",
    },
    {
      id: 2,
      question: "2. A cricket team consists of 12 players, and a team of 6 members is to be formed. Solve for the following scenarios:Scenario 1: Two specific players (Player A and Player B) are always included in the team. How many different ways can the remaining team of 6 players be formed? Scenario 2: Three specific players (Player X, Player Y, and Player Z) are excluded from the team. How many different ways can the team of 6 players be formed from the remaining players? Choose the correct pair of answers for both scenarios:?",
      options: ["210 and 84", "300 and 126", "120 and 36", "84 and 210"],
      correct: "210 and 84",
    },
    {
      id: 3,
      question: "3. How many meters are in 13 kilometers?",
      options: ["1300 meters", "13000 meters", "130 meters","10000 meters"],
      correct: "13000 meters",
    },

    {
        id: 4,
        question: "4. If the ratio of girls to boys in a class is 2:5 with 40 girls, how many boys are there?",
        options: ["80 boys", "100 boys", "60 boys","50 boys"],
        correct: "100 boys",
      },

      {
        id: 5,
        question: "5. If a father is 4 times as old as his son, and the son is currently 10 years old, how old is the father?",
        options: ["30 years",  "40 years  ", "20 years  ", "50 years  "],
        correct: "40 years",
      },
      {
        id:6 ,
        question: "6. When shared in ratios of 2:4:6, what is the total number of parts? ",
        options: ["10 parts  ","12 parts  ","8 parts  ","14 parts  "],
        correct: "10 parts  ",
      },
    
      {
        id:7 ,
        question: "7. What is the sum of 1/6+3/8?",
        options: ["13/24","15/24","17/24","19/24"],
        correct: "17/24",
      },
      {
        id:8 ,
        question: "8. What is the shape of an egg?",
        options: ["Sphere","Cube","Ellipsoid","Pyramid"],
        correct: "Ellipsoid",
      },
      {
        id:9 ,
        question: "9. Which city was the first capital of Nigeria?",
        options: ["Lokoja ","Abuja","Calabar","Lagos"],
        correct: "Calabar",
      },
      {
        id:10 ,
        question: "10. How many protectorates were in Nigeria by 1900?",
        options: ["1","3","2","4"],
        correct: "2",
      },
      {
        id: 11,
        question: "11. When did the Nigeria Civil War take place? ",
        options: ["1965-1967","1967-1970","1970-1973","1960-1965"],
        correct: "1967-1970",
      },
      {
        id:12 ,
        question: "12. In the statement, The company stopped paying for voluntary services, what is the cause and effect relationship?",
        options: ["Cause: Company stopped paying; Effect: Workers continued volunteering","Cause: Workers stopped volunteering; Effect: Company stopped paying", "Cause: Company stopped paying; Effect: Workers also stopped doing them","Cause: Workers continued volunteering; Effect: Company increased payments"],
        correct: "Cause: Company stopped paying; Effect: Workers also stopped doing them",
      },
      {
        id:13 ,
        question: "13. What do local government workers calling off strike and oil company workers going on strike have in common",
        options: ["They are both caused by economic factors","They have independent causes","They are both related to government policies","They are both influenced by public opinion"],
        correct: "They have independent causes",
      },
      {
        id:14 ,
        question: "14. What has resulted in more suicides by youths according to the statement?",
        options: ["Life being too demanding and stressful","Lack of job opportunities","Increased social media usage","Poor mental health awareness"],
        correct: "Life being too demanding and stressful",
      },
      {
        id:15 ,
        question: "15. Which English question structure does not require a comma before 'and'?",
        options: ["The one with items listed","The one with complex sentences","The one with simple sentences","The one with compound subjects"],
        correct: "The one with items listed",
      },
      {
        id: 16,
        question: "16. What does OPEC stand for?",
        options: ["Organization of Petroleum Exporting Communities","Organization of Petroleum Exporting Countries  ","Organization of Petroleum Energy Company","Organization of Petroleum and Energy Council"],
        correct: "Organization of Petroleum Exporting Countries  ",
      },
      {
        id:17,
        question: "17. Which device is both an input and output device?",
        options: ["Printer","Scanner","DVD ", " Monitor  "],
        correct: "DVD ",
      },
      {
        id:18 ,
        question: "18. What type of network connects different branches in various regions?",
        options: ["Local Area Network (LAN)","Metropolitan Area Network (MAN)","Wide Area Network (WAN)","Regional Area Network (RAN)"],
        correct: "Wide Area Network (WAN)",
      },
      {
        id:19 ,
        question: "19. What is the definition of a wiki?",
        options: ["A site anyone can access freely","A site anyone can add to, delete, or revise","A site for academic research only","A site for government documents only"],
        correct: "A site anyone can add to, delete, or revise",
      },
      {
        id:20 ,
        question: "20. When was ECOWAS formed?",
        options: ["25 May 1975","28 May 1975","28 May 1976","1 June 1975"],
        correct: "28 May 1975",
      },
      {
        id:21 ,
        question: "21. Who was never a regional premier in Nigeria?",
        options: ["Dennis Osadebe","Aminu Kano","Obafemi Awolowo","Ahmadu Bello"],
        correct: "Aminu Kano",
      },
      {
        id:22 ,
        question: "22. Which ethnic group must the governor of a South East state belong to?",
        options: ["Hausa","Yoruba","Igbo","Fulani"],
        correct: "Igbo",
      },
      {
        id:23 ,
        question: "23. In which country is Swahili predominantly spoken?",
        options: ["South Africa","Kenya","Uganda","Tanzania"],
        correct: "Kenya",
      },
      {
        id:24 ,
        question: "24. Is Uganda a Francophone country?",
        options: ["Yes","No","Partially","Only in certain regions"],
        correct: "No",
      },
      {
        id:25 ,
        question: "25. Where is the headquarters of the African Union located?",
        options: ["Nairobi, Kenya","Addis Ababa, Ethiopia","Abuja, Nigeria","Cairo, Egypt"],
        correct: "Addis Ababa, Ethiopia",
      },
      {
        id:26 ,
        question: "26. What is the nationality of the current AfDB president?",
        options: ["Ghanaian","Nigerian","South African"," Kenyan"],
        correct: "Nigerian",
      },

      {
        id:27 ,
        question: "27. Who is the current UN Secretary General?",
        options: ["Ban Ki Moon","Antonio Guterres","Kofi Annan","Boutros Boutros-Ghali"],
        correct: "Antonio Guterres",
      },
      {
        id:28 ,
        question: "28. Who was President of Nigeria in 1979?",
        options: ["Olusegun Obasanjo","Shehu Shagari","Muhammadu Buhari", "Goodluck Jonathan"],
        correct: "Shehu Shagari",
      },
      {
        id:29 ,
        question: "29. What are laws made by local governments called?",
        options: ["Decree","Act","Bye-laws","Edict"],
        correct: "Bye-laws",
      },
      {
        id:30 ,
        question: "30. Who coined the term neo-colonialism?",
        options: ["Nelson Mandela","Kwame Nkrumah","Julius Nyerere","Thomas Sankara"],
        correct: "Kwame Nkrumah",
      },
      {
        id:31 ,
        question: "What does an equidistant triangle have?",
        options: ["Two equal sides","Three equal sides","One right angle","No equal sides"],
        correct: "Three equal sides",
      },
      {
        id:32 ,
        question: "32. What is the head of Nigeria's central bank called?",
        options: ["Chief Justice","Attorney General","Governor","President"],
        correct: "Governor",
      },
      {
        id:33 ,
        question: "33. Who is the chief law officer of Nigeria?",
        options: ["Chief Judge","Attorney General","Senate President","Minister of Justice"],
        correct: "Attorney General",
      },
      {
        id:34 ,
        question: "34. When did the Soviet Union collapse?",
        options: ["November 1991","December 1991","January 1992","August 1991"],
        correct: "December 1991",
      },
      {
        id:35 ,
        question: "35. What has been the major impediment to Nigeria's development since 1960?",
        options: ["Bad leadership","Corruption","Overdependence on crude oil","All of the above"],
        correct: "All of the above",
      },
      {
        id: 36,
        question: "36. What system allows multiple users to use one computer at the same time?",
        options: ["Multi-tasking","Time sharing","Batch processing","Single-user system"],
        correct: "Time sharing",
      },
      {
        id:37,
        question: "37. What is the correct term for three-man committee?",
        options: ["Three-men committee","Three man committee","Three-man committee","Three persons committee"],
        correct: "Three-man committee",
      },
      {
        id:38 ,
        question: "38. Who invented the electric light bulb?",
        options: ["Walter Alan","Thomas Edison","Humphrey Davy","Nikola Tesla"],
        correct: "Humphrey Davy",
      },
      {
        id:39 ,
        question: "39. What type of computer manages network resources?",
        options: ["Super computer","Mainframe computer","Server computer","Personal computer"],
        correct: "Server computer",
      },
    
  {
    id:40 ,
    question: "40. Where is bar code mostly used?",
    options: ["Military","Computer laboratory","Supermarket","Air traffic control"],
    correct: "Supermarket",
  },
  {
    id:41 ,
    question: "41. What part of URL does domain name refer to?",
    options: ["Protocol","Path","Host", "Query"],
    correct: "Host",
  },
  {
    id:42 ,
    question: "42. When did Nigeria become a republic?",
    options: ["1 October 1960","1 October 1963","1 October 1965","1 October 1970"],
    correct: "1 October 1963",
  },
  {
    id:43 ,
    question: "43. How many Local Governments are there in Nigeria?",
    options: ["800","700","774","750"],
    correct: "774",
  },
  {
    id:44 ,
    question: "44. Which country is considered the newest in Africa?",
    options: ["Somalia","South Sudan","Eritrea","Gambia"],
    correct: "South Sudan",
  },
  {
    id: 45,
    question: "45. What is Venezuela known for?",
    options: ["Coffee production","Oil production","Cocoa production","Gold mining"],
    correct: "Oil production",
  },
  {
    id:46 ,
    question: "46. Which statement is not true about Nigeria?",
    options: ["Nigeria is the world's highest oil producer","Nigeria has significant oil reserves","Nigeria is a member of OPEC","Nigeria has a diverse economy"],
    correct: "Nigeria is the world's highest oil producer",
  },
  {
    id:47 ,
    question: "47. Who was the governor-general of Nigeria?",
    options: ["Lord Lugard","Sir Tafawa Balewa","Obafemi Awolowo","Nnamdi Azikiwe"],
    correct: "Lord Lugard",
  },
  {
    id:48 ,
    question: "48. Where is the A.U. headquarters located?",
    options: ["Nairobi","Addis Ababa","Cairo","Lagos"],
    correct: "Addis Ababa",
  },
  {
    id:49 ,
    question: "49. What is the major role of NNPC?",
    options: ["Regulating the banking sector","Regulating the oil sector","Managing education policies","Overseeing telecommunications"],
    correct: "Regulating the oil sector",
  },
  {
    id:50 ,
    question: "50. What is the correct spelling?",
    options: [") Privileges"," Priviledges","Privilages","Priviledges"],
    correct: ") Privileges",
  },
  {
    id:51 ,
    question: "51. Which telecommunications company is listed on the NSE (Nigerian Stock Exchange)?",
    options: ["MTN","Glo Telecoms","Airtel Nigeria","Etisalat Nigeria"],
    correct: "MTN",
  },
  {
    id:52 ,
    question: "52. When did Nigeria's first military coup occur?",
    options: ["January 15, 1966","July 29, 1966","October 1, 1960","February 13, 1976"],
    correct: "January 15, 1966",
  },
  {
    id:53 ,
    question: "53. What describes the greenhouse effect?",
    options: ["Climate change phenomenon","Natural weather cycle","Seasonal temperature fluctuation","Ocean current variation"],
    correct: "Climate change phenomenon",
  },
  {
    id: 54,
    question: "54. What was originally designed not to allow processing of data on or from memory?",
    options: ["Spreadsheet software","Database systems","Word processors","Operating systems"],
    correct: "Database systems",
  },
  {
    id:55 ,
    question: "55. What does spool refer to in computing terms?",
    options: ["To print documents directly from memory","To store data temporarily before processing","To send data to multiple devices simultaneously","To backup data automatically"],
    correct: "To store data temporarily before processing",
  },
  {
    id:56 ,
    question: "56. What does WAN stand for?",
    options: ["Wide Area Network","Wireless Area Network","World Area Network","Web Area Network"],
    correct: "Wide Area Network",
  },
  {
    id:57 ,
    question: "57. What type of system is UNIX?",
    options: ["Mobile operating system","Desktop operating system","Server operating system","Embedded operating system"],
    correct: "Server operating system",
  },
  {
    id:58 ,
    question: "58. What do you need to work in an oil company?",
    options: ["Technical skills only","Legal right","Personal connections","Financial backing"],
    correct: "Legal right",
  },
  {
    id:59 ,
    question: "59. How is the internet best defined?",
    options: ["A local network of computers","A global system of connected computers that share information","A collection of websites only","A private communication system"],
    correct: "A global system of connected computers that share information",
  },
  {
    id:60 ,
    question: "60. What is an IP address?",
    options: ["A physical address of an office","The special address of a computer connected to the internet","A postal address for mail delivery","A location identifier for GPS"],
    correct: "The special address of a computer connected to the internet",
  },
  {
    id: 61,
    question: "61. What describes the relationship between a father and grandson?",
    options: ["Sibling relationship","Ancestor-descendant relationship","Cousin relationship","Peer relationship"],
    correct: "Ancestor-descendant relationship",
  },
  {
    id: 62,
    question: "62. What describes the relationship between a father and daughter?",
    options: ["Sibling relationship","Ancestor-descendant relationship","Cousin relationship","Peer relationship"],
    correct: "Ancestor-descendant relationship",
  },

  {
    id:63 ,
    question: "63. What tool helps with different housekeeping tasks like filing and organizing?",
    options: ["Vacuum cleaner","Filing cabinet","Dishwasher","Laundry machine"],
    correct: "Filing cabinet",
  },
  {
    id:64 ,
    question: "64. What does total gross refer to in financial charts?",
    options: ["Total expenses incurred","Total revenue before deductions","Net profit after taxes","Total liabilities"],
    correct: "Total revenue before deductions",
  },

  {
    id:65,
    question: "65. Which of the following is a standard English expression?",
    options: ["He runned fast.","She has gone to the store.","They was happy.","I seen that movie."],
    correct: "She has gone to the store.",
  },



  ];




  
  // Timer Logic
  let time = 60 * 60; // 60 minutes in seconds
  const timerElement = document.getElementById("timer");
  
  function updateTimer() {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    timerElement.innerText = `Time Left: ${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    if (time > 0) {
      time--;
    } else {
      submitTest();
    }
  }
  setInterval(updateTimer, 1000);
  
  // Load Questions
  const questionsContainer = document.getElementById("questions");
  
  questions.forEach((q) => {
    const questionDiv = document.createElement("div");
    questionDiv.classList.add("question");
    questionDiv.innerHTML = `
      <h3>${q.question}</h3>
      ${q.options
        .map(
          (option) =>
            `<label>
               <input type="radio" name="question-${q.id}" value="${option}"> ${option}
             </label><br>`
        )
        .join("")}
      <div id="feedback-${q.id}" style="color: red; margin-top: 5px;"></div>
    `;
    questionsContainer.appendChild(questionDiv);
  });
  
  // Submit Test and Provide Feedback
  function submitTest() {
    const feedbackDiv = document.getElementById("feedback");
    let score = 0;
    let total = questions.length;
  
    questions.forEach((q) => {
      const selectedOption = document.querySelector(`input[name="question-${q.id}"]:checked`);
      const feedback = document.getElementById(`feedback-${q.id}`);
  
      if (selectedOption) {
        if (selectedOption.value === q.correct) {
          score++;
          feedback.style.color = "green";
          feedback.innerText = "Correct!";
        } else {
          feedback.style.color = "red";
          feedback.innerText = `Incorrect!` ;
        }
      } else {
        feedback.style.color = "red";
        feedback.innerText = "No answer selected!";
      }
    });
  
    feedbackDiv.innerHTML = `
      <h2>Test Feedback</h2>
      <p>Your Score: ${score}/${total}</p>
      <p>Percentage: ${(score / total) * 100}%</p>
      ${
        score === total
          ? "<p>Excellent! You got all the questions right!</p>"
          : "<p>Keep practicing to improve your score!</p>"
      }
    `;
  
    // Disable all inputs after submission
    document.querySelectorAll("input").forEach((input) => (input.disabled = true));
    document.querySelector("button").disabled = true;
  }
  