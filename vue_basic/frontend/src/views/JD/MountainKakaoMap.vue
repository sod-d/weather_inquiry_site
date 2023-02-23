<template>
	<div id="map"></div>
</template>

<script>
export default {
	name: 'MountainKakaoMap',
	data(){
		return {
			markers: [],
			customOverlays : [],
			mountainWeatherInfo : null
		}
	},
	props: {
		selectCityData : {
			type : Object,
			deep : true
		}
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

	methods : {
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

			this.displayMarker(this.selectCityData);
		},
		changeSize(size) {
			const container = document.getElementById("map");
			container.style.width = `${size}px`;
			container.style.height = `${size}px`;
			this.map.relayout();
		},

		displayMarker(cityInfo) {
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

			const markerImage = new kakao.maps.MarkerImage(require("@/assets/img/mountain/ico_mountain.png"), new kakao.maps.Size(25,16));
			
				
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

		async getMountainWeatherInfo(mtId){
			let result = await this.$MNetSend({
				url : 'pushwidgetapi/wnuri-fct2021/api/theme/mountain-weather.do?groupId=' + this.selectGroupId + '&mtId=' + mtId
			})
			console.log(result);

			this.$emit('selectMarker', result);
		},
	},
	watch : {
		selectCityData(){
			this.displayMarker(this.selectCityData);
		}
	}
}
</script>

<style>
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
</style>