function solve(a: number[]): boolean {
    let removed = 0;
    let increasing = true;
    let pre = Number.MIN_VALUE;

    a.forEach(v => {
        if(pre > Number.MIN_VALUE){
            if(v < pre){
                removed++;
            }
        }
        pre = v;
    })

    if(removed > 1) increasing = false;

    return increasing;
}
let a = [1, 3, 2, 1];
console.log(solve(a)); // false

a = [1, 3, 2];
console.log(solve(a)); // true