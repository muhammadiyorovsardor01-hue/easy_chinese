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
  { id: 170, hsk: 1, lesson: 15, hanzi: "飞机", pinyin: "fēijī", uzbek: "Samolyot" },

  // HSK 3.0 Band 1 - Additional Vocabulary (300 words)
  // Lesson 16 - HSK 3.0 Band 1 Greetings & Pronouns (20 words)
  { id: 171, hsk: 1, lesson: 16, hanzi: "爱", pinyin: "ài", uzbek: "Sevmoq, muhabbat" },
  { id: 172, hsk: 1, lesson: 16, hanzi: "吧", pinyin: "ba", uzbek: "Qo'shimcha (taklif)" },
  { id: 173, hsk: 1, lesson: 16, hanzi: "八", pinyin: "bā", uzbek: "Sakkiz" },
  { id: 174, hsk: 1, lesson: 16, hanzi: "不客气", pinyin: "bù kèqi", uzbek: "Arzimaydi" },
  { id: 175, hsk: 1, lesson: 16, hanzi: "不要", pinyin: "bù yào", uzbek: "Qilmang" },
  { id: 176, hsk: 1, lesson: 16, hanzi: "的", pinyin: "de", uzbek: "Belgish" },
  { id: 177, hsk: 1, lesson: 16, hanzi: "了", pinyin: "le", uzbek: "O'zgarish qo'shimchasi" },
  { id: 178, hsk: 1, lesson: 16, hanzi: "吗", pinyin: "ma", uzbek: "Savol qo'shimchasi" },
  { id: 179, hsk: 1, lesson: 16, hanzi: "们", pinyin: "men", uzbek: "Ko'plik qo'shimchasi" },
  { id: 180, hsk: 1, lesson: 16, hanzi: "你", pinyin: "nǐ", uzbek: "Siz" },
  { id: 181, hsk: 1, lesson: 16, hanzi: "你好", pinyin: "nǐ hǎo", uzbek: "Salom" },
  { id: 182, hsk: 1, lesson: 16, hanzi: "您", pinyin: "nín", uzbek: "Siz (hurmatli)" },
  { id: 183, hsk: 1, lesson: 16, hanzi: "你们", pinyin: "nǐmen", uzbek: "Sizlar" },
  { id: 184, hsk: 1, lesson: 16, hanzi: "呢", pinyin: "ne", uzbek: "Savol qo'shimchasi" },
  { id: 185, hsk: 1, lesson: 16, hanzi: "我", pinyin: "wǒ", uzbek: "Men" },
  { id: 186, hsk: 1, lesson: 16, hanzi: "我们", pinyin: "wǒmen", uzbek: "Biz" },
  { id: 187, hsk: 1, lesson: 16, hanzi: "谢", pinyin: "xiè", uzbek: "Rahmat" },
  { id: 188, hsk: 1, lesson: 16, hanzi: "谢谢", pinyin: "xièxie", uzbek: "Rahmat" },
  { id: 189, hsk: 1, lesson: 16, hanzi: "也", pinyin: "yě", uzbek: "Ham" },
  { id: 190, hsk: 1, lesson: 16, hanzi: "不", pinyin: "bù", uzbek: "Yo'q, emas" },

  // Lesson 17 - HSK 3.0 Band 1 Numbers & Measure Words (20 words)
  { id: 191, hsk: 1, lesson: 17, hanzi: "一", pinyin: "yī", uzbek: "Bir" },
  { id: 192, hsk: 1, lesson: 17, hanzi: "一下", pinyin: "yī xià", uzbek: "Bir oz, ozgina" },
  { id: 193, hsk: 1, lesson: 17, hanzi: "一些", pinyin: "yī xiē", uzbek: "Bir necha" },
  { id: 194, hsk: 1, lesson: 17, hanzi: "一半", pinyin: "yī bàn", uzbek: "Yarmi" },
  { id: 195, hsk: 1, lesson: 17, hanzi: "一点儿", pinyin: "yī diǎn r", uzbek: "Ozgina" },
  { id: 196, hsk: 1, lesson: 17, hanzi: "二", pinyin: "èr", uzbek: "Ikki" },
  { id: 197, hsk: 1, lesson: 17, hanzi: "三", pinyin: "sān", uzbek: "Uch" },
  { id: 198, hsk: 1, lesson: 17, hanzi: "四", pinyin: "sì", uzbek: "To'rt" },
  { id: 199, hsk: 1, lesson: 17, hanzi: "五", pinyin: "wǔ", uzbek: "Besh" },
  { id: 200, hsk: 1, lesson: 17, hanzi: "六", pinyin: "liù", uzbek: "Olti" },
  { id: 201, hsk: 1, lesson: 17, hanzi: "七", pinyin: "qī", uzbek: "Yetti" },
  { id: 202, hsk: 1, lesson: 17, hanzi: "九", pinyin: "jiǔ", uzbek: "To'qqiz" },
  { id: 203, hsk: 1, lesson: 17, hanzi: "十", pinyin: "shí", uzbek: "O'n" },
  { id: 204, hsk: 1, lesson: 17, hanzi: "百", pinyin: "bǎi", uzbek: "Yuz" },
  { id: 205, hsk: 1, lesson: 17, hanzi: "千", pinyin: "qiān", uzbek: "Ming" },
  { id: 206, hsk: 1, lesson: 17, hanzi: "半", pinyin: "bàn", uzbek: "Yarmi" },
  { id: 207, hsk: 1, lesson: 17, hanzi: "个", pinyin: "gè", uzbek: "Hisoblagich" },
  { id: 208, hsk: 1, lesson: 17, hanzi: "本", pinyin: "běn", uzbek: "Kitob hisoblagichi" },
  { id: 209, hsk: 1, lesson: 17, hanzi: "件", pinyin: "jiàn", uzbek: "Narsa hisoblagichi" },
  { id: 210, hsk: 1, lesson: 17, hanzi: "块", pinyin: "kuài", uzbek: "Yuan (pul)" },

  // Lesson 18 - HSK 3.0 Band 1 Family & People (20 words)
  { id: 211, hsk: 1, lesson: 18, hanzi: "爸爸", pinyin: "bàba", uzbek: "Otasi" },
  { id: 212, hsk: 1, lesson: 18, hanzi: "妈妈", pinyin: "mā ma", uzbek: "Onasi" },
  { id: 213, hsk: 1, lesson: 18, hanzi: "儿子", pinyin: "érzi", uzbek: "O'g'li" },
  { id: 214, hsk: 1, lesson: 18, hanzi: "女儿", pinyin: "nǚ'ér", uzbek: "Qizi" },
  { id: 215, hsk: 1, lesson: 18, hanzi: "哥哥", pinyin: "gēge", uzbek: "Akasi" },
  { id: 216, hsk: 1, lesson: 18, hanzi: "姐姐", pinyin: "jiějie", uzbek: "Opasi" },
  { id: 217, hsk: 1, lesson: 18, hanzi: "弟弟", pinyin: "dìdi", uzbek: "Ukasi" },
  { id: 218, hsk: 1, lesson: 18, hanzi: "妹妹", pinyin: "mèimei", uzbek: "Singlisi" },
  { id: 219, hsk: 1, lesson: 18, hanzi: "人", pinyin: "rén", uzbek: "Odamlar" },
  { id: 220, hsk: 1, lesson: 18, hanzi: "大家", pinyin: "dàjiā", uzbek: "Hamma" },
  { id: 221, hsk: 1, lesson: 18, hanzi: "孩子", pinyin: "háizi", uzbek: "Bola" },
  { id: 222, hsk: 1, lesson: 18, hanzi: "家人", pinyin: "jiā rén", uzbek: "Oila a'zolari" },
  { id: 223, hsk: 1, lesson: 18, hanzi: "家", pinyin: "jiā", uzbek: "Oila, uy" },
  { id: 224, hsk: 1, lesson: 18, hanzi: "男", pinyin: "nán", uzbek: "Erkak" },
  { id: 225, hsk: 1, lesson: 18, hanzi: "女", pinyin: "nǚ", uzbek: "Ayol" },
  { id: 226, hsk: 1, lesson: 18, hanzi: "男朋友", pinyin: "nán péng you", uzbek: "Yigiti" },
  { id: 227, hsk: 1, lesson: 18, hanzi: "女朋友", pinyin: "nǚ péngyǒu", uzbek: "Qizi" },
  { id: 228, hsk: 1, lesson: 18, hanzi: "朋友", pinyin: "péngyǒu", uzbek: "Do'st" },
  { id: 229, hsk: 1, lesson: 18, hanzi: "同学", pinyin: "tóngxué", uzbek: "Sinfdosh" },
  { id: 230, hsk: 1, lesson: 18, hanzi: "先生", pinyin: "xiānshēng", uzbek: "Janob" },

  // Lesson 19 - HSK 3.0 Band 1 Time & Dates (20 words)
  { id: 231, hsk: 1, lesson: 19, hanzi: "今天", pinyin: "jīntiān", uzbek: "Bugun" },
  { id: 232, hsk: 1, lesson: 19, hanzi: "明天", pinyin: "míngtiān", uzbek: "Ertaga" },
  { id: 233, hsk: 1, lesson: 19, hanzi: "昨天", pinyin: "zuótiān", uzbek: "Kecha" },
  { id: 234, hsk: 1, lesson: 19, hanzi: "年", pinyin: "nián", uzbek: "Yil" },
  { id: 235, hsk: 1, lesson: 19, hanzi: "今年", pinyin: "jīnnián", uzbek: "Bu yil" },
  { id: 236, hsk: 1, lesson: 19, hanzi: "明年", pinyin: "míngnián", uzbek: "Kelgasi yil" },
  { id: 237, hsk: 1, lesson: 19, hanzi: "去年", pinyin: "qù nián", uzbek: "O'tgan yil" },
  { id: 238, hsk: 1, lesson: 19, hanzi: "月", pinyin: "yuè", uzbek: "Oy" },
  { id: 239, hsk: 1, lesson: 19, hanzi: "日", pinyin: "rì", uzbek: "Kun, sana" },
  { id: 240, hsk: 1, lesson: 19, hanzi: "星期", pinyin: "xīngqī", uzbek: "Hafta" },
  { id: 241, hsk: 1, lesson: 19, hanzi: "星期日", pinyin: "xīngqīrì", uzbek: "Yakshanba" },
  { id: 242, hsk: 1, lesson: 19, hanzi: "星期天", pinyin: "xīngqītiān", uzbek: "Yakshanba" },
  { id: 243, hsk: 1, lesson: 19, hanzi: "上午", pinyin: "shàngwǔ", uzbek: "Tushdan oldin" },
  { id: 244, hsk: 1, lesson: 19, hanzi: "下午", pinyin: "xiàwǔ", uzbek: "Tushdan keyin" },
  { id: 245, hsk: 1, lesson: 19, hanzi: "晚上", pinyin: "wǎnshàng", uzbek: "Kechqurun" },
  { id: 246, hsk: 1, lesson: 19, hanzi: "早", pinyin: "zǎo", uzbek: "Ertalab" },
  { id: 247, hsk: 1, lesson: 19, hanzi: "早上", pinyin: "zǎoshàng", uzbek: "Ertalab" },
  { id: 248, hsk: 1, lesson: 19, hanzi: "点", pinyin: "diǎn", uzbek: "Soat" },
  { id: 249, hsk: 1, lesson: 19, hanzi: "分", pinyin: "fēn", uzbek: "Daqiqa" },
  { id: 250, hsk: 1, lesson: 19, hanzi: "分钟", pinyin: "fēn zhōng", uzbek: "Daqiqa" },

  // Lesson 20 - HSK 3.0 Band 1 Food & Drink (20 words)
  { id: 251, hsk: 1, lesson: 20, hanzi: "吃", pinyin: "chī", uzbek: "Yemoq" },
  { id: 252, hsk: 1, lesson: 20, hanzi: "喝", pinyin: "hē", uzbek: "Ichmoq" },
  { id: 253, hsk: 1, lesson: 20, hanzi: "茶", pinyin: "chá", uzbek: "Choy" },
  { id: 254, hsk: 1, lesson: 20, hanzi: "菜", pinyin: "cài", uzbek: "Taom, sabzavot" },
  { id: 255, hsk: 1, lesson: 20, hanzi: "饭", pinyin: "fàn", uzbek: "Guruch, ovqat" },
  { id: 256, hsk: 1, lesson: 20, hanzi: "米饭", pinyin: "mǐfàn", uzbek: "Guruch" },
  { id: 257, hsk: 1, lesson: 20, hanzi: "包子", pinyin: "bāozi", uzbek: "Manti" },
  { id: 258, hsk: 1, lesson: 20, hanzi: "饺子", pinyin: "jiǎozi", uzbek: "Chuchvara" },
  { id: 259, hsk: 1, lesson: 20, hanzi: "面条儿", pinyin: "miàntiáor", uzbek: "Lag'mon" },
  { id: 260, hsk: 1, lesson: 20, hanzi: "面包", pinyin: "miànbāo", uzbek: "Non" },
  { id: 261, hsk: 1, lesson: 20, hanzi: "鸡蛋", pinyin: "jīdàn", uzbek: "Tuxum" },
  { id: 262, hsk: 1, lesson: 20, hanzi: "水果", pinyin: "shuǐ guǒ", uzbek: "Mevalar" },
  { id: 263, hsk: 1, lesson: 20, hanzi: "苹果", pinyin: "píng guǒ", uzbek: "Olma" },
  { id: 264, hsk: 1, lesson: 20, hanzi: "牛奶", pinyin: "niúnǎi", uzbek: "Sut" },
  { id: 265, hsk: 1, lesson: 20, hanzi: "水", pinyin: "shuǐ", uzbek: "Suv" },
  { id: 266, hsk: 1, lesson: 20, hanzi: "早饭", pinyin: "zǎofàn", uzbek: "Nonushta" },
  { id: 267, hsk: 1, lesson: 20, hanzi: "午饭", pinyin: "wǔ fàn", uzbek: "Tushlik" },
  { id: 268, hsk: 1, lesson: 20, hanzi: "晚饭", pinyin: "wǎnfàn", uzbek: "Kechki ovqat" },
  { id: 269, hsk: 1, lesson: 20, hanzi: "好吃", pinyin: "hǎochī", uzbek: "Mazali" },
  { id: 270, hsk: 1, lesson: 20, hanzi: "杯子", pinyin: "bēizi", uzbek: "Piola" },

  // Lesson 21 - HSK 3.0 Band 1 Places & Transportation (20 words)
  { id: 271, hsk: 1, lesson: 21, hanzi: "车", pinyin: "chē", uzbek: "Mashina" },
  { id: 272, hsk: 1, lesson: 21, hanzi: "出租车", pinyin: "chūzūchē", uzbek: "Taksi" },
  { id: 273, hsk: 1, lesson: 21, hanzi: "火车", pinyin: "huǒchē", uzbek: "Poyezd" },
  { id: 274, hsk: 1, lesson: 21, hanzi: "飞机", pinyin: "fēi jī", uzbek: "Samolyot" },
  { id: 275, hsk: 1, lesson: 21, hanzi: "店", pinyin: "diàn", uzbek: "Do'kon" },
  { id: 276, hsk: 1, lesson: 21, hanzi: "商店", pinyin: "shāngdiàn", uzbek: "Do'kon" },
  { id: 277, hsk: 1, lesson: 21, hanzi: "超市", pinyin: "chāo shì", uzbek: "Supermarket" },
  { id: 278, hsk: 1, lesson: 21, hanzi: "饭店", pinyin: "fàndiàn", uzbek: "Restoran" },
  { id: 279, hsk: 1, lesson: 21, hanzi: "房间", pinyin: "fángjiān", uzbek: "Xona" },
  { id: 280, hsk: 1, lesson: 21, hanzi: "学校", pinyin: "xuéxiào", uzbek: "Maktab" },
  { id: 281, hsk: 1, lesson: 21, hanzi: "大学", pinyin: "dàxué", uzbek: "Universitet" },
  { id: 282, hsk: 1, lesson: 21, hanzi: "医院", pinyin: "yī yuàn", uzbek: "Kasalxona" },
  { id: 283, hsk: 1, lesson: 21, hanzi: "电影院", pinyin: "diànyǐngyuàn", uzbek: "Kino" },
  { id: 284, hsk: 1, lesson: 21, hanzi: "书店", pinyin: "shū diàn", uzbek: "Kitob do'koni" },
  { id: 285, hsk: 1, lesson: 21, hanzi: "公司", pinyin: "gōngsī", uzbek: "Kompaniya" },
  { id: 286, hsk: 1, lesson: 21, hanzi: "边", pinyin: "biān", uzbek: "Tomon" },
  { id: 287, hsk: 1, lesson: 21, hanzi: "那边", pinyin: "nàbiān", uzbek: "U tomonda" },
  { id: 288, hsk: 1, lesson: 21, hanzi: "外边", pinyin: "wàibiān", uzbek: "Tashqarida" },
  { id: 289, hsk: 1, lesson: 21, hanzi: "里", pinyin: "lǐ", uzbek: "Ichida" },
  { id: 290, hsk: 1, lesson: 21, hanzi: "外", pinyin: "wài", uzbek: "Tashqari" },

  // Lesson 22 - HSK 3.0 Band 1 Verbs - Basic Actions (20 words)
  { id: 291, hsk: 1, lesson: 22, hanzi: "去", pinyin: "qù", uzbek: "Ketmoq" },
  { id: 292, hsk: 1, lesson: 22, hanzi: "来", pinyin: "lái", uzbek: "Kelmoq" },
  { id: 293, hsk: 1, lesson: 22, hanzi: "看", pinyin: "kàn", uzbek: "Ko'rmoq" },
  { id: 294, hsk: 1, lesson: 22, hanzi: "说", pinyin: "shuō", uzbek: "Gapirmoq" },
  { id: 295, hsk: 1, lesson: 22, hanzi: "听", pinyin: "tīng", uzbek: "Tinglamoq" },
  { id: 296, hsk: 1, lesson: 22, hanzi: "读", pinyin: "dú", uzbek: "O'qimoq" },
  { id: 297, hsk: 1, lesson: 22, hanzi: "写", pinyin: "xiě", uzbek: "Yozmoq" },
  { id: 298, hsk: 1, lesson: 22, hanzi: "做", pinyin: "zuò", uzbek: "Qilmoq" },
  { id: 299, hsk: 1, lesson: 22, hanzi: "买", pinyin: "mǎi", uzbek: "Sotib olish" },
  { id: 300, hsk: 1, lesson: 22, hanzi: "卖", pinyin: "mài", uzbek: "Sotmoq" },
  { id: 301, hsk: 1, lesson: 22, hanzi: "给", pinyin: "gěi", uzbek: "Bermoq" },
  { id: 302, hsk: 1, lesson: 22, hanzi: "要", pinyin: "yào", uzbek: "Xohlamoq" },
  { id: 303, hsk: 1, lesson: 22, hanzi: "想", pinyin: "xiǎng", uzbek: "Xohlamoq" },
  { id: 304, hsk: 1, lesson: 22, hanzi: "会", pinyin: "huì", uzbek: "Qila olmoq" },
  { id: 305, hsk: 1, lesson: 22, hanzi: "能", pinyin: "néng", uzbek: "Qila olmoq" },
  { id: 306, hsk: 1, lesson: 22, hanzi: "可以", pinyin: "kě yǐ", uzbek: "Mumkin" },
  { id: 307, hsk: 1, lesson: 22, hanzi: "开", pinyin: "kāi", uzbek: "Ochmoq" },
  { id: 308, hsk: 1, lesson: 22, hanzi: "开车", pinyin: "kāi chē", uzbek: "Haydash qilmoq" },
  { id: 309, hsk: 1, lesson: 22, hanzi: "回", pinyin: "huí", uzbek: "Qaytmoq" },
  { id: 310, hsk: 1, lesson: 22, hanzi: "找", pinyin: "zhǎo", uzbek: "Qidirmoq" },

  // Lesson 23 - HSK 3.0 Band 1 Verbs - Daily Activities (20 words)
  { id: 311, hsk: 1, lesson: 23, hanzi: "学习", pinyin: "xuéxí", uzbek: "O'qimoq" },
  { id: 312, hsk: 1, lesson: 23, hanzi: "学", pinyin: "xué", uzbek: "O'qimoq" },
  { id: 313, hsk: 1, lesson: 23, hanzi: "工作", pinyin: "gōngzuò", uzbek: "Ishlamoq" },
  { id: 314, hsk: 1, lesson: 23, hanzi: "上班", pinyin: "shàngbān", uzbek: "Ishga chiqmoq" },
  { id: 315, hsk: 1, lesson: 23, hanzi: "下班", pinyin: "xià bān", uzbek: "Ishdan tushmoq" },
  { id: 316, hsk: 1, lesson: 23, hanzi: "上学", pinyin: "shàngxué", uzbek: "Maktabga borish" },
  { id: 317, hsk: 1, lesson: 23, hanzi: "上课", pinyin: "shàng kè", uzbek: "Darsga borish" },
  { id: 318, hsk: 1, lesson: 23, hanzi: "下课", pinyin: "xià kè", uzbek: "Darsdan chiqish" },
  { id: 319, hsk: 1, lesson: 23, hanzi: "睡觉", pinyin: "shuì jiào", uzbek: "Uxlamoq" },
  { id: 320, hsk: 1, lesson: 23, hanzi: "睡", pinyin: "shuì", uzbek: "Uxlamoq" },
  { id: 321, hsk: 1, lesson: 23, hanzi: "起床", pinyin: "qǐchuáng", uzbek: "Turmoq" },
  { id: 322, hsk: 1, lesson: 23, hanzi: "休息", pinyin: "xiūxi", uzbek: "Dam olish" },
  { id: 323, hsk: 1, lesson: 23, hanzi: "玩", pinyin: "wán", uzbek: "O'ynash" },
  { id: 324, hsk: 1, lesson: 23, hanzi: "打电话", pinyin: "dǎ diànhuà", uzbek: "Telefon qilmoq" },
  { id: 325, hsk: 1, lesson: 23, hanzi: "唱歌", pinyin: "chànggē", uzbek: "Qo'shiq aytmoq" },
  { id: 326, hsk: 1, lesson: 23, hanzi: "穿", pinyin: "chuān", uzbek: "Kiyish" },
  { id: 327, hsk: 1, lesson: 23, hanzi: "到", pinyin: "dào", uzbek: "Yetib kelmoq" },
  { id: 328, hsk: 1, lesson: 23, hanzi: "认识", pinyin: "rèn shi", uzbek: "Tanishmoq" },
  { id: 329, hsk: 1, lesson: 23, hanzi: "觉得", pinyin: "jué de", uzbek: "O'ylamoq" },
  { id: 330, hsk: 1, lesson: 23, hanzi: "喜欢", pinyin: "xǐ huān", uzbek: "Yoqtirmoq" },

  // Lesson 24 - HSK 3.0 Band 1 Adjectives & Descriptions (20 words)
  { id: 331, hsk: 1, lesson: 24, hanzi: "大", pinyin: "dà", uzbek: "Katta" },
  { id: 332, hsk: 1, lesson: 24, hanzi: "小", pinyin: "xiǎo", uzbek: "Kichik" },
  { id: 333, hsk: 1, lesson: 24, hanzi: "多", pinyin: "duō", uzbek: "Ko'p" },
  { id: 334, hsk: 1, lesson: 24, hanzi: "少", pinyin: "shǎo", uzbek: "Kam" },
  { id: 335, hsk: 1, lesson: 24, hanzi: "好", pinyin: "hǎo", uzbek: "Yaxshi" },
  { id: 336, hsk: 1, lesson: 24, hanzi: "坏", pinyin: "huài", uzbek: "Yomon" },
  { id: 337, hsk: 1, lesson: 24, hanzi: "忙", pinyin: "máng", uzbek: "Band" },
  { id: 338, hsk: 1, lesson: 24, hanzi: "高兴", pinyin: "gāoxìng", uzbek: "Xursand" },
  { id: 339, hsk: 1, lesson: 24, hanzi: "漂亮", pinyin: "piào liàng", uzbek: "Chiroyli" },
  { id: 340, hsk: 1, lesson: 24, hanzi: "好看", pinyin: "hǎokàn", uzbek: "Chiroyli" },
  { id: 341, hsk: 1, lesson: 24, hanzi: "贵", pinyin: "guì", uzbek: "Qimmat" },
  { id: 342, hsk: 1, lesson: 24, hanzi: "便宜", pinyin: "pián yí", uzbek: "Arzon" },
  { id: 343, hsk: 1, lesson: 24, hanzi: "热", pinyin: "rè", uzbek: "Issiq" },
  { id: 344, hsk: 1, lesson: 24, hanzi: "冷", pinyin: "lěng", uzbek: "Sovuq" },
  { id: 345, hsk: 1, lesson: 24, hanzi: "新", pinyin: "xīn", uzbek: "Yangi" },
  { id: 346, hsk: 1, lesson: 24, hanzi: "老", pinyin: "lǎo", uzbek: "Eski" },
  { id: 347, hsk: 1, lesson: 24, hanzi: "几", pinyin: "jǐ", uzbek: "Nechta" },
  { id: 348, hsk: 1, lesson: 24, hanzi: "非常", pinyin: "fēi cháng", uzbek: "Juda" },
  { id: 349, hsk: 1, lesson: 24, hanzi: "很", pinyin: "hěn", uzbek: "Juda" },
  { id: 350, hsk: 1, lesson: 24, hanzi: "太", pinyin: "tài", uzbek: "Juda, ortiqcha" },

  // Lesson 25 - HSK 3.0 Band 1 Question Words (20 words)
  { id: 351, hsk: 1, lesson: 25, hanzi: "什么", pinyin: "shénme", uzbek: "Nima" },
  { id: 352, hsk: 1, lesson: 25, hanzi: "谁", pinyin: "shéi", uzbek: "Kim" },
  { id: 353, hsk: 1, lesson: 25, hanzi: "哪", pinyin: "nǎ", uzbek: "Qaysi" },
  { id: 354, hsk: 1, lesson: 25, hanzi: "哪里", pinyin: "nǎlǐ", uzbek: "Qayerda" },
  { id: 355, hsk: 1, lesson: 25, hanzi: "那儿", pinyin: "nàr", uzbek: "U yerd" },
  { id: 356, hsk: 1, lesson: 25, hanzi: "哪儿", pinyin: "nǎr", uzbek: "Qayer" },
  { id: 357, hsk: 1, lesson: 25, hanzi: "怎么", pinyin: "zěnme", uzbek: "Qanday" },
  { id: 358, hsk: 1, lesson: 25, hanzi: "怎么样", pinyin: "zěnme yàng", uzbek: "Qanday" },
  { id: 359, hsk: 1, lesson: 25, hanzi: "多少", pinyin: "duōshǎo", uzbek: "Qancha" },
  { id: 360, hsk: 1, lesson: 25, hanzi: "哪个", pinyin: "nǎ ge", uzbek: "Qaysi biri" },
  { id: 361, hsk: 1, lesson: 25, hanzi: "那个", pinyin: "nà ge", uzbek: "U biri" },
  { id: 362, hsk: 1, lesson: 25, hanzi: "哪些", pinyin: "nǎxiē", uzbek: "Qaysilar" },
  { id: 363, hsk: 1, lesson: 25, hanzi: "那些", pinyin: "nàxiē", uzbek: "Ularning barchasi" },
  { id: 364, hsk: 1, lesson: 25, hanzi: "这", pinyin: "zhè", uzbek: "Bu" },
  { id: 365, hsk: 1, lesson: 25, hanzi: "这个", pinyin: "zhè ge", uzbek: "Bu narsa" },
  { id: 366, hsk: 1, lesson: 25, hanzi: "这些", pinyin: "zhèxiē", uzbek: "Bularning barchasi" },
  { id: 367, hsk: 1, lesson: 25, hanzi: "这边", pinyin: "zhè bian", uzbek: "Bu tomon" },
  { id: 368, hsk: 1, lesson: 25, hanzi: "那里", pinyin: "nàlǐ", uzbek: "U yerd" },
  { id: 369, hsk: 1, lesson: 25, hanzi: "叫", pinyin: "jiào", uzbek: "Chaqirmoq" },
  { id: 370, hsk: 1, lesson: 25, hanzi: "名字", pinyin: "míngzi", uzbek: "Ism" },

  // Lesson 26 - HSK 3.0 Band 1 Objects & Things (20 words)
  { id: 371, hsk: 1, lesson: 26, hanzi: "东西", pinyin: "dōngxī", uzbek: "Narsalar" },
  { id: 372, hsk: 1, lesson: 26, hanzi: "书", pinyin: "shū", uzbek: "Kitob" },
  { id: 373, hsk: 1, lesson: 26, hanzi: "手机", pinyin: "shǒujī", uzbek: "Telefon" },
  { id: 374, hsk: 1, lesson: 26, hanzi: "电话", pinyin: "diànhuà", uzbek: "Telefon" },
  { id: 375, hsk: 1, lesson: 26, hanzi: "电脑", pinyin: "diànnǎo", uzbek: "Kompyuter" },
  { id: 376, hsk: 1, lesson: 26, hanzi: "电视", pinyin: "diànshì", uzbek: "Televizor" },
  { id: 377, hsk: 1, lesson: 26, hanzi: "电影", pinyin: "diànyǐng", uzbek: "Film" },
  { id: 378, hsk: 1, lesson: 26, hanzi: "衣服", pinyin: "yī fú", uzbek: "Kiyimlar" },
  { id: 379, hsk: 1, lesson: 26, hanzi: "钱", pinyin: "qián", uzbek: "Pul" },
  { id: 380, hsk: 1, lesson: 26, hanzi: "元", pinyin: "yuán", uzbek: "Yuan" },
  { id: 381, hsk: 1, lesson: 26, hanzi: "椅子", pinyin: "yǐ zi", uzbek: "Stul" },
  { id: 382, hsk: 1, lesson: 26, hanzi: "床", pinyin: "chuáng", uzbek: "Karat" },
  { id: 383, hsk: 1, lesson: 26, hanzi: "桌子", pinyin: "zhuōzi", uzbek: "Stol" },
  { id: 384, hsk: 1, lesson: 26, hanzi: "门", pinyin: "mén", uzbek: "Eshik" },
  { id: 385, hsk: 1, lesson: 26, hanzi: "窗户", pinyin: "chuānghù", uzbek: "Oyna" },
  { id: 386, hsk: 1, lesson: 26, hanzi: "墙", pinyin: "qiáng", uzbek: "Devor" },
  { id: 387, hsk: 1, lesson: 26, hanzi: "地", pinyin: "dì", uzbek: "Yer" },
  { id: 388, hsk: 1, lesson: 26, hanzi: "天", pinyin: "tiān", uzbek: "Kun, osmon" },
  { id: 389, hsk: 1, lesson: 26, hanzi: "天气", pinyin: "tiānqì", uzbek: "Ob-havo" },
  { id: 390, hsk: 1, lesson: 26, hanzi: "雨", pinyin: "yǔ", uzbek: "Yomg'ir" },

  // Lesson 27 - HSK 3.0 Band 1 Animals & Nature (20 words)
  { id: 391, hsk: 1, lesson: 27, hanzi: "狗", pinyin: "gǒu", uzbek: "It" },
  { id: 392, hsk: 1, lesson: 27, hanzi: "猫", pinyin: "māo", uzbek: "Mushuk" },
  { id: 393, hsk: 1, lesson: 27, hanzi: "鸟", pinyin: "niǎo", uzbek: "Qush" },
  { id: 394, hsk: 1, lesson: 27, hanzi: "鱼", pinyin: "yú", uzbek: "Baliq" },
  { id: 395, hsk: 1, lesson: 27, hanzi: "马", pinyin: "mǎ", uzbek: "Ot" },
  { id: 396, hsk: 1, lesson: 27, hanzi: "牛", pinyin: "niú", uzbek: "Sigir" },
  { id: 397, hsk: 1, lesson: 27, hanzi: "羊", pinyin: "yáng", uzbek: "Qo'y" },
  { id: 398, hsk: 1, lesson: 27, hanzi: "鸡", pinyin: "jī", uzbek: "Tovuq" },
  { id: 399, hsk: 1, lesson: 27, hanzi: "雪", pinyin: "xuě", uzbek: "Qor" },
  { id: 400, hsk: 1, lesson: 27, hanzi: "风", pinyin: "fēng", uzbek: "Shamol" },
  { id: 401, hsk: 1, lesson: 27, hanzi: "云", pinyin: "yún", uzbek: "Bulut" },
  { id: 402, hsk: 1, lesson: 27, hanzi: "山", pinyin: "shān", uzbek: "Tog'" },
  { id: 403, hsk: 1, lesson: 27, hanzi: "水", pinyin: "shuǐ", uzbek: "Suv" },
  { id: 404, hsk: 1, lesson: 27, hanzi: "火", pinyin: "huǒ", uzbek: "Olov" },
  { id: 405, hsk: 1, lesson: 27, hanzi: "木", pinyin: "mù", uzbek: "Daraxt" },
  { id: 406, hsk: 1, lesson: 27, hanzi: "花", pinyin: "huā", uzbek: "Gul" },
  { id: 407, hsk: 1, lesson: 27, hanzi: "草", pinyin: "cǎo", uzbek: "O't" },
  { id: 408, hsk: 1, lesson: 27, hanzi: "树", pinyin: "shù", uzbek: "Daraxt" },
  { id: 409, hsk: 1, lesson: 27, hanzi: "路", pinyin: "lù", uzbek: "Yo'l" },
  { id: 410, hsk: 1, lesson: 27, hanzi: "车", pinyin: "chē", uzbek: "Mashina" },

  // Lesson 28 - HSK 3.0 Band 1 Common Phrases & Expressions (20 words)
  { id: 411, hsk: 1, lesson: 28, hanzi: "对不起", pinyin: "duìbuqǐ", uzbek: "Kechirasiz" },
  { id: 412, hsk: 1, lesson: 28, hanzi: "没关系", pinyin: "méi guānxi", uzbek: "Hech gap emas" },
  { id: 413, hsk: 1, lesson: 28, hanzi: "没关系", pinyin: "méi shì", uzbek: "Hech gap emas" },
  { id: 414, hsk: 1, lesson: 28, hanzi: "再见", pinyin: "zàijiàn", uzbek: "Xayr" },
  { id: 415, hsk: 1, lesson: 28, hanzi: "请", pinyin: "qǐng", uzbek: "Marhamat" },
  { id: 416, hsk: 1, lesson: 28, hanzi: "请问", pinyin: "qǐngwèn", uzbek: "Savol berishga ruxsat" },
  { id: 417, hsk: 1, lesson: 28, hanzi: "谢谢", pinyin: "xièxie", uzbek: "Rahmat" },
  { id: 418, hsk: 1, lesson: 28, hanzi: "不客气", pinyin: "bú kèqi", uzbek: "Arzimaydi" },
  { id: 419, hsk: 1, lesson: 28, hanzi: "你好", pinyin: "nǐ hǎo", uzbek: "Salom" },
  { id: 420, hsk: 1, lesson: 28, hanzi: "早上好", pinyin: "zǎoshàng hǎo", uzbek: "Xayrli tong" },
  { id: 421, hsk: 1, lesson: 28, hanzi: "晚上好", pinyin: "wǎnshàng hǎo", uzbek: "Xayrli kech" },
  { id: 422, hsk: 1, lesson: 28, hanzi: "晚安", pinyin: "wǎn'ān", uzbek: "Xayrli tun" },
  { id: 423, hsk: 1, lesson: 28, hanzi: "慢慢", pinyin: "mànmàn", uzbek: "Sekin-sekin" },
  { id: 424, hsk: 1, lesson: 28, hanzi: "慢慢吃", pinyin: "mànmàn chī", uzbek: "Ozgina yeying" },
  { id: 425, hsk: 1, lesson: 28, hanzi: "慢慢走", pinyin: "mànmàn zǒu", uzbek: "Sekin ketish" },
  { id: 426, hsk: 1, lesson: 28, hanzi: "加油", pinyin: "jiāyóu", uzbek: "Kuchlang" },
  { id: 427, hsk: 1, lesson: 28, hanzi: "没有", pinyin: "méiyǒu", uzbek: "Yo'q" },
  { id: 428, hsk: 1, lesson: 28, hanzi: "有的", pinyin: "yǒude", uzbek: "Ba'zilari" },
  { id: 429, hsk: 1, lesson: 28, hanzi: "有些", pinyin: "yǒu xiē", uzbek: "Ba'zilari" },
  { id: 430, hsk: 1, lesson: 28, hanzi: "有点儿", pinyin: "yǒu diǎn er", uzbek: "Ozgina" },

  // Lesson 29 - HSK 3.0 Band 1 School & Education (20 words)
  { id: 431, hsk: 1, lesson: 29, hanzi: "老师", pinyin: "lǎoshī", uzbek: "O'qituvchi" },
  { id: 432, hsk: 1, lesson: 29, hanzi: "学生", pinyin: "xuéshēng", uzbek: "Talaba" },
  { id: 433, hsk: 1, lesson: 29, hanzi: "小学生", pinyin: "xiǎoxuéshēng", uzbek: "Maktab o'quvchisi" },
  { id: 434, hsk: 1, lesson: 29, hanzi: "中学生", pinyin: "zhōngxuéshēng", uzbek: "O'rta maktab o'quvchisi" },
  { id: 435, hsk: 1, lesson: 29, hanzi: "大学生", pinyin: "dàxuéshēng", uzbek: "Universitet talabasi" },
  { id: 436, hsk: 1, lesson: 29, hanzi: "小学", pinyin: "xiǎoxué", uzbek: "Boshlang'ich maktab" },
  { id: 437, hsk: 1, lesson: 29, hanzi: "中学", pinyin: "zhōngxué", uzbek: "O'rta maktab" },
  { id: 438, hsk: 1, lesson: 29, hanzi: "大学", pinyin: "dàxué", uzbek: "Universitet" },
  { id: 439, hsk: 1, lesson: 29, hanzi: "课", pinyin: "kè", uzbek: "Dars" },
  { id: 440, hsk: 1, lesson: 29, hanzi: "书", pinyin: "shū", uzbek: "Kitob" },
  { id: 441, hsk: 1, lesson: 29, hanzi: "笔", pinyin: "bǐ", uzbek: "Ruchka" },
  { id: 442, hsk: 1, lesson: 29, hanzi: "纸", pinyin: "zhǐ", uzbek: "Qog'oz" },
  { id: 443, hsk: 1, lesson: 29, hanzi: "字", pinyin: "zì", uzbek: "Harf" },
  { id: 444, hsk: 1, lesson: 29, hanzi: "汉字", pinyin: "Hànzì", uzbek: "Xitoy harflari" },
  { id: 445, hsk: 1, lesson: 29, hanzi: "汉语", pinyin: "Hànyǔ", uzbek: "Xitoy tili" },
  { id: 446, hsk: 1, lesson: 29, hanzi: "中文", pinyin: "Zhōng wén", uzbek: "Xitoy tili" },
  { id: 447, hsk: 1, lesson: 29, hanzi: "英语", pinyin: "Yīngyǔ", uzbek: "Ingliz tili" },
  { id: 448, hsk: 1, lesson: 29, hanzi: "读", pinyin: "dú", uzbek: "O'qimoq" },
  { id: 449, hsk: 1, lesson: 29, hanzi: "写", pinyin: "xiě", uzbek: "Yozmoq" },
  { id: 450, hsk: 1, lesson: 29, hanzi: "读书", pinyin: "dúshū", uzbek: "Kitob o'qimoq" },

  // Lesson 30 - HSK 3.0 Band 1 Miscellaneous & Final Words (20 words)
  { id: 451, hsk: 1, lesson: 30, hanzi: "是", pinyin: "shì", uzbek: "Bo'lmoq" },
  { id: 452, hsk: 1, lesson: 30, hanzi: "有", pinyin: "yǒu", uzbek: "Bormoq" },
  { id: 453, hsk: 1, lesson: 30, hanzi: "在", pinyin: "zài", uzbek: "Joyda" },
  { id: 454, hsk: 1, lesson: 30, hanzi: "和", pinyin: "hé", uzbek: "Va" },
  { id: 455, hsk: 1, lesson: 30, hanzi: "都", pinyin: "dōu", uzbek: "Hammasi" },
  { id: 456, hsk: 1, lesson: 30, hanzi: "也", pinyin: "yě", uzbek: "Ham" },
  { id: 457, hsk: 1, lesson: 30, hanzi: "还", pinyin: "hái", uzbek: "Hali" },
  { id: 458, hsk: 1, lesson: 30, hanzi: "就", pinyin: "jiù", uzbek: "Shunchaki" },
  { id: 459, hsk: 1, lesson: 30, hanzi: "又", pinyin: "yòu", uzbek: "Yana" },
  { id: 460, hsk: 1, lesson: 30, hanzi: "或者", pinyin: "huòzhě", uzbek: "Yoki" },
  { id: 461, hsk: 1, lesson: 30, hanzi: "因为", pinyin: "yīnwèi", uzbek: "Chunki" },
  { id: 462, hsk: 1, lesson: 30, hanzi: "所以", pinyin: "suǒyǐ", uzbek: "Shuning uchun" },
  { id: 463, hsk: 1, lesson: 30, hanzi: "但是", pinyin: "dànshì", uzbek: "Lekin" },
  { id: 464, hsk: 1, lesson: 30, hanzi: "如果", pinyin: "rúguǒ", uzbek: "Agar" },
  { id: 465, hsk: 1, lesson: 30, hanzi: "那么", pinyin: "nàme", uzbek: "U holda" },
  { id: 466, hsk: 1, lesson: 30, hanzi: "然后", pinyin: "ránhòu", uzbek: "Keyin" },
  { id: 467, hsk: 1, lesson: 30, hanzi: "或者", pinyin: "huòzhě", uzbek: "Yoki" },
  { id: 468, hsk: 1, lesson: 30, hanzi: "可是", pinyin: "kěshì", uzbek: "Lekin" },
  { id: 469, hsk: 1, lesson: 30, hanzi: "不过", pinyin: "búguò", uzbek: "Biroq" },
  { id: 470, hsk: 1, lesson: 30, hanzi: "再", pinyin: "zài", uzbek: "Yana" }
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
let currentHSKFilter = 'all';
let searchQuery = '';
let streakData = JSON.parse(localStorage.getItem('streakData')) || {
    streak: 0,
    lastLoginDate: null,
    totalLearned: 0,
    xp: 0
};

// Canvas state
let canvasCtx = null;
let isDrawing = false;
let currentMistakes = 0;
let canvasHanziWriter = null;
let canvasHSK = 1;
let canvasLesson = 1;
let canvasWordIndex = 0;
let canvasScore = 0;
let canvasWritingMode = 'trace'; // trace, copy, freehand
let selectedAvatar = '👤';
let isEraserActive = false;
let currentStrokeIndex = 0;
let expectedStrokeCount = 0;
let userStrokes = [];

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
const hskFilterBtns = document.querySelectorAll('.hsk-filter-btn');
const searchInput = document.getElementById('searchInput');
const searchClear = document.getElementById('searchClear');
const leaderboardBtn = document.getElementById('leaderboard-btn');
const leaderboardModal = document.getElementById('leaderboardModal');
const leaderboardList = document.getElementById('leaderboardList');
const closeLeaderboard = document.getElementById('closeLeaderboard');
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
const hsk1Fill = document.getElementById('hsk1Fill');
const hsk2Fill = document.getElementById('hsk2Fill');
const hsk3Fill = document.getElementById('hsk3Fill');
const achievementsGrid = document.getElementById('achievementsGrid');
const canvasLessonSelector = document.getElementById('canvasLessonSelector');
const canvasMobileHskSelector = document.getElementById('canvasMobileHskSelector');
const canvasMobileLessonSelector = document.getElementById('canvasMobileLessonSelector');
const hskOptions = document.querySelectorAll('.hsk-option');
const modeOptions = document.querySelectorAll('.mode-option');
const mobileModeOptions = document.querySelectorAll('.mobile-mode-option');
const canvasAudioBtn = document.getElementById('canvasAudioBtn');
const canvasEraserBtn = document.getElementById('canvasEraserBtn');
const canvasCheckBtn = document.getElementById('canvasCheckBtn');
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

    // HSK filter buttons
    hskFilterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            currentHSKFilter = btn.dataset.hsk;
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
            canvasWordIndex = 0;
            updateCanvasLessonSelector();
            loadCanvasCharacter();
        });
    });

    canvasLessonSelector.addEventListener('change', (e) => {
        canvasLesson = parseInt(e.target.value);
        canvasWordIndex = 0;
        loadCanvasCharacter();
    });

    canvasMobileHskSelector.addEventListener('change', (e) => {
        canvasHSK = parseInt(e.target.value);
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
    canvasEraserBtn.addEventListener('click', toggleEraser);
    canvasCheckBtn.addEventListener('click', checkCanvasDrawing);
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
    currentHSKFilter = 'all';
    searchQuery = '';
    searchInput.value = '';
    searchClear.classList.remove('visible');
    hskFilterBtns.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.hsk === 'all');
    });
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
    let filteredWords = vocabularyData.filter(word => word.hsk === currentHSK);
    
    // Apply HSK filter
    if (currentHSKFilter !== 'all') {
        filteredWords = filteredWords.filter(word => word.hsk === parseInt(currentHSKFilter));
    }
    
    // Apply search filter
    if (searchQuery) {
        filteredWords = filteredWords.filter(word => 
            word.hanzi.toLowerCase().includes(searchQuery) ||
            word.pinyin.toLowerCase().includes(searchQuery) ||
            word.uzbek.toLowerCase().includes(searchQuery)
        );
    }
    
    // Get unique lessons from filtered words
    const lessons = [...new Set(filteredWords.map(word => word.lesson))].sort((a, b) => a - b);
    
    // If no lessons found, show message
    if (lessons.length === 0) {
        lessonsGrid.innerHTML = '<p class="no-results">No lessons found matching your criteria.</p>';
        return;
    }
    
    lessons.forEach(lessonNum => {
        const lessonBtn = document.createElement('button');
        lessonBtn.className = 'lesson-btn';
        lessonBtn.textContent = `Lesson ${lessonNum}`;
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
    localStorage.setItem('streakData', JSON.stringify(streakData));
    updateXP();
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
    const lessons = [...new Set(vocabularyData.filter(w => w.hsk === canvasHSK).map(w => w.lesson))].sort((a, b) => a - b);
    canvasLessonSelector.innerHTML = lessons.map(lesson => 
        `<option value="${lesson}" ${lesson === canvasLesson ? 'selected' : ''}>Lesson ${lesson}</option>`
    ).join('');
    canvasMobileLessonSelector.innerHTML = canvasLessonSelector.innerHTML;
    canvasMobileHskSelector.value = String(canvasHSK);
}

function loadCanvasCharacter() {
    const words = vocabularyData.filter(w => w.hsk === canvasHSK && w.lesson === canvasLesson);
    if (words.length > 0) {
        canvasWordIndex %= words.length;
        const word = words[canvasWordIndex];
        const targetChar = word.hanzi.charAt(0);
        canvasCharacter.textContent = targetChar;
        canvasFeedback.textContent = '';
        canvasFeedback.className = 'canvas-feedback';
        nextCanvasWord.disabled = true;
        showTraceGuide();
    }
}

function nextCanvasCharacter() {
    const words = vocabularyData.filter(w => w.hsk === canvasHSK && w.lesson === canvasLesson);
    if (!words.length) return;
    canvasWordIndex = (canvasWordIndex + 1) % words.length;
    loadCanvasCharacter();
}

function updateModeInstructions() {
    const instructions = {
        'trace': 'Trace the character by following the guide dots.',
        'copy': 'Copy the character by looking at the reference above.',
        'freehand': 'Practice writing the character freely.'
    };
    modeInstructions.textContent = instructions[canvasWritingMode];
}

function applyWritingMode() {
    showTraceGuide();
}

function showTraceGuide() {
    const char = canvasCharacter.textContent;
    if (!char || !drawingCanvas || typeof HanziWriter === 'undefined') return;
    
    // Reset stroke tracking
    currentStrokeIndex = 0;
    userStrokes = [];
    
    try {
        if (canvasHanziWriter) {
            canvasHanziWriter.cancelQuiz();
        }
        drawingCanvas.innerHTML = '';
        resizeCanvas();
        canvasHanziWriter = HanziWriter.create(drawingCanvas, char, {
            width: drawingCanvas.clientWidth || 280,
            height: drawingCanvas.clientWidth || 280,
            padding: 20,
            strokeAnimationSpeed: 1,
            strokeWidth: 14,
            drawingWidth: 14,
            outlineWidth: 2,
            showOutline: true,
            showCharacter: false,
            strokeColor: '#C8102E',
            drawingColor: '#C8102E',
            highlightColor: '#C8102E',
            outlineColor: '#E0E0E0',
            radicalColor: '#E0E0E0'
        });
        canvasHanziWriter.quiz({
            showHintAfterMisses: 2,
            highlightOnComplete: true,
            onMistake: () => {
                canvasFeedback.textContent = 'Almost. Follow the pale outline and try again.';
                canvasFeedback.className = 'canvas-feedback';
            },
            onComplete: () => {
                canvasScore += 10;
                canvasScoreElement.textContent = canvasScore;
                canvasFeedback.textContent = 'Great work! Character complete. +10 points';
                canvasFeedback.className = 'canvas-feedback success';
                nextCanvasWord.disabled = false;
                addXP(10);
                showSuccessModal();
            }
        });
    } catch (error) {
        console.error('Error creating trace guide:', error);
    }
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
    canvasFeedback.textContent = 'Complete the guided strokes to earn points.';
    canvasFeedback.className = 'canvas-feedback';
}

function initializeCanvas() {
    // HanziWriter handles all touch/mouse events natively via quiz mode
    // No custom canvas context or event listeners needed
    resizeCanvas();
}

function resizeCanvas() {
  const canvas = document.getElementById('hanziWriterCanvas');
  if (!canvas || !canvas.parentElement) return;

  const containerWidth = canvas.parentElement.getBoundingClientRect().width;
  const size = Math.min(Math.max(containerWidth - 32, 0), 320);
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
    // Calculate progress for each HSK level
    const hsk1Words = vocabularyData.filter(w => w.hsk === 1).length;
    const hsk2Words = vocabularyData.filter(w => w.hsk === 2).length;
    const hsk3Words = vocabularyData.filter(w => w.hsk === 3).length;
    
    const hsk1Learned = vocabularyData.filter(w => w.hsk === 1 && learnedWords.includes(w.id)).length;
    const hsk2Learned = vocabularyData.filter(w => w.hsk === 2 && learnedWords.includes(w.id)).length;
    const hsk3Learned = vocabularyData.filter(w => w.hsk === 3 && learnedWords.includes(w.id)).length;
    
    const hsk1PercentVal = hsk1Words > 0 ? Math.round((hsk1Learned / hsk1Words) * 100) : 0;
    const hsk2PercentVal = hsk2Words > 0 ? Math.round((hsk2Learned / hsk2Words) * 100) : 0;
    const hsk3PercentVal = hsk3Words > 0 ? Math.round((hsk3Learned / hsk3Words) * 100) : 0;
    
    hsk1Percent.textContent = `${hsk1PercentVal}%`;
    hsk2Percent.textContent = `${hsk2PercentVal}%`;
    hsk3Percent.textContent = `${hsk3PercentVal}%`;
    
    hsk1Fill.style.width = `${hsk1PercentVal}%`;
    hsk2Fill.style.width = `${hsk2PercentVal}%`;
    hsk3Fill.style.width = `${hsk3PercentVal}%`;
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
