define([
  'dojo/_base/declare'
], (declare) => {
  const myClass = declare(null, {
    name: "Adam Smith",
    age: 42
  });
  console.log(myClass.age);
});
