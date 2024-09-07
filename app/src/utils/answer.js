import store from "@/store";

const api = "https://thesorrynator3000.vercel.app";

const getAnswer = async (prompt) => {
  store.commit("setLoading", true);
  const answer = await fetch(`${api}/ai`, {
    body: JSON.stringify({
      prompt,
    }),
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((res) => res.data.content[0]);

  store.commit("setLoading", false);
  store.commit("setAnswer", answer);
};

export { getAnswer };
