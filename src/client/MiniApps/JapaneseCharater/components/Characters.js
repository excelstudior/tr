const Characters = function () {
    this.characters=[{vowel:'a',consonant:'h',hinagara:'は',katakana:'ハ'},
    {vowel:'i',consonant:'h',hinagara:'ひ',katakana:'ヒ'},
    {vowel:'u',consonant:'h',hinagara:'ふ',katakana:'フ'},
    {vowel:'e',consonant:'h',hinagara:'へ',katakana:'ヘ'},
    {vowel:'o',consonant:'h',hinagara:'ほ',katakana:'ホ'},
    {vowel:'a',consonant:'a',hinagara:'あ',katakana:'ア'},
    {vowel:'i',consonant:'a',hinagara:'い',katakana:'イ'},
    {vowel:'u',consonant:'a',hinagara:'う',katakana:'ウ'},
    {vowel:'e',consonant:'a',hinagara:'え',katakana:'エ'},
    {vowel:'o',consonant:'a',hinagara:'お',katakana:'オ'},
    {vowel:'a',consonant:'k',hinagara:'か',katakana:'カ'},
    {vowel:'i',consonant:'k',hinagara:'き',katakana:'キ'},
    {vowel:'u',consonant:'k',hinagara:'く',katakana:'ク'},
    {vowel:'e',consonant:'k',hinagara:'け',katakana:'ケ'},
    {vowel:'o',consonant:'k',hinagara:'こ',katakana:'コ'},
    {vowel:'a',consonant:'s',hinagara:'さ',katakana:'サ'},
    {vowel:'i',consonant:'s',hinagara:'し',katakana:'シ'},
    {vowel:'u',consonant:'s',hinagara:'す',katakana:'ス'},
    {vowel:'e',consonant:'s',hinagara:'せ',katakana:'セ'},
    {vowel:'o',consonant:'s',hinagara:'そ',katakana:'ソ'},
    {vowel:'a',consonant:'t',hinagara:'た',katakana:'タ'},
    {vowel:'i',consonant:'t',hinagara:'ち',katakana:'チ'},
    {vowel:'u',consonant:'t',hinagara:'つ',katakana:'ツ'},
    {vowel:'e',consonant:'t',hinagara:'て',katakana:'テ'},
    {vowel:'o',consonant:'t',hinagara:'と',katakana:'ト'},
    {vowel:'a',consonant:'n',hinagara:'な',katakana:'ナ'},
    {vowel:'i',consonant:'n',hinagara:'に',katakana:'ニ'},
    {vowel:'u',consonant:'n',hinagara:'ぬ',katakana:'ヌ'},
    {vowel:'e',consonant:'n',hinagara:'ね',katakana:'ネ'},
    {vowel:'o',consonant:'n',hinagara:'の',katakana:'ノ'},
    {vowel:'a',consonant:'m',hinagara:'ま',katakana:'マ'},
    {vowel:'i',consonant:'m',hinagara:'み',katakana:'ミ'},
    {vowel:'u',consonant:'m',hinagara:'む',katakana:'ム'},
    {vowel:'e',consonant:'m',hinagara:'め',katakana:'メ'},
    {vowel:'o',consonant:'m',hinagara:'も',katakana:'モ'},
    {vowel:'a',consonant:'y',hinagara:'や',katakana:'ヤ'},
    {vowel:'i',consonant:'y',hinagara:'い',katakana:'イ'},
    {vowel:'u',consonant:'y',hinagara:'ゆ',katakana:'ユ'},
    {vowel:'e',consonant:'y',hinagara:'え',katakana:'エ'},
    {vowel:'o',consonant:'y',hinagara:'よ',katakana:'ヨ'},
    {vowel:'a',consonant:'r',hinagara:'ら',katakana:'ラ'},
    {vowel:'i',consonant:'r',hinagara:'り',katakana:'リ'},
    {vowel:'u',consonant:'r',hinagara:'る',katakana:'ル'},
    {vowel:'e',consonant:'r',hinagara:'れ',katakana:'レ'},
    {vowel:'o',consonant:'r',hinagara:'ろ',katakana:'ロ'},
    {vowel:'a',consonant:'w',hinagara:'わ',katakana:'ワ'},
    {vowel:'i',consonant:'w',hinagara:'い',katakana:'イ'},
    {vowel:'u',consonant:'w',hinagara:'う',katakana:'ウ'},
    {vowel:'e',consonant:'w',hinagara:'え',katakana:'エ'},
    {vowel:'o',consonant:'w',hinagara:'を',katakana:'ヲ'},
    ],
    this.groupedCharacters={},
    this.mappedArray=[]
}
// group an array by one of its property
Characters.prototype.groupBy = function (property) {
    
    this.groupedCharacters=this.characters.reduce(function(acc,currentObj){
        //generate a random boolean value to define if a character should be shown or not
        let shown=Math.random()>0.5
        currentObj.shown=shown;
        currentObj.answer=!shown;
        currentObj.userInput='';
        let key=currentObj[property];
        if (!acc[key]){
            acc[key]=[];
        }
        acc[key].push(currentObj);
        console.log(currentObj)
        return acc
    },{})
    return this;
}

Characters.prototype.mapGrouppedObjToArray = function () {
    let usedNumbers=[];
    
    Object.keys(this.groupedCharacters).map((el)=>{
        
        let randomOrder=Math.floor(Math.random()*9)
        while (usedNumbers.indexOf(randomOrder)>-1){
            randomOrder=Math.floor(Math.random()*10)
        }
        usedNumbers.push(randomOrder)
        let element={}
        let elementValue={}
        elementValue[el]=this.groupedCharacters[el]
        element[randomOrder]=elementValue
        this.mappedArray.push(element)
      
    })
    return this
}

Characters.prototype.createLinesToDisplay = function () { 
    let sortedArr=this.mappedArray.sort((eleA,eleB)=>{
        let keyA=Object.keys(eleA)[0]
        let keyB=Object.keys(eleB)[0]
        return keyA-keyB
    })
 
    let charArr=sortedArr.map((el)=>{
         let key=el[Object.keys(el)[0]];
         console.log(key)
         return key
    })
    this.groupedCharacters={};
    this.mappedArray=[];
    return charArr
}

module.exports.Characters = Characters;

