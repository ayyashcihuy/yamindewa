<template>
  <div>
    <Navbar />
    <div class="container">
      <div class="row mt-4">
        <div class="col">
          <h2>Daftar <strong>Menu</strong></h2>
        </div>
      </div>

      <div class="row mt-3">
        <div class="col">
          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1"
              ><b-icon icon="search"></b-icon
            ></span>
            <input
              v-model="search"
              type="text"
              class="form-control"
              placeholder="Search for Menu"
              aria-label="Username"
              aria-describedby="basic-addon1"
              @keyup="searchFood"
            />
          </div>
        </div>
      </div>

      <div class="row mb-3">
        <div
          class="col-md-4 mt-4"
          v-for="product in products"
          :key="product.id"
        >
          <CardProduct :product="product" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import CardProduct from "@/components/CardProduct";
import axios from "axios";

export default {
  name: "Food",
  components: {
    Navbar,
    CardProduct,
  },
  data() {
    return {
      products: [],
      search: "",
    };
  },
  methods: {
    setProducts(data) {
      this.products = data;
    },
    searchFood() {
      axios
        .get("http://localhost:4000?nama_item=" + this.search)
        .then(({ data }) => {
          this.setProducts(data);
        })
        .catch((errors) => {
          console.log(errors);
        });
    },
  },
  mounted() {
    axios
      .get("http://localhost:4000")
      .then(({ data }) => {
        this.setProducts(data);
      })
      .catch((errors) => {
        console.log(errors);
      });
  },
};
</script>

<style></style>
