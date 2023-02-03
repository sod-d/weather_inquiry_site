<template>
  <div>
    <div class="block">
      <span class="demonstration">Default</span>
      <el-date-picker v-model="value1" type="date" placeholder="Pick a day"></el-date-picker>
    </div>

    <div class="block">
      <span class="demonstration">Picker with quick options</span>
      <el-date-picker v-model="value2" type="date" placeholder="Pick a day" :picker-options="pickerOptions"></el-date-picker>
    </div>


    <button @click="apiTest()">API 테스트</button>
    <button @click="getTest()">get 테스트</button>
    <button @click="naverAPI()">naver API</button>

  </div>
   
</template>

<script>

import axios from 'axios';

export default {
  name: "Login",
  data() {
    return {
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
        shortcuts: [
          {
            text: 'Today',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          },
          {
            text: 'Yesterday',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          },
          {
          text: 'A week ago',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }
        ]
      },
      value1: '',
      value2: '',
    };
  },
  computed: {
   
  },
  watch:{

  },
  methods: {
    pick(date){
      console.log(date);
    },
    async getTest(){
      axios.get('https://pushappintro.kma.go.kr/pushwidgetapi/wnuri-fct2021/api/main/current-weather-array.do?code=1168058000,1162069500&unit=m/s')
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      })
    },
    async apiTest(){
      axios.get(
        "pushwidgetapi/wnuri-fct2021/api/main/current-weather-array.do?code=1168058000,1162069500&unit=m/s"
      ).then((result) => {
        console.log(result);
      }).catch((error) => {
        console.log(error);
      });
    },

    async naverAPI(){
      axios.create({
        timeout: 5000,
        headers: {
            // 헤더 세팅
            "X-Naver-Client-Id": "GlaGYwsP6sOQdEvfdTEi",
            "X-Naver-Client-Secret": "BFfJfKfhlW",
        },
        proxy: {
            "/v1": {
                target: "https://openapi.naver.com",
            },
        },
      })
      .get("/v1/search/movie.json?query='해리포터'")
      .then((result) => {
          console.log(result.data);
      })
      .catch((error) => {
          console.log(error);
      });
    }
  },
  mounted() {
    console.log("A");
  },
};
</script>

<style>
 
</style>
