const ctx = document.getElementById("chart");
new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["2019", "2020", "2021", "2022", "2023", "2024"],
    datasets: [
      {
        label: "Prestasi Akademik",
        data: [10, 15, 9, 20, 22, 25],
        borderWidth: 1,
      },
      {
        label: "Prestasi Non-Akademik",
        data: [10, 13, 10, 5, 22, 25],
        borderWidth: 2,
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
