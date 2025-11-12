
import { Component } from '@angular/core';

@Component({
  selector: 'app-staff-view',
  standalone: false,
  templateUrl: './staff.html',
  styleUrls: ['./staff.css']
})

export class Staff {
  staff = {
    id: 'EMP-2025-001',
    name: 'Ikiseh Samuel',
    department: 'Backend Development',
    totalSignIns: 46,
    latenessCount: 8,
    deductions: 300, 
  };

  signInHistory = [
    { date: '2025-11-01', time: '08:25 AM', status: 'Late' },
    { date: '2025-11-02', time: '08:32 AM', status: 'Late' },
    { date: '2025-11-03', time: '08:15 AM', status: 'Late' },
    { date: '2025-11-04', time: '08:28 AM', status: 'Late' },
    { date: '2025-11-05', time: '08:17 AM', status: 'Late' },
    { date: '2025-11-06', time: '08:22 AM', status: 'Late' },
    { date: '2025-11-07', time: '08:09 AM', status: 'Late' },
    { date: '2025-11-08', time: '08:30 AM', status: 'Late' },
  
    { date: '2025-11-09', time: '07:58 AM', status: 'Early' },
    { date: '2025-11-10', time: '07:52 AM', status: 'Early' },
    { date: '2025-11-11', time: '07:45 AM', status: 'Early' },
    { date: '2025-11-12', time: '07:47 AM', status: 'Early' },
    { date: '2025-11-13', time: '07:55 AM', status: 'Early' },
    { date: '2025-11-14', time: '07:49 AM', status: 'Early' },
    { date: '2025-11-15', time: '07:53 AM', status: 'Early' },
    { date: '2025-11-16', time: '07:51 AM', status: 'Early' },
    { date: '2025-11-17', time: '07:46 AM', status: 'Early' },
    { date: '2025-11-18', time: '07:59 AM', status: 'Early' },
    { date: '2025-11-19', time: '07:54 AM', status: 'Early' },
    { date: '2025-11-20', time: '07:56 AM', status: 'Early' },
    { date: '2025-11-21', time: '07:44 AM', status: 'Early' },
    { date: '2025-11-22', time: '07:57 AM', status: 'Early' },
    { date: '2025-11-23', time: '07:43 AM', status: 'Early' },
    { date: '2025-11-24', time: '07:48 AM', status: 'Early' },
    { date: '2025-11-25', time: '07:41 AM', status: 'Early' },
    { date: '2025-11-26', time: '07:50 AM', status: 'Early' },
    { date: '2025-11-27', time: '07:47 AM', status: 'Early' },
    { date: '2025-11-28', time: '07:45 AM', status: 'Early' },
    { date: '2025-11-29', time: '07:40 AM', status: 'Early' },
    { date: '2025-11-30', time: '07:55 AM', status: 'Early' },
    { date: '2025-12-01', time: '07:59 AM', status: 'Early' },
    { date: '2025-12-02', time: '07:42 AM', status: 'Early' },
    { date: '2025-12-03', time: '07:49 AM', status: 'Early' },
    { date: '2025-12-04', time: '07:53 AM', status: 'Early' },
    { date: '2025-12-05', time: '07:50 AM', status: 'Early' },
    { date: '2025-12-06', time: '07:56 AM', status: 'Early' },
    { date: '2025-12-07', time: '07:58 AM', status: 'Early' },
    { date: '2025-12-08', time: '07:55 AM', status: 'Early' },
    { date: '2025-12-09', time: '07:52 AM', status: 'Early' },
    { date: '2025-12-10', time: '07:54 AM', status: 'Early' },
    { date: '2025-12-11', time: '07:59 AM', status: 'Early' },
    { date: '2025-12-12', time: '07:46 AM', status: 'Early' },
    { date: '2025-12-13', time: '07:48 AM', status: 'Early' },
    { date: '2025-12-14', time: '07:57 AM', status: 'Early' },
    { date: '2025-12-15', time: '07:51 AM', status: 'Early' },
    { date: '2025-12-16', time: '07:49 AM', status: 'Early' },
    { date: '2025-12-17', time: '07:55 AM', status: 'Early' },
  ];
  
}
