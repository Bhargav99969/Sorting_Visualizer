export const SelectionSort = async (arr, setArr, setComparing, speed) => {
  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  const n = arr.length;

  for (let i = 0; i < n; i++) {
    let smallIndex = i;

    for (let j = i + 1; j < n; j++) {
      setComparing([smallIndex, j]); // highlight current min & candidate
      await sleep(speed);

      if (arr[j] < arr[smallIndex]) {
        smallIndex = j; // update smallest index
      }
    }

    if (smallIndex !== i) {
      [arr[i], arr[smallIndex]] = [arr[smallIndex], arr[i]]; // swap
      setArr([...arr]);
      await sleep(speed);
    }
  }

  setComparing([]); // clear highlights at the end
};
