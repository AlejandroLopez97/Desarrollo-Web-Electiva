

const changeArray = (arr, action) => {
    if (action === 'push') {
      arr.push(42); 
    } else if (action === 'pop') {
      arr.pop(); 
    }
    return arr;
  };
  
  const withOutReturn = (a, b) => a + b;

  const showCallbackResult = (callback, item1, item2, manipulationAction) => {
    let result;
    if (manipulationAction) {
      const array = [1, 2, 3, 4, 5];
      const manipulatedArray = changeArray([...array], manipulationAction);
      result = callback(manipulatedArray, item1, item2);
    } else {
      result = callback(item1, item2);
    }
    console.log('Resultado de la callback:', result);
  };

  showCallbackResult(
    (arr, a, b) => {
      const sum = arr.reduce((acc, val) => acc + val, 0);
      return withOutReturn(sum, a + b);
    },
    10,
    20,
    'push'
  );