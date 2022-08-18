//고차함수
const hof = (a) => (b) => (c) => {
    return a+(b*c);
  };
  
  const first = hof(3);
  const second = first(4);
  const third = second(5);
  
  console.log(third);
  
  const hof1 = (a) => {
    return (b) => {
      return (c) => {
        return a + (b*c);
      }
    }
  }
  
  const first1 = hof1(3);
  const second1 = first1(4);
  const third1 = second1(5);
  
  console.log(third1)
  
  //23