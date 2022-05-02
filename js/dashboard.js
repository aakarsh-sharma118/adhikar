// SIDEBAR: SUBMENU
const allSidebarSubmenu = document.querySelectorAll('#sidebar .sidebar__submenu')

allSidebarSubmenu.forEach(item => {
    const a = item.previousElementSibling

    a.addEventListener('click', function (e) {
        e.preventDefault()

        if (this.classList.contains('clicked')) {
            this.classList.remove('clicked')
            item.classList.remove('active')
        } else {
            allSidebarSubmenu.forEach(i => {
                i.previousElementSibling.classList.remove('clicked')
                i.classList.remove('active')
            })

            this.classList.add('clicked')
            item.classList.add('active')
        }
    })
})


// SIDEBAR: DROPDOWN MENU
const allSidebarDropdownMenu = document.querySelectorAll('#sidebar .sidebar__dropdown-menu')

allSidebarDropdownMenu.forEach(item => {
    const a = item.previousElementSibling

    a.addEventListener('click', function (e) {
        e.preventDefault()

        if (item.classList.contains('active')) {
            item.classList.remove('active')
            this.classList.remove('active')
        } else {
            allSidebarDropdownMenu.forEach(i => {
                i.previousElementSibling.classList.remove('active')
                i.classList.remove('active')
            })

            item.classList.add('active')
            this.classList.add('active')
        }
    })
})


// SIDEBAR MOBILE: TOGGLE SIDEBAR
const toggleSidebar = document.querySelector('#sidebar-mobile .toggle-sidebar')
const sidebar = document.querySelector('#sidebar')

toggleSidebar.addEventListener('click', function () {
    sidebar.classList.add('active')
})


// MAIN: DROPDOWN
const allMainDropdown = document.querySelectorAll('#main .main__top .main__top__menu .main__dropdown')

allMainDropdown.forEach(item => {
    const a = item.previousElementSibling

    a.addEventListener('click', function (e) {
        e.preventDefault()

        if (item.classList.contains('active')) {
            item.classList.remove('active')
        } else {
            allMainDropdown.forEach(i => {
                i.classList.remove('active')
            })

            item.classList.add('active')
        }
    })
})


// MAIN: MAIN BODY MENU
const allMainBodyMenu = document.querySelectorAll('#main .main__body :is(.voter__menu, .voting-summary__menu) .menu')

allMainBodyMenu.forEach(item => {
    const icon = item.previousElementSibling

    icon.addEventListener('click', function () {
        if (item.classList.contains('active')) {
            item.classList.remove('active')
        } else {
            allMainBodyMenu.forEach(i => {
                i.classList.remove('active')
            })

            item.classList.add('active')
        }
    })
})


// DOCUMENT EVENT
document.addEventListener('click', function (e) {
    if (!e.target.matches('#sidebar, #sidebar *')) {
        allSidebarSubmenu.forEach(item => {
            item.previousElementSibling.classList.remove('clicked')
            item.classList.remove('active')
        })
    }

    if (!e.target.matches('#sidebar, #sidebar *, #sidebar-mobile .toggle-sidebar')) {
        sidebar.classList.remove('active')
    }

    if (!e.target.matches('#main .main__top .main__top__menu, #main .main__top .main__top__menu *')) {
        allMainDropdown.forEach(item => {
            item.classList.remove('active')
        })
    }

    if (!e.target.matches('#main .main__body :is(.voter__menu, .voting-summary__menu), #main .main__body :is(.voter__menu, .voting-summary__menu) *')) {
        allMainBodyMenu.forEach(item => {
            item.classList.remove('active')
        })
    }
})


// CHART: APEXCHART - Lines
var options = {
    series: [{
        name: 'Party-1',
        data: [11, 10, 38, 65, 70, 95, 103]
    }, {
        name: 'Party-2',
        data: [11, 19, 32, 34, 45, 89, 102]
    },
    {
        name: 'Party-3',
        data: [10, 18, 20, 45, 60, 78, 101]
    },
    {
        name: 'Party-4',
        data: [10, 15, 29, 30, 65, 68, 85]
    }
    ],
    chart: {
        height: 350,
        type: 'area'
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'smooth'
    },
    xaxis: {
        type: 'datetime',
        categories: ["2022-04-21T00:00:00.000Z", "2022-04-21T01:30:00.000Z", "2022-04-21T02:30:00.000Z", "2022-04-21T03:30:00.000Z", "2022-04-21T04:30:00.000Z", "2022-04-21T05:30:00.000Z", "2022-04-21T06:30:00.000Z"]
    },
    tooltip: {
        x: {
            format: 'dd/MM/yy HH:mm'
        },
    },
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();


// CHART: APEXCHART - Bar
var options = {
    series: [{
        name: 'Inflation',
        data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2]
    }],
    chart: {
        height: 350,
        type: 'bar',
    },
    plotOptions: {
        bar: {
            borderRadius: 10,
            dataLabels: {
                position: 'top', // top, center, bottom
            },
        }
    },
    dataLabels: {
        enabled: true,
        formatter: function (val) {
            return val + "%";
        },
        offsetY: -20,
        style: {
            fontSize: '12px',
            colors: ["#304758"]
        }
    },

    xaxis: {
        categories: ["1 AM", "3 AM", "5 AM", "7 AM", "9 AM", "11 AM", "1 PM", "3 PM", "5 PM", "7 PM", "9 PM", "11 PM"],
        position: 'top',
        axisBorder: {
            show: false
        },
        axisTicks: {
            show: false
        },
        crosshairs: {
            fill: {
                type: 'gradient',
                gradient: {
                    colorFrom: '#D8E3F0',
                    colorTo: '#BED1E6',
                    stops: [0, 100],
                    opacityFrom: 0.4,
                    opacityTo: 0.5,
                }
            }
        },
        tooltip: {
            enabled: true,
        }
    },
    yaxis: {
        axisBorder: {
            show: false
        },
        axisTicks: {
            show: false,
        },
        labels: {
            show: false,
            formatter: function (val) {
                return val + "%";
            }
        }

    },
    title: {
        text: 'Voting Done At Each Point, 2022',
        floating: true,
        offsetY: 330,
        align: 'center',
        style: {
            color: '#444'
        }
    }
};

var chart = new ApexCharts(document.querySelector("#chart2"), options);
chart.render();


// CHART: APEXCHART - Pie
// var options = {
//     series: [44, 55, 13, 43],
//     chart: {
//     width: 380,
//     type: 'pie',
//   },
//   labels: ['Party 1', 'Party 2', 'Party 3', 'Party 4'],
//   responsive: [{
//     breakpoint: 480,
//     options: {
//       chart: {
//         width: 200
//       },
//       legend: {
//         position: 'bottom'
//       }
//     }
//   }]
//   };

//   var chart = new ApexCharts(document.querySelector("#chart3"), options);
//   chart.render();