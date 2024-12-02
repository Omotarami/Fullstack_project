new Vue({
  el: "#app",
  data: {
    home: "Home",
    courses: "Courses",
    message: "Welcome to LearnPlus",
    message1: "Explore the best courses available.",
    items: [
      {
        itemId: 1001,
        image: "images/maths.jpg",
        subject: "Mathematics",
        location: "London",
        price: 100,
        space: 5,
      },
      {
        itemId: 1002,
        image: "images/science.jpg",
        subject: "Science",
        location: "Manchester",
        price: 229,
        space: 5,
      },
      {
        itemId: 1003,
        image: "images/art.jpg",
        subject: "Art",
        location: "leichester",
        price: 486,
        space: 5,
      },
      {
        itemId: 1004,
        image: "images/socialstudies.jpeg",
        subject: "Social Studies",
        location: "Chester",
        price: 60,
        space:5,
      },
      {
        itemId: 1005,
        image: "images/french.jpeg",
        subject: "French",
        location: "New Castle",
        price: 180,
        space: 5,
      },
      {
        itemId: 1006,
        image: "images/programming.jpeg",
        subject: "Programming for kids",
        location: "Bradford",
        price: 860,
        space: 5,
      },
      {
        itemId: 1007,
        image: "images/history.jpeg",
        subject: "History",
        location: "Winchester",
        price: 240,
        space: 5,
      },
      {
        itemId: 1008,
        image: "images/english.jpeg",
        subject: "English",
        location: "Sheffield",
        price: 610,
        space: 5,
      },
      {
        itemId: 1009,
        image: "images/physical.jpeg",
        subject: "Physical Education",
        location: "Yorkshire",
        price: 170,
        space: 5,
      },
      {
        itemId: 1010,
        image: "images/music_class.png",
        subject: "Music",
        location: "Chester",
        price: 285,
        space: 5,
      },
    ],
    cart: [],
    cartVisible: false,
    sortAttribute: "subject",
    sortOrder: 1,
    name:"",
    phone:"",
    checkoutMessage:"",

  },
  methods: {
    toggleCart() {
      this.cartVisible = !this.cartVisible;
    },
    async fetchLessons() {
      try {
        const response = await fetch('http://localhost:3000/lessons'); 
        const data = await response.json(); 
        this.items = data; 
      } catch (error) {
        console.error('Error fetching lessons:', error);
      }
    },
    addToCart(item) {
      const cartItem = this.cart.find(
        (lesson) => lesson.itemId === item.itemId
      );
      if (cartItem) {
        cartItem.quantity++;
      } else {
        this.cart.push({...item, quantity: 1});
      }
      item.space--;
    },
    removeFromCart(lesson) {
const cartItem = this.cart.find((item) => item.itemId === lesson.itemId);
const originalItem = this.items.find((item) => item.itemId === lesson.itemId);

if (cartItem && originalItem) {
cartItem.quantity--; // Decrease cart quantity by 1
originalItem.space++; // Increase available space by 1

if (cartItem.quantity === 0) {
// If the quantity reaches 0, remove the item from the cart
this.cart = this.cart.filter((item) => item.itemId !== lesson.itemId);
}
}
},
    sortLessons() {
      this.items.sort((a, b) => {
        if (a[this.sortAttribute] < b[this.sortAttribute])
          return -this.sortOrder;
        if (a[this.sortAttribute] > b[this.sortAttribute])
          return this.sortOrder;
        return 0;
      });
    },
    toggleOrder() {
      this.sortOrder *= -1;
      this.sortLessons();
    },
    checkout() {
      this.checkoutMessage = `Thank you, ${this.name}! Your order has been placed.`;
      this.cart = [];
      this.name = "";
      this.phone = "";
    },
  },
  computed:{
    validInput(){
      const nameValid = /^[a-zA-Z\s]+$/.test(this.name);
      const phoneValid = /^[0-9]+$/.test(this.phone);
      return nameValid && phoneValid;
    }
  }
});

