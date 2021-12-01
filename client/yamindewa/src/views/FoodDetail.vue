<template>
  <div class="food-detail">
    <Navbar />
    <div class="container">
      <div class="row mt-5">
        <div class="col">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <router-link to="/"> Home </router-link>
              </li>
              <li class="breadcrumb-item">
                <router-link to="/foods"> Foods </router-link>
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                Food Order
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div class="row mt-3">
        <div class="col-md-6">
          <img :src="product.barang" class="card-img-top" alt="..." />
        </div>
        <div class="col-md-6">
          <h2>
            <strong>{{ product.nama_item }}</strong>
          </h2>
          <h4 class="mt-4">
            <strong>Harga : </strong> Rp. {{ product.harga_satuan }}
          </h4>
          <form action="" class="mt-4" v-on:submit.prevent>
            <div class="form-group">
              <label for="jumlah-pesanan"
                ><strong>Jumlah Pesanan</strong>
              </label>
              <input type="number" class="form-control" v-model="pesan.qty" />
            </div>
            <div class="form-group">
              <label for="diskon"><strong>Masukan Kode Promo</strong> </label>
              <input
                type="text"
                class="form-control"
                v-model="pesan.promoCode"
              />
            </div>

            <button type="submit" class="btn btn-success" @click="pemesanan">
              <b-icon icon="cart"></b-icon> Pesan
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import axios from "axios";
import Swal from "sweetalert2";

export default {
  name: "FoodDetail",
  components: {
    Navbar,
  },
  data() {
    return {
      product: [],
      pesan: {},
    };
  },
  methods: {
    setProduct(data) {
      this.product = data;
    },
    pemesanan() {
      if (this.pesan.qty) {
        this.pesan.products = this.product;
        axios.post("http://localhost:3000/keranjangs", this.pesan).then(() => {
          Swal.fire("Pesanan anda akan kami proses");
          this.$router.push({ path: "/cart" });
        });
        axios
          .post("http://localhost:4000/sales", this.pesan)
          .then(() => {
            Swal.fire("Pesanan anda akan kami proses");
            this.$router.push({ path: "/cart" });
          })

          .catch((err) => {
            console.log(err);
          });
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Jumlah pesanan tidak boleh kosong",
        });
      }
    },
  },
  mounted() {
    axios
      .get(`http://localhost:4000/${this.$route.params.id}`)
      .then(({ data }) => {
        this.setProduct(data);
      })
      .catch((errors) => {
        console.log(errors);
      });
  },
};
</script>

<style></style>
