export const CountSort = async (arr, setArr, setcomparing) => {
  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  const max = Math.max(...arr);
  const count = new Array(max + 1).fill(0);
  let index = 0;

  for (let i = 0; i < arr.length; i++) {
    count[arr[i]]++;
    setcomparing([i]);
    await sleep(50);
  }

  for (let i = 0; i < count.length; i++) {
    while (count[i] > 0) {
      arr[index] = i;
      index++;
      count[i]--;

      setArr([...arr]);
      setcomparing([index]);
    }
    setcomparing([]);
  }
};
