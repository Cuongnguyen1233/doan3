import img1 from './images/HMI.png'
import img2 from './images/HMI1.png'
import './HMI.css'
import React from 'react';
import { Link, Outlet, Route, Routes } from 'react-router-dom';
function HMI() {
    return (
        <div>
            <h1>Himalayan Mountaineering Institute (HMI)</h1>
            <hr />
            <img src={img1} className="App-logo1" alt="img" />
            <p>Viện leo núi Himalaya (HMI) là một trong những viện leo núi hàng đầu trên thế giới. Được thành lập vào Tháng Mười Một 4thứ, 1954 bởi không ai khác ngoài Pandit Jawaharlal Nehru, Thủ tướng đầu tiên của Ấn Độ, viện nằm trong trạm đồi đẹp như tranh vẽ của Darjeeling.</p>
            <h3>Mục tiêu chính của Viện là:</h3>
            <p>1.Truyền đạt đào tạo lý thuyết và thực hành về leo núi và leo núi.<br />
                2.Để đánh thức sự quan tâm đến leo núi và tình yêu đối với núi.<br />
                3.Đào tạo các thành viên dám nghĩ dám làm của cộng đồng, những người lần lượt giúp thúc đẩy các hoạt động leo núi ở dãy Hy Mã Lạp Sơn như một môn thể thao hoặc như một sự theo đuổi khoa học.</p>
            <h3>Thành lập và Mục tiêu</h3>
            <p>HMI được thành lập vào năm 1954, ngay sau khi Edmund Hillary và Tenzing Norgay chinh phục đỉnh Everest vào năm 1953. Việc thành lập HMI nhằm mục đích thúc đẩy nghệ thuật và khoa học leo núi, đồng thời truyền cảm hứng cho thế hệ trẻ Ấn Độ khám phá và chinh phục các đỉnh núi.</p>
            <h3>Đào tạo và Giáo dục</h3>
            <p>Darjeeling cũng là quê hương của Sherpa Tenzing Norgay, người đầu tiên đặt chân lên đỉnh Everest cao nhất cùng với Sir Edmund Hillary. Và chính tại HMI, Tenzing đã dành phần lớn thời gian sau khi lên đỉnh Everest với tư cách là Giám đốc Đào tạo Thực địa. HMI hiện là một địa danh nổi bật của Darjeeling và là Trung tâm thu hút khách du lịch, nó có tầm nhìn tuyệt đẹp ra núi Kanchenjunga, đỉnh núi cao thứ ba trên thế giới.<br />
                Trong hơn 62 năm tồn tại, Viện đã đào tạo hơn 45.000 nghìn sinh viên trong đó có 2.500 người đến từ các nước ngoài khác nhau. Chứng chỉ hoàn thành khóa học uy tín từ HMI là tài sản quý giá của bất kỳ học viên nào, được công nhận trên toàn thế giới.</p>
            <h3>Đóng Góp Cho Khoa Học và Môi Trường</h3>
            <p>HMI thúc đẩy nghiên cứu khoa học về môi trường và thay đổi khí hậu tại dãy Himalaya. Các nghiên cứu này giúp cung cấp thông tin quý báu về tác động của biến đổi khí hậu đến các khu vực núi cao và góp phần bảo vệ môi trường.</p>
            <h3>Những Thành Công</h3>
            <img src={img2} className="App-logo1" alt="img" />
            <p>HMI tự hào về một dòng dõi của những ngôi sao sáng rất lừng lẫy. Tenzing Norgay được liên kết với HMI với tư cách là Giám đốc Huấn luyện Thực địa từ tháng 6 năm 1954 đến tháng 5 năm 1976.
                Sau đó, ông được bổ nhiệm làm Cố vấn vào tháng 5 năm 1976 và là tinh thần hướng dẫn cho Viện cho đến khi ông qua đời vào tháng 5 năm 1986. Nawang Gombu, người trở thành người đầu tiên leo lên đỉnh Everest hai lần,
                là người hướng dẫn tại HMI kể từ khi thành lập vào năm 1954. Ông kế nhiệm Tenzing làm Giám đốc Đào tạo Thực địa tại HMI vào năm 1976 và tiếp tục đóng góp có giá trị của mình cho viện cho đến khi ông qua đời vào năm 2011.
                Dorjee Lhatoo, một nhà leo núi nổi tiếng khác, người đã leo lên đỉnh Everest, Chomolhari, Matterhorn và Nanda Devi trong số những người khác bắt đầu làm người hướng dẫn tại HMI và sau đó trở thành Phó Giám đốc Đào tạo Thực địa.
                Mặc dù bây giờ đã nghỉ hưu, ông vẫn tiếp tục đưa ra những đề xuất có giá trị của mình để cải thiện Viện. Nima Tashi cũng nằm trong số hàng chục giảng viên tại HMI, đóng góp của ông thông qua các bài giảng và bài nói chuyện của mình đã phổ biến leo núi và phiêu lưu trên khắp đất nước.</p>
            <h4>Norgay leo lên đỉnh Everest (8848m / 29.028ft)</h4>
            <p> Norgay cùng với Edmund Hillary, vào năm 1953, đã tạo động lực cho leo núi nổi lên như một môn thể thao có tổ chức ở Ấn Độ. Pandit Jawaharlal Nehru, Thủ tướng lúc đó và là một người có tầm nhìn, muốn truyền năng lượng dồi dào của thanh niên quốc gia vào lĩnh vực leo núi và do đó cùng với Tiến sĩ Bidhan Chandra Roy, Thủ hiến Tây Bengal, đã lên kế hoạch mở một viện leo núi ở Darjeeling.<br />
                Viện leo núi Himalaya (HMI) được thành lập vào ngày 4 tháng 11 năm 1954. Trong thời gian ngắn, HMI đã trở thành trung tâm xuất sắc trong lĩnh vực leo núi. Darjeeling, là quê hương của Tenzing Norgay và là một trong những nơi đẹp nhất ở Himalaya, đã được chọn làm địa điểm của Viện.<br />
                Pandit Jawaharlal Nehru đã châm ngòi cho một kịch bản mới về thử thách và theo đuổi cuộc phiêu lưu ở những người Ấn Độ trẻ tuổi. Tia lửa đã phát triển thành một ngọn đuốc rực rỡ thắp sáng con đường cho những người chấp nhận thử thách của những ngọn núi và khao khát leo lên cao.<br />
                Ban đầu, Học viện được bắt đầu tại Roy Villa ở đường Lebong Cart, nơi Nữ tu Nivedita, một trong những môn đệ vĩ đại nhất của Swami Vivekananda, đã trải qua vài ngày cuối cùng. HMI đã được chuyển đến vị trí hiện tại của nó trên nhánh phía tây của Birch Hill vào năm 1958. Bên cạnh việc là một học viện leo núi danh tiếng, HMI đã trở thành một trung tâm thu hút khách du lịch quan trọng. Nó có một cái nhìn tuyệt đẹp về Kanchenjunga cao 8586 M, đỉnh núi cao thứ ba trên thế giới. Trong 62 năm tồn tại, viện đã đào tạo hơn 45.000 sinh viên trong đó có 2500 từ nước ngoài. Chứng chỉ từ HMI là tài sản quý giá của tất cả các học viên. Nó không chỉ được UIAA công nhận mà còn được coi là một dấu ấn trong lĩnh vực đào tạo leo núi.</p>
            <hr />
            <div className='next' style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Link to='/AAC' className='menuItem'><button className="btn btn-danger button-right">next</button></Link>
            </div>
        </div>
    );
}
export default HMI