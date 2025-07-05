


export const SelectionSort=async(arr,setArr,setcomparing)=>{
 const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

 const n = arr.length;
 

 for(let i =0;i<n;i++){
    let smallIndex =i;
    for(let j =i+1;j<n;j++){
          setcomparing([smallIndex, j]);
          await sleep(100)
         if(arr[smallIndex]>arr[j]){
            smallIndex=j;
         }
         
    }
   if (smallIndex !== i) {
      [arr[i], arr[smallIndex]] = [arr[smallIndex], arr[i]];

    setArr([...arr]);
    await sleep(100)
    
 }

}
setcomparing([]);
 }