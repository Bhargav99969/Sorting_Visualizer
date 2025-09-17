export const InsertionSort = async (arr, setArr, setComparing, speed) => {
  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  let n = arr.length;

  for (let i = 1; i < n; i++) {
    let curr = arr[i];
    let prev = i - 1;

    while (prev >= 0 && arr[prev] > curr) {
      setComparing([prev, prev + 1]); 
      arr[prev + 1] = arr[prev];      
      prev--;

      setArr([...arr]);              
      await sleep(speed);             
    }

    arr[prev + 1] = curr;
    setArr([...arr]);
    await sleep(speed);
  }

  setComparing([]); 
};
