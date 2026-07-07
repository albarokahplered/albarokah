import React from 'react';

function Finance() {
  const stats = [
    { label: 'Total Infak Bulan Ini', value: 'Rp 45.500.000', icon: 'fa-hand-holding-usd' },
    { label: 'Total Pengeluaran', value: 'Rp 28.350.000', icon: 'fa-file-invoice-dollar' },
    { label: 'Program Aktif', value: '12', icon: 'fa-tasks' },
    { label: 'Jumlah Donatur', value: '345', icon: 'fa-users' }
  ];

  const chartData = [
    { month: 'Jul', in: 80, out: 60 },
    { month: 'Ags', in: 95, out: 75 },
    { month: 'Sep', in: 85, out: 55 },
    { month: 'Okt', in: 100, out: 80 },
    { month: 'Nov', in: 70, out: 40 },
  ];

  return (
    <section id="keuangan" className="section-padding bg-light">
      <div className="container">
        <div className="section-title">
          <h2>Transparansi Keuangan</h2>
          <p>Komitmen Masjid Al-Barokah dalam mengelola amanah umat secara terbuka, akuntabel, dan transparan.</p>
        </div>

        <div className="row g-4 mb-5">
          {stats.map((stat, index) => (
            <div key={index} className="col-lg-3 col-sm-6">
              <div className="card-modern text-center">
                <i className={`fa ${stat.icon} fa-2x text-primary mb-3`}></i>
                <h3 className="fw-bold">{stat.value}</h3>
                <p className="text-muted mb-0">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mock Chart Area */}
        <div className="card-modern p-4 p-md-5">
          <h5 className="mb-4 text-center">Grafik Pemasukan & Pengeluaran (5 Bulan Terakhir)</h5>
          
          <div className="d-flex justify-content-around align-items-end" style={{ height: '250px', paddingBottom: '30px', borderBottom: '1px solid #e9ecef' }}>
            {chartData.map((data, index) => (
              <div key={index} className="d-flex gap-2 align-items-end h-100 position-relative">
                {/* Pemasukan Bar */}
                <div style={{ width: '30px', height: `${data.in}%`, backgroundColor: 'var(--primary)', borderRadius: '4px 4px 0 0', position: 'relative' }} title={`Pemasukan: ${data.in}%`}></div>
                {/* Pengeluaran Bar */}
                <div style={{ width: '30px', height: `${data.out}%`, backgroundColor: '#ff6b6b', borderRadius: '4px 4px 0 0', position: 'relative' }} title={`Pengeluaran: ${data.out}%`}></div>
                
                <span className="position-absolute w-100 text-center text-muted small" style={{ bottom: '-25px', left: 0 }}>{data.month}</span>
              </div>
            ))}
          </div>
          
          <div className="d-flex justify-content-center gap-4 mt-4">
            <div className="d-flex align-items-center">
              <span style={{ width: '15px', height: '15px', backgroundColor: 'var(--primary)', borderRadius: '3px', display: 'inline-block', marginRight: '8px' }}></span>
              <span className="small text-muted">Pemasukan</span>
            </div>
            <div className="d-flex align-items-center">
              <span style={{ width: '15px', height: '15px', backgroundColor: '#ff6b6b', borderRadius: '3px', display: 'inline-block', marginRight: '8px' }}></span>
              <span className="small text-muted">Pengeluaran</span>
            </div>
          </div>
        </div>

        <div className="text-center mt-5">
          <a href="#" className="btn btn-modern">Lihat Laporan Lengkap</a>
        </div>
      </div>
    </section>
  );
}

export default Finance;
