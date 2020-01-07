// 캐러셀 왼쪽, 오른쪽 버튼
const carouselRightBtn = document.getElementById("carouselRightBtn");
const carouselLeftBtn = document.getElementById("carouselLeftBtn");

// 캐러셀 리스트, 캐러셀 이미지
let carousel_list = document.querySelector(".carousel_list");
let carouselImgs = document.querySelectorAll(".carousel_img");

// 슬라이드 인덱스, 슬라이드 수, 캐러셀 너비, 캐러셀 높이
let slideIndex = 0;
const maxSlideIndex = carouselImgs.length;
const carouselWidth = carouselImgs[0].clientWidth;

// 왼쪽, 오른쪽 복사본 추가
const cloneLastNode = carousel_list.lastElementChild.cloneNode(true);
const cloneFirstNode = carousel_list.firstElementChild.cloneNode(true);
carousel_list.insertBefore(cloneLastNode, carousel_list.firstElementChild);
carousel_list.append(cloneFirstNode);

// 캐러셀 리스트 너비 설정(복사본 2개 추가)
carousel_list.style.width = carouselWidth * (maxSlideIndex + 2) + "px";
// 캐러셀 리스트 초기 위치 설정
carousel_list.style.transform = "translateX(-" + carouselWidth + "px)";

// 캐러셀 오른쪽 이동 버튼
carouselRightBtn.addEventListener("click", function(){
    // 복사본을 제외한 이미지 이동인 경우(기본 이동)
    if(slideIndex <= maxSlideIndex - 1) {
        carousel_list.style.transition = "transform 0.2s ease-in-out";
        carousel_list.style.transform = "translateX(-" + (carouselWidth * (slideIndex + 2)) + "px)";
        slideIndex++;
    }

    // 이동 후 오른쪽 복사본 이미지인 경우
    // transition = 0ms : 애니메이션 효과 제거
    // 첫번째 이미지로 이동
    if(slideIndex == maxSlideIndex){
        setTimeout(function() {
            carousel_list.style.transition = "0ms";
            carousel_list.style.transform = "translateX(-" + carouselWidth + "px)";
        }, 200);

        slideIndex = 0;
    }
});

// 캐러셀 왼쪽 이동 버튼
carouselLeftBtn.addEventListener("click", () => {
    // 복사본을 제외한 이미지 이동인 경우(기본 이동)
    if (slideIndex >= 0) {
        carousel_list.style.transition = "transform 0.2s ease-in-out";
        carousel_list.style.transform = "translateX(-" + (carouselWidth * slideIndex) + "px)";
        slideIndex--;
    }

    // 이동 후 왼쪽 복사본 이미지인 경우
    // transition = 0ms : 애니메이션 효과 제거
    // 마지막 이미지로 이동
    if (slideIndex < 0) {
        setTimeout(function() {
            carousel_list.style.transition = "0ms";
            carousel_list.style.transform = "translateX(-" + (carouselWidth * maxSlideIndex) + "px)";
        }, 200);

        slideIndex = maxSlideIndex - 1;
    }
});