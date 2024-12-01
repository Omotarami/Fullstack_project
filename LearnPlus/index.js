new Vue({
  el: '#app',
  data: {
    home: 'Home',
    courses: 'Courses',
    message: 'Welcome to LearnPlus',
    message1: 'Explore the best courses available.',
    subject: 'Sort by Subject',
    location: 'Sort by Location',
    price: 'Sort by Price',
    space: 'Sort by Space',
    cart: [],
    items: [
      {
        itemId: 1001,
        image: 'images/maths.jpg',
        subject: 'Mathematics',
        location: 'London',
        price: 100,
        space: 10
      },
      {
        itemId: 1002,
        image: 'images/science.jpg',
        subject: 'Science',
        location: 'Manchester',
        price: 229,
        space: 10
      },
      {
        itemId: 1003,
        image: 'images/art.jpg',
        subject: 'Art',
        location: 'leichester',
        price: 486,
        space: 10
      },
      {
        itemId: 1004,
        image: 'images/music_class.png',
        subject: 'Social Studies',
        location: 'Chester',
        price: 60,
        space: 10
      },
      {
        itemId: 1005,
        image: 'images/music_class.png',
        subject: 'French',
        location: 'New Castle',
        price: 180,
        space: 10
      },
      {
        itemId: 1006,
        image: 'images/music_class.png',
        subject: 'Computerscience',
        location: 'Bradford',
        price: 160,
        space: 10
      },
      {
        itemId: 1007,
        image: 'images/music_class.png',
        subject: 'History',
        location: 'Winchester',
        price: 240,
        space: 10
      },
      {
        itemId: 1008,
        image: 'images/music_class.png',
        subject: 'English',
        location: 'Sheffield',
        price: 610,
        space: 10
      },
      {
        itemId: 1009,
        image: 'images/music_class.png',
        subject: 'Physical Education',
        location: 'Yorkshire',
        price: 170,
        space: 10
      },
      {
        itemId: 1010,
        image: 'images/music_class.png',
        subject: 'Music',
        location: 'Chester',
        price: 285,
        space: 10
      },
    ],
  },
  methods: {
    addToCart() {
      this.$emit('add-to-cart');
    },
  },
});
