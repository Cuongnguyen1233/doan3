import img1 from './images/NMA1.png'
import img2 from './images/NMA.png'
import './NMA.css'
import React from 'react';
import { Link, Outlet, Route, Routes } from 'react-router-dom';
function NMA() {
    return (
        <div>
            <h1>Nepal Mountaineering Association (NMA)</h1>
            <hr />
            <img src={img1} className="App-logo1" alt="img" />
            <p>Nepal Mountaineering Association (NMA) là một trong những tổ chức leo núi hàng đầu tại Nepal, đóng vai trò quan trọng trong việc phát triển ngành du lịch leo núi và bảo tồn môi trường núi cao. Dưới đây là câu chuyện thành công của NMA</p>
            <h3>Thành lập và Mục tiêu</h3>
            <p>Nepal Mountaineering Association được thành lập vào năm 1973 với mục tiêu thúc đẩy leo núi và du lịch mạo hiểm tại Nepal, đồng thời bảo tồn môi trường và văn hóa núi cao. NMA cũng chịu trách nhiệm cấp phép leo núi cho các đỉnh núi dưới 7,000 mét tại Nepal.</p>
            <h3>Đào tạo và Giáo dục</h3>
            <p>NMA tổ chức nhiều khóa đào tạo và chương trình giáo dục cho người leo núi và hướng dẫn viên. Các khóa học này bao gồm kỹ thuật leo núi, sơ cứu, quản lý khẩn cấp, và các kỹ năng sinh tồn cần thiết. NMA cũng đào tạo các hướng dẫn viên địa phương, giúp nâng cao kỹ năng và kiến thức của họ, đảm bảo an toàn cho các đoàn leo núi.</p>
            <h3>Cấp phép và Quản lý Leo núi</h3>
            <p>Một trong những vai trò chính của NMA là cấp phép và quản lý các hoạt động leo núi tại Nepal. Họ cấp phép leo núi cho hơn 100 đỉnh núi, đảm bảo rằng các hoạt động leo núi diễn ra an toàn và tuân thủ các quy định bảo vệ môi trường.</p>
            <h3>Bảo tồn Môi trường</h3>
            <p>NMA thúc đẩy các chương trình bảo tồn môi trường nhằm bảo vệ các khu vực núi cao khỏi sự tàn phá của du lịch và các hoạt động khác. Họ tổ chức các chiến dịch làm sạch núi, nâng cao nhận thức về bảo vệ môi trường, và hợp tác với các tổ chức quốc tế để bảo vệ hệ sinh thái núi cao.</p>
            <h3>Tăng cường Du lịch Bền vững</h3>
            <p> NMA đã góp phần phát triển du lịch bền vững tại Nepal bằng cách thúc đẩy các hoạt động du lịch có trách nhiệm và bảo vệ văn hóa địa phương. Họ khuyến khích du khách tôn trọng các giá trị văn hóa và môi trường, đồng thời hỗ trợ cộng đồng địa phương thông qua du lịch.</p>
            <h3>Hỗ trợ Cộng đồng Địa phương</h3>
            <p>NMA đóng vai trò quan trọng trong việc hỗ trợ các cộng đồng địa phương sống tại các khu vực núi cao. Họ tạo ra các cơ hội việc làm và đào tạo cho người dân địa phương, giúp họ phát triển kinh tế thông qua du lịch leo núi. NMA cũng thực hiện các dự án phát triển cộng đồng, bao gồm xây dựng trường học và cơ sở hạ tầng y tế.</p>
            <h3>Hợp tác Quốc tế</h3>
            <p>NMA thiết lập quan hệ hợp tác với nhiều tổ chức leo núi quốc tế, thúc đẩy sự trao đổi kinh nghiệm và hợp tác trong lĩnh vực leo núi và bảo tồn môi trường. Họ tổ chức và tham gia vào các hội nghị quốc tế, chia sẻ kiến thức và kinh nghiệm với cộng đồng leo núi toàn cầu.</p>
            <h3>Những Thành Công</h3>
            <h4>Chiến thắng leo núi của Nepal</h4>
            <img src={img2} className="App-logo1" alt="img" />
            <p>Giữa bầu không khí vui mừng và ăn mừng, Hiệp hội leo núi Nepal (NMA) đã gửi lời chào mừng nồng nhiệt và chân thành đến những nhà leo núi giữ kỷ lục đáng chú ý, Tenjen Sherpa, Kristin Harila và Nima Rinji Sherpa, trong số những người khác.<br/>
            Buổi lễ chính thức diễn ra tại hội trường của Tổng cục Du lịch Nepal (NTB) ở Bhrikutimandap, nơi NMA vinh danh Tenjen, Kristin và Nima với Huy hiệu Bạc và thư đánh giá cao.<br/>
            Ngoài ra, Muktu Sherpa, Ang Dawa Sherpa, Ngima Dorchi Sherpa và Pechhumbe Sherpa đã được vinh danh với Thư cảm kích.<br/>
            Tenjen, một cư dân của đô thị nông thôn Makalu ở Sankhuwasabha, và Kristin từ Na Uy cùng giữ kỷ lục hoàn thành nhanh nhất trong tất cả 14 tám nghìn. Lần leo lên núi K2 gần đây của họ ở Pakistan đã hoàn thành cuộc chinh phục tất cả 14 đỉnh núi trên 8.000 mét (khoảng 26.000 feet) trong 92 ngày đáng chú ý, vượt qua kỷ lục trước đó do Nirmal Purja, còn được gọi là "Nims Dai" nắm giữ.<br/>
            Trong một kỳ tích tuyệt vời, Nima, 17 tuổi, đến từ cùng khu vực với Tenjen, đã giành được danh hiệu là người leo núi trẻ nhất của Núi K2, đỉnh núi cao thứ hai thế giới.<br/>
            Hơn nữa, Muktu, Ang Dawa, Ngima, và Pechhumbe đã khắc một chương độc đáo trong lịch sử bằng cách trở thành nhóm anh chị em đầu tiên từ cùng cha mẹ cùng nhau chinh phục những đỉnh cao đầy thử thách của Núi K2. Các nhà leo núi đã trở lại Nepal sáng nay từ Pakistan qua Dubai.<br/>
            Tại sân bay quốc tế Tribhuvan, họ đã được đón tiếp với vinh dự lớn bởi Bộ trưởng Bộ Văn hóa, Du lịch và Hàng không Dân dụng, bà Sushila Sirpali Thakuri, Tổng Giám đốc Sở Du lịch, ông Hom Prasad Luitel, Chủ tịch NMA, ông Nima Nuru Sherpa, và các quan chức khác.<br/>
            Sân bay Kathmandu vang vọng với tiếng reo hò và vòng hoa khi hàng trăm người leo núi, quan chức chính phủ cấp cao và những người có thiện chí tụ tập để chào đón họ trở lại.<br/>
            Sau đó, một cuộc biểu tình đã dẫn những người leo núi đến hội trường NTB để tổ chức lễ kỷ niệm chính thức. Cuộc biểu tình đi qua nhiều vùng khác nhau của Kathmandu, thể hiện niềm tự hào và sự ngưỡng mộ to lớn mà quốc gia dành cho những nhà leo núi phi thường này.<br/>
            Trong buổi lễ, Kristin bày tỏ lòng biết ơn chân thành đến nhóm của cô và những người Sherpa, đặc biệt là ông Tenjen, người có sự hỗ trợ vững chắc là công cụ để đạt được thành công của chiến dịch. Cô bày tỏ tình cảm sâu sắc của mình đối với Nepal, nơi mà giờ đây cô coi là ngôi nhà thứ hai và háo hức mong đợi được trở lại vào mọi dịp có thể.<br/>
            Ông Rakesh Gurung, Giám đốc Bộ phận Du lịch miền núi của Sở Du lịch, thay mặt NMA, trao Huy chương Bạc và thư cảm ơn cho các nhà leo núi. Ông ca ngợi sự cống hiến không lay chuyển của họ và thừa nhận chiến công đáng chú ý của họ.<br/>
            Cố vấn trưởng của NMA, ông Ang Tshering Sherpa, ca ngợi thành tích này là vô song và gửi lời chúc mừng chân thành đến tất cả các nhà leo núi vì đã đảm bảo những kỷ lục này.<br/>
            Ông Nima Nuru Sherpa, Chủ tịch NMA, bày tỏ lòng biết ơn đến tất cả những người đã đóng góp vào sự thành công của chương trình này. Ông nhấn mạnh cam kết của NMA trong việc thúc đẩy du lịch miền núi, bảo tồn môi trường và phúc lợi của các cộng đồng miền núi.</p>
            <h3>NMA</h3>
            <p>Nepal Mountaineering Association đã đạt được nhiều thành công trong việc thúc đẩy leo núi và du lịch mạo hiểm tại Nepal, đồng thời bảo vệ môi trường và hỗ trợ cộng đồng địa phương. Với sự cam kết và nỗ lực không ngừng, NMA đã xây dựng một nền tảng vững chắc cho sự phát triển bền vững của ngành leo núi tại Nepal, truyền cảm hứng và hỗ trợ cho nhiều người yêu thích leo núi trên khắp thế giới.</p>
            <hr />
            <div className='back' >
            <Link to='/AAC' className='menuItem'><button className="btn btn-danger ">back</button></Link>
            </div>
            <div className='next' style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Link to='/JAC' className='menuItem'><button className="btn btn-danger button-right">next</button></Link>
            </div>
        </div>
    );
}
export default NMA