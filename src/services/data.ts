import { EquipmentCategory, SearchResult } from '../types';

export const equipmentData: EquipmentCategory[] = [
    {
        name: "หมวด 2: สำนักงาน",
        items: [
            { id: 1, name: "กล้องถ่ายภาพ/กล้องถ่ายภาพดิจิตอล", unit: "กล้อง", keywords: ["digital camera", "camera"] },
            { id: 2, name: "กล้องถ่ายวีดีทัศน์/กล้อง VDO/กล้อง PTZ พร้อมขาตั้ง/กล้องแอคชั่นแคม", unit: "ชุด", keywords: ["vdo", "video camera", "action cam", "camcorder", "ptz camera"] },
            { id: 4, name: "เครื่องกำเนิดไฟฟ้าแบบยกได้/เครื่องปั่นไฟ", unit: "เครื่อง", keywords: ["generator"] },
            { id: 12, name: "เครื่องฉาย LCD Projector/Projector", unit: "เครื่อง", keywords: ["projector", "lcd projector"] },
            { id: 13, name: "เครื่องถ่ายเอกสาร", unit: "เครื่อง", keywords: ["copier", "photocopier"] },
            { id: 18, name: "เครื่องปรับอากาศ", unit: "เครื่อง", note: "ราคากลางขึ้นอยู่กับขนาด BTU โปรดระบุเพื่อความแม่นยำ", keywords: ["แอร์", "air conditioner", "aircon"] },
            { id: 22, name: "เครื่องฟอกอากาศ (Air Purifier)", unit: "เครื่อง", keywords: ["air purifier"] },
            { id: 27, name: "พัดลมตั้งโต๊ะ/พัดลมตั้งพื้น/พัดลมติดเพดาน/พัดลมติดผนัง (ส่ายรอบตัว)", unit: "เครื่อง", keywords: ["fan"] },
            { id: 33, name: "เก้าอี้สำนักงาน ระดับปฏิบัติการ/ทั่วไป", unit: "ตัว", price: 3000, keywords: ["เก้าอี้ทำงาน", "office chair"] },
            { id: 34, name: "เก้าอี้สำนักงาน ระดับผู้จัดการ", unit: "ตัว", price: 7000, keywords: ["เก้าอี้ผู้บริหาร", "manager chair", "executive chair"] },
            { id: 35, name: "เก้าอี้รับแขก แถว 3 ที่นั่ง", unit: "แถว", price: 5500, keywords: ["เก้าอี้แถว", "bench", "visitor chair"] },
            { id: 36, name: "โต๊ะทำงานเหล็ก พร้อมเก้าอี้ ขนาด 4 ฟุต", unit: "ชุด", price: 5000, keywords: ["โต๊ะทำงาน", "desk"] },
            { id: 37, name: "โต๊ะประชุม ขนาด 8-10 ที่นั่ง", unit: "ตัว", price: 15000, keywords: ["โต๊ะประชุม", "conference table"] },
            { id: 38, name: "ตู้เก็บเอกสารเหล็ก", unit: "ตู้", keywords: ["filing cabinet", "ตู้เอกสาร"] },
            { id: 39, name: "เครื่องทำลายเอกสาร", unit: "เครื่อง", keywords: ["paper shredder", "shredder"] },
            { id: 40, name: "เครื่องเคลือบบัตร", unit: "เครื่อง", keywords: ["laminator"] },
            { id: 41, name: "เครื่องเจาะกระดาษและเข้าเล่ม", unit: "เครื่อง", keywords: ["binding machine"] },
            { id: 42, name: "กระดานไวท์บอร์ดพร้อมขาตั้ง", unit: "ชุด", keywords: ["whiteboard"] },
            { id: 43, name: "โทรทัศน์ (Television)", unit: "เครื่อง", keywords: ["tv", "television", "ทีวี"] },
            { id: 44, name: "ชุดรับแขก", unit: "ชุด", price: 12000, keywords: ["sofa set", "โซฟา"] },
            { id: 101, name: "เครื่องปรับอากาศ แบบติดผนัง 12,000 บีทียู", unit: "เครื่อง", price: 16800, keywords: ["แอร์", "air conditioner", "12000 btu"] },
            { id: 102, name: "เครื่องปรับอากาศ แบบติดผนัง 18,000 บีทียู", unit: "เครื่อง", price: 21500, keywords: ["แอร์", "air conditioner", "18000 btu"] },
            { id: 103, name: "เครื่องปรับอากาศ แบบตั้งพื้นหรือแขวน 13,000 บีทียู", unit: "เครื่อง", price: 23500, keywords: ["แอร์", "air conditioner", "13000 btu"] },
            { id: 104, name: "เครื่องปรับอากาศ แบบตั้งพื้นหรือแขวน 36,000 บีทียู", unit: "เครื่อง", price: 45500, keywords: ["แอร์", "air conditioner", "36000 btu"] },
            { id: 105, name: "เครื่องปรับอากาศ แบบตั้งพื้นหรือแขวน (Inverter) 18,000 บีทียู", unit: "เครื่อง", price: 33500, keywords: ["แอร์", "inverter", "air conditioner"] },
            { id: 106, name: "กล้องวงจรปิด (CCTV)", unit: "ชุด", keywords: ["cctv"] },
        ]
    },
    {
        name: "หมวด 3: คลังพัสดุ",
        items: [
            { id: 1, name: "เครื่องชั่งน้ำหนักชั่งได้ 50 กิโลกรัมขึ้นไป", unit: "เครื่อง", keywords: ["scale", "weighing scale"] },
            { id: 9, name: "ชั้นวางพัสดุเชิงอุตสาหกรรม (Pallet Racking)", unit: "ชุด", keywords: ["pallet rack", "racking", "shelf"] },
            { id: 13, name: "รถยก (Fork Lift/Hydraulic Stacker/Pallet Truck)", unit: "คัน", keywords: ["forklift", "stacker", "pallet truck"] },
            { id: 14, name: "รถเข็นของ 2 ล้อ/4 ล้อ", unit: "คัน", keywords: ["trolley", "hand truck", "รถเข็น"] },
            { id: 15, name: "บันไดอลูมิเนียม", unit: "อัน", keywords: ["ladder", "บันได"] },
        ]
    },
    {
        name: "หมวด 4: ยานพาหนะและขนส่ง",
        items: [
            { id: 1, name: "รถยนต์นั่งส่วนบุคคล (เครื่องยนต์เบนซิน)", unit: "คัน", price: 750000, keywords: ["รถยนต์", "รถเก๋ง", "sedan", "car"] },
            { id: 2, name: "รถยนต์บรรทุก (ปิคอัพ) ตอนครึ่ง ขับเคลื่อน 2 ล้อ", unit: "คัน", price: 650000, keywords: ["รถกระบะ", "ปิคอัพ", "pickup", "truck"] },
            { id: 3, name: "รถยนต์บรรทุก (ปิคอัพ) 4 ประตู ขับเคลื่อน 4 ล้อ", unit: "คัน", price: 900000, keywords: ["รถกระบะ", "4x4", "4wd", "double cab", "สี่ประตู", "pickup truck"] },
            { id: 4, name: "รถบรรทุก 6 ล้อ พร้อมเครน", unit: "คัน", price: 1800000, keywords: ["รถหกล้อ", "รถเครน", "truck", "crane truck"] },
            { id: 5, name: "รถจักรยานยนต์", unit: "คัน", price: 50000, keywords: ["มอเตอร์ไซค์", "motorcycle", "bike"] },
            { id: 6, name: "รถยนต์ตู้โดยสาร (Van)", unit: "คัน", price: 1200000, keywords: ["van", "รถตู้"] },
            { id: 7, name: "รถบรรทุกติดกระเช้า", unit: "คัน", keywords: ["boom truck", "cherry picker", "รถกระเช้า"] },
        ]
    },
    {
        name: "หมวด 5: เบ็ดเตล็ด",
        items: [
            { id: 1, name: "เครื่องดูดควัน/เครื่องดูดอากาศ", unit: "เครื่อง", note: "รายการจาก 5.3 เบ็ดเตล็ดอื่น ๆ", keywords: ["cooker hood", "exhaust fan", "ventilator"] },
            { id: 2, name: "เครื่องตัดหญ้า/รถตัดหญ้า", unit: "เครื่อง", note: "รายการจาก 5.3 เบ็ดเตล็ดอื่น ๆ", keywords: ["lawn mower", "grass cutter"] },
            { id: 3, name: "เครื่องกระตุกหัวใจอัตโนมัติ", unit: "เครื่อง", keywords: ["aed", "defibrillator"] },
            { id: 5, name: "ตู้เย็น ตู้แช่", unit: "ตู้", note: "รายการจาก 5.3 เบ็ดเตล็ดอื่น ๆ", keywords: ["refrigerator", "fridge", "freezer"] },
            { id: 7, name: "เครื่องตรวจคลื่นไฟฟ้าหัวใจ", unit: "เครื่อง", keywords: ["ecg", "ekg", "electrocardiogram"] },
            { id: 13, name: "เตียงคนไข้", unit: "เตียง", keywords: ["hospital bed", "patient bed"] },
            { id: 26, name: "รถเข็นผู้ป่วยแบบนั่ง", unit: "คัน", keywords: ["wheelchair"] },
            { id: 27, name: "เครื่องสูบน้ำ", unit: "เครื่อง", keywords: ["water pump"] },
            { id: 28, name: "เครื่องดูดฝุ่น", unit: "เครื่อง", keywords: ["vacuum cleaner"] },
            { id: 29, name: "เครื่องขัดพื้น", unit: "เครื่อง", keywords: ["floor polisher"] },
            { id: 30, name: "ตู้เชื่อมไฟฟ้า", unit: "เครื่อง", keywords: ["welding machine"] },
            { id: 31, name: "ชุดเครื่องมือช่าง", unit: "ชุด", keywords: ["tool kit", "tools"] },
        ]
    },
    {
        name: "หมวด 6: คอมพิวเตอร์",
        items: [
            { id: 1, name: "สแกนเนอร์", unit: "เครื่อง", keywords: ["scanner"] },
            { id: 5, name: "จอแสดงภาพ (Monitor)", unit: "เครื่อง", keywords: ["monitor", "screen", "display"] },
            { id: 7, name: "เครื่องพิมพ์ (Printer)", unit: "เครื่อง", keywords: ["printer"] },
            { id: 8, name: "ชุดโปรแกรมระบบปฏิบัติการสำหรับเครื่องคอมพิวเตอร์", unit: "ชุด", keywords: ["os", "operating system"] },
            { id: 12, name: "ชุดโปรแกรมป้องกันไวรัส (Antivirus Software)", unit: "ชุด", keywords: ["antivirus", "security software"] },
            { id: 17, name: "อุปกรณ์กระจายสัญญาณ (switch) ชนิด 24 ports ขึ้นไป", unit: "ชุด", keywords: ["network switch", "switch"] },
            { id: 27, name: "เครื่องคอมพิวเตอร์แม่ข่าย (Server)", unit: "เครื่อง", keywords: ["server"] },
            { id: 32, name: "เครื่องคอมพิวเตอร์โน้ตบุ๊ก", unit: "ชุด", keywords: ["notebook", "laptop", "โน้ตบุ๊ก"] },
            { id: 33, name: "เครื่องคอมพิวเตอร์", unit: "ชุด", keywords: ["pc", "desktop", "computer"] },
            { id: 34, name: "คอมพิวเตอร์แท็บเล็ต", unit: "ชุด", keywords: ["tablet"] },
            { id: 39, name: "เครื่องสำรองไฟฟ้า (UPS)", unit: "เครื่อง", keywords: ["ups", "uninterruptible power supply"] },
            { id: 40, name: "เครื่องพิมพ์มัลติฟังก์ชัน (Multifunction Printer)", unit: "เครื่อง", keywords: ["all-in-one printer", "multifunction", "printer scanner copier"] },
            { id: 41, name: "เครื่องอ่านบาร์โค้ด (Barcode Scanner)", unit: "เครื่อง", keywords: ["barcode reader", "barcode scanner"] },
            { id: 42, name: "ฮาร์ดดิสก์แบบพกพา (External Hard Drive)", unit: "เครื่อง", keywords: ["external hdd", "portable hard drive"] },
            { id: 43, name: "เว็บแคม (Webcam)", unit: "เครื่อง", keywords: ["webcam", "camera"] },
        ]
    },
    {
        name: "หมวด 9: มิเตอร์และอุปกรณ์ประกอบมิเตอร์",
        items: [
            { id: 20, name: "ชุดเครื่องมือตรวจสอบมิเตอร์ 1 เฟสและ 3 เฟส ต่อตรง", unit: "ชุด", keywords: ["meter testing kit"] },
            { id: 24, name: "เครื่องวัดกระแสไฟรั่วแบบคล้อง/หนีบ (Clamp-on Leakage Current Meter)", unit: "เครื่อง", keywords: ["clamp meter", "leakage current meter"] },
            { id: 27, name: "เครื่องทดสอบมิเตอร์มาตรฐาน 3 เฟส แบบพกพา (Portable Standard Meter)", unit: "เครื่อง", keywords: ["portable standard meter", "meter tester"] },
            { id: 29, "name": "กล้องบันทึกภาพ ความละเอียดไม่น้อยกว่า 20 Mpixel", "unit": "เครื่อง", "keywords": ["camera"] },
            { id: 30, name: "เครื่องวัดค่าความเป็นฉนวน (Insulation Tester)", unit: "เครื่อง", keywords: ["insulation tester", "megohmmeter", "เมกโอห์มมิเตอร์"] },
            { id: 31, name: "เครื่องวัดค่าความต้านทานดิน (Earth Resistance Tester)", unit: "เครื่อง", keywords: ["earth tester", "ground resistance tester"] },
            { id: 32, name: "กล้องถ่ายภาพความร้อน (Thermal Imaging Camera)", unit: "เครื่อง", keywords: ["thermal camera", "flir"] },
        ]
    }
];

export const searchEquipment = (query: string): SearchResult[] => {
  if (!query || query.trim().length < 2) {
      return [];
  }

  const lowerCaseQuery = query.toLowerCase().trim();
  const results: SearchResult[] = [];
  const addedItems = new Set<string>();

  equipmentData.forEach(category => {
    category.items.forEach(item => {
      const uniqueId = `${category.name}-${item.id}-${item.name}`;
      if (addedItems.has(uniqueId)) {
          return;
      }
      
      const nameMatch = item.name.toLowerCase().includes(lowerCaseQuery);
      const keywordMatch = item.keywords?.some(keyword => keyword.toLowerCase().includes(lowerCaseQuery));

      if (nameMatch || keywordMatch) {
        results.push({
          ...item,
          category: category.name,
        });
        addedItems.add(uniqueId);
      }
    });
  });

  return results;
};
