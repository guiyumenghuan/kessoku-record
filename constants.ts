
import { VideoLink, CategoryType } from './types';

// The password/UUID required to access the admin panel.
export const ADMIN_UUID = '57c944e7-5fed-4bd9-a211-b0d45ce5a0f4';

// This serves as the "Default" database if LocalStorage is empty.
export const INITIAL_VIDEOS: VideoLink[] = [
  {
    "id": "1768561888176",
    "title": "SCHOOL OF LOCK！孤独摇滚小课堂#01",
    "url": "https://www.bilibili.com/video/BV1D94y1573M/",
    "category": "Activity",
    "subCategory": "节目",
    "dateAdded": 1698984000000
  },
  {
    "id": "1768561325599",
    "title": "BW2023 孤独摇滚特别舞台",
    "url": "https://www.bilibili.com/video/BV1wF411X7dE/",
    "category": "Activity",
    "subCategory": "线下活动",
    "dateAdded": 1689998400000
  },
  {
    "id": "1768561061363",
    "title": "恒星live上映纪念 舞台问候",
    "url": "https://www.bilibili.com/video/BV1pN4y1m7ro/",
    "category": "Activity",
    "subCategory": "线下活动",
    "dateAdded": 1700452800000
  },
  {
    "id": "1768560978197",
    "title": "NHKFM Music Line",
    "url": "https://www.bilibili.com/video/BV1kc411w7vo/",
    "category": "Activity",
    "subCategory": "节目",
    "dateAdded": 1690171200000
  },
  {
    "id": "1768560718240",
    "title": "孤独对谈 直播 「恒星纪念直播」",
    "url": "https://www.bilibili.com/video/BV1hG411f7GN",
    "category": "Activity",
    "subCategory": "生放送",
    "dateAdded": 1684296000000
  },
  {
    "id": "1768560454393",
    "title": "恒星live 工作人员评论音轨",
    "url": "https://www.bilibili.com/video/BV1G1fzYQEEr/",
    "category": "Concert",
    "subCategory": "花絮",
    "dateAdded": 1684641600000
  },
  {
    "id": "1768560324628",
    "title": "恒星live 声优评论音轨",
    "url": "https://www.bilibili.com/video/BV1owUeYJE2o/",
    "category": "Concert",
    "subCategory": "花絮",
    "dateAdded": 1684641600000
  },
  {
    "id": "1768560282448",
    "title": "恒星live 舞台花絮",
    "url": "https://www.bilibili.com/video/BV1Xj41177ex",
    "category": "Concert",
    "subCategory": "花絮",
    "dateAdded": 1684641600000
  },
  {
    "id": "1768551267722",
    "title": "被大数据认定为「天才」的青山吉能和「霸道总裁」长谷川育美",
    "url": "https://www.bilibili.com/video/BV1K24y1y79X/",
    "category": "Radio",
    "subCategory": "切片",
    "dateAdded": 1669780800000
  },
  {
    "id": "1768550853324",
    "title": "「NUMBER BOCCHI」",
    "url": "https://www.bilibili.com/video/BV1qD4y1Y7M6/",
    "category": "Activity",
    "subCategory": "生放送",
    "dateAdded": 1669521600000
  },
  {
    "id": "1768550626334",
    "title": "ぼっち・ざ・ろっく！です。 （BD抽选活动）",
    "url": "https://www.bilibili.com/video/BV1Qo4y1G7CL/",
    "category": "Activity",
    "subCategory": "线下活动",
    "dateAdded": 1682222400000
  },
  {
    "id": "1768549655578",
    "title": "雅马哈合作节目 GINZA ROCK YOU! b",
    "url": "https://www.bilibili.com/video/BV1wM4y197Dm",
    "category": "Activity",
    "subCategory": "生放送",
    "dateAdded": 1674532800000
  },
  {
    "id": "1768549636402",
    "title": "雅马哈合作节目 GINZA ROCK YOU! a",
    "url": "https://www.bilibili.com/video/BV1cy4y197nW/",
    "category": "Activity",
    "subCategory": "生放送",
    "dateAdded": 1674532800000
  },
  {
    "id": "1768531632369",
    "title": "AnimeJapan2023   BOCCHI IN JAPAN",
    "url": "https://www.bilibili.com/video/BV1784y1g7bB/",
    "category": "Activity",
    "subCategory": "线下活动",
    "dateAdded": 1679803200000
  },
  {
    "id": "1768531225411",
    "title": "FM802 Palette （专辑宣传）",
    "url": "https://www.bilibili.com/video/BV1wY411m7A7/",
    "category": "Activity",
    "subCategory": "节目",
    "dateAdded": 1672545600000
  },
  {
    "id": "1768530867627",
    "title": "倒计时波奇",
    "url": "https://www.bilibili.com/video/BV1jR4y1m7QG/",
    "category": "Activity",
    "subCategory": "生放送",
    "dateAdded": 1671854400000
  },
  {
    "id": "1768530402178",
    "title": "Abema特别节目「BOCCHI STATION」",
    "url": "https://www.bilibili.com/video/BV1Co4y1B7hq/",
    "category": "Activity",
    "subCategory": "生放送",
    "dateAdded": 1663128000000
  },
  {
    "id": "1768530204369",
    "title": "孤独对谈 第12话",
    "url": "https://www.bilibili.com/video/BV1eR4y1S7s4/",
    "category": "Animation",
    "subCategory": "动画宣传",
    "dateAdded": 1671854400000
  },
  {
    "id": "1768530158662",
    "title": "孤独对谈 第11话",
    "url": "https://www.bilibili.com/video/BV1Ke411A7qo/",
    "category": "Animation",
    "subCategory": "动画宣传",
    "dateAdded": 1671249600000
  },
  {
    "id": "1768530018720",
    "title": "孤独对谈 直播 下",
    "url": "https://www.bilibili.com/video/BV1ie4y1j7LL/",
    "category": "Activity",
    "subCategory": "生放送",
    "dateAdded": 1670385600000
  },
  {
    "id": "1768529975754",
    "title": "孤独对谈 直播 上",
    "url": "https://www.bilibili.com/video/BV1je411w75A/",
    "category": "Activity",
    "subCategory": "生放送",
    "dateAdded": 1670385600000
  },
  {
    "id": "1768529495085",
    "title": "孤独对谈 第10话",
    "url": "https://www.bilibili.com/video/BV1Q14y1K7ud/",
    "category": "Animation",
    "subCategory": "动画宣传",
    "dateAdded": 1670644800000
  },
  {
    "id": "1768529462076",
    "title": "孤独对谈 第9话",
    "url": "https://www.bilibili.com/video/BV1TG4y1V7Mx/",
    "category": "Animation",
    "subCategory": "动画宣传",
    "dateAdded": 1670040000000
  },
  {
    "id": "1768529421454",
    "title": "孤独对谈 第8话",
    "url": "https://www.bilibili.com/video/BV1TY411d7uv/",
    "category": "Animation",
    "subCategory": "动画宣传",
    "dateAdded": 1669435200000
  },
  {
    "id": "1768529348846",
    "title": "孤独对谈 第7话",
    "url": "https://www.bilibili.com/video/BV1UP411g7RX/",
    "category": "Animation",
    "subCategory": "动画宣传",
    "dateAdded": 1668830400000
  },
  {
    "id": "1768529303214",
    "title": "孤独对谈 第6话",
    "url": "https://www.bilibili.com/video/BV1v24y127e8/",
    "category": "Animation",
    "subCategory": "动画宣传",
    "dateAdded": 1668225600000
  },
  {
    "id": "1768529260625",
    "title": "孤独对谈 第5话",
    "url": "https://www.bilibili.com/video/BV1sV4y137SF/",
    "category": "Animation",
    "subCategory": "动画宣传",
    "dateAdded": 1667620800000
  },
  {
    "id": "1768529208601",
    "title": "孤独对谈 第4话",
    "url": "https://www.bilibili.com/video/BV19G4y1h7Na/",
    "category": "Animation",
    "subCategory": "动画宣传",
    "dateAdded": 1667016000000
  },
  {
    "id": "1768529089839",
    "title": "孤独对谈 第3话",
    "url": "https://www.bilibili.com/video/BV19e411V7XZ/",
    "category": "Animation",
    "subCategory": "动画宣传",
    "dateAdded": 1666411200000
  },
  {
    "id": "1768490832768",
    "title": "孤独对谈 第2话",
    "url": "https://www.bilibili.com/video/BV1Bm4y1A7es/",
    "category": "Animation",
    "subCategory": "动画宣传",
    "dateAdded": 1665806400000
  },
  {
    "id": "1768490717489",
    "title": "孤独对谈 第1话",
    "url": "https://www.bilibili.com/video/BV1nd4y1i7zp/",
    "category": "Animation",
    "subCategory": "动画宣传",
    "dateAdded": 1665201600000
  },
  {
    "id": "1768490372517",
    "title": "下北泽孤独散步 BD ver.",
    "url": "https://www.bilibili.com/video/BV1dW4y1V75Y/",
    "category": "Animation",
    "subCategory": "动画宣传",
    "dateAdded": 1664683200000
  },
  {
    "id": "1768490330413",
    "title": "下北泽孤独散步",
    "url": "https://www.bilibili.com/video/BV1n14y187kx/",
    "category": "Animation",
    "subCategory": "动画宣传",
    "dateAdded": 1664683200000
  },
  {
    "id": "1768490065970",
    "title": "声优采访 长谷川育美篇",
    "url": "https://www.bilibili.com/video/BV1WV4y1L74E/",
    "category": "Animation",
    "subCategory": "动画宣传",
    "dateAdded": 1665115200000
  },
  {
    "id": "1768490022421",
    "title": "声优采访 水野朔篇",
    "url": "https://www.bilibili.com/video/BV1GG4y1L7VJ/",
    "category": "Animation",
    "subCategory": "动画宣传",
    "dateAdded": 1664510400000
  },
  {
    "id": "1768489994471",
    "title": "声优采访 铃代纱弓篇",
    "url": "https://www.bilibili.com/video/BV1914y1Y7qt/",
    "category": "Animation",
    "subCategory": "动画宣传",
    "dateAdded": 1663905600000
  },
  {
    "id": "1768489958386",
    "title": "声优采访 青山吉能篇",
    "url": "https://www.bilibili.com/video/BV1884y1e7U5/",
    "category": "Animation",
    "subCategory": "动画宣传",
    "dateAdded": 1663300800000
  },
  {
    "id": "1768488970837",
    "title": "角色pv 后藤独篇",
    "url": "https://www.bilibili.com/video/BV1YB4y1E7ec/",
    "category": "Animation",
    "subCategory": "PV",
    "dateAdded": 1663300800000
  },
  {
    "id": "1768488740921",
    "title": "角色pv 山田凉篇",
    "url": "https://www.bilibili.com/video/BV17G4y1W7LV/",
    "category": "Animation",
    "subCategory": "PV",
    "dateAdded": 1664510400000
  },
  {
    "id": "1768488632927",
    "title": "角色pv 喜多郁代篇",
    "url": "https://www.bilibili.com/video/BV1SD4y1y7rx/",
    "category": "Animation",
    "subCategory": "PV",
    "dateAdded": 1665115200000
  },
  {
    "id": "1768488585288",
    "title": "角色pv 伊地知虹夏篇",
    "url": "https://www.bilibili.com/video/BV1414y1h7mi/",
    "category": "Animation",
    "subCategory": "PV",
    "dateAdded": 1663905600000
  },
  {
    "id": "1768488460281",
    "title": "AnimeJapan2022",
    "url": "https://www.bilibili.com/video/BV1kT411Q7Aj/",
    "category": "Activity",
    "subCategory": "线下活动",
    "dateAdded": 1648353600000
  },
  {
    "id": "1768390061183",
    "title": "第94回 圣诞特别篇 （音泉上传时间为12月31日）",
    "url": "https://www.bilibili.com/video/BV1hEUGBzEqP",
    "category": "Radio",
    "subCategory": "全熟",
    "dateAdded": 1766635200000
  },
  {
    "id": "1768389819830",
    "title": "第93回",
    "url": "https://www.bilibili.com/video/BV1q8kyBfE1n",
    "category": "Radio",
    "subCategory": "全熟",
    "dateAdded": 1765944000000
  },
  {
    "id": "1768389771107",
    "title": "第92回",
    "url": "https://www.bilibili.com/video/BV1c8kZBTEGq",
    "category": "Radio",
    "subCategory": "全熟",
    "dateAdded": 1764734400000
  },
  {
    "id": "1768389733904",
    "title": "第91回",
    "url": "https://www.bilibili.com/video/BV12uskzCEkL",
    "category": "Radio",
    "subCategory": "全熟",
    "dateAdded": 1763524800000
  },
  {
    "id": "1768389697516",
    "title": "第90回 b",
    "url": "https://www.bilibili.com/video/BV1fY4wzQEMd",
    "category": "Radio",
    "subCategory": "全熟",
    "dateAdded": 1762315200000
  },
  {
    "id": "1768389655323",
    "title": "第90回 a",
    "url": "https://www.bilibili.com/video/BV1fY4wzQEMd",
    "category": "Radio",
    "subCategory": "全熟",
    "dateAdded": 1762315200000
  },
  {
    "id": "1768389626723",
    "title": "第89回",
    "url": "https://www.bilibili.com/video/BV1bcnVzQEdt",
    "category": "Radio",
    "subCategory": "全熟",
    "dateAdded": 1761105600000
  },
  {
    "id": "1768389598710",
    "title": "第88回",
    "url": "https://www.bilibili.com/video/BV1R5pKz2ELA",
    "category": "Radio",
    "subCategory": "全熟",
    "dateAdded": 1759896000000
  },
  {
    "id": "1768389561765",
    "title": "第87回",
    "url": "https://www.bilibili.com/video/BV1JThqzwEbo",
    "category": "Radio",
    "subCategory": "全熟",
    "dateAdded": 1758686400000
  },
  {
    "id": "1768389528170",
    "title": "第86回",
    "url": "https://www.bilibili.com/video/BV1T2YxzXEm2",
    "category": "Radio",
    "subCategory": "全熟",
    "dateAdded": 1757476800000
  },
  {
    "id": "1768389463905",
    "title": "第85回",
    "url": "https://www.bilibili.com/video/BV1JQhtzgEsw",
    "category": "Radio",
    "subCategory": "全熟",
    "dateAdded": 1756267200000
  },
  {
    "id": "1768389407847",
    "title": "第84回",
    "url": "https://www.bilibili.com/video/BV1j4gLzjExi",
    "category": "Radio",
    "subCategory": "全熟",
    "dateAdded": 1755057600000
  },
  {
    "id": "1768389375560",
    "title": "第83回",
    "url": "https://www.bilibili.com/video/BV1mUupznECr",
    "category": "Radio",
    "subCategory": "全熟",
    "dateAdded": 1753848000000
  },
  {
    "id": "1768389345885",
    "title": "第82回",
    "url": "https://www.bilibili.com/video/BV1nNNyzxE2G",
    "category": "Radio",
    "subCategory": "全熟",
    "dateAdded": 1752638400000
  },
  {
    "id": "1768389281761",
    "title": "第81回",
    "url": "https://www.bilibili.com/video/BV1iR34zSEeD",
    "category": "Radio",
    "subCategory": "全熟",
    "dateAdded": 1751428800000
  },
  {
    "id": "1768389257617",
    "title": "第80回",
    "url": "https://www.bilibili.com/video/BV1cvNBzrERm",
    "category": "Radio",
    "subCategory": "全熟",
    "dateAdded": 1750219200000
  },
  {
    "id": "1768389142572",
    "title": "第79回",
    "url": "https://www.bilibili.com/video/BV1fNEwzaE8d",
    "category": "Radio",
    "subCategory": "全熟",
    "dateAdded": 1749009600000
  },
  {
    "id": "1768389109471",
    "title": "第78回",
    "url": "https://www.bilibili.com/video/BV1A97KzpEa8",
    "category": "Radio",
    "subCategory": "全熟",
    "dateAdded": 1747800000000
  },
  {
    "id": "1768389069648",
    "title": "第77回",
    "url": "https://www.bilibili.com/video/BV1jMogYqEg3",
    "category": "Radio",
    "subCategory": "全熟",
    "dateAdded": 1746590400000
  },
  {
    "id": "1768389040217",
    "title": "第76回",
    "url": "https://www.bilibili.com/video/BV1XzZ6YDE5n",
    "category": "Radio",
    "subCategory": "全熟",
    "dateAdded": 1745380800000
  },
  {
    "id": "1768389007990",
    "title": "第75回",
    "url": "https://www.bilibili.com/video/BV1VWQSYwEM6",
    "category": "Radio",
    "subCategory": "全熟",
    "dateAdded": 1744171200000
  },
  {
    "id": "1768388972200",
    "title": "第74回",
    "url": "https://www.bilibili.com/video/BV1Kz98YTEwR",
    "category": "Radio",
    "subCategory": "全熟",
    "dateAdded": 1742961600000
  },
  {
    "id": "1768388938440",
    "title": "第73回",
    "url": "https://www.bilibili.com/video/BV1h7AKeiE2r",
    "category": "Radio",
    "subCategory": "全熟",
    "dateAdded": 1741752000000
  },
  {
    "id": "1768388901238",
    "title": "第72回",
    "url": "https://www.bilibili.com/video/BV1oAAVeFEuN",
    "category": "Radio",
    "subCategory": "全熟",
    "dateAdded": 1740542400000
  },
  {
    "id": "1768388827104",
    "title": "第71.5回   第二季制作决定 特别篇 b",
    "url": "https://www.bilibili.com/video/BV1mDnBzsErb",
    "category": "Radio",
    "subCategory": "全熟",
    "dateAdded": 1739592000000
  },
  {
    "id": "1768388802755",
    "title": "第71.5回   第二季制作决定 特别篇 a",
    "url": "https://www.bilibili.com/video/BV1f6GLzWEvJ",
    "category": "Radio",
    "subCategory": "全熟",
    "dateAdded": 1739592000000
  },
  {
    "id": "1768388675013",
    "title": "第71回",
    "url": "https://www.bilibili.com/video/BV113ADeEEiy",
    "category": "Radio",
    "subCategory": "全熟",
    "dateAdded": 1739332800000
  },
  {
    "id": "1768388621666",
    "title": "第70回",
    "url": "https://www.bilibili.com/video/BV1zJCsYEEeN",
    "category": "Radio",
    "subCategory": "全熟",
    "dateAdded": 1738123200000
  },
  {
    "id": "1768388558476",
    "title": "第69回",
    "url": "https://www.bilibili.com/video/BV1yof5YTEdN",
    "category": "Radio",
    "subCategory": "全熟",
    "dateAdded": 1736913600000
  },
  {
    "id": "1768388510910",
    "title": "第68回 圣诞特别篇",
    "url": "https://www.bilibili.com/video/BV1gtTRzMELR",
    "category": "Radio",
    "subCategory": "全熟",
    "dateAdded": 1735099200000
  },
  {
    "id": "1768388450066",
    "title": "第67回",
    "url": "https://www.bilibili.com/video/BV1B1BBYgEGk",
    "category": "Radio",
    "subCategory": "全熟",
    "dateAdded": 1734494400000
  },
  {
    "id": "1768388407961",
    "title": "第66回",
    "url": "https://www.bilibili.com/video/BV18SuwzFEk6",
    "category": "Radio",
    "subCategory": "全熟",
    "dateAdded": 1733284800000
  },
  {
    "id": "1768388377242",
    "title": "第65回",
    "url": "https://www.bilibili.com/video/BV1Ne1MYQEQ9",
    "category": "Radio",
    "subCategory": "全熟",
    "dateAdded": 1732075200000
  },
  {
    "id": "1768388335709",
    "title": "第64回",
    "url": "https://www.bilibili.com/video/BV1bymHYuEZs",
    "category": "Radio",
    "subCategory": "全熟",
    "dateAdded": 1730865600000
  },
  {
    "id": "1768388308283",
    "title": "第63回",
    "url": "https://www.bilibili.com/video/BV14t2AY5Emr",
    "category": "Radio",
    "subCategory": "全熟",
    "dateAdded": 1729656000000
  },
  {
    "id": "1768388246257",
    "title": "第62回",
    "url": "https://www.bilibili.com/video/BV1r1tMepErW",
    "category": "Radio",
    "subCategory": "全熟",
    "dateAdded": 1728446400000
  },
  {
    "id": "1768388205709",
    "title": "第61回",
    "url": "https://www.bilibili.com/video/BV1wrsdeSExR",
    "category": "Radio",
    "subCategory": "全熟",
    "dateAdded": 1727236800000
  },
  {
    "id": "1768388164279",
    "title": "第60回",
    "url": "https://www.bilibili.com/video/BV1DnSdY6Epj",
    "category": "Radio",
    "subCategory": "全熟",
    "dateAdded": 1726027200000
  },
  {
    "id": "1768388098202",
    "title": "第59回",
    "url": "https://www.bilibili.com/video/BV1LoijexELr",
    "category": "Radio",
    "subCategory": "全熟",
    "dateAdded": 1724817600000
  },
  {
    "id": "1768388050271",
    "title": "第58回",
    "url": "https://www.bilibili.com/video/BV1Li421a7as",
    "category": "Radio",
    "subCategory": "全熟",
    "dateAdded": 1723608000000
  },
  {
    "id": "1768388008944",
    "title": "第57回",
    "url": "https://www.bilibili.com/video/BV1rT421k7t7",
    "category": "Radio",
    "subCategory": "全熟",
    "dateAdded": 1722398400000
  },
  {
    "id": "1768387970065",
    "title": "第56回",
    "url": "https://www.bilibili.com/video/BV1Rw4m1a7ZL",
    "category": "Radio",
    "subCategory": "全熟",
    "dateAdded": 1721188800000
  },
  {
    "id": "1768387899649",
    "title": "第55回",
    "url": "https://www.bilibili.com/video/BV191421r7t8",
    "category": "Radio",
    "subCategory": "全熟",
    "dateAdded": 1719979200000
  },
  {
    "id": "1768387858068",
    "title": "第54回",
    "url": "https://www.bilibili.com/video/BV1ks421w7Cy",
    "category": "Radio",
    "subCategory": "全熟",
    "dateAdded": 1718769600000
  },
  {
    "id": "1768387812478",
    "title": "第53回",
    "url": "https://www.bilibili.com/video/BV1qS411N7MX",
    "category": "Radio",
    "subCategory": "全熟",
    "dateAdded": 1717560000000
  },
  {
    "id": "1768387765141",
    "title": "第52回",
    "url": "https://www.bilibili.com/video/BV1vb421b7pk",
    "category": "Radio",
    "subCategory": "全熟",
    "dateAdded": 1716350400000
  },
  {
    "id": "1768387718794",
    "title": "第51回",
    "url": "https://www.bilibili.com/video/BV1JT421y7hg",
    "category": "Radio",
    "subCategory": "全熟",
    "dateAdded": 1715140800000
  },
  {
    "id": "1768387688851",
    "title": "第50回",
    "url": "https://www.bilibili.com/video/BV1TA4m1A7mp",
    "category": "Radio",
    "subCategory": "全熟",
    "dateAdded": 1713931200000
  },
  {
    "id": "1768387643069",
    "title": "第49回",
    "url": "https://www.bilibili.com/video/BV1T1421D7Hb",
    "category": "Radio",
    "subCategory": "全熟",
    "dateAdded": 1712721600000
  },
  {
    "id": "1768387571288",
    "title": "第48回",
    "url": "https://www.bilibili.com/video/BV116421c7XU",
    "category": "Radio",
    "subCategory": "全熟",
    "dateAdded": 1711512000000
  },
  {
    "id": "1768387531957",
    "title": "第47回",
    "url": "https://www.bilibili.com/video/BV1Uy421q7qh",
    "category": "Radio",
    "subCategory": "全熟",
    "dateAdded": 1710302400000
  },
  {
    "id": "1768387424546",
    "title": "第46回",
    "url": "https://www.bilibili.com/video/BV1zy42187fD",
    "category": "Radio",
    "subCategory": "全熟",
    "dateAdded": 1709092800000
  },
  {
    "id": "1768387379684",
    "title": "第45回",
    "url": "https://www.bilibili.com/video/BV1fK4y1i7Ze",
    "category": "Radio",
    "subCategory": "全熟",
    "dateAdded": 1707883200000
  },
  {
    "id": "1768387338990",
    "title": "第44回",
    "url": "https://www.bilibili.com/video/BV1ni4y1z7TN",
    "category": "Radio",
    "subCategory": "全熟",
    "dateAdded": 1706673600000
  },
  {
    "id": "1768387293731",
    "title": "第43回",
    "url": "https://www.bilibili.com/video/BV18t4y1Z7hW",
    "category": "Radio",
    "subCategory": "全熟",
    "dateAdded": 1705464000000
  },
  {
    "id": "1768387243011",
    "title": "第42回 b",
    "url": "https://www.bilibili.com/video/BV18t4y1Z7hW",
    "category": "Radio",
    "subCategory": "全熟",
    "dateAdded": 1704254400000
  },
  {
    "id": "1768387205516",
    "title": "第42回 a",
    "url": "https://www.bilibili.com/video/BV1yj411H71Q",
    "category": "Radio",
    "subCategory": "全熟",
    "dateAdded": 1704254400000
  },
  {
    "id": "1768387116630",
    "title": "第41回 圣诞特别篇 b",
    "url": "https://www.bilibili.com/video/BV1Xw411V7Zi",
    "category": "Radio",
    "subCategory": "全熟",
    "dateAdded": 1703044800000
  },
  {
    "id": "1768387077165",
    "title": "第41回 圣诞特别篇 a",
    "url": "https://www.bilibili.com/video/BV1Xw411V7Zi",
    "category": "Radio",
    "subCategory": "全熟",
    "dateAdded": 1703044800000
  },
  {
    "id": "1768386964044",
    "title": "第40回",
    "url": "https://www.bilibili.com/video/BV1X64y1G7BN",
    "category": "Radio",
    "subCategory": "全熟",
    "dateAdded": 1701835200000
  },
  {
    "id": "1768386901153",
    "title": "第39回",
    "url": "https://www.bilibili.com/video/BV1m94y1j71r",
    "category": "Radio",
    "subCategory": "全熟",
    "dateAdded": 1700625600000
  },
  {
    "id": "1768386855703",
    "title": "第38回",
    "url": "https://www.bilibili.com/video/BV1Ra4y1U7En",
    "category": "Radio",
    "subCategory": "全熟",
    "dateAdded": 1699416000000
  },
  {
    "id": "1768386746604",
    "title": "第37回",
    "url": "https://www.bilibili.com/video/BV1zM411X7WF",
    "category": "Radio",
    "subCategory": "全熟",
    "dateAdded": 1698206400000
  },
  {
    "id": "1768386696541",
    "title": "第36回",
    "url": "https://www.bilibili.com/video/BV1ug4y1o7Gw",
    "category": "Radio",
    "subCategory": "全熟",
    "dateAdded": 1696996800000
  },
  {
    "id": "1768386653695",
    "title": "第35回",
    "url": "https://www.bilibili.com/video/BV1k84y127dg",
    "category": "Radio",
    "subCategory": "全熟",
    "dateAdded": 1695787200000
  },
  {
    "id": "1768364273273",
    "title": "第34回",
    "url": "https://www.bilibili.com/video/BV1Em4y157SB",
    "category": "Radio",
    "subCategory": "全熟",
    "dateAdded": 1694577600000
  },
  {
    "id": "1768364225899",
    "title": "第33回",
    "url": "https://www.bilibili.com/video/BV1LF411D7QB",
    "category": "Radio",
    "subCategory": "全熟",
    "dateAdded": 1693368000000
  },
  {
    "id": "1768364193013",
    "title": "第32回",
    "url": "https://www.bilibili.com/video/BV1nF411k7cm",
    "category": "Radio",
    "subCategory": "全熟",
    "dateAdded": 1692158400000
  },
  {
    "id": "1768364094400",
    "title": "第31回",
    "url": "https://www.bilibili.com/video/BV1Au411H7hV/",
    "category": "Radio",
    "subCategory": "全熟",
    "dateAdded": 1690948800000
  },
  {
    "id": "1768363957082",
    "title": "第30回",
    "url": "https://www.bilibili.com/video/BV1Uz4y147c3/",
    "category": "Radio",
    "subCategory": "全熟",
    "dateAdded": 1689739200000
  },
  {
    "id": "1768363750303",
    "title": "第29回",
    "url": "https://www.bilibili.com/video/BV1TM4y1s7eB/",
    "category": "Radio",
    "subCategory": "全熟",
    "dateAdded": 1688529600000
  },
  {
    "id": "1768363712382",
    "title": "第28.5回 音泉祭",
    "url": "https://www.bilibili.com/video/BV1CP411e7Gi/",
    "category": "Radio",
    "subCategory": "全熟",
    "dateAdded": 1687579200000
  },
  {
    "id": "1768363576475",
    "title": "第28回 ",
    "url": "https://www.bilibili.com/video/BV1JV4y18784/",
    "category": "Radio",
    "subCategory": "全熟",
    "dateAdded": 1687320000000
  },
  {
    "id": "1768363131059",
    "title": "第27回",
    "url": "https://www.bilibili.com/video/BV1Em4y1v7j3/",
    "category": "Radio",
    "subCategory": "全熟",
    "dateAdded": 1686110400000
  },
  {
    "id": "1768363075923",
    "title": "第26回 下",
    "url": "https://www.bilibili.com/video/BV14m4y1e7HA/",
    "category": "Radio",
    "subCategory": "全熟",
    "dateAdded": 1684900800000
  },
  {
    "id": "1768362986033",
    "title": "第26回 上",
    "url": "https://www.bilibili.com/video/BV1oW4y1D7dw/",
    "category": "Radio",
    "subCategory": "全熟",
    "dateAdded": 1684900800000
  },
  {
    "id": "1768362891167",
    "title": "第25回",
    "url": "https://www.bilibili.com/video/BV1wz4y1q7a8/",
    "category": "Radio",
    "subCategory": "全熟",
    "dateAdded": 1683691200000
  },
  {
    "id": "1768362851496",
    "title": "第24回",
    "url": "https://www.bilibili.com/video/BV1qM4y187p7/",
    "category": "Radio",
    "subCategory": "全熟",
    "dateAdded": 1682481600000
  },
  {
    "id": "1768362643500",
    "title": "第23回",
    "url": "https://www.bilibili.com/video/BV1pc411J74S/",
    "category": "Radio",
    "subCategory": "全熟",
    "dateAdded": 1681272000000
  },
  {
    "id": "1768362154075",
    "title": "第22.5回 「线下活动 2部 孤独广播 后夜祭」",
    "url": "https://www.bilibili.com/video/BV1sc41137ZA/",
    "category": "Radio",
    "subCategory": "全熟",
    "dateAdded": 1679198400000
  },
  {
    "id": "1768362027010",
    "title": "第22回 「线下活动 1部 孤独广播 公开录音」（广播上传日期为3月29日）",
    "url": "https://www.bilibili.com/video/BV1vs4y1n7pn/",
    "category": "Radio",
    "subCategory": "全熟",
    "dateAdded": 1679198400000
  },
  {
    "id": "1768355748352",
    "title": "第21回 附赠",
    "url": "https://www.bilibili.com/video/BV1N24y1E7Fq/",
    "category": "Radio",
    "subCategory": "全熟",
    "dateAdded": 1678852800000
  },
  {
    "id": "1768355613481",
    "title": "第21回 b",
    "url": "https://www.bilibili.com/video/BV1m24y1u7R3/",
    "category": "Radio",
    "subCategory": "全熟",
    "dateAdded": 1678852800000
  },
  {
    "id": "1768355267185",
    "title": "第21回 a",
    "url": "https://www.bilibili.com/video/BV1PL411d777/",
    "category": "Radio",
    "subCategory": "全熟",
    "dateAdded": 1678852800000
  },
  {
    "id": "1768355171437",
    "title": "第20回",
    "url": "https://www.bilibili.com/video/BV1ps4y1L7pn/",
    "category": "Radio",
    "subCategory": "全熟",
    "dateAdded": 1677643200000
  },
  {
    "id": "1768355091417",
    "title": "第19回",
    "url": "https://www.bilibili.com/video/BV1VY411v7oS/",
    "category": "Radio",
    "subCategory": "全熟",
    "dateAdded": 1676433600000
  },
  {
    "id": "1768355023627",
    "title": "第18回",
    "url": "https://www.bilibili.com/video/BV1oy4y1X7s5/",
    "category": "Radio",
    "subCategory": "全熟",
    "dateAdded": 1675224000000
  },
  {
    "id": "1768354941514",
    "title": "第17回 b",
    "url": "https://www.bilibili.com/video/BV1nR4y1a78H/",
    "category": "Radio",
    "subCategory": "全熟",
    "dateAdded": 1674014400000
  },
  {
    "id": "1768354875213",
    "title": "第17回 a",
    "url": "https://www.bilibili.com/video/BV14j411A7rC/",
    "category": "Radio",
    "subCategory": "全熟",
    "dateAdded": 1674014400000
  },
  {
    "id": "1766228154584",
    "title": "第16回 b",
    "url": "https://www.bilibili.com/video/BV16R4y117cG/",
    "category": "Radio",
    "subCategory": "全熟",
    "dateAdded": 1672804800000
  },
  {
    "id": "1766227915660",
    "title": "第16回 a",
    "url": "https://www.bilibili.com/video/BV1EM411q7q2/",
    "category": "Radio",
    "subCategory": "全熟",
    "dateAdded": 1672804800000
  },
  {
    "id": "1766227816063",
    "title": "第15回",
    "url": "https://www.bilibili.com/video/BV11x4y1u7hg/",
    "category": "Radio",
    "subCategory": "全熟",
    "dateAdded": 1672200000000
  },
  {
    "id": "1766227740857",
    "title": "第14回 b 下",
    "url": "https://www.bilibili.com/video/BV1644y1o7kd/",
    "category": "Radio",
    "subCategory": "全熟",
    "dateAdded": 1671595200000
  },
  {
    "id": "1766227707758",
    "title": "第14回 b 上",
    "url": "https://www.bilibili.com/video/BV1Zv4y1Q7r8/",
    "category": "Radio",
    "subCategory": "全熟",
    "dateAdded": 1671595200000
  },
  {
    "id": "1766227665880",
    "title": "第14回 a",
    "url": "https://www.bilibili.com/video/BV1p14y1g7ni/",
    "category": "Radio",
    "subCategory": "全熟",
    "dateAdded": 1671595200000
  },
  {
    "id": "1766227592167",
    "title": "第13回",
    "url": "https://www.bilibili.com/video/BV1de4y1L7W7/",
    "category": "Radio",
    "subCategory": "全熟",
    "dateAdded": 1670990400000
  },
  {
    "id": "1766227419947",
    "title": "第12回",
    "url": "https://www.bilibili.com/video/BV1DM411U71w",
    "category": "Radio",
    "subCategory": "全熟",
    "dateAdded": 1670385600000
  },
  {
    "id": "1766227347685",
    "title": "第11回 下",
    "url": "https://www.bilibili.com/video/BV1714y1K7Rp/",
    "category": "Radio",
    "subCategory": "全熟",
    "dateAdded": 1669780800000
  },
  {
    "id": "1766227231167",
    "title": "第11回 上",
    "url": "https://www.bilibili.com/video/BV1b44y1Q7oy/",
    "category": "Radio",
    "subCategory": "全熟",
    "dateAdded": 1669780800000
  },
  {
    "id": "1766227055477",
    "title": "第10回 附赠",
    "url": "https://www.bilibili.com/video/BV1aP4y1X72J/",
    "category": "Radio",
    "subCategory": "全熟",
    "dateAdded": 1669176000000
  },
  {
    "id": "1766227015372",
    "title": "第10回",
    "url": "https://www.bilibili.com/video/BV1D44y1D7Cs",
    "category": "Radio",
    "subCategory": "全熟",
    "dateAdded": 1669176000000
  },
  {
    "id": "1766226942004",
    "title": "第9回 附赠",
    "url": "https://www.bilibili.com/video/BV1kW4y1x7Ep/",
    "category": "Radio",
    "subCategory": "全熟",
    "dateAdded": 1668571200000
  },
  {
    "id": "1766226874729",
    "title": "第9回",
    "url": "https://www.bilibili.com/video/BV1Ug411v7MK",
    "category": "Radio",
    "subCategory": "全熟",
    "dateAdded": 1668571200000
  },
  {
    "id": "1766226780219",
    "title": "第8回 附赠",
    "url": "https://www.bilibili.com/video/BV1At4y1T7PN/",
    "category": "Radio",
    "subCategory": "全熟",
    "dateAdded": 1667966400000
  },
  {
    "id": "1766226691336",
    "title": "第8回 下",
    "url": "https://www.bilibili.com/video/BV1Cd4y1F7MJ/",
    "category": "Radio",
    "subCategory": "全熟",
    "dateAdded": 1667966400000
  },
  {
    "id": "1766226648963",
    "title": "第8回 上",
    "url": "https://www.bilibili.com/video/BV1Jv4y1S7QH/",
    "category": "Radio",
    "subCategory": "全熟",
    "dateAdded": 1667966400000
  },
  {
    "id": "1766226308916",
    "title": "第7回 b",
    "url": "https://www.bilibili.com/video/BV1fd4y1r7KJ/",
    "category": "Radio",
    "subCategory": "全熟",
    "dateAdded": 1667361600000
  },
  {
    "id": "1766226239872",
    "title": "第7回 a",
    "url": "https://www.bilibili.com/video/BV1FG4y1f7at/",
    "category": "Radio",
    "subCategory": "全熟",
    "dateAdded": 1667361600000
  },
  {
    "id": "1766226122182",
    "title": "第6回 附赠",
    "url": "https://www.bilibili.com/video/BV1NM41167uR",
    "category": "Radio",
    "subCategory": "全熟",
    "dateAdded": 1666756800000
  },
  {
    "id": "1766226077745",
    "title": "第6回 下",
    "url": "https://www.bilibili.com/video/BV1Vd4y1k7Tt",
    "category": "Radio",
    "subCategory": "全熟",
    "dateAdded": 1666756800000
  },
  {
    "id": "1766226012346",
    "title": "第6回 上",
    "url": "https://www.bilibili.com/video/BV1We4y1e77Z/",
    "category": "Radio",
    "subCategory": "全熟",
    "dateAdded": 1666756800000
  },
  {
    "id": "1766225904302",
    "title": "第5回",
    "url": "https://www.bilibili.com/video/BV1yP411A71m/",
    "category": "Radio",
    "subCategory": "全熟",
    "dateAdded": 1666152000000
  },
  {
    "id": "1766225801646",
    "title": "第4回",
    "url": "https://www.bilibili.com/video/BV18g411s7a9/",
    "category": "Radio",
    "subCategory": "全熟",
    "dateAdded": 1665547200000
  },
  {
    "id": "1766225731330",
    "title": "第3回",
    "url": "https://www.bilibili.com/video/BV1yW4y1j7ks/",
    "category": "Radio",
    "subCategory": "全熟",
    "dateAdded": 1664942400000
  },
  {
    "id": "1766225671996",
    "title": "孤独摇滚京Mafu大作战（孤独广播第2回公开录音）",
    "url": "https://www.bilibili.com/video/BV13e4y1U7uo/",
    "category": "Radio",
    "subCategory": "全熟",
    "dateAdded": 1663473600000
  },
  {
    "id": "1766225485263",
    "title": "第2回 （京MAFU大作战）",
    "url": "https://www.bilibili.com/video/BV15G4y1H753/",
    "category": "Radio",
    "subCategory": "全熟",
    "dateAdded": 1663732800000
  },
  {
    "id": "1765339224070",
    "title": "孤独摇滚（下） PV",
    "url": "https://www.bilibili.com/bangumi/play/ep2333791",
    "category": "Animation",
    "subCategory": "PV",
    "dateAdded": 1746763200000
  },
  {
    "id": "1765339166191",
    "title": "孤独摇滚（上） PV",
    "url": "https://www.bilibili.com/bangumi/play/ep2333769",
    "category": "Animation",
    "subCategory": "PV",
    "dateAdded": 1745553600000
  },
  {
    "id": "1765339017165",
    "title": "孤独摇滚（上） （中配版）",
    "url": "https://www.bilibili.com/bangumi/play/ep2313518",
    "category": "Animation",
    "subCategory": "剧场版",
    "dateAdded": 1745553600000
  },
  {
    "id": "1765338979259",
    "title": "孤独摇滚（上） （原版）",
    "url": "https://www.bilibili.com/bangumi/play/ep2381103",
    "category": "Animation",
    "subCategory": "剧场版",
    "dateAdded": 1745553600000
  },
  {
    "id": "1765338855144",
    "title": "孤独摇滚！PV",
    "url": "https://www.bilibili.com/bangumi/play/ep681527",
    "category": "Animation",
    "subCategory": "PV",
    "dateAdded": 1664164800000
  },
  {
    "id": "1765338760736",
    "title": "孤独摇滚！第12话：愿你迎来黎明",
    "url": "https://www.bilibili.com/bangumi/play/ep718238",
    "category": "Animation",
    "subCategory": "正片",
    "dateAdded": 1673755200000
  },
  {
    "id": "1765338717705",
    "title": "孤独摇滚！第11话：十二进制的夕景",
    "url": "https://www.bilibili.com/bangumi/play/ep718237",
    "category": "Animation",
    "subCategory": "正片",
    "dateAdded": 1673150400000
  },
  {
    "id": "1765338636015",
    "title": "孤独摇滚！第10话：天黑以后",
    "url": "https://www.bilibili.com/bangumi/play/ep718236",
    "category": "Animation",
    "subCategory": "正片",
    "dateAdded": 1672545600000
  },
  {
    "id": "1765338590523",
    "title": "孤独摇滚！第9话：江之岛扶梯",
    "url": "https://www.bilibili.com/bangumi/play/ep706289",
    "category": "Animation",
    "subCategory": "正片",
    "dateAdded": 1671940800000
  },
  {
    "id": "1765338536238",
    "title": "孤独摇滚！第8话：孤独摇滚",
    "url": "https://www.bilibili.com/bangumi/play/ep706288",
    "category": "Animation",
    "subCategory": "正片",
    "dateAdded": 1671336000000
  },
  {
    "id": "1765338478891",
    "title": "孤独摇滚！第7话：去你家",
    "url": "https://www.bilibili.com/bangumi/play/ep706287",
    "category": "Animation",
    "subCategory": "正片",
    "dateAdded": 1670731200000
  },
  {
    "id": "1765338431927",
    "title": "孤独摇滚！第6话：八景",
    "url": "https://www.bilibili.com/bangumi/play/ep703037",
    "category": "Animation",
    "subCategory": "正片",
    "dateAdded": 1670126400000
  },
  {
    "id": "1765338238946",
    "title": "孤独摇滚！第5话：飞不了的鱼",
    "url": "https://www.bilibili.com/bangumi/play/ep703036",
    "category": "Animation",
    "subCategory": "正片",
    "dateAdded": 1669521600000
  },
  {
    "id": "1765338068017",
    "title": "孤独摇滚！第4话：跳跃女孩（们）",
    "url": "https://www.bilibili.com/bangumi/play/ep703035",
    "category": "Animation",
    "subCategory": "正片",
    "dateAdded": 1668916800000
  },
  {
    "id": "1765338010751",
    "title": "孤独摇滚！第3话：救星赶来",
    "url": "https://www.bilibili.com/bangumi/play/ep693249",
    "category": "Animation",
    "subCategory": "正片",
    "dateAdded": 1668312000000
  },
  {
    "id": "1764520443709",
    "title": "AnimeJapan2022",
    "url": "https://www.bilibili.com/video/BV1kT411Q7Aj/",
    "category": "Activity",
    "subCategory": "线下活动",
    "dateAdded": 1648353600000
  },
  {
    "id": "1764520334713",
    "title": "【完整熟肉】舞台剧「孤独摇滚！」【8/20千秋楽夜公演】",
    "url": "https://www.bilibili.com/video/BV19H4y1Q7XV",
    "category": "Stage",
    "subCategory": "正片",
    "dateAdded": 1692504000000
  },
  {
    "id": "1764520182617",
    "title": "【官方MV/中日特效字幕】吉他与孤独与蓝色星球",
    "url": "https://www.bilibili.com/video/BV1w14y157UZ/",
    "category": "Music",
    "subCategory": "MV",
    "dateAdded": 1667707200000
  },
  {
    "id": "1764520030577",
    "title": "第1回",
    "url": "https://www.bilibili.com/video/BV15841147y2/",
    "category": "Radio",
    "subCategory": "全熟",
    "dateAdded": 1662523200000
  },
  {
    "id": "1764519945478",
    "title": "ROCK IN JAPAN 2025",
    "url": "https://www.bilibili.com/video/BV1LvULBsEMZ",
    "category": "Concert",
    "subCategory": "单曲",
    "dateAdded": 1763697600000
  },
  {
    "id": "1764519479228",
    "title": "孤独摇滚！第2话：明天见",
    "url": "https://www.bilibili.com/bangumi/play/ep693248",
    "category": "Animation",
    "subCategory": "正片",
    "dateAdded": 1667707200000
  },
  {
    "id": "1764519346223",
    "title": "孤独摇滚！第1话：孤独的转机",
    "url": "https://www.bilibili.com/bangumi/play/ep693247",
    "category": "Animation",
    "subCategory": "正片",
    "dateAdded": 1667102400000
  }
];
