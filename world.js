export default {
  async fetch(request) {
    return new Response("world", {
      headers: { "Content-Type": "text/plain" },
    });
  },
};
