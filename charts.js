const chartTitleInput = document.getElementById("chart-title-input");
const labelsSeperatorInput = document.getElementById("labels");
const valuesSeperatorInput = document.getElementById("values");
const legendPositionInput = document.getElementById("l-position");
const createDiagramButton = document.getElementById("create-button");
const chartCanvas = document.getElementById("pie-chart");

const xValues = ["John", "Stacy", "kyle"];
const data = [3, 4, 5];
const barColors = ["red", "green", "blue", "yellow", "purple", "gray", "orange", "pink", "magenta", "cyan"];
let myPieChart;

const parseXValues = () => {
    let labelsArray = labelsSeperatorInput.value.split(',').map(label => label.trim());
    xValues.length = 0;//reset
    xValues.push(...labelsArray);
}

const parseData = () => {
    let dataArray = valuesSeperatorInput.value.split(',').map(label => Number(label.trim()));
    data.length = 0;//reset
    data.push(...dataArray);
    return data.length;
}
const parseBarColors = (length) => {
    const newArr = barColors.slice(0, length);
    return newArr;
}

createDiagramButton.addEventListener('click', function(){

    parseXValues();
    let length = parseData();
    let newBarColors = parseBarColors(length);

    if(xValues.length!==data.length){
        alert("The Labels and values should be the same");
        return;
    }

    if(myPieChart){
        myPieChart.destroy();
    }

    myPieChart = new Chart(chartCanvas, {
        type: "pie",
        data: {
            labels: xValues,
            datasets: [{
                backgroundColor: newBarColors,
                data: data
            }]
        },
        options: {
            title: {
                display: true,
                text: chartTitleInput.value
            },
            legend: {
                position: legendPositionInput.value || 'top',
            }
        }
    });

}
)