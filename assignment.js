// 1. Understanding merge sort
// Given the following list of numbers 21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40

// -------------------------
// First Call: 

// Array: 21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40
// left = 21, 1, 26, 45, 29, 28, 2, 9,
// right = 16, 49, 39, 27, 43, 34, 46, 40
// Returned Arrays: 
// Left: 1, 2, 9, 21, 26, 28, 29, 45
// Right: 16, 27, 34, 39, 40, 43, 46, 49
// While: 1, 2, 9, 16, 21, 26, 27, 28, 29, 34, 39, 40, 43, 45
// First For: 1, 2, 9, 16, 21, 26, 27, 28, 29, 34, 39, 40, 43, 45 (nothing happens)
// Second For: 1, 2, 9, 16, 21, 26, 27, 28, 29, 34, 39, 40, 43, 45, 46, 49
// Result: 1, 2, 9, 16, 21, 26, 27, 28, 29, 34, 39, 40, 43, 45, 46, 49

// -------------------------
// Second Calls: 

// Array: 21, 1, 26, 45, 29, 28, 2, 9,
// Left-Left = 21, 1, 26, 45
// Right-Left = 29, 28, 2, 9
// Returned Arrays: 
// Left: 1, 21, 26, 45
// Right: 2, 9, 28, 29
// While: 1, 2, 9, 21, 26, 28, 29
// First For: 1, 2, 9, 21, 26, 28, 29, 45
// Second For: 1, 2, 9, 21, 26, 28, 29, 45 (nothing happens)
// Result: 1, 2, 9, 21, 26, 28, 29, 45

// Array: 16, 49, 39, 27, 43, 34, 46, 40
// Left-Right = 16, 49, 39, 27
// Right-Right = 43, 34, 46, 40
// Returned Arrays: 
// Left: 16, 27, 39, 49
// Right: 34, 40, 43, 46
// While: 16, 27, 34, 39, 40, 43, 46
// First For: 16, 27, 34, 39, 40, 43, 46, 49 
// Second For: 16, 27, 34, 39, 40, 43, 46, 49 (nothing happens)
// Result: 16, 27, 34, 39, 40, 43, 46, 49

// -------------------------
// Third Calls: 

// Array: 21, 1, 26, 45
// Left(Left-Left) = 21, 1
// Right(Left-Left) = 26, 45
// Returned Arrays: 
// Left: 1, 21
// Right: 26, 45
// While: 1, 21
// First For: 1, 21 (nothing happens)
// Second For: 1, 21, 26, 45
// Result: 1, 21, 26, 45

// Array: 29, 28, 2, 9
// Left(Right-Left) = 29, 28
// Right(Right-Left) = 2, 9
// Returned Arrays: 
// Left: 28, 29
// Right: 2, 9
// While: 2, 9, 
// First For: 2, 9, 28, 29
// Second For:  2, 9, 28, 29 (nothing happens)
// Result: 2, 9, 28, 29

// Array: 16, 49, 39, 27
// Left(Left-Right) = 16, 49
// Right(Left-Right) = 39, 27
// Returned Arrays: 
// Left: 16, 49
// Right: 27, 39
// While: 16, 39, 27, 
// First For: 16, 39, 27, 49
// Second FOr:  16, 39, 27, 49 (nothing happens)
// Result: 16, 39, 27, 49

// Array: 43, 34, 46, 40
// Left(Right-Right) = 43, 34
// Right(Right-Right) = 46, 40
// Returned Arrays: 
// Left: 34, 43
// Right: 40, 46
// While: 34, 40, 43
// First For: 34, 40, 43 (nothing happens)
// Second FOr: 34, 40, 43, 46
// Result: 34, 40, 43, 46

// ---------------------------
// Fourth Calls: 

// Array: 21, 1
// Left(Left-Left-Left) = 21
// Right(Left-Left-Left) = 1
// While: 1
// First For: 1, 21 
// Second FOr: 1, 21 (nothing happens)
// Result: 1, 21

// Array: 26, 45
// Left(Right-Left-Left) = 26
// Right(Right-Left-Left) = 45
// While: 26
// First For: 26 (nothing happens)
// Second FOr: 26, 45
// Result: 26, 45 

// Array: 29, 28
// Left(Left-Right-Left) = 29
// Right(Left-Right-Left) = 28
// While: 28
// First For: 28, 29
// Second FOr: 28, 29 (nothing happens)
// Result: 28, 29 

// Array: 2, 9 
// Left(Right-Right-Left) = 2
// Right(Right-Right-Left) = 9
// While: 2
// First For: 9 (nothing happens)
// Second FOr: 2, 9 
// Result: 2, 9 

// Array: 16, 49
// Left(Left-Left-Right) = 16
// Right(Left-Left-Right) = 49
// While: 16
// First For: 16 (nothing happens)
// Second FOr: 16, 49 
// Result: 16, 49 

// Array: 39, 27
// Left(Right-Left-Right) = 39
// Right(Right-Left-Right) = 27
// While: 27
// First For: 27, 39
// Second FOr: 27, 39 (nothing happens)
// Result: 27, 39 

// Array: 43, 34
// Left(Left-Right-Right) = 43
// Right(Left-Right-Right) = 34
// While: 34
// First For: 34, 43
// Second FOr: 34, 43 (nothing happens)
// Result: 34, 43 

// Array: 46, 40
// Left(Right-Right-Right) = 46
// Right(Right-Right-Right) = 40
// While: 40
// First For: 40, 46
// Second FOr: 40, 46 (nothing happens)
// Result: 40, 46


// What is the resulting list that will be sorted after 3 recursive calls to mergesort?
// This is an odd question because you can't just stop at three recursive calls to mergesort. You must go down to the bottom where length = 1 to sort anything. See above under Third Calls. 

// What is the resulting list that will be sorted after 16 recursive calls to mergesort?
// How are we defining the recursive calls. Because this is a tree, not a direct line, there will not be 16 straight recursive calls. But on the tree it will go left first so the 16th list will be the first right-side call, I believe: 16, 49, 39, 27, 43, 34, 46, 40


// What are the first 2 lists to be merged?
// Array: 21, 1
// Left(Left-Left-Left) = 21
// Right(Left-Left-Left) = 1
// While: 1
// First For: 1, 21 
// Second FOr: 1, 21 (nothing happens)
// Result: 1, 21


// Which two lists would be merged on the 7th merge?
// This would be the left-hand side of the tree, basically. 
// Array: 21, 1, 26, 45, 29, 28, 2, 9,
// Left-Left = 21, 1, 26, 45
// Right-Left = 29, 28, 2, 9
// Returned Arrays: 
// Left: 1, 21, 26, 45
// Right: 2, 9, 28, 29
// While: 1, 2, 9, 21, 26, 28, 29
// First For: 1, 2, 9, 21, 26, 28, 29, 45
// Second For: 1, 2, 9, 21, 26, 28, 29, 45 (nothing happens)
// Result: 1, 2, 9, 21, 26, 28, 29, 45


// 2. Understanding quicksort
// 1) Suppose you are debugging a quicksort implementation that is supposed to sort an array in ascending order. After the first partition step has been completed, the contents of the array is in the following order: 3 9 1 14 17 24 22 20. Which of the following statements is correct about the partition step? Explain your answer.

// Starting Array: ??
// middle = 
// Loop 1: pivot = ?
    // j = start 0
    // i = 0
    // 3, 9, 1, 14, 17, 24, 22, 20
// Loop 2: pivot = ?
    // j = 1
    // i = 1
    // 3, 9, 1, 14, 17, 24, 22, 20



    // The pivot could have been 17, but could not have been 14
// ------>The pivot could have been either 14 or 17
// ------> could not be anything higher/lower than this or the list would be different
    // Neither 14 nor 17 could have been the pivot
    // The pivot could have been 14, but could not have been 17

// 2) Given the following list of numbers 14, 17, 13, 15, 19, 10, 3, 16, 9, 12 show the resulting list after the second partitioning according to the quicksort algorithm.
// What is meant by the second partitioning. The second for loop or the second call for partition???

// Starting Array: 14, 17, 13, 15, 19, 10, 3, 16, 9, 12

// When using the last item on the list as a pivot
// middle = 3 <------ result from first partition call
// Loop 1: pivot = 12
    // j = start 0
    // i = 0
    // 14, 17, 13, 15, 19, 10, 3, 16, 9, 12
// Loop 2: pivot = 12
    // j = 0
    // i = 1
    // 14, 17, 13, 15, 19, 10, 3, 16, 9, 12
// Loop 3: pivot = 12
    // j = 0
    // i = 2
    // 14, 17, 13, 15, 19, 10, 3, 16, 9, 12
// Loop 4: pivot = 12
    // j = 0
    // i = 3
    // 14, 17, 13, 15, 19, 10, 3, 16, 9, 12
// Loop 5: pivot = 12
    // j = 0
    // i = 4
    // 14, 17, 13, 15, 19, 10, 3, 16, 9, 12
// Loop 6: pivot = 12
    // j = 0
    // i = 5
    // 10, 17, 13, 15, 19, 14, 3, 16, 9, 12
// Loop 7: pivot = 12
    // j = 1
    // i = 6
    // 10, 3, 13, 15, 19, 14, 17, 16, 9, 12
// Loop 8: pivot = 12
    // j = 2
    // i = 7
    // 10, 3, 13, 15, 19, 14, 17, 16, 9, 12
// Loop 9: pivot = 12
    // j = 2
    // i = 8
    // 10, 3, 9, 15, 19, 14, 17, 16, 13, 12
// Swap Outside Loop: pivot = 12
    // j = 3
    // i = 9
    // 10, 3, 9, 12, 19, 14, 17, 16, 13, 15


// Starting Array: 14, 17, 13, 15, 19, 10, 3, 16, 9, 12
// When using the first item on the list as a pivot
// must change j to j = [start+1]
// middle =  <------ result from first partition call
// Loop 1: pivot = 14
    // j = 0
    // i = 0
    // 14, 17, 13, 15, 19, 10, 3, 16, 9, 12
// Loop 2: pivot = 14
    // j = 1
    // i = 1
    // 14, 17, 13, 15, 19, 10, 3, 16, 9, 12
// Loop 3: pivot = 14
    // j = 1
    // i = 2
    // 14, 13, 17, 15, 19, 10, 3, 16, 9, 12
// Loop 4: pivot = 14
    // j = 2
    // i = 3
    // 14, 13, 17, 15, 19, 10, 3, 16, 9, 12
// Loop 5: pivot = 14
    // j = 2
    // i = 4
    // 14, 13, 17, 15, 19, 10, 3, 16, 9, 12
// Loop 6: pivot = 14
    // j = 2
    // i = 5
    // 14, 13, 10, 15, 19, 17, 3, 16, 9, 12

// Loop 7: pivot = 14
    // j = 3
    // i = 6
    // 14, 13, 10, 3, 19, 17, 15, 16, 9, 12
// Loop 8: pivot = 12
    // j = 4
    // i = 7
   // 14, 13, 10, 3, 19, 17, 15, 16, 9, 12
// Loop 9: pivot = 12
    // j = 4
    // i = 8
    // 14, 13, 10, 3, 8, 17, 15, 16, 19, 12
// Loop 10: pivot = 12
    // j = 5
    // i = 9
    // 14, 13, 10, 3, 8, 12, 15, 16, 19, 17
// Swap Outside Loop: pivot = 12
    // j = 6
    // i = 9
    // 13, 10, 3, 8, 12, 14, 15, 16, 19, 17


// 3. Implementing quicksort
// Write a function qSort that sorts a dataset using the quicksort algorithm. The dataset to sort is: 89 30 25 32 72 70 51 42 25 24 53 55 78 50 13 40 48 32 26 2 14 33 45 72 56 44 21 88 27 68 15 62 93 98 73 28 16 46 87 28 65 38 67 16 85 63 23 69 64 91 9 70 81 27 97 82 6 88 3 7 46 13 11 64 76 31 26 38 28 13 17 69 90 1 6 7 64 43 9 73 80 98 46 27 22 87 49 83 6 39 42 51 54 84 34 53 78 40 14 5.

quickSort=(array, start = 0, end = array.length)=> {

    if (start >= end) {
        return array;
    }

    const mid = partition(array, start, end);
    array = quickSort(array, start, mid);
    array = quickSort(array, mid+1, end);

    return array    
}

partition = (array, start, end) => {
    let j = start;
    let pivot = array[end -1];

    for (let i=start; i<end-1; i++) {
        if (array[i] <= pivot) {
            swap(array, i, j)
            j++
        }
    }
    swap(array, end-1, j)
    return j
}

swap = (array, i, j) => {
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

let data = '89 30 25 32 72 70 51 42 25 24 53 55 78 50 13 40 48 32 26 2 14 33 45 72 56 44 21 88 27 68 15 62 93 98 73 28 16 46 87 28 65 38 67 16 85 63 23 69 64 91 9 70 81 27 97 82 6 88 3 7 46 13 11 64 76 31 26 38 28 13 17 69 90 1 6 7 64 43 9 73 80 98 46 27 22 87 49 83 6 39 42 51 54 84 34 53 78 40 14 5';

function main(data){
  let arr = data.split(' ')
  let array = arr.map(item => Number(item));

  console.log(arr)
  console.log(array)

  console.log(quickSort(array))
}
console.log(main(data))


// 4. Implementing merge sort
// Write a function mSort that sorts the dataset above using the merge sort algorithm.

mergeSort=(array)=>{
    if (array.length <= 1) {
        return array;
    }

    const mid = Math.floor(array.length / 2);
    let left = array.slice(0, mid);
    let right = array.slice(mid, array.length)

    left = mergeSort(left);
    right = mergeSort(right);

    return merge(left, right, array);
}

merge = (left, right, array) => {
    let leftIndex = 0;
    let rightIndex = 0;
    let outIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            array[outIndex++] = left[leftIndex++];
        } else {
            array[outIndex++] = right[rightIndex++];
        }
    }
    for (let i = leftIndex; i < left.length; i++) {
        array[outIndex++] = left[i];
    }
    for (let i = rightIndex; i < right.length; i++) {
        array[outIndex++] = right[i];
    }

    return array;
}

let data = '89 30 25 32 72 70 51 42 25 24 53 55 78 50 13 40 48 32 26 2 14 33 45 72 56 44 21 88 27 68 15 62 93 98 73 28 16 46 87 28 65 38 67 16 85 63 23 69 64 91 9 70 81 27 97 82 6 88 3 7 46 13 11 64 76 31 26 38 28 13 17 69 90 1 6 7 64 43 9 73 80 98 46 27 22 87 49 83 6 39 42 51 54 84 34 53 78 40 14 5';

function mainTwo(data){
  let arr = data.split(' ')
  let array = arr.map(item => Number(item));

  console.log(arr)
  console.log(array)

  console.log(mergeSort(array))
}
console.log(main(data))


// 5. Sorting a linked list using merge sort
// Given a Linked List, sort the linked list using merge sort. You will need your linked list class from previous lesson to create the list and use all of its supplemental functions to solve this problem.

import LinkedList from './LinkedList'

function sortedMerge(nodeA,nodeB){
    // check values at each step, and switch the data at each checkpoint
    // let curNode = list.head;
    // console.log('sortedMerge ran')
    let result = null;
    if (nodeA == null){
      return nodeB;
    }
    if (nodeB == null){
      return nodeA;
    }
  
    if (nodeA.value <= nodeB.value){
      result = nodeA;
      result.next = sortedMerge(nodeA.next,nodeB);
    }
    else {
      result = nodeB;
      result.next = sortedMerge(nodeA,nodeB.next)
    }
    return result;
}
  
function getMidList(head){
    // geeksforgeeks rocks
    let oneTraverse = head;
    let twoTraverse = head;
    if (head == null){
        return head;
    }

    while (twoTraverse.next != null && twoTraverse.next.next != null){
        twoTraverse = twoTraverse.next.next;
        oneTraverse = oneTraverse.next;
    }
    return oneTraverse
}

function sort(head){
    // console.log('sort ran')
    if(head == null || head.next == null) {
        return head;
    }

    let mid = this.getMidList(head);
    // console.log(mid)
    let midPlus = mid.next;

    mid.next = null;

    let left = sort(head);
    // console.log(left)
    let right = sort(midPlus);
    // console.log(right)

    let sortedList = sortedMerge(left, right);
    // console.log(sortedList)
    return sortedList;
}

let data = '89 30 25 32 72 70 51 42 25 24 53 55 78 50 13 40 48 32 26 2 14 33 45 72 56 44 21 88 27 68 15 62 93 98 73 28 16 46 87 28 65 38 67 16 85 63 23 69 64 91 9 70 81 27 97 82 6 88 3 7 46 13 11 64 76 31 26 38 28 13 17 69 90 1 6 7 64 43 9 73 80 98 46 27 22 87 49 83 6 39 42 51 54 84 34 53 78 40 14 5';

function mainThree(data){
  let arr = data.split(' ')
  let array = arr.map(item => Number(item));
  let linkedListArr = new LinkedList;

  array.map(item => linkedListArr.insertLast(item))

  console.log(arr)
  console.log(array)

  console.log(sort(linkedListArr.head))
}
console.log(mainThree(data))


// 6. Bucket sort
// Write an O(n) algorithm to sort an array of integers, where you know in advance what the lowest and highest values are. You can't use arr.splice(), shift() or unshift() for this exercise.

bucketSort = (array, low, high) => {

    if (array.length === 0) {
        return array;
    }

    let i,
    minValue = low;
    maxValue = high;
    bucketSize = Math.floor((array.length/2))+1;
    
    array.forEach(curValue => {
        if (curValue < minValue) {
            minValue = curValue;
        } else if (curValue > maxValue) {
            maxValue = curValue;
        }
    })

    let bucketCount = Math.floor((maxValue-minValue)/bucketSize) + 1;
    let buckets = new Array(bucketCount);

    for (i = 0; i < buckets.length; i++) {
      buckets[i] = [];
    }

    array.forEach(curValue => {
      buckets[Math.floor((curValue - minValue) / bucketSize)].push(curValue);
    });

    array.length = 0;

    buckets.forEach(bucket => {
        insertionSort(bucket);
        bucket.forEach(el => {
           array.push(el)
        });
    });
    
    return array;
}

function insertionSort(array) {
    let length = array.length;
    
    for(let i = 1; i < length; i++) {
      let temp = array[i];
      for(let j = i - 1; j >= 0 && array[j] > temp; j--) {
        array[j+1] = array[j];
      }
      array[i+1] = temp;
    }
    
    return array;
}

mainFour = () => {
    const arr = [5,8,9,10,35,57,2,46,99,73];
    console.log(bucketSort(arr, 2, 99))
}


mainFour()

// 7. Sort in place
// Write an algorithm to shuffle an array into a random order in place (i.e., without creating a new array).
shuffle=(arr)=>{
    let j, x, i;
    for (let i=arr.length-1; i>0; i--) {
      j = Math.floor(Math.random()*(i+1));
      x = arr[i];
      arr[i] = arr[j];
      arr[j] = x;
    }
    return arr;
  }
  
console.log(shuffle([5,8,9,10,35,57,2,46,99,73]))

// 8. Sorting books
// Imagine that I gave you 20 books to sort in alphabetical order. Express this as an algorithm and then implement your algorithm.

// I would approach this with a quicksort method. 
// Pick a pivot point. 
// compare each index with the pivot value
// then place the pivot in it's place
// Then do this recursively until length is 1
// Use the swap method for comparing the values - this might change if the dataset was larger. I might use an insertion sort. 

quickSort=(array, start = 0, end = array.length)=> {

    if (start >= end) {
        return array;
    }

    const mid = partition(array, start, end);
    array = quickSort(array, start, mid);
    array = quickSort(array, mid+1, end);

    return array    
}

partition = (array, start, end) => {
    let j = start;
    let pivot = array[end -1];

    for (let i=start; i<end-1; i++) {
        if (array[i] <= pivot) {
            swap(array, i, j)
            j++
        }
    }
    swap(array, end-1, j)
    return j
}

swap = (array, i, j) => {
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

let data = ['this book', 'that book','Harry Potter and the Prisoner of Azkaban', 'Prey', 'IT', 'Firestarter', 'Pet Semetary', 'Harry Potter and the Order of the Pheonix', 'Enders Game', 'Earth Awakens', 'A Song of Fire and Ice', 'The Shining', 'Jurassic Park', 'The Kite Runner', 'A Thousand Splendid Suns', 'Enders Shadow', 'Children of the mind','Shadow of the Hegemon','The Swarm','Robots and Empires'];

function main(data){
  console.log(data)
  console.log(data.length)

  console.log(quickSort(data))
}
console.log(main(data))


