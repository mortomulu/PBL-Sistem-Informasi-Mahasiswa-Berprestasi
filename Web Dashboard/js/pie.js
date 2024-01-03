const pie = document.getElementById("pie");
new Chart(pie, {
  type: "pie",
  data: {
    labels: ["Non Akdemik", "Akademik"],
    datasets: [
      {
        label: "Prestasi",
        data: [12, 19],
        borderWidth: 1,
        backgroundColor: ["#0174BE", "#FFC436"],
      },
    ],
  },
  options: {
    maintainAspectRatio: false,
    responsive: false,
    width: 100,
    height: 100,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
