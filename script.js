const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
	const result = [];  
    let chunk = [];
    let chunkSum = 0;

    for (let i = 0; i < arr.length; i++) {
        const num = arr[i];
        
        
        chunkSum += num;

       if (chunkSum <= n) {
            chunk.push(num);
        } else {
            // Start a new chunk
            result.push(chunk);
            chunk = [num];
            chunkSum = num; // Reset the chunk sum to the current number
        }
    }

    // Push the last chunk to the result array
    if (chunk.length > 0) {
        result.push(chunk);
    }
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
