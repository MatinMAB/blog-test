import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state() {
    return {
      post:{},
      posts: [],
      category: [
        {
          id: 1,
          name: "سلامت",
          icon: "briefcase medical",
        },
        {
          id: 2,
          name: "فناوری",
          icon: "microchip",
        },
        {
          id: 3,
          name: "علم و دانش",
          icon: "flask",
        },
        {
          id: 4,
          name: "تکنولوژی",
          icon: "laptop code",
        },
        {
          id: 5,
          name: "سیاسی",
          icon: "money bill wave",
        },

        {
          id: 6,
          name: "آموزشی",
          icon: "graduation cap",
        },
        {
          id: 7,
          name: "خبری",
          icon: "rss",
        },
      ],
    };
  },
  mutations: {
    SET_POSTS(state, payload) {
      state.posts = payload;
    },
    SET_POST(state, payload) {
      state.post = payload;
    },
  },
  actions: {
    getPosts(context) {
      axios.get("https://jsonplaceholder.typicode.com/posts?_limit=12").then((res) => context.commit("SET_POSTS", res.data));
    },
    getPost(context,payload) {
      axios.get(`https://jsonplaceholder.typicode.com/posts/${payload}`).then((res) => context.commit("SET_POST", res.data));
    },
  },
  modules: {},
});
