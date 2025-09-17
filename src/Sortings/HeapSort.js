const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const Heap = async (arr, n, i, setArr, setComparing, speed) => {
  let largest = i;
  let left = 2 * i + 1;
  let right = 2 * i + 2;

  setComparing([i, left, right]);
  await sleep(speed);

  if (left < n && arr[left] > arr[largest]) {
    largest = left;
  }
  if (right < n && arr[right] > arr[largest]) {
    largest = right;
  }
  if (largest !== i) {
    await swap(arr, largest, i);
    setArr([...arr]);
    await sleep(speed);
    await Heap(arr, n, largest, setArr, setComparing, speed);
  }
};

const swap = async (arr, i, j) => {
  [arr[i], arr[j]] = [arr[j], arr[i]];
};

export const HeapSort = async (arr, setArr, setComparing, speed) => {
  let n = arr.length;

  // Build max heap
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    await Heap(arr, n, i, setArr, setComparing, speed);
  }

  // Extract elements from heap one by one
  for (let i = n - 1; i >= 0; i--) {
    await swap(arr, 0, i);
    setArr([...arr]);
    setComparing([0, i]);
    await sleep(speed);

    await Heap(arr, i, 0, setArr, setComparing, speed);
  }

  // Clear highlights at the end
  setComparing([]);
};
