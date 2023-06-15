let input = document.getElementById('string');
let inputValue = input.Value;
let result = document.getElementById('result');
let submitBtn = document.getElementById('submit');


function getCount (str) {
    let count = 0;
    const vowels = ['a','e','i','o','u'];
    for(let char of str){
        if(vowels.includes(char)){
            count++;
        }
    }
    result.innerHTML = count;
}
submitBtn.addEventListener('click',getCount(inputValue));