const addLargeNumbers = (a: string, b: string) => {

  const sa: number[] = a.split('').reverse().map(digit => parseInt(digit));
  const sb: number[] = b.split('').reverse().map(digit => parseInt(digit));
  
  let sum: number[] = [];
  let carry = 0;

  const larger = sa.length > sb.length ? sa : sb;
  const smaller = sa.length > sb.length ? sb : sa;
  
  let i = 0;
  while(i < smaller.length) {
    let x = larger[i] + smaller[i] + carry;
    carry = Math.floor(x / 10);
    sum.push(x % 10);
    i++;
  }

  while(i < larger.length) {
    let x = larger[i] + carry;
    carry = Math.floor(x / 10);
    sum.push(x % 10);
    i++;
  }

  if(carry){
    sum.push(carry);
  }

  return sum.reverse().join('');

}

export default addLargeNumbers;