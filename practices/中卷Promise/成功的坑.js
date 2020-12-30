var p = Promise.reject("ops");

p.then(
  function fulifilled() {
    return p;
  },
  function rejected(err) {
    console.log(err); // ops
  }
);
