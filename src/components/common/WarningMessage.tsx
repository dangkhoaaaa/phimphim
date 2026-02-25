// phimMiKa/src/components/common/WarningMessage.tsx
import React from 'react';

const WarningMessage = () => {
  return (
    <div className="bg-yellow-500 text-black p-4 text-center">
      <p className="font-bold">Lưu ý / Disclaimer</p>
      <p>
        Dự án này chỉ nhằm mục đích nghiên cứu và học hỏi kỹ thuật, không có mục đích thương mại. Vui lòng tôn trọng bản quyền của các tác phẩm.
        <br />
        Mỗi phim chỉ được phép xem thử tối đa 10 giây, sau đó trình phát sẽ tự dừng và hiển thị cảnh báo.
        <br />
        This project is for technical research and learning purposes only, not for commercial use. Please respect the copyright of the works.
        <br />
        Each movie can only be previewed for up to 10 seconds; after that, the player will automatically stop and show a warning message.
      </p>
      <p className="font-bold">
        © Bản quyền thuộc về các nhà sản xuất và phân phối phim.
        <br />
        © Copyright belongs to the film producers and distributors.
      </p>
    </div>
  );
};

export default WarningMessage;
