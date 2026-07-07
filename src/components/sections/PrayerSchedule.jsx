import React, { useState, useEffect } from 'react';

function PrayerSchedule() {
  const [timings, setTimings] = useState(null);
  const [nextPrayer, setNextPrayer] = useState(null);
  const [timeRemaining, setTimeRemaining] = useState('');

  useEffect(() => {
    // Fetch prayer times for Purwakarta (nearest city to Plered)
    fetch('https://api.aladhan.com/v1/timingsByCity?city=Purwakarta&country=Indonesia&method=11')
      .then((res) => res.json())
      .then((data) => {
        if (data.code === 200) {
          const times = data.data.timings;
          // We only need specific times
          setTimings({
            Subuh: times.Fajr,
            Terbit: times.Sunrise,
            Dzuhur: times.Dhuhr,
            Ashar: times.Asr,
            Maghrib: times.Maghrib,
            Isya: times.Isha,
          });
        }
      })
      .catch((err) => console.error('Error fetching prayer times:', err));
  }, []);

  useEffect(() => {
    if (!timings) return;

    const interval = setInterval(() => {
      const now = new Date();
      const currentMinutes = now.getHours() * 60 + now.getMinutes();

      const schedule = [
        { name: 'Subuh', time: timings.Subuh },
        { name: 'Terbit', time: timings.Terbit },
        { name: 'Dzuhur', time: timings.Dzuhur },
        { name: 'Ashar', time: timings.Ashar },
        { name: 'Maghrib', time: timings.Maghrib },
        { name: 'Isya', time: timings.Isya },
      ];

      let next = schedule.find(s => {
        const [h, m] = s.time.split(':').map(Number);
        return (h * 60 + m) > currentMinutes;
      });

      if (!next) {
        // Next is Subuh tomorrow
        next = schedule[0];
        const [h, m] = next.time.split(':').map(Number);
        const diff = (24 * 60 - currentMinutes) + (h * 60 + m);
        setNextPrayer(next.name);
        setTimeRemaining(formatTimeDiff(diff));
      } else {
        const [h, m] = next.time.split(':').map(Number);
        const diff = (h * 60 + m) - currentMinutes;
        setNextPrayer(next.name);
        setTimeRemaining(formatTimeDiff(diff));
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [timings]);

  const formatTimeDiff = (minutes) => {
    const h = Math.floor(minutes / 60);
    const m = minutes % 60;
    if (h > 0) return `${h} jam ${m} menit lagi`;
    return `${m} menit lagi`;
  };

  return (
    <section className="section-padding bg-white" id="jadwal">
      <div className="container">
        <div className="card-modern text-center" style={{ marginTop: '-80px', position: 'relative', zIndex: 10 }}>
          <h3 className="mb-4"><i className="fa fa-mosque text-primary me-2"></i> Jadwal Sholat Hari Ini</h3>
          
          {timings ? (
            <>
              <div className="row g-3 justify-content-center mb-4">
                {Object.entries(timings).map(([name, time]) => (
                  <div key={name} className="col-4 col-md-2">
                    <div className="p-3 rounded" style={{ backgroundColor: 'var(--bg-light)', border: '1px solid #e9ecef' }}>
                      <h6 className="fw-bold mb-1">{name}</h6>
                      <h5 className="text-primary mb-0">{time}</h5>
                    </div>
                  </div>
                ))}
              </div>

              {nextPrayer && (
                <div className="d-inline-block px-4 py-2 rounded-pill" style={{ backgroundColor: 'rgba(76, 175, 125, 0.1)' }}>
                  <span className="fw-bold text-primary">🟢 Saat ini:</span> Menjelang {nextPrayer} ({timeRemaining})
                </div>
              )}
              
              <div className="mt-4">
                <a href="#" className="text-muted text-decoration-underline small">Lihat Jadwal Bulanan</a>
              </div>
            </>
          ) : (
            <p>Memuat jadwal sholat...</p>
          )}
        </div>
      </div>
    </section>
  );
}

export default PrayerSchedule;
