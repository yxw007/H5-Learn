const Task = (result, isSuccess = true) => {
  return () =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        if (isSuccess) {
          console.log(`success: ${result}`);
          resolve(result);
        } else {
          console.log(`error: ${result}`);
          reject(result);
        }
      }, 1000);
    });
};

function execute(tasks) {
  return tasks.reduce(
    (previousPromise, currentPromise) =>
      previousPromise.then((resultList) => {
        return new Promise((resolve) => {
          currentPromise()
            .then((result) => {
              resolve(resultList.concat(result));
            })
            .catch(() => {
              resolve(resultList.concat(null));
            });
        });
      }),
    Promise.resolve([])
  );
}

execute([Task("A"), Task("B"), Task("X", false), Task("C")]).then((resultList) => {
  // 这里期望打印 ["A", "B", null, "C"]
  console.log(resultList);
});
