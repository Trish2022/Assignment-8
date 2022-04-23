// // STEP 1. Create a string array that contains your five favorite movies. Then, use the console to display the second movie in your array.
// let movies = ['Dune', 'Parasite', 'Vertigo', 'Citizen Kane', 'Raiders of the Lost Ark'];
// console.log(movies[1]);

// // STEP 2. Declare an array called movies using the function constructor method. Add the length of 5 into the constructor. Then, assign one of your favorite movies to each index in the array until you have 5 total movies in your array. Then, use the console to display the first movie in your array.

// let movies = [0];
// movies[5] = 'Dune', 'Parasite', 'Vertigo', 'Citizen Kane', 'Raiders of the Lost Ark';
// console.log(movies);

// // STEP 3.	Copy your code from step 2. Add a new movie into the 3rd position within your array. Then, use the console to display the length of the array. You should now have 6 total movies stored in the array.

// let movies = ['Dune', 'Parasite', 'Vertigo', 'Citizen Kane', 'Raiders of the Lost Ark'];

// movies[2] = 'Inside';
// console.log(movies);

// STEP 4.	Declare an array called movies using literal notation. Then, assign one of your favorite movies to each index in the array until you have 5 total movies in your array. Now, use the delete operator to remove the first movie in the array. Use the console to display the contents of the array.

// 5. Declare an array called movies using literal notation. Then, assign one of your favorite movies to each index in the array until you have 7 total movies in your array. Now, use a for/in loop to iterate through the array and display each movie within the console window. 

// let movies = [];
// movies[0] = 'Dune';
// movies[1] = 'Wizard of Oz';
// movies[2] = 'Parasite';
// movies[3] = 'Citizen Kane';
// movies[4] = 'Vertigo';
// movies[5] = 'Spirited Away';
// movies[6] = 'Raiders of the Lost Ark';
// // console.log(movies);
// for (let i = 0; i < movies.length; i++) {
//     console.log(movies[i])
// }

// STEP 6.	Copy the code from step 5. Now, use a for/of loop to iterate through the array and display each movie within the console window.

// Array.prototype.movies = () => {};

// let movies = ['Dune', 'Wizard of Oz', 'Parasite', 'Vertigo', 'Spiritied Away','Citizen Kane', 'Raiders of the Lost Ark'];
// for (let i of movies) {
// 	console.log(i);				
// }

// STEP 7.	Copy the code from step 5. Using the for/of loop to iterate through the array, display each movie within the console window in a sorted view.
// Array.prototype.movies = () => {};

// let movies = ['Dune', 'Wizard of Oz', 'Parasite', 'Vertigo', 'Spiritied Away','Citizen Kane', 'Raiders of the Lost Ark'];
// for (let i of movies) {
// 	console.log(i);				
// }

// 8.	Copy the code from step 5. Under the existing array, create a new array called leastFavMovies. Populate the array with the 3 movies that you regret watching. Display both arrays within the console window so that it’s formatted to look like this (note the spacing, you must include that too):
// console.log(`Movies I like:\n`)
// console.log(``)
// let movies = ['Dune', 'Wizard of Oz', 'Parasite', 'Vertigo', 'Spiritied Away'];
// for (let element of movies) {
//     console.log(`${element}\n`)
// }
// console.log(``)
// console.log('Movies I regret watching:\n')
// console.log(``)
// let movie = ['Teen Wolf', 'Jack and Jill', 'Ishtar'];
// for (let element of movie) {
//     console.log(`${element}\n`)
// }
// Movies I like:

// Movie 1
// Movie 2
// Movie 3
// …

// Movies I regret watching:

// Movie 1
// Movie 2
// Movie 3
// …

// 9.	Copy the code from step 8. Now, use the concat() method to merge the two arrays together into a single array called movies. Use the console window to display the list in reverse sorted order.


// const array1 = ['Dune', 'Wizard of Oz', 'Parasite', 'Vertigo', 'Spirited Away'];
// const array2 = ['Teen Wolf', 'Jack and Jill', 'Ishtar'];
// const array3 = array1.concat(array2);

// const sorted = array3.sort();
// // console.log('sorted:', sorted);

// const reversed = array3.reverse();
// console.log('reversed:', sorted);


// Testing out purposed only just for reference here
// // Function to reverse string
// function ReverseString(str) {
//     return str.split('').reverse().join('')
//  }
   
//  // Function call 
//  console.log(ReverseString("skeeG rof skeeG"))



// STEP 10.	Copy the code from step 9. Use an array function to return just the last item in the array and display it within the console window.
// const array1 = ['Dune', 'Wizard of Oz', 'Parasite', 'Vertigo', 'Spirited Away'];
// const array2 = ['Teen Wolf', 'Jack and Jill', 'Ishtar'];
// const array3 = array1.concat(array2);

// const sorted = array3.sort();
// // console.log('sorted:', sorted);

// const reversed = array3.reverse();
// console.log('Sorted and reversed:', sorted);



// STEP 11.	Copy the code from step 10. Remove the previous method and this time use a method to return just the first item in the array and display it within the console window.
// const array1 = ['Dune', 'Wizard of Oz', 'Parasite', 'Vertigo', 'Spirited Away'];
// const array2 = ['Teen Wolf', 'Jack and Jill', 'Ishtar'];
// const array3 = array1.concat(array2);

// const firstMovie = array3.shift();
// console.log(firstMovie);

// STEP 12.Using the splice() function, remove a section of movies that you don’t like and replace them with movies that you do like.  

// let movies = ['Dune', 'Wizard of Oz', 'Parasite', 'Vertigo', 'Spirited Away', 'Teen Wolf', 'Jack and Jill', 'Ishtar'];
// movies.splice(5, 3, 'City of God', '8 1/2', 'Mullholland Drive');
// console.log(movies);

// STEP 13.	Create a multi-dimensional array that contains your 5 favorite movies and their ranking from 1-5. The array should look something like this: 

// let movies = [["Dune", 1], ["Spirited Away", 2], ["Parasite", 3], ["Save Yourself", 4], ["Inside", 5]];
// // Now, loop through the array and filter out and display only the movie names. You must use the filter() method and you’ll need to filter out the names by their primitive data type.
// movies.forEach((item) => {
//     console.log(`${item[0]} ${item[1]}`);
// });

// STEP 14.	Create a string array called employees using literal notation and populate the array with several employee names. 
// Then, create an anonymous function called showEmployee. The function should accept a parameter. 
// Call this function, passing in the employees array into the function as a parameter. Make sure to display the result in the console window. 
// Within the function, loop through the passed in array and display the result so that it looks exactly like this in the console window:

// Employees: 

// ZAK 
// JESSICA 
// MARK 
// FRED 
// SALLY

// NOTE STILL WORKING ON THIS ONE

// let employees = ['Zak', 'Jessica', 'Mark', 'Fred', 'Sally'];


// STEP 15.	Write a JavaScript function to filter false, null, 0 and blank values from an array.
// Test Data: console.log(filterValues([58, '', 'abcd', true, null, false, 0]));
// Expected Result: [58, "abcd", true]

// function filter_array_values(arr) {
//     arr = arr.filter(isEligible);
//     return arr;
//   }
  
//   function isEligible(value) {
//     if(value !== false || value !== null || value !== 0 || value !== "") {
//       return value;
//     }
//   }
//   console.log(filter_array_values([58, '', 'abcd', true, null, false, 0]));


// STEP 16.	Write a JavaScript function to get a random item from an array. So if I create a numeric array with 10 numbers and then pass that array into my function, the function should randomly return one of those numbers.
// program to get a random item from an array

// function getRandomItem(arr) {

//     // get random index value
//     const randomIndex = Math.floor(Math.random() * arr.length);
//     // get random item
//     const item = arr[randomIndex];
//     return item;
// }
// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const result = getRandomItem(array);
// console.log(result);

// STEP 17.	Write a JavaScript function to get the largest number from a numeric array.
// let arr = [4, 21, 67, 137, 825, 0, 190];

// let largestNum = arr.reduce(function (accumulatedValue, currentValue) {
//   return Math.max(accumulatedValue, currentValue);
// });
// console.log(`The largest number: ${largestNum}`);
