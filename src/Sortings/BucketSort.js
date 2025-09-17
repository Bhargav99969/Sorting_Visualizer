import { InsertionSort } from "./InsertionSort";

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const BucketSort = async (arr, setArr, setComparing, bucketCount = 10, speed) => {
  let n = arr.length;
  if (n <= 1) return;

  const max = Math.max(...arr);
  const min = Math.min(...arr);

  // Create empty buckets
  const buckets = Array.from({ length: bucketCount }, () => []);

  // Distribute elements into buckets
  for (let i = 0; i < n; i++) {
    const idx = Math.floor(((arr[i] - min) / (max - min + 1)) * bucketCount);
    buckets[idx].push(arr[i]);
  }

  // Sort each bucket with Insertion Sort
  for (let b = 0; b < bucketCount; b++) {
    if (buckets[b].length > 0) {
      await InsertionSort(buckets[b], async (newBucket) => {
        // When bucket is updated, merge back into main array for visualization
        let tempArr = [];
        let index = 0;
        for (let bb = 0; bb < bucketCount; bb++) {
          for (let val of buckets[bb]) {
            tempArr[index++] = val;
          }
        }
        setArr([...tempArr]);
      }, setComparing, speed);

      // Put sorted bucket back into main array
      for (let k = 0; k < buckets[b].length; k++) {
        arr[k] = buckets[b][k];
        setArr([...arr]);
        setComparing([k]);
        await sleep(speed);
      }
    }
  }

  setComparing([]);
};
