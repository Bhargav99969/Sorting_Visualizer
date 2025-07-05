
export const BubbleSort=async(arr,setArr,setcomparing)=>{

     const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));


    const n=arr.length
    for(let i=0;i<n;i++){
     for(let j=0;j< n-i;j++){
        setcomparing([j, j + 1]);
        await sleep(100)
        if(arr[j]>arr[j+1]){
            let temp=arr[j];
            arr[j]=arr[j+1];
            arr[j+1]=temp;
            setArr([...arr]);
            await sleep(100)
        }
     }
    }
setcomparing([]);
}