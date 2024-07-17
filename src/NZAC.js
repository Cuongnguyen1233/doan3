import img1 from './images/NZAC1.png'
import img2 from './images/NZAC.png'
import './NZAC.css'
import React from 'react';
import { Link, Outlet, Route, Routes } from 'react-router-dom';
function NZAC() {
    return (
        <div>
            <h1>New Zealand Alpine Club (NZAC)</h1>
            <hr/>
            <img src={img1} className="App-logo1" alt="img" />
            <p>New Zealand Alpine Club (NZAC) là một tổ chức leo núi có uy tín tại New Zealand, với một lịch sử lâu đời và nhiều đóng góp quan trọng cho cộng đồng leo núi. Dưới đây là câu chuyện thành công của NZAC</p>
            <h3>Thành lập và Mục tiêu</h3>
            <p>New Zealand Alpine Club được thành lập vào năm 1891, với mục tiêu thúc đẩy nghệ thuật leo núi, khám phá các vùng núi của New Zealand và bảo tồn môi trường núi. Từ những ngày đầu, NZAC đã đóng vai trò quan trọng trong việc khám phá và phát triển kỹ thuật leo núi tại New Zealand.</p>
            <h3>Đào tạo và Giáo dục</h3>
            <p>NZAC cung cấp các khóa đào tạo và chương trình giáo dục về kỹ thuật leo núi, an toàn, và quản lý rủi ro. Họ tổ chức các khóa học từ cơ bản đến nâng cao, bao gồm kỹ thuật leo núi đá, băng, và leo núi hỗn hợp. NZAC cũng tổ chức các khóa đào tạo đặc biệt dành cho cứu hộ và sơ cứu khẩn cấp.</p>
            <h3>Bảo tồn Môi trường</h3>
            <p>NZAC rất chú trọng đến việc bảo vệ môi trường núi. Họ thúc đẩy các chương trình làm sạch núi, bảo tồn động thực vật quý hiếm, và giáo dục cộng đồng về tầm quan trọng của việc bảo vệ môi trường. NZAC cũng tham gia vào các dự án nghiên cứu về tác động của biến đổi khí hậu đến các vùng núi.</p>
            <h3>Xuất bản và Chia sẻ Kiến thức</h3>
            <p>NZAC xuất bản nhiều tài liệu và tạp chí chuyên về leo núi, như The Climber và New Zealand Alpine Journal. Những ấn phẩm này cung cấp thông tin về các cuộc thám hiểm, kỹ thuật leo núi, và những câu chuyện thành công từ cộng đồng leo núi. Họ cũng lưu trữ và chia sẻ tư liệu lịch sử về leo núi tại New Zealand.</p>
            <h3>Hoạt động Cộng đồng và Kết nối</h3>
            <p>NZAC tổ chức nhiều sự kiện cộng đồng như các buổi gặp gỡ, hội thảo và triển lãm về leo núi. Những sự kiện này giúp kết nối các thành viên trong cộng đồng leo núi, chia sẻ kinh nghiệm và thúc đẩy tinh thần đoàn kết. Họ cũng tổ chức các chương trình dành cho thanh thiếu niên, nhằm truyền cảm hứng và đào tạo thế hệ leo núi tương lai.</p>
            <h3>Hợp tác Quốc tế</h3>
            <p>NZAC có mối quan hệ hợp tác chặt chẽ với nhiều tổ chức leo núi trên thế giới. Họ tham gia vào các hội nghị quốc tế, hợp tác trong các dự án nghiên cứu và thám hiểm, và chia sẻ kinh nghiệm với cộng đồng leo núi toàn cầu. Sự hợp tác này đã giúp NZAC nâng cao tầm ảnh hưởng và đóng góp vào sự phát triển chung của lĩnh vực leo núi.</p>
            <h3>Những Thành Công</h3>
            <h4>chinh phục đỉnh Everest của Sir Edmund Hillary</h4>
            <img src={img2} className="App-logo1" alt="img" />
            
            <p>Edmund Hillary và Sherpa Tenzing được công nhận là người đầu tiên chạm tay vào giấc mơ chinh phục nóc nhà thế giới dù xung quanh đó vẫn còn nhiều tranh cãi.<br/>
            Hành trình chinh phục Everest của Edmund diễn ra vào năm 1953. Trước đó, những cung đường lên đỉnh bị người Tây Tạng chặn lại, còn Nepal chỉ cho phép một đoàn thám hiểm lên núi trong năm. Trong chuyến chinh phục dãy Alps, Edmund và người bạn George Lowe được mời tham gia leo Everest do Hiệp hội Joint Himalayan Committee tổ chức. Đoàn thám hiểm mang tên Hunt khởi hành vào tháng 3.<br/>
            Edmund dù rất muốn George đồng hành cùng mình song ông được phân đi cùng Sherpa Tenzing. Hai người cùng hơn 400 thành viên thuộc đoàn thám hiểm Hunt tiến lên khu căn cứ của Everest. Trong đoàn có 362 người khuân vác, 20 Sherpa (người dân ở Himalaya chuyên hướng dẫn các đoàn chinh phục đỉnh Everest) và tất cả mang theo khoảng 4,5 tấn hành lý.<br/>
            Đến ngày 26/5, hai thành viên là Bourdillon và Evans phải quay trở về do bình dưỡng khí bị hỏng, dù đã lên tới đỉnh South Summit cách đỉnh Everest khoảng 91 m. Edmund và Tenzing được lệnh leo tiếp. Do điều kiện thời tiết khắc nghiệt, họ phải nghỉ chân tại đỉnh South Col trong 2 ngày rồi mới tiếp tục lên đường cùng 3 thành viên khác trong đoàn vào ngày 28. Tới cuối ngày, Edmund và Tenzing dựng lều tại độ cao 8.500 m trong khi 3 người còn lại tìm đường xuống núi. Sáng ngày hôm sau, Edmund và Tenzing tiếp tục hành trình.<br/>
            Những bước tiến đáng nhớ nhất của cả hai bắt đầu từ một phiến đá cách đỉnh núi 12 m, Hillary nhìn thấy một vết nứt giữa bề mặt tảng đá. Từ đó, những bước tiến tiếp theo đơn giản hơn rất nhiều. Họ đặt chân tới điểm cao nhất của Everest vào lúc 11h30 phút ngày hôm đó. Trong câu chuyện "Giấc mơ thành sự thật" (The Dream Comes True) của mình, Tenzing kể lại rằng chính Edmund Hillary đã đặt bước chân đầu tiên lên đỉnh Everest, dù ông luôn khẳng định hai người chạm đích cùng lúc.</p>
            <h3>NZAC</h3>
            <p>New Zealand Alpine Club đã đạt được nhiều thành công trong việc thúc đẩy hoạt động leo núi và nghiên cứu khoa học, bảo vệ môi trường, và xây dựng cộng đồng leo núi mạnh mẽ. Với hơn một thế kỷ hoạt động, NZAC đã góp phần quan trọng vào việc phát triển nghệ thuật và khoa học leo núi, truyền cảm hứng và hỗ trợ cho nhiều thế hệ người leo núi trên khắp thế giới.</p>
            <hr />
            <div className='back' >
            <Link to='/JAC' className='menuItem'><button className="btn btn-danger ">back</button></Link>
            </div>
            <div className='next' style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Link to='/SAC' className='menuItem'><button className="btn btn-danger button-right">next</button></Link>
            </div>
        </div>
    );
}
export default NZAC