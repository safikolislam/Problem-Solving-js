

 //  Problem 1: Staircase

var staircase = function(n) {
  let result = "";
  const hash = "#";
  const space = " ";

  for (let i = 1; i <= n; i++) {
    const number = space.repeat(n - i);
    const output = hash.repeat(i);

    result += number + output;

    if (i < n) {
      result += "\n";
    }
  }

  return result;
};

 console.log(staircase(4));



 //  Problem 2: Grading Students

var gradingStudents = function(grades) {
  let result = [];

  for (let i = 0; i < grades.length; i++) {
    const grade = grades[i];
    const nextMultiple = Math.ceil(grade / 5) * 5;
    const difference = nextMultiple - grade;

    if (grade < 38) {
      result.push(grade);
    } else if (difference < 3) {
      result.push(nextMultiple);
    } else {
      result.push(grade);
    }
  }

  return result;
};

 console.log(gradingStudents([73, 67, 38, 33]));



  // Problem 3: Time Conversion

var timeConversion = function(s) {
  const hour = s.slice(0, 2);
  const minute = s.slice(3, 5);
  const second = s.slice(6, 8);
  const period = s.slice(-2);

  let convertedHour = Number(hour);

  if (period === "AM" && convertedHour === 12) {
    convertedHour = 0;
  } else if (period === "PM" && convertedHour !== 12) {
    convertedHour += 12;
  }

  return `${String(convertedHour).padStart(2, "0")}:${minute}:${second}`;
};

 console.log(timeConversion("07:05:45PM"));


 //  Problem 4: String Repeat

var repeatStr = function(n, s) {
  let result = "";

  for (let i = 0; i < n; i++) {
    result += s;
  }

  return result;
};

 console.log(repeatStr(3, "ha"));



  // Problem 5: Reversed Strings

var solution = function(str) {
  return str.split("").reverse().join("");
};

 console.log(solution("world"));



 //  Problem 6: Sum of Positive

var positiveSum = function(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum += arr[i];
    }
  }

  return sum;
};

 console.log(positiveSum([1, -4, 7, 12]));



 //  Problem 7: Grasshopper — Summation

var summation = function(num) {
  let sum = 0;

  for (let i = 1; i <= num; i++) {
    sum += i;
  }

  return sum;
};

 console.log(summation(5));



 //  Problem 8: Convert a Boolean to a String

var booleanToString = function(b) {
  return String(b);
};

 console.log(booleanToString(true));
 console.log(booleanToString(false));



//Problem 9: Fizz Buzz

var fizzBuzz = function (n) {
  const result = [];
  for (let i = 1; i <= n; i++){
    if (i % 3 === 0 && i % 5 === 0) {
      result.push ("FizzBuzz")
    }
    else if (i % 3 === 0) {
      result.push("Fizz")
    }
    else if (i % 5 === 0) {
      result.push("Buzz")
    }
    else {
      result.push(String(i))
    }
  }
  return result;
}
 console.log(fizzBuzz(15));






//Problem 10 : Running Sum of 1D Array

var runningSum = function (nums) {
  const result = [];
  let sum = 0;
  for (let i = 0; i < nums.length; i++){
     sum = sum + nums[i]
    result.push(sum)
  }
  return result;
}

 console.log(runningSum([1, 2, 3, 4]));





//Problem 11 : Richest Customer Wealth

var maximumWealth = function (accounts) {
  let maxWealth = 0;

  for (let i = 0; i < accounts.length; i++) {
    let sum = 0;

    for (let j = 0; j < accounts[i].length; j++) {
      sum = sum + accounts[i][j];
    }

    if (sum > maxWealth) {
      maxWealth = sum;
    }
  }

  return maxWealth;
};

 console.log(maximumWealth([[5, 3, 2], [5, 3, 3]]));



//Problem 12 : Remove Duplicates from Sorted Array

var removeDuplicates = function(nums) {
  let k = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[k - 1]) {
      nums[k] = nums[i];
      k++;
    }
  }

  return k;
};

 console.log(removeDuplicates([2,2,2,2,2,3,3,3,5,6]))



//Problem 13: Contains Duplicate

var containsDuplicate = function (nums) {
  let dupblicateNumber = [];

  for (let i = 0; i < nums.length; i++) {
    if (dupblicateNumber.includes(nums[i])) {
      return true;
    }

    dupblicateNumber.push(nums[i]);
  }

  return false;
};


 console.log(containsDuplicate([1, 2, 3, 4])); 




//Problem 14: Move Zeroes


var moveZeroes = function(nums) {
  let i = 0;

  for (let num of nums) {
    if (num !== 0) {
      nums[i] = num;
      i++;
    }
  }

  while (i < nums.length) {
    nums[i] = 0;
    i++;
  }
};



let nums = [0, 1, 0, 3, 12];
 moveZeroes(nums)

 console.log(nums);




//Problem 15 : Merge Sorted Array


var merge = function(nums1, m, nums2, n) {
  nums1.length = m;

  for (let num of nums2) {
    nums1.push(num);
  }

  nums1.sort((a, b) => a - b);
};

let nums1 = [1, 2, 3, 0, 0, 0];
let nums2 = [2, 5, 6];

merge(nums1, 3, nums2, 3);

console.log(nums1);



//Problem 16:3Sum

var threeSum = function(nums) {
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {

        if (nums[i] + nums[j] + nums[k] === 0) {
          let triplet = [nums[i], nums[j], nums[k]];

          triplet.sort((a, b) => a - b);

          let exists = result.some(item =>
            item[0] === triplet[0] &&
            item[1] === triplet[1] &&
            item[2] === triplet[2]
          );

          if (!exists) {
            result.push(triplet);
          }
        }
      }
    }
  }

  return result;
};

 console.log(threeSum([-1, 0, 1, 2, -1, -4]));



//Problem: 17  Plus One


var plusOne = function(digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i]++;
      return digits;
    }

    digits[i] = 0;
  }

  digits.unshift(1);
  return digits;
};

console.log(plusOne([1, 2, 9]));
console.log(plusOne([4, 3, 2, 1]));
console.log(plusOne([9, 9, 9]));



//Problem : 18


var reverseString = function(s) {
  let left = 0;
  let right = s.length - 1;


  while (left < right) {
    let temp = s[left];
    s[left] = s[right];
    s[right] = temp;

  
    left++;
    right--;
  }
};


let s1 = ["h", "e", "l", "l", "o"];
reverseString(s1);
console.log(s1);


let s2 = ["H", "a", "n", "n", "a", "h"];
reverseString(s2);
console.log(s2); 



//Problem : 19


var lengthOfLastWord = function(s) {
 
  s = s.trim();


  let words = s.split(" ");


  let lastWord = words[words.length - 1];

 
  return lastWord.length;
};


console.log(lengthOfLastWord("Hello World"));
console.log(lengthOfLastWord("   fly me   to   the moon  ")); // 4
console.log(lengthOfLastWord("luffy is still joyboy")); // 6


//Problem: 20

var longestCommonPrefix = function(strs) {

  if (strs.length === 0) {
    return "";
  }


  let prefix = strs[0];


  for (let i = 1; i < strs.length; i++) {

  
    while (strs[i].indexOf(prefix) !== 0) {
   
      prefix = prefix.slice(0, -1);

      
      if (prefix === "") {
        return "";
      }
    }
  }


  return prefix;
};


 console.log(longestCommonPrefix(["flower", "flow", "flight"]));

 console.log(longestCommonPrefix(["dog", "racecar", "car"]));



 console.log(longestCommonPrefix([
   "interspecies",
   "interstellar",
   "interstate"
 ]));

