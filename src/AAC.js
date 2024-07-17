import img1 from './images/AAC.png'
import img2 from './images/AAC1.png'
import './AAC.css'
import React from 'react';
import { Link, Outlet, Route, Routes } from 'react-router-dom';
function AAC() {
    return (
        <div>
            <h1>American Alpine Club (AAC)</h1>
            <hr />
            <img src={img1} className="App-logo1" alt="img" />
            <p>American Alpine Club (AAC) là một trong những tổ chức leo núi hàng đầu tại Mỹ, được thành lập với mục tiêu thúc đẩy nghệ thuật và khoa học của leo núi, bảo tồn môi trường, và hỗ trợ cộng đồng leo núi. Dưới đây là câu chuyện thành công của AAC</p>
            <h3>Thành lập và Mục tiêu:</h3>
            <p>American Alpine Club được thành lập vào năm 1902 bởi một nhóm các nhà leo núi đam mê, với mục tiêu phát triển và bảo tồn nghệ thuật leo núi tại Mỹ. Từ những ngày đầu, AAC đã đóng vai trò quan trọng trong việc thúc đẩy các hoạt động leo núi và khám phá các vùng núi ở Bắc Mỹ và trên toàn thế giới.</p>
            <h3>Hỗ trợ Thám Hiểm và Cộng Đồng Leo Núi</h3>
            <p>AAC đã hỗ trợ hàng ngàn cuộc thám hiểm qua việc cung cấp thông tin, tài liệu, và hỗ trợ tài chính. Tổ chức này cũng cung cấp các khoản trợ cấp và học bổng cho các dự án leo núi và nghiên cứu khoa học liên quan đến núi non.</p>
            <h3>Bảo tồn Môi trường và An toàn Leo Núi</h3>
            <p>AAC là một trong những tổ chức tiên phong trong việc bảo tồn môi trường núi. Họ thực hiện các chương trình giáo dục về bảo tồn và thúc đẩy các chính sách bảo vệ môi trường. AAC cũng đặt nặng vấn đề an toàn trong leo núi, cung cấp tài liệu và đào tạo về kỹ thuật an toàn, cứu hộ, và sơ cứu.</p>
            <h3>Xuất bản và Chia sẻ Kiến thức</h3>
            <p>AAC xuất bản nhiều tài liệu và tạp chí chuyên về leo núi, như American Alpine Journal. Đây là nguồn tài liệu quý giá cho cộng đồng leo núi, chia sẻ những câu chuyện thám hiểm, kinh nghiệm và các kỹ thuật mới. Tạp chí này cũng ghi lại các cuộc thám hiểm đáng chú ý và những thành tựu quan trọng trong lịch sử leo núi.</p>
            <h3>Hoạt động Cộng đồng và Kết nối</h3>
            <p> AAC tổ chức nhiều sự kiện cộng đồng như hội thảo, hội nghị và các buổi gặp mặt dành cho những người leo núi. Các sự kiện này tạo cơ hội cho các thành viên kết nối, chia sẻ kinh nghiệm và học hỏi lẫn nhau. AAC cũng tổ chức các chương trình dành cho thanh thiếu niên, nhằm truyền cảm hứng và đào tạo thế hệ leo núi tương lai.</p>
            <h3>Các Chương trình Cứu hộ và Hỗ trợ Khẩn cấp</h3>
            <p>AAC cung cấp các dịch vụ cứu hộ và hỗ trợ khẩn cấp cho các trường hợp gặp nạn khi leo núi. Họ đã thiết lập các quỹ hỗ trợ tài chính và tài liệu hướng dẫn cứu hộ để giúp đỡ những người gặp nạn và gia đình của họ.</p>
            <h3>Tăng cường Quan hệ Quốc tế</h3>
            <p>AAC không chỉ tập trung vào các hoạt động trong nước mà còn thúc đẩy hợp tác quốc tế. Họ đã tham gia và hỗ trợ nhiều cuộc thám hiểm quốc tế, xây dựng mối quan hệ với các tổ chức leo núi trên toàn thế giới để thúc đẩy sự hợp tác và phát triển chung.</p>
            <h3>Những Thành Công</h3>
            <h4>George Lowe, nhà leo núi đẳng cấp thế giới
            Dòng sản phẩm kế thừa</h4>
            <img src={img2} className="App-logo1" alt="img" />
            <span>George Lowe trên Núi Foraker.</span>
            <p>Rất ít người Mỹ đã có một sự nghiệp leo núi bất cứ điều gì như George Lowe. Và chúng tôi không phải là những người duy nhất nghĩ như vậy: Piolets d'Or đã chọn Lowe cho Giải thưởng Thành tựu trọn đời năm 2023 của họ. Từ những lần leo lên mùa đông đầu tiên của những đỉnh núi cao nhất của Tetons vào những năm 1960, Lowe đã chuyển sang leo núi tiên tiến ở Canada và Alaska vào những năm 1970, bao gồm các mặt phía bắc của Núi Alberta và North Twin ở Rockies và Infinite Spur của Núi Foraker ở Dãy Alaska. Vào đầu những năm 80, ông là người có công trong lần đầu tiên leo lên Mặt Kangshung cực kỳ khó khăn của Everest. Ở tuổi 79, George vẫn ở đó - leo núi và trượt tuyết ở cấp độ cao - và trong bộ phim này, ông chia sẻ suy nghĩ của mình về sự nghiệp leo núi lâu dài và lừng lẫy của mình cũng như sự khiêm tốn và đồng hành cần thiết để tồn tại và vượt trội trên núi.<br/>
            Một dự án đam mê của Chủ tịch trước đây của AAC Jim McCarthy và Tom Hornbein — bản thân họ là những huyền thoại leo núi theo bất kỳ tiêu chuẩn nào — American Alpine Club's Legacy Series vinh danh những nhà leo núi có tầm nhìn xa trông rộng, những người đã tạo nên môn thể thao này như ngày nay và là một cam kết để đảm bảo di sản của họ.</p>
            <h3>AAC</h3>
            <p>American Alpine Club đã và đang đóng góp to lớn cho cộng đồng leo núi toàn cầu qua việc thúc đẩy giáo dục, bảo tồn môi trường, và hỗ trợ các hoạt động leo núi. Với lịch sử hơn một thế kỷ, AAC đã xây dựng một cộng đồng leo núi mạnh mẽ và truyền cảm hứng cho nhiều thế hệ người leo núi trên toàn thế giới.</p>
            <hr />
            <div className='back' >
            <Link to='/HMI' className='menuItem'><button className="btn btn-danger ">back</button></Link>
            </div>
            <div className='next' style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Link to='/NMA' className='menuItem'><button className="btn btn-danger button-right">next</button></Link>
            </div>
        </div>
    );
}
export default AAC