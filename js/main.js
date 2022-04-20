

    let quizContainer = document.getElementById('quiz');
    let resultsContainer = document.getElementById('results');
    let submitButton = document.getElementById('submit');
    let myQuestions = [
        {
          question: "Q1: 1 + 1 = ?",
          answers: {
          a: "3",
          b: "2",
          c: "11",
          d: "0"
          },
          correctAnswer: "b",
        },
        {
          question: "Q2: 2 x 2 = ?",
          answers: {
          a: "4",
          b: "22",
          c: "0",
          d: "8"
          },
          correctAnswer: "a",
        },
        {
          question: "Q3: 2 x 4 = ?",
          answers: {
          a: "6",
          b: "8",
          c: "10",
          d: "2"
          },
          correctAnswer: "b",
        },
        {
          question: "Q4: 5 + 3 = ?",
          answers: {
          a: "15",
          b: "2",
          c: "53",
          d: "8"
          },
          correctAnswer: "d",
        },
        {
          question: "Q5: 4 / 2 = ?",
          answers: {
          a: "6",
          b: "8",
          c: "2",
          d: "12"
          },
          correctAnswer: "c",
        },
        {
          question: "Q6: 10 / 1 = ?",
          answers: {
          a: "101",
          b: "10",
          c: "1",
          d: "100"
        },
          correctAnswer: "b",
        },
        {
          question: "Q7: 1 + 1 + 1 = ?",
          answers: {
          a: "3",
          b: "2",
          c: "1",
          d: "6"
          },
          correctAnswer: "a",
        },
        {
          question: "Q8: 3 x 5 + 2 = ?",
          answers: {
          a: "17",
          b: "10",
          c: "13",
          d: "21"
          },
          correctAnswer: "a",
        },
        {
          question: "Q9: 1920 x 1280 * 0 =?",
          answers: {
          a: "1920.1280",
          b: "1280.1920",
          c: "2910.1082",
          d: "0"
          },
          correctAnswer: "d",
        },
        {
          question: "Q10: 10 / 2  = ?",
          answers: {
          a: "10",
          b: "102",
          c: "5",
          d: "12"
        },
          correctAnswer: "c",
        },
        {
          question: "Q11: ABC__EFGH.",
          answers: {
          a: "d",
          b: "m",
          c: "i",
          d: "k"
          },
          correctAnswer: "a",
        },
        {
          question: "Q12: EFGH_JKLMN.",
          answers: {
          a: "O",
          b: "B",
          c: "Q",
          d: "I"
          },
          correctAnswer: "d",
        },
        {
          question: "Q13: JKLMN__PQRS.",
          answers: {
          a: "A",
          b: "V",
          c: "W",
          d: "O"
          },
          correctAnswer: "d",
        },
        {
          question: "Q14: PQRST__VWXYZ",
          answers: {
          a: "J",
          b: "U",
          c: "R",
          d: "F"
          },
          correctAnswer: "b",
        },
        {
          question: "Q15: 4 x 4 - 4 = ?",
          answers: {
          a: "16",
          b: "32",
          c: "12",
          d: "4"
          },
          correctAnswer: "c",
        },
        {
          question: "Q16: 4 + 1 + 4 + 1= ?",
          answers: {
          a: "10",
          b: "6",
          c: "12",
          d: "21"
          },
          correctAnswer: "a",
        },
        {
          question: "Q17: 5 x 5 x 5 = ?",
          answers: {
          a: "15",
          b: "125",
          c: "100",
          d: "555"},
          correctAnswer: "b",
        },
        {
          question: "Q18: 3 / 3 + 3 = ?",
          answers: {
          a: "3",
          b: "0",
          c: "4",
          d: "1"
          },
          correctAnswer: "c",
        },
        {
          question: "Q19: 6 + 6 + 6 = ? ",
          answers: {
          a: "18",
          b: "666",
          c: "6",
          d: "1"
          },
          correctAnswer: "a",
        },
        {
          question: "Q20: 7 - 6 + 9  = ?",
          answers: {
          a: "769",
          b: "679",
          c: "9",
          d: "10"
          },
          correctAnswer: "d",
        },
      ];
      

      
    function loadQuiz(){
      let output = [];
      // load Quiz
      myQuestions.forEach(
        (currentQuestion, questionNumber) => {
          let answers = [];
          for(letter in currentQuestion.answers){
  
            // add an HTML radio button
            answers.push(
              `<label>
                <input type="radio" class="radio-btn" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
              </label>`
            );
          }
  
          // add this question and its answers to the output
          output.push(
            `<div class="slide">
              <div class="question"> ${currentQuestion.question} </div>
              <div class="answers"> ${answers.join("")} </div>
            </div>`
          );
        }
      );
  
      // combine our output list into one string 
      quizContainer.innerHTML = output.join('');
    }
  
    function showResults(){
  
      let answerContainers = quizContainer.querySelectorAll('.answers');
      let numCorrect = 0;
  
      // for each question
      myQuestions.forEach( (currentQuestion, questionNumber) => {
  
        // find selected answer
        let answerContainer = answerContainers[questionNumber];
        let selector = `input[name=question${questionNumber}]:checked`;
        let userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
        // if answer is correct
        if(userAnswer === currentQuestion.correctAnswer){
          // add to the number of correct answers
          numCorrect++;
  
          // color the correct answers
          answerContainers[questionNumber].style.color = 'green';
        }
        // if answer is wrong or null
        else{
          // color the incorrect answers
          answerContainers[questionNumber].style.color = 'red';
        }
      });
  
      // show number of correct answers out of total
      resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }
  
    function showSlide(n) {
      slides[currentSlide].classList.remove('active-slide');
      slides[n].classList.add('active-slide');
      currentSlide = n;
      if(currentSlide === 0){
        previousButton.style.display = 'none';
      }
      else{
        previousButton.style.display = 'inline-block';
      }
      if(currentSlide === slides.length-1){
        nextButton.style.display = 'none';
        submitButton.style.display = 'inline-block';
      }
      else{
        nextButton.style.display = 'inline-block';
        submitButton.style.display = 'none';
      }
    }
  
    function showNextQ() {
      showSlide(currentSlide + 1);
    }
  
    function showPreviousQ() {
      showSlide(currentSlide - 1);
    }
  

  
    // Kick things off
    loadQuiz();
  
    // Pagination
    let previousButton = document.getElementById("previous");
    let nextButton = document.getElementById("next");
    let slides = document.querySelectorAll(".slide");
    let currentSlide = 0;
  
    // Show the first slide
    showSlide(currentSlide);
  
    // add Event listeners
    submitButton.addEventListener('click', showResults);
    previousButton.addEventListener("click", showPreviousQ);
    nextButton.addEventListener("click", showNextQ);

  