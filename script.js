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
  { id: 487, hsk: 1, track: 'new', lesson: 15, hanzi: "那", pinyin: "nà", uzbek: "U, o'sha" }
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
const lessonTracks = {
    classic: { dataTrack: 'classic', minLesson: 1, maxLesson: 15 },
    new: { dataTrack: 'new', minLesson: 1, maxLesson: 15 }
};
let currentLessonTrack = 'classic';
let searchQuery = '';
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
let canvasScore = 0;
let canvasWritingMode = 'trace'; // trace, write, test
let selectedAvatar = '👤';
let isEraserActive = false;
let currentStrokeIndex = 0;
let expectedStrokeCount = 0;
let userStrokes = [];
let autoAdvanceTimer = null;
let quizSessionId = 0;
let comboCount = 0;

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
const profileView = document.getElementById('profile');
const backToLessonsFromCanvas = document.getElementById('backToLessonsFromCanvas');
const drawingCanvas = document.getElementById('hanziWriterCanvas');
const canvasCharacter = document.getElementById('canvasCharacter');
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
const successModal = document.getElementById('successModal');
const closeSuccessModal = document.getElementById('closeSuccessModal');
const nextWordFromModal = document.getElementById('nextWordFromModal');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initializeTheme();
    setupEventListeners();
    updateStreak();
    updateTotalLearned();
    updateXP();
    loadProfileData();
    updateDailyQuests();
    
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
}

function toggleTheme(savedTheme) {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
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
            showLessonsView();
        });
    });

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
    backToLessonsFromCanvas.addEventListener('click', showLessonsView);

    // Canvas sidebar controls
    hskOptions.forEach(option => {
        option.addEventListener('click', () => {
            hskOptions.forEach(opt => opt.classList.remove('active'));
            option.classList.add('active');
            canvasHSK = parseInt(option.dataset.hsk);
            canvasTrack = 'classic'; // only HSK 1 has both curricula
            canvasWordIndex = 0;
            updateCanvasLessonSelector();
            loadCanvasCharacter();
        });
    });

    if (canvasTrackSelector) {
        canvasTrackSelector.addEventListener('change', (e) => {
            canvasTrack = e.target.value;
            canvasLesson = 1;
            canvasWordIndex = 0;
            updateCanvasLessonSelector();
            loadCanvasCharacter();
        });
    }

    if (canvasMobileTrackSelector) {
        canvasMobileTrackSelector.addEventListener('change', (e) => {
            canvasTrack = e.target.value;
            canvasLesson = 1;
            canvasWordIndex = 0;
            updateCanvasLessonSelector();
            loadCanvasCharacter();
        });
    }

    canvasLessonSelector.addEventListener('change', (e) => {
        canvasLesson = parseInt(e.target.value);
        canvasWordIndex = 0;
        loadCanvasCharacter();
    });

    canvasMobileHskSelector.addEventListener('change', (e) => {
        canvasHSK = parseInt(e.target.value);
        canvasTrack = 'classic';
        canvasWordIndex = 0;
        updateCanvasLessonSelector();
        loadCanvasCharacter();
    });

    canvasMobileLessonSelector.addEventListener('change', (e) => {
        canvasLesson = parseInt(e.target.value);
        canvasWordIndex = 0;
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

    // Mode tabs
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => switchMode(btn.dataset.mode));
    });
}

function loadExternalVocabulary() {
    // words.json is a legacy partial set; the ordered inline dataset is canonical.
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
    document.querySelectorAll('.view').forEach(view => view.classList.remove('active'));
    viewToShow.classList.add('active');
}

function showDashboard() {
    showView(dashboard);
}

function showLessonsView() {
    lessonsTitle.textContent = `HSK ${currentHSK} Lessons`;
    // Reset filter and search when entering lessons view
    currentLessonTrack = 'classic';
    searchQuery = '';
    searchInput.value = '';
    searchClear.classList.remove('visible');
    hskFilterBtns.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.track === currentLessonTrack);
    });
    generateLessonsGrid();
    showView(lessons);
}

function showLessonView(lessonNumber) {
    currentLesson = lessonNumber;
    const selectedTrack = lessonTracks[currentLessonTrack] || lessonTracks.classic;
    currentWords = vocabularyData.filter(word => 
        word.hsk === currentHSK && word.track === selectedTrack.dataTrack && word.lesson === lessonNumber
    );
    
    if (currentWords.length === 0) {
        // If no words for this lesson, show a message
        lessonTitle.textContent = `Lesson ${lessonNumber} - No words available`;
        currentWords = [{ id: 0, hsk: currentHSK, track: selectedTrack.dataTrack, lesson: lessonNumber, hanzi: "暂无", pinyin: "zàn wú", uzbek: "Hozircha yo'q" }];
    } else {
        lessonTitle.textContent = `Lesson ${lessonNumber} — ${currentWords.length} words`;
    }
    
    flashcardIndex = 0;
    quizIndex = 0;
    quizScore = 0;
    quizAnswered = false;
    
    updateFlashcard();
    updateQuiz();
    showView(lesson);
}

// Generate lessons grid
function generateLessonsGrid() {
    lessonsGrid.innerHTML = '';
    
    const selectedTrack = lessonTracks[currentLessonTrack] || lessonTracks.classic;

    // Get words for the selected HSK version and curriculum track only.
    let filteredWords = vocabularyData.filter(word =>
        word.hsk === currentHSK && word.track === selectedTrack.dataTrack
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
        const wordCount = vocabularyData.filter(word =>
            word.hsk === currentHSK && word.track === selectedTrack.dataTrack && word.lesson === lessonNum
        ).length;
        const lessonBtn = document.createElement('button');
        lessonBtn.className = 'lesson-btn';
        const lessonLabel = document.createElement('span');
        lessonLabel.className = 'lesson-btn-title';
        lessonLabel.textContent = `Lesson ${lessonNum}`;
        const wordCountLabel = document.createElement('span');
        wordCountLabel.className = 'lesson-word-count';
        wordCountLabel.textContent = `${wordCount} words`;
        lessonBtn.appendChild(lessonLabel);
        lessonBtn.appendChild(wordCountLabel);
        lessonBtn.addEventListener('click', () => showLessonView(lessonNum));
        lessonsGrid.appendChild(lessonBtn);
    });
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
    
    // Update learned button state
    updateLearnedButton();
    updateLearnedCount();
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
        utterance.rate = 0.8;
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
    
    // Clear previous animation
    strokeOrderTarget.innerHTML = '';
    
    // For multi-character words, show the first character
    const targetChar = hanzi.charAt(0);
    
    try {
        hanziWriter = HanziWriter.create('strokeOrderTarget', targetChar, {
            width: 150,
            height: 150,
            padding: 5,
            strokeAnimationSpeed: 1,
            strokeWidth: 14,
            outlineWidth: 2,
            delayBetweenStrokes: 200,
            showOutline: true,
            strokeColor: '#e63946',
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
    
    // Update UI
    updateLearnedButton();
    updateLearnedCount();
    updateTotalLearned();
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
        markLearned.textContent = 'Mark as Learned';
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
    profileStreak.textContent = streakData.streak;
}

function updateTotalLearned() {
    streakData.totalLearned = learnedWords.length;
    localStorage.setItem('streakData', JSON.stringify(streakData));
    profileLearned.textContent = streakData.totalLearned;
}

function updateXP() {
    profileXP.textContent = streakData.xp;
}

function addXP(amount) {
    streakData.xp += amount;
    dailyProgress.xp += amount;
    localStorage.setItem('streakData', JSON.stringify(streakData));
    localStorage.setItem('dailyProgress', JSON.stringify(dailyProgress));
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
            // Navigate to lessons view with current HSK
            showLessonsView();
            break;
        case 'canvas':
            showCanvasView();
            break;
        case 'profile':
            showProfileView();
            break;
    }
}

function navigateFlashcard(direction) {
    flashcardIndex += direction;
    
    if (flashcardIndex < 0) {
        flashcardIndex = currentWords.length - 1;
    } else if (flashcardIndex >= currentWords.length) {
        flashcardIndex = 0;
    }
    
    updateFlashcard();
}

function shuffleFlashcards() {
    for (let i = currentWords.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [currentWords[i], currentWords[j]] = [currentWords[j], currentWords[i]];
    }
    flashcardIndex = 0;
    updateFlashcard();
}

// Quiz functions
function updateQuiz() {
    if (currentWords.length === 0) return;
    
    quizAnswered = false;
    nextQuizQuestion.disabled = true;
    
    const word = currentWords[quizIndex];
    const question = quizType === 'meaning' ? word.hanzi : quizType === 'pinyin' ? word.uzbek : word.pinyin;
    quizHanzi.textContent = question;
    quizPrompt.textContent = quizType === 'meaning' ? 'What does this mean?' : quizType === 'pinyin' ? 'Choose the correct Pinyin.' : 'Choose the correct Hanzi.';
    quizScoreElement.textContent = quizScore;
    currentQuestion.textContent = quizIndex + 1;
    totalQuestions.textContent = currentWords.length;
    
    // Generate options
    const options = generateQuizOptions(word);
    
    quizOptions.innerHTML = '';
    options.forEach((option, index) => {
        const optionBtn = document.createElement('button');
        optionBtn.className = 'quiz-option';
        optionBtn.textContent = quizType === 'meaning' ? option.uzbek : quizType === 'pinyin' ? option.pinyin : option.hanzi;
        optionBtn.dataset.wordId = option.id;
        optionBtn.addEventListener('click', () => checkAnswer(optionBtn, option.id === word.id));
        quizOptions.appendChild(optionBtn);
    });
}

function generateQuizOptions(correctWord) {
    const options = [correctWord];
    
    // Get random wrong answers from other words in the SAME curriculum track
    const otherWords = vocabularyData.filter(w => w.id !== correctWord.id && w.track === correctWord.track);
    
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
    
    if (isCorrect) {
        selectedBtn.classList.add('correct');
        quizScore++;
        quizScoreElement.textContent = quizScore;
    } else {
        selectedBtn.classList.add('incorrect');
        // Highlight correct answer
        const correctWord = currentWords[quizIndex];
        const options = quizOptions.querySelectorAll('.quiz-option');
        options.forEach(option => {
            if (option.dataset.wordId === String(correctWord.id)) {
                option.classList.add('correct');
            }
        });
    }
    
    nextQuizQuestion.disabled = false;
}

function nextQuiz() {
    quizIndex++;
    
    if (quizIndex >= currentWords.length) {
        // Quiz completed
        quizIndex = 0;
        quizScore = 0;
        alert(`Quiz completed! Your final score: ${quizScore}/${currentWords.length}`);
    }
    
    updateQuiz();
}

// Mode switching
function switchMode(mode) {
    tabBtns.forEach(btn => btn.classList.remove('active'));
    document.querySelector(`[data-mode="${mode}"]`).classList.add('active');

    document.querySelectorAll('.mode-content').forEach(content => content.classList.remove('active'));
    document.getElementById(`${mode}Mode`).classList.add('active');

    if (mode === 'quiz') {
        quizIndex = 0;
        quizScore = 0;
        updateQuiz();
    }
}

// Canvas View Functions
function showCanvasView() {
    showView(canvasView);
    initializeCanvas();
    updateCanvasLessonSelector();
    loadCanvasCharacter();
    updateModeInstructions();
}

function updateCanvasLessonSelector() {
    const lessons = [...new Set(vocabularyData.filter(w => w.hsk === canvasHSK && w.track === canvasTrack).map(w => w.lesson))].sort((a, b) => a - b);
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

function loadCanvasCharacter() {
    const words = vocabularyData.filter(w => w.hsk === canvasHSK && w.track === canvasTrack && w.lesson === canvasLesson);
    if (words.length > 0) {
        canvasWordIndex %= words.length;
        const word = words[canvasWordIndex];
        const targetChar = word.hanzi.charAt(0);
        canvasCharacter.textContent = targetChar;
        canvasMeaning.textContent = word.uzbek;
        canvasPinyin.textContent = word.pinyin;
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
    // Clear any pending auto-advance timer to prevent double-advance
    if (autoAdvanceTimer) {
        clearTimeout(autoAdvanceTimer);
        autoAdvanceTimer = null;
    }
    const words = vocabularyData.filter(w => w.hsk === canvasHSK && w.track === canvasTrack && w.lesson === canvasLesson);
    if (!words.length) return;
    canvasWordIndex = (canvasWordIndex + 1) % words.length;
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
        resizeCanvas();
        
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
            width: 300,
            height: 300,
            padding: 20,
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
            radicalColor: '#58CC02',
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
                quizCompleted = true;
                canvasScore += 10;
                canvasScoreElement.textContent = canvasScore;
                dailyProgress.traces += 1;
                localStorage.setItem('dailyProgress', JSON.stringify(dailyProgress));
                updateDailyQuests();
                updateAchievements();
                canvasFeedback.textContent = 'Great work! Character complete. +10 points';
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
                
                showSuccessModal();

                // Show lesson completion state when the last word in this lesson is done
                const words = vocabularyData.filter(w => w.hsk === canvasHSK && w.track === canvasTrack && w.lesson === canvasLesson);
                if (words.length > 0 && canvasWordIndex >= words.length - 1) {
                    canvasFeedback.textContent = `Lesson complete! You've finished all ${words.length} words in this lesson. Score: ${canvasScore} pts`;
                    canvasFeedback.className = 'canvas-feedback success';
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
    toast.textContent = message;
    toast.classList.add('show');
}

function hideToast() {
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
        utterance.rate = 0.8;
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
        if (!canvas || !canvas.parentElement) return;

        const wrapper = canvas.parentElement;
        const wrapperStyles = getComputedStyle(wrapper);
        const horizontalPadding = parseFloat(wrapperStyles.paddingLeft) + parseFloat(wrapperStyles.paddingRight);
        const availableWidth = wrapper.getBoundingClientRect().width - horizontalPadding;
        const availableHeight = window.innerHeight - 300;
        const compactViewport = window.innerWidth <= 768 && window.innerHeight >= 600;
        const compactHeightLimit = window.innerHeight - 600;
        const heightLimit = compactViewport
            ? Math.max(220, compactHeightLimit)
            : window.innerHeight >= 600
                ? availableHeight
                : Number.POSITIVE_INFINITY;
        const size = Math.max(0, Math.min(availableWidth, heightLimit, 560));
        canvas.style.width = `${size}px`;
        canvas.style.height = `${size}px`;
    if (canvasHanziWriter && size > 0) {
                canvasHanziWriter.updateDimensions({ width: size, height: size });
    }
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
    updateHSKProgress();
    updateAchievements();
}

function updateProfileStats() {
    profileStreak.textContent = streakData.streak;
    profileLearned.textContent = streakData.totalLearned;
    profileXP.textContent = streakData.xp;
    
    // Calculate user level based on XP
    const level = Math.floor(streakData.xp / 100) + 1;
    userLevel.textContent = level;
}

function loadProfileData() {
    const profileData = JSON.parse(localStorage.getItem('profileData')) || {
        username: 'Chinese Learner',
        avatar: '👤',
        dailyGoal: 10
    };
    
    profileUsername.textContent = profileData.username;
    profileAvatar.textContent = profileData.avatar;
    dailyGoalDisplay.textContent = profileData.dailyGoal;
    selectedAvatar = profileData.avatar;
}

function openProfileModal() {
    const profileData = JSON.parse(localStorage.getItem('profileData')) || {
        username: 'Chinese Learner',
        avatar: '👤',
        dailyGoal: 10
    };
    
    usernameInput.value = profileData.username;
    dailyGoalInput.value = profileData.dailyGoal;
    selectedAvatar = profileData.avatar;
    
    // Update avatar selection
    avatarOptions.forEach(option => {
        option.classList.remove('selected');
        if (option.dataset.avatar === selectedAvatar) {
            option.classList.add('selected');
        }
    });
    
    editProfileModal.classList.add('active');
}

function closeProfileModal() {
    editProfileModal.classList.remove('active');
}

function saveProfile() {
    const profileData = {
        username: usernameInput.value || 'Chinese Learner',
        avatar: selectedAvatar,
        dailyGoal: parseInt(dailyGoalInput.value) || 10
    };
    
    localStorage.setItem('profileData', JSON.stringify(profileData));
    
    profileUsername.textContent = profileData.username;
    profileAvatar.textContent = profileData.avatar;
    dailyGoalDisplay.textContent = profileData.dailyGoal;
    
    closeProfileModal();
}

function updateHSKProgress() {
    // Calculate progress for each HSK level.
    // HSK 1 has two separate curricula in this app: Classic HSK and New HSK 3.0.
    // They are counted independently and NEVER combined.
    const hsk1Words = vocabularyData.filter(w => w.hsk === 1 && w.track === 'classic').length;
    const hsk2Words = vocabularyData.filter(w => w.hsk === 2).length;
    const hsk3Words = vocabularyData.filter(w => w.hsk === 3).length;
    const newHskWords = vocabularyData.filter(w => w.hsk === 1 && w.track === 'new').length;
    
    const hsk1Learned = vocabularyData.filter(w => w.hsk === 1 && w.track === 'classic' && learnedWords.includes(w.id)).length;
    const hsk2Learned = vocabularyData.filter(w => w.hsk === 2 && learnedWords.includes(w.id)).length;
    const hsk3Learned = vocabularyData.filter(w => w.hsk === 3 && learnedWords.includes(w.id)).length;
    const newHskLearned = vocabularyData.filter(w => w.hsk === 1 && w.track === 'new' && learnedWords.includes(w.id)).length;
    
    const hsk1PercentVal = hsk1Words > 0 ? Math.round((hsk1Learned / hsk1Words) * 100) : 0;
    const hsk2PercentVal = hsk2Words > 0 ? Math.round((hsk2Learned / hsk2Words) * 100) : 0;
    const hsk3PercentVal = hsk3Words > 0 ? Math.round((hsk3Learned / hsk3Words) * 100) : 0;
    const newHskPercentVal = newHskWords > 0 ? Math.round((newHskLearned / newHskWords) * 100) : 0;
    
    hsk1Percent.textContent = `${hsk1PercentVal}%`;
    hsk2Percent.textContent = `${hsk2PercentVal}%`;
    hsk3Percent.textContent = `${hsk3PercentVal}%`;
    newHskPercent.textContent = `${newHskPercentVal}%`;
    
    // Learned / total word counts for the two active tracks (display only —
    // the progress calculation above is unchanged).
    hsk1Count.textContent = `${hsk1Learned} / ${hsk1Words} words`;
    newHskCount.textContent = `${newHskLearned} / ${newHskWords} words`;
    
    hsk1Fill.style.width = `${hsk1PercentVal}%`;
    hsk2Fill.style.width = `${hsk2PercentVal}%`;
    hsk3Fill.style.width = `${hsk3PercentVal}%`;
    newHskFill.style.width = `${newHskPercentVal}%`;
}

function updateAchievements() {
    const achievements = achievementsGrid.querySelectorAll('.achievement-badge');
    
    achievements.forEach(badge => {
        const achievementType = badge.dataset.achievement;
        let unlocked = false;
        
        switch(achievementType) {
            case 'first-word':
                unlocked = streakData.totalLearned >= 1;
                break;
            case 'streak-3':
                unlocked = streakData.streak >= 3;
                break;
            case 'streak-7':
                unlocked = streakData.streak >= 7;
                break;
            case 'words-50':
                unlocked = streakData.totalLearned >= 50;
                break;
            case 'words-100':
                unlocked = streakData.totalLearned >= 100;
                break;
            case 'xp-100':
                unlocked = streakData.xp >= 100;
                break;
            case 'first-100-xp':
                unlocked = streakData.xp >= 100;
                break;
            case 'master-calligrapher':
                unlocked = dailyProgress.traces >= 3;
                break;
        }
        
        if (unlocked) {
            badge.classList.remove('locked');
            badge.classList.add('unlocked');
        } else {
            badge.classList.add('locked');
            badge.classList.remove('unlocked');
        }
    });
}
