

export const InserionSOrt=async(arr,setArr,setcomparing)=>{
     const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    let n =arr.length;
    
    for(let i=1;i<n;i++){
        let curr=arr[i];
        let prev=i-1;
        while(prev>=0 && arr[prev]>curr){
             setcomparing([prev, i]);
            
            arr[prev+1]=arr[prev];
            prev--;
             await sleep(50)
        }
        arr[prev+1]=curr;
        setArr([...arr]);
        await sleep(50)
    }
    setcomparing([])
}