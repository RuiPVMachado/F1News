document.addEventListener('DOMContentLoaded', function () {
    // Banner rotation (if applicable)
    const slides = document.querySelectorAll('.banner-slide');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach(slide => slide.classList.add('hidden'));
        slides[index].classList.remove('hidden');
    }

    // Auto-rotate banners every 5 seconds
    if (slides.length > 0) {
        setInterval(() => {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        }, 5000);
    }

    // Standings Page Functionality
    if (document.querySelector('.tabs')) {
        // Tab Functionality
        const tabs = document.querySelectorAll('.tab');
        const tabContents = document.querySelectorAll('.tab-content');

        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                // Remove active class from all tabs and contents
                tabs.forEach(t => t.classList.remove('active'));
                tabContents.forEach(c => c.classList.remove('active'));

                // Add active class to the clicked tab and corresponding content
                tab.classList.add('active');
                document.getElementById(tab.getAttribute('data-tab')).classList.add('active');
            });
        });

        // Fetch and Populate Driver Standings
        fetch('https://ergast.com/api/f1/current/driverStandings.json')
            .then(response => response.json())
            .then(data => {
                const standings = data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
                const tbody = document.getElementById('driver-standings');
                if (tbody) {
                    tbody.innerHTML = ''; // Clear loading text

                    standings.forEach(driver => {
                        const tr = document.createElement('tr');

                        // Position
                        const positionTd = document.createElement('td');
                        positionTd.textContent = driver.position;
                        tr.appendChild(positionTd);

                        // Driver Name
                        const driverTd = document.createElement('td');
                        driverTd.textContent = `${driver.Driver.givenName} ${driver.Driver.familyName}`;
                        tr.appendChild(driverTd);

                        // Team
                        const teamTd = document.createElement('td');
                        teamTd.textContent = driver.Constructors.map(c => c.name).join(', ');
                        tr.appendChild(teamTd);

                        // Points
                        const pointsTd = document.createElement('td');
                        pointsTd.textContent = driver.points;
                        tr.appendChild(pointsTd);

                        tbody.appendChild(tr);
                    });
                }
            })
            .catch(error => {
                console.error('Error fetching driver standings:', error);
                const tbody = document.getElementById('driver-standings');
                if (tbody) {
                    tbody.innerHTML = '<tr><td colspan="4" style="text-align:center; color:red;">Failed to load driver standings.</td></tr>';
                }
            });

        // Fetch and Populate Constructor Standings
        fetch('https://ergast.com/api/f1/current/constructorStandings.json')
            .then(response => response.json())
            .then(data => {
                const standings = data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings;
                const tbody = document.getElementById('constructor-standings');
                if (tbody) {
                    tbody.innerHTML = ''; // Clear loading text

                    standings.forEach(constructor => {
                        const tr = document.createElement('tr');

                        // Position
                        const positionTd = document.createElement('td');
                        positionTd.textContent = constructor.position;
                        tr.appendChild(positionTd);

                        // Team Name
                        const teamTd = document.createElement('td');
                        teamTd.textContent = constructor.Constructor.name;
                        tr.appendChild(teamTd);

                        // Points
                        const pointsTd = document.createElement('td');
                        pointsTd.textContent = constructor.points;
                        tr.appendChild(pointsTd);

                        tbody.appendChild(tr);
                    });
                }
            })
            .catch(error => {
                console.error('Error fetching constructor standings:', error);
                const tbody = document.getElementById('constructor-standings');
                if (tbody) {
                    tbody.innerHTML = '<tr><td colspan="3" style="text-align:center; color:red;">Failed to load constructor standings.</td></tr>';
                }
            });
    }

    // Schedule Page Functionality
    if (document.getElementById('race-schedule')) {
        const races = [
            { date: "2024-03-02T15:00:00Z", name: "Bahrain Grand Prix", location: "Bahrain International Circuit, Sakhir, Bahrain" },
            { date: "2024-03-09T17:00:00Z", name: "Saudi Arabian Grand Prix", location: "Jeddah Corniche Circuit, Jeddah, Saudi Arabia" },
            { date: "2024-03-23T04:00:00Z", name: "Australian Grand Prix", location: "Albert Park Circuit, Melbourne, Australia" },
            { date: "2024-04-07T06:00:00Z", name: "Japanese Grand Prix", location: "Suzuka International Racing Course, Suzuka, Japan" },
            { date: "2024-04-21T07:00:00Z", name: "Chinese Grand Prix", location: "Shanghai International Circuit, Shanghai, China" },
            { date: "2024-05-05T19:30:00Z", name: "Miami Grand Prix", location: "Miami International Autodrome, Miami, USA" },
            { date: "2024-05-19T13:00:00Z", name: "Emilia Romagna Grand Prix", location: "Autodromo Enzo e Dino Ferrari, Imola, Italy" },
            { date: "2024-05-26T13:00:00Z", name: "Monaco Grand Prix", location: "Circuit de Monaco, Monte Carlo, Monaco" },
            { date: "2024-06-09T18:00:00Z", name: "Canadian Grand Prix", location: "Circuit Gilles Villeneuve, Montreal, Canada" },
            { date: "2024-06-23T13:00:00Z", name: "Spanish Grand Prix", location: "Circuit de Barcelona-Catalunya, Montmeló, Spain" },
            { date: "2024-06-30T13:00:00Z", name: "Austrian Grand Prix", location: "Red Bull Ring, Spielberg, Austria" },
            { date: "2024-07-07T13:00:00Z", name: "British Grand Prix", location: "Silverstone Circuit, Silverstone, United Kingdom" },
            { date: "2024-07-21T13:00:00Z", name: "Hungarian Grand Prix", location: "Hungaroring, Mogyoród, Hungary" },
            { date: "2024-07-28T13:00:00Z", name: "Belgian Grand Prix", location: "Circuit de Spa-Francorchamps, Stavelot, Belgium" },
            { date: "2024-08-25T13:00:00Z", name: "Dutch Grand Prix", location: "Circuit Zandvoort, Zandvoort, Netherlands" },
            { date: "2024-09-01T13:00:00Z", name: "Italian Grand Prix", location: "Autodromo Nazionale Monza, Monza, Italy" },
            { date: "2024-09-15T12:00:00Z", name: "Azerbaijan Grand Prix", location: "Baku City Circuit, Baku, Azerbaijan" },
            { date: "2024-09-22T12:00:00Z", name: "Singapore Grand Prix", location: "Marina Bay Street Circuit, Singapore" },
            { date: "2024-10-20T20:00:00Z", name: "United States Grand Prix", location: "Circuit of the Americas, Austin, USA" },
            { date: "2024-10-27T22:00:00Z", name: "Mexico City Grand Prix", location: "Autódromo Hermanos Rodríguez, Mexico City, Mexico" },
            { date: "2024-11-03T17:00:00Z", name: "Brazilian Grand Prix", location: "Autódromo José Carlos Pace, São Paulo, Brazil" },
            { date: "2024-11-24T06:00:00Z", name: "Las Vegas Grand Prix", location: "Las Vegas Strip Circuit, Las Vegas, USA" },
            { date: "2024-12-01T13:00:00Z", name: "Abu Dhabi Grand Prix", location: "Yas Marina Circuit, Abu Dhabi, UAE" },
            { date: "2024-20-01T13:00:00Z", name: "ISLA GAIA", location: "Porto, Gaia" }
        ];

        function populateRaceSchedule() {
            const scheduleTable = document.getElementById('race-schedule');
            if (scheduleTable) {
                const now = new Date();
                const upcomingRaces = [];
                const pastRaces = [];

                races.forEach(race => {
                    const raceDate = new Date(race.date);
                    const row = document.createElement('tr');
                    const isPastRace = raceDate < now;

                    row.innerHTML = `
                        <td>${raceDate.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</td>
                        <td>${race.name}</td>
                        <td>${race.location}</td>
                        <td>${raceDate.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', timeZoneName: 'short' })}</td>
                    `;

                    if (isPastRace) {
                        row.classList.add('past-race');
                        pastRaces.push(row);
                    } else {
                        upcomingRaces.push(row);
                    }
                });

                upcomingRaces.forEach(row => scheduleTable.appendChild(row));
                pastRaces.forEach(row => scheduleTable.appendChild(row));
            }
        }

        function updateCountdown() {
            const now = new Date();
            const nextRace = races.find(race => new Date(race.date) > now);

            if (nextRace) {
                const nextRaceName = document.getElementById('next-race-name');
                const nextRaceDate = document.getElementById('next-race-date');
                const days = document.getElementById('days');
                const hours = document.getElementById('hours');
                const minutes = document.getElementById('minutes');
                const seconds = document.getElementById('seconds');

                if (nextRaceName && nextRaceDate && days && hours && minutes && seconds) {
                    nextRaceName.textContent = nextRace.name;
                    nextRaceDate.textContent = new Date(nextRace.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

                    function updateTimer() {
                        const now = new Date();
                        const raceDate = new Date(nextRace.date);
                        const difference = raceDate.getTime() - now.getTime();

                        if (difference > 0) {
                            days.textContent = Math.floor(difference / (1000 * 60 * 60 * 24));
                            hours.textContent = Math.floor((difference / (1000 * 60 * 60)) % 24);
                            minutes.textContent = Math.floor((difference / 1000 / 60) % 60);
                            seconds.textContent = Math.floor((difference / 1000) % 60);
                        } else {
                            clearInterval(timerInterval);
                        }
                    }

                    updateTimer();
                    const timerInterval = setInterval(updateTimer, 1000);
                }
            }
        }

        populateRaceSchedule();
        updateCountdown();
    }
});