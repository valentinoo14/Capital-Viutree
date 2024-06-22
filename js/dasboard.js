// Data IHSG harian untuk tahun 2024 (contoh data)
const labels = [
    '2024-01-01', '2024-01-02', '2024-01-03', '2024-01-04', '2024-01-05',
    '2024-01-06', '2024-01-07', '2024-01-08', '2024-01-09', '2024-01-10'
    // Tambahkan tanggal lainnya untuk tahun 2024
];
const prices = [
    6500, 6550, 6600, 6625, 6600,
    6580, 6550, 6600, 6650, 6700
    // Tambahkan harga lainnya untuk tahun 2024
];

// Konfigurasi diagram garis
const config = {
    type: 'line',
    data: {
        labels: labels,
        datasets: [{
            label: 'IHSG',
            backgroundColor: 'rgba(72, 255, 0, .2)',
            borderColor: 'rgba(72, 255, 0, 1)',
            borderWidth: 1,
            data: prices,
            fill: {
                target: 'origin',
                above: 'rgba(150, 247, 112, 0.219)',   // Warna arsiran di atas garis
                below: 'rgba(111, 245, 58, 0.05)', // Warna arsiran di bawah garis
            },
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: false // Mulai dari nilai minimum data
            }
        },
        plugins: {
            // Konfigurasi gradien untuk latar belakang
            gradient: {
                from: 'rgba(75, 192, 192, 0.2)',
                to: 'rgba(75, 192, 192, 0)',
                // Konfigurasi gradien dari atas ke bawah
                // Anda juga dapat mengubah arah gradien sesuai kebutuhan
                via: 'rgba(75, 192, 192, 0.5)'
            }
        }
    }
};

// Membuat diagram garis
var ihsgChart = new Chart(
    document.getElementById('ihsgChart'),
    config
);
