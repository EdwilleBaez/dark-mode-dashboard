let miCanvas3 = document.getElementById('graph3').getContext("2d");
const labels3 = ['Linux', 'Mac', 'iOS', 'Windows', 'Android', 'Other']

let chart3 = new Chart (miCanvas3,{
    type: "bar",
    data: {
        labels: labels3,
        datasets: [
          {
             data: [2, 3, 4, 5, 1, 5],
             backgroundColor: [
                'rgba(186, 237, 189, 1)',
                'rgba(198, 199, 248, 1)',
                'rgba(28, 28, 28, 1)',
                'rgba(177, 227, 255, 1)',
                'rgba(149, 164, 252, 1)',
                'rgba(161, 227, 203, 1)',
              ],
          },
        ]
    },
    options: {
        barThickness: 18,
        borderRadius: 4,
        scales: {
            x: {
                max: 7,
                grid: {
                    display: false,
                },
            },
            y: {
                max: 8,
            },
           
          },
        animation: false,
        plugins: {
            legend: {
                display: false,
            },
        },  
    }
})


