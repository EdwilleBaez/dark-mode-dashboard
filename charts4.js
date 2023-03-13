let miCanvas4 = document.getElementById('graph4').getContext("2d");
const labels4 = ['Google', 'Youtube', 'Instagram', 'Pinterest', 'Facebook', 'Twitter', 'Tumblr']

let chart4 = new Chart (miCanvas4,{
    type: "doughnut",
    data: {
        datasets: [
          {
            data: [38.6, 22.5, 30.8, 8.1],
            backgroundColor: [
              'rgba(186, 237, 189, 1)',
              'rgba(198, 199, 248, 1)',
              'rgba(28, 28, 28, 1)',
              'rgba(149, 164, 252, 1)',
            ],
            borderWidth: 4,
            borderJoinStyle: 'round',       
         },
        ],
        options:{
          
         }
    },
})
