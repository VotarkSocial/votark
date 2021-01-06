export const maskNumber = (number) => {
  if(number>1000000000){
    return (number/1000000000).toFixed(1) + 'B'
  }
  else if(number>1000000){
    return (number/1000000).toFixed(1) + 'M'
  }
  else if(number>10000){
    return (number/1000).toFixed(1) + 'K'
  }
  return number
}