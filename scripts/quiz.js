import {quiz} from '../data/quiz-info.js'

let html = '';
let cislo = 0;
quiz.forEach((question) =>{
    cislo++;

    html+=`<h4 class="mb-5 mt-5 p-4 text-center text-white">${question.question}</h4>
        <div class="options-row mb-4 border-bottom border-1 border-white">
            <div class="form-check">
                <input class="form-check-input border border-white border-2" required type="radio" name="quizQuestion-${cislo}" id="option1" value="${question.options[0]}" />
                <label class="form-check-label text-white" for="option1">${question.options[0]}</label>
            </div>
            <div class="form-check">
                <input class="form-check-input border border-white border-2" type="radio" name="quizQuestion-${cislo}" id="option2" value="${question.options[1]}" />
                <label class="form-check-label text-white" for="option2">${question.options[1]}</label>
            </div>
            <div class="form-check">
                <input class="form-check-input border border-white border-2" type="radio" name="quizQuestion-${cislo}" id="option3" value="${question.options[1]}" />
                <label class="form-check-label text-white" for="option3">${question.options[2]}</label>
            </div>
            <div class="form-check">
                <input class="form-check-input border border-white border-2" type="radio" name="quizQuestion-${cislo}" id="option4" value="${question.options[1]}" />
                <label class="form-check-label text-white" for="option4">${question.options[3]}</label>
            </div>
        </div>`


})

html+='<button type="submit" class="btn btn-primary tlacidlo">Odeslat odpověď</button>';

document.querySelector('form').innerHTML = html;