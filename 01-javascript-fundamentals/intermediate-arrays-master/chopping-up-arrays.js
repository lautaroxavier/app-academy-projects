// remove from array

function removeFromArray(location, arr) {
  if (location === "FRONT") {
    arr.shift();
  } else if (location === "BACK") {
    arr.pop();
  } else {
    console.log("ERROR");
  }
}

testArray = [0, 1, 2, 3, 4];

removeFromArray("FRONT", testArray);
console.log(testArray); // [1,2,3,4]

removeFromArray("BACK", testArray);
console.log(testArray); // [1,2,3]

removeFromArray("MIDDLE", 4, testArray); // "ERROR"
console.log(testArray); // [1,2,3]

// popper

const popper = function (array, num) {
  let result = [];
  for (let i = num; i > 0; i--) {
    let elem = array.pop();
    result.push(elem);
  }
  return result;
};

let arr1 = ["a", "b", "c", "d", "e"];
console.log(popper(arr1, 2)); // [ 'e', 'd' ]
console.log(arr1); // [ 'a', 'b', 'c' ]

let arr2 = ["kale", "spinach", "collard greens", "cabbage"];
console.log(popper(arr2, 1)); // [ 'cabbage' ]
console.log(arr2); // [ 'kale', 'spinach', 'collard greens' ]

// ROTATE RIGHT

let rotateRight = function (array, num) {
  let result = [];
  num = num % array.length;
  num = array.length - num;
  result = result.concat(array.slice(num), array.slice(0, num));
  return result;
};

let rotateRight2 = function (array, num) {
  let copy = array.slice();

  for (let i = 0; i < num; i++) {
    let el = copy.pop();
    copy.unshift(el);
  }

  return copy;
};

let arr = ["a", "b", "c", "d", "e"];
console.log(rotateRight(arr, 2)); // [ 'd', 'e', 'a', 'b', 'c' ]
console.log(arr); // [ 'a', 'b', 'c', 'd', 'e' ]

let animals = ["wombat", "koala", "opossum", "kangaroo"];
console.log(rotateRight(animals, 3)); // [ 'koala', 'opossum', 'kangaroo', 'wombat' ]
console.log(animals); // [ 'wombat', 'koala', 'opossum', 'kangaroo' ]

// ROTATE

let rotate = function (array, num) {
  if (num >= 0) {
    for (let i = 0; i < num; i++) {
      let elem = array.pop();
      array.unshift(elem);
    }
  } else {
    for (let i = num; i < 0; i++) {
      let elem = array.shift();
      array.push(elem);
    }
  }
};

let arr3 = ["a", "b", "c", "d", "e"];
rotate(arr3, 2);
console.log(arr3); // [ 'd', 'e', 'a', 'b', 'c' ]

let animals2 = ["wombat", "koala", "opossum", "kangaroo"];
rotate(animals2, -1);
console.log(animals2); // [ 'koala', 'opossum', 'kangaroo', 'wombat'

// INITIALS

function initials(name) {
  let result = "";
  let names = name.split(" ");
  for (let i = 0; i < names.length; i++) {
    result += names[i][0];
  }
  return result.toUpperCase();
}

console.log(initials("anna paschall")); // 'AP'
console.log(initials("Mary La Grange")); // 'MLG'
console.log(initials("brian crawford scott")); // 'BCS'
console.log(initials("Benicio Monserrate Rafael del Toro Sánchez")); // 'BMRDTS'

// LONGEST WORD

function longestWord(sentence) {
  let words = sentence.split(" ");
  let longest_word = "";
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    if (word.length > longest_word.length) {
      longest_word = word;
    }
  }
  return longest_word;
}

console.log(longestWord("where did everyone go")); // 'everyone'
console.log(longestWord("prefer simplicity over complexity")); // 'simplicity'
console.log(longestWord("")); // ''

// SHORTEST WORD

function shortestWord(sentence) {
  let shortest_word = "";
  let words = sentence.split(" ");
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    if (word.length <= shortest_word.length || shortest_word === "") {
      shortest_word = word;
    }
  }
  return shortest_word;
}

console.log(shortestWord("what a wonderful life")); // 'a'
console.log(shortestWord("the quick brown fox jumps")); // 'fox'
console.log(shortestWord("do what you enjoy")); // 'do'

// REVERSE SENTENCE

function reverseSentence(sentence) {
  let words = sentence.split(" ");
  for (let i = 0; i < words.length / 2; i++) {
    word = words[i];
    words[i] = words[words.length - 1 - i];
    words[words.length - 1 - i] = word;
  }
  return words.join(" ");
}

console.log(reverseSentence("I am pretty hungry")); // 'hungry pretty am I'
console.log(reverseSentence("follow the yellow brick road")); // 'road brick yellow the follow'

// CONTAINS WORD

function containsWord(sentence, targetWord) {
  let words = sentence.toLowerCase().split(" ");
  let result = false;
  for (let i = 0; i < words.length; i++) {
    if (words[i] === targetWord) {
      result = true;
    }
  }
  return result;
}

console.log(containsWord("sounds like a plan", "like")); // true
console.log(containsWord("They are great", "they")); // true
console.log(containsWord("caterpillars are great animals", "cat")); // false
console.log(containsWord("Cast the net", "internet")); // false

// REMOVE VOWELS

function removeVowels(word) {
  let vowels = ["a", "e", "i", "o", "u"];
  let result = "";
  for (let i = 0; i < word.length; i++) {
    if (!vowels.includes(word[i].toLowerCase())) {
      result += word[i];
    }
  }
  return result;
}

function abbreviateWords(sentence) {
  let words = sentence.split(" ");
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > 4) {
      words.splice(i, 1, removeVowels(words[i]));
    }
  }
  return words.join(" ");
}

console.log(abbreviateWords("what a wonderful place to live")); // what a wndrfl plc to live
console.log(abbreviateWords("she sends an excellent message ")); // she snds an xcllnt mssg

// SNAKE TO CAMEL

function snakeToCamel(string) {
  let words = string.toLowerCase().split("_");
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
  }
  return words.join("");
}

console.log(snakeToCamel("snakes_go_hiss")); // 'SnakesGoHiss'
console.log(snakeToCamel("say_hello_world")); // 'SayHelloWorld'
console.log(snakeToCamel("app_academy_is_cool")); // 'AppAcademyIsCool'
console.log(snakeToCamel("APp_ACADEMY_iS_cOol")); // 'AppAcademyIsCool'

// HIPSTERFY

function hipsterfy(sentence) {
  let words = sentence.split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = removeLastVowel(words[i]);
  }
  return words.join(" ");
}

function removeLastVowel(word) {
  let vowels = ["a", "e", "i", "o", "u"];
  let result = "";
  for (let i = word.length - 1; i >= 0; i--) {
    if (vowels.includes(word[i])) {
      result = word.slice(0, i) + word.slice(i + 1);
      return result;
    }
  }
}

console.log(removeLastVowel("are"));

console.log(hipsterfy("When should everyone wake up?")); // 'Whn shold everyon wak p?'
console.log(hipsterfy("get ready for our bootcamp")); // 'gt redy fr or bootcmp'
console.log(hipsterfy("panthers are great animals")); // 'panthrs ar gret animls'

// REPEATING TRANSLATE

// Write a function `repeatingTranslate` that accepts a sentence as an argument.
// The function should translate the sentence according to the following rules:
//
// - words that are shorter than 3 characters are unchanged
// - words that are 3 characters or longer are translated according to the
//   following rules:
//   - if the word ends with a vowel, simply repeat the word twice (example:
//     'like'->'likelike')
//   - if the word ends with a non-vowel, repeat all letters that come after the
//     word's last vowel, including the last vowel itself (example:
//     'trash'->'trashash')
//
// Note that if words are capitalized in the original sentence, they should remain
// capitalized in the translated sentence. Vowels are the letters a, e, i, o, u.
//
// Can you reduce the problem into helper functions?

// Your code here
function repeatingTranslate(sentence) {
  words = sentence.split(" ");
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    if (word.length > 2) {
      word = translate(word);
      words[i] = word;
    }
  }
  return words.join(" ");
}

function translate(word) {
  let vowels = "aeiou";
  if (vowels.includes(word[word.length - 1])) {
    return word + word;
  }
  for (let i = word.length - 1; i >= 0; i--) {
    if (vowels.includes(word[i])) {
      return word + word.slice(i);
    }
  }
}

console.log(repeatingTranslate("we like to go running fast")); // "we likelike to go runninging fastast"
console.log(repeatingTranslate("he cannot find the trash")); // "he cannotot findind thethe trashash"
console.log(repeatingTranslate("pasta is my favorite dish")); // "pastapasta is my favoritefavorite dishish"
console.log(repeatingTranslate("her family flew to France")); // "herer familyily flewew to FranceFrance"

// CONSONANT CANCEL

function consonantCancel(sentence) {
  let words = sentence.split(" ");
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    words[i] = consonantCancelWord(word);
  }
  return words.join(" ");
}

function consonantCancelWord(word) {
  let vowels = "aeiou";
  for (let i = 0; i < word.length; i++) {
    if (vowels.includes(word[i])) {
      return word.slice(i);
    }
  }
}

console.log(consonantCancel("down the rabbit hole")); // "own e abbit ole"
console.log(consonantCancel("writing code is challenging")); // "iting ode is allenging"

// SAME CHAR COLLAPSE

function sameCharCollapse(str) {
  let prev_str = str;
  str = collapse(str);
  while (prev_str.length > str.length) {
    prev_str = str;
    str = collapse(str);
  }
  return str;
}

function collapse(str) {
  let str_array = str.split("");
  for (let i = 0; i < str.length - 1; i++) {
    if (str_array[i] === str_array[i + 1]) {
      str_array.splice(i, 2);
      return str_array.join("");
    }
  }
  return str;
}

function sameCharCollapse2(str) {
  let reducible = true;

  while (reducible) {
    let chars = str.split("");
    reducible = false;

    for (let i = 0; i < chars.length - 1; i++) {
      if (chars[i] == chars[i + 1]) {
        chars[i] = "";
        chars[i + 1] = "";
        reducible = true;
      }
    }
    str = chars.join("");
  }
  return str;
}

console.log(sameCharCollapse("zzzxaaxy")); // "zy"
// because zzzxaaxy -> zxaaxy -> zxxy -> zy
console.log(sameCharCollapse("uqrssrqvtt")); // "uv"
// because uqrssrqvtt -> uqrrqvtt -> uqqvtt -> uvtt -> uv
