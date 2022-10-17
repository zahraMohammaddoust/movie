<template>
  <div id="PageTwo">
    <div id="backParent">
      <img
        :style="{ width: wBack + 'px', height: hBack + 'px' }"
        id="back"
    
        src="../image/back.png"
      />
      
      <img  :style="{ width: wBack + 'px', height: hBack + 'px' }"
        class="backH"
          @click="goToOne" src="../image/backO.png"/>
    </div>

    <div
      style="
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        align-content: center;
        flex-direction: column;
      "
      v-for="dataArray2 in dataArray2"
    >
      <section id="parent">
  
        <img
          :style="{ width: wimage + 'px', height: himage + 'px' }"
          id="image"
          :src="dataArray2.images[0]"
        />
        <img
          :style="{ width: wimage + 'px', height: himage + 'px' }"
          id="image"
          :src="dataArray2.images[1]"
        />
        <img
          :style="{ width: wimage + 'px', height: himage + 'px' }"
          id="image"
          :src="dataArray2.images[2]"
        />

      </section>
      <section id="parent2">

          <div id="dataName">country : {{ dataArray2.country }}</div>

      
          <div id="dataName">actors : {{ dataArray2.actors }}</div>
      
          <div id="dataName">awards : {{ dataArray2.awards }}</div>
     
          <div id="dataName">director : {{ dataArray2.director }}</div>
     
     <div id="dataName">
       <div >genres : {{ dataArray2.genres[0] }},</div>
          <div >{{ dataArray2.genres[1] }}</div>
     </div>
         
        
   
          <div id="dataName">imdb_rating : {{ dataArray2.imdb_rating }}</div>
      
   
          <div id="dataName">plot : {{ dataArray2.plot }}</div>
     
      
          <div id="dataName">released : {{ dataArray2.released }}</div>
       
          <div id="dataName">runtime : {{ dataArray2.runtime }}</div>
       
          <div id="dataName">writer : {{ dataArray2.writer }}</div>
   
      </section>
    </div>
  </div>
</template>
<script>
import axiosData2 from "../api/axios";
import { mapGetters } from "vuex";
import { useRouter } from "vue-router";
export default {
  created: function () {
    this.movieDataPage2();
  },
  data() {
    let dataArray2 = [];
    let h = innerHeight;
    let w = innerWidth;
    var himage = (h * 150) / 1390;
    himage = himage.toFixed(1);
    var wimage = (w * 350) / 2732;
    wimage = wimage.toFixed(1);

    var hBack = (h * 100) / 1390;
    hBack = hBack.toFixed(1);
    var wBack = (w * 150) / 2732;
    wBack = wBack.toFixed(1);
    return {
      dataArray2,
      himage,
      wimage,
      hBack,
      wBack,
    };
  },
  setup() {
    const router = useRouter();
    function goToOne() {
      router.push("/");
    }
    return { goToOne };
  },
  methods: {
    ...mapGetters(["id"]),
    movieDataPage2() {
      axiosData2.dataPage2(this.id()).then((response) => {
        var img = response.data.images;
        for (var i = 0; i < img.length; i++) {
          var country = response.data.country;
          var images = response.data.images;
          var actors = response.data.actors;
          var awards = response.data.awards;
          var director = response.data.director;
          var genres = response.data.genres;
          var imdb_rating = response.data.imdb_rating;
          var plot = response.data.plot;
          var released = response.data.released;
          var runtime = response.data.runtime;
          var writer = response.data.writer;
       
        }
        this.dataArray2.push({
          country: country,
          images: images,
          actors: actors,
          awards: awards,
          director: director,
          genres: genres,
          imdb_rating: imdb_rating,
          plot: plot,
          released: released,
          runtime: runtime,
          writer: writer,
        });
      });
    },
  },
};
</script>
<style>
#PageTwo {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  align-content: center;
   background-image: url("../image/7jUFDp5dpTr0oUu0.jfif");
  background-repeat: no-repeat;
  background-size: cover;
   position: absolute;
  top: 0%;
  left: 0%;
  width: 100%;
  height: 100vh;
}
.backH:hover {
  cursor: pointer;
}
#parent {
  width: 80%;
  height: 20vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-content: center;
 
  background-image: url(../image/white-gold-geometric-pattern-background-vector_53876-140726.webp);
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px,
    rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px,
    rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
}

#image {
  border: 2px solid #f8b192;
  margin: 5%;
}
#parent2 {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  height: 60vh;
  margin-top: 2%;
   margin-bottom: 2%;
  overflow-y: scroll;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px,
    rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px,
    rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
}


#dataName {
  font-family: Roboto_Slab;
  font-size: 1.5vw;
  text-align: left;
    width: 90%;
  align-items: center;
  padding: 2%;
  border-bottom: 2px solid #f8b192;
  margin-bottom: 2%;
}
.backH{
  display: none;
}
#backParent:hover .backH{
  display: block;
}
#back,.backH{
      position: absolute;
  top: 50%;
    left: 2%;
}
</style>
