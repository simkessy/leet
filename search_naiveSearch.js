/* 
given a string, find the minimum length substring in s that contains C 

abdcabc, cb

 */

 function findSub(long, short) {
     long = Array.from(long)
     short = Array.from(short)
    for (let i = 0; i < long.length; i++) {
        const l = long[i];
        
        for (let j = 0; j < short.length; j++) {
            const s = short[j];
            if(short.length === 0) {
                console.log("short is empty - we've found length of long at : ", i)
                return i
            }
            
            console.log(i,j, l, s )

            if(l === s) {
                // if we have a matching letter 
                // slice out short 
                short.splice(j,1)
                console.log("slice", short)
            }

            if()

        }
    }
 }

 findSub("abdcabc", "cb")