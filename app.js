const correctAnswers = ['B', 'A', 'B', 'A']

const form = document.querySelector('.quiz-form')

form.addEventListener('submit', event => {
    event.preventDefault()
    const userAnswers = []
    let score = 0

    const checkCorrectAnswers = (value,index) =>{
        if(value === correctAnswers[index]){
            score += 25
        }
    }

    //Getting user answers
    for(let i=1; i<=4; i++){
        userAnswers.push(form['inputQuestion'+i].value)
    }

    userAnswers.forEach(checkCorrectAnswers)

    window.alert(`Sua pontuação é de ${score}`)
})