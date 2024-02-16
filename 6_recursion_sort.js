const fuctorial = (n) => {
  if (n <= 1) {
    return n;
  }

  return n * fuctorial(n - 1);
};

console.log(fuctorial(5));

const fibonachi = (n) => {
  if (n <= 1) {
    return n;
  }
  return fibonachi(n - 1) + fibonachi(n - 2);
};

console.log(fibonachi(6));
