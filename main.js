const ida = document.getElementById("item");
const advicet = document.getElementById("text");
const btn = document.querySelector("#btnGenera");

async function getAdvice2() {
  try {
    const resp = await fetch("https://api.adviceslip.com/advice", {
      method: "GET",
    });

    if (resp.status == 200) {
      return await resp.json();
    }
  } catch (error) {
    console.log(error);
  }
}

const createAdvice = async ({ id, advice }) => {
  ida.innerHTML = id;
  advicet.innerHTML = ' " ' + advice + '"';
};

btn.addEventListener("click", (event) => {
  getAdvice2().then(({ slip }) => {
    createAdvice(slip);
  });
});

getAdvice2().then(({ slip }) => {
  createAdvice(slip);
});
