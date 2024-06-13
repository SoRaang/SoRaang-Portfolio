const contPortfolio = document.getElementById('contPortfolio');
const portfolioData = await fetch('/assets/scripts/projectData.json').then(data => data.json());

class makePortfolio {
    constructor(projectData, targetDOM) {
        this.data = projectData;
        this.target = targetDOM;
    }

    init() { /** 데이터 맵핑 */
        this.target.innerHTML = '';
    }

    printData() { /** 컨테이너에 데이터 객체별 DOM 출력 */
        this.data.forEach((dataRow) => {
            const yearItem = document.createElement('article');

            yearItem.classList.add('pf-totalyear-container');
            yearItem.innerHTML = `
                <div class="pf-yeartag">
                    <h4>${ dataRow.yearTotal }</h4>
                </div>

                <div class="pf-dots">
                    <div class="pf-yeardot"></div>
                </div>

                <div class="pf-yearworks-container">
                    <div class="pf-yeartitle">
                        <h5>${ dataRow.yearEvent }</h5>
                        <p>${ dataRow.yearSummary }</p>
                    </div>

                    <div class="pf-work-details"></div>
                </div>
            `;

            this.target.appendChild(yearItem);

            let workContainer = yearItem.querySelector('.pf-work-details');

            if (dataRow.yearAchieves.length !== 0) { /** 연도 내 업무가 존재할 시 */
                dataRow.yearAchieves.forEach((workData) => {
                    const workItem = document.createElement('div');

                    workItem.classList.add('pf-single-work');
                    workItem.innerHTML = `
                        <h6>${ workData.projectName }</h6>

                        <div class="work-thumbnails"></div>
                    `;

                    workContainer.appendChild(workItem);

                    let thumbnailContainer = workItem.querySelector('.work-thumbnails');

                    if (workData.projectImages.length !== 0) {
                        workData.projectImages.forEach((thumbImage) => {
                            const thumbItemWrapper = document.createElement('div');

                            thumbItemWrapper.classList.add('thumbnail-item')
                            thumbItemWrapper.innerHTML = `
                                <a href="">
                                    <img src="${ thumbImage.imageURL }" alt="${ thumbImage.imageDescription }" />
                                </a>
                            `;

                            thumbnailContainer.appendChild(thumbItemWrapper);
                        });
                    }

                    /** 여기 어디 썸네일 클릭 이벤트도 필요하다 */
                });
            }

            yearItem.addEventListener('click', () => console.log(dataRow)); // 임시 이벤트
        });
    }

    showDetails() { /** 프로젝트 선택시 상세 내용 모달 표시 */

    }
}

const portMan = new makePortfolio(portfolioData, contPortfolio);

portMan.init();
portMan.printData();