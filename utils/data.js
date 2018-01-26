/**
 * banner数据
 */ 
function getBannerData(){
  var arr = ['../../imgs/banner_01.jpg', '../../imgs/banner_02.jpg', '../../imgs/banner_03.jpg', '../../imgs/banner_04.jpg']
    return arr
}
/*
 * 首页 navnav 数据
 */ 
function getIndexNavData(){
    var arr = [
            {
                id:1,
                icon:"../../imgs/biaogan.png",
                title:"杆件系列"
            },
            {
                id:2,
                icon:"../../imgs/honglv.png",
                title:"信号灯系列"
            },
            {
                id:3,
                icon:"../../imgs/biaozhi.png",
                title:"标志牌系列"
            },
            {
                id:4,
                icon:"../../imgs/kongzhiji.png",
                title:"控制机系列"
            },
            {
                id:5,
                icon:"../../imgs/dengpao.png",
                title:"太阳能系列"
            }
        ]
    return arr
}
/*
 * 首页 对应 标签 数据项
 */ 
function getIndexNavSectionData(){
    var arr = [
                [
                    {
                        
                        subject:"XHDG-001 信号灯杆",
                        coverpath:"../../imgs/bg_01.jpg",
                        id:0,
                        // price:'¥198',
                        message:'我们追求的是没有最长只有更长！'
                    },
                    {
                        
                        subject:"XHDG-002 信号灯杆",
                        coverpath: "../../imgs/bg_02.jpg",
                        id: 1,
                        // price:'¥1888',
                        message:'我们追求的是没有最长只有更长！'
                    },
                    {
                        
                        subject:"XHDG-003 信号灯杆",
                        coverpath: "../../imgs/bg_03.jpg",
                        id: 2,
                        // price:'¥1588',
                        message:'我们追求的是没有最长只有更长！'
                    },
                    {
                        
                        subject:"XHDG-004 信号灯杆",
                        coverpath: "../../imgs/bg_04.jpg",
                        id: 3,
                        // price:'¥198',
                        message:'我们追求的是没有最长只有更长！。'
                    },
                    {
                        
                        subject:" XHDG-005 信号灯杆",
                        coverpath: "../../imgs/bg_05.jpg",
                        id: 4,
                        // price:'¥198',
                        message:'我们追求的是没有最长只有更长！'
                    },
                    {

                      subject: " XHDG-006 信号灯杆",
                      coverpath: "../../imgs/bg_06.jpg",
                      id: 5,
                      // price: '¥198',
                      message: '我们追求的是没有最长只有更长！'
                    },
                    {

                      subject: " XHDG-007 信号灯杆",
                      coverpath: "../../imgs/bg_07.jpg",
                      id: 6,
                      // price: '¥198',
                      message: '我们追求的是没有最长只有更长！'
                    },
                    {

                      subject: " XHDG-008 信号灯杆",
                      coverpath: "../../imgs/bg_08.jpg",
                      id: 7,
                      // price: '¥198',
                      message: '我们追求的是没有最长只有更长！'
                    }
                ],
                [
                    {
                        artype:'signal',
                        subject:"JD403-1S 满屏信号灯",
                        coverpath:"http://www.yzsxt.com/upattach/201531923114294.jpg",
                        id:0,
                        price:'¥198',
                        message:'我们追求的是没有最长只有更长！'
                    },
                    {
                      artype: 'signal',
                      subject: "FJ403-2S 非机动车信号灯（含倒计时）",
                      coverpath: "http://www.yzsxt.com/upattach/20153209451880.jpg",
                      id: 1,
                      // price: '¥198',
                      message: '我们追求的是没有最长只有更长！'
                    }
                ],
                [
                    {
                        artype:'waylight',
                        subject:"太阳能001",
                        coverpath:"http://www.yzxingfa.com/uploadfile/products/1237725553276183_small.jpg",
                        id: 0,
                        // price:'¥1588',
                        message:'我们追求的是没有最长只有更长！'
                    },
                    {
                      artype:'waylight',
                        subject:" 太阳能002",
                        coverpath:"http://www.yzxingfa.com/uploadfile/products/1237725620563204_small.jpg",
                        id: 1,
                        // price:'¥198',
                        message:'我们追求的是没有最长只有更长！'
                    }
                ],
                [
                    
                    {
                        artype:'control',
                        subject:"XT-22L 单点信号机",
                        coverpath:"http://www.yzsxt.com/upfile/xhj/XT-22L.JPG",
                        id: 0,
                        // price:'¥1588',
                        message:'我们追求的是没有最长只有更长！'
                    },

                    {
                      artype: 'control',
                      subject: "XT-22L 单点信号机",
                      coverpath: "http://www.yzsxt.com/upfile/xhj/XT-VD-C06A.JPG",
                      id: 1,
                      // price:'¥1588',
                      message: '我们追求的是没有最长只有更长！'
                    }
                ],
                [
                    {
                        artype:'sun',
                        subject:"XHD-003T 太阳能信号灯",
                        coverpath:"http://www.yzsxt.com/upfile/tynxhd/XHD-001T.JPG",
                        id: 0,
                        // price:'¥1888',
                        message:'我们追求的是没有最长只有更长！'
                    },
                    {
                      artype: 'sun',
                      subject: "XHD-005T 太阳能信号灯",
                      coverpath: "http://www.yzsxt.com/upfile/tynxhd/XHD-009T.JPG",
                      id: 1,
                      // price:'¥1888',
                      message: '我们追求的是没有最长只有更长！'
                    }
                ] 
            ]
    return arr
}
/**
 * 技师 数据
 * */ 
function getprocaseData(){
    var arr = [
                {
                        company:"扬州鑫同集团",
                        avatar:"http://www.yzsxt.com/upattach/2017830105148215.jpg",
                        nickname:'南京',
                        // price:'¥500',
                        message:'南京江东北路定淮门隧道',
                        // distance:'100m'
                        id:0
                    },
                    {
                        company:"扬州鑫同集团",
                        avatar:"http://www.yzsxt.com/upattach/2017830112544895.jpg",
                        nickname:'西藏',
                        // price:'¥800',
                        message:'西藏林芝道路交通工程',
                        // distance:'200m'
                        id:1
                    }     
            ]
    return arr
}

//工程案例详情
function getprodetailData(){
  var arr = [
    {
      id:0,
      img:[
        "http://www.yzsxt.com/upattach/2017830105110408.jpg",
        "http://www.yzsxt.com/upattach/2017830105118504.jpg"
      ],
      title:"南京江东北路定淮门隧道",
      info:"该工程由中交隧道工程局有限公司承建，我司提供情报板龙门架、监控立杆等钢构产品,公司已通过IS09001质量管理、IS014001环境管理、GB/T28001职业健康安全管理、CCC和CQC等管理体系认证。已取得道路照明工程二级、交通信号灯、信号控制机等多项资质证书，并获得“AAA级资信企业”、“重合同守信用企业”、“江苏省名牌产品”等荣誉称号。"
    },
    {
      id:1,
      img:[
        "http://www.yzsxt.com/upattach/2017830112544895.jpg",
        "http://www.yzsxt.com/upattach/2017830112554972.jpg",
        "http://www.yzsxt.com/upattach/2017830112559122.jpg"
      ],
      title:"西藏林芝道路交通工程",
      info:"该工程由中交隧道工程局有限公司承建，我司提供情报板龙门架、监控立杆等钢构产品,公司已通过IS09001质量管理、IS014001环境管理、GB/T28001职业健康安全管理、CCC和CQC等管理体系认证。已取得道路照明工程二级、交通信号灯、信号控制机等多项资质证书，并获得“AAA级资信企业”、“重合同守信用企业”、“江苏省名牌产品”等荣誉称号。"
    }
   
  ]
  return arr;
}

/**
 * 选择器 数据
 */ 
function getPickerData(){
    var arr =[
        {
            name:'张三',
            phone:'13812314563',
            province:'北京',
            city:'北京',
            addr:'朝阳区望京悠乐汇A座8011'
        },
        {
            name:'李四',
            phone:'13812314563',
            province:'北京市',
            city:'北京市',
            addr:'朝阳区望京悠乐汇A座4020'
        }
    ]
    return  arr
}
/**
 * 查询 地址
 * */ 
var user_data = userData()
function searchAddrFromAddrs(addrid){
    var result
    for(let i=0;i<user_data.addrs.length;i++){
        var addr = user_data.addrs[i]
        console.log(addr)
        if(addr.addrid == addrid){
            result = addr
        }
    }
    return result || {}
}
/**
 * 用户数据
 * */ 
function userData(){
    var arr = {
                uid:'1',
                nickname:'山炮',
                name:'张三',
                phone:'13833337998',
                avatar:'../../images/avatar.png',
                addrs:[
                   {
                        addrid:'1',
                        name:'张三',
                        phone:'13812314563',
                        province:'北京',
                        city:'直辖市',
                        addr:'朝阳区望京悠乐汇A座8011'
                    },
                    {
                        addrid:'2',
                        name:'李四',
                        phone:'13812314563',
                        province:'北京',
                        city:'直辖市',
                        addr:'朝阳区望京悠乐汇A座4020'
                    } 
                ]
            }
    return arr
}


/**
 * 省
 * */ 
function provinceData(){
    var arr = [
        // {pid:1,pzip:'110000',pname:'北京市'},
        // {pid:2,pzip:'120000',pname:'天津市'}
        '请选择省份','福建省'
    ]
    return arr
}
/**
 * 市
 * */ 
function cityData(){
    var arr = [
        // {cid:1,czip:'110100',cname:'市辖区',pzip:'110000'},
        // {cid:2,czip:'120100',cname:'市辖区',pzip:'120000'}
        '请选择城市','福州市','厦门市','宁德市'
    ]
    return arr
}
/*
 * 对外暴露接口
 */ 
module.exports = {
  getBannerData : getBannerData,
  getIndexNavData : getIndexNavData,
  getIndexNavSectionData : getIndexNavSectionData,
  getPickerData : getPickerData,
  getSkilledData: getprocaseData,
  getprodetailData: getprodetailData,
  userData : userData,
  provinceData : provinceData,
  cityData : cityData,
  searchAddrFromAddrs : searchAddrFromAddrs

}