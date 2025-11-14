import React, { useState } from 'react';
import type { Prize } from './prizetable';

// Sử dụng Omit để tạo một kiểu mới không chứa 'id' vì id sẽ được tạo tự động
type NewPrizeData = Omit<Prize, 'id'>;

interface AddPrizeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddPrize: (prizeData: NewPrizeData) => void;
}

function AddPrizeModal({ isOpen, onClose, onAddPrize }: AddPrizeModalProps) {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [type, setType] = useState(''); // Đây là URL hình ảnh
  const [status, setStatus] = useState(true);

  if (!isOpen) {
    return null;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || quantity <= 0) {
      alert('Vui lòng nhập tên và số lượng hợp lệ.');
      return;
    }
    onAddPrize({ name, quantity, type, status });
    // Reset form và đóng modal
    onClose();
    setName('');
    setQuantity(0);
    setType('');
    setStatus(true);
  };

  return (
    // Backdrop
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50" onClick={onClose}>
      {/* Modal Content */}
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md" onClick={(e) => e.stopPropagation()}>
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Thêm Giải Thưởng Mới</h2>
        <form onSubmit={handleSubmit}>
          {/* Tên giải thưởng */}
          <div className="mb-4">
            <label htmlFor="prize-name" className="block text-gray-700 font-semibold mb-2">Tên Giải Thưởng</label>
            <input
              id="prize-name" type="text" value={name} onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          {/* Số lượng */}
          <div className="mb-4">
            <label htmlFor="prize-quantity" className="block text-gray-700 font-semibold mb-2">Số Lượng</label>
            <input
              id="prize-quantity" type="number" value={quantity} onChange={(e) => setQuantity(parseInt(e.target.value, 10) || 0)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required min="1"
            />
          </div>
          {/* URL Hình ảnh */}
          <div className="mb-4">
            <label htmlFor="prize-image" className="block text-gray-700 font-semibold mb-2">URL Hình Ảnh</label>
            <input
              id="prize-image" type="text" value={type} onChange={(e) => setType(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {/* Tình trạng */}
          <div className="mb-6 flex items-center">
            <input id="prize-status" type="checkbox" checked={status} onChange={(e) => setStatus(e.target.checked)} className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
            <label htmlFor="prize-status" className="ml-2 text-gray-700">Hoạt động</label>
          </div>
          {/* Nút bấm */}
          <div className="flex justify-end gap-4">
            <button type="button" onClick={onClose} className="py-2 px-4 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300">Hủy</button>
            <button type="submit" className="py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700">Lưu</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddPrizeModal;