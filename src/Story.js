import { Link } from 'react-router-dom';
import './Story.css'
import img1 from './images/HMI.png'
import img2 from './images/AAC.png'
import img3 from './images/NMA.png'
import img4 from './images/JAC.png'
import img5 from './images/NZAC.png'
import img6 from './images/SAC.png'
import img7 from './images/CAI.png'
function Story() {
    return (
        <div>
            <h1>Story</h1>
            <hr />
            <div className='list1'>
                <Link to='/HMI'><img src={img1} className="App-logo" alt="img" /></Link>
                <Link to='/HMI' className="link-item"><h4>Himalayan Mountaineering Institute (HMI)</h4></Link>
                <p>HMI được thành lập vào năm 1954, ngay sau khi Edmund Hillary và Tenzing Norgay chinh phục đỉnh Everest vào năm 1953.<br/>
                    Việc thành lập HMI nhằm mục đích thúc đẩy nghệ thuật và khoa học leo núi, đồng thời truyền cảm hứng cho thế hệ trẻ Ấn Độ khám phá và chinh phục các đỉnh núi.<br />
                    Himalayan Mountaineering Institute là một tổ chức leo núi có ảnh hưởng lớn, không chỉ ở Ấn Độ mà còn trên toàn thế giới.<br/>
                    Với sứ mệnh đào tạo, nghiên cứu và bảo tồn, HMI đã tạo ra một cộng đồng leo núi mạnh mẽ và đầy cảm hứng, đồng thời góp phần bảo vệ và hiểu biết về môi trường núi cao.</p>
            </div>
            <br/><hr />
            <div className='list1'>
                <Link to='/AAC'><img src={img2} className="App-logo" alt="img" /></Link>
                <Link to='/AAC' className="link-item"><h4>American Alpine Club (AAC)</h4></Link>
                <p>AAC được thành lập vào năm 1902 với mục tiêu thúc đẩy nghệ thuật và khoa học của leo núi.<br/>
                    Họ cung cấp thông tin, tài liệu và hỗ trợ tài chính cho những người leo núi, tham gia vào các hoạt động bảo tồn môi trường và cứu hộ khẩn cấp.<br />
                    American Alpine Club đã và đang đóng góp to lớn cho cộng đồng leo núi toàn cầu qua việc thúc đẩy giáo dục, bảo tồn môi trường, và hỗ trợ các hoạt động leo núi.<br/>
                    Với lịch sử hơn một thế kỷ, AAC đã xây dựng một cộng đồng leo núi mạnh mẽ và truyền cảm hứng cho nhiều thế hệ người leo núi trên toàn thế giới.</p>
            </div>
            <br/><hr />
            <div className='list1'>
                <Link to='/NMA'><img src={img3} className="App-logo" alt="img" /></Link>
                <Link to='/NMA' className="link-item"><h4>Nepal Mountaineering Association (NMA)</h4></Link>
                <p>NMA, thành lập năm 1973, đã góp phần nâng cao tiêu chuẩn an toàn và đạo đức trong leo núi tại Nepal.<br/>
                    Họ cũng bảo tồn và phát triển các khu vực leo núi, cung cấp khóa đào tạo và cấp phép cho các hướng dẫn viên leo núi.<br />
                    Nepal Mountaineering Association đã đạt được nhiều thành công trong việc thúc đẩy leo núi và du lịch mạo hiểm tại Nepal, đồng thời bảo vệ môi trường và hỗ trợ cộng đồng địa phương.<br/>
                    Với sự cam kết và nỗ lực không ngừng, NMA đã xây dựng một nền tảng vững chắc cho sự phát triển bền vững của ngành leo núi tại Nepal, truyền cảm hứng và hỗ trợ cho nhiều người yêu thích leo núi trên khắp thế giới.</p>
            </div>
            <br/><hr />
            <div className='list1'>
                <Link to='/JAC'><img src={img4} className="App-logo" alt="img" /></Link>
                <Link to='/JAC' className="link-item"><h4> Japanese Alpine Club (JAC)</h4></Link>
                <p>Thành lập năm 1905, JAC đã tổ chức nhiều cuộc thám hiểm quốc tế và có nhiều đóng góp quan trọng cho ngành nghiên cứu địa chất và sinh thái học.<br/>
                    Họ thúc đẩy tinh thần mạo hiểm và khám phá khoa học.<br />
                    Japanese Alpine Club đã đạt được nhiều thành công trong việc thúc đẩy hoạt động leo núi và nghiên cứu khoa học, bảo vệ môi trường, và xây dựng cộng đồng leo núi mạnh mẽ.<br/>
                    Với hơn một thế kỷ hoạt động, JAC đã góp phần quan trọng vào việc phát triển nghệ thuật và khoa học leo núi, truyền cảm hứng và hỗ trợ cho nhiều thế hệ người leo núi trên khắp thế giới.</p>
            </div>
            <br/><hr />
            <div className='list1'>
                <Link to='/NZAC'><img src={img5} className="App-logo" alt="img" /></Link>
                <Link to='/NZAC' className="link-item"><h4>New Zealand Alpine Club (NZAC)</h4></Link>
                <p>Thành lập vào năm 1891, NZAC đã hỗ trợ và tổ chức nhiều cuộc thám hiểm thành công, bao gồm cả việc chinh phục đỉnh Everest của Sir Edmund Hillary.<br/>
                    Họ cũng đóng góp vào việc phát triển kỹ thuật và an toàn trong leo núi.<br />
                    New Zealand Alpine Club đã đạt được nhiều thành công trong việc thúc đẩy hoạt động leo núi và nghiên cứu khoa học, bảo vệ môi trường, và xây dựng cộng đồng leo núi mạnh mẽ.<br/>
                    Với hơn một thế kỷ hoạt động, NZAC đã góp phần quan trọng vào việc phát triển nghệ thuật và khoa học leo núi, truyền cảm hứng và hỗ trợ cho nhiều thế hệ người leo núi trên khắp thế giới.</p>
                </div>
                <br/><hr />
            <div className='list1'>
                <Link to='/SAC'><img src={img6} className="App-logo" alt="img" /></Link>
                <Link to='/SAC' className="link-item"><h4>Swiss Alpine Club (SAC)</h4></Link>
                <p>Thành lập năm 1863, SAC đã góp phần phát triển hệ thống các tuyến đường leo núi và hut (nhà nghỉ trên núi) tại Thụy Sĩ.<br/>
                    Họ cũng thúc đẩy nghiên cứu và bảo tồn môi trường núi.<br />
                    Swiss Alpine Club đã đạt được nhiều thành công trong việc thúc đẩy hoạt động leo núi và nghiên cứu khoa học, bảo vệ môi trường, và xây dựng cộng đồng leo núi mạnh mẽ.<br/>
                    Với hơn một thế kỷ hoạt động, SAC đã góp phần quan trọng vào việc phát triển nghệ thuật và khoa học leo núi, truyền cảm hứng và hỗ trợ cho nhiều thế hệ người leo núi trên khắp thế giới.<br/>
                    Sự cam kết và nỗ lực của SAC không chỉ làm rạng danh dãy Alps Thụy Sĩ mà còn lan tỏa ảnh hưởng tích cực đến cộng đồng leo núi toàn cầu.</p>
            </div>
            <hr />
            <div className='list1'>
                <Link to='/CAI'><img src={img7} className="App-logo" alt="img" /></Link>
                <Link to='/CAI' className="link-item"><h4>Club Alpino Italiano (CAI)</h4></Link>
                <p>CAI, thành lập năm 1863, đã tổ chức nhiều cuộc thám hiểm và đóng góp vào việc phát triển kỹ thuật leo núi.<br/>
                    Họ cũng tham gia vào các hoạt động bảo tồn và giáo dục cộng đồng về an toàn và bảo vệ môi trường núi.<br />
                    Club Alpino Italiano đã đạt được nhiều thành công trong việc thúc đẩy hoạt động leo núi và nghiên cứu khoa học, bảo vệ môi trường, và xây dựng cộng đồng leo núi mạnh mẽ.<br/>
                    Với hơn một thế kỷ hoạt động, CAI đã góp phần quan trọng vào việc phát triển nghệ thuật và khoa học leo núi, truyền cảm hứng và hỗ trợ cho nhiều thế hệ người leo núi trên khắp thế giới.<br/>
                    Sự cam kết và nỗ lực của CAI không chỉ làm rạng danh các dãy núi Ý mà còn lan tỏa ảnh hưởng tích cực đến cộng đồng leo núi toàn cầu.</p>
            </div>
            <br/><hr />
        </div>
    );
}
export default Story;