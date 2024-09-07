import { createStore } from "vuex";

export default createStore({
  state: {
    language: "EN",
    loading: false,
    answer: "",
  },
  mutations: {
    setLanguage(state, data) {
      state.language = data;
    },
    setLoading(state, data) {
      state.loading = data;
    },
    setAnswer(state, data) {
      state.answer = data;
    },
  },
});
