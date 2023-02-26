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
        weatherData : {
            type : Array
        },
        cateIndex : {
            type : Number
        },
        tabIndex : {
            type : Number
        },
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


        console.log("data list : ", this.weatherData);

        
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
                { 
                    latlng: new kakao.maps.LatLng( 37.57, 126.97),
                    name : "서울"
                },
                { 
                    latlng: new kakao.maps.LatLng( 37.48, 126.62),
                    name : "인천"
                },
                { 
                    latlng: new kakao.maps.LatLng( 37.97, 124.63),
                    name : "백령도"
                },
                { 
                    latlng: new kakao.maps.LatLng( 37.90, 127.74),
                    name : "춘천"
                },
                { 
                    latlng: new kakao.maps.LatLng( 37.75, 128.89),
                    name : "울릉도"
                },
                { 
                    latlng: new kakao.maps.LatLng( 36.64, 127.44),
                    name : "수원"
                },
                { 
                    latlng: new kakao.maps.LatLng( 36.37, 127.37),
                    name : "청주"
                },
                { 
                    latlng: new kakao.maps.LatLng( 37.75, 128.88),
                    name : "강릉"
                },
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

            console.log("tabIndex     : ",this.tabIndex);
            console.log("cateIndex     : ",this.cateIndex);

            if(this.tabIndex == 0){
                this.getYesterdayWeather();
            }else if(this.tabIndex == 1){
                this.getCurrentWeather();
            }else if(this.tabIndex == 2){
                this.getForecastWeather();
            }

            // this.setOverlay();
        },
        // setOverlay () {
            
        // },
        getCurrentWeather(){
            let contHtml = "";  // 커스텀 오버레이에 표시할 내용 (HTML 문자열 또는 Dom Element)
            if(this.cateIndex == 0){
                for(var i=0; i< this.weatherData.length; i++){
                    var _obj = this.markerPosition.find(x => x.name == this.weatherData[i].stnName);
                    if(_obj != undefined){  
                        console.log("있어영!!! ", JSON.stringify(this.weatherData[i]));
                        contHtml = `<div class ="label">
                                    <span class="left"></span>
                                    <div style='background-image:url("${require("@/assets/img/btn-marker-weather.png")}");background-size:55px auto;width:55px;height:55px;padding-top:4px;background-repeat:no-repeat;position:relative;text-align:center;'>
                                        <span style="font-size:7px;position:fixed;margin-left:-10px;">${this.weatherData[i].stnName}</span>
                                        <img src="${require("@/assets/img/main/ic-nb"+ this.weatherData[i].icon +".png")}" style="width:22px;height:22px;position:fixed;padding-top:14px;margin-left:-10px;">
                                        <span style="font-size:7px;color:red;position:fixed;padding-top:35px;margin-left:-10px;">${this.weatherData[i].ta }도</span>
                                    </div>
                                    <span class="right"></span>
                                </div>`;
                        // 커스텀 오버레이를 생성
                        var customOverlay = new kakao.maps.CustomOverlay({
                            map: this.map, // 마커를 표시할 지도
                            position: _obj.latlng, // 마커를 표시할 위치
                            content : contHtml, // 마커 이미지 
                        });
                    }
                }
            }else if(this.cateIndex == 1){
                for(var i=0; i< this.weatherData.length; i++){
                    var _obj = this.markerPosition.find(x => x.name == this.weatherData[i].stnName);
                    if(_obj != undefined){  
                        console.log("있어영!!! ", JSON.stringify(this.weatherData[i]));
                        contHtml = `<div class ="label">
                                    <span class="left"></span>
                                    <div style='background-image:url("${require("@/assets/img/btn-marker-weather.png")}");background-size:55px auto;width:55px;height:55px;padding-top:4px;background-repeat:no-repeat;position:relative;text-align:center;'>
                                        <span style="font-size:7px;position:fixed;margin-left:-10px;">${this.weatherData[i].stnName}</span>
                                        <span style="font-size:7px;color:blue;position:fixed;padding-top:30px;margin-left:-7px;">${this.weatherData[i].rnDay}</span>
                                    </div>
                                    <span class="right"></span>
                                </div>`;
                        // 커스텀 오버레이를 생성
                        var customOverlay = new kakao.maps.CustomOverlay({
                            map: this.map, // 마커를 표시할 지도
                            position: _obj.latlng, // 마커를 표시할 위치
                            content : contHtml, // 마커 이미지 
                        });
                    }
                }
            }else if(this.cateIndex == 2){
                for(var i=0; i< this.weatherData.length; i++){
                    var _obj = this.markerPosition.find(x => x.name == this.weatherData[i].stnName);
                    if(_obj != undefined){  
                        console.log("있어영!!! ", JSON.stringify(this.weatherData[i]));
                        contHtml = `<div class ="label">
                                    <span class="left"></span>
                                    <div style='background-image:url("${require("@/assets/img/btn-marker-weather.png")}");background-size:55px auto;width:55px;height:55px;padding-top:4px;background-repeat:no-repeat;position:relative;text-align:center;'>
                                        <span style="font-size:7px;position:fixed;margin-left:-10px;">${this.weatherData[i].stnName}</span>
                                        <span class="wdic ${this.weatherData[i].wd}" title=""></span>
                                        <span style="font-size:7px;color:red;position:fixed;padding-top:35px;margin-left:-7px;">${this.weatherData[i].ws}</span>
                                    </div>
                                    <span class="right"></span>
                                </div>`;
                        // 커스텀 오버레이를 생성
                        var customOverlay = new kakao.maps.CustomOverlay({
                            map: this.map, // 마커를 표시할 지도
                            position: _obj.latlng, // 마커를 표시할 위치
                            content : contHtml, // 마커 이미지 
                        });
                    }
                }
            }
            
            
        },
        getYesterdayWeather(){

            let contHtml = "";  // 커스텀 오버레이에 표시할 내용 (HTML 문자열 또는 Dom Element)
            if(this.cateIndex == 0){
                for(var i=0; i< this.weatherData.length; i++){
                    var _obj = this.markerPosition.find(x => x.name == this.weatherData[i].stnName);
                    if(_obj != undefined){  
                        console.log("있어영!!! ", JSON.stringify(this.weatherData[i]));
                        contHtml = `<div class ="label">
                                    <span class="left"></span>
                                    <div style='background-image:url("${require("@/assets/img/btn-marker-weather.png")}");background-size:55px auto;width:55px;height:55px;padding-top:4px;background-repeat:no-repeat;position:relative;text-align:center;'>
                                        <span style="font-size:7px;position:fixed;margin-left:-10px;">${this.weatherData[i].stnName}</span>
                                        <span style="font-size:7px;color:red;position:fixed;padding-top:15px;margin-left:-7px;">${this.weatherData[i].taMax }</span>
                                        <span style="font-size:7px;color:blue;position:fixed;padding-top:30px;margin-left:-7px;">${this.weatherData[i].taMin}</span>
                                    </div>
                                    <span class="right"></span>
                                </div>`;
                        // 커스텀 오버레이를 생성
                        var customOverlay = new kakao.maps.CustomOverlay({
                            map: this.map, // 마커를 표시할 지도
                            position: _obj.latlng, // 마커를 표시할 위치
                            content : contHtml, // 마커 이미지 
                        });
                    }
                }
            }else if(this.cateIndex == 1){
                for(var i=0; i< this.weatherData.length; i++){
                    var _obj = this.markerPosition.find(x => x.name == this.weatherData[i].stnName);
                    if(_obj != undefined){  
                        console.log("있어영!!! ", JSON.stringify(this.weatherData[i]));
                        contHtml = `<div class ="label">
                                    <span class="left"></span>
                                    <div style='background-image:url("${require("@/assets/img/btn-marker-weather.png")}");background-size:55px auto;width:55px;height:55px;padding-top:4px;background-repeat:no-repeat;position:relative;text-align:center;'>
                                        <span style="font-size:7px;position:fixed;margin-left:-10px;">${this.weatherData[i].stnName}</span>
                                        <span style="font-size:7px;color:red;position:fixed;padding-top:15px;margin-left:-6px;">${this.weatherData[i].rnDay || "-"}</span>
                                        <span style="font-size:7px;color:blue;position:fixed;padding-top:30px;margin-left:-6px;">${this.weatherData[i].sdNew}</span>
                                    </div>
                                    <span class="right"></span>
                                </div>`;
                        // 커스텀 오버레이를 생성
                        var customOverlay = new kakao.maps.CustomOverlay({
                            map: this.map, // 마커를 표시할 지도
                            position: _obj.latlng, // 마커를 표시할 위치
                            content : contHtml, // 마커 이미지 
                        });
                    }
                }
            }
        },
        getForecastWeather(){
            console.log("cateIndex     : ",this.cateIndex);
            let contHtml = "";  // 커스텀 오버레이에 표시할 내용 (HTML 문자열 또는 Dom Element)
            let forcasetList = this.weatherData[this.cateIndex].values;

            for(var i=0; i< forcasetList.length; i++){
                var _obj = this.markerPosition.find(x => x.name == forcasetList[i].regName);
                if(_obj != undefined){  
                    console.log(forcasetList[i].regName, " 날씨  >>>  ", JSON.stringify(forcasetList[i]));
                    contHtml = `<div class ="label">
                                <span class="left"></span>
                                <div style='background-image:url("${require("@/assets/img/btn-marker-weather.png")}");background-size:55px auto;width:55px;height:55px;padding-top:4px;background-repeat:no-repeat;position:relative;text-align:center;'>
                                    <span style="font-size:7px;position:fixed;margin-left:-10px;">${forcasetList[i].regName}</span>
                                    <img src="${require("@/assets/img/main/ic-"+ forcasetList[i].wfIcon.toLowerCase() +".png")}" style="width:22px;height:22px;position:fixed;padding-top:14px;margin-left:-10px;">
                                </div>
                                <span class="right"></span>
                            </div>`;
                    // 커스텀 오버레이를 생성
                    var customOverlay = new kakao.maps.CustomOverlay({
                        map: this.map, // 마커를 표시할 지도
                        position: _obj.latlng, // 마커를 표시할 위치
                        content : contHtml, // 마커 이미지 
                    });
                }
            }
        }
    }
};
</script>

<style scoped>
.marker{
    background-image: url(data:image/png;base64,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);
    background-size: 55px auto;
    width: 55px;
    height: 55px;
    padding-top: 4px;
    background-repeat: no-repeat;
    position: relative;
    text-align: center;
    /* display: flex; */
    /* flex-wrap: wrap; */
    /* margin-left: -10px;*/
}
span.wdic {
    display: inline-block;
    height: auto;
    padding: 1.2rem 0;
    font-size: 0;
    text-indent: -9999px;
    background: url(../../assets/img/ic_wd_gray.png) center center no-repeat;
    background-size: 2.4rem;
}

.wdic._ {background:url(../../assets/img/main/ic_nod_gray.png) center center no-repeat;background-size: 2.7rem;} /* 바람없음 */
.wdic.E { transform: rotate(90deg); } /* 동풍 */
.wdic.E_b { transform: rotate(90deg); } /* 북 */
.wdic.ENE { transform: rotate(45deg); } /* 북 */
.wdic.ESE { transform: rotate(135deg); } /* 북 */
.wdic.N { transform: rotate(0deg); } /* 북 */
.wdic.N_b { transform: rotate(0deg); } /* 북 */
.wdic.NE { transform: rotate(45deg);} /* 북동 */
.wdic.NNE { transform: rotate(15deg);} /* 북동 */
.wdic.NE_b { transform: rotate(45deg); } /* 북동풍 */
.wdic.NW { transform: rotate(315deg);} /* 북 */
.wdic.NNW { transform: rotate(345deg);} /* 북 */
.wdic.NW_b { transform: rotate(315deg);} /* 북 */
.wdic.S { transform: rotate(180deg);} /* 북 */
.wdic.S_b { transform: rotate(180deg);} /* 남풍 */
.wdic.SE { transform: rotate(135deg);} /* 북 */
.wdic.SSE { transform: rotate(165deg);} /* 북 */
.wdic.SE_b { transform: rotate(135deg);} /* 남동풍 */
.wdic.SSW { transform: rotate(135deg);} /* 북 */
.wdic.SW { transform: rotate(225deg);} /* 북 */
.wdic.SW_b { transform: rotate(225deg);} /* 남서풍 */
.wdic.W { transform: rotate(270deg);} /* 북 */
.wdic.W_b { transform: rotate(300deg);} /* 서풍 */
.wdic.WNW { transform: rotate(270deg);} /* 서풍 */
.wdic.WSW { transform: rotate(255deg);} /* 서풍 */
</style>