<script>
import store from '@/store';
import router from '@/router';

export default {
  data() {
    return { store };
  },
  methods: {
    payNow() {
      router.push('/track-order');
    },
  },
};
</script>

<template>
  <h1>Checkout</h1>
  <p>Complete the payment to place your order...Total: ₹{{ store.totalAmount }}</p>
  <div>
    <button @click="payNow">Pay now</button>
  </div>
  <div>
    <a href="#/">Go back to menu</a>
  </div>
</template>
