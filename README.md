# Quiz app
### Quiz app using React and typescript
#### Docs
small quiz app using react and typescript.
iam fetched data from API (Trivia), data returned from request contains:
   1. category
   2. correct_answer
   3. difficulty
   4. incorrect_answer
   5. question
   6. type
   
iam created types to all these properties, and added to it new property called (answers) and this is array of string that contains all answers [correct_answer and incorrect_answer],after that in folder units i'm created function that shuffle this array of answers. all these field stored in state , and loop through this state and create component that mean every question have this component structure, iam called it QuestionCart. we passed to QuestionCart components props to control handle logic.

iam said that iam created new property called answers that contins all answers, in QuestionCart we loop in these answers to show all answers to users.

the function that handle answers iam called checkAnswer and this is one of props passed to QuestionCart component, checkAnswer function create object for user answer that contains [question, answer, correct_answer, coorect(this is boolean value,  when you click on answer the function check that if it is true return true and if it is false return false)] by these values we control in style by userAnswer state, properies coorectAnswer and answer in userAnswer state handle the answer if is true or false.

in style iam used Styled Component library, to install it go to terminal (npm i styled-component)
