<template>
  <section id="sec">
    <div id="img">
      <img id="cinema" src="../image/cinema-1294496__340.webp" />
    </div>
    <div id="parentBox">
      <div
        id="box"
        v-for="dataArray in dataArray"
        :id="dataArray.id"
        @click="
          goToTwo();
          select(dataArray.id);
        "
      >
        <div
          id="poster"
          :style="{ width: wPoster + 'px', height: hPoster + 'px' }"
        >
          <img
            id="imgP"
            :style="{ width: 100 + '%', height: 100 + '%' }"
            :src="dataArray.poster"
          />
        </div>
        <div id="title">{{ dataArray.title }}</div>
      </div>
    </div>
  </section>
</template>
<script>
import axiosData from "../api/axios";
import { useRouter } from "vue-router";
import { mapMutations } from "vuex";

export default {
  created: function () {
    this.movieData();
  },

  setup() {
    const router = useRouter();
    function goToTwo() {
      router.push("/PageTwo");
    }
    return { goToTwo };
  },
  data() {
    let dataArray = [];
    let h = innerHeight;
    let w = innerWidth;
    var hPoster = (h * 120) / 1390;
    hPoster = hPoster.toFixed(1);
    var wPoster = (w * 300) / 2732;
    wPoster = wPoster.toFixed(1);

    return {
      dataArray,
      hPoster: hPoster,
      wPoster: wPoster,
    };
  },

  methods: {
    ...mapMutations(["setId"]),

    select(event) {
      this.setId(event);
    },

    movieData() {
      axiosData.data().then((response) => {
        for (var i = 0; i <= response.data.data.length; i++) {
          var poster = response.data.data[i].poster;
          var title = response.data.data[i].title;
          var id = response.data.data[i];

          this.dataArray.push({ poster: poster, title: title, id: id });
        }
      });
    },
  },
};
</script>
<style>
body {
  overflow: hidden !important;
}
#sec {
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-around;
  align-items: center;
  position: absolute;
  top: 0%;
  left: 0%;
  width: 100%;
  height: 100vh;

  background-image: url("../image/7jUFDp5dpTr0oUu0.jfif");
  background-repeat: no-repeat;
  background-size: cover;
}
#parentBox {
  width: 50%;
  height: 95%;
  overflow-y: scroll !important;
  overflow-x: hidden;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px,
    rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px,
    rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
}
#box {
  display: flex;
  flex-direction: row;
  border-bottom: 2px solid black;
  border-left: 2px solid black;

  width: 90%;
  margin-top: 2%;
  margin-left: 5%;
}
#poster {
  margin-bottom: 1%;
  margin-left: 0.5%;
  border: 2px solid #f8b192;
}
#img {
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
}
#cinema {
  width: 100%;
}
#box:hover {
  animation: zoom_ 0.3s 1;
  cursor: pointer;
}
@keyframes zoom_ {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.06);
  }
}

#box:hover #imgP {
  opacity: 0.7;
}
#title {
  display: flex;
  align-items: flex-start;
  width: 80%;
  font-family: Roboto_Slab;
  margin-left: 5%;
  color: #ff834d;
  font-size: 1vw;
}
/* width */
::-webkit-scrollbar {
  width: 0.5vw;
}

/* Track */
::-webkit-scrollbar-track {
  background: transparent;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 5px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #ff834d;
}
@media only screen and (max-width: 600px) {
  #parent2 {
    justify-content: center;
  }
}
</style>
