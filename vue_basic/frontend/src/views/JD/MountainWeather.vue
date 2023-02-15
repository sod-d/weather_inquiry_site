<template>
  <div>
	<el-menu :default-active="tabActiveIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
		<el-menu-item index="0">서울/경기도</el-menu-item>
		<el-menu-item index="1">강원도</el-menu-item>
		<el-menu-item index="2">충청남북도</el-menu-item>
		<el-menu-item index="3">전라남북도</el-menu-item>
		<el-menu-item index="4">경상남북도</el-menu-item>
		<el-menu-item index="5">제주특별자치도</el-menu-item>
	</el-menu>
	<div id="map"></div>
	<!--<div class="button-group">
		<button @click="changeSize(0)">Hide</button>
		<button @click="changeSize(400)">show</button>
		<button @click="displayMarker(city01)">서울/경기도</button>
		<button @click="displayMarker(city02)">강원도</button>
		<button @click="displayMarker(city03)">충청남북도</button>
		<button @click="displayMarker(city04)">전라남북도</button>
		<button @click="displayMarker(city05)">경상남북도</button>
		<button @click="displayMarker(city06)">제주특별자치도</button>
		<button @click="displayMarker([])">초기화</button>
		<button @click="displayInfoWindow">infowindow</button>
	</div>-->
	<!-- <div v-if="fetchedMountainWeatherInfo.forecast.dailyItems">
		<el-table :data="fetchedMountainWeatherInfo.forecast.dailyItems" style="width: 100%;" size="small" border>
			<el-table-column prop="date" label="날짜" width="180"></el-table-column>
			<el-table-column prop="time" label="시간" width="180" v-for="(items, index) in fetchedMountainWeatherInfo.forecast.dailyItems" :key="index"></el-table-column>
			<el-table-column prop="items[0].chillTemp" label="Address"></el-table-column>
		</el-table>
	</div> -->

	<div>
		<el-collapse v-model="detailActiveNm" @change="toggleDetailData" v-if="mountainWeatherInfo.forecast.dailyItems" accordion>
			<el-collapse-item :title="`${dailyItem.dateLabel}(${dailyItem.date})`" :name="`${index}`"  v-for="(dailyItem,index) in mountainWeatherInfo.forecast.dailyItems" :key="index">
				<div v-for="(item, index2) in dailyItem.items" :key="index2" style="padding:5px">
					<el-descriptions :title="`${ item.time }`" border>
						<el-descriptions-item label="온도">{{ item.tempValue }}°C</el-descriptions-item>
						<el-descriptions-item label="체감온도">{{ item.chillTemp }}°C</el-descriptions-item>
					</el-descriptions>
				</div>
			</el-collapse-item>
			
		</el-collapse>
	</div>
	

	
  </div>
  
</template>

<script>
import {mapGetters} from 'vuex'
export default {
	name: "KakaoMapMountain",
	data() {
		return {
			cityData : [
				// 서울/경기도 (109)
				{
					groupId : 109,
					markerPositions : [
						{mtId : "11B012P0", position : [37.611603, 126.434827], mtName:"마니산"},		// 마니산
						{mtId : "11B008P0", position : [37.9426296, 127.0878091], mtName:"소요산"},		// 소요산
						{mtId : "11B007P0", position : [37.7004635, 127.0156843], mtName:"도봉산"},		// 도봉산
						{mtId : "11B001P0", position : [37.660833, 126.993333], mtName:"북한산"},		// 북한산
						{mtId : "11B011P0", position : [37.4141657, 127.0415787], mtName:"청계산"},		// 청계산
						{mtId : "11B004P0", position : [37.3661968, 126.9027047], mtName:"수리산"},		// 수리산
						{mtId : "11B006P0", position : [37.9416667, 127.4319444], mtName:"명지산"},		// 명지산
						{mtId : "11B002P0", position : [37.8986966, 127.4186114], mtName:"연인산"},		// 연인산
						{mtId : "11B009P0", position : [37.878003, 127.3248989], mtName:"운악산"},		// 운악산
						{mtId : "11B005P0", position : [37.680556, 127.272778], mtName:"천마산"},		// 천마산
						{mtId : "11B010P0", position : [37.5622124, 127.5518582], mtName:"용문산"},		// 용문산
						{mtId : "11B003P0", position : [37.4791402, 127.1810033], mtName:"남한산성"},	// 남한산성
					]
				},
				// 강원도 (105)
				{
					groupId : 105,
					markerPositions : [
						{mtId : "11D006P0", position : [38.1153924, 127.4307982], mtName : "광덕산"},		//광덕산
						{mtId : "11D007P0", position : [37.8399027, 127.6603117], mtName : "삼악산"},		//삼악산
						{mtId : "11D008P0", position : [37.702778, 127.753889], mtName : "팔봉산"},			//팔봉산
						{mtId : "11D001P0", position : [38.1195504, 128.4655581], mtName : "설악산"},		//설악산
						{mtId : "11D002P0", position : [37.7981467, 128.5430327], mtName : "오대산"},		//오대산
						{mtId : "11D005P0", position : [37.739, 128.209], mtName : "아미산"},				//아미산
						{mtId : "11D009P0", position : [37.601999, 128.2856192], mtName : "태기산"},		//태기산
						{mtId : "11D010P0", position : [37.4621325, 128.5632632], mtName : "가리왕산"},		//가리왕산
						{mtId : "11D011P0", position : [37.4102778, 128.5080556], mtName : "청옥산"},		//청옥산
						{mtId : "11D012P0", position : [37.26, 129.1], mtName : "두타산"},					//두타산
						{mtId : "11D004P0", position : [37.0957392, 128.9152404], mtName : "태백산"},		//태백산
						{mtId : "11D003P0", position : [37.3716893, 128.0505099], mtName : "치악산"},		//치악산
					]
				},
				// 충청남북도 (133)
				{
					groupId : 133,
					markerPositions : [
						{mtId : "11C005P0", position : [36.693892, 127.034266], mtName : "광덕산"},			//광덕산
						{mtId : "11C004P0", position : [36.4133678, 126.884288], mtName : "칠갑산"},		//칠갑산
						{mtId : "11C001P0", position : [36.3425, 127.2058333], mtName : "계룡산"},			//계룡산
						{mtId : "11C006P0", position : [36.0400409, 127.8490946], mtName : "민주지산"},		//민주지산
						{mtId : "11H003P0", position : [36.9517199, 128.446123], mtName : "소백산"},		//소백산
						{mtId : "11C003P0", position : [36.8893041, 128.0909644], mtName : "월악산"},		//월악산
						{mtId : "11C002P0", position : [36.533333, 127.9], mtName : "속리산"},				//속리산
					]
				},
				// 전라남북도 (156)
				{
					groupId : 156,
					markerPositions : [
						{mtId : "11F005P0", position : [36.1200497, 127.3233093], mtName : "대둔산"},			//대둔산
						{mtId : "11F007P0", position : [35.729759, 127.0843701], mtName : "모악산"},			//모악산
						{mtId : "11F003P0", position : [35.4797022, 126.8879786], mtName : "내장산"},			//내장산
						{mtId : "11F008P0", position : [35.508056, 126.571111], mtName : "선운산"},				//선운산
						{mtId : "11F019P0", position : [35.134134, 126.9887555], mtName : "무등산"},			//무등산
						{mtId : "11F001P0", position : [34.7743388, 126.7104573], mtName : "월출산"},			//월출산
						{mtId : "11F018P0", position : [34.4753006, 126.3214988], mtName : "첨찰산"},			//첨찰산
						{mtId : "11F014P0", position : [35.6299465, 127.5959075], mtName : "장안산"},			//장안산
						{mtId : "11F006P0", position : [35.7621774, 127.404811], mtName : "마이산"},			//마이산
						{mtId : "11F004P0", position : [35.860556, 127.746389], mtName : "덕유산"},				//덕유산
						{mtId : "11F011P0", position : [34.6182027, 127.4341153], mtName : "팔영산"},			//팔영산
						{mtId : "11F012P0", position : [34.5323431, 126.9159716], mtName : "천관산"},			//천관산
						{mtId : "11F013P0", position : [34.4792889, 126.6193897], mtName : "두륜산"},			//두륜산
						{mtId : "11F016P0", position : [35.3654778, 127.5830267], mtName : "지리산(뱀사골)"},	  //지리산(뱀사골)
						{mtId : "11F002P0", position : [35.2938188, 127.5313668], mtName : "지리산(노고단)"},	  //지리산(노고단)
						{mtId : "11F015P0", position : [35.404167, 127.048889], mtName : "강천산"},				//강천산
						{mtId : "11F017P0", position : [35.107222, 127.621944], mtName : "백운산"},				//백운산
						{mtId : "11F010P0", position : [35.0025, 127.313611], mtName : "조계산"},				//조계산
					]
				},
				// 경상남북도 (159)
				{
					groupId : 159,
					markerPositions : [
						{mtId : "11H021P0", position : [37.5032571, 130.8661528], mtName : "성인봉"},  		//성인봉
						{mtId : "11H003P0", position : [36.9390835, 128.4991183], mtName : "소백산"},  		//소백산
						{mtId : "11H007P0", position : [36.7590374, 128.0729759], mtName : "문경새재"}, 	 //문경새재
						{mtId : "11H006P0", position : [36.7964974, 128.9083889], mtName : "청량산"},  		//청량산
						{mtId : "11H022P0", position : [36.7173755, 129.2982153], mtName : "백암산"},  		//백암산
						{mtId : "11H001P0", position : [36.3882181, 129.1665986], mtName : "주왕산"}, 		//주왕산
						{mtId : "11H008P0", position : [36.0884878, 128.3053], mtName : "금오산"},  		//금오산
						{mtId : "11H027P0", position : [35.1944152, 129.1446902], mtName : "장산"},  		//장산
						{mtId : "11H026P0", position : [35.2110687, 128.5357745], mtName : "무학산"},  		//무학산
						{mtId : "11H019P0", position : [36.7201311, 128.1427698], mtName : "봉명산"}, 		 //봉명산
						{mtId : "11H010P0", position : [35.0733579, 128.2653035], mtName : "연화산"},  //연화산
						{mtId : "11H020P0", position : [34.7908998, 127.905485], mtName : "호구산"},  //호구산
						{mtId : "11H028P0", position : [35.2830419, 129.0554739], mtName : "금정산"},  //금정산
						{mtId : "11H024P0", position : [35.4167178, 128.9061508], mtName : "천태산"},  //천태산
						{mtId : "11H012P0", position : [35.539956, 129.0561611], mtName : "신불산"},  //신불산
						{mtId : "11H005P0", position : [35.621111, 129.003056], mtName : "가지산"},  //가지산
						{mtId : "11H009P0", position : [36.016944, 128.695], mtName : "팔공산"},  //팔공산
						{mtId : "11H023P0", position : [35.756667, 129.373611], mtName : "토함산"},  //토함산
						{mtId : "11H013P0", position : [35.676389, 129.034167], mtName : "운문산"},  //운문산
						{mtId : "11H004P0", position : [35.8220996, 128.1179362], mtName : "가야산"},  //가야산
						{mtId : "11H015P0", position : [35.7097181, 127.7850818], mtName : "기백산"},  //기백산
						{mtId : "11H011P0", position : [35.7155556, 128.5233333], mtName : "비슬산"},  //비슬산
						{mtId : "11H014P0", position : [35.5372222, 128.5605556], mtName : "화왕산"},  //화왕산
						{mtId : "11H016P0", position : [35.4958333, 127.9744444], mtName : "황매산"},  //황매산
						{mtId : "11H025P0", position : [35.3750108, 127.9399372], mtName : "대성산"},  //대성산
						{mtId : "11H002P0", position : [35.3369444, 127.7305555], mtName : "지리산"},  //지리산
						{mtId : "11H018P0", position : [35.2533333, 128.2930556], mtName : "방어산"},  //방어산
						{mtId : "11H017P0", position : [35.364011, 127.8772768], mtName : "웅석봉"},  //웅석봉
					]
				},
				// 제주특별자치도 (184)
				{
					groupId : 184,
					markerPositions : [
						{mtId : "11G001P0", position : [33.3616666, 126.5291666], mtName : "한라산"},  //한라산
					]
				}
			],
			markers: [],
			infowindow: null,
			selectGroupId : null,
			tabActiveIndex : '0',
			detailActiveNm : '0',
			customOverlays : [],
			mountainWeatherInfo : {
				forecast : {
					dailyItems : null
				}
			}
		};
	},
	mounted() {
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

			this.displayMarker(this.cityData[this.tabActiveIndex]);
		},
		changeSize(size) {
			const container = document.getElementById("map");
			container.style.width = `${size}px`;
			container.style.height = `${size}px`;
			this.map.relayout();
		},

		displayMarker(cityInfo) {
			console.log(cityInfo);
			if (this.markers.length > 0) {
				this.markers.forEach((marker) => marker.setMap(null));
			}

			if(this.customOverlays.length > 0){
				this.customOverlays.forEach((overlay) => overlay.setMap(null));
			}
			

			// if(cityInfo.markerPositions.length > 0){}
			const positions = cityInfo.markerPositions.map((position) => {
				let returnObj = new kakao.maps.LatLng(...position.position);
				returnObj.mtId = position.mtId;
				returnObj.mtName = position.mtName;
				return returnObj;
			});

			const markerImage = new kakao.maps.MarkerImage(require("@/assets/img/ico_mountain.png"), new kakao.maps.Size(25,16));
			
				
			if (positions.length > 0) {
				this.markers = positions.map((position) =>{
					
					const marker = new kakao.maps.Marker({
						map: this.map,
						position,
						image : markerImage,
					});

					const content = document.createElement('div');
					content.style.cssText = "background-color:white;color:blue;border-radius:4px;"
					content.innerText = position.mtName;
					content.onclick = () =>{
						this.getMountainWeatherInfo(position.mtId);
					};

					const customOverlay = new kakao.maps.CustomOverlay({
						position,
						yAnchor:2,
						zIndex:1,
						content : content
					});
					console.log(customOverlay);
					this.customOverlays.push(customOverlay);
					customOverlay.setMap(this.map);

					kakao.maps.event.addListener(marker, "click", ()=>{
						// console.log(marker);
						console.log(position.mtId);

						this.getMountainWeatherInfo(position.mtId);
					});

					return marker;
				});
				
				const bounds = positions.reduce(
					(bounds, latlng) => bounds.extend(latlng),
					new kakao.maps.LatLngBounds()
				);
				this.map.setBounds(bounds);
			}

			this.selectGroupId = cityInfo.groupId;
		},
		
		displayInfoWindow() {
			if (this.infowindow && this.infowindow.getMap()) {
				//이미 생성한 인포윈도우가 있기 때문에 지도 중심좌표를 인포윈도우 좌표로 이동시킨다.
				this.map.setCenter(this.infowindow.getPosition());
				return;
			}
			
			var iwContent = '<div style="padding:5px;">Hello World!</div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
			iwPosition = new kakao.maps.LatLng(33.450701, 126.570667), //인포윈도우 표시 위치입니다
			iwRemoveable = true; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다
			
			this.infowindow = new kakao.maps.InfoWindow({
				map: this.map, // 인포윈도우가 표시될 지도
				position: iwPosition,
				content: iwContent,
				removable: iwRemoveable,
			});
			this.map.setCenter(iwPosition);
		},

		async getMountainWeatherInfo(mtId){
			let result = await this.$MNetSend({
				url : 'pushwidgetapi/wnuri-fct2021/api/theme/mountain-weather.do?groupId=' + this.selectGroupId + '&mtId=' + mtId
			})
			console.log(result);

			this.mountainWeatherInfo = result;
		},

		alertOpen(){
			console.log();
			this.$alert('This is a message', this.mountainWeatherInfo.mtName, {
				confirmButtonText: '확인',
				// callback: action => {
				// 	this.$message({
				// 		type: 'info',
				// 		message: `action: ${ action }`
				// 	});
				// }
			});
		},
		handleSelect(key){
			this.displayMarker(this.cityData[key]);
		},
		toggleDetailData(val){
			console.log(val);
			window.scrollTo(0,0);
		},
		overlayClick(){
			console.log(this);
		}
	},
	computed : {
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#map {
  width: 100%;
  height: 400px;
}

.button-group {
  margin: 10px 0px;
}

button {
  margin: 0 3px;
}
.el-collapse-item__header{
	font-size: 20px !important;
}
</style>
