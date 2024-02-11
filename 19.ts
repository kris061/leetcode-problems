function uniqueOccurrences(arr: number[]): boolean {
    var len = arr.length
    var numOfOccurences = []
    var counter = 1
    let i, key, j;  

    for (i = 1; i < len; i++) 
    {  
        key = arr[i];  
        j = i - 1;  
        
        while (j >= 0 && arr[j] > key) 
        {  
            arr[j + 1] = arr[j];  
            j = j - 1;  
        }  
        arr[j + 1] = key;  
    }  
    let mapa = new Map
    for (i = 0; i < len; i++) {
        for (j = i+1; j <= len; j++) {
            if (arr[i] == arr[j]) { counter++ }
            else {
                i = j 
                if (mapa.has(counter)) return false
                mapa.set(counter, 1)
                counter = 1
            }
        }
    }


    return true
};

console.log(uniqueOccurrences([1,2,2,1,1,3])) // expected: true