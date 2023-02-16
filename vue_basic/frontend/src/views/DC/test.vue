<template>
	<div class="content-wrap">
		<div class="hdfix-wrap">
		</div>
		<div class="content scroll forecast">
			<div class="day-forecast">
				<div class="btn-sea"><button type="button" class="btn-rad on">해상특보:발효중</button></div>
			</div>

			<el-table :data="tableData" style="width: 100%" height="400">
				<el-table-column prop="type" label="해당지역" width="200"></el-table-column>
				<el-table-column prop="level" label="특보" width="80"></el-table-column>
				<el-table-column prop="areasText" label="수준" width="70"></el-table-column>
				<el-table-column prop="tmFc" label="발표시각" width="150"></el-table-column>
				<el-table-column prop="tmEf" label="발효시각" width="150"></el-table-column>
				<el-table-column prop="tmEd" label="해제예고" width="120"></el-table-column>
			</el-table>
			
			<div class="sea-special-report-map">
				<div class="cont-box03">
					<div class="img-area img-area1 on">
						<div class="img"><img src="@/assets/img/seaWeather/level01.png" alt="지도"></div>
						<div class="button-area map-tab-js">
							<span class="txt w01">서해북부</span>
							<span class="txt w02">서해중부</span>
							<span class="txt w03">서해남부</span>
							<span class="txt w04">남해서부</span>
							<span class="txt w05">제주도</span>
							<span class="txt w06">남해동부</span>
							<span class="txt w07">동해남부</span>
							<span class="txt w08">동해중부</span>
							<span class="txt w09">동해북부</span>    
							<div class="img-flid img-flid1">
								<button class="imgtab-btn" data-imgtab="map2" title="서해북부"></button>
							</div>
							<div class="img-flid img-flid2">
								<button class="imgtab-btn" data-imgtab="map3" title="서해중부"></button>
							</div>
							<div class="img-flid img-flid3">
								<button class="imgtab-btn map4" data-imgtab="map4" title="서해남부"></button>
								<div class="img-flid">
									<button class="imgtab-btn map5" data-imgtab="map5" title="남해서부"></button>
									<button class="imgtab-btn map7" data-imgtab="map7" title="제주도"></button>
								</div>
							</div>
							<div class="img-flid img-flid4">
								<button class="imgtab-btn map6" data-imgtab="map6" title="남해동부"></button>
								<button class="imgtab-btn map8" data-imgtab="map8" title="동해남부"></button>
							</div>
							<div class="img-flid img-flid5">
								<button class="imgtab-btn map9" data-imgtab="map9" title="동해중부"></button>
							</div>
							<div class="img-flid img-flid6">
								<button class="imgtab-btn map10" data-imgtab="map10" title="동해북부"></button>
							</div>
						</div>
					</div>

					<div id="map2" class="img-area img-area2">
						<div class="img"><img src="@/assets/img/seaWeather/level02_1.png" alt="서해북부 지도">
						</div>
						<button class="btn-return" title="이전으로가기"></button>
						<div class="button-area02">
							<p class="sub-txt">서해북부</p>
							<button class="circle-btn1" data-role="sea-forecast-area" data-top-code="12A10000" data-top-name="서해북부" data-mid-code="12A10100" data-mid-name="서해북부 앞바다" data-btm-code="12A10100" data-btm-name="서해북부앞바다"><span>서해북부<br>앞바다</span></button>
							<button class="circle-btn2" data-role="sea-forecast-area" data-top-code="12A10000" data-top-name="서해북부" data-mid-code="12A10200" data-mid-name="서해북부 먼바다" data-btm-code="" data-btm-name=""><span>서해북부<br>먼바다</span></button>
						</div>
						<div class="title"><span>[서해북부앞바다]</span> 날씨전망</div>
					</div>
					<div id="map3" class="img-area img-area3">
						<div class="img"><img src="@/assets/img/seaWeather/level02_2.png" alt="서해중부 지도"></div>
						<button class="btn-return" title="이전으로가기"></button>
						<div class="button-area02">
							<p class="sub-txt">서해중부</p>
							<button class="circle-btn1" data-role="sea-forecast-area" data-top-code="12A20000" data-top-name="서해중부" data-mid-code="12A20100" data-mid-name="서해중부 앞바다" data-btm-code="12A20100" data-btm-name="서해중부앞바다"><span>서해중부<br>앞바다</span></button>
							<button class="circle-btn2" data-role="sea-forecast-area" data-top-code="12A20000" data-top-name="서해중부" data-mid-code="12A20200" data-mid-name="서해중부 먼바다" data-btm-code="12A20220" data-btm-name="서해중부바깥먼바다"><span>서해중부<br>바깥먼바다</span></button>
							<button class="circle-btn3" data-role="sea-forecast-area" data-top-code="12A20000" data-top-name="서해중부" data-mid-code="12A20200" data-mid-name="서해중부 먼바다" data-btm-code="12A20210" data-btm-name="서해중부안쪽먼바다"><span>서해중부<br>안쪽먼바다</span></button>
							<button class="icon2 icon-txt-btn1" data-role="sea-forecast-area" data-top-code="12A20000" data-top-name="서해중부" data-mid-code="12A20100" data-mid-name="서해중부 앞바다" data-btm-code="12A20101" data-btm-name="인천ㆍ경기북부앞바다"><span>인천,경기 북부 앞바다</span></button>
							<button class="icon2 icon-txt-btn2" data-role="sea-forecast-area" data-top-code="12A20000" data-top-name="서해중부" data-mid-code="12A20100" data-mid-name="서해중부 앞바다" data-btm-code="12A20102" data-btm-name="인천ㆍ경기남부앞바다"><span>인천,경기 남부 앞바다</span></button>
							<button class="icon2 icon-txt-btn3" data-role="sea-forecast-area" data-top-code="12A20000" data-top-name="서해중부" data-mid-code="12A20100" data-mid-name="서해중부 앞바다" data-btm-code="12A20103" data-btm-name="충남북부앞바다"><span>충남 북부 앞바다</span></button>
							<button class="icon2 icon-txt-btn4" data-role="sea-forecast-area" data-top-code="12A20000" data-top-name="서해중부" data-mid-code="12A20100" data-mid-name="서해중부 앞바다" data-btm-code="12A20104" data-btm-name="충남남부앞바다"><span>충남 남부 앞바다</span></button>
						</div>
						<div class="title"><span>[서해중부앞바다]</span> 날씨전망</div>
					</div>
					<div id="map4" class="img-area img-area4">
						<div class="img"><img src="@/assets/img/seaWeather/level02_3.png" alt="서해남부 지도"></div>
						<button class="btn-return" title="이전으로가기"></button>
						<div class="button-area02">
							<p class="sub-txt">서해남부</p>
							<button class="circle-btn1" data-role="sea-forecast-area" data-top-code="12A30000" data-top-name="서해남부" data-mid-code="12A30200" data-mid-name="서해남부 먼바다" data-btm-code="12A30221" data-btm-name="서해남부북쪽바깥먼바다"><span>서해남부<br>북쪽바깥먼바다</span></button>
							<button class="circle-btn1-1" data-role="sea-forecast-area" data-top-code="12A30000" data-top-name="서해남부" data-mid-code="12A30200" data-mid-name="서해남부 먼바다" data-btm-code="12A30211" data-btm-name="서해남부북쪽안쪽먼바다"><span>서해남부<br>북쪽안쪽먼바다</span></button>
							<button class="circle-btn2" data-role="sea-forecast-area" data-top-code="12A30000" data-top-name="서해남부" data-mid-code="12A30100" data-mid-name="서해남부 앞바다" data-btm-code="12A30100" data-btm-name="서해남부앞바다"><span>서해남부<br>앞바다</span></button>
							<button class="circle-btn3" data-role="sea-forecast-area" data-top-code="12A30000" data-top-name="서해남부" data-mid-code="12A30200" data-mid-name="서해남부 먼바다" data-btm-code="12A30222" data-btm-name="서해남부남쪽바깥먼바다"><span>서해남부<br>남쪽바깥먼바다</span></button>
							<button class="circle-btn3-1" data-role="sea-forecast-area" data-top-code="12A30000" data-top-name="서해남부" data-mid-code="12A30200" data-mid-name="서해남부 먼바다" data-btm-code="12A30212" data-btm-name="서해남부남쪽안쪽먼바다"><span>서해남부<br>남쪽안쪽먼바다</span></button>
							<button class="icon2 icon-txt-btn1" data-role="sea-forecast-area" data-top-code="12A30000" data-top-name="서해남부" data-mid-code="12A30100" data-mid-name="서해남부 앞바다" data-btm-code="22A30101" data-btm-name="전북북부앞바다"><span>전북 북부 앞바다</span></button>
							<button class="icon2 icon-txt-btn2" data-role="sea-forecast-area" data-top-code="12A30000" data-top-name="서해남부" data-mid-code="12A30100" data-mid-name="서해남부 앞바다" data-btm-code="22A30102" data-btm-name="전북남부앞바다"><span>전북 남부 앞바다</span></button>
							<button class="icon2 icon-txt-btn3" data-role="sea-forecast-area" data-top-code="12A30000" data-top-name="서해남부" data-mid-code="12A30100" data-mid-name="서해남부 앞바다" data-btm-code="22A30103" data-btm-name="전남북부서해앞바다"><span>전남 북부 서해 앞바다</span></button>
							<button class="icon2 icon-txt-btn4" data-role="sea-forecast-area" data-top-code="12A30000" data-top-name="서해남부" data-mid-code="12A30100" data-mid-name="서해남부 앞바다" data-btm-code="22A30104" data-btm-name="전남중부서해앞바다"><span>전남 중부 서해 앞바다</span></button>
							<button class="icon2 icon-txt-btn5" data-role="sea-forecast-area" data-top-code="12A30000" data-top-name="서해남부" data-mid-code="12A30100" data-mid-name="서해남부 앞바다" data-btm-code="22A30105" data-btm-name="전남남부서해앞바다"><span>전남 남부 서해 앞바다</span></button>
						</div>
						<div class="title"><span>[서해남부앞바다]</span> 날씨전망</div>
					</div>
					<div id="map5" class="img-area img-area5">
						<div class="img"><img src="@/assets/img/seaWeather/level02_4.png" alt="남해서부 지도"></div>
						<button class="btn-return" title="이전으로가기"></button>
						<div class="button-area02">
							<p class="sub-txt">남해서부</p>
							<button class="circle-btn1" data-role="sea-forecast-area" data-top-code="12B10000" data-top-name="남해서부" data-mid-code="12B10200" data-mid-name="남해서부먼바다" data-btm-code="12B10201" data-btm-name="남해서부서쪽먼바다"><span>남해서부<br>서쪽먼바다</span></button>
							<button class="circle-btn2" data-role="sea-forecast-area" data-top-code="12B10000" data-top-name="남해서부" data-mid-code="12B10100" data-mid-name="남해서부 앞바다" data-btm-code="12B10100" data-btm-name="남해서부앞바다"><span>남해서부<br>앞바다</span></button>
							<button class="circle-btn3" data-role="sea-forecast-area" data-top-code="12B10000" data-top-name="남해서부" data-mid-code="12B10200" data-mid-name="남해서부먼바다" data-btm-code="12B10202" data-btm-name="남해서부동쪽먼바다"><span>남해서부<br>동쪽먼바다</span></button>
							<button class="icon2 icon-txt-btn1" data-role="sea-forecast-area" data-top-code="12B10000" data-top-name="남해서부" data-mid-code="12B10100" data-mid-name="남해서부 앞바다" data-btm-code="12B10101" data-btm-name="전남서부남해앞바다"><span>전남 서부 <br> 남해 앞바다</span></button>
							<button class="icon2 icon-txt-btn2" data-role="sea-forecast-area" data-top-code="12B10000" data-top-name="남해서부" data-mid-code="12B10100" data-mid-name="남해서부 앞바다" data-btm-code="12B10102" data-btm-name="전남동부남해앞바다"><span>전남 동부 <br> 남해 앞바다</span></button>
						</div>
						<div class="title"><span>[남해서부앞바다]</span> 날씨전망</div>
					</div>
					<div id="map6" class="img-area img-area6">
						<div class="img"><img src="@/assets/img/seaWeather/level02_6.png" alt="남해동부 지도"></div>
						<button class="btn-return" title="이전으로가기"></button>
						<div class="button-area02">
							<p class="sub-txt">남해동부</p>
							<button class="circle-btn1" data-role="sea-forecast-area" data-top-code="12B20000" data-top-name="남해동부" data-mid-code="12B20100" data-mid-name="남해동부 앞바다" data-btm-code="12B20100" data-btm-name="남해동부앞바다"><span>남해동부<br>앞바다</span></button>
							<button class="circle-btn2" data-role="sea-forecast-area" data-top-code="12B20000" data-top-name="남해동부" data-mid-code="12B20200" data-mid-name="남해동부 먼바다" data-btm-code="12B20220" data-btm-name="남해동부바깥먼바다"><span>남해동부<br>바깥먼바다</span></button>
							<button class="circle-btn2-1" data-role="sea-forecast-area" data-top-code="12B20000" data-top-name="남해동부" data-mid-code="12B20200" data-mid-name="남해동부 먼바다" data-btm-code="12B20210" data-btm-name="남해동부안쪽먼바다"><span>남해동부<br>안쪽먼바다</span></button>
							<button class="icon2 icon-txt-btn1" data-role="sea-forecast-area" data-top-code="12B20000" data-top-name="남해동부" data-mid-code="12B20100" data-mid-name="남해동부 앞바다" data-btm-code="12B20103" data-btm-name="부산앞바다"><span>부산 앞바다</span></button>
							<button class="icon2 icon-txt-btn2" data-role="sea-forecast-area" data-top-code="12B20000" data-top-name="남해동부" data-mid-code="12B20100" data-mid-name="남해동부 앞바다" data-btm-code="12B20102" data-btm-name="경남중부남해앞바다"><span>경남 중부 남해 앞바다</span></button>
							<button class="icon2 icon-txt-btn3" data-role="sea-forecast-area" data-top-code="12B20000" data-top-name="남해동부" data-mid-code="12B20100" data-mid-name="남해동부 앞바다" data-btm-code="12B20101" data-btm-name="경남서부남해앞바다"><span>경남 서부 남해 앞바다</span></button>
							<button class="icon2 icon-txt-btn4" data-role="sea-forecast-area" data-top-code="12B20000" data-top-name="남해동부" data-mid-code="12B20100" data-mid-name="남해동부 앞바다" data-btm-code="12B20104" data-btm-name="거제시동부앞바다"><span>거제시 동부 앞바다</span></button>
						</div>
						<div class="title"><span>[남해동부앞바다]</span> 날씨전망</div>
					</div>
					<div id="map7" class="img-area img-area7">
						<div class="img"><img src="@/assets/img/seaWeather/level02_5.png" alt="제주도 지도"></div>
						<button class="btn-return" title="이전으로가기"></button>
						<div class="button-area02">
							<p class="sub-txt">제주도</p>
							<button class="circle-btn1" data-role="sea-forecast-area" data-top-code="12B30000" data-top-name="제주도" data-mid-code="12B10400" data-mid-name="제주도 남쪽먼바다" data-btm-code="12B10420" data-btm-name="제주도남쪽바깥먼바다"><span>제주도<br>남쪽바깥먼바다</span></button>
							<button class="circle-btn1-1" data-role="sea-forecast-area" data-top-code="12B30000" data-top-name="제주도" data-mid-code="12B10400" data-mid-name="제주도 남쪽먼바다" data-btm-code="12B10411" data-btm-name="제주도남서쪽안쪽먼바다"><span>제주도<br>남서쪽안쪽먼바다</span></button>
							<button class="circle-btn1-2" data-role="sea-forecast-area" data-top-code="12B30000" data-top-name="제주도" data-mid-code="12B10400" data-mid-name="제주도 남쪽먼바다" data-btm-code="12B10412" data-btm-name="제주도남동쪽안쪽먼바다"><span>제주도<br>남동쪽안쪽먼바다</span></button>
							<button class="circle-btn2" data-role="sea-forecast-area" data-top-code="12B30000" data-top-name="제주도" data-mid-code="12B10300" data-mid-name="제주도 앞바다" data-btm-code="12B10300" data-btm-name="제주도앞바다"><span>제주도<br>앞바다</span></button>
							<button class="icon2 icon-txt-btn1" data-role="sea-forecast-area" data-top-code="12B30000" data-top-name="제주도" data-mid-code="12B10300" data-mid-name="제주도 앞바다" data-btm-code="12B10302" data-btm-name="제주도북부앞바다"><span>제주도 북부<br>앞바다</span></button>
							<button class="icon2 icon-txt-btn2" data-role="sea-forecast-area" data-top-code="12B30000" data-top-name="제주도" data-mid-code="12B10300" data-mid-name="제주도 앞바다" data-btm-code="12B10304" data-btm-name="제주도서부앞바다"><span>제주도 서부<br>앞바다</span></button>
							<button class="icon2 icon-txt-btn3" data-role="sea-forecast-area" data-top-code="12B30000" data-top-name="제주도" data-mid-code="12B10300" data-mid-name="제주도 앞바다" data-btm-code="12B10303" data-btm-name="제주도남부앞바다"><span>제주도 남부<br>앞바다</span></button>
							<button class="icon2 icon-txt-btn4" data-role="sea-forecast-area" data-top-code="12B30000" data-top-name="제주도" data-mid-code="12B10300" data-mid-name="제주도 앞바다" data-btm-code="12B10301" data-btm-name="제주도동부앞바다"><span>제주도 동부<br>앞바다</span></button>
						</div>
						<div class="title"><span>[제주도앞바다]</span> 날씨전망</div>
					</div>
					<div id="map8" class="img-area img-area8">
							<div class="img"><img src="@/assets/img/seaWeather/level02_7.png" alt="동해남부 지도"></div>
							<button class="btn-return" title="이전으로가기"></button>
							<div class="button-area02">
								<p class="sub-txt">동해남부</p>
								<!-- 버튼에 class on 이 들어가면 활성화 -->
								<button class="circle-btn1" data-role="sea-forecast-area" data-top-code="12C10000" data-top-name="동해남부" data-mid-code="12C10200" data-mid-name="동해남부 먼바다" data-btm-code="12C10221" data-btm-name="동해남부남쪽바깥먼바다"><span>동해남부<br>남쪽바깥먼바다</span></button>
								<button class="circle-btn1-1" data-role="sea-forecast-area" data-top-code="12C10000" data-top-name="동해남부" data-mid-code="12C10200" data-mid-name="동해남부 먼바다" data-btm-code="12C10211" data-btm-name="동해남부남쪽안쪽먼바다"><span>동해남부<br>남쪽안쪽먼바다</span></button>
								<button class="circle-btn2" data-role="sea-forecast-area" data-top-code="12C10000" data-top-name="동해남부" data-mid-code="12C10100" data-mid-name="동해남부 앞바다" data-btm-code="12C10100" data-btm-name="동해남부앞바다"><span>동해남부<br>앞바다</span></button>
								<button class="circle-btn3" data-role="sea-forecast-area" data-top-code="12C10000" data-top-name="동해남부" data-mid-code="12C10200" data-mid-name="동해남부 먼바다" data-btm-code="12C10222" data-btm-name="동해남부북쪽바깥먼바다"><span>동해남부<br>북쪽바깥먼바다</span></button>
								<button class="circle-btn3-1" data-role="sea-forecast-area" data-top-code="12C10000" data-top-name="동해남부" data-mid-code="12C10200" data-mid-name="동해남부 먼바다" data-btm-code="12C10212" data-btm-name="동해남부북쪽안쪽먼바다"><span>동해남부<br>북쪽안쪽먼바다</span></button>
								<button class="icon2 icon-txt-btn1" data-role="sea-forecast-area" data-top-code="12C10000" data-top-name="동해남부" data-mid-code="12C10100" data-mid-name="동해남부 앞바다" data-btm-code="12C10103" data-btm-name="경북북부앞바다"><span>경북 북부 앞바다</span></button>
								<button class="icon2 icon-txt-btn2" data-role="sea-forecast-area" data-top-code="12C10000" data-top-name="동해남부" data-mid-code="12C10100" data-mid-name="동해남부 앞바다" data-btm-code="12C10102" data-btm-name="경북남부앞바다"><span>경북 남부 앞바다</span></button>
								<button class="icon2 icon-txt-btn3" data-role="sea-forecast-area" data-top-code="12C10000" data-top-name="동해남부" data-mid-code="12C10100" data-mid-name="동해남부 앞바다" data-btm-code="12C10101" data-btm-name="울산앞바다"><span>울산 앞바다</span></button>
							</div>
							<div class="title"><span>[동해남부앞바다]</span> 날씨전망</div>
					</div>
					<div id="map9" class="img-area img-area9">
							<div class="img"><img src="@/assets/img/seaWeather/level02_8.png" alt="동해중부 지도"></div>
							<button class="btn-return" title="이전으로가기"></button>
							<div class="button-area02">
									<p class="sub-txt">동해중부</p>
									<button class="circle-btn1" data-role="sea-forecast-area" data-top-code="12C20000" data-top-name="동해중부" data-mid-code="12C20200" data-mid-name="동해중부 먼바다" data-btm-code="12C20220" data-btm-name="동해중부바깥먼바다"><span>동해중부<br>바깥먼바다</span></button>
									<button class="circle-btn1-1" data-role="sea-forecast-area" data-top-code="12C20000" data-top-name="동해중부" data-mid-code="12C20200" data-mid-name="동해중부 먼바다" data-btm-code="12C20210" data-btm-name="동해중부안쪽먼바다"><span>동해중부<br>안쪽먼바다</span></button>
									<button class="circle-btn2" data-role="sea-forecast-area" data-top-code="12C20000" data-top-name="동해중부" data-mid-code="12C20100" data-mid-name="동해중부 앞바다" data-btm-code="12C20100" data-btm-name="동해중부앞바다"><span>동해중부<br>앞바다</span></button>
									<button class="icon2 icon-txt-btn1" data-role="sea-forecast-area" data-top-code="12C20000" data-top-name="동해중부" data-mid-code="12C20100" data-mid-name="동해중부 앞바다" data-btm-code="12C20103" data-btm-name="강원북부앞바다"><span>강원 북부<br> 앞바다</span></button>
									<button class="icon2 icon-txt-btn2" data-role="sea-forecast-area" data-top-code="12C20000" data-top-name="동해중부" data-mid-code="12C20100" data-mid-name="동해중부 앞바다" data-btm-code="12C20102" data-btm-name="강원중부앞바다"><span>강원 중부<br> 앞바다</span></button>
									<button class="icon2 icon-txt-btn3" data-role="sea-forecast-area" data-top-code="12C20000" data-top-name="동해중부" data-mid-code="12C20100" data-mid-name="동해중부 앞바다" data-btm-code="12C20101" data-btm-name="강원남부앞바다"><span>강원 남부<br> 앞바다</span></button>
							</div>
							<div class="title"><span>[동해중부앞바다]</span> 날씨전망</div>
					</div>
					<div id="map10" class="img-area img-area10">
						<div class="img"><img src="@/assets/img/seaWeather/level02_9.png" alt="동해북부 지도"></div>
						<button class="btn-return" title="이전으로가기"></button>
						<div class="button-area02">
							<p class="sub-txt">동해북부</p>
							<button class="circle-btn1" data-role="sea-forecast-area" data-top-code="12C30000" data-top-name="동해북부" data-mid-code="12C30200" data-mid-name="동해북부 먼바다" data-btm-code="" data-btm-name=""><span>동해북부<br>먼바다</span></button>
							<button class="circle-btn2" data-role="sea-forecast-area" data-top-code="12C30000" data-top-name="동해북부" data-mid-code="12C30100" data-mid-name="동해북부 앞바다" data-btm-code="12C30100" data-btm-name="동해북부앞바다"><span>동해북부<br>앞바다</span></button>
						</div>
						<div class="title"><span>[동해북부앞바다]</span> 날씨전망</div>
					</div>
				</div>
					
			</div>	

			<!--전국지도 -->
			<div class="report-day country">
					<h3 class="title">일일예보</h3>
					<p class="txt">지도에서 지역을 선택하시면 날씨를 확인할 수 있습니다.</p>
			</div>
			<!-- 전국지도-->
			
			<!-- 지역지도 -->	
			<div id="region" class="report-day forecast region" style="">
					<h3 class="title">일일예보</h3>
					<div class="today-short-term">
							<div class="container long-term">
									<div class="swiper-container swiper4">
											<div class="short_term_header">
													<ul class="ltit_header">
															<li class="h_wind">풍향</li>
															<li class="h_ms">풍속(m/s)</li>
															<li class="h_ht">파고(m)</li>
													</ul>
											</div>

											<div class="swiper-wrapper"><!-- swiper-wrapper  -->
													<div class="swiper-slide">
															<div class="short_term">
																	<div class="term_wrap04" id="shortTermWrap">
																			
																	</div>
															</div>
													</div>
															<div class="swiper-scrollbar"></div>
											</div>  <!-- swiper-wrapper  -->
									</div>
							</div>
					</div>
			</div>
			<!-- 지역지도 -->

			<!-- 전국지도 -->
			<div class="report-metaphase country">
					<h3 class="title">중기예보</h3>
					<p class="txt">앞으로 10일까지의 바다날씨와 예상파고 정보를 제공합니다.</p>
					<p class="right"><button type="button" id="seaBuoyNationBtn">기상실황 해상 관측자료 보기</button></p>
			</div>	
			<!-- 전국지도 -->

			<!-- 지역지도 -->
			<div class="report-metaphase forecast region" style="display: none;">
					<h3 class="title"><span>중기예보</span> <p class="right"><button type="button" id="midTermTotalBtn">전체보기</button></p></h3>
					<div class="today-short-term">
							<div class="container long-term">
									<div class="swiper-container swiper4">
											<div class="short_term_header">
													<ul class="ltit_header">
															<li class="h_wave">최고파고(m)</li>
															<li class="l_wave">최저파고(m)</li>
													</ul>
											</div>

											<div class="swiper-wrapper"><!-- swiper-wrapper  -->
													<div class="swiper-slide">
															<div class="short_term">
																	<div class="term_wrap04" id="midTermWrap">
												
																	</div>
															</div>
													</div>
															<div class="swiper-scrollbar"></div>
											</div>  <!-- swiper-wrapper  -->
									</div>
							</div>
					</div>
					<p class="right"><button type="button" id="seaBuoyRegionBtn">기상실황 해상 관측자료 보기</button></p>
			</div>
			<!-- 지역지도 -->
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

			activeName: 'first',

			tableData: [],
		}
	},
	created(){

	},
	mounted(){
		
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
				url: 'pushwidgetapi/wnuri-fct2021/api/wnuri-sfct/today/short-term.do',
			});

			console.log(rst);

			this.apiData = rst;
			this.tableData = rst.warningNow.items;

			console.log(this.tableData);
		},
	}
}
</script>
