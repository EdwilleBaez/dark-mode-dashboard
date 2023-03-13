let miCanvas = document.getElementById('graph1').getContext("2d");
const labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

let chart = new Chart (miCanvas,{
    type: "line",
    data: {
        labels: labels,
        datasets: [
          {
             data: [1, 3, 4, 2, 5, 4, 7, 6],
             backgroundColor: '#A8C5DA',
             borderColor: '#A8C5DA',
             tension: 0.4,
          },
          {
            data: [2, 2.3, 2.1, 2.5, 3, 3.8, 4],
            backgroundColor: '#1C1C1C',
            borderColor: '#1C1C1C',
            tension: 0.4,
          },
         
        ]
    },
    options: {
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


