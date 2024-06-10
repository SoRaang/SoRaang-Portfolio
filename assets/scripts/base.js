const contPortfolio = document.getElementById('contPortfolio');
const portfolioData = await fetch('/assets/scripts/projectData.json').then(data => data.json());

console.log(contPortfolio);
console.log(portfolioData);

class makePortfolio {
    constructor(projectData, targetDOM) {
        this.data = projectData;
        this.target = targetDOM;
    }

    init() { /** 기초 컨테이너 생성 */

    }

    printData() { /** 컨테이너에 데이터 객체별 DOM 출력 */
        this.data.forEach((dataRow) => {
            const divMan = document.createElement('article');

            divMan.classList.add('pf-totalyear-container');
        });
    }

    showDetails() { /** 프로젝트 선택시 상세 내용 모달 표시 */

    }
}