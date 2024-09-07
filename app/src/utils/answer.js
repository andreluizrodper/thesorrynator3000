import store from "@/store";

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
