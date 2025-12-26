<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <title>LDH Tabanlı Egzoz Filtresi Emisyon Karşılaştırması</title>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <style>
        body {
            font-family: Arial, sans-serif;
            background: #f4f6f8;
            margin: 0;
            padding: 30px;
        }
        h2 {
            text-align: center;
        }
        .chart-container {
            width: 80%;
            max-width: 900px;
            margin: auto;
            background: #ffffff;
            padding: 25px;
            border-radius: 12px;
            box-shadow: 0 8px 20px rgba(0,0,0,0.1);
        }
        footer {
            text-align: center;
            margin-top: 15px;
            font-size: 13px;
            color: #555;
        }
    </style>
</head>
<body>

<h2>Co–Mn–Mg–Al LDH Tabanlı Egzoz Filtresi Emisyon Etkisi</h2>

<div class="chart-container">
    <canvas id="emissionChart"></canvas>
</div>

<footer>
    CO ve NOx değerleri (g/km) – Temsili deneysel karşılaştırma
</footer>

<script>
const ctx = document.getElementById('emissionChart');

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['CO (Filtre Yok)', 'CO (LDH Filtreli)', 'NOx (Filtre Yok)', 'NOx (LDH Filtreli)'],
        datasets: [{
            label: 'Gaz Emisyonu (g/km)',
            data: [2.3, 0.8, 0.35, 0.12],
            backgroundColor: [
                'rgba(220, 53, 69, 0.7)',
                'rgba(25, 135, 84, 0.7)',
                'rgba(255, 193, 7, 0.7)',
                'rgba(13, 110, 253, 0.7)'
            ],
            borderColor: [
                'rgba(220, 53, 69, 1)',
                'rgba(25, 135, 84, 1)',
                'rgba(255, 193, 7, 1)',
                'rgba(13, 110, 253, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                callbacks: {
                    label: function(context) {
                        return context.raw + ' g/km';
                    }
                }
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Emisyon (g/km)'
                }
            }
        }
    }
});
</script>

</body>
</html>
