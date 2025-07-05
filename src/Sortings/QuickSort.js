
const Partition=async(arr,setArr,start,end,setcomparing)=>{
    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    let i=start-1
    let pivot=arr[end]

    for(let j=start;j<end;j++){

        if(arr[j]<=pivot){
             setcomparing([i,j, end])
             await sleep(200)
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
            setArr([...arr])
            await sleep(200)
        }
    }
    i++;
            
    [arr[i], arr[end]] = [arr[end], arr[i]];
    setArr([...arr])
    await sleep(200)

    return i;
}

const Sorting=async(arr,setArr,start,end,setcomparing)=>{

    if(start>=end) return;

    let pivot = await Partition(arr,setArr,start,end,setcomparing);

    await Sorting(arr,setArr,start,pivot-1,setcomparing);
    await Sorting(arr,setArr,pivot+1,end,setcomparing);

}

export const QuickSort=async(arr,setArr,setcomparing)=>{

    let start =0;
    let end=arr.length-1
     
    await Sorting(arr,setArr,start,end,setcomparing)
}