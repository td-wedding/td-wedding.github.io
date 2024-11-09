// Based on https://www.geeksforgeeks.org/how-to-switch-the-language-of-the-page-using-javascript/

// Define the invitation in different languages
var invitation_start_en = "Đức Tuấn & Mỹ Dung cordially invite";
      invitation_end_en = "to our wedding party.";
    invitation_start_vi = "Đức Tuấn & Mỹ Dung thân mời";
      invitation_end_vi = "đến dự tiệc cưới của chúng mình.";

function setInvitation(name_en, name_vi, defaultlang, vi_pronoun="") {
  changeLanguage(defaultlang, before_rsvp_init=true);
  document.getElementById("guest_invitation_en").innerHTML = invitation_start_en + "<br>" + "<strong><em>" + name_en + "</em></strong>" + "<br>" + invitation_end_en;
  if (name_vi=="" && defaultlang=="vi") {
    document.getElementById("guest_invitation_vi").innerHTML = "Đức Tuấn và Mỹ Dung Kính Mời Quý Khách Dự Tiệc Cưới Của Chúng Con.";
  }
  else if (name_en=="" && defaultlang=="en") {
    document.getElementById("guest_invitation_en").innerHTML = "Đức Tuấn & Mỹ Dung Cordially Invite You To Our Wedding Party.";
  }
  else if (vi_pronoun=="") {
    document.getElementById("guest_invitation_vi").innerHTML = invitation_start_vi + "<b>" + name_vi + "</b>" + " " + invitation_end_vi;

  }
  else {
    document.getElementById("guest_invitation_vi").innerHTML = invitation_start_vi + "<b>" + name_vi + "</b>" + " " + invitation_end_vi_no_pronoun + vi_pronoun + ".";
    }
}

// Check if a hash value exists in the URL
if (window.location.hash) {

// Set the content of the webpage 
// depending on the hash value
if (window.location.hash == "#vn") {
  setInvitation(
    name_en="",
    name_vi="",
    defaultlang="vi",
  )
}
if (window.location.hash == "#en") {
  setInvitation(
    name_en="",
    name_vi="",
    defaultlang="en",
  )
}
else if (window.location.hash == "#qtrung") {
  setInvitation(
    name_="Quốc Trung",
    name_="Quốc Trung",
    defaultlang="en",
  )
}
else if (window.location.hash == "#man") {
  setInvitation(
    name_="Huy Mân",
    name_="Huy Mân",
    defaultlang="en",
  )
}
else if (window.location.hash == "#tphuong") {
  setInvitation(
    name_="Tiểu Phương",
    name_="Tiểu Phương",
    defaultlang="en",
  )
}
else if (window.location.hash == "#cnguyen") {
  setInvitation(
    name_="Cao Nguyên & ___",
    name_="Cao Nguyên & ___",
    defaultlang="en",
  )
}
else if (window.location.hash == "#tnguyen") {
  setInvitation(
    name_="Thành Nguyên",
    name_="Thành Nguyên",
    defaultlang="en",
  )
}
else if (window.location.hash == "#vvinh") {
  setInvitation(
    name_="Văn Vinh & ___",
    name_="Văn Vinh & ___",
    defaultlang="en",
  )
}
else if (window.location.hash == "#bvinh") {
  setInvitation(
    name_="Bảo Vinh",
    name_="Bảo Vinh",
    defaultlang="en",
  )
}     
else if (window.location.hash == "#vhung") {
  setInvitation(
    name_="Văn Hưng",
    name_="Văn Hưng",
    defaultlang="en",
  )
}
else if (window.location.hash == "#hung") {
  setInvitation(
    name_="bạn Hùng",
    name_="bạn Hùng",
    defaultlang="en",
  )
}
else if (window.location.hash == "#byen") {
  setInvitation(
    name_="Bình Yên",
    name_="Bình Yên",
    defaultlang="en",
  )
}
else if (window.location.hash == "#tinquynh") {
  setInvitation(
    name_="Tín & Quỳnh",
    name_="Tín & Quỳnh",
    defaultlang="en",
  )
}
else if (window.location.hash == "#thanh") {
  setInvitation(
    name_="Thành & ___",
    name_="Thành & ___",
    defaultlang="en",
  )
}
else if (window.location.hash == "#cuong") {
  setInvitation(
    name_="bạn Cường",
    name_="bạn Cường",
    defaultlang="en",
  )
}
else if (window.location.hash == "#kiet") {
  setInvitation(
    name_="bạn Kiệt",
    name_="bạn Kiệt",
    defaultlang="en",
  )
}
else if (window.location.hash == "#tri") {
  setInvitation(
    name_="bạn Trí",
    name_="bạn Trí",
    defaultlang="en",
  )
}
else if (window.location.hash == "#khoi") {
  setInvitation(
    name_="bạn Khôi",
    name_="bạn Khôi",
    defaultlang="en",
  )
}
else if (window.location.hash == "#tvinh") {
  setInvitation(
    name_="Trung Vinh",
    name_="Trung Vinh",
    defaultlang="en",
  )
}
else if (window.location.hash == "#hoai") {
  setInvitation(
    name_="Hoài & Ái",
    name_="Hoài & Ái",
    defaultlang="en",
  )
}
else if (window.location.hash == "#phat") {
  setInvitation(
    name_="Phát & ___",
    name_="Phát & ___",
    defaultlang="en",
  )
}
else if (window.location.hash == "#linh") {
  setInvitation(
    name_="bạn Linh",
    name_="bạn Linh",
    defaultlang="en",
  )
}
else if (window.location.hash == "#mai") {
  setInvitation(
    name_="bạn Mai",
    name_="bạn Mai",
    defaultlang="en",
  )
}
else if (window.location.hash == "#thu") {
  setInvitation(
    name_="bạn Thư",
    name_="bạn Thư",
    defaultlang="en",
  )
}
else if (window.location.hash == "#tram") {
  setInvitation(
    name_="bạn Trâm",
    name_="bạn Trâm",
    defaultlang="en",
  )
}
else if (window.location.hash == "#phuoc") {
  setInvitation(
    name_="bạn Phước",
    name_="bạn Phước",
    defaultlang="en",
  )
}
else if (window.location.hash == "#chau") {
  setInvitation(
    name_="bạn Châu",
    name_="bạn Châu",
    defaultlang="en",
  )
}
else if (window.location.hash == "#bchau") {
  setInvitation(
    name_="Bảo Châu",
    name_="Bảo Châu",
    defaultlang="en",
  )
}
else if (window.location.hash == "#quynh") {
  setInvitation(
    name_="bạn Quỳnh",
    name_="bạn Quỳnh",
    defaultlang="en",
  )
}
else if (window.location.hash == "#tien") {
  setInvitation(
    name_="Thủy Tiên",
    name_="Thủy Tiên",
    defaultlang="en",
  )
}
else if (window.location.hash == "#khanh") {
  setInvitation(
    name_="Quốc Khánh",
    name_="Quốc Khánh",
    defaultlang="en",
  )
}
else if (window.location.hash == "#hoang") {
  setInvitation(
    name_="Minh Hoàng",
    name_="Minh Hoàng",
    defaultlang="en",
  )
}
else if (window.location.hash == "#phu") {
  setInvitation(
    name_="Phú",
    name_="Phú",
    defaultlang="en",
  )
}
else if (window.location.hash == "#datuyen") {
  setInvitation(
    name_="Đạt & Uyên",
    name_="Đạt & Uyên",
    defaultlang="en",
  )
}
else if (window.location.hash == "#knguyen") {
  setInvitation(
    name_="Kim Nguyên",
    name_="Kim Nguyên",
    defaultlang="en",
  )
}
else if (window.location.hash == "#mhuy") {
  setInvitation(
    name_="Minh Huy",
    name_="Minh Huy",
    defaultlang="en",
  )
}
else if (window.location.hash == "#thuy") {
  setInvitation(
    name_="Thành Huy",
    name_="Thành Huy",
    defaultlang="en",
  )
}
else if (window.location.hash == "#qhuy") {
  setInvitation(
    name_="Quang Huy",
    name_="Quang Huy",
    defaultlang="en",
  )
}
else if (window.location.hash == "#tdat") {
  setInvitation(
    name_="Tiến Đạt",
    name_="Tiến Đạt",
    defaultlang="en",
  )
}



else if (window.location.hash == "#cngaatung") {
  setInvitation(
    name_="chị Nga & anh Tùng",
    name_="chị Nga & anh Tùng",
    defaultlang="en",
    // vi_pronoun="bọn em"
  )
}
else if (window.location.hash == "#cly") {
  setInvitation(
    name_="chị Lý",
    name_="chị Lý",
    defaultlang="en",
    // vi_pronoun="bọn em"
  )
}
else if (window.location.hash == "#jaynhan") {
  setInvitation(
    name_="Chaiyasait & Hân",
    name_="Chaiyasait & Hân",
    defaultlang="en",
  )
}
else if (window.location.hash == "#aaronnjw") {
  setInvitation(
    name_="Aaron & Jiawei",
    name_="Aaron & Jiawei",
    defaultlang="en",
  )
}
else if (window.location.hash == "#tanmay") {
  setInvitation(
    name_="Tanmay",
    name_="Tanmay",
    defaultlang="en",
  )
}
else if (window.location.hash == "#zhao") {
  setInvitation(
    name_="Zhi Hao",
    name_="Zhi Hao",
    defaultlang="en",
  )
}
else if (window.location.hash == "#chansong") {
  setInvitation(
    name_="Chansong",
    name_="Chansong",
    defaultlang="en",
  )
}
else if (window.location.hash == "#zinemily") {
  setInvitation(
    name_="Zin & Emily",
    name_="Zin & Emily",
    defaultlang="en",
  )
}
else if (window.location.hash == "#shahidah") {
  setInvitation(
    name_="Shahidah",
    name_="Shahidah",
    defaultlang="en",
  )
}
else if (window.location.hash == "#profchng") {
  setInvitation(
    name_="Prof. Chng & Family",
    name_="Prof. Chng & Family",
    defaultlang="en",
  )
}

else if (window.location.hash == "#quyen") {
  setInvitation(
    name_="Quyên & Long",
    name_="Quyên & Long",
    defaultlang="en",
  )
}
else if (window.location.hash == "#nhu") {
  setInvitation(
    name_="Trúc Như",
    name_="Trúc Như",
    defaultlang="en",
  )
}
else if (window.location.hash == "#nphuong") {
  setInvitation(
    name_="Như Phương",
    name_="Như Phương",
    defaultlang="en",
  )
}
else if (window.location.hash == "#minh") {
  setInvitation(
    name_="Nguyệt Minh",
    name_="Nguyệt Minh",
    defaultlang="en",
  )
}
else if (window.location.hash == "#quan") {
  setInvitation(
    name_="Minh Quân & ___",
    name_="Minh Quân & ___",
    defaultlang="en",
  )
}
else if (window.location.hash == "#duy") {
  setInvitation(
    name_="Công Duy",
    name_="Công Duy",
    defaultlang="en",
  )
}

else if (window.location.hash == "#uyen") {
  setInvitation(
    name_="Uyên & Khôi",
    name_="Uyên & Khôi",
    defaultlang="en",
  )
}
else if (window.location.hash == "#hthuong") {
  setInvitation(
    name_="Hoài Thương",
    name_="Hoài Thương",
    defaultlang="en",
  )
}
else if (window.location.hash == "#baoan") {
  setInvitation(
    name_="Bảo An",
    name_="Bảo An",
    defaultlang="en",
  )
}
else if (window.location.hash == "#minhnluat") {
  setInvitation(
    name_="Phương Minh & Thanh Luận",
    name_="Phương Minh & Thanh Luận",
    defaultlang="en",
  )
}
else if (window.location.hash == "#vcnthao") {
  setInvitation(
    name_="Thảo & Luật",
    name_="Thảo & Luật",
    defaultlang="en",
  )
}
}
