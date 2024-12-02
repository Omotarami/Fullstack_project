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
        space: 10,
      },
      {
        itemId: 1002,
        image: "images/science.jpg",
        subject: "Science",
        location: "Manchester",
        price: 229,
        space: 10,
      },
      {
        itemId: 1003,
        image: "images/art.jpg",
        subject: "Art",
        location: "leichester",
        price: 486,
        space: 10,
      },
      {
        itemId: 1004,
        image: "images/socialstudies.jpeg",
        subject: "Social Studies",
        location: "Chester",
        price: 60,
        space: 10,
      },
      {
        itemId: 1005,
        image: "images/french.jpeg",
        subject: "French",
        location: "New Castle",
        price: 180,
        space: 10,
      },
      {
        itemId: 1006,
        image: "images/programming.jpeg",
        subject: "Programming for kids",
        location: "Bradford",
        price: 860,
        space: 10,
      },
      {
        itemId: 1007,
        image: "images/history.jpeg",
        subject: "History",
        location: "Winchester",
        price: 240,
        space: 10,
      },
      {
        itemId: 1008,
        image: "images/english.jpeg",
        subject: "English",
        location: "Sheffield",
        price: 610,
        space: 10,
      },
      {
        itemId: 1009,
        image: "images/physical.jpeg",
        subject: "Physical Education",
        location: "Yorkshire",
        price: 170,
        space: 10,
      },
      {
        itemId: 1010,
        image: "images/music_class.png",
        subject: "Music",
        location: "Chester",
        price: 285,
        space: 10,
      },
    ],
    cart: [],
    cartVisible: false,
    sortAttribute: "subject",
    sortOrder: 1,
    name: "",
    phone: "",
    checkoutmessage: "",
  },
  methods: {
    togglecart() {
      this.cartVisible = !this.cartVisible;
    },
    addToCart(item){
      const cartItem = this.cart.find((lesson) => lesson.id ===  item.id);
      if (cartItem){
        cartItem.quantity++;
      }else {
        this.cart.push({...item,quantity:1});
      }
      item.space--;
    },
    removefromCart(lesson){
      const index = this.cart.findIndex((cartItem) => cartItem.id === lesson.id);
      if (index !== 1){
        this.items.find((item) => item.id === lesson.id).space
         +=lesson.quantity;
         this.cart.splice(index,1);
      }

  },
    sortlessons() {
      this.items.sort((a, b) => {
        if (a[this.returnAttribute] < b[this.sortAttribute])
          return -this.sortOrder;
        if (a[this.sortAttribute] > b[this.sortAttribute])
          return this.sortOrder;
        return 0;
      });
    },
    toggleOrder(){
      this.sortOrder *=-1;
      this.sort.items();
      },
    }
});
