let LearnPlus = new Vue({
  el: "#LearnPlus",
  data: {
    addcart: 0,
  },
});
let icon = new Vue({
  methods: {
    updateCheckOut() {
      this.$emit("addToCart");
    },
  },
});

let learn = new Vue({
  el: "#learn",
  data: {
    message: "LEARN PLUS",
    message1: "Be your best self with extra learning",
    button: "Learn Now",
  },
});
let nav_items = new Vue({
  el: ".nav_items",
  data: {
    home: "HOME",
    courses: "COURSES",
  },
});

let container = new Vue({
  el: "#container",
  data: {
    heading: "COURSES",
  },
});
let sorting = new Vue({
  el: "#sorting",
  data: {
    subject: "Subject",
    price: "price",
    location: "location",
    space: "space",
  },
});
let box = new Vue({
  el: "#box",
  data() {
    return {
      items: [
        {
          itemId: 101,
          image: "images/maths.jpg",
          subject: "Maths",
          location: "London",
          price: "300",
          space: "5",
        },
        {
          itemId: 102,
          image: "images/science.jpg",
          subject: "Basic Science",
          location: "Chester",
          price: "500",
          space: "5",
        },
        {
          itemId: 103,
          image: "images/music_class.png",
          subject: "Music",
          location: "Hendon",
          price: "350",
          space: "5",
        },
        {
          itemId: 104,
          image: "images/art.jpg",
          subject: "Art",
          location: "Manchester",
          price: "840",
          space: "5",
        },
      ],
      methods: {
        updateCheckOut() {
          this.$emit('addcart');
        },
      },
    };
  },
});
