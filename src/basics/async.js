/*
ASYNC / AWAIT

Definition:
Asynchronous JavaScript allows non-blocking operations.
async/await is syntax built on top of Promises.
*/

function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Practice 1
async function loadMessage() {
  await wait(50);
  return "loaded";
}

// Practice 2
async function loadTwo() {
  const a = await loadMessage();
  const b = await loadMessage();
  return [a, b];
}

// Practice 3
async function loadAll(messages) {
  const tasks = messages.map(async (m) => {
    await wait(10);
    return m.toUpperCase();
  });

  return Promise.all(tasks);
}