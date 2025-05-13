let i = 0;
while (i < 10) {
  console.log(i);
} // Infinite loop because i is never incremented


let num = '10';
if (num == 10) {
  console.log('Match');  // This might be intended as strict comparison '==='
}
