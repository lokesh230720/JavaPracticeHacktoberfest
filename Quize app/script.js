const questions = [
    {
        'que':'which of the following language is used in reactjs ?',
        'a':'javascript',
        'b': 'php',
        'c': 'python',
        'd': 'cpp',
        'correct':'a'
    },
    { 'que':'Which of the following is a JavaScript framework?', 
        'a':'Django', 
        'b':'Laravel', 
        'c':'Angular',
        'd':'Ruby on Rails', 
        'correct':'c' 
    },
    { 'que':'Which of the following is a key feature of ReactJS?', 
        'a':'Virtual DOM', 
        'b':'Backend development', 
        'c':'Database management', 
        'd':'Styling', 
        'correct':'a' 
    }
        
]
let total = questions.length;
let right = 0,wrong = 0;

const quebox = document.getElementById('quebox')
const optionsinp = document.querySelectorAll('.option')
let index =0 ;
const loadquestions = ()=>{
    if(index === total)
        end();
    else
            reset();
    const data = questions[index];
    quebox.innerHTML = data.que;
    optionsinp[0].nextElementSibling.innerHTML = data.a;
    optionsinp[1].nextElementSibling.innerHTML = data.b;
    optionsinp[2].nextElementSibling.innerHTML = data.c;
    optionsinp[3].nextElementSibling.innerHTML = data.d;
    // console.log(data);
    
}

const sumitbtn = ()=>{
    const data = questions[index];
    const ans = getanswer();
    if(ans === data.correct)
    {
        right++;
    }
    else{
        wrong++;
    }
    index++;
    loadquestions();
}
const getanswer=()=>{  //callback for the submitbutton function
    let ans;
    optionsinp.forEach(  
        (input)=>{
            if (input.checked) {
                ans = input.value;
                
            }
        }
    )
    return ans

}
const reset=()=>{
    optionsinp.forEach(
        (input)=>{
            input.checked=false;
        }
    )
}
const end = ()=>{
    document.getElementById('box').innerHTML =`
    <h1>Thankyou For participation</h1>
    <h2>Score</h2>
    <h3> Right Questions: ${right}</h3>
    <h3> Wrong Questions: ${wrong}</h3>
    `

}
loadquestions()