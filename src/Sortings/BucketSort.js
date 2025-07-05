import { InserionSOrt } from './InsertionSort';

export const BucketSort=async(arr, setArr, setcomparing, bucketCount=10)=>{
    const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
    let n= arr.length;
    if(n<=1) return;

    const max =Math.max(...arr);
    const min=Math.min(...arr);

    const buckets = Array.from({length:bucketCount},()=>[]);


    for(let i =0;i<n;i++){
        const idx = Math.floor(((arr[i]-min)/(max-min+1))*bucketCount);
        buckets[idx].push(arr[i]);
    }

    let index=0;
    for(let b=0;b<bucketCount;b++){
        if(buckets[b].length>0){
            await InserionSOrt(buckets[b],setArr,setcomparing);
            for(let k=0;k<buckets[b].length;k++){
                arr[index]=buckets[b][k];
                setArr([...arr])
                setcomparing([index]);
                index++;
                await sleep(100);
            }
        }
    }

setcomparing([]);
}