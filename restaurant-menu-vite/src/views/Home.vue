<script>
import store from '@/store';
import router from '@/router';

export default {
  data() {
    return { store };
  },
  methods: {
    updateQty(dishName, change) {
      let orders = store.orders;
      if (orders[dishName] === undefined) orders[dishName] = 0;
      orders[dishName] += change;
      if (orders[dishName] <= 0) delete orders[dishName];
    },
    removeOrder(dishName) {
      delete store.orders[dishName];
    },
    placeOrder() {
      router.push('/checkout');
    },
  },
};
</script>

<template>
  <h1>Restaurant Menu</h1>

  <div id="summary">
    <h2>Order Summary</h2>
    <p v-show="Object.keys(store.orders).length === 0">Nothing here, please order something!</p>

    <div class="summary-row" v-for="(qty, item) of store.orders">
      <span>{{ item }} x {{ qty }}</span>
      <span>₹{{ store.dishes[item].price * qty }}</span>
    </div>

    <div class="summary-row" style="margin-top: 1rem">
      <span></span>
      <span
        ><strong>Total: ₹{{ store.totalAmount }}</strong></span
      >
    </div>

    <div class="button-container">
      <button @click="placeOrder">Place Order</button>
    </div>
  </div>

  <div id="menu-container">
    <div class="menu-item" v-for="dish in store.dishes">
      <img v-bind:src="`/images/${dish.img}`" v-bind:alt="`Picture of ${dish.name}`" />

      <div class="name">{{ dish.name }}</div>
      <div class="desc">{{ dish.desc }}</div>
      <div class="price">₹{{ dish.price }}</div>

      <div class="qty">
        <button @click="updateQty(dish.name, -1)">-</button>
        <span>{{ store.orders[dish.name] || 0 }}</span>
        <button @click="updateQty(dish.name, +1)">+</button>
      </div>

      <div class="order">
        <button @click="removeOrder(dish.name)">Remove</button>
      </div>
    </div>
  </div>
</template>
