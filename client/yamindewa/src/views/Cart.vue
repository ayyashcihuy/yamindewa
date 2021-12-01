<template>
  <div class="cart">
    <Navbar :updateKeranjang="keranjangs" />
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
              <li class="breadcrumb-item active" aria-current="page">Cart</li>
            </ol>
          </nav>
        </div>
      </div>

      <div class="row">
        <div class="col ml-3">
          <h2><strong>Cart</strong></h2>
          <div class="table-responsive mt-4">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Foto</th>
                  <th scope="col">Makanan</th>
                  <th scope="col">Jumlah</th>
                  <th scope="col">Harga</th>
                  <th scope="col">Total Harga</th>
                  <th scope="col">Hapus</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(keranjang, index) in keranjangs"
                  :key="keranjang.id"
                >
                  <th>{{ index + 1 }}</th>
                  <td>
                    <img
                      :src="keranjang.products.barang"
                      alt="..."
                      width="250"
                    />
                  </td>
                  <td>
                    <strong>{{ keranjang.products.nama_item }}</strong>
                  </td>
                  <td>
                    <strong>{{ keranjang.qty }}</strong>
                  </td>
                  <td>
                    <strong>Rp. {{ keranjang.products.harga_satuan }}</strong>
                  </td>
                  <td align="right">
                    <strong
                      >Rp.
                      {{
                        keranjang.products.harga_satuan * keranjang.qty
                      }}</strong
                    >
                  </td>
                  <td align="center" class="text-danger">
                    <strong
                      ><b-icon
                        icon="trash"
                        @click="hapusKeranjang(keranjang.id)"
                      ></b-icon
                    ></strong>
                  </td>
                </tr>
                <tr>
                  <td colspan="5" align="right">
                    <strong>Total Harga: </strong>
                  </td>
                  <td align="right">
                    <strong>Rp. {{ totalHarga }}</strong>
                  </td>
                </tr>
              </tbody>
            </table>
            <button type="submit" class="btn btn-success" @click="checkout">
              <b-icon icon="cart"></b-icon> Checkout
            </button>
          </div>
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
  name: "Cart",
  components: {
    Navbar,
  },
  data() {
    return {
      keranjangs: [],
    };
  },
  methods: {
    setKeranjang(data) {
      this.keranjangs = data;
    },
    checkout() {
      this.keranjangs.map(function (item) {
        return axios.delete("http://localhost:3000/keranjangs/" + item.id);
      });
      Swal.fire("Pesanan anda akan kami proses");
      this.$router.push({ path: "/" });
    },
    hapusKeranjang(id) {
      axios
        .delete("http://localhost:3000/keranjangs/" + id)
        .then(() => {
          Swal.fire({
            icon: "error",
            title: "Delete",
            text: "Pesanan dihapus",
          });
          axios
            .get("http://localhost:3000/keranjangs")
            .then(({ data }) => {
              this.setKeranjang(data);
            })

            .catch((errors) => {
              console.log(errors);
            });
        })

        .catch((errors) => {
          console.log(errors);
        });
    },
  },
  mounted() {
    axios
      .get("http://localhost:3000/keranjangs")
      .then(({ data }) => {
        this.setKeranjang(data);
      })
      .catch((errors) => {
        console.log(errors);
      });
  },
  computed: {
    totalHarga() {
      return this.keranjangs.reduce(function (items, data) {
        return items + data.products.harga_satuan * data.qty;
      }, 0);
    },
  },
};
</script>

<style></style>
