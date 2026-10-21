// Global state
let vocabularyData = [
  // Lesson 1 - 你好 (Hello)
  { id: 1, hsk: 1, track: 'classic', lesson: 1, hanzi: "你", pinyin: "nǐ", uzbek: "Siz" },
  { id: 2, hsk: 1, track: 'classic', lesson: 1, hanzi: "好", pinyin: "hǎo", uzbek: "Yaxshi" },
  { id: 3, hsk: 1, track: 'classic', lesson: 1, hanzi: "您", pinyin: "nín", uzbek: "Siz (hurmatli)" },
  { id: 4, hsk: 1, track: 'classic', lesson: 1, hanzi: "你们", pinyin: "nǐmen", uzbek: "Sizlar" },
  { id: 5, hsk: 1, track: 'classic', lesson: 1, hanzi: "对不起", pinyin: "duìbuqǐ", uzbek: "Kechirasiz" },
  { id: 6, hsk: 1, track: 'classic', lesson: 1, hanzi: "没关系", pinyin: "méi guānxi", uzbek: "Hech gap emas" },
  
  // Lesson 2 - 谢谢你 (Thank you)
  { id: 7, hsk: 1, track: 'classic', lesson: 2, hanzi: "谢谢", pinyin: "xièxie", uzbek: "Rahmat" },
  { id: 8, hsk: 1, track: 'classic', lesson: 2, hanzi: "不", pinyin: "bù", uzbek: "Yo'q" },
  { id: 9, hsk: 1, track: 'classic', lesson: 2, hanzi: "不客气", pinyin: "bú kèqi", uzbek: "Arzimaydi" },
  { id: 10, hsk: 1, track: 'classic', lesson: 2, hanzi: "再见", pinyin: "zàijiàn", uzbek: "Xayr" },
  
  // Lesson 3 - 你叫什么名字 (What's your name)
  { id: 11, hsk: 1, track: 'classic', lesson: 3, hanzi: "叫", pinyin: "jiào", uzbek: "Chaqirmoq, atmoq" },
  { id: 12, hsk: 1, track: 'classic', lesson: 3, hanzi: "什么", pinyin: "shénme", uzbek: "Nima" },
  { id: 13, hsk: 1, track: 'classic', lesson: 3, hanzi: "名字", pinyin: "míngzi", uzbek: "Ism" },
  { id: 14, hsk: 1, track: 'classic', lesson: 3, hanzi: "我", pinyin: "wǒ", uzbek: "Men" },
  { id: 15, hsk: 1, track: 'classic', lesson: 3, hanzi: "是", pinyin: "shì", uzbek: "Bo'lmoq" },
  { id: 16, hsk: 1, track: 'classic', lesson: 3, hanzi: "老师", pinyin: "lǎoshī", uzbek: "O'qituvchi" },
  { id: 17, hsk: 1, track: 'classic', lesson: 3, hanzi: "吗", pinyin: "ma", uzbek: "Savol qo'shimchasi" },
  { id: 18, hsk: 1, track: 'classic', lesson: 3, hanzi: "学生", pinyin: "xuésheng", uzbek: "Talaba" },
  { id: 19, hsk: 1, track: 'classic', lesson: 3, hanzi: "人", pinyin: "rén", uzbek: "Odamlar" },
  { id: 20, hsk: 1, track: 'classic', lesson: 3, hanzi: "李月", pinyin: "Lǐ Yuè", uzbek: "Li Yue (ism)" },
  { id: 21, hsk: 1, track: 'classic', lesson: 3, hanzi: "中国", pinyin: "Zhōngguó", uzbek: "Xitoy" },
  { id: 22, hsk: 1, track: 'classic', lesson: 3, hanzi: "美国", pinyin: "Měiguó", uzbek: "Amerika" },
  
  // Lesson 4 - 她是我的汉语老师 (She is my Chinese teacher)
  { id: 23, hsk: 1, track: 'classic', lesson: 4, hanzi: "她", pinyin: "tā", uzbek: "U (ayol)" },
  { id: 24, hsk: 1, track: 'classic', lesson: 4, hanzi: "谁", pinyin: "shéi", uzbek: "Kim" },
  { id: 25, hsk: 1, track: 'classic', lesson: 4, hanzi: "的", pinyin: "de", uzbek: "Belgish" },
  { id: 26, hsk: 1, track: 'classic', lesson: 4, hanzi: "汉语", pinyin: "Hànyǔ", uzbek: "Xitoy tili" },
  { id: 27, hsk: 1, track: 'classic', lesson: 4, hanzi: "哪", pinyin: "nǎ", uzbek: "Qaysi" },
  { id: 28, hsk: 1, track: 'classic', lesson: 4, hanzi: "国", pinyin: "guó", uzbek: "Davlat" },
  { id: 29, hsk: 1, track: 'classic', lesson: 4, hanzi: "呢", pinyin: "ne", uzbek: "Savol qo'shimchasi" },
  { id: 30, hsk: 1, track: 'classic', lesson: 4, hanzi: "他", pinyin: "tā", uzbek: "U (erkak)" },
  { id: 31, hsk: 1, track: 'classic', lesson: 4, hanzi: "同学", pinyin: "tóngxué", uzbek: "Sinfdosh" },
  { id: 32, hsk: 1, track: 'classic', lesson: 4, hanzi: "朋友", pinyin: "péngyou", uzbek: "Do'st" },
  
  // Lesson 5 - 她女儿今年二十岁 (Her daughter is 20 years old this year)
  { id: 33, hsk: 1, track: 'classic', lesson: 5, hanzi: "家", pinyin: "jiā", uzbek: "Oila, uy" },
  { id: 34, hsk: 1, track: 'classic', lesson: 5, hanzi: "有", pinyin: "yǒu", uzbek: "Bormoq" },
  { id: 35, hsk: 1, track: 'classic', lesson: 5, hanzi: "口", pinyin: "kǒu", uzbek: "Oila a'zosi uchun hisoblagich" },
  { id: 36, hsk: 1, track: 'classic', lesson: 5, hanzi: "女儿", pinyin: "nǚ'ér", uzbek: "Qizi" },
  { id: 37, hsk: 1, track: 'classic', lesson: 5, hanzi: "几", pinyin: "jǐ", uzbek: "Nechta (o'n tagacha)" },
  { id: 38, hsk: 1, track: 'classic', lesson: 5, hanzi: "岁", pinyin: "suì", uzbek: "Yosh" },
  { id: 39, hsk: 1, track: 'classic', lesson: 5, hanzi: "了", pinyin: "le", uzbek: "O'zgarish qo'shimchasi" },
  { id: 40, hsk: 1, track: 'classic', lesson: 5, hanzi: "今年", pinyin: "jīnnián", uzbek: "Bu yil" },
  { id: 41, hsk: 1, track: 'classic', lesson: 5, hanzi: "多", pinyin: "duō", uzbek: "Qancha" },
  { id: 42, hsk: 1, track: 'classic', lesson: 5, hanzi: "大", pinyin: "dà", uzbek: "Katta (yoshda)" },
  
  // Lesson 6 - 我会说汉语 (I can speak Chinese)
  { id: 43, hsk: 1, track: 'classic', lesson: 6, hanzi: "会", pinyin: "huì", uzbek: "Qila olmoq" },
  { id: 44, hsk: 1, track: 'classic', lesson: 6, hanzi: "说", pinyin: "shuō", uzbek: "Gapirmoq" },
  { id: 45, hsk: 1, track: 'classic', lesson: 6, hanzi: "妈妈", pinyin: "māma", uzbek: "Onasi" },
  { id: 46, hsk: 1, track: 'classic', lesson: 6, hanzi: "菜", pinyin: "cài", uzbek: "Taom, sabzavot" },
  { id: 47, hsk: 1, track: 'classic', lesson: 6, hanzi: "很", pinyin: "hěn", uzbek: "Juda" },
  { id: 48, hsk: 1, track: 'classic', lesson: 6, hanzi: "好吃", pinyin: "hǎochī", uzbek: "Mazali" },
  { id: 49, hsk: 1, track: 'classic', lesson: 6, hanzi: "做", pinyin: "zuò", uzbek: "Qilmoq, tayyorlamoq" },
  { id: 50, hsk: 1, track: 'classic', lesson: 6, hanzi: "写", pinyin: "xiě", uzbek: "Yozmoq" },
  { id: 51, hsk: 1, track: 'classic', lesson: 6, hanzi: "汉字", pinyin: "Hànzì", uzbek: "Xitoy harflari" },
  { id: 52, hsk: 1, track: 'classic', lesson: 6, hanzi: "字", pinyin: "zì", uzbek: "Harf, so'z" },
  { id: 53, hsk: 1, track: 'classic', lesson: 6, hanzi: "怎么", pinyin: "zěnme", uzbek: "Qanday" },
  { id: 54, hsk: 1, track: 'classic', lesson: 6, hanzi: "读", pinyin: "dú", uzbek: "O'qimoq" },
  
  // Lesson 7 - 今天几号 (What's the date today)
  { id: 55, hsk: 1, track: 'classic', lesson: 7, hanzi: "请", pinyin: "qǐng", uzbek: "Marhamat; taklif qilmoq" },
  { id: 56, hsk: 1, track: 'classic', lesson: 7, hanzi: "问", pinyin: "wèn", uzbek: "Soramoq" },
  { id: 57, hsk: 1, track: 'classic', lesson: 7, hanzi: "今天", pinyin: "jīntiān", uzbek: "Bugun" },
  { id: 58, hsk: 1, track: 'classic', lesson: 7, hanzi: "号", pinyin: "hào", uzbek: "Sana; raqam" },
  { id: 59, hsk: 1, track: 'classic', lesson: 7, hanzi: "月", pinyin: "yuè", uzbek: "Oy" },
  { id: 60, hsk: 1, track: 'classic', lesson: 7, hanzi: "星期", pinyin: "xīngqī", uzbek: "Hafta" },
  { id: 61, hsk: 1, track: 'classic', lesson: 7, hanzi: "昨天", pinyin: "zuótiān", uzbek: "Kecha" },
  { id: 62, hsk: 1, track: 'classic', lesson: 7, hanzi: "明天", pinyin: "míngtiān", uzbek: "Ertaga" },
  { id: 63, hsk: 1, track: 'classic', lesson: 7, hanzi: "去", pinyin: "qù", uzbek: "Ketmoq" },
  { id: 64, hsk: 1, track: 'classic', lesson: 7, hanzi: "学校", pinyin: "xuéxiào", uzbek: "Maktab" },
  { id: 65, hsk: 1, track: 'classic', lesson: 7, hanzi: "看", pinyin: "kàn", uzbek: "Ko'rmoq, o'qimoq" },
  { id: 66, hsk: 1, track: 'classic', lesson: 7, hanzi: "书", pinyin: "shū", uzbek: "Kitob" },
  
  // Lesson 8 - 我想喝茶 (I'd like some tea)
  { id: 67, hsk: 1, track: 'classic', lesson: 8, hanzi: "想", pinyin: "xiǎng", uzbek: "Xohlamoq, o'ylamoq" },
  { id: 68, hsk: 1, track: 'classic', lesson: 8, hanzi: "喝", pinyin: "hē", uzbek: "Ichmoq" },
  { id: 69, hsk: 1, track: 'classic', lesson: 8, hanzi: "茶", pinyin: "chá", uzbek: "Choy" },
  { id: 70, hsk: 1, track: 'classic', lesson: 8, hanzi: "吃", pinyin: "chī", uzbek: "Yemoq" },
  { id: 71, hsk: 1, track: 'classic', lesson: 8, hanzi: "米饭", pinyin: "mǐfàn", uzbek: "Guruch" },
  { id: 72, hsk: 1, track: 'classic', lesson: 8, hanzi: "下午", pinyin: "xiàwǔ", uzbek: "Tushdan keyin" },
  { id: 73, hsk: 1, track: 'classic', lesson: 8, hanzi: "商店", pinyin: "shāngdiàn", uzbek: "Do'kon" },
  { id: 74, hsk: 1, track: 'classic', lesson: 8, hanzi: "买", pinyin: "mǎi", uzbek: "Sotib olish" },
  { id: 75, hsk: 1, track: 'classic', lesson: 8, hanzi: "个", pinyin: "gè", uzbek: "Umumiy hisoblagich" },
  { id: 76, hsk: 1, track: 'classic', lesson: 8, hanzi: "杯子", pinyin: "bēizi", uzbek: "Piola" },
  { id: 77, hsk: 1, track: 'classic', lesson: 8, hanzi: "这", pinyin: "zhè", uzbek: "Bu" },
  { id: 78, hsk: 1, track: 'classic', lesson: 8, hanzi: "多少", pinyin: "duōshao", uzbek: "Qancha" },
  { id: 79, hsk: 1, track: 'classic', lesson: 8, hanzi: "钱", pinyin: "qián", uzbek: "Pul" },
  { id: 80, hsk: 1, track: 'classic', lesson: 8, hanzi: "块", pinyin: "kuài", uzbek: "Yuan (pul birligi)" },
  { id: 81, hsk: 1, track: 'classic', lesson: 8, hanzi: "那", pinyin: "nà", uzbek: "U" },
  
  // Lesson 9 - 你儿子在哪儿工作 (Where does your son work)
  { id: 82, hsk: 1, track: 'classic', lesson: 9, hanzi: "小", pinyin: "xiǎo", uzbek: "Kichik" },
  { id: 83, hsk: 1, track: 'classic', lesson: 9, hanzi: "猫", pinyin: "māo", uzbek: "Mushuk" },
  { id: 84, hsk: 1, track: 'classic', lesson: 9, hanzi: "在", pinyin: "zài", uzbek: "Joylashmoq; da, da" },
  { id: 85, hsk: 1, track: 'classic', lesson: 9, hanzi: "那儿", pinyin: "nàr", uzbek: "U yerda" },
  { id: 86, hsk: 1, track: 'classic', lesson: 9, hanzi: "狗", pinyin: "gǒu", uzbek: "It" },
  { id: 87, hsk: 1, track: 'classic', lesson: 9, hanzi: "椅子", pinyin: "yǐzi", uzbek: "Stul" },
  { id: 88, hsk: 1, track: 'classic', lesson: 9, hanzi: "下面", pinyin: "xiàmiàn", uzbek: "Pastda" },
  { id: 89, hsk: 1, track: 'classic', lesson: 9, hanzi: "哪儿", pinyin: "nǎr", uzbek: "Qayer" },
  { id: 90, hsk: 1, track: 'classic', lesson: 9, hanzi: "工作", pinyin: "gōngzuò", uzbek: "Ishlamoq; ish" },
  { id: 91, hsk: 1, track: 'classic', lesson: 9, hanzi: "儿子", pinyin: "érzi", uzbek: "O'g'li" },
  { id: 92, hsk: 1, track: 'classic', lesson: 9, hanzi: "医院", pinyin: "yīyuàn", uzbek: "Kasalxona" },
  { id: 93, hsk: 1, track: 'classic', lesson: 9, hanzi: "医生", pinyin: "yīshēng", uzbek: "Shifokor" },
  { id: 94, hsk: 1, track: 'classic', lesson: 9, hanzi: "爸爸", pinyin: "bàba", uzbek: "Otasi" },
  
  // Lesson 10 - 我能坐这儿吗 (Can I sit here)
  { id: 95, hsk: 1, track: 'classic', lesson: 10, hanzi: "桌子", pinyin: "zhuōzi", uzbek: "Stol" },
  { id: 96, hsk: 1, track: 'classic', lesson: 10, hanzi: "上", pinyin: "shàng", uzbek: "Ustida, yuqorida" },
  { id: 97, hsk: 1, track: 'classic', lesson: 10, hanzi: "电脑", pinyin: "diànnǎo", uzbek: "Kompyuter" },
  { id: 98, hsk: 1, track: 'classic', lesson: 10, hanzi: "和", pinyin: "hé", uzbek: "Va" },
  { id: 99, hsk: 1, track: 'classic', lesson: 10, hanzi: "本", pinyin: "běn", uzbek: "Kitob uchun hisoblagich" },
  { id: 100, hsk: 1, track: 'classic', lesson: 10, hanzi: "里", pinyin: "lǐ", uzbek: "Ichida" },
  { id: 101, hsk: 1, track: 'classic', lesson: 10, hanzi: "前面", pinyin: "qiánmiàn", uzbek: "Oldinda" },
  { id: 102, hsk: 1, track: 'classic', lesson: 10, hanzi: "后面", pinyin: "hòumiàn", uzbek: "Orqasida" },
  { id: 103, hsk: 1, track: 'classic', lesson: 10, hanzi: "这儿", pinyin: "zhèr", uzbek: "Bu yerda" },
  { id: 104, hsk: 1, track: 'classic', lesson: 10, hanzi: "没有", pinyin: "méiyǒu", uzbek: "Yo'q; bo'lmaydi" },
  { id: 105, hsk: 1, track: 'classic', lesson: 10, hanzi: "能", pinyin: "néng", uzbek: "Qila olmoq" },
  { id: 106, hsk: 1, track: 'classic', lesson: 10, hanzi: "坐", pinyin: "zuò", uzbek: "O'tirmoq" },
  { id: 107, hsk: 1, track: 'classic', lesson: 10, hanzi: "王方", pinyin: "Wáng Fāng", uzbek: "Van Fan (ism)" },
  { id: 108, hsk: 1, track: 'classic', lesson: 10, hanzi: "谢朋", pinyin: "Xiè Péng", uzbek: "Sye Pen (ism)" },
  
  // Lesson 11 - 现在几点 (What's the time now)
  { id: 109, hsk: 1, track: 'classic', lesson: 11, hanzi: "现在", pinyin: "xiànzài", uzbek: "Hozir" },
  { id: 110, hsk: 1, track: 'classic', lesson: 11, hanzi: "点", pinyin: "diǎn", uzbek: "Soat; nuqta" },
  { id: 111, hsk: 1, track: 'classic', lesson: 11, hanzi: "分", pinyin: "fēn", uzbek: "Daqiqa" },
  { id: 112, hsk: 1, track: 'classic', lesson: 11, hanzi: "中午", pinyin: "zhōngwǔ", uzbek: "Tush" },
  { id: 113, hsk: 1, track: 'classic', lesson: 11, hanzi: "吃饭", pinyin: "chī fàn", uzbek: "Taom yemoq" },
  { id: 114, hsk: 1, track: 'classic', lesson: 11, hanzi: "时候", pinyin: "shíhou", uzbek: "Vaqt" },
  { id: 115, hsk: 1, track: 'classic', lesson: 11, hanzi: "回", pinyin: "huí", uzbek: "Qaytmoq" },
  { id: 116, hsk: 1, track: 'classic', lesson: 11, hanzi: "我们", pinyin: "wǒmen", uzbek: "Biz" },
  { id: 117, hsk: 1, track: 'classic', lesson: 11, hanzi: "电影", pinyin: "diànyǐng", uzbek: "Kino" },
  { id: 118, hsk: 1, track: 'classic', lesson: 11, hanzi: "住", pinyin: "zhù", uzbek: "Yashamoq" },
  { id: 119, hsk: 1, track: 'classic', lesson: 11, hanzi: "前", pinyin: "qián", uzbek: "Oldin; old" },
  { id: 120, hsk: 1, track: 'classic', lesson: 11, hanzi: "北京", pinyin: "Běijīng", uzbek: "Pekin" },
  
  // Lesson 12 - 明天天气怎么样 (What will the weather be like tomorrow)
  { id: 121, hsk: 1, track: 'classic', lesson: 12, hanzi: "天气", pinyin: "tiānqì", uzbek: "Ob-havo" },
  { id: 122, hsk: 1, track: 'classic', lesson: 12, hanzi: "怎么样", pinyin: "zěnmeyàng", uzbek: "Qanday" },
  { id: 123, hsk: 1, track: 'classic', lesson: 12, hanzi: "太", pinyin: "tài", uzbek: "Juda (juda...)" },
  { id: 124, hsk: 1, track: 'classic', lesson: 12, hanzi: "热", pinyin: "rè", uzbek: "Issiq" },
  { id: 125, hsk: 1, track: 'classic', lesson: 12, hanzi: "冷", pinyin: "lěng", uzbek: "Sovuq" },
  { id: 126, hsk: 1, track: 'classic', lesson: 12, hanzi: "下雨", pinyin: "xià yǔ", uzbek: "Yomg'ir yog'moq" },
  { id: 127, hsk: 1, track: 'classic', lesson: 12, hanzi: "小姐", pinyin: "xiǎojiě", uzbek: "Xonim" },
  { id: 128, hsk: 1, track: 'classic', lesson: 12, hanzi: "来", pinyin: "lái", uzbek: "Kelmoq" },
  { id: 129, hsk: 1, track: 'classic', lesson: 12, hanzi: "身体", pinyin: "shēntǐ", uzbek: "Tana, sog'liq" },
  { id: 130, hsk: 1, track: 'classic', lesson: 12, hanzi: "爱", pinyin: "ài", uzbek: "Sevmoq" },
  { id: 131, hsk: 1, track: 'classic', lesson: 12, hanzi: "些", pinyin: "xiē", uzbek: "Bir oz, bir nechta" },
  { id: 132, hsk: 1, track: 'classic', lesson: 12, hanzi: "水果", pinyin: "shuǐguǒ", uzbek: "Meva" },
  { id: 133, hsk: 1, track: 'classic', lesson: 12, hanzi: "水", pinyin: "shuǐ", uzbek: "Suv" },
  
  // Lesson 13 - 他在学做中国菜呢 (He is learning to cook Chinese food)
  { id: 134, hsk: 1, track: 'classic', lesson: 13, hanzi: "喂", pinyin: "wèi", uzbek: "Allo (telefonda); hey" },
  { id: 135, hsk: 1, track: 'classic', lesson: 13, hanzi: "也", pinyin: "yě", uzbek: "Ham" },
  { id: 136, hsk: 1, track: 'classic', lesson: 13, hanzi: "学习", pinyin: "xuéxí", uzbek: "O'qimoq, o'rganmoq" },
  { id: 137, hsk: 1, track: 'classic', lesson: 13, hanzi: "上午", pinyin: "shàngwǔ", uzbek: "Tushdan oldin" },
  { id: 138, hsk: 1, track: 'classic', lesson: 13, hanzi: "睡觉", pinyin: "shuì jiào", uzbek: "Uxlamoq" },
  { id: 139, hsk: 1, track: 'classic', lesson: 13, hanzi: "电视", pinyin: "diànshì", uzbek: "Televizor" },
  { id: 140, hsk: 1, track: 'classic', lesson: 13, hanzi: "喜欢", pinyin: "xǐhuan", uzbek: "Yoqtirmoq" },
  { id: 141, hsk: 1, track: 'classic', lesson: 13, hanzi: "给", pinyin: "gěi", uzbek: "Berish; uchun" },
  { id: 142, hsk: 1, track: 'classic', lesson: 13, hanzi: "打电话", pinyin: "dǎ diànhuà", uzbek: "Telefon qilmoq" },
  { id: 143, hsk: 1, track: 'classic', lesson: 13, hanzi: "吧", pinyin: "ba", uzbek: "Taklif qo'shimchasi" },
  { id: 144, hsk: 1, track: 'classic', lesson: 13, hanzi: "大卫", pinyin: "Dàwèi", uzbek: "Devid (ism)" },
  
  // Lesson 14 - 她买了不少衣服 (She has bought quite a few clothes)
  { id: 145, hsk: 1, track: 'classic', lesson: 14, hanzi: "东西", pinyin: "dōngxi", uzbek: "Narsa, buyum" },
  { id: 146, hsk: 1, track: 'classic', lesson: 14, hanzi: "一点儿", pinyin: "yìdiǎnr", uzbek: "Bir oz" },
  { id: 147, hsk: 1, track: 'classic', lesson: 14, hanzi: "苹果", pinyin: "píngguǒ", uzbek: "Olma" },
  { id: 148, hsk: 1, track: 'classic', lesson: 14, hanzi: "看见", pinyin: "kànjiàn", uzbek: "Ko'rmoq" },
  { id: 149, hsk: 1, track: 'classic', lesson: 14, hanzi: "先生", pinyin: "xiānsheng", uzbek: "Janob; eri" },
  { id: 150, hsk: 1, track: 'classic', lesson: 14, hanzi: "开", pinyin: "kāi", uzbek: "Haydash; ochmoq" },
  { id: 151, hsk: 1, track: 'classic', lesson: 14, hanzi: "车", pinyin: "chē", uzbek: "Mashina" },
  { id: 152, hsk: 1, track: 'classic', lesson: 14, hanzi: "回来", pinyin: "huílái", uzbek: "Qaytib kelmoq" },
  { id: 153, hsk: 1, track: 'classic', lesson: 14, hanzi: "分钟", pinyin: "fēnzhōng", uzbek: "Daqiqa" },
  { id: 154, hsk: 1, track: 'classic', lesson: 14, hanzi: "后", pinyin: "hòu", uzbek: "Keyin" },
  { id: 155, hsk: 1, track: 'classic', lesson: 14, hanzi: "衣服", pinyin: "yīfu", uzbek: "Kiyimlar" },
  { id: 156, hsk: 1, track: 'classic', lesson: 14, hanzi: "漂亮", pinyin: "piàoliang", uzbek: "Chiroyli" },
  { id: 157, hsk: 1, track: 'classic', lesson: 14, hanzi: "啊", pinyin: "a", uzbek: "Modal qo'shimcha" },
  { id: 158, hsk: 1, track: 'classic', lesson: 14, hanzi: "少", pinyin: "shǎo", uzbek: "Kam (juda ko'p)" },
  { id: 159, hsk: 1, track: 'classic', lesson: 14, hanzi: "这些", pinyin: "zhèxiē", uzbek: "Bular" },
  { id: 160, hsk: 1, track: 'classic', lesson: 14, hanzi: "都", pinyin: "dōu", uzbek: "Hammasi" },
  { id: 161, hsk: 1, track: 'classic', lesson: 14, hanzi: "张", pinyin: "Zhāng", uzbek: "Jang (familiya)" },
  
  // Lesson 15 - 我是坐飞机来的 (I came here by air)
  { id: 162, hsk: 1, track: 'classic', lesson: 15, hanzi: "认识", pinyin: "rènshi", uzbek: "Tanimoq" },
  { id: 163, hsk: 1, track: 'classic', lesson: 15, hanzi: "年", pinyin: "nián", uzbek: "Yil" },
  { id: 164, hsk: 1, track: 'classic', lesson: 15, hanzi: "大学", pinyin: "dàxué", uzbek: "Universitet" },
  { id: 165, hsk: 1, track: 'classic', lesson: 15, hanzi: "饭店", pinyin: "fàndiàn", uzbek: "Restoran; mehmonxona" },
  { id: 166, hsk: 1, track: 'classic', lesson: 15, hanzi: "出租车", pinyin: "chūzūchē", uzbek: "Taksi" },
  { id: 167, hsk: 1, track: 'classic', lesson: 15, hanzi: "一起", pinyin: "yìqǐ", uzbek: "Birgalikda" },
  { id: 168, hsk: 1, track: 'classic', lesson: 15, hanzi: "高兴", pinyin: "gāoxìng", uzbek: "Xursand" },
  { id: 169, hsk: 1, track: 'classic', lesson: 15, hanzi: "听", pinyin: "tīng", uzbek: "Tinglamoq" },
  { id: 170, hsk: 1, track: 'classic', lesson: 15, hanzi: "飞机", pinyin: "fēijī", uzbek: "Samolyot" },

  // New HSK 3.0 - Lessons 1-15 (authoritative textbook New Words, exact PDF order, Uzbek meanings preserved)
  // Logical track 'new' — fully separate from Classic HSK track 'classic'. Each track numbers its own lessons 1-15.
  { id: 171, hsk: 1, track: 'new', lesson: 1, hanzi: "你好", pinyin: "nǐ hǎo", uzbek: "Salom" },
  { id: 172, hsk: 1, track: 'new', lesson: 1, hanzi: "大家", pinyin: "dàjiā", uzbek: "Hamma" },
  { id: 173, hsk: 1, track: 'new', lesson: 1, hanzi: "好", pinyin: "hǎo", uzbek: "Yaxshi" },
  { id: 174, hsk: 1, track: 'new', lesson: 1, hanzi: "学生", pinyin: "xuéshēng", uzbek: "Talaba" },
  { id: 175, hsk: 1, track: 'new', lesson: 1, hanzi: "们", pinyin: "men", uzbek: "Ko'plik qo'shimchasi" },
  { id: 176, hsk: 1, track: 'new', lesson: 1, hanzi: "老师", pinyin: "lǎoshī", uzbek: "O'qituvchi" },
  { id: 177, hsk: 1, track: 'new', lesson: 1, hanzi: "您", pinyin: "nín", uzbek: "Siz (hurmatli)" },
  { id: 178, hsk: 1, track: 'new', lesson: 1, hanzi: "你们", pinyin: "nǐmen", uzbek: "Sizlar" },
  { id: 179, hsk: 1, track: 'new', lesson: 1, hanzi: "谢谢", pinyin: "xièxie", uzbek: "Rahmat" },
  { id: 180, hsk: 1, track: 'new', lesson: 1, hanzi: "不客气", pinyin: "bú kèqi", uzbek: "Arzimaydi" },
  { id: 181, hsk: 1, track: 'new', lesson: 1, hanzi: "同学", pinyin: "tóngxué", uzbek: "Sinfdosh" },
  { id: 182, hsk: 1, track: 'new', lesson: 1, hanzi: "再见", pinyin: "zàijiàn", uzbek: "Xayr" },

  // Lesson New HSK 3.0 Lesson 2 (authoritative PDF order, Uzbek meanings preserved)
  { id: 183, hsk: 1, track: 'new', lesson: 2, hanzi: "请问", pinyin: "qǐngwèn", uzbek: "Savol berishga ruxsat" },
  { id: 184, hsk: 1, track: 'new', lesson: 2, hanzi: "你", pinyin: "nǐ", uzbek: "Siz" },
  { id: 185, hsk: 1, track: 'new', lesson: 2, hanzi: "叫", pinyin: "jiào", uzbek: "Chaqirmoq, atmoq" },
  { id: 186, hsk: 1, track: 'new', lesson: 2, hanzi: "什么", pinyin: "shénme", uzbek: "Nima" },
  { id: 187, hsk: 1, track: 'new', lesson: 2, hanzi: "名字", pinyin: "míngzi", uzbek: "Ism" },
  { id: 188, hsk: 1, track: 'new', lesson: 2, hanzi: "我", pinyin: "wǒ", uzbek: "Men" },
  { id: 189, hsk: 1, track: 'new', lesson: 2, hanzi: "不", pinyin: "bù", uzbek: "Yo'q, emas" },
  { id: 190, hsk: 1, track: 'new', lesson: 2, hanzi: "是", pinyin: "shì", uzbek: "Bo'lmoq" },
  { id: 191, hsk: 1, track: 'new', lesson: 2, hanzi: "对不起", pinyin: "duìbuqǐ", uzbek: "Kechirasiz" },
  { id: 192, hsk: 1, track: 'new', lesson: 2, hanzi: "没关系", pinyin: "méi guānxi", uzbek: "Hech gap emas" },
  { id: 193, hsk: 1, track: 'new', lesson: 2, hanzi: "没事", pinyin: "méishì", uzbek: "Hech gap emas" },
  { id: 194, hsk: 1, track: 'new', lesson: 2, hanzi: "很", pinyin: "hěn", uzbek: "Juda" },
  { id: 195, hsk: 1, track: 'new', lesson: 2, hanzi: "高兴", pinyin: "gāoxìng", uzbek: "Xursand" },
  { id: 196, hsk: 1, track: 'new', lesson: 2, hanzi: "认识", pinyin: "rènshi", uzbek: "Tanishmoq" },
  { id: 197, hsk: 1, track: 'new', lesson: 2, hanzi: "也", pinyin: "yě", uzbek: "Ham" },

  // Lesson New HSK 3.0 Lesson 3 (authoritative PDF order, Uzbek meanings preserved)
  { id: 198, hsk: 1, track: 'new', lesson: 3, hanzi: "人", pinyin: "rén", uzbek: "Odamlar" },
  { id: 199, hsk: 1, track: 'new', lesson: 3, hanzi: "的", pinyin: "de", uzbek: "Belgish" },
  { id: 200, hsk: 1, track: 'new', lesson: 3, hanzi: "这", pinyin: "zhè", uzbek: "Bu" },
  { id: 201, hsk: 1, track: 'new', lesson: 3, hanzi: "谁", pinyin: "shéi / shuí", uzbek: "Kim" },
  { id: 202, hsk: 1, track: 'new', lesson: 3, hanzi: "女朋友", pinyin: "nǚpéngyou", uzbek: "Qizi" },
  { id: 203, hsk: 1, track: 'new', lesson: 3, hanzi: "哪", pinyin: "nǎ", uzbek: "Qaysi" },
  { id: 204, hsk: 1, track: 'new', lesson: 3, hanzi: "国", pinyin: "guó", uzbek: "Davlat" },
  { id: 205, hsk: 1, track: 'new', lesson: 3, hanzi: "她", pinyin: "tā", uzbek: "U (ayol)" },
  { id: 206, hsk: 1, track: 'new', lesson: 3, hanzi: "喂", pinyin: "wèi", uzbek: "Alo (murojaat; telefon)" },
  { id: 207, hsk: 1, track: 'new', lesson: 3, hanzi: "姐姐", pinyin: "jiějie", uzbek: "Opasi" },
  { id: 208, hsk: 1, track: 'new', lesson: 3, hanzi: "工作", pinyin: "gōngzuò", uzbek: "Ish" },
  { id: 209, hsk: 1, track: 'new', lesson: 3, hanzi: "还", pinyin: "hái", uzbek: "Hali" },
  { id: 210, hsk: 1, track: 'new', lesson: 3, hanzi: "忙", pinyin: "máng", uzbek: "Band" },
  { id: 211, hsk: 1, track: 'new', lesson: 3, hanzi: "吗", pinyin: "ma", uzbek: "Savol qo'shimchasi" },
  { id: 212, hsk: 1, track: 'new', lesson: 3, hanzi: "对", pinyin: "duì", uzbek: "To'g'ri" },
  { id: 213, hsk: 1, track: 'new', lesson: 3, hanzi: "太", pinyin: "tài", uzbek: "Juda" },
  { id: 214, hsk: 1, track: 'new', lesson: 3, hanzi: "我们", pinyin: "wǒmen", uzbek: "Biz" },
  { id: 215, hsk: 1, track: 'new', lesson: 3, hanzi: "想", pinyin: "xiǎng", uzbek: "Xohlamoq" },

  // Lesson New HSK 3.0 Lesson 4 (authoritative PDF order, Uzbek meanings preserved)
  { id: 216, hsk: 1, track: 'new', lesson: 4, hanzi: "有", pinyin: "yǒu", uzbek: "Bormoq" },
  { id: 217, hsk: 1, track: 'new', lesson: 4, hanzi: "多少", pinyin: "duōshao", uzbek: "Qancha" },
  { id: 218, hsk: 1, track: 'new', lesson: 4, hanzi: "个", pinyin: "gè", uzbek: "Hisoblagich" },
  { id: 219, hsk: 1, track: 'new', lesson: 4, hanzi: "哥哥", pinyin: "gēge", uzbek: "Akasi" },
  { id: 220, hsk: 1, track: 'new', lesson: 4, hanzi: "呢", pinyin: "ne", uzbek: "Savol qo'shimchasi" },
  { id: 221, hsk: 1, track: 'new', lesson: 4, hanzi: "没有", pinyin: "méiyǒu", uzbek: "Yo'q" },
  { id: 222, hsk: 1, track: 'new', lesson: 4, hanzi: "家", pinyin: "jiā", uzbek: "Oila, uy" },
  { id: 223, hsk: 1, track: 'new', lesson: 4, hanzi: "几", pinyin: "jǐ", uzbek: "Nechta (o'n tagacha)" },
  { id: 224, hsk: 1, track: 'new', lesson: 4, hanzi: "口", pinyin: "kǒu", uzbek: "Oila a'zosi uchun hisoblagich" },
  { id: 225, hsk: 1, track: 'new', lesson: 4, hanzi: "爸爸", pinyin: "bàba", uzbek: "Otasi" },
  { id: 226, hsk: 1, track: 'new', lesson: 4, hanzi: "妈妈", pinyin: "māma", uzbek: "Onasi" },
  { id: 227, hsk: 1, track: 'new', lesson: 4, hanzi: "妹妹", pinyin: "mèimei", uzbek: "Singlisi" },
  { id: 228, hsk: 1, track: 'new', lesson: 4, hanzi: "和", pinyin: "hé", uzbek: "Va" },
  { id: 229, hsk: 1, track: 'new', lesson: 4, hanzi: "儿子", pinyin: "érzi", uzbek: "O'g'li" },
  { id: 230, hsk: 1, track: 'new', lesson: 4, hanzi: "孩子", pinyin: "háizi", uzbek: "Bola" },
  { id: 231, hsk: 1, track: 'new', lesson: 4, hanzi: "女儿", pinyin: "nǚ'ér", uzbek: "Qizi" },
  { id: 232, hsk: 1, track: 'new', lesson: 4, hanzi: "岁", pinyin: "suì", uzbek: "Yosh" },
  { id: 233, hsk: 1, track: 'new', lesson: 4, hanzi: "他", pinyin: "tā", uzbek: "U (erkak)" },
  { id: 234, hsk: 1, track: 'new', lesson: 4, hanzi: "今年", pinyin: "jīnnián", uzbek: "Bu yil" },
  { id: 235, hsk: 1, track: 'new', lesson: 4, hanzi: "多", pinyin: "duō", uzbek: "Qancha" },
  { id: 236, hsk: 1, track: 'new', lesson: 4, hanzi: "大", pinyin: "dà", uzbek: "Katta" },

  // Lesson New HSK 3.0 Lesson 5 (authoritative PDF order, Uzbek meanings preserved)
  { id: 237, hsk: 1, track: 'new', lesson: 5, hanzi: "今天", pinyin: "jīntiān", uzbek: "Bugun" },
  { id: 238, hsk: 1, track: 'new', lesson: 5, hanzi: "号", pinyin: "hào", uzbek: "Sana" },
  { id: 239, hsk: 1, track: 'new', lesson: 5, hanzi: "月", pinyin: "yuè", uzbek: "Oy" },
  { id: 240, hsk: 1, track: 'new', lesson: 5, hanzi: "日", pinyin: "rì", uzbek: "Kun, sana" },
  { id: 241, hsk: 1, track: 'new', lesson: 5, hanzi: "星期", pinyin: "xīngqī", uzbek: "Hafta" },
  { id: 242, hsk: 1, track: 'new', lesson: 5, hanzi: "星期日", pinyin: "Xīngqīrì", uzbek: "Yakshanba" },
  { id: 243, hsk: 1, track: 'new', lesson: 5, hanzi: "星期天", pinyin: "Xīngqītiān", uzbek: "Yakshanba" },
  { id: 244, hsk: 1, track: 'new', lesson: 5, hanzi: "休息", pinyin: "xiūxi", uzbek: "Dam olish" },
  { id: 245, hsk: 1, track: 'new', lesson: 5, hanzi: "会", pinyin: "huì", uzbek: "Qila olmoq" },
  { id: 246, hsk: 1, track: 'new', lesson: 5, hanzi: "做饭", pinyin: "zuòfàn", uzbek: "Ovqat qilmoq" },
  { id: 247, hsk: 1, track: 'new', lesson: 5, hanzi: "做", pinyin: "zuò", uzbek: "Qilmoq" },
  { id: 248, hsk: 1, track: 'new', lesson: 5, hanzi: "面条儿", pinyin: "miàntiáor", uzbek: "Lag'mon" },
  { id: 249, hsk: 1, track: 'new', lesson: 5, hanzi: "饺子", pinyin: "jiǎozi", uzbek: "Chuchvara" },
  { id: 250, hsk: 1, track: 'new', lesson: 5, hanzi: "一些", pinyin: "yìxiē", uzbek: "Bir necha" },
  { id: 251, hsk: 1, track: 'new', lesson: 5, hanzi: "菜", pinyin: "cài", uzbek: "Taom, sabzavot" },
  { id: 252, hsk: 1, track: 'new', lesson: 5, hanzi: "下班", pinyin: "xiàbān", uzbek: "Ishdan tushmoq" },
  { id: 253, hsk: 1, track: 'new', lesson: 5, hanzi: "新", pinyin: "xīn", uzbek: "Yangi" },
  { id: 254, hsk: 1, track: 'new', lesson: 5, hanzi: "电脑", pinyin: "diànnǎo", uzbek: "Kompyuter" },
  { id: 255, hsk: 1, track: 'new', lesson: 5, hanzi: "真", pinyin: "zhēn", uzbek: "Haqiqat" },
  { id: 256, hsk: 1, track: 'new', lesson: 5, hanzi: "好看", pinyin: "hǎokàn", uzbek: "Chiroyli" },
  { id: 257, hsk: 1, track: 'new', lesson: 5, hanzi: "喜欢", pinyin: "xǐhuan", uzbek: "Yoqtirmoq" },
  { id: 258, hsk: 1, track: 'new', lesson: 5, hanzi: "它", pinyin: "tā", uzbek: "Bu (narsa/hayvon)" },

  // Lesson New HSK 3.0 Lesson 6 (authoritative PDF order, Uzbek meanings preserved)
  { id: 259, hsk: 1, track: 'new', lesson: 6, hanzi: "手机", pinyin: "shǒujī", uzbek: "Telefon" },
  { id: 260, hsk: 1, track: 'new', lesson: 6, hanzi: "电话", pinyin: "diànhuà", uzbek: "Telefon" },
  { id: 261, hsk: 1, track: 'new', lesson: 6, hanzi: "号", pinyin: "hào", uzbek: "Sana" },
  { id: 262, hsk: 1, track: 'new', lesson: 6, hanzi: "明天", pinyin: "míngtiān", uzbek: "Ertaga" },
  { id: 263, hsk: 1, track: 'new', lesson: 6, hanzi: "去", pinyin: "qù", uzbek: "Ketmoq" },
  { id: 264, hsk: 1, track: 'new', lesson: 6, hanzi: "哪儿", pinyin: "nǎr", uzbek: "Qayerda" },
  { id: 265, hsk: 1, track: 'new', lesson: 6, hanzi: "想", pinyin: "xiǎng", uzbek: "Xohlamoq" },
  { id: 266, hsk: 1, track: 'new', lesson: 6, hanzi: "超市", pinyin: "chāoshì", uzbek: "Supermarket" },
  { id: 267, hsk: 1, track: 'new', lesson: 6, hanzi: "买", pinyin: "mǎi", uzbek: "Sotib olish" },
  { id: 268, hsk: 1, track: 'new', lesson: 6, hanzi: "些", pinyin: "xiē", uzbek: "Bir nechta" },
  { id: 269, hsk: 1, track: 'new', lesson: 6, hanzi: "东西", pinyin: "dōngxi", uzbek: "Narsa" },
  { id: 270, hsk: 1, track: 'new', lesson: 6, hanzi: "牛奶", pinyin: "niúnǎi", uzbek: "Sut" },
  { id: 271, hsk: 1, track: 'new', lesson: 6, hanzi: "吃", pinyin: "chī", uzbek: "Yemoq" },
  { id: 272, hsk: 1, track: 'new', lesson: 6, hanzi: "晚饭", pinyin: "wǎnfàn", uzbek: "Kechki ovqat" },
  { id: 273, hsk: 1, track: 'new', lesson: 6, hanzi: "那边", pinyin: "nàbiān", uzbek: "U tomonda" },
  { id: 274, hsk: 1, track: 'new', lesson: 6, hanzi: "包子", pinyin: "bāozi", uzbek: "Manti" },
  { id: 275, hsk: 1, track: 'new', lesson: 6, hanzi: "非常", pinyin: "fēicháng", uzbek: "Juda" },
  { id: 276, hsk: 1, track: 'new', lesson: 6, hanzi: "好吃", pinyin: "hǎochī", uzbek: "Mazali" },
  { id: 277, hsk: 1, track: 'new', lesson: 6, hanzi: "米饭", pinyin: "mǐfàn", uzbek: "Guruch" },
  { id: 278, hsk: 1, track: 'new', lesson: 6, hanzi: "怎么", pinyin: "zěnme", uzbek: "Qanday" },
  { id: 279, hsk: 1, track: 'new', lesson: 6, hanzi: "坐", pinyin: "zuò", uzbek: "O'tirmoq" },
  { id: 280, hsk: 1, track: 'new', lesson: 6, hanzi: "出租车", pinyin: "chūzūchē", uzbek: "Taksi" },

  // Lesson New HSK 3.0 Lesson 7 (authoritative PDF order, Uzbek meanings preserved)
  { id: 281, hsk: 1, track: 'new', lesson: 7, hanzi: "现在", pinyin: "xiànzài", uzbek: "Hozir" },
  { id: 282, hsk: 1, track: 'new', lesson: 7, hanzi: "点", pinyin: "diǎn", uzbek: "Soat" },
  { id: 283, hsk: 1, track: 'new', lesson: 7, hanzi: "早上", pinyin: "zǎoshang", uzbek: "Ertalab" },
  { id: 284, hsk: 1, track: 'new', lesson: 7, hanzi: "上午", pinyin: "shàngwǔ", uzbek: "Tushdan oldin" },
  { id: 285, hsk: 1, track: 'new', lesson: 7, hanzi: "分", pinyin: "fēn", uzbek: "Daqiqa" },
  { id: 286, hsk: 1, track: 'new', lesson: 7, hanzi: "课", pinyin: "kè", uzbek: "Dars" },
  { id: 287, hsk: 1, track: 'new', lesson: 7, hanzi: "下午", pinyin: "xiàwǔ", uzbek: "Tushdan keyin" },
  { id: 288, hsk: 1, track: 'new', lesson: 7, hanzi: "见", pinyin: "jiàn", uzbek: "Ko'rishmoq" },
  { id: 289, hsk: 1, track: 'new', lesson: 7, hanzi: "吧", pinyin: "ba", uzbek: "Qo'shimcha (taklif)" },
  { id: 290, hsk: 1, track: 'new', lesson: 7, hanzi: "电影院", pinyin: "diànyǐngyuàn", uzbek: "Kino" },
  { id: 291, hsk: 1, track: 'new', lesson: 7, hanzi: "看", pinyin: "kàn", uzbek: "Ko'rmoq" },
  { id: 292, hsk: 1, track: 'new', lesson: 7, hanzi: "电影", pinyin: "diànyǐng", uzbek: "Kino (film)" },
  { id: 293, hsk: 1, track: 'new', lesson: 7, hanzi: "事", pinyin: "shì", uzbek: "Ish, voqea" },
  { id: 294, hsk: 1, track: 'new', lesson: 7, hanzi: "上课", pinyin: "shàngkè", uzbek: "Darsga borish" },
  { id: 295, hsk: 1, track: 'new', lesson: 7, hanzi: "呢", pinyin: "ne", uzbek: "Savol qo'shimchasi" },
  { id: 296, hsk: 1, track: 'new', lesson: 7, hanzi: "半", pinyin: "bàn", uzbek: "Yarmi" },
  { id: 297, hsk: 1, track: 'new', lesson: 7, hanzi: "下课", pinyin: "xiàkè", uzbek: "Darsdan chiqish" },
  { id: 298, hsk: 1, track: 'new', lesson: 7, hanzi: "在", pinyin: "zài", uzbek: "Da, ichida" },
  { id: 299, hsk: 1, track: 'new', lesson: 7, hanzi: "家", pinyin: "jiā", uzbek: "Oila, uy" },
  { id: 300, hsk: 1, track: 'new', lesson: 7, hanzi: "里", pinyin: "lǐ", uzbek: "Ichida" },
  { id: 301, hsk: 1, track: 'new', lesson: 7, hanzi: "晚上", pinyin: "wǎnshang", uzbek: "Kechqurun" },
  { id: 302, hsk: 1, track: 'new', lesson: 7, hanzi: "医院", pinyin: "yīyuàn", uzbek: "Kasalxona" },
  { id: 303, hsk: 1, track: 'new', lesson: 7, hanzi: "上班", pinyin: "shàngbān", uzbek: "Ishga chiqmoq" },
  { id: 304, hsk: 1, track: 'new', lesson: 7, hanzi: "店", pinyin: "diàn", uzbek: "Do'kon" },
  { id: 305, hsk: 1, track: 'new', lesson: 7, hanzi: "菜", pinyin: "cài", uzbek: "Taom, sabzavot" },
  { id: 306, hsk: 1, track: 'new', lesson: 7, hanzi: "分钟", pinyin: "fēnzhōng", uzbek: "Daqiqa" },
  { id: 307, hsk: 1, track: 'new', lesson: 7, hanzi: "后", pinyin: "hòu", uzbek: "Keyin" },

  // Lesson New HSK 3.0 Lesson 8 (authoritative PDF order, Uzbek meanings preserved)
  { id: 308, hsk: 1, track: 'new', lesson: 8, hanzi: "房间", pinyin: "fángjiān", uzbek: "Xona" },
  { id: 309, hsk: 1, track: 'new', lesson: 8, hanzi: "外", pinyin: "wài", uzbek: "Tashqari" },
  { id: 310, hsk: 1, track: 'new', lesson: 8, hanzi: "只", pinyin: "zhī", uzbek: "Hayvonlar uchun hisoblagich" },
  { id: 311, hsk: 1, track: 'new', lesson: 8, hanzi: "小", pinyin: "xiǎo", uzbek: "Kichik" },
  { id: 312, hsk: 1, track: 'new', lesson: 8, hanzi: "猫", pinyin: "māo", uzbek: "Mushuk" },
  { id: 313, hsk: 1, track: 'new', lesson: 8, hanzi: "没", pinyin: "méi", uzbek: "Emas" },
  { id: 314, hsk: 1, track: 'new', lesson: 8, hanzi: "看见", pinyin: "kànjiàn", uzbek: "Ko'rmoq" },
  { id: 315, hsk: 1, track: 'new', lesson: 8, hanzi: "桌子", pinyin: "zhuōzi", uzbek: "Stol" },
  { id: 316, hsk: 1, track: 'new', lesson: 8, hanzi: "下", pinyin: "xià", uzbek: "Pastda" },
  { id: 317, hsk: 1, track: 'new', lesson: 8, hanzi: "漂亮", pinyin: "piàoliang", uzbek: "Chiroyli" },
  { id: 318, hsk: 1, track: 'new', lesson: 8, hanzi: "在", pinyin: "zài", uzbek: "Da, ichida" },
  { id: 319, hsk: 1, track: 'new', lesson: 8, hanzi: "学校", pinyin: "xuéxiào", uzbek: "Maktab" },
  { id: 320, hsk: 1, track: 'new', lesson: 8, hanzi: "书店", pinyin: "shūdiàn", uzbek: "Kitob do'koni" },
  { id: 321, hsk: 1, track: 'new', lesson: 8, hanzi: "前", pinyin: "qián", uzbek: "Oldin" },
  { id: 322, hsk: 1, track: 'new', lesson: 8, hanzi: "能", pinyin: "néng", uzbek: "Qila olmoq" },
  { id: 323, hsk: 1, track: 'new', lesson: 8, hanzi: "到", pinyin: "dào", uzbek: "Yetib kelmoq" },
  { id: 324, hsk: 1, track: 'new', lesson: 8, hanzi: "午饭", pinyin: "wǔfàn", uzbek: "Tushlik" },
  { id: 325, hsk: 1, track: 'new', lesson: 8, hanzi: "饭", pinyin: "fàn", uzbek: "Guruch, ovqat" },
  { id: 326, hsk: 1, track: 'new', lesson: 8, hanzi: "大", pinyin: "dà", uzbek: "Katta" },
  { id: 327, hsk: 1, track: 'new', lesson: 8, hanzi: "多", pinyin: "duō", uzbek: "Qancha" },
  { id: 328, hsk: 1, track: 'new', lesson: 8, hanzi: "病人", pinyin: "bìngrén", uzbek: "Bemor" },
  { id: 329, hsk: 1, track: 'new', lesson: 8, hanzi: "医生", pinyin: "yīshēng", uzbek: "Shifokor" },
  { id: 330, hsk: 1, track: 'new', lesson: 8, hanzi: "工作", pinyin: "gōngzuò", uzbek: "Ish" },

  // Lesson New HSK 3.0 Lesson 9 (authoritative PDF order, Uzbek meanings preserved)
  { id: 331, hsk: 1, track: 'new', lesson: 9, hanzi: "前边", pinyin: "qiánbian", uzbek: "Old tomon" },
  { id: 332, hsk: 1, track: 'new', lesson: 9, hanzi: "边", pinyin: "biān / biān", uzbek: "Tomon" },
  { id: 333, hsk: 1, track: 'new', lesson: 9, hanzi: "家", pinyin: "jiā", uzbek: "Oila, uy" },
  { id: 334, hsk: 1, track: 'new', lesson: 9, hanzi: "那个", pinyin: "nàge", uzbek: "U biri" },
  { id: 335, hsk: 1, track: 'new', lesson: 9, hanzi: "外边", pinyin: "wàibian", uzbek: "Tashqarida" },
  { id: 336, hsk: 1, track: 'new', lesson: 9, hanzi: "椅子", pinyin: "yǐzi", uzbek: "Stul" },
  { id: 337, hsk: 1, track: 'new', lesson: 9, hanzi: "上", pinyin: "shàng", uzbek: "Yuqorida" },
  { id: 338, hsk: 1, track: 'new', lesson: 9, hanzi: "本", pinyin: "běn", uzbek: "Kitob hisoblagichi" },
  { id: 339, hsk: 1, track: 'new', lesson: 9, hanzi: "书", pinyin: "shū", uzbek: "Kitob" },
  { id: 340, hsk: 1, track: 'new', lesson: 9, hanzi: "那", pinyin: "nà", uzbek: "U, o'sha" },
  { id: 341, hsk: 1, track: 'new', lesson: 9, hanzi: "第", pinyin: "dì", uzbek: "Tartib son ko'rsatkichi" },
  { id: 342, hsk: 1, track: 'new', lesson: 9, hanzi: "学习", pinyin: "xuéxí", uzbek: "O'qimoq" },
  { id: 343, hsk: 1, track: 'new', lesson: 9, hanzi: "做", pinyin: "zuò", uzbek: "Qilmoq" },
  { id: 344, hsk: 1, track: 'new', lesson: 9, hanzi: "白天", pinyin: "báitiān", uzbek: "Kunduzgi vaqt" },
  { id: 345, hsk: 1, track: 'new', lesson: 9, hanzi: "读书", pinyin: "dúshū", uzbek: "Kitob o'qimoq" },
  { id: 346, hsk: 1, track: 'new', lesson: 9, hanzi: "和", pinyin: "hé", uzbek: "Va" },
  { id: 347, hsk: 1, track: 'new', lesson: 9, hanzi: "朋友", pinyin: "péngyou", uzbek: "Do'st" },
  { id: 348, hsk: 1, track: 'new', lesson: 9, hanzi: "唱", pinyin: "chàng", uzbek: "Qo'shiq aytmoq" },
  { id: 349, hsk: 1, track: 'new', lesson: 9, hanzi: "歌", pinyin: "gē", uzbek: "Qo'shiq" },
  { id: 350, hsk: 1, track: 'new', lesson: 9, hanzi: "好听", pinyin: "hǎotīng", uzbek: "Eshitish uchun yoqimli" },
  { id: 351, hsk: 1, track: 'new', lesson: 9, hanzi: "电视", pinyin: "diànshì", uzbek: "Televizor" },
  { id: 352, hsk: 1, track: 'new', lesson: 9, hanzi: "狗", pinyin: "gǒu", uzbek: "It" },
  { id: 353, hsk: 1, track: 'new', lesson: 9, hanzi: "玩", pinyin: "wán", uzbek: "O'ynash" },

  // Lesson New HSK 3.0 Lesson 10 (authoritative PDF order, Uzbek meanings preserved)
  { id: 354, hsk: 1, track: 'new', lesson: 10, hanzi: "杯子", pinyin: "bēizi", uzbek: "Piola" },
  { id: 355, hsk: 1, track: 'new', lesson: 10, hanzi: "售货员", pinyin: "shòuhuòyuán", uzbek: "Sotuvchi" },
  { id: 356, hsk: 1, track: 'new', lesson: 10, hanzi: "这边", pinyin: "zhèbiān", uzbek: "Bu tomon" },
  { id: 357, hsk: 1, track: 'new', lesson: 10, hanzi: "钱", pinyin: "qián", uzbek: "Pul" },
  { id: 358, hsk: 1, track: 'new', lesson: 10, hanzi: "这些", pinyin: "zhèxiē", uzbek: "Bularning barchasi" },
  { id: 359, hsk: 1, track: 'new', lesson: 10, hanzi: "块", pinyin: "kuài", uzbek: "Yuan (pul)" },
  { id: 360, hsk: 1, track: 'new', lesson: 10, hanzi: "那些", pinyin: "nàxiē", uzbek: "Ularning barchasi" },
  { id: 361, hsk: 1, track: 'new', lesson: 10, hanzi: "这儿", pinyin: "zhèr", uzbek: "Bu yerda" },
  { id: 362, hsk: 1, track: 'new', lesson: 10, hanzi: "水果", pinyin: "shuǐguǒ", uzbek: "Mevalar" },
  { id: 363, hsk: 1, track: 'new', lesson: 10, hanzi: "少", pinyin: "shǎo", uzbek: "Kam" },
  { id: 364, hsk: 1, track: 'new', lesson: 10, hanzi: "斤", pinyin: "jīn", uzbek: "Jin (yarim kg)" },
  { id: 365, hsk: 1, track: 'new', lesson: 10, hanzi: "苹果", pinyin: "píngguǒ", uzbek: "Olma" },
  { id: 366, hsk: 1, track: 'new', lesson: 10, hanzi: "便宜", pinyin: "piányi", uzbek: "Arzon" },
  { id: 367, hsk: 1, track: 'new', lesson: 10, hanzi: "商店", pinyin: "shāngdiàn", uzbek: "Do'kon" },
  { id: 368, hsk: 1, track: 'new', lesson: 10, hanzi: "衣服", pinyin: "yīfu", uzbek: "Kiyimlar" },
  { id: 369, hsk: 1, track: 'new', lesson: 10, hanzi: "件", pinyin: "jiàn", uzbek: "Narsa hisoblagichi" },
  { id: 370, hsk: 1, track: 'new', lesson: 10, hanzi: "元", pinyin: "yuán", uzbek: "Yuan" },
  { id: 371, hsk: 1, track: 'new', lesson: 10, hanzi: "怎么样", pinyin: "zěnmeyàng", uzbek: "Qanday" },
  { id: 372, hsk: 1, track: 'new', lesson: 10, hanzi: "贵", pinyin: "guì", uzbek: "Qimmat" },
  { id: 373, hsk: 1, track: 'new', lesson: 10, hanzi: "穿", pinyin: "chuān", uzbek: "Kiyish" },
  { id: 374, hsk: 1, track: 'new', lesson: 10, hanzi: "女", pinyin: "nǚ", uzbek: "Ayol" },
  { id: 375, hsk: 1, track: 'new', lesson: 10, hanzi: "男", pinyin: "nán", uzbek: "Erkak" },
  { id: 376, hsk: 1, track: 'new', lesson: 10, hanzi: "哪儿", pinyin: "nǎr", uzbek: "Qayer" },

  // Lesson New HSK 3.0 Lesson 11 (authoritative PDF order, Uzbek meanings preserved)
  { id: 377, hsk: 1, track: 'new', lesson: 11, hanzi: "时候", pinyin: "shíhou", uzbek: "Vaqtda" },
  { id: 378, hsk: 1, track: 'new', lesson: 11, hanzi: "饭店", pinyin: "fàndiàn", uzbek: "Restoran" },
  { id: 379, hsk: 1, track: 'new', lesson: 11, hanzi: "知道", pinyin: "zhīdao", uzbek: "Bilmoq" },
  { id: 380, hsk: 1, track: 'new', lesson: 11, hanzi: "正在", pinyin: "zhèngzài", uzbek: "Ayni paytda" },
  { id: 381, hsk: 1, track: 'new', lesson: 11, hanzi: "找", pinyin: "zhǎo", uzbek: "Qidirmoq" },
  { id: 382, hsk: 1, track: 'new', lesson: 11, hanzi: "开车", pinyin: "kāichē", uzbek: "Haydash qilmoq" },
  { id: 383, hsk: 1, track: 'new', lesson: 11, hanzi: "车", pinyin: "chē", uzbek: "Mashina" },
  { id: 384, hsk: 1, track: 'new', lesson: 11, hanzi: "在", pinyin: "zài", uzbek: "Da, ichida" },
  { id: 385, hsk: 1, track: 'new', lesson: 11, hanzi: "读", pinyin: "dú", uzbek: "O'qimoq" },
  { id: 386, hsk: 1, track: 'new', lesson: 11, hanzi: "大学", pinyin: "dàxué", uzbek: "Universitet" },
  { id: 387, hsk: 1, track: 'new', lesson: 11, hanzi: "大学生", pinyin: "dàxuéshēng", uzbek: "Universitet talabasi" },
  { id: 388, hsk: 1, track: 'new', lesson: 11, hanzi: "学", pinyin: "xué", uzbek: "O'qimoq" },
  { id: 389, hsk: 1, track: 'new', lesson: 11, hanzi: "医", pinyin: "yī", uzbek: "Tibbiyot" },
  { id: 390, hsk: 1, track: 'new', lesson: 11, hanzi: "弟弟", pinyin: "dìdi", uzbek: "Ukasi" },
  { id: 391, hsk: 1, track: 'new', lesson: 11, hanzi: "起床", pinyin: "qǐchuáng", uzbek: "Turmoq" },
  { id: 392, hsk: 1, track: 'new', lesson: 11, hanzi: "睡觉", pinyin: "shuìjiào", uzbek: "Uxlamoq" },
  { id: 393, hsk: 1, track: 'new', lesson: 11, hanzi: "睡", pinyin: "shuì", uzbek: "Uxlamoq" },
  { id: 394, hsk: 1, track: 'new', lesson: 11, hanzi: "那里", pinyin: "nàlǐ", uzbek: "U yerd" },
  { id: 395, hsk: 1, track: 'new', lesson: 11, hanzi: "哪里", pinyin: "nǎlǐ", uzbek: "Qayerda" },
  { id: 396, hsk: 1, track: 'new', lesson: 11, hanzi: "昨天", pinyin: "zuótiān", uzbek: "Kecha" },
  { id: 397, hsk: 1, track: 'new', lesson: 11, hanzi: "问", pinyin: "wèn", uzbek: "So'ramoq" },
  { id: 398, hsk: 1, track: 'new', lesson: 11, hanzi: "对", pinyin: "duì", uzbek: "To'g'ri" },
  { id: 399, hsk: 1, track: 'new', lesson: 11, hanzi: "说", pinyin: "shuō", uzbek: "Gapirmoq" },
  { id: 400, hsk: 1, track: 'new', lesson: 11, hanzi: "要", pinyin: "yào", uzbek: "Xohlamoq" },
  { id: 401, hsk: 1, track: 'new', lesson: 11, hanzi: "小朋友", pinyin: "xiǎopéngyou", uzbek: "Bola" },

  // Lesson New HSK 3.0 Lesson 12 (authoritative PDF order incl. duplicate 天, Uzbek meanings preserved)
  { id: 402, hsk: 1, track: 'new', lesson: 12, hanzi: "天", pinyin: "tiān", uzbek: "Kun, osmon" },
  { id: 403, hsk: 1, track: 'new', lesson: 12, hanzi: "天气", pinyin: "tiānqì", uzbek: "Ob-havo" },
  { id: 404, hsk: 1, track: 'new', lesson: 12, hanzi: "这里", pinyin: "zhèlǐ", uzbek: "Bu yerda" },
  { id: 405, hsk: 1, track: 'new', lesson: 12, hanzi: "下雨", pinyin: "xiàyǔ", uzbek: "Yomg'ir yog'moq" },
  { id: 406, hsk: 1, track: 'new', lesson: 12, hanzi: "了", pinyin: "le", uzbek: "O'zgarish qo'shimchasi" },
  { id: 407, hsk: 1, track: 'new', lesson: 12, hanzi: "雨", pinyin: "yǔ", uzbek: "Yomg'ir" },
  { id: 408, hsk: 1, track: 'new', lesson: 12, hanzi: "有点儿", pinyin: "yǒudiǎnr", uzbek: "Ozgina" },
  { id: 409, hsk: 1, track: 'new', lesson: 12, hanzi: "觉得", pinyin: "juéde", uzbek: "O'ylamoq" },
  { id: 410, hsk: 1, track: 'new', lesson: 12, hanzi: "冷", pinyin: "lěng", uzbek: "Sovuq" },
  { id: 411, hsk: 1, track: 'new', lesson: 12, hanzi: "下", pinyin: "xià", uzbek: "Pastda" },
  { id: 412, hsk: 1, track: 'new', lesson: 12, hanzi: "雪", pinyin: "xuě", uzbek: "Qor" },
  { id: 413, hsk: 1, track: 'new', lesson: 12, hanzi: "来", pinyin: "lái", uzbek: "Kelmoq" },
  { id: 414, hsk: 1, track: 'new', lesson: 12, hanzi: "公司", pinyin: "gōngsī", uzbek: "Kompaniya" },
  { id: 415, hsk: 1, track: 'new', lesson: 12, hanzi: "生病", pinyin: "shēngbìng", uzbek: "Kasallanmoq" },
  { id: 416, hsk: 1, track: 'new', lesson: 12, hanzi: "看病", pinyin: "kànbìng", uzbek: "Shifokorga ko'rinmoq" },
  { id: 417, hsk: 1, track: 'new', lesson: 12, hanzi: "病", pinyin: "bìng", uzbek: "Kasal" },
  { id: 418, hsk: 1, track: 'new', lesson: 12, hanzi: "一点儿", pinyin: "yìdiǎnr", uzbek: "Ozgina" },
  { id: 419, hsk: 1, track: 'new', lesson: 12, hanzi: "药", pinyin: "yào", uzbek: "Dori" },
  { id: 420, hsk: 1, track: 'new', lesson: 12, hanzi: "天", pinyin: "tiān", uzbek: "Kun, osmon" },
  { id: 421, hsk: 1, track: 'new', lesson: 12, hanzi: "回", pinyin: "huí", uzbek: "Qaytmoq" },
  { id: 422, hsk: 1, track: 'new', lesson: 12, hanzi: "再", pinyin: "zài", uzbek: "Yana" },
  { id: 423, hsk: 1, track: 'new', lesson: 12, hanzi: "喝", pinyin: "hē", uzbek: "Ichmoq" },
  { id: 424, hsk: 1, track: 'new', lesson: 12, hanzi: "热", pinyin: "rè", uzbek: "Issiq" },
  { id: 425, hsk: 1, track: 'new', lesson: 12, hanzi: "水", pinyin: "shuǐ", uzbek: "Suv" },

  // Lesson New HSK 3.0 Lesson 13 (authoritative PDF order, Uzbek meanings preserved)
  { id: 426, hsk: 1, track: 'new', lesson: 13, hanzi: "可以", pinyin: "kěyǐ", uzbek: "Mumkin" },
  { id: 427, hsk: 1, track: 'new', lesson: 13, hanzi: "再", pinyin: "zài", uzbek: "Yana" },
  { id: 428, hsk: 1, track: 'new', lesson: 13, hanzi: "一下", pinyin: "yíxià", uzbek: "Bir oz, ozgina" },
  { id: 429, hsk: 1, track: 'new', lesson: 13, hanzi: "问题", pinyin: "wèntí", uzbek: "Savol, muammo" },
  { id: 430, hsk: 1, track: 'new', lesson: 13, hanzi: "卖", pinyin: "mài", uzbek: "Sotmoq" },
  { id: 431, hsk: 1, track: 'new', lesson: 13, hanzi: "打电话", pinyin: "dǎ diànhuà", uzbek: "Telefon qilmoq" },
  { id: 432, hsk: 1, track: 'new', lesson: 13, hanzi: "女士", pinyin: "nǚshì", uzbek: "Xonim" },
  { id: 433, hsk: 1, track: 'new', lesson: 13, hanzi: "坐", pinyin: "zuò", uzbek: "O'tirmoq" },
  { id: 434, hsk: 1, track: 'new', lesson: 13, hanzi: "请", pinyin: "qǐng", uzbek: "Marhamat" },
  { id: 435, hsk: 1, track: 'new', lesson: 13, hanzi: "服务员", pinyin: "fúwùyuán", uzbek: "Ofitsiant" },
  { id: 436, hsk: 1, track: 'new', lesson: 13, hanzi: "面包", pinyin: "miànbāo", uzbek: "Non" },
  { id: 437, hsk: 1, track: 'new', lesson: 13, hanzi: "这个", pinyin: "zhège", uzbek: "Bu narsa" },
  { id: 438, hsk: 1, track: 'new', lesson: 13, hanzi: "给", pinyin: "gěi", uzbek: "Bermoq" },
  { id: 439, hsk: 1, track: 'new', lesson: 13, hanzi: "杯", pinyin: "bēi", uzbek: "Piyola" },
  { id: 440, hsk: 1, track: 'new', lesson: 13, hanzi: "要", pinyin: "yào", uzbek: "Xohlamoq" },
  { id: 441, hsk: 1, track: 'new', lesson: 13, hanzi: "早饭", pinyin: "zǎofàn", uzbek: "Nonushta" },
  { id: 442, hsk: 1, track: 'new', lesson: 13, hanzi: "鸡蛋", pinyin: "jīdàn", uzbek: "Tuxum" },
  { id: 443, hsk: 1, track: 'new', lesson: 13, hanzi: "先生", pinyin: "xiānsheng", uzbek: "Janob" },
  { id: 444, hsk: 1, track: 'new', lesson: 13, hanzi: "一半", pinyin: "yíbàn", uzbek: "Yarmi" },
  { id: 445, hsk: 1, track: 'new', lesson: 13, hanzi: "茶", pinyin: "chá", uzbek: "Choy" },

  // Lesson New HSK 3.0 Lesson 14 (authoritative PDF order incl. duplicate 上, Uzbek meanings preserved)
  { id: 446, hsk: 1, track: 'new', lesson: 14, hanzi: "上", pinyin: "shàng", uzbek: "Yuqorida" },
  { id: 447, hsk: 1, track: 'new', lesson: 14, hanzi: "火车", pinyin: "huǒchē", uzbek: "Poyezd" },
  { id: 448, hsk: 1, track: 'new', lesson: 14, hanzi: "中午", pinyin: "zhōngwǔ", uzbek: "Tush vaqti" },
  { id: 449, hsk: 1, track: 'new', lesson: 14, hanzi: "开", pinyin: "kāi", uzbek: "Ochmoq" },
  { id: 450, hsk: 1, track: 'new', lesson: 14, hanzi: "有些", pinyin: "yǒuxiē", uzbek: "Ba'zilari" },
  { id: 451, hsk: 1, track: 'new', lesson: 14, hanzi: "有的", pinyin: "yǒude", uzbek: "Ba'zilari" },
  { id: 452, hsk: 1, track: 'new', lesson: 14, hanzi: "了", pinyin: "le", uzbek: "O'zgarish qo'shimchasi" },
  { id: 453, hsk: 1, track: 'new', lesson: 14, hanzi: "写", pinyin: "xiě", uzbek: "Yozmoq" },
  { id: 454, hsk: 1, track: 'new', lesson: 14, hanzi: "都", pinyin: "dōu", uzbek: "Hammasi" },
  { id: 455, hsk: 1, track: 'new', lesson: 14, hanzi: "听见", pinyin: "tīngjiàn", uzbek: "Tinglamoq" },
  { id: 456, hsk: 1, track: 'new', lesson: 14, hanzi: "不要", pinyin: "búyào", uzbek: "Qilmang" },
  { id: 457, hsk: 1, track: 'new', lesson: 14, hanzi: "说话", pinyin: "shuōhuà", uzbek: "Gapirmoq" },
  { id: 458, hsk: 1, track: 'new', lesson: 14, hanzi: "听", pinyin: "tīng", uzbek: "Tinglamoq" },
  { id: 459, hsk: 1, track: 'new', lesson: 14, hanzi: "哪些", pinyin: "nǎxiē", uzbek: "Qaysilar" },
  { id: 460, hsk: 1, track: 'new', lesson: 14, hanzi: "字", pinyin: "zì", uzbek: "Harf" },
  { id: 461, hsk: 1, track: 'new', lesson: 14, hanzi: "明年", pinyin: "míngnián", uzbek: "Kelgasi yil" },
  { id: 462, hsk: 1, track: 'new', lesson: 14, hanzi: "上", pinyin: "shàng", uzbek: "Yuqorida" },
  { id: 463, hsk: 1, track: 'new', lesson: 14, hanzi: "中学", pinyin: "zhōngxué", uzbek: "O'rta maktab" },
  { id: 464, hsk: 1, track: 'new', lesson: 14, hanzi: "小学", pinyin: "xiǎoxué", uzbek: "Boshlang'ich maktab" },
  { id: 465, hsk: 1, track: 'new', lesson: 14, hanzi: "小学生", pinyin: "xiǎoxuéshēng", uzbek: "Maktab o'quvchisi" },
  { id: 466, hsk: 1, track: 'new', lesson: 14, hanzi: "上学", pinyin: "shàngxué", uzbek: "Maktabga borish" },
  { id: 467, hsk: 1, track: 'new', lesson: 14, hanzi: "他们", pinyin: "tāmen", uzbek: "Ular" },
  { id: 468, hsk: 1, track: 'new', lesson: 14, hanzi: "她们", pinyin: "tāmen", uzbek: "Ular (ayollar)" },
  { id: 469, hsk: 1, track: 'new', lesson: 14, hanzi: "它们", pinyin: "tāmen", uzbek: "Ular (narsa/hayvon)" },
  { id: 470, hsk: 1, track: 'new', lesson: 14, hanzi: "晚", pinyin: "wǎn", uzbek: "Kech" },

  // Lesson New HSK 3.0 Lesson 15 (authoritative PDF order, Uzbek meanings preserved)
  { id: 471, hsk: 1, track: 'new', lesson: 15, hanzi: "爱", pinyin: "ài", uzbek: "Sevmoq, muhabbat" },
  { id: 472, hsk: 1, track: 'new', lesson: 15, hanzi: "哪个", pinyin: "nǎge", uzbek: "Qaysi biri" },
  { id: 473, hsk: 1, track: 'new', lesson: 15, hanzi: "去年", pinyin: "qùnián", uzbek: "O'tgan yil" },
  { id: 474, hsk: 1, track: 'new', lesson: 15, hanzi: "男朋友", pinyin: "nánpéngyou", uzbek: "Yigiti" },
  { id: 475, hsk: 1, track: 'new', lesson: 15, hanzi: "几", pinyin: "jǐ", uzbek: "Nechta (o'n tagacha)" },
  { id: 476, hsk: 1, track: 'new', lesson: 15, hanzi: "年", pinyin: "nián", uzbek: "Yil" },
  { id: 477, hsk: 1, track: 'new', lesson: 15, hanzi: "好玩儿", pinyin: "hǎowánr", uzbek: "Qiziqarli" },
  { id: 478, hsk: 1, track: 'new', lesson: 15, hanzi: "飞机", pinyin: "fēijī", uzbek: "Samolyot" },
  { id: 479, hsk: 1, track: 'new', lesson: 15, hanzi: "要", pinyin: "yào", uzbek: "Xohlamoq" },
  { id: 480, hsk: 1, track: 'new', lesson: 15, hanzi: "小时", pinyin: "xiǎoshí", uzbek: "Soat" },
  { id: 481, hsk: 1, track: 'new', lesson: 15, hanzi: "家人", pinyin: "jiārén", uzbek: "Oila a'zolari" },
  { id: 482, hsk: 1, track: 'new', lesson: 15, hanzi: "时间", pinyin: "shíjiān", uzbek: "Vaqt" },
  { id: 483, hsk: 1, track: 'new', lesson: 15, hanzi: "机场", pinyin: "jīchǎng", uzbek: "Aeroport" },
  { id: 484, hsk: 1, track: 'new', lesson: 15, hanzi: "接", pinyin: "jiē", uzbek: "Kutib olmoq" },
  { id: 485, hsk: 1, track: 'new', lesson: 15, hanzi: "住", pinyin: "zhù", uzbek: "Yashamoq" },
  { id: 486, hsk: 1, track: 'new', lesson: 15, hanzi: "早", pinyin: "zǎo", uzbek: "Ertalab" },
  { id: 487, hsk: 1, track: 'new', lesson: 15, hanzi: "那", pinyin: "nà", uzbek: "U, o'sha" },
  // ===================== NEW HSK 3.0 - LEVELS 2 TO 5 (60 LESSONS, 480 WORDS) =====================
  { id: 1001, hsk: 2, track: 'classic', lesson: 1, hanzi: "旅游", pinyin: "lǚyóu", uzbek: "Sayohat qilmoq" },
  { id: 1002, hsk: 2, track: 'classic', lesson: 1, hanzi: "准备", pinyin: "zhǔnbèi", uzbek: "Tayyorlanmoq" },
  { id: 1003, hsk: 2, track: 'classic', lesson: 1, hanzi: "开始", pinyin: "kāishǐ", uzbek: "Boshlamoq" },
  { id: 1004, hsk: 2, track: 'classic', lesson: 1, hanzi: "已经", pinyin: "yǐjīng", uzbek: "Allaqachon" },
  { id: 1005, hsk: 2, track: 'classic', lesson: 1, hanzi: "机票", pinyin: "jīpiào", uzbek: "Aviachipta" },
  { id: 1006, hsk: 2, track: 'classic', lesson: 1, hanzi: "护照", pinyin: "hùzhào", uzbek: "Pasport" },
  { id: 1007, hsk: 2, track: 'classic', lesson: 1, hanzi: "行李", pinyin: "xíngli", uzbek: "Yuk, bagaj" },
  { id: 1008, hsk: 2, track: 'classic', lesson: 1, hanzi: "出发", pinyin: "chūfā", uzbek: "Yo'lga chiqmoq" },
  { id: 1009, hsk: 2, track: 'classic', lesson: 2, hanzi: "运动", pinyin: "yùndòng", uzbek: "Sport bilan shug'ullanmoq" },
  { id: 1010, hsk: 2, track: 'classic', lesson: 2, hanzi: "跑步", pinyin: "pǎobù", uzbek: "Yugurmoq" },
  { id: 1011, hsk: 2, track: 'classic', lesson: 2, hanzi: "游泳", pinyin: "yóuyǒng", uzbek: "Suzmoq" },
  { id: 1012, hsk: 2, track: 'classic', lesson: 2, hanzi: "踢足球", pinyin: "tī zúqiú", uzbek: "Futbol o'ynamoq" },
  { id: 1013, hsk: 2, track: 'classic', lesson: 2, hanzi: "打篮球", pinyin: "dǎ lánqiú", uzbek: "Basketbol o'ynamoq" },
  { id: 1014, hsk: 2, track: 'classic', lesson: 2, hanzi: "健康", pinyin: "jiànkāng", uzbek: "Sog'lom; salomatlik" },
  { id: 1015, hsk: 2, track: 'classic', lesson: 2, hanzi: "坚持", pinyin: "jiānchí", uzbek: "Davom ettirmoq" },
  { id: 1016, hsk: 2, track: 'classic', lesson: 2, hanzi: "锻炼", pinyin: "duànliàn", uzbek: "Chiniqmoq, mashq qilmoq" },
  { id: 1017, hsk: 2, track: 'classic', lesson: 3, hanzi: "感冒", pinyin: "gǎnmào", uzbek: "Shamollamoq" },
  { id: 1018, hsk: 2, track: 'classic', lesson: 3, hanzi: "发烧", pinyin: "fāshāo", uzbek: "Isitmalamoq" },
  { id: 1019, hsk: 2, track: 'classic', lesson: 3, hanzi: "头疼", pinyin: "tóuténg", uzbek: "Bosh og'rimoq" },
  { id: 1020, hsk: 2, track: 'classic', lesson: 3, hanzi: "检查", pinyin: "jiǎnchá", uzbek: "Tekshirmoq" },
  { id: 1021, hsk: 2, track: 'classic', lesson: 3, hanzi: "照顾", pinyin: "zhàogù", uzbek: "G'amxo'rlik qilmoq" },
  { id: 1022, hsk: 2, track: 'classic', lesson: 3, hanzi: "担心", pinyin: "dānxīn", uzbek: "Xavotir olmoq" },
  { id: 1023, hsk: 2, track: 'classic', lesson: 3, hanzi: "舒服", pinyin: "shūfu", uzbek: "Qulay, yengil" },
  { id: 1024, hsk: 2, track: 'classic', lesson: 3, hanzi: "护士", pinyin: "hùshi", uzbek: "Hamshira" },
  { id: 1025, hsk: 2, track: 'classic', lesson: 4, hanzi: "颜色", pinyin: "yánsè", uzbek: "Rang" },
  { id: 1026, hsk: 2, track: 'classic', lesson: 4, hanzi: "合适", pinyin: "héshì", uzbek: "Mos, loyiq" },
  { id: 1027, hsk: 2, track: 'classic', lesson: 4, hanzi: "试", pinyin: "shì", uzbek: "Sinab ko'rmoq" },
  { id: 1028, hsk: 2, track: 'classic', lesson: 4, hanzi: "打折", pinyin: "dǎzhé", uzbek: "Chegirma qilmoq" },
  { id: 1029, hsk: 2, track: 'classic', lesson: 4, hanzi: "现金", pinyin: "xiànjīn", uzbek: "Naqd pul" },
  { id: 1030, hsk: 2, track: 'classic', lesson: 4, hanzi: "刷卡", pinyin: "shuākǎ", uzbek: "Karta orqali to'lamoq" },
  { id: 1031, hsk: 2, track: 'classic', lesson: 4, hanzi: "质量", pinyin: "zhìliàng", uzbek: "Sifat" },
  { id: 1032, hsk: 2, track: 'classic', lesson: 4, hanzi: "衬衫", pinyin: "chènshān", uzbek: "Ko'ylak (erkaklar)" },
  { id: 1033, hsk: 2, track: 'classic', lesson: 5, hanzi: "菜单", pinyin: "càidān", uzbek: "Taomnoma (menyu)" },
  { id: 1034, hsk: 2, track: 'classic', lesson: 5, hanzi: "点菜", pinyin: "diǎncài", uzbek: "Ovqat buyurtma qilmoq" },
  { id: 1035, hsk: 2, track: 'classic', lesson: 5, hanzi: "羊肉", pinyin: "yángròu", uzbek: "Qo'y go'shti" },
  { id: 1036, hsk: 2, track: 'classic', lesson: 5, hanzi: "牛肉", pinyin: "niúròu", uzbek: "Mol go'shti" },
  { id: 1037, hsk: 2, track: 'classic', lesson: 5, hanzi: "鱼", pinyin: "yú", uzbek: "Baliq" },
  { id: 1038, hsk: 2, track: 'classic', lesson: 5, hanzi: "甜", pinyin: "tián", uzbek: "Shirin" },
  { id: 1039, hsk: 2, track: 'classic', lesson: 5, hanzi: "辣", pinyin: "là", uzbek: "Achchiq" },
  { id: 1040, hsk: 2, track: 'classic', lesson: 5, hanzi: "筷子", pinyin: "kuàizi", uzbek: "Tayoqcha (ovqat uchun)" },
  { id: 1041, hsk: 2, track: 'classic', lesson: 6, hanzi: "地铁", pinyin: "dìtiě", uzbek: "Metro" },
  { id: 1042, hsk: 2, track: 'classic', lesson: 6, hanzi: "公共汽车", pinyin: "gōnggòng qìchē", uzbek: "Avtobus" },
  { id: 1043, hsk: 2, track: 'classic', lesson: 6, hanzi: "远", pinyin: "yuǎn", uzbek: "Uzoq" },
  { id: 1044, hsk: 2, track: 'classic', lesson: 6, hanzi: "近", pinyin: "jìn", uzbek: "Yaqin" },
  { id: 1045, hsk: 2, track: 'classic', lesson: 6, hanzi: "往", pinyin: "wǎng", uzbek: "Tomonga, sari" },
  { id: 1046, hsk: 2, track: 'classic', lesson: 6, hanzi: "左", pinyin: "zuǒ", uzbek: "Chap" },
  { id: 1047, hsk: 2, track: 'classic', lesson: 6, hanzi: "右", pinyin: "yòu", uzbek: "O'ng" },
  { id: 1048, hsk: 2, track: 'classic', lesson: 6, hanzi: "红绿灯", pinyin: "hónglǜdēng", uzbek: "Svetofor" },
  { id: 1049, hsk: 2, track: 'classic', lesson: 7, hanzi: "考试", pinyin: "kǎoshì", uzbek: "Imtihon" },
  { id: 1050, hsk: 2, track: 'classic', lesson: 7, hanzi: "复习", pinyin: "fùxí", uzbek: "Takrorlamoq" },
  { id: 1051, hsk: 2, track: 'classic', lesson: 7, hanzi: "练习", pinyin: "liànxí", uzbek: "Mashq qilmoq" },
  { id: 1052, hsk: 2, track: 'classic', lesson: 7, hanzi: "成绩", pinyin: "chéngjì", uzbek: "Baho, natija" },
  { id: 1053, hsk: 2, track: 'classic', lesson: 7, hanzi: "懂", pinyin: "dǒng", uzbek: "Tushunmoq" },
  { id: 1054, hsk: 2, track: 'classic', lesson: 7, hanzi: "清楚", pinyin: "qīngchu", uzbek: "Aniq, ravshan" },
  { id: 1055, hsk: 2, track: 'classic', lesson: 7, hanzi: "认真", pinyin: "rènzhēn", uzbek: "Jiddiy, qunt bilan" },
  { id: 1056, hsk: 2, track: 'classic', lesson: 7, hanzi: "进步", pinyin: "jìnbù", uzbek: "O'sish, rivojlanmoq" },
  { id: 1057, hsk: 2, track: 'classic', lesson: 8, hanzi: "办公室", pinyin: "bàngōngshì", uzbek: "Ofis, idora" },
  { id: 1058, hsk: 2, track: 'classic', lesson: 8, hanzi: "经理", pinyin: "jīnglǐ", uzbek: "Menejer, rahbar" },
  { id: 1059, hsk: 2, track: 'classic', lesson: 8, hanzi: "同事", pinyin: "tóngshì", uzbek: "Hamkasb" },
  { id: 1060, hsk: 2, track: 'classic', lesson: 8, hanzi: "会议", pinyin: "huìyì", uzbek: "Majlis, yig'ilish" },
  { id: 1061, hsk: 2, track: 'classic', lesson: 8, hanzi: "加班", pinyin: "jiābān", uzbek: "Qo'shimcha ishlamoq" },
  { id: 1062, hsk: 2, track: 'classic', lesson: 8, hanzi: "请假", pinyin: "qǐngjià", uzbek: "Ruxsat (ta'til) so'ramoq" },
  { id: 1063, hsk: 2, track: 'classic', lesson: 8, hanzi: "辛苦", pinyin: "xīnkǔ", uzbek: "Charchamoq, mashaqqatli" },
  { id: 1064, hsk: 2, track: 'classic', lesson: 8, hanzi: "完成", pinyin: "wánchéng", uzbek: "Tugatmoq, bajarmoq" },
  { id: 1065, hsk: 2, track: 'classic', lesson: 9, hanzi: "客厅", pinyin: "kètīng", uzbek: "Mehmonxona (zal)" },
  { id: 1066, hsk: 2, track: 'classic', lesson: 9, hanzi: "厨房", pinyin: "chúfáng", uzbek: "Oshxona" },
  { id: 1067, hsk: 2, track: 'classic', lesson: 9, hanzi: "洗手间", pinyin: "xǐshǒujiān", uzbek: "Yuvinish xonasi" },
  { id: 1068, hsk: 2, track: 'classic', lesson: 9, hanzi: "打扫", pinyin: "dǎsǎo", uzbek: "Tozalamoq, supurmoq" },
  { id: 1069, hsk: 2, track: 'classic', lesson: 9, hanzi: "干净", pinyin: "gānjìng", uzbek: "Toza" },
  { id: 1070, hsk: 2, track: 'classic', lesson: 9, hanzi: "冰箱", pinyin: "bīngxiāng", uzbek: "Muzlatkich" },
  { id: 1071, hsk: 2, track: 'classic', lesson: 9, hanzi: "空调", pinyin: "kōngtiáo", uzbek: "Konditsioner" },
  { id: 1072, hsk: 2, track: 'classic', lesson: 9, hanzi: "洗衣机", pinyin: "xǐyījī", uzbek: "Kir yuvish mashinasi" },
  { id: 1073, hsk: 2, track: 'classic', lesson: 10, hanzi: "季节", pinyin: "jìjié", uzbek: "Fasl" },
  { id: 1074, hsk: 2, track: 'classic', lesson: 10, hanzi: "春天", pinyin: "chūntiān", uzbek: "Bahor" },
  { id: 1075, hsk: 2, track: 'classic', lesson: 10, hanzi: "夏天", pinyin: "xiàtiān", uzbek: "Yoz" },
  { id: 1076, hsk: 2, track: 'classic', lesson: 10, hanzi: "秋天", pinyin: "qiūtiān", uzbek: "Kuz" },
  { id: 1077, hsk: 2, track: 'classic', lesson: 10, hanzi: "冬天", pinyin: "dōngtiān", uzbek: "Qish" },
  { id: 1078, hsk: 2, track: 'classic', lesson: 10, hanzi: "刮风", pinyin: "guāfēng", uzbek: "Shamol esmoq" },
  { id: 1079, hsk: 2, track: 'classic', lesson: 10, hanzi: "晴天", pinyin: "qíngtiān", uzbek: "Ochiq havo" },
  { id: 1080, hsk: 2, track: 'classic', lesson: 10, hanzi: "凉快", pinyin: "liángkuai", uzbek: "Salqin" },
  { id: 1081, hsk: 2, track: 'classic', lesson: 11, hanzi: "爱好", pinyin: "àihào", uzbek: "Qiziqish, xobbi" },
  { id: 1082, hsk: 2, track: 'classic', lesson: 11, hanzi: "音乐", pinyin: "yīnyuè", uzbek: "Musiqa" },
  { id: 1083, hsk: 2, track: 'classic', lesson: 11, hanzi: "跳舞", pinyin: "tiàowǔ", uzbek: "Raqsga tushmoq" },
  { id: 1084, hsk: 2, track: 'classic', lesson: 11, hanzi: "画画儿", pinyin: "huàhuàr", uzbek: "Rasm chizmoq" },
  { id: 1085, hsk: 2, track: 'classic', lesson: 11, hanzi: "拍照", pinyin: "pāizhào", uzbek: "Suratga olmoq" },
  { id: 1086, hsk: 2, track: 'classic', lesson: 11, hanzi: "周末", pinyin: "zhōumò", uzbek: "Dam olish kunlari" },
  { id: 1087, hsk: 2, track: 'classic', lesson: 11, hanzi: "打算", pinyin: "dǎsuàn", uzbek: "Rejalashtirmoq" },
  { id: 1088, hsk: 2, track: 'classic', lesson: 11, hanzi: "感兴趣", pinyin: "gǎn xìngqù", uzbek: "Qiziqmoq" },
  { id: 1089, hsk: 2, track: 'classic', lesson: 12, hanzi: "上网", pinyin: "shàngwǎng", uzbek: "Internetga kirmoq" },
  { id: 1090, hsk: 2, track: 'classic', lesson: 12, hanzi: "发短信", pinyin: "fā duǎnxìn", uzbek: "SMS yubormoq" },
  { id: 1091, hsk: 2, track: 'classic', lesson: 12, hanzi: "电子邮件", pinyin: "diànzǐ yóujiàn", uzbek: "Elektron pochta" },
  { id: 1092, hsk: 2, track: 'classic', lesson: 12, hanzi: "微信", pinyin: "Wēixìn", uzbek: "WeChat" },
  { id: 1093, hsk: 2, track: 'classic', lesson: 12, hanzi: "密码", pinyin: "mìmǎ", uzbek: "Parol" },
  { id: 1094, hsk: 2, track: 'classic', lesson: 12, hanzi: "消息", pinyin: "xiāoxi", uzbek: "Xabar, yangilik" },
  { id: 1095, hsk: 2, track: 'classic', lesson: 12, hanzi: "联系", pinyin: "liánxì", uzbek: "Bog'lanmoq" },
  { id: 1096, hsk: 2, track: 'classic', lesson: 12, hanzi: "方便", pinyin: "fāngbiàn", uzbek: "Qulay" },
  { id: 1097, hsk: 2, track: 'classic', lesson: 13, hanzi: "生日", pinyin: "shēngrì", uzbek: "Tug'ilgan kun" },
  { id: 1098, hsk: 2, track: 'classic', lesson: 13, hanzi: "礼物", pinyin: "lǐwù", uzbek: "Sovg'a" },
  { id: 1099, hsk: 2, track: 'classic', lesson: 13, hanzi: "蛋糕", pinyin: "dàngāo", uzbek: "Tort" },
  { id: 1100, hsk: 2, track: 'classic', lesson: 13, hanzi: "祝", pinyin: "zhù", uzbek: "Tilamoq" },
  { id: 1101, hsk: 2, track: 'classic', lesson: 13, hanzi: "快乐", pinyin: "kuàilè", uzbek: "Quvnoq, baxtli" },
  { id: 1102, hsk: 2, track: 'classic', lesson: 13, hanzi: "春节", pinyin: "Chūnjié", uzbek: "Bahor bayrami (Yangi yil)" },
  { id: 1103, hsk: 2, track: 'classic', lesson: 13, hanzi: "热闹", pinyin: "rènao", uzbek: "Gavjum, qizg'in" },
  { id: 1104, hsk: 2, track: 'classic', lesson: 13, hanzi: "邀请", pinyin: "yāoqǐng", uzbek: "Taklif qilmoq" },
  { id: 1105, hsk: 2, track: 'classic', lesson: 14, hanzi: "热情", pinyin: "rèqíng", uzbek: "Samimiy, mehmondo'st" },
  { id: 1106, hsk: 2, track: 'classic', lesson: 14, hanzi: "聪明", pinyin: "cōngming", uzbek: "Aqlli" },
  { id: 1107, hsk: 2, track: 'classic', lesson: 14, hanzi: "努力", pinyin: "nǔlì", uzbek: "Tirishqoq; harakat qilmoq" },
  { id: 1108, hsk: 2, track: 'classic', lesson: 14, hanzi: "着急", pinyin: "zháojí", uzbek: "Shoshilmoq, xavotirlanmoq" },
  { id: 1109, hsk: 2, track: 'classic', lesson: 14, hanzi: "难过", pinyin: "nánguò", uzbek: "Xafa bo'lmoq" },
  { id: 1110, hsk: 2, track: 'classic', lesson: 14, hanzi: "生气", pinyin: "shēngqì", uzbek: "Jahli chiqmoq" },
  { id: 1111, hsk: 2, track: 'classic', lesson: 14, hanzi: "笑", pinyin: "xiào", uzbek: "Kulmoq" },
  { id: 1112, hsk: 2, track: 'classic', lesson: 14, hanzi: "哭", pinyin: "kū", uzbek: "Yig'lamoq" },
  { id: 1113, hsk: 2, track: 'classic', lesson: 15, hanzi: "帮助", pinyin: "bāngzhù", uzbek: "Yordam bermoq" },
  { id: 1114, hsk: 2, track: 'classic', lesson: 15, hanzi: "因为", pinyin: "yīnwèi", uzbek: "Chunki" },
  { id: 1115, hsk: 2, track: 'classic', lesson: 15, hanzi: "所以", pinyin: "suǒyǐ", uzbek: "Shuning uchun" },
  { id: 1116, hsk: 2, track: 'classic', lesson: 15, hanzi: "虽然", pinyin: "suīrán", uzbek: "Garchi" },
  { id: 1117, hsk: 2, track: 'classic', lesson: 15, hanzi: "但是", pinyin: "dànshì", uzbek: "Lekin, ammo" },
  { id: 1118, hsk: 2, track: 'classic', lesson: 15, hanzi: "希望", pinyin: "xīwàng", uzbek: "Umid qilmoq" },
  { id: 1119, hsk: 2, track: 'classic', lesson: 15, hanzi: "告诉", pinyin: "gàosu", uzbek: "Aytib bermoq" },
  { id: 1120, hsk: 2, track: 'classic', lesson: 15, hanzi: "介绍", pinyin: "jièshào", uzbek: "Tanishtirmoq" },
  { id: 2001, hsk: 3, track: 'classic', lesson: 1, hanzi: "安排", pinyin: "ānpái", uzbek: "Rejalashtirmoq, tartibga solmoq" },
  { id: 2002, hsk: 3, track: 'classic', lesson: 1, hanzi: "决定", pinyin: "juédìng", uzbek: "Qaror qilmoq" },
  { id: 2003, hsk: 3, track: 'classic', lesson: 1, hanzi: "选择", pinyin: "xuǎnzé", uzbek: "Tanlamoq; tanlov" },
  { id: 2004, hsk: 3, track: 'classic', lesson: 1, hanzi: "参加", pinyin: "cānjiā", uzbek: "Qatnashmoq" },
  { id: 2005, hsk: 3, track: 'classic', lesson: 1, hanzi: "取消", pinyin: "qǔxiāo", uzbek: "Bekor qilmoq" },
  { id: 2006, hsk: 3, track: 'classic', lesson: 1, hanzi: "推迟", pinyin: "tuīchí", uzbek: "Kechiktirmoq" },
  { id: 2007, hsk: 3, track: 'classic', lesson: 1, hanzi: "按时", pinyin: "ànshí", uzbek: "O'z vaqtida" },
  { id: 2008, hsk: 3, track: 'classic', lesson: 1, hanzi: "准时", pinyin: "zhǔnshí", uzbek: "Aniq vaqtda" },
  { id: 2009, hsk: 3, track: 'classic', lesson: 2, hanzi: "成功", pinyin: "chénggōng", uzbek: "Muvaffaqiyat" },
  { id: 2010, hsk: 3, track: 'classic', lesson: 2, hanzi: "失败", pinyin: "shībài", uzbek: "Mag'lubiyat" },
  { id: 2011, hsk: 3, track: 'classic', lesson: 2, hanzi: "经验", pinyin: "jīngyàn", uzbek: "Tajriba" },
  { id: 2012, hsk: 3, track: 'classic', lesson: 2, hanzi: "经历", pinyin: "jīnglì", uzbek: "Boshdan kechirmoq" },
  { id: 2013, hsk: 3, track: 'classic', lesson: 2, hanzi: "机会", pinyin: "jīhuì", uzbek: "Imkoniyat" },
  { id: 2014, hsk: 3, track: 'classic', lesson: 2, hanzi: "目标", pinyin: "mùbiāo", uzbek: "Maqsad" },
  { id: 2015, hsk: 3, track: 'classic', lesson: 2, hanzi: "实现", pinyin: "shíxiàn", uzbek: "Amalga oshirmoq" },
  { id: 2016, hsk: 3, track: 'classic', lesson: 2, hanzi: "放弃", pinyin: "fàngqì", uzbek: "Voz kechmoq" },
  { id: 2017, hsk: 3, track: 'classic', lesson: 3, hanzi: "环境", pinyin: "huánjìng", uzbek: "Atrof-muhit" },
  { id: 2018, hsk: 3, track: 'classic', lesson: 3, hanzi: "保护", pinyin: "bǎohù", uzbek: "Himoya qilmoq" },
  { id: 2019, hsk: 3, track: 'classic', lesson: 3, hanzi: "污染", pinyin: "wūrǎn", uzbek: "Ifloslanish" },
  { id: 2020, hsk: 3, track: 'classic', lesson: 3, hanzi: "自然", pinyin: "zìrán", uzbek: "Tabiat; tabiiy" },
  { id: 2021, hsk: 3, track: 'classic', lesson: 3, hanzi: "植物", pinyin: "zhíwù", uzbek: "O'simlik" },
  { id: 2022, hsk: 3, track: 'classic', lesson: 3, hanzi: "动物", pinyin: "dòngwù", uzbek: "Hayvon" },
  { id: 2023, hsk: 3, track: 'classic', lesson: 3, hanzi: "空气", pinyin: "kōngqì", uzbek: "Havo" },
  { id: 2024, hsk: 3, track: 'classic', lesson: 3, hanzi: "节约", pinyin: "jiéyuē", uzbek: "Tejamoq" },
  { id: 2025, hsk: 3, track: 'classic', lesson: 4, hanzi: "文化", pinyin: "wénhuà", uzbek: "Madaniyat" },
  { id: 2026, hsk: 3, track: 'classic', lesson: 4, hanzi: "历史", pinyin: "lìshǐ", uzbek: "Tarix" },
  { id: 2027, hsk: 3, track: 'classic', lesson: 4, hanzi: "传统", pinyin: "chuántǒng", uzbek: "An'ana" },
  { id: 2028, hsk: 3, track: 'classic', lesson: 4, hanzi: "习惯", pinyin: "xíguàn", uzbek: "Odat; o'rganib qolmoq" },
  { id: 2029, hsk: 3, track: 'classic', lesson: 4, hanzi: "风俗", pinyin: "fēngsú", uzbek: "Urf-odat" },
  { id: 2030, hsk: 3, track: 'classic', lesson: 4, hanzi: "民族", pinyin: "mínzú", uzbek: "Millat" },
  { id: 2031, hsk: 3, track: 'classic', lesson: 4, hanzi: "艺术", pinyin: "yìshù", uzbek: "San'at" },
  { id: 2032, hsk: 3, track: 'classic', lesson: 4, hanzi: "尊重", pinyin: "zūnzhòng", uzbek: "Hurmat qilmoq" },
  { id: 2033, hsk: 3, track: 'classic', lesson: 5, hanzi: "教育", pinyin: "jiàoyù", uzbek: "Ta'lim" },
  { id: 2034, hsk: 3, track: 'classic', lesson: 5, hanzi: "知识", pinyin: "zhīshi", uzbek: "Bilim" },
  { id: 2035, hsk: 3, track: 'classic', lesson: 5, hanzi: "专业", pinyin: "zhuānyè", uzbek: "Mutaxassislik" },
  { id: 2036, hsk: 3, track: 'classic', lesson: 5, hanzi: "科学", pinyin: "kēxué", uzbek: "Ilm-fan" },
  { id: 2037, hsk: 3, track: 'classic', lesson: 5, hanzi: "研究", pinyin: "yánjiū", uzbek: "Tadqiq qilmoq" },
  { id: 2038, hsk: 3, track: 'classic', lesson: 5, hanzi: "方法", pinyin: "fāngfǎ", uzbek: "Usul, metod" },
  { id: 2039, hsk: 3, track: 'classic', lesson: 5, hanzi: "提高", pinyin: "tígāo", uzbek: "Oshirmoq, yaxshilamoq" },
  { id: 2040, hsk: 3, track: 'classic', lesson: 5, hanzi: "水平", pinyin: "shuǐpíng", uzbek: "Daraja, saviya" },
  { id: 2041, hsk: 3, track: 'classic', lesson: 6, hanzi: "银行", pinyin: "yínháng", uzbek: "Bank" },
  { id: 2042, hsk: 3, track: 'classic', lesson: 6, hanzi: "信用卡", pinyin: "xìnyòngkǎ", uzbek: "Kredit karta" },
  { id: 2043, hsk: 3, track: 'classic', lesson: 6, hanzi: "免费", pinyin: "miǎnfèi", uzbek: "Bepul" },
  { id: 2044, hsk: 3, track: 'classic', lesson: 6, hanzi: "价格", pinyin: "jiàgé", uzbek: "Narx" },
  { id: 2045, hsk: 3, track: 'classic', lesson: 6, hanzi: "收入", pinyin: "shōurù", uzbek: "Daromad" },
  { id: 2046, hsk: 3, track: 'classic', lesson: 6, hanzi: "工资", pinyin: "gōngzī", uzbek: "Oylik maosh" },
  { id: 2047, hsk: 3, track: 'classic', lesson: 6, hanzi: "奖金", pinyin: "jiǎngjīn", uzbek: "Mukofot puli" },
  { id: 2048, hsk: 3, track: 'classic', lesson: 6, hanzi: "存钱", pinyin: "cúnqián", uzbek: "Pul yig'moq / qo'ymoq" },
  { id: 2049, hsk: 3, track: 'classic', lesson: 7, hanzi: "社会", pinyin: "shèhuì", uzbek: "Jamiyat" },
  { id: 2050, hsk: 3, track: 'classic', lesson: 7, hanzi: "关系", pinyin: "guānxi", uzbek: "Munosabat, aloqa" },
  { id: 2051, hsk: 3, track: 'classic', lesson: 7, hanzi: "信任", pinyin: "xìnrèn", uzbek: "Ishonmoq" },
  { id: 2052, hsk: 3, track: 'classic', lesson: 7, hanzi: "诚实", pinyin: "chéngshí", uzbek: "Halol, rostgo'y" },
  { id: 2053, hsk: 3, track: 'classic', lesson: 7, hanzi: "礼貌", pinyin: "lǐmào", uzbek: "Odob, xushmuomalalik" },
  { id: 2054, hsk: 3, track: 'classic', lesson: 7, hanzi: "印象", pinyin: "yìnxiàng", uzbek: "Taassurot" },
  { id: 2055, hsk: 3, track: 'classic', lesson: 7, hanzi: "理解", pinyin: "lǐjiě", uzbek: "Tushunmoq, anglamoq" },
  { id: 2056, hsk: 3, track: 'classic', lesson: 7, hanzi: "支持", pinyin: "zhīchí", uzbek: "Qo'llab-quvvatlamoq" },
  { id: 2057, hsk: 3, track: 'classic', lesson: 8, hanzi: "新闻", pinyin: "xīnwén", uzbek: "Yangiliklar" },
  { id: 2058, hsk: 3, track: 'classic', lesson: 8, hanzi: "广告", pinyin: "guǎnggào", uzbek: "Reklama" },
  { id: 2059, hsk: 3, track: 'classic', lesson: 8, hanzi: "杂志", pinyin: "zázhì", uzbek: "Jurnal" },
  { id: 2060, hsk: 3, track: 'classic', lesson: 8, hanzi: "报纸", pinyin: "bàozhǐ", uzbek: "Gazeta" },
  { id: 2061, hsk: 3, track: 'classic', lesson: 8, hanzi: "节目", pinyin: "jiémù", uzbek: "Ko'rsatuv, dastur" },
  { id: 2062, hsk: 3, track: 'classic', lesson: 8, hanzi: "内容", pinyin: "nèiróng", uzbek: "Mazmun, tarkib" },
  { id: 2063, hsk: 3, track: 'classic', lesson: 8, hanzi: "丰富", pinyin: "fēngfù", uzbek: "Boy, xilma-xil" },
  { id: 2064, hsk: 3, track: 'classic', lesson: 8, hanzi: "精彩", pinyin: "jīngcǎi", uzbek: "Ajoyib, qoyilmaqom" },
  { id: 2065, hsk: 3, track: 'classic', lesson: 9, hanzi: "负责", pinyin: "fùzé", uzbek: "Mas'ul bo'lmoq" },
  { id: 2066, hsk: 3, track: 'classic', lesson: 9, hanzi: "任务", pinyin: "rènwu", uzbek: "Topshiriq, vazifa" },
  { id: 2067, hsk: 3, track: 'classic', lesson: 9, hanzi: "能力", pinyin: "nénglì", uzbek: "Qobiliyat" },
  { id: 2068, hsk: 3, track: 'classic', lesson: 9, hanzi: "合作", pinyin: "hézuò", uzbek: "Hamkorlik qilmoq" },
  { id: 2069, hsk: 3, track: 'classic', lesson: 9, hanzi: "要求", pinyin: "yāoqiú", uzbek: "Talab qilmoq" },
  { id: 2070, hsk: 3, track: 'classic', lesson: 9, hanzi: "解决", pinyin: "jiějué", uzbek: "Hal qilmoq" },
  { id: 2071, hsk: 3, track: 'classic', lesson: 9, hanzi: "困难", pinyin: "kùnnan", uzbek: "Qiyinchilik" },
  { id: 2072, hsk: 3, track: 'classic', lesson: 9, hanzi: "态度", pinyin: "tàidu", uzbek: "Munosabat, yondashuv" },
  { id: 2073, hsk: 3, track: 'classic', lesson: 10, hanzi: "安全", pinyin: "ānquán", uzbek: "Xavfsiz; xavfsizlik" },
  { id: 2074, hsk: 3, track: 'classic', lesson: 10, hanzi: "危险", pinyin: "wēixiǎn", uzbek: "Xavfli" },
  { id: 2075, hsk: 3, track: 'classic', lesson: 10, hanzi: "小心", pinyin: "xiǎoxīn", uzbek: "Ehtiyot bo'lmoq" },
  { id: 2076, hsk: 3, track: 'classic', lesson: 10, hanzi: "注意", pinyin: "zhùyì", uzbek: "E'tibor bermoq" },
  { id: 2077, hsk: 3, track: 'classic', lesson: 10, hanzi: "禁止", pinyin: "jìnzhǐ", uzbek: "Taqiqlamoq" },
  { id: 2078, hsk: 3, track: 'classic', lesson: 10, hanzi: "规定", pinyin: "guīdìng", uzbek: "Qoida, tartib" },
  { id: 2079, hsk: 3, track: 'classic', lesson: 10, hanzi: "遵守", pinyin: "zūnshǒu", uzbek: "Rioya qilmoq" },
  { id: 2080, hsk: 3, track: 'classic', lesson: 10, hanzi: "警察", pinyin: "jǐngchá", uzbek: "Politsiya" },
  { id: 2081, hsk: 3, track: 'classic', lesson: 11, hanzi: "心情", pinyin: "xīnqíng", uzbek: "Kayfiyat" },
  { id: 2082, hsk: 3, track: 'classic', lesson: 11, hanzi: "愉快", pinyin: "yúkuài", uzbek: "Xursand, yoqimli" },
  { id: 2083, hsk: 3, track: 'classic', lesson: 11, hanzi: "紧张", pinyin: "jǐnzhāng", uzbek: "Hayajonlanmoq" },
  { id: 2084, hsk: 3, track: 'classic', lesson: 11, hanzi: "放松", pinyin: "fàngsōng", uzbek: "Bo'shashmoq, dam olmoq" },
  { id: 2085, hsk: 3, track: 'classic', lesson: 11, hanzi: "满意", pinyin: "mǎnyì", uzbek: "Mamnun bo'lmoq" },
  { id: 2086, hsk: 3, track: 'classic', lesson: 11, hanzi: "失望", pinyin: "shīwàng", uzbek: "Ko'ngli qolmoq" },
  { id: 2087, hsk: 3, track: 'classic', lesson: 11, hanzi: "后悔", pinyin: "hòuhuǐ", uzbek: "Afsuslanmoq" },
  { id: 2088, hsk: 3, track: 'classic', lesson: 11, hanzi: "感动", pinyin: "gǎndòng", uzbek: "Ta'sirlanmoq" },
  { id: 2089, hsk: 3, track: 'classic', lesson: 12, hanzi: "变化", pinyin: "biànhuà", uzbek: "O'zgarish" },
  { id: 2090, hsk: 3, track: 'classic', lesson: 12, hanzi: "发展", pinyin: "fāzhǎn", uzbek: "Rivojlanmoq" },
  { id: 2091, hsk: 3, track: 'classic', lesson: 12, hanzi: "增加", pinyin: "zēngjiā", uzbek: "Ko'paymoq, ortmoq" },
  { id: 2092, hsk: 3, track: 'classic', lesson: 12, hanzi: "减少", pinyin: "jiǎnshǎo", uzbek: "Kamaymoq" },
  { id: 2093, hsk: 3, track: 'classic', lesson: 12, hanzi: "扩大", pinyin: "kuòdà", uzbek: "Kengaytirmoq" },
  { id: 2094, hsk: 3, track: 'classic', lesson: 12, hanzi: "影响", pinyin: "yǐngxiǎng", uzbek: "Ta'sir qilmoq" },
  { id: 2095, hsk: 3, track: 'classic', lesson: 12, hanzi: "效果", pinyin: "xiàoguǒ", uzbek: "Samara, natija" },
  { id: 2096, hsk: 3, track: 'classic', lesson: 12, hanzi: "明显", pinyin: "míngxiǎn", uzbek: "Yaqqol, aniq" },
  { id: 2097, hsk: 3, track: 'classic', lesson: 13, hanzi: "除了", pinyin: "chúle", uzbek: "...dan tashqari" },
  { id: 2098, hsk: 3, track: 'classic', lesson: 13, hanzi: "而且", pinyin: "érqiě", uzbek: "Bundan tashqari" },
  { id: 2099, hsk: 3, track: 'classic', lesson: 13, hanzi: "只要", pinyin: "zhǐyào", uzbek: "Agar ... bo'lsagina" },
  { id: 2100, hsk: 3, track: 'classic', lesson: 13, hanzi: "只有", pinyin: "zhǐyǒu", uzbek: "Faqatgina" },
  { id: 2101, hsk: 3, track: 'classic', lesson: 13, hanzi: "无论", pinyin: "wúlùn", uzbek: "Qat'i nazar" },
  { id: 2102, hsk: 3, track: 'classic', lesson: 13, hanzi: "否则", pinyin: "fǒuzé", uzbek: "Aks holda" },
  { id: 2103, hsk: 3, track: 'classic', lesson: 13, hanzi: "尽管", pinyin: "jǐnguǎn", uzbek: "Garchi, qaramasdan" },
  { id: 2104, hsk: 3, track: 'classic', lesson: 13, hanzi: "果然", pinyin: "guǒrán", uzbek: "Haqiqatan ham, kutilganidek" },
  { id: 2105, hsk: 3, track: 'classic', lesson: 14, hanzi: "租房", pinyin: "zūfáng", uzbek: "Uy ijaraga olmoq" },
  { id: 2106, hsk: 3, track: 'classic', lesson: 14, hanzi: "搬家", pinyin: "bānjiā", uzbek: "Ko'chmoq" },
  { id: 2107, hsk: 3, track: 'classic', lesson: 14, hanzi: "房东", pinyin: "fángdōng", uzbek: "Uy egasi" },
  { id: 2108, hsk: 3, track: 'classic', lesson: 14, hanzi: "邻居", pinyin: "línjū", uzbek: "Qo'shni" },
  { id: 2109, hsk: 3, track: 'classic', lesson: 14, hanzi: "周围", pinyin: "zhōuwéi", uzbek: "Atrof" },
  { id: 2110, hsk: 3, track: 'classic', lesson: 14, hanzi: "安静", pinyin: "ānjìng", uzbek: "Tinch" },
  { id: 2111, hsk: 3, track: 'classic', lesson: 14, hanzi: "家具", pinyin: "jiājù", uzbek: "Mebel" },
  { id: 2112, hsk: 3, track: 'classic', lesson: 14, hanzi: "钥匙", pinyin: "yàoshi", uzbek: "Kalit" },
  { id: 2113, hsk: 3, track: 'classic', lesson: 15, hanzi: "表示", pinyin: "biǎoshì", uzbek: "Bildirmoq, ifodalamoq" },
  { id: 2114, hsk: 3, track: 'classic', lesson: 15, hanzi: "讨论", pinyin: "tǎolùn", uzbek: "Muhokama qilmoq" },
  { id: 2115, hsk: 3, track: 'classic', lesson: 15, hanzi: "意见", pinyin: "yìjiàn", uzbek: "Fikr, mulohaza" },
  { id: 2116, hsk: 3, track: 'classic', lesson: 15, hanzi: "建议", pinyin: "jiànyì", uzbek: "Taklif, maslahat" },
  { id: 2117, hsk: 3, track: 'classic', lesson: 15, hanzi: "同意", pinyin: "tóngyì", uzbek: "Rozi bo'lmoq" },
  { id: 2118, hsk: 3, track: 'classic', lesson: 15, hanzi: "反对", pinyin: "fǎnduì", uzbek: "Qarshi chiqmoq" },
  { id: 2119, hsk: 3, track: 'classic', lesson: 15, hanzi: "解释", pinyin: "jiěshì", uzbek: "Tushuntirmoq" },
  { id: 2120, hsk: 3, track: 'classic', lesson: 15, hanzi: "证明", pinyin: "zhèngmíng", uzbek: "Isbotlamoq" },
  { id: 3001, hsk: 4, track: 'classic', lesson: 1, hanzi: "按照", pinyin: "ànzhào", uzbek: "Bo'yicha, binoan" },
  { id: 3002, hsk: 4, track: 'classic', lesson: 1, hanzi: "合同", pinyin: "hétong", uzbek: "Shartnoma" },
  { id: 3003, hsk: 4, track: 'classic', lesson: 1, hanzi: "谈判", pinyin: "tánpàn", uzbek: "Muzokara olib bormoq" },
  { id: 3004, hsk: 4, track: 'classic', lesson: 1, hanzi: "市场", pinyin: "shìchǎng", uzbek: "Bozor" },
  { id: 3005, hsk: 4, track: 'classic', lesson: 1, hanzi: "竞争", pinyin: "jìngzhēng", uzbek: "Raqobat" },
  { id: 3006, hsk: 4, track: 'classic', lesson: 1, hanzi: "客户", pinyin: "kèhù", uzbek: "Mijoz" },
  { id: 3007, hsk: 4, track: 'classic', lesson: 1, hanzi: "利润", pinyin: "lìrùn", uzbek: "Foyda, daromad" },
  { id: 3008, hsk: 4, track: 'classic', lesson: 1, hanzi: "投资", pinyin: "tóuzī", uzbek: "Sarmoya kiritmoq" },
  { id: 3009, hsk: 4, track: 'classic', lesson: 2, hanzi: "技术", pinyin: "jìshù", uzbek: "Texnologiya, texnika" },
  { id: 3010, hsk: 4, track: 'classic', lesson: 2, hanzi: "发明", pinyin: "fāmíng", uzbek: "Ixtiro qilmoq" },
  { id: 3011, hsk: 4, track: 'classic', lesson: 2, hanzi: "创新", pinyin: "chuàngxīn", uzbek: "Innovatsiya, yangilik" },
  { id: 3012, hsk: 4, track: 'classic', lesson: 2, hanzi: "数据", pinyin: "shùjù", uzbek: "Ma'lumotlar (data)" },
  { id: 3013, hsk: 4, track: 'classic', lesson: 2, hanzi: "系统", pinyin: "xìtǒng", uzbek: "Tizim" },
  { id: 3014, hsk: 4, track: 'classic', lesson: 2, hanzi: "软件", pinyin: "ruǎnjiàn", uzbek: "Dasturiy ta'minot" },
  { id: 3015, hsk: 4, track: 'classic', lesson: 2, hanzi: "智能", pinyin: "zhìnéng", uzbek: "Intellektual, aqlli" },
  { id: 3016, hsk: 4, track: 'classic', lesson: 2, hanzi: "现代", pinyin: "xiàndài", uzbek: "Zamonaviy" },
  { id: 3017, hsk: 4, track: 'classic', lesson: 3, hanzi: "法律", pinyin: "fǎlǜ", uzbek: "Qonun" },
  { id: 3018, hsk: 4, track: 'classic', lesson: 3, hanzi: "权利", pinyin: "quánlì", uzbek: "Huquq" },
  { id: 3019, hsk: 4, track: 'classic', lesson: 3, hanzi: "义务", pinyin: "yìwù", uzbek: "Burch, majburiyat" },
  { id: 3020, hsk: 4, track: 'classic', lesson: 3, hanzi: "公平", pinyin: "gōngpíng", uzbek: "Adolatli" },
  { id: 3021, hsk: 4, track: 'classic', lesson: 3, hanzi: "制度", pinyin: "zhìdù", uzbek: "Tizim, tartib-qoida" },
  { id: 3022, hsk: 4, track: 'classic', lesson: 3, hanzi: "规则", pinyin: "guīzé", uzbek: "Qoida" },
  { id: 3023, hsk: 4, track: 'classic', lesson: 3, hanzi: "律师", pinyin: "lǜshī", uzbek: "Advokat, huquqshunos" },
  { id: 3024, hsk: 4, track: 'classic', lesson: 3, hanzi: "证据", pinyin: "zhèngjù", uzbek: "Dalil, isbot" },
  { id: 3025, hsk: 4, track: 'classic', lesson: 4, hanzi: "小说", pinyin: "xiǎoshuō", uzbek: "Roman, qissa" },
  { id: 3026, hsk: 4, track: 'classic', lesson: 4, hanzi: "诗歌", pinyin: "shīgē", uzbek: "She'riyat" },
  { id: 3027, hsk: 4, track: 'classic', lesson: 4, hanzi: "作者", pinyin: "zuòzhě", uzbek: "Muallif" },
  { id: 3028, hsk: 4, track: 'classic', lesson: 4, hanzi: "作品", pinyin: "zuòpǐn", uzbek: "Asar" },
  { id: 3029, hsk: 4, track: 'classic', lesson: 4, hanzi: "描写", pinyin: "miáoxiě", uzbek: "Tasvirlamoq" },
  { id: 3030, hsk: 4, track: 'classic', lesson: 4, hanzi: "典型", pinyin: "diǎnxíng", uzbek: "Tipik, namunaviy" },
  { id: 3031, hsk: 4, track: 'classic', lesson: 4, hanzi: "欣赏", pinyin: "xīnshǎng", uzbek: "Zavqlanmoq, qadrlamoq" },
  { id: 3032, hsk: 4, track: 'classic', lesson: 4, hanzi: "导演", pinyin: "dǎoyǎn", uzbek: "Rejissyor" },
  { id: 3033, hsk: 4, track: 'classic', lesson: 5, hanzi: "自信", pinyin: "zìxìn", uzbek: "O'ziga ishongan" },
  { id: 3034, hsk: 4, track: 'classic', lesson: 5, hanzi: "骄傲", pinyin: "jiāo'ào", uzbek: "Mag'rur; faxrlanmoq" },
  { id: 3035, hsk: 4, track: 'classic', lesson: 5, hanzi: "谦虚", pinyin: "qiānxū", uzbek: "Kamtar" },
  { id: 3036, hsk: 4, track: 'classic', lesson: 5, hanzi: "耐心", pinyin: "nàixīn", uzbek: "Sabr-toqat" },
  { id: 3037, hsk: 4, track: 'classic', lesson: 5, hanzi: "勇敢", pinyin: "yǒnggǎn", uzbek: "Jasur, mard" },
  { id: 3038, hsk: 4, track: 'classic', lesson: 5, hanzi: "冷静", pinyin: "lěngjìng", uzbek: "Bosiq, vazmin" },
  { id: 3039, hsk: 4, track: 'classic', lesson: 5, hanzi: "温柔", pinyin: "wēnróu", uzbek: "Muloyim" },
  { id: 3040, hsk: 4, track: 'classic', lesson: 5, hanzi: "幽默", pinyin: "yōumò", uzbek: "Yumor hissi bor" },
  { id: 3041, hsk: 4, track: 'classic', lesson: 6, hanzi: "简历", pinyin: "jiǎnlì", uzbek: "Rezyume (CV)" },
  { id: 3042, hsk: 4, track: 'classic', lesson: 6, hanzi: "面试", pinyin: "miànshì", uzbek: "Suhbat (intervyu)" },
  { id: 3043, hsk: 4, track: 'classic', lesson: 6, hanzi: "招聘", pinyin: "zhāopìn", uzbek: "Ishga yollamoq" },
  { id: 3044, hsk: 4, track: 'classic', lesson: 6, hanzi: "录取", pinyin: "lùqǔ", uzbek: "Qabul qilmoq" },
  { id: 3045, hsk: 4, track: 'classic', lesson: 6, hanzi: "职位", pinyin: "zhíwèi", uzbek: "Lavozim" },
  { id: 3046, hsk: 4, track: 'classic', lesson: 6, hanzi: "待遇", pinyin: "dàiyù", uzbek: "Sharoit va maosh" },
  { id: 3047, hsk: 4, track: 'classic', lesson: 6, hanzi: "辞职", pinyin: "cízhí", uzbek: "Ishdan bo'shamoq" },
  { id: 3048, hsk: 4, track: 'classic', lesson: 6, hanzi: "前途", pinyin: "qiántú", uzbek: "Kelajak, istiqbol" },
  { id: 3049, hsk: 4, track: 'classic', lesson: 7, hanzi: "气候", pinyin: "qìhòu", uzbek: "Iqlim" },
  { id: 3050, hsk: 4, track: 'classic', lesson: 7, hanzi: "温度", pinyin: "wēndù", uzbek: "Harorat" },
  { id: 3051, hsk: 4, track: 'classic', lesson: 7, hanzi: "干燥", pinyin: "gānzào", uzbek: "Quruq" },
  { id: 3052, hsk: 4, track: 'classic', lesson: 7, hanzi: "湿润", pinyin: "shīrùn", uzbek: "Nam" },
  { id: 3053, hsk: 4, track: 'classic', lesson: 7, hanzi: "海洋", pinyin: "hǎiyáng", uzbek: "Okean, dengiz" },
  { id: 3054, hsk: 4, track: 'classic', lesson: 7, hanzi: "沙漠", pinyin: "shāmò", uzbek: "Cho'l, sahro" },
  { id: 3055, hsk: 4, track: 'classic', lesson: 7, hanzi: "森林", pinyin: "sēnlín", uzbek: "O'rmon" },
  { id: 3056, hsk: 4, track: 'classic', lesson: 7, hanzi: "面积", pinyin: "miànjī", uzbek: "Maydon, yuza" },
  { id: 3057, hsk: 4, track: 'classic', lesson: 8, hanzi: "症状", pinyin: "zhèngzhuàng", uzbek: "Belgi, simptom" },
  { id: 3058, hsk: 4, track: 'classic', lesson: 8, hanzi: "治疗", pinyin: "zhìliáo", uzbek: "Davolamoq" },
  { id: 3059, hsk: 4, track: 'classic', lesson: 8, hanzi: "手术", pinyin: "shǒushù", uzbek: "Operatsiya, jarrohlik" },
  { id: 3060, hsk: 4, track: 'classic', lesson: 8, hanzi: "预防", pinyin: "yùfáng", uzbek: "Oldini olmoq" },
  { id: 3061, hsk: 4, track: 'classic', lesson: 8, hanzi: "营养", pinyin: "yíngyǎng", uzbek: "Oziq modda" },
  { id: 3062, hsk: 4, track: 'classic', lesson: 8, hanzi: "减肥", pinyin: "jiǎnféi", uzbek: "Ozmoq, vazn tashlamoq" },
  { id: 3063, hsk: 4, track: 'classic', lesson: 8, hanzi: "睡眠", pinyin: "shuìmián", uzbek: "Uyqu" },
  { id: 3064, hsk: 4, track: 'classic', lesson: 8, hanzi: "恢复", pinyin: "huīfù", uzbek: "Tiklanmoq" },
  { id: 3065, hsk: 4, track: 'classic', lesson: 9, hanzi: "培养", pinyin: "péiyǎng", uzbek: "Tarbiyalamoq, yetishtirmoq" },
  { id: 3066, hsk: 4, track: 'classic', lesson: 9, hanzi: "独立", pinyin: "dúlì", uzbek: "Mustaqil" },
  { id: 3067, hsk: 4, track: 'classic', lesson: 9, hanzi: "鼓励", pinyin: "gǔlì", uzbek: "Ruhlantirmoq, rag'batlantirmoq" },
  { id: 3068, hsk: 4, track: 'classic', lesson: 9, hanzi: "表扬", pinyin: "biǎoyáng", uzbek: "Maqtamoq" },
  { id: 3069, hsk: 4, track: 'classic', lesson: 9, hanzi: "批评", pinyin: "pīpíng", uzbek: "Tanqid qilmoq" },
  { id: 3070, hsk: 4, track: 'classic', lesson: 9, hanzi: "严格", pinyin: "yángé", uzbek: "Qattiqqo'l, qat'iy" },
  { id: 3071, hsk: 4, track: 'classic', lesson: 9, hanzi: "孝顺", pinyin: "xiàoshùn", uzbek: "Ota-onaga mehribon" },
  { id: 3072, hsk: 4, track: 'classic', lesson: 9, hanzi: "幸福", pinyin: "xìngfú", uzbek: "Baxtli; baxt" },
  { id: 3073, hsk: 4, track: 'classic', lesson: 10, hanzi: "交流", pinyin: "jiāoliú", uzbek: "Muloqot qilmoq, almashmoq" },
  { id: 3074, hsk: 4, track: 'classic', lesson: 10, hanzi: "沟通", pinyin: "gōutōng", uzbek: "Til topishmoq, bog'lanmoq" },
  { id: 3075, hsk: 4, track: 'classic', lesson: 10, hanzi: "表达", pinyin: "biǎodá", uzbek: "Ifodalamoq" },
  { id: 3076, hsk: 4, track: 'classic', lesson: 10, hanzi: "演讲", pinyin: "yǎnjiǎng", uzbek: "Nutq so'zlamoq" },
  { id: 3077, hsk: 4, track: 'classic', lesson: 10, hanzi: "观点", pinyin: "guāndiǎn", uzbek: "Nuqtai nazar" },
  { id: 3078, hsk: 4, track: 'classic', lesson: 10, hanzi: "强调", pinyin: "qiángdiào", uzbek: "Ta'kidlamoq" },
  { id: 3079, hsk: 4, track: 'classic', lesson: 10, hanzi: "误会", pinyin: "wùhuì", uzbek: "Tushunmovchilik" },
  { id: 3080, hsk: 4, track: 'classic', lesson: 10, hanzi: "道歉", pinyin: "dàoqiàn", uzbek: "Uzr so'ramoq" },
  { id: 3081, hsk: 4, track: 'classic', lesson: 11, hanzi: "航班", pinyin: "hángbān", uzbek: "Aviareys" },
  { id: 3082, hsk: 4, track: 'classic', lesson: 11, hanzi: "起飞", pinyin: "qǐfēi", uzbek: "Uchib ketmoq (samolyot)" },
  { id: 3083, hsk: 4, track: 'classic', lesson: 11, hanzi: "降落", pinyin: "jiàngluò", uzbek: "Qo'nmoq" },
  { id: 3084, hsk: 4, track: 'classic', lesson: 11, hanzi: "堵车", pinyin: "dǔchē", uzbek: "Tirbandlik (probka)" },
  { id: 3085, hsk: 4, track: 'classic', lesson: 11, hanzi: "距离", pinyin: "jùlí", uzbek: "Masofa" },
  { id: 3086, hsk: 4, track: 'classic', lesson: 11, hanzi: "方向", pinyin: "fāngxiàng", uzbek: "Yo'nalish" },
  { id: 3087, hsk: 4, track: 'classic', lesson: 11, hanzi: "速度", pinyin: "sùdù", uzbek: "Tezlik" },
  { id: 3088, hsk: 4, track: 'classic', lesson: 11, hanzi: "交通", pinyin: "jiāotōng", uzbek: "Transport, qatnov" },
  { id: 3089, hsk: 4, track: 'classic', lesson: 12, hanzi: "原因", pinyin: "yuányīn", uzbek: "Sabab" },
  { id: 3090, hsk: 4, track: 'classic', lesson: 12, hanzi: "结果", pinyin: "jiéguǒ", uzbek: "Natija" },
  { id: 3091, hsk: 4, track: 'classic', lesson: 12, hanzi: "目的", pinyin: "mùdì", uzbek: "Maqsad" },
  { id: 3092, hsk: 4, track: 'classic', lesson: 12, hanzi: "过程", pinyin: "guòchéng", uzbek: "Jarayon" },
  { id: 3093, hsk: 4, track: 'classic', lesson: 12, hanzi: "条件", pinyin: "tiáojiàn", uzbek: "Shart-sharoit" },
  { id: 3094, hsk: 4, track: 'classic', lesson: 12, hanzi: "基础", pinyin: "jīchǔ", uzbek: "Asos, poydevor" },
  { id: 3095, hsk: 4, track: 'classic', lesson: 12, hanzi: "标准", pinyin: "biāozhǔn", uzbek: "Mezon, standart" },
  { id: 3096, hsk: 4, track: 'classic', lesson: 12, hanzi: "总结", pinyin: "zǒngjié", uzbek: "Xulosa qilmoq" },
  { id: 3097, hsk: 4, track: 'classic', lesson: 13, hanzi: "消费", pinyin: "xiāofèi", uzbek: "Iste'mol, xarajat" },
  { id: 3098, hsk: 4, track: 'classic', lesson: 13, hanzi: "服务", pinyin: "fúwù", uzbek: "Xizmat ko'rsatmoq" },
  { id: 3099, hsk: 4, track: 'classic', lesson: 13, hanzi: "品牌", pinyin: "pǐnpái", uzbek: "Brend, marka" },
  { id: 3100, hsk: 4, track: 'classic', lesson: 13, hanzi: "保证", pinyin: "bǎozhèng", uzbek: "Kafolat bermoq" },
  { id: 3101, hsk: 4, track: 'classic', lesson: 13, hanzi: "退货", pinyin: "tuìhuò", uzbek: "Tovarni qaytarmoq" },
  { id: 3102, hsk: 4, track: 'classic', lesson: 13, hanzi: "赔偿", pinyin: "péicháng", uzbek: "Tovon to'lamoq" },
  { id: 3103, hsk: 4, track: 'classic', lesson: 13, hanzi: "优惠", pinyin: "yōuhuì", uzbek: "Imtiyoz, chegirma" },
  { id: 3104, hsk: 4, track: 'classic', lesson: 13, hanzi: "划算", pinyin: "huásuàn", uzbek: "Arziydigan, foydali" },
  { id: 3105, hsk: 4, track: 'classic', lesson: 14, hanzi: "比赛", pinyin: "bǐsài", uzbek: "Musobaqa" },
  { id: 3106, hsk: 4, track: 'classic', lesson: 14, hanzi: "冠军", pinyin: "guànjūn", uzbek: "Chempion" },
  { id: 3107, hsk: 4, track: 'classic', lesson: 14, hanzi: "奖杯", pinyin: "jiǎngbēi", uzbek: "Kubok" },
  { id: 3108, hsk: 4, track: 'classic', lesson: 14, hanzi: "对手", pinyin: "duìshǒu", uzbek: "Raqib" },
  { id: 3109, hsk: 4, track: 'classic', lesson: 14, hanzi: "裁判", pinyin: "cáipàn", uzbek: "Hakam" },
  { id: 3110, hsk: 4, track: 'classic', lesson: 14, hanzi: "观众", pinyin: "guānzhòng", uzbek: "Tomoshabin" },
  { id: 3111, hsk: 4, track: 'classic', lesson: 14, hanzi: "鼓掌", pinyin: "gǔzhǎng", uzbek: "Qarsak chalmoq" },
  { id: 3112, hsk: 4, track: 'classic', lesson: 14, hanzi: "激动", pinyin: "jīdòng", uzbek: "Hayajonlanmoq" },
  { id: 3113, hsk: 4, track: 'classic', lesson: 15, hanzi: "国际", pinyin: "guójì", uzbek: "Xalqaro" },
  { id: 3114, hsk: 4, track: 'classic', lesson: 15, hanzi: "和平", pinyin: "hépíng", uzbek: "Tinchlik" },
  { id: 3115, hsk: 4, track: 'classic', lesson: 15, hanzi: "友好", pinyin: "yǒuhǎo", uzbek: "Do'stona" },
  { id: 3116, hsk: 4, track: 'classic', lesson: 15, hanzi: "大使馆", pinyin: "dàshǐguǎn", uzbek: "Elchixona" },
  { id: 3117, hsk: 4, track: 'classic', lesson: 15, hanzi: "签证", pinyin: "qiānzhèng", uzbek: "Viza" },
  { id: 3118, hsk: 4, track: 'classic', lesson: 15, hanzi: "留学", pinyin: "liúxué", uzbek: "Chet elda o'qimoq" },
  { id: 3119, hsk: 4, track: 'classic', lesson: 15, hanzi: "理想", pinyin: "lǐxiǎng", uzbek: "Orzu, ideal" },
  { id: 3120, hsk: 4, track: 'classic', lesson: 15, hanzi: "未来", pinyin: "wèilái", uzbek: "Kelajak" },
  { id: 4001, hsk: 5, track: 'classic', lesson: 1, hanzi: "智慧", pinyin: "zhìhuì", uzbek: "Donolik, aql-zakovat" },
  { id: 4002, hsk: 5, track: 'classic', lesson: 1, hanzi: "思想", pinyin: "sīxiǎng", uzbek: "G'oya, tafakkur" },
  { id: 4003, hsk: 5, track: 'classic', lesson: 1, hanzi: "观念", pinyin: "guānniàn", uzbek: "Tushuncha, qarash" },
  { id: 4004, hsk: 5, track: 'classic', lesson: 1, hanzi: "道理", pinyin: "dàolǐ", uzbek: "Mantiq, haqiqat" },
  { id: 4005, hsk: 5, track: 'classic', lesson: 1, hanzi: "客观", pinyin: "kèguān", uzbek: "Xolis, obyektiv" },
  { id: 4006, hsk: 5, track: 'classic', lesson: 1, hanzi: "主观", pinyin: "zhǔguān", uzbek: "Subyektiv" },
  { id: 4007, hsk: 5, track: 'classic', lesson: 1, hanzi: "必然", pinyin: "bìrán", uzbek: "Muqarrar" },
  { id: 4008, hsk: 5, track: 'classic', lesson: 1, hanzi: "偶然", pinyin: "ǒurán", uzbek: "Tasodifiy" },
  { id: 4009, hsk: 5, track: 'classic', lesson: 2, hanzi: "经济", pinyin: "jīngjì", uzbek: "Iqtisodiyot" },
  { id: 4010, hsk: 5, track: 'classic', lesson: 2, hanzi: "金融", pinyin: "jīnróng", uzbek: "Moliya" },
  { id: 4011, hsk: 5, track: 'classic', lesson: 2, hanzi: "股票", pinyin: "gǔpiào", uzbek: "Aksiya (fond bozori)" },
  { id: 4012, hsk: 5, track: 'classic', lesson: 2, hanzi: "风险", pinyin: "fēngxiǎn", uzbek: "Xatar, risk" },
  { id: 4013, hsk: 5, track: 'classic', lesson: 2, hanzi: "财富", pinyin: "cáifù", uzbek: "Boylik" },
  { id: 4014, hsk: 5, track: 'classic', lesson: 2, hanzi: "贷款", pinyin: "dàikuǎn", uzbek: "Kredit, qarz" },
  { id: 4015, hsk: 5, track: 'classic', lesson: 2, hanzi: "预算", pinyin: "yùsuàn", uzbek: "Byudjet" },
  { id: 4016, hsk: 5, track: 'classic', lesson: 2, hanzi: "繁荣", pinyin: "fánróng", uzbek: "Farovon, gullab-yashnagan" },
  { id: 4017, hsk: 5, track: 'classic', lesson: 3, hanzi: "管理", pinyin: "guǎnlǐ", uzbek: "Boshqarmoq" },
  { id: 4018, hsk: 5, track: 'classic', lesson: 3, hanzi: "效率", pinyin: "xiàolǜ", uzbek: "Samaradorlik" },
  { id: 4019, hsk: 5, track: 'classic', lesson: 3, hanzi: "核心", pinyin: "héxīn", uzbek: "O'zak, asosiy markaz" },
  { id: 4020, hsk: 5, track: 'classic', lesson: 3, hanzi: "策略", pinyin: "cèlüè", uzbek: "Strategiya, taktika" },
  { id: 4021, hsk: 5, track: 'classic', lesson: 3, hanzi: "执行", pinyin: "zhíxíng", uzbek: "Ijro etmoq" },
  { id: 4022, hsk: 5, track: 'classic', lesson: 3, hanzi: "分配", pinyin: "fēnpèi", uzbek: "Taqsimlamoq" },
  { id: 4023, hsk: 5, track: 'classic', lesson: 3, hanzi: "协调", pinyin: "xiétiáo", uzbek: "Muvofiqlashtirmoq" },
  { id: 4024, hsk: 5, track: 'classic', lesson: 3, hanzi: "领导", pinyin: "lǐngdǎo", uzbek: "Rahbar, yetakchi" },
  { id: 4025, hsk: 5, track: 'classic', lesson: 4, hanzi: "生态", pinyin: "shēngtài", uzbek: "Ekologiya" },
  { id: 4026, hsk: 5, track: 'classic', lesson: 4, hanzi: "资源", pinyin: "zīyuán", uzbek: "Resurs, manba" },
  { id: 4027, hsk: 5, track: 'classic', lesson: 4, hanzi: "能源", pinyin: "néngyuán", uzbek: "Energiya manbai" },
  { id: 4028, hsk: 5, track: 'classic', lesson: 4, hanzi: "环保", pinyin: "huánbǎo", uzbek: "Tabiatni asrash" },
  { id: 4029, hsk: 5, track: 'classic', lesson: 4, hanzi: "平衡", pinyin: "pínghéng", uzbek: "Muvozanat" },
  { id: 4030, hsk: 5, track: 'classic', lesson: 4, hanzi: "危机", pinyin: "wēijī", uzbek: "Inqiroz" },
  { id: 4031, hsk: 5, track: 'classic', lesson: 4, hanzi: "珍惜", pinyin: "zhēnxī", uzbek: "Qadrlamoq, asramoq" },
  { id: 4032, hsk: 5, track: 'classic', lesson: 4, hanzi: "持续", pinyin: "chíxù", uzbek: "Davomiy, uzluksiz" },
  { id: 4033, hsk: 5, track: 'classic', lesson: 5, hanzi: "文明", pinyin: "wénmíng", uzbek: "Tamaddun, sivilizatsiya" },
  { id: 4034, hsk: 5, track: 'classic', lesson: 5, hanzi: "古代", pinyin: "gǔdài", uzbek: "Qadimgi davr" },
  { id: 4035, hsk: 5, track: 'classic', lesson: 5, hanzi: "遗产", pinyin: "yíchǎn", uzbek: "Meros" },
  { id: 4036, hsk: 5, track: 'classic', lesson: 5, hanzi: "象征", pinyin: "xiàngzhēng", uzbek: "Ramz, timsol" },
  { id: 4037, hsk: 5, track: 'classic', lesson: 5, hanzi: "奇迹", pinyin: "qíjì", uzbek: "Mo'jiza" },
  { id: 4038, hsk: 5, track: 'classic', lesson: 5, hanzi: "辉煌", pinyin: "huīhuáng", uzbek: "Shonli, porloq" },
  { id: 4039, hsk: 5, track: 'classic', lesson: 5, hanzi: "悠久", pinyin: "yōujiǔ", uzbek: "Ko'p asrlik, qadimiy" },
  { id: 4040, hsk: 5, track: 'classic', lesson: 5, hanzi: "保存", pinyin: "bǎocún", uzbek: "Saqlab qolmoq" },
  { id: 4041, hsk: 5, track: 'classic', lesson: 6, hanzi: "探索", pinyin: "tànsuǒ", uzbek: "Izlanmoq, tadqiq etmoq" },
  { id: 4042, hsk: 5, track: 'classic', lesson: 6, hanzi: "实验", pinyin: "shíyàn", uzbek: "Tajriba, eksperiment" },
  { id: 4043, hsk: 5, track: 'classic', lesson: 6, hanzi: "理论", pinyin: "lǐlùn", uzbek: "Nazariya" },
  { id: 4044, hsk: 5, track: 'classic', lesson: 6, hanzi: "现象", pinyin: "xiànxiàng", uzbek: "Hodisa, fenomen" },
  { id: 4045, hsk: 5, track: 'classic', lesson: 6, hanzi: "规律", pinyin: "guīlǜ", uzbek: "Qonuniyat" },
  { id: 4046, hsk: 5, track: 'classic', lesson: 6, hanzi: "结论", pinyin: "jiélùn", uzbek: "Xulosa" },
  { id: 4047, hsk: 5, track: 'classic', lesson: 6, hanzi: "突破", pinyin: "tūpò", uzbek: "Yorib o'tish, katta yutuq" },
  { id: 4048, hsk: 5, track: 'classic', lesson: 6, hanzi: "贡献", pinyin: "gòngxiàn", uzbek: "Hissa qo'shmoq" },
  { id: 4049, hsk: 5, track: 'classic', lesson: 7, hanzi: "现象", pinyin: "xiànxiàng", uzbek: "Holat, voqelik" },
  { id: 4050, hsk: 5, track: 'classic', lesson: 7, hanzi: "趋势", pinyin: "qūshì", uzbek: "Tendensiya, yo'nalish" },
  { id: 4051, hsk: 5, track: 'classic', lesson: 7, hanzi: "压力", pinyin: "yālì", uzbek: "Bosim, stress" },
  { id: 4052, hsk: 5, track: 'classic', lesson: 7, hanzi: "缓解", pinyin: "huǎnjiě", uzbek: "Yengillashtirmoq" },
  { id: 4053, hsk: 5, track: 'classic', lesson: 7, hanzi: "改善", pinyin: "gǎishàn", uzbek: "Yaxshilamoq" },
  { id: 4054, hsk: 5, track: 'classic', lesson: 7, hanzi: "措施", pinyin: "cuòshī", uzbek: "Chora-tadbir" },
  { id: 4055, hsk: 5, track: 'classic', lesson: 7, hanzi: "促进", pinyin: "cùjìn", uzbek: "Rag'batlantirmoq, tezlashtirmoq" },
  { id: 4056, hsk: 5, track: 'classic', lesson: 7, hanzi: "稳定", pinyin: "wěndìng", uzbek: "Barqaror" },
  { id: 4057, hsk: 5, track: 'classic', lesson: 8, hanzi: "道德", pinyin: "dàodé", uzbek: "Axloq, odob" },
  { id: 4058, hsk: 5, track: 'classic', lesson: 8, hanzi: "良心", pinyin: "liángxīn", uzbek: "Vijdon" },
  { id: 4059, hsk: 5, track: 'classic', lesson: 8, hanzi: "善良", pinyin: "shànliáng", uzbek: "Oqko'ngil, mehribon" },
  { id: 4060, hsk: 5, track: 'classic', lesson: 8, hanzi: "宽容", pinyin: "kuānróng", uzbek: "Bag'rikeng" },
  { id: 4061, hsk: 5, track: 'classic', lesson: 8, hanzi: "真诚", pinyin: "zhēnchéng", uzbek: "Samimiy" },
  { id: 4062, hsk: 5, track: 'classic', lesson: 8, hanzi: "尊严", pinyin: "zūnyán", uzbek: "Qadr-qimmat, g'urur" },
  { id: 4063, hsk: 5, track: 'classic', lesson: 8, hanzi: "奉献", pinyin: "fèngxiàn", uzbek: "Fidoyilik qilmoq" },
  { id: 4064, hsk: 5, track: 'classic', lesson: 8, hanzi: "感激", pinyin: "gǎnjī", uzbek: "Minnatdor bo'lmoq" },
  { id: 4065, hsk: 5, track: 'classic', lesson: 9, hanzi: "媒体", pinyin: "méitǐ", uzbek: "Ommaviy axborot vositalari" },
  { id: 4066, hsk: 5, track: 'classic', lesson: 9, hanzi: "传播", pinyin: "chuánbō", uzbek: "Tarqatmoq" },
  { id: 4067, hsk: 5, track: 'classic', lesson: 9, hanzi: "平台", pinyin: "píngtái", uzbek: "Platforma" },
  { id: 4068, hsk: 5, track: 'classic', lesson: 9, hanzi: "直播", pinyin: "zhíbō", uzbek: "Jonli efir" },
  { id: 4069, hsk: 5, track: 'classic', lesson: 9, hanzi: "虚拟", pinyin: "xūnǐ", uzbek: "Virtual" },
  { id: 4070, hsk: 5, track: 'classic', lesson: 9, hanzi: "隐私", pinyin: "yǐnsī", uzbek: "Shaxsiy sir (maxfiylik)" },
  { id: 4071, hsk: 5, track: 'classic', lesson: 9, hanzi: "判断", pinyin: "pànduàn", uzbek: "Baholamoq, hukm chiqarmoq" },
  { id: 4072, hsk: 5, track: 'classic', lesson: 9, hanzi: "真实", pinyin: "zhēnshí", uzbek: "Haqiqiy, chin" },
  { id: 4073, hsk: 5, track: 'classic', lesson: 10, hanzi: "审美", pinyin: "shěnměi", uzbek: "Estetik did" },
  { id: 4074, hsk: 5, track: 'classic', lesson: 10, hanzi: "设计", pinyin: "shèjì", uzbek: "Dizayn qilmoq, loyihalamoq" },
  { id: 4075, hsk: 5, track: 'classic', lesson: 10, hanzi: "风格", pinyin: "fēnggé", uzbek: "Uslub, stil" },
  { id: 4076, hsk: 5, track: 'classic', lesson: 10, hanzi: "独特", pinyin: "dútè", uzbek: "O'ziga xos, betakror" },
  { id: 4077, hsk: 5, track: 'classic', lesson: 10, hanzi: "完美", pinyin: "wánměi", uzbek: "Mukammal" },
  { id: 4078, hsk: 5, track: 'classic', lesson: 10, hanzi: "细节", pinyin: "xìjié", uzbek: "Detal, tafsilot" },
  { id: 4079, hsk: 5, track: 'classic', lesson: 10, hanzi: "灵感", pinyin: "línggǎn", uzbek: "Ilhom" },
  { id: 4080, hsk: 5, track: 'classic', lesson: 10, hanzi: "魅力", pinyin: "mèilì", uzbek: "Joziba" },
  { id: 4081, hsk: 5, track: 'classic', lesson: 11, hanzi: "挑战", pinyin: "tiǎozhàn", uzbek: "Sinov, chorlov" },
  { id: 4082, hsk: 5, track: 'classic', lesson: 11, hanzi: "克服", pinyin: "kèfú", uzbek: "Yengib o'tmoq" },
  { id: 4083, hsk: 5, track: 'classic', lesson: 11, hanzi: "障碍", pinyin: "zhàng'ài", uzbek: "To'siq" },
  { id: 4084, hsk: 5, track: 'classic', lesson: 11, hanzi: "承受", pinyin: "chéngshòu", uzbek: "Bardosh bermoq" },
  { id: 4085, hsk: 5, track: 'classic', lesson: 11, hanzi: "乐观", pinyin: "lèguān", uzbek: "Optimist, ko'tarinki" },
  { id: 4086, hsk: 5, track: 'classic', lesson: 11, hanzi: "悲观", pinyin: "bēiguān", uzbek: "Pessimist" },
  { id: 4087, hsk: 5, track: 'classic', lesson: 11, hanzi: "坚定", pinyin: "jiāndìng", uzbek: "Qat'iy, mustahkam" },
  { id: 4088, hsk: 5, track: 'classic', lesson: 11, hanzi: "成熟", pinyin: "chéngshú", uzbek: "Yetuk, ulg'aygan" },
  { id: 4089, hsk: 5, track: 'classic', lesson: 12, hanzi: "爱不释手", pinyin: "àibúshìshǒu", uzbek: "Qo'ldan qo'ymaslik (juda yoqtirmoq)" },
  { id: 4090, hsk: 5, track: 'classic', lesson: 12, hanzi: "全神贯注", pinyin: "quánshénguànzhù", uzbek: "Butun diqqatni jamlamoq" },
  { id: 4091, hsk: 5, track: 'classic', lesson: 12, hanzi: "半途而废", pinyin: "bàntú'érfèi", uzbek: "Ishni yarim yo'lda tashlab ketmoq" },
  { id: 4092, hsk: 5, track: 'classic', lesson: 12, hanzi: "举世闻名", pinyin: "jǔshìwénmíng", uzbek: "Butun dunyoga mashhur" },
  { id: 4093, hsk: 5, track: 'classic', lesson: 12, hanzi: "一举两得", pinyin: "yìjǔliǎngdé", uzbek: "Bir o'q bilan ikki quyon" },
  { id: 4094, hsk: 5, track: 'classic', lesson: 12, hanzi: "迫不及待", pinyin: "pòbùjídài", uzbek: "Sabrsizlik bilan kutmoq" },
  { id: 4095, hsk: 5, track: 'classic', lesson: 12, hanzi: "理所当然", pinyin: "lǐsuǒdāngrán", uzbek: "Tabiiy hol, shunday bo'lishi kerak" },
  { id: 4096, hsk: 5, track: 'classic', lesson: 12, hanzi: "脚踏实地", pinyin: "jiǎotàshídì", uzbek: "Qadamni mustahkam bosmoq (amaliy)" },
  { id: 4097, hsk: 5, track: 'classic', lesson: 13, hanzi: "辩论", pinyin: "biànlùn", uzbek: "Munozara qilmoq, bahslashmoq" },
  { id: 4098, hsk: 5, track: 'classic', lesson: 13, hanzi: "说服", pinyin: "shuōfú", uzbek: "Ishontirmoq, ko'ndirmoq" },
  { id: 4099, hsk: 5, track: 'classic', lesson: 13, hanzi: "逻辑", pinyin: "luóji", uzbek: "Mantiq" },
  { id: 4100, hsk: 5, track: 'classic', lesson: 13, hanzi: "矛盾", pinyin: "máodùn", uzbek: "Ziddiyat, qarama-qarshilik" },
  { id: 4101, hsk: 5, track: 'classic', lesson: 13, hanzi: "妥协", pinyin: "tuǒxié", uzbek: "Yon bermoq, murosaga kelmoq" },
  { id: 4102, hsk: 5, track: 'classic', lesson: 13, hanzi: "共识", pinyin: "gòngshí", uzbek: "Umumiy kelishuv" },
  { id: 4103, hsk: 5, track: 'classic', lesson: 13, hanzi: "立场", pinyin: "lìchǎng", uzbek: "Pozitsiya, nuqtai nazar" },
  { id: 4104, hsk: 5, track: 'classic', lesson: 13, hanzi: "原则", pinyin: "yuánzé", uzbek: "Tamoyil, prinsip" },
  { id: 4105, hsk: 5, track: 'classic', lesson: 14, hanzi: "节奏", pinyin: "jiézòu", uzbek: "Marom, ritm" },
  { id: 4106, hsk: 5, track: 'classic', lesson: 14, hanzi: "设施", pinyin: "shèshī", uzbek: "Infratuzilma, jihozlar" },
  { id: 4107, hsk: 5, track: 'classic', lesson: 14, hanzi: "便利", pinyin: "biànlì", uzbek: "Qulaylik" },
  { id: 4108, hsk: 5, track: 'classic', lesson: 14, hanzi: "拥挤", pinyin: "yōngjǐ", uzbek: "Tiqilinch, gavjum" },
  { id: 4109, hsk: 5, track: 'classic', lesson: 14, hanzi: "移民", pinyin: "yímín", uzbek: "Ko'chib o'tmoq (migratsiya)" },
  { id: 4110, hsk: 5, track: 'classic', lesson: 14, hanzi: "适应", pinyin: "shìyìng", uzbek: "Moslashmoq" },
  { id: 4111, hsk: 5, track: 'classic', lesson: 14, hanzi: "归属感", pinyin: "guīshǔgǎn", uzbek: "Daxldorlik hissi" },
  { id: 4112, hsk: 5, track: 'classic', lesson: 14, hanzi: "品质", pinyin: "pǐnzhì", uzbek: "Sifat, fazilat" },
  { id: 4113, hsk: 5, track: 'classic', lesson: 15, hanzi: "全球", pinyin: "quánqiú", uzbek: "Global, butun jahon" },
  { id: 4114, hsk: 5, track: 'classic', lesson: 15, hanzi: "领域", pinyin: "lǐngyù", uzbek: "Soha, jabha" },
  { id: 4115, hsk: 5, track: 'classic', lesson: 15, hanzi: "合作", pinyin: "hézuò", uzbek: "Hamkorlik" },
  { id: 4116, hsk: 5, track: 'classic', lesson: 15, hanzi: "共赢", pinyin: "gòngyíng", uzbek: "O'zaro manfaatli g'alaba" },
  { id: 4117, hsk: 5, track: 'classic', lesson: 15, hanzi: "机遇", pinyin: "jīyù", uzbek: "Qulay imkoniyat" },
  { id: 4118, hsk: 5, track: 'classic', lesson: 15, hanzi: "前景", pinyin: "qiánjǐng", uzbek: "Istiqbol, kelajak manzarasi" },
  { id: 4119, hsk: 5, track: 'classic', lesson: 15, hanzi: "使命", pinyin: "shǐmìng", uzbek: "Missiya, oliy vazifa" },
  { id: 4120, hsk: 5, track: 'classic', lesson: 15, hanzi: "辉煌", pinyin: "huīhuáng", uzbek: "Yorqin, ulug'vor" }
];
let currentHSK = 1;
let currentLesson = 1;
let currentWords = [];
let flashcardIndex = 0;
let quizIndex = 0;
let quizScore = 0;
let quizAnswered = false;
let quizType = 'meaning';
let hanziWriter = null;
let learnedWords = JSON.parse(localStorage.getItem('learnedWords')) || [];
let mistakeWords = JSON.parse(localStorage.getItem('mistakeWords')) || [];
let bookmarkedWords = JSON.parse(localStorage.getItem('bookmarkedWords')) || [];
let isCustomReviewDeck = false;
let activeSpeechRecognition = null;
const LESSON_FLOW_STORAGE_KEY = 'lessonFlowProgress';
const LESSON_COMPLETION_XP = 25;
const lessonFlowSteps = [
    { id: 'learning', label: 'Learn' },
    { id: 'flashcards', label: 'Flashcards' },
    { id: 'quiz', label: 'Quiz' },
    { id: 'writing', label: 'Writing' },
    { id: 'complete', label: 'Complete' }
];
let lessonFlowProgress = loadLessonFlowProgress();
const lessonTracks = {
    classic: { dataTrack: 'classic', minLesson: 1, maxLesson: 15 },
    new: { dataTrack: 'new', minLesson: 1, maxLesson: 15 }
};
let currentLessonTrack = 'classic';
let searchQuery = '';
let lessonContentData = null; // Stores loaded Classic HSK lesson content
let newHskLessonContentData = null; // Stores loaded New HSK 3.0 lesson content
let streakData = JSON.parse(localStorage.getItem('streakData')) || {
    streak: 0,
    lastLoginDate: null,
    totalLearned: 0,
    xp: 0
};
let dailyProgress = JSON.parse(localStorage.getItem('dailyProgress')) || {
    date: new Date().toDateString(),
    traces: 0,
    xp: 0
};
if (dailyProgress.date !== new Date().toDateString()) {
    dailyProgress = { date: new Date().toDateString(), traces: 0, xp: 0 };
    localStorage.setItem('dailyProgress', JSON.stringify(dailyProgress));
}

// Canvas state
let canvasCtx = null;
let isDrawing = false;
let currentMistakes = 0;
let canvasHanziWriter = null;
let canvasHSK = 1;
let canvasTrack = 'classic'; // classic | new (New HSK 3.0)
let canvasLesson = 1;
let canvasWordIndex = 0;
let canvasCharacterIndex = 0;
let currentCanvasCharacters = [];
let canvasScore = 0;
let canvasWritingMode = 'trace'; // trace, write, test
let selectedAvatar = '👤';
let selectedAvatarPref = 'emoji'; // 'emoji' or 'google' (Google photo, Phase 1 auth)
let isEraserActive = false;
let currentStrokeIndex = 0;
let expectedStrokeCount = 0;
let userStrokes = [];
let autoAdvanceTimer = null;
let quizSessionId = 0;
let comboCount = 0;
let canvasReturnToLesson = false;

// DOM Elements
const themeToggle = document.getElementById('themeToggle');
const dashboard = document.getElementById('dashboard');
const lessons = document.getElementById('lessons');
const lesson = document.getElementById('lesson');
const backToDashboard = document.getElementById('backToDashboard');
const backToLessons = document.getElementById('backToLessons');
const lessonsTitle = document.getElementById('lessonsTitle');
const lessonsGrid = document.getElementById('lessonsGrid');
const lessonTitle = document.getElementById('lessonTitle');
const lessonFlowStepsElement = document.getElementById('lessonFlowSteps');
const lessonFlowStatus = document.getElementById('lessonFlowStatus');
const lessonFlowContinue = document.getElementById('lessonFlowContinue');
const flashcard = document.getElementById('flashcard');
const flashcardHanzi = document.getElementById('flashcardHanzi');
const flashcardAudioBtn = document.getElementById('flashcardAudioBtn');
const flashcardPinyin = document.getElementById('flashcardPinyin');
const flashcardUzbek = document.getElementById('flashcardUzbek');
const prevCard = document.getElementById('prevCard');
const nextCard = document.getElementById('nextCard');
const shuffleCards = document.getElementById('shuffleCards');
const currentCard = document.getElementById('currentCard');
const totalCards = document.getElementById('totalCards');
const quizHanzi = document.getElementById('quizHanzi');
const quizOptions = document.getElementById('quizOptions');
const quizScoreElement = document.getElementById('quizScore');
const nextQuizQuestion = document.getElementById('nextQuizQuestion');
const quizPrompt = document.getElementById('quizPrompt');
const quizTypeBtns = document.querySelectorAll('.quiz-type-btn');
const currentQuestion = document.getElementById('currentQuestion');
const totalQuestions = document.getElementById('totalQuestions');
const tabBtns = document.querySelectorAll('.tab-btn');
const modeContents = document.querySelectorAll('.mode-content');
const audioBtn = document.getElementById('audioBtn');
const strokeBtn = document.getElementById('strokeBtn');
const strokeOrderTarget = document.getElementById('strokeOrderTarget');
const markLearned = document.getElementById('markLearned');
const learnedCount = document.getElementById('learnedCount');
const hskFilterBtns = document.querySelectorAll('.hsk-filter-btn');
const searchInput = document.getElementById('searchInput');
const searchClear = document.getElementById('searchClear');
const leaderboardBtn = document.getElementById('leaderboard-btn');
const leaderboardModal = document.getElementById('leaderboardModal');
const leaderboardList = document.getElementById('leaderboardList');
const closeLeaderboard = document.getElementById('closeLeaderboard');
const toast = document.getElementById('toast');
let toastTimer = null;
const navItems = document.querySelectorAll('.nav-item');
const canvasView = document.getElementById('canvas');
const canvasViewPlaceholder = document.createComment('standalone canvas mount point');
canvasView.parentNode.insertBefore(canvasViewPlaceholder, canvasView);
const lessonWritingMode = document.getElementById('writingMode');
const profileView = document.getElementById('profile');
const backToLessonsFromCanvas = document.getElementById('backToLessonsFromCanvas');
const drawingCanvas = document.getElementById('hanziWriterCanvas');
const canvasCharacter = document.getElementById('canvasCharacter');
const canvasWordLabel = document.getElementById('canvasWordLabel');
const canvasCharacterPosition = document.getElementById('canvasCharacterPosition');
const profileStreak = document.getElementById('profileStreak');
const profileLearned = document.getElementById('profileLearned');
const profileXP = document.getElementById('profileXP');
const userLevel = document.getElementById('userLevel');
const hsk1Percent = document.getElementById('hsk1Percent');
const hsk2Percent = document.getElementById('hsk2Percent');
const hsk3Percent = document.getElementById('hsk3Percent');
const newHskPercent = document.getElementById('newHskPercent');
const hsk1Fill = document.getElementById('hsk1Fill');
const hsk2Fill = document.getElementById('hsk2Fill');
const hsk3Fill = document.getElementById('hsk3Fill');
const newHskFill = document.getElementById('newHskFill');
const hsk1Count = document.getElementById('hsk1Count');
const newHskCount = document.getElementById('newHskCount');
const achievementsGrid = document.getElementById('achievementsGrid');
const dailyQuests = document.getElementById('dailyQuests');
const canvasLessonSelector = document.getElementById('canvasLessonSelector');
const canvasMobileHskSelector = document.getElementById('canvasMobileHskSelector');
const canvasMobileLessonSelector = document.getElementById('canvasMobileLessonSelector');
const canvasTrackSelector = document.getElementById('canvasTrackSelector');
const canvasMobileTrackSelector = document.getElementById('canvasMobileTrackSelector');
const canvasTrackSection = document.getElementById('canvasTrackSection');
const hskOptions = document.querySelectorAll('.hsk-option');
const modeOptions = document.querySelectorAll('.mode-option');
const mobileModeOptions = document.querySelectorAll('.mobile-mode-option');
const canvasAudioBtn = document.getElementById('canvasAudioBtn');
const canvasHintBtn = document.getElementById('canvasHintBtn');
const canvasPlayBtn = document.getElementById('canvasPlayBtn');
const canvasClearBtn = document.getElementById('canvasClearBtn');
const canvasCheckBtn = document.getElementById('canvasCheckBtn');
const canvasContinueBtn = document.getElementById('canvasContinueBtn');
const canvasCategory = document.querySelector('.canvas-category');
const canvasMeaning = document.getElementById('canvasMeaning');
const canvasPinyin = document.getElementById('canvasPinyin');
const comboDisplay = document.getElementById('comboDisplay');
const modeInstructions = document.getElementById('modeInstructions');
const canvasFeedback = document.getElementById('canvasFeedback');
const canvasScoreElement = document.getElementById('canvasScore');
const nextCanvasWord = document.getElementById('nextCanvasWord');
const profileUsername = document.getElementById('profileUsername');
const profileAvatar = document.getElementById('profileAvatar');
const dailyGoalDisplay = document.getElementById('dailyGoalDisplay');
const editProfileBtn = document.getElementById('editProfileBtn');
const editProfileModal = document.getElementById('editProfileModal');
const closeModalBtn = document.getElementById('closeModalBtn');
const cancelModalBtn = document.getElementById('cancelModalBtn');
const saveProfileBtn = document.getElementById('saveProfileBtn');
const usernameInput = document.getElementById('usernameInput');
const dailyGoalInput = document.getElementById('dailyGoalInput');
const avatarOptions = document.querySelectorAll('.avatar-option');
const avatarPrefOptions = document.querySelectorAll('.avatar-pref-option');
const avatarPrefHint = document.getElementById('avatarPrefHint');
const successModal = document.getElementById('successModal');
const closeSuccessModal = document.getElementById('closeSuccessModal');
const nextWordFromModal = document.getElementById('nextWordFromModal');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initializeTheme();
    applyHskLevelTheme(currentHSK);
    setupEventListeners();
    updateStreak();
    updateTotalLearned();
    updateXP();
    loadProfileData();
    updateDailyQuests();
    updateDashboardBentoUI();
    
    // Load voices for speech synthesis
    if ('speechSynthesis' in window) {
        window.speechSynthesis.getVoices();
        window.speechSynthesis.onvoiceschanged = () => {
            window.speechSynthesis.getVoices();
        };
    }
});

// Theme toggle
function initializeTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    syncProfileThemeUI();
}

function toggleTheme(savedTheme) {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    syncProfileThemeUI();
}

function syncProfileThemeUI() {
    const themeStatusEl = document.getElementById('profileThemeStatusText');
    const themeBtnEl = document.getElementById('profileThemeToggleBtn');
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    if (themeStatusEl) {
        themeStatusEl.textContent = isDark ? '🌙 Tungi qorong‘u mavzu yoqilgan' : '☀️ Kunduzgi yorug‘ mavzu yoqilgan';
    }
    if (themeBtnEl) {
        themeBtnEl.textContent = isDark ? '☀️ Kunduzgi' : '🌙 Tungi';
    }
}

function getSpeechRate() {
    const saved = parseFloat(localStorage.getItem('easyChineseSpeechRate'));
    return Number.isFinite(saved) && saved >= 0.5 && saved <= 1.2 ? saved : 0.85;
}

function applyHskLevelTheme(level) {
    const lvl = Number(level) || 1;
    document.documentElement.setAttribute('data-hsk-level', String(lvl));
    const headerBadge = document.getElementById('headerHskBadge');
    const dashPill = document.getElementById('dashboardLevelPill');
    const cnBadge = document.getElementById('lessonsCnBadge');
    const cnMeta = {
        1: '一级 · 15 lessons',
        2: '二级 · New HSK 3.0 · 15 lessons',
        3: '三级 · New HSK 3.0 · 15 lessons',
        4: '四级 · New HSK 3.0 · 15 lessons',
        5: '五级 · New HSK 3.0 · 15 lessons'
    };
    if (headerBadge) headerBadge.textContent = `HSK ${lvl}`;
    if (dashPill) dashPill.textContent = `HSK ${lvl}`;
    if (cnBadge) cnBadge.textContent = cnMeta[lvl] || `HSK ${lvl}`;
}

function updateDashboardBentoUI() {
    const hsk1Words = vocabularyData.filter(w => w.hsk === 1 && w.track === 'classic');
    const learnedHsk1 = hsk1Words.filter(w => learnedWords.includes(w.id)).length;
    const pct = hsk1Words.length > 0 ? Math.round((learnedHsk1 / hsk1Words.length) * 100) : 0;
    const fillEl = document.getElementById('dashboardHsk1Fill');
    if (fillEl) fillEl.style.width = `${pct}%`;

    const contTitle = document.getElementById('dashboardContinueTitle');
    const contSub = document.getElementById('dashboardContinueSub');
    const lessonNums = [...new Set(vocabularyData.filter(w => w.hsk === currentHSK && w.track === 'classic').map(w => w.lesson))].sort((a, b) => a - b);
    const nextLesson = lessonNums.find(num => !isLessonComplete(num, 'classic')) || lessonNums[0] || 1;
    const completedCount = lessonNums.filter(num => isLessonComplete(num, 'classic')).length;
    const levelTrackText = currentHSK >= 2 ? `New HSK 3.0 · HSK ${currentHSK}` : `Classic HSK 1`;
    if (contTitle) contTitle.textContent = `HSK ${currentHSK} · Lesson ${nextLesson} dan davom etish`;
    if (contSub) contSub.textContent = `${levelTrackText} · ${completedCount} / ${lessonNums.length || 15} dars tugallangan`;

    const validMistakes = mistakeWords.filter(id => vocabularyData.some(w => w.id === id));
    const validBookmarks = bookmarkedWords.filter(id => vocabularyData.some(w => w.id === id));
    const mistakesCountEl = document.getElementById('dashboardMistakesCount');
    const mistakesSubEl = document.getElementById('dashboardMistakesSub');
    const bookmarksCountEl = document.getElementById('dashboardBookmarksCount');
    const bookmarksSubEl = document.getElementById('dashboardBookmarksSub');
    if (mistakesCountEl) mistakesCountEl.textContent = String(validMistakes.length);
    if (mistakesSubEl) {
        mistakesSubEl.textContent = validMistakes.length > 0
            ? `${validMistakes.length} ta xato so‘zni takrorlash`
            : 'Quizda xato qilingan so‘zlar shu yerga tushadi';
    }
    if (bookmarksCountEl) bookmarksCountEl.textContent = String(validBookmarks.length);
    if (bookmarksSubEl) {
        bookmarksSubEl.textContent = validBookmarks.length > 0
            ? `${validBookmarks.length} ta saqlangan so‘zni mashq qilish`
            : 'Kartochkada ⭐ Saqlash tugmasini bosing';
    }
}

// Event listeners
function setupEventListeners() {
    themeToggle.addEventListener('click', toggleTheme);
    document.getElementById('leaderboard-btn').addEventListener('click', () => {
        populateLeaderboard();
        document.getElementById('leaderboardModal').classList.remove('hidden');
    });
    document.getElementById('closeLeaderboard').addEventListener('click', () => document.getElementById('leaderboardModal').classList.add('hidden'));
    
    // HSK level buttons
    document.querySelectorAll('.hsk-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            currentHSK = parseInt(btn.dataset.hsk);
            applyHskLevelTheme(currentHSK);
            updateDashboardBentoUI();
            showLessonsView();
        });
    });

    const dashboardContinueBtn = document.getElementById('dashboardContinueBtn');
    if (dashboardContinueBtn) {
        dashboardContinueBtn.addEventListener('click', () => {
            applyHskLevelTheme(currentHSK);
            const lessonNums = [...new Set(vocabularyData.filter(w => w.hsk === currentHSK && w.track === 'classic').map(w => w.lesson))].sort((a, b) => a - b);
            const nextLesson = lessonNums.find(num => !isLessonComplete(num, 'classic')) || lessonNums[0] || 1;
            showLessonView(nextLesson);
        });
    }

    // HSK 1 lesson version buttons
    hskFilterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            currentLessonTrack = btn.dataset.track;
            hskFilterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            filterAndSearchLessons();
        });
    });

    // Search input
    searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value.toLowerCase();
        searchClear.classList.toggle('visible', searchQuery.length > 0);
        filterAndSearchLessons();
    });

    // Search clear button
    searchClear.addEventListener('click', () => {
        searchInput.value = '';
        searchQuery = '';
        searchClear.classList.remove('visible');
        filterAndSearchLessons();
    });

    // Bottom navigation
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            const nav = item.dataset.nav;
            // Clear all active modals/overlays before navigation
            hideAllModals();
            handleNavigation(nav);
            navItems.forEach(nav => nav.classList.remove('active'));
            item.classList.add('active');
        });
    });

    // Back buttons
    backToDashboard.addEventListener('click', showDashboard);
    backToLessons.addEventListener('click', showLessonsView);
    backToLessonsFromCanvas.addEventListener('click', () => {
        if (canvasReturnToLesson) {
            canvasReturnToLesson = false;
            showLessonView(currentLesson);
        } else {
            showLessonsView();
        }
    });
    lessonFlowContinue.addEventListener('click', continueLessonFlow);

    // Canvas sidebar controls
    hskOptions.forEach(option => {
        option.addEventListener('click', () => {
            hskOptions.forEach(opt => opt.classList.remove('active'));
            option.classList.add('active');
            canvasHSK = parseInt(option.dataset.hsk);
            canvasTrack = 'classic'; // only HSK 1 has both curricula
            canvasWordIndex = 0;
            canvasCharacterIndex = 0;
            updateCanvasLessonSelector();
            loadCanvasCharacter();
        });
    });

    if (canvasTrackSelector) {
        canvasTrackSelector.addEventListener('change', (e) => {
            canvasTrack = e.target.value;
            canvasLesson = 1;
            canvasWordIndex = 0;
            canvasCharacterIndex = 0;
            updateCanvasLessonSelector();
            loadCanvasCharacter();
        });
    }

    if (canvasMobileTrackSelector) {
        canvasMobileTrackSelector.addEventListener('change', (e) => {
            canvasTrack = e.target.value;
            canvasLesson = 1;
            canvasWordIndex = 0;
            canvasCharacterIndex = 0;
            updateCanvasLessonSelector();
            loadCanvasCharacter();
        });
    }

    canvasLessonSelector.addEventListener('change', (e) => {
        canvasLesson = parseInt(e.target.value);
        canvasWordIndex = 0;
        canvasCharacterIndex = 0;
        loadCanvasCharacter();
    });

    canvasMobileHskSelector.addEventListener('change', (e) => {
        canvasHSK = parseInt(e.target.value);
        canvasTrack = 'classic';
        canvasWordIndex = 0;
        canvasCharacterIndex = 0;
        updateCanvasLessonSelector();
        loadCanvasCharacter();
    });

    canvasMobileLessonSelector.addEventListener('change', (e) => {
        canvasLesson = parseInt(e.target.value);
        canvasWordIndex = 0;
        canvasCharacterIndex = 0;
        loadCanvasCharacter();
    });

    modeOptions.forEach(option => {
        option.addEventListener('click', () => {
            modeOptions.forEach(opt => opt.classList.remove('active'));
            option.classList.add('active');
            canvasWritingMode = option.dataset.mode;
            updateModeInstructions();
            applyWritingMode();
        });
    });

    mobileModeOptions.forEach(option => {
        option.addEventListener('click', () => {
            mobileModeOptions.forEach(opt => opt.classList.remove('active'));
            option.classList.add('active');
            canvasWritingMode = option.dataset.mode;
            updateModeInstructions();
            applyWritingMode();
        });
    });

    // Canvas action buttons
    canvasAudioBtn.addEventListener('click', playCanvasAudio);
    canvasPlayBtn.addEventListener('click', () => {
        if (canvasHanziWriter) {
            canvasHanziWriter.animateCharacter();
        }
    });
    canvasClearBtn.addEventListener('click', toggleEraser);
    canvasCheckBtn.addEventListener('click', checkCanvasDrawing);
    canvasContinueBtn.addEventListener('click', () => {
        canvasContinueBtn.style.display = 'none';
        nextCanvasCharacter();
    });
    nextCanvasWord.addEventListener('click', nextCanvasCharacter);

    // Profile modal controls
    editProfileBtn.addEventListener('click', openProfileModal);
    closeModalBtn.addEventListener('click', closeProfileModal);
    cancelModalBtn.addEventListener('click', closeProfileModal);
    saveProfileBtn.addEventListener('click', saveProfile);

    avatarOptions.forEach(option => {
        option.addEventListener('click', () => {
            avatarOptions.forEach(opt => opt.classList.remove('selected'));
            option.classList.add('selected');
            selectedAvatar = option.dataset.avatar;
            // Picking an emoji avatar also switches the preference to emoji
            selectedAvatarPref = 'emoji';
            syncAvatarPrefUI();
        });
    });

    // Avatar preference (Google photo vs emoji) — Phase 1 auth
    avatarPrefOptions.forEach(btn => {
        btn.addEventListener('click', () => {
            if (btn.disabled) return;
            selectedAvatarPref = btn.dataset.pref;
            syncAvatarPrefUI();
        });
    });

    // Success modal controls
    closeSuccessModal.addEventListener('click', hideSuccessModal);
    nextWordFromModal.addEventListener('click', () => {
        hideSuccessModal();
        nextCanvasCharacter();
    });

    // Canvas Hint button
    canvasHintBtn.addEventListener('click', () => {
        if (canvasHanziWriter) {
            canvasHanziWriter.animateCharacter();
        }
    });

    // Leaderboard modal controls
    closeLeaderboard.addEventListener('click', hideLeaderboardModal);

    // Flashcard controls
    flashcard.addEventListener('click', () => flashcard.classList.toggle('flipped'));
    prevCard.addEventListener('click', () => navigateFlashcard(-1));
    nextCard.addEventListener('click', () => navigateFlashcard(1));
    shuffleCards.addEventListener('click', shuffleFlashcards);
    audioBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        playPronunciation();
    });
    flashcardAudioBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        playPronunciation();
    });
    strokeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        showStrokeOrder();
    });
    markLearned.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleLearned();
    });

    // Quiz controls
    nextQuizQuestion.addEventListener('click', nextQuiz);

    quizTypeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            quizType = btn.dataset.quizType;
            quizTypeBtns.forEach(option => option.classList.toggle('active', option === btn));
            updateQuiz();
        });
    });

    // Mode tabs & unified 5-stage stepper
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => switchMode(btn.dataset.mode));
    });

    if (lessonFlowStepsElement) {
        lessonFlowStepsElement.addEventListener('click', (e) => {
            const stepEl = e.target.closest('.lesson-flow-step[data-step-id]');
            if (!stepEl) return;
            const stepId = stepEl.dataset.stepId;
            if (stepId === 'writing') {
                prepareLessonWritingCanvas();
                switchMode('writing');
            } else if (stepId === 'flashcards') {
                switchMode('flashcard');
            } else {
                switchMode(stepId);
            }
        });
    }

    const startFlashcardsBtn = document.getElementById('startFlashcardsFromLearn');
    if (startFlashcardsBtn) {
        startFlashcardsBtn.addEventListener('click', () => {
            completeLessonFlowStep('learning');
            flashcardIndex = 0;
            updateFlashcard();
            showToast('1-bosqich tugadi! 2-bosqich: Flashcards 🃏');
            switchMode('flashcard');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    const nextLessonAutoBtn = document.getElementById('nextLessonAutoBtn');
    if (nextLessonAutoBtn) {
        nextLessonAutoBtn.addEventListener('click', () => {
            const selectedTrack = lessonTracks[currentLessonTrack] || lessonTracks.classic;
            const trackWords = vocabularyData.filter(w => w.hsk === currentHSK && w.track === selectedTrack.dataTrack);
            const lessonNums = [...new Set(trackWords.map(w => w.lesson))].sort((a, b) => a - b);
            const idx = lessonNums.indexOf(currentLesson);
            if (idx !== -1 && idx + 1 < lessonNums.length) {
                showLessonView(lessonNums[idx + 1]);
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
                showLessonsView();
            }
        });
    }

    const backToLessonsFromComplete = document.getElementById('backToLessonsFromComplete');
    if (backToLessonsFromComplete) {
        backToLessonsFromComplete.addEventListener('click', () => {
            showLessonsView();
        });
    }

    // Profile interactive HSK 1-5 progress rows -> tap to open that level's lessons
    document.querySelectorAll('.hsk-progress-item[data-jump-hsk]').forEach(row => {
        const triggerJump = () => {
            const targetHsk = parseInt(row.dataset.jumpHsk, 10) || 1;
            const targetTrack = row.dataset.jumpTrack || 'classic';
            currentHSK = targetHsk;
            currentLessonTrack = targetHsk === 1 ? targetTrack : 'classic';
            hskFilterBtns.forEach(b => b.classList.toggle('active', b.dataset.track === currentLessonTrack));
            applyHskLevelTheme(currentHSK);
            updateDashboardBentoUI();
            showLessonsView();
            navItems.forEach(nav => nav.classList.toggle('active', nav.dataset.nav === 'practice'));
            window.scrollTo({ top: 0, behavior: 'smooth' });
        };
        row.addEventListener('click', triggerJump);
        row.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                triggerJump();
            }
        });
    });

    // Profile settings controls (Dark mode toggle + Speech rate selector + Learned words scroll)
    const profileThemeToggleBtn = document.getElementById('profileThemeToggleBtn');
    if (profileThemeToggleBtn) {
        profileThemeToggleBtn.addEventListener('click', () => toggleTheme());
    }

    const speechRateGroup = document.getElementById('speechRateGroup');
    if (speechRateGroup) {
        speechRateGroup.querySelectorAll('.rate-chip').forEach(btn => {
            btn.addEventListener('click', () => {
                const rateVal = parseFloat(btn.dataset.rate) || 0.85;
                localStorage.setItem('easyChineseSpeechRate', String(rateVal));
                syncSpeechRateUI();
                speakChineseText('你好');
                showToast(rateVal < 0.75 ? '🐢 Ovoz tezligi: Sekin' : '👌 Ovoz tezligi: Normal');
            });
        });
    }

    const profileLearnedCard = document.getElementById('profileLearnedCard');
    const learnedWordsSection = document.getElementById('learnedWordsSection');
    if (profileLearnedCard && learnedWordsSection) {
        profileLearnedCard.addEventListener('click', () => {
            learnedWordsSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
        });
    }

    const dashboardMistakesBtn = document.getElementById('dashboardMistakesBtn');
    if (dashboardMistakesBtn) {
        dashboardMistakesBtn.addEventListener('click', () => startSmartCustomDeck('mistakes'));
    }
    const dashboardBookmarksBtn = document.getElementById('dashboardBookmarksBtn');
    if (dashboardBookmarksBtn) {
        dashboardBookmarksBtn.addEventListener('click', () => startSmartCustomDeck('bookmarks'));
    }

    const speakPracticeBtn = document.getElementById('speakPracticeBtn');
    if (speakPracticeBtn) {
        speakPracticeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            startSpeechPronunciationCheck();
        });
    }

    const bookmarkWordBtn = document.getElementById('bookmarkWordBtn');
    if (bookmarkWordBtn) {
        bookmarkWordBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleBookmarkCurrentWord();
        });
    }
}

function loadExternalVocabulary() {
    // words.json is a legacy partial set; the ordered inline dataset is canonical.
}

// Load enriched lesson content for Classic HSK 1
async function loadLessonContent() {
    if (lessonContentData !== null) return; // Already loaded

    try {
        const response = await fetch('lesson-content-classic-hsk1.json');
        if (!response.ok) throw new Error('Failed to load lesson content');
        lessonContentData = await response.json();
    } catch (error) {
        console.error('Error loading lesson content:', error);
        lessonContentData = null; // Ensure null on failure
    }
}

// Load enriched lesson content for New HSK 3.0
async function loadNewHskLessonContent() {
    if (newHskLessonContentData !== null) return; // Already loaded

    try {
        const response = await fetch('lesson-content-new-hsk1.json');
        if (!response.ok) throw new Error('Failed to load New HSK lesson content');
        newHskLessonContentData = await response.json();
    } catch (error) {
        console.error('Error loading New HSK lesson content:', error);
        newHskLessonContentData = null; // Ensure null on failure
    }
}

// Thematic metadata & grammar notes for New HSK 3.0 Levels 2-5
const HSK2_TO_5_LESSON_THEMES = {
    '2:1': { title: 'Sayohat va reja (旅游与计划)', point: '已经 ... 了 (Allaqachon ... bo‘ldi)', pattern: 'Ega + 已经 + Fe’l + 了', exp: '已经 (yǐjīng) harakatning allaqachon bajarilganini bildiradi va ko‘pincha gap oxirida 了 (le) yuklamasi bilan keladi.' },
    '2:2': { title: 'Kundalik hayot va sport (日常生活与运动)', point: '坚持 + Fe’l (Davom ettirmoq)', pattern: '每天 + 坚持 + Sport/Mashq', exp: 'Doimiy odat va mashg‘ulotni qoldirmasdan davom ettirishni ifodalash uchun 坚持 (jiānchí) fe’lidan foydalaniladi.' },
    '2:3': { title: 'Salomatlik va shifoxona (健康与医院)', point: '别担心 (Xavotir olmang)', pattern: '别 + Fe’l / Sifat', exp: 'Suhbatdoshni tinchlantirish yoki biror ishni qilmaslikka chaqirish uchun 别 (bié) inkor yuklamasi ishlatiladi.' },
    '2:4': { title: 'Xarid va kiyim-kechak (购物与服装)', point: '试一试 (Sinab ko‘rmoq)', pattern: 'Fe’l + 一 + Fe’l', exp: 'Xitoy tilida fe’lni takrorlash (试一试, 看一看) harakatning qisqa va yengil bajarilishini bildiradi.' },
    '2:5': { title: 'Ovqatlanish va restoran (餐厅与美食)', point: '又... 又... (Ham ..., ham ...)', pattern: '又 + Sifat 1 + 又 + Sifat 2', exp: 'Taom yoki buyumning bir vaqtning o‘zida ikkita sifatga ega ekanligini (又甜又好吃) ifodalaydi.' },
    '2:6': { title: 'Yo‘l va transport (问路与交通)', point: '往 + Yo‘nalish + Fe’l (... tomonga yurmoq)', pattern: '往 + 左/右/前 + 走', exp: '往 (wǎng) ko‘makchisi harakat yo‘nalishini ko‘rsatishda ishlatiladi.' },
    '2:7': { title: 'O‘qish va imtihon (学习与考试)', point: 'Fe’l + 懂 / 清楚 (Natija to‘ldiruvchisi)', pattern: '听懂 / 看清楚', exp: 'Fe’ldan keyin 懂 yoki 清楚 qo‘shilishi harakat natijasida tushunilganlik yoki aniqlikni bildiradi.' },
    '2:8': { title: 'Ish va ofis (工作与办公室)', point: '完成 + Vazifa (Tugatmoq)', pattern: 'Ega + 已经 + 完成 + Ob’yekt', exp: 'Ish yoki topshiriqni muvaffaqiyatli yakunlashda 完成 (wánchéng) fe’li qo‘llaniladi.' },
    '2:9': { title: 'Uy va xonadon (家庭与房间)', point: '把 + Ob’yekt + Fe’l + Natija', pattern: '把房间打扫干净', exp: '把 (bǎ) konstruksiyasi ob’yekt ustida biror o‘zgarish yuz berganini ta’kidlaydi.' },
    '2:10': { title: 'Ob-havo va fasllar (天气与季节)', point: '比 (Qiyoslash darajasi)', pattern: 'A + 比 + B + Sifat', exp: 'Ikki fasl yoki narsani solishtirishda 比 (bǐ) ko‘makchisi ishlatiladi.' },
    '2:11': { title: 'Qiziqish va bo‘sh vaqt (爱好与周末)', point: '对 ... 感兴趣 (...ga qiziqmoq)', pattern: 'Ega + 对 + Narsa + 感兴趣', exp: 'Biror sohaga qiziqishni aytishda har doim 对 (duì) old ko‘makchisi bilan 感兴趣 birikmasi keladi.' },
    '2:12': { title: 'Internet va aloqa (网络与联系)', point: '用 + Vosita + Fe’l (... orqali bajarmoq)', pattern: '用微信联系', exp: 'Aloqa vositasi yoki asbobdan foydalanib ish bajarishni ifodalaydi.' },
    '2:13': { title: 'Bayram va sovg‘alar (节日与礼物)', point: '祝 + Shaxs + Tilak (Tabriklamoq)', pattern: '祝你生日快乐', exp: 'Bayram va tug‘ilgan kunda ezgu tilak bildirish uchun 祝 (zhù) fe’li gap boshida keladi.' },
    '2:14': { title: 'His-tuyg‘u va xarakter (感情与性格)', point: '越来越 + Sifat (Borgan sari ...)', pattern: '越来越 + 开心 / 努力', exp: 'Vaqt o‘tishi bilan sifatning kuchayib borishini ifodalaydi.' },
    '2:15': { title: 'Tabiat va hayvonot (自然与动物)', point: '保护 + Ob’yekt (Asramoq, himoya qilmoq)', pattern: '我们要保护环境', exp: '要 (yào) modal fe’li zaruriyat ("kerak") ma’nosini beradi.' }
};

function generateDynamicLessonContent(hskLevel, lessonNumber, words) {
    const key = `${hskLevel}:${lessonNumber}`;
    const meta = HSK2_TO_5_LESSON_THEMES[key] || {
        title: `New HSK 3.0 · HSK ${hskLevel} Lesson ${lessonNumber}`,
        point: `New HSK 3.0 (第${hskLevel}级) — Kontekstual birikmalar`,
        pattern: `Mavzuga oid faol iboralar + ${words[0] ? words[0].hanzi : ''}`,
        exp: `Ushbu darsdagi so‘zlar New HSK 3.0 o‘quv dasturi asosida tanlangan bo‘lib, og‘zaki va yozma nutqda fikrni aniq ifodalashga xizmat qiladi.`
    };

    const w0 = words[0] || { hanzi: '学习', pinyin: 'xúexí', uzbek: 'o‘rganmoq' };
    const w1 = words[1] || w0;
    const w2 = words[2] || w0;
    const w3 = words[3] || w1;
    const w4 = words[4] || w2;

    const sentences = [
        {
            chinese: `我们今天一起学习“${w0.hanzi}”和“${w1.hanzi}”。`,
            pinyin: `Wǒmen jīntiān yìqǐ xuéxí "${w0.pinyin}" hé "${w1.pinyin}".`,
            uzbek: `Biz bugun birgalikda "${w0.uzbek}" va "${w1.uzbek}" so‘zlarini o‘rganamiz.`,
            english: `Today we learn "${w0.hanzi}" and "${w1.hanzi}" together.`
        },
        {
            chinese: `在生活中，${w2.hanzi}和${w3.hanzi}都非常重要。`,
            pinyin: `Zài shēnghuó zhōng, ${w2.pinyin} hé ${w3.pinyin} dōu fēicháng zhòngyào.`,
            uzbek: `Hayotda "${w2.uzbek}" hamda "${w3.uzbek}" juda muhimdir.`,
            english: `In daily life, both ${w2.hanzi} and ${w3.hanzi} are very important.`
        },
        {
            chinese: `请用“${w4.hanzi}”说一个新的汉语句子。`,
            pinyin: `Qǐng yòng "${w4.pinyin}" shuō yì ge xīn de Hànyǔ jùzi.`,
            uzbek: `Iltimos, "${w4.uzbek}" so‘zi ishtirokida yangi xitoycha gap tuzing.`,
            english: `Please make a new Chinese sentence using "${w4.hanzi}".`
        }
    ];

    return {
        lessonId: lessonNumber,
        title: meta.title,
        example_sentences: sentences,
        grammar: {
            point: meta.point,
            pattern: meta.pattern,
            uzbek_explanation: meta.exp,
            examples: [
                {
                    chinese: `${w0.hanzi} · ${w1.hanzi} · ${w2.hanzi}`,
                    pinyin: `${w0.pinyin} · ${w1.pinyin} · ${w2.pinyin}`,
                    uzbek: `${w0.uzbek} / ${w1.uzbek} / ${w2.uzbek}`,
                    english: `Core New HSK 3.0 collocations`
                }
            ]
        }
    };
}

// Display learning content (example sentences, grammar, and interactive Sentence Builder)
function displayLearningContent(lessonNumber, track) {
    const exampleSentencesContainer = document.getElementById('exampleSentences');
    const grammarNoteContainer = document.getElementById('grammarNote');

    let lessonObj = null;
    if (currentHSK === 1) {
        const contentData = track === 'classic' ? lessonContentData : newHskLessonContentData;
        if (contentData && contentData.lessons) {
            lessonObj = contentData.lessons.find(l => l.lessonId === lessonNumber) || null;
        }
    }
    if (!lessonObj) {
        lessonObj = generateDynamicLessonContent(currentHSK, lessonNumber, currentWords);
    }

    // Display example sentences with audio buttons
    exampleSentencesContainer.innerHTML = lessonObj.example_sentences.map(sentence => `
        <div class="example-sentence-card">
            <div class="sentence-top-row">
                <div class="sentence-chinese">${sentence.chinese}</div>
                <button type="button" class="sentence-audio-btn" data-speak="${sentence.chinese.replace(/"/g, '&quot;')}" aria-label="Gapni tinglash">🔊</button>
            </div>
            <div class="sentence-pinyin">${sentence.pinyin}</div>
            <div class="sentence-uzbek">${sentence.uzbek}</div>
            ${sentence.english ? `<div class="sentence-english">${sentence.english}</div>` : ''}
        </div>
    `).join('');

    exampleSentencesContainer.querySelectorAll('.sentence-audio-btn').forEach(btn => {
        btn.addEventListener('click', () => speakChineseText(btn.dataset.speak));
    });

    // Display grammar note
    if (lessonObj.grammar) {
        grammarNoteContainer.innerHTML = `
            <div class="grammar-content">
                <h4 class="grammar-point">${lessonObj.grammar.point}</h4>
                <div class="grammar-pattern">
                    <strong>Qolip (Pattern):</strong> ${lessonObj.grammar.pattern}
                </div>
                <div class="grammar-explanation">
                    ${lessonObj.grammar.uzbek_explanation}
                </div>
                ${lessonObj.grammar.examples && lessonObj.grammar.examples.length > 0 ? `
                    <div class="grammar-examples">
                        ${lessonObj.grammar.examples.map(ex => `
                            <div class="grammar-example">
                                <div class="grammar-example-chinese">${ex.chinese}</div>
                                <div class="grammar-example-pinyin">${ex.pinyin}</div>
                                <div class="grammar-example-uzbek">${ex.uzbek}</div>
                            </div>
                        `).join('')}
                    </div>
                ` : ''}
            </div>
        `;
    } else {
        grammarNoteContainer.innerHTML = '<p class="learning-placeholder">No grammar note for this lesson.</p>';
    }

    renderSentenceBuilderGame(lessonObj);
}

function renderSentenceBuilderGame(lessonObj) {
    const box = document.getElementById('sentenceBuilderContainer');
    if (!box) return;

    // Build a clean 4-tile sentence puzzle from currentWords or lesson example
    const validWords = currentWords.filter(w => w && w.id !== 0);
    const wA = validWords[0] || { hanzi: '我', pinyin: 'wǒ', uzbek: 'Men' };
    const wB = validWords[1] || { hanzi: '喜欢', pinyin: 'xǐhuan', uzbek: 'yoqtirmoq' };
    const tokens = [
        { hanzi: '我', pinyin: 'wǒ' },
        { hanzi: '今天', pinyin: 'jīntiān' },
        { hanzi: '学习', pinyin: 'xuéxí' },
        { hanzi: wA.hanzi, pinyin: wA.pinyin }
    ];
    const targetMeaning = `Men bugun "${wA.uzbek}" (${wA.hanzi}) so‘zini o‘rganaman.`;
    const fullSentence = tokens.map(t => t.hanzi).join('');

    // Shuffle indices
    const shuffled = tokens.map((t, idx) => ({ ...t, idx }));
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    if (shuffled.every((item, i) => item.idx === i) && shuffled.length > 1) {
        [shuffled[0], shuffled[1]] = [shuffled[1], shuffled[0]];
    }

    let picked = [];
    let solved = false;

    function renderState() {
        box.innerHTML = `
            <p class="builder-prompt">Quyidagi ma’noga mos xitoycha gapni bo‘laklarni bosib tuzing:</p>
            <div class="builder-target-uzbek">“${targetMeaning}”</div>
            <div class="builder-answer-slot" id="builderAnswerSlot">
                ${picked.length === 0
                    ? '<span class="builder-slot-placeholder">So‘z bo‘laklarini ketma-ket bosing...</span>'
                    : picked.map((p, pIdx) => `
                        <button type="button" class="builder-tile is-picked" data-picked-idx="${pIdx}">
                            <span class="bt-hanzi">${p.hanzi}</span>
                            <span class="bt-pinyin">${p.pinyin}</span>
                        </button>
                    `).join('')}
            </div>
            <div class="builder-pool" id="builderPool">
                ${shuffled.map((item, sIdx) => {
                    const used = picked.some(p => p.sIdx === sIdx);
                    return `
                        <button type="button" class="builder-tile ${used ? 'is-used' : ''}" data-pool-idx="${sIdx}" ${used || solved ? 'disabled' : ''}>
                            <span class="bt-hanzi">${item.hanzi}</span>
                            <span class="bt-pinyin">${item.pinyin}</span>
                        </button>
                    `;
                }).join('')}
            </div>
            <div class="builder-footer">
                <span class="builder-feedback" id="builderFeedback"></span>
                <div class="builder-actions">
                    <button type="button" class="secondary-btn builder-reset-btn" id="builderResetBtn">🔄 Qayta</button>
                    <button type="button" class="secondary-btn builder-listen-btn" id="builderListenBtn">🔊 Eshitish</button>
                </div>
            </div>
        `;

        box.querySelectorAll('[data-pool-idx]').forEach(btn => {
            btn.addEventListener('click', () => {
                if (solved) return;
                const sIdx = parseInt(btn.dataset.poolIdx, 10);
                const item = shuffled[sIdx];
                speakChineseText(item.hanzi);
                picked.push({ ...item, sIdx });
                renderState();
                checkBuilderCompletion();
            });
        });

        box.querySelectorAll('[data-picked-idx]').forEach(btn => {
            btn.addEventListener('click', () => {
                if (solved) return;
                const pIdx = parseInt(btn.dataset.pickedIdx, 10);
                picked.splice(pIdx, 1);
                renderState();
            });
        });

        const resetBtn = box.querySelector('#builderResetBtn');
        if (resetBtn) {
            resetBtn.addEventListener('click', () => {
                picked = [];
                solved = false;
                renderState();
            });
        }

        const listenBtn = box.querySelector('#builderListenBtn');
        if (listenBtn) {
            listenBtn.addEventListener('click', () => speakChineseText(fullSentence));
        }
    }

    function checkBuilderCompletion() {
        const fb = box.querySelector('#builderFeedback');
        if (picked.length < tokens.length) return;
        const userStr = picked.map(p => p.hanzi).join('');
        if (userStr === fullSentence) {
            solved = true;
            if (fb) {
                fb.textContent = '🎉 Barakalla! Gap to‘g‘ri tuzildi (+15 XP)';
                fb.className = 'builder-feedback is-correct';
            }
            addXP(15);
            speakChineseText(fullSentence);
        } else {
            if (fb) {
                fb.textContent = '❌ Tartib biroz boshqacha. Ustiga bosib o‘zgartirib ko‘ring!';
                fb.className = 'builder-feedback is-wrong';
            }
        }
    }

    renderState();
}

function showLeaderboard() {
    populateLeaderboard();
}

function hideLeaderboardModal() {
    leaderboardModal.classList.add('hidden');
}

function populateLeaderboard() {
    const profileData = JSON.parse(localStorage.getItem('profileData')) || {
        username: 'Chinese Learner'
    };
    const bots = [
        { avatar: '🐼', name: 'PandaMaster_99', xp: 980 },
        { avatar: '🐉', name: 'LiWei_HSK', xp: 860 },
        { avatar: '🎓', name: 'MandarinMaster', xp: 740 },
        { avatar: '✍️', name: 'PinyinPro', xp: 625 },
        { avatar: '🏮', name: 'DragonLearner', xp: 510 },
        { avatar: '📚', name: 'WordWise', xp: 455 },
        { avatar: '🍵', name: 'TeaAndTones', xp: 390 },
        { avatar: '🖌️', name: 'CharacterChamp', xp: 320 },
        { avatar: '🌟', name: 'DailyDiligence', xp: 245 },
        { avatar: '你好', name: 'HelloBot', xp: 180 }
    ];
    const entries = [...bots, { avatar: profileData.avatar || '👤', name: profileData.username, xp: streakData.xp, currentUser: true }]
        .sort((a, b) => b.xp - a.xp);

    leaderboardList.replaceChildren(...entries.map((entry, index) => {
        const row = document.createElement('div');
        row.className = entry.currentUser ? 'leaderboard-entry current-user' : 'leaderboard-entry';
        const rank = document.createElement('span');
        rank.className = 'leaderboard-rank';
        rank.textContent = index + 1;
        const avatar = document.createElement('span');
        avatar.className = 'leaderboard-avatar';
        avatar.setAttribute('aria-hidden', 'true');
        avatar.textContent = entry.avatar;
        const name = document.createElement('span');
        name.className = 'leaderboard-name';
        name.textContent = entry.name;
        const xp = document.createElement('span');
        xp.className = 'leaderboard-xp';
        xp.textContent = `${entry.xp} XP`;
        row.append(rank, avatar, name, xp);
        return row;
    }));
}

// View navigation
function showView(viewToShow) {
    if (canvasReturnToLesson && viewToShow !== lesson) restoreCanvasViewToStandalone();
    document.querySelectorAll('.view').forEach(view => view.classList.remove('active'));
    viewToShow.classList.add('active');
}

function showDashboard() {
    applyHskLevelTheme(currentHSK);
    updateDashboardBentoUI();
    showView(dashboard);
}

function matchesHskAndTrack(word, hskLevel, dataTrack) {
    if (word.hsk !== hskLevel) return false;
    if (hskLevel === 1) return word.track === dataTrack;
    return true;
}

function showLessonsView() {
    applyHskLevelTheme(currentHSK);
    const hskNames = {
        1: "HSK 1 · Foundations",
        2: "HSK 2 · New HSK 3.0",
        3: "HSK 3 · New HSK 3.0",
        4: "HSK 4 · New HSK 3.0",
        5: "HSK 5 · New HSK 3.0"
    };
    lessonsTitle.textContent = hskNames[currentHSK] || `HSK ${currentHSK} Lessons`;
    // Reset filter and search when entering lessons view
    currentLessonTrack = currentHSK === 1 ? 'classic' : 'new';
    searchQuery = '';
    searchInput.value = '';
    searchClear.classList.remove('visible');
    const filtersBox = document.querySelector('#lessons .hsk-filters');
    if (filtersBox) {
        filtersBox.hidden = (currentHSK !== 1);
        filtersBox.style.display = currentHSK === 1 ? '' : 'none';
    }
    hskFilterBtns.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.track === currentLessonTrack);
    });
    generateLessonsGrid();
    showView(lessons);
}

function showLessonView(lessonNumber) {
    isCustomReviewDeck = false;
    currentLesson = lessonNumber;
    const selectedTrack = lessonTracks[currentLessonTrack] || lessonTracks.classic;
    currentWords = vocabularyData.filter(word => 
        matchesHskAndTrack(word, currentHSK, selectedTrack.dataTrack) && word.lesson === lessonNumber
    );
    if (currentWords.length === 0) {
        lessonTitle.textContent = `Lesson ${lessonNumber} - No words available`;
        currentWords = [{ id: 0, hsk: currentHSK, track: selectedTrack.dataTrack, lesson: lessonNumber, hanzi: "暂无", pinyin: "zàn wú", uzbek: "Hozircha yo'q" }];
    } else {
        lessonTitle.textContent = `HSK ${currentHSK} · Lesson ${lessonNumber} (${currentWords.length} so‘z)`;
    }
    
    flashcardIndex = 0;
    quizIndex = 0;
    quizScore = 0;
    quizAnswered = false;
    
    updateFlashcard();
    updateQuiz();
    showView(lesson);
    const progress = getOrCreateLessonFlowRecord(currentLessonTrack, currentHSK, currentLesson);
    const nextStep = getNextLessonFlowStep(progress);
    if (nextStep && nextStep.id === 'writing') {
        prepareLessonWritingCanvas();
        switchMode('writing');
    } else {
        const nextMode = nextStep && nextStep.id === 'flashcards' ? 'flashcard' : nextStep && nextStep.id;
        switchMode(nextMode || 'flashcard');
    }
    updateLessonFlowUI();
}

function startSmartCustomDeck(type) {
    const sourceIds = type === 'mistakes' ? mistakeWords : bookmarkedWords;
    let deckWords = vocabularyData.filter(w => sourceIds.includes(w.id));
    if (deckWords.length === 0) {
        showToast(type === 'mistakes'
            ? '✨ Hozircha xato qilingan so‘zlar yo‘q! Quiz yechib ko‘ring.'
            : '⭐ Hozircha saqlangan so‘zlar yo‘q! Kartochkalarda "⭐ Saqlash" ni bosing.');
        return;
    }
    isCustomReviewDeck = true;
    currentWords = deckWords.slice(0, 20);
    lessonTitle.textContent = type === 'mistakes'
        ? `🧠 Xatolar ustida ishlash (${currentWords.length} so‘z)`
        : `⭐ Saqlangan so‘zlar (${currentWords.length} so‘z)`;
    flashcardIndex = 0;
    quizIndex = 0;
    quizScore = 0;
    quizAnswered = false;
    updateFlashcard();
    updateQuiz();
    showView(lesson);
    switchMode('flashcard');
}

// Lessons header: static kicker element + JS-owned progress line (additive only)
function updateLessonsHeader() {
    const kicker = document.getElementById('lessonsKicker');
    const progress = document.getElementById('lessonsProgress');
    const selectedTrack = lessonTracks[currentLessonTrack] || lessonTracks.classic;
    const trackLabel = (currentHSK >= 2 || currentLessonTrack === 'new') ? 'New HSK 3.0 yangi kitob darslari' : 'Classic HSK 1 yo‘nalishi';
    const trackLessons = vocabularyData.filter(word =>
        matchesHskAndTrack(word, currentHSK, selectedTrack.dataTrack)
    );
    const lessonNums = [...new Set(trackLessons.map(word => word.lesson))].sort((a, b) => a - b);
    const completed = lessonNums.filter(num => isLessonComplete(num, selectedTrack.dataTrack)).length;
    if (kicker) kicker.textContent = `HSK ${currentHSK} · ${trackLabel}`;
    if (progress) progress.textContent = `${completed} of ${lessonNums.length} lessons complete`;
}

function loadLessonFlowProgress() {
    try {
        const saved = JSON.parse(localStorage.getItem(LESSON_FLOW_STORAGE_KEY));
        if (saved && saved.version === 1 && saved.lessons && typeof saved.lessons === 'object') return saved;
    } catch (error) {
        console.warn('Could not load lesson flow progress:', error);
    }
    return { version: 1, lessons: {} };
}

function lessonFlowKey(track, hskLevel, lessonNumber) {
    return `${track}:${hskLevel}:${lessonNumber}`;
}

function getLessonFlowRecord(track, hskLevel, lessonNumber) {
    return lessonFlowProgress.lessons[lessonFlowKey(track, hskLevel, lessonNumber)] || null;
}

function saveLessonFlowProgress() {
    try {
        localStorage.setItem(LESSON_FLOW_STORAGE_KEY, JSON.stringify(lessonFlowProgress));
    } catch (error) {
        console.warn('Could not save lesson flow progress:', error);
    }
    notifyLessonFlowChanged();
}

function getOrCreateLessonFlowRecord(track, hskLevel, lessonNumber) {
    const normTrack = hskLevel === 1 ? track : 'classic';
    const key = lessonFlowKey(normTrack, hskLevel, lessonNumber);
    let progress = lessonFlowProgress.lessons[key];
    if (progress) return progress;

    const words = vocabularyData.filter(word => matchesHskAndTrack(word, hskLevel, normTrack) && word.lesson === lessonNumber);
    const legacyComplete = words.length > 0 && words.every(word => learnedWords.includes(word.id));
    progress = {
        track,
        hskLevel,
        lessonNumber,
        completedSteps: legacyComplete ? lessonFlowSteps.filter(step => step.id !== 'complete').map(step => step.id) : [],
        flashcardWordIds: legacyComplete ? words.map(word => word.id) : [],
        writingWordIds: legacyComplete ? words.map(word => word.id) : [],
        completed: legacyComplete,
        xpAwarded: legacyComplete,
        updatedAt: new Date().toISOString()
    };
    lessonFlowProgress.lessons[key] = progress;
    saveLessonFlowProgress();
    return progress;
}

function getNextLessonFlowStep(progress) {
    return lessonFlowSteps.find(step => step.id !== 'complete' && !progress.completedSteps.includes(step.id)) || null;
}

function getActiveVisibleStepId() {
    if (document.getElementById('learningMode')?.classList.contains('active')) return 'learning';
    if (document.getElementById('flashcardMode')?.classList.contains('active')) return 'flashcards';
    if (document.getElementById('quizMode')?.classList.contains('active')) return 'quiz';
    if (lessonWritingMode?.classList.contains('active')) return 'writing';
    if (document.getElementById('completeMode')?.classList.contains('active')) return 'complete';
    return null;
}

function updateLessonFlowUI() {
    if (!lessonFlowStepsElement) return;
    const progress = getOrCreateLessonFlowRecord(currentLessonTrack, currentHSK, currentLesson);
    const nextStep = getNextLessonFlowStep(progress);
    const visibleStep = getActiveVisibleStepId();
    const activeStep = visibleStep || (nextStep ? nextStep.id : 'complete');
    const lessonWordIds = [...new Set(currentWords.filter(word => word.id !== 0).map(word => word.id))];
    const viewedFlashcardIds = new Set(progress.flashcardWordIds.filter(id => lessonWordIds.includes(id)));

    const shortLabels = {
        learning: 'Learn',
        flashcards: 'Cards',
        quiz: 'Quiz',
        writing: 'Write',
        complete: 'Done'
    };

    lessonFlowStepsElement.innerHTML = lessonFlowSteps.map((step, index) => {
        const done = step.id === 'complete' ? progress.completed : progress.completedSteps.includes(step.id);
        const current = step.id === activeStep;
        const stateClass = (current ? ' is-current' : '') + (done ? ' is-complete' : '');
        const badgeText = done && !current ? '✓' : (index + 1);
        return `<li class="lesson-flow-step${stateClass}" data-step-id="${step.id}"${current ? ' aria-current="step"' : ''}><span class="lesson-flow-number">${badgeText}</span><span>${shortLabels[step.id] || step.label}</span></li>`;
    }).join('');

    const stepOrder = ['learning', 'flashcards', 'quiz', 'writing', 'complete'];
    const activeIdx = Math.max(0, stepOrder.indexOf(activeStep));
    const fillBar = document.getElementById('lessonOverallFill');
    if (fillBar) {
        const pct = progress.completed || activeStep === 'complete'
            ? 100
            : Math.min(100, Math.round(((activeIdx + 1) / stepOrder.length) * 100));
        fillBar.style.width = `${pct}%`;
    }

    if (activeStep === 'complete' || progress.completed) {
        lessonFlowStatus.textContent = '🎉 5/5 · Dars yakunlandi! Keyingi dars ochildi.';
        lessonFlowContinue.textContent = 'Complete';
        lessonFlowContinue.disabled = true;
    } else if (activeStep === 'learning') {
        lessonFlowStatus.textContent = `1/5 · So‘zlar va misollar bilan tanishing (${currentWords.length} ta so‘z)`;
        lessonFlowContinue.textContent = 'Flashcards →';
        lessonFlowContinue.disabled = false;
    } else if (activeStep === 'flashcards') {
        lessonFlowStatus.textContent = `2/5 · Kartochka ${flashcardIndex + 1} / ${currentWords.length} (oxirgisidan so‘ng avtomatik Quiz)`;
        lessonFlowContinue.textContent = 'Quiz →';
        lessonFlowContinue.disabled = false;
    } else if (activeStep === 'quiz') {
        lessonFlowStatus.textContent = `3/5 · Quiz: ${quizIndex + 1} / ${currentWords.length} savol (javobdan so‘ng avtomatik o‘tadi)`;
        lessonFlowContinue.textContent = 'Writing →';
        lessonFlowContinue.disabled = false;
    } else if (activeStep === 'writing') {
        lessonFlowStatus.textContent = `4/5 · Yozish: ${progress.writingWordIds.length} / ${lessonWordIds.length} so‘z (tugagach avtomatik yakunlanadi)`;
        lessonFlowContinue.textContent = 'Finish →';
        lessonFlowContinue.disabled = false;
    }
}

function completeLessonFlowStep(stepId) {
    const progress = getOrCreateLessonFlowRecord(currentLessonTrack, currentHSK, currentLesson);
    if (!progress.completedSteps.includes(stepId)) {
        progress.completedSteps.push(stepId);
        progress.updatedAt = new Date().toISOString();
        saveLessonFlowProgress();
    }
    updateLessonFlowUI();
}

function continueLessonFlow() {
    const activeStep = getActiveVisibleStepId();
    if (activeStep === 'learning') {
        completeLessonFlowStep('learning');
        switchMode('flashcard');
        return;
    }
    if (activeStep === 'flashcards') {
        completeLessonFlowStep('flashcards');
        switchMode('quiz');
        return;
    }
    if (activeStep === 'quiz') {
        completeLessonFlowStep('quiz');
        prepareLessonWritingCanvas();
        switchMode('writing');
        return;
    }
    if (activeStep === 'writing') {
        completeLessonFlowStep('writing');
        completeCurrentLesson();
        switchMode('complete');
        return;
    }
    const progress = getOrCreateLessonFlowRecord(currentLessonTrack, currentHSK, currentLesson);
    const nextStep = getNextLessonFlowStep(progress);
    if (!nextStep) {
        completeCurrentLesson();
        switchMode('complete');
        return;
    }
    if (nextStep.id === 'writing') {
        prepareLessonWritingCanvas();
        switchMode('writing');
        return;
    }
    switchMode(nextStep.id === 'flashcards' ? 'flashcard' : nextStep.id);
}

function prepareLessonWritingCanvas() {
    canvasHSK = currentHSK;
    canvasTrack = currentHSK === 1 ? currentLessonTrack : 'classic';
    canvasLesson = currentLesson;
    const words = vocabularyData.filter(word => matchesHskAndTrack(word, canvasHSK, canvasTrack) && word.lesson === canvasLesson);
    const progress = getOrCreateLessonFlowRecord(canvasTrack, canvasHSK, canvasLesson);
    const nextWordIndex = words.findIndex(word => !progress.writingWordIds.includes(word.id));
    canvasWordIndex = nextWordIndex === -1 ? 0 : nextWordIndex;
    canvasCharacterIndex = 0;
}

function completeCurrentLesson() {
    const progress = getOrCreateLessonFlowRecord(currentLessonTrack, currentHSK, currentLesson);
    const requiredSteps = lessonFlowSteps.filter(step => step.id !== 'complete').map(step => step.id);
    requiredSteps.forEach(stepId => {
        if (!progress.completedSteps.includes(stepId)) {
            progress.completedSteps.push(stepId);
        }
    });

    progress.completed = true;
    const shouldAwardXP = !progress.xpAwarded;
    progress.xpAwarded = true;
    progress.updatedAt = new Date().toISOString();
    saveLessonFlowProgress();
    if (shouldAwardXP) addXP(LESSON_COMPLETION_XP);
    updateLessonFlowUI();
    updateDashboardBentoUI();
    if (lessons.classList.contains('active')) generateLessonsGrid();
    showToast(`🎉 Lesson ${currentLesson} yakunlandi! +${shouldAwardXP ? LESSON_COMPLETION_XP : 0} XP`);
}

function registerFlashcardView() {
    if (!currentWords.length) return;
    const progress = getOrCreateLessonFlowRecord(currentLessonTrack, currentHSK, currentLesson);
    const lessonWordIds = [...new Set(currentWords.filter(word => word.id !== 0).map(word => word.id))];
    const viewedIds = new Set(progress.flashcardWordIds.filter(id => lessonWordIds.includes(id)));
    const currentWord = currentWords[flashcardIndex];
    if (currentWord && lessonWordIds.includes(currentWord.id)) viewedIds.add(currentWord.id);

    const viewedIdsChanged = viewedIds.size !== progress.flashcardWordIds.length ||
        progress.flashcardWordIds.some(id => !viewedIds.has(id));
    if (viewedIdsChanged) {
        progress.flashcardWordIds = [...viewedIds];
        progress.updatedAt = new Date().toISOString();
        saveLessonFlowProgress();
    }

    if (lessonWordIds.length > 0 && lessonWordIds.every(id => viewedIds.has(id))) {
        completeLessonFlowStep('flashcards');
    } else {
        updateLessonFlowUI();
    }
}

function recordCanvasWritingCompletion(forceWholeWord = false) {
    if (!canvasReturnToLesson) return false;
    if (!forceWholeWord && canvasCharacterIndex !== currentCanvasCharacters.length - 1) return false;
    const words = vocabularyData.filter(word => matchesHskAndTrack(word, canvasHSK, canvasTrack) && word.lesson === canvasLesson);
    const word = words[canvasWordIndex];
    if (!word || !words.length) return false;

    if (!learnedWords.includes(word.id)) {
        learnedWords.push(word.id);
        localStorage.setItem('learnedWords', JSON.stringify(learnedWords));
    }

    const progress = getOrCreateLessonFlowRecord(canvasTrack, canvasHSK, canvasLesson);
    if (!progress.writingWordIds.includes(word.id)) {
        progress.writingWordIds.push(word.id);
        progress.updatedAt = new Date().toISOString();
    }
    if (progress.writingWordIds.length >= words.length) {
        if (!progress.completedSteps.includes('writing')) progress.completedSteps.push('writing');
        saveLessonFlowProgress();
        updateLessonFlowUI();
        return true;
    } else {
        saveLessonFlowProgress();
        updateLessonFlowUI();
    }
    return progress.completedSteps.includes('writing');
}

// Legacy learned-word completion is retained as a one-way migration fallback.
function isLessonComplete(lessonNum, dataTrack) {
    const normTrack = currentHSK === 1 ? dataTrack : 'classic';
    const progress = getLessonFlowRecord(normTrack, currentHSK, lessonNum);
    if (progress) return Boolean(progress.completed);
    const ids = vocabularyData
        .filter(word => matchesHskAndTrack(word, currentHSK, normTrack) && word.lesson === lessonNum)
        .map(word => word.id);
    return ids.length > 0 && ids.every(id => learnedWords.includes(id));
}

// Generate lessons grid
function generateLessonsGrid() {
    lessonsGrid.innerHTML = '';
    
    const selectedTrack = lessonTracks[currentLessonTrack] || lessonTracks.classic;

    // Get words for the selected HSK version and curriculum track.
    let filteredWords = vocabularyData.filter(word =>
        matchesHskAndTrack(word, currentHSK, selectedTrack.dataTrack)
    );
    
    // Apply search filter
    if (searchQuery) {
        filteredWords = filteredWords.filter(word => 
            word.hanzi.toLowerCase().includes(searchQuery) ||
            word.pinyin.toLowerCase().includes(searchQuery) ||
            word.uzbek.toLowerCase().includes(searchQuery)
        );
    }
    
    // Get unique lessons from filtered words (each track numbers its own lessons 1-15)
    const lessons = [...new Set(filteredWords.map(word => word.lesson))].sort((a, b) => a - b);
    
    // If no lessons found, show message
    if (lessons.length === 0) {
        lessonsGrid.innerHTML = '<p class="no-results">No lessons found matching your criteria.</p>';
        return;
    }
    
    lessons.forEach(lessonNum => {
        const lessonWords = vocabularyData.filter(word =>
            matchesHskAndTrack(word, currentHSK, selectedTrack.dataTrack) && word.lesson === lessonNum
        );
        const wordCount = lessonWords.length;
        const lessonBtn = document.createElement('button');
        const done = isLessonComplete(lessonNum, selectedTrack.dataTrack);
        const firstOpen = lessons.find(n => !isLessonComplete(n, selectedTrack.dataTrack));
        const isCurrent = lessonNum === firstOpen;
        lessonBtn.className = 'lesson-btn' + (done ? ' node-completed' : (isCurrent ? ' node-current' : ' node-locked'));
        if (done) {
            lessonBtn.setAttribute('aria-label', `Lesson ${lessonNum} completed, ${wordCount} words`);
        } else if (isCurrent) {
            lessonBtn.setAttribute('aria-label', `Lesson ${lessonNum} current, ${wordCount} words`);
        } else {
            lessonBtn.setAttribute('aria-label', `Lesson ${lessonNum} locked, ${wordCount} words`);
        }
        const lessonLabel = document.createElement('span');
        lessonLabel.className = 'lesson-btn-title';
        lessonLabel.textContent = `Lesson ${lessonNum}`;
        const wordCountLabel = document.createElement('span');
        wordCountLabel.className = 'lesson-word-count';
        const sampleHanzi = lessonWords.slice(0, 2).map(w => w.hanzi).join(' · ');
        wordCountLabel.textContent = sampleHanzi ? `${wordCount} so‘z · ${sampleHanzi}` : `${wordCount} words`;
        lessonBtn.appendChild(lessonLabel);
        lessonBtn.appendChild(wordCountLabel);
        lessonBtn.addEventListener('click', () => showLessonView(lessonNum));
        lessonsGrid.appendChild(lessonBtn);
    });
    updateLessonsHeader();
}

// Filter and search lessons
function filterAndSearchLessons() {
    generateLessonsGrid();
}

// Flashcard functions
function updateFlashcard() {
    if (currentWords.length === 0) return;
    
    const word = currentWords[flashcardIndex];
    flashcardHanzi.textContent = word.hanzi;
    flashcardPinyin.textContent = word.pinyin;
    flashcardUzbek.textContent = word.uzbek;
    currentCard.textContent = flashcardIndex + 1;
    totalCards.textContent = currentWords.length;
    const wordProgressEl = document.getElementById('wordProgress');
    if (wordProgressEl) {
        wordProgressEl.textContent = `Word ${flashcardIndex + 1} of ${currentWords.length}`;
    }
    
    // Reset flip state
    flashcard.classList.remove('flipped');
    
    // Clear stroke order
    strokeOrderTarget.innerHTML = '';
    if (hanziWriter) {
        hanziWriter = null;
    }
    
    // Update learned & bookmark button states
    updateLearnedButton();
    updateBookmarkButton();
    updateLearnedCount();

    const speakBanner = document.getElementById('speakFeedbackBanner');
    if (speakBanner) speakBanner.hidden = true;

    const nextCardLabel = document.getElementById('nextCardLabel');
    if (nextCardLabel) {
        nextCardLabel.textContent = (flashcardIndex >= currentWords.length - 1) ? 'Quiz →' : 'Next';
    }
}

// Web Speech API for Chinese pronunciation
function playPronunciation() {
    if (currentWords.length === 0) return;
    
    const word = currentWords[flashcardIndex];
    
    if (!('speechSynthesis' in window)) {
        console.error('Text-to-speech not supported in this browser.');
        alert('Text-to-speech is not supported in your browser.');
        return;
    }
    
    // Cancel any ongoing speech immediately
    window.speechSynthesis.cancel();
    
    // For iOS/Android mobile compatibility - resume if paused
    if (window.speechSynthesis.paused) {
        window.speechSynthesis.resume();
    }
    
    try {
        const utterance = new SpeechSynthesisUtterance(word.hanzi);
        utterance.lang = 'zh-CN';
        utterance.rate = getSpeechRate();
        utterance.pitch = 1;
        utterance.volume = 1;
        
        // Get available voices immediately
        const voices = window.speechSynthesis.getVoices();
        
        // Try to find Chinese voice with fallback hierarchy
        let chineseVoice = voices.find(voice => voice.lang === 'zh-CN');
        if (!chineseVoice) {
            chineseVoice = voices.find(voice => voice.lang === 'zh-TW');
        }
        if (!chineseVoice) {
            chineseVoice = voices.find(voice => voice.lang.startsWith('zh'));
        }
        if (!chineseVoice) {
            // Fallback: try any Asian language voice
            chineseVoice = voices.find(voice => 
                voice.lang.startsWith('ja') || voice.lang.startsWith('ko')
            );
        }
        
        // Set voice if found
        if (chineseVoice) {
            utterance.voice = chineseVoice;
            utterance.lang = chineseVoice.lang; // Use the voice's actual language
            console.log('Using voice:', chineseVoice.name, chineseVoice.lang);
        } else {
            console.warn('No Chinese voice available, using default with zh-CN lang');
            // Show user-friendly message on mobile
            const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
            if (isMobile) {
                console.warn('Chinese voice pack may not be installed on this device');
            }
        }
        
        // Handle errors with user feedback
        utterance.onerror = (event) => {
            console.error('Speech synthesis error:', event.error);
            if (event.error !== 'canceled' && event.error !== 'interrupted') {
                const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
                if (isMobile) {
                    console.warn('Audio playback failed. Chinese voice pack may not be installed.');
                }
            }
        };
        
        utterance.onend = () => {
            console.log('Speech synthesis completed');
            if (window.speechSynthesis.paused) {
                window.speechSynthesis.resume();
            }
        };
        
        // Speak immediately (no delay for mobile compatibility)
        window.speechSynthesis.speak(utterance);
        
        // iOS-specific workaround to keep speech synthesis alive
        const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
        if (iOS) {
            const interval = setInterval(() => {
                if (!window.speechSynthesis.speaking) {
                    clearInterval(interval);
                } else {
                    window.speechSynthesis.pause();
                    window.speechSynthesis.resume();
                }
            }, 10000);
        }
    } catch (error) {
        console.error('Error in speech synthesis:', error);
        alert('Unable to play audio. Please check your device settings.');
    }
}

// HanziWriter stroke order animation
function showStrokeOrder() {
    if (currentWords.length === 0) return;
    
    const word = currentWords[flashcardIndex];
    const hanzi = word.hanzi;
    
    // Flip card to the back so the user sees the stroke order animation
    if (flashcard && !flashcard.classList.contains('flipped')) {
        flashcard.classList.add('flipped');
    }

    // Clear previous animation
    strokeOrderTarget.innerHTML = '';
    
    // For multi-character words, show the first character
    const targetChar = hanzi.charAt(0);
    const strokeBoxSize = window.innerWidth <= 768 ? 110 : 140;
    
    try {
        hanziWriter = HanziWriter.create('strokeOrderTarget', targetChar, {
            width: strokeBoxSize,
            height: strokeBoxSize,
            padding: 6,
            strokeAnimationSpeed: 1,
            strokeWidth: 14,
            outlineWidth: 2,
            delayBetweenStrokes: 200,
            showOutline: true,
            strokeColor: '#10B981',
            outlineColor: '#ddd'
        });
        
        hanziWriter.animateCharacter();
    } catch (error) {
        console.error('Error creating HanziWriter:', error);
        strokeOrderTarget.innerHTML = '<p style="font-size: 0.8rem; color: #666;">Stroke data not available</p>';
    }
}

// Progress tracking functions
function toggleLearned() {
    if (currentWords.length === 0) return;
    
    const word = currentWords[flashcardIndex];
    const wordId = word.id;
    
    const index = learnedWords.indexOf(wordId);
    if (index > -1) {
        learnedWords.splice(index, 1);
    } else {
        learnedWords.push(wordId);
        addXP(10); // Award 10 XP for learning a word
    }
    
    // Save to localStorage
    localStorage.setItem('learnedWords', JSON.stringify(learnedWords));
    
    // Phase 2A cloud sync: mirror this single word's new state (guarded
    // no-op for guests/offline). Cloud failure never undoes the local action.
    notifyWordToggled(wordId);
    
    // Update UI
    updateLearnedButton();
    updateLearnedCount();
    updateTotalLearned();
    if (typeof updateLessonsHeader === 'function') updateLessonsHeader();
}

function updateLearnedButton() {
    if (currentWords.length === 0) return;
    
    const word = currentWords[flashcardIndex];
    const wordId = word.id;
    
    if (learnedWords.includes(wordId)) {
        markLearned.classList.add('learned');
        markLearned.textContent = '✓ Learned';
    } else {
        markLearned.classList.remove('learned');
        markLearned.textContent = '✓ Learned';
    }
}

function toggleBookmarkCurrentWord() {
    if (currentWords.length === 0) return;
    const word = currentWords[flashcardIndex];
    if (!word || !word.id) return;
    const idx = bookmarkedWords.indexOf(word.id);
    if (idx > -1) {
        bookmarkedWords.splice(idx, 1);
        showToast(`${word.hanzi} saqlanganlardan olindi`);
    } else {
        bookmarkedWords.push(word.id);
        showToast(`⭐ ${word.hanzi} (${word.uzbek}) saqlandi!`);
    }
    localStorage.setItem('bookmarkedWords', JSON.stringify(bookmarkedWords));
    updateBookmarkButton();
    updateDashboardBentoUI();
}

function updateBookmarkButton() {
    const btn = document.getElementById('bookmarkWordBtn');
    if (!btn || currentWords.length === 0) return;
    const word = currentWords[flashcardIndex];
    const isSaved = word && bookmarkedWords.includes(word.id);
    btn.classList.toggle('bookmarked', Boolean(isSaved));
    btn.textContent = isSaved ? '⭐ Saqlangan' : '☆ Saqlash';
}

function recordMistakeWord(wordId) {
    if (!wordId || wordId === 0) return;
    if (!mistakeWords.includes(wordId)) {
        mistakeWords.push(wordId);
        localStorage.setItem('mistakeWords', JSON.stringify(mistakeWords));
        updateDashboardBentoUI();
    }
}

function clearMistakeWordIfMastered(wordId) {
    if (!wordId) return;
    const idx = mistakeWords.indexOf(wordId);
    if (idx > -1 && isCustomReviewDeck) {
        mistakeWords.splice(idx, 1);
        localStorage.setItem('mistakeWords', JSON.stringify(mistakeWords));
        updateDashboardBentoUI();
    }
}

function startSpeechPronunciationCheck() {
    if (currentWords.length === 0) return;
    const word = currentWords[flashcardIndex];
    const speakBtn = document.getElementById('speakPracticeBtn');
    const speakLbl = document.getElementById('speakPracticeLabel');
    const banner = document.getElementById('speakFeedbackBanner');

    const SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRec) {
        // Fallback for browsers without SpeechRecognition: play audio & let user repeat
        playPronunciation();
        if (banner) {
            banner.hidden = false;
            banner.className = 'speak-feedback-banner is-listening';
            banner.textContent = `🔊 "${word.hanzi}" (${word.pinyin}) — ovoz chiqarib qaytarib ayting!`;
        }
        return;
    }

    if (activeSpeechRecognition) {
        try { activeSpeechRecognition.stop(); } catch (e) {}
        activeSpeechRecognition = null;
    }

    const rec = new SpeechRec();
    activeSpeechRecognition = rec;
    rec.lang = 'zh-CN';
    rec.interimResults = false;
    rec.maxAlternatives = 3;

    if (speakBtn) speakBtn.classList.add('is-recording');
    if (speakLbl) speakLbl.textContent = 'Tinglanmoqda...';
    if (banner) {
        banner.hidden = false;
        banner.className = 'speak-feedback-banner is-listening';
        banner.textContent = `🎙️ Mikrofonga "${word.hanzi}" (${word.pinyin}) deb ayting...`;
    }

    rec.onresult = (event) => {
        const transcripts = [];
        for (let i = 0; i < event.results[0].length; i++) {
            transcripts.push(event.results[0][i].transcript.trim());
        }
        const heard = transcripts[0] || '';
        const cleanTarget = word.hanzi.replace(/[^一-龥]/g, '');
        const matched = transcripts.some(t => t.includes(cleanTarget) || cleanTarget.includes(t.replace(/[^一-龥]/g, '')));

        if (matched) {
            if (banner) {
                banner.className = 'speak-feedback-banner is-correct';
                banner.textContent = `🎉 Ajoyib talaffuz! Eshitildi: "${heard}" (+15 XP)`;
            }
            addXP(15);
            playSuccessSound();
        } else {
            if (banner) {
                banner.className = 'speak-feedback-banner is-retry';
                banner.textContent = `🔄 Eshitildi: "${heard || '...'}". Asli: ${word.hanzi} (${word.pinyin})`;
            }
            speakChineseText(word.hanzi);
        }
    };

    rec.onerror = () => {
        if (banner) {
            banner.className = 'speak-feedback-banner is-retry';
            banner.textContent = `🔊 Mikrofon ruxsati topilmadi. Namunani eshitib takrorlang: ${word.hanzi} (${word.pinyin})`;
        }
        speakChineseText(word.hanzi);
    };

    rec.onend = () => {
        if (speakBtn) speakBtn.classList.remove('is-recording');
        if (speakLbl) speakLbl.textContent = 'Talaffuz';
        activeSpeechRecognition = null;
    };

    try {
        rec.start();
    } catch (e) {
        if (speakBtn) speakBtn.classList.remove('is-recording');
        if (speakLbl) speakLbl.textContent = 'Talaffuz';
    }
}

function updateLearnedCount() {
    const currentLessonLearned = currentWords.filter(word => 
        learnedWords.includes(word.id)
    ).length;
    
    learnedCount.textContent = currentLessonLearned;
}

// Streak tracking functions
function updateStreak() {
    const today = new Date().toDateString();
    const lastLogin = streakData.lastLoginDate;
    
    if (lastLogin === null) {
        // First time user
        streakData.streak = 1;
        streakData.lastLoginDate = today;
    } else if (lastLogin === today) {
        // Already logged in today, do nothing
    } else {
        const lastDate = new Date(lastLogin);
        const currentDate = new Date(today);
        const diffTime = currentDate - lastDate;
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        
        if (diffDays === 1) {
            // Consecutive day
            streakData.streak++;
        } else if (diffDays > 1) {
            // Streak broken
            streakData.streak = 1;
        }
        streakData.lastLoginDate = today;
    }
    
    localStorage.setItem('streakData', JSON.stringify(streakData));
    
    // Phase 2A cloud sync: mirror streak/XP state (guarded no-op for guests).
    notifyStatsChanged();
    
    profileStreak.textContent = streakData.streak;
    const headerStreak = document.getElementById('headerStreak');
    if (headerStreak) headerStreak.textContent = streakData.streak;
}

function updateTotalLearned() {
    streakData.totalLearned = learnedWords.length;
    localStorage.setItem('streakData', JSON.stringify(streakData));
    profileLearned.textContent = streakData.totalLearned;
    updateDashboardBentoUI();
}

function updateXP() {
    profileXP.textContent = streakData.xp;
    const headerXP = document.getElementById('headerXP');
    if (headerXP) headerXP.textContent = streakData.xp;
}

// ---------- Phase 2A cloud-sync bridge (additive, guarded) ----------
// cloud-sync.js (window.EasyCloud) mirrors already-persisted local state to
// Firestore and, on sign-in, merges cloud progress into localStorage. The
// runtime variables (learnedWords / streakData / dailyProgress) live in this
// script's scope, so the sync layer calls this bridge to apply merged values
// and refresh read-only UI. It never awards XP, never increments a streak,
// and never changes lesson/canvas/scoring behavior.
window.EasyCloudApplyMergedState = function (merged) {
    if (!merged || typeof merged !== 'object') return;
    if (Array.isArray(merged.learnedWords)) {
        learnedWords = merged.learnedWords
            .map(id => parseInt(id, 10))
            .filter(id => Number.isFinite(id));
    }
    if (merged.streakData && typeof merged.streakData === 'object') {
        streakData = Object.assign({}, streakData, merged.streakData);
    }
    if (merged.dailyProgress && typeof merged.dailyProgress === 'object') {
        dailyProgress = Object.assign({}, merged.dailyProgress);
    }
    if (merged.lessonFlowProgress && typeof merged.lessonFlowProgress === 'object' &&
        merged.lessonFlowProgress.version === 1 && merged.lessonFlowProgress.lessons &&
        typeof merged.lessonFlowProgress.lessons === 'object') {
        lessonFlowProgress = merged.lessonFlowProgress;
        try {
            localStorage.setItem(LESSON_FLOW_STORAGE_KEY, JSON.stringify(lessonFlowProgress));
        } catch (error) {
            console.warn('Could not save synced lesson flow progress:', error);
        }
    }
    // Read-only refresh only (updateStreak is intentionally NOT called).
    updateLearnedButton();
    updateLearnedCount();
    updateTotalLearned();   // re-mirrors streakData.totalLearned = learnedWords.length
    updateXP();
    updateDailyQuests();
    updateAchievements();
    updateProfileStats();
    updateWeeklyStreakCalendar();
    updateHSKProgress();
    renderLearnedWordsDrawer();
    if (lesson.classList.contains('active')) updateLessonFlowUI();
    if (lessons.classList.contains('active')) generateLessonsGrid();
};

// Guarded cloud-sync hooks. No-ops for guests, offline, or when the sync
// layer is unavailable; they never block or break the local action.
function notifyWordToggled(wordId) {
    try {
        if (window.EasyCloud && typeof window.EasyCloud.syncLearnedWord === 'function') {
            window.EasyCloud.syncLearnedWord(wordId, learnedWords.includes(wordId));
        }
    } catch (err) { /* cloud sync must never break the app */ }
}

function notifyStatsChanged() {
    try {
        if (window.EasyCloud && typeof window.EasyCloud.pushStats === 'function') {
            window.EasyCloud.pushStats();
        }
    } catch (err) { /* cloud sync must never break the app */ }
}

function notifyLessonFlowChanged() {
    try {
        if (window.EasyCloud && typeof window.EasyCloud.pushStats === 'function') {
            window.EasyCloud.pushStats();
        }
    } catch (err) { /* cloud sync must never break the app */ }
}

function addXP(amount) {
    streakData.xp += amount;
    dailyProgress.xp += amount;
    localStorage.setItem('streakData', JSON.stringify(streakData));
    localStorage.setItem('dailyProgress', JSON.stringify(dailyProgress));
    
    // Phase 2A cloud sync: mirror XP state (guarded no-op for guests).
    notifyStatsChanged();
    
    updateXP();
    updateDailyQuests();
    updateAchievements();
}

function updateDailyQuests() {
    if (!dailyQuests) return;

    const values = {
        traces: Math.min(dailyProgress.traces, 3),
        xp: Math.min(dailyProgress.xp, 50)
    };
    dailyQuests.querySelectorAll('.quest-item').forEach(quest => {
        const value = values[quest.dataset.quest];
        const target = quest.dataset.quest === 'traces' ? 3 : 50;
        quest.querySelector('.quest-progress').textContent = value;
        quest.querySelector('.quest-status').textContent = `${Math.round((value / target) * 100)}%`;
        // Feed the same percentage to the card's mini progress bar (display only).
        quest.style.setProperty('--quest-progress', `${Math.round((value / target) * 100)}%`);
        quest.classList.toggle('complete', value >= target);
    });
}

function handleNavigation(nav) {
    switch(nav) {
        case 'home':
            showDashboard();
            break;
        case 'practice':
            showPracticeView();
            break;
        case 'ai':
            showAiLaoshiView();
            break;
        case 'canvas':
            showCanvasView();
            break;
        case 'profile':
            showProfileView();
            break;
    }
}

let quizAutoAdvanceTimer = null;

function navigateFlashcard(direction) {
    // When on the last flashcard and pressing Next -> automatically advance to Stage 3 (Quiz)!
    if (direction === 1 && flashcardIndex >= currentWords.length - 1) {
        const progress = getOrCreateLessonFlowRecord(currentLessonTrack, currentHSK, currentLesson);
        const lessonWordIds = [...new Set(currentWords.filter(word => word.id !== 0).map(word => word.id))];
        progress.flashcardWordIds = lessonWordIds;
        completeLessonFlowStep('learning');
        completeLessonFlowStep('flashcards');
        showToast('2-bosqich tugadi! 3-bosqich: Quiz 🎯');
        switchMode('quiz');
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
    }

    flashcardIndex += direction;
    
    if (flashcardIndex < 0) {
        flashcardIndex = currentWords.length - 1;
    } else if (flashcardIndex >= currentWords.length) {
        flashcardIndex = 0;
    }
    
    updateFlashcard();
    if (document.getElementById('flashcardMode').classList.contains('active')) registerFlashcardView();
}

function shuffleFlashcards() {
    for (let i = currentWords.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [currentWords[i], currentWords[j]] = [currentWords[j], currentWords[i]];
    }
    flashcardIndex = 0;
    updateFlashcard();
    if (document.getElementById('flashcardMode').classList.contains('active')) registerFlashcardView();
}

// Quiz functions
function updateQuiz() {
    if (currentWords.length === 0) return;
    if (quizAutoAdvanceTimer) {
        clearTimeout(quizAutoAdvanceTimer);
        quizAutoAdvanceTimer = null;
    }
    
    quizAnswered = false;
    nextQuizQuestion.disabled = true;
    
    const word = currentWords[quizIndex];
    if (quizType === 'audio') {
        quizHanzi.innerHTML = `<button type="button" class="quiz-audio-hero-btn" id="quizAudioReplayBtn">🔊<span>Qayta eshitish</span></button>`;
        quizPrompt.textContent = 'So‘zni eshiting va to‘g‘ri ma’noni tanlang:';
        const replayBtn = document.getElementById('quizAudioReplayBtn');
        if (replayBtn) {
            replayBtn.addEventListener('click', () => speakChineseText(word.hanzi));
        }
        setTimeout(() => speakChineseText(word.hanzi), 120);
    } else {
        const question = quizType === 'meaning' ? word.hanzi : quizType === 'pinyin' ? word.uzbek : word.pinyin;
        quizHanzi.textContent = question;
        quizPrompt.textContent = quizType === 'meaning'
            ? 'Bu so‘zning ma’nosi nima?'
            : quizType === 'pinyin'
                ? 'To‘g‘ri Pinyin talaffuzini tanlang:'
                : 'To‘g‘ri Hanzi iyeroglifini tanlang:';
    }
    quizScoreElement.textContent = quizScore;
    currentQuestion.textContent = quizIndex + 1;
    totalQuestions.textContent = currentWords.length;
    
    // Generate options
    const options = generateQuizOptions(word);
    
    quizOptions.innerHTML = '';
    options.forEach((option) => {
        const optionBtn = document.createElement('button');
        optionBtn.className = 'quiz-option';
        if (quizType === 'audio') {
            optionBtn.textContent = `${option.hanzi} (${option.pinyin}) â€” ${option.uzbek}`;
        } else {
            optionBtn.textContent = quizType === 'meaning' ? option.uzbek : quizType === 'pinyin' ? option.pinyin : option.hanzi;
        }
        optionBtn.dataset.wordId = option.id;
        optionBtn.addEventListener('click', () => checkAnswer(optionBtn, option.id === word.id));
        quizOptions.appendChild(optionBtn);
    });
}

function generateQuizOptions(correctWord) {
    const options = [correctWord];
    
    // Prefer words from the same HSK level first
    let otherWords = vocabularyData.filter(w => w.id !== correctWord.id && w.hsk === correctWord.hsk && w.track === correctWord.track);
    if (otherWords.length < 3) {
        otherWords = vocabularyData.filter(w => w.id !== correctWord.id);
    }
    
    while (options.length < 4 && otherWords.length > 0) {
        const randomIndex = Math.floor(Math.random() * otherWords.length);
        const randomWord = otherWords.splice(randomIndex, 1)[0];
        options.push(randomWord);
    }
    
    // Shuffle options
    for (let i = options.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [options[i], options[j]] = [options[j], options[i]];
    }
    
    return options;
}

function checkAnswer(selectedBtn, isCorrect) {
    if (quizAnswered) return;
    
    quizAnswered = true;
    const correctWord = currentWords[quizIndex];
    
    if (isCorrect) {
        selectedBtn.classList.add('correct');
        quizScore++;
        quizScoreElement.textContent = quizScore;
        if (correctWord) clearMistakeWordIfMastered(correctWord.id);
    } else {
        selectedBtn.classList.add('incorrect');
        if (correctWord) recordMistakeWord(correctWord.id);
        const options = quizOptions.querySelectorAll('.quiz-option');
        options.forEach(option => {
            if (option.dataset.wordId === String(correctWord.id)) {
                option.classList.add('correct');
            }
        });
    }
    
    nextQuizQuestion.disabled = false;

    if (quizAutoAdvanceTimer) clearTimeout(quizAutoAdvanceTimer);
    quizAutoAdvanceTimer = setTimeout(() => {
        quizAutoAdvanceTimer = null;
        nextQuiz();
    }, 850);
}

function nextQuiz() {
    if (quizAutoAdvanceTimer) {
        clearTimeout(quizAutoAdvanceTimer);
        quizAutoAdvanceTimer = null;
    }
    quizIndex++;
    
    if (quizIndex >= currentWords.length) {
        const finalScore = quizScore;
        const passingScore = Math.ceil(currentWords.length * 0.7);
        quizIndex = 0;
        quizScore = 0;
        if (finalScore >= passingScore) {
            completeLessonFlowStep('learning');
            completeLessonFlowStep('flashcards');
            completeLessonFlowStep('quiz');
            showToast(`Quiz topshirildi (${finalScore}/${currentWords.length})! 4-bosqich: Writing ✍️`);
            prepareLessonWritingCanvas();
            switchMode('writing');
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return;
        } else {
            showToast(`Natija: ${finalScore}/${currentWords.length}. O‘tish uchun kamida ${passingScore} ta toping!`);
        }
    }
    
    updateQuiz();
    updateLessonFlowUI();
}

function speakChineseText(text) {
    if (!text || !('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'zh-CN';
    utterance.rate = getSpeechRate();
    const voices = window.speechSynthesis.getVoices();
    const zhVoice = voices.find(v => v.lang === 'zh-CN') || voices.find(v => v.lang.startsWith('zh'));
    if (zhVoice) utterance.voice = zhVoice;
    window.speechSynthesis.speak(utterance);
}

function renderLessonVocabPreview() {
    const container = document.getElementById('lessonVocabPreview');
    if (!container) return;
    container.innerHTML = currentWords.map((w, idx) => `
        <div class="vocab-preview-card">
            <div class="vocab-preview-left">
                <span class="vocab-preview-num">${idx + 1}</span>
                <div>
                    <div class="vocab-preview-hanzi">${w.hanzi} <span class="vocab-preview-pinyin">${w.pinyin}</span></div>
                    <div class="vocab-preview-uzbek">${w.uzbek}</div>
                </div>
            </div>
            <button type="button" class="vocab-preview-audio" data-speak="${w.hanzi}" aria-label="Tinglash ${w.hanzi}">🔊</button>
        </div>
    `).join('');
    container.querySelectorAll('.vocab-preview-audio').forEach(btn => {
        btn.addEventListener('click', () => speakChineseText(btn.dataset.speak));
    });
}

// Mode switching
function switchMode(mode) {
    if (quizAutoAdvanceTimer) {
        clearTimeout(quizAutoAdvanceTimer);
        quizAutoAdvanceTimer = null;
    }

    tabBtns.forEach(btn => btn.classList.remove('active'));
    const activeTab = document.querySelector(`.tab-btn[data-mode="${mode}"]`);
    if (activeTab) activeTab.classList.add('active');

    document.querySelectorAll('.mode-content').forEach(content => content.classList.remove('active'));
    const targetModeEl = document.getElementById(`${mode}Mode`);
    if (targetModeEl) targetModeEl.classList.add('active');

    if (mode === 'flashcard') {
        completeLessonFlowStep('learning');
        registerFlashcardView();
    }

    if (mode === 'quiz') {
        completeLessonFlowStep('learning');
        quizIndex = 0;
        quizScore = 0;
        updateQuiz();
    }

    if (mode === 'writing') {
        completeLessonFlowStep('learning');
        if (!canvasReturnToLesson || canvasView.parentNode !== lessonWritingMode) {
            prepareLessonWritingCanvas();
            showCanvasView(true);
        }
        updateLessonFlowUI();
        return;
    }

    if (mode === 'complete') {
        if (canvasReturnToLesson) {
            restoreCanvasViewToStandalone();
        }
        const headingEl = document.getElementById('completeLessonHeading');
        const wordsCountEl = document.getElementById('completeWordsCount');
        const nextBtn = document.getElementById('nextLessonAutoBtn');
        if (headingEl) headingEl.textContent = `HSK ${currentHSK} · Lesson ${currentLesson} yakunlandi!`;
        if (wordsCountEl) wordsCountEl.textContent = `${currentWords.length} ta`;
        if (nextBtn) {
            const selectedTrack = lessonTracks[currentLessonTrack] || lessonTracks.classic;
            const trackWords = vocabularyData.filter(w => w.hsk === currentHSK && w.track === selectedTrack.dataTrack);
            const lessonNums = [...new Set(trackWords.map(w => w.lesson))].sort((a, b) => a - b);
            const idx = lessonNums.indexOf(currentLesson);
            if (idx !== -1 && idx + 1 < lessonNums.length) {
                nextBtn.textContent = `Keyingi dars (Lesson ${lessonNums[idx + 1]}) →`;
            } else {
                nextBtn.textContent = `Darslar xaritasiga qaytish →`;
            }
        }
        updateLessonFlowUI();
        return;
    }

    if (mode === 'learning') {
        renderLessonVocabPreview();
        const exSec = document.getElementById('exampleSentencesSection');
        const grSec = document.getElementById('grammarNoteSection');
        const sbSec = document.getElementById('sentenceBuilderSection');
        if (exSec) exSec.style.display = '';
        if (grSec) grSec.style.display = '';
        if (sbSec) sbSec.style.display = '';
        if (currentHSK === 1) {
            if (currentLessonTrack === 'classic') {
                loadLessonContent().then(() => displayLearningContent(currentLesson, 'classic'));
            } else {
                loadNewHskLessonContent().then(() => displayLearningContent(currentLesson, 'new'));
            }
        } else {
            displayLearningContent(currentLesson, 'classic');
        }
    }

    updateLessonFlowUI();
}

// Canvas View Functions
function showCanvasView(fromLessonFlow = false) {
    canvasReturnToLesson = fromLessonFlow;
    if (fromLessonFlow) {
        if (canvasView.parentNode !== lessonWritingMode) lessonWritingMode.appendChild(canvasView);
        canvasView.classList.remove('view', 'active');
        canvasView.classList.add('lesson-writing-inline');
        backToLessonsFromCanvas.hidden = true;
        showView(lesson);
        tabBtns.forEach(btn => btn.classList.toggle('active', btn.dataset.mode === 'writing'));
        document.querySelectorAll('.mode-content').forEach(content => content.classList.remove('active'));
        lessonWritingMode.classList.add('active');
    } else {
        restoreCanvasViewToStandalone();
        backToLessonsFromCanvas.hidden = false;
        backToLessonsFromCanvas.textContent = '← Back to Lessons';
        showView(canvasView);
    }
    initializeCanvas();
    updateCanvasLessonSelector();
    loadCanvasCharacter();
    updateModeInstructions();
}

function restoreCanvasViewToStandalone() {
    if (canvasView.parentNode !== canvasViewPlaceholder.parentNode) {
        canvasViewPlaceholder.parentNode.insertBefore(canvasView, canvasViewPlaceholder.nextSibling);
    }
    canvasView.classList.remove('lesson-writing-inline');
    canvasView.classList.add('view');
    canvasReturnToLesson = false;
}

function updateCanvasLessonSelector() {
    const lessons = [...new Set(vocabularyData.filter(w => matchesHskAndTrack(w, canvasHSK, canvasTrack)).map(w => w.lesson))].sort((a, b) => a - b);
    canvasLessonSelector.innerHTML = lessons.map(lesson =>
        `<option value="${lesson}" ${lesson === canvasLesson ? 'selected' : ''}>Lesson ${lesson}</option>`
    ).join('');
    canvasMobileLessonSelector.innerHTML = canvasLessonSelector.innerHTML;
    canvasMobileHskSelector.value = String(canvasHSK);
    const hasTracks = canvasHSK === 1;
    if (canvasTrackSelector) {
        canvasTrackSelector.value = canvasTrack;
    }
    if (canvasMobileTrackSelector) {
        canvasMobileTrackSelector.value = canvasTrack;
    }
    if (canvasTrackSection) {
        canvasTrackSection.style.display = hasTracks ? '' : 'none';
    }
    if (canvasMobileTrackSelector) {
        canvasMobileTrackSelector.style.display = hasTracks ? '' : 'none';
    }
}

function renderCanvasCharChips(word) {
    const chipsContainer = document.getElementById('canvasCharChips');
    if (!chipsContainer) return;
    if (!currentCanvasCharacters || currentCanvasCharacters.length <= 1) {
        chipsContainer.innerHTML = '';
        chipsContainer.hidden = true;
        return;
    }
    chipsContainer.hidden = false;
    const charButtonsHtml = currentCanvasCharacters.map((ch, idx) => {
        const stateCls = idx < canvasCharacterIndex ? 'is-done' : (idx === canvasCharacterIndex ? 'is-active' : '');
        const mark = idx < canvasCharacterIndex ? '✓ ' : '';
        return `<button type="button" class="canvas-char-chip ${stateCls}" data-char-idx="${idx}">${mark}${ch}</button>`;
    }).join('');
    const skipWordHtml = `<button type="button" class="canvas-skip-word-chip" id="canvasSkipWholeWordBtn" title="Keyingi so'zga o'tish">Keyingi so‘z →</button>`;
    chipsContainer.innerHTML = `<div class="canvas-chips-row">${charButtonsHtml}</div>${skipWordHtml}`;

    chipsContainer.querySelectorAll('.canvas-char-chip').forEach(btn => {
        btn.addEventListener('click', () => {
            if (autoAdvanceTimer) {
                clearTimeout(autoAdvanceTimer);
                autoAdvanceTimer = null;
            }
            canvasCharacterIndex = parseInt(btn.dataset.charIdx, 10) || 0;
            loadCanvasCharacter();
        });
    });

    const skipBtn = document.getElementById('canvasSkipWholeWordBtn');
    if (skipBtn) {
        skipBtn.addEventListener('click', () => {
            if (autoAdvanceTimer) {
                clearTimeout(autoAdvanceTimer);
                autoAdvanceTimer = null;
            }
            const words = vocabularyData.filter(w => matchesHskAndTrack(w, canvasHSK, canvasTrack) && w.lesson === canvasLesson);
            if (!words.length) return;
            const writingDone = recordCanvasWritingCompletion(true);
            if (canvasReturnToLesson && writingDone) {
                completeCurrentLesson();
                switchMode('complete');
                window.scrollTo({ top: 0, behavior: 'smooth' });
                return;
            }
            canvasWordIndex = (canvasWordIndex + 1) % words.length;
            canvasCharacterIndex = 0;
            loadCanvasCharacter();
        });
    }
}

function loadCanvasCharacter() {
    const words = vocabularyData.filter(w => matchesHskAndTrack(w, canvasHSK, canvasTrack) && w.lesson === canvasLesson);
    if (words.length > 0) {
        canvasWordIndex %= words.length;
        const word = words[canvasWordIndex];
        currentCanvasCharacters = Array.from(word.hanzi);
        canvasCharacterIndex = Math.min(canvasCharacterIndex, currentCanvasCharacters.length - 1);
        const targetChar = currentCanvasCharacters[canvasCharacterIndex];
        canvasCharacter.textContent = targetChar;
        canvasWordLabel.textContent = `${word.hanzi} (${canvasWordIndex + 1}/${words.length})`;
        canvasCharacterPosition.textContent = currentCanvasCharacters.length > 1
            ? `Bo‘g‘in ${canvasCharacterIndex + 1} / ${currentCanvasCharacters.length}`
            : `1 ta iyeroglif`;
        canvasMeaning.textContent = word.uzbek;
        canvasPinyin.textContent = word.pinyin;
        renderCanvasCharChips(word);
        const nextLabel = canvasCharacterIndex < currentCanvasCharacters.length - 1 ? 'Keyingi harf →' : 'Keyingi so‘z →';
        canvasContinueBtn.textContent = nextLabel;
        nextCanvasWord.textContent = nextLabel;
        nextWordFromModal.textContent = nextLabel.replace(' →', '');
        canvasFeedback.textContent = '';
        canvasFeedback.className = 'canvas-feedback';
        nextCanvasWord.disabled = true;
        nextCanvasWord.style.display = 'none';
        canvasContinueBtn.style.display = 'none';
        hideComboDisplay();
        showTraceGuide();
    }
}

function nextCanvasCharacter() {
    if (autoAdvanceTimer) {
        clearTimeout(autoAdvanceTimer);
        autoAdvanceTimer = null;
    }
    const words = vocabularyData.filter(w => matchesHskAndTrack(w, canvasHSK, canvasTrack) && w.lesson === canvasLesson);
    if (!words.length) return;
    if (canvasCharacterIndex < currentCanvasCharacters.length - 1) {
        canvasCharacterIndex++;
        loadCanvasCharacter();
        return;
    }
    canvasWordIndex = (canvasWordIndex + 1) % words.length;
    canvasCharacterIndex = 0;
    loadCanvasCharacter();
}

function updateModeInstructions() {
    const instructions = {
        'trace': 'Trace the character by following the guide dots.',
        'write': 'Write the character by looking at the reference above.',
        'test': 'Write the character from memory.'
    };
    modeInstructions.textContent = instructions[canvasWritingMode];
    canvasCategory.textContent = `${canvasWritingMode.charAt(0).toUpperCase()}${canvasWritingMode.slice(1)} Practice`;
    canvasCharacter.classList.toggle('reference-hidden', canvasWritingMode === 'test');
}

function applyWritingMode() {
    showTraceGuide();
}

function showTraceGuide() {
    const char = canvasCharacter.textContent;
    if (!char || !drawingCanvas || typeof HanziWriter === 'undefined') return;

    startHanziQuiz(char);
}

function startHanziQuiz(character) {
    // Increment session ID to prevent stale callbacks from previous characters
    const sessionId = ++quizSessionId;
    
    // Reset stroke tracking
    currentStrokeIndex = 0;
    userStrokes = [];

    try {
        if (canvasHanziWriter) {
            if (typeof canvasHanziWriter.destroy === 'function') {
                canvasHanziWriter.destroy();
            } else {
                canvasHanziWriter.cancelQuiz();
            }
            canvasHanziWriter = null;
        }
        // Clear innerHTML to prevent duplicate SVG layers
        drawingCanvas.innerHTML = '';
        const canvasSize = resizeCanvas() || 260;
        
        const showStrokeGuide = canvasWritingMode === 'trace';
        const guideColor = 'rgba(28, 176, 246, 0.24)';
        const drawingColor = '#1CB0F6';
        const strokeTolerance = canvasWritingMode === 'write' ? 2.5 : 1.8;
        let quizCompleted = false;
        const showNextStrokeGuide = (strokeNum) => {
            if (!showStrokeGuide || !canvasHanziWriter) return;
            canvasHanziWriter.highlightStroke(strokeNum);
        };

        canvasHanziWriter = HanziWriter.create(drawingCanvas, character, {
            width: canvasSize,
            height: canvasSize,
            padding: 18,
            strokeAnimationSpeed: 1,
            strokeWidth: 14,
            drawingWidth: 26,
            outlineWidth: 2,
            strokeTolerance,
            showOutline: false,
            showCharacter: false,
            strokeColor: '#3C3C3C',
            drawingColor,
            highlightColor: guideColor,
            radicalColor: '#10B981',
            outlineColor: 'rgba(229, 229, 229, 0)',
            showHintAfterMisses: showStrokeGuide ? 1 : Infinity
        });
        canvasHanziWriter.quiz({
            drawingColor,
            strokeColor: '#3C3C3C',
            radicalColor: '#58CC02',
            outlineColor: 'rgba(229, 229, 229, 0)',
            strokeTolerance,
            showOutline: false,
            showCharacter: false,
            highlightColor: guideColor,
            strokeAnimationSpeed: 1,
            delayBetweenStrokes: 150,
            strokeHighlightSpeed: 2,
            showHintAfterMisses: showStrokeGuide ? 1 : Infinity,
            highlightOnComplete: true,
            onCorrectStroke: (strokeData) => {
                const completedStrokes = strokeData.strokeNum + 1;
                const totalStrokes = completedStrokes + strokeData.strokesRemaining;
                canvasFeedback.textContent = `Good stroke! ${completedStrokes} / ${totalStrokes} strokes`;
                canvasFeedback.className = 'canvas-feedback success';
                setTimeout(() => {
                    if (sessionId !== quizSessionId || quizCompleted) return;
                    showNextStrokeGuide(strokeData.strokeNum + 1);
                }, 0);
            },
            onMistake: () => {
                canvasFeedback.textContent = 'Not quite. Try that stroke again.';
                canvasFeedback.className = 'canvas-feedback';
                // Reset combo on mistake
                comboCount = 0;
                hideComboDisplay();
            },
            onComplete: function(summary) {
                if (sessionId !== quizSessionId) return;
                quizCompleted = true;
                canvasScore += 10;
                canvasScoreElement.textContent = canvasScore;
                dailyProgress.traces += 1;
                localStorage.setItem('dailyProgress', JSON.stringify(dailyProgress));
                
                notifyStatsChanged();
                
                updateDailyQuests();
                updateAchievements();
                const writingStepComplete = recordCanvasWritingCompletion();
                canvasFeedback.textContent = writingStepComplete && canvasReturnToLesson
                    ? '🎉 Barcha so‘zlar yozildi! Dars yakunlanmoqda...'
                    : '✓ Barakalla! Keyingisiga o‘tilmoqda... (+10 XP)';
                canvasFeedback.className = 'canvas-feedback success';
                nextCanvasWord.disabled = false;
                nextCanvasWord.style.display = 'inline-flex';
                addXP(10);
                updateStreak();
                
                // Increment combo
                comboCount++;
                if (comboCount >= 2) {
                    showComboDisplay(comboCount);
                }
                
                // Show continue button
                canvasContinueBtn.style.display = 'block';

                if (canvasReturnToLesson) {
                    playSuccessSound();
                    if (autoAdvanceTimer) clearTimeout(autoAdvanceTimer);
                    if (writingStepComplete && canvasCharacterIndex >= currentCanvasCharacters.length - 1) {
                        autoAdvanceTimer = setTimeout(() => {
                            autoAdvanceTimer = null;
                            completeCurrentLesson();
                            switchMode('complete');
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                        }, 750);
                    } else {
                        autoAdvanceTimer = setTimeout(() => {
                            autoAdvanceTimer = null;
                            nextCanvasCharacter();
                        }, 700);
                    }
                } else {
                    showSuccessModal();
                }
            }
        });
        if (typeof canvasHanziWriter.hideOutline === 'function') {
            canvasHanziWriter.hideOutline({ duration: 0 });
        }
        showNextStrokeGuide(0);
    } catch (error) {
        console.error('Error starting Hanzi quiz:', error);
    }
}

function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
        hideToast();
        toastTimer = null;
    }, 1600);
}

function hideToast() {
    if (!toast) return;
    toast.classList.remove('show');
}

function loadNextWord() {
    nextCanvasCharacter();
}

function playCanvasAudio() {
    const char = canvasCharacter.textContent;
    if (!char) return;
    
    if (!('speechSynthesis' in window)) {
        alert('Text-to-speech not supported');
        return;
    }
    
    window.speechSynthesis.cancel();
    
    try {
        const utterance = new SpeechSynthesisUtterance(char);
        utterance.lang = 'zh-CN';
        utterance.rate = getSpeechRate();
        utterance.pitch = 1;
        
        const voices = window.speechSynthesis.getVoices();
        let chineseVoice = voices.find(voice => voice.lang === 'zh-CN');
        if (!chineseVoice) {
            chineseVoice = voices.find(voice => voice.lang.startsWith('zh'));
        }
        
        if (chineseVoice) {
            utterance.voice = chineseVoice;
        }
        
        window.speechSynthesis.speak(utterance);
    } catch (error) {
        console.error('Error playing audio:', error);
    }
}

function toggleEraser() {
    // Eraser functionality handled by HanziWriter quiz mode
    // Reset the quiz to start over
    if (canvasHanziWriter) {
        canvasHanziWriter.cancelQuiz();
        canvasFeedback.textContent = 'Canvas cleared. Start the character again.';
        showTraceGuide();
    }
}

function checkCanvasDrawing() {
    if (!canvasHanziWriter) return;
    if (nextCanvasWord.disabled) {
        canvasFeedback.textContent = 'Keep writing until all strokes are complete.';
        canvasFeedback.className = 'canvas-feedback';
    } else {
        canvasFeedback.textContent = 'Character complete. You can continue to the next word.';
        canvasFeedback.className = 'canvas-feedback success';
    }
}

function showComboDisplay(count) {
    comboDisplay.querySelector('.combo-text').textContent = `Combo x${count}`;
    comboDisplay.classList.add('show');
    
    // Hide after 1.5 seconds
    setTimeout(() => {
        hideComboDisplay();
    }, 1500);
}

function hideComboDisplay() {
    comboDisplay.classList.remove('show');
}


function initializeCanvas() {
    // HanziWriter handles all touch/mouse events natively via quiz mode
    // No custom canvas context or event listeners needed
    resizeCanvas();
}

function resizeCanvas() {
    const canvas = document.getElementById('hanziWriterCanvas');
    if (!canvas || !canvas.parentElement) return 260;

    const wrapper = canvas.parentElement;
    const isMobile = window.innerWidth <= 768;
    const maxBox = isMobile ? (canvasReturnToLesson ? 250 : 270) : 320;
    const parentWidth = wrapper.parentElement
        ? wrapper.parentElement.getBoundingClientRect().width - 16
        : window.innerWidth - 32;
    const size = Math.max(210, Math.min(Math.floor(parentWidth > 0 ? parentWidth : maxBox), maxBox));

    wrapper.style.setProperty('width', `${size}px`, 'important');
    wrapper.style.setProperty('max-width', `${size}px`, 'important');
    wrapper.style.setProperty('height', `${size}px`, 'important');
    canvas.style.setProperty('width', `${size}px`, 'important');
    canvas.style.setProperty('max-width', `${size}px`, 'important');
    canvas.style.setProperty('height', `${size}px`, 'important');

    if (canvasHanziWriter && size > 0) {
        canvasHanziWriter.updateDimensions({ width: size, height: size });
    }
    return size;
}

window.addEventListener('resize', resizeCanvas);
window.addEventListener('orientationchange', resizeCanvas);

// Custom canvas drawing functions removed - HanziWriter quiz mode handles all touch/mouse events natively

function clearCanvas() {
    // HanziWriter handles canvas clearing via cancelQuiz()
    currentMistakes = 0;
    currentStrokeIndex = 0;
    userStrokes = [];
    if (canvasHanziWriter) {
        canvasHanziWriter.cancelQuiz();
    }
    // Re-apply writing mode
    applyWritingMode();
}

// validateStroke function removed - HanziWriter quiz mode handles stroke validation natively
// showStrokeError function removed - HanziWriter quiz mode handles error feedback natively
// showCompletionFeedback function removed - HanziWriter quiz mode handles completion feedback natively

// Success Modal Functions
function showSuccessModal() {
    successModal.classList.add('active');
    // Play success sound if available
    playSuccessSound();
}

function hideSuccessModal() {
    successModal.classList.remove('active');
}

// Hide all modals function for navigation
function hideAllModals() {
    // Hide success modal
    if (successModal) successModal.classList.remove('active');
    // Hide leaderboard modal
    if (leaderboardModal) leaderboardModal.classList.remove('active');
    // Hide edit profile modal
    if (editProfileModal) editProfileModal.classList.remove('active');
}

function playSuccessSound() {
    // Create a simple success sound using Web Audio API
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.value = 523.25; // C5
        oscillator.type = 'sine';
        gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.5);
    } catch (error) {
        console.error('Error playing success sound:', error);
    }
}

// Profile View Functions
function showProfileView() {
    showView(profileView);
    updateProfileStats();
    updateWeeklyStreakCalendar();
    updateHSKProgress();
    renderLearnedWordsDrawer();
    updateAchievements();
    syncProfileThemeUI();
    syncSpeechRateUI();
}

function updateProfileStats() {
    profileStreak.textContent = streakData.streak;
    profileLearned.textContent = streakData.totalLearned;
    profileXP.textContent = streakData.xp;
    
    // Calculate user level based on XP
    const xp = Math.max(0, Number(streakData.xp) || 0);
    const level = Math.floor(xp / 100) + 1;
    const xpInLevel = xp % 100;
    userLevel.textContent = level;

    const curLbl = document.getElementById('profileLevelCurrentLabel');
    const nxtLbl = document.getElementById('profileLevelNextLabel');
    const xpTxt = document.getElementById('profileLevelXpText');
    const xpFill = document.getElementById('profileLevelXpFill');
    if (curLbl) curLbl.textContent = `Level ${level}`;
    if (nxtLbl) nxtLbl.textContent = `Level ${level + 1} →`;
    if (xpTxt) xpTxt.textContent = `${xpInLevel} / 100 XP`;
    if (xpFill) xpFill.style.width = `${xpInLevel}%`;
}

function updateWeeklyStreakCalendar() {
    const grid = document.getElementById('weeklyDaysGrid');
    const summaryEl = document.getElementById('weeklyStreakSummary');
    if (!grid) return;

    const dayNames = ['Du', 'Se', 'Ch', 'Pa', 'Ju', 'Sh', 'Ya'];
    const now = new Date();
    // Convert Sunday (0) -> 6, Monday (1) -> 0 .. Saturday (6) -> 5
    const todayMonIdx = (now.getDay() + 6) % 7;
    const streakCount = Math.max(1, Number(streakData.streak) || 1);
    const activeInWeek = Math.min(todayMonIdx + 1, streakCount);

    if (summaryEl) {
        summaryEl.textContent = `🔥 ${streakData.streak || 1} kun ketma-ket`;
    }

    grid.innerHTML = dayNames.map((name, idx) => {
        const isToday = idx === todayMonIdx;
        const isDone = idx <= todayMonIdx && (todayMonIdx - idx) < streakCount;
        const stateClass = isDone ? 'is-done' : (idx > todayMonIdx ? 'is-upcoming' : 'is-missed');
        const icon = isDone ? '🔥' : (isToday ? '●' : '·');
        return `
            <div class="weekly-day-cell ${stateClass}${isToday ? ' is-today' : ''}">
                <span class="weekly-day-name">${name}</span>
                <span class="weekly-day-circle">${icon}</span>
            </div>
        `;
    }).join('');
}

function renderLearnedWordsDrawer() {
    const listEl = document.getElementById('profileLearnedWordsList');
    const badgeEl = document.getElementById('learnedWordsDrawerCount');
    if (!listEl) return;

    const learnedItems = vocabularyData.filter(w => learnedWords.includes(w.id));
    if (badgeEl) {
        badgeEl.textContent = `${learnedItems.length} ta so‘z`;
    }

    if (learnedItems.length === 0) {
        listEl.innerHTML = `
            <div class="learned-words-empty">
                <p>Hozircha yodlangan so‘zlar yo‘q. Darslarni boshlang yoki kartochkalarda <strong>⭐ Mark Learned</strong> tugmasini bosing!</p>
            </div>
        `;
        return;
    }

    // Show up to 24 most recently learned words as interactive chips with audio
    const recentItems = learnedItems.slice(-24).reverse();
    listEl.innerHTML = recentItems.map(w => `
        <button type="button" class="learned-word-chip" data-speak="${w.hanzi}" title="Tinglash: ${w.hanzi} (${w.pinyin})">
            <span class="lw-hanzi">${w.hanzi}</span>
            <span class="lw-meta">
                <span class="lw-pinyin">${w.pinyin}</span>
                <span class="lw-uzbek">${w.uzbek}</span>
            </span>
            <span class="lw-audio" aria-hidden="true">🔊</span>
        </button>
    `).join('');

    listEl.querySelectorAll('.learned-word-chip').forEach(chip => {
        chip.addEventListener('click', () => speakChineseText(chip.dataset.speak));
    });
}

function syncSpeechRateUI() {
    const group = document.getElementById('speechRateGroup');
    if (!group) return;
    const currentRate = getSpeechRate();
    group.querySelectorAll('.rate-chip').forEach(btn => {
        const rateVal = parseFloat(btn.dataset.rate);
        btn.classList.toggle('active', Math.abs(rateVal - currentRate) < 0.08);
    });
}

function loadProfileData() {
    let profileData = JSON.parse(localStorage.getItem('profileData')) || {
        username: 'Chinese Learner',
        avatar: '👤',
        dailyGoal: 10
    };
    if (window.EasyAuth && window.EasyAuth.normalizeProfile) {
        profileData = EasyAuth.normalizeProfile(profileData);
    }
    
    profileUsername.textContent = profileData.username;
    profileAvatar.textContent = profileData.avatar;
    dailyGoalDisplay.textContent = profileData.dailyGoal;
    selectedAvatar = profileData.avatar;
    
    // Phase 1 auth: if signed in with Google, re-render the identity
    // (display name and profile photo) on top of the stored profile.
    if (window.EasyAuth && window.EasyAuth.available) {
        window.EasyAuth.refreshIdentity();
    }
}

function openProfileModal() {
    let profileData = JSON.parse(localStorage.getItem('profileData')) || {
        username: 'Chinese Learner',
        avatar: '👤',
        dailyGoal: 10,
        nickname: '',
        avatarPref: 'emoji'
    };
    if (window.EasyAuth && window.EasyAuth.normalizeProfile) {
        profileData = EasyAuth.normalizeProfile(profileData);
    }
    
    // The input edits the Easy Chinese nickname only (never the Google name).
    usernameInput.value = profileData.nickname || '';
    selectedAvatar = profileData.avatar;
    selectedAvatarPref = profileData.avatarPref === 'google' ? 'google' : 'emoji';
    
    // Daily Goal: keep a previously stored value selectable even if it is
    // not one of the four preset options.
    const goalValue = String(profileData.dailyGoal);
    if (dailyGoalInput && !dailyGoalInput.querySelector('option[value="' + goalValue + '"]')) {
        const goalOption = document.createElement('option');
        goalOption.value = goalValue;
        goalOption.textContent = goalValue + ' words';
        dailyGoalInput.appendChild(goalOption);
    }
    if (dailyGoalInput) dailyGoalInput.value = goalValue;
    
    // Update avatar selection
    avatarOptions.forEach(option => {
        option.classList.remove('selected');
        if (option.dataset.avatar === selectedAvatar) {
            option.classList.add('selected');
        }
    });
    
    syncAvatarPrefUI();
    
    editProfileModal.classList.add('active');
}

// Keeps the avatar-preference buttons (Google photo vs emoji) in sync with
// the current selection and sign-in state.
function syncAvatarPrefUI() {
    if (!avatarPrefOptions || avatarPrefOptions.length === 0) return;
    const authUser = (window.EasyAuth && window.EasyAuth.available) ? window.EasyAuth.getUser() : null;
    const googleReady = !!(authUser && authUser.photoURL);
    const effectivePref = (selectedAvatarPref === 'google' && googleReady) ? 'google' : 'emoji';
    
    avatarPrefOptions.forEach(btn => {
        btn.classList.toggle('selected', btn.dataset.pref === effectivePref);
        if (btn.dataset.pref === 'google') {
            btn.disabled = !googleReady;
        }
    });
    
    if (avatarPrefHint) {
        avatarPrefHint.textContent = googleReady
            ? 'Show your Google profile photo or an emoji inside Easy Chinese.'
            : 'Sign in with Google to use your profile photo.';
    }
}

function closeProfileModal() {
    editProfileModal.classList.remove('active');
}

function saveProfile() {
    // Phase 1 auth: the nickname only affects Easy Chinese, never the
    // Google account. Signed-in users fall back to their Google name
    // when no custom nickname is set.
    const authUser = (window.EasyAuth && window.EasyAuth.available) ? window.EasyAuth.getUser() : null;
    const nickname = (usernameInput.value || '').trim();
    const googlePhotoOk = !!(authUser && authUser.photoURL);
    
    const profileData = {
        username: nickname || (authUser && authUser.displayName) || 'Chinese Learner',
        nickname: nickname,
        avatar: selectedAvatar,
        avatarPref: (selectedAvatarPref === 'google' && googlePhotoOk) ? 'google' : 'emoji',
        dailyGoal: parseInt(dailyGoalInput.value) || 10
    };
    
    localStorage.setItem('profileData', JSON.stringify(profileData));
    
    profileUsername.textContent = profileData.username;
    profileAvatar.textContent = profileData.avatar;
    dailyGoalDisplay.textContent = profileData.dailyGoal;
    
    if (window.EasyAuth && window.EasyAuth.available) {
        window.EasyAuth.refreshIdentity();
    }
    
    closeProfileModal();
}

function updateHSKProgress() {
    // Calculate progress for all HSK 1-5 levels + New HSK 3.0
    const hsk1Words = vocabularyData.filter(w => w.hsk === 1 && w.track === 'classic').length;
    const newHskWords = vocabularyData.filter(w => w.hsk === 1 && w.track === 'new').length;
    const hsk2Words = vocabularyData.filter(w => w.hsk === 2).length;
    const hsk3Words = vocabularyData.filter(w => w.hsk === 3).length;
    const hsk4Words = vocabularyData.filter(w => w.hsk === 4).length;
    const hsk5Words = vocabularyData.filter(w => w.hsk === 5).length;

    const hsk1Learned = vocabularyData.filter(w => w.hsk === 1 && w.track === 'classic' && learnedWords.includes(w.id)).length;
    const newHskLearned = vocabularyData.filter(w => w.hsk === 1 && w.track === 'new' && learnedWords.includes(w.id)).length;
    const hsk2Learned = vocabularyData.filter(w => w.hsk === 2 && learnedWords.includes(w.id)).length;
    const hsk3Learned = vocabularyData.filter(w => w.hsk === 3 && learnedWords.includes(w.id)).length;
    const hsk4Learned = vocabularyData.filter(w => w.hsk === 4 && learnedWords.includes(w.id)).length;
    const hsk5Learned = vocabularyData.filter(w => w.hsk === 5 && learnedWords.includes(w.id)).length;

    const hsk1PercentVal = hsk1Words > 0 ? Math.round((hsk1Learned / hsk1Words) * 100) : 0;
    const newHskPercentVal = newHskWords > 0 ? Math.round((newHskLearned / newHskWords) * 100) : 0;
    const hsk2PercentVal = hsk2Words > 0 ? Math.round((hsk2Learned / hsk2Words) * 100) : 0;
    const hsk3PercentVal = hsk3Words > 0 ? Math.round((hsk3Learned / hsk3Words) * 100) : 0;
    const hsk4PercentVal = hsk4Words > 0 ? Math.round((hsk4Learned / hsk4Words) * 100) : 0;
    const hsk5PercentVal = hsk5Words > 0 ? Math.round((hsk5Learned / hsk5Words) * 100) : 0;

    if (hsk1Percent) hsk1Percent.textContent = `${hsk1PercentVal}%`;
    if (newHskPercent) newHskPercent.textContent = `${newHskPercentVal}%`;
    if (hsk2Percent) hsk2Percent.textContent = `${hsk2PercentVal}%`;
    if (hsk3Percent) hsk3Percent.textContent = `${hsk3PercentVal}%`;

    const hsk4PercentEl = document.getElementById('hsk4Percent');
    const hsk5PercentEl = document.getElementById('hsk5Percent');
    if (hsk4PercentEl) hsk4PercentEl.textContent = `${hsk4PercentVal}%`;
    if (hsk5PercentEl) hsk5PercentEl.textContent = `${hsk5PercentVal}%`;

    if (hsk1Count) hsk1Count.textContent = `${hsk1Learned} / ${hsk1Words} so‘z`;
    if (newHskCount) newHskCount.textContent = `${newHskLearned} / ${newHskWords} so‘z`;

    const hsk2CountEl = document.getElementById('hsk2Count');
    const hsk3CountEl = document.getElementById('hsk3Count');
    const hsk4CountEl = document.getElementById('hsk4Count');
    const hsk5CountEl = document.getElementById('hsk5Count');
    if (hsk2CountEl) hsk2CountEl.textContent = `${hsk2Learned} / ${hsk2Words} so‘z`;
    if (hsk3CountEl) hsk3CountEl.textContent = `${hsk3Learned} / ${hsk3Words} so‘z`;
    if (hsk4CountEl) hsk4CountEl.textContent = `${hsk4Learned} / ${hsk4Words} so‘z`;
    if (hsk5CountEl) hsk5CountEl.textContent = `${hsk5Learned} / ${hsk5Words} so‘z`;

    if (hsk1Fill) hsk1Fill.style.width = `${hsk1PercentVal}%`;
    if (newHskFill) newHskFill.style.width = `${newHskPercentVal}%`;
    if (hsk2Fill) hsk2Fill.style.width = `${hsk2PercentVal}%`;
    if (hsk3Fill) hsk3Fill.style.width = `${hsk3PercentVal}%`;

    const hsk4FillEl = document.getElementById('hsk4Fill');
    const hsk5FillEl = document.getElementById('hsk5Fill');
    if (hsk4FillEl) hsk4FillEl.style.width = `${hsk4PercentVal}%`;
    if (hsk5FillEl) hsk5FillEl.style.width = `${hsk5PercentVal}%`;
}

function getCompletedLessonsTotalCount() {
    if (!lessonFlowProgress || !lessonFlowProgress.lessons) return 0;
    return Object.values(lessonFlowProgress.lessons).filter(rec => rec && rec.completed).length;
}

function updateAchievements() {
    const achievements = achievementsGrid.querySelectorAll('.achievement-badge');
    const completedLessonsCount = getCompletedLessonsTotalCount();
    let unlockedCount = 0;

    achievements.forEach(badge => {
        const achievementType = badge.dataset.achievement;
        let currentVal = 0;
        let targetVal = 1;

        switch (achievementType) {
            case 'first-word':
                currentVal = streakData.totalLearned;
                targetVal = 1;
                break;
            case 'first-lesson':
                currentVal = completedLessonsCount;
                targetVal = 1;
                break;
            case 'streak-3':
                currentVal = streakData.streak;
                targetVal = 3;
                break;
            case 'streak-7':
                currentVal = streakData.streak;
                targetVal = 7;
                break;
            case 'words-50':
                currentVal = streakData.totalLearned;
                targetVal = 50;
                break;
            case 'words-100':
                currentVal = streakData.totalLearned;
                targetVal = 100;
                break;
            case 'xp-100':
            case 'first-100-xp':
                currentVal = streakData.xp;
                targetVal = 100;
                break;
            case 'master-calligrapher':
                currentVal = dailyProgress.traces;
                targetVal = 3;
                break;
        }

        const unlocked = currentVal >= targetVal;
        if (unlocked) unlockedCount++;

        const progEl = badge.querySelector('.badge-prog');
        if (progEl) {
            progEl.textContent = unlocked ? '✓ Ochildi' : `${Math.min(currentVal, targetVal)} / ${targetVal}`;
        }

        if (unlocked) {
            badge.classList.remove('locked');
            badge.classList.add('unlocked');
        } else {
            badge.classList.add('locked');
            badge.classList.remove('unlocked');
        }
    });

    const countPill = document.getElementById('achievementsUnlockedCount');
    if (countPill) {
        countPill.textContent = `${unlockedCount} / ${achievements.length}`;
    }
}


// ==============================================================================
// 17. PRACTICE HUB, TONE MASTERY LAB, SURVIVAL PHRASES & SUPERCHINESE AI LAOSHI
// ==============================================================================

const practiceView = document.getElementById('practice');
const toneLabView = document.getElementById('toneLab');
const survivalView = document.getElementById('survivalPhrases');
const aiLaoshiView = document.getElementById('aiLaoshi');

// Navigation triggers
function showPracticeView() {
    showView(practiceView);
    updatePracticeHubUI();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function updatePracticeHubUI() {
    const hskPill = document.getElementById('practiceHskPill');
    if (hskPill) hskPill.textContent = `HSK ${currentHSK}`;

    const flashcardsBadge = document.getElementById('hubFlashcardsBadge');
    if (flashcardsBadge) {
        const trk = currentHSK === 1 ? (currentLessonTrack === 'new' ? 'New HSK 3.0' : 'Classic') : 'HSK 3.0';
        flashcardsBadge.textContent = `HSK ${currentHSK} (${trk})`;
    }

    const mistakesBadge = document.getElementById('hubMistakesBadge');
    if (mistakesBadge) {
        const count = typeof getSmartMistakesWords === 'function' ? getSmartMistakesWords().length : 0;
        mistakesBadge.textContent = `${count} ta so‘z`;
    }

    const bookmarksBadge = document.getElementById('hubBookmarksBadge');
    if (bookmarksBadge) {
        const count = typeof getSmartBookmarkedWords === 'function' ? getSmartBookmarkedWords().length : 0;
        bookmarksBadge.textContent = `${count} ta so‘z`;
    }
}

function showToneLabView(initialTab = 'chart') {
    showView(toneLabView);
    initToneLab(initialTab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showSurvivalPhrasesView(initialCat = 'classroom') {
    showView(survivalView);
    initSurvivalPhrases(initialCat);
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showAiLaoshiView(initialPrompt = null) {
    showView(aiLaoshiView);
    initAiLaoshi(initialPrompt);
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Attach event listeners for Practice Hub & subview navigation
document.addEventListener('DOMContentLoaded', () => {
    // Hub tile triggers
    const hubTone = document.getElementById('hubOpenToneBtn');
    if (hubTone) hubTone.addEventListener('click', () => showToneLabView('chart'));

    const hubPitch = document.getElementById('hubOpenPitchBtn');
    if (hubPitch) hubPitch.addEventListener('click', () => showToneLabView('mic'));

    const hubSurv = document.getElementById('hubOpenSurvivalBtn');
    if (hubSurv) hubSurv.addEventListener('click', () => showSurvivalPhrasesView('classroom'));

    const hubAi = document.getElementById('hubOpenAiCoachBtn');
    if (hubAi) hubAi.addEventListener('click', () => showAiLaoshiView());

    const hubFlash = document.getElementById('hubOpenFlashcardsBtn');
    if (hubFlash) hubFlash.addEventListener('click', () => showLessonView(currentLesson || 1));

    const hubCanvas = document.getElementById('hubOpenCanvasBtn');
    if (hubCanvas) hubCanvas.addEventListener('click', showCanvasView);

    const hubMistakes = document.getElementById('hubOpenMistakesBtn');
    if (hubMistakes) {
        hubMistakes.addEventListener('click', () => {
            if (typeof startMistakesReview === 'function') startMistakesReview();
        });
    }

    const hubBookmarks = document.getElementById('hubOpenBookmarksBtn');
    if (hubBookmarks) {
        hubBookmarks.addEventListener('click', () => {
            if (typeof startBookmarksReview === 'function') startBookmarksReview();
        });
    }

    // Subview Back buttons -> Return to Practice Hub!
    const backFromTone = document.getElementById('backFromToneLabBtn');
    if (backFromTone) backFromTone.addEventListener('click', showPracticeView);

    const backFromSurv = document.getElementById('backFromSurvivalBtn');
    if (backFromSurv) backFromSurv.addEventListener('click', showPracticeView);

    // AI Analysis from inside lesson
    const askAiLessonBtn = document.getElementById('askAiFromLessonBtn');
    if (askAiLessonBtn) {
        askAiLessonBtn.addEventListener('click', () => {
            const currentWord = currentWords[flashcardIndex] || currentWords[0];
            const p = currentWord ? currentWord.hanzi : 'HSK 1 darslari';
            showAiLaoshiView(p);
        });
    }
});

// ------------------------------------------------------------------------------
// 17.1 TONE MASTERY LAB
// ------------------------------------------------------------------------------
const TONE_CONTOURS = [
    { num: 1, symbol: 'ā', mark: '5 → 5', name: '1-ton: Baland va tekis', exp: 'Ovoz baland va tekis ushlab turiladi (shifokor "A-a-a" degandek)', sample: 'mā (妈 ona), bā (八 sakkiz), tī (踢 tepmoq)', sound: 'mā', pitchPath: [80, 80] },
    { num: 2, symbol: 'á', mark: '3 → 5', name: '2-ton: Ko‘tariluvchi', exp: 'Pastdan yuqoriga ko‘tariladi ("Nima-a?", "Rostdanmi?" degandek)', sample: 'má (麻 nasha), shí (十 o‘n), lái (来 kelmoq)', sound: 'má', pitchPath: [50, 80] },
    { num: 3, symbol: 'ǎ', mark: '2 → 1 → 4', name: '3-ton: Tushib-chiquvchi', exp: 'Ovoz avval eng pastga tushadi, keyin sal ko‘tariladi ("Hmm..." deb o‘ylagandek)', sample: 'mǎ (马 ot), nǐ (你 sen), hǎo (好 yaxshi)', sound: 'mǎ', pitchPath: [40, 20, 65] },
    { num: 4, symbol: 'à', mark: '5 → 1', name: '4-ton: Qat’iy tushuvchi', exp: 'Tepadan tez va keskin pastga tushadi ("Yo‘q!", "To‘xta!" deb buyruq bergandek)', sample: 'mà (骂 so‘kmoq), bù (不 yo‘q), shì (是 bo‘lmoq)', sound: 'mà', pitchPath: [85, 20] },
    { num: 5, symbol: 'a', mark: 'Neytral', name: 'Yengil (Neytral) ton', exp: 'Qisqa, muloyim va urg‘usiz aytiladi', sample: 'ma (吗 so‘roq), de (的 qaratqich), ba (吧 undov)', sound: 'ma', pitchPath: [45, 45] }
];

const MINIMAL_PAIRS = [
    { hanzi: '妈 / 麻 / 马 / 骂', pinyin: 'mā / má / mǎ / mà', uzbek: 'Ona (1) / Zig‘ir (2) / Ot (3) / So‘kmoq (4)', speak: '妈, 麻, 马, 骂' },
    { hanzi: '温 / 文 / 吻 / 问', pinyin: 'wēn / wén / wěn / wèn', uzbek: 'Iliq (1) / Matn (2) / O‘pmoq (3) / So‘ramoq (4)', speak: '温, 文, 吻, 问' },
    { hanzi: '书 / 熟 / 数 / 树', pinyin: 'shū / shú / shǔ / shù', uzbek: 'Kitob (1) / Pishgan (2) / Sanamoq (3) / Daraxt (4)', speak: '书, 熟, 数, 树' },
    { hanzi: '睡觉 vs 水饺', pinyin: 'shuìjiào vs shuǐjiǎo', uzbek: 'Uxlamoq (4+4) vs Chuchvara (3+3→2+3)', speak: '睡觉, 水饺' }
];

const SANDHI_RULES = [
    {
        title: '1. Ikkita 3-ton ketma-ket kelsa (3 + 3 → 2 + 3)',
        formula: 'ǎ + ǎ → á + ǎ',
        exp: 'Xitoy tilida ikkita tushib-chiquvchi 3-tonni ketma-ket aytish noqulay. Shu sababli birinchi so‘z avtomatik ravishda 2-tonga (ko‘tariluvchi) aylanadi.',
        example: '你好: nǐ hǎo → ní hǎo (Salom)<br>很好: hěn hǎo → hén hǎo (Juda yaxshi)<br>手表: shǒubiǎo → shóubiǎo (Qo‘l soati)<br>可以: kěyǐ → kéyǐ (Mumkin)',
        speak: '你好, 很好, 手表, 可以'
    },
    {
        title: '2. “不” (bù) so‘zining o‘zgarishi (bù → bú)',
        formula: '不 (bù) + 4-ton → bú + 4-ton',
        exp: '“不” so‘zi aslida 4-ton (bù). Ammo undan keyingi so‘z ham 4-ton bo‘lsa, “不” 2-tonga (bú) aylanadi. Boshqa barcha tonlar (1, 2, 3) oldida o‘zgarmaydi.',
        example: '不是: bù shì → bú shì (Emas)<br>不对: bù duì → bú duì (Noto‘g‘ri)<br>不要: bù yào → bú yào (Kerakmas)<br><em>Taqqoslang (o‘zgarmaydi):</em> 不吃 (bù chī), 不好 (bù hǎo)',
        speak: '不是, 不对, 不要, 不吃, 不好'
    },
    {
        title: '3. “一” (yī) so‘zining uch xil talaffuzi',
        formula: 'yī (sanoqda) | yì (1,2,3 oldida) | yí (4 oldida)',
        exp: '“一” sanashda 1-ton (yī). Ammo 1, 2, 3-tondagi so‘zlar oldidan 4-tonga (yì), 4-tondagi so‘zlar oldidan esa 2-tonga (yí) o‘zgaradi.',
        example: '1, 2, 3: yī, èr, sān (1-ton)<br>一天: yì tiān (1-ton oldida → yì)<br>一年: yì nián (2-ton oldida → yì)<br>一起: yì qǐ (3-ton oldida → yì)<br>一个: yí gè (4-ton oldida → yí)',
        speak: '一二三, 一天, 一年, 一起, 一个'
    }
];

const TONE_QUIZ_QUESTIONS = [
    { sound: 'mā', hanzi: '妈', pinyin: 'mā', ans: 1, prompt: 'Qaysi ton yangramoqda?' },
    { sound: 'má', hanzi: '麻', pinyin: 'má', ans: 2, prompt: 'Qaysi ton yangramoqda?' },
    { sound: 'mǎ', hanzi: '马', pinyin: 'mǎ', ans: 3, prompt: 'Qaysi ton yangramoqda?' },
    { sound: 'mà', hanzi: '骂', pinyin: 'mà', ans: 4, prompt: 'Qaysi ton yangramoqda?' },
    { sound: 'shū', hanzi: '书', pinyin: 'shū', ans: 1, prompt: 'Qaysi ton yangramoqda?' },
    { sound: 'shú', hanzi: '熟', pinyin: 'shú', ans: 2, prompt: 'Qaysi ton yangramoqda?' },
    { sound: 'hǎo', hanzi: '好', pinyin: 'hǎo', ans: 3, prompt: 'Qaysi ton yangramoqda?' },
    { sound: 'shì', hanzi: '是', pinyin: 'shì', ans: 4, prompt: 'Qaysi ton yangramoqda?' }
];

let toneQuizIndex = 0;
let toneQuizScore = 0;

function initToneLab(initialTab = 'chart') {
    const tabs = document.querySelectorAll('#toneLabTabs .subview-tab');
    const panels = {
        chart: document.getElementById('toneTabChart'),
        ear: document.getElementById('toneTabEar'),
        sandhi: document.getElementById('toneTabSandhi'),
        mic: document.getElementById('toneTabMic')
    };

    function switchToneTab(tabKey) {
        tabs.forEach(t => t.classList.toggle('active', t.dataset.toneTab === tabKey));
        Object.keys(panels).forEach(k => {
            if (panels[k]) panels[k].classList.toggle('active', k === tabKey);
        });
        if (tabKey === 'mic') drawTonePitchGuideline([40, 20, 65]);
    }

    tabs.forEach(tab => {
        tab.onclick = () => switchToneTab(tab.dataset.toneTab);
    });

    switchToneTab(initialTab);
    renderToneContours();
    renderMinimalPairs();
    renderSandhiRules();
    loadToneEarQuestion();
    initToneMicPractice();
}

function renderToneContours() {
    const grid = document.getElementById('toneContoursGrid');
    if (!grid) return;
    grid.innerHTML = TONE_CONTOURS.map(t => `
        <div class="tone-card" data-tone="${t.num}">
            <div class="tc-top">
                <span class="tc-mark-badge">${t.mark}</span>
                <button type="button" class="tone-play-pill" data-sound="${t.sound}" aria-label="${t.sound} ni eshitish">🔊 Tinglash</button>
            </div>
            <div class="tc-char-row">
                <span class="tc-symbol">${t.symbol}</span>
                <span class="tc-name">${t.name}</span>
            </div>
            <p class="tc-exp">${t.exp}</p>
            <div class="tc-sample"><strong>Misol:</strong> ${t.sample}</div>
        </div>
    `).join('');

    grid.querySelectorAll('.tone-play-pill').forEach(btn => {
        btn.onclick = (e) => {
            e.stopPropagation();
            speakChineseText(btn.dataset.sound);
        };
    });
}

function renderMinimalPairs() {
    const container = document.getElementById('minimalPairsList');
    if (!container) return;
    container.innerHTML = MINIMAL_PAIRS.map(p => `
        <div class="minimal-pair-card">
            <div class="mp-left">
                <div class="mp-hanzi">${p.hanzi}</div>
                <div class="mp-pinyin">${p.pinyin}</div>
                <div class="mp-uzbek">${p.uzbek}</div>
            </div>
            <button type="button" class="mp-listen-btn" data-speak="${p.speak}" title="Barchasini ketma-ket eshitish">🔊</button>
        </div>
    `).join('');

    container.querySelectorAll('.mp-listen-btn').forEach(btn => {
        btn.onclick = () => speakChineseText(btn.dataset.speak, 0.75);
    });
}

function renderSandhiRules() {
    const container = document.getElementById('sandhiRulesList');
    if (!container) return;
    container.innerHTML = SANDHI_RULES.map(r => `
        <div class="sandhi-card">
            <div class="sc-head">
                <h4>${r.title}</h4>
                <span class="sc-formula">${r.formula}</span>
            </div>
            <p class="sc-exp">${r.exp}</p>
            <div class="sc-example-box">${r.example}</div>
            <button type="button" class="sc-listen-pill" data-speak="${r.speak}">🔊 Misollarni tinglash</button>
        </div>
    `).join('');

    container.querySelectorAll('.sc-listen-pill').forEach(btn => {
        btn.onclick = () => speakChineseText(btn.dataset.speak, 0.8);
    });
}

function loadToneEarQuestion() {
    const q = TONE_QUIZ_QUESTIONS[toneQuizIndex % TONE_QUIZ_QUESTIONS.length];
    const scoreEl = document.getElementById('toneEarScore');
    const progEl = document.getElementById('toneEarProgressText');
    const playBtn = document.getElementById('toneEarPlayBtn');
    const optBox = document.getElementById('toneEarOptions');
    const feedBox = document.getElementById('toneEarFeedback');
    const nextBtn = document.getElementById('toneEarNextBtn');

    if (!q || !playBtn || !optBox) return;

    if (scoreEl) scoreEl.textContent = toneQuizScore;
    if (progEl) progEl.textContent = `Savol #${(toneQuizIndex % TONE_QUIZ_QUESTIONS.length) + 1} / ${TONE_QUIZ_QUESTIONS.length}`;
    if (feedBox) feedBox.hidden = true;
    if (nextBtn) nextBtn.style.display = 'none';

    playBtn.onclick = () => speakChineseText(q.sound, 0.85);
    setTimeout(() => speakChineseText(q.sound, 0.85), 250);

    optBox.innerHTML = [1, 2, 3, 4].map(num => `
        <button type="button" class="tone-opt-btn" data-tone="${num}">
            <span class="t-opt-num">${num}-ton</span>
            <span class="t-opt-symbol">${num === 1 ? 'ā (tekis)' : num === 2 ? 'á (ko‘tariluvchi)' : num === 3 ? 'ǎ (tushib-chiq)' : 'à (keskin tush)'}</span>
        </button>
    `).join('');

    optBox.querySelectorAll('.tone-opt-btn').forEach(btn => {
        btn.onclick = () => {
            const chosen = parseInt(btn.dataset.tone);
            const isCorrect = chosen === q.ans;
            optBox.querySelectorAll('.tone-opt-btn').forEach(b => {
                b.disabled = true;
                if (parseInt(b.dataset.tone) === q.ans) b.classList.add('correct');
                else if (b === btn && !isCorrect) b.classList.add('wrong');
            });

            if (feedBox) {
                feedBox.hidden = false;
                if (isCorrect) {
                    toneQuizScore += 10;
                    if (scoreEl) scoreEl.textContent = toneQuizScore;
                    feedBox.className = 'tone-ear-feedback correct';
                    feedBox.innerHTML = `🎉 <strong>To‘g‘ri!</strong> Bu ${q.ans}-ton: <em>${q.pinyin}</em> (${q.hanzi}).`;
                } else {
                    feedBox.className = 'tone-ear-feedback wrong';
                    feedBox.innerHTML = `❌ <strong>Noto‘g‘ri.</strong> To‘g‘ri javob ${q.ans}-ton edi: <em>${q.pinyin}</em> (${q.hanzi}).`;
                }
            }
            if (nextBtn) {
                nextBtn.style.display = 'inline-block';
                nextBtn.onclick = () => {
                    toneQuizIndex++;
                    loadToneEarQuestion();
                };
            }
        };
    });
}

function drawTonePitchGuideline(path) {
    const canvas = document.getElementById('tonePitchCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const w = canvas.width;
    const h = canvas.height;

    ctx.clearRect(0, 0, w, h);
    ctx.strokeStyle = '#e2e8f0';
    ctx.lineWidth = 1;
    for (let i = 1; i <= 5; i++) {
        const y = h - (i * (h / 6));
        ctx.beginPath();
        ctx.moveTo(30, y);
        ctx.lineTo(w - 10, y);
        ctx.stroke();
        ctx.fillStyle = '#94a3b8';
        ctx.font = '10px Nunito, sans-serif';
        ctx.fillText(`${i}`, 12, y + 3);
    }

    if (path && path.length > 1) {
        ctx.strokeStyle = '#10B981';
        ctx.lineWidth = 4;
        ctx.lineCap = 'round';
        ctx.beginPath();
        const step = (w - 60) / (path.length - 1);
        path.forEach((val, idx) => {
            const x = 40 + idx * step;
            const y = h - (val / 100) * (h * 0.75) - 10;
            if (idx === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
        });
        ctx.stroke();
    }
}

const MIC_PRACTICE_WORDS = [
    { hanzi: '你好', pinyin: 'nǐ hǎo → ní hǎo', uzbek: 'Salom (3+3 qoidasi)', badge: '3-ton + 3-ton → 2-ton + 3-ton', speak: '你好', path: [40, 20, 65] },
    { hanzi: '不是', pinyin: 'bù shì → bú shì', uzbek: 'Emas (4-ton oldida bù → bú)', badge: '不 + 4-ton → bú', speak: '不是', path: [50, 80] },
    { hanzi: '妈妈', pinyin: 'māma', uzbek: 'Ona (1-ton + neytral)', badge: '1-ton + Neytral', speak: '妈妈', path: [80, 45] },
    { hanzi: '中国', pinyin: 'Zhōngguó', uzbek: 'Xitoy (1-ton + 2-ton)', badge: '1-ton + 2-ton', speak: '中国', path: [80, 50, 80] }
];

let micPracticeIndex = 0;

function initToneMicPractice() {
    const word = MIC_PRACTICE_WORDS[micPracticeIndex % MIC_PRACTICE_WORDS.length];
    const badge = document.getElementById('toneMicBadge');
    const hanzi = document.getElementById('toneMicHanzi');
    const pinyin = document.getElementById('toneMicPinyin');
    const uzbek = document.getElementById('toneMicUzbek');
    const listenBtn = document.getElementById('toneMicListenBtn');
    const recordBtn = document.getElementById('toneMicRecordBtn');
    const nextBtn = document.getElementById('toneMicNextWordBtn');
    const feedback = document.getElementById('toneMicFeedback');

    if (!word || !hanzi) return;

    if (badge) badge.textContent = word.badge;
    if (hanzi) hanzi.textContent = word.hanzi;
    if (pinyin) pinyin.innerHTML = word.pinyin;
    if (uzbek) uzbek.textContent = word.uzbek;
    if (feedback) feedback.hidden = true;

    drawTonePitchGuideline(word.path);

    if (listenBtn) {
        listenBtn.onclick = () => speakChineseText(word.speak, 0.8);
    }

    if (nextBtn) {
        nextBtn.onclick = () => {
            micPracticeIndex++;
            initToneMicPractice();
        };
    }

    if (recordBtn) {
        recordBtn.onclick = () => {
            const SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition;
            if (!SpeechRec) {
                if (feedback) {
                    feedback.hidden = false;
                    feedback.className = 'speak-feedback-banner feedback-warning';
                    feedback.innerHTML = '⚠️ Brauzeringiz ovoz tanishni qo‘llab-quvvatlamaydi. Chrome yoki Edge brauzerida sinab ko‘ring.';
                }
                return;
            }

            const rec = new SpeechRec();
            rec.lang = 'zh-CN';
            rec.interimResults = false;
            rec.maxAlternatives = 3;

            recordBtn.disabled = true;
            recordBtn.textContent = '🎙️ Eshitilmoqda... Ayting!';
            recordBtn.classList.add('is-recording');

            rec.onresult = (evt) => {
                const heard = evt.results[0][0].transcript;
                recordBtn.disabled = false;
                recordBtn.textContent = '🎙️ Aytib tekshirish';
                recordBtn.classList.remove('is-recording');

                if (feedback) {
                    feedback.hidden = false;
                    const cleanHeard = heard.replace(/[,.?!，。？！]/g, '').trim();
                    const cleanTarget = word.hanzi.replace(/[,.?!，。？！]/g, '').trim();
                    if (cleanHeard.includes(cleanTarget) || cleanTarget.includes(cleanHeard)) {
                        feedback.className = 'speak-feedback-banner feedback-correct';
                        feedback.innerHTML = `🎉 <strong>Ajoyib talaffuz!</strong> Eshitildi: “${heard}”. Tonlar to‘g‘ri chiqdi!`;
                        if (typeof triggerHapticSuccess === 'function') triggerHapticSuccess();
                    } else {
                        feedback.className = 'speak-feedback-banner feedback-warning';
                        feedback.innerHTML = `🗣️ Eshitildi: “${heard}” (Kerak edi: ${word.hanzi}). Qayta tinglab, yana aytib ko‘ring!`;
                    }
                }
            };

            rec.onerror = () => {
                recordBtn.disabled = false;
                recordBtn.textContent = '🎙️ Aytib tekshirish';
                recordBtn.classList.remove('is-recording');
                if (feedback) {
                    feedback.hidden = false;
                    feedback.className = 'speak-feedback-banner feedback-warning';
                    feedback.innerHTML = 'Mikrofon ovozni aniqlay olmadi. Qaytadan urinib ko‘ring.';
                }
            };

            rec.start();
        };
    }
}

// ------------------------------------------------------------------------------
// 17.2 CHINA SURVIVAL PHRASES
// ------------------------------------------------------------------------------
const SURVIVAL_CATEGORIES = {
    classroom: [
        { hanzi: '老师好！', pinyin: 'Lǎoshī hǎo!', uzbek: 'Assalomu alaykum ustoz!' },
        { hanzi: '老师，请再说一次。', pinyin: 'Lǎoshī, qǐng zài shuō yí cì.', uzbek: 'Ustoz, iltimos yana bir marta qaytara olasizmi?' },
        { hanzi: '这个词是什么意思？', pinyin: 'Zhè ge cí shì shénme yìsi?', uzbek: 'Bu so‘z nima degani?' },
        { hanzi: '请问，这个怎么读？', pinyin: 'Qǐngwèn, zhè ge zěnme dú?', uzbek: 'Kechirasiz, bu qanday o‘qiladi?' },
        { hanzi: '我没听懂。', pinyin: 'Wǒ méi tīngdǒng.', uzbek: 'Men tushunmadim.' },
        { hanzi: '请慢一点说。', pinyin: 'Qǐng màn yìdiǎn shuō.', uzbek: 'Iltimos, sal sekinroq gapiring.' },
        { hanzi: '今天的作业是什么？', pinyin: 'Jīntiān de zuòyè shì shénme?', uzbek: 'Bugungi uyga vazifa nima?' }
    ],
    canteen: [
        { hanzi: '不要辣。', pinyin: 'Bú yào là.', uzbek: 'Achchiq solmang! (Xitoyda eng muhim ibora)' },
        { hanzi: '微辣就可以了。', pinyin: 'Wēi là jiù kěyǐ le.', uzbek: 'Salgina achchiq bo‘lsa yetadi.' },
        { hanzi: '这个多少钱？', pinyin: 'Zhè ge duōshao qián?', uzbek: 'Bu qancha turadi?' },
        { hanzi: '打包还是在这里吃？', pinyin: 'Dǎbāo háishi zài zhèli chī?', uzbek: 'Olib ketasizmi yoki shu yerda yeysizmi?' },
        { hanzi: '打包带走。', pinyin: 'Dǎbāo dài zǒu.', uzbek: 'Olib ketaman (konteynerga solib bering).' },
        { hanzi: '请问，有没有牛肉？', pinyin: 'Qǐngwèn, yǒu méiyǒu niúròu?', uzbek: 'Kechirasiz, mol go‘shti bormi?' },
        { hanzi: '我不吃猪肉。', pinyin: 'Wǒ bù chī zhūròu.', uzbek: 'Men cho‘chqa go‘shti yemayman (Halol).' }
    ],
    delivery: [
        { hanzi: '可以微信支付吗？', pinyin: 'Kěyǐ Wēixìn zhīfù ma?', uzbek: 'WeChat orqali to‘lasam bo‘ladimi?' },
        { hanzi: '我扫你，还是你扫我？', pinyin: 'Wǒ sǎo nǐ, háishi nǐ sǎo wǒ?', uzbek: 'Men sizning QR kodingizni skanerlaymi yoki siz menikinimi?' },
        { hanzi: '我扫你吧。', pinyin: 'Wǒ sǎo nǐ ba.', uzbek: 'Men siznikini skanerlayman.' },
        { hanzi: '快递到了，放门口吧。', pinyin: 'Kuàidì dào le, fàng ménkǒu ba.', uzbek: 'Posilka yetib keldi, eshik oldiga qo‘yib keting.' },
        { hanzi: '请问取件码是多少？', pinyin: 'Qǐngwèn qǔjiàn mǎ shì duōshao?', uzbek: 'Pochta qutisidan olish kodi nechchi?' },
        { hanzi: '能便宜一点吗？', pinyin: 'Néng piányi yìdiǎn ma?', uzbek: 'Sal arzonroq qilib bera olasizmi?' }
    ],
    transport: [
        { hanzi: '师傅，去这个地址。', pinyin: 'Shīfu, qù zhè ge dìzhǐ.', uzbek: 'Haydovchi aka, mana shu manzilga boring.' },
        { hanzi: '请打表。', pinyin: 'Qǐng dǎbiǎo.', uzbek: 'Iltimos, taksi hisoblagichini (schetchik) yoqing.' },
        { hanzi: '前面靠边停一下。', pinyin: 'Qiánmiàn kàobiān tíng yíxià.', uzbek: 'Oldinroqda chetga to‘xtating.' },
        { hanzi: '地铁站在哪里？', pinyin: 'Dìtiězhàn zài nǎli?', uzbek: 'Metro bekati qayerda?' },
        { hanzi: '去机场大概需要多久？', pinyin: 'Qù jīchǎng dàgài xūyào duōjiǔ?', uzbek: 'Aeroportgacha taxminan qancha vaqt ketadi?' },
        { hanzi: '下车，谢谢！', pinyin: 'Xià chē, xièxie!', uzbek: 'Shu yerda tushaman, rahmat!' }
    ]
};

function initSurvivalPhrases(initialCat = 'classroom') {
    const tabs = document.querySelectorAll('#survivalCategoryTabs .subview-tab');
    function selectCat(catKey) {
        tabs.forEach(t => t.classList.toggle('active', t.dataset.survCat === catKey));
        renderSurvivalList(catKey);
    }
    tabs.forEach(tab => {
        tab.onclick = () => selectCat(tab.dataset.survCat);
    });
    selectCat(initialCat);
}

function renderSurvivalList(catKey) {
    const list = document.getElementById('survivalPhrasesList');
    const items = SURVIVAL_CATEGORIES[catKey] || SURVIVAL_CATEGORIES.classroom;
    if (!list) return;

    list.innerHTML = items.map(item => `
        <div class="survival-phrase-card">
            <div class="sp-copy">
                <div class="sp-hanzi">${item.hanzi}</div>
                <div class="sp-pinyin">${item.pinyin}</div>
                <div class="sp-uzbek">${item.uzbek}</div>
            </div>
            <button type="button" class="sp-listen-btn" data-speak="${item.hanzi}" title="Ovoz chiqarib o‘qish">🔊</button>
        </div>
    `).join('');

    list.querySelectorAll('.sp-listen-btn').forEach(btn => {
        btn.onclick = () => speakChineseText(btn.dataset.speak, 0.85);
    });
}

// ------------------------------------------------------------------------------
// 17.3 SUPERCHINESE-LEVEL AI LAOSHI (李老师 · Li Laoshi)
// ------------------------------------------------------------------------------
let AI_CHAT_HISTORY = [
    {
        sender: 'bot',
        text: `你好！Men sizning shaxsiy xitoy tili ustozingiz — <strong>Li Laoshi (李老师)</strong>man. 👩‍🏫<br><br>
        Bugun qaysi mavzuni o‘rganamiz? Xitoydagi darslaringiz, 1–4 tonlar sirlari, oshxonada buyurtma berish yoki istalgan grammatika savolingizni bemalol so‘rang!`,
        speak: '你好！我是李老师，很高兴认识你。'
    }
];

function initAiLaoshi(initialPrompt = null) {
    renderAiMessages();

    // Quick prompt chips
    const quickPrompts = document.querySelectorAll('.ai-prompt-chip');
    quickPrompts.forEach(chip => {
        chip.onclick = () => {
            handleSendAiMessage(chip.dataset.prompt);
        };
    });

    // Scenario tabs
    const modeTabs = document.querySelectorAll('#aiScenarioChips .subview-tab');
    modeTabs.forEach(tab => {
        tab.onclick = () => {
            modeTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            const mode = tab.dataset.aiMode;
            handleAiScenarioChange(mode);
        };
    });

    // Form submit
    const chatForm = document.getElementById('aiChatForm');
    if (chatForm) {
        chatForm.onsubmit = (e) => {
            e.preventDefault();
            const input = document.getElementById('aiTextInput');
            if (input && input.value.trim()) {
                handleSendAiMessage(input.value.trim());
                input.value = '';
            }
        };
    }

    // Clear chat button
    const clearBtn = document.getElementById('aiClearChatBtn');
    if (clearBtn) {
        clearBtn.onclick = () => {
            AI_CHAT_HISTORY = [
                {
                    sender: 'bot',
                    text: `Suhbat tozalandi. Yangi savolingizni bering, bajonidil tushuntirib beraman! 😊`,
                    speak: '请问有什么问题吗？'
                }
            ];
            renderAiMessages();
        };
    }

    // Input focus / blur for mobile keyboard handling
    const input = document.getElementById('aiTextInput');
    if (input) {
        input.addEventListener('focus', () => {
            document.body.classList.add('keyboard-open');
            setTimeout(() => {
                input.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
                const box = document.getElementById('aiMessagesBox');
                if (box) box.scrollTop = box.scrollHeight;
            }, 260);
        });
        input.addEventListener('blur', () => {
            document.body.classList.remove('keyboard-open');
        });
    }

    // Voice input via Web Speech API
    const voiceBtn = document.getElementById('aiVoiceInputBtn');
    if (voiceBtn) {
        voiceBtn.onclick = () => {
            const SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition;
            if (!SpeechRec) {
                alert('Brauzeringiz ovozli kiritishni qo‘llab-quvvatlamaydi. Chrome yoki Edge ishlating.');
                return;
            }
            const rec = new SpeechRec();
            rec.lang = 'zh-CN';
            voiceBtn.classList.add('is-recording');
            rec.onresult = (evt) => {
                voiceBtn.classList.remove('is-recording');
                const spoken = evt.results[0][0].transcript;
                if (input) input.value = spoken;
                handleSendAiMessage(spoken);
            };
            rec.onerror = () => voiceBtn.classList.remove('is-recording');
            rec.onend = () => voiceBtn.classList.remove('is-recording');
            rec.start();
        };
    }

    if (initialPrompt) {
        handleSendAiMessage(initialPrompt);
    }
}

function handleAiScenarioChange(mode) {
    let promptMsg = '';
    let reply = '';
    let speak = '';

    if (mode === 'classroom') {
        promptMsg = 'Darsda ustoz bilan muloqot qilish iboralari kerak';
        reply = `🎓 <strong>Darsxonada (教室) eng ko‘p ishlatiladigan iboralar:</strong><br><br>
        1. <strong>老师，我没听懂。</strong> (Lǎoshī, wǒ méi tīngdǒng)<br>
        • <em>Ma’nosi:</em> Ustoz, men tushunmadim.<br><br>
        2. <strong>请再说一次，慢一点。</strong> (Qǐng zài shuō yí cì, màn yìdiǎn)<br>
        • <em>Ma’nosi:</em> Iltimos yana bir bor sekinroq ayting.<br><br>
        3. <strong>这个字怎么读？</strong> (Zhè ge zì zěnme dú?)<br>
        • <em>Ma’nosi:</em> Bu iyeroglif qanday o‘qiladi?`;
        speak = '老师，我没听懂。请再说一次。';
    } else if (mode === 'canteen') {
        promptMsg = 'Oshxonada qanday ovqat buyurtma qilamiz?';
        reply = `🍜 <strong>Xitoy oshxonalarida (食堂) hayotiy muhim iboralar:</strong><br><br>
        1. <strong>不要辣！</strong> (Bú yào là!) — <em>Mutlaqo achchiq solmang!</em><br>
        2. <strong>打包带走。</strong> (Dǎbāo dài zǒu) — <em>Olib ketishga qilib bering.</em><br>
        3. <strong>我不吃猪肉，有牛肉吗？</strong> (Wǒ bù chī zhūròu, yǒu niúròu ma?) — <em>Cho‘chqa yemayman, mol go‘shti bormi?</em><br>
        4. <strong>多少钱？微信支付。</strong> (Duōshao qián? Wēixìn zhīfù) — <em>Qancha bo‘ldi? WeChat orqali to‘layman.</em>`;
        speak = '不要辣，打包带走，微信支付。';
    } else if (mode === 'market') {
        promptMsg = 'Do‘kon va kuryer (外卖) bilan gaplashish';
        reply = `📱 <strong>To‘lov va Kuryer (快递 / 外卖) muloqoti:</strong><br><br>
        1. <strong>我扫你还是你扫我？</strong> (Wǒ sǎo nǐ háishi nǐ sǎo wǒ?)<br>
        • <em>Xitoyda eng ko‘p yangraydigan ibora:</em> QR kodni siz skaner qilasizmi yoki menmi?<br><br>
        2. <strong>放门口吧，谢谢！</strong> (Fàng ménkǒu ba, xièxie!)<br>
        • <em>Kuryerga:</em> Eshik oldiga qoldiring, rahmat!<br><br>
        3. <strong>取件码是多少？</strong> (Qǔjiàn mǎ shì duōshao?)<br>
        • <em>Pochta qutisi paroli.</em>`;
        speak = '我扫你吧。放在门口，谢谢！';
    } else if (mode === 'taxi') {
        promptMsg = 'Taksida nima deyish kerak?';
        reply = `🚕 <strong>Taksi va Metroda (打车 / 地铁):</strong><br><br>
        1. <strong>师傅，去这个地址。</strong> (Shīfu, qù zhè ge dìzhǐ)<br>
        • Haydovchiga telefoningizdagi manzilni ko‘rsatganda.<br><br>
        2. <strong>请打表。</strong> (Qǐng dǎbiǎo)<br>
        • Iltimos, hisoblagichni yoqing (ortiqcha narx olmasliklari uchun).<br><br>
        3. <strong>靠边停一下。</strong> (Kàobiān tíng yíxià)<br>
        • Chetroqda to‘xtating.`;
        speak = '师傅，去这个地址，请打表。';
    } else {
        promptMsg = 'Tonlarni tahlil qilish sirlari';
        reply = `🎵 <strong>Xitoy tilida 4 ta ton va Sandhi sirlari:</strong><br><br>
        • <strong>1-ton:</strong> Baland va tekis (ā — 55)<br>
        • <strong>2-ton:</strong> Pastdan yuqoriga (á — 35)<br>
        • <strong>3-ton:</strong> Tushib chiquvchi (ǎ — 214)<br>
        • <strong>4-ton:</strong> Keskin va tez pastga (à — 51)<br><br>
        💡 <em>Istalgan iyeroglifni yozing yoki mikrofonda ayting, men uning aniq tonini tahlil qilib beraman!</em>`;
        speak = '四声是汉语发音的关键：一声高平，二声升，三声降升，四声降。';
    }

    AI_CHAT_HISTORY.push({ sender: 'user', text: promptMsg });
    AI_CHAT_HISTORY.push({ sender: 'bot', text: reply, speak: speak });
    renderAiMessages();
}

function handleSendAiMessage(queryText) {
    if (!queryText) return;
    AI_CHAT_HISTORY.push({ sender: 'user', text: queryText });
    renderAiMessages();

    setTimeout(() => {
        const resp = generateSuperChineseResponse(queryText);
        AI_CHAT_HISTORY.push(resp);
        renderAiMessages();
        if (resp.speak) {
            speakChineseText(resp.speak, 0.9);
        }
    }, 280);
}

function generateSuperChineseResponse(query) {
    const q = query.trim().toLowerCase();

    // 1. Greetings & Small talk
    if (q === 'salom' || q === 'assalomu alaykum' || q === 'qalesiz' || q.includes('ni hao') || q.includes('你好')) {
        return {
            sender: 'bot',
            text: `👋 <strong>你好！(Ní hǎo!)</strong><br><br>
            Katta mamnuniyat bilan yordam beraman! Xitoy tilida tonlar eng muhim poydevordir. 
            Xitoydagi talabalik hayotingiz qanday ketyapti? Bugun darsdagi biror so‘z yoki ton tushunarsiz bo‘ldimi?`,
            speak: '你好！我是你的中文老师，很高兴帮助你。'
        };
    }

    if (q.includes('rahmat') || q.includes('katta rahmat') || q.includes('xie xie') || q.includes('谢谢')) {
        return {
            sender: 'bot',
            text: `😊 <strong>不客气！(Bú kèqi!) / 不用谢！(Bú yòng xiè!)</strong><br><br>
            • <strong>不客气</strong> — Eng rasmiy va muloyim javob ("Arzimaydi").<br>
            • <strong>不用谢</strong> — Do‘stlar va tengdoshlar orasida ("Rahmat aytishingiz shart emas").<br>
            • ⚠️ E’tibor bering: ikkalasida ham <strong>不</strong> so‘zi 4-ton oldida <strong>bú</strong> deb aytiladi!`,
            speak: '不客气，不用谢！'
        };
    }

    // 2. Tone queries: "你好" (3+3 -> 2+3)
    if (q.includes('你好') || q.includes('ni hao') || (q.includes('3') && q.includes('ton'))) {
        return {
            sender: 'bot',
            text: `🎵 <strong>“你好” (Nǐ hǎo) — 3-ton Sandhi Qoidasi:</strong><br><br>
            • <strong>Asl tonlari:</strong> 你 (nǐ — 3-ton) + 好 (hǎo — 3-ton).<br>
            • ⚠️ <strong>Qoida (3 + 3 → 2 + 3):</strong> Xitoy tilida ikkita 3-ton ketma-ket kelsa, talaffuz oson bo‘lishi uchun birinchi bo‘g‘in 2-tonga aylanadi!<br>
            • 🗣️ <strong>To‘g‘ri talaffuz:</strong> <em>“ní hǎo”</em> deb aytiladi.<br>
            • 💡 <strong>Boshqa misollar:</strong> 很好 (hén hǎo — juda yaxshi), 手表 (shóu biǎo — soat).`,
            speak: '你好，两个三声变为二声：“ní hǎo”。'
        };
    }

    // 3. Tone queries: "不是" / "不" tone rule
    if (q.includes('不是') || q.includes('bu shi') || q.includes('bù') || q.includes('bú') || q === 'bu') {
        return {
            sender: 'bot',
            text: `🎵 <strong>“不” (bù) So‘zining Sehrli Ton Qoidasi:</strong><br><br>
            • “不” aslida 4-ton: <strong>bù</strong>.<br>
            • ⚠️ <strong>Oltin qoida:</strong> Agar “不”dan keyin 4-tondagi so‘z kelsa (是 shì, 对 duì, 要 yào), u <strong>2-tonga (bú)</strong> o‘zgaradi!<br>
            • ✅ 不是 → <strong>bú shì</strong> (Emas)<br>
            • ✅ 不对 → <strong>bú duì</strong> (Noto‘g‘ri)<br>
            • ✅ 不要 → <strong>bú yào</strong> (Kerakmas)<br>
            • ℹ️ Qolgan 1, 2, 3-tonlar oldida o‘zgarmaydi: 不吃 (bù chī), 不好 (bù hǎo).`,
            speak: '不是，不对，不要。不吃，不好。'
        };
    }

    // 4. Distinction: "二" (èr) vs "两" (liǎng)
    if ((q.includes('二') && q.includes('两')) || (q.includes('er') && q.includes('liang')) || q.includes('farqi')) {
        return {
            sender: 'bot',
            text: `📖 <strong>二 (èr) va 两 (liǎng) Farqi (SuperChinese Tahlili):</strong><br><br>
            1. <strong>二 (èr):</strong> Sanashda va raqamlarda ishlatiladi:<br>
            • 一，二，三 (1, 2, 3)<br>
            • Telefon va xona raqamlarida: 二零二 (202-xona).<br><br>
            2. <strong>两 (liǎng):</strong> Sanoq so‘zlari (o‘lchov birliklari) oldidan faqat 两 keladi:<br>
            • 两个人 (liǎng ge rén) — 2 kishi.<br>
            • 两块钱 (liǎng kuài qián) — 2 yuan.<br>
            • ❌ <em>Xato:</em> 二个人 (Xitoyliklar hech qachon bunday demaydi!).`,
            speak: '二用于数数，两用于量词：两个人，两块钱。'
        };
    }

    // 5. Grammar: "了" (le) usage
    if (q.includes('了') || q.includes(' le ') || q.includes('grammatika') || q.includes('le qachon')) {
        return {
            sender: 'bot',
            text: `📖 <strong>“了” (le) Yuklamasining 2 Asosiy Sirlari:</strong><br><br>
            1. <strong>Fe’ldan keyin kelganda — Harakatning tugallangani:</strong><br>
            • 我吃了晚饭 (Wǒ chī le wǎnfàn) — Men kechki ovqatni yeb bo‘ldim.<br><br>
            2. <strong>Gap oxirida kelganda — Yangi holat yoki o‘zgarish:</strong><br>
            • 下雨了 (Xià yǔ le) — Yomg‘ir yog‘a boshladi (avval yog‘mayotgan edi).<br>
            • 我懂了 (Wǒ dǒng le) — Endi tushundim!<br>
            • 太贵了！(Tài guì le!) — Juda qimmat bo‘lib ketdi!`,
            speak: '我吃了晚饭。下雨了。我懂了。'
        };
    }

    // 6. Practical China queries: Canteen / Oshxona
    if (q.includes('oshxona') || q.includes('ovqat') || q.includes('yemoq') || q.includes('achchiq')) {
        return {
            sender: 'bot',
            text: `🍜 <strong>Xitoyda Ovqat Buyurtma Qilishdagi Asosiy Iboralar:</strong><br><br>
            • <strong>不要辣</strong> (Bú yào là) — Achchiq solmang!<br>
            • <strong>打包</strong> (Dǎbāo) — Olib ketaman (konteynerga soling).<br>
            • <strong>在食堂吃</strong> (Zài shítáng chī) — Oshxonada yeyman.<br>
            • <strong>请问有牛肉吗？</strong> (Qǐngwèn yǒu niúròu ma?) — Mol go‘shti bormi?<br>
            • <strong>买单 / 结账</strong> (Mǎidān / Jiézhàng) — Hisobni bering.`,
            speak: '不要辣，打包带走，买单。'
        };
    }

    // 7. Practical China queries: WeChat / To'lov / QR
    if (q.includes('wechat') || q.includes('alipay') || q.includes('tolov') || q.includes('to‘lov') || q.includes('qr')) {
        return {
            sender: 'bot',
            text: `📱 <strong>WeChat / Alipay To‘lov Dialogi:</strong><br><br>
            • <strong>微信支付</strong> (Wēixìn zhīfù) — WeChat to‘lov.<br>
            • <strong>我扫你</strong> (Wǒ sǎo nǐ) — Men sizning QR kodingizni skanerlayman.<br>
            • <strong>你扫我</strong> (Nǐ sǎo wǒ) — Siz mening to‘lov kodimni skanerlang.<br>
            • <strong>多少钱？</strong> (Duōshao qián?) — Qancha bo‘ldi?`,
            speak: '微信支付，我扫你吧。'
        };
    }

    // 8. Search in vocabularyData (480 HSK words)
    if (typeof vocabularyData !== 'undefined' && Array.isArray(vocabularyData)) {
        const found = vocabularyData.find(w =>
            w.hanzi === query.trim() ||
            w.pinyin.toLowerCase() === q ||
            (w.uzbek && w.uzbek.toLowerCase() === q)
        );

        if (found) {
            return {
                sender: 'bot',
                text: `🔍 <strong>So‘z Tahlili: “${found.hanzi}”</strong><br><br>
                • <strong>Pinyin:</strong> <em>${found.pinyin}</em><br>
                • <strong>O‘zbekcha ma’nosi:</strong> ${found.uzbek}<br>
                • <strong>HSK Darajasi:</strong> HSK ${found.hsk} (Lesson ${found.lesson})<br>
                • 🗣️ <strong>Kundalik Misol:</strong> 我喜欢${found.hanzi}。 (Wǒ xǐhuan ${found.pinyin} — Menga ${found.uzbek.toLowerCase()} yoqadi).<br>
                • 💡 <strong>Talaffuz:</strong> Bo‘g‘inlarning toniga e’tibor bering va audio tugmasini bosib eshiting!`,
                speak: `${found.hanzi}。我喜欢${found.hanzi}。`
            };
        }
    }

    // Default intelligent conversational reply
    return {
        sender: 'bot',
        text: `🗣️ <strong>Li Laoshi (李老师) tahlili:</strong> “${query}”<br><br>
        Ajoyib savol! Xitoy tilida har bir tovush va ton katta ma’no tashiydi. 
        Agar biror aniq iyeroglif, darsdagi jumlalar yoki Xitoyda duch kelgan vaziyatingiz bo‘lsa, yozing yoki mikrofonda aytib bering — darhol tahlil qilib beraman!`,
        speak: query
    };
}

function renderAiMessages() {
    const box = document.getElementById('aiMessagesBox');
    if (!box) return;

    box.innerHTML = AI_CHAT_HISTORY.map(msg => `
        <div class="ai-msg ${msg.sender}">
            <div class="ai-msg-head">
                <span>${msg.sender === 'user' ? '👤 Siz' : '👩‍🏫 Li Laoshi (李老师)'}</span>
                ${msg.speak ? `<button type="button" class="ai-msg-speak-btn" data-speak="${msg.speak.replace(/"/g, '&quot;')}" title="Ovoz chiqarib o‘qish">🔊</button>` : ''}
            </div>
            <div class="ai-msg-body">
                ${msg.text}
                ${msg.speak ? `
                    <div class="ai-msg-foot-actions">
                        <button type="button" class="ai-action-chip ai-audio-chip" data-speak="${msg.speak.replace(/"/g, '&quot;')}">🔊 Eshitish</button>
                        <button type="button" class="ai-action-chip ai-copy-chip" data-copy="${msg.speak.replace(/"/g, '&quot;')}">📋 Xitoycha matn</button>
                    </div>
                ` : ''}
            </div>
        </div>
    `).join('');

    box.querySelectorAll('.ai-msg-speak-btn, .ai-audio-chip').forEach(btn => {
        btn.onclick = () => speakChineseText(btn.dataset.speak);
    });

    box.querySelectorAll('.ai-copy-chip').forEach(btn => {
        btn.onclick = () => {
            navigator.clipboard.writeText(btn.dataset.copy).then(() => {
                if (typeof showToast === 'function') showToast('Xitoycha matn nusxalandi! 📋');
            });
        };
    });

    box.scrollTop = box.scrollHeight;
}
