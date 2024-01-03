const line = document.getElementById("line");
new Chart(line, {
  type: "line",
  data: {
    labels: ["2018", "2019", "2020", "2021", "2022", "2023"],
    datasets: [
      {
        label: "Prestasi Akademik",
        data: [12, 8, 15, 16, 13, 20],
        borderWidth: 1,
      },
      {
        label: "Prestasi Non-Akademik",
        data: [2, 5, 10, 12, 23, 23],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
