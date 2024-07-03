function multiplesOf3Or5(number) {
  let c = 0 
  for(let i = 0; i  number;i++){
    if (i % 3 == 0  i % 5 == 0){
      c+=i
    }
  }

  return c;
}

multiplesOf3Or5(1000);