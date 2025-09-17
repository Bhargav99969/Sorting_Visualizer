const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const Partition = async (arr, setArr, start, end, setComparing, speed) => {
  let i = start - 1;
  let pivot = arr[end];

  for (let j = start; j < end; j++) {
    if (arr[j] <= pivot) {
      setComparing([i, j, end]);
      await sleep(speed);

      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
      setArr([...arr]);
      await sleep(speed);
    }
  }

  i++;
  [arr[i], arr[end]] = [arr[end], arr[i]];
  setArr([...arr]);
  await sleep(speed);

  return i;
};

const Sorting = async (arr, setArr, start, end, setComparing, speed) => {
  if (start >= end) return;

  let pivot = await Partition(arr, setArr, start, end, setComparing, speed);

  await Sorting(arr, setArr, start, pivot - 1, setComparing, speed);
  await Sorting(arr, setArr, pivot + 1, end, setComparing, speed);
};

export const QuickSort = async (arr, setArr, setComparing, speed) => {
  let start = 0;
  let end = arr.length - 1;

  await Sorting(arr, setArr, start, end, setComparing, speed);

  // clear highlights at the end
  setComparing([]);
};
