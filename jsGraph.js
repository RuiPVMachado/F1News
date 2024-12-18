// Data definitions
const allDrivers = [
    { name: 'Hamilton', color: '#4f46e5', points: 156 },
    { name: 'Verstappen', color: '#dc2626', points: 182 },
    { name: 'Leclerc', color: '#16a34a', points: 138 },
    { name: 'Pérez', color: '#ca8a04', points: 147 },
    { name: 'Sainz', color: '#ef4444', points: 122 },
    { name: 'Norris', color: '#fb923c', points: 95 }
];

const allConstructors = [
    { name: 'Red Bull', color: '#dc2626', points: 329 },
    { name: 'Mercedes', color: '#4f46e5', points: 278 },
    { name: 'Ferrari', color: '#ef4444', points: 260 },
    { name: 'McLaren', color: '#fb923c', points: 185 },
    { name: 'Alpine', color: '#3b82f6', points: 152 }
];

const raceProgression = {
    'Hamilton': [18, 43, 68, 93, 131, 156],
    'Verstappen': [25, 50, 75, 95, 120, 182],
    'Leclerc': [15, 35, 62, 89, 110, 138],
    'Pérez': [12, 32, 58, 82, 115, 147],
    'Sainz': [10, 28, 55, 78, 98, 122],
    'Norris': [8, 25, 45, 65, 82, 95]
};

const circuitWinners = [
    { name: 'Hamilton', color: '#4f46e5', wins: 4 },
    { name: 'Verstappen', color: '#dc2626', wins: 6 },
    { name: 'Leclerc', color: '#16a34a', wins: 2 },
    { name: 'Pérez', color: '#ca8a04', wins: 3 }
];

const fastestLaps = [
    { name: 'Hamilton', color: '#4f46e5', laps: 3 },
    { name: 'Verstappen', color: '#dc2626', laps: 4 },
    { name: 'Leclerc', color: '#16a34a', laps: 2 },
    { name: 'Pérez', color: '#ca8a04', laps: 1 },
    { name: 'Sainz', color: '#ef4444', laps: 1 },
    { name: 'Norris', color: '#fb923c', laps: 1 }
];

const gridVsFinal = {
    'Hamilton': {
        gridPositions: [2, 1, 3, 2, 1, 2],
        finalPositions: [1, 2, 1, 1, 3, 2],
        color: '#4f46e5'
    },
    'Verstappen': {
        gridPositions: [1, 2, 1, 1, 2, 1],
        finalPositions: [2, 1, 2, 2, 1, 1],
        color: '#dc2626'
    },
    'Leclerc': {
        gridPositions: [3, 4, 2, 3, 3, 4],
        finalPositions: [4, 3, 3, 4, 2, 3],
        color: '#16a34a'
    }
};

// Create charts and their controls
let charts = {};

function createCheckboxes(containerId, items, onChange) {
    const container = document.getElementById(containerId);
    items.forEach(item => {
        const label = document.createElement('label');
        label.className = 'pilot-bio';
        label.style.marginRight = '1rem';
        label.style.display = 'inline-block';

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.value = item.name;
        checkbox.checked = true;
        checkbox.addEventListener('change', onChange);

        label.appendChild(checkbox);
        label.appendChild(document.createTextNode(` ${item.name}`));
        container.appendChild(label);
    });
}

function updateDriversChart() {
    const selectedDrivers = Array.from(document.querySelectorAll('#driversSelector input:checked'))
        .map(cb => cb.value);

    const filteredData = {
        labels: selectedDrivers,
        datasets: [{
            label: 'Points',
            data: selectedDrivers.map(name =>
                allDrivers.find(d => d.name === name).points
            ),
            backgroundColor: selectedDrivers.map(name =>
                allDrivers.find(d => d.name === name).color
            ),
            borderWidth: 1
        }]
    };

    charts.drivers.data = filteredData;
    charts.drivers.update();
}

function updateConstructorsChart() {
    const selectedConstructors = Array.from(document.querySelectorAll('#constructorsSelector input:checked'))
        .map(cb => cb.value);

    const filteredData = {
        labels: selectedConstructors,
        datasets: [{
            label: 'Points',
            data: selectedConstructors.map(name =>
                allConstructors.find(c => c.name === name).points
            ),
            backgroundColor: selectedConstructors.map(name =>
                allConstructors.find(c => c.name === name).color
            ),
            borderWidth: 1
        }]
    };

    charts.constructors.data = filteredData;
    charts.constructors.update();
}

function updateProgressionChart() {
    const selectedDrivers = Array.from(document.querySelectorAll('#progressionSelector input:checked'))
        .map(cb => cb.value);

    const datasets = selectedDrivers.map(driver => ({
        label: driver,
        data: raceProgression[driver],
        borderColor: allDrivers.find(d => d.name === driver).color,
        backgroundColor: allDrivers.find(d => d.name === driver).color,
        borderWidth: 3,
        pointStyle: 'circle',
        tension: 0.3,
        fill: false
    }));

    charts.progression.data.datasets = datasets;
    charts.progression.update();
}

function updateCircuitChart() {
    const selectedDrivers = Array.from(document.querySelectorAll('#circuitSelector input:checked'))
        .map(cb => cb.value);

    const filteredData = {
        labels: selectedDrivers,
        datasets: [{
            data: selectedDrivers.map(name =>
                circuitWinners.find(d => d.name === name).wins
            ),
            backgroundColor: selectedDrivers.map(name =>
                circuitWinners.find(d => d.name === name).color
            )
        }]
    };

    charts.circuit.data = filteredData;
    charts.circuit.update();
}

function updateFastestLapsChart() {
    const selectedDrivers = Array.from(document.querySelectorAll('#fastestLapsSelector input:checked'))
        .map(cb => cb.value);

    const filteredData = {
        labels: selectedDrivers,
        datasets: [{
            label: 'Fastest Laps',
            data: selectedDrivers.map(name =>
                fastestLaps.find(d => d.name === name).laps
            ),
            backgroundColor: selectedDrivers.map(name =>
                fastestLaps.find(d => d.name === name).color
            )
        }]
    };

    charts.fastestLaps.data = filteredData;
    charts.fastestLaps.update();
}

function updatePositionsChart() {
    const selectedDrivers = Array.from(document.querySelectorAll('#positionsSelector input:checked'))
        .map(cb => cb.value);

    const datasets = [];

    selectedDrivers.forEach(driver => {
        const driverData = gridVsFinal[driver];
        if (driverData) {
            // Add grid position dataset
            datasets.push({
                label: `${driver} Grid`,
                data: driverData.gridPositions,
                borderColor: driverData.color,
                backgroundColor: driverData.color,
                borderDash: [5, 5],
                borderWidth: 3,
                pointStyle: 'circle',
                fill: false
            });
            // Add final position dataset
            datasets.push({
                label: `${driver} Final`,
                data: driverData.finalPositions,
                borderColor: driverData.color,
                backgroundColor: driverData.color,
                borderWidth: 3,
                pointStyle: 'rectRot',
                fill: false
            });
        }
    });

    charts.positions.data = {
        labels: ['Race 1', 'Race 2', 'Race 3', 'Race 4', 'Race 5', 'Race 6'],
        datasets: datasets
    };
    charts.positions.update();
}

window.onload = function () {
    // Create checkboxes and initialize charts
    createCheckboxes('driversSelector', allDrivers, updateDriversChart);
    createCheckboxes('constructorsSelector', allConstructors, updateConstructorsChart);
    createCheckboxes('progressionSelector', allDrivers, updateProgressionChart);
    createCheckboxes('circuitSelector', circuitWinners, updateCircuitChart);
    createCheckboxes('fastestLapsSelector', fastestLaps, updateFastestLapsChart);
    createCheckboxes('positionsSelector', Object.keys(gridVsFinal).map(name => ({
        name,
        color: gridVsFinal[name].color
    })), updatePositionsChart);

    // Initialize charts
    charts.drivers = new Chart(document.getElementById('driversChart'), {
        type: 'bar',
        options: {
            responsive: true,
            plugins: {
                legend: { display: false }
            }
        }
    });

    charts.constructors = new Chart(document.getElementById('constructorsChart'), {
        type: 'bar',
        options: {
            responsive: true,
            plugins: {
                legend: { display: false }
            }
        }
    });

    charts.progression = new Chart(document.getElementById('progressionChart'), {
        type: 'line',
        data: {
            labels: ['Race 1', 'Race 2', 'Race 3', 'Race 4', 'Race 5', 'Race 6']
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            aspectRatio: 2,
            plugins: {
                legend: {
                    position: 'top',
                    labels: {
                        padding: 15,
                        usePointStyle: true,
                        font: { size: 11 }
                    }
                },
                tooltip: {
                    mode: 'index',
                    intersect: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    },
                    ticks: {
                        stepSize: 25,
                        font: { size: 11 }
                    },
                    min: 0,
                    max: 190
                },
                x: {
                    grid: {
                        display: false
                    }
                }
            },
            elements: {
                line: {
                    tension: 0.2,
                    borderWidth: 2
                },
                point: {
                    radius: 4,
                    hoverRadius: 6
                }
            }
        }
    });

    charts.circuit = new Chart(document.getElementById('circuitChart'), {
        type: 'doughnut',
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top'
                }
            }
        }
    });

    charts.fastestLaps = new Chart(document.getElementById('fastestLapsChart'), {
        type: 'pie',
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top'
                }
            }
        }
    });

    charts.positions = new Chart(document.getElementById('positionsChart'), {
        type: 'line',
        options: {
            responsive: true,
            maintainAspectRatio: false,
            aspectRatio: 2,
            plugins: {
                legend: {
                    position: 'top',
                    labels: {
                        padding: 15,
                        usePointStyle: true,
                        font: { size: 11 }
                    }
                },
                tooltip: {
                    mode: 'index',
                    intersect: false
                }
            },
            scales: {
                y: {
                    reverse: true,
                    min: 1,
                    max: 12,
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    },
                    ticks: {
                        stepSize: 1,
                        font: { size: 11 },
                        callback: function (value) {
                            return value + 'º';
                        }
                    }
                },
                x: {
                    grid: {
                        display: false
                    }
                }
            },
            elements: {
                line: {
                    tension: 0.2,
                    borderWidth: 2
                },
                point: {
                    radius: 4,
                    hoverRadius: 6
                }
            }
        }
    });

    // Initial update of all charts
    updateDriversChart();
    updateConstructorsChart();
    updateProgressionChart();
    updateCircuitChart();
    updateFastestLapsChart();
    updatePositionsChart();

    // Update card-content height
    document.querySelectorAll('.card-content').forEach(content => {
        if (content.querySelector('canvas')) {
            content.style.height = '300px';
        }
    });
};