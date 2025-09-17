const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const Merge = async (arr, setArr, setComparing, start, end, mid, speed) => {
  let left = arr.slice(start, mid + 1);
  let right = arr.slice(mid + 1, end + 1);
  let i = 0;
  let j = 0;
  let k = start;

  while (i < left.length && j < right.length) {
    setComparing([start + i, mid + 1 + j]); // highlight comparison
    await sleep(speed);

    if (left[i] <= right[j]) {
      arr[k++] = left[i++];
    } else {
      arr[k++] = right[j++];
    }
    setArr([...arr]);
    await sleep(speed);
  }

  while (i < left.length) {
    arr[k++] = left[i++];
    setArr([...arr]);
    await sleep(speed);
  }

  while (j < right.length) {
    arr[k++] = right[j++];
    setArr([...arr]);
    await sleep(speed);
  }

  setComparing([]);
};

const divide = async (arr, setArr, setComparing, start, end, speed) => {
  if (end <= start) return;

  let mid = Math.floor((start + end) / 2);


  await divide(arr, setArr, setComparing, start, mid, speed);
  
  await divide(arr, setArr, setComparing, mid + 1, end, speed);

  await Merge(arr, setArr, setComparing, start, end, mid, speed);
};

export const MergeSort = async (arr, setArr, setComparing, speed) => {
  await divide(arr, setArr, setComparing, 0, arr.length - 1, speed);
};
