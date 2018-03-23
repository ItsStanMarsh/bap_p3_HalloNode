console.log ("hallo");
console.log(__filename);
console.log(__dirname);
console.log(process.argv);


process.argv.forEach((val, index, array) => {
  console.log(val);
});

var sum = 0;
for (i = 2; i < process.argv.length; i++) {
	sum += Number(process.argv[i]);
}
sum = sum / 5;
console.log(sum);
