let List1=['Arjun', 'Adwait', 'Swapnil','Amit', 'Vishal', 'Adnan'];
let List2=[ 'Adwait','Laxman','Amit','Adnan','Nitin','Gaurav'];
let new_l1=[];
let new_l2=[];
let unique_in_both=[];

for(let a of List1){
    if(List2.includes(a)){
        continue;
    // }else{
        new_l1.push(a)
    }
}
console.log(new_l1)

for(let b of List2){
    if(List1.includes(b)){
        continue;
    }else{
        new_l2.push(b)
    }
}
console.log(new_l2)

for(let c of List1){
    if(List2.includes(c)){
        unique_in_both.push(c)
    }
}
console.log(unique_in_both)