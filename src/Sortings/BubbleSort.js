export const BubbleSort = async (arr, setArr, setComparing, speed) => {
  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  const n = arr.length;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      setComparing([j, j + 1]); // highlight the comparison
      await sleep(speed);

      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // swap
        setArr([...arr]);
        await sleep(speed);
      }
    }
  }

  setComparing([]); 
};
