import img1 from './images/JAC.png'
import img2 from './images/JAC1.png'
import './JAC.css'
import React from 'react';
import { Link, Outlet, Route, Routes } from 'react-router-dom';
function JAC() {
    return (
        <div>
            <h1>Japanese Alpine Club (JAC)</h1>
            <hr />
            <img src={img1} className="App-logo1" alt="img" />
            <p>Japanese Alpine Club (JAC) là một trong những tổ chức leo núi lâu đời và có ảnh hưởng nhất tại Nhật Bản, với nhiều thành tựu đáng chú ý trong lịch sử leo núi và nghiên cứu khoa học. Dưới đây là câu chuyện thành công của JAC:</p>
            <h3>Thành lập và Mục tiêu</h3>
            <p>Japanese Alpine Club được thành lập vào năm 1905 bởi một nhóm những người yêu thích leo núi và khám phá thiên nhiên. Mục tiêu của JAC là thúc đẩy hoạt động leo núi, nghiên cứu khoa học về địa chất và sinh thái học, và bảo tồn môi trường núi cao.</p>
            <h3>Đào tạo và Giáo dục</h3>
            <p>JAC cung cấp các chương trình đào tạo và giáo dục về kỹ thuật leo núi, an toàn, và quản lý rủi ro. Họ tổ chức các khóa học, hội thảo và buổi nói chuyện để chia sẻ kiến thức và kinh nghiệm với cộng đồng leo núi. Các chương trình đào tạo của JAC không chỉ dành cho người Nhật mà còn thu hút các nhà leo núi quốc tế.</p>
            <h3>Các Cuộc Thám Hiểm Quốc Tế</h3>
            <p>JAC đã tổ chức và tham gia vào nhiều cuộc thám hiểm quốc tế, bao gồm các cuộc leo núi ở dãy Himalaya, Andes, và các khu vực núi cao khác trên thế giới. Những cuộc thám hiểm này đã đóng góp quan trọng cho sự hiểu biết về địa chất, khí hậu và sinh thái của các vùng núi.</p>
            <h3>Bảo tồn Môi trường</h3>
            <p>JAC rất chú trọng đến việc bảo vệ môi trường núi cao. Họ thúc đẩy các chương trình làm sạch núi, bảo tồn động thực vật quý hiếm, và giáo dục cộng đồng về tầm quan trọng của việc bảo vệ môi trường. Họ cũng tham gia vào các dự án nghiên cứu về tác động của biến đổi khí hậu đến các vùng núi.</p>
            <h3>Xuất bản và Chia sẻ Kiến thức</h3>
            <p> JAC xuất bản nhiều tài liệu và tạp chí chuyên về leo núi, bao gồm Japanese Alpine News và Journal of the Japanese Alpine Club. Những ấn phẩm này cung cấp thông tin về các cuộc thám hiểm, nghiên cứu khoa học, và các kỹ thuật leo núi mới. Họ cũng lưu trữ và chia sẻ tư liệu về lịch sử leo núi tại Nhật Bản và trên thế giới.</p>
            <h3>Hoạt động Cộng đồng và Kết nối</h3>
            <p>JAC tổ chức nhiều sự kiện cộng đồng như các buổi gặp gỡ, hội thảo và triển lãm về leo núi. Những sự kiện này giúp kết nối các thành viên trong cộng đồng leo núi, chia sẻ kinh nghiệm và thúc đẩy tinh thần đoàn kết. Họ cũng tổ chức các chương trình dành cho thanh thiếu niên, nhằm truyền cảm hứng và đào tạo thế hệ leo núi tương lai.</p>
            <h3>Hợp tác Quốc tế</h3>
            <p>JAC có mối quan hệ hợp tác chặt chẽ với nhiều tổ chức leo núi trên thế giới. Họ tham gia vào các hội nghị quốc tế, hợp tác trong các dự án nghiên cứu và thám hiểm, và chia sẻ kinh nghiệm với cộng đồng leo núi toàn cầu. Sự hợp tác này đã giúp JAC nâng cao tầm ảnh hưởng và đóng góp vào sự phát triển chung của lĩnh vực leo núi.</p>
            <h3>Những Thành Công</h3>
            <h4>Junko Tabei, người phụ nữ đầu tiên lên đỉnh Everest năm 1975</h4>
            <img src={img2} className="App-logo1" alt="img" />
            <span>Junko Tabei: 22/09/1939 - 20/10/2016</span>
            <p>Vào tháng 12 năm 1974, với sự tài trợ và một đội ngũ tại chỗ, cô rời chồng và con gái ở Tokyo và bắt đầu một cuộc hành trình dài đến nóc nhà thế giới. Cuộc hành trình này đầy rẫy những tranh cãi nội bộ giữa các đội và những nguy hiểm trên núi. Rời Jiri để bắt đầu chuyến đi dài vào Everest Base Camp là 14 thành viên nữ trong đội, 1 bác sĩ, một đoàn làm phim và 600 porter vào đầu mùa xuân năm 1975 không ai có thể dự đoán rằng, được chọn bởi trưởng nhóm của họ Eiko Hisano, chỉ có Junko và Sherpa leo núi của cô, Ang Tsering, sẽ đứng trên đỉnh vào ngày 16 tháng Năm.
                Trong những tháng dài thích nghi với khí hậu và thiết bị kéo lên núi, nhóm đã phải đối phó với chứng say độ cao, thời tiết xấu, chấn thương và tuyết lở đe dọa tính mạng đã chôn vùi Junko và đồng đội của cô tại Trại 2, 6400m. Họ đã di chuyển vị trí cắm trại của mình lên cao hơn một chút trên sông băng khi Junko nhìn thấy 'tat' leo núi đã bị một nhóm người Tây Ban Nha trước đó bỏ lại bao nhiêu. Động thái đó suýt khiến họ phải trả giá bằng mạng sống. Sự kiên trì của Junko và những người leo núi đồng nghiệp của cô và Sherpa sau đó đảm bảo sự phục hồi nhanh chóng sau chấn thương nghiêm trọng và kết hợp với nhau những bộ dụng cụ mà họ có để tiếp tục leo núi một cách an toàn.
                Gần thời điểm chúng tôi leo núi, Liên Hợp Quốc đã tuyên bố năm 1975 là Năm Quốc tế Phụ nữ tại một hội nghị thế giới được tổ chức tại Mexico City. Sau đó, tôi nghe nói rằng khán giả tại hội nghị đã vỗ tay nhiệt liệt khi tin tức về thành công đầu tiên của phụ nữ trên Everest được báo cáo. Cho dù tôi có muốn hay không, cuộc leo núi của chúng tôi đã trở thành một biểu tượng cho sự tiến bộ xã hội của phụ nữ</p>
            <h3>JAC</h3>
            <p>Japanese Alpine Club đã đạt được nhiều thành công trong việc thúc đẩy hoạt động leo núi và nghiên cứu khoa học, bảo vệ môi trường, và xây dựng cộng đồng leo núi mạnh mẽ. Với hơn một thế kỷ hoạt động, JAC đã góp phần quan trọng vào việc phát triển nghệ thuật và khoa học leo núi, truyền cảm hứng và hỗ trợ cho nhiều thế hệ người leo núi trên khắp thế giới.</p>
            <hr />
            <div className='back' >
                <Link to='/NMA' className='menuItem'><button className="btn btn-danger ">back</button></Link>
            </div>
            <div className='next' style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Link to='/NZAC' className='menuItem'><button className="btn btn-danger button-right">next</button></Link>
            </div>
        </div>
    );
}
export default JAC