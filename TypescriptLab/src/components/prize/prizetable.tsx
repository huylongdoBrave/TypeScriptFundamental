import React, { useState, useEffect } from 'react';
import './prizetable.css'; // Import file CSS

// Định nghĩa kiểu dữ liệu cho một giải thưởng
interface Prize {
  id: number;
  name: string;
  quantity: number;
  type: string;
  status: boolean;
}

const LOCAL_STORAGE_KEY = 'prizes_data';

// Dữ liệu mẫu
const mockPrizes: Prize[] = [
  { id: 1, name: 'Điện thoại iPhone 15', quantity: 10, type: 'https://media.istockphoto.com/id/486309106/photo/evening-view-of-ama-dablam.jpg?s=612x612&w=0&k=20&c=nYB9IkZRtIHbew5p1acHiZXjxuIFKkC9fuXMwGrhf2w=', status: true },
  { id: 2, name: 'Tai nghe Bluetooth', quantity: 50, type: 'data:image/jpeg;base64,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', status: true },
  { id: 3, name: 'Voucher 500k', quantity: 100, type: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnUttGrplQu0DKNPmSsefLSRRmt9QPG8HY8Q&s', status: false },
  { id: 4, name: 'Sạc dự phòng', quantity: 30, type: 'https://media.istockphoto.com/id/470170271/photo/mountain-lion.jpg?s=612x612&w=0&k=20&c=uvnWFglkuRabdY3w2s9G1dcIcVvUrrxkKz47zJUE_TM=', status: true },
];

function PrizeTable() {
  const [prizes, setPrizes] = useState<Prize[]>([]);

  useEffect(() => {
    try {
        if (localStorage.getItem(LOCAL_STORAGE_KEY)) {
            const storedPrizes = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || '[]');
            setPrizes(storedPrizes);
            
            return;
        }else {
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(mockPrizes));
        } 
    } catch (e) {
        setPrizes(mockPrizes);
      console.error('Lỗi khi truy xuất localStorage:', e);
    }

  }, []);

  return (
    <div className="prize-table-container">
      <h1>Bảng Quản Lý Giải Thưởng</h1>
      <table className="prize-data-table">
        <thead>
          <tr>
            <th>Tên Giải Thưởng</th>
            <th>Số Lượng</th>
            <th>Hình Ảnh</th>
            <th>Tình Trạng</th>
          </tr>
        </thead>
        <tbody>
          {prizes.map((prize) => (
            <tr key={prize.id}>
              <td>{prize.name}</td>
              <td>{prize.quantity}</td>
              <td>
                <img src={prize.type} alt={prize.name} className="prize-image" />
              </td>
              <td>
                <span className={`status ${prize.status ? 'status-active' : 'status-inactive'}`}>
                  {prize.status ? 'Hoạt động' : 'Tạm ngưng'}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PrizeTable;
