const foo = () => console.log("foo : anon");
const bar = () => console.log("bar : anon");

setTimeout(console.log.bind(this, "setTimeout"), 0);

foo();
process.nextTick(console.log.bind(this, "nextTick"));

bar();

setImmediate(() => console.log("set Immediate"));
