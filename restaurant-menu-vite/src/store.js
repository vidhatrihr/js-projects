import { reactive, computed } from 'vue';

const store = reactive({
  orders: {
    'Masala Dosa': 2,
    Samosa: 3,
  },
  dishes: {
    'Masala Dosa': {
      name: 'Masala Dosa',
      desc: 'Thin, crispy pancake. Spicy potato inside.',
      price: 120,
      img: 'Masala Dosa.jpg',
    },
    'Palak Paneer': {
      name: 'Palak Paneer',
      desc: 'Green spinach curry. Soft white cheese.',
      price: 200,
      img: 'Palak Paneer.jpg',
    },
    'Vegetable Biryani': {
      name: 'Vegetable Biryani',
      desc: 'Spicy rice. Mixed vegetables. Very flavorful.',
      price: 250,
      img: 'Vegetable Biryani.jpg',
    },
    'Dal Makhani': {
      name: 'Dal Makhani',
      desc: 'Soft black lentils. Cooked slowly. Very rich.',
      price: 180,
      img: 'Dal Makhani.jpg',
    },
    Samosa: {
      name: 'Samosa',
      desc: 'Crispy outside. Spicy veggies inside. Triangle shape.',
      price: 50,
      img: 'Samosa.jpg',
    },
    Pakora: {
      name: 'Pakora',
      desc: 'Small veggie balls. Fried. Crispy and spicy.',
      price: 60,
      img: 'Pakora.jpg',
    },
    'Paneer Tikka': {
      name: 'Paneer Tikka',
      desc: 'Grilled cheese pieces. Spicy and tangy.',
      price: 150,
      img: 'Paneer Tikka.jpg',
    },
    Lassi: {
      name: 'Lassi',
      desc: 'Cold yogurt drink. Sweet or salty.',
      price: 80,
      img: 'Lassi.webp',
    },
    'Masala Chai': {
      name: 'Masala Chai',
      desc: 'Spiced tea with milk. Hot and sweet.',
      price: 40,
      img: 'Masala Chai.jpeg',
    },
    'Mango Shake': {
      name: 'Mango Shake',
      desc: 'Sweet mango drink. Smooth. Very tasty.',
      price: 100,
      img: 'Mango Shake.jpg',
    },
  },
  totalAmount: computed(() => {
    let total = 0;
    for (let dishName in store.orders) {
      let qty = store.orders[dishName];
      let price = store.dishes[dishName].price;
      total += qty * price;
    }
    return total;
  }),
});

export default store;
