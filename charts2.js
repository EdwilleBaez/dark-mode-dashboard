let miCanvas2 = document.getElementById('graph2').getContext("2d");
const labels2 = ['Google', 'Youtube', 'Instagram', 'Pinterest', 'Facebook', 'Twitter', 'Tumblr']

let chart2 = new Chart (miCanvas2,{
    type: "bar",
    data: {
        labels: labels2,
        datasets: [
          {
             data: [1, 3, 4, 5, 6, 7, 8],
             backgroundColor: '#A8C5DA',
             borderColor: '#A8C5DA',
          },
          
         
        ]
    },
    options: {
        scales: {
            x: {
                max: 1,
                grid: {
                    display: false,
                    offset: true
                },
            },
            y: {
                max: 7,
            },
          },
        animation: false,
        plugins: {
            legend: {
                display: false,
            },
        },
        indexAxis: 'y', 
    }
})
