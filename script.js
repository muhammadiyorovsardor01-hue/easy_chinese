// Global state
let vocabularyData = [
  // Lesson 1 - 你好 (Hello)
  { id: 1, hsk: 1, lesson: 1, hanzi: "你", pinyin: "nǐ", uzbek: "Siz" },
  { id: 2, hsk: 1, lesson: 1, hanzi: "好", pinyin: "hǎo", uzbek: "Yaxshi" },
  { id: 3, hsk: 1, lesson: 1, hanzi: "您", pinyin: "nín", uzbek: "Siz (hurmatli)" },
  { id: 4, hsk: 1, lesson: 1, hanzi: "你们", pinyin: "nǐmen", uzbek: "Sizlar" },
  { id: 5, hsk: 1, lesson: 1, hanzi: "对不起", pinyin: "duìbuqǐ", uzbek: "Kechirasiz" },
  { id: 6, hsk: 1, lesson: 1, hanzi: "没关系", pinyin: "méi guānxi", uzbek: "Hech gap emas" },
  
  // Lesson 2 - 谢谢你 (Thank you)
  { id: 7, hsk: 1, lesson: 2, hanzi: "谢谢", pinyin: "xièxie", uzbek: "Rahmat" },
  { id: 8, hsk: 1, lesson: 2, hanzi: "不", pinyin: "bù", uzbek: "Yo'q" },
  { id: 9, hsk: 1, lesson: 2, hanzi: "不客气", pinyin: "bú kèqi", uzbek: "Arzimaydi" },
  { id: 10, hsk: 1, lesson: 2, hanzi: "再见", pinyin: "zàijiàn", uzbek: "Xayr" },
  
  // Lesson 3 - 你叫什么名字 (What's your name)
  { id: 11, hsk: 1, lesson: 3, hanzi: "叫", pinyin: "jiào", uzbek: "Chaqirmoq, atmoq" },
  { id: 12, hsk: 1, lesson: 3, hanzi: "什么", pinyin: "shénme", uzbek: "Nima" },
  { id: 13, hsk: 1, lesson: 3, hanzi: "名字", pinyin: "míngzi", uzbek: "Ism" },
  { id: 14, hsk: 1, lesson: 3, hanzi: "我", pinyin: "wǒ", uzbek: "Men" },
  { id: 15, hsk: 1, lesson: 3, hanzi: "是", pinyin: "shì", uzbek: "Bo'lmoq" },
  { id: 16, hsk: 1, lesson: 3, hanzi: "老师", pinyin: "lǎoshī", uzbek: "O'qituvchi" },
  { id: 17, hsk: 1, lesson: 3, hanzi: "吗", pinyin: "ma", uzbek: "Savol qo'shimchasi" },
  { id: 18, hsk: 1, lesson: 3, hanzi: "学生", pinyin: "xuésheng", uzbek: "Talaba" },
  { id: 19, hsk: 1, lesson: 3, hanzi: "人", pinyin: "rén", uzbek: "Odamlar" },
  { id: 20, hsk: 1, lesson: 3, hanzi: "李月", pinyin: "Lǐ Yuè", uzbek: "Li Yue (ism)" },
  { id: 21, hsk: 1, lesson: 3, hanzi: "中国", pinyin: "Zhōngguó", uzbek: "Xitoy" },
  { id: 22, hsk: 1, lesson: 3, hanzi: "美国", pinyin: "Měiguó", uzbek: "Amerika" },
  
  // Lesson 4 - 她是我的汉语老师 (She is my Chinese teacher)
  { id: 23, hsk: 1, lesson: 4, hanzi: "她", pinyin: "tā", uzbek: "U (ayol)" },
  { id: 24, hsk: 1, lesson: 4, hanzi: "谁", pinyin: "shéi", uzbek: "Kim" },
  { id: 25, hsk: 1, lesson: 4, hanzi: "的", pinyin: "de", uzbek: "Belgish" },
  { id: 26, hsk: 1, lesson: 4, hanzi: "汉语", pinyin: "Hànyǔ", uzbek: "Xitoy tili" },
  { id: 27, hsk: 1, lesson: 4, hanzi: "哪", pinyin: "nǎ", uzbek: "Qaysi" },
  { id: 28, hsk: 1, lesson: 4, hanzi: "国", pinyin: "guó", uzbek: "Davlat" },
  { id: 29, hsk: 1, lesson: 4, hanzi: "呢", pinyin: "ne", uzbek: "Savol qo'shimchasi" },
  { id: 30, hsk: 1, lesson: 4, hanzi: "他", pinyin: "tā", uzbek: "U (erkak)" },
  { id: 31, hsk: 1, lesson: 4, hanzi: "同学", pinyin: "tóngxué", uzbek: "Sinfdosh" },
  { id: 32, hsk: 1, lesson: 4, hanzi: "朋友", pinyin: "péngyou", uzbek: "Do'st" },
  
  // Lesson 5 - 她女儿今年二十岁 (Her daughter is 20 years old this year)
  { id: 33, hsk: 1, lesson: 5, hanzi: "家", pinyin: "jiā", uzbek: "Oila, uy" },
  { id: 34, hsk: 1, lesson: 5, hanzi: "有", pinyin: "yǒu", uzbek: "Bormoq" },
  { id: 35, hsk: 1, lesson: 5, hanzi: "口", pinyin: "kǒu", uzbek: "Oila a'zosi uchun hisoblagich" },
  { id: 36, hsk: 1, lesson: 5, hanzi: "女儿", pinyin: "nǚ'ér", uzbek: "Qizi" },
  { id: 37, hsk: 1, lesson: 5, hanzi: "几", pinyin: "jǐ", uzbek: "Nechta (o'n tagacha)" },
  { id: 38, hsk: 1, lesson: 5, hanzi: "岁", pinyin: "suì", uzbek: "Yosh" },
  { id: 39, hsk: 1, lesson: 5, hanzi: "了", pinyin: "le", uzbek: "O'zgarish qo'shimchasi" },
  { id: 40, hsk: 1, lesson: 5, hanzi: "今年", pinyin: "jīnnián", uzbek: "Bu yil" },
  { id: 41, hsk: 1, lesson: 5, hanzi: "多", pinyin: "duō", uzbek: "Qancha" },
  { id: 42, hsk: 1, lesson: 5, hanzi: "大", pinyin: "dà", uzbek: "Katta (yoshda)" },
  
  // Lesson 6 - 我会说汉语 (I can speak Chinese)
  { id: 43, hsk: 1, lesson: 6, hanzi: "会", pinyin: "huì", uzbek: "Qila olmoq" },
  { id: 44, hsk: 1, lesson: 6, hanzi: "说", pinyin: "shuō", uzbek: "Gapirmoq" },
  { id: 45, hsk: 1, lesson: 6, hanzi: "妈妈", pinyin: "māma", uzbek: "Onasi" },
  { id: 46, hsk: 1, lesson: 6, hanzi: "菜", pinyin: "cài", uzbek: "Taom, sabzavot" },
  { id: 47, hsk: 1, lesson: 6, hanzi: "很", pinyin: "hěn", uzbek: "Juda" },
  { id: 48, hsk: 1, lesson: 6, hanzi: "好吃", pinyin: "hǎochī", uzbek: "Mazali" },
  { id: 49, hsk: 1, lesson: 6, hanzi: "做", pinyin: "zuò", uzbek: "Qilmoq, tayyorlamoq" },
  { id: 50, hsk: 1, lesson: 6, hanzi: "写", pinyin: "xiě", uzbek: "Yozmoq" },
  { id: 51, hsk: 1, lesson: 6, hanzi: "汉字", pinyin: "Hànzì", uzbek: "Xitoy harflari" },
  { id: 52, hsk: 1, lesson: 6, hanzi: "字", pinyin: "zì", uzbek: "Harf, so'z" },
  { id: 53, hsk: 1, lesson: 6, hanzi: "怎么", pinyin: "zěnme", uzbek: "Qanday" },
  { id: 54, hsk: 1, lesson: 6, hanzi: "读", pinyin: "dú", uzbek: "O'qimoq" },
  
  // Lesson 7 - 今天几号 (What's the date today)
  { id: 55, hsk: 1, lesson: 7, hanzi: "请", pinyin: "qǐng", uzbek: "Marhamat; taklif qilmoq" },
  { id: 56, hsk: 1, lesson: 7, hanzi: "问", pinyin: "wèn", uzbek: "Soramoq" },
  { id: 57, hsk: 1, lesson: 7, hanzi: "今天", pinyin: "jīntiān", uzbek: "Bugun" },
  { id: 58, hsk: 1, lesson: 7, hanzi: "号", pinyin: "hào", uzbek: "Sana; raqam" },
  { id: 59, hsk: 1, lesson: 7, hanzi: "月", pinyin: "yuè", uzbek: "Oy" },
  { id: 60, hsk: 1, lesson: 7, hanzi: "星期", pinyin: "xīngqī", uzbek: "Hafta" },
  { id: 61, hsk: 1, lesson: 7, hanzi: "昨天", pinyin: "zuótiān", uzbek: "Kecha" },
  { id: 62, hsk: 1, lesson: 7, hanzi: "明天", pinyin: "míngtiān", uzbek: "Ertaga" },
  { id: 63, hsk: 1, lesson: 7, hanzi: "去", pinyin: "qù", uzbek: "Ketmoq" },
  { id: 64, hsk: 1, lesson: 7, hanzi: "学校", pinyin: "xuéxiào", uzbek: "Maktab" },
  { id: 65, hsk: 1, lesson: 7, hanzi: "看", pinyin: "kàn", uzbek: "Ko'rmoq, o'qimoq" },
  { id: 66, hsk: 1, lesson: 7, hanzi: "书", pinyin: "shū", uzbek: "Kitob" },
  
  // Lesson 8 - 我想喝茶 (I'd like some tea)
  { id: 67, hsk: 1, lesson: 8, hanzi: "想", pinyin: "xiǎng", uzbek: "Xohlamoq, o'ylamoq" },
  { id: 68, hsk: 1, lesson: 8, hanzi: "喝", pinyin: "hē", uzbek: "Ichmoq" },
  { id: 69, hsk: 1, lesson: 8, hanzi: "茶", pinyin: "chá", uzbek: "Choy" },
  { id: 70, hsk: 1, lesson: 8, hanzi: "吃", pinyin: "chī", uzbek: "Yemoq" },
  { id: 71, hsk: 1, lesson: 8, hanzi: "米饭", pinyin: "mǐfàn", uzbek: "Guruch" },
  { id: 72, hsk: 1, lesson: 8, hanzi: "下午", pinyin: "xiàwǔ", uzbek: "Tushdan keyin" },
  { id: 73, hsk: 1, lesson: 8, hanzi: "商店", pinyin: "shāngdiàn", uzbek: "Do'kon" },
  { id: 74, hsk: 1, lesson: 8, hanzi: "买", pinyin: "mǎi", uzbek: "Sotib olish" },
  { id: 75, hsk: 1, lesson: 8, hanzi: "个", pinyin: "gè", uzbek: "Umumiy hisoblagich" },
  { id: 76, hsk: 1, lesson: 8, hanzi: "杯子", pinyin: "bēizi", uzbek: "Piola" },
  { id: 77, hsk: 1, lesson: 8, hanzi: "这", pinyin: "zhè", uzbek: "Bu" },
  { id: 78, hsk: 1, lesson: 8, hanzi: "多少", pinyin: "duōshao", uzbek: "Qancha" },
  { id: 79, hsk: 1, lesson: 8, hanzi: "钱", pinyin: "qián", uzbek: "Pul" },
  { id: 80, hsk: 1, lesson: 8, hanzi: "块", pinyin: "kuài", uzbek: "Yuan (pul birligi)" },
  { id: 81, hsk: 1, lesson: 8, hanzi: "那", pinyin: "nà", uzbek: "U" },
  
  // Lesson 9 - 你儿子在哪儿工作 (Where does your son work)
  { id: 82, hsk: 1, lesson: 9, hanzi: "小", pinyin: "xiǎo", uzbek: "Kichik" },
  { id: 83, hsk: 1, lesson: 9, hanzi: "猫", pinyin: "māo", uzbek: "Mushuk" },
  { id: 84, hsk: 1, lesson: 9, hanzi: "在", pinyin: "zài", uzbek: "Joylashmoq; da, da" },
  { id: 85, hsk: 1, lesson: 9, hanzi: "那儿", pinyin: "nàr", uzbek: "U yerda" },
  { id: 86, hsk: 1, lesson: 9, hanzi: "狗", pinyin: "gǒu", uzbek: "It" },
  { id: 87, hsk: 1, lesson: 9, hanzi: "椅子", pinyin: "yǐzi", uzbek: "Stul" },
  { id: 88, hsk: 1, lesson: 9, hanzi: "下面", pinyin: "xiàmiàn", uzbek: "Pastda" },
  { id: 89, hsk: 1, lesson: 9, hanzi: "哪儿", pinyin: "nǎr", uzbek: "Qayer" },
  { id: 90, hsk: 1, lesson: 9, hanzi: "工作", pinyin: "gōngzuò", uzbek: "Ishlamoq; ish" },
  { id: 91, hsk: 1, lesson: 9, hanzi: "儿子", pinyin: "érzi", uzbek: "O'g'li" },
  { id: 92, hsk: 1, lesson: 9, hanzi: "医院", pinyin: "yīyuàn", uzbek: "Kasalxona" },
  { id: 93, hsk: 1, lesson: 9, hanzi: "医生", pinyin: "yīshēng", uzbek: "Shifokor" },
  { id: 94, hsk: 1, lesson: 9, hanzi: "爸爸", pinyin: "bàba", uzbek: "Otasi" },
  
  // Lesson 10 - 我能坐这儿吗 (Can I sit here)
  { id: 95, hsk: 1, lesson: 10, hanzi: "桌子", pinyin: "zhuōzi", uzbek: "Stol" },
  { id: 96, hsk: 1, lesson: 10, hanzi: "上", pinyin: "shàng", uzbek: "Ustida, yuqorida" },
  { id: 97, hsk: 1, lesson: 10, hanzi: "电脑", pinyin: "diànnǎo", uzbek: "Kompyuter" },
  { id: 98, hsk: 1, lesson: 10, hanzi: "和", pinyin: "hé", uzbek: "Va" },
  { id: 99, hsk: 1, lesson: 10, hanzi: "本", pinyin: "běn", uzbek: "Kitob uchun hisoblagich" },
  { id: 100, hsk: 1, lesson: 10, hanzi: "里", pinyin: "lǐ", uzbek: "Ichida" },
  { id: 101, hsk: 1, lesson: 10, hanzi: "前面", pinyin: "qiánmiàn", uzbek: "Oldinda" },
  { id: 102, hsk: 1, lesson: 10, hanzi: "后面", pinyin: "hòumiàn", uzbek: "Orqasida" },
  { id: 103, hsk: 1, lesson: 10, hanzi: "这儿", pinyin: "zhèr", uzbek: "Bu yerda" },
  { id: 104, hsk: 1, lesson: 10, hanzi: "没有", pinyin: "méiyǒu", uzbek: "Yo'q; bo'lmaydi" },
  { id: 105, hsk: 1, lesson: 10, hanzi: "能", pinyin: "néng", uzbek: "Qila olmoq" },
  { id: 106, hsk: 1, lesson: 10, hanzi: "坐", pinyin: "zuò", uzbek: "O'tirmoq" },
  { id: 107, hsk: 1, lesson: 10, hanzi: "王方", pinyin: "Wáng Fāng", uzbek: "Van Fan (ism)" },
  { id: 108, hsk: 1, lesson: 10, hanzi: "谢朋", pinyin: "Xiè Péng", uzbek: "Sye Pen (ism)" },
  
  // Lesson 11 - 现在几点 (What's the time now)
  { id: 109, hsk: 1, lesson: 11, hanzi: "现在", pinyin: "xiànzài", uzbek: "Hozir" },
  { id: 110, hsk: 1, lesson: 11, hanzi: "点", pinyin: "diǎn", uzbek: "Soat; nuqta" },
  { id: 111, hsk: 1, lesson: 11, hanzi: "分", pinyin: "fēn", uzbek: "Daqiqa" },
  { id: 112, hsk: 1, lesson: 11, hanzi: "中午", pinyin: "zhōngwǔ", uzbek: "Tush" },
  { id: 113, hsk: 1, lesson: 11, hanzi: "吃饭", pinyin: "chī fàn", uzbek: "Taom yemoq" },
  { id: 114, hsk: 1, lesson: 11, hanzi: "时候", pinyin: "shíhou", uzbek: "Vaqt" },
  { id: 115, hsk: 1, lesson: 11, hanzi: "回", pinyin: "huí", uzbek: "Qaytmoq" },
  { id: 116, hsk: 1, lesson: 11, hanzi: "我们", pinyin: "wǒmen", uzbek: "Biz" },
  { id: 117, hsk: 1, lesson: 11, hanzi: "电影", pinyin: "diànyǐng", uzbek: "Kino" },
  { id: 118, hsk: 1, lesson: 11, hanzi: "住", pinyin: "zhù", uzbek: "Yashamoq" },
  { id: 119, hsk: 1, lesson: 11, hanzi: "前", pinyin: "qián", uzbek: "Oldin; old" },
  { id: 120, hsk: 1, lesson: 11, hanzi: "北京", pinyin: "Běijīng", uzbek: "Pekin" },
  
  // Lesson 12 - 明天天气怎么样 (What will the weather be like tomorrow)
  { id: 121, hsk: 1, lesson: 12, hanzi: "天气", pinyin: "tiānqì", uzbek: "Ob-havo" },
  { id: 122, hsk: 1, lesson: 12, hanzi: "怎么样", pinyin: "zěnmeyàng", uzbek: "Qanday" },
  { id: 123, hsk: 1, lesson: 12, hanzi: "太", pinyin: "tài", uzbek: "Juda (juda...)" },
  { id: 124, hsk: 1, lesson: 12, hanzi: "热", pinyin: "rè", uzbek: "Issiq" },
  { id: 125, hsk: 1, lesson: 12, hanzi: "冷", pinyin: "lěng", uzbek: "Sovuq" },
  { id: 126, hsk: 1, lesson: 12, hanzi: "下雨", pinyin: "xià yǔ", uzbek: "Yomg'ir yog'moq" },
  { id: 127, hsk: 1, lesson: 12, hanzi: "小姐", pinyin: "xiǎojiě", uzbek: "Xonim" },
  { id: 128, hsk: 1, lesson: 12, hanzi: "来", pinyin: "lái", uzbek: "Kelmoq" },
  { id: 129, hsk: 1, lesson: 12, hanzi: "身体", pinyin: "shēntǐ", uzbek: "Tana, sog'liq" },
  { id: 130, hsk: 1, lesson: 12, hanzi: "爱", pinyin: "ài", uzbek: "Sevmoq" },
  { id: 131, hsk: 1, lesson: 12, hanzi: "些", pinyin: "xiē", uzbek: "Bir oz, bir nechta" },
  { id: 132, hsk: 1, lesson: 12, hanzi: "水果", pinyin: "shuǐguǒ", uzbek: "Meva" },
  { id: 133, hsk: 1, lesson: 12, hanzi: "水", pinyin: "shuǐ", uzbek: "Suv" },
  
  // Lesson 13 - 他在学做中国菜呢 (He is learning to cook Chinese food)
  { id: 134, hsk: 1, lesson: 13, hanzi: "喂", pinyin: "wèi", uzbek: "Allo (telefonda); hey" },
  { id: 135, hsk: 1, lesson: 13, hanzi: "也", pinyin: "yě", uzbek: "Ham" },
  { id: 136, hsk: 1, lesson: 13, hanzi: "学习", pinyin: "xuéxí", uzbek: "O'qimoq, o'rganmoq" },
  { id: 137, hsk: 1, lesson: 13, hanzi: "上午", pinyin: "shàngwǔ", uzbek: "Tushdan oldin" },
  { id: 138, hsk: 1, lesson: 13, hanzi: "睡觉", pinyin: "shuì jiào", uzbek: "Uxlamoq" },
  { id: 139, hsk: 1, lesson: 13, hanzi: "电视", pinyin: "diànshì", uzbek: "Televizor" },
  { id: 140, hsk: 1, lesson: 13, hanzi: "喜欢", pinyin: "xǐhuan", uzbek: "Yoqtirmoq" },
  { id: 141, hsk: 1, lesson: 13, hanzi: "给", pinyin: "gěi", uzbek: "Berish; uchun" },
  { id: 142, hsk: 1, lesson: 13, hanzi: "打电话", pinyin: "dǎ diànhuà", uzbek: "Telefon qilmoq" },
  { id: 143, hsk: 1, lesson: 13, hanzi: "吧", pinyin: "ba", uzbek: "Taklif qo'shimchasi" },
  { id: 144, hsk: 1, lesson: 13, hanzi: "大卫", pinyin: "Dàwèi", uzbek: "Devid (ism)" },
  
  // Lesson 14 - 她买了不少衣服 (She has bought quite a few clothes)
  { id: 145, hsk: 1, lesson: 14, hanzi: "东西", pinyin: "dōngxi", uzbek: "Narsa, buyum" },
  { id: 146, hsk: 1, lesson: 14, hanzi: "一点儿", pinyin: "yìdiǎnr", uzbek: "Bir oz" },
  { id: 147, hsk: 1, lesson: 14, hanzi: "苹果", pinyin: "píngguǒ", uzbek: "Olma" },
  { id: 148, hsk: 1, lesson: 14, hanzi: "看见", pinyin: "kànjiàn", uzbek: "Ko'rmoq" },
  { id: 149, hsk: 1, lesson: 14, hanzi: "先生", pinyin: "xiānsheng", uzbek: "Janob; eri" },
  { id: 150, hsk: 1, lesson: 14, hanzi: "开", pinyin: "kāi", uzbek: "Haydash; ochmoq" },
  { id: 151, hsk: 1, lesson: 14, hanzi: "车", pinyin: "chē", uzbek: "Mashina" },
  { id: 152, hsk: 1, lesson: 14, hanzi: "回来", pinyin: "huílái", uzbek: "Qaytib kelmoq" },
  { id: 153, hsk: 1, lesson: 14, hanzi: "分钟", pinyin: "fēnzhōng", uzbek: "Daqiqa" },
  { id: 154, hsk: 1, lesson: 14, hanzi: "后", pinyin: "hòu", uzbek: "Keyin" },
  { id: 155, hsk: 1, lesson: 14, hanzi: "衣服", pinyin: "yīfu", uzbek: "Kiyimlar" },
  { id: 156, hsk: 1, lesson: 14, hanzi: "漂亮", pinyin: "piàoliang", uzbek: "Chiroyli" },
  { id: 157, hsk: 1, lesson: 14, hanzi: "啊", pinyin: "a", uzbek: "Modal qo'shimcha" },
  { id: 158, hsk: 1, lesson: 14, hanzi: "少", pinyin: "shǎo", uzbek: "Kam (juda ko'p)" },
  { id: 159, hsk: 1, lesson: 14, hanzi: "这些", pinyin: "zhèxiē", uzbek: "Bular" },
  { id: 160, hsk: 1, lesson: 14, hanzi: "都", pinyin: "dōu", uzbek: "Hammasi" },
  { id: 161, hsk: 1, lesson: 14, hanzi: "张", pinyin: "Zhāng", uzbek: "Jang (familiya)" },
  
  // Lesson 15 - 我是坐飞机来的 (I came here by air)
  { id: 162, hsk: 1, lesson: 15, hanzi: "认识", pinyin: "rènshi", uzbek: "Tanimoq" },
  { id: 163, hsk: 1, lesson: 15, hanzi: "年", pinyin: "nián", uzbek: "Yil" },
  { id: 164, hsk: 1, lesson: 15, hanzi: "大学", pinyin: "dàxué", uzbek: "Universitet" },
  { id: 165, hsk: 1, lesson: 15, hanzi: "饭店", pinyin: "fàndiàn", uzbek: "Restoran; mehmonxona" },
  { id: 166, hsk: 1, lesson: 15, hanzi: "出租车", pinyin: "chūzūchē", uzbek: "Taksi" },
  { id: 167, hsk: 1, lesson: 15, hanzi: "一起", pinyin: "yìqǐ", uzbek: "Birgalikda" },
  { id: 168, hsk: 1, lesson: 15, hanzi: "高兴", pinyin: "gāoxìng", uzbek: "Xursand" },
  { id: 169, hsk: 1, lesson: 15, hanzi: "听", pinyin: "tīng", uzbek: "Tinglamoq" },
  { id: 170, hsk: 1, lesson: 15, hanzi: "飞机", pinyin: "fēijī", uzbek: "Samolyot" }
];
let currentHSK = 1;
let currentLesson = 1;
let currentWords = [];
let flashcardIndex = 0;
let quizIndex = 0;
let quizScore = 0;
let quizAnswered = false;
let hanziWriter = null;
let learnedWords = JSON.parse(localStorage.getItem('learnedWords')) || [];

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
const currentQuestion = document.getElementById('currentQuestion');
const totalQuestions = document.getElementById('totalQuestions');
const tabBtns = document.querySelectorAll('.tab-btn');
const modeContents = document.querySelectorAll('.mode-content');
const audioBtn = document.getElementById('audioBtn');
const strokeBtn = document.getElementById('strokeBtn');
const strokeOrderTarget = document.getElementById('strokeOrderTarget');
const markLearned = document.getElementById('markLearned');
const learnedCount = document.getElementById('learnedCount');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initializeTheme();
    setupEventListeners();
    
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
    
    // HSK level buttons
    document.querySelectorAll('.hsk-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            currentHSK = parseInt(btn.dataset.hsk);
            showLessonsView();
        });
    });

    // Back buttons
    backToDashboard.addEventListener('click', showDashboard);
    backToLessons.addEventListener('click', showLessonsView);

    // Flashcard controls
    flashcard.addEventListener('click', () => flashcard.classList.toggle('flipped'));
    prevCard.addEventListener('click', () => navigateFlashcard(-1));
    nextCard.addEventListener('click', () => navigateFlashcard(1));
    shuffleCards.addEventListener('click', shuffleFlashcards);
    audioBtn.addEventListener('click', (e) => {
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

    // Mode tabs
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => switchMode(btn.dataset.mode));
    });
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
    generateLessonsGrid();
    showView(lessons);
}

function showLessonView(lessonNumber) {
    currentLesson = lessonNumber;
    lessonTitle.textContent = `Lesson ${lessonNumber}`;
    currentWords = vocabularyData.filter(word => 
        word.hsk === currentHSK && word.lesson === currentLesson
    );
    
    if (currentWords.length === 0) {
        // If no words for this lesson, show a message
        lessonTitle.textContent = `Lesson ${lessonNumber} - No words available`;
        currentWords = [{ id: 0, hsk: currentHSK, lesson: lessonNumber, hanzi: "暂无", pinyin: "zàn wú", uzbek: "Hozircha yo'q" }];
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
    
    // Get all unique lessons for current HSK level
    const lessons = [...new Set(
        vocabularyData
            .filter(word => word.hsk === currentHSK)
            .map(word => word.lesson)
    )].sort((a, b) => a - b);
    
    // If no lessons found, create 15 placeholder lessons
    if (lessons.length === 0) {
        for (let i = 1; i <= 15; i++) {
            const lessonBtn = document.createElement('button');
            lessonBtn.className = 'lesson-btn';
            lessonBtn.textContent = `Lesson ${i}`;
            lessonBtn.addEventListener('click', () => showLessonView(i));
            lessonsGrid.appendChild(lessonBtn);
        }
    } else {
        lessons.forEach(lessonNum => {
            const lessonBtn = document.createElement('button');
            lessonBtn.className = 'lesson-btn';
            lessonBtn.textContent = `Lesson ${lessonNum}`;
            lessonBtn.addEventListener('click', () => showLessonView(lessonNum));
            lessonsGrid.appendChild(lessonBtn);
        });
    }
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
        return;
    }
    
    // Cancel any ongoing speech
    window.speechSynthesis.cancel();
    
    // Small delay to ensure cancellation is complete
    setTimeout(() => {
        try {
            const utterance = new SpeechSynthesisUtterance(word.hanzi);
            utterance.lang = 'zh-CN';
            utterance.rate = 0.8;
            utterance.pitch = 1;
            utterance.volume = 1;
            
            // Get available voices
            const voices = window.speechSynthesis.getVoices();
            
            // Try to find Chinese voice (prefer zh-CN, then any zh)
            let chineseVoice = voices.find(voice => voice.lang === 'zh-CN');
            if (!chineseVoice) {
                chineseVoice = voices.find(voice => voice.lang.startsWith('zh'));
            }
            
            // Set voice if found, otherwise use default
            if (chineseVoice) {
                utterance.voice = chineseVoice;
                console.log('Using Chinese voice:', chineseVoice.name, chineseVoice.lang);
            } else {
                console.log('No Chinese voice found, using default with zh-CN lang');
            }
            
            // Handle errors
            utterance.onerror = (event) => {
                console.error('Speech synthesis error:', event.error);
                // Only show alert for actual errors, not cancellations
                if (event.error !== 'canceled' && event.error !== 'interrupted') {
                    console.warn('Speech error:', event.error);
                }
            };
            
            utterance.onend = () => {
                console.log('Speech synthesis completed');
            };
            
            window.speechSynthesis.speak(utterance);
        } catch (error) {
            console.error('Error in speech synthesis:', error);
        }
    }, 100);
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
    }
    
    // Save to localStorage
    localStorage.setItem('learnedWords', JSON.stringify(learnedWords));
    
    // Update UI
    updateLearnedButton();
    updateLearnedCount();
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
    quizHanzi.textContent = word.hanzi;
    quizScoreElement.textContent = quizScore;
    currentQuestion.textContent = quizIndex + 1;
    totalQuestions.textContent = currentWords.length;
    
    // Generate options
    const options = generateQuizOptions(word);
    
    quizOptions.innerHTML = '';
    options.forEach((option, index) => {
        const optionBtn = document.createElement('button');
        optionBtn.className = 'quiz-option';
        optionBtn.textContent = option.uzbek;
        optionBtn.addEventListener('click', () => checkAnswer(optionBtn, option.id === word.id));
        quizOptions.appendChild(optionBtn);
    });
}

function generateQuizOptions(correctWord) {
    const options = [correctWord];
    
    // Get random wrong answers from other words
    const otherWords = vocabularyData.filter(w => w.id !== correctWord.id);
    
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
            if (option.textContent === correctWord.uzbek) {
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
    modeContents.forEach(content => content.classList.remove('active'));
    
    document.querySelector(`[data-mode="${mode}"]`).classList.add('active');
    document.getElementById(`${mode}Mode`).classList.add('active');
}
