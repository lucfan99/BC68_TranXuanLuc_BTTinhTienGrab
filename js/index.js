const UBER_CAR = "uberCar";
const UBER_SUV = "uberSUV";
const UBER_BLACK = "uberBlack";
const kiemTraGiaTienkmDautien = (loaiXe) => {
  switch (loaiXe) {
    case UBER_CAR:
      return 8000;
    case UBER_SUV:
      return 9000;
    case UBER_BLACK:
      return 10000;
  }
};
//hàm lấy giá tiền km từ 1-19
const kiemTraGiaTienkmTu1Den19 = (loaiXe) => {
  switch (loaiXe) {
    case UBER_CAR:
      return 7500;
    case UBER_SUV:
      return 8500;
    case UBER_BLACK:
      return 9500;
  }
};
//hàm lấy hia tiền từ 19 trở lên
const kiemTraGiaTienkmTu19TroLen = (loaiXe) => {
  switch (loaiXe) {
    case UBER_CAR:
      return 7000;
    case UBER_SUV:
      return 8000;
    case UBER_BLACK:
      return 9000;
  }
};
//hàm lấy gía tiền thời gian chờ
const kiemTraGiaTienCho = (loaiXe) => {
  switch (loaiXe) {
    case UBER_CAR:
      return 2000;
    case UBER_SUV:
      return 3000;
    case UBER_BLACK:
      return 3500;
  }
};

document.getElementById("btn-tinhTien").onclick = () => {
  console.log("Nút tính tiền");
  let loaiXe = document.querySelector("input[type='radio']:checked").value;
  console.log(loaiXe);
  let soKM = document.getElementById("txt-km").value * 1;
  console.log(soKM);
  let timeCho = document.getElementById("txt-thoiGianCho").value * 1;
  console.log(timeCho);
  let giaTienKmDauTien = kiemTraGiaTienkmDautien(loaiXe);
  console.log(giaTienKmDauTien);
  let giaTienKmTu1Den19 = kiemTraGiaTienkmTu1Den19(loaiXe);
  let giaTienKmTu19TroLen = kiemTraGiaTienkmTu19TroLen(loaiXe);
  let giaTienCho = kiemTraGiaTienCho(loaiXe);

  let sumTong = 0;
  let tienCho = 0;
  // let tienF = 0;
  // let tienS = 0;
  // let tienT = 0;
  let tongTien = 0;
  if (soKM <= 1 && soKM > 0) {
    tongTien = soKM * giaTienKmDauTien;
    // tienF = soKM * giaTienKmDauTien;
  } else if (soKM > 1 && soKM <= 19) {
    tongTien = giaTienKmDauTien + (soKM - 1) * giaTienKmTu1Den19;
    // tienF = giaTienKmDauTien;
    // tienS = (soKM - 1) * giaTienKmTu1Den19;
  } else {
    tongTien =
      giaTienKmDauTien +
      18 * giaTienKmTu1Den19 +
      (soKM - 19) * giaTienKmTu19TroLen;
    // tienF = giaTienKmDauTien;
    // tienS = 18 * giaTienKmTu1Den19;
    // tienT = (soKM - 19) * giaTienKmTu19TroLen;
  }

  if (timeCho > 3) {
    let time = Math.floor(timeCho / 3);
    tienCho = giaTienCho * time;
  } else {
    tienCho = 0;
  }
  console.log(tienCho);
  sumTong = tongTien + tienCho;

  //th1 :Đi trong 1 km  => if(sokm <=1 && sokm >0){sokm người dùng đi * giatienkmDauTien}
  // th2 : 1 - 19  => 1* giaTienKmDauTien + (soKm - 1)* giaTienKmTu1Den19
  // th3 : giaTienKmDauTien +18 * giaTienKmTu1Den19 + (sokm -19)*giaTienKmTu19TroLen
  // tính giá tiền chờ => if(timecho > 3) = math.floor((timecho-3)/3)

  document.getElementById("divThanhTien").style.display = "block";
  document.getElementById("xuatTien").innerHTML = sumTong.toLocaleString("vi", {
    currency: "VND",
    style: "currency",
  });
};

//test modal cua bs4
// $("#myModal").modal("show");

document.getElementById("btn_inHoaDon").onclick = () => {
  let loaiXe = document.querySelector("input[type='radio']:checked").value;
  console.log(loaiXe);
  let soKM = document.getElementById("txt-km").value * 1;
  console.log(soKM);
  let timeCho = document.getElementById("txt-thoiGianCho").value * 1;
  console.log(timeCho);

  let giaTienKmDauTien = kiemTraGiaTienkmDautien(loaiXe);
  console.log(giaTienKmDauTien);
  let giaTienKmTu1Den19 = kiemTraGiaTienkmTu1Den19(loaiXe);
  let giaTienKmTu19TroLen = kiemTraGiaTienkmTu19TroLen(loaiXe);
  let giaTienCho = kiemTraGiaTienCho(loaiXe);

  let sumTong = 0;
  let tienCho = 0;
  let tienF = 0;
  let tienS = 0;
  let tienT = 0;
  let tongTien = 0;
  if (soKM <= 1 && soKM > 0) {
    tongTien = soKM * giaTienKmDauTien;
    tienF = soKM * giaTienKmDauTien;
  } else if (soKM > 1 && soKM <= 19) {
    tongTien = giaTienKmDauTien + (soKM - 1) * giaTienKmTu1Den19;
    tienF = giaTienKmDauTien;
    tienS = (soKM - 1) * giaTienKmTu1Den19;
  } else {
    tongTien =
      giaTienKmDauTien +
      18 * giaTienKmTu1Den19 +
      (soKM - 19) * giaTienKmTu19TroLen;
    tienF = giaTienKmDauTien;
    tienS = 18 * giaTienKmTu1Den19;
    tienT = (soKM - 19) * giaTienKmTu19TroLen;
  }

  if (timeCho > 3) {
    let time = Math.floor(timeCho / 3);
    tienCho = giaTienCho * time;
  } else {
    tienCho = 0;
  }
  console.log(tienCho);
  sumTong = tongTien + tienCho;

  $("#myModal").modal("show");
  document.querySelector(".modal-body").innerHTML = `<table>
<tr><th colspan="4" class="text-center">CHI TIẾT HÓA ĐƠN</th></tr>
<tr>
 <td>CHI TIẾT</td>
 <td>SỬ DỤNG</td>
 <td>ĐƠN GIÁ (1000đ)</td>
 <td>THÀNH TIỀN (1000đ)</td>
</tr>
<tr>
<td>KM ĐẦU TIÊN</td>
<td class="kmDau"></td>
<td class="priceFirst"></td>
<td id="thanhTienFirst"></td>
</tr>
<tr>
  <td>Từ <span class="numStart1_19">...</span> đến</td>
  <td> <span class="numEnd1_19"> ...</span> </td>
  <td class="price1_19"> </td>
  <td id="thanhTien1_19"> </td>
</tr>
<tr>
  <td>Từ <span class="numS20">...</span> đến</td>
  <td> <span class="numE20">...</span> </td>
  <td class="price20"> </td>
  <td id="thanhTien20"> </td>
</tr>
<tr>
  <td>Thời gian chờ</td>
  <td class="timeWait"></td>
  <td class="priceWait"></td>
  <td id="thanhTienCho"></td>
</tr>
<tr>
  <td colspan="4" class="text-right">TỔNG TIỀN: <span id="tongTienPhaiTra"></span> </td>
</tr>
  </table>
  `;

  if (soKM <= 1 && soKM > 0) {
    document.querySelector(".kmDau").innerHTML = soKM;
    document.querySelector(".priceFirst").innerHTML =
      giaTienKmDauTien.toLocaleString("vi", {
        currency: "VND",
        style: "currency",
      });
    document.getElementById("thanhTienFirst").innerHTML = tienF.toLocaleString(
      "vi",
      {
        currency: "VND",
        style: "currency",
      }
    );
  } else if (soKM > 1 && soKM <= 19) {
    document.querySelector(".kmDau").innerHTML = 1;
    document.querySelector(".priceFirst").innerHTML =
      giaTienKmDauTien.toLocaleString("vi", {
        currency: "VND",
        style: "currency",
      });
    document.querySelector(".numStart1_19").innerHTML = 1;
    document.querySelector(".numEnd1_19").innerHTML = soKM;
    document.querySelector(".price1_19").innerHTML =
      giaTienKmTu1Den19.toLocaleString("vi", {
        currency: "VND",
        style: "currency",
      });
    document.getElementById("thanhTienFirst").innerHTML = tienF.toLocaleString(
      "vi",
      {
        currency: "VND",
        style: "currency",
      }
    );
    document.getElementById("thanhTien1_19").innerHTML = tienS.toLocaleString(
      "vi",
      {
        currency: "VND",
        style: "currency",
      }
    );
  } else {
    document.querySelector(".kmDau").innerHTML = 1;
    document.querySelector(".priceFirst").innerHTML =
      giaTienKmDauTien.toLocaleString("vi", {
        currency: "VND",
        style: "currency",
      });
    document.querySelector(".numStart1_19").innerHTML = 1;
    document.querySelector(".numEnd1_19").innerHTML = 19;
    document.querySelector(".numS20").innerHTML = 19;
    document.querySelector(".price1_19").innerHTML =
      giaTienKmTu1Den19.toLocaleString("vi", {
        currency: "VND",
        style: "currency",
      });
    document.querySelector(".numE20").innerHTML = soKM;
    document.querySelector(".price20").innerHTML =
      giaTienKmTu19TroLen.toLocaleString("vi", {
        currency: "VND",
        style: "currency",
      });
    document.getElementById("thanhTienFirst").innerHTML = tienF.toLocaleString(
      "vi",
      {
        currency: "VND",
        style: "currency",
      }
    );
    document.getElementById("thanhTien1_19").innerHTML = tienS.toLocaleString(
      "vi",
      {
        currency: "VND",
        style: "currency",
      }
    );
    document.getElementById("thanhTien20").innerHTML = tienT.toLocaleString(
      "vi",
      {
        currency: "VND",
        style: "currency",
      }
    );
  }
  document.querySelector(".timeWait").innerHTML = timeCho;
  document.querySelector(".priceWait").innerHTML = giaTienCho.toLocaleString(
    "vi",
    {
      currency: "VND",
      style: "currency",
    }
  );

  document.getElementById("thanhTienCho").innerHTML = tienCho.toLocaleString(
    "vi",
    {
      currency: "VND",
      style: "currency",
    }
  );
  document.getElementById("tongTienPhaiTra").innerHTML = sumTong.toLocaleString(
    "vi",
    {
      currency: "VND",
      style: "currency",
    }
  );
};
