import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import QuanLy from '../QuanLy/QuanLy'
import ScrollComponent from '../../common/ScrollComponent'

import DeXuatBanSi from '../QuanLy/MoRong/BanHang/DeXuatBanSi'
import SPDangBooking from '../QuanLy/MoRong/BanHang/SPDangBooking'
import PhieuDatCho from '../QuanLy/MoRong/BanHang/PhieuDatCho'
import PhieuDatCoc from '../QuanLy/MoRong/BanHang/PhieuDatCoc'
// import PhieuDatCoc from '../QuanLy/MoRong/BanHang/MoRongPhieuDatCoc/PhieuDatCoc'

import YeuCauHuyDatCoc from '../QuanLy/MoRong/BanHang/YeuCauHuyDatCoc'

import HoatDongGopVonNoiBo from '../QuanLy/MoRong/GopVon/HoatDongGopVonNoiBo'
// import HoatDongGopVonNoiBo from '../QuanLy/MoRong/HopDong/MoRongNguyenTacHopDong/HopDongNguyenTac'

import DeXuatGopVonNoiBo from '../QuanLy/MoRong/GopVon/DeXuatGopVonNoiBo'
// import CreateRevenue from '../QuanLy/MoRong/GopVon/CreateRevenue'

import YeuCauMoiGioi from '../QuanLy/MoRong/MoiGioi/YeuCauMoiGioi'
import TaoPhieuMoiGioi from '../QuanLy/MoRong/MoiGioi/MoRongYeuCauMoiGioi/TaoPhieuMoiGioi'
import PhieuDatCoc72h from '../QuanLy/MoRong/MoiGioi/PhieuDatCoc72h'
import PhieuCoc3Ben from '../QuanLy/MoRong/MoiGioi/PhieuCoc3Ben'

import HDNguyenTac from '../QuanLy/MoRong/HopDong/HDNguyenTac'
// import HDNguyenTac from '../QuanLy/MoRong/HopDong/MoRongNguyenTacHopDong/HopDongNguyenTac'
import HDVay from '../QuanLy/MoRong/HopDong/HDVay'
import HDMuaBan from '../QuanLy/MoRong/HopDong/HDMuaBan'
import HDDichVu from '../QuanLy/MoRong/HopDong/HDDichVu'


import DoanhThuHoaHong from '../QuanLy/MoRong/TienIch/DoanhThuHoaHong'
import SPKhoa from '../QuanLy/MoRong/TienIch/SPKhoa'
import SanPhamYeuThich from '../QuanLy/MoRong/TienIch/SanPhamYeuThich'
import YeuCauBookCheo from '../QuanLy/MoRong/TienIch/YeuCauBookCheo'
import TaiKhoan from '../QuanLy/MoRong/TienIch/TaiKhoan'

import DoiMatKhau from '../QuanLy/MoRong/TienIch/MoRongTaiKhoan/DoiMatKhau'
import VanBanDacBiet from "../QuanLy/MoRong/TienIch/VanBanDacBiet"
import DeXuatChuyenTen from "../QuanLy/MoRong/TienIch/MoRongVanBanDacBiet/DeXuatChuyenTen"
import DeXuatChuyenTen1 from "../QuanLy/MoRong/TienIch/MoRongVanBanDacBiet/MoRongDeXuatChuyenTen/DeXuatChuyenTen"
import DeXuatDoiTTKH from "../QuanLy/MoRong/TienIch/MoRongVanBanDacBiet/DeXuatDoiThongTinKhachHang"
import DeXuatDoiTTKH1 from '../QuanLy/MoRong/TienIch/MoRongVanBanDacBiet/MoRongDeXuatDoiThongTinKhachHang/DeXuatDoiTTKH'

import { ImageBackground, Image } from 'react-native';

const Stack = createStackNavigator();
function LogoTitle() {
    return (
        <Image
            style={{

                width: "100%",
                height: 55
            }}
            source={require('../../assest/BG.jpg')}
        />
    );
}
const QuanLyNavigation = () => {
    return (
        <Stack.Navigator>

            <Stack.Screen
                name="QuanLy" component={QuanLy}
                options=
                {{
                    title: 'Quản lý',
                    headerTintColor: '#fff',
                    headerBackground: props => <LogoTitle {...props} />,
                }}
            />

            <Stack.Screen
                name="DeXuatBanSi" component={DeXuatBanSi}
                options=
                {{
                    // title: 'Quản lý',
                    headerTintColor: '#fff',
                    headerBackground: props => <LogoTitle {...props} />,
                }}
            />
            <Stack.Screen
                name="ScrollComponent" component={ScrollComponent}
                options=
                {{
                    // title: 'Quản lý',
                    headerTintColor: '#fff',
                    headerBackground: props => <LogoTitle {...props} />,
                }}
            />
            <Stack.Screen
                name="SPDangBooking" component={SPDangBooking}
                options=
                {{
                    // title: 'Quản lý',
                    headerTintColor: '#fff',
                    headerBackground: props => <LogoTitle {...props} />,
                }}
            />
            <Stack.Screen
                name="PhieuDatCho" component={PhieuDatCho}
                options=
                {{
                    // title: 'Quản lý',
                    headerTintColor: '#fff',
                    headerBackground: props => <LogoTitle {...props} />,
                }}
            />
            <Stack.Screen
                name="PhieuDatCoc" component={PhieuDatCoc}
                options=
                {{
                    // title: 'Quản lý',
                    headerTintColor: '#fff',
                    headerBackground: props => <LogoTitle {...props} />,
                }}
            />
            <Stack.Screen
                name="YeuCauHuyDatCoc" component={YeuCauHuyDatCoc}
                options=
                {{
                    // title: 'Quản lý',
                    headerTintColor: '#fff',
                    headerBackground: props => <LogoTitle {...props} />,
                }}
            />
            <Stack.Screen
                name="HoatDongGopVonNoiBo" component={HoatDongGopVonNoiBo}
                options=
                {{
                    // title: 'Quản lý',
                    headerTintColor: '#fff',
                    headerBackground: props => <LogoTitle {...props} />,
                }}
            />
            <Stack.Screen
                name="DeXuatGopVonNoiBo" component={DeXuatGopVonNoiBo}
                options=
                {{
                    // title: 'Quản lý',
                    headerTintColor: '#fff',
                    headerBackground: props => <LogoTitle {...props} />,
                }}
            />
            {/* <Stack.Screen
                name="CreateDoanhThuHoaHong" component={CreateDoanhThuHoaHong}
                options=
                {{
                    // title: 'Quản lý',
                    headerTintColor: '#fff',
                    headerBackground: props => <LogoTitle {...props} />,
                }}
            /> */}
            <Stack.Screen
                name="YeuCauMoiGioi" component={YeuCauMoiGioi}
                options=
                {{
                    // title: 'Quản lý',
                    headerTintColor: '#fff',
                    headerBackground: props => <LogoTitle {...props} />,
                }}
            />
            <Stack.Screen
                name="TaoPhieuMoiGioi" component={TaoPhieuMoiGioi}
                options=
                {{
                    // title: 'Quản lý',
                    headerTintColor: '#fff',
                    headerBackground: props => <LogoTitle {...props} />,
                }}
            />
            <Stack.Screen
                name="PhieuDatCoc72h" component={PhieuDatCoc72h}
                options=
                {{
                    // title: 'Quản lý',
                    headerTintColor: '#fff',
                    headerBackground: props => <LogoTitle {...props} />,
                }}
            />
            <Stack.Screen
                name="PhieuCoc3Ben" component={PhieuCoc3Ben}
                options=
                {{
                    // title: 'Quản lý',
                    headerTintColor: '#fff',
                    headerBackground: props => <LogoTitle {...props} />,
                }}
            />
            <Stack.Screen
                name="HDNguyenTac" component={HDNguyenTac}
                options=
                {{
                    // title: 'Quản lý',
                    headerTintColor: '#fff',
                    headerBackground: props => <LogoTitle {...props} />,
                }}
            />

            <Stack.Screen
                name="HDVay" component={HDVay}
                options=
                {{
                    // title: 'Quản lý',
                    headerTintColor: '#fff',
                    headerBackground: props => <LogoTitle {...props} />,
                }}
            />
            <Stack.Screen
                name="HDMuaBan" component={HDMuaBan}
                options=
                {{
                    // title: 'Quản lý',
                    headerTintColor: '#fff',
                    headerBackground: props => <LogoTitle {...props} />,
                }}
            />
            <Stack.Screen
                name="HDDichVu" component={HDDichVu}
                options=
                {{
                    // title: 'Quản lý',
                    headerTintColor: '#fff',
                    headerBackground: props => <LogoTitle {...props} />,
                }}
            />

            <Stack.Screen
                name="DoanhThuHoaHong" component={DoanhThuHoaHong}
                options=
                {{
                    // title: 'Quản lý',
                    headerTintColor: '#fff',
                    headerBackground: props => <LogoTitle {...props} />,
                }}
            />

            <Stack.Screen
                name="SPKhoa" component={SPKhoa}
                options=
                {{
                    // title: 'Quản lý',
                    headerTintColor: '#fff',
                    headerBackground: props => <LogoTitle {...props} />,
                }}
            />
            <Stack.Screen
                name="SanPhamYeuThich" component={SanPhamYeuThich}
                options=
                {{
                    // title: 'Quản lý',
                    headerTintColor: '#fff',
                    headerBackground: props => <LogoTitle {...props} />,
                }}
            />
            <Stack.Screen
                name="YeuCauBookCheo" component={YeuCauBookCheo}
                options=
                {{
                    // title: 'Quản lý',
                    headerTintColor: '#fff',
                    headerBackground: props => <LogoTitle {...props} />,
                }}
            />
            <Stack.Screen
                name="TaiKhoan" component={TaiKhoan}
                options=
                {{
                    // title: 'Quản lý',
                    headerTintColor: '#fff',
                    headerBackground: props => <LogoTitle {...props} />,
                }}
            />

            <Stack.Screen
                name="DoiMatKhau" component={DoiMatKhau}
                options=
                {{
                    // title: 'Quản lý',
                    headerTintColor: '#fff',
                    headerBackground: props => <LogoTitle {...props} />,
                }}
            />

            <Stack.Screen
                name="VanBanDacBiet" component={VanBanDacBiet}
                options=
                {{
                    // title: 'Quản lý',
                    headerTintColor: '#fff',
                    headerBackground: props => <LogoTitle {...props} />,
                }}
            />
            <Stack.Screen
                name="DeXuatChuyenTen" component={DeXuatChuyenTen}
                options=
                {{
                    // title: 'Quản lý',
                    headerTintColor: '#fff',
                    headerBackground: props => <LogoTitle {...props} />,
                }}
            />
            <Stack.Screen
                name="DeXuatChuyenTen1" component={DeXuatChuyenTen1}
                options=
                {{
                    // title: 'Quản lý',
                    headerTintColor: '#fff',
                    headerBackground: props => <LogoTitle {...props} />,
                }}
            />

            <Stack.Screen
                name="DeXuatDoiTTKH" component={DeXuatDoiTTKH}
                options=
                {{
                    // title: 'Quản lý',
                    headerTintColor: '#fff',
                    headerBackground: props => <LogoTitle {...props} />,
                }}
            />
            <Stack.Screen
                name="DeXuatDoiTTKH1" component={DeXuatDoiTTKH1}
                options=
                {{
                    // title: 'Quản lý',
                    headerTintColor: '#fff',
                    headerBackground: props => <LogoTitle {...props} />,
                }}
            />
        </Stack.Navigator>
    )
}
export default QuanLyNavigation;