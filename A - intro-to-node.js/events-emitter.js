const EventEmitter = require("events");

const eventEmitter = new EventEmitter();

eventEmitter.on("start", (start, end) => {
  console.log(`started from ${start} to ${end}`);
});

for (let index = 0; index < 20; index++) {
  if (index === 10) {
    eventEmitter.emit("start", 1, 100);
  } else {
    console.log(index);
  }
}
