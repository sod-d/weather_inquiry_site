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
            const mapMarkers = [
            { position: new kakao.maps.LatLng( 37.57, 126.97) },    // 서울
            { position: new kakao.maps.LatLng( 37.48, 126.62) },    // 인천
            { position: new kakao.maps.LatLng( 37.97, 124.63) },    // 백령도
            { position: new kakao.maps.LatLng( 37.90, 127.74) },    // 춘천
            { position: new kakao.maps.LatLng( 37.75, 128.89) },    // 강릉
            { position: new kakao.maps.LatLng( 37.48, 130.90) },    // 울릉도
            { position: new kakao.maps.LatLng( 37.27, 126.99) },    // 수원
            { position: new kakao.maps.LatLng( 36.64, 127.44) },    // 청주
            { position: new kakao.maps.LatLng( 36.37, 127.37) },    // 대전
            // { position: new kakao.maps.LatLng( , ) },    // 
            // { position: new kakao.maps.LatLng( , ) },    // 
            // { position: new kakao.maps.LatLng( , ) },    // 
            // { position: new kakao.maps.LatLng( , ) },    // 
            // { position: new kakao.maps.LatLng( , ) },    // 
            // { position: new kakao.maps.LatLng( , ) },    // 
            // { position: new kakao.maps.LatLng( , ) },    // 
        ];
            const staticMapOption = {
                center: new kakao.maps.LatLng(36.3504119, 127.3845475), // 이미지 지도의 중심좌표
                level: 14, // 이미지 지도의 확대 레벨
                marker: mapMarkers // 이미지 지도에 표시할 마커 
            }
            this.map = new kakao.maps.StaticMap(staticMapContainer, staticMapOption);  // 이미지 지도를 생성


        },
        setMarkers() {
            var imageSrc = '../../assets/img/btn-marker-weather.png', // 마커이미지의 주소입니다    
                imageSize = new kakao.maps.Size(64, 69), // 마커이미지의 크기입니다
                imageOption = {offset: new kakao.maps.Point(27, 69)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
                
            // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
            var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption),
                markerPosition = new kakao.maps.LatLng(37.54699, 127.09598); // 마커가 표시될 위치입니다

            // 마커를 생성합니다
            var marker = new kakao.maps.Marker({
                position: markerPosition, 
                image: markerImage // 마커이미지 설정 
            });

            marker.setMap(this.map);
        },
        getMarkerData() {

        },
        getWeatherList() {
            
        }
    }
};
</script>

<style scoped>
</style>