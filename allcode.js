function pivot(arr, start  = 0, end = arr.length - 1) {
    let swap = (arr, id1,  id2) => {[arr[id1], arr[id2]] = [arr[id2], arr[id1]]} 
  
    let pivot = arr[start] 
    let swapIdx = start 
  
  
  for(let i = start + 1; i <= end; i++) { 
    if(pivot > arr[i]) {
      swapIdx++ 
      swap(arr, swapIdx, i)
    }
  } 
    swap(arr, start, swapIdx)
    return swapIdx
  }
  
  
  function quickSort(arr, start = 0, end = arr.length - 1) {
    if(start < end) {
      let pivotIndex = pivot(arr, start, end ) 
      quickSort(arr, start, pivotIndex  -1) 
      quickSort(arr, pivotIndex + 1, end)
    } 
    return arr
  }
           
  quickSort([100,-3,2,4,6,9,1,2,5,3,23])
  
  let x = quickSort([5,4,3, 2, 1, -1]) 
  console.log(x)