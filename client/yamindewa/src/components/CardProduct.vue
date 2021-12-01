<template>
  <div class="card shadow card-product" style="width: 18rem">
    <img :src="product.barang" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">
        <strong>{{ product.nama_item }}</strong>
      </h5>
      <p class="card-text">
        <strong>Harga : </strong> Rp. {{ product.harga_satuan }} <br /><strong
          >Stock :
        </strong>
        {{ product.stok }} {{ product.unit }}
      </p>
      <router-link class="btn btn-primary" :to="`/${product.id}`">
        <b-icon icon="cart"></b-icon> Add to Cart</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "CardProduct",
  props: ["product"],
};
</script>

<style></style>
