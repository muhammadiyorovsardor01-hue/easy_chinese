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
if (canvasView && canvasView.parentNode) {
    canvasView.parentNode.insertBefore(canvasViewPlaceholder, canvasView);
}
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

// Initialize - Robust loader that triggers whether DOM is still loading or already parsed
function initMainApp() {
    initializeTheme();
    if (typeof applyAppLanguage === 'function') applyAppLanguage();
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
}

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
        themeStatusEl.textContent = isDark ? t('settings.themeDark') : t('settings.themeLight');
    }
    if (themeBtnEl) {
        themeBtnEl.textContent = isDark ? '☀️' : '🌙';
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
    if (contTitle) contTitle.textContent = typeof t === 'function' ? t('dash.continueTitle', { hsk: currentHSK, lesson: nextLesson }) : `HSK ${currentHSK} · ${nextLesson}-darsdan davom etish`;
    if (contSub) contSub.textContent = typeof t === 'function' ? t('dash.continueSub', { track: levelTrackText, done: completedCount, total: lessonNums.length || 15 }) : `${levelTrackText} · ${completedCount} / ${lessonNums.length || 15} dars tugallangan`;

    const validMistakes = mistakeWords.filter(id => vocabularyData.some(w => w.id === id));
    const validBookmarks = bookmarkedWords.filter(id => vocabularyData.some(w => w.id === id));
    const mistakesCountEl = document.getElementById('dashboardMistakesCount');
    const mistakesSubEl = document.getElementById('dashboardMistakesSub');
    const bookmarksCountEl = document.getElementById('dashboardBookmarksCount');
    const bookmarksSubEl = document.getElementById('dashboardBookmarksSub');
    if (mistakesCountEl) mistakesCountEl.textContent = String(validMistakes.length);
    if (mistakesSubEl) {
        mistakesSubEl.textContent = validMistakes.length > 0
            ? (typeof t === 'function' ? t('dash.mistakesCountSub', { count: validMistakes.length }) : `${validMistakes.length} ta xato so'zni takrorlash`)
            : (typeof t === 'function' ? t('dash.mistakesSub') : "Xato qilingan so'zlarni takrorlash");
    }
    if (bookmarksCountEl) bookmarksCountEl.textContent = String(validBookmarks.length);
    if (bookmarksSubEl) {
        bookmarksSubEl.textContent = validBookmarks.length > 0
            ? (typeof t === 'function' ? t('dash.bookmarksCountSub', { count: validBookmarks.length }) : `${validBookmarks.length} ta saqlangan so'zni mashq qilish`)
            : (typeof t === 'function' ? t('dash.bookmarksSub') : "Sevimli so'zlar to'plami");
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
    if (canvasClearBtn) canvasClearBtn.addEventListener('click', toggleEraser);
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
    if (canvasHintBtn) canvasHintBtn.addEventListener('click', () => {
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
            <div class="sentence-uzbek">${trUz(sentence.uzbek)}</div>
            ${sentence.english ? `<div class="sentence-english">${sentence.english}</div>` : ''}
        </div>
    `).join('');

    exampleSentencesContainer.querySelectorAll('.sentence-audio-btn').forEach(btn => {
        btn.addEventListener('click', () => playWordAudio(btn.dataset.speak));
    });

    // Display grammar note
    if (lessonObj.grammar) {
        grammarNoteContainer.innerHTML = `
            <div class="grammar-content">
                <h4 class="grammar-point">${trUz(lessonObj.grammar.point)}</h4>
                <div class="grammar-pattern">
                    <strong>${trUz('Qolip (Pattern):')}</strong> ${lessonObj.grammar.pattern}
                </div>
                <div class="grammar-explanation">
                    ${trUz(lessonObj.grammar.uzbek_explanation)}
                </div>
                ${lessonObj.grammar.examples && lessonObj.grammar.examples.length > 0 ? `
                    <div class="grammar-examples">
                        ${lessonObj.grammar.examples.map(ex => `
                            <div class="grammar-example">
                                <div class="grammar-example-chinese">${ex.chinese}</div>
                                <div class="grammar-example-pinyin">${ex.pinyin}</div>
                                <div class="grammar-example-uzbek">${trUz(ex.uzbek)}</div>
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
    const targetMeaning = trUz(`Men bugun "${wA.uzbek}" (${wA.hanzi}) so‘zini o‘rganaman.`);
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
            <p class="builder-prompt">${trUz('Quyidagi ma’noga mos xitoycha gapni bo‘laklarni bosib tuzing:')}</p>
            <div class="builder-target-uzbek">“${targetMeaning}”</div>
            <div class="builder-answer-slot" id="builderAnswerSlot">
                ${picked.length === 0
                    ? `<span class="builder-slot-placeholder">${trUz('So‘z bo‘laklarini ketma-ket bosing...')}</span>`
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

let isNavigatingBack = false;

function updateBottomNavForView(viewId) {
    let activeNav = 'home';
    if (viewId === 'dashboard' || viewId === 'lessons') activeNav = 'home';
    else if (viewId === 'practice' || viewId === 'practiceFlashcards' || viewId === 'toneLab' || viewId === 'survivalPhrases' || viewId === 'pinyinChart' || viewId === 'radicalsLab') activeNav = 'practice';
    else if (viewId === 'aiLaoshi') activeNav = 'ai';
    else if (viewId === 'canvas') activeNav = 'canvas';
    else if (viewId === 'profile') activeNav = 'profile';

    document.querySelectorAll('.nav-item').forEach(nav => {
        nav.classList.toggle('active', nav.dataset.nav === activeNav);
    });
}

// View navigation with Mobile Hardware / Gesture Back Button handling
function showView(viewToShow, recordHistory = true) {
    if (!viewToShow) return;
    if (canvasReturnToLesson && viewToShow !== lesson) restoreCanvasViewToStandalone();
    document.querySelectorAll('.view').forEach(view => view.classList.remove('active'));
    viewToShow.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });

    updateBottomNavForView(viewToShow.id);

    // Mobile Hardware / Gesture Back Button handling via History API
    if (recordHistory && !isNavigatingBack) {
        const viewId = viewToShow.id;
        try {
            if (viewId === 'dashboard') {
                history.replaceState({ viewId: 'dashboard' }, '');
            } else if (!history.state || history.state.viewId !== viewId) {
                history.pushState({ viewId: viewId }, '');
            }
        } catch (e) {}
    }
}

// Global popstate event listener for hardware / gesture Back button on phones
window.addEventListener('popstate', (event) => {
    // 1. Close settings sheet if open
    const openSettings = document.getElementById('settingsSheet');
    if (openSettings && !openSettings.hidden && openSettings.classList.contains('open')) {
        closeSettingsSheet();
        const currentView = document.querySelector('.view.active');
        if (currentView) { try { history.pushState({ viewId: currentView.id }, ''); } catch (e) {} }
        return;
    }

    // 2. Close leaderboard modal if open
    const lbModal = document.getElementById('leaderboardModal');
    if (lbModal && !lbModal.classList.contains('hidden')) {
        hideLeaderboardModal();
        const currentView = document.querySelector('.view.active');
        if (currentView) { try { history.pushState({ viewId: currentView.id }, ''); } catch (e) {} }
        return;
    }

    // 3. Close pinyin syllable dock if open
    const pinyinDock = document.getElementById('pinyinSyllableDock');
    if (pinyinDock && !pinyinDock.hidden) {
        pinyinDock.hidden = true;
        const currentView = document.querySelector('.view.active');
        if (currentView) { try { history.pushState({ viewId: currentView.id }, ''); } catch (e) {} }
        return;
    }

    // 4. Close any open modals / sheets first
    const openModal = document.querySelector('.modal.active, .sheet-modal.active, #strokeModal.active, .ios-install-sheet.active');
    if (openModal) {
        openModal.classList.remove('active');
        const currentView = document.querySelector('.view.active');
        if (currentView) {
            try { history.pushState({ viewId: currentView.id }, ''); } catch (e) {}
        }
        return;
    }

    // 2. Stop any active speech recognition
    if (activeSpeechRecognition) {
        try { activeSpeechRecognition.stop(); } catch (e) {}
        activeSpeechRecognition = null;
    }

    // 3. Smoothly navigate to previous view
    const targetViewId = event.state?.viewId || 'dashboard';
    const targetElement = document.getElementById(targetViewId) || document.getElementById('dashboard');
    if (targetElement) {
        isNavigatingBack = true;
        if (targetViewId === 'dashboard') {
            applyHskLevelTheme(currentHSK);
            updateDashboardBentoUI();
        } else if (targetViewId === 'practice') {
            updatePracticeHubUI();
        } else if (targetViewId === 'lessons') {
            generateLessonsGrid();
        }
        showView(targetElement, false);
        isNavigatingBack = false;
    }
});

// Set initial root history state on load
try {
    if (!history.state || !history.state.viewId) {
        history.replaceState({ viewId: 'dashboard' }, '');
    }
} catch (e) {}

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
        1: typeof t === 'function' ? t('hsk.1_label') : "HSK 1 · Boshlang'ich",
        2: typeof t === 'function' ? t('hsk.2_label') : "HSK 2 · Quyi daraja",
        3: typeof t === 'function' ? t('hsk.3_label') : "HSK 3 · O'rta daraja",
        4: typeof t === 'function' ? t('hsk.4_label') : "HSK 4 · Yuqori o'rta",
        5: typeof t === 'function' ? t('hsk.5_label') : "HSK 5 · Yuqori daraja"
    };
    lessonsTitle.textContent = hskNames[currentHSK] || `HSK ${currentHSK}`;
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
    const wUnit = typeof t === 'function' ? t('lesson.wordsUnit') : "so'z";
    const lWord = typeof t === 'function' ? t('lesson.word') : 'Dars';
    if (currentWords.length === 0) {
        lessonTitle.textContent = `${lWord} ${lessonNumber}`;
        currentWords = [{ id: 0, hsk: currentHSK, track: selectedTrack.dataTrack, lesson: lessonNumber, hanzi: "暂无", pinyin: "zàn wú", uzbek: "Hozircha yo'q" }];
    } else {
        lessonTitle.textContent = `HSK ${currentHSK} · ${lWord} ${lessonNumber} (${currentWords.length} ${wUnit})`;
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
    const fillEl = document.getElementById('lessonsBannerFill');
    const sealEl = document.getElementById('lessonsSealStamp');
    const selectedTrack = lessonTracks[currentLessonTrack] || lessonTracks.classic;
    const trackLessons = vocabularyData.filter(word =>
        matchesHskAndTrack(word, currentHSK, selectedTrack.dataTrack)
    );
    const lessonNums = [...new Set(trackLessons.map(word => word.lesson))].sort((a, b) => a - b);
    const completed = lessonNums.filter(num => isLessonComplete(num, selectedTrack.dataTrack)).length;
    const total = lessonNums.length || 15;
    const pct = Math.max(5, Math.round((completed / total) * 100));

    const sealChars = { 1: '\u521D', 2: '\u8FDB', 3: '\u4E2D', 4: '\u9AD8', 5: '\u7CBE' };
    const stageTitles = {
        1: "1-BOSQICH \u00B7 \u521D\u5B66\u4E4B\u8DEF (Ilk qadamlar)",
        2: "2-BOSQICH \u00B7 \u65E5\u5E38\u4EA4\u6D41 (Kunlik muloqot)",
        3: "3-BOSQICH \u00B7 \u8FDB\u9636\u8868\u8FBE (Erkin suhbat)",
        4: "4-BOSQICH \u00B7 \u6DF1\u5EA6\u6C49\u8BED (Ravon nutq)",
        5: "5-BOSQICH \u00B7 \u6C49\u8BED\u5927\u5E08 (Yuqori mahorat)"
    };
    if (sealEl) sealEl.textContent = sealChars[currentHSK] || '\u6C49';
    if (kicker) kicker.textContent = stageTitles[currentHSK] || `HSK ${currentHSK}`;
    if (progress) progress.textContent = `${completed} / ${total} dars`;
    if (fillEl) fillEl.style.width = `${pct}%`;
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
        learning: typeof t === 'function' ? t('step.learn') : "O'rganish",
        flashcards: typeof t === 'function' ? t('step.cards') : 'Kartochka',
        quiz: typeof t === 'function' ? t('step.quiz') : 'Test',
        writing: typeof t === 'function' ? t('step.write') : 'Yozish',
        complete: typeof t === 'function' ? t('step.done') : 'Yakun'
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
        lessonFlowStatus.textContent = typeof t === 'function' ? t('flow.statusComplete') : '🎉 5/5 · Dars yakunlandi!';
        lessonFlowContinue.textContent = typeof t === 'function' ? t('step.done') : 'Yakun';
        lessonFlowContinue.disabled = true;
    } else if (activeStep === 'learning') {
        lessonFlowStatus.textContent = typeof t === 'function' ? t('flow.statusLearning', { count: currentWords.length }) : `1/5 · (${currentWords.length})`;
        lessonFlowContinue.textContent = (typeof t === 'function' ? t('lesson.tabFlashcard') : 'Kartochkalar') + ' →';
        lessonFlowContinue.disabled = false;
    } else if (activeStep === 'flashcards') {
        lessonFlowStatus.textContent = typeof t === 'function' ? t('flow.statusFlashcards', { current: flashcardIndex + 1, total: currentWords.length }) : `2/5 · ${flashcardIndex + 1} / ${currentWords.length}`;
        lessonFlowContinue.textContent = (typeof t === 'function' ? t('lesson.tabQuiz') : 'Test') + ' →';
        lessonFlowContinue.disabled = false;
    } else if (activeStep === 'quiz') {
        lessonFlowStatus.textContent = typeof t === 'function' ? t('flow.statusQuiz', { current: quizIndex + 1, total: currentWords.length }) : `3/5 · ${quizIndex + 1} / ${currentWords.length}`;
        lessonFlowContinue.textContent = (typeof t === 'function' ? t('lesson.tabWriting') : 'Yozish') + ' →';
        lessonFlowContinue.disabled = false;
    } else if (activeStep === 'writing') {
        lessonFlowStatus.textContent = typeof t === 'function' ? t('flow.statusWriting', { done: progress.writingWordIds.length, total: lessonWordIds.length }) : `4/5 · ${progress.writingWordIds.length} / ${lessonWordIds.length}`;
        lessonFlowContinue.textContent = (typeof t === 'function' ? t('step.done') : 'Yakun') + ' →';
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

// Generate lessons grid (Pure Vector SVG Illustrations, Tight S-Curve & Zero Dead Space)
function generateLessonsGrid() {
    lessonsGrid.innerHTML = '';

    const selectedTrack = lessonTracks[currentLessonTrack] || lessonTracks.classic;

    let filteredWords = vocabularyData.filter(word =>
        matchesHskAndTrack(word, currentHSK, selectedTrack.dataTrack)
    );

    if (searchQuery) {
        filteredWords = filteredWords.filter(word =>
            word.hanzi.toLowerCase().includes(searchQuery) ||
            word.pinyin.toLowerCase().includes(searchQuery) ||
            word.uzbek.toLowerCase().includes(searchQuery)
        );
    }

    const lessonsList = [...new Set(filteredWords.map(word => word.lesson))].sort((a, b) => a - b);

    if (lessonsList.length === 0) {
        lessonsGrid.innerHTML = '<p class="no-results">Hech qanday dars topilmadi.</p>';
        return;
    }

    // Crisp monochrome vector icons for inside the 3D circular buttons (NO Windows OS emojis!)
    const NODE_SVGS = {
        star: `<svg viewBox="0 0 24 24" width="30" height="30" fill="currentColor"><path d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4l-5.9 3.1 1.2-6.5-4.8-4.6 6.6-.9L12 2.5z"/></svg>`,
        check: `<svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,
        lock: `<svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor"><path d="M17 9h-1V7a4 4 0 0 0-8 0v2H7a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2zm-6 7.73V18a1 1 0 0 1-2 0v-1.27a2 2 0 1 1 2 0zM10 9V7a2 2 0 0 1 4 0v2h-4z"/></svg>`,
        audio: `<svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor"><path d="M12 3a9 9 0 0 0-9 9v6a3 3 0 0 0 3 3h2v-8H5v-1a7 7 0 0 1 14 0v1h-3v8h2a3 3 0 0 0 3-3v-6a9 9 0 0 0-9-9z"/></svg>`,
        trophy: `<svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor"><path d="M18 4V3H6v1H3v4c0 2.21 1.79 4 4 4h.28A6.01 6.01 0 0 0 11 15.9V18H8v2h8v-2h-3v-2.1A6.01 6.01 0 0 0 16.72 12H17c2.21 0 4-1.79 4-4V4h-3zM5 8V6h1v4c-1.1 0-2-.9-2-2zm14 0c0 1.1-.9 2-2 2V6h1v2z"/></svg>`
    };

    // Real 3D Clay/Pixar-style rendered transparent PNG assets with breathing/swaying movement
    const MASCOT_3D = {
        panda: `<div class="mascot-3d-stage">
            <img src="assets/mascot-panda-3d.png" alt="3D Panda" class="mascot-3d-img" width="108" height="108" loading="eager">
            <span class="mascot-3d-shadow"></span>
        </div>`,
        dragon: `<div class="mascot-3d-stage">
            <img src="assets/mascot-dragon-3d.png" alt="3D Jade Dragon" class="mascot-3d-img mascot-3d-dragon" width="110" height="110" loading="lazy">
            <span class="mascot-3d-shadow"></span>
        </div>`,
        cat: `<div class="mascot-3d-stage">
            <img src="assets/mascot-cat-3d.png" alt="3D Lucky Cat" class="mascot-3d-img mascot-3d-cat" width="108" height="108" loading="lazy">
            <span class="mascot-3d-shadow"></span>
        </div>`,
        tiger: `<div class="mascot-3d-stage">
            <img src="assets/mascot-tiger-3d.png" alt="3D Baby Tiger" class="mascot-3d-img mascot-3d-tiger" width="108" height="108" loading="lazy">
            <span class="mascot-3d-shadow"></span>
        </div>`
    };

    const CHEST_3D_LOCKED = `<div class="chest-3d-stage chest-3d-locked">
        <img src="assets/chest-3d.png" alt="Bonus Chest" class="chest-3d-img" width="84" height="84" loading="lazy">
        <span class="chest-3d-shadow"></span>
    </div>`;

    const CHEST_3D_OPEN = `<div class="chest-3d-stage chest-3d-ready">
        <img src="assets/chest-3d.png" alt="Ready Bonus Chest" class="chest-3d-img" width="88" height="88" loading="lazy">
        <span class="chest-3d-shadow"></span>
    </div>`;

    const firstOpen = lessonsList.find(n => !isLessonComplete(n, selectedTrack.dataTrack)) || lessonsList[0];

    const waveOffsets = [
        0, -44, -68, -38, 0,
        44, 68, 38, 0, -44,
        -68, -38, 0, 44, 68
    ];

    const sideMascots = {
        3: { html: MASCOT_3D.panda, cn: '\u52A0\u6CB9\uFF01', pinyin: 'Ji\u0101y\u00F3u!', uz: "Bo'sh kelmang!", side: 'right' },
        7: { html: MASCOT_3D.dragon, cn: '\u592A\u68D2\u4E86\uFF01', pinyin: 'T\u00E0i b\u00E0ng le!', uz: 'Barakalla!', side: 'left' },
        11: { html: MASCOT_3D.cat, cn: '\u5409\u7965\u5982\u610F\uFF01', pinyin: 'J\u00EDxi\u00E1ng r\u00FAy\u00EC!', uz: "Omad sizga yor!", side: 'right' },
        15: { html: MASCOT_3D.tiger, cn: '\u864E\u864E\u751F\u5A01\uFF01', pinyin: 'H\u01D4 h\u01D4 sh\u0113ng w\u0113i!', uz: "G'alabaga olg'a!", side: 'left' }
    };
    const unitMeta = {
        2: { badge: "2-BO'LIM \u00B7 \u7B2C\u4E8C\u5355\u5143", title: "Kundalik hayot, Oila va Vaqt" },
        3: { badge: "3-BO'LIM \u00B7 \u7B2C\u4E09\u5355\u5143", title: "Sayohat, Xarid va Muloqot" }
    };

    let claimedChests = {};
    try {
        claimedChests = JSON.parse(localStorage.getItem('easyChineseClaimedChests') || '{}') || {};
    } catch (e) { claimedChests = {}; }

    lessonsList.forEach((lessonNum, idx) => {
        const lessonWords = vocabularyData.filter(word =>
            matchesHskAndTrack(word, currentHSK, selectedTrack.dataTrack) && word.lesson === lessonNum
        );
        const wordCount = lessonWords.length;
        const done = isLessonComplete(lessonNum, selectedTrack.dataTrack);
        const isCurrent = lessonNum === firstOpen;

        const rowWrap = document.createElement('div');
        rowWrap.className = 'duo-path-row';
        const offsetPx = searchQuery ? 0 : (waveOffsets[idx % waveOffsets.length] || 0);
        rowWrap.style.setProperty('--duo-offset', `${offsetPx}px`);

        const lessonBtn = document.createElement('button');
        lessonBtn.type = 'button';
        lessonBtn.className = 'lesson-btn' + (done ? ' node-completed' : (isCurrent ? ' node-current' : ' node-locked'));
        lessonBtn.dataset.lessonNum = String(lessonNum);

        if (done) {
            lessonBtn.setAttribute('aria-label', `Lesson ${lessonNum} completed, ${wordCount} words`);
        } else if (isCurrent) {
            lessonBtn.setAttribute('aria-label', `Lesson ${lessonNum} current, ${wordCount} words`);
        } else {
            lessonBtn.setAttribute('aria-label', `Lesson ${lessonNum} locked, ${wordCount} words`);
        }

        // 3D Tactile Circle Disk + Vector Icon (NO Windows OS Emojis!)
        const disk = document.createElement('span');
        disk.className = 'duo-node-disk';

        if (isCurrent) {
            const normTrack = currentHSK === 1 ? selectedTrack.dataTrack : 'classic';
            const progressRec = typeof getLessonFlowRecord === 'function' ? getLessonFlowRecord(normTrack, currentHSK, lessonNum) : null;
            const completedCount = progressRec && Array.isArray(progressRec.completedSteps) ? progressRec.completedSteps.length : 0;
            const pct = completedCount > 0 ? Math.min(100, Math.round((completedCount / 4) * 100)) : 0;
            const circumference = 257.6;
            const strokeOffset = circumference - (Math.max(15, pct) / 100) * circumference;

            const ringSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            ringSvg.setAttribute('class', 'duo-progress-ring');
            ringSvg.setAttribute('viewBox', '0 0 94 94');
            ringSvg.setAttribute('aria-hidden', 'true');
            ringSvg.innerHTML = `<circle class="ring-bg" cx="47" cy="47" r="41"></circle><circle class="ring-fill" cx="47" cy="47" r="41" stroke-dasharray="${circumference}" stroke-dashoffset="${strokeOffset}"></circle>`;
            disk.appendChild(ringSvg);

            const startBubble = document.createElement('span');
            startBubble.className = 'duo-start-bubble';
            startBubble.textContent = completedCount > 0 ? `DAVOM ETISH \u00B7 ${pct}%` : 'BOSHLASH';
            lessonBtn.appendChild(startBubble);
        }
        const iconSpan = document.createElement('span');
        iconSpan.className = 'duo-node-icon';

        if (done) {
            iconSpan.innerHTML = (lessonNum % 2 === 0) ? '<span class="duo-hanzi-glyph">\u5B57</span>' : NODE_SVGS.check;
        } else if (isCurrent) {
            iconSpan.innerHTML = (lessonNum % 2 === 0) ? '<span class="duo-hanzi-glyph">\u5B57</span>' : NODE_SVGS.star;
        } else if (lessonNum === firstOpen + 1) {
            iconSpan.innerHTML = '<span class="duo-hanzi-glyph">\u5B57</span>';
        } else if (lessonNum === firstOpen + 2) {
            iconSpan.innerHTML = NODE_SVGS.audio;
        } else if (lessonNum % 5 === 0) {
            iconSpan.innerHTML = NODE_SVGS.trophy;
        } else {
            iconSpan.innerHTML = NODE_SVGS.lock;
        }
        disk.appendChild(iconSpan);
        lessonBtn.appendChild(disk);

        // Keep label elements in DOM for screen readers / search mode
        const lessonLabel = document.createElement('span');
        lessonLabel.className = 'lesson-btn-title';
        const sampleHanzi = lessonWords.slice(0, 2).map(w => w.hanzi).join(' \u00B7 ');
        lessonLabel.textContent = `${lessonNum}-dars` + (sampleHanzi ? ` \u00B7 ${sampleHanzi}` : '');
        const wordCountLabel = document.createElement('span');
        wordCountLabel.className = 'lesson-word-count';
        wordCountLabel.textContent = `${wordCount} so'z`;

        lessonBtn.appendChild(lessonLabel);
        lessonBtn.appendChild(wordCountLabel);
        lessonBtn.addEventListener('click', () => showLessonView(lessonNum));
        rowWrap.appendChild(lessonBtn);

        // Vector Companion Illustration right at the Curve Apex (Lesson 3, 7, 11, 15)
        if (!searchQuery && sideMascots[lessonNum]) {
            const mInfo = sideMascots[lessonNum];
            const mascotEl = document.createElement('button');
            mascotEl.type = 'button';
            mascotEl.className = `duo-side-mascot mascot-${mInfo.side}` + (done || isCurrent || lessonNum <= firstOpen + 2 ? ' mascot-awake' : '');
            mascotEl.setAttribute('aria-label', `${mInfo.cn} (${mInfo.uz})`);
            mascotEl.innerHTML = `
                <span class="duo-mascot-svg-wrap">${mInfo.html}</span>
                <span class="duo-mascot-stars">\u2605 \u2605 \u2605</span>
            `;
            mascotEl.addEventListener('click', (e) => {
                e.stopPropagation();
                mascotEl.classList.remove('mascot-pop');
                void mascotEl.offsetWidth;
                mascotEl.classList.add('mascot-pop');
                if (typeof speakChineseText === 'function') {
                    speakChineseText(mInfo.cn);
                }
                showToast(`${mInfo.cn} (${mInfo.pinyin}) \u2014 ${mInfo.uz}`);
            });
            rowWrap.appendChild(mascotEl);
        }

        lessonsGrid.appendChild(rowWrap);

        // Every 4th lesson (before the 5th trophy node, just like Duolingo!): Vector 3D Chest right on the path!
        if (!searchQuery && lessonNum % 5 === 4) {
            const unitIdx = Math.floor(lessonNum / 5) + 1;
            const chestKey = `${selectedTrack.dataTrack}:${currentHSK}:${unitIdx}`;
            const unitLessons = [lessonNum - 3, lessonNum - 2, lessonNum - 1, lessonNum];
            const unitAllDone = unitLessons.every(n => isLessonComplete(n, selectedTrack.dataTrack));
            const isClaimed = Boolean(claimedChests[chestKey]);

            const chestRow = document.createElement('div');
            chestRow.className = 'duo-chest-row';
            const chestBtn = document.createElement('button');
            chestBtn.type = 'button';
            chestBtn.className = 'duo-chest-btn' + (isClaimed || unitAllDone ? ' chest-ready' : ' chest-locked');
            chestBtn.setAttribute('aria-label', 'Bonus XP Chest');
            chestBtn.innerHTML = (isClaimed || unitAllDone) ? CHEST_3D_OPEN : CHEST_3D_LOCKED;
            chestBtn.addEventListener('click', () => {
                if (isClaimed) {
                    showToast("\u2728 Bu bonus sandiqchasini allaqachon ochgansiz!");
                    return;
                }
                if (unitAllDone) {
                    claimedChests[chestKey] = true;
                    try { localStorage.setItem('easyChineseClaimedChests', JSON.stringify(claimedChests)); } catch (e) {}
                    if (typeof addXP === 'function') addXP(25);
                    showToast("\uD83C\uDF89 Barakalla! Sandiqdan +25 XP bonus oldingiz!");
                    generateLessonsGrid();
                } else {
                    showToast(`\uD83C\uDFAF Sandiqni ochish uchun oldingi darslarni tugating (+25 XP)!`);
                }
            });
            chestRow.appendChild(chestBtn);
            lessonsGrid.appendChild(chestRow);
        }

        // After every 5th lesson: Clean Section Header Line
        if (!searchQuery && lessonNum % 5 === 0 && lessonNum < lessonsList.length) {
            const unitIdx = Math.floor(lessonNum / 5);
            const nextUnit = unitMeta[unitIdx + 1];
            if (nextUnit) {
                const divider = document.createElement('div');
                divider.className = 'duo-unit-divider';
                divider.innerHTML = `
                    <span class="duo-divider-line"></span>
                    <span class="duo-divider-text">${nextUnit.title}</span>
                    <span class="duo-divider-line"></span>
                `;
                lessonsGrid.appendChild(divider);
            }
        }
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
    flashcardUzbek.textContent = trUz(word.uzbek);
    currentCard.textContent = flashcardIndex + 1;
    totalCards.textContent = currentWords.length;
    const wordProgressEl = document.getElementById('wordProgress');
    if (wordProgressEl) {
        wordProgressEl.textContent = typeof t === 'function' ? t('card.wordProgress', { current: flashcardIndex + 1, total: currentWords.length }) : `${flashcardIndex + 1} / ${currentWords.length}`;
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
        nextCardLabel.textContent = (flashcardIndex >= currentWords.length - 1)
            ? ((typeof t === 'function' ? t('lesson.tabQuiz') : 'Test') + ' →')
            : (typeof t === 'function' ? t('card.next') : 'Keyingi');
    }
}

// Web Speech API for Chinese pronunciation
// Universal Audio Player for HSK Words (Studio MP3 -> Youdao Native Speaker Stream -> SpeechSynthesis)
let currentWordAudio = null;

const WORD_STUDIO_MAP = {
    '\u4F60': 'ni3',
    '\u597D': 'hao3',
    '\u4F60\u597D': 'nihao',
    '\u518D\u89C1': 'zaijian',
    '\u8C22\u8C22': 'xiexie',
    '\u4E0D\u662F': 'bushi',
    '\u5F88\u597D': 'henhao',
    '\u5496\u5561': 'kafei',
    '\u5317\u4EAC': 'beijing',
    '\u4E2D\u56FD': 'zhongguo',
    '\u5B66\u4E60': 'xuexi',
    '\u5988\u5988': 'mama',
    '\u6211': 'wo3',
    '\u662F': 'shi4',
    '\u770B': 'kan4',
    '\u5403': 'chi1',
    '\u53BB': 'qu4',
    '\u6765': 'lai2',
    '\u6709': 'you3',
    '\u5927': 'da4',
    '\u5C0F': 'xiao3',
    '\u51B7': 'leng3',
    '\u6C34': 'shui3',
    '\u83DC': 'cai4',
    '\u5728': 'zai4',
    '\u4E09': 'san1',
    '\u56DB': 'si4',
    '\u516D': 'liu4',
    '\u4E03': 'qi1',
    '\u516B': 'ba1',
    '\u4E70': 'mai3',
    '\u559D': 'he1',
    '\u4E66': 'shu1',
    '\u98DE': 'fei1',
    '\u4EEC': 'men2',
    '\u7684': 'de5',
    '\u4E86': 'le5',
    '爸爸': 'baba',
    '睡觉': 'shuijiao4',
    '水饺': 'shuijiao3',
    '练习': 'lianxi4',
    '联系': 'lianxi2',
    '手表': 'shoubiao',
    '可以': 'keyi',
    '不对': 'budui',
    '不要': 'buyao',
    '不吃': 'buchi',
    '不好': 'buhao',
    '一二三': 'yiersan',
    '一个': 'yige',
    '一天': 'yitian',
    '一年': 'yinian',
    '一起': 'yiqi',
    '老师': 'laoshi',
    '朋友': 'pengyou',
    '喜欢': 'xihuan',
    '高兴': 'gaoxing',
    '明天': 'mingtian',
    '面条': 'miantiao',
    '电脑': 'diannao',
    '手机': 'shouji'
};

function playWordAudio(wordOrText, customRate = null) {
    if (!wordOrText) return null;
    const hanzi = (typeof wordOrText === 'object') ? (wordOrText.hanzi || wordOrText.speak) : String(wordOrText);
    if (!hanzi) return null;

    const clean = hanzi.trim();
    const rate = (typeof customRate === 'number' && customRate > 0) ? customRate : ((typeof getSpeechRate === 'function') ? getSpeechRate() : 1.0);

    // 1. Try local studio MP3 recording first (if available in assets/audio/tones/)
    const localSoundKey = (typeof wordOrText === 'object' && wordOrText.sound) || WORD_STUDIO_MAP[clean];
    if (localSoundKey && typeof playNativeToneSound === 'function') {
        const audio = playNativeToneSound(localSoundKey, clean, rate);
        if (audio) return audio;
    }

    // 2. Try native human speaker voice stream from Youdao CDN
    try {
        if (currentWordAudio) {
            currentWordAudio.pause();
            currentWordAudio.currentTime = 0;
            currentWordAudio = null;
        }
        const audioUrl = `https://dict.youdao.com/dictvoice?audio=${encodeURIComponent(clean)}&type=1`;
        const audio = new Audio(audioUrl);
        currentWordAudio = audio;
        audio.playbackRate = rate;
        audio.preservesPitch = true;
        if ('webkitPreservesPitch' in audio) audio.webkitPreservesPitch = true;
        if ('mozPreservesPitch' in audio) audio.mozPreservesPitch = true;
        const playPromise = audio.play();
        if (playPromise !== undefined) {
            playPromise.catch(() => {
                // 3. Fallback to browser SpeechSynthesis if online CDN fails or offline
                speakChineseText(clean, rate, true);
            });
        }
        return audio;
    } catch (e) {
        // 3. Fallback to SpeechSynthesis
        speakChineseText(clean, rate, true);
    }
}

function playPronunciation() {
    if (!currentWords || currentWords.length === 0) return;
    const idx = (typeof flashcardIndex === 'number' && flashcardIndex >= 0 && flashcardIndex < currentWords.length) ? flashcardIndex : 0;
    const word = currentWords[idx];
    if (!word) return;

    // Visual pulse feedback on audio buttons
    const aBtn = document.getElementById('audioBtn');
    const faBtn = document.getElementById('flashcardAudioBtn');
    if (aBtn) {
        aBtn.classList.add('playing');
        setTimeout(() => aBtn.classList.remove('playing'), 650);
    }
    if (faBtn) {
        faBtn.classList.add('playing');
        setTimeout(() => faBtn.classList.remove('playing'), 650);
    }

    playWordAudio(word);
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
        markLearned.textContent = typeof t === 'function' ? t('card.learnedDone') : '✓ Yodlandi';
    } else {
        markLearned.classList.remove('learned');
        markLearned.textContent = typeof t === 'function' ? t('card.learned') : '✓ Bilaman';
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
    btn.textContent = isSaved
        ? (typeof t === 'function' ? t('card.bookmarked') : '⭐ Saqlangan')
        : (typeof t === 'function' ? t('card.bookmark') : '☆ Saqlash');
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

function detectSyllableTone(py) {
    if (!py) return 5;
    const s = py.toLowerCase().trim();
    const numMatch = s.match(/[1-5]$/);
    if (numMatch) return parseInt(numMatch[0], 10);
    if (/[āēīōūǖ]/.test(s)) return 1;
    if (/[áéíóúǘ]/.test(s)) return 2;
    if (/[ǎěǐǒǔǚ]/.test(s)) return 3;
    if (/[àèìòùǜ]/.test(s)) return 4;
    return 5;
}

const HANZI_DICT = {
    // Single characters
    '妈': { pinyin: 'mā', tone: 1, base: 'ma' },
    '麻': { pinyin: 'má', tone: 2, base: 'ma' },
    '马': { pinyin: 'mǎ', tone: 3, base: 'ma' },
    '骂': { pinyin: 'mà', tone: 4, base: 'ma' },
    '吗': { pinyin: 'ma', tone: 5, base: 'ma' },
    '八': { pinyin: 'bā', tone: 1, base: 'ba' },
    '拔': { pinyin: 'bá', tone: 2, base: 'ba' },
    '把': { pinyin: 'bǎ', tone: 3, base: 'ba' },
    '靶': { pinyin: 'bǎ', tone: 3, base: 'ba' },
    '爸': { pinyin: 'bà', tone: 4, base: 'ba' },
    '吧': { pinyin: 'ba', tone: 5, base: 'ba' },
    '搭': { pinyin: 'dā', tone: 1, base: 'da' },
    '达': { pinyin: 'dá', tone: 2, base: 'da' },
    '打': { pinyin: 'dǎ', tone: 3, base: 'da' },
    '大': { pinyin: 'dà', tone: 4, base: 'da' },
    '他': { pinyin: 'tā', tone: 1, base: 'ta' },
    '她': { pinyin: 'tā', tone: 1, base: 'ta' },
    '它': { pinyin: 'tā', tone: 1, base: 'ta' },
    '塔': { pinyin: 'tǎ', tone: 3, base: 'ta' },
    '踏': { pinyin: 'tà', tone: 4, base: 'ta' },
    '喝': { pinyin: 'hē', tone: 1, base: 'he' },
    '河': { pinyin: 'hé', tone: 2, base: 'he' },
    '合': { pinyin: 'hé', tone: 2, base: 'he' },
    '和': { pinyin: 'hé', tone: 2, base: 'he' },
    '贺': { pinyin: 'hè', tone: 4, base: 'he' },
    '好': { pinyin: 'hǎo', tone: 3, base: 'hao' },
    '号': { pinyin: 'hào', tone: 4, base: 'hao' },
    '诗': { pinyin: 'shī', tone: 1, base: 'shi' },
    '师': { pinyin: 'shī', tone: 1, base: 'shi' },
    '十': { pinyin: 'shí', tone: 2, base: 'shi' },
    '时': { pinyin: 'shí', tone: 2, base: 'shi' },
    '石': { pinyin: 'shí', tone: 2, base: 'shi' },
    '史': { pinyin: 'shǐ', tone: 3, base: 'shi' },
    '是': { pinyin: 'shì', tone: 4, base: 'shi' },
    '事': { pinyin: 'shì', tone: 4, base: 'shi' },
    '世': { pinyin: 'shì', tone: 4, base: 'shi' },
    '司': { pinyin: 'sī', tone: 1, base: 'si' },
    '撕': { pinyin: 'sī', tone: 1, base: 'si' },
    '死': { pinyin: 'sǐ', tone: 3, base: 'si' },
    '四': { pinyin: 'sì', tone: 4, base: 'si' },
    '吃': { pinyin: 'chī', tone: 1, base: 'chi' },
    '池': { pinyin: 'chí', tone: 2, base: 'chi' },
    '迟': { pinyin: 'chí', tone: 2, base: 'chi' },
    '尺': { pinyin: 'chǐ', tone: 3, base: 'chi' },
    '齿': { pinyin: 'chǐ', tone: 3, base: 'chi' },
    '翅': { pinyin: 'chì', tone: 4, base: 'chi' },
    '知': { pinyin: 'zhī', tone: 1, base: 'zhi' },
    '只': { pinyin: 'zhī', tone: 1, base: 'zhi' },
    '直': { pinyin: 'zhí', tone: 2, base: 'zhi' },
    '指': { pinyin: 'zhǐ', tone: 3, base: 'zhi' },
    '志': { pinyin: 'zhì', tone: 4, base: 'zhi' },
    '西': { pinyin: 'xī', tone: 1, base: 'xi' },
    '息': { pinyin: 'xī', tone: 1, base: 'xi' },
    '习': { pinyin: 'xí', tone: 2, base: 'xi' },
    '席': { pinyin: 'xí', tone: 2, base: 'xi' },
    '洗': { pinyin: 'xǐ', tone: 3, base: 'xi' },
    '喜': { pinyin: 'xǐ', tone: 3, base: 'xi' },
    '戏': { pinyin: 'xì', tone: 4, base: 'xi' },
    '细': { pinyin: 'xì', tone: 4, base: 'xi' },
    '系': { pinyin: 'xì', tone: 4, base: 'xi' },
    '七': { pinyin: 'qī', tone: 1, base: 'qi' },
    '期': { pinyin: 'qī', tone: 1, base: 'qi' },
    '妻': { pinyin: 'qī', tone: 1, base: 'qi' },
    '骑': { pinyin: 'qí', tone: 2, base: 'qi' },
    '齐': { pinyin: 'qí', tone: 2, base: 'qi' },
    '起': { pinyin: 'qǐ', tone: 3, base: 'qi' },
    '气': { pinyin: 'qì', tone: 4, base: 'qi' },
    '去': { pinyin: 'qù', tone: 4, base: 'qu' },
    '离': { pinyin: 'lí', tone: 2, base: 'li' },
    '里': { pinyin: 'lǐ', tone: 3, base: 'li' },
    '力': { pinyin: 'lì', tone: 4, base: 'li' },
    '丽': { pinyin: 'lì', tone: 4, base: 'li' },
    '妮': { pinyin: 'nī', tone: 1, base: 'ni' },
    '泥': { pinyin: 'ní', tone: 2, base: 'ni' },
    '你': { pinyin: 'nǐ', tone: 3, base: 'ni' },
    '匿': { pinyin: 'nì', tone: 4, base: 'ni' },
    '迂': { pinyin: 'yū', tone: 1, base: 'yu' },
    '鱼': { pinyin: 'yú', tone: 2, base: 'yu' },
    '雨': { pinyin: 'yǔ', tone: 3, base: 'yu' },
    '语': { pinyin: 'yǔ', tone: 3, base: 'yu' },
    '玉': { pinyin: 'yù', tone: 4, base: 'yu' },
    '月': { pinyin: 'yuè', tone: 4, base: 'yue' },
    '一': { pinyin: 'yī', tone: 1, base: 'yi' },
    '医': { pinyin: 'yī', tone: 1, base: 'yi' },
    '移': { pinyin: 'yí', tone: 2, base: 'yi' },
    '姨': { pinyin: 'yí', tone: 2, base: 'yi' },
    '以': { pinyin: 'yǐ', tone: 3, base: 'yi' },
    '椅': { pinyin: 'yǐ', tone: 3, base: 'yi' },
    '意': { pinyin: 'yì', tone: 4, base: 'yi' },
    '易': { pinyin: 'yì', tone: 4, base: 'yi' },
    '屋': { pinyin: 'wū', tone: 1, base: 'wu' },
    '无': { pinyin: 'wú', tone: 2, base: 'wu' },
    '五': { pinyin: 'wǔ', tone: 3, base: 'wu' },
    '午': { pinyin: 'wǔ', tone: 3, base: 'wu' },
    '物': { pinyin: 'wù', tone: 4, base: 'wu' },
    '误': { pinyin: 'wù', tone: 4, base: 'wu' },
    '谁': { pinyin: 'shéi', tone: 2, base: 'shei' },
    '水': { pinyin: 'shuǐ', tone: 3, base: 'shui' },
    '睡': { pinyin: 'shuì', tone: 4, base: 'shui' },
    '说': { pinyin: 'shuō', tone: 1, base: 'shuo' },
    '书': { pinyin: 'shū', tone: 1, base: 'shu' },
    '树': { pinyin: 'shù', tone: 4, base: 'shu' },
    '温': { pinyin: 'wēn', tone: 1, base: 'wen' },
    '文': { pinyin: 'wén', tone: 2, base: 'wen' },
    '吻': { pinyin: 'wěn', tone: 3, base: 'wen' },
    '问': { pinyin: 'wèn', tone: 4, base: 'wen' },
    '人': { pinyin: 'rén', tone: 2, base: 'ren' },
    '忍': { pinyin: 'rěn', tone: 3, base: 'ren' },
    '认': { pinyin: 'rèn', tone: 4, base: 'ren' },
    '日': { pinyin: 'rì', tone: 4, base: 'ri' },
    '中': { pinyin: 'zhōng', tone: 1, base: 'zhong' },
    '钟': { pinyin: 'zhōng', tone: 1, base: 'zhong' },
    '种': { pinyin: 'zhǒng', tone: 3, base: 'zhong' },
    '重': { pinyin: 'zhòng', tone: 4, base: 'zhong' },
    '买': { pinyin: 'mǎi', tone: 3, base: 'mai' },
    '卖': { pinyin: 'mài', tone: 4, base: 'mai' },
    '麦': { pinyin: 'mài', tone: 4, base: 'mai' },
    '练': { pinyin: 'liàn', tone: 4, base: 'lian' },
    '联': { pinyin: 'lián', tone: 2, base: 'lian' },
    '脸': { pinyin: 'liǎn', tone: 3, base: 'lian' },
    '饺': { pinyin: 'jiǎo', tone: 3, base: 'jiao' },
    '觉': { pinyin: 'jiào', tone: 4, base: 'jiao' },
    '叫': { pinyin: 'jiào', tone: 4, base: 'jiao' },
    '眼': { pinyin: 'yǎn', tone: 3, base: 'yan' },
    '睛': { pinyin: 'jing', tone: 5, base: 'jing' },
    '镜': { pinyin: 'jìng', tone: 4, base: 'jing' },
    '京': { pinyin: 'jīng', tone: 1, base: 'jing' },
    '北': { pinyin: 'běi', tone: 3, base: 'bei' },
    '杯': { pinyin: 'bēi', tone: 1, base: 'bei' },
    '飞': { pinyin: 'fēi', tone: 1, base: 'fei' },
    '啡': { pinyin: 'fēi', tone: 1, base: 'fei' },
    '咖': { pinyin: 'kā', tone: 1, base: 'ka' },
    '国': { pinyin: 'guó', tone: 2, base: 'guo' },
    '过': { pinyin: 'guò', tone: 4, base: 'guo' },
    '果': { pinyin: 'guǒ', tone: 3, base: 'guo' },
    '不': { pinyin: 'bù', tone: 4, base: 'bu' },
    '谢': { pinyin: 'xiè', tone: 4, base: 'xie' },
    '再': { pinyin: 'zài', tone: 4, base: 'zai' },
    '在': { pinyin: 'zài', tone: 4, base: 'zai' },
    '见': { pinyin: 'jiàn', tone: 4, base: 'jian' },
    '老': { pinyin: 'lǎo', tone: 3, base: 'lao' },
    '朋': { pinyin: 'péng', tone: 2, base: 'peng' },
    '友': { pinyin: 'yǒu', tone: 3, base: 'you' },
    '有': { pinyin: 'yǒu', tone: 3, base: 'you' },
    '又': { pinyin: 'yòu', tone: 4, base: 'you' },
    '高': { pinyin: 'gāo', tone: 1, base: 'gao' },
    '兴': { pinyin: 'xìng', tone: 4, base: 'xing' },
    '明': { pinyin: 'míng', tone: 2, base: 'ming' },
    '天': { pinyin: 'tiān', tone: 1, base: 'tian' },
    '面': { pinyin: 'miàn', tone: 4, base: 'mian' },
    '条': { pinyin: 'tiáo', tone: 2, base: 'tiao' },
    '电': { pinyin: 'diàn', tone: 4, base: 'dian' },
    '点': { pinyin: 'diǎn', tone: 3, base: 'dian' },
    '脑': { pinyin: 'nǎo', tone: 3, base: 'nao' },
    '手': { pinyin: 'shǒu', tone: 3, base: 'shou' },
    '机': { pinyin: 'jī', tone: 1, base: 'ji' },
    '我': { pinyin: 'wǒ', tone: 3, base: 'wo' },
    '们': { pinyin: 'men', tone: 5, base: 'men' },
    '什': { pinyin: 'shén', tone: 2, base: 'shen' },
    '么': { pinyin: 'me', tone: 5, base: 'me' },
    '看': { pinyin: 'kàn', tone: 4, base: 'kan' },
    '听': { pinyin: 'tīng', tone: 1, base: 'ting' },
    '读': { pinyin: 'dú', tone: 2, base: 'du' },
    '写': { pinyin: 'xiě', tone: 3, base: 'xie' },
    '做': { pinyin: 'zuò', tone: 4, base: 'zuo' },
    '坐': { pinyin: 'zuò', tone: 4, base: 'zuo' },
    '很': { pinyin: 'hěn', tone: 3, base: 'hen' },
    '没': { pinyin: 'méi', tone: 2, base: 'mei' },
    '也': { pinyin: 'yě', tone: 3, base: 'ye' },
    '的': { pinyin: 'de', tone: 5, base: 'de' },
    '了': { pinyin: 'le', tone: 5, base: 'le' },
    '呢': { pinyin: 'ne', tone: 5, base: 'ne' },
    '请': { pinyin: 'qǐng', tone: 3, base: 'qing' },
    '关': { pinyin: 'guān', tone: 1, base: 'guan' },
    '对': { pinyin: 'duì', tone: 4, base: 'dui' },
    // Multi-character compounds
    '你好': { pinyin: 'nǐ hǎo', bases: ['ni', 'hao'], tones: [2, 3] },
    '不是': { pinyin: 'bú shì', bases: ['bu', 'shi'], tones: [2, 4] },
    '妈妈': { pinyin: 'mā ma', bases: ['ma', 'ma'], tones: [1, 5] },
    '中国': { pinyin: 'zhōng guó', bases: ['zhong', 'guo'], tones: [1, 2] },
    '咖啡': { pinyin: 'kā fēi', bases: ['ka', 'fei'], tones: [1, 1] },
    '学习': { pinyin: 'xué xí', bases: ['xue', 'xi'], tones: [2, 2] },
    '很好': { pinyin: 'hén hǎo', bases: ['hen', 'hao'], tones: [2, 3] },
    '再见': { pinyin: 'zài jiàn', bases: ['zai', 'jian'], tones: [4, 4] },
    '谢谢': { pinyin: 'xiè xie', bases: ['xie', 'xie'], tones: [4, 5] },
    '北京': { pinyin: 'běi jīng', bases: ['bei', 'jing'], tones: [3, 1] },
    '老师': { pinyin: 'lǎo shī', bases: ['lao', 'shi'], tones: [3, 1] },
    '朋友': { pinyin: 'péng you', bases: ['peng', 'you'], tones: [2, 5] },
    '喜欢': { pinyin: 'xǐ huan', bases: ['xi', 'huan'], tones: [3, 5] },
    '高兴': { pinyin: 'gāo xìng', bases: ['gao', 'xing'], tones: [1, 4] },
    '明天': { pinyin: 'míng tiān', bases: ['ming', 'tian'], tones: [2, 1] },
    '面条': { pinyin: 'miàn tiáo', bases: ['mian', 'tiao'], tones: [4, 2] },
    '电脑': { pinyin: 'diàn nǎo', bases: ['dian', 'nao'], tones: [4, 3] },
    '手机': { pinyin: 'shǒu jī', bases: ['shou', 'ji'], tones: [3, 1] },
    '水饺': { pinyin: 'shuǐ jiǎo', bases: ['shui', 'jiao'], tones: [3, 3] },
    '睡觉': { pinyin: 'shuì jiào', bases: ['shui', 'jiao'], tones: [4, 4] },
    '练习': { pinyin: 'liàn xí', bases: ['lian', 'xi'], tones: [4, 2] },
    '联系': { pinyin: 'lián xì', bases: ['lian', 'xi'], tones: [2, 4] },
    '眼睛': { pinyin: 'yǎn jing', bases: ['yan', 'jing'], tones: [3, 5] },
    '眼镜': { pinyin: 'yǎn jìng', bases: ['yan', 'jing'], tones: [3, 4] },
    '手表': { pinyin: 'shǒu biǎo', bases: ['shou', 'biao'], tones: [3, 3] },
    '对不起': { pinyin: 'duì bu qǐ', bases: ['dui', 'bu', 'qi'], tones: [4, 5, 3] },
    '没关系': { pinyin: 'méi guān xi', bases: ['mei', 'guan', 'xi'], tones: [2, 1, 5] },
    '不用谢': { pinyin: 'bú yòng xiè', bases: ['bu', 'yong', 'xie'], tones: [2, 4, 4] }
};

function getPinyinForText(text) {
    if (!text) return '';
    const clean = text.trim().replace(/[，。！？\s.,!?]/g, '');
    if (!clean) return '';
    if (HANZI_DICT[clean]) {
        return HANZI_DICT[clean].pinyin || '';
    }
    if (typeof vocabularyData !== 'undefined' && Array.isArray(vocabularyData)) {
        const found = vocabularyData.find(w => w.hanzi === clean);
        if (found && found.pinyin) return found.pinyin.toLowerCase();
    }
    const parts = [];
    let allMatched = true;
    for (const ch of clean) {
        if (HANZI_DICT[ch]) {
            parts.push(HANZI_DICT[ch].pinyin);
        } else if (typeof vocabularyData !== 'undefined' && Array.isArray(vocabularyData)) {
            const f = vocabularyData.find(w => w.hanzi === ch);
            if (f && f.pinyin) parts.push(f.pinyin.toLowerCase());
            else { allMatched = false; break; }
        } else {
            allMatched = false; break;
        }
    }
    if (allMatched && parts.length > 0) return parts.join(' ');
    return '';
}

function getPinyinDetails(text) {
    if (!text) return null;
    const clean = text.trim().replace(/[，。！？\s.,!?]/g, '');
    if (!clean) return null;
    if (HANZI_DICT[clean] && HANZI_DICT[clean].bases) {
        return {
            pinyin: HANZI_DICT[clean].pinyin,
            bases: HANZI_DICT[clean].bases,
            tones: HANZI_DICT[clean].tones,
            baseStr: HANZI_DICT[clean].bases.join(''),
            toneStr: HANZI_DICT[clean].tones.join('')
        };
    }
    const py = getPinyinForText(clean);
    if (!py) return null;
    const syllables = py.trim().split(/\s+/);
    const bases = [];
    const tones = [];
    for (const s of syllables) {
        tones.push(detectSyllableTone(s));
        bases.push(s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z]/g, ''));
    }
    return {
        pinyin: py,
        bases: bases,
        tones: tones,
        baseStr: bases.join(''),
        toneStr: tones.join('')
    };
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
            banner.innerHTML = `🔊 <strong>“${word.hanzi}”</strong> (${word.pinyin}) — ovoz chiqarib qaytarib ayting!`;
        }
        return;
    }

    // Toggle stop if already recording
    if (activeSpeechRecognition) {
        try { activeSpeechRecognition.stop(); } catch (e) {}
        activeSpeechRecognition = null;
        if (speakBtn) speakBtn.classList.remove('is-recording');
        if (speakLbl) speakLbl.textContent = 'Talaffuz';
        return;
    }

    const rec = new SpeechRec();
    activeSpeechRecognition = rec;
    rec.lang = 'zh-CN';
    rec.interimResults = false;
    rec.maxAlternatives = 5;

    if (speakBtn) speakBtn.classList.add('is-recording');
    if (speakLbl) speakLbl.textContent = 'Tinglanmoqda...';
    if (banner) {
        banner.hidden = false;
        banner.className = 'speak-feedback-banner is-listening';
        banner.innerHTML = `🎙️ Mikrofonga <strong>“${word.hanzi}”</strong> (${word.pinyin}) deb ayting...`;
    }

    rec.onresult = (event) => {
        const transcripts = [];
        const confidences = [];
        for (let i = 0; i < event.results[0].length; i++) {
            transcripts.push(event.results[0][i].transcript.trim());
            confidences.push(event.results[0][i].confidence || 0.85);
        }
        const heard = transcripts[0] || '';
        const topConf = confidences[0] || 0.85;
        
        const cleanTarget = (word.hanzi || '').replace(/[，。！？\s.,!?]/g, '');
        const targetDetails = getPinyinDetails(cleanTarget);
        const cleanHeard = heard.replace(/[，。！？\s.,!?]/g, '');

        let matchType = 'none'; // 'exact' | 'alt' | 'tone_mismatch' | 'partial' | 'none'
        let matchScore = 0;
        let toneMismatchHint = '';

        for (let idx = 0; idx < transcripts.length; idx++) {
            const cleanT = transcripts[idx].replace(/[，。！？\s.,!?]/g, '');
            if (!cleanT || !cleanTarget) continue;

            // 1. Strict Hanzi match
            if (cleanT === cleanTarget) {
                matchType = (idx === 0) ? 'exact' : 'alt';
                matchScore = (idx === 0) ? Math.min(99, Math.max(88, Math.round(topConf * 100))) : Math.max(82, 88 - idx * 3);
                break;
            }

            // 2. Strict Syllable / Tone Check via getPinyinDetails
            const tDetails = getPinyinDetails(cleanT);
            if (tDetails && targetDetails) {
                if (tDetails.baseStr && tDetails.baseStr === targetDetails.baseStr) {
                    if (tDetails.toneStr === targetDetails.toneStr) {
                        matchType = (idx === 0) ? 'exact' : 'alt';
                        matchScore = (idx === 0) ? 92 : 84;
                        break;
                    } else if (matchType === 'none') {
                        matchType = 'tone_mismatch';
                        matchScore = 64;
                        toneMismatchHint = `Eshitildi: “${escapeHtml(cleanT)}” (${tDetails.tones.join('-')}-ton), kerakli: “${word.hanzi}” (${targetDetails.tones.join('-')}-ton).`;
                    }
                }
            }

            // 3. Romanized transcript check ONLY if transcript strictly consists of Latin letters and matches target base
            const cleanTRoman = cleanT.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z]/g, '');
            if (cleanTRoman.length >= 2 && targetDetails && cleanTRoman === targetDetails.baseStr) {
                if (matchType === 'none') {
                    matchType = 'tone_mismatch';
                    matchScore = 68;
                }
            }
        }

        // 4. Multi-character partial overlap (ONLY for words with >= 2 characters)
        if (matchType === 'none' && cleanTarget.length >= 2 && cleanHeard.length > 0) {
            let matchedChars = 0;
            for (const ch of cleanTarget) {
                if (cleanHeard.includes(ch)) matchedChars++;
            }
            if (matchedChars > 0 && matchedChars < cleanTarget.length) {
                const ratio = matchedChars / cleanTarget.length;
                matchType = 'partial';
                matchScore = Math.round(45 + ratio * 20);
            }
        }

        if (matchType === 'exact' || matchType === 'alt') {
            if (banner) {
                banner.className = 'speak-feedback-banner is-correct';
                banner.innerHTML = `🎉 <strong>${trUz('Ajoyib talaffuz')} (${matchScore}%)!</strong><br>${trUz('Eshitildi')}: “${escapeHtml(heard)}” (+15 XP)`;
            }
            addXP(15);
            playSuccessSound();
            if (typeof triggerHapticSuccess === 'function') triggerHapticSuccess();
        } else if (matchType === 'tone_mismatch') {
            if (banner) {
                banner.className = 'speak-feedback-banner is-retry';
                banner.innerHTML = `⚠️ <strong>${trUz('Bo‘g‘in to‘g‘ri, lekin ton farq qildi')} (${matchScore}%).</strong><br>${toneMismatchHint || `Eshitildi: “${escapeHtml(heard)}” — Kerakli: “${word.hanzi}” (${word.pinyin}).`}<br>${trUz('Namunani eshitib, to‘g‘ri ton bilan qayta ayting.')}`;
            }
            speakChineseText(word.hanzi);
        } else {
            const lowScore = matchType === 'partial' ? matchScore : (cleanHeard ? 15 : 0);
            if (banner) {
                banner.className = 'speak-feedback-banner is-retry';
                banner.innerHTML = `🔄 <strong>${trUz('Boshqa so‘z eshitildi')} (${lowScore}%): “${escapeHtml(heard || '...')}”</strong><br>${trUz('Kerakli so‘z')}: “${word.hanzi}” (${word.pinyin}). ${trUz('Namunani eshitib, qaytadan urinib ko‘ring.')}`;
            }
            speakChineseText(word.hanzi);
        }
    };

    rec.onerror = (event) => {
        const err = event && event.error;
        if (err === 'aborted') return;
        if (banner) {
            banner.className = 'speak-feedback-banner is-retry';
            if (err === 'no-speech') {
                banner.innerHTML = `⚠️ <strong>Ovoz eshitilmadi.</strong> Mikrofonga yaqinroq va balandroq ovozda “${word.hanzi}” deb ayting.`;
            } else if (err === 'not-allowed') {
                banner.innerHTML = `🚫 <strong>Mikrofon ruxsati berilmagan.</strong> Brauzer sozlamalaridan mikrofonni yoqing.`;
            } else if (err === 'network') {
                banner.innerHTML = `🌐 <strong>Internet aloqasi sust.</strong> Ovozni aniqlash uchun internet kerak.`;
            } else {
                banner.innerHTML = `🔊 <strong>Namunani eshitib takrorlang:</strong> ${word.hanzi} (${word.pinyin})`;
            }
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
        activeSpeechRecognition = null;
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
        const replayLbl = typeof t === 'function' ? t('quiz.replayAudio') : 'Qayta eshitish';
        quizHanzi.innerHTML = `<button type="button" class="quiz-audio-hero-btn" id="quizAudioReplayBtn">🔊<span>${replayLbl}</span></button>`;
        quizPrompt.textContent = typeof t === 'function' ? t('quiz.promptAudio') : "So'zni eshiting va to'g'ri ma'noni tanlang:";
        const replayBtn = document.getElementById('quizAudioReplayBtn');
        if (replayBtn) {
            replayBtn.addEventListener('click', () => playWordAudio(word));
        }
        setTimeout(() => playWordAudio(word), 120);
    } else {
        const question = quizType === 'meaning' ? word.hanzi : quizType === 'pinyin' ? trUz(word.uzbek) : word.pinyin;
        quizHanzi.textContent = question;
        quizPrompt.textContent = quizType === 'meaning'
            ? (typeof t === 'function' ? t('quiz.promptMeaning') : "Bu so'zning ma'nosi nima?")
            : quizType === 'pinyin'
                ? (typeof t === 'function' ? t('quiz.promptPinyin') : "To'g'ri Pinyin talaffuzini tanlang:")
                : (typeof t === 'function' ? t('quiz.promptHanzi') : "To'g'ri Hanzi iyeroglifini tanlang:");
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
            optionBtn.textContent = `${option.hanzi} (${option.pinyin}) — ${trUz(option.uzbek)}`;
        } else {
            optionBtn.textContent = quizType === 'meaning' ? trUz(option.uzbek) : quizType === 'pinyin' ? option.pinyin : option.hanzi;
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

function speakChineseText(text, customRate = null, forceBrowserTTS = false) {
    if (!text) return;

    // Map latin pinyin to Hanzi so Chinese audio/TTS produces authentic native tones
    let speakable = String(text).trim();
    const cleanLower = speakable.toLowerCase();
    if (typeof PINYIN_SPEECH_MAP !== 'undefined' && PINYIN_SPEECH_MAP[cleanLower]) {
        speakable = PINYIN_SPEECH_MAP[cleanLower];
    } else if (typeof PINYIN_SPEECH_MAP !== 'undefined' && !/[\u4e00-\u9fa5]/.test(speakable)) {
        const words = cleanLower.split(/[\s,\/]+/);
        const mapped = words.map(w => PINYIN_SPEECH_MAP[w] || w).join('');
        if (/[\u4e00-\u9fa5]/.test(mapped)) {
            speakable = mapped;
        }
    }

    // Prefer real human studio audio (local MP3 / Youdao native speaker) before robotic TTS
    if (!forceBrowserTTS && typeof playWordAudio === 'function' && /[\u4e00-\u9fa5]/.test(speakable)) {
        playWordAudio(speakable, customRate);
        return;
    }

    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();

    try {
        if (window.speechSynthesis.paused) {
            window.speechSynthesis.resume();
        }
    } catch (e) {}

    const utterance = new SpeechSynthesisUtterance(speakable);
    window.activeSpeechUtterance = utterance;
    utterance.lang = 'zh-CN';
    utterance.rate = (typeof customRate === 'number' && customRate > 0) ? customRate : getSpeechRate();
    const voices = window.speechSynthesis.getVoices();
    const zhVoice = voices.find(v => v.lang === 'zh-CN') || voices.find(v => v.lang.startsWith('zh'));
    if (zhVoice) utterance.voice = zhVoice;
    utterance.onend = () => { window.activeSpeechUtterance = null; };
    utterance.onerror = () => { window.activeSpeechUtterance = null; };
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
                    <div class="vocab-preview-uzbek">${trUz(w.uzbek)}</div>
                </div>
            </div>
            <button type="button" class="vocab-preview-audio" data-speak="${w.hanzi}" aria-label="Tinglash ${w.hanzi}">🔊</button>
        </div>
    `).join('');
    container.querySelectorAll('.vocab-preview-audio').forEach(btn => {
        btn.addEventListener('click', () => playWordAudio(btn.dataset.speak));
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
        backToLessonsFromCanvas.textContent = typeof t === 'function' ? t('canvas.backToLessons') : '← Darslarga qaytish';
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
        canvasMeaning.textContent = trUz(word.uzbek);
        canvasPinyin.textContent = word.pinyin;
        renderCanvasCharChips(word);
        const nextLabel = canvasCharacterIndex < currentCanvasCharacters.length - 1 ? trUz('Keyingi harf →') : (typeof t === 'function' ? t('canvas.nextWord') : 'Keyingi so‘z →');
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
        canvasFeedback.textContent = "Chizish maydoni tozalandi. Ieroglifni qaytadan yozing.";
        showTraceGuide();
    }
}

function checkCanvasDrawing() {
    if (!canvasHanziWriter) return;
    if (nextCanvasWord.disabled) {
        canvasFeedback.textContent = "Barcha chiziqlar to'liq yozilmaguncha davom eting.";
        canvasFeedback.className = 'canvas-feedback';
    } else {
        canvasFeedback.textContent = "Ieroglif to'liq yozildi! Keyingi so'zga o'tishingiz mumkin.";
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
    if (localStorage.getItem('easyChineseSfx') === 'off') return;
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

    const dayNames = (typeof t === 'function' ? t('weekly.days') : 'Du,Se,Ch,Pa,Ju,Sh,Ya').split(',');
    const now = new Date();
    // Convert Sunday (0) -> 6, Monday (1) -> 0 .. Saturday (6) -> 5
    const todayMonIdx = (now.getDay() + 6) % 7;
    const streakCount = Math.max(1, Number(streakData.streak) || 1);
    const activeInWeek = Math.min(todayMonIdx + 1, streakCount);

    if (summaryEl) {
        const sfx = typeof t === 'function' ? t('weekly.streakSuffix') : 'kun ketma-ket';
        summaryEl.textContent = `🔥 ${streakData.streak || 1} ${sfx}`;
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
    const wUnit = typeof t === 'function' ? t('lesson.wordsUnit') : 'so‘z';
    if (badgeEl) {
        badgeEl.textContent = `${learnedItems.length} ${wUnit}`;
    }

    if (learnedItems.length === 0) {
        const emptyTxt = typeof t === 'function' ? t('learned.empty') : 'Hozircha yodlangan so‘zlar yo‘q.';
        listEl.innerHTML = `
            <div class="learned-words-empty">
                <p>${emptyTxt}</p>
            </div>
        `;
        return;
    }

    // Show up to 24 most recently learned words as interactive chips with audio
    const recentItems = learnedItems.slice(-24).reverse();
    listEl.innerHTML = recentItems.map(w => `
        <button type="button" class="learned-word-chip" data-speak="${w.hanzi}" title="${w.hanzi} (${w.pinyin})">
            <span class="lw-hanzi">${w.hanzi}</span>
            <span class="lw-meta">
                <span class="lw-pinyin">${w.pinyin}</span>
                <span class="lw-uzbek">${trUz(w.uzbek)}</span>
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

    const wUnit = typeof t === 'function' ? t('lesson.wordsUnit') : 'so‘z';
    if (hsk1Count) hsk1Count.textContent = `${hsk1Learned} / ${hsk1Words} ${wUnit}`;
    if (newHskCount) newHskCount.textContent = `${newHskLearned} / ${newHskWords} ${wUnit}`;

    const hsk2CountEl = document.getElementById('hsk2Count');
    const hsk3CountEl = document.getElementById('hsk3Count');
    const hsk4CountEl = document.getElementById('hsk4Count');
    const hsk5CountEl = document.getElementById('hsk5Count');
    if (hsk2CountEl) hsk2CountEl.textContent = `${hsk2Learned} / ${hsk2Words} ${wUnit}`;
    if (hsk3CountEl) hsk3CountEl.textContent = `${hsk3Learned} / ${hsk3Words} ${wUnit}`;
    if (hsk4CountEl) hsk4CountEl.textContent = `${hsk4Learned} / ${hsk4Words} ${wUnit}`;
    if (hsk5CountEl) hsk5CountEl.textContent = `${hsk5Learned} / ${hsk5Words} ${wUnit}`;

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
            progEl.textContent = unlocked ? (typeof t === 'function' ? t('ach.unlocked') : '✓ Ochildi') : `${Math.min(currentVal, targetVal)} / ${targetVal}`;
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
// 17. PRACTICE HUB, DEDICATED FLASHCARDS TRAINER, TONE LAB & REAL AI LAOSHI
// ==============================================================================

const practiceView = document.getElementById('practice');
const pfcView = document.getElementById('practiceFlashcards');
const toneLabView = document.getElementById('toneLab');
const pinyinChartView = document.getElementById('pinyinChart');
const survivalView = document.getElementById('survivalPhrases');
const aiLaoshiView = document.getElementById('aiLaoshi');

// Natural, context-appropriate example sentences dictionary
const WORD_NATURAL_EXAMPLES = {
    // Polite phrases & Greetings
    '你好': { cn: '你好！很高兴认识你。', py: 'Nǐ hǎo! Hěn gāoxìng rènshi nǐ.', uz: 'Salom! Siz bilan tanishganimdan xursandman.' },
    '您好': { cn: '老师，您好！', py: 'Lǎoshī, nín hǎo!', uz: 'Ustoz, assalomu alaykum!' },
    '谢谢': { cn: '非常感谢你的帮助！', py: 'Fēicháng gǎnxiè nǐ de bāngzhù!', uz: 'Yordamingiz uchun katta rahmat!' },
    '不客气': { cn: '不用谢，别客气！', py: 'Bú yòng xiè, bié kèqi!', uz: 'Arzimaydi, xijolat bo‘lmang!' },
    '再见': { cn: '明天见，再见！', py: 'Míngtiān jiàn, zàijiàn!', uz: 'Ertagacha, xayr!' },
    '对不起': { cn: '对不起，我来晚了。', py: 'Duìbuqǐ, wǒ lái wǎn le.', uz: 'Kechirasiz, men kechikdim.' },
    '没关系': { cn: '没关系，别担心。', py: 'Méi guānxi, bié dānxīn.', uz: 'Hechqisi yo‘q, xavotir olmang.' },
    '请': { cn: '请进，请坐！', py: 'Qǐng jìn, qǐng zuò!', uz: 'Kiring, marhamat o‘tiring!' },

    // Pronouns
    '我': { cn: '我是留学生。', py: 'Wǒ shì liúxuéshēng.', uz: 'Men chet ellik talabaman.' },
    '你': { cn: '你是哪国人？', py: 'Nǐ shì nǎ guó rén?', uz: 'Siz qaysi davlatdansiz?' },
    '他': { cn: '他是我的好朋友。', py: 'Tā shì wǒ de hǎo péngyou.', uz: 'U mening yaxshi do‘stim.' },
    '她': { cn: '她是我们的汉语老师。', py: 'Tā shì wǒmen de Hànyǔ lǎoshī.', uz: 'U bizning xitoy tili ustozimiz.' },
    '我们': { cn: '我们一起去吃饭吧。', py: 'Wǒmen yìqǐ qù chīfàn ba.', uz: 'Keling, birga ovqatlangani boramiz.' },

    // Question words
    '什么': { cn: '这是什么东西？', py: 'Zhè shì shénme dōngxi?', uz: 'Bu nima narsa?' },
    '哪儿': { cn: '请问，洗手间在哪儿？', py: 'Qǐngwèn, xǐshǒujiān zài nǎr?', uz: 'Kechirasiz, hojatxona qayerda?' },
    '谁': { cn: '他是谁？', py: 'Tā shì shéi?', uz: 'U kim?' },
    '多少': { cn: '这个苹果多少钱？', py: 'Zhè ge píngguǒ duōshao qián?', uz: 'Bu olma qancha turadi?' },
    '几': { cn: '现在几点了？', py: 'Xiànzài jǐ diǎn le?', uz: 'Hozir soat necha bo‘ldi?' },
    '怎么': { cn: '这个汉字怎么写？', py: 'Zhè ge hànzì zěnme xiě?', uz: 'Bu iyeroglif qanday yoziladi?' },
    '怎么样': { cn: '今天的中国菜怎么样？', py: 'Jīntiān de Zhōngguó cài zěnmeyàng?', uz: 'Bugungi xitoycha ovqat qanday ekan?' },

    // Common Verbs
    '是': { cn: '我是乌兹别克斯坦人。', py: 'Wǒ shì Wūzībiékèsītǎn rén.', uz: 'Men O‘zbekistonlikman.' },
    '有': { cn: '我有一个问题。', py: 'Wǒ yǒu yí gè wèntí.', uz: 'Menda bitta savol bor.' },
    '看': { cn: '我喜欢看书。', py: 'Wǒ xǐhuan kàn shū.', uz: 'Men kitob o‘qishni yoqtiraman.' },
    '听': { cn: '请认真听老师讲课。', py: 'Qǐng rènzhēn tīng lǎoshī jiǎngkè.', uz: 'Ustozning tushuntirishini diqqat bilan tinglang.' },
    '说': { cn: '请慢一点说。', py: 'Qǐng màn yìdiǎn shuō.', uz: 'Iltimos, sal sekinroq gapiring.' },
    '读': { cn: '跟我一起读这个词。', py: 'Gēn wǒ yìqǐ dú zhè ge cí.', uz: 'Men bilan birga bu so‘zni o‘qing.' },
    '写': { cn: '汉字很有意思，我想写。', py: 'Hànzì hěn yǒu yìsi, wǒ xiǎng xiě.', uz: 'Iyerogliflar juda qiziq, men yozishni xohlayman.' },
    '吃': { cn: '你想吃什么？', py: 'Nǐ xiǎng chī shénme?', uz: 'Nima yeyishni xohlaysiz?' },
    '喝': { cn: '我想喝一杯水。', py: 'Wǒ xiǎng hē yì bēi shuǐ.', uz: 'Bir stakan suv ichmoqchiman.' },
    '去': { cn: '明天我去超市买东西。', py: 'Míngtiān wǒ qù chāoshì mǎi dōngxi.', uz: 'Ertaga do‘konga xarid qilgani boraman.' },
    '来': { cn: '欢迎你来中国！', py: 'Huānyíng nǐ lái Zhōngguó!', uz: 'Xitoyga xush kelibsiz!' },
    '买': { cn: '我想买这件衣服。', py: 'Wǒ xiǎng mǎi zhè jiàn yīfu.', uz: 'Bu kiyimni sotib olmoqchiman.' },
    '坐': { cn: '请坐在这里。', py: 'Qǐng zuò zài zhèli.', uz: 'Iltimos, shu yerga o‘tiring.' },
    '叫': { cn: '你叫什么名字？', py: 'Nǐ jiào shénme míngzi?', uz: 'Ismingiz nima?' },
    '认识': { cn: '认识你很高兴。', py: 'Rènshi nǐ hěn gāoxìng.', uz: 'Siz bilan tanishganimdan mamnunman.' },
    '喜欢': { cn: '我喜欢学中文。', py: 'Wǒ xǐhuan xué Zhōngwén.', uz: 'Men xitoy tilini o‘rganishni yaxshi ko‘raman.' },
    '想': { cn: '我想去图书馆看书。', py: 'Wǒ xiǎng qù túshūguǎn kàn shū.', uz: 'Men kutubxonaga kitob o‘qishga bormoqchiman.' },
    '会': { cn: '你会说汉语吗？', py: 'Nǐ huì shuō Hànyǔ ma?', uz: 'Siz xitoycha gapira olasizmi?' },
    '能': { cn: '这里能拍照吗？', py: 'Zhèli néng pāizhào ma?', uz: 'Bu yerda rasmga tushish mumkinmi?' },

    // Adjectives & Adverbs
    '好': { cn: '这本词典非常好！', py: 'Zhè běn cídiǎn fēicháng hǎo!', uz: 'Bu lug‘at juda ajoyib!' },
    '大': { cn: '这个房间很大。', py: 'Zhè ge fángjiān hěn dà.', uz: 'Bu xona juda katta.' },
    '小': { cn: '这只小猫很可爱。', py: 'Zhè zhī xiǎomāo hěn kě’ài.', uz: 'Bu mushukcha juda shirin.' },
    '多': { cn: '学校里学生很多。', py: 'Xuéxiào lǐ xuésheng hěn duō.', uz: 'Maktabda talabalar juda ko‘p.' },
    '少': { cn: '今天人很少。', py: 'Jīntiān rén hěn shǎo.', uz: 'Bugun odam juda kam.' },
    '冷': { cn: '今天天气很冷。', py: 'Jīntiān tiānqì hěn lěng.', uz: 'Bugun havo juda sovuq.' },
    '热': { cn: '夏天很热，多喝水。', py: 'Xiàtiān hěn rè, duō hē shuǐ.', uz: 'Yoz juda issiq, ko‘proq suv iching.' },
    '高兴': { cn: '今天我非常高兴。', py: 'Jīntiān wǒ fēicháng gāoxìng.', uz: 'Bugun men juda xursandman.' },
    '太': { cn: '太好了，非常感谢！', py: 'Tài hǎo le, fēicháng gǎnxiè!', uz: 'Juda zo‘r bo‘ldi, katta rahmat!' },
    '很': { cn: '汉语很有趣。', py: 'Hànyǔ hěn yǒuqù.', uz: 'Xitoy tili juda qiziqarli.' },
    '不': { cn: '我不去，我要学习。', py: 'Wǒ bú qù, wǒ yào xuéxí.', uz: 'Men bormayman, dars qilishim kerak.' },
    '没': { cn: '我没有时间。', py: 'Wǒ méiyǒu shíjiān.', uz: 'Mening vaqtim yo‘q.' }
};

function getWordNaturalExample(word) {
    if (!word) return { cn: '你好！', py: 'Nǐ hǎo!', uz: 'Salom!' };
    if (WORD_NATURAL_EXAMPLES[word.hanzi]) {
        return WORD_NATURAL_EXAMPLES[word.hanzi];
    }

    const uzb = (word.uzbek || '').toLowerCase();
    // Smart contextual sentence generation
    if (uzb.includes('kitob') || uzb.includes('qalam') || uzb.includes('olma') || uzb.includes('choy') || uzb.includes('suv') || uzb.includes('telefon')) {
        return {
            cn: `我有一个${word.hanzi}。`,
            py: `Wǒ yǒu yí gè ${word.hanzi}.`,
            uz: `Menda bitta ${uzb} bor.`
        };
    }
    if (uzb.includes('moq') || uzb.includes('mak') || uzb.includes('qilmoq') || uzb.includes('bormoq')) {
        return {
            cn: `我想${word.hanzi}。`,
            py: `Wǒ xiǎng ${word.hanzi}.`,
            uz: `Men ${uzb}ni xohlayman.`
        };
    }
    return {
        cn: `这个是${word.hanzi}。`,
        py: `Zhè ge shì ${word.hanzi}.`,
        uz: `Bu — ${uzb}.`
    };
}

// Universal Web Audio Tone Pitch Synthesizer (Works on 100% of smartphones!)
let audioCtxInstance = null;

function getAudioContext() {
    if (!audioCtxInstance) {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (AudioCtx) audioCtxInstance = new AudioCtx();
    }
    if (audioCtxInstance && audioCtxInstance.state === 'suspended') {
        audioCtxInstance.resume();
    }
    return audioCtxInstance;
}

// Native Speaker Tone Audio Player (crystal-clear studio recordings from davinfifield/mp3-chinese-pinyin-sound)
let activeToneAudio = null;

function playNativeToneSound(soundName, fallbackHz = null, rate = 1.0) {
    try {
        if (activeToneAudio) {
            activeToneAudio.pause();
            activeToneAudio.currentTime = 0;
            activeToneAudio = null;
        }
        if (soundName) {
            const cleanKey = String(soundName).trim().toLowerCase().replace(/ü/g, 'v');
            const audio = new Audio(`./assets/audio/tones/${cleanKey}.mp3?v=50`);
            activeToneAudio = audio;
            audio.playbackRate = rate;
            audio.preservesPitch = true;
            if ('webkitPreservesPitch' in audio) audio.webkitPreservesPitch = true;
            if ('mozPreservesPitch' in audio) audio.mozPreservesPitch = true;
            const promise = audio.play();
            if (promise !== undefined) {
                promise.catch(() => {
                    // Try Yoyo Chinese crystal-clear pedagogical tone CDN first
                    const yoyoAudio = new Audio(`https://cdn.yoyochinese.com/audio/pychart/${cleanKey}.mp3`);
                    activeToneAudio = yoyoAudio;
                    yoyoAudio.playbackRate = rate;
                    yoyoAudio.preservesPitch = true;
                    if ('webkitPreservesPitch' in yoyoAudio) yoyoAudio.webkitPreservesPitch = true;
                    if ('mozPreservesPitch' in yoyoAudio) yoyoAudio.mozPreservesPitch = true;
                    const yPromise = yoyoAudio.play();
                    if (yPromise !== undefined) {
                        yPromise.catch(() => {
                            // Secondary fallback: jsDelivr CDN
                            const cdnAudio = new Audio(`https://cdn.jsdelivr.net/gh/davinfifield/mp3-chinese-pinyin-sound@master/mp3/${cleanKey}.mp3`);
                            activeToneAudio = cdnAudio;
                            cdnAudio.playbackRate = rate;
                            cdnAudio.preservesPitch = true;
                            if ('webkitPreservesPitch' in cdnAudio) cdnAudio.webkitPreservesPitch = true;
                            if ('mozPreservesPitch' in cdnAudio) cdnAudio.mozPreservesPitch = true;
                            const cdnPromise = cdnAudio.play();
                            if (cdnPromise !== undefined) {
                                cdnPromise.catch(() => {
                                    if (fallbackHz) speakChineseText(fallbackHz, rate);
                                });
                            }
                        });
                    }
                });
            }
            return audio;
        } else if (fallbackHz) {
            speakChineseText(fallbackHz, rate);
        }
    } catch (e) {
        if (fallbackHz) speakChineseText(fallbackHz, rate);
    }
    return null;
}

// Universal tone player (pure native speaker voice, no artificial synthesizer buzzing)
function playUniversalTonePitch(toneNum, durationScale = 1) {
    const heroSound = (toneNum === 1) ? 'ma1' : (toneNum === 2) ? 'ma2' : (toneNum === 3) ? 'ma3' : (toneNum === 4) ? 'ma4' : 'ma5';
    const hz = (toneNum === 1) ? '妈' : (toneNum === 2) ? '麻' : (toneNum === 3) ? '马' : (toneNum === 4) ? '骂' : '吗';
    playNativeToneSound(heroSound, hz, durationScale < 1 ? 0.75 : 1.0);
    return 650;
}

// Plays native tone sound and animates the card SVG wave line
function playToneDemo(toneNum, hanzi = null, cardEl = null, rate = 1.0) {
    const heroSound = (toneNum === 1) ? 'ma1' : (toneNum === 2) ? 'ma2' : (toneNum === 3) ? 'ma3' : (toneNum === 4) ? 'ma4' : 'ma5';
    if (cardEl) {
        const svg = cardEl.querySelector('.tc-wave-svg');
        if (svg) {
            svg.style.setProperty('--dur', (rate < 1 ? '1200ms' : '900ms'));
            svg.classList.remove('drawing');
            void svg.getBoundingClientRect();
            svg.classList.add('drawing');
        }
    }
    return playNativeToneSound(heroSound, hanzi, rate);
}

// Navigation triggers
function showPracticeView() {
    if (typeof stopRealtimePitchTracker === 'function') stopRealtimePitchTracker();
    if (activeSpeechRecognition) {
        try { activeSpeechRecognition.stop(); } catch (e) {}
        activeSpeechRecognition = null;
    }
    showView(practiceView);
    updatePracticeHubUI();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function updatePracticeHubUI() {
    const hskPill = document.getElementById('practiceHskPill');
    if (hskPill) hskPill.textContent = `HSK ${currentHSK}`;
    const wUnit = typeof t === 'function' ? t('lesson.wordsUnit') : "so'z";

    const flashcardsBadge = document.getElementById('hubFlashcardsBadge');
    if (flashcardsBadge) {
        const count = vocabularyData.filter(w => w.hsk === currentHSK).length;
        flashcardsBadge.textContent = `HSK ${currentHSK} (${count} ${wUnit})`;
    }

    const mistakesBadge = document.getElementById('hubMistakesBadge');
    if (mistakesBadge) {
        const count = typeof getSmartMistakesWords === 'function' ? getSmartMistakesWords().length : 0;
        mistakesBadge.textContent = `${count} ${wUnit}`;
    }

    const bookmarksBadge = document.getElementById('hubBookmarksBadge');
    if (bookmarksBadge) {
        const count = typeof getSmartBookmarkedWords === 'function' ? getSmartBookmarkedWords().length : 0;
        bookmarksBadge.textContent = `${count} ${wUnit}`;
    }
}

// ------------------------------------------------------------------------------
// 17.1 DEDICATED PRACTICE FLASHCARDS TRAINER (Amaliy Flashcardlar Deck)
// ------------------------------------------------------------------------------
let pfcDeck = [];
let pfcIndex = 0;
let pfcMasteredCount = 0;

function showPracticeFlashcardsView() {
    showView(pfcView);
    initPracticeFlashcards();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function initPracticeFlashcards() {
    const pool = vocabularyData.filter(w => w.hsk === currentHSK);
    pfcDeck = pool.length > 0 ? [...pool] : [...vocabularyData.slice(0, 30)];
    pfcIndex = 0;
    pfcMasteredCount = 0;

    const levelPill = document.getElementById('pfcLevelPill');
    if (levelPill) levelPill.textContent = `HSK ${currentHSK}`;

    renderCurrentPfcCard();

    const card = document.getElementById('pfcCard3D');
    if (card) {
        card.onclick = () => card.classList.toggle('flipped');
    }

    const flipBtn = document.getElementById('pfcFlipTriggerBtn');
    if (flipBtn) {
        flipBtn.onclick = () => {
            if (card) card.classList.toggle('flipped');
        };
    }

    const flipBackBtn = document.getElementById('pfcFlipBackBtn');
    if (flipBackBtn) {
        flipBackBtn.onclick = (e) => {
            e.stopPropagation();
            if (card) card.classList.remove('flipped');
        };
    }

    const shuffleBtn = document.getElementById('pfcShuffleBtn');
    if (shuffleBtn) {
        shuffleBtn.onclick = () => {
            pfcDeck.sort(() => Math.random() - 0.5);
            pfcIndex = 0;
            renderCurrentPfcCard();
            if (typeof showToast === 'function') showToast('So‘zlar aralashtirildi! 🔀');
        };
    }

    const againBtn = document.getElementById('pfcAgainBtn');
    if (againBtn) {
        againBtn.onclick = () => {
            const current = pfcDeck[pfcIndex];
            pfcDeck.push(current);
            nextPfcCard();
        };
    }

    const goodBtn = document.getElementById('pfcGoodBtn');
    if (goodBtn) {
        goodBtn.onclick = () => {
            pfcMasteredCount++;
            if (typeof addXP === 'function') addXP(5);
            if (typeof triggerHapticSuccess === 'function') triggerHapticSuccess();
            nextPfcCard();
        };
    }

    const backBtn = document.getElementById('backFromPfcBtn');
    if (backBtn) backBtn.onclick = showPracticeView;
}

function renderCurrentPfcCard() {
    const card = document.getElementById('pfcCard3D');
    if (card) card.classList.remove('flipped');

    if (pfcIndex >= pfcDeck.length) {
        if (typeof showToast === 'function') showToast(`🎉 Tabriklaymiz! ${pfcMasteredCount} ta so‘z takrorlandi!`);
        showPracticeView();
        return;
    }

    const word = pfcDeck[pfcIndex];
    const counter = document.getElementById('pfcCounter');
    const fill = document.getElementById('pfcProgressFill');
    const hanzi = document.getElementById('pfcFrontHanzi');
    const toneChip = document.getElementById('pfcFrontToneChip');
    const audioBtn = document.getElementById('pfcAudioBtn');
    const pinyin = document.getElementById('pfcBackPinyin');
    const uzbek = document.getElementById('pfcBackUzbek');
    const sampleBox = document.getElementById('pfcBackSample');

    const wUnit = typeof t === 'function' ? t('lesson.wordsUnit') : 'so‘z';
    if (counter) counter.textContent = `${pfcIndex + 1} / ${pfcDeck.length} ${wUnit}`;
    if (fill) fill.style.width = `${((pfcIndex + 1) / pfcDeck.length) * 100}%`;

    if (hanzi) hanzi.textContent = word.hanzi;
    if (toneChip) toneChip.textContent = `${typeof t === 'function' ? t('lesson.word') : 'Lesson'} ${word.lesson} · HSK ${word.hsk}`;
    if (pinyin) pinyin.textContent = word.pinyin;
    if (uzbek) uzbek.textContent = trUz(word.uzbek);

    const natExample = getWordNaturalExample(word);
    if (sampleBox) {
        sampleBox.innerHTML = `
            <span class="pfc-sample-cn">${natExample.cn}</span>
            <span class="pfc-sample-uz">${natExample.py} — ${trUz(natExample.uz)}</span>
        `;
    }

    if (audioBtn) {
        audioBtn.onclick = (e) => {
            e.stopPropagation();
            speakChineseText(word.hanzi);
        };
    }
}

function nextPfcCard() {
    pfcIndex++;
    renderCurrentPfcCard();
}

function showPinyinChartView(initialTab = 'initials') {
    showView(pinyinChartView);
    initPinyinChart(initialTab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showToneLabView(initialTab = 'chart') {
    if (typeof stopRealtimePitchTracker === 'function') stopRealtimePitchTracker();
    if (activeSpeechRecognition) {
        try { activeSpeechRecognition.stop(); } catch (e) {}
        activeSpeechRecognition = null;
    }
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

// ------------------------------------------------------------------------------
// In-Lesson AI Modal (Dars ichidagi AI Tahlil Oynasi)
// ------------------------------------------------------------------------------
function showLessonAiModal(word) {
    const modal = document.getElementById('lessonAiModal');
    const titleEl = document.getElementById('lessonAiModalWordTitle');
    const bodyEl = document.getElementById('lessonAiModalBody');
    const closeBtn = document.getElementById('closeLessonAiModalBtn');
    const dismissBtn = document.getElementById('dismissLessonAiModalBtn');
    const goChatBtn = document.getElementById('goToFullAiChatBtn');

    if (!modal || !bodyEl || !word) return;

    if (titleEl) titleEl.textContent = `${trUz('AI Tahlil')}: “${word.hanzi}”`;

    const natEx = getWordNaturalExample(word);

    bodyEl.innerHTML = `
        <div class="lesson-ai-word-hero">
            <div class="lai-hanzi">${word.hanzi}</div>
            <div class="lai-pinyin">${word.pinyin}</div>
            <div class="lai-uzbek">${trUz(word.uzbek)}</div>
            <button type="button" class="ai-action-chip ai-audio-chip" id="laiModalSpeakBtn" style="margin-top: 0.35rem;">🔊 ${typeof t === 'function' ? t('card.listen') : 'Tinglash'}</button>
        </div>
        <div class="lesson-ai-example-box">
            <span style="font-size: 0.72rem; font-weight: 800; color: #10B981; text-transform: uppercase;">${trUz('Jonli Misol:')}</span>
            <div class="lai-eg-cn">${natEx.cn}</div>
            <div class="lai-eg-py">${natEx.py}</div>
            <div class="lai-eg-uz">${trUz(natEx.uz)}</div>
        </div>
        <div style="font-size: 0.78rem; line-height: 1.4; color: var(--text-color); background: var(--bg-secondary); padding: 0.65rem 0.8rem; border-radius: 12px; border: 1px solid var(--border-color);">
            💡 <strong>${trUz('Laoshi Maslahati:')}</strong> ${trUz(`Bu so‘z HSK ${word.hsk} (Lesson ${word.lesson}) darsiga tegishli. Talaffuz paytida bo‘g‘in tonlariga alohida e’tibor bering.`)}
        </div>
    `;

    const speakBtn = document.getElementById('laiModalSpeakBtn');
    if (speakBtn) speakBtn.onclick = () => playWordAudio(word);

    function hideModal() {
        modal.classList.remove('active');
    }

    if (closeBtn) closeBtn.onclick = hideModal;
    if (dismissBtn) dismissBtn.onclick = hideModal;
    if (goChatBtn) {
        goChatBtn.onclick = () => {
            hideModal();
            showAiLaoshiView(word.hanzi);
        };
    }

    modal.classList.add('active');
}

// Attach event listeners for Practice Hub & In-lesson AI
function initPracticeHubListeners() {
    const hubPinyin = document.getElementById('hubOpenPinyinChartBtn');
    if (hubPinyin) hubPinyin.addEventListener('click', () => showPinyinChartView('initials'));

    const hubTone = document.getElementById('hubOpenToneBtn');
    if (hubTone) hubTone.addEventListener('click', () => showToneLabView('chart'));

    const hubPitch = document.getElementById('hubOpenPitchBtn');
    if (hubPitch) hubPitch.addEventListener('click', () => showToneLabView('mic'));

    const hubSurv = document.getElementById('hubOpenSurvivalBtn');
    if (hubSurv) hubSurv.addEventListener('click', () => showSurvivalPhrasesView('classroom'));

    const hubAi = document.getElementById('hubOpenAiCoachBtn');
    if (hubAi) hubAi.addEventListener('click', () => showAiLaoshiView());

    const toggleLessonSearchBtn = document.getElementById('toggleLessonSearchBtn');
    const lessonsSearchDrawer = document.getElementById('lessonsSearchDrawer');
    if (toggleLessonSearchBtn && lessonsSearchDrawer) {
        toggleLessonSearchBtn.addEventListener('click', () => {
            const willOpen = lessonsSearchDrawer.hidden;
            lessonsSearchDrawer.hidden = !willOpen;
            toggleLessonSearchBtn.classList.toggle('active', willOpen);
            if (willOpen && searchInput) {
                setTimeout(() => searchInput.focus(), 60);
            }
        });
    }

    const jumpToCurrentBtn = document.getElementById('jumpToCurrentLessonBtn');
    if (jumpToCurrentBtn) {
        jumpToCurrentBtn.addEventListener('click', () => {
            const curNode = document.querySelector('#lessonsGrid .lesson-btn.node-current') || document.querySelector('#lessonsGrid .lesson-btn');
            if (curNode) {
                curNode.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        });
    }
    const hubCanvas = document.getElementById('hubOpenCanvasBtn');
    if (hubCanvas) {
        hubCanvas.addEventListener('click', () => {
            showCanvasView(false);
            if (typeof navItems !== 'undefined' && navItems) {
                navItems.forEach(n => n.classList.toggle('active', n.dataset.nav === 'canvas'));
            }
        });
    }

    const headerProfileBtn = document.getElementById('headerProfileBtn');
    if (headerProfileBtn) {
        headerProfileBtn.addEventListener('click', () => {
            if (typeof hideAllModals === 'function') hideAllModals();
            showProfileView();
            if (typeof navItems !== 'undefined' && navItems) {
                navItems.forEach(n => n.classList.toggle('active', n.dataset.nav === 'profile'));
            }
        });
    }
    const hubRadicals = document.getElementById('hubOpenRadicalsBtn');
    if (hubRadicals) hubRadicals.addEventListener('click', () => showRadicalsLabView('list'));

    const hubFlash = document.getElementById('hubOpenFlashcardsBtn');
    if (hubFlash) hubFlash.addEventListener('click', showPracticeFlashcardsView);

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
    const backFromPinyin = document.getElementById('backFromPinyinChartBtn');
    if (backFromPinyin) backFromPinyin.addEventListener('click', showPracticeView);

    const backFromTone = document.getElementById('backFromToneLabBtn');
    if (backFromTone) backFromTone.addEventListener('click', showPracticeView);

    const backFromPitch = document.getElementById('backFromPitchLabBtn');
    if (backFromPitch) backFromPitch.addEventListener('click', showPracticeView);

    const backFromSurv = document.getElementById('backFromSurvivalBtn');
    if (backFromSurv) backFromSurv.addEventListener('click', showPracticeView);

    const backFromRadicals = document.getElementById('backFromRadicalsBtn');
    if (backFromRadicals) backFromRadicals.addEventListener('click', showPracticeView);

    // In-lesson AI Analysis Button -> Opens bottom modal without breaking lesson flow!
    const askAiLessonBtn = document.getElementById('askAiFromLessonBtn');
    if (askAiLessonBtn) {
        askAiLessonBtn.addEventListener('click', () => {
            const currentWord = currentWords[flashcardIndex] || currentWords[0];
            if (currentWord) {
                showLessonAiModal(currentWord);
            }
        });
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPracticeHubListeners);
} else {
    initPracticeHubListeners();
}

// ------------------------------------------------------------------------------
// ==============================================================================
// 17.2 SUPER CHINESE STYLE TONE MASTERY LAB (四声与变调)
// ==============================================================================

// Pinyin-to-Hanzi mapping to guarantee Chinese SpeechSynthesis speaks authentic tones
const PINYIN_SPEECH_MAP = {
    'mā': '妈', 'má': '麻', 'mǎ': '马', 'mà': '骂', 'ma': '吗',
    'bā': '八', 'bá': '拔', 'bǎ': '靶', 'bà': '爸', 'ba': '吧',
    'tā': '他', 'tá': '抬', 'tǎ': '塔', 'tà': '踏',
    'tī': '梯', 'tí': '提', 'tǐ': '体', 'tì': '替',
    'dī': '低', 'dí': '敌', 'dǐ': '底', 'dì': '地',
    'nī': '妮', 'ní': '泥', 'nǐ': '你', 'nì': '逆',
    'lī': '哩', 'lí': '梨', 'lǐ': '里', 'lì': '丽',
    'gāo': '高', 'gáo': '搞', 'gǎo': '稿', 'gào': '告',
    'hē': '喝', 'hé': '和', 'hǎo': '好', 'hào': '号',
    'fēi': '飞', 'féi': '肥', 'fěi': '匪', 'fèi': '费',
    'shū': '书', 'shú': '熟', 'shǔ': '数', 'shù': '树',
    'wēn': '温', 'wén': '文', 'wěn': '吻', 'wèn': '问',
    'sī': '丝', 'shí': '十', 'sǐ': '死', 'sì': '四',
    'qī': '七', 'qí': '骑', 'qǐ': '起', 'qì': '气',
    'xī': '西', 'xí': '习', 'xǐ': '洗', 'xì': '细',
    'mǎi': '买', 'mài': '卖',
    'shuǐ': '水', 'shuì': '睡',
    'shuìjiào': '睡觉', 'shuǐjiǎo': '水饺',
    'nǐ hǎo': '你好', 'ní hǎo': '你好',
    'hěn hǎo': '很好', 'hén hǎo': '很好'
};

// SVG tone contour curves (Stave level 1 to 5)
function getToneSvgContour(toneNum) {
    if (toneNum === 1) {
        // High flat (55)
        return `<svg class="tc-wave-svg" viewBox="0 0 200 50">
            <line x1="10" y1="12" x2="190" y2="12" stroke="#e2e8f0" stroke-width="1" stroke-dasharray="3,3"/>
            <line x1="10" y1="42" x2="190" y2="42" stroke="#e2e8f0" stroke-width="1" stroke-dasharray="3,3"/>
            <text x="2" y="16" font-size="9" fill="#94a3b8" font-family="Nunito">5</text>
            <text x="2" y="46" font-size="9" fill="#94a3b8" font-family="Nunito">1</text>
            <path d="M 25 14 L 180 14" fill="none" stroke="#0284C7" stroke-width="5" stroke-linecap="round"/>
        </svg>`;
    } else if (toneNum === 2) {
        // Mid rising (35)
        return `<svg class="tc-wave-svg" viewBox="0 0 200 50">
            <line x1="10" y1="12" x2="190" y2="12" stroke="#e2e8f0" stroke-width="1" stroke-dasharray="3,3"/>
            <line x1="10" y1="42" x2="190" y2="42" stroke="#e2e8f0" stroke-width="1" stroke-dasharray="3,3"/>
            <text x="2" y="16" font-size="9" fill="#94a3b8" font-family="Nunito">5</text>
            <text x="2" y="46" font-size="9" fill="#94a3b8" font-family="Nunito">1</text>
            <path d="M 25 32 Q 100 24 180 14" fill="none" stroke="#10B981" stroke-width="5" stroke-linecap="round"/>
        </svg>`;
    } else if (toneNum === 3) {
        // Dipping (214)
        return `<svg class="tc-wave-svg" viewBox="0 0 200 50">
            <line x1="10" y1="12" x2="190" y2="12" stroke="#e2e8f0" stroke-width="1" stroke-dasharray="3,3"/>
            <line x1="10" y1="42" x2="190" y2="42" stroke="#e2e8f0" stroke-width="1" stroke-dasharray="3,3"/>
            <text x="2" y="16" font-size="9" fill="#94a3b8" font-family="Nunito">5</text>
            <text x="2" y="46" font-size="9" fill="#94a3b8" font-family="Nunito">1</text>
            <path d="M 25 30 Q 95 44 130 42 Q 155 35 180 20" fill="none" stroke="#F59E0B" stroke-width="5" stroke-linecap="round"/>
        </svg>`;
    } else if (toneNum === 4) {
        // Falling (51)
        return `<svg class="tc-wave-svg" viewBox="0 0 200 50">
            <line x1="10" y1="12" x2="190" y2="12" stroke="#e2e8f0" stroke-width="1" stroke-dasharray="3,3"/>
            <line x1="10" y1="42" x2="190" y2="42" stroke="#e2e8f0" stroke-width="1" stroke-dasharray="3,3"/>
            <text x="2" y="16" font-size="9" fill="#94a3b8" font-family="Nunito">5</text>
            <text x="2" y="46" font-size="9" fill="#94a3b8" font-family="Nunito">1</text>
            <path d="M 25 14 Q 80 20 180 42" fill="none" stroke="#EF4444" stroke-width="5" stroke-linecap="round"/>
        </svg>`;
    } else {
        // Neutral
        return `<svg class="tc-wave-svg" viewBox="0 0 200 50">
            <line x1="10" y1="12" x2="190" y2="12" stroke="#e2e8f0" stroke-width="1" stroke-dasharray="3,3"/>
            <line x1="10" y1="42" x2="190" y2="42" stroke="#e2e8f0" stroke-width="1" stroke-dasharray="3,3"/>
            <text x="2" y="16" font-size="9" fill="#94a3b8" font-family="Nunito">5</text>
            <text x="2" y="46" font-size="9" fill="#94a3b8" font-family="Nunito">1</text>
            <circle cx="95" cy="28" r="6" fill="#64748B"/>
        </svg>`;
    }
}

function getToneSvgMini(toneNum) {
    if (toneNum === 1) {
        return `<svg viewBox="0 0 60 20" style="width:50px;height:16px;">
            <path d="M 5 6 L 55 6" fill="none" stroke="#0284C7" stroke-width="3.5" stroke-linecap="round"/>
        </svg>`;
    } else if (toneNum === 2) {
        return `<svg viewBox="0 0 60 20" style="width:50px;height:16px;">
            <path d="M 5 15 L 55 5" fill="none" stroke="#10B981" stroke-width="3.5" stroke-linecap="round"/>
        </svg>`;
    } else if (toneNum === 3) {
        return `<svg viewBox="0 0 60 20" style="width:50px;height:16px;">
            <path d="M 5 8 Q 28 18 40 16 L 55 5" fill="none" stroke="#F59E0B" stroke-width="3.5" stroke-linecap="round"/>
        </svg>`;
    } else if (toneNum === 4) {
        return `<svg viewBox="0 0 60 20" style="width:50px;height:16px;">
            <path d="M 5 5 L 55 16" fill="none" stroke="#EF4444" stroke-width="3.5" stroke-linecap="round"/>
        </svg>`;
    }
    return `<svg viewBox="0 0 60 20" style="width:50px;height:16px;">
        <circle cx="30" cy="10" r="3.5" fill="#64748B"/>
    </svg>`;
}

const TONE_CONTOURS = [
    {
        num: 1,
        toneName: '1-ton (阴平)',
        mark: '55 Yuqori & Tekis',
        heroHz: '妈',
        heroPy: 'mā',
        heroSound: 'ma1',
        exp: 'Ovoz baland va tebranmasdan tekis ushlab turiladi (shifokor huzurida "A-a-a" deb tomoqni ko‘rsatgandek).',
        syllables: [
            { hz: '妈', py: 'mā', sound: 'ma1', uz: 'ona' },
            { hz: '八', py: 'bā', sound: 'ba1', uz: 'sakkiz' },
            { hz: '喝', py: 'hē', sound: 'he1', uz: 'ichmoq' },
            { hz: '高', py: 'gāo', sound: 'gao1', uz: 'baland' },
            { hz: '飞', py: 'fēi', sound: 'fei1', uz: 'uchmoq' }
        ]
    },
    {
        num: 2,
        toneName: '2-ton (阳平)',
        mark: '35 Ko‘tariluvchi',
        heroHz: '麻',
        heroPy: 'má',
        heroSound: 'ma2',
        exp: 'Ovoz pastdan tepaga ko‘tariladi. O‘zbek tilida savol berib hayron bo‘lgandek: "Nima-a?", "Rostdanmi?".',
        syllables: [
            { hz: '麻', py: 'má', sound: 'ma2', uz: 'zig‘ir' },
            { hz: '拔', py: 'bá', sound: 'ba2', uz: 'sug‘urmoq' },
            { hz: '十', py: 'shí', sound: 'shi2', uz: 'o‘n' },
            { hz: '来', py: 'lái', sound: 'lai2', uz: 'kelmoq' },
            { hz: '红', py: 'hóng', sound: 'hong2', uz: 'qizil' }
        ]
    },
    {
        num: 3,
        toneName: '3-ton (上声)',
        mark: '214 Tushib-chiquvchi',
        heroHz: '马',
        heroPy: 'mǎ',
        heroSound: 'ma3',
        exp: 'Ovoz avval tomoq tubiga chuqur tushadi, keyin sal yuqoriga chiqadi ("Hmm... tushunarli" deb o‘ylangandek).',
        syllables: [
            { hz: '马', py: 'mǎ', sound: 'ma3', uz: 'ot' },
            { hz: '靶', py: 'bǎ', sound: 'ba3', uz: 'nishon' },
            { hz: '好', py: 'hǎo', sound: 'hao3', uz: 'yaxshi' },
            { hz: '你', py: 'nǐ', sound: 'ni3', uz: 'sen' },
            { hz: '水', py: 'shuǐ', sound: 'shui3', uz: 'suv' }
        ]
    },
    {
        num: 4,
        toneName: '4-ton (去声)',
        mark: '51 Keskin tushuvchi',
        heroHz: '骂',
        heroPy: 'mà',
        heroSound: 'ma4',
        exp: 'Tepadan tez va keskin pastga tushadi. Buyruq bergan yoki jerkigandek qat’iy: "Yo‘q!", "To‘xta!".',
        syllables: [
            { hz: '骂', py: 'mà', sound: 'ma4', uz: 'so‘kmoq' },
            { hz: '爸', py: 'bà', sound: 'ba4', uz: 'ota' },
            { hz: '看', py: 'kàn', sound: 'kan4', uz: 'qaramoq' },
            { hz: '去', py: 'qù', sound: 'qu4', uz: 'bormoq' },
            { hz: '大', py: 'dà', sound: 'da4', uz: 'katta' }
        ]
    },
    {
        num: 5,
        toneName: 'Neytral ton (轻声)',
        mark: '0 Yengil / Qisqa',
        heroHz: '吗',
        heroPy: 'ma',
        heroSound: 'ma5',
        exp: 'Urg‘usiz, juda yengil va qisqa aytiladi. Odatda so‘roq yoki qaratqich qo‘shimchalarida keladi.',
        syllables: [
            { hz: '吗', py: 'ma', sound: 'ma5', uz: 'so‘roq' },
            { hz: '的', py: 'de', sound: 'de5', uz: 'qaratqich' },
            { hz: '了', py: 'le', sound: 'le5', uz: 'o‘tgan zamon' },
            { hz: '爸爸', py: 'bàba', sound: 'baba', uz: 'dada' },
            { hz: '妈妈', py: 'māma', sound: 'mama', uz: 'ona' }
        ]
    }
];

// Super Chinese Minimal Tone Pairs
const MINIMAL_PAIRS = [
    {
        note: '💡 Eng muhim bozor so‘zi! (3 vs 4)',
        words: [
            { hz: '买', py: 'mǎi', sound: 'mai3', uz: 'sotib olmoq (3-ton)' },
            { hz: '卖', py: 'mài', sound: 'mai4', uz: 'sotmoq (4-ton)' }
        ]
    },
    {
        note: '⚠️ Klassik ma’no farqi (1 vs 3 vs 4)',
        words: [
            { hz: '妈', py: 'mā', sound: 'ma1', uz: 'ona (1-ton)' },
            { hz: '马', py: 'mǎ', sound: 'ma3', uz: 'ot (3-ton)' },
            { hz: '骂', py: 'mà', sound: 'ma4', uz: 'so‘kmoq (4-ton)' }
        ]
    },
    {
        note: '🗣️ Xitoy tilidagi eng mashhur tez aytish (4 vs 2)',
        words: [
            { hz: '四', py: 'sì', sound: 'si4', uz: 'to‘rt (4-ton)' },
            { hz: '十', py: 'shí', sound: 'shi2', uz: 'o‘n (2-ton)' }
        ]
    },
    {
        note: '🍜 Oshxonada adashtirib qo‘ymang! (4+4 vs 3+3)',
        words: [
            { hz: '睡觉', py: 'shuìjiào', sound: 'shuijiao4', uz: 'uxlamoq (4+4)' },
            { hz: '水饺', py: 'shuǐjiǎo', sound: 'shuijiao3', uz: 'chuchvara (3+3→2+3)' }
        ]
    },
    {
        note: '📚 HSK darslaridagi nozik farq',
        words: [
            { hz: '练习', py: 'liànxí', sound: 'lianxi4', uz: 'mashq qilmoq' },
            { hz: '联系', py: 'liánxì', sound: 'lianxi2', uz: 'bog‘lanmoq' }
        ]
    }
];

const SANDHI_RULES = [
    {
        title: '1. Ikkita 3-ton ketma-ket kelsa (3 + 3 → 2 + 3)',
        formula: 'ǎ + ǎ → á + ǎ',
        exp: 'Xitoy tilida ikkita tushib-chiquvchi 3-tonni ketma-ket aytish noqulay. Shu sababli birinchi so‘z avtomatik ravishda 2-tonga (ko‘tariluvchi) aylanadi.',
        chips: [
            { hz: '你好', py: 'nǐ hǎo → ní hǎo', sound: 'nihao', uz: 'Salom' },
            { hz: '很好', py: 'hěn hǎo → hén hǎo', sound: 'henhao', uz: 'Juda yaxshi' },
            { hz: '手表', py: 'shǒubiǎo → shóubiǎo', sound: 'shoubiao', uz: 'Qo‘l soati' },
            { hz: '可以', py: 'kěyǐ → kéyǐ', sound: 'keyi', uz: 'Mumkin' }
        ]
    },
    {
        title: '2. “不” (bù) so‘zining o‘zgarishi (bù → bú)',
        formula: '不 (bù) + 4-ton → bú + 4-ton',
        exp: '“不” so‘zi aslida 4-ton (bù). Ammo undan keyingi so‘z ham 4-ton bo‘lsa, “不” 2-tonga (bú) aylanadi. Boshqa barcha tonlar (1, 2, 3) oldida o‘zgarmaydi.',
        chips: [
            { hz: '不是', py: 'bù shì → bú shì', sound: 'bushi', uz: 'Emas' },
            { hz: '不对', py: 'bù duì → bú duì', sound: 'budui', uz: 'Noto‘g‘ri' },
            { hz: '不要', py: 'bù yào → bú yào', sound: 'buyao', uz: 'Kerakmas' },
            { hz: '不吃', py: 'bù chī', sound: 'buchi', uz: 'Yemaslik (o‘zgarmaydi)' },
            { hz: '不好', py: 'bù hǎo', sound: 'buhao', uz: 'Yaxshimas (o‘zgarmaydi)' }
        ]
    },
    {
        title: '3. “一” (yī) so‘zining uch xil talaffuzi',
        formula: 'yī (sanoq) | yí (4-ton oldida) | yì (1,2,3 oldida)',
        exp: '“一” sanashda 1-ton (yī). Ammo 4-tondagi so‘zlar oldidan 2-tonga (yí), 1, 2, 3-tondagi so‘zlar oldidan esa 4-tonga (yì) o‘zgaradi.',
        chips: [
            { hz: '一二三', py: 'yī, èr, sān', sound: 'yiersan', uz: '1, 2, 3 (sanoqda)' },
            { hz: '一个', py: 'yí gè', sound: 'yige', uz: 'Bitta (4-ton oldida → yí)' },
            { hz: '一天', py: 'yì tiān', sound: 'yitian', uz: 'Bir kun (1-ton oldida → yì)' },
            { hz: '一年', py: 'yì nián', sound: 'yinian', uz: 'Bir yil (2-ton oldida → yì)' },
            { hz: '一起', py: 'yì qǐ', sound: 'yiqi', uz: 'Birgalikda (3-ton oldida → yì)' }
        ]
    }
];

// Super Chinese Style Ear Quiz Questions
// Super Chinese Style Ear Quiz Questions with Native Speaker Sounds
const TONE_QUIZ_QUESTIONS = [
    { hz: '八', py: 'bā', tone: 1, base: 'ba', sound: 'ba1', uz: 'sakkiz' },
    { hz: '拔', py: 'bá', tone: 2, base: 'ba', sound: 'ba2', uz: 'sug‘urmoq' },
    { hz: '靶', py: 'bǎ', tone: 3, base: 'ba', sound: 'ba3', uz: 'nishon' },
    { hz: '爸', py: 'bà', tone: 4, base: 'ba', sound: 'ba4', uz: 'ota' },
    { hz: '喝', py: 'hē', tone: 1, base: 'he', sound: 'he1', uz: 'ichmoq' },
    { hz: '和', py: 'hé', tone: 2, base: 'he', sound: 'he2', uz: 'va / bilan' },
    { hz: '好', py: 'hǎo', tone: 3, base: 'hao', sound: 'hao3', uz: 'yaxshi' },
    { hz: '号', py: 'hào', tone: 4, base: 'hao', sound: 'hao4', uz: 'raqam / sana' },
    { hz: '十', py: 'shí', tone: 2, base: 'shi', sound: 'shi2', uz: 'o‘n' },
    { hz: '是', py: 'shì', tone: 4, base: 'shi', sound: 'shi4', uz: 'ha / bo‘lmoq' },
    { hz: '买', py: 'mǎi', tone: 3, base: 'mai', sound: 'mai3', uz: 'sotib olmoq' },
    { hz: '卖', py: 'mài', tone: 4, base: 'mai', sound: 'mai4', uz: 'sotmoq' },
    { hz: '飞', py: 'fēi', tone: 1, base: 'fei', sound: 'fei1', uz: 'uchmoq' },
    { hz: '水', py: 'shuǐ', tone: 3, base: 'shui', sound: 'shui3', uz: 'suv' },
    { hz: '睡', py: 'shuì', tone: 4, base: 'shui', sound: 'shui4', uz: 'uxlamoq' },
    { hz: '书', py: 'shū', tone: 1, base: 'shu', sound: 'shu1', uz: 'kitob' }
];

let toneQuizIndex = 0;
let toneQuizScore = 0;
let toneQuizStreak = 0;
let toneQuizUserChoice = null;

function initToneLab(initialTab = 'chart') {
    const isPitchMode = (initialTab === 'mic');
    const toneHeader = document.getElementById('toneLabHeaderBanner');
    const pitchHeader = document.getElementById('pitchLabHeaderBanner');
    if (toneHeader) toneHeader.hidden = isPitchMode;
    if (pitchHeader) pitchHeader.hidden = !isPitchMode;

    const tabs = document.querySelectorAll('#toneLabTabs .subview-tab');
    const panels = {
        chart: document.getElementById('toneTabChart'),
        ear: document.getElementById('toneTabEar'),
        pairs: document.getElementById('toneTabPairs'),
        sandhi: document.getElementById('toneTabSandhi'),
        mic: document.getElementById('toneTabMic')
    };

    function switchToneTab(tabKey) {
        if (typeof stopRealtimePitchTracker === 'function') stopRealtimePitchTracker();
        if (activeSpeechRecognition) {
            try { activeSpeechRecognition.stop(); } catch (e) {}
            activeSpeechRecognition = null;
        }
        tabs.forEach(t => t.classList.toggle('active', t.dataset.toneTab === tabKey));
        Object.keys(panels).forEach(k => {
            if (panels[k]) panels[k].classList.toggle('active', k === tabKey);
        });
        if (tabKey === 'mic') {
            const pitchCatTabs = document.querySelectorAll('#pitchCategoryTabs .subview-tab');
            pitchCatTabs.forEach(t => t.classList.toggle('active', (t.dataset.pitchCat || 'single') === micPracticeCategory));
            initToneMicPractice();
        }
    }

    tabs.forEach(tab => {
        tab.onclick = () => switchToneTab(tab.dataset.toneTab);
    });

    const pitchCatTabs = document.querySelectorAll('#pitchCategoryTabs .subview-tab');
    pitchCatTabs.forEach(pt => {
        pt.onclick = () => {
            if (typeof stopRealtimePitchTracker === 'function') stopRealtimePitchTracker();
            if (activeSpeechRecognition) {
                try { activeSpeechRecognition.stop(); } catch (e) {}
                activeSpeechRecognition = null;
            }
            pitchCatTabs.forEach(t => t.classList.toggle('active', t === pt));
            micPracticeCategory = pt.dataset.pitchCat || 'single';
            micPracticeIndex = 0;
            initToneMicPractice();
        };
    });

    switchToneTab(initialTab);
    renderToneContours();
    renderMinimalPairs();
    renderSandhiRules();
    loadToneEarQuestion();
    initToneMicPractice();

    // Bind Super Chinese sequential player button
    const seqBtn = document.getElementById('playAllTonesSeqBtn');
    if (seqBtn) {
        seqBtn.onclick = playAllTonesSequentially;
    }
}

// Super Chinese: Plays Tone 1 -> Tone 2 -> Tone 3 -> Tone 4 in sequence with active glow!
// Super Chinese: Plays Tone 1 -> Tone 2 -> Tone 3 -> Tone 4 in sequence with active glow!
function playAllTonesSequentially() {
    const btn = document.getElementById('playAllTonesSeqBtn');
    if (!btn || btn.disabled) return;

    btn.disabled = true;
    const origHtml = btn.innerHTML;
    btn.innerHTML = '<span>🔊 Tinglanmoqda...</span>';

    const sequence = [
        { tone: 1, hz: '妈', sound: 'ma1' },
        { tone: 2, hz: '麻', sound: 'ma2' },
        { tone: 3, hz: '马', sound: 'ma3' },
        { tone: 4, hz: '骂', sound: 'ma4' }
    ];

    let step = 0;
    function playStep() {
        if (step >= sequence.length) {
            document.querySelectorAll('.tone-card').forEach(c => c.classList.remove('is-playing'));
            btn.disabled = false;
            btn.innerHTML = origHtml;
            return;
        }

        const item = sequence[step];
        let activeCard = null;
        document.querySelectorAll('.tone-card').forEach(c => {
            const on = parseInt(c.dataset.tone) === item.tone;
            c.classList.toggle('is-playing', on);
            if (on) activeCard = c;
        });

        playToneDemo(item.tone, item.hz, activeCard, 1.0);
        step++;
        setTimeout(playStep, 1400);
    }

    playStep();
}

function renderToneContours() {
    const grid = document.getElementById('toneContoursGrid');
    if (!grid) return;

    const listenLbl = typeof t === 'function' ? t('card.listen') : 'Tinglash';
    const slowLbl = typeof t === 'function' ? t('settings.slow') : 'Sekin';
    grid.innerHTML = TONE_CONTOURS.map(tc => `
        <div class="tone-card" data-tone="${tc.num}">
            <div class="tc-top-row">
                <span class="tc-num-pill">${trUz(tc.toneName)}</span>
                <span class="tc-pitch-badge">${trUz(tc.mark)}</span>
            </div>

            <div class="tc-body-row">
                <div class="tc-hero-box">
                    <span class="tc-hero-hanzi">${tc.heroHz}</span>
                    <span class="tc-hero-pinyin">${tc.heroPy}</span>
                    <div class="tc-hero-btns">
                        <button type="button" class="tc-hero-play-btn" data-tone="${tc.num}" data-sound="${tc.heroSound}" data-speak="${tc.heroHz}">
                            🔊 ${listenLbl}
                        </button>
                        <button type="button" class="tc-hero-slow-btn" data-tone="${tc.num}" data-sound="${tc.heroSound}" data-speak="${tc.heroHz}">
                            🐢 ${slowLbl}
                        </button>
                    </div>
                </div>
                <div class="tc-desc-box">
                    <p class="tc-exp-text">${trUz(tc.exp)}</p>
                    ${getToneSvgContour(tc.num)}
                </div>
            </div>

            <div class="tc-soundboard">
                <span class="tc-sb-title">🗣️ ${trUz('Talaffuz mashqi (Bosib eshiting):')}</span>
                <div class="tc-sb-chips">
                    ${tc.syllables.map(s => `
                        <button type="button" class="tc-syllable-chip" data-sound="${s.sound || ''}" data-speak="${s.hz}">
                            <span>🔊</span>
                            <span class="chip-hanzi">${s.hz}</span>
                            <span>${s.py}</span>
                            <span class="chip-uzbek">(${trUz(s.uz)})</span>
                        </button>
                    `).join('')}
                </div>
            </div>
        </div>
    `).join('');

    grid.querySelectorAll('.tc-hero-play-btn').forEach(btn => {
        btn.onclick = (e) => {
            e.stopPropagation();
            const card = btn.closest('.tone-card');
            playToneDemo(parseInt(btn.dataset.tone), btn.dataset.speak, card, 1.0);
        };
    });

    grid.querySelectorAll('.tc-hero-slow-btn').forEach(btn => {
        btn.onclick = (e) => {
            e.stopPropagation();
            const card = btn.closest('.tone-card');
            playToneDemo(parseInt(btn.dataset.tone), btn.dataset.speak, card, 0.90);
        };
    });

    grid.querySelectorAll('.tc-syllable-chip').forEach(btn => {
        btn.onclick = (e) => {
            e.stopPropagation();
            playNativeToneSound(btn.dataset.sound, btn.dataset.speak, 1.0);
        };
    });
}

function renderMinimalPairs() {
    const container = document.getElementById('minimalPairsList');
    if (!container) return;

    const listenLbl = typeof t === 'function' ? t('card.listen') : 'Tinglash';
    container.innerHTML = MINIMAL_PAIRS.map(p => `
        <div class="minimal-pair-card">
            <div class="mp-head">
                <span class="mp-note-badge">${trUz(p.note)}</span>
                <button type="button" class="mp-compare-btn" data-words='${JSON.stringify(p.words)}'>
                    ▶️ ${trUz('Solishtirish')}
                </button>
            </div>
            <div class="mp-words-row">
                ${p.words.map(w => `
                    <div class="mp-word-item" data-sound="${w.sound || ''}" data-speak="${w.hz}">
                        <span class="mp-w-hanzi">${w.hz}</span>
                        <span class="mp-w-pinyin">${w.py}</span>
                        <span class="mp-w-uzbek">${trUz(w.uz)}</span>
                        <span class="mp-w-speak-hint">🔊 ${listenLbl}</span>
                    </div>
                `).join('')}
            </div>
        </div>
    `).join('');

    container.querySelectorAll('.mp-word-item').forEach(item => {
        item.onclick = () => {
            item.classList.add('is-speaking');
            playNativeToneSound(item.dataset.sound, item.dataset.speak, 1.0);
            setTimeout(() => item.classList.remove('is-speaking'), 800);
        };
    });

    container.querySelectorAll('.mp-compare-btn').forEach(btn => {
        btn.onclick = () => {
            try {
                const wordsList = JSON.parse(btn.dataset.words || '[]');
                btn.disabled = true;
                let idx = 0;
                function playNext() {
                    if (idx >= wordsList.length) {
                        btn.disabled = false;
                        return;
                    }
                    const w = wordsList[idx];
                    playNativeToneSound(w.sound, w.hz, 0.9);
                    idx++;
                    setTimeout(playNext, 1000);
                }
                playNext();
            } catch (err) {
                btn.disabled = false;
            }
        };
    });
}

function renderSandhiRules() {
    const container = document.getElementById('sandhiRulesList');
    if (!container) return;

    container.innerHTML = SANDHI_RULES.map(r => `
        <div class="sandhi-card">
            <div class="sandhi-head">
                <h4 class="sandhi-rule-title">${trUz(r.title)}</h4>
            </div>
            <div class="sandhi-formula">${r.formula}</div>
            <p class="sandhi-explanation">${trUz(r.exp)}</p>
            <div class="sandhi-examples">
                ${r.chips.map(c => `
                    <button type="button" class="sandhi-chip" data-sound="${c.sound || ''}" data-speak="${c.hz}">
                        <span>🔊</span>
                        <strong>${c.hz}</strong>
                        <span>(${c.py})</span>
                        <small>· ${trUz(c.uz)}</small>
                    </button>
                `).join('')}
            </div>
        </div>
    `).join('');

    container.querySelectorAll('.sandhi-chip').forEach(btn => {
        btn.onclick = () => playNativeToneSound(btn.dataset.sound, btn.dataset.speak, 1.0);
    });
}

// Shuffled quiz order: the correct tone never repeats twice in a row
let toneQuizOrder = [];

function buildToneQuizOrder(previousTone) {
    const total = TONE_QUIZ_QUESTIONS.length;
    for (let attempt = 0; attempt < 300; attempt++) {
        const remaining = [];
        for (let i = 0; i < total; i++) remaining.push(i);
        const order = [];
        let prev = previousTone || 0;
        let stuck = false;
        while (remaining.length) {
            const candidates = remaining.filter(i => TONE_QUIZ_QUESTIONS[i].tone !== prev);
            if (!candidates.length) { stuck = true; break; }
            const pick = candidates[Math.floor(Math.random() * candidates.length)];
            order.push(pick);
            remaining.splice(remaining.indexOf(pick), 1);
            prev = TONE_QUIZ_QUESTIONS[pick].tone;
        }
        if (!stuck) return order;
    }
    const fallback = [];
    for (let i = 0; i < total; i++) fallback.push(i);
    return fallback;
}

function loadToneEarQuestion() {
    const total = TONE_QUIZ_QUESTIONS.length;
    if (toneQuizOrder.length !== total) {
        toneQuizOrder = buildToneQuizOrder(0);
    }
    const q = TONE_QUIZ_QUESTIONS[toneQuizOrder[toneQuizIndex % total]];
    const scoreEl = document.getElementById('toneEarScore');
    const streakEl = document.getElementById('toneEarStreak');
    const progEl = document.getElementById('toneEarProgressText');
    const playBtn = document.getElementById('toneEarPlayBtn');
    const slowBtn = document.getElementById('toneEarSlowBtn');
    const optBox = document.getElementById('toneEarOptions');
    const feedBox = document.getElementById('toneEarFeedback');
    const actionsBox = document.getElementById('toneEarActions');
    const compareBtn = document.getElementById('toneEarCompareBtn');
    const nextBtn = document.getElementById('toneEarNextBtn');

    if (scoreEl) scoreEl.textContent = toneQuizScore;
    if (streakEl) streakEl.textContent = toneQuizStreak;
    if (progEl) progEl.textContent = `Savol #${(toneQuizIndex % total) + 1} / ${total}`;
    if (feedBox) feedBox.hidden = true;
    if (actionsBox) actionsBox.hidden = true;

    // Real native speaker sound playback (1.0x normal or 0.85x slow motion)
    // NOTE: Audio does NOT autoplay automatically upon opening the view or switching tabs.
    // It only plays when user explicitly taps the play buttons!
    function playEarQuestionAudio(rate = 1.0) {
        const soundKey = q.sound || `${q.base}${q.tone}`;
        playNativeToneSound(soundKey, q.hz, rate);
    }

    if (playBtn) playBtn.onclick = () => playEarQuestionAudio(1.0);
    if (slowBtn) slowBtn.onclick = () => playEarQuestionAudio(0.85);

    const basePinyin = {
        'ba': ['bā', 'bá', 'bǎ', 'bà'],
        'he': ['hē', 'hé', 'hě', 'hè'],
        'hao': ['hāo', 'háo', 'hǎo', 'hào'],
        'shi': ['shī', 'shí', 'shǐ', 'shì'],
        'mai': ['māi', 'mái', 'mǎi', 'mài'],
        'fei': ['fēi', 'féi', 'fěi', 'fèi'],
        'shui': ['shuī', 'shuí', 'shuǐ', 'shuì'],
        'shu': ['shū', 'shú', 'shǔ', 'shù']
    };

    const pyOptions = basePinyin[q.base] || ['1-ton', '2-ton', '3-ton', '4-ton'];
    optBox.innerHTML = [1, 2, 3, 4].map((toneNum, idx) => `
        <button type="button" class="tone-opt-card" data-tone="${toneNum}">
            <span class="toc-num">${toneNum}-ton</span>
            <span class="toc-pinyin">${pyOptions[idx]}</span>
            <div class="toc-curve-svg">${getToneSvgMini(toneNum)}</div>
        </button>
    `).join('');

    let answered = false;
    optBox.querySelectorAll('.tone-opt-card').forEach(btn => {
        btn.onclick = () => {
            if (answered) return;
            answered = true;
            const chosen = parseInt(btn.dataset.tone);
            const isCorrect = chosen === q.tone;

            optBox.querySelectorAll('.tone-opt-card').forEach(b => {
                const bTone = parseInt(b.dataset.tone);
                b.disabled = true;
                if (bTone === q.tone) {
                    b.classList.add('correct');
                } else if (bTone === chosen && !isCorrect) {
                    b.classList.add('wrong');
                }
            });

            const chosenPy = pyOptions[chosen - 1] || `${chosen}-ton`;

            if (feedBox) {
                feedBox.hidden = false;
                if (isCorrect) {
                    toneQuizScore += 10;
                    toneQuizStreak++;
                    if (scoreEl) scoreEl.textContent = toneQuizScore;
                    if (streakEl) streakEl.textContent = toneQuizStreak;
                    feedBox.className = 'tone-ear-feedback correct';
                    feedBox.innerHTML = `🎉 <strong>Barakalla! To‘g‘ri topdingiz!</strong><br>Bu haqiqatan ham <strong>${q.tone}-ton</strong>: <em>${q.py}</em> (${q.hz} — ${q.uz}).`;
                    playSuccessSound();
                } else {
                    toneQuizStreak = 0;
                    if (streakEl) streakEl.textContent = 0;
                    feedBox.className = 'tone-ear-feedback wrong';
                    feedBox.innerHTML = `❌ <strong>Noto‘g‘ri.</strong> Siz <strong>${chosen}-ton</strong> (<em>${chosenPy}</em>) tanladingiz, ammo bu <strong>${q.tone}-ton</strong> edi: <em>${q.py}</em> (${q.hz} — ${q.uz}).<br>Pastdagi tugma bilan ikkala ohangni solishtiring:`;
                }
            }

            if (actionsBox) {
                actionsBox.hidden = false;
                if (compareBtn) {
                    compareBtn.style.display = isCorrect ? 'none' : 'inline-flex';
                    compareBtn.innerHTML = `▶️ Farqini eshiting: <strong>${chosenPy}</strong> ➡️ <strong>${q.py}</strong>`;
                    // Plays user's chosen option with native voice -> 750ms -> correct tone with native voice!
                    compareBtn.onclick = () => {
                        const chosenSound = `${q.base}${chosen}`;
                        const correctSound = q.sound || `${q.base}${q.tone}`;
                        playNativeToneSound(chosenSound, chosenPy, 0.85);
                        setTimeout(() => playNativeToneSound(correctSound, q.hz, 0.85), 750);
                    };
                }
            }
        };
    });

    if (nextBtn) {
        nextBtn.onclick = () => {
            const lastTone = q.tone;
            toneQuizIndex++;
            if (toneQuizIndex % total === 0) {
                toneQuizOrder = buildToneQuizOrder(lastTone);
            }
            loadToneEarQuestion();
        };
    }
}

// ==============================================================================
// REAL-TIME WEB AUDIO PITCH TRACKER (F0 Autocorrelation)
// ==============================================================================
let pitchAudioContext = null;
let pitchMediaStream = null;
let pitchAnalyserNode = null;
let pitchAnimFrameId = null;
let livePitchSamples = [];
let isPitchTracking = false;

function autoCorrelatePitch(buf, sampleRate) {
    const SIZE = buf.length;
    let sumSquares = 0;
    for (let i = 0; i < SIZE; i++) {
        const val = buf[i];
        sumSquares += val * val;
    }
    const rms = Math.sqrt(sumSquares / SIZE);
    if (rms < 0.016) return -1;

    const minPeriod = Math.floor(sampleRate / 480);
    const maxPeriod = Math.floor(sampleRate / 75);
    const correlations = new Float32Array(maxPeriod + 2);

    for (let period = minPeriod; period <= maxPeriod; period++) {
        let r = 0;
        let normA = 0;
        let normB = 0;
        const count = SIZE - period;
        for (let i = 0; i < count; i++) {
            const a = buf[i];
            const b = buf[i + period];
            r += a * b;
            normA += a * a;
            normB += b * b;
        }
        const norm = Math.sqrt(normA * normB);
        if (norm > 0) {
            correlations[period] = r / norm;
        }
    }

    // Find the first local peak above threshold to prevent sub-harmonic octave doubling
    let bestPeriod = -1;
    let bestR = 0.42;
    for (let period = minPeriod + 1; period < maxPeriod; period++) {
        const cur = correlations[period];
        if (cur > bestR && cur > correlations[period - 1] && cur >= correlations[period + 1]) {
            bestPeriod = period;
            bestR = cur;
            break;
        }
    }

    if (bestPeriod === -1) {
        for (let period = minPeriod; period <= maxPeriod; period++) {
            if (correlations[period] > bestR) {
                bestR = correlations[period];
                bestPeriod = period;
            }
        }
    }

    if (bestR > 0.45 && bestPeriod > 0) {
        const y0 = correlations[bestPeriod - 1] || correlations[bestPeriod];
        const y1 = correlations[bestPeriod];
        const y2 = correlations[bestPeriod + 1] || correlations[bestPeriod];
        const denom = (2 * y1 - y0 - y2);
        const delta = denom !== 0 ? (y2 - y0) / (2 * denom) : 0;
        const refinedPeriod = bestPeriod + delta;
        return sampleRate / refinedPeriod;
    }
    return -1;
}

function startRealtimePitchTracker(targetPath) {
    stopRealtimePitchTracker();
    livePitchSamples = [];
    isPitchTracking = true;

    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx || !navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        return;
    }

    try {
        if (!pitchAudioContext || pitchAudioContext.state === 'closed') {
            pitchAudioContext = new AudioCtx();
        } else if (pitchAudioContext.state === 'suspended') {
            pitchAudioContext.resume();
        }

        navigator.mediaDevices.getUserMedia({ audio: { echoCancellation: true, noiseSuppression: true } })
            .then(stream => {
                if (!isPitchTracking) {
                    stream.getTracks().forEach(t => t.stop());
                    return;
                }
                pitchMediaStream = stream;
                const source = pitchAudioContext.createMediaStreamSource(stream);
                const analyser = pitchAudioContext.createAnalyser();
                analyser.fftSize = 2048;
                source.connect(analyser);
                pitchAnalyserNode = analyser;

                const buffer = new Float32Array(analyser.fftSize);
                let lastSampleTime = 0;

                function pitchLoop(now) {
                    if (!isPitchTracking) return;
                    analyser.getFloatTimeDomainData(buffer);

                    if (now - lastSampleTime > 40) {
                        lastSampleTime = now;
                        const hz = autoCorrelatePitch(buffer, pitchAudioContext.sampleRate);
                        if (hz > 70 && hz < 480) {
                            const norm = Math.max(15, Math.min(90, 15 + ((hz - 85) / 275) * 75));
                            livePitchSamples.push(Math.round(norm));
                            if (livePitchSamples.length > 26) {
                                livePitchSamples.shift();
                            }
                            drawTonePitchGuideline(targetPath, null, livePitchSamples);
                        }
                    }
                    pitchAnimFrameId = requestAnimationFrame(pitchLoop);
                }
                pitchAnimFrameId = requestAnimationFrame(pitchLoop);
            })
            .catch(() => {});
    } catch (e) {}
}

function stopRealtimePitchTracker() {
    isPitchTracking = false;
    if (pitchAnimFrameId) {
        cancelAnimationFrame(pitchAnimFrameId);
        pitchAnimFrameId = null;
    }
    if (pitchMediaStream) {
        try {
            pitchMediaStream.getTracks().forEach(t => t.stop());
        } catch (e) {}
        pitchMediaStream = null;
    }
    pitchAnalyserNode = null;
}

function evaluatePitchTrajectory(samples, targetTone, targetPath) {
    if (!samples || samples.length < 5) {
        return { hasData: false, similarity: 80, userCurve: null };
    }

    const n = Math.max(3, targetPath.length);
    const step = (samples.length - 1) / (n - 1);
    const userCurve = [];
    for (let i = 0; i < n; i++) {
        const idx = Math.min(samples.length - 1, Math.round(i * step));
        userCurve.push(samples[idx]);
    }

    const startVal = userCurve[0];
    const midVal = userCurve[Math.floor(n / 2)];
    const endVal = userCurve[n - 1];
    const totalDelta = endVal - startVal;

    let toneSimilarity = 78;

    if (targetTone === 1) {
        const avg = userCurve.reduce((a, b) => a + b, 0) / n;
        if (avg >= 55 && Math.abs(totalDelta) <= 18) toneSimilarity = 95;
        else if (avg >= 45 && Math.abs(totalDelta) <= 25) toneSimilarity = 85;
        else if (totalDelta < -20) toneSimilarity = 50;
        else toneSimilarity = 70;
    } else if (targetTone === 2) {
        if (totalDelta >= 15) toneSimilarity = 95;
        else if (totalDelta >= 8) toneSimilarity = 85;
        else if (totalDelta < -12) toneSimilarity = 45;
        else toneSimilarity = 65;
    } else if (targetTone === 3) {
        if (midVal < startVal && endVal > midVal + 8) toneSimilarity = 95;
        else if (midVal <= startVal) toneSimilarity = 82;
        else if (totalDelta < -15) toneSimilarity = 50;
        else toneSimilarity = 68;
    } else if (targetTone === 4) {
        if (totalDelta <= -18) toneSimilarity = 95;
        else if (totalDelta <= -10) toneSimilarity = 86;
        else if (totalDelta > 15) toneSimilarity = 45;
        else toneSimilarity = 65;
    } else {
        toneSimilarity = 85;
    }

    return {
        hasData: true,
        similarity: toneSimilarity,
        userCurve: userCurve
    };
}

function drawTonePitchGuideline(path, userPath = null, livePoints = null) {
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

    // Target guideline (green)
    if (path && path.length > 1) {
        ctx.strokeStyle = '#10B981';
        ctx.lineWidth = 4;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
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

    // Live real-time audio points while recording (blue)
    if (livePoints && livePoints.length > 0) {
        ctx.strokeStyle = '#3B82F6';
        ctx.lineWidth = 3.5;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.beginPath();
        const step = (w - 60) / Math.max(1, livePoints.length - 1);
        livePoints.forEach((val, idx) => {
            const x = 40 + idx * step;
            const y = h - (val / 100) * (h * 0.75) - 10;
            if (idx === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
        });
        ctx.stroke();

        // Glowing lead cursor
        const lastVal = livePoints[livePoints.length - 1];
        const lastX = 40 + (livePoints.length - 1) * step;
        const lastY = h - (lastVal / 100) * (h * 0.75) - 10;
        ctx.fillStyle = '#60A5FA';
        ctx.beginPath();
        ctx.arc(lastX, lastY, 5, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = '#2563EB';
        ctx.beginPath();
        ctx.arc(lastX, lastY, 2.5, 0, Math.PI * 2);
        ctx.fill();
    }

    // User voice pitch curve (after recording finishes)
    if (userPath && userPath.length > 1) {
        ctx.strokeStyle = '#3B82F6';
        ctx.lineWidth = 3.5;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.beginPath();
        const step = (w - 60) / (userPath.length - 1);
        userPath.forEach((val, idx) => {
            const x = 40 + idx * step;
            const y = h - (val / 100) * (h * 0.75) - 10;
            if (idx === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
        });
        ctx.stroke();
    }
}

const MIC_SINGLE_WORDS = [
    { hanzi: '妈', pinyin: 'mā', uzbek: 'Ona (1-ton: Yuqori va tekis 5-5)', badge: '1-ton (阴平 55)', toneNum: 1, speak: '妈', sound: 'ma1', path: [80, 80] },
    { hanzi: '麻', pinyin: 'má', uzbek: 'Zig‘ir / Karaxt (2-ton: Ko‘tariluvchi 3-5)', badge: '2-ton (阳平 35)', toneNum: 2, speak: '麻', sound: 'ma2', path: [42, 82] },
    { hanzi: '马', pinyin: 'mǎ', uzbek: 'Ot (3-ton: Pastga tushib-chiquvchi 2-1-4)', badge: '3-ton (上声 214)', toneNum: 3, speak: '马', sound: 'ma3', path: [45, 18, 68] },
    { hanzi: '骂', pinyin: 'mà', uzbek: 'So‘kmoq (4-ton: Keskin tushuvchi 5-1)', badge: '4-ton (去声 51)', toneNum: 4, speak: '骂', sound: 'ma4', path: [85, 24] },
    { hanzi: '八', pinyin: 'bā', uzbek: 'Sakkiz (1-ton: Yuqori va tekis 5-5)', badge: '1-ton (阴平 55)', toneNum: 1, speak: '八', sound: 'ba1', path: [80, 80] },
    { hanzi: '拔', pinyin: 'bá', uzbek: 'Sug‘urmoq (2-ton: Ko‘tariluvchi 3-5)', badge: '2-ton (阳平 35)', toneNum: 2, speak: '拔', sound: 'ba2', path: [42, 82] },
    { hanzi: '把', pinyin: 'bǎ', uzbek: 'Ushlamoq / Dasta (3-ton: 2-1-4)', badge: '3-ton (上声 214)', toneNum: 3, speak: '把', sound: 'ba3', path: [45, 18, 68] },
    { hanzi: '爸', pinyin: 'bà', uzbek: 'Ota (4-ton: Keskin tushuvchi 5-1)', badge: '4-ton (去声 51)', toneNum: 4, speak: '爸', sound: 'ba4', path: [85, 24] },
    { hanzi: '喝', pinyin: 'hē', uzbek: 'Ichmoq (1-ton: Yuqori va tekis 5-5)', badge: '1-ton (阴平 55)', toneNum: 1, speak: '喝', sound: 'he1', path: [80, 80] },
    { hanzi: '河', pinyin: 'hé', uzbek: 'Daryo (2-ton: Ko‘tariluvchi 3-5)', badge: '2-ton (阳平 35)', toneNum: 2, speak: '河', sound: 'he2', path: [42, 82] },
    { hanzi: '贺', pinyin: 'hè', uzbek: 'Tabriklamoq (4-ton: Keskin tushuvchi 5-1)', badge: '4-ton (去声 51)', toneNum: 4, speak: '贺', sound: 'he4', path: [85, 24] },
    { hanzi: '十', pinyin: 'shí', uzbek: 'O‘n (2-ton: Ko‘tariluvchi 3-5)', badge: '2-ton (阳平 35)', toneNum: 2, speak: '十', sound: 'shi2', path: [42, 82] },
    { hanzi: '是', pinyin: 'shì', uzbek: 'Bo‘lmoq / Ha (4-ton: Keskin tushuvchi 5-1)', badge: '4-ton (去声 51)', toneNum: 4, speak: '是', sound: 'shi4', path: [85, 24] }
];

const MIC_PRACTICE_WORDS = [
    { hanzi: '你好', pinyin: 'nǐ hǎo → ní hǎo', uzbek: 'Salom (3+3 qoidasi: 3-ton 2-tonga o‘zgaradi)', badge: '3-ton + 3-ton → 2-ton + 3-ton', toneNum: 2, speak: '你好', sound: 'nihao', path: [40, 20, 65] },
    { hanzi: '不是', pinyin: 'bù shì → bú shì', uzbek: 'Emas (4-ton oldida bù → bú)', badge: '不 + 4-ton → bú', toneNum: 2, speak: '不是', sound: 'bushi', path: [50, 80] },
    { hanzi: '妈妈', pinyin: 'māma', uzbek: 'Ona (1-ton + neytral)', badge: '1-ton + Neytral', toneNum: 1, speak: '妈妈', sound: 'mama', path: [80, 45] },
    { hanzi: '中国', pinyin: 'Zhōngguó', uzbek: 'Xitoy (1-ton + 2-ton)', badge: '1-ton + 2-ton', toneNum: 1, speak: '中国', sound: 'zhongguo', path: [80, 50, 80] },
    { hanzi: '咖啡', pinyin: 'kāfēi', uzbek: 'Qahva (Ikkala so‘z ham 1-ton)', badge: '1-ton + 1-ton (Yuqori-tekis)', toneNum: 1, speak: '咖啡', sound: 'kafei', path: [80, 80] },
    { hanzi: '学习', pinyin: 'xuéxí', uzbek: 'O‘rganmoq / O‘qimoq', badge: '2-ton + 2-ton (Ko‘tariluvchi)', toneNum: 2, speak: '学习', sound: 'xuexi', path: [45, 80, 45, 80] },
    { hanzi: '很好', pinyin: 'hěn hǎo → hén hǎo', uzbek: 'Juda yaxshi (3+3 qoidasi)', badge: '3-ton + 3-ton → 2-ton + 3-ton', toneNum: 2, speak: '很好', sound: 'henhao', path: [40, 20, 70] },
    { hanzi: '再见', pinyin: 'zàijiàn', uzbek: 'Xayr (Ikkala so‘z ham 4-ton: keskin tushuvchi)', badge: '4-ton + 4-ton (Keskin tushuvchi)', toneNum: 4, speak: '再见', sound: 'zaijian', path: [85, 25, 85, 25] },
    { hanzi: '谢谢', pinyin: 'xièxie', uzbek: 'Rahmat (4-ton + neytral)', badge: '4-ton + Neytral', toneNum: 4, speak: '谢谢', sound: 'xiexie', path: [85, 30, 45] },
    { hanzi: '北京', pinyin: 'Běijīng', uzbek: 'Pekin (3-ton + 1-ton)', badge: '3-ton + 1-ton', toneNum: 3, speak: '北京', sound: 'beijing', path: [45, 20, 80] }
];

const MIC_PHRASE_WORDS = [
    { hanzi: '老师', pinyin: 'lǎoshī', uzbek: 'O‘qituvchi / Ustoz (3-ton + 1-ton)', badge: '3-ton + 1-ton', toneNum: 3, speak: '老师', sound: 'laoshi', path: [45, 20, 80, 80] },
    { hanzi: '朋友', pinyin: 'péngyou', uzbek: 'Do‘st (2-ton + neytral)', badge: '2-ton + Neytral', toneNum: 2, speak: '朋友', sound: 'pengyou', path: [42, 82, 48] },
    { hanzi: '喜欢', pinyin: 'xǐhuan', uzbek: 'Yoqtirmoq (3-ton + neytral)', badge: '3-ton + Neytral', toneNum: 3, speak: '喜欢', sound: 'xihuan', path: [45, 20, 48] },
    { hanzi: '高兴', pinyin: 'gāoxìng', uzbek: 'Xursand (1-ton + 4-ton)', badge: '1-ton + 4-ton', toneNum: 1, speak: '高兴', sound: 'gaoxing', path: [82, 82, 85, 25] },
    { hanzi: '明天', pinyin: 'míngtiān', uzbek: 'Ertaga (2-ton + 1-ton)', badge: '2-ton + 1-ton', toneNum: 2, speak: '明天', sound: 'mingtian', path: [42, 82, 82, 82] },
    { hanzi: '面条', pinyin: 'miàntiáo', uzbek: 'Lag‘mon (4-ton + 2-ton)', badge: '4-ton + 2-ton', toneNum: 4, speak: '面条', sound: 'miantiao', path: [85, 25, 42, 82] },
    { hanzi: '电脑', pinyin: 'diànnǎo', uzbek: 'Kompyuter (4-ton + 3-ton)', badge: '4-ton + 3-ton', toneNum: 4, speak: '电脑', sound: 'diannao', path: [85, 25, 45, 18, 68] },
    { hanzi: '手机', pinyin: 'shǒujī', uzbek: 'Mobil telefon (3-ton + 1-ton)', badge: '3-ton + 1-ton', toneNum: 3, speak: '手机', sound: 'shouji', path: [45, 20, 82, 82] }
];

let micPracticeCategory = 'single';
let micPracticeIndex = 0;
const micPassedWords = new Set();

function buildPitchPathFromPinyin(py) {
    if (!py) return [80, 80];
    const syllables = py.trim().split(/\s+/);
    const pts = [];
    for (const s of syllables) {
        const t = detectSyllableTone(s);
        if (t === 1) pts.push(82, 82);
        else if (t === 2) pts.push(42, 82);
        else if (t === 3) pts.push(45, 18, 68);
        else if (t === 4) pts.push(85, 24);
        else pts.push(48);
    }
    return pts.length >= 2 ? pts : [80, 80];
}

function getActiveMicPracticeDeck() {
    if (micPracticeCategory === 'single') return MIC_SINGLE_WORDS;
    if (micPracticeCategory === 'phrases') return MIC_PHRASE_WORDS;
    if (micPracticeCategory === 'hsk') {
        const pool = (typeof vocabularyData !== 'undefined' && Array.isArray(vocabularyData))
            ? vocabularyData.filter(w => w.hsk === currentHSK).slice(0, 16)
            : [];
        if (pool.length > 0) {
            return pool.map(w => ({
                hanzi: w.hanzi,
                pinyin: w.pinyin,
                uzbek: getWordMeaning(w),
                badge: `HSK ${w.hsk} · Dars ${w.lesson || 1}`,
                toneNum: detectSyllableTone(w.pinyin),
                speak: w.hanzi,
                sound: (typeof WORD_STUDIO_MAP !== 'undefined' && WORD_STUDIO_MAP[w.hanzi]) || null,
                path: buildPitchPathFromPinyin(w.pinyin)
            }));
        }
    }
    return MIC_PRACTICE_WORDS;
}

function initToneMicPractice() {
    const deck = getActiveMicPracticeDeck();
    const word = deck[micPracticeIndex % deck.length];
    const strip = document.getElementById('toneMicWordStrip');
    const badge = document.getElementById('toneMicBadge');
    const hanzi = document.getElementById('toneMicHanzi');
    const pinyin = document.getElementById('toneMicPinyin');
    const uzbek = document.getElementById('toneMicUzbek');
    const listenBtn = document.getElementById('toneMicListenBtn');
    const slowBtn = document.getElementById('toneMicSlowBtn');
    const recordBtn = document.getElementById('toneMicRecordBtn');
    const nextBtn = document.getElementById('toneMicNextWordBtn');
    const feedback = document.getElementById('toneMicFeedback');

    if (!word || !hanzi) return;

    if (strip) {
        const activeIdx = micPracticeIndex % deck.length;
        strip.innerHTML = deck.map((item, idx) => {
            const isAct = idx === activeIdx ? 'active' : '';
            const isPass = micPassedWords.has(item.hanzi) ? 'passed' : '';
            const chk = micPassedWords.has(item.hanzi) ? '<span class="tm-chip-check">✓</span>' : '';
            return `<button type="button" class="tm-word-chip ${isAct} ${isPass}" data-idx="${idx}">${chk}<span>${item.hanzi}</span></button>`;
        }).join('');
        strip.querySelectorAll('.tm-word-chip').forEach(chip => {
            chip.onclick = () => {
                stopRealtimePitchTracker();
                if (activeSpeechRecognition) {
                    try { activeSpeechRecognition.stop(); } catch (e) {}
                    activeSpeechRecognition = null;
                }
                micPracticeIndex = parseInt(chip.dataset.idx, 10) || 0;
                initToneMicPractice();
            };
        });
    }

    if (badge) badge.textContent = trUz(word.badge);
    if (hanzi) hanzi.textContent = word.hanzi;
    if (pinyin) pinyin.innerHTML = word.pinyin;
    if (uzbek) uzbek.textContent = trUz(word.uzbek);
    if (feedback) feedback.hidden = true;

    drawTonePitchGuideline(word.path);

    if (listenBtn) {
        listenBtn.onclick = () => {
            playNativeToneSound(word.sound, word.speak, 1.0);
        };
    }

    if (slowBtn) {
        slowBtn.onclick = () => {
            playNativeToneSound(word.sound, word.speak, 0.85);
        };
    }

    if (nextBtn) {
        nextBtn.onclick = () => {
            stopRealtimePitchTracker();
            if (activeSpeechRecognition) {
                try { activeSpeechRecognition.stop(); } catch (e) {}
                activeSpeechRecognition = null;
            }
            micPracticeIndex = (micPracticeIndex + 1) % deck.length;
            initToneMicPractice();
        };
    }

    if (recordBtn) {
        recordBtn.onclick = () => {
            const SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition;
            if (!SpeechRec) {
                if (feedback) {
                    feedback.hidden = false;
                    feedback.className = 'speak-feedback-banner feedback-retry';
                    feedback.innerHTML = `ℹ️ <strong>${trUz('Ovoz tanish mavjud emas.')}</strong><br>${trUz('Brauzeringizda nutqni avtomatik aniqlash qo‘llab-quvvatlanmaydi. Namunani eshitib o‘zingiz takrorlang!')}`;
                }
                playNativeToneSound(word.sound, word.speak, 0.9);
                return;
            }

            if (activeSpeechRecognition || isPitchTracking) {
                stopRealtimePitchTracker();
                if (activeSpeechRecognition) {
                    try { activeSpeechRecognition.stop(); } catch (e) {}
                    activeSpeechRecognition = null;
                }
                recordBtn.classList.remove('is-recording');
                recordBtn.innerHTML = `<span>🎙️ ${trUz('Talaffuz')}</span>`;
                recordBtn.disabled = false;
                return;
            }

            try {
                const rec = new SpeechRec();
                activeSpeechRecognition = rec;
                rec.lang = 'zh-CN';
                rec.interimResults = false;
                rec.maxAlternatives = 5;

                recordBtn.classList.add('is-recording');
                recordBtn.innerHTML = `<span>🎙️ ${trUz('Tinglanmoqda...')}</span>`;
                recordBtn.disabled = false;

                if (feedback) {
                    feedback.hidden = false;
                    feedback.className = 'speak-feedback-banner is-listening';
                    feedback.innerHTML = `🎙️ ${trUz('Mikrofonga')} <strong>“${word.hanzi}”</strong> (${word.pinyin}) ${trUz('deb ayting...')}`;
                }

                // Start real-time Web Audio pitch detection on canvas
                startRealtimePitchTracker(word.path);

                rec.onresult = (event) => {
                    stopRealtimePitchTracker();
                    const pitchEval = evaluatePitchTrajectory(livePitchSamples, word.toneNum, word.path);

                    const transcripts = [];
                    const confidences = [];
                    for (let i = 0; i < event.results[0].length; i++) {
                        transcripts.push(event.results[0][i].transcript.trim());
                        confidences.push(event.results[0][i].confidence || 0.85);
                    }
                    const heard = transcripts[0] || '';
                    const topConf = confidences[0] || 0.85;

                    const cleanTarget = (word.speak || word.hanzi || '').replace(/[，。！？\s.,!?]/g, '');
                    const cleanHeard = heard.replace(/[，。！？\s.,!?]/g, '');
                    const targetDetails = getPinyinDetails(cleanTarget);

                    let matchTier = 'none'; // 'exact' | 'alt' | 'tone_mismatch' | 'partial' | 'none'
                    let score = 0;
                    let toneMismatchMsg = '';

                    for (let idx = 0; idx < transcripts.length; idx++) {
                        const cleanT = transcripts[idx].replace(/[，。！？\s.,!?]/g, '');
                        if (!cleanT || !cleanTarget) continue;

                        // 1. Strict Hanzi match
                        if (cleanT === cleanTarget) {
                            matchTier = (idx === 0) ? 'exact' : 'alt';
                            const baseScore = (idx === 0) ? Math.min(98, Math.max(88, Math.round(topConf * 100))) : Math.max(82, 88 - idx * 3);
                            score = pitchEval.hasData ? Math.min(99, Math.max(86, Math.round(baseScore * 0.65 + pitchEval.similarity * 0.35))) : baseScore;
                            break;
                        }

                        // 2. Check Syllable and Tone through dictionary
                        const tDetails = getPinyinDetails(cleanT);
                        if (tDetails && targetDetails) {
                            if (tDetails.baseStr && tDetails.baseStr === targetDetails.baseStr) {
                                if (tDetails.toneStr === targetDetails.toneStr) {
                                    matchTier = (idx === 0) ? 'exact' : 'alt';
                                    score = (idx === 0) ? 92 : 84;
                                    break;
                                } else if (matchTier === 'none') {
                                    matchTier = 'tone_mismatch';
                                    score = pitchEval.hasData ? Math.min(68, Math.max(58, Math.round(62 * 0.7 + pitchEval.similarity * 0.3))) : 64;
                                    toneMismatchMsg = `Eshitildi: “${cleanT}” (${tDetails.tones.join('-')}-ton), kerakli: “${word.hanzi}” (${targetDetails.tones.join('-')}-ton).`;
                                }
                            }
                        }

                        // 3. Romanized check ONLY if transcript strictly consists of Latin letters and matches target base
                        const cleanTRoman = cleanT.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z]/g, '');
                        if (cleanTRoman.length >= 2 && targetDetails && cleanTRoman === targetDetails.baseStr) {
                            if (matchTier === 'none') {
                                matchTier = 'tone_mismatch';
                                score = 68;
                            }
                        }
                    }

                    // 4. Multi-character partial overlap (ONLY for words with >= 2 characters)
                    if (matchTier === 'none' && cleanTarget.length >= 2 && cleanHeard.length > 0) {
                        let matchedChars = 0;
                        for (const ch of cleanTarget) {
                            if (cleanHeard.includes(ch)) matchedChars++;
                        }
                        if (matchedChars > 0 && matchedChars < cleanTarget.length) {
                            const ratio = matchedChars / cleanTarget.length;
                            matchTier = 'partial';
                            score = Math.round(46 + ratio * 20);
                        }
                    }

                    if (matchTier === 'exact' || matchTier === 'alt') {
                        micPassedWords.add(word.hanzi);
                        const userCurve = (pitchEval.hasData && pitchEval.userCurve) ? pitchEval.userCurve : word.path.map((v, i) => Math.max(10, Math.min(95, v + ((i % 2 === 0 ? 1 : -1) * 3))));
                        drawTonePitchGuideline(word.path, userCurve);

                        if (strip) {
                            const activeChip = strip.querySelector(`.tm-word-chip[data-idx="${micPracticeIndex % deck.length}"]`);
                            if (activeChip && !activeChip.classList.contains('passed')) {
                                activeChip.classList.add('passed');
                                activeChip.innerHTML = `<span class="tm-chip-check">✓</span><span>${word.hanzi}</span>`;
                            }
                        }

                        if (feedback) {
                            feedback.className = 'speak-feedback-banner feedback-correct';
                            feedback.innerHTML = `🎉 <strong>${trUz('Ajoyib talaffuz')} (${score}%)!</strong><br>${trUz('Eshitildi')}: “<strong>${escapeHtml(heard)}</strong>” — ${trUz('Ton konturingiz namunaga to‘liq mos tushdi!')} (+15 XP)`;
                        }
                        if (typeof triggerHapticSuccess === 'function') triggerHapticSuccess();
                        addXP(15);
                        playSuccessSound();
                    } else if (matchTier === 'tone_mismatch') {
                        const userCurve = (pitchEval.hasData && pitchEval.userCurve) ? pitchEval.userCurve : word.path.map((v, i) => Math.max(15, Math.min(90, 95 - v + (i * 4))));
                        drawTonePitchGuideline(word.path, userCurve);
                        if (feedback) {
                            feedback.className = 'speak-feedback-banner feedback-retry';
                            feedback.innerHTML = `⚠️ <strong>${trUz('Bo‘g‘in to‘g‘ri, lekin ton farq qildi')} (${score}%).</strong><br>${toneMismatchMsg || `Eshitildi: “${escapeHtml(heard)}” — Kerakli: “${word.hanzi}” (${word.pinyin}).`}<br>${trUz('“🔊 Ovoz” tugmasini bosib, ton balandligiga e’tibor berib qayta ayting.')}`;
                        }
                    } else {
                        const lowScore = matchTier === 'partial' ? score : (cleanHeard ? 15 : 0);
                        const userCurve = (pitchEval.hasData && pitchEval.userCurve) ? pitchEval.userCurve : word.path.map((_, i) => (i % 2 === 0 ? 32 : 38));
                        drawTonePitchGuideline(word.path, userCurve);

                        if (feedback) {
                            feedback.className = 'speak-feedback-banner feedback-retry';
                            if (matchTier === 'partial') {
                                feedback.innerHTML = `🔄 <strong>${trUz('Qisman to‘g‘ri')} (${lowScore}%): “${escapeHtml(heard)}”</strong><br>${trUz('Kerakli to‘liq so‘z')}: “<strong>${word.hanzi}</strong>” (${word.pinyin}).`;
                            } else {
                                feedback.innerHTML = `❌ <strong>${trUz('Boshqa so‘z eshitildi')} (${lowScore}%): “${escapeHtml(heard || '...')}”</strong><br>${trUz('Kerakli so‘z')}: “<strong>${word.hanzi}</strong>” (${word.pinyin}).<br>${trUz('“🔊 Ovoz” tugmasini eshitib, qaytadan urinib ko‘ring.')}`;
                            }
                        }
                    }
                };

                rec.onerror = (event) => {
                    stopRealtimePitchTracker();
                    const err = event && event.error;
                    if (feedback) {
                        feedback.className = 'speak-feedback-banner feedback-retry';
                        if (err === 'no-speech') {
                            feedback.innerHTML = `⚠️ <strong>${trUz('Ovoz eshitilmadi.')}</strong> ${trUz('Mikrofonga yaqinroq va balandroq ovozda')} “${word.hanzi}” ${trUz('deb ayting.')}`;
                        } else if (err === 'not-allowed') {
                            feedback.innerHTML = `🚫 <strong>${trUz('Mikrofon ruxsati berilmagan.')}</strong> ${trUz('Brauzer sozlamalaridan mikrofon ruxsatini yoqing.')}`;
                        } else if (err === 'network') {
                            feedback.innerHTML = `🌐 <strong>${trUz('Internet aloqasi sust.')}</strong> ${trUz('Ovozni tekshirish uchun internet aloqasi kerak.')}`;
                        } else {
                            feedback.innerHTML = `⚠️ <strong>${trUz('Ovoz aniqlanmadi.')}</strong> ${trUz('Iltimos qaytadan urinib ko‘ring.')}`;
                        }
                    }
                };

                rec.onend = () => {
                    stopRealtimePitchTracker();
                    recordBtn.classList.remove('is-recording');
                    recordBtn.innerHTML = `<span>🎙️ ${trUz('Talaffuz')}</span>`;
                    recordBtn.disabled = false;
                    activeSpeechRecognition = null;
                };

                rec.start();
            } catch (err) {
                stopRealtimePitchTracker();
                recordBtn.classList.remove('is-recording');
                recordBtn.innerHTML = `<span>🎙️ ${trUz('Talaffuz')}</span>`;
                recordBtn.disabled = false;
                activeSpeechRecognition = null;
            }
        };
    }
}

// ------------------------------------------------------------------------------
// 17.3 CHINA SURVIVAL PHRASES
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
        { hanzi: '地铁站在哪里？', pinyin: 'Dìtiězhàn zǎinǎli?', uzbek: 'Metro bekati qayerda?' },
        { hanzi: '去机场大概需要多久？', pinyin: 'Qù jīchǎng dàgài xūyào duōjiǔ?', uzbek: 'Aeroportgacha taxminan qancha vaqt ketadi?' },
        { hanzi: '下车，谢谢！', pinyin: 'Xià chē, xièxie!', uzbek: 'Shu yerda tushaman, rahmat!' }
    ]
};

// ==============================================================================
// 🎹 INTERACTIVE PINYIN CHART (拼音图表 · 23 Initials + 24 Finals + Matrix + Rules)
// ==============================================================================

const PINYIN_INITIALS = [
    {
        group: 'Labial (Lab-lab tovushlari)',
        items: [
            { letter: 'b', ipa: 'bō', uz: 'Jarangli emas, qisqa "b"', sound: 'b', egHz: '爸', egPy: 'bà', egUz: 'ota', egSound: 'ba4' },
            { letter: 'p', ipa: 'pō', uz: 'Kuchli nafas bilan "p"', sound: 'p', egHz: '跑', egPy: 'pǎo', egUz: 'yugurmoq', egSound: 'pao3' },
            { letter: 'm', ipa: 'mō', uz: 'O‘zbekcha oddiy "m"', sound: 'm', egHz: '妈', egPy: 'mā', egUz: 'ona', egSound: 'ma1' },
            { letter: 'f', ipa: 'fō', uz: 'Yuqori tish labda, "f"', sound: 'f', egHz: '飞', egPy: 'fēi', egUz: 'uchmoq', egSound: 'fei1' }
        ]
    },
    {
        group: 'Alveolar (Til uchi tovushlari)',
        items: [
            { letter: 'd', ipa: 'dē', uz: 'Nafassiz yumshoq "d"/"t"', sound: 'd', egHz: '大', egPy: 'dà', egUz: 'katta', egSound: 'da4' },
            { letter: 't', ipa: 'tē', uz: 'Kuchli nafas bilan "t"', sound: 't', egHz: '他', egPy: 'tā', egUz: 'u', egSound: 'ta1' },
            { letter: 'n', ipa: 'nē', uz: 'Oddiy burun "n"', sound: 'n', egHz: '你', egPy: 'nǐ', egUz: 'sen', egSound: 'ni3' },
            { letter: 'l', ipa: 'lē', uz: 'Oddiy yon "l"', sound: 'l', egHz: '来', egPy: 'lái', egUz: 'kelmoq', egSound: 'lai2' }
        ]
    },
    {
        group: 'Velar (Til orqa tovushlari)',
        items: [
            { letter: 'g', ipa: 'gē', uz: 'Nafassiz "g"/"k"', sound: 'g', egHz: '高', egPy: 'gāo', egUz: 'baland', egSound: 'gao1' },
            { letter: 'k', ipa: 'kē', uz: 'Kuchli nafas bilan "k"', sound: 'k', egHz: '看', egPy: 'kàn', egUz: 'qaramoq', egSound: 'kan4' },
            { letter: 'h', ipa: 'hē', uz: 'Bo‘g‘izdagi jarangli "h"/"x"', sound: 'h', egHz: '好', egPy: 'hǎo', egUz: 'yaxshi', egSound: 'hao3' }
        ]
    },
    {
        group: 'Palatal (Til o‘rtasi tovushlari)',
        items: [
            { letter: 'j', ipa: 'jī', uz: 'Yumshoq "ji" (tishlar orqasida)', sound: 'j', egHz: '家', egPy: 'jiā', egUz: 'uy/oila', egSound: 'jia1' },
            { letter: 'q', ipa: 'qī', uz: 'Kuchli nafas bilan "chi"', sound: 'q', egHz: '去', egPy: 'qù', egUz: 'bormoq', egSound: 'qu4' },
            { letter: 'x', ipa: 'xī', uz: 'Yumshoq "shi"', sound: 'x', egHz: '小', egPy: 'xiǎo', egUz: 'kichik', egSound: 'xiao3' }
        ]
    },
    {
        group: 'Retroflex (Til orqaga bukilgan tovushlar)',
        items: [
            { letter: 'zh', ipa: 'zhī', uz: 'Til bukilgan, nafassiz "j"', sound: 'zh', egHz: '中', egPy: 'zhōng', egUz: 'o‘rta', egSound: 'zhong1' },
            { letter: 'ch', ipa: 'chī', uz: 'Til bukilgan, nafasli "ch"', sound: 'ch', egHz: '吃', egPy: 'chī', egUz: 'yemoq', egSound: 'chi1' },
            { letter: 'sh', ipa: 'shī', uz: 'Til bukilgan, qattiq "sh"', sound: 'sh', egHz: '是', egPy: 'shì', egUz: 'bo‘lmoq', egSound: 'shi4' },
            { letter: 'r', ipa: 'rī', uz: 'Inglizcha "r" va o‘zbekcha "j"', sound: 'r', egHz: '人', egPy: 'rén', egUz: 'odam', egSound: 'ren2' }
        ]
    },
    {
        group: 'Dental (Tish oldi tovushlari)',
        items: [
            { letter: 'z', ipa: 'zī', uz: 'Tishlar jips, "dz" kabi', sound: 'z', egHz: '在', egPy: 'zài', egUz: 'bo‘lmoq/da', egSound: 'zai4' },
            { letter: 'c', ipa: 'cī', uz: 'Tishlar jips, nafasli "ts"', sound: 'c', egHz: '菜', egPy: 'cài', egUz: 'taom', egSound: 'cai4' },
            { letter: 's', ipa: 'sī', uz: 'Tishlar orasidan "s"', sound: 's', egHz: '三', egPy: 'sān', egUz: 'uch', egSound: 'san1' }
        ]
    },
    {
        group: 'Semi-vowels (Yarim unlilar / Maxsus)',
        items: [
            { letter: 'y', ipa: 'yī', uz: '"y" yoki yolg‘iz "i" boshlanishi', sound: 'y', egHz: '一', egPy: 'yī', egUz: 'bir', egSound: 'yi1' },
            { letter: 'w', ipa: 'wū', uz: 'Inglizcha "w" yoki "v"/"u"', sound: 'w', egHz: '五', egPy: 'wǔ', egUz: 'besh', egSound: 'wu3' }
        ]
    }
];

const PINYIN_FINALS = [
    {
        group: 'Oddiy unlilar (单韵母 - 6 ta)',
        items: [
            { letter: 'a', baseSound: 'a', tones: ['ā', 'á', 'ǎ', 'à'], sounds: ['a', 'a2', 'a3', 'a4'], uz: 'Og‘iz keng ochilib "a"' },
            { letter: 'o', baseSound: 'o', tones: ['ō', 'ó', 'ǒ', 'ò'], sounds: ['o', 'o2', 'o3', 'o4'], uz: 'Lablar yumaloqlanib "o"' },
            { letter: 'e', baseSound: 'e', tones: ['ē', 'é', 'ě', 'è'], sounds: ['e', 'e2', 'e3', 'e4'], uz: 'Tomoqdan "e"/"o‘" tovushi' },
            { letter: 'i', baseSound: 'i', tones: ['ī', 'í', 'ǐ', 'ì'], sounds: ['i', 'yi2', 'yi3', 'yi4'], uz: 'Lablar keng jilmayib "i"' },
            { letter: 'u', baseSound: 'u', tones: ['ū', 'ú', 'ǔ', 'ù'], sounds: ['u', 'wu2', 'wu3', 'wu4'], uz: 'Lablar cho‘chchayib "u"' },
            { letter: 'ü', baseSound: 'v', tones: ['ǖ', 'ǘ', 'ǚ', 'ǜ'], sounds: ['v', 'yu2', 'yu3', 'yu4'], uz: 'Nemischa "ü" (lab "u", til "i")' }
        ]
    },
    {
        group: 'Murakkab unlilar (复韵母 - 9 ta)',
        items: [
            { letter: 'ai', baseSound: 'ai', tones: ['āi', 'ái', 'ǎi', 'ài'], sounds: ['ai', 'ai2', 'ai3', 'ai4'], uz: 'O‘zbekcha "ay"' },
            { letter: 'ei', baseSound: 'ei', tones: ['ēi', 'éi', 'ěi', 'èi'], sounds: ['ei', 'ei2', 'ei3', 'ei4'], uz: 'O‘zbekcha "ey"' },
            { letter: 'ui', baseSound: 'ui', tones: ['uī', 'uí', 'uǐ', 'uì'], sounds: ['ui', 'wei2', 'wei3', 'wei4'], uz: 'Aslida "uei" ("uey")' },
            { letter: 'ao', baseSound: 'ao', tones: ['āo', 'áo', 'ǎo', 'ào'], sounds: ['ao', 'ao2', 'ao3', 'ao4'], uz: 'O‘zbekcha "au"/"ao"' },
            { letter: 'ou', baseSound: 'ou', tones: ['ōu', 'óu', 'ǒu', 'òu'], sounds: ['ou', 'ou2', 'ou3', 'ou4'], uz: 'O‘zbekcha "ou"' },
            { letter: 'iu', baseSound: 'iu', tones: ['iū', 'iú', 'iǔ', 'iù'], sounds: ['iu', 'you2', 'you3', 'you4'], uz: 'Aslida "iou" ("you")' },
            { letter: 'ie', baseSound: 'ie', tones: ['iē', 'ié', 'iě', 'iè'], sounds: ['ie', 'ye2', 'ye3', 'ye4'], uz: 'O‘zbekcha "ye"' },
            { letter: 'üe', baseSound: 've', tones: ['yuē', 'yué', 'yuě', 'yuè'], sounds: ['ve', 'yue2', 'yue3', 'yue4'], uz: '"ü" va "e" birlashmasi' },
            { letter: 'er', baseSound: 'er', tones: ['ēr', 'ér', 'ěr', 'èr'], sounds: ['er', 'er2', 'er3', 'er4'], uz: 'Til orqaga bukiladi "er"' }
        ]
    },
    {
        group: 'Burun unlilari (鼻韵母 - 9 ta)',
        items: [
            { letter: 'an', baseSound: 'an', tones: ['ān', 'án', 'ǎn', 'àn'], sounds: ['an', 'an2', 'an3', 'an4'], uz: 'Old burun "an"' },
            { letter: 'en', baseSound: 'en', tones: ['ēn', 'én', 'ěn', 'èn'], sounds: ['en', 'en2', 'en3', 'en4'], uz: 'Old burun "en"' },
            { letter: 'in', baseSound: 'in', tones: ['īn', 'ín', 'ǐn', 'ìn'], sounds: ['in', 'yin2', 'yin3', 'yin4'], uz: 'Old burun "in"' },
            { letter: 'un', baseSound: 'un', tones: ['ūn', 'ún', 'ǔn', 'ùn'], sounds: ['un', 'wen2', 'wen3', 'wen4'], uz: 'Old burun "uen"' },
            { letter: 'ün', baseSound: 'vn', tones: ['yūn', 'yún', 'yǔn', 'yùn'], sounds: ['vn', 'yun2', 'yun3', 'yun4'], uz: 'Old burun "yün"' },
            { letter: 'ang', baseSound: 'ang', tones: ['āng', 'áng', 'ǎng', 'àng'], sounds: ['ang', 'ang2', 'ang3', 'ang4'], uz: 'Orqa burun chuqur "ang"' },
            { letter: 'eng', baseSound: 'eng', tones: ['ēng', 'éng', 'ěng', 'èng'], sounds: ['eng', 'leng3', 'eng1', 'leng3'], uz: 'Orqa burun "eng"' },
            { letter: 'ing', baseSound: 'ing', tones: ['īng', 'íng', 'ǐng', 'ìng'], sounds: ['ing', 'ying2', 'ying3', 'ying4'], uz: 'Orqa burun "ing"' },
            { letter: 'ong', baseSound: 'ong', tones: ['ōng', 'óng', 'ǒng', 'òng'], sounds: ['ong', 'hong2', 'hong3', 'hong4'], uz: 'Orqa burun "ong"' }
        ]
    }
];

const PINYIN_SYLLABLES_BY_GROUP = {
    bpmf: [
        'ba', 'bo', 'bai', 'bei', 'bao', 'ban', 'ben', 'bang', 'beng', 'bi', 'bie', 'biao', 'bian', 'bin', 'bing', 'bu',
        'pa', 'po', 'pai', 'pei', 'pao', 'pou', 'pan', 'pen', 'pang', 'peng', 'pi', 'pie', 'piao', 'pian', 'pin', 'ping', 'pu',
        'ma', 'mo', 'me', 'mai', 'mei', 'mao', 'mou', 'man', 'men', 'mang', 'meng', 'mi', 'mie', 'miao', 'miu', 'mian', 'min', 'ming', 'mu',
        'fa', 'fo', 'fei', 'fou', 'fan', 'fen', 'fang', 'feng', 'fu'
    ],
    dtnl: [
        'da', 'de', 'dai', 'dei', 'dao', 'dou', 'dan', 'dang', 'deng', 'dong', 'di', 'die', 'diao', 'diu', 'dian', 'ding', 'du', 'duo', 'dui', 'duan', 'dun',
        'ta', 'te', 'tai', 'tao', 'tou', 'tan', 'tang', 'teng', 'tong', 'ti', 'tie', 'tiao', 'tian', 'ting', 'tu', 'tuo', 'tui', 'tuan', 'tun',
        'na', 'ne', 'nai', 'nei', 'nao', 'nou', 'nan', 'nen', 'nang', 'neng', 'nong', 'ni', 'nie', 'niao', 'niu', 'nian', 'nin', 'niang', 'ning', 'nu', 'nuo', 'nuan', 'nü', 'nüe',
        'la', 'le', 'lai', 'lei', 'lao', 'lou', 'lan', 'lang', 'leng', 'long', 'li', 'lia', 'lie', 'liao', 'liu', 'lian', 'lin', 'liang', 'ling', 'lu', 'luo', 'luan', 'lun', 'lü', 'lüe'
    ],
    gkh: [
        'ga', 'ge', 'gai', 'gei', 'gao', 'gou', 'gan', 'gen', 'gang', 'geng', 'gong', 'gu', 'gua', 'guo', 'guai', 'gui', 'guan', 'gun', 'guang',
        'ka', 'ke', 'kai', 'kei', 'kao', 'kou', 'kan', 'ken', 'kang', 'keng', 'kong', 'ku', 'kua', 'kuo', 'kuai', 'kui', 'kuan', 'kun', 'kuang',
        'ha', 'he', 'hai', 'hei', 'hao', 'hou', 'han', 'hen', 'hang', 'heng', 'hong', 'hu', 'hua', 'huo', 'huai', 'hui', 'huan', 'hun', 'huang'
    ],
    jqx: [
        'ji', 'jia', 'jie', 'jiao', 'jiu', 'jian', 'jin', 'jiang', 'jing', 'jiong', 'ju', 'jue', 'juan', 'jun',
        'qi', 'qia', 'qie', 'qiao', 'qiu', 'qian', 'qin', 'qiang', 'qing', 'qiong', 'qu', 'que', 'quan', 'qun',
        'xi', 'xia', 'xie', 'xiao', 'xiu', 'xian', 'xin', 'xiang', 'xing', 'xiong', 'xu', 'xue', 'xuan', 'xun'
    ],
    zhchshr: [
        'zha', 'zhe', 'zhi', 'zhai', 'zhei', 'zhao', 'zhou', 'zhan', 'zhen', 'zhang', 'zheng', 'zhong', 'zhu', 'zhua', 'zhuo', 'zhuai', 'zhui', 'zhuan', 'zhun', 'zhuang',
        'cha', 'che', 'chi', 'chai', 'chao', 'chou', 'chan', 'chen', 'chang', 'cheng', 'chong', 'chu', 'chua', 'chuo', 'chuai', 'chui', 'chuan', 'chun', 'chuang',
        'sha', 'she', 'shi', 'shai', 'shei', 'shao', 'shou', 'shan', 'shen', 'shang', 'sheng', 'shu', 'shua', 'shuo', 'shuai', 'shui', 'shuan', 'shun', 'shuang',
        're', 'ri', 'rao', 'rou', 'ran', 'ren', 'rang', 'reng', 'rong', 'ru', 'ruo', 'rui', 'ruan', 'run'
    ],
    zcs: [
        'za', 'ze', 'zi', 'zai', 'zei', 'zao', 'zou', 'zan', 'zen', 'zang', 'zeng', 'zong', 'zu', 'zuo', 'zui', 'zuan', 'zun',
        'ca', 'ce', 'ci', 'cai', 'cao', 'cou', 'can', 'cen', 'cang', 'ceng', 'cong', 'cu', 'cuo', 'cui', 'cuan', 'cun',
        'sa', 'se', 'si', 'sai', 'sao', 'sou', 'san', 'sen', 'sang', 'seng', 'song', 'su', 'suo', 'sui', 'suan', 'sun'
    ],
    yw: [
        'yi', 'ya', 'yao', 'ye', 'you', 'yan', 'yang', 'yin', 'ying', 'yong', 'yu', 'yue', 'yuan', 'yun',
        'wu', 'wa', 'wo', 'wai', 'wei', 'wan', 'wen', 'wang', 'weng'
    ]
};

const COMMON_SYLLABLE_HANZI = {
    'mā': '妈 (Ona)', 'má': '麻 (Zig‘ir)', 'mǎ': '马 (Ot)', 'mà': '骂 (Urishmoq)',
    'bā': '八 (Sakkiz)', 'bá': '拔 (Sug‘urmoq)', 'bǎ': '把 (Ushlamoq)', 'bà': '爸 (Ota)',
    'dā': '搭 (Minmoq)', 'dá': '答 (Javob)', 'dǎ': '打 (Urmoq)', 'dà': '大 (Katta)',
    'tā': '他 (U)', 'tá': '抬 (Ko‘tarmoq)', 'tǎ': '塔 (Minora)', 'tà': '踏 (Bosmoq)',
    'nī': '妮 (Qiz)', 'ní': '泥 (Loy)', 'nǐ': '你 (Sen)', 'nì': '逆 (Qarshi)',
    'lī': '哩 (Milya)', 'lí': '梨 (Nok)', 'lǐ': '里 (Ichida)', 'lì': '力 (Kuch)',
    'gāo': '高 (Baland)', 'gǎo': '稿 (Qoralama)', 'gào': '告 (Aytmoq)',
    'hē': '喝 (Ichmoq)', 'hé': '和 (Va)', 'hǎo': '好 (Yaxshi)', 'hào': '号 (Raqam)',
    'fēi': '飞 (Uchmoq)', 'féi': '肥 (Semiz)', 'fěi': '匪 (Qaroqchi)', 'fèi': '费 (Xarajat)',
    'shī': '师 (Ustoz)', 'shí': '十 (O‘n)', 'shǐ': '使 (Ishlatmoq)', 'shì': '是 (Ha/Esa)',
    'chī': '吃 (Yemoq)', 'chí': '迟 (Kech)', 'chǐ': '尺 (Chizg‘ich)', 'chì': '翅 (Qanot)',
    'zhī': '知 (Bilmoq)', 'zhí': '直 (To‘g‘ri)', 'zhǐ': '只 (Faqat)', 'zhì': '志 (Iroda)',
    'rī': '日', 'rì': '日 (Quyosh/Kun)',
    'sī': '思 (O‘ylamoq)', 'sǐ': '死 (O‘lmoq)', 'sì': '四 (To‘rt)',
    'qī': '七 (Yetti)', 'qí': '骑 (Minmoq)', 'qǐ': '起 (Turmoq)', 'qì': '气 (Havo)',
    'xī': '西 (G‘arb)', 'xí': '习 (O‘rganmoq)', 'xǐ': '洗 (Yuvmoq)', 'xì': '细 (Yupqa)',
    'shuī': '说', 'shuí': '谁 (Kim)', 'shuǐ': '水 (Suv)', 'shuì': '睡 (Uxlamoq)',
    'yī': '一 (Bir)', 'yí': '移 (Ko‘chirmoq)', 'yǐ': '以 (Bilan)', 'yì': '意 (Ma’no)',
    'wū': '屋 (Xona)', 'wú': '无 (Yo‘q)', 'wǔ': '五 (Besh)', 'wù': '物 (Narsa)',
    'zhōng': '中 (O‘rta)', 'zhǒng': '种 (Urug‘)', 'zhòng': '重 (Og‘ir)',
    'guō': '锅 (Qozon)', 'guó': '国 (Mamlakat)', 'guǒ': '果 (Meva)', 'guò': '过 (O‘tmoq)'
};

const PINYIN_RULES = [
    {
        tag: 'Muhim qoida #1',
        title: '🎯 j, q, x + ü qoidasi (Nuqtalar tushib qolishi)',
        desc: 'Xitoy tilida "ü" (ikkita nuqtali unli) faqat <code>j, q, x</code> yoki <code>y</code> harflari bilan kelganda uning ustidagi ikki nuqtasi yozilmaydi, lekin baribir "ü" deb o‘qiladi ("u" emas!). Boshqa <code>n, l</code> harflari bilan esa nuqtasi saqlanadi.',
        formula: 'j / q / x + ü ➔ ju, qu, xu (talaffuz: [jü], [qü], [xü])',
        examples: [
            { hz: '去', py: 'qù', uz: 'bormoq' },
            { hz: '句子', py: 'jùzi', uz: 'gap' },
            { hz: '需要', py: 'xūyào', uz: 'kerak' },
            { hz: '月亮', py: 'yuèliang', uz: 'oy' },
            { hz: '绿茶', py: 'lǜchá', uz: 'ko‘k choy (nuqta qoladi!)' }
        ]
    },
    {
        tag: 'Muhim qoida #2',
        title: '👅 Maxsus "Bo‘sh unli" i (空韵 Kongyun)',
        desc: 'Retroflex (<code>zh, ch, sh, r</code>) va Dental (<code>z, c, s</code>) undoshlari orqasidan kelgan "i" harfi odatdagi o‘zbekcha "i" kabi o‘qilmaydi! Til o‘sha pozitsiyada turib qisqa, bo‘g‘iq, xirillagan "ы" tovushini chiqaradi.',
        formula: 'zh, ch, sh, r / z, c, s + i ➔ "i" deb emas, maxsus "ы" deb o‘qiladi',
        examples: [
            { hz: '老师', py: 'lǎoshī', uz: 'ustoz' },
            { hz: '四', py: 'sì', uz: 'to‘rt ("si" emas, "sы")' },
            { hz: '吃饭', py: 'chīfàn', uz: 'ovqat yemoq' },
            { hz: '日', py: 'rì', uz: 'kun / quyosh' }
        ]
    },
    {
        tag: 'Muhim qoida #3',
        title: '🔄 3-3 Ton Sandhi (Ketma-ket uchinchi tonlar)',
        desc: 'Ikkita 3-ton ketma-ket kelsa, til qulay harakat qilishi uchun 1-chi bo‘g‘in avtomatik ravishda 2-tonga aylanadi. Bu pinyin yozuvida o‘zgarmaydi, lekin talaffuzda aniq 2-ton qilinadi.',
        formula: '3-ton + 3-ton ➔ 2-ton + 3-ton',
        examples: [
            { hz: '你好', py: 'nǐ hǎo ➔ ní hǎo', uz: 'salom' },
            { hz: '很好', py: 'hěn hǎo ➔ hén hǎo', uz: 'juda yaxshi' },
            { hz: '可以', py: 'kě yǐ ➔ ké yǐ', uz: 'mumkin' },
            { hz: '手表', py: 'shǒu biǎo ➔ shóu biǎo', uz: 'qo‘l soati' }
        ]
    },
    {
        tag: 'Muhim qoida #4',
        title: '⚡ "不" (bù) va "一" (yī) ning maxsus o‘zgarishlari',
        desc: '1. "不" (bù) aslida 4-ton. Ammo orqasidan yana 4-ton kelsa, u 2-tonga aylanadi (bú shì).<br>2. "一" (yī) aslida 1-ton. 4-ton oldidan 2-tonga (yí gè), 1/2/3-tonlar oldidan esa 4-tonga aylanadi (yì tiān, yì qǐ).',
        formula: 'bù (4) + 4-ton ➔ bú (2) | yī (1) + 4-ton ➔ yí (2)',
        examples: [
            { hz: '不是', py: 'bú shì', uz: 'emas' },
            { hz: '不要', py: 'bú yào', uz: 'kerak emas' },
            { hz: '一个', py: 'yí gè', uz: 'bitta' },
            { hz: '一天', py: 'yì tiān', uz: 'bir kun' },
            { hz: '一起', py: 'yì qǐ', uz: 'birga' }
        ]
    }
];

function applyPinyinTone(syllable, tone) {
    if (!syllable || tone < 1 || tone > 4) return syllable;
    const toneMap = {
        'a': ['ā', 'á', 'ǎ', 'à'],
        'o': ['ō', 'ó', 'ǒ', 'ò'],
        'e': ['ē', 'é', 'ě', 'è'],
        'i': ['ī', 'í', 'ǐ', 'ì'],
        'u': ['ū', 'ú', 'ǔ', 'ù'],
        'ü': ['ǖ', 'ǘ', 'ǚ', 'ǜ'],
        'v': ['ǖ', 'ǘ', 'ǚ', 'ǜ']
    };
    const s = syllable.toLowerCase();
    let targetChar = '';
    if (s.includes('a')) targetChar = 'a';
    else if (s.includes('e')) targetChar = 'e';
    else if (s.includes('ou')) targetChar = 'o';
    else {
        for (let i = s.length - 1; i >= 0; i--) {
            if (toneMap[s[i]]) {
                targetChar = s[i];
                break;
            }
        }
    }
    if (!targetChar) return syllable;
    const replacement = toneMap[targetChar][tone - 1];
    const idx = (targetChar === 'o' && s.includes('ou')) ? s.indexOf('o') : s.lastIndexOf(targetChar);
    return s.substring(0, idx) + replacement + s.substring(idx + 1);
}

function playPinyinAudio(soundKey, fallbackText = null) {
    if (!soundKey && !fallbackText) return;

    // Direct playback of studio audio MP3
    if (typeof playNativeToneSound === 'function') {
        const audio = playNativeToneSound(soundKey, fallbackText || soundKey, 1.0);
        if (audio) return;
    }

    // TTS fallback with native Chinese voice
    const toSpeak = fallbackText || soundKey;
    speakChineseText(toSpeak, 0.95);
}

let activePinyinFilter = 'all';
let selectedPinyinSyllable = 'ma';

function initPinyinChart(initialTab = 'initials') {
    const tabs = document.querySelectorAll('#pinyinChartTabs .subview-tab');
    const panels = {
        initials: document.getElementById('pinyinTabInitials'),
        finals: document.getElementById('pinyinTabFinals'),
        matrix: document.getElementById('pinyinTabMatrix'),
        rules: document.getElementById('pinyinTabRules')
    };

    function switchPinyinTab(tabKey) {
        tabs.forEach(t => t.classList.toggle('active', t.dataset.pinyinTab === tabKey));
        Object.keys(panels).forEach(k => {
            if (panels[k]) panels[k].classList.toggle('active', k === tabKey);
        });
    }

    tabs.forEach(tab => {
        tab.onclick = () => switchPinyinTab(tab.dataset.pinyinTab);
    });

    switchPinyinTab(initialTab);
    renderPinyinInitials();
    renderPinyinFinals();
    renderPinyinMatrix();
    renderPinyinRules();
}

function renderPinyinInitials() {
    const container = document.getElementById('pinyinInitialsList');
    if (!container) return;

    const listenLbl = typeof t === 'function' ? t('card.listen') : 'Tinglash';
    container.innerHTML = PINYIN_INITIALS.map(group => `
        <div class="pinyin-group-block">
            <div class="pinyin-group-title">🏷️ ${trUz(group.group)}</div>
            <div class="pinyin-cards-grid">
                ${group.items.map(item => `
                    <div class="pinyin-card" data-letter="${item.letter}">
                        <div class="pinyin-card-header">
                            <span class="pinyin-card-letter">${item.letter}</span>
                            <span class="pinyin-card-ipa">[ ${item.ipa} ]</span>
                        </div>
                        <div class="pinyin-card-uzbek">${trUz(item.uz)}</div>
                        <button type="button" class="pinyin-play-main-btn" data-sound="${item.sound}" data-fallback="${item.ipa}">
                            <span class="p-icon">🔊</span>
                            <span class="p-txt">${item.ipa}</span>
                            <span class="p-sub">${listenLbl}</span>
                        </button>
                        <button type="button" class="pinyin-sample-pill-btn" data-sound="${item.egSound}" data-fallback="${item.egHz}">
                            <span class="p-spk">🗣️</span>
                            <strong>${item.egHz} ${item.egPy}</strong>
                            <span class="p-trn">(${trUz(item.egUz)})</span>
                        </button>
                    </div>
                `).join('')}
            </div>
        </div>
    `).join('');

    container.querySelectorAll('.pinyin-play-main-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            playPinyinAudio(btn.dataset.sound, btn.dataset.fallback);
        });
    });

    container.querySelectorAll('.pinyin-sample-pill-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            playPinyinAudio(btn.dataset.sound, btn.dataset.fallback);
        });
    });
}

function renderPinyinFinals() {
    const container = document.getElementById('pinyinFinalsList');
    if (!container) return;

    container.innerHTML = PINYIN_FINALS.map(group => `
        <div class="pinyin-group-block">
            <div class="pinyin-group-title">🎵 ${trUz(group.group)}</div>
            <div class="pinyin-cards-grid">
                ${group.items.map(item => `
                    <div class="pinyin-card" data-letter="${item.letter}">
                        <div class="pinyin-card-header" data-sound="${item.baseSound || item.sounds[0]}" style="cursor:pointer;" title="🔊 ${item.letter}">
                            <span class="pinyin-card-letter">${item.letter}</span>
                            <span class="pinyin-card-ipa">🔊</span>
                        </div>
                        <div class="pinyin-card-uzbek">${trUz(item.uz)}</div>
                        <div class="pinyin-tones-grid-4">
                            ${item.tones.map((t, idx) => `
                                <button type="button" class="pinyin-tone-chip-4" data-sound="${item.sounds[idx]}" data-py="${t}">
                                    ${t}
                                </button>
                            `).join('')}
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `).join('');

    container.querySelectorAll('.pinyin-card-header[data-sound]').forEach(hdr => {
        hdr.addEventListener('click', (e) => {
            e.stopPropagation();
            playPinyinAudio(hdr.dataset.sound, hdr.dataset.sound);
        });
    });
    container.querySelectorAll('.pinyin-tone-chip-4').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            playPinyinAudio(btn.dataset.sound, btn.dataset.py);
        });
    });
}


function renderPinyinMatrix() {
    const grid = document.getElementById('pinyinSyllablesGrid');
    const searchInput = document.getElementById('pinyinSearchInput');
    const clearBtn = document.getElementById('pinyinSearchClearBtn');
    const filterPills = document.querySelectorAll('#pinyinGroupFilters .pinyin-filter-pill');

    function getAllSyllables() {
        if (activePinyinFilter === 'all') {
            const list = [];
            Object.keys(PINYIN_SYLLABLES_BY_GROUP).forEach(k => {
                list.push(...PINYIN_SYLLABLES_BY_GROUP[k]);
            });
            return Array.from(new Set(list)).sort();
        }
        return (PINYIN_SYLLABLES_BY_GROUP[activePinyinFilter] || []).slice().sort();
    }

    function renderTiles() {
        if (!grid) return;
        const query = (searchInput?.value || '').trim().toLowerCase();
        let list = getAllSyllables();
        if (query) {
            list = list.filter(s => s.toLowerCase().includes(query));
        }

        if (list.length === 0) {
            grid.innerHTML = '<div style="grid-column: 1 / -1; text-align: center; color: var(--text-secondary); padding: 2rem 0; font-size: 0.88rem;">Bo‘g‘in topilmadi. Boshqa so‘z yozib ko‘ring.</div>';
            return;
        }

        grid.innerHTML = list.map(s => `
            <button type="button" class="pinyin-syllable-tile ${s === selectedPinyinSyllable ? 'is-active' : ''}" data-syllable="${s}">
                ${s}
            </button>
        `).join('');

        grid.querySelectorAll('.pinyin-syllable-tile').forEach(tile => {
            tile.onclick = () => {
                selectSyllableInDock(tile.dataset.syllable);
            };
        });
    }

    filterPills.forEach(pill => {
        pill.onclick = () => {
            filterPills.forEach(p => p.classList.remove('active'));
            pill.classList.add('active');
            activePinyinFilter = pill.dataset.filter;
            renderTiles();
        };
    });

    if (searchInput) {
        searchInput.oninput = () => {
            const val = searchInput.value.trim();
            if (clearBtn) clearBtn.hidden = val.length === 0;
            renderTiles();
            const lower = val.toLowerCase();
            const all = getAllSyllables();
            if (all.includes(lower)) {
                selectSyllableInDock(lower);
            }
        };
    }

    if (clearBtn) {
        clearBtn.onclick = () => {
            searchInput.value = '';
            clearBtn.hidden = true;
            renderTiles();
        };
    }

    const dockClose = document.getElementById('dockCloseBtn');
    if (dockClose) {
        dockClose.onclick = () => {
            const dock = document.getElementById('pinyinSyllableDock');
            if (dock) dock.hidden = true;
        };
    }

    renderTiles();
    selectSyllableInDock(selectedPinyinSyllable || 'ma');
}

function selectSyllableInDock(syllable) {
    selectedPinyinSyllable = syllable;
    const dock = document.getElementById('pinyinSyllableDock');
    const textEl = document.getElementById('dockSyllableText');
    const tonesBox = document.getElementById('dockToneButtons');
    if (!dock || !textEl || !tonesBox) return;

    dock.hidden = false;
    textEl.textContent = syllable;

    document.querySelectorAll('.pinyin-syllable-tile').forEach(t => {
        t.classList.toggle('is-active', t.dataset.syllable === syllable);
    });

    const tones = [1, 2, 3, 4].map(tone => {
        const tonePy = applyPinyinTone(syllable, tone);
        const meta = trUz(COMMON_SYLLABLE_HANZI[tonePy] || `${tone}-ton`);
        return { tone, tonePy, soundKey: `${syllable}${tone}`, meta };
    });

    tonesBox.innerHTML = tones.map(item => `
        <button type="button" class="pinyin-dock-tone-btn" data-sound="${item.soundKey}" data-fallback="${item.tonePy}">
            <div>
                <span class="pdt-tone-py">${item.tonePy}</span>
                <span class="pdt-tone-meta">${item.meta}</span>
            </div>
            <span class="pdt-tone-sound-icon">🔊</span>
        </button>
    `).join('');

    tonesBox.querySelectorAll('.pinyin-dock-tone-btn').forEach(btn => {
        btn.onclick = () => {
            playPinyinAudio(btn.dataset.sound, btn.dataset.fallback);
        };
    });
}

function renderPinyinRules() {
    const container = document.getElementById('pinyinRulesList');
    if (!container) return;

    container.innerHTML = PINYIN_RULES.map(rule => `
        <div class="pinyin-rule-card">
            <div class="pinyin-rule-head">
                <span class="pinyin-rule-tag">${trUz(rule.tag)}</span>
                <h3 class="pinyin-rule-title">${trUz(rule.title)}</h3>
            </div>
            <p class="pinyin-rule-desc">${trUz(rule.desc)}</p>
            <div class="pinyin-rule-formula">
                <span>⚡ ${trUz('Qoida formulasi:')}</span>
                <code>${rule.formula}</code>
            </div>
            <div class="pinyin-rule-examples">
                ${rule.examples.map(eg => `
                    <button type="button" class="pinyin-rule-chip" data-speak="${eg.hz}" data-py="${eg.py}">
                        <span>🔊</span>
                        <strong>${eg.hz}</strong>
                        <span>[ ${eg.py} ]</span>
                        <small style="opacity: 0.7;">${trUz(eg.uz)}</small>
                    </button>
                `).join('')}
            </div>
        </div>
    `).join('');

    container.querySelectorAll('.pinyin-rule-chip').forEach(chip => {
        chip.addEventListener('click', () => {
            speakChineseText(chip.dataset.speak || chip.dataset.py);
        });
    });
}

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
                <div class="sp-uzbek">${trUz(item.uzbek)}</div>
            </div>
            <button type="button" class="sp-listen-btn" data-speak="${item.hanzi}" title="🔊">🔊</button>
        </div>
    `).join('');

    list.querySelectorAll('.sp-listen-btn').forEach(btn => {
        btn.onclick = () => speakChineseText(btn.dataset.speak, 0.85);
    });
}

// ------------------------------------------------------------------------------
// 17.4 REAL AI LAOSHI (Live Neural Translation with Pinyin & HSK Expert Coach)
// ------------------------------------------------------------------------------
let AI_CHAT_HISTORY = [
    {
        sender: 'bot',
        text: `你好！Men sizning shaxsiy xitoy tili ustozingiz — <strong>Li Laoshi (李老师)</strong>man. 👩‍🏫<br><br>
        Bugun qanday yordam bera olaman?<br>
        • 🌐 <strong>Tarjima kerakmi?</strong> Istalgan o‘zbekcha gapni yozing — darhol xitoycha iyeroglif, <strong>Pinyin talaffuzi</strong> va ovozini taqdim etaman!<br>
        • 📚 <strong>Darsda tushunarsiz joy bormi?</strong> Grammatika, tonlar siri yoki vaziyatli gaplarni so‘rang!`,
        speak: '你好！我是李老师，很高兴帮助你学中文和翻译。'
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
            handleAiScenarioChange(tab.dataset.aiMode);
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
                    text: `Suhbat tozalandi. Yangi savolingiz yoki tarjima qilmoqchi bo‘lgan gapingizni yozing! 😊`,
                    speak: '请问有什么问题需要翻译或解释吗？'
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

    // Voice input
    const voiceBtn = document.getElementById('aiVoiceInputBtn');
    if (voiceBtn) {
        voiceBtn.onclick = () => {
            const SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition;
            if (!SpeechRec) {
                alert('Brauzeringiz ovozli kiritishni qo‘llab-quvvatlamaydi. O‘rniga matn yozishingiz mumkin.');
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
        1. <strong>老师，我没听懂。</strong><br>
        🗣️ <em>Lǎoshī, wǒ méi tīngdǒng.</em> — Ustoz, men tushunmadim.<br><br>
        2. <strong>请再说一次，慢一点。</strong><br>
        🗣️ <em>Qǐng zài shuō yí cì, màn yìdiǎn.</em> — Iltimos yana bir bor sekinroq ayting.<br><br>
        3. <strong>这个字怎么读？</strong><br>
        🗣️ <em>Zhè ge zì zěnme dú?</em> — Bu iyeroglif qanday o‘qiladi?`;
        speak = '老师，我没听懂。请再说一次。';
    } else if (mode === 'canteen') {
        promptMsg = 'Oshxonada qanday ovqat buyurtma qilamiz?';
        reply = `🍜 <strong>Xitoy oshxonalarida (食堂) hayotiy muhim iboralar:</strong><br><br>
        1. <strong>不要辣！</strong><br>
        🗣️ <em>Bú yào là!</em> — Mutlaqo achchiq solmang!<br><br>
        2. <strong>打包带走。</strong><br>
        🗣️ <em>Dǎbāo dài zǒu.</em> — Olib ketishga qilib bering.<br><br>
        3. <strong>我不吃猪肉，有牛肉吗？</strong><br>
        🗣️ <em>Wǒ bù chī zhūròu, yǒu niúròu ma?</em> — Cho‘chqa yemayman, mol go‘shti bormi?`;
        speak = '不要辣，打包带走，微信支付。';
    } else if (mode === 'market') {
        promptMsg = 'Do‘kon va kuryer (外卖) bilan gaplashish';
        reply = `📱 <strong>To‘lov va Kuryer (快递 / 外卖) muloqoti:</strong><br><br>
        1. <strong>我扫你还是你扫我？</strong><br>
        🗣️ <em>Wǒ sǎo nǐ háishi nǐ sǎo wǒ?</em> — QR kodni siz skaner qilasizmi yoki menmi?<br><br>
        2. <strong>放门口吧，谢谢！</strong><br>
        🗣️ <em>Fàng ménkǒu ba, xièxie!</em> — Kuryerga: eshik oldiga qoldiring, rahmat!`;
        speak = '我扫你吧。放在门口，谢谢！';
    } else if (mode === 'taxi') {
        promptMsg = 'Taksida nima deyish kerak?';
        reply = `🚕 <strong>Taksi va Metroda (打车 / 地铁):</strong><br><br>
        1. <strong>师傅，去这个地址。</strong><br>
        🗣️ <em>Shīfu, qù zhè ge dìzhǐ.</em> — Haydovchiga manzilni ko‘rsatganda.<br><br>
        2. <strong>请打表。</strong><br>
        🗣️ <em>Qǐng dǎbiǎo.</em> — Iltimos, hisoblagichni yoqing.`;
        speak = '师傅，去这个地址，请打表。';
    } else {
        promptMsg = 'Tonlarni tahlil qilish sirlari';
        reply = `🎵 <strong>Xitoy tilida 4 ta ton va Sandhi sirlari:</strong><br><br>
        • <strong>1-ton:</strong> Baland va tekis (ā — 55)<br>
        • <strong>2-ton:</strong> Pastdan yuqoriga (á — 35)<br>
        • <strong>3-ton:</strong> Tushib chiquvchi (ǎ — 214)<br>
        • <strong>4-ton:</strong> Keskin va tez pastga (à — 51)<br><br>
        💡 <em>Istalgan iyeroglif yoki o‘zbekcha gap yozing, darhol Pinyin va tonlari bilan tahlil qilib beraman!</em>`;
        speak = '四声是汉语发音的关键：一声高平，二声升，三声降升，四声降。';
    }

    AI_CHAT_HISTORY.push({ sender: 'user', text: promptMsg });
    AI_CHAT_HISTORY.push({ sender: 'bot', text: reply, speak: speak });
    renderAiMessages();
}

// Security: escape any untrusted text (user input, external API responses)
// before it is placed into innerHTML / HTML attributes.
function escapeHtml(value) {
    return String(value == null ? '' : value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

// Convert Chinese characters to Pinyin using known dictionary
function lookupPinyinForChinese(cnText) {
    if (!cnText) return '';
    let result = '';
    for (let char of cnText) {
        const found = vocabularyData.find(w => w.hanzi === char || w.hanzi.startsWith(char));
        if (found) {
            result += (result ? ' ' : '') + found.pinyin.split(' ')[0];
        } else {
            result += char;
        }
    }
    return result;
}

async function handleSendAiMessage(queryText) {
    if (!queryText) return;
    AI_CHAT_HISTORY.push({ sender: 'user', text: queryText });
    renderAiMessages();

    const box = document.getElementById('aiMessagesBox');
    if (box) {
        const typingEl = document.createElement('div');
        typingEl.id = 'aiLiveTyping';
        typingEl.className = 'ai-typing-indicator';
        typingEl.innerHTML = `👩‍🏫 Li Laoshi tahlil qilmoqda <div class="ai-typing-dots"><span></span><span></span><span></span></div>`;
        box.appendChild(typingEl);
        box.scrollTop = box.scrollHeight;
    }

    try {
        const resp = await generateIntelligentAiResponse(queryText);
        const liveTyping = document.getElementById('aiLiveTyping');
        if (liveTyping) liveTyping.remove();

        AI_CHAT_HISTORY.push(resp);
        renderAiMessages();
        if (resp.speak) {
            speakChineseText(resp.speak, 0.9);
        }
    } catch (e) {
        const liveTyping = document.getElementById('aiLiveTyping');
        if (liveTyping) liveTyping.remove();

        const fallbackResp = generateLocalKnowledgeResponse(queryText);
        AI_CHAT_HISTORY.push(fallbackResp);
        renderAiMessages();
    }
}

async function generateIntelligentAiResponse(query) {
    const q = query.trim().toLowerCase();

    // Check direct HSK grammar or vocabulary lookup first
    const localMatch = checkLocalKnowledge(q, query);
    if (localMatch) {
        return localMatch;
    }

    // Clean user query from conversational filler phrases
    let cleanPrompt = query
        .replace(/degani xitoychada qanaqa boladi|degani xitoycha qanaqa|xitoychada qanaqa boladi|xitoychada nima deydi|qanday aytiladi|qanaqa aytiladi|qanday boladi/gi, '')
        .replace(/tarjima qilib ber|tarjima qilib bering|tarjima qiling|tarjima qil/gi, '')
        .replace(/xitoychaga|xitoycha|ozbekcha|o‘zbekcha/gi, '')
        .trim();

    if (!cleanPrompt) cleanPrompt = query;

    // Check if query is an Uzbek sentence needing translation
    const isUzbekSentence = q.includes('men') || q.includes('sen') || q.includes('biz') ||
        q.includes('kerak') || q.includes('bering') || q.includes('qayerda') ||
        q.includes('qanday') || q.includes('tarjima') || q.includes('salom') ||
        q.includes('boraman') || q.includes('yeyman') || q.includes('ovqat') ||
        cleanPrompt.split(' ').length >= 2;

    if (isUzbekSentence) {
        let chineseResult = '';
        let pinyinResult = '';

        // Strategy 1: Google Translate API with dt=t and dt=rm (Romanization / Pinyin)
        try {
            const gUrl = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=zh-CN&dt=t&dt=rm&q=${encodeURIComponent(cleanPrompt)}`;
            const res = await fetch(gUrl);
            const data = await res.json();

            if (data && data[0] && Array.isArray(data[0])) {
                // Combine all translated parts
                chineseResult = data[0].filter(item => item && item[0] && item[1]).map(item => item[0]).join('').trim();
                // Find Pinyin romanization from response
                const rmItem = data[0].find(item => item && item[2] && typeof item[2] === 'string');
                if (rmItem) {
                    pinyinResult = rmItem[2].trim();
                }
            }
        } catch (gErr) {
            // Google may be blocked without VPN in China -> Fallback to MyMemory API!
        }

        // Strategy 2: MyMemory API Fallback
        if (!chineseResult) {
            try {
                const mUrl = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(cleanPrompt)}&langpair=uz|zh-CN`;
                const res = await fetch(mUrl);
                const data = await res.json();
                if (data && data.responseData && data.responseData.translatedText) {
                    chineseResult = data.responseData.translatedText.trim();
                }
            } catch (mErr) {}
        }

        if (chineseResult) {
            if (!pinyinResult) {
                pinyinResult = lookupPinyinForChinese(chineseResult);
            }

            return {
                sender: 'bot',
                text: `🌐 <strong>Jonli AI Tarjima & Fonetik Tahlil:</strong><br><br>
                🇺🇿 <strong>O‘zbekcha:</strong> “${escapeHtml(cleanPrompt)}”<br>
                🇨🇳 <strong>Xitoycha:</strong> <span class="ai-cn-text">${escapeHtml(chineseResult)}</span><br>
                ${pinyinResult ? `🗣️ <strong>Pinyin:</strong> <span class="ai-pinyin-text">${escapeHtml(pinyinResult)}</span><br>` : ''}
                <br>💡 <strong>Ustoz Maslahati:</strong><br>
                Ushbu jumlani ravon aytish uchun quyidagi ovoz tugmasini bosing va Pinyindagi tonlarga qarab takrorlang!`,
                speak: chineseResult
            };
        }
    }

    return generateLocalKnowledgeResponse(query);
}

function checkLocalKnowledge(q, query) {
    // 1. Greetings
    if (q === 'salom' || q === 'assalomu alaykum' || q === 'qalesiz' || q.includes('ni hao') || q.includes('你好')) {
        return {
            sender: 'bot',
            text: `👋 <strong>你好！(Ní hǎo!)</strong><br><br>
            Katta mamnuniyat bilan yordam beraman! Xitoy tilida tonlar eng muhim poydevordir. 
            Xitoydagi darslaringiz qanday ketyapti? Biror so‘z, gap yoki ton qoidasi tushunarsiz bo‘ldimi? Istalgan o‘zbekcha gapingizni yozsangiz, darhol Pinyin va audiosi bilan tarjima qilib beraman!`,
            speak: '你好！我是你的中文老师，很高兴帮助你。'
        };
    }

    if (q.includes('rahmat') || q.includes('xie xie') || q.includes('谢谢')) {
        return {
            sender: 'bot',
            text: `😊 <strong>不客气！(Bú kèqi!) / 不用谢！(Bú yòng xiè!)</strong><br><br>
            • <strong>不客气</strong> — Eng rasmiy va muloyim javob ("Arzimaydi").<br>
            • <strong>不用谢</strong> — Do‘stlar orasida ("Rahmat aytishingiz shart emas").<br>
            • ⚠️ E’tibor bering: ikkalasida ham <strong>不</strong> so‘zi 4-ton oldida <strong>bú</strong> deb o‘zgaradi!`,
            speak: '不客气，不用谢！'
        };
    }

    // 2. Tone 3+3 rule (你好)
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

    // 3. "不" (bù) tone rule
    if (q.includes('不是') || q.includes('bu shi') || q.includes('bù') || q.includes('bú')) {
        return {
            sender: 'bot',
            text: `🎵 <strong>“不” (bù) ning Oltin Ton Qoidasi:</strong><br><br>
            • “不” aslida 4-ton: <strong>bù</strong>.<br>
            • ⚠️ <strong>Qoida:</strong> Agar “不”dan keyin 4-tondagi so‘z kelsa (是 shì, 对 duì, 要 yào), u <strong>2-tonga (bú)</strong> o‘zgaradi!<br>
            • ✅ 不是 → <strong>bú shì</strong> (Emas)<br>
            • ✅ 不对 → <strong>bú duì</strong> (Noto‘g‘ri)<br>
            • ✅ 不要 → <strong>bú yào</strong> (Kerakmas)<br>
            • ℹ️ 1, 2, 3-tonlar oldida o‘zgarmaydi: 不吃 (bù chī), 不好 (bù hǎo).`,
            speak: '不是，不对，不要。不吃，不好。'
        };
    }

    // 4. Distinction: "二" (èr) vs "两" (liǎng)
    if ((q.includes('二') && q.includes('两')) || (q.includes('er') && q.includes('liang')) || (q.includes('farqi') && q.includes('ikki'))) {
        return {
            sender: 'bot',
            text: `📖 <strong>二 (èr) va 两 (liǎng) Farqi:</strong><br><br>
            1. <strong>二 (èr):</strong> Shunchaki raqam aytganda va sanashda ishlatiladi:<br>
            • 一，二，三 (1, 2, 3)<br>
            • Xona raqamida: 202 (èr líng èr).<br><br>
            2. <strong>两 (liǎng):</strong> Sanoq so‘zlar (miqdor) oldidan faqat 两 keladi:<br>
            • 两个人 (liǎng ge rén) — 2 kishi.<br>
            • 两块钱 (liǎng kuài qián) — 2 yuan.<br>
            • ❌ <em>Xato:</em> 二个人 ❌ (hech qachon aytilmaydi!).`,
            speak: '二用于数数，两用于量词：两个人，两块钱。'
        };
    }

    // 5. Grammar: "了" (le) usage
    if (q.includes('了') || q.includes(' le ') || q.includes('le qachon') || q.includes('le grammatika')) {
        return {
            sender: 'bot',
            text: `📖 <strong>“了” (le) Yuklamasining 2 Asosiy Vazifasi:</strong><br><br>
            1. <strong>Fe’ldan keyin — Harakatning tugallangani:</strong><br>
            • 我吃了 (Wǒ chī le) — Men ovqatlanib bo‘ldim.<br><br>
            2. <strong>Gap oxirida — Yangi holat yoki o‘zgarish:</strong><br>
            • 下雨了 (Xià yǔ le) — Yomg‘ir yog‘a boshladi.<br>
            • 我懂了 (Wǒ dǒng le) — Endi tushundim!<br>
            • 太贵了！(Tài guì le!) — Juda qimmat!`,
            speak: '我吃了。下雨了。我懂了。'
        };
    }

    // 6. Vocabulary lookup in 480 HSK words
    if (typeof vocabularyData !== 'undefined' && Array.isArray(vocabularyData)) {
        const found = vocabularyData.find(w =>
            w.hanzi === query.trim() ||
            w.pinyin.toLowerCase() === q ||
            (w.uzbek && w.uzbek.toLowerCase() === q)
        );

        if (found) {
            const natEx = getWordNaturalExample(found);
            return {
                sender: 'bot',
                text: `🔍 <strong>So‘z Tahlili: “${found.hanzi}”</strong><br><br>
                • <strong>Pinyin:</strong> <em>${found.pinyin}</em><br>
                • <strong>O‘zbekcha:</strong> ${found.uzbek}<br>
                • <strong>Daraja:</strong> HSK ${found.hsk} (Lesson ${found.lesson})<br>
                • 🗣️ <strong>Jonli Misol:</strong> ${natEx.cn}<br>
                &nbsp;&nbsp;↳ <em>${natEx.py} — ${natEx.uz}</em>`,
                speak: `${found.hanzi}。${natEx.cn}`
            };
        }
    }

    return null;
}

function generateLocalKnowledgeResponse(query) {
    return {
        sender: 'bot',
        text: `🗣️ <strong>Li Laoshi (李老师) javobi:</strong> “${escapeHtml(query)}”<br><br>
        Ajoyib savol! Xitoy tilida har bir bo‘g‘inning toni va grammatik tartibi muhim ahamiyatga ega.<br>
        Agar bu o‘zbekcha gap bo‘lsa, uni xitoychaga tarjima qilib, <strong>Pinyin</strong> va <strong>audio</strong> bilan ko‘rsatib bera olaman. Darsdagi boshqa savollaringizni ham bemalol bering!`,
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
                ${msg.speak ? `<button type="button" class="ai-msg-speak-btn" data-speak="${escapeHtml(msg.speak)}" title="Ovoz chiqarib o‘qish">🔊</button>` : ''}
            </div>
            <div class="ai-msg-body">
                ${msg.sender === 'user' ? escapeHtml(msg.text) : msg.text}
                ${msg.speak ? `
                    <div class="ai-msg-foot-actions">
                        <button type="button" class="ai-action-chip ai-audio-chip" data-speak="${escapeHtml(msg.speak)}">🔊 Eshitish</button>
                        <button type="button" class="ai-action-chip ai-copy-chip" data-copy="${escapeHtml(msg.speak)}">📋 Xitoycha matn</button>
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


// ==============================================================================
// 20. SETTINGS SHEET (⚙️), APP LANGUAGE (i18n), PINYIN / HANZI SIZE, SFX,
//     DAILY GOAL, DAILY REMINDER, BACKUP / RESTORE / RESET
// ==============================================================================

var EC_SETTINGS_KEYS = {
    lang: 'easyChineseLang',
    pinyin: 'easyChinesePinyinMode',
    hanziSize: 'easyChineseHanziSize',
    sfx: 'easyChineseSfx',
    reminderOn: 'easyChineseReminderOn',
    reminderTime: 'easyChineseReminderTime',
    reminderLast: 'easyChineseReminderLast'
};

var EC_I18N = {
    uz: {
        'nav.home': 'Bosh sahifa', 'nav.practice': 'Mashq', 'nav.canvas': 'Yozish', 'nav.profile': 'Profil',
        'hero.kicker': "汉语 · Xitoy tilini o'rganing",
        'hero.title': 'Har bir iyeroglif — yangi dunyoga ochiladigan kichik eshik.',
        'hero.subtitle': "HSK so'z boyligini bosqichma-bosqich o'rganing — o'qing, tinglang, yozing va xotirada mustahkamlang.",
        'hero.quote': "« 千里之行，始于足下 » — ming chaqirimlik yo'l birinchi qadamdan boshlanadi.",
        'profile.kicker': 'Shaxsiy kabinet', 'profile.title': 'Mening profilim', 'profile.edit': 'Tahrirlash',
        'profile.weekly': 'Haftalik faollik', 'profile.progress': 'HSK 1–5 natijalar', 'profile.tapHint': "Bosib darsga o'ting →",
        'profile.learnedWords': "Yodlangan so'zlarim", 'profile.quests': 'Kunlik vazifalar', 'profile.achievements': 'Yutuqlar vitrinasi',
        'stat.streak': 'Kunlik streak', 'stat.learned': 'Yodlangan', 'stat.xp': 'Jami XP',
        'home.selectLevel': 'HSK darajasini tanlang', 'home.selectLevelSub': 'Boshlash yoki davom ettirish uchun darajani tanlang',
        'hsk.1_label': "HSK 1 · Boshlang'ich", 'hsk.1_words': "150 so'z", 'hsk.1_sub': 'Classic HSK va New HSK 3.0 · 15 ta dars',
        'hsk.2_label': 'HSK 2 · Quyi daraja', 'hsk.3_label': "HSK 3 · O'rta daraja", 'hsk.4_label': "HSK 4 · Yuqori o'rta", 'hsk.5_label': 'HSK 5 · Yuqori daraja',
        'hsk.lessons': 'New HSK 3.0 · 15 ta dars', 'hsk.start': 'Boshlash →', 'hsk.continue': 'Davom etish →',
        'dash.mistakesTitle': 'Xatolar ustida ishlash', 'dash.mistakesSub': "Xato qilingan so'zlarni takrorlash",
        'dash.mistakesCountSub': "{count} ta xato so'zni takrorlash",
        'dash.bookmarksTitle': "Saqlangan so'zlar", 'dash.bookmarksSub': "Sevimli so'zlar to'plami",
        'dash.bookmarksCountSub': "{count} ta saqlangan so'zni mashq qilish",
        'dash.enterLesson': 'Kirish →', 'dash.backToLevels': '← Darajalar',
        'dash.continueTitle': 'HSK {hsk} · {lesson}-darsdan davom etish',
        'dash.continueSub': '{track} · {done} / {total} dars tugallangan',
        'lesson.backToLessons': '← Darslar', 'lesson.aiAskBtn': '🤖 AI Tahlil', 'lesson.continue': 'Davom etish',
        'lesson.tabLearning': "O'rganish", 'lesson.tabFlashcard': 'Kartochkalar', 'lesson.tabQuiz': 'Test', 'lesson.tabWriting': 'Yozish',
        'lesson.trackClassic': 'Classic HSK 1 · 15 ta dars', 'lesson.trackNew': 'New HSK 3.0 · 15 ta dars',
        'lesson.searchPlaceholder': "O'zbekcha, Pinyin yoki Hanzi bo'yicha qidirish...",
        'lesson.legendCompleted': '✓ 已完成 · Tugallangan', 'lesson.legendCurrent': '● 进行中 · Joriy dars', 'lesson.legendLocked': '🔒 未解锁 · Yopiq',
        'lesson.word': 'Dars', 'lesson.wordsUnit': "so'z",
        'lesson.kickerNew': 'New HSK 3.0 yangi kitob darslari', 'lesson.kickerClassic': "Classic HSK 1 yo'nalishi",
        'lesson.progressText': '{total} tadan {done} ta dars tugallandi',
        'learning.vocabTitle': "Dars so'zlari", 'learning.examplesTitle': 'Misol gaplar',
        'learning.grammarTitle': 'Grammatika izohi', 'learning.builderTitle': '🧩 Gap tuzish mashqi',
        'learning.nextStageBtn': "2-bosqichga o'tish: Kartochkalar →",
        'complete.sub': 'Barcha bosqichlarni muvaffaqiyatli tugatdingiz!',
        'complete.rewardLbl': 'Mukofot', 'complete.wordsLbl': "O'rganilgan so'zlar", 'complete.scoreLbl': 'Natija',
        'complete.backBtn': '← Darslar xaritasiga qaytish',
        'step.learn': "O'rganish", 'step.cards': 'Kartochka', 'step.quiz': 'Test', 'step.write': 'Yozish', 'step.done': 'Yakun',
        'flow.statusComplete': '🎉 5/5 · Dars yakunlandi! Keyingi dars ochildi.',
        'flow.statusLearning': "1/5 · So'zlar va misollar bilan tanishing ({count} ta so'z)",
        'flow.statusFlashcards': '2/5 · Kartochka {current} / {total}',
        'flow.statusQuiz': '3/5 · Test: {current} / {total} savol',
        'flow.statusWriting': "4/5 · Yozish: {done} / {total} so'z",
        'card.tapHint': 'Aylantirish uchun bosing', 'card.audio': 'Ovoz', 'card.speak': 'Talaffuz', 'card.draw': 'Chizish',
        'card.next': 'Keyingi', 'card.prev': '← Oldingi', 'card.shuffle': '🔀 Aralashtirish',
        'card.bookmark': '⭐ Saqlash', 'card.bookmarked': '⭐ Saqlangan',
        'card.learned': '✓ Bilaman', 'card.learnedDone': '✓ Yodlandi',
        'card.learnedLabel': 'Yodlangan:', 'card.wordProgress': "{current} / {total} so'z",
        'quiz.scoreLabel': 'Ball:', 'quiz.typeMeaning': "Hanzi → Ma'no", 'quiz.typePinyin': "Ma'no → Pinyin",
        'quiz.typeHanzi': 'Pinyin → Hanzi', 'quiz.typeAudio': '🎧 Eshitib topish',
        'quiz.promptMeaning': "Bu so'zning ma'nosi nima?",
        'quiz.promptPinyin': "To'g'ri Pinyin talaffuzini tanlang:",
        'quiz.promptHanzi': "To'g'ri Hanzi iyeroglifini tanlang:",
        'quiz.promptAudio': "So'zni eshiting va to'g'ri ma'noni tanlang:",
        'quiz.replayAudio': 'Qayta eshitish',
        'quiz.nextQuestion': 'Keyingi savol', 'quiz.questionLabel': 'Savol:',
        'canvas.backToLessons': '← Darslarga qaytish', 'canvas.hskLevel': 'HSK darajasi', 'canvas.lesson': 'Dars',
        'canvas.version': 'Versiya', 'canvas.writingMode': 'Yozish rejimi',
        'canvas.trace': 'Qadamma-qadam', 'canvas.write': 'Xotiradan', 'canvas.test': 'Imtihon',
        'canvas.category': 'Chizish mashqi', 'canvas.wordLabel': "So'z:", 'canvas.traceHint': "Chiziqlar bo'ylab iyeroglifni yozing.",
        'canvas.check': 'Tekshirish', 'canvas.nextWord': "Keyingi so'z →", 'canvas.points': 'Ball:',
        'modal.correctTitle': "To'g'ri! 🎉", 'modal.correctMsg': "Barakalla! Iyeroglifni to'g'ri yozdingiz.",
        'modal.xpEarned': '+10 XP olindi!', 'modal.editProfileTitle': 'Profilni tahrirlash',
        'modal.cancel': 'Bekor qilish', 'modal.save': 'Saqlash', 'modal.leaderboardTitle': '🏆 Peshqadamlar', 'modal.close': 'Yopish',
        'practice.title': 'Amaliyot markazi', 'practice.kicker': "Tonlar, jonli muloqot, so'zlar va viktorinalar orqali xitoy tilingizni charxlang",
        'practice.g1': 'Ovoz va Talaffuz (Fonetika)', 'practice.g2': 'Iyerogliflar Ustaxonasi', 'practice.g3': 'Mashq va Qaytarish',
        'practice.tile.pinyin.title': 'Interaktiv Pinyin Jadvali', 'practice.tile.pinyin.badge': '23 Undosh + 24 Unli + Ovoz',
        'practice.tile.pinyin.desc': "Barcha 声母 va 韵母 tovushlari, to'liq kombinatsiyalar matritsasi va muhim o'qish qoidalari",
        'practice.tile.tone.title': 'Tonlar Laboratoriyasi', 'practice.tile.tone.badge': '4 Ton + Sandhi',
        'practice.tile.tone.desc': "1-4 tonlar grafigi, o'xshash so'zlar (mā/má/mǎ/mà) va eshitib topish viktorinasi",
        'practice.tile.pitch.title': 'Talaffuz va Pitch Mashqi', 'practice.tile.pitch.badge': 'Ovozli tekshirish',
        'practice.tile.pitch.desc': "Mikrofonga aytib, ovoz konturingiz to'g'ri tushayotganini tekshiring",
        'practice.tile.survival.title': 'Xitoyda Kunlik Muloqot', 'practice.tile.survival.badge': 'Jonli iboralar',
        'practice.tile.survival.desc': "Darsda (教室), oshxonada (食堂), WeChat to'lov (微信), metro va kuryer (外卖) gaplari",
        'practice.tile.ai.title': 'AI Laoshi (Li Ustoz)', 'practice.tile.ai.badge': 'SuperChinese uslubida',
        'practice.tile.ai.desc': 'Istalgan savolni bering, ton tahlili yoki real dialog mashq qiling',
        'practice.tile.radicals.title': 'Iyeroglif Kalitlari (Radikallar)',
        'practice.tile.radicals.badge': '30 Kalit + Anatomiya + Test',
        'practice.tile.radicals.desc': "Iyerogliflarning mantiqiy ildizlari (氵suv, 扌qo'l, 口og'iz, 亻odam), harf tuzilishi formulalari va viktorina",
        'radicals.backBtn': '← Mashq', 'radicals.title': 'Iyeroglif Kalitlari (Radikallar)',
        'radicals.kicker': "Har bir murakkab iyeroglif oddiy mantiqiy kalitlardan (部首) tashkil topgan — ularni tushunsangiz, so'zlarni 5 barobar tez eslab qolasiz!",
        'radicals.tabList': '30 Kalit', 'radicals.tabBuilder': 'Harf formulasi', 'radicals.tabQuiz': 'Viktorina',
        'radicals.searchPh': "Kalit, pinyin yoki ma'no bo'yicha qidiring (masalan: suv, odam,口)...",
        'radicals.catAll': 'Barchasi (30)', 'radicals.catHuman': '👤 Inson', 'radicals.catNature': '🌿 Tabiat',
        'radicals.catObjects': '🏠 Uy va buyum', 'radicals.catAction': '🏃 Harakat',
        'radicals.builderNoteTitle': '会意字 va 形声字 — Iyerogliflar qanday yasaladi?',
        'radicals.builderNoteDesc': "Ikki yoki uchta oddiy belgi qo'shilib yangi ma'no hosil qiladi. Kartochkani bosib so'z talaffuzini eshiting!",
        'practice.tile.cards.title': 'Interaktiv Kartochkalar Trenajyori',
        'practice.tile.cards.desc': "3D aylanuvchi kartochkalar, audio talaffuz va o'z-o'zini baholash (Bilaman / Qaytarish)",
        'practice.tile.mistakes.title': 'Xatolar Ustida Ishlash',
        'practice.tile.mistakes.desc': "Dars va testlarda xato bo'lgan so'zlarni qayta mustahkamlash",
        'practice.tile.bookmarks.title': "Saqlangan So'zlar",
        'practice.tile.bookmarks.desc': "O'zingiz yulduzcha qo'ygan maxsus so'zlar to'plamini takrorlash",
        'settings.title': 'Ilova sozlamalari', 'settings.short': 'Sozlamalar', 'settings.subtitle': "Ilovani o'zingizga moslang",
        'settings.group.language': '🌐 Ilova tili', 'settings.languageNote': "Menyular va tugmalar tanlangan tilda ko'rsatiladi.",
        'settings.group.appearance': "🎨 Ko'rinish", 'settings.theme': 'Tungi rejim',
        'settings.themeLight': "☀️ Kunduzgi yorug' mavzu", 'settings.themeDark': "🌙 Tungi qorong'u mavzu",
        'settings.pinyin': "Pinyin ko'rsatish", 'settings.pinyinHint': "Yashirilsa, bosganda ochiladi — o'zingizni sinang",
        'settings.show': 'Doim', 'settings.hide': 'Yashirish', 'settings.hanziSize': "Iyeroglif o'lchami",
        'settings.group.sound': '🔊 Ovoz', 'settings.speechRate': 'Talaffuz tezligi', 'settings.speechRateHint': 'Xitoycha ovoz tezligi',
        'settings.slow': 'Sekin', 'settings.normal': 'Normal', 'settings.fast': 'Tez',
        'settings.sfx': 'Ovoz effektlari', 'settings.sfxHint': "To'g'ri javob va yutuq ovozlari",
        'settings.group.study': "🎯 O'qish", 'settings.dailyGoal': 'Kunlik maqsad', 'settings.dailyGoalHint': "Har kuni nechta so'z o'rganasiz",
        'settings.reminder': 'Kunlik eslatma', 'settings.reminderHint': "O'qish vaqti kelganda eslatadi",
        'settings.reminderOn': '🔔 Har kuni {time} da eslatiladi',
        'settings.reminderDenied': 'Bildirishnomaga ruxsat berilmadi. Brauzer sozlamalaridan yoqing.',
        'settings.reminderUnsupported': "Bu brauzer bildirishnomalarni qo'llamaydi.",
        'settings.group.data': "💾 Ma'lumotlar", 'settings.export': 'Zaxira nusxa olish', 'settings.import': 'Zaxiradan tiklash',
        'settings.backupNote': "Telefon almashtirsangiz ham progressingiz yo'qolmaydi.",
        'settings.reset': 'Progressni nolga tushirish',
        'settings.resetConfirm': "Rostdan ham barcha progress (so'zlar, XP, streak) o'chirilsinmi? Buni qaytarib bo'lmaydi.",
        'settings.resetDone': 'Progress tozalandi 🧹', 'settings.importDone': 'Progress tiklandi ✅', 'settings.importError': "Fayl noto'g'ri yoki buzilgan ❌",
        'settings.exportDone': 'Zaxira fayli yuklab olindi 📤',
        'settings.group.app': '📱 Ilova', 'settings.installTitle': 'Easy Chinese ilovasi', 'settings.installHint': "Telefonga 1 bosishda o'rnatish",
        'settings.install': "O'rnatish", 'settings.about': 'Ilova haqida', 'settings.saved': 'Saqlandi ✅',
        'reminder.title': 'Easy Chinese 🀄', 'reminder.body': 'Bugungi xitoy tili mashqi vaqti keldi! 加油! 🔥',
        'profile.motto': 'har kuni bir qadam', 'profile.dailyPrefix': 'Kunlik:', 'profile.googleSignIn': 'Google orqali', 'profile.signOut': 'Chiqish',
        'quest.tracesTitle': '3 ta iyeroglif yozish', 'quest.doneSuffix': 'bajarildi', 'quest.xpTitle': "Bugun 50 XP to'plash",
        'ach.firstWord.name': 'Ilk Qadam', 'ach.firstWord.desc': "1-so'zni yodlash",
        'ach.firstLesson.name': "1-Dars G'olibi", 'ach.firstLesson.desc': "1 ta darsni to'liq tugatish",
        'ach.streak3.name': '3 Kunlik Olov', 'ach.streak3.desc': '3 kun ketma-ket kirish',
        'ach.streak7.name': 'Hafta Qahramoni', 'ach.streak7.desc': '7 kunlik streak',
        'ach.words50.name': 'Kitobxon', 'ach.words50.desc': "50 ta so'z yodlash",
        'ach.words100.name': 'Olim (Scholar)', 'ach.words100.desc': "100 ta so'z yodlash",
        'ach.xp100.name': '100 XP Yulduzi', 'ach.xp100.desc': "100 XP to'plash",
        'ach.calligrapher.name': 'Xattot Ustasi', 'ach.calligrapher.desc': '3 ta Hanzi yozish', 'ach.unlocked': '✓ Ochildi',
        'pfc.flipHint': "Tarjimani ko'rish uchun kartani bosing 👆", 'pfc.flipBack': "🔄 Orqaga o'girish",
        'pfc.again': 'Qaytarish', 'pfc.flip': "O'girish", 'pfc.good': 'Yodlandi (+5 XP)',
        'tone.kicker': 'Super Chinese uslubida: jonli 4 ta ton talaffuzi, eshitib topish viktorinasi, taqqoslash juftliklari va Tone Sandhi',
        'tone.tabChart': '4 Ton', 'tone.tabPairs': 'Juftlik', 'tone.seqBadge': '🔥 Super Chinese Usuli',
        'tone.seqTitle': '1-2-3-4 Tonlarni ketma-ket tinglash', 'tone.seqDesc': 'mā (1) → má (2) → mǎ (3) → mà (4) — ohanglar farqini bevosita his qiling',
        'tone.seqPlay': 'Ketma-ket solishtirish', 'tone.earHint': "Quloq soling: bu nechanchi ton va qaysi so'z?",
        'tone.compareBoth': '▶️ Ikkalasini solishtirish', 'tone.pairsTitle': "Ton o'zgarsa — ma'no butkul o'zgaradi!",
        'tone.pairsKicker': "Xitoyda eng ko'p adashtiriladigan hayotiy so'zlar: «买 (sotib olmoq) vs 卖 (sotmoq)», «四 (4) vs 十 (10)»",
        'pinyin.tabInitials': 'Undoshlar', 'pinyin.tabFinals': 'Unlilar', 'pinyin.tabMatrix': 'Matritsa', 'pinyin.tabRules': 'Qoidalar',
        'pitch.catSingle': '4 Asosiy Ton', 'pitch.catTones': 'Ton Juftliklari', 'pitch.catHsk': "HSK So'zlari", 'pitch.catPhrases': 'Jonli Iboralar',
        'pinyin.initialsTitle': '声母 (Shēngmǔ) — Undosh tovushlar (23 ta):',
        'pinyin.initialsDesc': "Xitoy tilidagi bo'g'in boshlovchi undoshlar. Kartochkani bosib standart talaffuzini tinglang.",
        'pinyin.finalsTitle': '韵母 (Yùnmǔ) — Unli tovushlar (24 ta):',
        'pinyin.finalsDesc': '6 oddiy, 9 murakkab va 9 burun unlisi. 1-4 ton tugmachalarini bosib ohanglar bilan tinglang.',
        'pinyin.searchPh': "Bo'g'in qidiring (masalan: ma, ni, hao, zhong, xue)...", 'pinyin.all': 'Barchasi', 'pinyin.selectedSyllable': "Tanlangan bo'g'in",
        'survival.tabClass': 'Darsda', 'survival.tabCanteen': 'Oshxona', 'survival.tabDelivery': 'Kuryer', 'survival.tabMetro': 'Metro',
        'ai.tabCoach': "🔍 Ton va So'z", 'ai.inputPh': 'Savol bering yoki tarjima qilish uchun gap yozing...', 'ai.send': 'Yuborish',
        'ai.modalSub': "Darsdan chiqmasdan o'rganish", 'ai.backToLesson': '✕ Darsga qaytish', 'ai.openFullChat': '💬 AI Laoshi suhbati →',
        'weekly.days': 'Du,Se,Ch,Pa,Ju,Sh,Ya', 'weekly.streakSuffix': 'kun ketma-ket',
        'learned.empty': "Hozircha yodlangan so'zlar yo'q. Darslarni boshlang yoki kartochkalarda «✓ Bilaman» tugmasini bosing!"
    },
    'uz-cyrl': {
        'nav.home': 'Бош саҳифа', 'nav.practice': 'Машқ', 'nav.canvas': 'Ёзиш', 'nav.profile': 'Профил',
        'hero.kicker': '汉语 · Хитой тилини ўрганинг',
        'hero.title': 'Ҳар бир иероглиф — янги дунёга очиладиган кичик эшик.',
        'hero.subtitle': 'HSK сўз бойлигини босқичма-босқич ўрганинг — ўқинг, тингланг, ёзинг ва хотирада мустаҳкамланг.',
        'hero.quote': '« 千里之行，始于足下 » — минг чақиримлик йўл биринчи қадамдан бошланади.',
        'profile.kicker': 'Шахсий кабинет', 'profile.title': 'Менинг профилим', 'profile.edit': 'Таҳрирлаш',
        'profile.weekly': 'Ҳафталик фаоллик', 'profile.progress': 'HSK 1–5 натижалар', 'profile.tapHint': 'Босиб дарсга ўтинг →',
        'profile.learnedWords': 'Ёдланган сўзларим', 'profile.quests': 'Кунлик вазифалар', 'profile.achievements': 'Ютуқлар витринаси',
        'stat.streak': 'Кунлик стрик', 'stat.learned': 'Ёдланган', 'stat.xp': 'Жами XP',
        'home.selectLevel': 'HSK даражасини танланг', 'home.selectLevelSub': 'Бошлаш ёки давом эттириш учун даражани танланг',
        'hsk.1_label': 'HSK 1 · Бошланғич', 'hsk.1_words': '150 сўз', 'hsk.1_sub': 'Classic HSK ва New HSK 3.0 · 15 та дарс',
        'hsk.2_label': 'HSK 2 · Қуйи даража', 'hsk.3_label': 'HSK 3 · Ўрта даража', 'hsk.4_label': 'HSK 4 · Юқори ўрта', 'hsk.5_label': 'HSK 5 · Юқори даража',
        'hsk.lessons': 'New HSK 3.0 · 15 та дарс', 'hsk.start': 'Бошлаш →', 'hsk.continue': 'Давом этиш →',
        'dash.mistakesTitle': 'Хатолар устида ишлаш', 'dash.mistakesSub': 'Хато қилинган сўзларни такрорлаш',
        'dash.mistakesCountSub': '{count} та хато сўзни такрорлаш',
        'dash.bookmarksTitle': 'Сақланган сўзлар', 'dash.bookmarksSub': 'Севимли сўзлар тўплами',
        'dash.bookmarksCountSub': '{count} та сақланган сўзни машқ қилиш',
        'dash.enterLesson': 'Кириш →', 'dash.backToLevels': '← Даражалар',
        'dash.continueTitle': 'HSK {hsk} · {lesson}-дарсдан давом этиш',
        'dash.continueSub': '{track} · {done} / {total} дарс тугалланган',
        'lesson.backToLessons': '← Дарслар', 'lesson.aiAskBtn': '🤖 AI Таҳлил', 'lesson.continue': 'Давом этиш',
        'lesson.tabLearning': 'Ўрганиш', 'lesson.tabFlashcard': 'Карточкалар', 'lesson.tabQuiz': 'Тест', 'lesson.tabWriting': 'Ёзиш',
        'lesson.trackClassic': 'Classic HSK 1 · 15 та дарс', 'lesson.trackNew': 'New HSK 3.0 · 15 та дарс',
        'lesson.searchPlaceholder': 'Ўзбекча, Пиньин ёки Ханзи бўйича қидириш...',
        'lesson.legendCompleted': '✓ 已完成 · Тугалланган', 'lesson.legendCurrent': '● 进行中 · Жорий дарс', 'lesson.legendLocked': '🔒 未解锁 · Ёпиқ',
        'lesson.word': 'Дарс', 'lesson.wordsUnit': 'сўз',
        'lesson.kickerNew': 'New HSK 3.0 янги китоб дарслари', 'lesson.kickerClassic': 'Classic HSK 1 йўналиши',
        'lesson.progressText': '{total} тадан {done} та дарс тугалланди',
        'learning.vocabTitle': 'Дарс сўзлари', 'learning.examplesTitle': 'Мисол гаплар',
        'learning.grammarTitle': 'Грамматика изоҳи', 'learning.builderTitle': '🧩 Гап тузиш машқи',
        'learning.nextStageBtn': '2-босқичга ўтиш: Карточкалар →',
        'complete.sub': 'Барча босқичларни муваффақиятли тугатдингиз!',
        'complete.rewardLbl': 'Мукофот', 'complete.wordsLbl': 'Ўрганилган сўзлар', 'complete.scoreLbl': 'Натижа',
        'complete.backBtn': '← Дарслар харитасига қайтиш',
        'step.learn': 'Ўрганиш', 'step.cards': 'Карточка', 'step.quiz': 'Тест', 'step.write': 'Ёзиш', 'step.done': 'Якун',
        'flow.statusComplete': '🎉 5/5 · Дарс якунланди! Кейинги дарс очилди.',
        'flow.statusLearning': '1/5 · Сўзлар ва мисоллар билан танишинг ({count} та сўз)',
        'flow.statusFlashcards': '2/5 · Карточка {current} / {total}',
        'flow.statusQuiz': '3/5 · Тест: {current} / {total} савол',
        'flow.statusWriting': '4/5 · Ёзиш: {done} / {total} сўз',
        'card.tapHint': 'Айлантириш учун босинг', 'card.audio': 'Овоз', 'card.speak': 'Талаффуз', 'card.draw': 'Чизиш',
        'card.next': 'Кейинги', 'card.prev': '← Олдинги', 'card.shuffle': '🔀 Аралаштириш',
        'card.bookmark': '⭐ Сақлаш', 'card.bookmarked': '⭐ Сақланган',
        'card.learned': '✓ Биламан', 'card.learnedDone': '✓ Ёдланди',
        'card.learnedLabel': 'Ёдланган:', 'card.wordProgress': '{current} / {total} сўз',
        'quiz.scoreLabel': 'Балл:', 'quiz.typeMeaning': 'Hanzi → Маъно', 'quiz.typePinyin': 'Маъно → Pinyin',
        'quiz.typeHanzi': 'Pinyin → Hanzi', 'quiz.typeAudio': '🎧 Эшитиб топиш',
        'quiz.promptMeaning': 'Бу сўзнинг маъноси нима?',
        'quiz.promptPinyin': 'Тўғри Pinyin талаффузини танланг:',
        'quiz.promptHanzi': 'Тўғри Hanzi иероглифини танланг:',
        'quiz.promptAudio': 'Сўзни эшитинг ва тўғри маънони танланг:',
        'quiz.replayAudio': 'Қайта эшитиш',
        'quiz.nextQuestion': 'Кейинги савол', 'quiz.questionLabel': 'Савол:',
        'canvas.backToLessons': '← Дарсларга қайтиш', 'canvas.hskLevel': 'HSK даражаси', 'canvas.lesson': 'Дарс',
        'canvas.version': 'Версия', 'canvas.writingMode': 'Ёзиш режими',
        'canvas.trace': 'Чизиш', 'canvas.write': 'Ёзиш', 'canvas.test': 'Синов',
        'canvas.category': 'Чизиш машқи', 'canvas.wordLabel': 'Сўз:', 'canvas.traceHint': 'Чизиқлар бўйлаб иероглифни ёзинг.',
        'canvas.check': 'Текшириш', 'canvas.nextWord': 'Кейинги сўз →', 'canvas.points': 'Балл:',
        'modal.correctTitle': 'Тўғри! 🎉', 'modal.correctMsg': 'Баракалла! Иероглифни тўғри ёздингиз.',
        'modal.xpEarned': '+10 XP олинди!', 'modal.editProfileTitle': 'Профилни таҳрирлаш',
        'modal.cancel': 'Бекор қилиш', 'modal.save': 'Сақлаш', 'modal.leaderboardTitle': '🏆 Пешқадамлар', 'modal.close': 'Ёпиш',
        'practice.title': 'Амалиёт маркази', 'practice.kicker': 'Тонлар, жонли мулоқот, сўзлар ва викториналар орқали хитой тилингизни чархланг',
        'practice.g1': 'Фонетика ва тонлар', 'practice.g2': 'Хитойда жонли ҳаёт ва мулоқот', 'practice.g3': 'Сўз бойлиги ва хотира машқи',
        'practice.tile.pinyin.title': 'Интерактив Пиньин Жадвали', 'practice.tile.pinyin.badge': '23 Ундош + 24 Унли + Овоз',
        'practice.tile.pinyin.desc': 'Барча 声母 ва 韵母 товушлари, тўлиқ комбинациялар матрицаси ва муҳим ўқиш қоидалари',
        'practice.tile.tone.title': 'Тонлар Лабораторияси', 'practice.tile.tone.badge': '4 Тон + Sandhi',
        'practice.tile.tone.desc': '1-4 тонлар графиги, ўхшаш сўзлар (mā/má/mǎ/mà) ва эшитиб топиш викторинаси',
        'practice.tile.pitch.title': 'Талаффуз ва Pitch Машқи', 'practice.tile.pitch.badge': 'Овозли текшириш',
        'practice.tile.pitch.desc': 'Микрофонга айтиб, овоз контурингиз тўғри тушаётганини текширинг',
        'practice.tile.survival.title': 'Хитойда Кунлик Мулоқот', 'practice.tile.survival.badge': 'Жонли иборалар',
        'practice.tile.survival.desc': 'Дарсда (教室), ошхонада (食堂), WeChat тўлов (微信), метро ва курьер (外卖) гаплари',
        'practice.tile.ai.title': 'AI Laoshi (Ли Устоз)', 'practice.tile.ai.badge': 'SuperChinese услубида',
        'practice.tile.ai.desc': 'Исталган саволни беринг, тон таҳлили ёки реал диалог машқ қилинг',
        'practice.tile.radicals.title': 'Иероглиф Калитлари (Радикаллар)',
        'practice.tile.radicals.badge': '30 Калит + Анатомия + Тест',
        'practice.tile.radicals.desc': 'Иероглифларнинг мантиқий илдизлари (氵сув, 扌қўл, 口оғиз, 亻одам), ҳарф тузилиши формулалари ва викторина',
        'radicals.backBtn': '← Машқ', 'radicals.title': 'Иероглиф Калитлари (Радикаллар)',
        'radicals.kicker': 'Ҳар бир мураккаб иероглиф оддий мантиқий калитлардан (部首) ташкил топган — уларни тушунсангиз, сўзларни 5 баробар тез эслаб қоласиз!',
        'radicals.tabList': '30 Калит', 'radicals.tabBuilder': 'Ҳарф формуласи', 'radicals.tabQuiz': 'Викторина',
        'radicals.searchPh': 'Калит, пиньин ёки маъно бўйича қидиринг (масалан: сув, одам,口)...',
        'radicals.catAll': 'Барчаси (30)', 'radicals.catHuman': '👤 Инсон', 'radicals.catNature': '🌿 Табиат',
        'radicals.catObjects': '🏠 Уй ва буюм', 'radicals.catAction': '🏃 Ҳаракат',
        'radicals.builderNoteTitle': '会意字 ва 形声字 — Иероглифлар қандай ясалади?',
        'radicals.builderNoteDesc': 'Икки ёки учта оддий белги қўшилиб янги маъно ҳосил қилади. Карточкани босиб сўз талаффузини эшитинг!',
        'practice.tile.cards.title': 'Интерактив Карточкалар Тренажёри',
        'practice.tile.cards.desc': '3D айланувчи карточкалар, аудио талаффуз ва ўз-ўзини баҳолаш (Биламан / Қайтариш)',
        'practice.tile.mistakes.title': 'Хатолар Устида Ишлаш',
        'practice.tile.mistakes.desc': 'Дарс ва тестларда хато бўлган сўзларни қайта мустаҳкамлаш',
        'practice.tile.bookmarks.title': 'Сақланган Сўзлар',
        'practice.tile.bookmarks.desc': 'Ўзингиз юлдузча қўйган махсус сўзлар тўпламини такрорлаш',
        'settings.title': 'Илова созламалари', 'settings.short': 'Созламалар', 'settings.subtitle': 'Иловани ўзингизга мосланг',
        'settings.group.language': '🌐 Илова тили', 'settings.languageNote': 'Менюлар ва тугмалар танланган тилда кўрсатилади.',
        'settings.group.appearance': '🎨 Кўриниш', 'settings.theme': 'Тунги режим',
        'settings.themeLight': '☀️ Кундузги ёруғ мавзу', 'settings.themeDark': '🌙 Тунги қоронғу мавзу',
        'settings.pinyin': 'Пиньин кўрсатиш', 'settings.pinyinHint': 'Яширилса, босганда очилади — ўзингизни синанг',
        'settings.show': 'Доим', 'settings.hide': 'Яшириш', 'settings.hanziSize': 'Иероглиф ўлчами',
        'settings.group.sound': '🔊 Овоз', 'settings.speechRate': 'Талаффуз тезлиги', 'settings.speechRateHint': 'Хитойча овоз тезлиги',
        'settings.slow': 'Секин', 'settings.normal': 'Нормал', 'settings.fast': 'Тез',
        'settings.sfx': 'Овоз эффектлари', 'settings.sfxHint': 'Тўғри жавоб ва ютуқ овозлари',
        'settings.group.study': '🎯 Ўқиш', 'settings.dailyGoal': 'Кунлик мақсад', 'settings.dailyGoalHint': 'Ҳар куни нечта сўз ўрганасиз',
        'settings.reminder': 'Кунлик эслатма', 'settings.reminderHint': 'Ўқиш вақти келганда эслатади',
        'settings.reminderOn': '🔔 Ҳар куни {time} да эслатилади',
        'settings.reminderDenied': 'Билдиришномага рухсат берилмади. Браузер созламаларидан ёқинг.',
        'settings.reminderUnsupported': 'Бу браузер билдиришномаларни қўлламайди.',
        'settings.group.data': '💾 Маълумотлар', 'settings.export': 'Захира нусха олиш', 'settings.import': 'Захирадан тиклаш',
        'settings.backupNote': 'Телефон алмаштирсангиз ҳам прогрессингиз йўқолмайди.',
        'settings.reset': 'Прогрессни нолга тушириш',
        'settings.resetConfirm': 'Ростдан ҳам барча прогресс (сўзлар, XP, стрик) ўчирилсинми? Буни қайтариб бўлмайди.',
        'settings.resetDone': 'Прогресс тозаланди 🧹', 'settings.importDone': 'Прогресс тикланди ✅', 'settings.importError': 'Файл нотўғри ёки бузилган ❌',
        'settings.exportDone': 'Захира файли юклаб олинди 📤',
        'settings.group.app': '📱 Илова', 'settings.installTitle': 'Easy Chinese иловаси', 'settings.installHint': 'Телефонга 1 босишда ўрнатиш',
        'settings.install': 'Ўрнатиш', 'settings.about': 'Илова ҳақида', 'settings.saved': 'Сақланди ✅',
        'reminder.title': 'Easy Chinese 🀄', 'reminder.body': 'Бугунги хитой тили машқи вақти келди! 加油! 🔥',
        'profile.motto': 'ҳар куни бир қадам', 'profile.dailyPrefix': 'Кунлик:', 'profile.googleSignIn': 'Google орқали', 'profile.signOut': 'Чиқиш',
        'quest.tracesTitle': '3 та иероглиф ёзиш', 'quest.doneSuffix': 'бажарилди', 'quest.xpTitle': 'Бугун 50 XP тўплаш',
        'ach.firstWord.name': 'Илк Қадам', 'ach.firstWord.desc': '1-сўзни ёдлаш',
        'ach.firstLesson.name': '1-Дарс Ғолиби', 'ach.firstLesson.desc': '1 та дарсни тўлиқ тугатиш',
        'ach.streak3.name': '3 Кунлик Олов', 'ach.streak3.desc': '3 кун кетма-кет кириш',
        'ach.streak7.name': 'Ҳафта Қаҳрамони', 'ach.streak7.desc': '7 кунлик стрик',
        'ach.words50.name': 'Китобхон', 'ach.words50.desc': '50 та сўз ёдлаш',
        'ach.words100.name': 'Олим (Scholar)', 'ach.words100.desc': '100 та сўз ёдлаш',
        'ach.xp100.name': '100 XP Юлдузи', 'ach.xp100.desc': '100 XP тўплаш',
        'ach.calligrapher.name': 'Хаттот Устаси', 'ach.calligrapher.desc': '3 та Hanzi ёзиш', 'ach.unlocked': '✓ Очилди',
        'pfc.flipHint': 'Таржимани кўриш учун картани босинг 👆', 'pfc.flipBack': '🔄 Орқага ўгириш',
        'pfc.again': 'Қайтариш', 'pfc.flip': 'Ўгириш', 'pfc.good': 'Ёдланди (+5 XP)',
        'tone.kicker': 'Super Chinese услубида: жонли 4 та тон талаффузи, эшитиб топиш викторинаси, таққослаш жуфтликлари ва Tone Sandhi',
        'tone.tabChart': '4 Тон', 'tone.tabPairs': 'Жуфтлик', 'tone.seqBadge': '🔥 Super Chinese Усули',
        'tone.seqTitle': '1-2-3-4 Тонларни кетма-кет тинглаш', 'tone.seqDesc': 'mā (1) → má (2) → mǎ (3) → mà (4) — оҳанглар фарқини бевосита ҳис қилинг',
        'tone.seqPlay': 'Кетма-кет солиштириш', 'tone.earHint': 'Қулоқ солинг: бу нечанчи тон ва қайси сўз?',
        'tone.compareBoth': '▶️ Иккаласини солиштириш', 'tone.pairsTitle': 'Тон ўзгарса — маъно буткул ўзгаради!',
        'tone.pairsKicker': 'Хитойда энг кўп адаштириладиган ҳаётий сўзлар: «买 (сотиб олмоқ) vs 卖 (сотмоқ)», «四 (4) vs 十 (10)»',
        'pinyin.tabInitials': 'Ундошлар', 'pinyin.tabFinals': 'Унлилар', 'pinyin.tabMatrix': 'Матрица', 'pinyin.tabRules': 'Қоидалар',
        'pinyin.initialsTitle': '声母 (Shēngmǔ) — Ундош товушлар (23 та):',
        'pinyin.initialsDesc': 'Хитой тилидаги бўғин бошловчи ундошлар. Карточкани босиб стандарт талаффузини тингланг.',
        'pinyin.finalsTitle': '韵母 (Yùnmǔ) — Унли товушлар (24 та):',
        'pinyin.finalsDesc': '6 оддий, 9 мураккаб ва 9 бурун унлиси. 1-4 тон тугмачаларини босиб оҳанглар билан тингланг.',
        'pinyin.searchPh': 'Бўғин қидиринг (масалан: ma, ni, hao, zhong, xue)...', 'pinyin.all': 'Барчаси', 'pinyin.selectedSyllable': 'Танланган бўғин',
        'survival.tabClass': 'Дарсда', 'survival.tabCanteen': 'Ошхона', 'survival.tabDelivery': 'Курьер', 'survival.tabMetro': 'Метро',
        'ai.tabCoach': '🔍 Тон ва Сўз', 'ai.inputPh': 'Савол беринг ёки таржима қилиш учун гап ёзинг...', 'ai.send': 'Юбориш',
        'ai.modalSub': 'Дарсдан чиқмасдан ўрганиш', 'ai.backToLesson': '✕ Дарсга қайтиш', 'ai.openFullChat': '💬 AI Laoshi суҳбати →',
        'weekly.days': 'Ду,Се,Чо,Па,Жу,Ша,Як', 'weekly.streakSuffix': 'кун кетма-кет',
        'learned.empty': 'Ҳозирча ёдланган сўзлар йўқ. Дарсларни бошланг ёки карточкаларда «✓ Биламан» тугмасини босинг!'
    },
    ru: {
        'nav.home': 'Главная', 'nav.practice': 'Практика', 'nav.canvas': 'Письмо', 'nav.profile': 'Профиль',
        'hero.kicker': '汉语 · Учите китайский',
        'hero.title': 'Каждый иероглиф — маленькая дверь в новый мир.',
        'hero.subtitle': 'Изучайте лексику HSK шаг за шагом — читайте, слушайте, пишите и закрепляйте в памяти.',
        'hero.quote': '« 千里之行，始于足下 » — путь в тысячу ли начинается с первого шага.',
        'profile.kicker': 'Личный кабинет', 'profile.title': 'Мой профиль', 'profile.edit': 'Изменить',
        'profile.weekly': 'Активность за неделю', 'profile.progress': 'Прогресс HSK 1–5', 'profile.tapHint': 'Нажмите, чтобы перейти →',
        'profile.learnedWords': 'Выученные слова', 'profile.quests': 'Ежедневные задания', 'profile.achievements': 'Достижения',
        'stat.streak': 'Дней подряд', 'stat.learned': 'Выучено', 'stat.xp': 'Всего XP',
        'home.selectLevel': 'Выберите уровень HSK', 'home.selectLevelSub': 'Выберите уровень, чтобы начать или продолжить',
        'hsk.1_label': 'HSK 1 · Начальный', 'hsk.1_words': '150 слов', 'hsk.1_sub': 'Classic HSK и New HSK 3.0 · 15 уроков',
        'hsk.2_label': 'HSK 2 · Базовый', 'hsk.3_label': 'HSK 3 · Средний', 'hsk.4_label': 'HSK 4 · Выше среднего', 'hsk.5_label': 'HSK 5 · Продвинутый',
        'hsk.lessons': 'New HSK 3.0 · 15 уроков', 'hsk.start': 'Начать →', 'hsk.continue': 'Продолжить →',
        'dash.mistakesTitle': 'Работа над ошибками', 'dash.mistakesSub': 'Повторение сложных слов',
        'dash.mistakesCountSub': 'Повторить слова с ошибками: {count}',
        'dash.bookmarksTitle': 'Избранные слова', 'dash.bookmarksSub': 'Сохранённый список слов',
        'dash.bookmarksCountSub': 'Сохранённых слов для практики: {count}',
        'dash.enterLesson': 'Открыть →', 'dash.backToLevels': '← Уровни',
        'dash.continueTitle': 'HSK {hsk} · Продолжить с урока {lesson}',
        'dash.continueSub': '{track} · Завершено {done} из {total} уроков',
        'lesson.backToLessons': '← Уроки', 'lesson.aiAskBtn': '🤖 Разбор с ИИ', 'lesson.continue': 'Продолжить',
        'lesson.tabLearning': 'Теория', 'lesson.tabFlashcard': 'Карточки', 'lesson.tabQuiz': 'Тест', 'lesson.tabWriting': 'Письмо',
        'lesson.trackClassic': 'Classic HSK 1 · 15 уроков', 'lesson.trackNew': 'New HSK 3.0 · 15 уроков',
        'lesson.searchPlaceholder': 'Поиск по переводу, пиньиню или иероглифу...',
        'lesson.legendCompleted': '✓ 已完成 · Пройдено', 'lesson.legendCurrent': '● 进行中 · Текущий', 'lesson.legendLocked': '🔒 未解锁 · Закрыто',
        'lesson.word': 'Урок', 'lesson.wordsUnit': 'слов',
        'lesson.kickerNew': 'Курс New HSK 3.0', 'lesson.kickerClassic': 'Курс Classic HSK 1',
        'lesson.progressText': 'Пройдено {done} из {total} уроков',
        'learning.vocabTitle': 'Слова урока', 'learning.examplesTitle': 'Примеры предложений',
        'learning.grammarTitle': 'Грамматика', 'learning.builderTitle': '🧩 Конструктор фраз',
        'learning.nextStageBtn': 'Перейти к этапу 2: Карточки →',
        'complete.sub': 'Вы успешно прошли все этапы урока!',
        'complete.rewardLbl': 'Награда', 'complete.wordsLbl': 'Изучено слов', 'complete.scoreLbl': 'Результат',
        'complete.backBtn': '← Вернуться к карте уроков',
        'step.learn': 'Учить', 'step.cards': 'Карточки', 'step.quiz': 'Тест', 'step.write': 'Письмо', 'step.done': 'Готово',
        'flow.statusComplete': '🎉 5/5 · Урок завершён! Следующий урок открыт.',
        'flow.statusLearning': '1/5 · Изучите слова и примеры ({count} слов)',
        'flow.statusFlashcards': '2/5 · Карточка {current} / {total}',
        'flow.statusQuiz': '3/5 · Тест: вопрос {current} / {total}',
        'flow.statusWriting': '4/5 · Письмо: {done} / {total} слов',
        'card.tapHint': 'Нажмите, чтобы перевернуть', 'card.audio': 'Озвучка', 'card.speak': 'Произношение', 'card.draw': 'Черты',
        'card.next': 'Далее', 'card.prev': '← Назад', 'card.shuffle': '🔀 Перемешать',
        'card.bookmark': '⭐ Сохранить', 'card.bookmarked': '⭐ В избранном',
        'card.learned': '✓ Знаю', 'card.learnedDone': '✓ Выучено',
        'card.learnedLabel': 'Выучено:', 'card.wordProgress': 'Слово {current} из {total}',
        'quiz.scoreLabel': 'Счёт:', 'quiz.typeMeaning': 'Hanzi → Значение', 'quiz.typePinyin': 'Значение → Pinyin',
        'quiz.typeHanzi': 'Pinyin → Hanzi', 'quiz.typeAudio': '🎧 На слух',
        'quiz.promptMeaning': 'Что означает это слово?',
        'quiz.promptPinyin': 'Выберите правильный пиньинь:',
        'quiz.promptHanzi': 'Выберите правильный иероглиф:',
        'quiz.promptAudio': 'Прослушайте и выберите верный перевод:',
        'quiz.replayAudio': 'Прослушать снова',
        'quiz.nextQuestion': 'Следующий вопрос', 'quiz.questionLabel': 'Вопрос:',
        'canvas.backToLessons': '← К урокам', 'canvas.hskLevel': 'Уровень HSK', 'canvas.lesson': 'Урок',
        'canvas.version': 'Версия', 'canvas.writingMode': 'Режим письма',
        'canvas.trace': 'Обводка', 'canvas.write': 'Письмо', 'canvas.test': 'Экзамен',
        'canvas.category': 'Практика письма', 'canvas.wordLabel': 'Слово:', 'canvas.traceHint': 'Обведите иероглиф по направляющим точкам.',
        'canvas.check': 'Проверить', 'canvas.nextWord': 'Следующее слово →', 'canvas.points': 'Очки:',
        'modal.correctTitle': 'Верно! 🎉', 'modal.correctMsg': 'Отлично! Вы правильно написали иероглиф.',
        'modal.xpEarned': '+10 XP получено!', 'modal.editProfileTitle': 'Редактировать профиль',
        'modal.cancel': 'Отмена', 'modal.save': 'Сохранить', 'modal.leaderboardTitle': '🏆 Таблица лидеров', 'modal.close': 'Закрыть',
        'practice.title': 'Центр практики', 'practice.kicker': 'Тренируйте китайский: тоны, живое общение, слова и викторины',
        'practice.g1': 'Фонетика и тоны', 'practice.g2': 'Жизнь и общение в Китае', 'practice.g3': 'Словарный запас и память',
        'practice.tile.pinyin.title': 'Интерактивная таблица пиньиня', 'practice.tile.pinyin.badge': '23 инициали + 24 финали + Звук',
        'practice.tile.pinyin.desc': 'Все звуки 声母 и 韵母, полная матрица слогов и правила чтения',
        'practice.tile.tone.title': 'Лаборатория тонов', 'practice.tile.tone.badge': '4 тона + Сандхи',
        'practice.tile.tone.desc': 'Графики 1–4 тонов, минимальные пары (mā/má/mǎ/mà) и аудио-тренажёр',
        'practice.tile.pitch.title': 'Произношение и Pitch', 'practice.tile.pitch.badge': 'Голосовая проверка',
        'practice.tile.pitch.desc': 'Произнесите в микрофон и проверьте точность тонального контура',
        'practice.tile.survival.title': 'Разговорник для жизни в Китае', 'practice.tile.survival.badge': 'Живые фразы',
        'practice.tile.survival.desc': 'Фразы для учёбы (教室), столовой (食堂), оплаты WeChat (微信), метро и доставки (外卖)',
        'practice.tile.ai.title': 'ИИ Лаоши (Учитель Ли)', 'practice.tile.ai.badge': 'В стиле SuperChinese',
        'practice.tile.ai.desc': 'Задавайте вопросы, разбирайте тоны и тренируйте живые диалоги',
        'practice.tile.radicals.title': 'Ключи иероглифов (Радикалы)',
        'practice.tile.radicals.badge': '30 ключей + Формулы + Тест',
        'practice.tile.radicals.desc': 'Логические корни иероглифов (氵вода, 扌рука, 口рот, 亻человек), формулы построения и викторина',
        'radicals.backBtn': '← Практика', 'radicals.title': 'Ключи иероглифов (Радикалы)',
        'radicals.kicker': 'Каждый сложный иероглиф состоит из простых смысловых ключей (部首) — понимая их, вы запомните слова в 5 раз быстрее!',
        'radicals.tabList': '30 ключей', 'radicals.tabBuilder': 'Анатомия знаков', 'radicals.tabQuiz': 'Викторина',
        'radicals.searchPh': 'Поиск по ключу, пиньиню или значению...',
        'radicals.catAll': 'Все (30)', 'radicals.catHuman': '👤 Человек', 'radicals.catNature': '🌿 Природа',
        'radicals.catObjects': '🏠 Дом и предметы', 'radicals.catAction': '🏃 Действие',
        'radicals.builderNoteTitle': '会意字 и 形声字 — Как строятся иероглифы?',
        'radicals.builderNoteDesc': 'Два или три простых знака соединяются в новый смысл. Нажмите на карточку, чтобы прослушать произношение!',
        'practice.tile.cards.title': 'Тренажёр карточек (Flashcards)',
        'practice.tile.cards.desc': '3D-карточки с озвучкой и интервальным повторением (Знаю / Повторить)',
        'practice.tile.mistakes.title': 'Работа над ошибками',
        'practice.tile.mistakes.desc': 'Повторение слов, в которых были допущены ошибки в тестах',
        'practice.tile.bookmarks.title': 'Избранные слова',
        'practice.tile.bookmarks.desc': 'Повторение вашей личной подборки сохранённых слов',
        'settings.title': 'Настройки приложения', 'settings.short': 'Настройки', 'settings.subtitle': 'Настройте приложение под себя',
        'settings.group.language': '🌐 Язык приложения', 'settings.languageNote': 'Меню и кнопки отображаются на выбранном языке.',
        'settings.group.appearance': '🎨 Внешний вид', 'settings.theme': 'Тёмная тема',
        'settings.themeLight': '☀️ Светлая тема включена', 'settings.themeDark': '🌙 Тёмная тема включена',
        'settings.pinyin': 'Показ пиньиня', 'settings.pinyinHint': 'Если скрыт — откроется по нажатию. Проверьте себя',
        'settings.show': 'Всегда', 'settings.hide': 'Скрыть', 'settings.hanziSize': 'Размер иероглифов',
        'settings.group.sound': '🔊 Звук', 'settings.speechRate': 'Скорость произношения', 'settings.speechRateHint': 'Скорость китайской озвучки',
        'settings.slow': 'Медленно', 'settings.normal': 'Обычно', 'settings.fast': 'Быстро',
        'settings.sfx': 'Звуковые эффекты', 'settings.sfxHint': 'Звуки верных ответов и наград',
        'settings.group.study': '🎯 Учёба', 'settings.dailyGoal': 'Дневная цель', 'settings.dailyGoalHint': 'Сколько слов учить в день',
        'settings.reminder': 'Ежедневное напоминание', 'settings.reminderHint': 'Напомнит, когда пора заниматься',
        'settings.reminderOn': '🔔 Напоминание каждый день в {time}',
        'settings.reminderDenied': 'Уведомления запрещены. Разрешите их в настройках браузера.',
        'settings.reminderUnsupported': 'Этот браузер не поддерживает уведомления.',
        'settings.group.data': '💾 Данные', 'settings.export': 'Создать резервную копию', 'settings.import': 'Восстановить из копии',
        'settings.backupNote': 'Прогресс сохранится даже при смене телефона.',
        'settings.reset': 'Сбросить прогресс',
        'settings.resetConfirm': 'Удалить весь прогресс (слова, XP, серию)? Это действие нельзя отменить.',
        'settings.resetDone': 'Прогресс сброшен 🧹', 'settings.importDone': 'Прогресс восстановлен ✅', 'settings.importError': 'Файл неверный или повреждён ❌',
        'settings.exportDone': 'Резервная копия скачана 📤',
        'settings.group.app': '📱 Приложение', 'settings.installTitle': 'Приложение Easy Chinese', 'settings.installHint': 'Установить на телефон в 1 нажатие',
        'settings.install': 'Установить', 'settings.about': 'О приложении', 'settings.saved': 'Сохранено ✅',
        'reminder.title': 'Easy Chinese 🀄', 'reminder.body': 'Пора позаниматься китайским! 加油! 🔥',
        'profile.motto': 'шаг за шагом каждый день', 'profile.dailyPrefix': 'Цель:', 'profile.googleSignIn': 'Через Google', 'profile.signOut': 'Выйти',
        'quest.tracesTitle': 'Написать 3 иероглифа', 'quest.doneSuffix': 'выполнено', 'quest.xpTitle': 'Набрать 50 XP сегодня',
        'ach.firstWord.name': 'Первый шаг', 'ach.firstWord.desc': 'Выучить 1-е слово',
        'ach.firstLesson.name': 'Первый урок', 'ach.firstLesson.desc': 'Полностью пройти 1 урок',
        'ach.streak3.name': '3 дня подряд', 'ach.streak3.desc': 'Заниматься 3 дня подряд',
        'ach.streak7.name': 'Герой недели', 'ach.streak7.desc': 'Серия 7 дней',
        'ach.words50.name': 'Книголюб', 'ach.words50.desc': 'Выучить 50 слов',
        'ach.words100.name': 'Учёный', 'ach.words100.desc': 'Выучить 100 слов',
        'ach.xp100.name': 'Звезда 100 XP', 'ach.xp100.desc': 'Набрать 100 XP',
        'ach.calligrapher.name': 'Мастер каллиграфии', 'ach.calligrapher.desc': 'Написать 3 иероглифа', 'ach.unlocked': '✓ Открыто',
        'pfc.flipHint': 'Нажмите на карточку, чтобы увидеть перевод 👆', 'pfc.flipBack': '🔄 Перевернуть обратно',
        'pfc.again': 'Повторить', 'pfc.flip': 'Перевернуть', 'pfc.good': 'Выучено (+5 XP)',
        'tone.kicker': 'В стиле Super Chinese: живое произношение 4 тонов, аудио-викторина, минимальные пары и правила сандхи',
        'tone.tabChart': '4 тона', 'tone.tabPairs': 'Пары', 'tone.seqBadge': '🔥 Метод Super Chinese',
        'tone.seqTitle': 'Слушать 1-2-3-4 тоны подряд', 'tone.seqDesc': 'mā (1) → má (2) → mǎ (3) → mà (4) — почувствуйте разницу интонаций',
        'tone.seqPlay': 'Сравнить подряд', 'tone.earHint': 'Послушайте: какой это тон и какое слово?',
        'tone.compareBoth': '▶️ Сравнить оба', 'tone.pairsTitle': 'Меняется тон — полностью меняется смысл!',
        'tone.pairsKicker': 'Самые частые пары слов: «买 (купить) vs 卖 (продать)», «四 (4) vs 十 (10)»',
        'pinyin.tabInitials': 'Инициали', 'pinyin.tabFinals': 'Финали', 'pinyin.tabMatrix': 'Матрица', 'pinyin.tabRules': 'Правила',
        'pitch.catSingle': '4 Основных Тона', 'pitch.catTones': 'Пары тонов', 'pitch.catHsk': 'Слова HSK', 'pitch.catPhrases': 'Живые фразы',
        'pinyin.initialsTitle': '声母 (Shēngmǔ) — Согласные (23):',
        'pinyin.initialsDesc': 'Начальные согласные китайского слога. Нажмите на карточку, чтобы прослушать произношение.',
        'pinyin.finalsTitle': '韵母 (Yùnmǔ) — Финали / гласные (24):',
        'pinyin.finalsDesc': '6 простых, 9 сложных и 9 носовых финалей. Нажимайте на 1–4 тоны для прослушивания.',
        'pinyin.searchPh': 'Поиск слога (например: ma, ni, hao, zhong, xue)...', 'pinyin.all': 'Все', 'pinyin.selectedSyllable': 'Выбранный слог',
        'survival.tabClass': 'На уроке', 'survival.tabCanteen': 'Столовая', 'survival.tabDelivery': 'Курьер', 'survival.tabMetro': 'Метро',
        'ai.tabCoach': '🔍 Тоны и слова', 'ai.inputPh': 'Задайте вопрос или напишите фразу для перевода...', 'ai.send': 'Отправить',
        'ai.modalSub': 'Разбор слова без выхода из урока', 'ai.backToLesson': '✕ Вернуться к уроку', 'ai.openFullChat': '💬 Чат с ИИ Лаоши →',
        'weekly.days': 'Пн,Вт,Ср,Чт,Пт,Сб,Вс', 'weekly.streakSuffix': 'дн. подряд',
        'learned.empty': 'Пока нет выученных слов. Начните уроки или нажимайте «✓ Знаю» на карточках!'
    },
    en: {
        'nav.home': 'Home', 'nav.practice': 'Practice', 'nav.canvas': 'Writing', 'nav.profile': 'Profile',
        'hero.kicker': '汉语 · Learn Chinese',
        'hero.title': 'Every character is a small door into a new world.',
        'hero.subtitle': 'Learn HSK vocabulary step by step — read, listen, write and remember with calm, focused practice.',
        'hero.quote': '« 千里之行，始于足下 » — a journey of a thousand miles begins with a single step.',
        'profile.kicker': 'Personal Center', 'profile.title': 'My Profile', 'profile.edit': 'Edit',
        'profile.weekly': 'Weekly Activity', 'profile.progress': 'HSK 1–5 Progress', 'profile.tapHint': 'Tap to open lessons →',
        'profile.learnedWords': 'My Learned Words', 'profile.quests': 'Daily Quests', 'profile.achievements': 'Achievements',
        'stat.streak': 'Day Streak', 'stat.learned': 'Learned', 'stat.xp': 'Total XP',
        'home.selectLevel': 'Select HSK Level', 'home.selectLevelSub': 'Choose a level to start or continue your practice',
        'hsk.1_label': 'HSK 1 · Foundations', 'hsk.1_words': '150 words', 'hsk.1_sub': 'Classic HSK & New HSK 3.0 · 15 lessons',
        'hsk.2_label': 'HSK 2 · Elementary', 'hsk.3_label': 'HSK 3 · Intermediate', 'hsk.4_label': 'HSK 4 · Upper-Inter', 'hsk.5_label': 'HSK 5 · Advanced',
        'hsk.lessons': 'New HSK 3.0 · 15 lessons', 'hsk.start': 'Start →', 'hsk.continue': 'Continue →',
        'dash.mistakesTitle': 'Mistake Review', 'dash.mistakesSub': 'Practice words you missed',
        'dash.mistakesCountSub': 'Review {count} missed words',
        'dash.bookmarksTitle': 'Saved Words', 'dash.bookmarksSub': 'Your bookmarked vocabulary',
        'dash.bookmarksCountSub': 'Practice {count} saved words',
        'dash.enterLesson': 'Open →', 'dash.backToLevels': '← Levels',
        'dash.continueTitle': 'HSK {hsk} · Continue Lesson {lesson}',
        'dash.continueSub': '{track} · {done} / {total} lessons completed',
        'lesson.backToLessons': '← Lessons', 'lesson.aiAskBtn': '🤖 Ask AI', 'lesson.continue': 'Continue',
        'lesson.tabLearning': 'Learning', 'lesson.tabFlashcard': 'Flashcards', 'lesson.tabQuiz': 'Quiz', 'lesson.tabWriting': 'Writing',
        'lesson.trackClassic': 'Classic HSK 1 · 15 lessons', 'lesson.trackNew': 'New HSK 3.0 · 15 lessons',
        'lesson.searchPlaceholder': 'Search by meaning, Pinyin, or Hanzi...',
        'lesson.legendCompleted': '✓ 已完成 · Completed', 'lesson.legendCurrent': '● 进行中 · Current', 'lesson.legendLocked': '🔒 未解锁 · Locked',
        'lesson.word': 'Lesson', 'lesson.wordsUnit': 'words',
        'lesson.kickerNew': 'New HSK 3.0 curriculum', 'lesson.kickerClassic': 'Classic HSK 1 path',
        'lesson.progressText': '{done} of {total} lessons complete',
        'learning.vocabTitle': 'Lesson Vocabulary', 'learning.examplesTitle': 'Example Sentences',
        'learning.grammarTitle': 'Grammar Note', 'learning.builderTitle': '🧩 Sentence Builder',
        'learning.nextStageBtn': 'Next Stage: Flashcards →',
        'complete.sub': 'You have successfully completed all stages of this lesson!',
        'complete.rewardLbl': 'Reward', 'complete.wordsLbl': 'Words Learned', 'complete.scoreLbl': 'Score',
        'complete.backBtn': '← Back to Lessons Map',
        'step.learn': 'Learn', 'step.cards': 'Cards', 'step.quiz': 'Quiz', 'step.write': 'Write', 'step.done': 'Done',
        'flow.statusComplete': '🎉 5/5 · Lesson complete! Next lesson unlocked.',
        'flow.statusLearning': '1/5 · Explore vocabulary & examples ({count} words)',
        'flow.statusFlashcards': '2/5 · Flashcard {current} / {total}',
        'flow.statusQuiz': '3/5 · Quiz: Question {current} / {total}',
        'flow.statusWriting': '4/5 · Writing: {done} / {total} words',
        'card.tapHint': 'Tap to flip', 'card.audio': 'Audio', 'card.speak': 'Speak', 'card.draw': 'Stroke',
        'card.next': 'Next', 'card.prev': '← Prev', 'card.shuffle': '🔀 Shuffle',
        'card.bookmark': '⭐ Save', 'card.bookmarked': '⭐ Saved',
        'card.learned': '✓ Know it', 'card.learnedDone': '✓ Learned',
        'card.learnedLabel': 'Learned:', 'card.wordProgress': 'Word {current} of {total}',
        'quiz.scoreLabel': 'Score:', 'quiz.typeMeaning': 'Hanzi → Meaning', 'quiz.typePinyin': 'Meaning → Pinyin',
        'quiz.typeHanzi': 'Pinyin → Hanzi', 'quiz.typeAudio': '🎧 Audio Quiz',
        'quiz.promptMeaning': 'What does this word mean?',
        'quiz.promptPinyin': 'Choose the correct Pinyin pronunciation:',
        'quiz.promptHanzi': 'Choose the correct Chinese character:',
        'quiz.promptAudio': 'Listen and choose the correct meaning:',
        'quiz.replayAudio': 'Replay Audio',
        'quiz.nextQuestion': 'Next Question', 'quiz.questionLabel': 'Question:',
        'canvas.backToLessons': '← Back to Lessons', 'canvas.hskLevel': 'HSK Level', 'canvas.lesson': 'Lesson',
        'canvas.version': 'Version', 'canvas.writingMode': 'Writing Mode',
        'canvas.trace': 'Trace', 'canvas.write': 'Write', 'canvas.test': 'Test',
        'canvas.category': 'Trace Practice', 'canvas.wordLabel': 'Word:', 'canvas.traceHint': 'Trace the character by following the guide dots.',
        'canvas.check': 'Check', 'canvas.nextWord': 'Next Word →', 'canvas.points': 'Points:',
        'modal.correctTitle': 'Correct! 🎉', 'modal.correctMsg': 'Great job! You completed the character.',
        'modal.xpEarned': '+10 XP earned!', 'modal.editProfileTitle': 'Edit Profile',
        'modal.cancel': 'Cancel', 'modal.save': 'Save Changes', 'modal.leaderboardTitle': '🏆 Leaderboard', 'modal.close': 'Close',
        'practice.title': 'Practice Center', 'practice.kicker': 'Sharpen your Chinese with tones, real-life dialogues, words and quizzes',
        'practice.g1': 'Phonetics & Tones', 'practice.g2': 'Real Life in China', 'practice.g3': 'Vocabulary & Memory',
        'practice.tile.pinyin.title': 'Interactive Pinyin Chart', 'practice.tile.pinyin.badge': '23 Initials + 24 Finals + Audio',
        'practice.tile.pinyin.desc': 'All 声母 and 韵母 sounds, full syllable matrix and key pronunciation rules',
        'practice.tile.tone.title': 'Tone Mastery Lab', 'practice.tile.tone.badge': '4 Tones + Sandhi',
        'practice.tile.tone.desc': '1–4 tone contours, minimal pairs (mā/má/mǎ/mà) and ear-training quiz',
        'practice.tile.pitch.title': 'Pronunciation & Pitch Check', 'practice.tile.pitch.badge': 'Voice Check',
        'practice.tile.pitch.desc': 'Speak into the microphone and check your live tone contour',
        'practice.tile.survival.title': 'Daily Chinese Survival Phrases', 'practice.tile.survival.badge': 'Real-life Phrases',
        'practice.tile.survival.desc': 'Essential phrases for classroom (教室), canteen (食堂), WeChat Pay (微信), metro & delivery (外卖)',
        'practice.tile.ai.title': 'AI Laoshi (Teacher Li)', 'practice.tile.ai.badge': 'SuperChinese Style',
        'practice.tile.ai.desc': 'Ask any question, analyze tones, or practice real-world dialogues',
        'practice.tile.radicals.title': 'Hanzi Radicals & Building Blocks',
        'practice.tile.radicals.badge': '30 Radicals + Formulas + Quiz',
        'practice.tile.radicals.desc': 'Logical roots of Chinese characters (氵water, 扌hand, 口mouth, 亻person), decomposition formulas & quiz',
        'radicals.backBtn': '← Practice', 'radicals.title': 'Hanzi Radicals (部首)',
        'radicals.kicker': 'Every Chinese character is built from logical building blocks (部首) — master them to remember words 5x faster!',
        'radicals.tabList': '30 Radicals', 'radicals.tabBuilder': 'Char Formulas', 'radicals.tabQuiz': 'Quiz',
        'radicals.searchPh': 'Search by radical, pinyin, or meaning...',
        'radicals.catAll': 'All (30)', 'radicals.catHuman': '👤 Human', 'radicals.catNature': '🌿 Nature',
        'radicals.catObjects': '🏠 Home & Objects', 'radicals.catAction': '🏃 Action',
        'radicals.builderNoteTitle': '会意字 & 形声字 — How Characters Are Built',
        'radicals.builderNoteDesc': 'Two or three simple components combine to create a new meaning. Tap any card to hear native pronunciation!',
        'practice.tile.cards.title': 'Interactive Flashcards Trainer',
        'practice.tile.cards.desc': '3D flip cards, native audio pronunciation, and self-grading (Know / Repeat)',
        'practice.tile.mistakes.title': 'Mistake Review',
        'practice.tile.mistakes.desc': 'Reinforce words you missed during lessons and quizzes',
        'practice.tile.bookmarks.title': 'Saved Words',
        'practice.tile.bookmarks.desc': 'Review your personal collection of starred vocabulary',
        'settings.title': 'App Settings', 'settings.short': 'Settings', 'settings.subtitle': 'Make the app yours',
        'settings.group.language': '🌐 App Language', 'settings.languageNote': 'Menus and buttons use the selected language.',
        'settings.group.appearance': '🎨 Appearance', 'settings.theme': 'Dark Mode',
        'settings.themeLight': '☀️ Light theme is on', 'settings.themeDark': '🌙 Dark theme is on',
        'settings.pinyin': 'Show Pinyin', 'settings.pinyinHint': 'When hidden, tap to reveal — test yourself',
        'settings.show': 'Always', 'settings.hide': 'Hide', 'settings.hanziSize': 'Character Size',
        'settings.group.sound': '🔊 Sound', 'settings.speechRate': 'Speech Speed', 'settings.speechRateHint': 'Chinese voice speed',
        'settings.slow': 'Slow', 'settings.normal': 'Normal', 'settings.fast': 'Fast',
        'settings.sfx': 'Sound Effects', 'settings.sfxHint': 'Correct answer & reward sounds',
        'settings.group.study': '🎯 Study', 'settings.dailyGoal': 'Daily Goal', 'settings.dailyGoalHint': 'Words to learn every day',
        'settings.reminder': 'Daily Reminder', 'settings.reminderHint': 'Reminds you when it is study time',
        'settings.reminderOn': '🔔 Reminder every day at {time}',
        'settings.reminderDenied': 'Notifications are blocked. Enable them in browser settings.',
        'settings.reminderUnsupported': 'This browser does not support notifications.',
        'settings.group.data': '💾 Data', 'settings.export': 'Back up progress', 'settings.import': 'Restore backup',
        'settings.backupNote': 'Keep your progress even when you switch phones.',
        'settings.reset': 'Reset progress',
        'settings.resetConfirm': 'Delete all progress (words, XP, streak)? This cannot be undone.',
        'settings.resetDone': 'Progress reset 🧹', 'settings.importDone': 'Progress restored ✅', 'settings.importError': 'Invalid or corrupted file ❌',
        'settings.exportDone': 'Backup file downloaded 📤',
        'settings.group.app': '📱 App', 'settings.installTitle': 'Easy Chinese App', 'settings.installHint': 'Install on your phone in 1 tap',
        'settings.install': 'Install', 'settings.about': 'About', 'settings.saved': 'Saved ✅',
        'reminder.title': 'Easy Chinese 🀄', 'reminder.body': 'Time for today\'s Chinese practice! 加油! 🔥',
        'profile.motto': 'one step every day', 'profile.dailyPrefix': 'Daily:', 'profile.googleSignIn': 'Continue with Google', 'profile.signOut': 'Sign out',
        'quest.tracesTitle': 'Write 3 characters', 'quest.doneSuffix': 'done', 'quest.xpTitle': 'Earn 50 XP today',
        'ach.firstWord.name': 'First Step', 'ach.firstWord.desc': 'Learn 1st word',
        'ach.firstLesson.name': 'Lesson Winner', 'ach.firstLesson.desc': 'Complete 1 full lesson',
        'ach.streak3.name': '3-Day Flame', 'ach.streak3.desc': '3-day study streak',
        'ach.streak7.name': 'Week Hero', 'ach.streak7.desc': '7-day study streak',
        'ach.words50.name': 'Bookworm', 'ach.words50.desc': 'Learn 50 words',
        'ach.words100.name': 'Scholar', 'ach.words100.desc': 'Learn 100 words',
        'ach.xp100.name': '100 XP Star', 'ach.xp100.desc': 'Earn 100 XP',
        'ach.calligrapher.name': 'Master Calligrapher', 'ach.calligrapher.desc': 'Write 3 Hanzi', 'ach.unlocked': '✓ Unlocked',
        'pfc.flipHint': 'Tap the card to reveal meaning 👆', 'pfc.flipBack': '🔄 Flip back',
        'pfc.again': 'Repeat', 'pfc.flip': 'Flip', 'pfc.good': 'Learned (+5 XP)',
        'tone.kicker': 'Super Chinese style: live 4-tone audio, ear-training quiz, minimal pairs & Tone Sandhi',
        'tone.tabChart': '4 Tones', 'tone.tabPairs': 'Pairs', 'tone.seqBadge': '🔥 Super Chinese Method',
        'tone.seqTitle': 'Listen to Tones 1-2-3-4 in sequence', 'tone.seqDesc': 'mā (1) → má (2) → mǎ (3) → mà (4) — feel the pitch difference directly',
        'tone.seqPlay': 'Compare in sequence', 'tone.earHint': 'Listen carefully: which tone and word is this?',
        'tone.compareBoth': '▶️ Compare both', 'tone.pairsTitle': 'Change the tone — change the entire meaning!',
        'tone.pairsKicker': 'Most commonly confused words: «买 (buy) vs 卖 (sell)», «四 (4) vs 十 (10)»',
        'pinyin.tabInitials': 'Initials', 'pinyin.tabFinals': 'Finals', 'pinyin.tabMatrix': 'Matrix', 'pinyin.tabRules': 'Rules',
        'pitch.catSingle': '4 Primary Tones', 'pitch.catTones': 'Tone Pairs', 'pitch.catHsk': 'HSK Words', 'pitch.catPhrases': 'Live Phrases',
        'pinyin.initialsTitle': '声母 (Shēngmǔ) — Initial Consonants (23):',
        'pinyin.initialsDesc': 'Syllable-initial consonants in Mandarin. Tap any card to hear native pronunciation.',
        'pinyin.finalsTitle': '韵母 (Yùnmǔ) — Finals / Vowels (24):',
        'pinyin.finalsDesc': '6 simple, 9 compound, and 9 nasal finals. Tap tones 1–4 on each card to listen.',
        'pinyin.searchPh': 'Search syllable (e.g. ma, ni, hao, zhong, xue)...', 'pinyin.all': 'All', 'pinyin.selectedSyllable': 'Selected syllable',
        'survival.tabClass': 'Classroom', 'survival.tabCanteen': 'Canteen', 'survival.tabDelivery': 'Delivery', 'survival.tabMetro': 'Metro',
        'ai.tabCoach': '🔍 Tones & Words', 'ai.inputPh': 'Ask a question or type a sentence to translate...', 'ai.send': 'Send',
        'ai.modalSub': 'Learn without leaving the lesson', 'ai.backToLesson': '✕ Back to lesson', 'ai.openFullChat': '💬 AI Laoshi Chat →',
        'weekly.days': 'Mo,Tu,We,Th,Fr,Sa,Su', 'weekly.streakSuffix': 'day streak',
        'learned.empty': 'No learned words yet. Start a lesson or tap «✓ Know it» on flashcards!'
    },
    ky: {
        'nav.home': 'Башкы бет', 'nav.practice': 'Машыгуу', 'nav.canvas': 'Жазуу', 'nav.profile': 'Профиль',
        'hero.kicker': '汉语 · Кытай тилин үйрөнүңүз',
        'hero.title': 'Ар бир иероглиф — жаңы дүйнөгө ачылган кичинекей эшик.',
        'hero.subtitle': 'HSK сөз байлыгын кадам сайын үйрөнүңүз — окуңуз, угуңуз, жазыңыз жана эс тутумда бекемдеңиз.',
        'hero.quote': '« 千里之行，始于足下 » — миң чакырымдык жол биринчи кадамдан башталат.',
        'profile.kicker': 'Жеке кабинет', 'profile.title': 'Менин профилим', 'profile.edit': 'Түзөтүү',
        'profile.weekly': 'Апталык активдүүлүк', 'profile.progress': 'HSK 1–5 жыйынтыктар', 'profile.tapHint': 'Басып сабакка өтүңүз →',
        'profile.learnedWords': 'Жатталган сөздөрүм', 'profile.quests': 'Күнүмдүк тапшырмалар', 'profile.achievements': 'Жетишкендиктер',
        'profile.motto': 'күн сайын бир кадам', 'profile.dailyPrefix': 'Күнүмдүк:', 'profile.googleSignIn': 'Google аркылуу', 'profile.signOut': 'Чыгуу',
        'stat.streak': 'Күнүмдүк стрик', 'stat.learned': 'Жатталды', 'stat.xp': 'Жалпы XP',
        'home.selectLevel': 'HSK деңгээлин тандаңыз', 'home.selectLevelSub': 'Баштоо же улантуу үчүн деңгээлди тандаңыз',
        'hsk.1_label': 'HSK 1 · Башталгыч', 'hsk.1_words': '150 сөз', 'hsk.1_sub': 'Classic HSK жана New HSK 3.0 · 15 сабак',
        'hsk.2_label': 'HSK 2 · Негизги деңгээл', 'hsk.3_label': 'HSK 3 · Орто деңгээл', 'hsk.4_label': 'HSK 4 · Жогорку орто', 'hsk.5_label': 'HSK 5 · Жогорку деңгээл',
        'hsk.lessons': 'New HSK 3.0 · 15 сабак', 'hsk.start': 'Баштоо →', 'hsk.continue': 'Улантуу →',
        'dash.mistakesTitle': 'Каталар үстүндө иштөө', 'dash.mistakesSub': 'Ката кеткен сөздөрдү кайталоо',
        'dash.mistakesCountSub': '{count} ката сөздү кайталоо',
        'dash.bookmarksTitle': 'Сакталган сөздөр', 'dash.bookmarksSub': 'Тандалган сөздөр топтому',
        'dash.bookmarksCountSub': '{count} сакталган сөздү машыгуу',
        'dash.enterLesson': 'Кирүү →', 'dash.backToLevels': '← Деңгээлдер',
        'dash.continueTitle': 'HSK {hsk} · {lesson}-сабактан улантуу',
        'dash.continueSub': '{track} · {done} / {total} сабак аяктады',
        'lesson.backToLessons': '← Сабактар', 'lesson.aiAskBtn': '🤖 AI Талдоо', 'lesson.continue': 'Улантуу',
        'lesson.tabLearning': 'Үйрөнүү', 'lesson.tabFlashcard': 'Карточкалар', 'lesson.tabQuiz': 'Тест', 'lesson.tabWriting': 'Жазуу',
        'lesson.trackClassic': 'Classic HSK 1 · 15 сабак', 'lesson.trackNew': 'New HSK 3.0 · 15 сабак',
        'lesson.searchPlaceholder': 'Кыргызча, Пиньин же Ханзи боюнча издөө...',
        'lesson.legendCompleted': '✓ 已完成 · Аяктаган', 'lesson.legendCurrent': '● 进行中 · Учурдагы сабак', 'lesson.legendLocked': '🔒 未解锁 · Жабык',
        'lesson.word': 'Сабак', 'lesson.wordsUnit': 'сөз',
        'lesson.kickerNew': 'New HSK 3.0 жаңы китеп сабактары', 'lesson.kickerClassic': 'Classic HSK 1 багыты',
        'lesson.progressText': '{total} сабактын ичинен {done} сабак аяктады',
        'learning.vocabTitle': 'Сабактын сөздөрү', 'learning.examplesTitle': 'Мисал сүйлөмдөр',
        'learning.grammarTitle': 'Грамматикалык түшүндүрмө', 'learning.builderTitle': '🧩 Сүйлөм түзүү машыгуусу',
        'learning.nextStageBtn': '2-этапка өтүү: Карточкалар →',
        'complete.sub': 'Бардык этаптарды ийгиликтүү аяктадыңыз!',
        'complete.rewardLbl': 'Сыйлык', 'complete.wordsLbl': 'Үйрөнүлгөн сөздөр', 'complete.scoreLbl': 'Жыйынтык',
        'complete.backBtn': '← Сабактар картасына кайтуу',
        'step.learn': 'Үйрөнүү', 'step.cards': 'Карточка', 'step.quiz': 'Тест', 'step.write': 'Жазуу', 'step.done': 'Аягы',
        'flow.statusComplete': '🎉 5/5 · Сабак аяктады! Кийинки сабак ачылды.',
        'flow.statusLearning': '1/5 · Сөздөр жана мисалдар менен таанышыңыз ({count} сөз)',
        'flow.statusFlashcards': '2/5 · Карточка {current} / {total}',
        'flow.statusQuiz': '3/5 · Тест: {current} / {total} суроо',
        'flow.statusWriting': '4/5 · Жазуу: {done} / {total} сөз',
        'card.tapHint': 'Айландыруу үчүн басыңыз', 'card.audio': 'Үн', 'card.speak': 'Айтылыш', 'card.draw': 'Чийүү',
        'card.next': 'Кийинки', 'card.prev': '← Мурунку', 'card.shuffle': '🔀 Аралаштыруу',
        'card.bookmark': '⭐ Сактоо', 'card.bookmarked': '⭐ Сакталган',
        'card.learned': '✓ Билем', 'card.learnedDone': '✓ Жатталды',
        'card.learnedLabel': 'Жатталган:', 'card.wordProgress': '{current} / {total} сөз',
        'quiz.scoreLabel': 'Упай:', 'quiz.typeMeaning': 'Hanzi → Маани', 'quiz.typePinyin': 'Маани → Pinyin',
        'quiz.typeHanzi': 'Pinyin → Hanzi', 'quiz.typeAudio': '🎧 Угуп табуу',
        'quiz.promptMeaning': 'Бул сөздүн мааниси эмне?',
        'quiz.promptPinyin': 'Туура Pinyin айтылышын тандаңыз:',
        'quiz.promptHanzi': 'Туура Hanzi иероглифин тандаңыз:',
        'quiz.promptAudio': 'Сөздү угуп, туура маанини тандаңыз:',
        'quiz.replayAudio': 'Кайра угуу',
        'quiz.nextQuestion': 'Кийинки суроо', 'quiz.questionLabel': 'Суроо:',
        'canvas.backToLessons': '← Сабактарга кайтуу', 'canvas.hskLevel': 'HSK деңгээли', 'canvas.lesson': 'Сабак',
        'canvas.version': 'Версия', 'canvas.writingMode': 'Жазуу режими',
        'canvas.trace': 'Чийүү', 'canvas.write': 'Жазуу', 'canvas.test': 'Сыноо',
        'canvas.category': 'Жазуу машыгуусу', 'canvas.wordLabel': 'Сөз:', 'canvas.traceHint': 'Сызыктар боюнча иероглифти жазыңыз.',
        'canvas.check': 'Текшерүү', 'canvas.nextWord': 'Кийинки сөз →', 'canvas.points': 'Упай:',
        'modal.correctTitle': 'Туура! 🎉', 'modal.correctMsg': 'Азаматсыз! Иероглифти туура жаздыңыз.',
        'modal.xpEarned': '+10 XP алынды!', 'modal.editProfileTitle': 'Профилди түзөтүү',
        'modal.cancel': 'Жокко чыгаруу', 'modal.save': 'Сактоо', 'modal.leaderboardTitle': '🏆 Алдыңкылар', 'modal.close': 'Жабуу',
        'practice.title': 'Машыгуу борбору', 'practice.kicker': 'Тондор, жандуу баарлашуу, сөздөр жана викториналар аркылуу кытай тилиңизди өркүндөтүңүз',
        'practice.g1': 'Фонетика жана тондор', 'practice.g2': 'Кытайдагы жандуу жашоо жана баарлашуу', 'practice.g3': 'Сөз байлыгы жана эс тутум',
        'practice.tile.pinyin.title': 'Интерактивдүү Пиньин Таблицасы', 'practice.tile.pinyin.badge': '23 Үнсүз + 24 Үндүү + Үн',
        'practice.tile.pinyin.desc': 'Бардык 声母 жана 韵母 тыбыштары, толук муундар матрицасы жана окуу эрежелери',
        'practice.tile.tone.title': 'Тондор Лабораториясы', 'practice.tile.tone.badge': '4 Тон + Сандхи',
        'practice.tile.tone.desc': '1–4 тондор графиги, окшош сөздөр (mā/má/mǎ/mà) жана угуп табуу викторинасы',
        'practice.tile.pitch.title': 'Айтылыш жана Pitch Машыгуусу', 'practice.tile.pitch.badge': 'Үн менен текшерүү',
        'practice.tile.pitch.desc': 'Микрофонго айтып, үн контуруңуз туура чыгып жатканын текшериңиз',
        'practice.tile.survival.title': 'Кытайдагы Күнүмдүк Баарлашуу', 'practice.tile.survival.badge': 'Жандуу сөз айкаштары',
        'practice.tile.survival.desc': 'Сабакта (教室), ашканада (食堂), WeChat төлөм (微信), метро жана курьер (外卖) сүйлөмдөрү',
        'practice.tile.ai.title': 'AI Laoshi (Ли Мугалим)', 'practice.tile.ai.badge': 'SuperChinese стилинде',
        'practice.tile.ai.desc': 'Каалаган суроону бериңиз, тон талдоо же чыныгы диалог машыгыңыз',
        'practice.tile.radicals.title': 'Иероглиф Ачкычтары (Радикалдар)',
        'practice.tile.radicals.badge': '30 Ачкыч + Анатомия + Тест',
        'practice.tile.radicals.desc': 'Иероглифтердин логикалык уңгулары (氵суу, 扌кол, 口ооз, 亻адам), тамга түзүлүш формулалары жана викторина',
        'radicals.backBtn': '← Машыгуу', 'radicals.title': 'Иероглиф Ачкычтары (Радикалдар)',
        'radicals.kicker': 'Ар бир татаал иероглиф жөнөкөй маанилик ачкычтардан (部首) турат — аларды түшүнсөңүз, сөздөрдү 5 эсе бат эстеп каласыз!',
        'radicals.tabList': '30 Ачкыч', 'radicals.tabBuilder': 'Тамга формуласы', 'radicals.tabQuiz': 'Викторина',
        'radicals.searchPh': 'Ачкыч, пиньин же маани боюнча издеңиз (мисалы: суу, адам, 口)...',
        'radicals.catAll': 'Баары (30)', 'radicals.catHuman': '👤 Адам', 'radicals.catNature': '🌿 Жаратылыш',
        'radicals.catObjects': '🏠 Үй жана буюм', 'radicals.catAction': '🏃 Кыймыл-аракет',
        'radicals.builderNoteTitle': '会意字 жана 形声字 — Иероглифтер кантип жасалат?',
        'radicals.builderNoteDesc': 'Эки же үч жөнөкөй белги кошулуп жаңы маани жаратат. Карточканы басып сөздүн айтылышын угуңуз!',
        'practice.tile.cards.title': 'Интерактивдүү Карточкалар Тренажёру',
        'practice.tile.cards.desc': '3D айлануучу карточкалар, аудио айтылыш жана өзүн-өзү баалоо (Билем / Кайталоо)',
        'practice.tile.mistakes.title': 'Каталар Үстүндө Иштөө',
        'practice.tile.mistakes.desc': 'Сабак жана тесттерде ката кеткен сөздөрдү кайра бекемдөө',
        'practice.tile.bookmarks.title': 'Сакталган Сөздөр',
        'practice.tile.bookmarks.desc': 'Өзүңүз жылдызча койгон атайын сөздөр топтомун кайталоо',
        'settings.title': 'Тиркеме ырастоолору', 'settings.short': 'Ырастоолор', 'settings.subtitle': 'Тиркемени өзүңүзгө ылайыктаңыз',
        'settings.group.language': '🌐 Тиркеме тили', 'settings.languageNote': 'Менюлар, баскычтар жана сөздөр тандалган тилде көрсөтүлөт.',
        'settings.group.appearance': '🎨 Көрүнүш', 'settings.theme': 'Түнкү режим',
        'settings.themeLight': '☀️ Күндүзгү жарык тема', 'settings.themeDark': '🌙 Түнкү караңгы тема',
        'settings.pinyin': 'Пиньинди көрсөтүү', 'settings.pinyinHint': 'Жашырылса, басканда ачылат — өзүңүздү сынаңыз',
        'settings.show': 'Дайыма', 'settings.hide': 'Жашыруу', 'settings.hanziSize': 'Иероглиф өлчөмү',
        'settings.group.sound': '🔊 Үн', 'settings.speechRate': 'Айтылыш ылдамдыгы', 'settings.speechRateHint': 'Кытайча үн ылдамдыгы',
        'settings.slow': 'Жай', 'settings.normal': 'Нормалдуу', 'settings.fast': 'Тез',
        'settings.sfx': 'Үн эффекттери', 'settings.sfxHint': 'Туура жооп жана жетишкендик үндөрү',
        'settings.group.study': '🎯 Окуу', 'settings.dailyGoal': 'Күнүмдүк максат', 'settings.dailyGoalHint': 'Күн сайын канча сөз үйрөнөсүз',
        'settings.reminder': 'Күнүмдүк эскертме', 'settings.reminderHint': 'Окуу убактысы келгенде эскертет',
        'settings.reminderOn': '🔔 Күн сайын саат {time} болгондо эскертилет',
        'settings.reminderDenied': 'Билдирмеге уруксат берилген жок. Браузер ырастоолорунан күйгүзүңүз.',
        'settings.reminderUnsupported': 'Бул браузер билдирмелерди колдобойт.',
        'settings.group.data': '💾 Маалыматтар', 'settings.export': 'Резервдик көчүрмө алуу', 'settings.import': 'Көчүрмөдөн калыбына келтирүү',
        'settings.backupNote': 'Телефон алмаштырсаңыз да прогрессиңиз жоголбойт.',
        'settings.reset': 'Прогрессти нөлгө түшүрүү',
        'settings.resetConfirm': 'Чын эле бардык прогресс (сөздөр, XP, стрик) өчүрүлсүнбү? Муну артка кайтаруу мүмкүн эмес.',
        'settings.resetDone': 'Прогресс тазаланды 🧹', 'settings.importDone': 'Прогресс калыбына келтирилди ✅', 'settings.importError': 'Файл туура эмес же бузулган ❌',
        'settings.exportDone': 'Резервдик файл жүктөлүп алынды 📤',
        'settings.group.app': '📱 Тиркеме', 'settings.installTitle': 'Easy Chinese тиркемеси', 'settings.installHint': 'Телефонго 1 басууда орнотуу',
        'settings.install': 'Орнотуу', 'settings.about': 'Тиркеме жөнүндө', 'settings.saved': 'Сакталды ✅',
        'reminder.title': 'Easy Chinese 🀄', 'reminder.body': 'Бүгүнкү кытай тили машыгуу убактысы келди! 加油! 🔥',
        'quest.tracesTitle': '3 иероглиф жазуу', 'quest.doneSuffix': 'аткарылды', 'quest.xpTitle': 'Бүгүн 50 XP топтоо',
        'ach.firstWord.name': 'Биринчи Кадам', 'ach.firstWord.desc': '1-сөздү жаттоо',
        'ach.firstLesson.name': '1-Сабак Жеңүүчүсү', 'ach.firstLesson.desc': '1 сабакты толук бүтүрүү',
        'ach.streak3.name': '3 Күндүк Жалын', 'ach.streak3.desc': '3 күн катары менен кирүү',
        'ach.streak7.name': 'Апта Баатыры', 'ach.streak7.desc': '7 күндүк стрик',
        'ach.words50.name': 'Китепкөй', 'ach.words50.desc': '50 сөз жаттоо',
        'ach.words100.name': 'Окумуштуу (Scholar)', 'ach.words100.desc': '100 сөз жаттоо',
        'ach.xp100.name': '100 XP Жылдызы', 'ach.xp100.desc': '100 XP топтоо',
        'ach.calligrapher.name': 'Каллиграфия Чебери', 'ach.calligrapher.desc': '3 Hanzi жазуу', 'ach.unlocked': '✓ Ачылды',
        'pfc.flipHint': 'Котормосун көрүү үчүн картаны басыңыз 👆', 'pfc.flipBack': '🔄 Артка оодаруу',
        'pfc.again': 'Кайталоо', 'pfc.flip': 'Оодаруу', 'pfc.good': 'Жатталды (+5 XP)',
        'tone.kicker': 'Super Chinese стилинде: жандуу 4 тон айтылышы, угуп табуу викторинасы, минималдык жуптар жана Tone Sandhi',
        'tone.tabChart': '4 Тон', 'tone.tabPairs': 'Жуптар', 'tone.seqBadge': '🔥 Super Chinese Ыкмасы',
        'tone.seqTitle': '1-2-3-4 Тондорду катары менен угуу', 'tone.seqDesc': 'mā (1) → má (2) → mǎ (3) → mà (4) — обондордун айырмасын дароо сезиңиз',
        'tone.seqPlay': 'Катары менен салыштыруу', 'tone.earHint': 'Кулак салыңыз: бул канчанчы тон жана кайсы сөз?',
        'tone.compareBoth': '▶️ Экөөнү салыштыруу', 'tone.pairsTitle': 'Тон өзгөрсө — маани толугу менен өзгөрөт!',
        'tone.pairsKicker': 'Кытайда эң көп алмаштырылган сөздөр: «买 (сатып алуу) vs 卖 (сатуу)», «四 (4) vs 十 (10)»',
        'pinyin.tabInitials': 'Үнсүздөр', 'pinyin.tabFinals': 'Үндүүлөр', 'pinyin.tabMatrix': 'Матрица', 'pinyin.tabRules': 'Эрежелер',
        'pitch.catSingle': '4 Негизги Тон', 'pitch.catTones': 'Тон жуптары', 'pitch.catHsk': 'HSK сөздөрү', 'pitch.catPhrases': 'Жандуу сөздөр',
        'pinyin.initialsTitle': '声母 (Shēngmǔ) — Үнсүз тыбыштар (23):',
        'pinyin.initialsDesc': 'Кытай тилиндеги муун баштоочу үнсүздөр. Карточканы басып стандарттык айтылышын угуңуз.',
        'pinyin.finalsTitle': '韵母 (Yùnmǔ) — Үндүү тыбыштар (24):',
        'pinyin.finalsDesc': '6 жөнөкөй, 9 татаал жана 9 мурун үндүүсү. 1-4 тон баскычтарын басып обондор менен угуңуз.',
        'pinyin.searchPh': 'Муун издеңиз (мисалы: ma, ni, hao, zhong, xue)...', 'pinyin.all': 'Баары', 'pinyin.selectedSyllable': 'Тандалган муун',
        'survival.tabClass': 'Сабакта', 'survival.tabCanteen': 'Ашкана', 'survival.tabDelivery': 'Курьер', 'survival.tabMetro': 'Метро',
        'ai.tabCoach': '🔍 Тон жана Сөз', 'ai.inputPh': 'Суроо бериңиз же которуу үчүн сүйлөм жазыңыз...', 'ai.send': 'Жөнөтүү',
        'ai.modalSub': 'Сабактан чыкпастан үйрөнүү', 'ai.backToLesson': '✕ Сабакка кайтуу', 'ai.openFullChat': '💬 AI Laoshi маеги →',
        'weekly.days': 'Дш,Шш,Шр,Бш,Жм,Иш,Жш', 'weekly.streakSuffix': 'күн катары менен',
        'learned.empty': 'Азырынча жатталган сөздөр жок. Сабактарды баштаңыз же карточкаларда «✓ Билем» баскычын басыңыз!'
    }
};

function getAppLanguage() {
    if (typeof EC_SETTINGS_KEYS === 'undefined' || typeof EC_I18N === 'undefined') return 'uz';
    var lang = localStorage.getItem(EC_SETTINGS_KEYS.lang);
    return EC_I18N[lang] ? lang : 'uz';
}

function t(key, vars) {
    if (typeof EC_I18N === 'undefined') return key;
    var lang = getAppLanguage();
    var str = (EC_I18N[lang] && EC_I18N[lang][key]) || (EC_I18N.uz && EC_I18N.uz[key]) || key;
    if (vars) {
        Object.keys(vars).forEach(function (k) { str = str.replace('{' + k + '}', vars[k]); });
    }
    return str;
}

// ---- Dynamic Uzbek -> English, Kyrgyz & Uzbek Cyrillic translator for vocabulary & tips ----
var EC_EN_PHRASES = {
    'Assalomu alaykum ustoz!': 'Hello teacher!',
    'Ustoz, iltimos yana bir marta qaytara olasizmi?': 'Teacher, could you please repeat that one more time?',
    'Bu so‘z nima degani?': 'What does this word mean?',
    'Kechirasiz, bu qanday o‘qiladi?': 'Excuse me, how do you read this?',
    'Men tushunmadim.': 'I did not understand.',
    'Iltimos, sal sekinroq gapiring.': 'Please speak a little slower.',
    'Bugungi uyga vazifa nima?': 'What is today’s homework?',
    'Achchiq solmang! (Xitoyda eng muhim ibora)': 'No spicy, please! (Essential phrase in China)',
    'Salgina achchiq bo‘lsa yetadi.': 'A little spicy is fine.',
    'Bu qancha turadi?': 'How much is this?',
    'Olib ketasizmi yoki shu yerda yeysizmi?': 'For here or to go?',
    'Olib ketaman (konteynerga solib bering).': 'Take away, please.',
    'Kechirasiz, mol go‘shti bormi?': 'Excuse me, do you have beef?',
    'Men cho‘chqa go‘shti yemayman (Halol).': 'I do not eat pork (Halal).',
    'WeChat orqali to‘lasam bo‘ladimi?': 'Can I pay with WeChat?',
    'Men sizning QR kodingizni skanerlaymi yoki siz menikinimi?': 'Should I scan you or you scan me?',
    'Men siznikini skanerlayman.': 'I will scan yours.',
    'Posilka yetib keldi, eshik oldiga qo‘yib keting.': 'The package arrived, please leave it by the door.',
    'Pochta qutisidan olish kodi nechchi?': 'What is the pickup code for the locker?',
    'Sal arzonroq qilib bera olasizmi?': 'Can you give a little discount?',
    'Haydovchi aka, mana shu manzilga boring.': 'Driver, please go to this address.',
    'Iltimos, taksi hisoblagichini (schetchik) yoqing.': 'Please turn on the taximeter.',
    'Oldinroqda chetga to‘xtating.': 'Please pull over up ahead.',
    'Metro bekati qayerda?': 'Where is the metro station?',
    'Aeroportgacha taxminan qancha vaqt ketadi?': 'How long does it take to get to the airport?',
    'Shu yerda tushaman, rahmat!': 'I get off here, thank you!',
    'Qolip (Pattern):': 'Pattern:',
    'Qoida formulasi:': 'Rule formula:',
    'Talaffuz mashqi (Bosib eshiting):': 'Pronunciation drill (Tap to listen):',
    'Solishtirish': 'Compare',
    'Jonli Misol:': 'Live Example:',
    'Laoshi Maslahati:': 'Teacher’s Tip:',
    'AI Tahlil': 'AI Analysis',
    'Keyingi harf →': 'Next character →',
    'Keyingi so‘z →': 'Next word →',
    'Quyidagi ma’noga mos xitoycha gapni bo‘laklarni bosib tuzing:': 'Tap the word tiles to assemble the matching sentence:',
    'So‘z bo‘laklarini ketma-ket bosing...': 'Tap the word tiles in order...',
    '1-ton (阴平)': '1st Tone (High Flat)',
    '2-ton (阳平)': '2nd Tone (Rising)',
    '3-ton (上声)': '3rd Tone (Dipping)',
    '4-ton (去声)': '4th Tone (Falling)',
    'Neytral ton (轻声)': 'Neutral Tone (Light)',
    '1-ton: Yuqori va tekis (55)': '1st tone: High and flat (55)',
    '2-ton: Ko‘tariluvchi (35)': '2nd tone: Rising (35)',
    "2-ton: Ko'tariluvchi (35)": '2nd tone: Rising (35)',
    '3-ton: Tushib-ko‘tariluvchi (214)': '3rd tone: Falling-rising (214)',
    "3-ton: Tushib-ko'tariluvchi (214)": '3rd tone: Falling-rising (214)',
    '4-ton: Keskin tushuvchi (51)': '4th tone: Sharp falling (51)',
    'Neytral ton: Yengil va qisqa (0)': 'Neutral tone: Light and short (0)',
    'Yuqori va tekis (55)': 'High and flat (55)',
    'Ko‘tariluvchi (35)': 'Rising (35)',
    "Ko'tariluvchi (35)": 'Rising (35)',
    'Tushib-ko‘tariluvchi (214)': 'Falling-rising (214)',
    "Tushib-ko'tariluvchi (214)": 'Falling-rising (214)',
    'Keskin tushuvchi (51)': 'Sharp falling (51)',
    'Yuqori va tekis': 'High and flat',
    'Ko‘tariluvchi': 'Rising',
    "Ko'tariluvchi": 'Rising',
    'Tushib-ko‘tariluvchi': 'Falling-rising',
    "Tushib-ko'tariluvchi": 'Falling-rising',
    'Tushib-chiquvchi': 'Dipping',
    'Keskin tushuvchi': 'Sharp falling',
    'Yuqori-tekis': 'High-flat',
    '1-ton + 1-ton (Yuqori-tekis)': '1st tone + 1st tone (High-flat)',
    '2-ton + 2-ton (Ko‘tariluvchi)': '2nd tone + 2nd tone (Rising)',
    "2-ton + 2-ton (Ko'tariluvchi)": '2nd tone + 2nd tone (Rising)',
    '3-ton + 3-ton → 2-ton + 3-ton': '3rd tone + 3rd tone → 2nd tone + 3rd tone',
    '4-ton + 4-ton (Keskin tushuvchi)': '4th tone + 4th tone (Sharp falling)',
    '55 Yuqori & Tekis': '55 High & Flat',
    '35 Ko‘tariluvchi': '35 Mid-Rising',
    '214 Tushib-chiquvchi': '214 Dipping',
    '51 Keskin tushuvchi': '51 Sharp Falling',
    '0 Yengil / Qisqa': '0 Light / Short',
    'Ovoz baland va tebranmasdan tekis ushlab turiladi (shifokor huzurida "A-a-a" deb tomoqni ko‘rsatgandek).': 'Keep your voice high and steady without wavering (like saying "Ahhh" for a doctor).',
    'Ovoz pastdan tepaga ko‘tariladi. O‘zbek tilida savol berib hayron bo‘lgandek: "Nima-a?", "Rostdanmi?".': 'Voice rises from mid to high pitch, like asking an inquisitive question: "What?", "Really?".',
    'Ovoz avval tomoq tubiga chuqur tushadi, keyin sal yuqoriga chiqadi ("Hmm... tushunarli" deb o‘ylangandek).': 'Pitch dips down low into the throat, then rises slightly (like an elongated "Well...").',
    'Tepadan tez va keskin pastga tushadi. Buyruq bergan yoki jerkigandek qat’iy: "Yo‘q!", "To‘xta!".': 'Pitch falls rapidly and sharply from high to low, sounding assertive or like a command: "No!", "Stop!".',
    'Urg‘usiz, juda yengil va qisqa aytiladi. Odatda so‘roq yoki qaratqich qo‘shimchalarida keladi.': 'Unstressed, pronounced softly and quickly. Typically found in particles and suffixes.',
    '💡 Eng muhim bozor so‘zi! (3 vs 4)': '💡 Crucial market words! (Tone 3 vs 4)',
    '⚠️ Klassik ma’no farqi (1 vs 3 vs 4)': '⚠️ Classic distinction (Tone 1 vs 3 vs 4)',
    '🗣️ Xitoy tilidagi eng mashhur tez aytish (4 vs 2)': '🗣️ Famous Chinese tongue-twister (Tone 4 vs 2)',
    '🍜 Oshxonada adashtirib qo‘ymang! (4+4 vs 3+3)': '🍜 Do not confuse in the restaurant! (4+4 vs 3+3)',
    '📚 HSK darslaridagi nozik farq': '📚 Subtle distinction in HSK vocabulary',
    '1. Ikkita 3-ton ketma-ket kelsa (3 + 3 → 2 + 3)': '1. Two consecutive 3rd tones (3 + 3 → 2 + 3)',
    '2. “不” (bù) so‘zining o‘zgarishi (bù → bú)': '2. Tone change for “不” (bù → bú)',
    '3. “一” (yī) so‘zining uch xil talaffuzi': '3. Three pronunciations of “一” (yī)',
    'Xitoy tilida ikkita tushib-chiquvchi 3-tonni ketma-ket aytish noqulay. Shu sababli birinchi so‘z avtomatik ravishda 2-tonga (ko‘tariluvchi) aylanadi.': 'Pronouncing two dipping 3rd tones in a row is difficult, so the first syllable automatically changes to a rising 2nd tone.',
    '“不” so‘zi aslida 4-ton (bù). Ammo undan keyingi so‘z ham 4-ton bo‘lsa, “不” 2-tonga (bú) aylanadi. Boshqa barcha tonlar (1, 2, 3) oldida o‘zgarmaydi.': '“不” is inherently a 4th tone (bù). However, when followed by another 4th tone, it changes to a 2nd tone (bú). Before tones 1, 2, and 3, it remains unchanged.',
    '“一” sanashda 1-ton (yī). Ammo 4-tondagi so‘zlar oldidan 2-tonga (yí), 1, 2, 3-tondagi so‘zlar oldidan esa 4-tonga (yì) o‘zgaradi.': '“一” is 1st tone (yī) when counting. Before 4th-tone words it becomes 2nd tone (yí), and before 1st, 2nd, or 3rd tones it becomes 4th tone (yì).',
    '🎯 j, q, x + ü qoidasi (Nuqtalar tushib qolishi)': '🎯 j, q, x + ü Rule (Omission of Umlaut Dots)',
    '👅 Maxsus "Bo‘sh unli" i (空韵 Kongyun)': '👅 Special Apical Vowel "Empty i" (空韵)',
    '🔄 3-3 Ton Sandhi (Ketma-ket uchinchi tonlar)': '🔄 3-3 Tone Sandhi (Consecutive 3rd Tones)',
    '⚡ "不" (bù) va "一" (yī) ning maxsus o‘zgarishlari': '⚡ Special Tone Changes for "不" (bù) and "一" (yī)',
    'Labial (Lab-lab tovushlari)': 'Labial sounds (Lips)',
    'Alveolar (Til uchi tovushlari)': 'Alveolar sounds (Tip of tongue)',
    'Velar (Til orqa tovushlari)': 'Velar sounds (Back of tongue)',
    'Palatal (Til o‘rtasi tovushlari)': 'Palatal sounds (Flat of tongue)',
    'Retroflex (Til orqaga bukilgan tovushlar)': 'Retroflex sounds (Curled tongue)',
    'Dental (Tish oldi tovushlari)': 'Dental sounds (Front teeth)',
    'Semi-vowels (Yarim unlilar / Maxsus)': 'Semi-vowels (Special initials)',
    'Oddiy unlilar (单韵母 - 6 ta)': 'Simple Finals (单韵母 - 6)',
    'Murakkab unlilar (复韵母 - 9 ta)': 'Compound Finals (复韵母 - 9)',
    'Burun unlilari (鼻韵母 - 9 ta)': 'Nasal Finals (鼻韵母 - 9)',
    'Jarangli emas, qisqa "b"': 'Voiceless, unaspirated "b"',
    'Kuchli nafas bilan "p"': 'Strongly aspirated "p"',
    'O‘zbekcha oddiy "m"': 'Standard "m" sound',
    'Yuqori tish labda, "f"': 'Upper teeth on lip, "f"',
    'Nafassiz yumshoq "d"/"t"': 'Unaspirated "d"',
    'Kuchli nafas bilan "t"': 'Strongly aspirated "t"',
    'Oddiy burun "n"': 'Nasal "n"',
    'Oddiy yon "l"': 'Lateral "l"',
    'Nafassiz "g"/"k"': 'Unaspirated "g"',
    'Kuchli nafas bilan "k"': 'Strongly aspirated "k"',
    'Bo‘g‘izdagi jarangli "h"/"x"': 'Guttural "h"',
    'Yumshoq "ji" (tishlar orqasida)': 'Palatal "j"',
    'Kuchli nafas bilan "chi"': 'Strongly aspirated "q"',
    'Yumshoq "shi"': 'Palatal "x"',
    'Til bukilgan, nafassiz "j"': 'Retroflex unaspirated "zh"',
    'Til bukilgan, nafasli "ch"': 'Retroflex aspirated "ch"',
    'Til bukilgan, qattiq "sh"': 'Retroflex "sh"',
    'Inglizcha "r" va o‘zbekcha "j"': 'Mandarin "r"',
    'Tishlar jips, "dz" kabi': 'Dental "z" (like "ds")',
    'Tishlar jips, nafasli "ts"': 'Dental aspirated "ts"',
    'Tishlar orasidan "s"': 'Dental "s"',
    '"y" yoki yolg‘iz "i" boshlanishi': 'Semi-vowel "y"',
    'Inglizcha "w" yoki "v"/"u"': 'Semi-vowel "w"',
    'Og‘iz keng ochilib "a"': 'Open mouth "a"',
    'Lablar yumaloqlanib "o"': 'Rounded lips "o"',
    'Tomoqdan "e"/"o‘" tovushi': 'Back unrounded "e"',
    'Lablar keng jilmayib "i"': 'Smiling wide "i"',
    'Lablar cho‘chchayib "u"': 'Rounded lips "u"',
    'Nemischa "ü" (lab "u", til "i")': 'Rounded "ü" (German ü)',
    'O‘zbekcha "ay"': '"ai" sound (like "eye")',
    'O‘zbekcha "ey"': '"ei" sound (like "hey")',
    'Aslida "uei" ("uey")': '"ui" sound (pronounced "way")',
    'O‘zbekcha "au"/"ao"': '"ao" sound (like "cow")',
    'O‘zbekcha "ou"': '"ou" sound (like "go")',
    'Aslida "iou" ("you")': '"iu" sound (pronounced "yo")',
    'O‘zbekcha "ye"': '"ie" sound (like "yeah")',
    '"ü" va "e" birlashmasi': '"üe" combination',
    'Til orqaga bukiladi "er"': 'Retroflex "er"',
    'Old burun "an"': 'Front nasal "an"',
    'Old burun "en"': 'Front nasal "en"',
    'Old burun "in"': 'Front nasal "in"',
    'Old burun "uen"': 'Front nasal "un" (uen)',
    'Old burun "yün"': 'Front nasal "ün" (yün)',
    'Orqa burun chuqur "ang"': 'Back nasal "ang"',
    'Orqa burun "eng"': 'Back nasal "eng"',
    'Orqa burun "ing"': 'Back nasal "ing"',
    'Orqa burun "ong"': 'Back nasal "ong"'
};

var EC_EN_VOCAB = {
    "Sevmoq":  "To love",
    "Sabr-toqat":  "Patience",
    "Qonun":  "Law",
    "Pastda":  "Under / Below",
    "Va":  "And",
    "Kun, sana":  "Day / Sun",
    "Do\u0027kon":  "Store / Shop",
    "Dou{2018}kon":  "Store / Shop",
    "Yorib o\u0027tish, katta yutuq":  "Breakthrough",
    "Yorib ou{2018}tish, katta yutuq":  "Breakthrough",
    "Mashq qilmoq":  "To practice",
    "Xayr":  "Goodbye",
    "Ehtiyot bo\u0027lmoq":  "To be careful",
    "Ehtiyot bou{2018}lmoq":  "To be careful",
    "Rahmat":  "Thank you",
    "Yaqin":  "Near / Close",
    "Taassurot":  "Impression",
    "Jang (familiya)":  "Zhang (Surname)",
    "Uxlamoq":  "To sleep",
    "Qayerda":  "Where",
    "Bir o\u0027q bilan ikki quyon":  "To kill two birds with one stone",
    "Bir ou{2018}q bilan ikki quyon":  "To kill two birds with one stone",
    "Qiyinchilik":  "Difficulty / Hardship",
    "Yangi":  "New",
    "Bir oz":  "A little bit",
    "Iste\u0027mol, xarajat":  "Consumption / Expense",
    "Isteu{2018}mol, xarajat":  "Consumption / Expense",
    "Mas\u0027ul bo\u0027lmoq":  "To be responsible for",
    "Masu{2018}ul bou{2018}lmoq":  "To be responsible for",
    "Qo\u0027ldan qo\u0027ymaslik (juda yoqtirmoq)":  "Cannot bear to part with",
    "Qou{2018}ldan qou{2018}ymaslik (juda yoqtirmoq)":  "Cannot bear to part with",
    "Qancha":  "How much / many",
    "Kech":  "Late",
    "Kichik":  "Small / Little",
    "Bekor qilmoq":  "To cancel",
    "Yengillashtirmoq":  "To relieve / Ease",
    "Bilmoq":  "To know",
    "Aeroport":  "Airport",
    "Qo\u0027llab-quvvatlamoq":  "To support",
    "Qou{2018}llab-quvvatlamoq":  "To support",
    "Taom, sabzavot":  "Dish / Vegetable",
    "Ayol":  "Woman / Female",
    "U biri":  "That one",
    "Baxtli; baxt":  "Happy / Happiness",
    "Hech gap emas":  "Never mind / That\u0027s okay",
    "Akasi":  "Elder brother",
    "Samolyot":  "Airplane",
    "O\u0027ylamoq":  "To feel / Think",
    "Ou{2018}ylamoq":  "To feel / Think",
    "Haqiqiy, chin":  "Real / True",
    "Chempion":  "Champion",
    "Tushlik":  "Lunch",
    "Tinchlik":  "Peace",
    "Muvozanat":  "Balance / Equilibrium",
    "Belgi, simptom":  "Symptom",
    "Ishga chiqmoq":  "To go to work",
    "Taklif, maslahat":  "Suggestion / Advice",
    "Kechqurun":  "Evening / Night",
    "Isitmalamoq":  "To have a fever",
    "Konditsioner":  "Air conditioner",
    "Savol, muammo":  "Question / Problem",
    "O\u0027zgarish qo\u0027shimchasi":  "Aspect particle (change of state)",
    "Ou{2018}zgarish qou{2018}shimchasi":  "Aspect particle (change of state)",
    "Arzimaydi":  "You\u0027re welcome",
    "Qaytib kelmoq":  "To come back",
    "Modal qo\u0027shimcha":  "Modal particle (a)",
    "Modal qou{2018}shimcha":  "Modal particle (a)",
    "Dalil, isbot":  "Evidence / Proof",
    "Harf, so\u0027z":  "Character / Word",
    "Harf, sou{2018}z":  "Character / Word",
    "Bir nechta":  "Several / A few",
    "Pul yig\u0027moq / qo\u0027ymoq":  "To deposit money / Save",
    "Pul yigu{2018}moq / qou{2018}ymoq":  "To deposit money / Save",
    "Orzu, ideal":  "Ideal / Dream",
    "Mustaqil":  "Independent",
    "Pessimist":  "Pessimistic",
    "Qabul qilmoq":  "To admit / Enroll",
    "Mumkin":  "May / Can",
    "Yo\u0027nalish":  "Direction",
    "You{2018}nalish":  "Direction",
    "U":  "That",
    "Xitoy":  "China",
    "Lekin, ammo":  "But / However",
    "Bardosh bermoq":  "To endure / Bear",
    "Maktab":  "School",
    "Bildirmoq, ifodalamoq":  "To express / Show",
    "Aqlli":  "Smart / Clever",
    "Oshxona":  "Kitchen",
    "Kutib olmoq":  "To pick up / Meet",
    "Yuan":  "Yuan",
    "Boylik":  "Wealth / Fortune",
    "Global, butun jahon":  "Global / Worldwide",
    "Soat":  "Hour / Clock",
    "Voz kechmoq":  "To give up",
    "Nuqtai nazar":  "Viewpoint / Perspective",
    "Davlat":  "Country",
    "Qo\u0027nmoq":  "To land",
    "Qou{2018}nmoq":  "To land",
    "Mantiq, haqiqat":  "Principle / Truth",
    "Chunki":  "Because",
    "Ism":  "Name",
    "Viza":  "Visa",
    "Jonli efir":  "Live broadcast",
    "Internetga kirmoq":  "To surf the internet",
    "Ish":  "Work / Job",
    "Savol qo\u0027shimchasi":  "Question particle",
    "Savol qou{2018}shimchasi":  "Question particle",
    "O\u0027qimoq, o\u0027rganmoq":  "To study / Learn",
    "Ou{2018}qimoq, ou{2018}rganmoq":  "To study / Learn",
    "Oldin":  "Before / Ago",
    "Oila, uy":  "Family / Home",
    "Topshiriq, vazifa":  "Task / Mission",
    "Stul":  "Chair",
    "Yuvinish xonasi":  "Restroom / Bathroom",
    "Ekologiya":  "Ecology",
    "Haydash; ochmoq":  "To drive / Open",
    "O\u0027z vaqtida":  "On schedule / On time",
    "Ou{2018}z vaqtida":  "On schedule / On time",
    "Boy, xilma-xil":  "Rich / Abundant",
    "Sarmoya kiritmoq":  "To invest",
    "Bugun":  "Today",
    "Tugatmoq, bajarmoq":  "To complete / Finish",
    "Tajriba, eksperiment":  "Experiment",
    "Shartnoma":  "Contract",
    "Bemor":  "Patient / Sick person",
    "Tejamoq":  "To save / Economize",
    "Alo (murojaat; telefon)":  "Hello (phone)",
    "Talaba":  "Student",
    "Maqsad":  "Goal / Purpose",
    "Oldin; old":  "Before / In front",
    "Harf":  "Character",
    "Xavfsiz; xavfsizlik":  "Safe / Safety",
    "So\u0027ramoq":  "To ask",
    "Sou{2018}ramoq":  "To ask",
    "Imkoniyat":  "Opportunity / Chance",
    "Xonim":  "Miss / Lady",
    "Qo\u0027shiq aytmoq":  "To sing",
    "Qou{2018}shiq aytmoq":  "To sing",
    "Iqtisodiyot":  "Economy",
    "Ko\u0027ngli qolmoq":  "Disappointed",
    "Kou{2018}ngli qolmoq":  "Disappointed",
    "Hayvonlar uchun hisoblagich":  "Measure word for animals",
    "Davolamoq":  "To treat / Cure",
    "Shamol esmoq":  "Windy / Wind blows",
    "Xolis, obyektiv":  "Objective",
    "Bog\u0027lanmoq":  "To contact / Connect",
    "Bogu{2018}lanmoq":  "To contact / Connect",
    "Munosabat, aloqa":  "Relationship / Connection",
    "Boshlamoq":  "To begin / Start",
    "O\u0027qimoq":  "To read / Study",
    "Ou{2018}qimoq":  "To read / Study",
    "Qatnashmoq":  "To participate / Attend",
    "Qanday":  "How / How about",
    "Kechirasiz":  "Excuse me / Sorry",
    "Rang":  "Color",
    "Bu yerda":  "Here",
    "Qaysi":  "Which",
    "Non":  "Bread",
    "Basketbol o\u0027ynamoq":  "To play basketball",
    "Basketbol ou{2018}ynamoq":  "To play basketball",
    "Urf-odat":  "Custom",
    "Toza":  "Clean",
    "Mol go\u0027shti":  "Beef",
    "Mol gou{2018}shti":  "Beef",
    "Bu (narsa/hayvon)":  "It",
    "Yo\u0027q, emas":  "No / Not",
    "You{2018}q, emas":  "No / Not",
    "Bormoq":  "To have / Exist",
    "Yoz":  "Summer",
    "Yordam bermoq":  "To help / Assist",
    "Ofis, idora":  "Office",
    "Ofitsiant":  "Waiter / Waitress",
    "Havo":  "Air",
    "Da, ichida":  "At / In",
    "Moliya":  "Finance",
    "Ifodalamoq":  "To express",
    "Bir oz, bir nechta":  "Some / A few",
    "Ovqat qilmoq":  "To cook food",
    "Tajriba":  "Experience",
    "Ixtiro qilmoq":  "To invent",
    "Tirbandlik (probka)":  "Traffic jam",
    "Xohlamoq":  "To want / Plan",
    "Bular":  "These",
    "Holat, voqelik":  "Reality / Phenomenon",
    "Mebel":  "Furniture",
    "Tipik, namunaviy":  "Typical",
    "Masofa":  "Distance",
    "Kompyuter":  "Computer",
    "Pekin":  "Beijing",
    "Shuning uchun":  "Therefore / So",
    "Ertalab":  "Morning",
    "Tushdan keyin":  "Afternoon",
    "Qila olmoq":  "Can / Able to",
    "Ruxsat (ta\u0027til) so\u0027ramoq":  "To ask for leave",
    "Ruxsat (tau{2018}til) sou{2018}ramoq":  "To ask for leave",
    "Qadimgi davr":  "Ancient times",
    "Yuqorida":  "Above / Up",
    "Tasodifiy":  "Accidental / Chance",
    "Dam olish":  "To rest",
    "Kengaytirmoq":  "To expand / Enlarge",
    "Ular (ayollar)":  "They (women)",
    "Yoqtirmoq":  "To like",
    "Amalga oshirmoq":  "To realize / Achieve",
    "Tartib son ko\u0027rsatkichi":  "Ordinal prefix (di)",
    "Tartib son kou{2018}rsatkichi":  "Ordinal prefix (di)",
    "Maydon, yuza":  "Area",
    "Haydash qilmoq":  "To drive a car",
    "Bir necha":  "Some / Several",
    "Aksiya (fond bozori)":  "Stock / Share",
    "Sye Pen (ism)":  "Xie Peng (Name)",
    "Uzr so\u0027ramoq":  "To apologize",
    "Uzr sou{2018}ramoq":  "To apologize",
    "Umid qilmoq":  "To hope / Wish",
    "Advokat, huquqshunos":  "Lawyer / Attorney",
    "Jahli chiqmoq":  "Angry",
    "Tiklanmoq":  "To recover / Restore",
    "U tomonda":  "Over there",
    "Detal, tafsilot":  "Detail",
    "Rejalashtirmoq, tartibga solmoq":  "To arrange / Plan",
    "Bo\u0027lmoq":  "To be",
    "Bou{2018}lmoq":  "To be",
    "Samimiy":  "Sincere / Genuine",
    "Samimiy, mehmondo\u0027st":  "Enthusiastic / Warm",
    "Samimiy, mehmondou{2018}st":  "Enthusiastic / Warm",
    "Darsdan chiqish":  "To finish class",
    "Hodisa, fenomen":  "Phenomenon",
    "Soramoq":  "To ask",
    "Kelajak":  "Future",
    "O\u0027tgan yil":  "Last year",
    "Ou{2018}tgan yil":  "Last year",
    "Nima":  "What",
    "Ichida":  "Inside",
    "Qobiliyat":  "Ability / Capability",
    "Hamshira":  "Nurse",
    "Kuz":  "Autumn / Fall",
    "Muvaffaqiyat":  "Success",
    "Bularning barchasi":  "All of these",
    "Tinglamoq":  "To listen / Hear",
    "Til topishmoq, bog\u0027lanmoq":  "To communicate / Connect",
    "Til topishmoq, bogu{2018}lanmoq":  "To communicate / Connect",
    "Xafa bo\u0027lmoq":  "Sad / Upset",
    "Xafa bou{2018}lmoq":  "Sad / Upset",
    "Chet elda o\u0027qimoq":  "To study abroad",
    "Chet elda ou{2018}qimoq":  "To study abroad",
    "Metro":  "Subway / Metro",
    "Sut":  "Milk",
    "Bosh og\u0027rimoq":  "Headache",
    "Bosh ogu{2018}rimoq":  "Headache",
    "Tanqid qilmoq":  "To criticize",
    "Dars":  "Lesson / Class",
    "Farovon, gullab-yashnagan":  "Prosperous / Thriving",
    "Elchixona":  "Embassy",
    "Takrorlamoq":  "To review",
    "Ular (narsa/hayvon)":  "They (things/animals)",
    "Qattiqqo\u0027l, qat\u0027iy":  "Strict / Rigorous",
    "Qattiqqou{2018}l, qatu{2018}iy":  "Strict / Rigorous",
    "Qo\u0027shni":  "Neighbor",
    "Qou{2018}shni":  "Neighbor",
    "Yuk, bagaj":  "Luggage / Baggage",
    "Ota-onaga mehribon":  "Filial / Devoted to parents",
    "Xulosa qilmoq":  "To summarize / Conclude",
    "Kechiktirmoq":  "To postpone / Delay",
    "Kechki ovqat":  "Dinner",
    "Rahbar, yetakchi":  "Leader / Leadership",
    "Kasalxona":  "Hospital",
    "Kitob hisoblagichi":  "Measure word for books",
    "Tort":  "Cake",
    "Sog\u0027lom; salomatlik":  "Healthy / Health",
    "Sogu{2018}lom; salomatlik":  "Healthy / Health",
    "Kecha":  "Yesterday",
    "Baholamoq, hukm chiqarmoq":  "To judge / Decide",
    "Savol berishga ruxsat":  "May I ask / Excuse me",
    "Dasturiy ta\u0027minot":  "Software",
    "Dasturiy tau{2018}minot":  "Software",
    "Majlis, yig\u0027ilish":  "Meeting / Conference",
    "Majlis, yigu{2018}ilish":  "Meeting / Conference",
    "Optimist, ko\u0027tarinki":  "Optimistic",
    "Optimist, kou{2018}tarinki":  "Optimistic",
    "Qimmat":  "Expensive",
    "Ramz, timsol":  "Symbol / Emblem",
    "Tovarni qaytarmoq":  "To return merchandise",
    "Missiya, oliy vazifa":  "Mission",
    "She\u0027riyat":  "Poetry",
    "Sheu{2018}riyat":  "Poetry",
    "Operatsiya, jarrohlik":  "Surgery / Operation",
    "Transport, qatnov":  "Traffic / Transportation",
    "Davom ettirmoq":  "To persist / Continue",
    "Ob-havo":  "Weather",
    "Qaysi biri":  "Which one",
    "Bozor":  "Market",
    "Juda":  "Very",
    "Ma\u0027lumotlar (data)":  "Data",
    "Mau{2018}lumotlar (data)":  "Data",
    "Taklif qo\u0027shimchasi":  "Suggestion particle (ba)",
    "Taklif qou{2018}shimchasi":  "Suggestion particle (ba)",
    "Qoida, tartib":  "Regulation / Rule",
    "Tamoyil, prinsip":  "Principle",
    "Pozitsiya, nuqtai nazar":  "Stance / Position",
    "Bahor bayrami (Yangi yil)":  "Spring Festival (Chinese New Year)",
    "Xizmat ko\u0027rsatmoq":  "To serve / Service",
    "Xizmat kou{2018}rsatmoq":  "To serve / Service",
    "Mos, loyiq":  "Suitable / Fit",
    "Atrof-muhit":  "Environment",
    "Kasal":  "Illness / Sick",
    "Imtiyoz, chegirma":  "Preferential / Discount",
    "Janob":  "Mr. / Sir",
    "Yomg\u0027ir yog\u0027moq":  "To rain",
    "Yomgu{2018}ir yogu{2018}moq":  "To rain",
    "Tug\u0027ilgan kun":  "Birthday",
    "Tugu{2018}ilgan kun":  "Birthday",
    "O\u0027tirmoq":  "To sit",
    "Ou{2018}tirmoq":  "To sit",
    "Jin (yarim kg)":  "Jin (half a kilo)",
    "Katta (yoshda)":  "Old / Big (in age)",
    "Jasur, mard":  "Brave / Courageous",
    "Fasl":  "Season",
    "Hamma":  "Everyone",
    "Tomoshabin":  "Audience / Spectator",
    "Musiqa":  "Music",
    "Yaqqol, aniq":  "Obvious / Distinct",
    "Barqaror":  "Stable / Steady",
    "Fidoyilik qilmoq":  "To dedicate / Devote",
    "Do\u0027st":  "Friend",
    "Dou{2018}st":  "Friend",
    "Yemoq":  "To eat",
    "Innovatsiya, yangilik":  "Innovation",
    "Jurnal":  "Magazine",
    "Choy":  "Tea",
    "Qaror qilmoq":  "To decide",
    "Yakshanba":  "Sunday",
    "Kam":  "Few / Little",
    "E\u0027tibor bermoq":  "To pay attention to",
    "Eu{2018}tibor bermoq":  "To pay attention to",
    "Usul, metod":  "Method / Way",
    "Qayer":  "Where",
    "Rag\u0027batlantirmoq, tezlashtirmoq":  "To promote / Accelerate",
    "Ragu{2018}batlantirmoq, tezlashtirmoq":  "To promote / Accelerate",
    "Kredit, qarz":  "Loan / Credit",
    "Kelajak, istiqbol":  "Future / Prospects",
    "O\u0027zgarish":  "Change",
    "Ou{2018}zgarish":  "Change",
    "Joylashmoq; da, da":  "To be at / In / On",
    "Tarbiyalamoq, yetishtirmoq":  "To cultivate / Train",
    "Svetofor":  "Traffic light",
    "Restoran":  "Restaurant",
    "Ko\u0027p asrlik, qadimiy":  "Long-standing / Age-old",
    "Kou{2018}p asrlik, qadimiy":  "Long-standing / Age-old",
    "Ozgina":  "A little bit",
    "Qo\u0027y go\u0027shti":  "Mutton / Lamb",
    "Qou{2018}y gou{2018}shti":  "Mutton / Lamb",
    "Bank":  "Bank",
    "Arzon":  "Cheap / Inexpensive",
    "Qilmoq, tayyorlamoq":  "To make / Do",
    "Mushuk":  "Cat",
    "Mantiq":  "Logic",
    "U yerd":  "There",
    "Maktabga borish":  "To go to school",
    "Burch, majburiyat":  "Duty / Obligation",
    "Soha, jabha":  "Field / Realm",
    "Kulmoq":  "To laugh / Smile",
    "Garchi, qaramasdan":  "Even though / In spite of",
    "Tayyorlanmoq":  "To prepare",
    "Oziq modda":  "Nutrition",
    "Kim":  "Who",
    "Nonushta":  "Breakfast",
    "Agar ... bo\u0027lsagina":  "As long as",
    "Agar ... bou{2018}lsagina":  "As long as",
    "Ishdan tushmoq":  "To get off work",
    "Kitob do\u0027koni":  "Bookstore",
    "Kitob dou{2018}koni":  "Bookstore",
    "Erkak":  "Man / Male",
    "Aniq vaqtda":  "Punctual / Right on time",
    "Kasallanmoq":  "To fall ill",
    "Hali":  "Still / Yet",
    "Ajoyib, qoyilmaqom":  "Wonderful / Brilliant",
    "Qaysilar":  "Which ones",
    "Qiziqmoq":  "To be interested in",
    "Qat\u0027iy, mustahkam":  "Firm / Resolute",
    "Qatu{2018}iy, mustahkam":  "Firm / Resolute",
    "Bundan tashqari":  "Furthermore / Moreover",
    "Tizim":  "System",
    "Sana; raqam":  "Date / Number",
    "Tayoqcha (ovqat uchun)":  "Chopsticks",
    "Yo\u0027lga chiqmoq":  "To set out / Depart",
    "You{2018}lga chiqmoq":  "To set out / Depart",
    "Hakam":  "Referee / Judge",
    "Tanlamoq; tanlov":  "To choose / Choice",
    "Mo\u0027jiza":  "Miracle / Wonder",
    "Mou{2018}jiza":  "Miracle / Wonder",
    "Tibbiyot":  "Medicine / Medical",
    "Tezlik":  "Speed",
    "Axloq, odob":  "Morality / Ethics",
    "Hurmat qilmoq":  "To respect",
    "Gazeta":  "Newspaper",
    "Uy egasi":  "Landlord",
    "Tomon":  "Side / Direction",
    "Qarsak chalmoq":  "To applaud / Clap",
    "Karta orqali to\u0027lamoq":  "To pay by card",
    "Karta orqali tou{2018}lamoq":  "To pay by card",
    "Qoida":  "Rule",
    "Yugurmoq":  "To run / Jog",
    "Bermoq":  "To give",
    "Qat\u0027i nazar":  "Regardless of / No matter",
    "Qatu{2018}i nazar":  "Regardless of / No matter",
    "Li Yue (ism)":  "Li Yue (Name)",
    "Muzlatkich":  "Refrigerator",
    "An\u0027ana":  "Tradition",
    "Anu{2018}ana":  "Tradition",
    "Hissa qo\u0027shmoq":  "To contribute",
    "Hissa qou{2018}shmoq":  "To contribute",
    "Tushuntirmoq":  "To explain",
    "Bahor":  "Spring",
    "Qiziqarli":  "Fun / Interesting",
    "Rejissyor":  "Director",
    "Sport bilan shug\u0027ullanmoq":  "To do sports / Exercise",
    "Sport bilan shugu{2018}ullanmoq":  "To do sports / Exercise",
    "Chiniqmoq, mashq qilmoq":  "To work out / Exercise",
    "Ko\u0027rmoq, o\u0027qimoq":  "To look / Read",
    "Kou{2018}rmoq, ou{2018}qimoq":  "To look / Read",
    "Turmoq":  "To get up / Wake up",
    "Ishonmoq":  "To trust",
    "Aviareys":  "Flight",
    "Oylik maosh":  "Salary / Wage",
    "Qarshi chiqmoq":  "To oppose / Object",
    "Bo\u0027yicha, binoan":  "According to",
    "Bou{2018}yicha, binoan":  "According to",
    "Qor":  "Snow",
    "Daraja, saviya":  "Level / Standard",
    "Muhokama qilmoq":  "To discuss",
    "Charchamoq, mashaqqatli":  "Hard / Exhausting",
    "Sevmoq, muhabbat":  "To love / Love",
    "Parol":  "Password",
    "Kitob":  "Book",
    "Mazmun, tarkib":  "Content",
    "Boshlang\u0027ich maktab":  "Primary school",
    "Boshlangu{2018}ich maktab":  "Primary school",
    "Hamkorlik qilmoq":  "To cooperate / Collaborate",
    "Maqtamoq":  "To praise / Commend",
    "Aks holda":  "Otherwise",
    "Kafolat bermoq":  "To guarantee",
    "Yuan (pul birligi)":  "Yuan (currency unit)",
    "Allaqachon":  "Already",
    "Taksi":  "Taxi",
    "G\u0027oya, tafakkur":  "Thought / Thinking",
    "Gu{2018}oya, tafakkur":  "Thought / Thinking",
    "Zavqlanmoq, qadrlamoq":  "To appreciate / Enjoy",
    "Keyin":  "Later / After",
    "Yangiliklar":  "News",
    "Xalqaro":  "International",
    "Ta\u0027sir qilmoq":  "To influence / Affect",
    "Tau{2018}sir qilmoq":  "To influence / Affect",
    "Juda (juda...)":  "Too / Extremely",
    "Ochmoq":  "To open",
    "Qadr-qimmat, g\u0027urur":  "Dignity",
    "Qadr-qimmat, gu{2018}urur":  "Dignity",
    "Tushdan oldin":  "Morning (before noon)",
    "Jamiyat":  "Society",
    "Avtobus":  "Bus",
    "Yorqin, ulug\u0027vor":  "Glorious / Splendid",
    "Yorqin, ulugu{2018}vor":  "Glorious / Splendid",
    "Shaxsiy sir (maxfiylik)":  "Privacy",
    "Men":  "I / Me",
    "Kun, osmon":  "Day / Sky",
    "Xona":  "Room",
    "Yarmi":  "Half",
    "Himoya qilmoq":  "To protect",
    "Ko\u0027rishmoq":  "To meet / See",
    "Kou{2018}rishmoq":  "To meet / See",
    "Piyola":  "Cup",
    "Taom yemoq":  "To have a meal / Eat",
    "Pasport":  "Passport",
    "Hal qilmoq":  "To solve / Settle",
    "Ko\u0027chmoq":  "To move house",
    "Kou{2018}chmoq":  "To move house",
    "Okean, dengiz":  "Ocean / Sea",
    "Tekshirmoq":  "To check / Examine",
    "Platforma":  "Platform",
    "Yomg\u0027ir":  "Rain",
    "Yomgu{2018}ir":  "Rain",
    "Daqiqa":  "Minute",
    "Ilm-fan":  "Science",
    "Qulaylik":  "Convenience",
    "Chegirma qilmoq":  "To give a discount",
    "O\u0027sish, rivojlanmoq":  "Progress / Improvement",
    "Ou{2018}sish, rivojlanmoq":  "Progress / Improvement",
    "Oy":  "Month / Moon",
    "Elektron pochta":  "Email",
    "Naqd pul":  "Cash",
    "Eshitish uchun yoqimli":  "Pleasant to hear",
    "Bo\u0027shashmoq, dam olmoq":  "To relax",
    "Bou{2018}shashmoq, dam olmoq":  "To relax",
    "Daxldorlik hissi":  "Sense of belonging",
    "Bilim":  "Knowledge",
    "Yozmoq":  "To write",
    "Shifokor":  "Doctor",
    "Ko\u0027chib o\u0027tmoq (migratsiya)":  "To immigrate / Migrate",
    "Kou{2018}chib ou{2018}tmoq (migratsiya)":  "To immigrate / Migrate",
    "Qaytmoq":  "To return / Go back",
    "Vaqtda":  "At the time of / When",
    "Afsuslanmoq":  "To regret",
    "Arziydigan, foydali":  "Worth it / Good deal",
    "Qizi":  "Daughter",
    "Estetik did":  "Aesthetic taste",
    "Qo\u0027shiq":  "Song",
    "Qou{2018}shiq":  "Song",
    "O\u0027simlik":  "Plant",
    "Ou{2018}simlik":  "Plant",
    "Qish":  "Winter",
    "Piola":  "Cup / Glass",
    "Chiroyli":  "Beautiful / Pretty",
    "Hayvon":  "Animal",
    "Kubok":  "Trophy / Cup",
    "Ko\u0027rmoq":  "To see / Look",
    "Kou{2018}rmoq":  "To see / Look",
    "Asar":  "Work (of art/literature)",
    "Tanimoq":  "To know / Recognize",
    "Salqin":  "Cool (temperature)",
    "Gapirmoq":  "To speak / Say",
    "Garchi":  "Although",
    "Faqatgina":  "Only / Solely",
    "Ruhlantirmoq, rag\u0027batlantirmoq":  "To encourage",
    "Ruhlantirmoq, ragu{2018}batlantirmoq":  "To encourage",
    "Energiya manbai":  "Energy resource",
    "Taklif qilmoq":  "To invite",
    "Kiyish":  "To wear / Put on",
    "Yo\u0027q; bo\u0027lmaydi":  "Do not have / Without",
    "You{2018}q; bou{2018}lmaydi":  "Do not have / Without",
    "Tozalamoq, supurmoq":  "To clean / Sweep",
    "Shamollamoq":  "To catch a cold",
    "Tushuncha, qarash":  "Concept / Notion",
    "Guruch":  "Rice",
    "Yetuk, ulg\u0027aygan":  "Mature",
    "Yetuk, ulgu{2018}aygan":  "Mature",
    "Ta\u0027kidlamoq":  "To emphasize / Stress",
    "Tau{2018}kidlamoq":  "To emphasize / Stress",
    "Qidirmoq":  "To look for / Find",
    "Yaxshi":  "Good / Well",
    "Otasi":  "Father / Dad",
    "To\u0027siq":  "Obstacle / Barrier",
    "Tou{2018}siq":  "Obstacle / Barrier",
    "Yon bermoq, murosaga kelmoq":  "To compromise",
    "Huquq":  "Right",
    "Tuxum":  "Egg",
    "U (erkak)":  "He / Him",
    "Tush vaqti":  "Midday / Noon",
    "Tashqari":  "Outside",
    "Joziba":  "Charm / Appeal",
    "Band":  "Busy",
    "Bola":  "Child",
    "Nutq so\u0027zlamoq":  "To give a speech",
    "Nutq sou{2018}zlamoq":  "To give a speech",
    "Birgalikda":  "Together",
    "Iqlim":  "Climate",
    "Tarix":  "History",
    "Yumor hissi bor":  "Humorous / Sense of humor",
    "Butun dunyoga mashhur":  "World-famous",
    "Xursand, yoqimli":  "Pleasant / Happy",
    "Yashamoq":  "To live / Reside",
    "Amerika":  "United States / America",
    "Pul":  "Money",
    "Qo\u0027shimcha ishlamoq":  "To work overtime",
    "Qou{2018}shimcha ishlamoq":  "To work overtime",
    "Ish, voqea":  "Matter / Affair / Thing",
    "Qiziqish, xobbi":  "Hobby",
    "Ayni paytda":  "In the process of / Right now",
    "Hafta":  "Week",
    "Resurs, manba":  "Resource",
    "Singlisi":  "Younger sister",
    "Ishga yollamoq":  "To recruit / Hire",
    "Ishdan bo\u0027shamoq":  "To resign / Quit",
    "Ishdan bou{2018}shamoq":  "To resign / Quit",
    "Orqasida":  "Behind",
    "Bu tomon":  "This side",
    "Harorat":  "Temperature",
    "Ko\u0027paymoq, ortmoq":  "To increase",
    "Kou{2018}paymoq, ortmoq":  "To increase",
    "Hamkorlik":  "Cooperation",
    "Ularning barchasi":  "All of those",
    "Darsga borish":  "To attend class",
    "Zamonaviy":  "Modern",
    "Bosim, stress":  "Pressure / Stress",
    "Lavozim":  "Position / Post",
    "Narsa":  "Thing / Stuff",
    "Muvofiqlashtirmoq":  "To coordinate",
    "Baliq":  "Fish",
    "Futbol o\u0027ynamoq":  "To play soccer",
    "Futbol ou{2018}ynamoq":  "To play soccer",
    "Ishlamoq; ish":  "To work / Job",
    "U (ayol)":  "She / Her",
    "Sotib olish":  "To buy",
    "U, o\u0027sha":  "That",
    "U, ou{2018}sha":  "That",
    "Infratuzilma, jihozlar":  "Facilities / Infrastructure",
    "Yig\u0027lamoq":  "To cry",
    "Yigu{2018}lamoq":  "To cry",
    "Aniq, ravshan":  "Clear",
    "O\u0027g\u0027li":  "Son",
    "Ou{2018}gu{2018}li":  "Son",
    "Siz":  "You",
    "Sinfdosh":  "Classmate",
    "Taqiqlamoq":  "To forbid / Prohibit",
    "Tushunmoq, anglamoq":  "To understand / Grasp",
    "Devid (ism)":  "David (Name)",
    "Menejer, rahbar":  "Manager",
    "Yigiti":  "Boyfriend",
    "Kiyimlar":  "Clothes / Clothing",
    "O\u0027zaro manfaatli g\u0027alaba":  "Win-win situation",
    "Ou{2018}zaro manfaatli gu{2018}alaba":  "Win-win situation",
    "Mehmonxona (zal)":  "Living room",
    "Baho, natija":  "Grade / Score",
    "Oldinda":  "In front",
    "Munosabat, yondashuv":  "Attitude",
    "Ifloslanish":  "Pollution",
    "Dizayn qilmoq, loyihalamoq":  "To design",
    "Boshqarmoq":  "To manage / Administer",
    "Xavotir olmoq":  "To worry",
    "Meva":  "Fruit",
    "Old tomon":  "Front side",
    "Mag\u0027lubiyat":  "Failure / Defeat",
    "Magu{2018}lubiyat":  "Failure / Defeat",
    "Dam olish kunlari":  "Weekend",
    "Kino":  "Movie / Cinema",
    "Yosh":  "Age / Years old",
    "Quruq":  "Dry",
    "Qulay, yengil":  "Comfortable",
    "Nazariya":  "Theory",
    "Soat; nuqta":  "O\u0027clock / Dot",
    "WeChat":  "WeChat",
    "Ustida, yuqorida":  "On / Above",
    "Tizim, tartib-qoida":  "System / Institution",
    "Davomiy, uzluksiz":  "Sustainable / Continuous",
    "Tilamoq":  "To wish",
    "Qilmoq":  "To do / Make",
    "Sharoit va maosh":  "Benefits / Compensation",
    "Umumiy hisoblagich":  "General measure word",
    "Ovqat buyurtma qilmoq":  "To order food",
    "Sotuvchi":  "Salesperson",
    "Janob; eri":  "Mr. / Husband / Sir",
    "Bu narsa":  "This thing",
    "Allo (telefonda); hey":  "Hello (on phone) / Hey",
    "O\u0027ziga ishongan":  "Confident",
    "Ou{2018}ziga ishongan":  "Confident",
    "Dori":  "Medicine",
    "Suratga olmoq":  "To take a photo",
    "Ishontirmoq, ko\u0027ndirmoq":  "To persuade / Convince",
    "Ishontirmoq, kou{2018}ndirmoq":  "To persuade / Convince",
    "Tarqatmoq":  "To disseminate / Spread",
    "Xitoy harflari":  "Chinese characters",
    "Shirin":  "Sweet",
    "Kir yuvish mashinasi":  "Washing machine",
    "Imtihon":  "Exam / Test",
    "Vijdon":  "Conscience",
    "SMS yubormoq":  "To send a text message",
    "Sayohat qilmoq":  "To travel",
    "Tomonga, sari":  "Towards",
    "O\u0027zak, asosiy markaz":  "Core / Nucleus",
    "Ou{2018}zak, asosiy markaz":  "Core / Nucleus",
    "Donolik, aql-zakovat":  "Wisdom / Intelligence",
    "Sinov, chorlov":  "Challenge",
    "Samara, natija":  "Effect / Result",
    "Oshirmoq, yaxshilamoq":  "To improve / Raise",
    "Yetib kelmoq":  "To arrive",
    "Muqarrar":  "Inevitable / Certain",
    "Ukasi":  "Younger brother",
    "Rasm chizmoq":  "To draw / Paint",
    "Kelmoq":  "To come",
    "O\u0027ng":  "Right",
    "Ou{2018}ng":  "Right",
    "Ko\u0027plik qo\u0027shimchasi":  "Plural suffix (men)",
    "Kou{2018}plik qou{2018}shimchasi":  "Plural suffix (men)",
    "Olma":  "Apple",
    "Hamkasb":  "Colleague",
    "Sotmoq":  "To sell",
    "Ketmoq":  "To go",
    "Bosiq, vazmin":  "Calm / Composed",
    "Yana":  "Again / Once more",
    "O\u0027qituvchi":  "Teacher",
    "Ou{2018}qituvchi":  "Teacher",
    "Restoran; mehmonxona":  "Restaurant / Hotel",
    "Shonli, porloq":  "Glorious / Splendid",
    "Sovg\u0027a":  "Gift / Present",
    "Sovgu{2018}a":  "Gift / Present",
    "Gavjum, qizg\u0027in":  "Lively / Bustling",
    "Gavjum, qizgu{2018}in":  "Lively / Bustling",
    "Chaqirmoq, atmoq":  "To call / Be named",
    "Onasi":  "Mother / Mom",
    "It":  "Dog",
    "G\u0027amxo\u0027rlik qilmoq":  "To take care of",
    "Gu{2018}amxou{2018}rlik qilmoq":  "To take care of",
    "Uslub, stil":  "Style",
    "Aviachipta":  "Plane ticket",
    "Kelgasi yil":  "Next year",
    "Hozir":  "Now",
    "Hammasi":  "All / Both",
    "Tabiat; tabiiy":  "Nature / Natural",
    "Raqsga tushmoq":  "To dance",
    "Qo\u0027shimcha (taklif)":  "Suggestion particle",
    "Qou{2018}shimcha (taklif)":  "Suggestion particle",
    "Guruch, ovqat":  "Rice / Meal",
    "Ziddiyat, qarama-qarshilik":  "Contradiction / Conflict",
    "Telefon qilmoq":  "To make a phone call",
    "Texnologiya, texnika":  "Technology / Technique",
    "Uchib ketmoq (samolyot)":  "To take off (flight)",
    "Ba\u0027zilari":  "Some of them",
    "Bau{2018}zilari":  "Some of them",
    "Chora-tadbir":  "Measure / Step",
    "Yengib o\u0027tmoq":  "To overcome",
    "Yengib ou{2018}tmoq":  "To overcome",
    "Suv":  "Water",
    "Ta\u0027lim":  "Education",
    "Tau{2018}lim":  "Education",
    "Daromad":  "Income / Revenue",
    "Muallif":  "Author / Writer",
    "Xavfli":  "Dangerous",
    "Kayfiyat":  "Mood / Frame of mind",
    "Bu yil":  "This year",
    "Ishni yarim yo\u0027lda tashlab ketmoq":  "To give up halfway",
    "Ishni yarim you{2018}lda tashlab ketmoq":  "To give up halfway",
    "Brend, marka":  "Brand",
    "Nechta (o\u0027n tagacha)":  "How many (under 10)",
    "Nechta (ou{2018}n tagacha)":  "How many (under 10)",
    "Lag\u0027mon":  "Noodles",
    "Lagu{2018}mon":  "Noodles",
    "Oila a\u0027zosi uchun hisoblagich":  "Measure word for family members",
    "Oila au{2018}zosi uchun hisoblagich":  "Measure word for family members",
    "Marhamat":  "Please",
    "Qilmang":  "Do not / Don\u0027t",
    "Uyqu":  "Sleep",
    "Rozi bo\u0027lmoq":  "To agree",
    "Rozi bou{2018}lmoq":  "To agree",
    "Narsa, buyum":  "Thing / Item",
    "O\u0027rta maktab":  "Middle school",
    "Ou{2018}rta maktab":  "Middle school",
    "Izlanmoq, tadqiq etmoq":  "To explore / Search",
    "Madaniyat":  "Culture",
    "Byudjet":  "Budget",
    "...dan tashqari":  "Besides / Except for",
    "Marom, ritm":  "Rhythm / Pace",
    "Qadrlamoq, asramoq":  "To cherish / Treasure",
    "Mukofot puli":  "Bonus",
    "Sovuq":  "Cold",
    "Xulosa":  "Conclusion",
    "Halol, rostgo\u0027y":  "Honest",
    "Halol, rostgou{2018}y":  "Honest",
    "Rezyume (CV)":  "Resume / CV",
    "Qadamni mustahkam bosmoq (amaliy)":  "Down-to-earth / Practical",
    "Talab qilmoq":  "To require / Demand",
    "Rivojlanmoq":  "To develop",
    "Kunduzgi vaqt":  "Daytime",
    "Kino (film)":  "Movie (film)",
    "Butun diqqatni jamlamoq":  "Fully focused / Concentrated",
    "Tashqarida":  "Outside",
    "Narsa hisoblagichi":  "Measure word for clothes/items",
    "Shifokorga ko\u0027rinmoq":  "To see a doctor",
    "Shifokorga kou{2018}rinmoq":  "To see a doctor",
    "Ham":  "Also / Too",
    "Saqlab qolmoq":  "To preserve / Conserve",
    "Yil":  "Year",
    "Sifat, fazilat":  "Quality / Character",
    "Bu":  "This",
    "Bepul":  "Free of charge",
    "To\u0027g\u0027ri":  "Correct / Right",
    "Tou{2018}gu{2018}ri":  "Correct / Right",
    "Intellektual, aqlli":  "Intelligent / Smart",
    "Mag\u0027rur; faxrlanmoq":  "Proud / Pride",
    "Magu{2018}rur; faxrlanmoq":  "Proud / Pride",
    "Meros":  "Heritage / Legacy",
    "Odob, xushmuomalalik":  "Politeness / Manners",
    "Chuchvara":  "Dumplings",
    "Qonuniyat":  "Regularity / Law",
    "Mevalar":  "Fruits",
    "Manti":  "Steamed stuffed bun (baozi)",
    "Boshdan kechirmoq":  "To undergo / Experience",
    "Tushunmoq":  "To understand",
    "Odat; o\u0027rganib qolmoq":  "Habit / Custom",
    "Odat; ou{2018}rganib qolmoq":  "Habit / Custom",
    "Minnatdor bo\u0027lmoq":  "Grateful / Thankful",
    "Minnatdor bou{2018}lmoq":  "Grateful / Thankful",
    "Istiqbol, kelajak manzarasi":  "Prospects / Vision",
    "Televizor":  "Television",
    "Xatar, risk":  "Risk / Hazard",
    "Tamaddun, sivilizatsiya":  "Civilization",
    "Haqiqat":  "Really / True",
    "Ko\u0027rsatuv, dastur":  "TV program / Show",
    "Kou{2018}rsatuv, dastur":  "TV program / Show",
    "Xohlamoq, o\u0027ylamoq":  "To want / Think",
    "Xohlamoq, ou{2018}ylamoq":  "To want / Think",
    "Virtual":  "Virtual",
    "Telefon":  "Phone / Cell phone",
    "Ichmoq":  "To drink",
    "Kalit":  "Key",
    "Katta":  "Big / Large",
    "Raqib":  "Opponent / Rival",
    "Tadqiq qilmoq":  "To research / Study",
    "Tinch":  "Quiet / Peaceful",
    "Tasvirlamoq":  "To describe / Depict",
    "Mazali":  "Delicious",
    "Siz (hurmatli)":  "You (polite)",
    "O\u0027ynash":  "To play",
    "Ou{2018}ynash":  "To play",
    "Tendensiya, yo\u0027nalish":  "Trend / Tendency",
    "Tendensiya, you{2018}nalish":  "Trend / Tendency",
    "Jarayon":  "Process",
    "Muloyim":  "Gentle / Mild",
    "Yo\u0027q":  "No / Not have",
    "You{2018}q":  "No / Not have",
    "Supermarket":  "Supermarket",
    "Jiddiy, qunt bilan":  "Serious / Conscientious",
    "Kompaniya":  "Company",
    "Tush":  "Noon",
    "Politsiya":  "Police",
    "Uy ijaraga olmoq":  "To rent an apartment",
    "Narx":  "Price",
    "Moslashmoq":  "To adapt / Adjust",
    "Mijoz":  "Client / Customer",
    "Sabab":  "Reason / Cause",
    "Qulay":  "Convenient",
    "Issiq":  "Hot",
    "Munozara qilmoq, bahslashmoq":  "To debate / Argue",
    "Qulay imkoniyat":  "Favorable opportunity",
    "Ijro etmoq":  "To execute / Implement",
    "Chap":  "Left",
    "Taomnoma (menyu)":  "Menu",
    "Do\u0027stona":  "Friendly",
    "Dou{2018}stona":  "Friendly",
    "Subyektiv":  "Subjective",
    "Umumiy kelishuv":  "Consensus",
    "Mutaxassislik":  "Major / Specialty",
    "Mashina":  "Car / Vehicle",
    "Ozmoq, vazn tashlamoq":  "To lose weight",
    "Tovon to\u0027lamoq":  "To compensate",
    "Tovon tou{2018}lamoq":  "To compensate",
    "Tanishmoq":  "To get acquainted",
    "Biz":  "We / Us",
    "Ochiq havo":  "Sunny day / Clear",
    "Oldini olmoq":  "To prevent",
    "Odamlar":  "People / Person",
    "Emas":  "Not",
    "Kredit karta":  "Credit card",
    "Strategiya, taktika":  "Strategy / Tactic",
    "Adolatli":  "Fair / Just",
    "Sabrsizlik bilan kutmoq":  "Cannot wait / Eagerly awaiting",
    "Yaxshilamoq":  "To improve / Ameliorate",
    "Mukammal":  "Perfect",
    "Quvnoq, baxtli":  "Happy / Joyful",
    "Rejalashtirmoq":  "To plan / Intend",
    "Sizlar":  "You all",
    "Ilhom":  "Inspiration",
    "Roman, qissa":  "Novel / Fiction",
    "Tanishtirmoq":  "To introduce",
    "Universitet talabasi":  "College student",
    "Uzoq":  "Far",
    "Rioya qilmoq":  "To abide by / Follow",
    "Opasi":  "Elder sister",
    "Atrof":  "Surroundings / Around",
    "Suzmoq":  "To swim",
    "U yerda":  "There",
    "Tirishqoq; harakat qilmoq":  "Hardworking / Diligent",
    "Salom":  "Hello",
    "Tana, sog\u0027liq":  "Body / Health",
    "Tana, sogu{2018}liq":  "Body / Health",
    "Ko\u0027ylak (erkaklar)":  "Shirt",
    "Kou{2018}ylak (erkaklar)":  "Shirt",
    "Bag\u0027rikeng":  "Tolerant / Forgiving",
    "Bagu{2018}rikeng":  "Tolerant / Forgiving",
    "Mamnun bo\u0027lmoq":  "Satisfied / Pleased",
    "Mamnun bou{2018}lmoq":  "Satisfied / Pleased",
    "Foyda, daromad":  "Profit",
    "San\u0027at":  "Art",
    "Sanu{2018}at":  "Art",
    "Sana":  "Date / Number",
    "Raqobat":  "Competition",
    "Kitob o\u0027qimoq":  "To read books",
    "Kitob ou{2018}qimoq":  "To read books",
    "Aytib bermoq":  "To tell",
    "Hisoblagich":  "Measure word",
    "Musobaqa":  "Match / Competition",
    "Asos, poydevor":  "Foundation / Basis",
    "Suhbat (intervyu)":  "Interview",
    "Ommaviy axborot vositalari":  "Mass media",
    "Shart-sharoit":  "Condition / Terms",
    "Stol":  "Table / Desk",
    "Van Fan (ism)":  "Wang Fang (Name)",
    "Vaqt":  "Time",
    "Tabiatni asrash":  "Environmental protection",
    "Natija":  "Result / Outcome",
    "Taqsimlamoq":  "To distribute / Allocate",
    "Kamaymoq":  "To decrease / Reduce",
    "Yuan (pul)":  "Yuan (money)",
    "Bir oz, ozgina":  "A bit / Briefly",
    "Shoshilmoq, xavotirlanmoq":  "Anxious / In a hurry",
    "Hayajonlanmoq":  "Nervous / Excited",
    "Mezon, standart":  "Standard / Criterion",
    "O\u0027ziga xos, betakror":  "Unique / Distinctive",
    "Ou{2018}ziga xos, betakror":  "Unique / Distinctive",
    "Muzokara olib bormoq":  "To negotiate",
    "Haqiqatan ham, kutilganidek":  "As expected / Sure enough",
    "Tiqilinch, gavjum":  "Crowded / Congested",
    "Oqko\u0027ngil, mehribon":  "Kind-hearted / Benevolent",
    "Oqkou{2018}ngil, mehribon":  "Kind-hearted / Benevolent",
    "Tabiiy hol, shunday bo\u0027lishi kerak":  "Take it for granted / Natural",
    "Tabiiy hol, shunday bou{2018}lishi kerak":  "Take it for granted / Natural",
    "Kamtar":  "Modest / Humble",
    "Berish; uchun":  "To give / For",
    "Reklama":  "Advertisement",
    "Ular":  "They / Them",
    "Sifat":  "Quality",
    "Ta\u0027sirlanmoq":  "To be touched / Moved",
    "Tau{2018}sirlanmoq":  "To be touched / Moved",
    "Xitoy tili":  "Chinese language",
    "Marhamat; taklif qilmoq":  "Please / To invite",
    "Muloqot qilmoq, almashmoq":  "To exchange / Communicate",
    "Tushunmovchilik":  "Misunderstanding",
    "Nam":  "Humid / Moist",
    "Kam (juda ko\u0027p)":  "Few / Little",
    "Kam (juda kou{2018}p)":  "Few / Little",
    "Universitet":  "University / College",
    "Maktab o\u0027quvchisi":  "Elementary student",
    "Maktab ou{2018}quvchisi":  "Elementary student",
    "Fikr, mulohaza":  "Opinion / View",
    "Xursand":  "Happy / Glad",
    "Belgish":  "Possessive particle (\u0027s)",
    "Poyezd":  "Train",
    "Millat":  "Nationality / Ethnic group",
    "Cho\u0027l, sahro":  "Desert",
    "Chou{2018}l, sahro":  "Desert",
    "O\u0027rmon":  "Forest",
    "Ou{2018}rmon":  "Forest",
    "Achchiq":  "Spicy",
    "Ertaga":  "Tomorrow",
    "Inqiroz":  "Crisis",
    "Samaradorlik":  "Efficiency",
    "Sinab ko\u0027rmoq":  "To try on / Test",
    "Sinab kou{2018}rmoq":  "To try on / Test",
    "Isbotlamoq":  "To prove",
    "Kitob uchun hisoblagich":  "Measure word for books",
    "Oila a\u0027zolari":  "Family members",
    "Oila au{2018}zolari":  "Family members",
    "Xabar, yangilik":  "Message / News"
};

var EC_EN_WORDS = {
    'salom': 'hello', 'rahmat': 'thank you', 'xayr': 'goodbye', 'iltimos': 'please', 'kechirasiz': 'excuse me',
    'men': 'I / me', 'sen': 'you', 'siz': 'you (polite)', 'u': 'he / she / it', 'biz': 'we', 'ular': 'they',
    'ota': 'father', 'dada': 'dad', 'ona': 'mother', 'aka': 'elder brother', 'uka': 'younger brother', 'opa': 'elder sister', 'singil': 'younger sister',
    'bola': 'child', 'farzand': 'child', 'o‘g‘il': 'son', 'qiz': 'daughter / girl', 'odam': 'person', 'kishi': 'person', 'inson': 'human',
    'ayol': 'woman', 'erkak': 'man', 'do‘st': 'friend', 'ustoz': 'teacher', 'o‘qituvchi': 'teacher', 'talaba': 'student', 'o‘quvchi': 'pupil',
    'shifokor': 'doctor', 'suv': 'water', 'choy': 'tea', 'ovqat': 'food / meal', 'taom': 'dish', 'guruch': 'rice', 'non': 'bread',
    'meva': 'fruit', 'olma': 'apple', 'sut': 'milk', 'go‘sht': 'meat', 'baliq': 'fish', 'tuxum': 'egg', 'qahva': 'coffee',
    'uy': 'home / house', 'xona': 'room', 'eshik': 'door', 'deraza': 'window', 'maktab': 'school', 'kasalxona': 'hospital',
    'do‘kon': 'shop', 'restoran': 'restaurant', 'oshxona': 'kitchen / canteen', 'kutubxona': 'library', 'shahar': 'city', 'mamlakat': 'country', 'davlat': 'country',
    'xitoy': 'China', 'pekin': 'Beijing', 'yo‘l': 'road / way', 'ko‘cha': 'street', 'bekat': 'station', 'aeroport': 'airport',
    'samolyot': 'airplane', 'poyezd': 'train', 'taksi': 'taxi', 'mashina': 'car', 'avtobus': 'bus',
    'kitob': 'book', 'daftar': 'notebook', 'qalam': 'pencil', 'so‘z': 'word', 'harf': 'character', 'iyeroglif': 'character', 'til': 'language', 'nutq': 'speech',
    'gap': 'sentence', 'savol': 'question', 'javob': 'answer', 'dars': 'lesson', 'imtihon': 'exam', 'test': 'test',
    'ish': 'work / job', 'pul': 'money', 'vaqt': 'time', 'soat': 'hour / clock', 'daqiqa': 'minute', 'kun': 'day', 'bugun': 'today',
    'ertaga': 'tomorrow', 'kecha': 'yesterday', 'ertalab': 'morning', 'tushlik': 'lunch', 'kechqurun': 'evening',
    'hafta': 'week', 'oy': 'month / moon', 'yil': 'year', 'hozir': 'now', 'keyin': 'later / after', 'oldin': 'before', 'avval': 'first',
    'quyosh': 'sun', 'osmon': 'sky', 'yomg‘ir': 'rain', 'qor': 'snow', 'shamol': 'wind', 'bulut': 'cloud',
    'olov': 'fire', 'yer': 'earth / ground', 'tuproq': 'soil', 'tog‘': 'mountain', 'daryo': 'river', 'o‘rmon': 'forest', 'daraxt': 'tree', 'yog‘och': 'wood',
    'o‘t': 'grass', 'gul': 'flower', 'o‘simlik': 'plant', 'hayvon': 'animal', 'it': 'dog', 'mushuk': 'cat', 'ot': 'horse', 'qush': 'bird',
    'qo‘l': 'hand', 'oyoq': 'foot / leg', 'bosh': 'head', 'ko‘z': 'eye', 'quloq': 'ear', 'og‘iz': 'mouth', 'yurak': 'heart', 'qalb': 'heart',
    'katta': 'big / large', 'kichik': 'small / little', 'ko‘p': 'many / much', 'oz': 'few / little', 'yaxshi': 'good / well', 'yomon': 'bad',
    'yangi': 'new', 'eski': 'old', 'issiq': 'hot / warm', 'sovuq': 'cold', 'baland': 'high / tall', 'past': 'low',
    'uzun': 'long', 'qisqa': 'short', 'tez': 'fast / quick', 'sekin': 'slow', 'oson': 'easy', 'qiyin': 'difficult',
    'yaqin': 'near / close', 'uzoq': 'far / distant', 'chiroyli': 'beautiful', 'toza': 'clean / clear', 'tiniq': 'clear', 'yorug‘': 'bright', 'qorong‘i': 'dark',
    'qizil': 'red', 'oq': 'white', 'qora': 'black', 'ko‘k': 'blue', 'yashil': 'green', 'sariq': 'yellow',
    'shirin': 'sweet', 'achchiq': 'spicy / bitter', 'sho‘r': 'salty', 'arzon': 'cheap', 'qimmat': 'expensive',
    'xursand': 'happy', 'baxtli': 'fortunate', 'charchagan': 'tired', 'band': 'busy', 'tinch': 'peaceful / safe', 'xavfsiz': 'safe',
    'bir': 'one', 'ikki': 'two', 'uch': 'three', 'to‘rt': 'four', 'besh': 'five', 'olti': 'six', 'yetti': 'seven', 'sakkiz': 'eight', 'to‘qqiz': 'nine', 'o‘n': 'ten', 'yuz': 'hundred', 'ming': 'thousand',
    'ha': 'yes', 'yo‘q': 'no', 'emas': 'not', 'bor': 'have / exist', 'juda': 'very', 'eng': 'most', 'ham': 'also', 'va': 'and', 'yoki': 'or', 'lekin': 'but', 'ammo': 'however',
    'uchun': 'for', 'bilan': 'with', 'ichida': 'inside', 'ustida': 'above / on', 'ostida': 'under', 'oldida': 'in front', 'orqasida': 'behind',
    'bu': 'this', 'shu': 'this / that', 'u yer': 'there', 'qayer': 'where', 'qayerda': 'where', 'kim': 'who', 'nima': 'what', 'qanday': 'how', 'qancha': 'how much', 'nechta': 'how many', 'qachon': 'when',
    'bormoq': 'to go', 'kelmoq': 'to come', 'ketmoq': 'to leave', 'qaytmoq': 'to return', 'kirmoq': 'to enter', 'chiqmoq': 'to exit',
    'yemoq': 'to eat', 'ichmoq': 'to drink', 'uxlamoq': 'to sleep', 'turmoq': 'to stand / get up', 'o‘tirmoq': 'to sit', 'yurmoq': 'to walk', 'yugurmoq': 'to run', 'uchmoq': 'to fly', 'suzmoq': 'to swim',
    'ko‘rmoq': 'to see', 'qaramoq': 'to look', 'eshitmoq': 'to hear', 'tinglamoq': 'to listen', 'gapirmoq': 'to speak', 'aytmoq': 'to say', 'so‘ramoq': 'to ask', 'javob bermoq': 'to answer',
    'o‘qimoq': 'to read / study', 'o‘rganmoq': 'to learn', 'yozmoq': 'to write', 'bilmoq': 'to know', 'tushunmoq': 'to understand', 'o‘ylamoq': 'to think', 'eslamoq': 'to remember',
    'xohlamoq': 'to want', 'yoqtirmoq': 'to like', 'sevmoq': 'to love', 'ishlamoq': 'to work', 'dam olmoq': 'to rest', 'o‘ynamoq': 'to play',
    'sotib olmoq': 'to buy', 'sotmoq': 'to sell', 'bermoq': 'to give', 'olmoq': 'to take', 'ochmoq': 'to open', 'yopmoq': 'to close',
    'kutmoq': 'to wait', 'topmoq': 'to find', 'qidirmoq': 'to search', 'yordam bermoq': 'to help', 'tayyorlamoq': 'to prepare', 'pishirmoq': 'to cook', 'yuvmoq': 'to wash', 'kiymoq': 'to wear'
};
var EC_KY_PHRASES = {
    'Assalomu alaykum ustoz!': 'Саламатсызбы, мугалим!',
    'Ustoz, iltimos yana bir marta qaytara olasizmi?': 'Мугалим, сураныч дагы бир жолу кайталап коёсузбу?',
    'Bu so‘z nima degani?': 'Бул сөз эмнени билдирет?',
    'Kechirasiz, bu qanday o‘qiladi?': 'Кечиресиз, бул кантип окулат?',
    'Men tushunmadim.': 'Мен түшүнгөн жокмун.',
    'Iltimos, sal sekinroq gapiring.': 'Сураныч, бир аз жайыраак сүйлөңүз.',
    'Bugungi uyga vazifa nima?': 'Бүгүнкү үй тапшырма эмне?',
    'Achchiq solmang! (Xitoyda eng muhim ibora)': 'Ачуу кошпоңуз! (Кытайдагы эң маанилүү сөз)',
    'Salgina achchiq bo‘lsa yetadi.': 'Бир аз эле ачуу болсо жетет.',
    'Bu qancha turadi?': 'Бул канча турат?',
    'Olib ketasizmi yoki shu yerda yeysizmi?': 'Алып кетесизби же ушул жерден жейсизби?',
    'Olib ketaman (konteynerga solib bering).': 'Алып кетем (контейнерге салып бериңиз).',
    'Kechirasiz, mol go‘shti bormi?': 'Кечиресиз, уй эти барбы?',
    'Men cho‘chqa go‘shti yemayman (Halol).': 'Мен чочко этин жебейм (Адал).',
    'WeChat orqali to‘lasam bo‘ladimi?': 'WeChat аркылуу төлөсөм болобу?',
    'Men sizning QR kodingizni skanerlaymi yoki siz menikinimi?': 'Мен сиздин QR кодуңузду сканерлейинби же сиз меникинби?',
    'Men siznikini skanerlayman.': 'Мен сиздикин сканерлейм.',
    'Posilka yetib keldi, eshik oldiga qo‘yib keting.': 'Посылка келди, эшиктин алдына коюп кетиңиз.',
    'Pochta qutisidan olish kodi nechchi?': 'Почта кутусунан алуу коду канча?',
    'Sal arzonroq qilib bera olasizmi?': 'Бир аз арзаныраак кылып бере аласызбы?',
    'Haydovchi aka, mana shu manzilga boring.': 'Айдоочу байке, ушул дарекке барыңыз.',
    'Iltimos, taksi hisoblagichini (schetchik) yoqing.': 'Сураныч, такси эсептегичин күйгүзүңүз.',
    'Oldinroqda chetga to‘xtating.': 'Алдыраактан четке токтотуңуз.',
    'Metro bekati qayerda?': 'Метро бекети кайсы жерде?',
    'Aeroportgacha taxminan qancha vaqt ketadi?': 'Аэропортко чейин болжол менен канча убакыт кетет?',
    'Shu yerda tushaman, rahmat!': 'Ушул жерден түшөм, рахмат!',
    'Qolip (Pattern):': 'Үлгү (Pattern):',
    'Qoida formulasi:': 'Эреже формуласы:',
    'Talaffuz mashqi (Bosib eshiting):': 'Айтылыш машыгуусу (Басып угуңуз):',
    'Solishtirish': 'Салыштыруу',
    'Jonli Misol:': 'Жандуу Мисал:',
    'Laoshi Maslahati:': 'Лаоши Кеңеши:',
    'AI Tahlil': 'AI Талдоо',
    'Keyingi harf →': 'Кийинки тамга →'
};

var EC_KY_WORDS = {
    'salom': 'салам', 'xayr': 'кош болуңуз', 'rahmat': 'рахмат', 'iltimos': 'сураныч', 'kechirasiz': 'кечиресиз',
    'men': 'мен', 'sen': 'сен', 'siz': 'сиз', 'u': 'ал', 'biz': 'биз', 'ular': 'алар',
    'ota': 'ата', 'dada': 'ата', 'ona': 'эне', 'aka': 'ага', 'uka': 'ини', 'opa': 'эже', 'singil': 'карындаш',
    'bola': 'бала', 'farzand': 'перзент', 'o‘g‘il': 'уул', 'qiz': 'кыз', 'odam': 'адам', 'kishi': 'киши', 'inson': 'инсан',
    'ayol': 'аял', 'erkak': 'эркек', 'do‘st': 'дос', 'ustoz': 'мугалим', 'o‘qituvchi': 'мугалим', 'o‘quvchi': 'окуучу', 'talaba': 'студент',
    'shifokor': 'дарыгер', 'suv': 'суу', 'choy': 'чай', 'ovqat': 'тамак', 'taom': 'тамак', 'guruch': 'күрүч', 'non': 'нан',
    'meva': 'жемиш', 'olma': 'алма', 'sut': 'сүт', 'go‘sht': 'эт', 'baliq': 'балык', 'tuxum': 'жумуртка', 'qahva': 'кофе',
    'uy': 'үй', 'xona': 'бөлмө', 'eshik': 'эшик', 'deraza': 'терезе', 'maktab': 'мектеп', 'kasalxona': 'оорукана',
    'do‘kon': 'дүкөн', 'restoran': 'ресторан', 'oshxona': 'ашкана', 'kutubxona': 'китепкана', 'shahar': 'шаар', 'mamlakat': 'өлкө', 'davlat': 'мамлекет',
    'xitoy': 'Кытай', 'pekin': 'Пекин', 'yo‘l': 'жол', 'ko‘cha': 'көчө', 'bekat': 'бекет', 'aeroport': 'аэропорт',
    'samolyot': 'учак', 'poyezd': 'поезд', 'taksi': 'такси', 'mashina': 'унаа', 'avtobus': 'автобус',
    'kitob': 'китеп', 'daftar': 'дептер', 'qalam': 'калем', 'so‘z': 'сөз', 'harf': 'тамга', 'iyeroglif': 'иероглиф', 'til': 'тил', 'nutq': 'кеп',
    'gap': 'сүйлөм', 'savol': 'суроо', 'javob': 'жооп', 'dars': 'сабак', 'imtihon': 'экзамен', 'test': 'тест',
    'ish': 'жумуш', 'pul': 'акча', 'vaqt': 'убакыт', 'soat': 'саат', 'daqiqa': 'мүнөт', 'kun': 'күн', 'bugun': 'бүгүн',
    'ertaga': 'эртең', 'kecha': 'кечээ', 'ertalab': 'эртең менен', 'tushlik': 'түшкү маал', 'kechqurun': 'кечинде',
    'hafta': 'апта', 'oy': 'ай', 'yil': 'жыл', 'hozir': 'азыр', 'keyin': 'кийин', 'oldin': 'мурун', 'avval': 'алгач',
    'quyosh': 'күн', 'osmon': 'асман', 'yomg‘ir': 'жамгыр', 'qor': 'кар', 'shamol': 'шамал', 'bulut': 'булут',
    'olov': 'от', 'yer': 'жер', 'tuproq': 'топурак', 'tog‘': 'тоо', 'daryo': 'дарыя', 'o‘rmon': 'токой', 'daraxt': 'дарак', 'yog‘och': 'жыгач',
    'o‘t': 'чөп', 'gul': 'гүл', 'o‘simlik': 'өсүмдүк', 'hayvon': 'жаныбар', 'it': 'ит', 'mushuk': 'мышык', 'ot': 'ат', 'qush': 'куш',
    'qo‘l': 'кол', 'oyoq': 'бут', 'bosh': 'баш', 'ko‘z': 'көз', 'quloq': 'кулак', 'og‘iz': 'ооз', 'yurak': 'жүрөк', 'qalb': 'жүрөк',
    'katta': 'чоң', 'kichik': 'кичине', 'ko‘p': 'көп', 'oz': 'аз', 'yaxshi': 'жакшы', 'yomon': 'жаман',
    'yangi': 'жаңы', 'eski': 'эски', 'issiq': 'ысык', 'sovuq': 'суук', 'baland': 'бийик', 'past': 'жапыз',
    'uzun': 'узун', 'qisqa': 'кыска', 'tez': 'тез', 'sekin': 'жай', 'oson': 'оңой', 'qiyin': 'кыйын',
    'yaqin': 'жакын', 'uzoq': 'алыс', 'chiroyli': 'сулуу', 'toza': 'таза', 'tiniq': 'тунук', 'yorug‘': 'жарык', 'qorong‘i': 'караңгы',
    'qizil': 'кызыл', 'oq': 'ак', 'qora': 'кара', 'ko‘k': 'көк', 'yashil': 'жашыл', 'sariq': 'сары',
    'shirin': 'таттуу', 'achchiq': 'ачуу', 'sho‘r': 'туздуу', 'arzon': 'арзан', 'qimmat': 'кымбат',
    'xursand': 'кубанычта', 'baxtli': 'бактылуу', 'charchagan': 'чарчаган', 'band': 'бош эмес', 'tinch': 'тынч', 'xavfsiz': 'коопсуз',
    'bir': 'бир', 'ikki': 'эки', 'uch': 'үч', 'to‘rt': 'төрт', 'besh': 'беш', 'olti': 'алты', 'yetti': 'жети', 'sakkiz': 'сегиз', 'to‘qqiz': 'тогуз', 'o‘n': 'он', 'yuz': 'жүз', 'ming': 'миң',
    'ha': 'ооба', 'yo‘q': 'жок', 'emas': 'эмес', 'bor': 'бар', 'juda': 'абдан', 'eng': 'эң', 'ham': 'да', 'va': 'жана', 'yoki': 'же', 'lekin': 'бирок', 'ammo': 'бирок',
    'uchun': 'үчүн', 'bilan': 'менен', 'ichida': 'ичинде', 'ustida': 'үстүндө', 'ostida': 'астында', 'oldida': 'алдында', 'orqasida': 'артында',
    'bu': 'бул', 'shu': 'ушул', 'u yer': 'тигил жер', 'qayer': 'кайсы жер', 'qayerda': 'кайда', 'kim': 'ким', 'nima': 'эмне', 'qanday': 'кандай', 'qancha': 'канча', 'nechta': 'канча', 'qachon': 'качан',
    'bormoq': 'баруу', 'kelmoq': 'келүү', 'ketmoq': 'кетүү', 'qaytmoq': 'кайтуу', 'kirmoq': 'кирүү', 'chiqmoq': 'чыгуу',
    'yemoq': 'жеш', 'ichmoq': 'ичүү', 'uxlamoq': 'уктоо', 'turmoq': 'туруу', 'o‘tirmoq': 'отуруу', 'yurmoq': 'басуу', 'yugurmoq': 'чуркоо', 'uchmoq': 'учуу', 'suzmoq': 'сүзүү',
    'ko‘rmoq': 'көрүү', 'qaramoq': 'кароо', 'eshitmoq': 'угуу', 'tinglamoq': 'угуу', 'gapirmoq': 'сүйлөө', 'aytmoq': 'айтуу', 'so‘ramoq': 'суроо', 'javob bermoq': 'жооп берүү',
    'o‘qimoq': 'окуу', 'o‘rganmoq': 'үйрөнүү', 'yozmoq': 'жазуу', 'bilmoq': 'билүү', 'tushunmoq': 'түшүнүү', 'o‘ylamoq': 'ойлоо', 'eslamoq': 'эстөө',
    'xohlamoq': 'каалоо', 'yoqtirmoq': 'жактыруу', 'sevmoq': 'сүйүү', 'ishlamoq': 'иштөө', 'dam olmoq': 'эс алуу', 'o‘ynamoq': 'ойноо',
    'sotib olmoq': 'сатып алуу', 'sotmoq': 'сатуу', 'bermoq': 'берүү', 'olmoq': 'алуу', 'ochmoq': 'ачуу', 'yopmoq': 'жабуу',
    'kutmoq': 'күтүү', 'topmoq': 'табуу', 'qidirmoq': 'издөө', 'yordam bermoq': 'жардам берүү', 'tayyorlamoq': 'даярдоо', 'pishirmoq': 'бышыруу', 'yuvmoq': 'жуу', 'kiymoq': 'кийүү'
};

function uzLatToCyrl(str, isKyrgyz) {
    if (!str) return '';
    var s = String(str)
        .replace(/o['‘’ʻ`]/gi, function (m) { return m[0] === 'O' ? (isKyrgyz ? 'Ө' : 'Ў') : (isKyrgyz ? 'ө' : 'ў'); })
        .replace(/g['‘’ʻ`]/gi, function (m) { return m[0] === 'G' ? (isKyrgyz ? 'Г' : 'Ғ') : (isKyrgyz ? 'г' : 'ғ'); })
        .replace(/sh/gi, function (m) { return m[0] === 'S' ? 'Ш' : 'ш'; })
        .replace(/ch/gi, function (m) { return m[0] === 'C' ? 'Ч' : 'ч'; })
        .replace(/yo/gi, function (m) { return m[0] === 'Y' ? 'Ё' : 'ё'; })
        .replace(/yu/gi, function (m) { return m[0] === 'Y' ? 'Ю' : 'ю'; })
        .replace(/ya/gi, function (m) { return m[0] === 'Y' ? 'Я' : 'я'; })
        .replace(/ye/gi, function (m) { return m[0] === 'Y' ? 'Е' : 'е'; })
        .replace(/['‘’ʻ`]/g, isKyrgyz ? '' : 'ъ');
    var map = {
        'A':'А','a':'а','B':'Б','b':'б','D':'Д','d':'д','E':'Э','e':'е','F':'Ф','f':'ф',
        'G':'Г','g':'г','H':'Ҳ','h':'ҳ','I':'И','i':'и','J':'Ж','j':'ж','K':'К','k':'к',
        'L':'Л','l':'л','M':'М','m':'м','N':'Н','n':'н','O':'О','o':'о','P':'П','p':'п',
        'Q':'Қ','q':'қ','R':'Р','r':'р','S':'С','s':'с','T':'Т','t':'т','U':'У','u':'у',
        'V':'В','v':'в','X':'Х','x':'х','Y':'Й','y':'й','Z':'З','z':'з'
    };
    if (isKyrgyz) {
        map['H'] = 'Х'; map['h'] = 'х';
        map['Q'] = 'К'; map['q'] = 'к';
    }
    return s.replace(/[A-Za-z]/g, function (ch) { return map[ch] || ch; });
}

function trUz(str) {
    if (!str || typeof str !== 'string') return str || '';
    var lang = getAppLanguage();
    if (lang === 'uz') return str;
    if (lang === 'en') {
        if (typeof EC_EN_PHRASES !== 'undefined' && EC_EN_PHRASES[str]) return EC_EN_PHRASES[str];
        if (typeof EC_EN_VOCAB !== 'undefined' && EC_EN_VOCAB[str]) return EC_EN_VOCAB[str];
        var normStraight = str.replace(/[‘’ʻ`]/g, "'").trim();
        if (typeof EC_EN_PHRASES !== 'undefined' && EC_EN_PHRASES[normStraight]) return EC_EN_PHRASES[normStraight];
        if (typeof EC_EN_VOCAB !== 'undefined' && EC_EN_VOCAB[normStraight]) return EC_EN_VOCAB[normStraight];
        var normCurly = normStraight.replace(/'/g, '‘');
        if (typeof EC_EN_PHRASES !== 'undefined' && EC_EN_PHRASES[normCurly]) return EC_EN_PHRASES[normCurly];
        if (typeof EC_EN_VOCAB !== 'undefined' && EC_EN_VOCAB[normCurly]) return EC_EN_VOCAB[normCurly];

        // Tone badges & contours
        var toneMatch = str.match(/^(\d+)-ton(?:\s*\(([^)]+)\))?(?::\s*(.+))?$/i);
        if (toneMatch) {
            var tNum = toneMatch[1];
            var suffix = tNum === '1' ? '1st' : tNum === '2' ? '2nd' : tNum === '3' ? '3rd' : tNum + 'th';
            var cn = toneMatch[2] ? ' (' + toneMatch[2] + ')' : '';
            var desc = toneMatch[3] ? ': ' + trUz(toneMatch[3]) : '';
            return suffix + ' tone' + cn + desc;
        }
        var pairMatch = str.match(/^(\d+)-ton\s*\+\s*(\d+)-ton(?:\s*\(([^)]+)\))?$/i);
        if (pairMatch) {
            var s1 = pairMatch[1] === '1' ? '1st' : pairMatch[1] === '2' ? '2nd' : pairMatch[1] === '3' ? '3rd' : pairMatch[1] + 'th';
            var s2 = pairMatch[2] === '1' ? '1st' : pairMatch[2] === '2' ? '2nd' : pairMatch[2] === '3' ? '3rd' : pairMatch[2] + 'th';
            var paren = pairMatch[3] ? ' (' + trUz(pairMatch[3]) + ')' : '';
            return s1 + ' tone + ' + s2 + ' tone' + paren;
        }

        var lowerStraight = normStraight.toLowerCase();
        if (typeof EC_EN_WORDS !== 'undefined' && EC_EN_WORDS[lowerStraight]) {
            var isCap = (str.charAt(0) === str.charAt(0).toUpperCase());
            var val = EC_EN_WORDS[lowerStraight];
            return isCap ? (val.charAt(0).toUpperCase() + val.slice(1)) : val;
        }
        var lowerCurly = normCurly.toLowerCase();
        if (typeof EC_EN_WORDS !== 'undefined' && EC_EN_WORDS[lowerCurly]) {
            var isCap = (str.charAt(0) === str.charAt(0).toUpperCase());
            var val = EC_EN_WORDS[lowerCurly];
            return isCap ? (val.charAt(0).toUpperCase() + val.slice(1)) : val;
        }

        var normEn = str;
        if (typeof EC_EN_WORDS !== 'undefined') {
            Object.keys(EC_EN_WORDS).sort(function (a, b) { return b.length - a.length; }).forEach(function (uzKey) {
                var enVal = EC_EN_WORDS[uzKey];
                var esc = uzKey.replace(/[.*+?^${}()|[\]\\]/g, '\\$&').replace(/['‘’ʻ`]/g, "['‘’ʻ`]");
                var re = new RegExp('(^|[^A-Za-z‘’ʻ`])(' + esc + ')(?=$|[^A-Za-z‘’ʻ`])', 'gi');
                normEn = normEn.replace(re, function (_, pre, matched) {
                    var isCap = matched[0] === matched[0].toUpperCase() && matched[0] !== matched[0].toLowerCase();
                    var out = isCap ? (enVal.charAt(0).toUpperCase() + enVal.slice(1)) : enVal;
                    return pre + out;
                });
            });
        }
        return normEn
            .replace(/(\d+)-ton/gi, '$1th tone')
            .replace(/1th tone/gi, '1st tone')
            .replace(/2th tone/gi, '2nd tone')
            .replace(/3th tone/gi, '3rd tone')
            .replace(/4th tone/gi, '4th tone');
    }
    if (lang === 'ky' && EC_KY_PHRASES[str]) return EC_KY_PHRASES[str];

    var isKy = (lang === 'ky');
    if (lang !== 'uz-cyrl' && !isKy) return str;

    // Protect HTML tags and Pinyin tokens with tone marks
    var saved = [];
    var work = str.replace(/<[^>]+>|[A-Za-z]*[āáǎàēéěèīíǐìōóǒòūúǔùǖǘǚǜü][A-Za-zāáǎàēéěèīíǐìōóǒòūúǔùǖǘǚǜü]*|\b(?:HSK|Lesson|XP|QR|WeChat|Pinyin|Hanzi|AI|Laoshi)\b/g, function (m) {
        saved.push(m);
        return '\u0001' + (saved.length - 1) + '\u0002';
    });

    if (isKy) {
        // Replace multi-word and single-word Uzbek vocabulary with Kyrgyz equivalents
        var normWork = work.replace(/[‘’ʻ`]/g, '‘');
        Object.keys(EC_KY_WORDS).sort(function (a, b) { return b.length - a.length; }).forEach(function (uzKey) {
            var kyVal = EC_KY_WORDS[uzKey];
            var esc = uzKey.replace(/[.*+?^${}()|[\]\\]/g, '\\$&').replace(/‘/g, "['‘’ʻ`]");
            var re = new RegExp('(^|[^A-Za-z‘’ʻ`])(' + esc + ')(?=$|[^A-Za-z‘’ʻ`])', 'gi');
            normWork = normWork.replace(re, function (_, pre, matched) {
                var isCap = matched[0] === matched[0].toUpperCase() && matched[0] !== matched[0].toLowerCase();
                var out = isCap ? (kyVal.charAt(0).toUpperCase() + kyVal.slice(1)) : kyVal;
                return pre + out;
            });
        });
        // Morphological suffix conversion: Uzbek infinitives -moq -> Kyrgyz -уу/-үү, plural -lar -> -лар/-лер
        normWork = normWork
            .replace(/moq\b/gi, 'уу')
            .replace(/(\d+)-ton/gi, '$1-тон')
            .replace(/bo['‘’ʻ`]lib/gi, 'болуп')
            .replace(/bo['‘’ʻ`]lsa/gi, 'болсо')
            .replace(/bo['‘’ʻ`]ladi/gi, 'болот')
            .replace(/bilan/gi, 'менен')
            .replace(/uchun/gi, 'үчүн')
            .replace(/qanday/gi, 'кандай')
            .replace(/qaysi/gi, 'кайсы')
            .replace(/nimani/gi, 'эмнени')
            .replace(/anglatadi/gi, 'билдирет')
            .replace(/bildiradi/gi, 'билдирет')
            .replace(/to['‘’ʻ`]g['‘’ʻ`]ri/gi, 'туура')
            .replace(/noto['‘’ʻ`]g['‘’ʻ`]ri/gi, 'туура эмес')
            .replace(/barakalla/gi, 'азаматсыз')
            .replace(/ajoyib/gi, 'сонун');
        work = normWork;
    }

    // Transliterate remaining Latin words (skipping protected placeholders)
    work = work.replace(/[^\u0001\u0002]+/g, function (seg) {
        if (/^\d+$/.test(seg)) return seg;
        return uzLatToCyrl(seg, isKy);
    });

    return work.replace(/\u0001(\d+)\u0002/g, function (_, idx) {
        return saved[parseInt(idx, 10)] || '';
    });
}

function applyAppLanguage() {
    var lang = getAppLanguage();
    document.documentElement.setAttribute('lang', lang === 'uz-cyrl' ? 'uz-Cyrl' : lang);
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
        el.textContent = t(el.dataset.i18n);
    });
    document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
        el.setAttribute('aria-label', t(el.dataset.i18nAria));
    });
    document.querySelectorAll('[data-i18n-ph]').forEach(function (el) {
        el.setAttribute('placeholder', t(el.dataset.i18nPh));
    });
    document.querySelectorAll('#appLanguageGroup .lang-chip').forEach(function (btn) {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });
    if (typeof syncProfileThemeUI === 'function') syncProfileThemeUI();
    syncReminderUI();
    if (typeof updateDashboardBentoUI === 'function') updateDashboardBentoUI();
    if (typeof updateLessonsHeader === 'function') updateLessonsHeader();
    if (typeof updatePracticeHubUI === 'function') updatePracticeHubUI();
    if (typeof updateHSKProgress === 'function') updateHSKProgress();
    if (typeof updateWeeklyStreakCalendar === 'function') updateWeeklyStreakCalendar();
    if (typeof renderLearnedWordsDrawer === 'function') renderLearnedWordsDrawer();
    if (typeof updateAchievements === 'function') updateAchievements();
    if (typeof generateLessonsGrid === 'function') generateLessonsGrid();
    if (typeof updateFlashcard === 'function') updateFlashcard();
    if (typeof updateQuiz === 'function') updateQuiz();
    if (typeof renderLessonVocabPreview === 'function') renderLessonVocabPreview();
    if (typeof updateLessonFlowUI === 'function') updateLessonFlowUI();
    if (typeof loadCanvasCharacter === 'function' && typeof canvasView !== 'undefined' && canvasView && canvasView.classList.contains('active')) loadCanvasCharacter();
    if (typeof renderToneContours === 'function') renderToneContours();
    if (typeof renderMinimalPairs === 'function') renderMinimalPairs();
    if (typeof renderSandhiRules === 'function') renderSandhiRules();
    if (typeof renderPinyinInitials === 'function') renderPinyinInitials();
    if (typeof renderPinyinFinals === 'function') renderPinyinFinals();
    if (typeof renderPinyinRules === 'function') renderPinyinRules();
    if (typeof renderSurvivalList === 'function') {
        var activeSurvTab = document.querySelector('#survivalCategoryTabs .subview-tab.active');
        renderSurvivalList(activeSurvTab ? activeSurvTab.dataset.survCat : 'classroom');
    }
    if (typeof renderRadicalsDirectory === 'function') renderRadicalsDirectory();
    if (typeof renderRadicalFormulas === 'function') renderRadicalFormulas();
    if (typeof loadRadicalQuizQuestion === 'function') loadRadicalQuizQuestion();
    if (typeof pfcDeck !== 'undefined' && pfcDeck && pfcDeck.length > 0 && typeof renderCurrentPfcCard === 'function') {
        renderCurrentPfcCard();
    }
}

// ---- Pinyin visibility & Hanzi size --------------------------------------------
function applyDisplayPrefs() {
    var pinyinMode = localStorage.getItem(EC_SETTINGS_KEYS.pinyin) === 'hide' ? 'hide' : 'show';
    var hanziSize = localStorage.getItem(EC_SETTINGS_KEYS.hanziSize) || 'medium';
    document.documentElement.setAttribute('data-pinyin', pinyinMode);
    document.documentElement.setAttribute('data-hanzi-size', hanziSize);
    document.querySelectorAll('#pinyinModeGroup .seg-chip').forEach(function (btn) {
        btn.classList.toggle('active', btn.dataset.pinyinMode === pinyinMode);
    });
    document.querySelectorAll('#hanziSizeGroup .seg-chip').forEach(function (btn) {
        btn.classList.toggle('active', btn.dataset.hanziSize === hanziSize);
    });
}

var EC_PINYIN_SELECTOR = '.pinyin, .sentence-pinyin, .vocab-preview-pinyin, .grammar-example-pinyin, .lw-pinyin, .pfc-pinyin, .sp-pinyin, .bt-pinyin';

// Tap a hidden pinyin to reveal it (works for dynamically rendered cards too)
document.addEventListener('click', function (e) {
    if (document.documentElement.getAttribute('data-pinyin') !== 'hide') return;
    var el = e.target.closest && e.target.closest(EC_PINYIN_SELECTOR);
    if (el && !el.classList.contains('pinyin-revealed')) {
        el.classList.add('pinyin-revealed');
        e.stopPropagation();
        e.preventDefault();
    }
}, true);

// ---- Daily goal (synced with profileData.dailyGoal) ---------------------------
function getProfileDataSafe() {
    try {
        return JSON.parse(localStorage.getItem('profileData')) || { username: 'Chinese Learner', avatar: '👤', dailyGoal: 10 };
    } catch (err) {
        return { username: 'Chinese Learner', avatar: '👤', dailyGoal: 10 };
    }
}

function syncDailyGoalUI() {
    var goal = String(getProfileDataSafe().dailyGoal || 10);
    document.querySelectorAll('#dailyGoalGroup .seg-chip').forEach(function (btn) {
        btn.classList.toggle('active', btn.dataset.goal === goal);
    });
    var display = document.getElementById('dailyGoalDisplay');
    if (display) display.textContent = goal;
}

function setDailyGoal(goal) {
    var data = getProfileDataSafe();
    data.dailyGoal = parseInt(goal, 10) || 10;
    localStorage.setItem('profileData', JSON.stringify(data));
    syncDailyGoalUI();
    var input = document.getElementById('dailyGoalInput');
    if (input && input.querySelector('option[value="' + data.dailyGoal + '"]')) input.value = String(data.dailyGoal);
}

// ---- Daily reminder ------------------------------------------------------------
var ecReminderTimer = null;

function syncReminderUI() {
    var toggle = document.getElementById('reminderToggle');
    var timeInput = document.getElementById('reminderTimeInput');
    var status = document.getElementById('reminderStatusText');
    var on = localStorage.getItem(EC_SETTINGS_KEYS.reminderOn) === '1';
    var time = localStorage.getItem(EC_SETTINGS_KEYS.reminderTime) || '20:00';
    if (toggle) toggle.checked = on;
    if (timeInput) timeInput.value = time;
    if (status) status.textContent = on ? t('settings.reminderOn', { time: time }) : t('settings.reminderHint');
}

function hasStudiedToday() {
    try {
        var dp = JSON.parse(localStorage.getItem('dailyProgress'));
        return !!(dp && dp.date === new Date().toDateString() && (dp.xp > 0 || dp.traces > 0));
    } catch (err) {
        return false;
    }
}

function fireStudyReminder() {
    var today = new Date().toDateString();
    if (localStorage.getItem(EC_SETTINGS_KEYS.reminderLast) === today) return;
    if (hasStudiedToday()) return;
    if (!('Notification' in window) || Notification.permission !== 'granted') return;
    localStorage.setItem(EC_SETTINGS_KEYS.reminderLast, today);
    var options = { body: t('reminder.body'), icon: 'assets/icon-192.png', badge: 'assets/icon-192.png', tag: 'easy-chinese-daily' };
    if (navigator.serviceWorker && navigator.serviceWorker.ready) {
        navigator.serviceWorker.ready
            .then(function (reg) { return reg.showNotification(t('reminder.title'), options); })
            .catch(function () { try { new Notification(t('reminder.title'), options); } catch (e) {} });
    } else {
        try { new Notification(t('reminder.title'), options); } catch (e) {}
    }
}

function scheduleStudyReminder() {
    if (ecReminderTimer) { clearTimeout(ecReminderTimer); ecReminderTimer = null; }
    if (localStorage.getItem(EC_SETTINGS_KEYS.reminderOn) !== '1') return;
    var parts = (localStorage.getItem(EC_SETTINGS_KEYS.reminderTime) || '20:00').split(':');
    var now = new Date();
    var target = new Date();
    target.setHours(parseInt(parts[0], 10) || 20, parseInt(parts[1], 10) || 0, 0, 0);
    if (now >= target) {
        // Time already passed today: remind once (if not studied yet), then plan for tomorrow
        fireStudyReminder();
        target.setDate(target.getDate() + 1);
    }
    var delay = Math.min(target - now, 2147483000);
    ecReminderTimer = setTimeout(function () { fireStudyReminder(); scheduleStudyReminder(); }, delay);
}

function enableReminder(enable) {
    if (!enable) {
        localStorage.setItem(EC_SETTINGS_KEYS.reminderOn, '0');
        scheduleStudyReminder();
        syncReminderUI();
        return;
    }
    if (!('Notification' in window)) {
        showToast(t('settings.reminderUnsupported'));
        syncReminderUI();
        return;
    }
    var finish = function (perm) {
        if (perm === 'granted') {
            localStorage.setItem(EC_SETTINGS_KEYS.reminderOn, '1');
            scheduleStudyReminder();
            showToast(t('settings.saved'));
        } else {
            localStorage.setItem(EC_SETTINGS_KEYS.reminderOn, '0');
            showToast(t('settings.reminderDenied'));
        }
        syncReminderUI();
    };
    if (Notification.permission === 'granted') return finish('granted');
    var req = Notification.requestPermission(finish);
    if (req && typeof req.then === 'function') req.then(finish);
}

// ---- Backup / Restore / Reset ---------------------------------------------------
var EC_PRESERVE_ON_RESET = ['theme', 'profileData', 'easyChineseSpeechRate'].concat(
    Object.keys(EC_SETTINGS_KEYS).map(function (k) { return EC_SETTINGS_KEYS[k]; })
);

// Security: only these keys may be exported / restored from a backup file.
var EC_BACKUP_JSON_KEYS = ['learnedWords', 'bookmarkedWords', 'mistakeWords', 'streakData', 'dailyProgress', 'lessonFlowProgress', 'profileData'];
var EC_BACKUP_MAX_BYTES = 2 * 1024 * 1024;

function isAllowedBackupKey(key) {
    if (EC_BACKUP_JSON_KEYS.indexOf(key) !== -1) return true;
    if (key === 'theme') return true;
    return /^easyChinese[A-Za-z]{1,40}$/.test(key);
}

function isValidBackupValue(key, value) {
    if (typeof value !== 'string' || value.length > 500000) return false;
    if (EC_BACKUP_JSON_KEYS.indexOf(key) !== -1) {
        try {
            var parsed = JSON.parse(value);
            return parsed !== null && typeof parsed === 'object';
        } catch (err) {
            return false;
        }
    }
    if (key === 'theme') return value === 'light' || value === 'dark';
    return value.length <= 40 && /^[\w:.\-]*$/.test(value);
}

function exportProgressBackup() {
    var data = {};
    for (var i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i);
        if (key && isAllowedBackupKey(key)) data[key] = localStorage.getItem(key);
    }
    var payload = { app: 'easy-chinese', version: 25, exportedAt: new Date().toISOString(), data: data };
    var blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url;
    a.download = 'easy-chinese-backup-' + new Date().toISOString().slice(0, 10) + '.json';
    document.body.appendChild(a);
    a.click();
    setTimeout(function () { URL.revokeObjectURL(url); a.remove(); }, 500);
    showToast(t('settings.exportDone'));
}

function importProgressBackup(file) {
    if (!file) return;
    if (file.size > EC_BACKUP_MAX_BYTES) {
        showToast(t('settings.importError'));
        return;
    }
    var reader = new FileReader();
    reader.onload = function () {
        try {
            var payload = JSON.parse(reader.result);
            if (!payload || payload.app !== 'easy-chinese' || !payload.data || typeof payload.data !== 'object' || Array.isArray(payload.data)) throw new Error('bad file');
            var accepted = Object.keys(payload.data).filter(function (key) {
                return isAllowedBackupKey(key) && isValidBackupValue(key, payload.data[key]);
            });
            if (accepted.length === 0) throw new Error('empty backup');
            accepted.forEach(function (key) {
                localStorage.setItem(key, payload.data[key]);
            });
            showToast(t('settings.importDone'));
            setTimeout(function () { window.location.reload(); }, 900);
        } catch (err) {
            showToast(t('settings.importError'));
        }
    };
    reader.readAsText(file);
}

function resetAllProgress() {
    if (!window.confirm(t('settings.resetConfirm'))) return;
    var keys = [];
    for (var i = 0; i < localStorage.length; i++) keys.push(localStorage.key(i));
    keys.forEach(function (key) {
        if (key && EC_PRESERVE_ON_RESET.indexOf(key) === -1 && key.indexOf('firebase') !== 0) {
            localStorage.removeItem(key);
        }
    });
    showToast(t('settings.resetDone'));
    setTimeout(function () { window.location.reload(); }, 900);
}

// ---- Settings sheet open / close ------------------------------------------------
function openSettingsSheet() {
    var sheet = document.getElementById('settingsSheet');
    if (!sheet) return;
    applyAppLanguage();
    applyDisplayPrefs();
    syncDailyGoalUI();
    syncReminderUI();
    if (typeof syncSpeechRateUI === 'function') syncSpeechRateUI();
    var sfx = document.getElementById('soundEffectsToggle');
    if (sfx) sfx.checked = localStorage.getItem(EC_SETTINGS_KEYS.sfx) !== 'off';
    sheet.hidden = false;
    document.body.classList.add('settings-open');
    requestAnimationFrame(function () { sheet.classList.add('open'); });
}

function closeSettingsSheet() {
    var sheet = document.getElementById('settingsSheet');
    if (!sheet || sheet.hidden) return;
    sheet.classList.remove('open');
    document.body.classList.remove('settings-open');
    setTimeout(function () { sheet.hidden = true; }, 260);
}

function initSettingsSheet() {
    applyAppLanguage();
    applyDisplayPrefs();
    syncDailyGoalUI();
    scheduleStudyReminder();

    var openBtn = document.getElementById('openSettingsBtn');
    if (openBtn) openBtn.addEventListener('click', openSettingsSheet);

    document.querySelectorAll('[data-close-settings]').forEach(function (el) {
        el.addEventListener('click', closeSettingsSheet);
    });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeSettingsSheet(); });

    document.querySelectorAll('#appLanguageGroup .lang-chip').forEach(function (btn) {
        btn.addEventListener('click', function () {
            localStorage.setItem(EC_SETTINGS_KEYS.lang, btn.dataset.lang);
            applyAppLanguage();
            showToast(t('settings.saved'));
        });
    });

    document.querySelectorAll('#pinyinModeGroup .seg-chip').forEach(function (btn) {
        btn.addEventListener('click', function () {
            localStorage.setItem(EC_SETTINGS_KEYS.pinyin, btn.dataset.pinyinMode);
            document.querySelectorAll('.pinyin-revealed').forEach(function (el) { el.classList.remove('pinyin-revealed'); });
            applyDisplayPrefs();
        });
    });

    document.querySelectorAll('#hanziSizeGroup .seg-chip').forEach(function (btn) {
        btn.addEventListener('click', function () {
            localStorage.setItem(EC_SETTINGS_KEYS.hanziSize, btn.dataset.hanziSize);
            applyDisplayPrefs();
        });
    });

    var sfxToggle = document.getElementById('soundEffectsToggle');
    if (sfxToggle) {
        sfxToggle.addEventListener('change', function () {
            localStorage.setItem(EC_SETTINGS_KEYS.sfx, sfxToggle.checked ? 'on' : 'off');
            if (sfxToggle.checked) playSuccessSound();
        });
    }

    document.querySelectorAll('#dailyGoalGroup .seg-chip').forEach(function (btn) {
        btn.addEventListener('click', function () {
            setDailyGoal(btn.dataset.goal);
            showToast(t('settings.saved'));
        });
    });

    var reminderToggle = document.getElementById('reminderToggle');
    if (reminderToggle) {
        reminderToggle.addEventListener('change', function () { enableReminder(reminderToggle.checked); });
    }
    var reminderTime = document.getElementById('reminderTimeInput');
    if (reminderTime) {
        reminderTime.addEventListener('change', function () {
            localStorage.setItem(EC_SETTINGS_KEYS.reminderTime, reminderTime.value || '20:00');
            localStorage.removeItem(EC_SETTINGS_KEYS.reminderLast);
            scheduleStudyReminder();
            syncReminderUI();
        });
    }

    var exportBtn = document.getElementById('exportProgressBtn');
    if (exportBtn) exportBtn.addEventListener('click', exportProgressBackup);
    var importBtn = document.getElementById('importProgressBtn');
    var importInput = document.getElementById('importProgressInput');
    if (importBtn && importInput) {
        importBtn.addEventListener('click', function () { importInput.click(); });
        importInput.addEventListener('change', function () {
            importProgressBackup(importInput.files && importInput.files[0]);
            importInput.value = '';
        });
    }
    var resetBtn = document.getElementById('resetProgressBtn');
    if (resetBtn) resetBtn.addEventListener('click', resetAllProgress);

    document.addEventListener('visibilitychange', function () {
        if (document.visibilityState === 'visible') scheduleStudyReminder();
    });
}

function bootstrapEasyChineseApp() {
    initMainApp();
    initSettingsSheet();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bootstrapEasyChineseApp);
} else {
    bootstrapEasyChineseApp();
}


// ==============================================================================
// 21. HANZI RADICALS & CHARACTER BUILDER LAB (部首与构字)
// ==============================================================================

const RADICALS_DATA = [
    // HUMAN (8)
    {
        rad: '亻', alt: '人', py: 'rén', cnName: '单人旁 (dānrénpáng)', cat: 'human',
        uz: "Odam / Shaxs",
        tip: "Chap tomonda kelsa «亻» ko'rinishini oladi va odam, kasb yoki inson harakati bilan bog'liq so'zlarni bildiradi.",
        examples: [
            { hz: '你', py: 'nǐ', uz: 'siz' },
            { hz: '他', py: 'tā', uz: 'u (erkak)' },
            { hz: '休', py: 'xiū', uz: 'dam olmoq' },
            { hz: '住', py: 'zhù', uz: 'yashamoq' }
        ]
    },
    {
        rad: '女', alt: '', py: 'nǚ', cnName: '女字旁 (nǚzìpáng)', cat: 'human',
        uz: "Ayol / Oila",
        tip: "Ayol kishi, oila a'zolari va go'zallik ma'nosidagi iyerogliflarning asosiy kaliti.",
        examples: [
            { hz: '好', py: 'hǎo', uz: 'yaxshi' },
            { hz: '妈', py: 'mā', uz: 'ona' },
            { hz: '姐', py: 'jiě', uz: 'opa' },
            { hz: '姓', py: 'xìng', uz: 'familiya' }
        ]
    },
    {
        rad: '口', alt: '', py: 'kǒu', cnName: '口字旁 (kǒuzìpáng)', cat: 'human',
        uz: "Og'iz / Nutq",
        tip: "Yemoq, ichmoq, gapirmoq, chaqirmoq va savol yuklamalarida har doim «口» (og'iz) qatnashadi.",
        examples: [
            { hz: '吃', py: 'chī', uz: 'yemoq' },
            { hz: '喝', py: 'hē', uz: 'ichmoq' },
            { hz: '叫', py: 'jiào', uz: 'chaqirmoq' },
            { hz: '吗', py: 'ma', uz: 'savol yuklamasi' }
        ]
    },
    {
        rad: '扌', alt: '手', py: 'shǒu', cnName: '提手旁 (tíshǒupáng)', cat: 'human',
        uz: "Qo'l / Harakat",
        tip: "Qo'l bilan bajariladigan barcha ish-harakatlarda (urmoq, topmoq, ko'tarmoq, olmoq) uchraydi.",
        examples: [
            { hz: '打', py: 'dǎ', uz: 'urmoq / qo\'ng\'iroq' },
            { hz: '找', py: 'zhǎo', uz: 'qidirmoq' },
            { hz: '拿', py: 'ná', uz: 'olmoq / ushlamoq' },
            { hz: '把', py: 'bǎ', uz: 'ushlamoq' }
        ]
    },
    {
        rad: '忄', alt: '心', py: 'xīn', cnName: '竖心旁 (shùxīnpáng)', cat: 'human',
        uz: "Yurak / His-tuyg'u",
        tip: "Pastda «心», chapda «忄» bo'lib keladi — o'ylash, his-tuyg'u va kayfiyatni ifodalaydi.",
        examples: [
            { hz: '想', py: 'xiǎng', uz: "o'ylamoq / xohlamoq" },
            { hz: '忙', py: 'máng', uz: 'band' },
            { hz: '快', py: 'kuài', uz: 'tez / xursand' },
            { hz: '懂', py: 'dǒng', uz: 'tushunmoq' }
        ]
    },
    {
        rad: '目', alt: '', py: 'mù', cnName: '目字旁 (mùzìpáng)', cat: 'human',
        uz: "Ko'z / Qarash",
        tip: "Tik turgan ko'z shakli. Ko'rish, qarash, uxlash va ko'z bilan bog'liq so'zlarda keladi.",
        examples: [
            { hz: '看', py: 'kàn', uz: "ko'rmoq / o'qimoq" },
            { hz: '睡', py: 'shuì', uz: 'uxlamoq' },
            { hz: '眼', py: 'yǎn', uz: "ko'z" },
            { hz: '睛', py: 'jīng', uz: "ko'z qorachig'i" }
        ]
    },
    {
        rad: '讠', alt: '言', py: 'yán', cnName: '言字旁 (yánzìpáng)', cat: 'human',
        uz: "So'z / Til / Muloqot",
        tip: "Gapirish, so'rash, o'qish, rahmat aytish va til bilan bog'liq barcha so'zlarning kaliti.",
        examples: [
            { hz: '说', py: 'shuō', uz: 'gapirmoq' },
            { hz: '请', py: 'qǐng', uz: 'marhamat' },
            { hz: '谢', py: 'xiè', uz: 'rahmat' },
            { hz: '读', py: 'dú', uz: "o'qimoq" }
        ]
    },
    {
        rad: '⻊', alt: '足', py: 'zú', cnName: '足字旁 (zúzìpáng)', cat: 'human',
        uz: "Oyoq / Yugurish",
        tip: "Oyoq bilan bajariladigan harakatlar: yugurmoq, sakramoq, futbol tepmoq, yo'l.",
        examples: [
            { hz: '跑', py: 'pǎo', uz: 'yugurmoq' },
            { hz: '跳', py: 'tiào', uz: 'sakramoq / raqs' },
            { hz: '踢', py: 'tī', uz: 'tepmoq' },
            { hz: '路', py: 'lù', uz: "yo'l" }
        ]
    },

    // NATURE (9)
    {
        rad: '氵', alt: '水', py: 'shuǐ', cnName: '三点水 (sāndiǎnshuǐ)', cat: 'nature',
        uz: "Suv (3 tomchi)",
        tip: "3 ta suv tomchisi! Suyuqlik, daryo, dengiz, yuvish va ichimliklarga oid iyerogliflarda qatnashadi.",
        examples: [
            { hz: '水', py: 'shuǐ', uz: 'suv' },
            { hz: '汉', py: 'Hàn', uz: 'Xitoy (Xan)' },
            { hz: '洗', py: 'xǐ', uz: 'yuvmoq' },
            { hz: '没', py: 'méi', uz: "yo'q" }
        ]
    },
    {
        rad: '灬', alt: '火', py: 'huǒ', cnName: '火字旁 / 四点底', cat: 'nature',
        uz: "Olov / Issiqlik",
        tip: "Yon tomonda «火», harf ostida esa 4 ta cho'g' «灬» ko'rinishida keladi (pishirish, issiq).",
        examples: [
            { hz: '热', py: 'rè', uz: 'issiq' },
            { hz: '火', py: 'huǒ', uz: 'olov' },
            { hz: '点', py: 'diǎn', uz: 'soat / yoqmoq' },
            { hz: '灯', py: 'dēng', uz: 'chiroq' }
        ]
    },
    {
        rad: '木', alt: '', py: 'mù', cnName: '木字旁 (mùzìpáng)', cat: 'nature',
        uz: "Daraxt / Yog'och",
        tip: "Daraxtlar, mevalar va yog'ochdan yasalgan buyumlar (stol, stul, kitob javoni) kaliti.",
        examples: [
            { hz: '树', py: 'shù', uz: 'daraxt' },
            { hz: '桌', py: 'zhuō', uz: 'stol' },
            { hz: '椅', py: 'yǐ', uz: 'stul' },
            { hz: '杯', py: 'bēi', uz: 'stakan / piyola' }
        ]
    },
    {
        rad: '日', alt: '', py: 'rì', cnName: '日字旁 (rìzìpáng)', cat: 'nature',
        uz: "Quyosh / Kun / Vaqt",
        tip: "Quyosh, yorug'lik, kun, ertalab va vaqt bilan bog'liq barcha so'zlarning asosi.",
        examples: [
            { hz: '明', py: 'míng', uz: 'ertaga / yorug\'' },
            { hz: '早', py: 'zǎo', uz: 'ertalab' },
            { hz: '时', py: 'shí', uz: 'vaqt' },
            { hz: '星', py: 'xīng', uz: 'yulduz' }
        ]
    },
    {
        rad: '月', alt: '', py: 'yuè', cnName: '月字旁 (yuèzìpáng)', cat: 'nature',
        uz: "Oy / Tana a'zolari",
        tip: "Ikki vazifasi bor: osmondagi Oy (vaqt) hamda inson tana a'zolari (qorin, oyoq, do'st).",
        examples: [
            { hz: '月', py: 'yuè', uz: 'oy' },
            { hz: '朋', py: 'péng', uz: "do'st" },
            { hz: '期', py: 'qī', uz: 'muddat / hafta' },
            { hz: '胖', py: 'pàng', uz: "to'la / semiz" }
        ]
    },
    {
        rad: '艹', alt: '艸', py: 'cǎo', cnName: '草字头 (cǎozìtóu)', cat: 'nature',
        uz: "O't-o'lan / O'simlik",
        tip: "Harfning eng tepasida «艹» shaklida keladi — choy, gul, olma, sabzavot va dorivor o'simliklar.",
        examples: [
            { hz: '茶', py: 'chá', uz: 'choy' },
            { hz: '菜', py: 'cài', uz: 'sabzavot / taom' },
            { hz: '花', py: 'huā', uz: 'gul' },
            { hz: '苹', py: 'píng', uz: 'olma (苹果)' }
        ]
    },
    {
        rad: '雨', alt: '', py: 'yǔ', cnName: '雨字头 (yǔzìtóu)', cat: 'nature',
        uz: "Yomg'ir / Ob-havo",
        tip: "Bulutdan yog'ayotgan tomchilar! Qor, chaqmoq, bulut va tuman so'zlarining tepasida keladi.",
        examples: [
            { hz: '雨', py: 'yǔ', uz: "yomg'ir" },
            { hz: '雪', py: 'xuě', uz: 'qor' },
            { hz: '零', py: 'líng', uz: 'nol (0)' },
            { hz: '云', py: 'yún', uz: 'bulut' }
        ]
    },
    {
        rad: '土', alt: '', py: 'tǔ', cnName: '提土旁 (títǔpáng)', cat: 'nature',
        uz: "Yer / Tuproq / Joy",
        tip: "Yer, joylashuv, shahar devori va bino maydonlarini bildiruvchi so'zlarda keladi.",
        examples: [
            { hz: '在', py: 'zài', uz: 'joylashmoq / ...da' },
            { hz: '坐', py: 'zuò', uz: "o'tirmoq" },
            { hz: '地', py: 'dì', uz: 'yer / joy' },
            { hz: '城', py: 'chéng', uz: 'shahar' }
        ]
    },
    {
        rad: '山', alt: '', py: 'shān', cnName: '山字旁 (shānzìpáng)', cat: 'nature',
        uz: "Tog' / Cho'qqi",
        tip: "Uchta tog' cho'qqisining tasviri! Tog', qoya va orol ma'nosidagi iyerogliflarda qatnashadi.",
        examples: [
            { hz: '山', py: 'shān', uz: "tog'" },
            { hz: '岁', py: 'suì', uz: 'yosh (yil)' },
            { hz: '岸', py: 'àn', uz: 'qirg\'oq' }
        ]
    },

    // OBJECTS & HOME (7)
    {
        rad: '宀', alt: '', py: 'mián', cnName: '宝盖头 (bǎogàitóu)', cat: 'objects',
        uz: "Uy tomi / Bino",
        tip: "Harf ustidagi tom shakli! Uy, oila, xona, mehmonxona va xavfsizlik so'zlarida keladi.",
        examples: [
            { hz: '家', py: 'jiā', uz: 'uy / oila' },
            { hz: '字', py: 'zì', uz: 'harf / iyeroglif' },
            { hz: '客', py: 'kè', uz: 'mehmon' },
            { hz: '安', py: 'ān', uz: 'tinch / xavfsiz' }
        ]
    },
    {
        rad: '门', alt: '門', py: 'mén', cnName: '门字框 (ménzìkuàng)', cat: 'objects',
        uz: "Eshik / Darvoza",
        tip: "Ikki tavaqali eshik! Xona, so'rash, eshitish va bo'sh vaqt so'zlarini o'rab turadi.",
        examples: [
            { hz: '门', py: 'mén', uz: 'eshik' },
            { hz: '问', py: 'wèn', uz: "so'ramoq" },
            { hz: '间', py: 'jiān', uz: 'oraliq / xona' },
            { hz: '闻', py: 'wén', uz: 'eshitmoq / yangilik' }
        ]
    },
    {
        rad: '饣', alt: '食', py: 'shí', cnName: '食字旁 (shízìpáng)', cat: 'objects',
        uz: "Ovqat / Taom",
        tip: "Chap tomonda «饣» shaklida keladi — guruch, manti, chuchvara, non va restoranni bildiradi.",
        examples: [
            { hz: '饭', py: 'fàn', uz: 'ovqat / guruch' },
            { hz: '馆', py: 'guǎn', uz: 'restoran / bino' },
            { hz: '饺', py: 'jiǎo', uz: 'chuchvara (饺子)' },
            { hz: '饿', py: 'è', uz: 'qorni ochmoq' }
        ]
    },
    {
        rad: '衤', alt: '衣', py: 'yī', cnName: '衣字旁 (yīzìpáng)', cat: 'objects',
        uz: "Kiyim / Mato",
        tip: "Ehtiyot bo'ling: bunda nuqtadan keyin 2 ta chiziq bor — ko'ylak, shim, paypoq kabi kiyimlarni bildiradi.",
        examples: [
            { hz: '衣', py: 'yī', uz: 'kiyim' },
            { hz: '裤', py: 'kù', uz: 'shim' },
            { hz: '衬', py: 'chèn', uz: "ko'ylak (衬衫)" },
            { hz: '被', py: 'bèi', uz: "ko'rpa" }
        ]
    },
    {
        rad: '钅', alt: '金', py: 'jīn', cnName: '金字旁 (jīnzìpáng)', cat: 'objects',
        uz: "Oltin / Metall / Pul",
        tip: "Metall buyumlar, pul, soat, kalit va temir bilan bog'liq barcha so'zlarning kaliti.",
        examples: [
            { hz: '钱', py: 'qián', uz: 'pul' },
            { hz: '钟', py: 'zhōng', uz: 'soat / daqiqa' },
            { hz: '错', py: 'cuò', uz: 'xato' },
            { hz: '银', py: 'yín', uz: 'kumush / bank' }
        ]
    },
    {
        rad: '车', alt: '車', py: 'chē', cnName: '车字旁 (chēzìpáng)', cat: 'objects',
        uz: "Mashina / G'ildirak",
        tip: "Transport vositalari va g'ildirakli aravalarga oid so'zlarda keladi.",
        examples: [
            { hz: '车', py: 'chē', uz: 'mashina' },
            { hz: '辆', py: 'liàng', uz: 'mashina hisoblagichi' },
            { hz: '轻', py: 'qīng', uz: 'yengil' }
        ]
    },
    {
        rad: '贝', alt: '貝', py: 'bèi', cnName: '贝字旁 (bèizìpáng)', cat: 'objects',
        uz: "Chig'anoq / Boylik / Savdo",
        tip: "Qadimda dengiz chig'anog'i pul o'rnida ishlatilgan — xarid, narx, qimmat va do'kon so'zlarida keladi.",
        examples: [
            { hz: '贵', py: 'guì', uz: 'qimmat' },
            { hz: '买', py: 'mǎi', uz: 'sotib olmoq' },
            { hz: '卖', py: 'mài', uz: 'sotmoq' },
            { hz: '员', py: 'yuán', uz: 'xodim' }
        ]
    },

    // ACTION & MOVEMENT (6)
    {
        rad: '辶', alt: '辵', py: 'chuò', cnName: '走之底 (zǒuzhīdǐ)', cat: 'action',
        uz: "Yo'l / Yurish / Harakat",
        tip: "Harfning chap va pastki qismida qayiqchadek o'rab keladi — borish, kelish, uzoq-yaqin va yo'l ma'nosini beradi.",
        examples: [
            { hz: '这', py: 'zhè', uz: 'bu' },
            { hz: '那', py: 'nà', uz: 'u (ana u)' },
            { hz: '远', py: 'yuǎn', uz: 'uzoq' },
            { hz: '近', py: 'jìn', uz: 'yaqin' }
        ]
    },
    {
        rad: '彳', alt: '', py: 'chì', cnName: '双人旁 (shuāngrénpáng)', cat: 'action',
        uz: "Qadam / Ko'cha",
        tip: "Ikki kishilik qadam — ko'cha, yurish, juda (很) va kutish ma'nolarida qatnashadi.",
        examples: [
            { hz: '很', py: 'hěn', uz: 'juda' },
            { hz: '往', py: 'wǎng', uz: '...tomonga' },
            { hz: '得', py: 'dé', uz: 'erishmoq' }
        ]
    },
    {
        rad: '刂', alt: '刀', py: 'dāo', cnName: '立刀旁 (lìdāopáng)', cat: 'action',
        uz: "Pichoq / Kesish",
        tip: "O'ng tomonda ikkita tik chiziq «刂» shaklida keladi — kesish, bo'lish, vaqt va yetib borish.",
        examples: [
            { hz: '到', py: 'dào', uz: 'yetib bormoq' },
            { hz: '分', py: 'fēn', uz: "daqiqa / bo'lmoq" },
            { hz: '别', py: 'bié', uz: 'boshqa / ...mang' },
            { hz: '刻', py: 'kè', uz: 'chorak soat' }
        ]
    },
    {
        rad: '力', alt: '', py: 'lì', cnName: '力字旁 (lìzìpáng)', cat: 'action',
        uz: "Kuch / Quvvat / Mehnat",
        tip: "Mushak va omoch tasviri — kuch sarflash, harakat qilish va yordam berish so'zlarida keladi.",
        examples: [
            { hz: '男', py: 'nán', uz: 'erkak' },
            { hz: '办', py: 'bàn', uz: 'bajarmoq' },
            { hz: '动', py: 'dòng', uz: 'harakatlanmoq' },
            { hz: '努', py: 'nǔ', uz: 'tirishmoq (努力)' }
        ]
    },
    {
        rad: '⺮', alt: '竹', py: 'zhú', cnName: '竹字头 (zhúzìtóu)', cat: 'action',
        uz: "Bambuk / Yozuv",
        tip: "Qadimda kitoblar bambuk taxtachalarga yozilgan — kulish, javob, savat va hisob so'zlarida keladi.",
        examples: [
            { hz: '笑', py: 'xiào', uz: 'kulmoq' },
            { hz: '第', py: 'dì', uz: '-inchi (tartib)' },
            { hz: '答', py: 'dá', uz: 'javob bermoq' },
            { hz: '筷', py: 'kuài', uz: "tayoqcha (筷子)" }
        ]
    },
    {
        rad: '广', alt: '', py: 'guǎng', cnName: '广字旁 (guǎngzìpáng)', cat: 'objects',
        uz: "Keng ayvon / Do'kon",
        tip: "Katta tom ostidagi joy — do'kon, o'rindiq, kasalxona va yotoq so'zlarida keladi.",
        examples: [
            { hz: '店', py: 'diàn', uz: "do'kon / mehmonxona" },
            { hz: '床', py: 'chuáng', uz: 'karavot' },
            { hz: '座', py: 'zuò', uz: "o'rindiq" }
        ]
    }
];

const RADICAL_FORMULAS = [
    {
        parts: [{ hz: '亻', lbl: 'odam' }, { hz: '木', lbl: 'daraxt' }],
        result: { hz: '休', py: 'xiū', uz: 'dam olmoq' },
        story: "Odam (亻) daraxt (木) soyasiga suyanib dam olyapti."
    },
    {
        parts: [{ hz: '女', lbl: 'ayol' }, { hz: '子', lbl: 'bola' }],
        result: { hz: '好', py: 'hǎo', uz: 'yaxshi' },
        story: "Ona (女) va farzand (子) birga bo'lsa — hammasi yaxshi!"
    },
    {
        parts: [{ hz: '日', lbl: 'quyosh' }, { hz: '月', lbl: 'oy' }],
        result: { hz: '明', py: 'míng', uz: "yorug' / ertaga (明天)" },
        story: "Quyosh (日) va Oy (月) birlashib, yorug'lik hamda yangi kunni (明天) keltiradi."
    },
    {
        parts: [{ hz: '手', lbl: "qo'l" }, { hz: '目', lbl: "ko'z" }],
        result: { hz: '看', py: 'kàn', uz: "ko'rmoq / qaramoq" },
        story: "Qo'lni (手) ko'z (目) ustiga soyabon qilib uzoqqa qaramoq."
    },
    {
        parts: [{ hz: '门', lbl: 'eshik' }, { hz: '口', lbl: "og'iz" }],
        result: { hz: '问', py: 'wèn', uz: "so'ramoq (请问)" },
        story: "Eshikdan (门) kirib, og'iz (口) bilan yo'l yoki ma'lumot so'ramoq."
    },
    {
        parts: [{ hz: '门', lbl: 'eshik' }, { hz: '耳', lbl: 'quloq' }],
        result: { hz: '闻', py: 'wén', uz: 'eshitmoq / yangilik' },
        story: "Eshik (门) ortidan quloq (耳) solib yangilik eshitmoq."
    },
    {
        parts: [{ hz: '宀', lbl: 'uy tomi' }, { hz: '女', lbl: 'ayol' }],
        result: { hz: '安', py: 'ān', uz: 'tinch / xavfsiz (安全)' },
        story: "Uy tomi (宀) ostida oila bo'lsa — xonadon tinch va xotirjam."
    },
    {
        parts: [{ hz: '宀', lbl: 'uy tomi' }, { hz: '子', lbl: 'bola' }],
        result: { hz: '字', py: 'zì', uz: 'harf / iyeroglif (汉字)' },
        story: "Uy (宀) ichida bola (子) tarbiyalanib savod va harf o'rganadi."
    },
    {
        parts: [{ hz: '田', lbl: 'dala' }, { hz: '力', lbl: 'kuch' }],
        result: { hz: '男', py: 'nán', uz: 'erkak' },
        story: "Dalada (田) kuch (力) sarflab mehnat qiluvchi inson."
    },
    {
        parts: [{ hz: '木', lbl: 'daraxt' }, { hz: '木', lbl: 'daraxt' }],
        result: { hz: '林', py: 'lín', uz: "o'rmon" },
        story: "Ikkita daraxt (木+木) yonma-yon o'ssa — o'rmonzor hosil bo'ladi."
    },
    {
        parts: [{ hz: '人', lbl: 'odam' }, { hz: '人', lbl: 'odam' }, { hz: '土', lbl: 'yer' }],
        result: { hz: '坐', py: 'zuò', uz: "o'tirmoq (请坐)" },
        story: "Ikki kishi (人人) yerda (土) yonma-yon suhbatlashib o'tiribdi."
    },
    {
        parts: [{ hz: '相', lbl: 'o\'zaro' }, { hz: '心', lbl: 'yurak' }],
        result: { hz: '想', py: 'xiǎng', uz: "o'ylamoq / xohlamoq" },
        story: "Qiyofani ko'z oldiga keltirib, yurakdan (心) o'ylamoq va sog'inmoq."
    },
    {
        parts: [{ hz: '讠', lbl: "so'z" }, { hz: '青', lbl: 'toza/ko\'k' }],
        result: { hz: '请', py: 'qǐng', uz: 'marhamat / iltimos' },
        story: "Samimiy so'z (讠) bilan muloyim iltimos qilmoq."
    },
    {
        parts: [{ hz: '氵', lbl: 'suv' }, { hz: '青', lbl: 'toza' }],
        result: { hz: '清', py: 'qīng', uz: 'tiniq / toza (清楚)' },
        story: "Suv (氵) qo'shilsa — musaffo va tiniq suv ma'nosi chiqadi."
    },
    {
        parts: [{ hz: '日', lbl: 'quyosh' }, { hz: '青', lbl: 'ochiq' }],
        result: { hz: '晴', py: 'qīng', uz: 'ochiq havo (晴天)' },
        story: "Quyosh (日) chiqib turgan musaffo, bulutsiz kun!"
    },
    {
        parts: [{ hz: '小', lbl: 'kichik' }, { hz: '大', lbl: 'katta' }],
        result: { hz: '尖', py: 'jiān', uz: "o'tkir uchli" },
        story: "Yuqorisi kichik (小), pastki qismi katta (大) bo'lgan narsa — uchi o'tkir!"
    }
];

const RADICAL_QUIZ_ITEMS = [
    {
        char: '休', sub: 'xiū — dam olmoq',
        q: "«休» (dam olmoq) iyeroglifi qaysi ikki kalitdan tashkil topgan?",
        options: [
            "亻 (odam) + 木 (daraxt)",
            "女 (ayol) + 子 (bola)",
            "日 (quyosh) + 月 (oy)",
            "门 (eshik) + 口 (og'iz)"
        ],
        correct: 0,
        exp: "✅ To'g'ri! 亻 (odam) + 木 (daraxt) = 休 (odam daraxtga suyanib dam olyapti)."
    },
    {
        char: '氵', sub: 'sāndiǎnshuǐ (3 nuqtali kalit)',
        q: "Chap tomonda «氵» kaliti qatnashgan so'zlar (水, 洗, 河, 没) asosan nima bilan bog'liq?",
        options: [
            "Suv va suyuqlik",
            "Olov va issiqlik",
            "Metall va pul",
            "Kiyim va mato"
        ],
        correct: 0,
        exp: "✅ Barakalla! «氵» — 3 tomchi suv bo'lib, suv va yuvishga oid so'zlarda keladi."
    },
    {
        char: '好', sub: 'hǎo — yaxshi',
        q: "«好» iyeroglifi qanday mantiqiy qismlardan yasalgan?",
        options: [
            "女 (ayol) + 子 (bola)",
            "亻 (odam) + 言 (so'z)",
            "口 (og'iz) + 水 (suv)",
            "日 (quyosh) + 生 (hayot)"
        ],
        correct: 0,
        exp: "✅ To'g'ri! 女 (ayol/ona) + 子 (bola) = 好 (yaxshi)."
    },
    {
        char: '吃 · 喝 · 吗', sub: 'chī (yemoq) · hē (ichmoq) · ma',
        q: "Ushbu uchala iyeroglifning chap tomonidagi «口» kaliti nimani anglatadi?",
        options: [
            "Og'iz va nutq",
            "Qo'l harakati",
            "Deraza va uy",
            "Quyosh va kun"
        ],
        correct: 0,
        exp: "✅ Ajoyib! «口» (kǒu) — og'iz bo'lib, yeyish, ichish va gapirish so'zlarida keladi."
    },
    {
        char: '明', sub: 'míng — yorug\' / ertaga (明天)',
        q: "«明» iyeroglifida qaysi ikki osmon jismi birlashgan?",
        options: [
            "日 (Quyosh) + 月 (Oy)",
            "山 (Tog') + 水 (Suv)",
            "火 (Olov) + 土 (Yer)",
            "雨 (Yomg'ir) + 云 (Bulut)"
        ],
        correct: 0,
        exp: "✅ To'g'ri! 日 (quyosh) va 月 (oy) birgalikda yorug'lik (明) beradi."
    },
    {
        char: '看', sub: 'kàn — ko\'rmoq / qaramoq',
        q: "«看» iyeroglifining ustki va pastki qismlari nimani tasvirlaydi?",
        options: [
            "手 (qo'l) + 目 (ko'z) — qo'lni ko'z ustiga qo'yib qarash",
            "木 (daraxt) + 日 (quyosh)",
            "人 (odam) + 门 (eshik)",
            "艹 (o't) + 田 (dala)"
        ],
        correct: 0,
        exp: "✅ Barakalla! Qo'lni (手) ko'z (目) ustiga soyabon qilib uzoqqa qaramoq — 看 (kàn)."
    },
    {
        char: '讠', sub: '说 (shuō) · 请 (qǐng) · 谢 (xiè) · 读 (dú)',
        q: "Ushbu so'zlardagi «讠» (言) kaliti qanday umumiy ma'noni bildiradi?",
        options: [
            "So'z, til va muloqot",
            "Oyoq bilan yugurish",
            "Ovqat va oshxona",
            "Daraxt va o'rmon"
        ],
        correct: 0,
        exp: "✅ To'g'ri! «讠» (yán) — so'z va nutq kaliti."
    },
    {
        char: '问', sub: 'wèn — so\'ramoq (请问)',
        q: "«问» iyeroglifi qanday hosil bo'lgan?",
        options: [
            "门 (eshik) ichida 口 (og'iz)",
            "宀 (tom) ostida 女 (ayol)",
            "囗 (devor) ichida 人 (odam)",
            "雨 (yomg'ir) ostida 田 (dala)"
        ],
        correct: 0,
        exp: "✅ To'g'ri! Eshikdan (门) kirib og'iz (口) bilan so'ramoq — 问 (wèn)."
    },
    {
        char: '扌', sub: '打 (dǎ) · 找 (zhǎo) · 拿 (ná)',
        q: "Chap tomondagi «扌» (手) kaliti qanday harakatlarni bildiradi?",
        options: [
            "Qo'l bilan bajariladigan harakatlar",
            "Yurak va his-tuyg'u",
            "Suvda suzish",
            "Olovda pishirish"
        ],
        correct: 0,
        exp: "✅ Barakalla! «扌» — qo'l kaliti bo'lib, ushlash, urish, qidirish so'zlarida keladi."
    },
    {
        char: '饭 · 馆 · 饿', sub: 'fàn (ovqat) · guǎn (restoran) · è (och qolmoq)',
        q: "Ushbu so'zlardagi «饣» (食) kaliti nimani anglatadi?",
        options: [
            "Ovqat va taom",
            "Pul va oltin",
            "Kiyim-kechak",
            "Yo'l va transport"
        ],
        correct: 0,
        exp: "✅ Ajoyib! «饣» (shí) — taom va ovqatlanish kaliti."
    },
    {
        char: '钱 · 钟 · 银', sub: 'qián (pul) · zhōng (soat) · yín (kumush/bank)',
        q: "Ushbu so'zlarning chap tomonidagi «钅» (金) kaliti nimani bildiradi?",
        options: [
            "Oltin, metall va pul",
            "O'simlik va choy",
            "Daraxt va yog'och",
            "Qush va parvoz"
        ],
        correct: 0,
        exp: "✅ To'g'ri! «钅» (jīn) — oltin va metall buyumlar kaliti."
    },
    {
        char: '坐', sub: 'zuò — o\'tirmoq (请坐)',
        q: "«坐» iyeroglifi qanday mantiqiy tasvirdan kelib chiqqan?",
        options: [
            "Ikki odam (人人) yerda (土) o'tiribdi",
            "Quyosh (日) daraxt (木) ortidan chiqyapti",
            "Uy tomi (宀) ostida bola (子)",
            "Suv (氵) bo'yida tog' (山)"
        ],
        correct: 0,
        exp: "✅ Barakalla! Ikki kishi (人人) yerda (土) o'tiribdi — 坐 (zuò)."
    }
];

let currentRadicalCategory = 'all';
let currentRadicalSearch = '';
let radQuizIdx = 0;
let radQuizScoreVal = 0;
let radQuizStreakVal = 0;

function showRadicalsLabView(initialTab = 'list') {
    const viewEl = document.getElementById('radicalsLab');
    if (!viewEl) return;
    showView(viewEl);
    initRadicalsLab(initialTab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function initRadicalsLab(initialTab = 'list') {
    const tabs = document.querySelectorAll('#radicalsLabTabs .subview-tab');
    const panels = {
        list: document.getElementById('radicalsTabList'),
        builder: document.getElementById('radicalsTabBuilder'),
        quiz: document.getElementById('radicalsTabQuiz')
    };

    function switchRadTab(tabKey) {
        tabs.forEach(btn => btn.classList.toggle('active', btn.dataset.radTab === tabKey));
        Object.keys(panels).forEach(k => {
            if (panels[k]) panels[k].classList.toggle('active', k === tabKey);
        });
    }

    tabs.forEach(btn => {
        btn.onclick = () => switchRadTab(btn.dataset.radTab);
    });

    const searchInput = document.getElementById('radicalsSearchInput');
    if (searchInput) {
        searchInput.oninput = (e) => {
            currentRadicalSearch = (e.target.value || '').trim().toLowerCase();
            renderRadicalsDirectory();
        };
    }

    const catBtns = document.querySelectorAll('#radicalsCategoryFilters .pinyin-filter-pill');
    catBtns.forEach(btn => {
        btn.onclick = () => {
            currentRadicalCategory = btn.dataset.radCat || 'all';
            catBtns.forEach(b => b.classList.toggle('active', b === btn));
            renderRadicalsDirectory();
        };
    });

    switchRadTab(initialTab);
    renderRadicalsDirectory();
    renderRadicalFormulas();
    loadRadicalQuizQuestion();
}

function renderRadicalsDirectory() {
    const grid = document.getElementById('radicalsCardsGrid');
    if (!grid) return;

    const filtered = RADICALS_DATA.filter(item => {
        if (currentRadicalCategory !== 'all' && item.cat !== currentRadicalCategory) return false;
        if (!currentRadicalSearch) return true;
        const hay = `${item.rad} ${item.alt} ${item.py} ${item.cnName} ${item.uz} ${item.tip} ${item.examples.map(e => e.hz + ' ' + e.py + ' ' + e.uz).join(' ')}`.toLowerCase();
        return hay.includes(currentRadicalSearch);
    });

    if (filtered.length === 0) {
        grid.innerHTML = `<p class="no-results">Mos kalit topilmadi.</p>`;
        return;
    }

    grid.innerHTML = filtered.map(item => `
        <div class="radical-card">
            <div class="radical-card-top">
                <div class="radical-symbol-box" data-speak-rad="${item.alt || item.rad}" title="🔊">
                    <span class="radical-symbol-main">${item.rad}</span>
                    ${item.alt ? `<span class="radical-symbol-alt">(${item.alt})</span>` : ''}
                </div>
                <div class="radical-meta">
                    <div class="radical-title-row">
                        <span class="radical-meaning">${trUz(item.uz)}</span>
                        <span class="radical-pinyin-badge" data-speak-rad="${item.alt || item.rad}">🔊 ${item.py}</span>
                    </div>
                    <div class="radical-cn-name">${item.cnName}</div>
                </div>
            </div>
            <p class="radical-tip">💡 ${trUz(item.tip)}</p>
            <div class="radical-examples-row">
                ${item.examples.map(ex => `
                    <button type="button" class="radical-example-chip" data-speak-hz="${ex.hz}">
                        <span class="rec-hz">${ex.hz}</span>
                        <span>${ex.py} — ${trUz(ex.uz)}</span>
                        <span>🔊</span>
                    </button>
                `).join('')}
            </div>
        </div>
    `).join('');

    grid.querySelectorAll('[data-speak-rad]').forEach(el => {
        el.onclick = () => playWordAudio(el.dataset.speakRad);
    });
    grid.querySelectorAll('[data-speak-hz]').forEach(btn => {
        btn.onclick = () => playWordAudio(btn.dataset.speakHz);
    });
}

function renderRadicalFormulas() {
    const grid = document.getElementById('radicalsFormulasGrid');
    if (!grid) return;

    const listenLbl = typeof t === 'function' ? t('card.listen') : 'Tinglash';
    grid.innerHTML = RADICAL_FORMULAS.map(f => `
        <div class="radical-formula-card" data-speak-formula="${f.result.hz}">
            <div class="rf-head-row">
                <span class="rf-word-title">${f.result.hz} (${f.result.py}) — ${trUz(f.result.uz)}</span>
                <span class="rf-audio-pill">🔊 ${listenLbl}</span>
            </div>
            <div class="rf-equation">
                ${f.parts.map((p, idx) => `
                    ${idx > 0 ? '<span class="rf-op">+</span>' : ''}
                    <div class="rf-part">
                        <span class="rf-part-hz">${p.hz}</span>
                        <span class="rf-part-lbl">${trUz(p.lbl)}</span>
                    </div>
                `).join('')}
                <span class="rf-op">=</span>
                <div class="rf-part rf-result">
                    <span class="rf-part-hz">${f.result.hz}</span>
                    <span class="rf-part-lbl">${f.result.py}</span>
                </div>
            </div>
            <p class="rf-story">🧠 ${trUz(f.story)}</p>
        </div>
    `).join('');

    grid.querySelectorAll('[data-speak-formula]').forEach(card => {
        card.onclick = () => playWordAudio(card.dataset.speakFormula);
    });
}

function loadRadicalQuizQuestion() {
    const item = RADICAL_QUIZ_ITEMS[radQuizIdx % RADICAL_QUIZ_ITEMS.length];
    const charEl = document.getElementById('radQuizChar');
    const subEl = document.getElementById('radQuizSub');
    const qEl = document.getElementById('radQuizQuestion');
    const optsEl = document.getElementById('radQuizOptions');
    const fbEl = document.getElementById('radQuizFeedback');
    const actEl = document.getElementById('radQuizActions');
    const progEl = document.getElementById('radQuizProgress');
    const streakEl = document.getElementById('radQuizStreak');
    const scoreEl = document.getElementById('radQuizScore');

    if (!charEl || !optsEl) return;

    charEl.textContent = item.char;
    if (subEl) subEl.textContent = trUz(item.sub);
    if (qEl) qEl.textContent = trUz(item.q);
    if (progEl) progEl.textContent = `${(radQuizIdx % RADICAL_QUIZ_ITEMS.length) + 1} / ${RADICAL_QUIZ_ITEMS.length}`;
    if (streakEl) streakEl.textContent = String(radQuizStreakVal);
    if (scoreEl) scoreEl.textContent = String(radQuizScoreVal);
    if (fbEl) fbEl.hidden = true;
    if (actEl) actEl.hidden = true;

    // Shuffle options while tracking the correct one
    const indexedOptions = item.options.map((text, idx) => ({ text: trUz(text), isCorrect: idx === item.correct }));
    for (let i = indexedOptions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [indexedOptions[i], indexedOptions[j]] = [indexedOptions[j], indexedOptions[i]];
    }

    optsEl.innerHTML = indexedOptions.map((opt, i) => `
        <button type="button" class="tone-ear-opt-btn" data-opt-idx="${i}">
            <strong>${opt.text}</strong>
        </button>
    `).join('');

    const optBtns = optsEl.querySelectorAll('.tone-ear-opt-btn');
    optBtns.forEach((btn, i) => {
        btn.onclick = () => {
            optBtns.forEach(b => { b.disabled = true; });
            const chosen = indexedOptions[i];
            if (chosen.isCorrect) {
                btn.classList.add('is-correct');
                radQuizStreakVal++;
                radQuizScoreVal += 10;
                if (typeof addXP === 'function') addXP(10);
                if (typeof playSuccessSound === 'function') playSuccessSound();
                if (fbEl) {
                    fbEl.hidden = false;
                    fbEl.className = 'tone-ear-feedback is-correct';
                    fbEl.textContent = `${trUz(item.exp)} (+10 XP)`;
                }
            } else {
                btn.classList.add('is-wrong');
                radQuizStreakVal = 0;
                optBtns.forEach((b, idx) => {
                    if (indexedOptions[idx].isCorrect) b.classList.add('is-correct');
                });
                if (fbEl) {
                    fbEl.hidden = false;
                    fbEl.className = 'tone-ear-feedback is-wrong';
                    fbEl.textContent = trUz(item.exp);
                }
            }
            if (streakEl) streakEl.textContent = String(radQuizStreakVal);
            if (scoreEl) scoreEl.textContent = String(radQuizScoreVal);
            if (actEl) actEl.hidden = false;
            playWordAudio(item.char.charAt(0));
        };
    });

    const speakBtn = document.getElementById('radQuizSpeakBtn');
    if (speakBtn) {
        speakBtn.onclick = () => playWordAudio(item.char.charAt(0));
    }
    const nextBtn = document.getElementById('radQuizNextBtn');
    if (nextBtn) {
        nextBtn.onclick = () => {
            radQuizIdx = (radQuizIdx + 1) % RADICAL_QUIZ_ITEMS.length;
            loadRadicalQuizQuestion();
        };
    }
}
