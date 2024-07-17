import img1 from './images/SAC.png'
import img2 from './images/SAC1.png'
import './SAC.css'
import React from 'react';
import { Link, Outlet, Route, Routes } from 'react-router-dom';
function SAC() {
    return (
        <div>
            <h1>Swiss Alpine Club (SAC)</h1>
            <hr/>
            <img src={img1} className="App-logo1" alt="img" />
            <p>Swiss Alpine Club (SAC) là một trong những tổ chức leo núi lâu đời và có ảnh hưởng nhất trên thế giới. Với lịch sử hơn một thế kỷ, SAC đã đóng góp quan trọng cho việc phát triển hoạt động leo núi, bảo vệ môi trường và thúc đẩy du lịch mạo hiểm tại Thụy Sĩ và quốc tế. Dưới đây là câu chuyện thành công của SAC</p>
            <h3>Thành lập và Mục tiêu</h3>
            <p>Swiss Alpine Club được thành lập vào năm 1863, với mục tiêu thúc đẩy và phát triển nghệ thuật leo núi, khám phá các dãy núi Thụy Sĩ và bảo tồn môi trường núi cao. SAC là một trong những câu lạc bộ leo núi đầu tiên trên thế giới, và đã trở thành mô hình mẫu cho nhiều tổ chức leo núi khác.</p>
            <h3>Phát triển Cơ sở Hạ tầng Núi</h3>
            <p>Một trong những đóng góp lớn nhất của SAC là xây dựng và duy trì các túp lều và nhà nghỉ trên núi. Với hơn 150 túp lều trải khắp dãy Alps Thụy Sĩ, SAC cung cấp nơi nghỉ chân an toàn và tiện nghi cho hàng ngàn người leo núi mỗi năm. Những cơ sở này không chỉ hỗ trợ các cuộc thám hiểm mà còn thúc đẩy du lịch bền vững.</p>
            <h3>Đào tạo và Giáo dục</h3>
            <p>SAC cung cấp các chương trình đào tạo và giáo dục phong phú về kỹ thuật leo núi, an toàn và quản lý rủi ro. Họ tổ chức các khóa học từ cơ bản đến nâng cao, bao gồm kỹ thuật leo núi đá, băng, leo núi hỗn hợp và trượt tuyết. SAC cũng chú trọng đào tạo cứu hộ và sơ cứu khẩn cấp, đảm bảo an toàn cho cộng đồng leo núi.</p>
            <h3>Bảo tồn Môi trường</h3>
            <p>SAC luôn cam kết bảo vệ môi trường núi. Họ thúc đẩy các chương trình bảo vệ động thực vật quý hiếm, duy trì và làm sạch các tuyến đường leo núi, và giáo dục cộng đồng về tầm quan trọng của việc bảo vệ môi trường. SAC cũng tham gia vào các dự án nghiên cứu về tác động của biến đổi khí hậu đến dãy Alps.</p>
            <h3>Hoạt động Cộng đồng và Kết nối</h3>
            <p>SAC tổ chức nhiều sự kiện cộng đồng như các buổi gặp gỡ, hội thảo và triển lãm về leo núi. Những sự kiện này giúp kết nối các thành viên trong cộng đồng leo núi, chia sẻ kinh nghiệm và thúc đẩy tinh thần đoàn kết. Họ cũng tổ chức các chương trình dành cho thanh thiếu niên, nhằm truyền cảm hứng và đào tạo thế hệ leo núi tương lai.</p>
            <h3>Xuất bản và Chia sẻ Kiến thức</h3>
            <p>SAC xuất bản nhiều tài liệu và tạp chí chuyên về leo núi, như The Alpine Journal. Những ấn phẩm này cung cấp thông tin về các cuộc thám hiểm, kỹ thuật leo núi, và những câu chuyện thành công từ cộng đồng leo núi. Họ cũng lưu trữ và chia sẻ tư liệu lịch sử về leo núi tại Thụy Sĩ và trên thế giới.</p>
            <h3>Hợp tác Quốc tế</h3>
            <p>SAC có mối quan hệ hợp tác chặt chẽ với nhiều tổ chức leo núi trên thế giới. Họ tham gia vào các hội nghị quốc tế, hợp tác trong các dự án nghiên cứu và thám hiểm, và chia sẻ kinh nghiệm với cộng đồng leo núi toàn cầu. Sự hợp tác này đã giúp SAC nâng cao tầm ảnh hưởng và đóng góp vào sự phát triển chung của lĩnh vực leo núi.</p>
            <h3>Những Thành Công</h3>
            <img src={img2} className="App-logo1" alt="img" />
            <ul><h6>Thành tựu Đáng chú ý</h6>
                <li>Chinh phục các đỉnh núi: Các thành viên của SAC đã chinh phục hầu hết các đỉnh núi lớn tại Thụy Sĩ và nhiều đỉnh núi quốc tế.</li>
                <li>Nghiên cứu khoa học: SAC đóng góp vào các nghiên cứu khoa học về địa chất, khí hậu và sinh thái học tại các vùng núi.</li>
                <li>Phát triển du lịch bền vững: SAC đã góp phần phát triển du lịch bền vững, đảm bảo rằng các hoạt động du lịch không gây hại đến môi trường và cộng đồng địa phương.</li>
            </ul>
            <h3>SAC</h3>
            <p>Swiss Alpine Club đã đạt được nhiều thành công trong việc thúc đẩy hoạt động leo núi và nghiên cứu khoa học, bảo vệ môi trường, và xây dựng cộng đồng leo núi mạnh mẽ. Với hơn một thế kỷ hoạt động, SAC đã góp phần quan trọng vào việc phát triển nghệ thuật và khoa học leo núi, truyền cảm hứng và hỗ trợ cho nhiều thế hệ người leo núi trên khắp thế giới. Sự cam kết và nỗ lực của SAC không chỉ làm rạng danh dãy Alps Thụy Sĩ mà còn lan tỏa ảnh hưởng tích cực đến cộng đồng leo núi toàn cầu.</p>
            <hr />
            <div className='back' >
            <Link to='/NZAC' className='menuItem'><button className="btn btn-danger ">back</button></Link>
            </div>
            <div className='next' style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Link to='/CAI' className='menuItem'><button className="btn btn-danger button-right">next</button></Link>
            </div>
        </div>
    );
}
export default SAC