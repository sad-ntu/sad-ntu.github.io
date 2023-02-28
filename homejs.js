var tintucCLB = {
    tieuDeNho: 'Giáo dục',
    tieuDeLon: 'TẠI SAO 1 BỘ PHẬN HIỆN NAY CHO RẰNG LỊCH SỬ KHÔNG CÒN QUAN TRỌNG?',
    noiDung: '12 năm đèn sách, học rồi chỉ để quên...<br>LỊCH SỬ... Những tập đề cương dài miên man, những cuốn tập dày đặc chữ, những ngày học bài mệt mỏi. Những kỷ niệm thật đáng nhớ của thời học sinh, nhưng còn nội dung thì có lẽ ai cũng quên sạch rồi.<br>Tại sao phải học SỬ? <br>Đơn giản mà,  "Dân ta phải biết sử ta<br>Cho tường gốc tích nước nhà Việt Nam..."<br>BIẾT chứ không phải HIỂU.<br>...<br>Có lẽ đã đến lúc để LỊCH SỬ trở thành một môn học mà chúng ta có thể lựa chọn và yêu thích. Chứ không phải bắt buộc một cách thờ ơ.',
    link: 'https://www.facebook.com/clbdienthuyetvatranhbien.ntu',
    thoiGian: '12:00 Ngày 12/02/2021',
    diaDiem: 'CLB Sinh viên',
    anhLon: 'featured-img1.jpg',  // viết đúng theo format tên tệp.đuôi tệp  Nếu không có ảnh hãy để trống ''
    anhNho: 'featured-img2.jpg',  // lưu ý ảnh 1 và 2 sẽ được lưu ở thư mục: assets/images/
}

var tintucCLB2 = {
    tieuDeNho: 'ĂN CƠM NHÀ VÁC TÙ VÀ HÀNG TỔNG',
    tieuDeLon: 'Đi tình nguyện làm gì để rồi 5 năm chưa ra được trường?',
    noiDung: '"Nhà mình không bao giờ quét, ăn xong không rửa bát... mà sao chăm chỉ tình nguyện trồng cây cuốc đất cho thiên hạ"<br>Chắc chẳng ai còn lạ cảnh gặp hằng hà sa số sinh viên kéo nhau tình nguyện, cũng đã nghe tràn lan những khẩu hiệu bắt tai. <br>Đi tình nguyện để giúp đời, đi tình nguyện để đóng góp cho xã hội, may mắn làm sao khi lớp trẻ vừa giỏi kiến thức vừa nhiệt huyết cống hiến. Nhưng liệu thực tế có màu hồng như vậy?<br>Đóng góp cho xã hội, hay ham vui chỉ lo việc thiên hạ. Trong khi gia đình còn chu cấp  từng miếng ăn nhưng lại đi lo cơm ăn áo mặc cho người khác?<br>Cống hiến cho đời hay lãng phí những thời gian quí báu để tích lũy kiến thức, để rồi trở thành những con người vô dụng?<br>Vâng, có lẽ đã đến lúc nên lo cho tốt cái thân mình, rồi hẵng tính xa xôi!',
    link: 'https://www.facebook.com/clbdienthuyetvatranhbien.ntu',
    thoiGian: '12:00 Ngày 12/02/2021',
    diaDiem: 'CLB Sinh viên',
    anhLon: 'new21.jpeg',  // viết đúng theo format tên tệp.đuôi tệp  Nếu không có ảnh hãy để trống ''
    anhNho1: 'new22.jpeg',  // lưu ý ảnh 1 và 2 sẽ được lưu ở thư mục: assets/images/
    anhNho2: 'new233.jpeg',
}

var truyenCamHungs = [
    {name: 'Huỳnh Quốc Bảo', chucVu: 'Cựu Chủ nhiệm', avt: 'test1.png', noiDung: 'Bởi người hoạ sĩ muốn vẽ phong cảnh phải đứng dưới đồng bằng mới nhìn thấy rõ núi non cao vời và phải đứng trên núi cao mới nhìn bao quát được đồng bằng phía dưới. Cho nên phải là vua mới hiểu được thực chất của dân chúng và phải là dân chúng mới hiểu được vua'},
    {name: 'Phạm Ngọc Tuấn', chucVu: 'Trưởng nhóm Diễn thuyết', avt: 'test2.png', noiDung: 'Tuấn là 1 người không thích rửa chén'},
    {name: 'Thái Thành Luân', chucVu: 'Trưởng nhóm Tranh biện', avt: 'test3.png', noiDung: 'Một con sư tử thì không cần quan tâm đến quan điểm của con cừu'},
]

var highLight = [
    {tieuDe: 'Thay khung ảnh đại diện', anh: '1235.png', link: '', time: 'hhh'},
    {tieuDe: 'Tôi là giảng viên<br>Hãy hỏi tôi', anh: 'poster_20-11.jpg', link: '', time: 'aaa'},
]




// ======================================================================================================


var body = `<section class="featured">
<div class="container">
    <div class="row">
        <div class="col-md-6" data-aos="fade-right" data-aos-delay="400" data-aos-duration="800">
            <div class="title">
                <h6 class="title-primary">${tintucCLB.tieuDeNho}</h6>
                <h1 class="title-blue">${tintucCLB.tieuDeLon}</h1>
            </div>
            <p>${tintucCLB.noiDung}</p>
            <div class="media-element d-flex justify-content-between">
                <div class="media">
                    <i class="fa fa-magic mr-4"></i>
                    <div class="media-body">
                        <h5>Thời gian</h5>
                        ${tintucCLB.thoiGian}
                    </div>
                </div>
                <div class="media">
                    <i class="fa fa-magic mr-4"></i>
                    <div class="media-body">
                        <h5>Địa điểm</h5>
                        ${tintucCLB.diaDiem}
                    </div>
                </div>
            </div>
            <a href="https://www.facebook.com/clbdienthuyetvatranhbien.ntu" class="btn btn-primary">Xem thêm</a>
        </div>
        <div class="col-md-6" data-aos="fade-left" data-aos-delay="400" data-aos-duration="800">
            <div class="featured-img">
                ${tintucCLB.anhNho != '' ? `<img class="featured-big" src="assets/images/${tintucCLB.anhLon}" alt="Featured 1">` : ''}
                ${tintucCLB.anhNho != '' ? `<img class="featured-small" src="assets/images/${tintucCLB.anhNho}" alt="Featured 2">` : ''}
                
            </div>
        </div>
    </div>
</div>
</section>`


var bodyHL = ''
for(var i =0; i < highLight.length; i ++) {
    if (i%2==0) {
        bodyHL += `<div class="col-lg-6">
        <div class="single-rpost d-sm-flex align-items-center" data-aos="fade-right"
            data-aos-duration="800">
            <div class="post-content text-sm-right">
                <time datetime="2019-04-06T13:53">${highLight[i].time}</time>
                <h3><a href="${highLight[i].link}">${highLight[i].tieuDe}</a></h3>

                <a class="post-btn" href="${highLight[i].link}"><i class="fa fa-arrow-right"></i></a>
            </div>
            <div class="post-thumb">
                <img class="img-fluid pic" src="assets/images/${highLight[i].anh}" alt="Post 1">
            </div>
        </div>
    </div>`
    } else {
        bodyHL += `<div class="col-lg-6">
        <div class="single-rpost d-sm-flex align-items-center" data-aos="fade-left"
            data-aos-duration="800">
            <div class="post-thumb">
                <img class="img-fluid pic" src="assets/images/${highLight[i].anh}" alt="Post 1">
            </div>
            <div class="post-content">
                <time datetime="2019-04-06T13:53">${highLight[i].time}</time>
                <h3><a href="${highLight[i].link}">${highLight[i].tieuDe}</a></h3>
                <a class="post-btn" href="${highLight[i].link}"><i class="fa fa-arrow-right"></i></a>
            </div>
        </div>
    </div>`
    }
}
var highLightBody = `<section class="recent-posts">
<div class="container">
    <div class="row">
        ${bodyHL}
    </div>
    <div class="text-center">
        <a href="https://www.facebook.com/clbdienthuyetvatranhbien.ntu" class="btn btn-primary">Xem thêm</a>
    </div>
</div>
</section>`

var news2 = `<section class="trust">
<div class="container">
    <div class="row">
        <div class="offset-xl-1 col-xl-6">
            <div class="title">
                <h6 class="title-primary">${tintucCLB2.tieuDeNho}</h6>
                <h1>${tintucCLB2.tieuDeLon}</h1>
            </div>
            <p>${tintucCLB2.noiDung}
            </p>
            <h5>Thông tin chi tiết</h5>
            <ul class="list-unstyled">
                <li>Thời gian</li>
                <li>${tintucCLB2.thoiGian}</li>
                <li>Địa điểm</li>
                <li>${tintucCLB2.diaDiem}</li>
            </ul>
        </div>
        <div class="col-xl-5 gallery">
            <div class="row no-gutters h-100" ">
                <div class="w-50 h-100" >
                    <img class="img-fluid" src="assets/images/${tintucCLB2.anhLon}" alt="Gallery Image">
                    <i class="fa fa-caret-right"></i>
                </div>
                <div class="w-50 h-50 ">
                    <img class="img-fluid" src="assets/images/${tintucCLB2.anhNho1}" alt="Gallery Image">
                    <i class="fa fa-caret-right"></i>
                </div>
                <div class="w-50 h-50 gal-img gal-img3" >
                    <img class="img-fluid" src="assets/images/${tintucCLB2.anhNho2}">
                    <i class="fa fa-caret-right"></i>
                </div>
            </div>
        </div>
    </div>
</div>
</section>`

var trCHbody = ''
for(var i =0; i < truyenCamHungs.length; i ++) {
    trCHbody = trCHbody + `<div class="swiper-slide text-center">
    <div class="row">
        <div class="offset-lg-1 col-lg-10">
            <div class="test-img" data-aos="fade-up" data-aos-delay="0" data-aos-offset="0"><img
                    src="assets/images/${truyenCamHungs[i].avt}" alt="Testimonial 1"></div>
            <h5 data-aos="fade-up" data-aos-delay="200" data-aos-duration="600"
                data-aos-offset="0">${truyenCamHungs[i].name}</h5>
            <span data-aos="fade-up" data-aos-delay="400" data-aos-duration="600"
                data-aos-offset="0">${truyenCamHungs[i].chucVu}
                CLB</span>
            <p data-aos="fade-up" data-aos-delay="600" data-aos-duration="600"
                data-aos-offset="0">${truyenCamHungs[i].noiDung}</p>
        </div>
    </div>
</div>`
}
var tCH = `<section class="testimonial-and-clients">
<div class="container">
    <div class="testimonials">
        <div class="swiper-container test-slider">
            <div class="swiper-wrapper">
                ${trCHbody}
            </div>
            <div class="test-pagination"></div>
        </div>
    </div>

</div>
</section>`
document.getElementById("tin-tuc").innerHTML = body;
document.getElementById("high-light").innerHTML = highLightBody;
document.getElementById("tin-tuc-2").innerHTML = news2;
document.getElementById("truyen-cam-hung").innerHTML = tCH;