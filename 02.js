//   2. Async / Await 다뤄보기

// 위 1번 문제에서 다루었던 비동기 처리를 `async`, `await` 키워드를 사용하여 코드를 수정해서 작성해주세요.
async function asyncGetData(url) {
  const result = await setTimeout(() => {
    if (url === API_URL) {
      return resolve;
    }
  }, 3000);

  return result;
}

asyncGetData()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => console.error(error));
