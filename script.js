// Global state - HSK 3.0 Band 1 Vocabulary (300 words)
let vocabularyData = [
  // Lesson 1 - Greetings & Basic Pronouns (20 words)
  { id: 1, hsk: 1, lesson: 1, hanzi: "爱", pinyin: "ài", uzbek: "Sevmoq, muhabbat" },
  { id: 2, hsk: 1, lesson: 1, hanzi: "吧", pinyin: "ba", uzbek: "Qo'shimcha (taklif)" },
  { id: 3, hsk: 1, lesson: 1, hanzi: "八", pinyin: "bā", uzbek: "Sakkiz" },
  { id: 4, hsk: 1, lesson: 1, hanzi: "不", pinyin: "bù", uzbek: "Yo'q, emas" },
  { id: 5, hsk: 1, lesson: 1, hanzi: "不客气", pinyin: "bù kèqi", uzbek: "Arzimaydi" },
  { id: 6, hsk: 1, lesson: 1, hanzi: "不要", pinyin: "bù yào", uzbek: "Qilmang" },
  { id: 7, hsk: 1, lesson: 1, hanzi: "的", pinyin: "de", uzbek: "Belgish" },
  { id: 8, hsk: 1, lesson: 1, hanzi: "了", pinyin: "le", uzbek: "O'zgarish qo'shimchasi" },
  { id: 9, hsk: 1, lesson: 1, hanzi: "吗", pinyin: "ma", uzbek: "Savol qo'shimchasi" },
  { id: 10, hsk: 1, lesson: 1, hanzi: "们", pinyin: "men", uzbek: "Ko'plik qo'shimchasi" },
  { id: 11, hsk: 1, lesson: 1, hanzi: "你", pinyin: "nǐ", uzbek: "Siz" },
  { id: 12, hsk: 1, lesson: 1, hanzi: "你好", pinyin: "nǐ hǎo", uzbek: "Salom" },
  { id: 13, hsk: 1, lesson: 1, hanzi: "您", pinyin: "nín", uzbek: "Siz (hurmatli)" },
  { id: 14, hsk: 1, lesson: 1, hanzi: "你们", pinyin: "nǐmen", uzbek: "Sizlar" },
  { id: 15, hsk: 1, lesson: 1, hanzi: "呢", pinyin: "ne", uzbek: "Savol qo'shimchasi" },
  { id: 16, hsk: 1, lesson: 1, hanzi: "我", pinyin: "wǒ", uzbek: "Men" },
  { id: 17, hsk: 1, lesson: 1, hanzi: "我们", pinyin: "wǒmen", uzbek: "Biz" },
  { id: 18, hsk: 1, lesson: 1, hanzi: "谢", pinyin: "xiè", uzbek: "Rahmat" },
  { id: 19, hsk: 1, lesson: 1, hanzi: "谢谢", pinyin: "xièxie", uzbek: "Rahmat" },
  { id: 20, hsk: 1, lesson: 1, hanzi: "也", pinyin: "yě", uzbek: "Ham" },

  // Lesson 2 - Numbers & Measure Words (20 words)
  { id: 21, hsk: 1, lesson: 2, hanzi: "一", pinyin: "yī", uzbek: "Bir" },
  { id: 22, hsk: 1, lesson: 2, hanzi: "一下", pinyin: "yī xià", uzbek: "Bir oz, ozgina" },
  { id: 23, hsk: 1, lesson: 2, hanzi: "一些", pinyin: "yī xiē", uzbek: "Bir necha" },
  { id: 24, hsk: 1, lesson: 2, hanzi: "一半", pinyin: "yī bàn", uzbek: "Yarmi" },
  { id: 25, hsk: 1, lesson: 2, hanzi: "一点儿", pinyin: "yī diǎn r", uzbek: "Ozgina" },
  { id: 26, hsk: 1, lesson: 2, hanzi: "二", pinyin: "èr", uzbek: "Ikki" },
  { id: 27, hsk: 1, lesson: 2, hanzi: "三", pinyin: "sān", uzbek: "Uch" },
  { id: 28, hsk: 1, lesson: 2, hanzi: "四", pinyin: "sì", uzbek: "To'rt" },
  { id: 29, hsk: 1, lesson: 2, hanzi: "五", pinyin: "wǔ", uzbek: "Besh" },
  { id: 30, hsk: 1, lesson: 2, hanzi: "六", pinyin: "liù", uzbek: "Olti" },
  { id: 31, hsk: 1, lesson: 2, hanzi: "七", pinyin: "qī", uzbek: "Yetti" },
  { id: 32, hsk: 1, lesson: 2, hanzi: "九", pinyin: "jiǔ", uzbek: "To'qqiz" },
  { id: 33, hsk: 1, lesson: 2, hanzi: "十", pinyin: "shí", uzbek: "O'n" },
  { id: 34, hsk: 1, lesson: 2, hanzi: "百", pinyin: "bǎi", uzbek: "Yuz" },
  { id: 35, hsk: 1, lesson: 2, hanzi: "千", pinyin: "qiān", uzbek: "Ming" },
  { id: 36, hsk: 1, lesson: 2, hanzi: "半", pinyin: "bàn", uzbek: "Yarmi" },
  { id: 37, hsk: 1, lesson: 2, hanzi: "个", pinyin: "gè", uzbek: "Hisoblagich" },
  { id: 38, hsk: 1, lesson: 2, hanzi: "本", pinyin: "běn", uzbek: "Kitob hisoblagichi" },
  { id: 39, hsk: 1, lesson: 2, hanzi: "件", pinyin: "jiàn", uzbek: "Narsa hisoblagichi" },
  { id: 40, hsk: 1, lesson: 2, hanzi: "块", pinyin: "kuài", uzbek: "Yuan (pul)" },

  // Lesson 3 - Family & People (20 words)
  { id: 41, hsk: 1, lesson: 3, hanzi: "爸爸", pinyin: "bàba", uzbek: "Otasi" },
  { id: 42, hsk: 1, lesson: 3, hanzi: "妈妈", pinyin: "mā ma", uzbek: "Onasi" },
  { id: 43, hsk: 1, lesson: 3, hanzi: "儿子", pinyin: "érzi", uzbek: "O'g'li" },
  { id: 44, hsk: 1, lesson: 3, hanzi: "女儿", pinyin: "nǚ'ér", uzbek: "Qizi" },
  { id: 45, hsk: 1, lesson: 3, hanzi: "哥哥", pinyin: "gēge", uzbek: "Akasi" },
  { id: 46, hsk: 1, lesson: 3, hanzi: "姐姐", pinyin: "jiějie", uzbek: "Opasi" },
  { id: 47, hsk: 1, lesson: 3, hanzi: "弟弟", pinyin: "dìdi", uzbek: "Ukasi" },
  { id: 48, hsk: 1, lesson: 3, hanzi: "妹妹", pinyin: "mèimei", uzbek: "Singlisi" },
  { id: 49, hsk: 1, lesson: 3, hanzi: "人", pinyin: "rén", uzbek: "Odamlar" },
  { id: 50, hsk: 1, lesson: 3, hanzi: "大家", pinyin: "dàjiā", uzbek: "Hamma" },
  { id: 51, hsk: 1, lesson: 3, hanzi: "孩子", pinyin: "háizi", uzbek: "Bola" },
  { id: 52, hsk: 1, lesson: 3, hanzi: "家人", pinyin: "jiā rén", uzbek: "Oila a'zolari" },
  { id: 53, hsk: 1, lesson: 3, hanzi: "家", pinyin: "jiā", uzbek: "Oila, uy" },
  { id: 54, hsk: 1, lesson: 3, hanzi: "男", pinyin: "nán", uzbek: "Erkak" },
  { id: 55, hsk: 1, lesson: 3, hanzi: "女", pinyin: "nǚ", uzbek: "Ayol" },
  { id: 56, hsk: 1, lesson: 3, hanzi: "男朋友", pinyin: "nán péng you", uzbek: "Yigiti" },
  { id: 57, hsk: 1, lesson: 3, hanzi: "女朋友", pinyin: "nǚ péngyǒu", uzbek: "Qizi" },
  { id: 58, hsk: 1, lesson: 3, hanzi: "朋友", pinyin: "péngyǒu", uzbek: "Do'st" },
  { id: 59, hsk: 1, lesson: 3, hanzi: "同学", pinyin: "tóngxué", uzbek: "Sinfdosh" },
  { id: 60, hsk: 1, lesson: 3, hanzi: "先生", pinyin: "xiānshēng", uzbek: "Janob" },

  // Lesson 4 - Time & Dates (20 words)
  { id: 61, hsk: 1, lesson: 4, hanzi: "今天", pinyin: "jīntiān", uzbek: "Bugun" },
  { id: 62, hsk: 1, lesson: 4, hanzi: "明天", pinyin: "míngtiān", uzbek: "Ertaga" },
  { id: 63, hsk: 1, lesson: 4, hanzi: "昨天", pinyin: "zuótiān", uzbek: "Kecha" },
  { id: 64, hsk: 1, lesson: 4, hanzi: "年", pinyin: "nián", uzbek: "Yil" },
  { id: 65, hsk: 1, lesson: 4, hanzi: "今年", pinyin: "jīnnián", uzbek: "Bu yil" },
  { id: 66, hsk: 1, lesson: 4, hanzi: "明年", pinyin: "míngnián", uzbek: "Kelgasi yil" },
  { id: 67, hsk: 1, lesson: 4, hanzi: "去年", pinyin: "qù nián", uzbek: "O'tgan yil" },
  { id: 68, hsk: 1, lesson: 4, hanzi: "月", pinyin: "yuè", uzbek: "Oy" },
  { id: 69, hsk: 1, lesson: 4, hanzi: "日", pinyin: "rì", uzbek: "Kun, sana" },
  { id: 70, hsk: 1, lesson: 4, hanzi: "星期", pinyin: "xīngqī", uzbek: "Hafta" },
  { id: 71, hsk: 1, lesson: 4, hanzi: "星期日", pinyin: "xīngqīrì", uzbek: "Yakshanba" },
  { id: 72, hsk: 1, lesson: 4, hanzi: "星期天", pinyin: "xīngqītiān", uzbek: "Yakshanba" },
  { id: 73, hsk: 1, lesson: 4, hanzi: "上午", pinyin: "shàngwǔ", uzbek: "Tushdan oldin" },
  { id: 74, hsk: 1, lesson: 4, hanzi: "下午", pinyin: "xiàwǔ", uzbek: "Tushdan keyin" },
  { id: 75, hsk: 1, lesson: 4, hanzi: "晚上", pinyin: "wǎnshàng", uzbek: "Kechqurun" },
  { id: 76, hsk: 1, lesson: 4, hanzi: "早", pinyin: "zǎo", uzbek: "Ertalab" },
  { id: 77, hsk: 1, lesson: 4, hanzi: "早上", pinyin: "zǎoshàng", uzbek: "Ertalab" },
  { id: 78, hsk: 1, lesson: 4, hanzi: "点", pinyin: "diǎn", uzbek: "Soat" },
  { id: 79, hsk: 1, lesson: 4, hanzi: "分", pinyin: "fēn", uzbek: "Daqiqa" },
  { id: 80, hsk: 1, lesson: 4, hanzi: "分钟", pinyin: "fēn zhōng", uzbek: "Daqiqa" },

  // Lesson 5 - Food & Drink (20 words)
  { id: 81, hsk: 1, lesson: 5, hanzi: "吃", pinyin: "chī", uzbek: "Yemoq" },
  { id: 82, hsk: 1, lesson: 5, hanzi: "喝", pinyin: "hē", uzbek: "Ichmoq" },
  { id: 83, hsk: 1, lesson: 5, hanzi: "茶", pinyin: "chá", uzbek: "Choy" },
  { id: 84, hsk: 1, lesson: 5, hanzi: "菜", pinyin: "cài", uzbek: "Taom, sabzavot" },
  { id: 85, hsk: 1, lesson: 5, hanzi: "饭", pinyin: "fàn", uzbek: "Guruch, ovqat" },
  { id: 86, hsk: 1, lesson: 5, hanzi: "米饭", pinyin: "mǐfàn", uzbek: "Guruch" },
  { id: 87, hsk: 1, lesson: 5, hanzi: "包子", pinyin: "bāozi", uzbek: "Manti" },
  { id: 88, hsk: 1, lesson: 5, hanzi: "饺子", pinyin: "jiǎozi", uzbek: "Chuchvara" },
  { id: 89, hsk: 1, lesson: 5, hanzi: "面条儿", pinyin: "miàntiáor", uzbek: "Lag'mon" },
  { id: 90, hsk: 1, lesson: 5, hanzi: "面包", pinyin: "miànbāo", uzbek: "Non" },
  { id: 91, hsk: 1, lesson: 5, hanzi: "鸡蛋", pinyin: "jīdàn", uzbek: "Tuxum" },
  { id: 92, hsk: 1, lesson: 5, hanzi: "水果", pinyin: "shuǐ guǒ", uzbek: "Mevalar" },
  { id: 93, hsk: 1, lesson: 5, hanzi: "苹果", pinyin: "píng guǒ", uzbek: "Olma" },
  { id: 94, hsk: 1, lesson: 5, hanzi: "牛奶", pinyin: "niúnǎi", uzbek: "Sut" },
  { id: 95, hsk: 1, lesson: 5, hanzi: "水", pinyin: "shuǐ", uzbek: "Suv" },
  { id: 96, hsk: 1, lesson: 5, hanzi: "早饭", pinyin: "zǎofàn", uzbek: "Nonushta" },
  { id: 97, hsk: 1, lesson: 5, hanzi: "午饭", pinyin: "wǔ fàn", uzbek: "Tushlik" },
  { id: 98, hsk: 1, lesson: 5, hanzi: "晚饭", pinyin: "wǎnfàn", uzbek: "Kechki ovqat" },
  { id: 99, hsk: 1, lesson: 5, hanzi: "好吃", pinyin: "hǎochī", uzbek: "Mazali" },
  { id: 100, hsk: 1, lesson: 5, hanzi: "杯子", pinyin: "bēizi", uzbek: "Piola" },

  // Lesson 6 - Places & Transportation (20 words)
  { id: 101, hsk: 1, lesson: 6, hanzi: "车", pinyin: "chē", uzbek: "Mashina" },
  { id: 102, hsk: 1, lesson: 6, hanzi: "出租车", pinyin: "chūzūchē", uzbek: "Taksi" },
  { id: 103, hsk: 1, lesson: 6, hanzi: "火车", pinyin: "huǒchē", uzbek: "Poyezd" },
  { id: 104, hsk: 1, lesson: 6, hanzi: "飞机", pinyin: "fēi jī", uzbek: "Samolyot" },
  { id: 105, hsk: 1, lesson: 6, hanzi: "店", pinyin: "diàn", uzbek: "Do'kon" },
  { id: 106, hsk: 1, lesson: 6, hanzi: "商店", pinyin: "shāngdiàn", uzbek: "Do'kon" },
  { id: 107, hsk: 1, lesson: 6, hanzi: "超市", pinyin: "chāo shì", uzbek: "Supermarket" },
  { id: 108, hsk: 1, lesson: 6, hanzi: "饭店", pinyin: "fàndiàn", uzbek: "Restoran" },
  { id: 109, hsk: 1, lesson: 6, hanzi: "房间", pinyin: "fángjiān", uzbek: "Xona" },
  { id: 110, hsk: 1, lesson: 6, hanzi: "学校", pinyin: "xuéxiào", uzbek: "Maktab" },
  { id: 111, hsk: 1, lesson: 6, hanzi: "大学", pinyin: "dàxué", uzbek: "Universitet" },
  { id: 112, hsk: 1, lesson: 6, hanzi: "医院", pinyin: "yī yuàn", uzbek: "Kasalxona" },
  { id: 113, hsk: 1, lesson: 6, hanzi: "电影院", pinyin: "diànyǐngyuàn", uzbek: "Kino" },
  { id: 114, hsk: 1, lesson: 6, hanzi: "书店", pinyin: "shū diàn", uzbek: "Kitob do'koni" },
  { id: 115, hsk: 1, lesson: 6, hanzi: "公司", pinyin: "gōngsī", uzbek: "Kompaniya" },
  { id: 116, hsk: 1, lesson: 6, hanzi: "边", pinyin: "biān", uzbek: "Tomon" },
  { id: 117, hsk: 1, lesson: 6, hanzi: "那边", pinyin: "nàbiān", uzbek: "U tomonda" },
  { id: 118, hsk: 1, lesson: 6, hanzi: "外边", pinyin: "wàibiān", uzbek: "Tashqarida" },
  { id: 119, hsk: 1, lesson: 6, hanzi: "里", pinyin: "lǐ", uzbek: "Ichida" },
  { id: 120, hsk: 1, lesson: 6, hanzi: "外", pinyin: "wài", uzbek: "Tashqari" },

  // Lesson 7 - Verbs - Basic Actions (20 words)
  { id: 121, hsk: 1, lesson: 7, hanzi: "去", pinyin: "qù", uzbek: "Ketmoq" },
  { id: 122, hsk: 1, lesson: 7, hanzi: "来", pinyin: "lái", uzbek: "Kelmoq" },
  { id: 123, hsk: 1, lesson: 7, hanzi: "看", pinyin: "kàn", uzbek: "Ko'rmoq" },
  { id: 124, hsk: 1, lesson: 7, hanzi: "说", pinyin: "shuō", uzbek: "Gapirmoq" },
  { id: 125, hsk: 1, lesson: 7, hanzi: "听", pinyin: "tīng", uzbek: "Tinglamoq" },
  { id: 126, hsk: 1, lesson: 7, hanzi: "读", pinyin: "dú", uzbek: "O'qimoq" },
  { id: 127, hsk: 1, lesson: 7, hanzi: "写", pinyin: "xiě", uzbek: "Yozmoq" },
  { id: 128, hsk: 1, lesson: 7, hanzi: "做", pinyin: "zuò", uzbek: "Qilmoq" },
  { id: 129, hsk: 1, lesson: 7, hanzi: "买", pinyin: "mǎi", uzbek: "Sotib olish" },
  { id: 130, hsk: 1, lesson: 7, hanzi: "卖", pinyin: "mài", uzbek: "Sotmoq" },
  { id: 131, hsk: 1, lesson: 7, hanzi: "给", pinyin: "gěi", uzbek: "Bermoq" },
  { id: 132, hsk: 1, lesson: 7, hanzi: "要", pinyin: "yào", uzbek: "Xohlamoq" },
  { id: 133, hsk: 1, lesson: 7, hanzi: "想", pinyin: "xiǎng", uzbek: "Xohlamoq" },
  { id: 134, hsk: 1, lesson: 7, hanzi: "会", pinyin: "huì", uzbek: "Qila olmoq" },
  { id: 135, hsk: 1, lesson: 7, hanzi: "能", pinyin: "néng", uzbek: "Qila olmoq" },
  { id: 136, hsk: 1, lesson: 7, hanzi: "可以", pinyin: "kě yǐ", uzbek: "Mumkin" },
  { id: 137, hsk: 1, lesson: 7, hanzi: "开", pinyin: "kāi", uzbek: "Ochmoq" },
  { id: 138, hsk: 1, lesson: 7, hanzi: "开车", pinyin: "kāi chē", uzbek: "Haydash qilmoq" },
  { id: 139, hsk: 1, lesson: 7, hanzi: "回", pinyin: "huí", uzbek: "Qaytmoq" },
  { id: 140, hsk: 1, lesson: 7, hanzi: "找", pinyin: "zhǎo", uzbek: "Qidirmoq" },

  // Lesson 8 - Verbs - Daily Activities (20 words)
  { id: 141, hsk: 1, lesson: 8, hanzi: "学习", pinyin: "xuéxí", uzbek: "O'qimoq" },
  { id: 142, hsk: 1, lesson: 8, hanzi: "学", pinyin: "xué", uzbek: "O'qimoq" },
  { id: 143, hsk: 1, lesson: 8, hanzi: "工作", pinyin: "gōngzuò", uzbek: "Ishlamoq" },
  { id: 144, hsk: 1, lesson: 8, hanzi: "上班", pinyin: "shàngbān", uzbek: "Ishga chiqmoq" },
  { id: 145, hsk: 1, lesson: 8, hanzi: "下班", pinyin: "xià bān", uzbek: "Ishdan tushmoq" },
  { id: 146, hsk: 1, lesson: 8, hanzi: "上学", pinyin: "shàngxué", uzbek: "Maktabga borish" },
  { id: 147, hsk: 1, lesson: 8, hanzi: "上课", pinyin: "shàng kè", uzbek: "Darsga borish" },
  { id: 148, hsk: 1, lesson: 8, hanzi: "下课", pinyin: "xià kè", uzbek: "Darsdan chiqish" },
  { id: 149, hsk: 1, lesson: 8, hanzi: "睡觉", pinyin: "shuì jiào", uzbek: "Uxlamoq" },
  { id: 150, hsk: 1, lesson: 8, hanzi: "睡", pinyin: "shuì", uzbek: "Uxlamoq" },
  { id: 151, hsk: 1, lesson: 8, hanzi: "起床", pinyin: "qǐchuáng", uzbek: "Turmoq" },
  { id: 152, hsk: 1, lesson: 8, hanzi: "休息", pinyin: "xiūxi", uzbek: "Dam olish" },
  { id: 153, hsk: 1, lesson: 8, hanzi: "玩", pinyin: "wán", uzbek: "O'ynash" },
  { id: 154, hsk: 1, lesson: 8, hanzi: "打电话", pinyin: "dǎ diànhuà", uzbek: "Telefon qilmoq" },
  { id: 155, hsk: 1, lesson: 8, hanzi: "唱歌", pinyin: "chànggē", uzbek: "Qo'shiq aytmoq" },
  { id: 156, hsk: 1, lesson: 8, hanzi: "穿", pinyin: "chuān", uzbek: "Kiyish" },
  { id: 157, hsk: 1, lesson: 8, hanzi: "到", pinyin: "dào", uzbek: "Yetib kelmoq" },
  { id: 158, hsk: 1, lesson: 8, hanzi: "认识", pinyin: "rèn shi", uzbek: "Tanishmoq" },
  { id: 159, hsk: 1, lesson: 8, hanzi: "觉得", pinyin: "jué de", uzbek: "O'ylamoq" },
  { id: 160, hsk: 1, lesson: 8, hanzi: "喜欢", pinyin: "xǐ huān", uzbek: "Yoqtirmoq" },

  // Lesson 9 - Adjectives & Descriptions (20 words)
  { id: 161, hsk: 1, lesson: 9, hanzi: "大", pinyin: "dà", uzbek: "Katta" },
  { id: 162, hsk: 1, lesson: 9, hanzi: "小", pinyin: "xiǎo", uzbek: "Kichik" },
  { id: 163, hsk: 1, lesson: 9, hanzi: "多", pinyin: "duō", uzbek: "Ko'p" },
  { id: 164, hsk: 1, lesson: 9, hanzi: "少", pinyin: "shǎo", uzbek: "Kam" },
  { id: 165, hsk: 1, lesson: 9, hanzi: "好", pinyin: "hǎo", uzbek: "Yaxshi" },
  { id: 166, hsk: 1, lesson: 9, hanzi: "坏", pinyin: "huài", uzbek: "Yomon" },
  { id: 167, hsk: 1, lesson: 9, hanzi: "忙", pinyin: "máng", uzbek: "Band" },
  { id: 168, hsk: 1, lesson: 9, hanzi: "高兴", pinyin: "gāoxìng", uzbek: "Xursand" },
  { id: 169, hsk: 1, lesson: 9, hanzi: "漂亮", pinyin: "piào liàng", uzbek: "Chiroyli" },
  { id: 170, hsk: 1, lesson: 9, hanzi: "好看", pinyin: "hǎokàn", uzbek: "Chiroyli" },
  { id: 171, hsk: 1, lesson: 9, hanzi: "贵", pinyin: "guì", uzbek: "Qimmat" },
  { id: 172, hsk: 1, lesson: 9, hanzi: "便宜", pinyin: "pián yí", uzbek: "Arzon" },
  { id: 173, hsk: 1, lesson: 9, hanzi: "热", pinyin: "rè", uzbek: "Issiq" },
  { id: 174, hsk: 1, lesson: 9, hanzi: "冷", pinyin: "lěng", uzbek: "Sovuq" },
  { id: 175, hsk: 1, lesson: 9, hanzi: "新", pinyin: "xīn", uzbek: "Yangi" },
  { id: 176, hsk: 1, lesson: 9, hanzi: "老", pinyin: "lǎo", uzbek: "Eski" },
  { id: 177, hsk: 1, lesson: 9, hanzi: "几", pinyin: "jǐ", uzbek: "Nechta" },
  { id: 178, hsk: 1, lesson: 9, hanzi: "非常", pinyin: "fēi cháng", uzbek: "Juda" },
  { id: 179, hsk: 1, lesson: 9, hanzi: "很", pinyin: "hěn", uzbek: "Juda" },
  { id: 180, hsk: 1, lesson: 9, hanzi: "太", pinyin: "tài", uzbek: "Juda, ortiqcha" },

  // Lesson 10 - Question Words (20 words)
  { id: 181, hsk: 1, lesson: 10, hanzi: "什么", pinyin: "shénme", uzbek: "Nima" },
  { id: 182, hsk: 1, lesson: 10, hanzi: "谁", pinyin: "shéi", uzbek: "Kim" },
  { id: 183, hsk: 1, lesson: 10, hanzi: "哪", pinyin: "nǎ", uzbek: "Qaysi" },
  { id: 184, hsk: 1, lesson: 10, hanzi: "哪里", pinyin: "nǎlǐ", uzbek: "Qayerda" },
  { id: 185, hsk: 1, lesson: 10, hanzi: "那儿", pinyin: "nàr", uzbek: "U yerd" },
  { id: 186, hsk: 1, lesson: 10, hanzi: "哪儿", pinyin: "nǎr", uzbek: "Qayer" },
  { id: 187, hsk: 1, lesson: 10, hanzi: "怎么", pinyin: "zěnme", uzbek: "Qanday" },
  { id: 188, hsk: 1, lesson: 10, hanzi: "怎么样", pinyin: "zěnme yàng", uzbek: "Qanday" },
  { id: 189, hsk: 1, lesson: 10, hanzi: "多少", pinyin: "duōshǎo", uzbek: "Qancha" },
  { id: 190, hsk: 1, lesson: 10, hanzi: "哪个", pinyin: "nǎ ge", uzbek: "Qaysi biri" },
  { id: 191, hsk: 1, lesson: 10, hanzi: "那个", pinyin: "nà ge", uzbek: "U biri" },
  { id: 192, hsk: 1, lesson: 10, hanzi: "哪些", pinyin: "nǎxiē", uzbek: "Qaysilar" },
  { id: 193, hsk: 1, lesson: 10, hanzi: "那些", pinyin: "nàxiē", uzbek: "Ularning barchasi" },
  { id: 194, hsk: 1, lesson: 10, hanzi: "这", pinyin: "zhè", uzbek: "Bu" },
  { id: 195, hsk: 1, lesson: 10, hanzi: "这个", pinyin: "zhè ge", uzbek: "Bu narsa" },
  { id: 196, hsk: 1, lesson: 10, hanzi: "这些", pinyin: "zhèxiē", uzbek: "Bularning barchasi" },
  { id: 197, hsk: 1, lesson: 10, hanzi: "这边", pinyin: "zhè bian", uzbek: "Bu tomon" },
  { id: 198, hsk: 1, lesson: 10, hanzi: "那里", pinyin: "nàlǐ", uzbek: "U yerd" },
  { id: 199, hsk: 1, lesson: 10, hanzi: "叫", pinyin: "jiào", uzbek: "Chaqirmoq" },
  { id: 200, hsk: 1, lesson: 10, hanzi: "名字", pinyin: "míngzi", uzbek: "Ism" },

  // Lesson 11 - Objects & Things (20 words)
  { id: 201, hsk: 1, lesson: 11, hanzi: "东西", pinyin: "dōngxī", uzbek: "Narsalar" },
  { id: 202, hsk: 1, lesson: 11, hanzi: "书", pinyin: "shū", uzbek: "Kitob" },
  { id: 203, hsk: 1, lesson: 11, hanzi: "手机", pinyin: "shǒujī", uzbek: "Telefon" },
  { id: 204, hsk: 1, lesson: 11, hanzi: "电话", pinyin: "diànhuà", uzbek: "Telefon" },
  { id: 205, hsk: 1, lesson: 11, hanzi: "电脑", pinyin: "diànnǎo", uzbek: "Kompyuter" },
  { id: 206, hsk: 1, lesson: 11, hanzi: "电视", pinyin: "diànshì", uzbek: "Televizor" },
  { id: 207, hsk: 1, lesson: 11, hanzi: "电影", pinyin: "diànyǐng", uzbek: "Film" },
  { id: 208, hsk: 1, lesson: 11, hanzi: "衣服", pinyin: "yī fú", uzbek: "Kiyimlar" },
  { id: 209, hsk: 1, lesson: 11, hanzi: "钱", pinyin: "qián", uzbek: "Pul" },
  { id: 210, hsk: 1, lesson: 11, hanzi: "元", pinyin: "yuán", uzbek: "Yuan" },
  { id: 211, hsk: 1, lesson: 11, hanzi: "椅子", pinyin: "yǐ zi", uzbek: "Stul" },
  { id: 212, hsk: 1, lesson: 11, hanzi: "床", pinyin: "chuáng", uzbek: "Karat" },
  { id: 213, hsk: 1, lesson: 11, hanzi: "桌子", pinyin: "zhuōzi", uzbek: "Stol" },
  { id: 214, hsk: 1, lesson: 11, hanzi: "门", pinyin: "mén", uzbek: "Eshik" },
  { id: 215, hsk: 1, lesson: 11, hanzi: "窗户", pinyin: "chuānghù", uzbek: "Oyna" },
  { id: 216, hsk: 1, lesson: 11, hanzi: "墙", pinyin: "qiáng", uzbek: "Devor" },
  { id: 217, hsk: 1, lesson: 11, hanzi: "地", pinyin: "dì", uzbek: "Yer" },
  { id: 218, hsk: 1, lesson: 11, hanzi: "天", pinyin: "tiān", uzbek: "Kun, osmon" },
  { id: 219, hsk: 1, lesson: 11, hanzi: "天气", pinyin: "tiānqì", uzbek: "Ob-havo" },
  { id: 220, hsk: 1, lesson: 11, hanzi: "雨", pinyin: "yǔ", uzbek: "Yomg'ir" },

  // Lesson 12 - Animals & Nature (20 words)
  { id: 221, hsk: 1, lesson: 12, hanzi: "狗", pinyin: "gǒu", uzbek: "It" },
  { id: 222, hsk: 1, lesson: 12, hanzi: "猫", pinyin: "māo", uzbek: "Mushuk" },
  { id: 223, hsk: 1, lesson: 12, hanzi: "鸟", pinyin: "niǎo", uzbek: "Qush" },
  { id: 224, hsk: 1, lesson: 12, hanzi: "鱼", pinyin: "yú", uzbek: "Baliq" },
  { id: 225, hsk: 1, lesson: 12, hanzi: "马", pinyin: "mǎ", uzbek: "Ot" },
  { id: 226, hsk: 1, lesson: 12, hanzi: "牛", pinyin: "niú", uzbek: "Sigir" },
  { id: 227, hsk: 1, lesson: 12, hanzi: "羊", pinyin: "yáng", uzbek: "Qo'y" },
  { id: 228, hsk: 1, lesson: 12, hanzi: "鸡", pinyin: "jī", uzbek: "Tovuq" },
  { id: 229, hsk: 1, lesson: 12, hanzi: "雪", pinyin: "xuě", uzbek: "Qor" },
  { id: 230, hsk: 1, lesson: 12, hanzi: "风", pinyin: "fēng", uzbek: "Shamol" },
  { id: 231, hsk: 1, lesson: 12, hanzi: "云", pinyin: "yún", uzbek: "Bulut" },
  { id: 232, hsk: 1, lesson: 12, hanzi: "山", pinyin: "shān", uzbek: "Tog'" },
  { id: 233, hsk: 1, lesson: 12, hanzi: "水", pinyin: "shuǐ", uzbek: "Suv" },
  { id: 234, hsk: 1, lesson: 12, hanzi: "火", pinyin: "huǒ", uzbek: "Olov" },
  { id: 235, hsk: 1, lesson: 12, hanzi: "木", pinyin: "mù", uzbek: "Daraxt" },
  { id: 236, hsk: 1, lesson: 12, hanzi: "花", pinyin: "huā", uzbek: "Gul" },
  { id: 237, hsk: 1, lesson: 12, hanzi: "草", pinyin: "cǎo", uzbek: "O't" },
  { id: 238, hsk: 1, lesson: 12, hanzi: "树", pinyin: "shù", uzbek: "Daraxt" },
  { id: 239, hsk: 1, lesson: 12, hanzi: "路", pinyin: "lù", uzbek: "Yo'l" },
  { id: 240, hsk: 1, lesson: 12, hanzi: "车", pinyin: "chē", uzbek: "Mashina" },

  // Lesson 13 - Common Phrases & Expressions (20 words)
  { id: 241, hsk: 1, lesson: 13, hanzi: "对不起", pinyin: "duìbuqǐ", uzbek: "Kechirasiz" },
  { id: 242, hsk: 1, lesson: 13, hanzi: "没关系", pinyin: "méi guānxi", uzbek: "Hech gap emas" },
  { id: 243, hsk: 1, lesson: 13, hanzi: "没关系", pinyin: "méi shì", uzbek: "Hech gap emas" },
  { id: 244, hsk: 1, lesson: 13, hanzi: "再见", pinyin: "zàijiàn", uzbek: "Xayr" },
  { id: 245, hsk: 1, lesson: 13, hanzi: "请", pinyin: "qǐng", uzbek: "Marhamat" },
  { id: 246, hsk: 1, lesson: 13, hanzi: "请问", pinyin: "qǐngwèn", uzbek: "Savol berishga ruxsat" },
  { id: 247, hsk: 1, lesson: 13, hanzi: "谢谢", pinyin: "xièxie", uzbek: "Rahmat" },
  { id: 248, hsk: 1, lesson: 13, hanzi: "不客气", pinyin: "bú kèqi", uzbek: "Arzimaydi" },
  { id: 249, hsk: 1, lesson: 13, hanzi: "你好", pinyin: "nǐ hǎo", uzbek: "Salom" },
  { id: 250, hsk: 1, lesson: 13, hanzi: "早上好", pinyin: "zǎoshàng hǎo", uzbek: "Xayrli tong" },
  { id: 251, hsk: 1, lesson: 13, hanzi: "晚上好", pinyin: "wǎnshàng hǎo", uzbek: "Xayrli kech" },
  { id: 252, hsk: 1, lesson: 13, hanzi: "晚安", pinyin: "wǎn'ān", uzbek: "Xayrli tun" },
  { id: 253, hsk: 1, lesson: 13, hanzi: "慢慢", pinyin: "mànmàn", uzbek: "Sekin-sekin" },
  { id: 254, hsk: 1, lesson: 13, hanzi: "慢慢吃", pinyin: "mànmàn chī", uzbek: "Ozgina yeying" },
  { id: 255, hsk: 1, lesson: 13, hanzi: "慢慢走", pinyin: "mànmàn zǒu", uzbek: "Sekin ketish" },
  { id: 256, hsk: 1, lesson: 13, hanzi: "加油", pinyin: "jiāyóu", uzbek: "Kuchlang" },
  { id: 257, hsk: 1, lesson: 13, hanzi: "没关系", pinyin: "méiyǒu", uzbek: "Yo'q" },
  { id: 258, hsk: 1, lesson: 13, hanzi: "有的", pinyin: "yǒude", uzbek: "Ba'zilari" },
  { id: 259, hsk: 1, lesson: 13, hanzi: "有些", pinyin: "yǒu xiē", uzbek: "Ba'zilari" },
  { id: 260, hsk: 1, lesson: 13, hanzi: "有点儿", pinyin: "yǒu diǎn er", uzbek: "Ozgina" },

  // Lesson 14 - School & Education (20 words)
  { id: 261, hsk: 1, lesson: 14, hanzi: "老师", pinyin: "lǎoshī", uzbek: "O'qituvchi" },
  { id: 262, hsk: 1, lesson: 14, hanzi: "学生", pinyin: "xuéshēng", uzbek: "Talaba" },
  { id: 263, hsk: 1, lesson: 14, hanzi: "小学生", pinyin: "xiǎoxuéshēng", uzbek: "Maktab o'quvchisi" },
  { id: 264, hsk: 1, lesson: 14, hanzi: "中学生", pinyin: "zhōngxuéshēng", uzbek: "O'rta maktab o'quvchisi" },
  { id: 265, hsk: 1, lesson: 14, hanzi: "大学生", pinyin: "dàxuéshēng", uzbek: "Universitet talabasi" },
  { id: 266, hsk: 1, lesson: 14, hanzi: "小学", pinyin: "xiǎoxué", uzbek: "Boshlang'ich maktab" },
  { id: 267, hsk: 1, lesson: 14, hanzi: "中学", pinyin: "zhōngxué", uzbek: "O'rta maktab" },
  { id: 268, hsk: 1, lesson: 14, hanzi: "大学", pinyin: "dàxué", uzbek: "Universitet" },
  { id: 269, hsk: 1, lesson: 14, hanzi: "课", pinyin: "kè", uzbek: "Dars" },
  { id: 270, hsk: 1, lesson: 14, hanzi: "书", pinyin: "shū", uzbek: "Kitob" },
  { id: 271, hsk: 1, lesson: 14, hanzi: "笔", pinyin: "bǐ", uzbek: "Ruchka" },
  { id: 272, hsk: 1, lesson: 14, hanzi: "纸", pinyin: "zhǐ", uzbek: "Qog'oz" },
  { id: 273, hsk: 1, lesson: 14, hanzi: "字", pinyin: "zì", uzbek: "Harf" },
  { id: 274, hsk: 1, lesson: 14, hanzi: "汉字", pinyin: "Hànzì", uzbek: "Xitoy harflari" },
  { id: 275, hsk: 1, lesson: 14, hanzi: "汉语", pinyin: "Hànyǔ", uzbek: "Xitoy tili" },
  { id: 276, hsk: 1, lesson: 14, hanzi: "中文", pinyin: "Zhōng wén", uzbek: "Xitoy tili" },
  { id: 277, hsk: 1, lesson: 14, hanzi: "英语", pinyin: "Yīngyǔ", uzbek: "Ingliz tili" },
  { id: 278, hsk: 1, lesson: 14, hanzi: "读", pinyin: "dú", uzbek: "O'qimoq" },
  { id: 279, hsk: 1, lesson: 14, hanzi: "写", pinyin: "xiě", uzbek: "Yozmoq" },
  { id: 280, hsk: 1, lesson: 14, hanzi: "读书", pinyin: "dúshū", uzbek: "Kitob o'qimoq" },

  // Lesson 15 - Miscellaneous & Final Words (20 words)
  { id: 281, hsk: 1, lesson: 15, hanzi: "是", pinyin: "shì", uzbek: "Bo'lmoq" },
  { id: 282, hsk: 1, lesson: 15, hanzi: "有", pinyin: "yǒu", uzbek: "Bormoq" },
  { id: 283, hsk: 1, lesson: 15, hanzi: "在", pinyin: "zài", uzbek: "Joyda" },
  { id: 284, hsk: 1, lesson: 15, hanzi: "和", pinyin: "hé", uzbek: "Va" },
  { id: 285, hsk: 1, lesson: 15, hanzi: "都", pinyin: "dōu", uzbek: "Hammasi" },
  { id: 286, hsk: 1, lesson: 15, hanzi: "也", pinyin: "yě", uzbek: "Ham" },
  { id: 287, hsk: 1, lesson: 15, hanzi: "还", pinyin: "hái", uzbek: "Hali" },
  { id: 288, hsk: 1, lesson: 15, hanzi: "就", pinyin: "jiù", uzbek: "Shunchaki" },
  { id: 289, hsk: 1, lesson: 15, hanzi: "又", pinyin: "yòu", uzbek: "Yana" },
  { id: 290, hsk: 1, lesson: 15, hanzi: "或者", pinyin: "huòzhě", uzbek: "Yoki" },
  { id: 291, hsk: 1, lesson: 15, hanzi: "因为", pinyin: "yīnwèi", uzbek: "Chunki" },
  { id: 292, hsk: 1, lesson: 15, hanzi: "所以", pinyin: "suǒyǐ", uzbek: "Shuning uchun" },
  { id: 293, hsk: 1, lesson: 15, hanzi: "但是", pinyin: "dànshì", uzbek: "Lekin" },
  { id: 294, hsk: 1, lesson: 15, hanzi: "如果", pinyin: "rúguǒ", uzbek: "Agar" },
  { id: 295, hsk: 1, lesson: 15, hanzi: "那么", pinyin: "nàme", uzbek: "U holda" },
  { id: 296, hsk: 1, lesson: 15, hanzi: "然后", pinyin: "ránhòu", uzbek: "Keyin" },
  { id: 297, hsk: 1, lesson: 15, hanzi: "或者", pinyin: "huòzhě", uzbek: "Yoki" },
  { id: 298, hsk: 1, lesson: 15, hanzi: "可是", pinyin: "kěshì", uzbek: "Lekin" },
  { id: 299, hsk: 1, lesson: 15, hanzi: "不过", pinyin: "búguò", uzbek: "Biroq" },
  { id: 300, hsk: 1, lesson: 15, hanzi: "再", pinyin: "zài", uzbek: "Yana" }
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
    
    // For iOS/Android mobile compatibility
    // Resume speech synthesis if it was paused (mobile browsers often pause it)
    if (window.speechSynthesis.paused) {
        window.speechSynthesis.resume();
    }
    
    // Small delay to ensure cancellation is complete
    setTimeout(() => {
        try {
            const utterance = new SpeechSynthesisUtterance(word.hanzi);
            utterance.lang = 'zh-CN';
            utterance.rate = 0.8;
            utterance.pitch = 1;
            utterance.volume = 1;
            
            // Mobile-specific settings
            utterance.rate = 0.9; // Slightly faster for mobile
            utterance.pitch = 1;
            
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
                // For iOS: ensure speech synthesis is not paused after completion
                if (window.speechSynthesis.paused) {
                    window.speechSynthesis.resume();
                }
            };
            
            // For iOS: ensure speech synthesis is active before speaking
            window.speechSynthesis.speak(utterance);
            
            // For iOS: keep speech synthesis alive (iOS bug workaround)
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
