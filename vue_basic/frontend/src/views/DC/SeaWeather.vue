<template>
  <div class="content-wrap out-wrap">
    <div class="hdfix-wrap">
    </div>
    <div class="content scroll forecast">
      

      <div class="contentDiv" v-show="tableData.length == 0 ? false : true">
        <div class="day-forecast">
          <div class="btn-sea"><button type="button" class="btn-rad on">해상특보:발효중</button></div>
        </div>
        <ul id="CS">
            <li><strong>해상특보 발표 현황 : </strong><span v-html="oceanWarningData.tm"></span></li>
        </ul>
        <el-table :data="tableData" style="width: 100%" height="400">
          <el-table-column prop="areasText" label="해당지역" width="200"></el-table-column>
          <el-table-column prop="type" label="특보" width="80"></el-table-column>
          <el-table-column prop="level" label="수준" width="70"></el-table-column>
          <el-table-column prop="tmFc" label="발표시각" width="150"></el-table-column>
          <el-table-column prop="tmEf" label="발효시각" width="150"></el-table-column>
          <el-table-column prop="tmEd" label="해제예고" width="120"></el-table-column>
        </el-table>
      </div>
      <br/>
      <div class="map-content">
        <div id="map" style="width:100%;height:400px;"></div>
      </div>
      
      <br/>
      <!-- <div class="sea-special-report-map">
        
      </div> -->

      <!--전국지도 -->
      <div class="report-day country">
          <h3 class="title">일일예보</h3>
          <p class="txt">지도에서 지역을 선택하시면 날씨를 확인할 수 있습니다.</p>
      </div>
      <!-- 전국지도-->

    </div>
  </div>
</template>

<script>

import "@/assets/css/seaWeather.css";

export default {
  name : 'skyWeather',
  data(){
    return {
      apiData: {
        warning : '',
      },

      oceanWarningData: [],
      tableData: [],

      activeName: 'first',

      tableData: [],


      //지도
      markers: [],
			customOverlays : [],
			mountainWeatherInfo : null
    }
  },
  created(){
    this.getOceanWarning();
  },
  mounted(){
    if (window.kakao && window.kakao.maps) {
			this.initMap();
		} else {
			const script = document.createElement("script");
			/* global kakao */
			script.onload = () => kakao.maps.load(this.initMap);
			script.src ="//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=62ecb7bce08dbe473d7d27823539b761";
			document.head.appendChild(script);
		}
  },
  methods: {
    formatter(row, column) {
      return row.address;
    },
    handleClick(tab, event) {
      console.log(tab, event);
    },
    async getSeaWeatherData(){
      let rst = await this.$MNetSend({
        url: 'pushwidgetapi/wnuri-fct2021/api/wnuri-sfct/today/short-term.do?topArea=12A10000&midArea=12A10100&btmArea=12A10100',
        //url: 'pushwidgetapi/wnuri-fct2021/api/wnuri-sfct/today/short-term.do',
      });

      console.log(rst);

      //this.apiData = rst;
      //this.tableData = rst.warningNow.items;

      //console.log(this.tableData);
    },


    async getOceanWarning(){
      let rst = await this.$MNetSend({
        url: 'pushwidgetapi/wnuri-fct2021/api/wnuri-sfct/today/warning-now.do'
      });

      console.log(rst);

      this.oceanWarningData = rst.warningNow;
      this.tableData = this.oceanWarningData.items;

      this.getSeaWeatherData();
    },

    initMap() {
			const container = document.getElementById("map");
			const options = {
				center: new kakao.maps.LatLng(33.450701, 126.570667),
				level: 5
			};
			
			//지도 객체를 등록합니다.
			//지도 객체는 반응형 관리 대상이 아니므로 initMap에서 선언합니다.
			this.map = new kakao.maps.Map(container, options);
			this.map.addOverlayMapTypeId(kakao.maps.MapTypeId.TERRAIN);
			console.log(this.selectCityData);

			// this.displayMarker(this.selectCityData);
		},
  }
}
</script>

<style>
.map-content{
  padding : 10px;
}

.el-tabs__nav{
  width: 100%;
  padding-top: 0.5rem;
}

.el-tabs__item{
  width: 50%;
  text-align: center;
  padding : 0;
}

.contentDiv{
  padding-top: 2rem;
  
}

#CS>li>span{
  font-size: 0.9rem;
}

</style>