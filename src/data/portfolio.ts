export type PortfolioImage = {
  src: string;
  alt: string;
  caption: string;
};

export type PortfolioProject = {
  id: string;
  title: string;
  client?: string;
  body: string;
  images: PortfolioImage[];
};

export const projects: PortfolioProject[] = [
  {
    id: "tvo-hq",
    title: "โครงการปรับปรุงอาคารสำนักงานใหญ่",
    client: "บริษัท น้ำมันพืชไทย จำกัด (มหาชน)",
    body: "งานปรับปรุงระบบไฟฟ้าอาคารสำนักงานใหญ่ ครอบคลุมระบบแสงสว่าง พื้นที่ทำงานสำนักงาน และโถงอเนกประสงค์",
    images: [
      {
        src: "/images/portfolio/tvo-hq/exterior.jpg",
        alt: "อาคารสำนักงานใหญ่ บริษัท น้ำมันพืชไทย จำกัด (มหาชน)",
        caption: "ภายนอกอาคาร",
      },
      {
        src: "/images/portfolio/tvo-hq/hall.jpg",
        alt: "โถงอเนกประสงค์อาคารสำนักงานใหญ่ บริษัท น้ำมันพืชไทย",
        caption: "โถงอเนกประสงค์",
      },
      {
        src: "/images/portfolio/tvo-hq/hall-aerial.jpg",
        alt: "มุมสูงโถงประชุมอาคารสำนักงานใหญ่ บริษัท น้ำมันพืชไทย",
        caption: "มุมสูงโถงประชุม",
      },
      {
        src: "/images/portfolio/tvo-hq/office.jpg",
        alt: "พื้นที่สำนักงานหลังปรับปรุงอาคารสำนักงานใหญ่ บริษัท น้ำมันพืชไทย",
        caption: "พื้นที่สำนักงาน",
      },
    ],
  },
  {
    id: "bftz-4",
    title: "โครงการ Bangkok Free Trade Zone 4",
    body: "งานระบบไฟฟ้าอาคารคลังสินค้าและโรงงาน ครอบคลุมระบบแสงสว่างและระบบจ่ายไฟภายในอาคาร",
    images: [
      {
        src: "/images/portfolio/bftz-4/exterior.jpg",
        alt: "ภายนอกอาคารคลังสินค้าโครงการ Bangkok Free Trade Zone 4",
        caption: "ภายนอกอาคาร",
      },
      {
        src: "/images/portfolio/bftz-4/aerial.jpg",
        alt: "ภาพรวมโครงการ Bangkok Free Trade Zone 4 บางปะกง",
        caption: "ภาพรวมโครงการ",
      },
      {
        src: "/images/portfolio/bftz-4/interior-office.jpg",
        alt: "ภายในอาคารคลังสินค้าโครงการ Bangkok Free Trade Zone 4",
        caption: "ภายในอาคาร",
      },
      {
        src: "/images/portfolio/bftz-4/interior-hall.jpg",
        alt: "ระบบแสงสว่างภายในคลังสินค้าโครงการ Bangkok Free Trade Zone 4",
        caption: "ระบบแสงสว่างภายใน",
      },
    ],
  },
  {
    id: "talad-thai-veg",
    title: "งานโครงการปรับปรุงอาคารผักสดตลาดไท",
    body: "งานปรับปรุงระบบไฟฟ้าอาคารผักสด ครอบคลุมระบบแสงสว่างและรางเดินสายไฟภายในอาคาร",
    images: [
      {
        src: "/images/portfolio/talad-thai/exterior-night.jpg",
        alt: "งานติดตั้งระบบแสงสว่างอาคารผักสดตลาดไท",
        caption: "งานติดตั้งระบบแสงสว่าง",
      },
      {
        src: "/images/portfolio/talad-thai/lighting-install.jpg",
        alt: "ติดตั้งโคมไฟภายในอาคารผักสดตลาดไท",
        caption: "ติดตั้งโคมไฟภายในอาคาร",
      },
      {
        src: "/images/portfolio/talad-thai/ceiling.jpg",
        alt: "รางเดินสายไฟและระบบแสงสว่างหลังคาอาคารผักสดตลาดไท",
        caption: "รางเดินสายไฟและระบบแสงสว่าง",
      },
    ],
  },
  {
    id: "tofu-megamart",
    title: "โครงการ TOFU SKINCARE MEGA MART THE MARKET BANGKOK",
    body: "งานระบบไฟฟ้าพื้นที่ร้านค้า ครอบคลุมระบบแสงสว่าง ป้ายไฟ และระบบจ่ายไฟภายในร้าน",
    images: [
      {
        src: "/images/portfolio/tofu-megamart/entrance.jpg",
        alt: "ทางเข้า TOFU SKINCARE MEGA MART THE MARKET BANGKOK",
        caption: "ทางเข้า Mega Mart",
      },
      {
        src: "/images/portfolio/tofu-megamart/pharmacy.jpg",
        alt: "โซน TOFU Pharmacy ในโครงการ TOFU SKINCARE MEGA MART",
        caption: "โซน Pharmacy",
      },
      {
        src: "/images/portfolio/tofu-megamart/storefront.jpg",
        alt: "หน้าร้าน TOFU Pharmacy THE MARKET BANGKOK",
        caption: "หน้าร้าน Pharmacy",
      },
      {
        src: "/images/portfolio/tofu-megamart/market.jpg",
        alt: "พื้นที่ร้านค้าภายใน TOFU SKINCARE MEGA MART",
        caption: "พื้นที่ร้านค้าภายใน",
      },
    ],
  },
  {
    id: "thai-optical-chiller",
    title: "งานสายเมนต์ไฟฟ้าสำหรับจ่าย CHILLER",
    client: "บริษัท ไทยออพติคอล กรุ๊ป จำกัด (มหาชน)",
    body: "งานเดินสายเมนไฟฟ้าสำหรับจ่ายระบบ Chiller ครอบคลุมรางเคเบิล ตู้จ่ายไฟ และการทดสอบระบบ",
    images: [
      {
        src: "/images/portfolio/thai-optical-chiller/cable-tray.jpg",
        alt: "รางเคเบิลสำหรับจ่ายระบบ Chiller บริษัท ไทยออพติคอล กรุ๊ป",
        caption: "รางเคเบิลระบบ Chiller",
      },
      {
        src: "/images/portfolio/thai-optical-chiller/panel.jpg",
        alt: "ตู้จ่ายไฟสำหรับระบบ Chiller บริษัท ไทยออพติคอล กรุ๊ป",
        caption: "ตู้จ่ายไฟ",
      },
      {
        src: "/images/portfolio/thai-optical-chiller/phase-test.jpg",
        alt: "ทดสอบลำดับเฟสระบบไฟฟ้าจ่าย Chiller",
        caption: "ทดสอบลำดับเฟส",
      },
      {
        src: "/images/portfolio/thai-optical-chiller/insulation-test.jpg",
        alt: "ทดสอบฉนวนสายเมนไฟฟ้าสำหรับจ่าย Chiller",
        caption: "ทดสอบฉนวนสายเมน",
      },
    ],
  },
];
