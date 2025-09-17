export const CountSort = async (arr, setArr, setComparing, speed) => {
  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  const max = Math.max(...arr);
  const count = new Array(max + 1).fill(0);
  let index = 0;

  // Count frequencies
  for (let i = 0; i < arr.length; i++) {
    count[arr[i]]++;
    setComparing([i]); // highlight the element being counted
    await sleep(speed);
  }

  // Reconstruct sorted array
  for (let i = 0; i < count.length; i++) {
    while (count[i] > 0) {
      arr[index] = i;
      setArr([...arr]);
      setComparing([index]); // highlight the position being filled
      index++;
      count[i]--;

      await sleep(speed); // delay for visualization
    }
  }

  setComparing([]); // clear highlights at the end
};
