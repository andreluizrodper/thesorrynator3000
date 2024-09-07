import store from "@/store";

const api = "https://thesorrynator3000.vercel.app";

const getAnswer = async (prompt) => {
  store.commit("setLoading", true);
  const answer = await fetch(`${api}/ai`, {
    method: "POST",
    data: { prompt },
  }).then((data) => data.json());

  store.commit("setLoading", false);
  store.commit("setAnswer", answer);
};

export { getAnswer };
