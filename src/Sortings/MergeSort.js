import { startTransition } from "react";

const Merge = async (arr, setArr, setcomparing, start, end, mid) => {
  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  let left = arr.slice(start, mid + 1);
  let right = arr.slice(mid + 1, end + 1);
  let i = 0;
  let j = 0;
  let k = start;

  while (i < left.length && j < right.length) {
    setcomparing([k]);
    await sleep(50);

    if (left[i] <= right[j]) {
      arr[k++] = left[i++];
    } else {
      arr[k++] = right[j++];
    }
    setArr([...arr]);
  }
  while (i < left.length) {
    arr[k++] = left[i++];
    setArr([...arr]);
    await sleep(30);
  }
  while (j < right.length) {
    arr[k++] = right[j++];
    setArr([...arr]);
    await sleep(30);
  }

  setcomparing([]);
};

const divide = async(arr, setArr, setcomparing, start, end) => {
  if (end <= start) return;

  let mid = Math.floor((start + end) / 2);

  //left
 await divide(arr, setArr, setcomparing, start, mid);
  //right
 await divide(arr, setArr, setcomparing, mid + 1, end);
  //merge
 await Merge(arr, setArr, setcomparing, start, end, mid);
};

export const MergeSort = async(arr, setArr, setcomparing) => {
 await divide(arr, setArr, setcomparing, 0, arr.length - 1);
};
