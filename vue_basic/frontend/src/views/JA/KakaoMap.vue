<template>
	<div id="staticMap">
	</div>
</template>

<script>
export default {
	name: "kakaoMap",
	components: {

	},
	props: {
	},
	data() {
		return {
            map : null,
            markerPosition : [],
		};
	},
	created() {
		// 헤더 타이틀 변경

        
	},	
	watch: {
		
	},
	mounted() {
        // map 영역 크기
		const w = window.innerWidth-20;
		const h = w/4 * 5;
		document.getElementById("staticMap").style.width = w +"px";
		document.getElementById("staticMap").style.height = h +"px";

        const script = document.createElement("script");
        script.src = `//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=${process.env.VUE_APP_KAKAOMAP_KEY}`;

        script.onload = () => kakao.maps.load(this.initMap);

        document.head.appendChild(script);

	},
    methods : {
        initMap() {
            const staticMapContainer = document.getElementById("staticMap");
            
            const staticMapOption = {
                center: new kakao.maps.LatLng(36.815669, 127.7865791), // 이미지 지도의 중심좌표
                level: 13, // 이미지 지도의 확대 레벨
                // marker: mapMarkers // 이미지 지도에 표시할 마커 
            }
            this.map = new kakao.maps.Map(staticMapContainer, staticMapOption);  // 이미지 지도를 생성

            this.markerPosition = [
                { latlng: new kakao.maps.LatLng( 37.57, 126.97) },    // 서울
                { latlng: new kakao.maps.LatLng( 37.48, 126.62) },    // 인천
                { latlng: new kakao.maps.LatLng( 37.97, 124.63) },    // 백령도
                { latlng: new kakao.maps.LatLng( 37.90, 127.74) },    // 춘천
                { latlng: new kakao.maps.LatLng( 37.75, 128.89) },    // 강릉
                { latlng: new kakao.maps.LatLng( 37.48, 130.90) },    // 울릉도
                { latlng: new kakao.maps.LatLng( 37.27, 126.99) },    // 수원
                { latlng: new kakao.maps.LatLng( 36.64, 127.44) },    // 청주
                { latlng: new kakao.maps.LatLng( 36.37, 127.37) },    // 대전
                // { position: new kakao.maps.LatLng( , ) },    // 
                // { position: new kakao.maps.LatLng( , ) },    // 
                // { position: new kakao.maps.LatLng( , ) },    // 
                // { position: new kakao.maps.LatLng( , ) },    // 
                // { position: new kakao.maps.LatLng( , ) },    // 
                // { position: new kakao.maps.LatLng( , ) },    // 
                // { position: new kakao.maps.LatLng( , ) },    // 
            ];

            this.map.setDraggable(false);   // 드래그 막기
            this.map.setZoomable(false);     // 줌 막기
            this.setOverlay();
        },
        setOverlay () {
            for (var i = 0; i < this.markerPosition.length; i ++) {
                // 커스텀 오버레이에 표시할 내용 (HTML 문자열 또는 Dom Element)
                var content = `<div class ="label">
                                <span class="left"></span>
                                <div style='background-image:url("${require("@/assets/img/btn-marker-weather.png")}");background-size:45px auto;width:45px;height:45px;padding:6px 0px 0px 10px;background-repeat:no-repeat;'>
                                    <span style="font-size:8px;">서울</span>
                                    <img src="${require("@/assets/img/main/ic-nb01.png")}" style="width:25px;">
                                    <span style="font-size:8px;font-color:red;">19도</span>
                                </div>
                                <span class="right"></span>
                            </div>`;
                // 커스텀 오버레이를 생성
                var customOverlay = new kakao.maps.CustomOverlay({
                    map: this.map, // 마커를 표시할 지도
                    position: this.markerPosition[i].latlng, // 마커를 표시할 위치
                    content : content, // 마커 이미지 
                });
            }
        },
        getMarkerData() {

        },
        getWeatherList() {
            
        }
    }
};
</script>

<style scoped>
.map .marker{
    background-image:url("../../assets/img/btn-marker-weather.png");
    background-size: 40px auto;
}
</style>