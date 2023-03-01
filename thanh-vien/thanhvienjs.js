var infoTV = [
    {name: "Huỳnh Quốc Bảo", chucVu: "Chủ nhiệm", cnyt: "Lợi ích tốt nhất/ncủa bản thân là lợi ích không dành cho bản thân.", avt: '1.jpg'},
    {name: "Phạm Ngọc Tuấn", chucVu: "Trưởng nhóm diễn thuyết", cnyt: "Tôi là nhất", ban: "Nội dung", avt: '2.jpg'},
    {name: "Dương Mai Xuân Lan", chucVu: "", cnyt: "", ban: "Nội dung", avt: 'duongmaixuanlan.jpeg'},
]


// ======================================================================================================


var body = ''
for(var i =0; i < infoTV.length; i ++) {
    body = body + `<div class="u-align-center-xs u-container-style u-list-item u-repeater-item">
    <div
        class="u-container-layout u-similar-container u-valign-bottom-lg u-valign-bottom-md u-valign-bottom-xl u-valign-top-sm u-valign-top-xs u-container-layout-3">
        <div alt="" style="background-image: url('../assets/images/${infoTV[i].avt}');" class="u-border-7 u-border-white u-image u-image-circle u-image-1"
            data-image-width="799" data-image-height="1080"></div>
        <div class="u-align-left u-container-style u-group u-group-1">
            <div
                class="u-container-layout u-valign-middle-sm u-valign-middle-xs u-valign-top-lg u-valign-top-md u-valign-top-xl u-container-layout-2">
                <h3 class="u-custom-font u-font-titillium-web u-text u-text-4">${infoTV[i].name}
                </h3>
                <div
                    class="u-border-3 u-border-white u-expanded-width u-line u-line-horizontal u-opacity u-opacity-60 u-line-1">
                </div>
                ${infoTV[i].ban ? `<p class="u-text u-text-default u-text-5">Ban: ${infoTV[i].ban}</p>`: ''}
    
            </div>
        </div>
    </div>
    </div>`
}
document.getElementById("info-thanh-vien").innerHTML = body;
