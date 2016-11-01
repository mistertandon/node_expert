/* 
 * itr  : Variable contains current iteration number 
 * Note : Initialize with int zero
 * 
 * sum : Variable contains sum of user defined arguments to global process
 * arguments
 * Note : Initialize with int zero
 * */

var itr = 0, sum = 0;

for(var array_key in process.argv){
    if(itr > 1 ){
        sum += parseInt(process.argv[array_key], 10);
    }
    ++itr;
}
console.log(sum);