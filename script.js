const countBtn = document.getElementById('countBtn') //bouton
countBtn.addEventListener('click', onCountBtnClick) 

/* Compte le nombre de consonnes et de voyelles
*  dans le paramètre string de type String
*/
function letterCounter(string) {
        const vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
        let vowelCount = 0,
            consonantCount = 0;
        //fait un tableau avec uniquement les lettres en minuscule pour comparer avec vowels
        let letters = string.toLowerCase().split('').filter(letter => !(letter.toLowerCase() === letter.toUpperCase()));
        letters.forEach(letter => {
            vowels.includes(letter)? vowelCount++ : consonantCount++;
        })
        return consonantCount + " " + vowelCount;
}

/* Affiche le nombre de consonnes et de voyelles
*  dans un span
*/
function showText(textContent) {
    let letterCount = letterCounter(textContent).split(' ');
    let consonantCount = letterCount[0];
    let vowelCount = letterCount[1];
    let divElement = document.getElementById('countedText')
    let spanText = document.querySelector('span')
    if(spanText) 
        spanText.remove() 
    let textLabel = document.createElement('span')
    textLabel.textContent = `There are ${consonantCount} consonant${consonantCount > 1 ? 's' : ''}
                             and ${vowelCount} vowel${vowelCount > 1 ? 's' : ''} in the string : ${textContent}`
    divElement.appendChild(textLabel)
}
    
/* Fonction executée lors du clique
*  appelle showText() en lui envoyant
*  comme argument les nombres de consonnes
*  et de voyelles calculés par letterCounter()
*/
function onCountBtnClick() {
    let textValue = document.getElementById('textContent').value;
    if(textValue.length > 0)
        showText(textValue)
}