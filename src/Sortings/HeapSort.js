const Heap = async (arr, n, i, setArr, setcomparing) => {
  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  let largest = i;
  let left = 2 * i + 1;
  let right = 2 * i + 2;

  setcomparing([i, left, right]);
  await sleep(800);

  if (left < n && arr[left] > arr[largest]) {
    largest = left;
  }
  if (right < n && arr[right] > arr[largest]) {
    largest = right;
  }
  if (largest !== i) {
    await swap(arr, largest, i);
    setArr([...arr]);
    await Heap(arr, n, largest,setArr, setcomparing);
  }
};

const swap = async (arr, i, j) => {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

export const HeapSort = async (arr, setArr, setcomparing) => {
    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  let n = arr.length ;

  for (let i = Math.floor(n / 2)-1; i >= 0; i--) {
    await Heap(arr, n, i, setArr, setcomparing);
  }

  for(let i=n-1;i>=0;i--){
    await swap(arr,0,i);
    setArr([...arr])
    setcomparing([0,i]);
    await sleep(800);

    await Heap(arr, i, 0, setArr, setcomparing);

  }
   setcomparing([]);
};
