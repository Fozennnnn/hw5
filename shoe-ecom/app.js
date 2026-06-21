/**
 * StrideForge E-Commerce Core Controller - SPA Router & State Manager
 */

// =========================================================================
// 1. PRODUCT DATABASE & DATA MODEL
// =========================================================================
const PRODUCTS = [
  // --- MEN'S SHOES (3) ---
  {
    id: 1,
    name: 'StrideForge Apex Runner',
    chName: '頂峰極速碳板跑鞋',
    category: 'men',
    categoryCh: '男鞋專區',
    price: 4980,
    rating: 4.9,
    reviews: 142,
    image: 'assets/images/men_apex_runner.jpg',
    description: '專為長距離馬拉松與競速跑者設計。內嵌全掌型 3D 碳纖維推進板，搭配極致輕盈的 StrideFoam 中底，提供前所未有的回彈能量反饋與抗扭轉支撐力，助力突破個人最佳紀錄。',
    sizes: ['US 8', 'US 9', 'US 10', 'US 11'],
    colors: [
      { name: '極光藍', hex: '#00f0ff' },
      { name: '暗影黑', hex: '#111827' }
    ],
    features: [
      { title: '全掌 3D 碳纖維推進板', desc: '帶來強勁的向前推動力與步態轉換效率。' },
      { title: 'StrideFoam 超臨界中底', desc: '極致輕量化，高達 82% 能量回饋。' },
      { title: '科技透氣網眼鞋面', desc: '熱壓無縫貼合，兼具極佳透氣性與包覆感。' }
    ]
  },
  {
    id: 2,
    name: 'StrideForge Heritage Brogue',
    chName: '經典工藝雕花真皮皮鞋',
    category: 'men',
    categoryCh: '男鞋專區',
    price: 5800,
    rating: 4.8,
    reviews: 86,
    image: 'assets/images/men_heritage_brogue.jpg',
    description: '選用頂級頭層義大利牛皮，經職人手工擦色渲染，呈現深邃復古的光澤層次。精緻的德比雕花（Brogue）工藝與固特異沿條結構，在紳士正裝與雅痞休閒間取得完美平衡。',
    sizes: ['US 8', 'US 9', 'US 10', 'US 11'],
    colors: [
      { name: '經典焦糖棕', hex: '#b45309' },
      { name: '深邃曜石黑', hex: '#000000' }
    ],
    features: [
      { title: '手工擦色頭層牛皮', desc: '皮質細緻柔韌，隨穿著時間更顯獨特舊化質感。' },
      { title: '減震 Ortholite 鞋墊', desc: '打破傳統皮鞋堅硬不適，提供全天候的緩震體驗。' },
      { title: '手工防滑耐磨大底', desc: '複合橡膠防滑塊設計，確保雨天行走的平穩防滑。' }
    ]
  },
  {
    id: 3,
    name: 'StrideForge Urban Explorer',
    chName: '都市探索機能防水鞋',
    category: 'men',
    categoryCh: '男鞋專區',
    price: 4350,
    rating: 4.7,
    reviews: 118,
    image: 'assets/images/men_urban_explorer.jpg',
    description: '融合軍工機能美學與都市穿搭需求。搭載 HydroShield 奈米級防水薄膜，有效阻絕雨水滲入同時排出鞋內濕氣。免綁快速抽繩設計，讓您在都市鋼筋水泥與戶外山林間穿梭自如。',
    sizes: ['US 8', 'US 9', 'US 10', 'US 11'],
    colors: [
      { name: '軍事工裝綠', hex: '#3f6212' },
      { name: '科技啞光黑', hex: '#1f2937' }
    ],
    features: [
      { title: 'HydroShield 防水薄膜', desc: '微孔防護技術，達 10,000mm 靜水壓防水效能。' },
      { title: 'Fidlock 快速磁扣抽繩', desc: '單手即可快速調節鬆緊，安全且極具機能科技感。' },
      { title: 'Vibram 黃金防滑大底', desc: '粗獷齒狀胎面，展現極佳的泥地抓地力與抗磨損性。' }
    ]
  },

  // --- WOMEN'S SHOES (3) ---
  {
    id: 4,
    name: 'StrideForge Stella Heel',
    chName: '星芒優雅麂皮高跟鞋',
    category: 'women',
    categoryCh: '女鞋專區',
    price: 3680,
    rating: 4.9,
    reviews: 95,
    image: 'assets/images/women_stella_heel.jpg',
    description: '為現代都會女性量身打造。7公分的精緻漸細跟高，能完美修飾腿部線條，同時底座加寬提供極佳穩定性。鞋面採用觸感細膩的奢華麂皮，搭配金屬Logo飾帶，展現優雅幹練氣場。',
    sizes: ['US 5', 'US 6', 'US 7', 'US 8'],
    colors: [
      { name: '皇家午夜藍', hex: '#1e3a8a' },
      { name: '優雅奢華黑', hex: '#1a1a1a' }
    ],
    features: [
      { title: '足弓壓力釋放設計', desc: '內嵌特製高回彈乳膠足弓墊，有效分散穿著高跟鞋時的前掌壓力。' },
      { title: '羊皮親膚防磨內裡', desc: '全真羊皮細滑觸感，告別高跟鞋磨腳的困擾。' },
      { title: '耐磨靜音天皮鞋跟', desc: '特別加裝靜音天皮，消除在大理石地面上行走的尖銳敲擊聲。' }
    ]
  },
  {
    id: 5,
    name: 'StrideForge Velvet Sneaker',
    chName: '天鵝絨時尚厚底板鞋',
    category: 'women',
    categoryCh: '女鞋專區',
    price: 3200,
    rating: 4.6,
    reviews: 130,
    image: 'assets/images/women_velvet_sneaker.jpg',
    description: '街頭潮流與奢華質感交織的代名詞。4.5公分的隱形增高平台，能自然延伸身形比例。高級天鵝絨拼接荔枝紋皮革鞋面，散發內斂奢華感，是日常休閒穿搭的視覺核心。',
    sizes: ['US 5', 'US 6', 'US 7', 'US 8'],
    colors: [
      { name: '玫瑰暮粉', hex: '#fda4af' },
      { name: '極簡象牙白', hex: '#f3f4f6' }
    ],
    features: [
      { title: '4.5公分輕質增高底', desc: '採用特殊微孔發泡橡膠，輕量不笨重，極佳修飾身形。' },
      { title: '天鵝絨異材質拼接', desc: '精緻的雙重質感對比，提升整體街頭潮流層次。' },
      { title: '記憶海綿抗壓鞋墊', desc: '緊密貼合腳底形狀，帶來猶如踩在雲朵般的舒適感。' }
    ]
  },
  {
    id: 6,
    name: 'StrideForge Breeze Flat',
    chName: '微風輕盈飛織平底鞋',
    category: 'women',
    categoryCh: '女鞋專區',
    price: 2580,
    rating: 4.8,
    reviews: 210,
    image: 'assets/images/women_breeze_flat.jpg',
    description: '如微風般輕盈無感，專為日常通勤與差旅設計。整雙鞋採用可水洗的一體成型飛織技術，緊密貼合各種腳型。超強回彈折疊大底，方便收納至手提包中，是您最優雅的第二雙備用鞋。',
    sizes: ['US 5', 'US 6', 'US 7', 'US 8'],
    colors: [
      { name: '柔和薰衣草紫', hex: '#ddd6fe' },
      { name: '極簡炭霧灰', hex: '#4b5563' }
    ],
    features: [
      { title: '環保一體飛織鞋面', desc: '使用回收塑料瓶製成的環保聚酯纖維，無縫編織防磨腳。' },
      { title: '3D 可彎折防滑軟底', desc: '可180度自由彎折，極致貼合步態律動，走路零負擔。' },
      { title: '整鞋可手洗機洗', desc: '可直接放入洗衣袋中以冷水溫和洗滌，保養極為便利。' }
    ]
  },

  // --- CASUAL SHOES (3) ---
  {
    id: 7,
    name: 'StrideForge Nomad Loafer',
    chName: '游牧麂皮休閒樂福鞋',
    category: 'casual',
    categoryCh: '各式休閒鞋',
    price: 3880,
    rating: 4.8,
    reviews: 79,
    image: 'assets/images/casual_nomad_loafer.jpg',
    description: '經典莫卡辛（Moccasin）縫線工藝，搭配頂級細磨麂皮，散發慵懶浪漫的紳士度假氣息。無內裡結構設計，帶來如同穿著襪子般的親膚包覆，一穿即走，隨性而不失體面。',
    sizes: ['US 7', 'US 8', 'US 9', 'US 10', 'US 11'],
    colors: [
      { name: '海軍深藍', hex: '#1e3a8a' },
      { name: '大地沙褐色', hex: '#d97706' }
    ],
    features: [
      { title: '手工莫卡辛縫線', desc: '經典雙針馬鞍縫法，堅固耐磨，散發濃厚復古手工感。' },
      { title: '超柔軟無內裡設計', desc: '減少皮革層數，使鞋身更柔韌服貼，釋放雙腳拘束。' },
      { title: '橡膠顆粒防滑大底', desc: '開車或休閒走路皆能提供精準的防滑與抓地力。' }
    ]
  },
  {
    id: 8,
    name: 'StrideForge Canvas Low',
    chName: '復古街頭硫化帆布鞋',
    category: 'casual',
    categoryCh: '各式休閒鞋',
    price: 1980,
    rating: 4.7,
    reviews: 325,
    image: 'assets/images/casual_canvas_low.jpg',
    description: '傳承傳統重磅硫化（Vulcanized）製鞋工藝，高溫高壓融合橡膠底，永不開膠。12oz重磅純棉帆布鞋面，抗撕裂且越穿越有味道，是街頭次文化與復古穿搭的必備單品。',
    sizes: ['US 6', 'US 7', 'US 8', 'US 9', 'US 10', 'US 11'],
    colors: [
      { name: '芥末復古黃', hex: '#eab308' },
      { name: '街頭極限黑', hex: '#111827' }
    ],
    features: [
      { title: '12oz 重磅抗撕裂帆布', desc: '厚實耐穿，經久磨損能呈現出獨特的復古做舊痕跡。' },
      { title: '高溫硫化加固工藝', desc: '大底與鞋面高溫融合，防開膠裂口，抗折性能極佳。' },
      { title: '加厚高彈 PU 鞋墊', desc: '大幅改善傳統板鞋腳感，提供極佳的足底緩震與支撐。' }
    ]
  },
  {
    id: 9,
    name: 'StrideForge Slip-On Lite',
    chName: '輕彈空氣感便攜懶人鞋',
    category: 'casual',
    categoryCh: '各式休閒鞋',
    price: 2280,
    rating: 4.5,
    reviews: 147,
    image: 'assets/images/casual_slipon_lite.jpg',
    description: '專為極簡生活主義者打造的無感單鞋。極富彈性的萊卡針織面料，配合腳踝彈力橡筋，方便穿脫且牢固貼合。超輕量 EVA 泡棉中底，單隻重量僅 180 克，讓您的雙腳無負擔行走整天。',
    sizes: ['US 6', 'US 7', 'US 8', 'US 9', 'US 10', 'US 11'],
    colors: [
      { name: '太空微塵灰', hex: '#9ca3af' },
      { name: '曜石午夜黑', hex: '#111827' }
    ],
    features: [
      { title: '180g 極致空氣羽量', desc: '輕量大底與面料結合，打造裸足般無拘無束的行走體驗。' },
      { title: '彈力萊卡套腳設計', desc: '高彈力包覆，一秒穿脫，完美應對日常通勤與居家休閒。' },
      { title: '防菌透氣蜂巢鞋墊', desc: '蜂巢排汗孔結構，防止細菌滋生，夏天穿著涼爽不悶腳。' }
    ]
  },

  // --- SPORTS SHOES (3) ---
  {
    id: 10,
    name: 'StrideForge Velocity Court',
    chName: '雷霆疾速專業網球鞋',
    category: 'sports',
    categoryCh: '專業運動鞋',
    price: 4500,
    rating: 4.8,
    reviews: 64,
    image: 'assets/images/sports_velocity_court.jpg',
    description: '針對網球、羽球等室內外硬地運動的側向橫移需求開發。鞋側配備 TPU 硬質防側翻支撐片，結合高密度的耐磨橡膠大底與人字抓地紋路，確保急停與側向切入時的爆發力與安全防護。',
    sizes: ['US 8', 'US 9', 'US 10', 'US 11'],
    colors: [
      { name: '螢光雷霆綠', hex: '#84cc16' },
      { name: '極地冰川白', hex: '#e5e7eb' }
    ],
    features: [
      { title: 'T-Shield 側向防翻片', desc: '高剛性 TPU 側壁包覆，防止劇烈變向滑步時的足踝扭傷。' },
      { title: 'AeroGrip 高磨橡膠底', desc: '人字形加深外底紋路，抓地抓地力極佳，耐磨性提升 40%。' },
      { title: '前掌高彈後掌避震中底', desc: '分區結構设计，前掌快速啟動反彈，後掌充分吸收衝擊。' }
    ]
  },
  {
    id: 11,
    name: 'StrideForge Trail Gazer',
    chName: '山巒越野機能登山鞋',
    category: 'sports',
    categoryCh: '專業運動鞋',
    price: 4800,
    rating: 4.9,
    reviews: 103,
    image: 'assets/images/sports_trail_gazer.jpg',
    description: '征服崎嶇險阻的終極裝備。鞋面使用高強度 Kevlar 防撕裂纖維拼接防水皮革，無懼尖銳碎石撞擊。全掌防刺穿底板與高摩擦橡膠齒，無論在濕滑泥地或陡峭岩壁，均能給予您絕對的安全感。',
    sizes: ['US 8', 'US 9', 'US 10', 'US 11'],
    colors: [
      { name: '山嶺沙褐迷彩', hex: '#78350f' },
      { name: '夜幕機能黑', hex: '#111827' }
    ],
    features: [
      { title: 'Kevlar 軍工級防割纖維', desc: '拼接超耐磨編織層，抗撕裂防磨擦，給予腳部裝甲級防護。' },
      { title: 'ProTech 防刺穿底板', desc: '夾層內建特製高剛性防護板，防止尖銳釘石刺穿鞋底傷害足部。' },
      { title: '5mm 粗獷抓地耳齒', desc: '排泥沙外底槽與深度耳齒，提供無與倫比的越野摩擦係數。' }
    ]
  },
  {
    id: 12,
    name: 'StrideForge Dunk Pro',
    chName: '御風灌籃職業籃球鞋',
    category: 'sports',
    categoryCh: '專業運動鞋',
    price: 4680,
    rating: 4.8,
    reviews: 198,
    image: 'assets/images/sports_dunk_pro.jpg',
    description: '專為追求終極空中飛行的球員設計。高筒環抱結構提供頂級的腳踝支撐，中底內置 NitroPop 氣囊，吸收每一次強力降落的衝擊力並瞬間轉化為起跳推進力。精緻皮革與飛織結合鞋面，重現經典球風。',
    sizes: ['US 8', 'US 9', 'US 10', 'US 11'],
    colors: [
      { name: '烈焰激情紅', hex: '#dc2626' },
      { name: '黑金傳奇', hex: '#eab308' }
    ],
    features: [
      { title: 'NitroPop 高回彈氣囊', desc: '前掌嵌入超輕氮氣回彈單元，爆發起步與二次彈跳更迅捷。' },
      { title: '3D 腳踝環抱魔鬼氈', desc: '可拆卸式高彈力鎖定踝帶，雙重加固防止運動扭傷。' },
      { title: '耐磨室外硬地大底', desc: '特別改良配方的耐磨生橡膠，完美適應室外柏油水泥場地。' }
    ]
  },

  // --- SOCKS (2) ---
  {
    id: 13,
    name: 'StrideForge Merino Wool Socks',
    chName: '美麗諾羊毛加厚專業戶外襪',
    category: 'socks',
    categoryCh: '潮流棉襪',
    price: 680,
    rating: 4.9,
    reviews: 154,
    image: 'assets/images/socks_merino_wool.jpg',
    description: '採用高比例天然美麗諾羊毛混紡製成。羊毛獨特的微細纖維能自動調節足部溫濕度，冬天保暖防潮，夏天乾爽排汗，並具備天然防異味功效，是高強度登山與日常行走的最佳伴侶。',
    sizes: ['M (US 6-9)', 'L (US 9-12)'],
    colors: [
      { name: '山岩深灰', hex: '#4b5563' },
      { name: '燕麥淺褐', hex: '#d1d5db' }
    ],
    features: [
      { title: '82% 頂級美麗諾羊毛', desc: '觸感蓬鬆柔軟，天然控溫乾爽，長途穿著亦不易起臭。' },
      { title: '毛圈加厚緩震腳底', desc: '前後掌及腳踝重點加厚毛圈層，有效減緩鞋履摩擦與足底衝擊。' },
      { title: '高彈力足弓收緊環', desc: '環形彈力束帶防止襪子在鞋內滑動走位，保證極佳貼合度。' }
    ]
  },
  {
    id: 14,
    name: 'StrideForge Compression Socks',
    chName: '專業漸進式運動壓縮機能襪',
    category: 'socks',
    categoryCh: '潮流棉襪',
    price: 750,
    rating: 4.7,
    reviews: 92,
    image: 'assets/images/socks_compression.jpg',
    description: '專為長跑、自行車及健身訓練研發。採用漸進式壓縮織法，腳踝處壓力值最大，向上逐漸遞減，有助於促進下肢血液循環，減少肌肉抖動造成的疲勞感，加速運動後恢復。',
    sizes: ['M (US 6-9)', 'L (US 9-12)'],
    colors: [
      { name: '螢光炫黑', hex: '#111827' },
      { name: '科技亮白', hex: '#f9fafb' }
    ],
    features: [
      { title: '20-30 mmHg 漸進式壓縮', desc: '科學梯度加壓，鎖定小腿肌肉群，緩解酸痛並提升運動表現。' },
      { title: 'X-Cross 腳踝十字支撐', desc: '特殊編織加固十字結構，提供類似運動貼布的腳踝穩定效果。' },
      { title: 'CoolMax 快速排汗纖維', desc: '專利導濕導熱纖維，迅速蒸發汗水，長途運動保持雙足酷爽。' }
    ]
  },

  // --- ACCESSORIES (2) ---
  {
    id: 15,
    name: 'StrideForge Carbon Insoles',
    chName: '全掌碳纖維防震高彈鞋墊',
    category: 'acc',
    categoryCh: '實用配件',
    price: 1280,
    rating: 4.8,
    reviews: 73,
    image: 'assets/images/acc_carbon_insoles.jpg',
    description: '讓普通鞋款瞬間升級為高回彈推進跑鞋的秘密武器。鞋墊底部置入超薄超輕 1mm 高剛性碳纖維板，搭配上層的慢回彈爆米花（E-TPU）中底，帶來令人驚嘆的起步彈力與足底防扭轉防護。',
    sizes: ['US 6-8 (可裁剪)', 'US 9-11 (可裁剪)'],
    colors: [
      { name: '科技碳纖黑', hex: '#1f2937' }
    ],
    features: [
      { title: '1mm 航天級碳纖維板', desc: '高剛性、超彈力、輕量化，提供卓越的足底抗扭轉性與推进力。' },
      { title: '爆米花 E-TPU 緩震面', desc: '無數微發泡高彈力顆粒，能吸收高達 90% 衝擊，回彈軟糯。' },
      { title: '可裁剪式引導線', desc: '前掌部位設有精細剪裁導線，可依個人實際鞋款大小自由修剪。' }
    ]
  },
  {
    id: 16,
    name: 'StrideForge Lock Laces',
    chName: '免綁快速彈力鞋帶組',
    category: 'acc',
    categoryCh: '實用配件',
    price: 290,
    rating: 4.6,
    reviews: 245,
    image: 'assets/images/acc_lock_laces.jpg',
    description: '告別運動過程中鞋帶鬆開的尷尬與危險！採用高彈力多股橡膠線編織，外加合金螺旋鎖定膠囊結構，安裝一次即可一勞永逸。彈力帶能隨腳部水腫微調壓力，保持極致的血管暢通與舒適。',
    sizes: ['單一尺寸 (100cm 可剪裁)'],
    colors: [
      { name: '極光螢光綠', hex: '#84cc16' },
      { name: '暗夜反光黑', hex: '#1e293b' },
      { name: '科技反光銀', hex: '#cbd5e1' }
    ],
    features: [
      { title: '免綁一秒穿脫', desc: '金屬螺絲旋扣設計，穿脫鞋履只需拉伸踩入，省時高效。' },
      { title: '人體工學均勻加壓', desc: '彈力帶能吸收足背隆起壓力，消除普通鞋帶的局部束縛疼痛。' },
      { title: '高亮 3M 反光編織條', desc: '帶面織入反光銀絲，夜間慢跑或散步時提供額外的安全保障。' }
    ]
  },

  // --- OTHERS (1) ---
  {
    id: 17,
    name: 'StrideForge Premium Cleaner Kit',
    chName: '頂級奢華鞋履保養清潔禮盒',
    category: 'others',
    categoryCh: '其他商品',
    price: 880,
    rating: 4.9,
    reviews: 163,
    image: 'assets/images/other_cleaner_kit.jpg',
    description: '愛鞋人士的必備保養聖品。精緻禮盒內含 98% 天然配方無刺激超濃縮清潔泡沫、手工裁切實木握柄天然豬鬃毛刷（適用真皮與麂皮）、高密尼龍硬毛刷（適用鞋底中底）及極細纖維瞬吸擦鞋布。',
    sizes: ['單一規格 (保養禮盒裝)'],
    colors: [
      { name: '極簡精裝黑', hex: '#111827' }
    ],
    features: [
      { title: '98% 天然椰油清潔液', desc: '無毒、無腐蝕、不傷雙手與面料，能迅速溶解各種頑固油污。' },
      { title: '雙重硬度專業刷具', desc: '配有軟毛豬鬃刷（護皮面）及硬毛纖維刷（洗鞋底），分工專業。' },
      { title: '精緻防潑水收納網包', desc: '配備高檔收納包，旅行或日常收納整潔美觀，送禮自用皆宜。' }
    ]
  }
];

// =========================================================================
// 2. STATE MANAGEMENT (LOCAL STORAGE PERSISTED)
// =========================================================================
let state = {
  cart: JSON.parse(localStorage.getItem('sf_cart')) || [],
  currentUser: JSON.parse(localStorage.getItem('sf_user')) || null,
  filters: {
    category: '',
    search: '',
    sortBy: 'default'
  }
};

function saveState() {
  localStorage.setItem('sf_cart', JSON.stringify(state.cart));
  localStorage.setItem('sf_user', JSON.stringify(state.currentUser));
  updateCartBadge();
}

// =========================================================================
// 3. CORE ROUTER IMPLEMENTATION
// =========================================================================
const routes = {
  '/': renderHome,
  '/about': renderAbout,
  '/category/:id': renderCatalog,
  '/product/:id': renderProductDetail,
  '/contact': renderContact,
  '/login': renderLogin,
  '/register': renderRegister
};

function router() {
  const hash = window.location.hash || '#/';
  
  // Close menu and overlay on navigation
  closeMobileMenu();
  closeCart();
  
  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Update navbar active status
  updateActiveNavLink(hash);

  // Exact Match Routes
  if (routes[hash.slice(1)]) {
    routes[hash.slice(1)]();
    return;
  }

  // Dynamic Parameter Routes (/product/:id or /category/:id)
  const productMatch = hash.match(/^#\/product\/(\d+)$/);
  if (productMatch) {
    const productId = parseInt(productMatch[1], 10);
    renderProductDetail(productId);
    return;
  }

  const categoryMatch = hash.match(/^#\/category\/([a-zA-Z0-9_-]+)$/);
  if (categoryMatch) {
    const catId = categoryMatch[1];
    renderCatalog(catId);
    return;
  }

  // Fallback to Home page
  renderHome();
}

window.addEventListener('hashchange', router);
window.addEventListener('DOMContentLoaded', () => {
  router();
  initAppEvents();
  updateCartBadge();
  checkSessionState();
});

// Update navbar visual links
function updateActiveNavLink(hash) {
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('active');
  });
  
  if (hash === '#/') {
    document.querySelector('.nav-link[data-path="home"]')?.classList.add('active');
  } else if (hash === '#/about') {
    document.querySelector('.nav-link[data-path="about"]')?.classList.add('active');
  } else if (hash === '#/contact') {
    document.querySelector('.nav-link[data-path="contact"]')?.classList.add('active');
  }
}

// =========================================================================
// 4. UI INTERACTIVE CONTROLS (Cart Drawer, Mobile Drawer, Toast)
// =========================================================================
const appEl = document.getElementById('app');
const cartBtn = document.getElementById('cartBtn');
const cartSidebar = document.getElementById('cartSidebar');
const cartOverlay = document.getElementById('cartOverlay');
const closeCartBtn = document.getElementById('closeCartBtn');
const closeCartAndShopBtn = document.getElementById('closeCartAndShopBtn');
const mobileToggle = document.getElementById('mobileToggle');
const mobileNav = document.getElementById('mobileNav');
const mobileOverlay = document.getElementById('mobileOverlay');
const closeMobileBtn = document.getElementById('closeMobileBtn');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const modalOverlay = document.getElementById('modalOverlay');
const modalContainer = document.getElementById('modalContainer');

function initAppEvents() {
  // Cart toggle
  cartBtn.addEventListener('click', openCart);
  closeCartBtn.addEventListener('click', closeCart);
  cartOverlay.addEventListener('click', closeCart);
  closeCartAndShopBtn.addEventListener('click', closeCart);
  
  // Mobile drawer menu toggle
  mobileToggle.addEventListener('click', openMobileMenu);
  closeMobileBtn.addEventListener('click', closeMobileMenu);
  mobileOverlay.addEventListener('click', closeMobileMenu);
  
  // Mobile links hook
  document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });

  // Search input actions
  searchBtn.addEventListener('click', handleSearchSubmit);
  searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') handleSearchSubmit();
  });

  // Global modal overlay close on backdrop click
  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
  });
}

function openCart() {
  cartSidebar.classList.add('active');
  cartOverlay.classList.add('active');
  renderCartItems();
}

function closeCart() {
  cartSidebar.classList.remove('active');
  cartOverlay.classList.remove('active');
}

function openMobileMenu() {
  mobileNav.classList.add('active');
  mobileOverlay.classList.add('active');
}

function closeMobileMenu() {
  mobileNav.classList.remove('active');
  mobileOverlay.classList.remove('active');
}

function showToast(message, type = 'success') {
  const container = document.getElementById('toastContainer');
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  
  let icon = 'fa-circle-check';
  if (type === 'error') icon = 'fa-circle-exclamation';
  if (type === 'info') icon = 'fa-circle-info';
  
  toast.innerHTML = `
    <i class="fa-solid ${icon}"></i>
    <span>${message}</span>
  `;
  container.appendChild(toast);
  
  // Automatically remove toast after fade-out transition finishes
  setTimeout(() => {
    toast.remove();
  }, 3300);
}

function updateCartBadge() {
  const badgeCount = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  document.getElementById('cartCount').textContent = badgeCount;
  document.getElementById('cartItemCount').textContent = badgeCount;
}

function checkSessionState() {
  const userPanel = document.getElementById('userPanel');
  if (state.currentUser) {
    userPanel.innerHTML = `
      <div class="user-logged-in">
        <span class="user-welcome"><i class="fa-solid fa-user-shield" style="color: var(--accent-cyan);"></i> ${state.currentUser.username}</span>
        <button id="logoutBtn" class="logout-btn" style="margin-left: 0.8rem; font-size: 0.8rem; border: 1px solid rgba(239, 68, 68, 0.4); color: #ef4444; padding: 0.35rem 0.75rem; border-radius: 12px; cursor: pointer; transition: 0.2s;"><i class="fa-solid fa-arrow-right-from-bracket"></i> 登出</button>
      </div>
    `;
    
    document.getElementById('logoutBtn').addEventListener('click', () => {
      state.currentUser = null;
      saveState();
      showToast('您已成功登出系統。', 'info');
      checkSessionState();
      router(); // Re-render current page
    });
  } else {
    userPanel.innerHTML = `
      <a href="#/login" class="user-btn" id="userBtn"><i class="fa-regular fa-user"></i> <span class="user-text">登入 / 註冊</span></a>
    `;
  }
}

function handleSearchSubmit() {
  const val = searchInput.value.trim();
  if (val) {
    state.filters.search = val;
    searchInput.value = ''; // clear input
    window.location.hash = `#/category/all`;
  }
}

// Modal popup controller
function openModal(htmlContent) {
  modalContainer.innerHTML = `
    <span class="close-modal-x" onclick="closeModal()"><i class="fa-solid fa-xmark"></i></span>
    ${htmlContent}
  `;
  modalOverlay.classList.add('active');
}

window.closeModal = function() {
  modalOverlay.classList.remove('active');
};

// =========================================================================
// 5. SHOPPING CART LOGIC
// =========================================================================
function addToCart(productId, size, color, quantity = 1) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const existingItemIndex = state.cart.findIndex(item => 
    item.productId === productId && 
    item.size === size && 
    item.color === color
  );

  if (existingItemIndex > -1) {
    state.cart[existingItemIndex].quantity += quantity;
  } else {
    state.cart.push({
      productId,
      name: product.name,
      chName: product.chName,
      price: product.price,
      image: product.image,
      size,
      color,
      quantity
    });
  }

  saveState();
  showToast(`已成功加入購物車：${product.chName} (${size} / ${color})`);
  openCart();
}

function updateCartQuantity(index, newQty) {
  if (newQty <= 0) {
    state.cart.splice(index, 1);
  } else {
    state.cart[index].quantity = newQty;
  }
  saveState();
  renderCartItems();
}

function removeCartItem(index) {
  const removed = state.cart.splice(index, 1)[0];
  saveState();
  showToast(`已自購物車移除：${removed.chName}`, 'info');
  renderCartItems();
}

function renderCartItems() {
  const itemsContainer = document.getElementById('cartSidebarItems');
  const footer = document.getElementById('cartSidebarFooter');
  
  if (state.cart.length === 0) {
    itemsContainer.innerHTML = `
      <div class="empty-cart-message">
        <i class="fa-solid fa-bag-shopping empty-icon"></i>
        <p>您的購物車是空的</p>
        <a href="#/" class="go-shop-btn" id="closeCartAndShopBtn2">立即前往選購</a>
      </div>
    `;
    footer.style.display = 'none';
    
    document.getElementById('closeCartAndShopBtn2')?.addEventListener('click', closeCart);
    return;
  }

  footer.style.display = 'block';
  itemsContainer.innerHTML = '';
  
  let total = 0;
  state.cart.forEach((item, index) => {
    total += item.price * item.quantity;
    const itemEl = document.createElement('div');
    itemEl.className = 'cart-item';
    itemEl.innerHTML = `
      <img src="${item.image}" alt="${item.chName}" class="cart-item-img" onerror="this.src='assets/images/men_apex_runner.jpg'">
      <div class="cart-item-info">
        <div>
          <div class="cart-item-title">${item.chName}</div>
          <div class="cart-item-meta">規格: ${item.size} | ${item.color}</div>
        </div>
        <div class="cart-item-controls">
          <div class="quantity-selector">
            <button class="qty-btn dec-btn" data-index="${index}"><i class="fa-solid fa-minus"></i></button>
            <span class="qty-val">${item.quantity}</span>
            <button class="qty-btn inc-btn" data-index="${index}"><i class="fa-solid fa-plus"></i></button>
          </div>
          <span class="cart-item-price">NT$ ${(item.price * item.quantity).toLocaleString()}</span>
          <button class="remove-cart-item-btn" data-index="${index}"><i class="fa-regular fa-trash-can"></i></button>
        </div>
      </div>
    `;
    itemsContainer.appendChild(itemEl);
  });

  document.getElementById('cartSubtotal').textContent = `NT$ ${total.toLocaleString()}`;

  // Attach event listeners to quantity buttons
  itemsContainer.querySelectorAll('.dec-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const idx = parseInt(btn.dataset.index, 10);
      updateCartQuantity(idx, state.cart[idx].quantity - 1);
    });
  });

  itemsContainer.querySelectorAll('.inc-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const idx = parseInt(btn.dataset.index, 10);
      updateCartQuantity(idx, state.cart[idx].quantity + 1);
    });
  });

  itemsContainer.querySelectorAll('.remove-cart-item-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const idx = parseInt(btn.dataset.index, 10);
      removeCartItem(idx);
    });
  });

  // Attach checkout button event
  document.getElementById('checkoutBtn').addEventListener('click', renderCheckoutModal);
}

// =========================================================================
// 6. RENDER VIEW 1: HOME PAGE
// =========================================================================
function renderHome() {
  appEl.innerHTML = `
    <!-- Hero Slider -->
    <section class="hero-banner">
      <div class="hero-bg-text">StrideForge</div>
      
      <!-- Slide 1 -->
      <div class="hero-slide active" id="slide-0">
        <div class="hero-content">
          <span class="hero-tag">熱銷主力跑鞋</span>
          <h1>頂峰極速<br><span>碳纖防扭推進</span></h1>
          <p>全新 Apex Runner 內嵌立體碳纖推進板與超臨界發泡中底，為您的每一步提供澎湃的向前動力，打破重力束縛。</p>
          <div style="display:flex; gap:1.25rem;">
            <a href="#/product/1" class="btn-premium">立即選購 <i class="fa-solid fa-arrow-right"></i></a>
            <a href="#/category/sports" class="btn-secondary">查看運動鞋區</a>
          </div>
        </div>
        <div class="hero-img-container">
          <img src="assets/images/men_apex_runner.jpg" alt="Apex Runner" class="hero-shoe-img">
        </div>
      </div>

      <!-- Slide 2 -->
      <div class="hero-slide" id="slide-1">
        <div class="hero-content">
          <span class="hero-tag">職人工藝皮鞋</span>
          <h1>雕花真皮<br><span>傳承紳士格調</span></h1>
          <p>義大利手工擦色工藝，每一雙 Heritage Brogue 都是無可複製的藝術品。防滑減震科技，重新定義高級男鞋舒適度。</p>
          <div style="display:flex; gap:1.25rem;">
            <a href="#/product/2" class="btn-premium">探索細節 <i class="fa-solid fa-arrow-right"></i></a>
            <a href="#/category/men" class="btn-secondary">查看男鞋專區</a>
          </div>
        </div>
        <div class="hero-img-container">
          <img src="assets/images/men_heritage_brogue.jpg" alt="Heritage Brogue" class="hero-shoe-img">
        </div>
      </div>

      <!-- Slide 3 -->
      <div class="hero-slide" id="slide-2">
        <div class="hero-content">
          <span class="hero-tag">機能戰術裝備</span>
          <h1>都市探索<br><span>山脈機能防護</span></h1>
          <p>結合 Fidlock 磁力束帶與 HydroShield 級防水科技，Urban Explorer 機能鞋無畏狂風暴雨，解鎖全地形通勤體驗。</p>
          <div style="display:flex; gap:1.25rem;">
            <a href="#/product/3" class="btn-premium">立即入手 <i class="fa-solid fa-arrow-right"></i></a>
            <a href="#/category/casual" class="btn-secondary">休閒款式</a>
          </div>
        </div>
        <div class="hero-img-container">
          <img src="assets/images/men_urban_explorer.jpg" alt="Urban Explorer" class="hero-shoe-img">
        </div>
      </div>

      <!-- Slider Dots -->
      <div class="slider-dots">
        <span class="slider-dot active" data-slide="0"></span>
        <span class="slider-dot" data-slide="1"></span>
        <span class="slider-dot" data-slide="2"></span>
      </div>
    </section>

    <!-- Quick Highlights categories -->
    <section class="home-categories">
      <div class="category-card" onclick="window.location.hash='#/category/men'">
        <div class="category-card-icon"><i class="fa-solid fa-mars"></i></div>
        <h3>男鞋專區</h3>
        <p>正裝、慢跑與機能鞋履</p>
      </div>
      <div class="category-card" onclick="window.location.hash='#/category/women'">
        <div class="category-card-icon"><i class="fa-solid fa-venus"></i></div>
        <h3>女鞋專區</h3>
        <p>高跟、運動與舒適平底</p>
      </div>
      <div class="category-card" onclick="window.location.hash='#/category/sports'">
        <div class="category-card-icon"><i class="fa-solid fa-dumbbell"></i></div>
        <h3>專業運動</h3>
        <p>網球、籃球與極限越野</p>
      </div>
      <div class="category-card" onclick="window.location.hash='#/category/acc'">
        <div class="category-card-icon"><i class="fa-solid fa-tags"></i></div>
        <h3>精選配件</h3>
        <p>防護鞋墊、鞋帶與保養禮盒</p>
      </div>
    </section>

    <!-- Featured Section -->
    <section class="featured-section content-wrapper">
      <div class="section-title">
        <h2>本季<span>熱門主打</span></h2>
        <p>為您精選 StrideForge 頂級熱銷產品，體驗智能人體工學科技與潮流美學的巔峰碰撞。</p>
      </div>
      
      <div class="product-grid" id="featuredGrid">
        <!-- Render 4 featured products -->
      </div>
    </section>

    <!-- Promo Banner Section -->
    <section class="promo-section">
      <div class="content-wrapper promo-content">
        <span class="hero-tag" style="background:rgba(168, 85, 247,0.1); border-color:var(--accent-purple); color:var(--accent-purple)">科技引領未來</span>
        <h2>為您的雙腳配備 <span>極致裝甲</span></h2>
        <p>首度加入會員即享全館商品免運費，並可獲得 NT$ 200 首購折價券。立即註冊 StrideForge，開啟您的極致踏步之旅。</p>
        <a href="#/register" class="btn-premium">立即免費註冊 <i class="fa-solid fa-user-plus"></i></a>
      </div>
    </section>
  `;

  // Init Hero Slide Rotation
  let currentSlide = 0;
  const totalSlides = 3;
  const slideInterval = setInterval(() => {
    // Only rotate if currently on the Home page
    if (window.location.hash === '' || window.location.hash === '#/') {
      const nextSlide = (currentSlide + 1) % totalSlides;
      setActiveSlide(nextSlide);
    } else {
      clearInterval(slideInterval);
    }
  }, 6000);

  function setActiveSlide(index) {
    document.querySelectorAll('.hero-slide').forEach(slide => slide.classList.remove('active'));
    document.querySelectorAll('.slider-dot').forEach(dot => dot.classList.remove('active'));
    
    document.getElementById(`slide-${index}`)?.classList.add('active');
    document.querySelector(`.slider-dot[data-slide="${index}"]`)?.classList.add('active');
    currentSlide = index;
  }

  // Dots click events
  document.querySelectorAll('.slider-dot').forEach(dot => {
    dot.addEventListener('click', () => {
      const idx = parseInt(dot.dataset.slide, 10);
      setActiveSlide(idx);
    });
  });

  // Render 4 featured products
  const featuredGrid = document.getElementById('featuredGrid');
  const featuredIds = [1, 2, 5, 11]; // Highlight specific IDs
  const featuredList = PRODUCTS.filter(p => featuredIds.includes(p.id));

  featuredList.forEach(product => {
    const card = renderProductCardHTML(product);
    featuredGrid.appendChild(card);
  });
}

function renderProductCardHTML(product) {
  const cardEl = document.createElement('div');
  cardEl.className = 'product-card page-fade-in';
  cardEl.innerHTML = `
    ${product.id === 1 ? '<span class="product-badge">科技王牌</span>' : ''}
    ${product.id === 11 ? '<span class="product-badge">極限防護</span>' : ''}
    <div class="product-card-img-wrap">
      <img src="${product.image}" alt="${product.chName}" class="product-card-img" onerror="this.src='assets/images/men_apex_runner.jpg'">
      <div class="product-card-actions">
        <a href="#/product/${product.id}" class="card-action-btn" title="查看商品細節"><i class="fa-regular fa-eye"></i></a>
        <button class="card-action-btn quick-add-btn" data-id="${product.id}" title="快速加入購物車"><i class="fa-solid fa-cart-arrow-down"></i></button>
      </div>
    </div>
    <div class="product-card-content">
      <span class="product-card-cat">${product.categoryCh}</span>
      <h3 class="product-card-title"><a href="#/product/${product.id}">${product.chName}</a></h3>
      <div class="product-card-bottom">
        <span class="product-card-price">NT$ ${product.price.toLocaleString()}</span>
        <button class="product-card-add-btn quick-add-btn" data-id="${product.id}"><i class="fa-solid fa-plus"></i></button>
      </div>
    </div>
  `;

  // Bind add button
  cardEl.querySelectorAll('.quick-add-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      // Default to first size and color
      const defaultSize = product.sizes[0];
      const defaultColor = product.colors[0].name;
      addToCart(product.id, defaultSize, defaultColor, 1);
    });
  });

  return cardEl;
}

// =========================================================================
// 7. RENDER VIEW 2: ABOUT US PAGE (公司簡介)
// =========================================================================
function renderAbout() {
  appEl.innerHTML = `
    <div class="content-wrapper page-fade-in">
      <div class="section-title">
        <h2>關於 <span>StrideForge</span></h2>
        <p>始於對足底動力學的極致追求，StrideForge 步鍛是科技與工藝美學的交匯點。</p>
      </div>

      <div class="about-section">
        <div class="about-img-wrap">
          <img src="assets/images/casual_slipon_lite.jpg" alt="StrideForge Office Studio">
        </div>
        <div class="about-content">
          <h3>用科技重塑行走的定義</h3>
          <p>StrideForge 創立於 2023 年，總部位於台灣台北。我們由一群熱愛極限運動的材料力學工程師、足部骨科醫學顧問以及頂尖街頭時尚設計師共同組建。我們的使命非常單純：打破傳統製鞋業的限制，將最新航天碳纖結構、高彈力發泡科技與天然親膚材料無縫融合。</p>
          <p>我們深信，一雙好鞋不單是日常穿搭的配角，更是保護人體關節、延續運動壽命的智慧裝甲。不論您是挑戰馬拉松極限的專業運動員，抑或是每日在都市叢林中奮鬥的通勤族，StrideForge 皆為您的每一次踏步提供最為精密且澎湃的支撐力。</p>
          <p>未來，我們將持續專注於可持續回收環保面料的開發，承諾在 2028 年前實現全系列產品 100% 碳中和製程，共同為地球的永續行走盡一份心力。</p>
        </div>
      </div>

      <!-- Core Values -->
      <div class="values-grid">
        <div class="value-card">
          <div class="value-card-icon"><i class="fa-solid fa-microchip"></i></div>
          <h4>極致科技研發</h4>
          <p>設有獨立足底人體工學實驗室，研發獨家超臨界發泡中底與碳板貼合防扭科技。</p>
        </div>
        <div class="value-card">
          <div class="value-card-icon"><i class="fa-solid fa-leaf"></i></div>
          <h4>永續發展環保</h4>
          <p>優先採用美麗諾羊毛等天然低碳材料，配合塑料回收飛織線，實現綠色足跡。</p>
        </div>
        <div class="value-card">
          <div class="value-card-icon"><i class="fa-solid fa-medal"></i></div>
          <h4>極致職人工藝</h4>
          <p>正裝真皮鞋款均由經驗豐富的手工大師擦色縫製，將傳統工藝與現代功能完美結合。</p>
        </div>
      </div>
    </div>
  `;
}

// =========================================================================
// 8. RENDER VIEW 3: PRODUCT CATALOG (男鞋, 女鞋, 休閒鞋, 運動鞋, etc.)
// =========================================================================
function renderCatalog(categoryId = 'all') {
  // Clear search query if navigating directly to category links
  if (categoryId !== 'all' && !window.location.hash.includes('search')) {
    state.filters.search = '';
  }

  appEl.innerHTML = `
    <div class="content-wrapper page-fade-in">
      <div class="catalog-layout">
        
        <!-- Sidebar Filters -->
        <aside class="sidebar-filters">
          <h3 class="filter-title">篩選商品</h3>
          
          <div class="filter-group">
            <h4>商品大類</h4>
            <div class="filter-list">
              <div class="filter-item ${categoryId === 'all' ? 'active' : ''}" data-cat="all">
                <span>全部商品</span>
                <span class="filter-count">${PRODUCTS.length}</span>
              </div>
              <div class="filter-item ${categoryId === 'men' ? 'active' : ''}" data-cat="men">
                <span>男鞋專區</span>
                <span class="filter-count">${PRODUCTS.filter(p => p.category === 'men').length}</span>
              </div>
              <div class="filter-item ${categoryId === 'women' ? 'active' : ''}" data-cat="women">
                <span>女鞋專區</span>
                <span class="filter-count">${PRODUCTS.filter(p => p.category === 'women').length}</span>
              </div>
              <div class="filter-item ${categoryId === 'casual' ? 'active' : ''}" data-cat="casual">
                <span>各式休閒鞋</span>
                <span class="filter-count">${PRODUCTS.filter(p => p.category === 'casual').length}</span>
              </div>
              <div class="filter-item ${categoryId === 'sports' ? 'active' : ''}" data-cat="sports">
                <span>專業運動鞋</span>
                <span class="filter-count">${PRODUCTS.filter(p => p.category === 'sports').length}</span>
              </div>
              <div class="filter-item ${categoryId === 'socks' ? 'active' : ''}" data-cat="socks">
                <span>潮流棉襪</span>
                <span class="filter-count">${PRODUCTS.filter(p => p.category === 'socks').length}</span>
              </div>
              <div class="filter-item ${categoryId === 'acc' ? 'active' : ''}" data-cat="acc">
                <span>實用配件</span>
                <span class="filter-count">${PRODUCTS.filter(p => p.category === 'acc').length}</span>
              </div>
              <div class="filter-item ${categoryId === 'others' ? 'active' : ''}" data-cat="others">
                <span>其他類</span>
                <span class="filter-count">${PRODUCTS.filter(p => p.category === 'others').length}</span>
              </div>
            </div>
          </div>

          <div class="filter-group">
            <h4>排序方式</h4>
            <select class="sort-select" id="sortSelect">
              <option value="default" ${state.filters.sortBy === 'default' ? 'selected' : ''}>預設排序</option>
              <option value="price-low" ${state.filters.sortBy === 'price-low' ? 'selected' : ''}>價格：由低到高</option>
              <option value="price-high" ${state.filters.sortBy === 'price-high' ? 'selected' : ''}>價格：由高到低</option>
              <option value="rating" ${state.filters.sortBy === 'rating' ? 'selected' : ''}>顧客評價</option>
            </select>
          </div>
        </aside>

        <!-- Main Product Grid View -->
        <div>
          <div class="catalog-header">
            <h2 class="catalog-title" id="catalogTitle">正在載入商品...</h2>
            <div class="catalog-count-text"><span id="filteredCount">0</span> 個商品</div>
          </div>

          <div class="product-grid" id="catalogGrid">
            <!-- Dynamically populated -->
          </div>
        </div>

      </div>
    </div>
  `;

  // Set catalog title
  const catalogTitle = document.getElementById('catalogTitle');
  const catNames = {
    all: '全部商品系列',
    men: '男鞋專區 (Men\'s Collection)',
    women: '女鞋專區 (Women\'s Collection)',
    casual: '各式休閒鞋 (Casual Footwear)',
    sports: '專業運動鞋 (Performance Shoes)',
    socks: '潮流棉襪 (Premium Socks)',
    acc: '實用科技配件 (Accessories)',
    others: '其他保養與精選禮盒'
  };
  
  if (state.filters.search) {
    catalogTitle.innerHTML = `搜尋結果: <span>"${state.filters.search}"</span>`;
  } else {
    catalogTitle.innerHTML = catNames[categoryId] || '商品分類';
  }

  // Filter and Sort Logic
  filterAndRenderProducts(categoryId);

  // Bind Sidebar category clicks
  document.querySelectorAll('.filter-item').forEach(item => {
    item.addEventListener('click', () => {
      const cat = item.dataset.cat;
      state.filters.search = ''; // reset search when clicking category
      window.location.hash = cat === 'all' ? `#/category/all` : `#/category/${cat}`;
    });
  });

  // Bind sort change
  document.getElementById('sortSelect').addEventListener('change', (e) => {
    state.filters.sortBy = e.target.value;
    filterAndRenderProducts(categoryId);
  });
}

function filterAndRenderProducts(categoryId) {
  let list = [...PRODUCTS];

  // 1. Filter by category
  if (categoryId !== 'all' && categoryId !== '') {
    list = list.filter(p => p.category === categoryId);
  }

  // 2. Filter by search query
  if (state.filters.search) {
    const q = state.filters.search.toLowerCase();
    list = list.filter(p => 
      p.name.toLowerCase().includes(q) || 
      p.chName.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q)
    );
  }

  // 3. Sort
  if (state.filters.sortBy === 'price-low') {
    list.sort((a, b) => a.price - b.price);
  } else if (state.filters.sortBy === 'price-high') {
    list.sort((a, b) => b.price - a.price);
  } else if (state.filters.sortBy === 'rating') {
    list.sort((a, b) => b.rating - a.rating);
  }

  // Render
  const grid = document.getElementById('catalogGrid');
  const countSpan = document.getElementById('filteredCount');
  countSpan.textContent = list.length;

  grid.innerHTML = '';
  if (list.length === 0) {
    grid.innerHTML = `
      <div class="no-products-found page-fade-in">
        <i class="fa-solid fa-shoe-prints"></i>
        <h3>找不到相符的商品</h3>
        <p>請嘗試其他關鍵字，或是瀏覽其他分類專區。</p>
        <button class="btn-premium" style="margin-top:1.5rem" onclick="state.filters.search=''; renderCatalog('all')">清除條件並顯示全部</button>
      </div>
    `;
    return;
  }

  list.forEach(product => {
    const card = renderProductCardHTML(product);
    grid.appendChild(card);
  });
}

// =========================================================================
// 9. RENDER VIEW 4: PRODUCT DETAIL PAGE (瀏覽頁面)
// =========================================================================
function renderProductDetail(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) {
    appEl.innerHTML = `
      <div class="content-wrapper text-center page-fade-in" style="padding:100px 0;">
        <i class="fa-solid fa-triangle-exclamation" style="font-size:3rem; color:var(--error); margin-bottom:1.5rem;"></i>
        <h2>抱歉！找不到該商品</h2>
        <p>該商品可能已下架或網址不正確。</p>
        <a href="#/" class="btn-premium" style="margin-top:2rem;">返回首頁選購</a>
      </div>
    `;
    return;
  }

  appEl.innerHTML = `
    <div class="content-wrapper page-fade-in">
      
      <!-- Breadcrumb -->
      <div style="font-size:0.85rem; color:var(--text-secondary); margin-bottom:2rem; display:flex; gap:0.5rem; align-items:center;">
        <a href="#/" style="hover:color:white;">首頁</a>
        <i class="fa-solid fa-chevron-right" style="font-size:0.65rem;"></i>
        <a href="#/category/${product.category}">${product.categoryCh}</a>
        <i class="fa-solid fa-chevron-right" style="font-size:0.65rem;"></i>
        <span style="color:var(--accent-cyan); font-weight:600;">${product.chName}</span>
      </div>

      <div class="detail-layout">
        
        <!-- Gallery Panel -->
        <div class="detail-gallery">
          <div class="detail-main-img-wrap">
            <img src="${product.image}" alt="${product.chName}" class="detail-main-img" id="detailMainImg" onerror="this.src='assets/images/men_apex_runner.jpg'">
          </div>
          <div class="detail-thumb-row">
            <div class="detail-thumb active" data-src="${product.image}">
              <img src="${product.image}" alt="角度 1" onerror="this.src='assets/images/men_apex_runner.jpg'">
            </div>
            <!-- Extra mock angle thumbs using premium shoe photo angles locally -->
            <div class="detail-thumb" data-src="assets/images/sports_dunk_pro.jpg">
              <img src="assets/images/sports_dunk_pro.jpg" alt="角度 2">
            </div>
            <div class="detail-thumb" data-src="assets/images/sports_velocity_court.jpg">
              <img src="assets/images/sports_velocity_court.jpg" alt="角度 3">
            </div>
          </div>
        </div>

        <!-- Purchase Info Panel -->
        <div class="detail-info">
          <span class="detail-cat">${product.categoryCh}</span>
          <h1 class="detail-title">${product.chName}</h1>
          
          <!-- Rating reviews -->
          <div style="display:flex; align-items:center; gap:0.5rem; margin-bottom:1.5rem;">
            <div style="color:#fbbf24; font-size:0.95rem;">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star-half-stroke"></i>
            </div>
            <span style="font-size:0.9rem; font-weight:600;">${product.rating}</span>
            <span style="font-size:0.85rem; color:var(--text-secondary);">(${product.reviews} 則評價)</span>
          </div>

          <div class="detail-price">NT$ ${product.price.toLocaleString()}</div>
          
          <p class="detail-desc">${product.description}</p>

          <!-- Specifications Selector inputs -->
          <div class="detail-option-group">
            <span class="detail-option-label">選擇規格 / 尺寸:</span>
            <div class="size-selector-grid" id="detailSizes">
              ${product.sizes.map((s, idx) => `
                <button class="size-btn ${idx === 0 ? 'active' : ''}" data-size="${s}">${s}</button>
              `).join('')}
            </div>
          </div>

          <div class="detail-option-group">
            <span class="detail-option-label">選擇顏色:</span>
            <div class="color-selector-row" id="detailColors">
              ${product.colors.map((c, idx) => `
                <span class="color-dot ${idx === 0 ? 'active' : ''}" style="background-color: ${c.hex};" data-color="${c.name}" title="${c.name}"></span>
              `).join('')}
            </div>
          </div>

          <!-- Quantity counter and Add to Cart button -->
          <div class="detail-actions-row">
            <div class="detail-quantity-box">
              <button class="detail-qty-btn" id="detailQtyDec"><i class="fa-solid fa-minus"></i></button>
              <span class="detail-qty-val" id="detailQtyVal">1</span>
              <button class="detail-qty-btn" id="detailQtyInc"><i class="fa-solid fa-plus"></i></button>
            </div>
            <button class="btn-premium detail-add-cart-btn" id="detailAddCartSubmitBtn"><i class="fa-solid fa-cart-shopping"></i> 加入購物車</button>
          </div>

          <!-- Product Technical Bullets -->
          <div class="detail-bullets">
            ${product.features.map(f => `
              <div class="bullet-item">
                <i class="fa-solid fa-shield-halved"></i>
                <div>
                  <strong>${f.title}</strong>
                  <span>${f.desc}</span>
                </div>
              </div>
            `).join('')}
          </div>

        </div>

      </div>
    </div>
  `;

  // Gallery interaction
  const mainImg = document.getElementById('detailMainImg');
  document.querySelectorAll('.detail-thumb').forEach(thumb => {
    thumb.addEventListener('click', () => {
      document.querySelectorAll('.detail-thumb').forEach(t => t.classList.remove('active'));
      thumb.classList.add('active');
      mainImg.src = thumb.dataset.src;
    });
  });

  // Size click interaction
  const sizeBtns = document.querySelectorAll('.size-btn');
  sizeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      sizeBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });

  // Color click interaction
  const colorDots = document.querySelectorAll('.color-dot');
  colorDots.forEach(dot => {
    dot.addEventListener('click', () => {
      colorDots.forEach(d => d.classList.remove('active'));
      dot.classList.add('active');
    });
  });

  // Quantity count interaction
  let qty = 1;
  const qtyVal = document.getElementById('detailQtyVal');
  document.getElementById('detailQtyDec').addEventListener('click', () => {
    if (qty > 1) {
      qty--;
      qtyVal.textContent = qty;
    }
  });
  document.getElementById('detailQtyInc').addEventListener('click', () => {
    qty++;
    qtyVal.textContent = qty;
  });

  // Submit to Add To Cart
  document.getElementById('detailAddCartSubmitBtn').addEventListener('click', () => {
    const activeSize = document.querySelector('.size-btn.active').dataset.size;
    const activeColor = document.querySelector('.color-dot.active').dataset.color;
    addToCart(product.id, activeSize, activeColor, qty);
  });
}

// =========================================================================
// 10. RENDER VIEW 5: CONTACT US (聯絡我們)
// =========================================================================
function renderContact() {
  appEl.innerHTML = `
    <div class="content-wrapper page-fade-in">
      <div class="section-title">
        <h2>聯絡 <span>StrideForge</span></h2>
        <p>不論是商品尺寸選擇、退換貨政策或是大宗團購合作，我們的客服團隊隨時為您提供協助。</p>
      </div>

      <div class="contact-layout">
        
        <!-- Contact details column -->
        <div class="contact-info-panel">
          <div class="contact-card">
            <div class="contact-icon-box"><i class="fa-solid fa-phone"></i></div>
            <div class="contact-details">
              <h4>客服熱線 (客服電話)</h4>
              <p>+886 2 2788-9999</p>
              <p>週一至週五 09:00 - 18:00 (例假日除外)</p>
            </div>
          </div>

          <div class="contact-card">
            <div class="contact-icon-box"><i class="fa-solid fa-envelope"></i></div>
            <div class="contact-details">
              <h4>電子信箱 Email</h4>
              <p>support@strideforge.com.tw</p>
              <p>我們將於收到信件的 24 小時內回覆您。</p>
            </div>
          </div>

          <div class="contact-card">
            <div class="contact-icon-box"><i class="fa-solid fa-location-dot"></i></div>
            <div class="contact-details">
              <h4>品牌總部地址</h4>
              <p>台北市信義區忠孝東路五段 68 號 35 樓</p>
              <p>(微風信義辦公大樓 - 展示間採預約制)</p>
            </div>
          </div>

          <!-- Map Mock -->
          <div class="map-mock">
            <div class="map-overlay">
              <div>
                <div class="map-logo-watermark">StrideForge HQ Map</div>
                <p style="font-size:0.8rem; color:var(--text-secondary);">微風信義辦公大樓 35F<br>(捷運市政府站 3 號出口共構)</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Form Column -->
        <div class="form-card">
          <h3>發送意見回饋與諮詢</h3>
          <form id="contactForm">
            <div class="input-row">
              <div class="form-group">
                <label for="cName">您的姓名 *</label>
                <input type="text" class="form-control" id="cName" placeholder="例如：張先生" required>
              </div>
              <div class="form-group">
                <label for="cPhone">聯絡電話</label>
                <input type="tel" class="form-control" id="cPhone" placeholder="例如：0912-345-678">
              </div>
            </div>
            
            <div class="form-group">
              <label for="cEmail">電子信箱 *</label>
              <input type="email" class="form-control" id="cEmail" placeholder="例如：example@gmail.com" required>
            </div>

            <div class="form-group">
              <label for="cSubject">主旨主題 *</label>
              <select class="form-control" id="cSubject" required>
                <option value="">-- 請選擇洽詢類別 --</option>
                <option value="order">訂單與出貨問題</option>
                <option value="size">鞋款尺寸選購建議</option>
                <option value="return">退換貨申請辦理</option>
                <option value="collab">商務大宗團購合作</option>
                <option value="feedback">商品與服務意見反饋</option>
              </select>
            </div>

            <div class="form-group">
              <label for="cMsg">諮詢內容 *</label>
              <textarea class="form-control" id="cMsg" placeholder="請詳細寫下您的問題或需求，我們將會儘快處理..." required></textarea>
            </div>

            <button type="submit" class="btn-premium" style="width:100%; justify-content:center; margin-top:1rem;">送出諮詢表單 <i class="fa-solid fa-paper-plane"></i></button>
          </form>
        </div>

      </div>
    </div>
  `;

  // Handle Contact Submit Simulation
  document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('cName').value;
    showToast(`收到！感謝您 ${name} 的諮詢表單，我們將儘快派遣專人與您聯絡。`);
    e.target.reset();
  });
}

// =========================================================================
// 11. RENDER VIEW 6: LOGIN & REGISTER PAGES (登入與註冊頁面)
// =========================================================================
function renderLogin() {
  appEl.innerHTML = `
    <div class="content-wrapper page-fade-in">
      <div class="auth-wrapper">
        <div class="auth-card">
          <div class="auth-header">
            <h2>會員登入</h2>
            <p>登入 StrideForge 會員帳戶以追蹤訂單與享有獨家優惠</p>
          </div>
          
          <form id="loginForm">
            <div class="form-group">
              <label for="lEmail">電子信箱 Email *</label>
              <input type="email" class="form-control" id="lEmail" placeholder="輸入註冊的 Email 信箱" required>
            </div>

            <div class="form-group">
              <label for="lPass">密碼 Password *</label>
              <input type="password" class="form-control" id="lPass" placeholder="輸入會員密碼" required>
            </div>

            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1.5rem; font-size:0.85rem;">
              <label style="display:flex; align-items:center; gap:0.4rem; cursor:pointer;">
                <input type="checkbox" style="accent-color:var(--accent-cyan);"> 記住我的登入狀態
              </label>
              <a href="#" onclick="alert('密碼重設鏈接已寄送至您的註冊郵箱！(模擬模式)'); return false;" style="color:var(--accent-cyan);">忘記密碼？</a>
            </div>

            <button type="submit" class="btn-premium auth-submit-btn"><i class="fa-solid fa-arrow-right-to-bracket"></i> 登入會員</button>
          </form>

          <div class="auth-switch-link">
            還沒有 StrideForge 會員帳號？ <a href="#/register">立即免費註冊</a>
          </div>
        </div>
      </div>
    </div>
  `;

  // Submit Login Simulation
  document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('lEmail').value;
    const pass = document.getElementById('lPass').value;

    // Simple mock validation (e.g. check if match mock values or any account registered)
    const storedUsers = JSON.parse(localStorage.getItem('sf_registered_users')) || [];
    const matchedUser = storedUsers.find(u => u.email === email && u.password === pass);

    // Provide a default account for demonstration: demo@strideforge.com / password
    if (matchedUser || (email === 'demo@strideforge.com' && pass === 'password')) {
      const username = matchedUser ? matchedUser.username : '測試訪客';
      state.currentUser = { username, email };
      saveState();
      showToast(`登入成功！歡迎回來, ${username}`);
      checkSessionState();
      window.location.hash = '#/';
    } else {
      showToast('密碼錯誤或此電子信箱尚未註冊會員！您可以試試測試帳號: demo@strideforge.com 密碼: password，或點擊註冊。', 'error');
    }
  });
}

function renderRegister() {
  appEl.innerHTML = `
    <div class="content-wrapper page-fade-in">
      <div class="auth-wrapper">
        <div class="auth-card">
          <div class="auth-header">
            <h2>註冊會員</h2>
            <p>註冊成為步鍛極致行者，首購即享 NT$ 200 折扣優惠</p>
          </div>
          
          <form id="registerForm">
            <div class="form-group">
              <label for="rUsername">姓名 / 暱稱 *</label>
              <input type="text" class="form-control" id="rUsername" placeholder="請輸入您的大名" required>
            </div>

            <div class="form-group">
              <label for="rEmail">電子信箱 Email *</label>
              <input type="email" class="form-control" id="rEmail" placeholder="請輸入可收取信件的電子信箱" required>
            </div>

            <div class="form-group">
              <label for="rPass">設定密碼 Password *</label>
              <input type="password" class="form-control" id="rPass" placeholder="請設定 6 位數以上密碼" minlength="6" required>
            </div>

            <div class="form-group" style="margin-bottom:2rem;">
              <label for="rPassConfirm">確認密碼 Confirm Password *</label>
              <input type="password" class="form-control" id="rPassConfirm" placeholder="再次輸入相同的密碼" required>
            </div>

            <label style="display:flex; align-items:flex-start; gap:0.5rem; margin-bottom:1.5rem; font-size:0.8rem; color:var(--text-secondary); cursor:pointer;">
              <input type="checkbox" style="margin-top:0.2rem; accent-color:var(--accent-cyan);" required>
              <span>我已閱讀並同意 StrideForge 網站使用條款、隱私權政策與客戶服務聲明。</span>
            </label>

            <button type="submit" class="btn-premium auth-submit-btn"><i class="fa-solid fa-user-plus"></i> 免費註冊成為會員</button>
          </form>

          <div class="auth-switch-link">
            已經有 StrideForge 帳戶？ <a href="#/login">登入現有帳號</a>
          </div>
        </div>
      </div>
    </div>
  `;

  // Submit Register Simulation
  document.getElementById('registerForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('rUsername').value;
    const email = document.getElementById('rEmail').value;
    const password = document.getElementById('rPass').value;
    const passwordConfirm = document.getElementById('rPassConfirm').value;

    if (password !== passwordConfirm) {
      showToast('兩次輸入的密碼不一致！請重新確認。', 'error');
      return;
    }

    const storedUsers = JSON.parse(localStorage.getItem('sf_registered_users')) || [];
    const emailExists = storedUsers.some(u => u.email === email);
    
    if (emailExists || email === 'demo@strideforge.com') {
      showToast('此電子信箱已被註冊為會員！請使用其他信箱或直接登入。', 'error');
      return;
    }

    // Save to users list
    storedUsers.push({ username, email, password });
    localStorage.setItem('sf_registered_users', JSON.stringify(storedUsers));

    // Instantly log user in
    state.currentUser = { username, email };
    saveState();
    
    showToast(`註冊成功！已自動幫您登入會員：歡迎 ${username}`);
    checkSessionState();
    window.location.hash = '#/';
  });
}

// =========================================================================
// 12. CHECKOUT MODAL VIEW & CHECKOUT FORM SUBMISSION
// =========================================================================
function renderCheckoutModal() {
  closeCart(); // Hide persistent cart sidebar drawer first
  
  let total = state.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  
  const modalHTML = `
    <div class="checkout-modal-layout page-fade-in">
      <h3>確認您的訂單與結帳資訊</h3>
      
      <div class="checkout-grid">
        
        <!-- Checkout fields column -->
        <form id="checkoutSubmitForm" class="checkout-fields">
          <div class="checkout-section-title">收件人資訊</div>
          
          <div class="form-group">
            <label for="chName">姓名 *</label>
            <input type="text" class="form-control" id="chName" placeholder="請輸入收件人真實姓名" required value="${state.currentUser ? state.currentUser.username : ''}">
          </div>

          <div class="input-row">
            <div class="form-group">
              <label for="chPhone">手機號碼 *</label>
              <input type="tel" class="form-control" id="chPhone" placeholder="例如：0912345678" pattern="09[0-9]{8}" title="請輸入正確的手機號碼(09開頭共10碼)" required>
            </div>
            <div class="form-group">
              <label for="chEmail">收件信箱 *</label>
              <input type="email" class="form-control" id="chEmail" placeholder="例如：example@gmail.com" required value="${state.currentUser ? state.currentUser.email : ''}">
            </div>
          </div>

          <div class="form-group">
            <label for="chAddress">收件地址 *</label>
            <input type="text" class="form-control" id="chAddress" placeholder="請輸入完整的縣市、街道與門牌收件地址" required>
          </div>

          <div class="checkout-section-title" style="margin-top:1.5rem;">付款方式</div>
          <div class="form-group">
            <select class="form-control" id="chPayment" required>
              <option value="credit">信用卡一次付清 (Visa/Master/JCB)</option>
              <option value="linepay">LINE Pay 模擬金流</option>
              <option value="applepay">Apple Pay 行動支付</option>
              <option value="cod">貨到付款 (郵寄/超商)</option>
            </select>
          </div>

          <!-- Dynamic payment info segment -->
          <div id="creditCardDetails" style="background:rgba(255,255,255,0.02); border:1px solid var(--border-glass); border-radius:var(--radius-sm); padding:1.25rem; margin-bottom:1.5rem;">
            <div class="form-group">
              <label>信用卡號 *</label>
              <input type="text" class="form-control" placeholder="1234 5678 1234 5678" pattern="[0-9]{16}" maxlength="16" title="請輸入16位數信用卡號" required id="cardNum">
            </div>
            <div class="input-row">
              <div class="form-group">
                <label>有效月/年 *</label>
                <input type="text" class="form-control" placeholder="MM/YY" pattern="(0[1-9]|1[0-2])\/[0-9]{2}" maxlength="5" title="格式為 MM/YY" required id="cardDate">
              </div>
              <div class="form-group">
                <label>安全碼 CVC *</label>
                <input type="text" class="form-control" placeholder="3 位數" pattern="[0-9]{3}" maxlength="3" title="卡片背面3位數字" required id="cardCvc">
              </div>
            </div>
          </div>

          <button type="submit" class="btn-premium" style="width:100%; justify-content:center; padding:1rem; margin-top:1rem;">
            確認付款並建立訂單 (NT$ ${total.toLocaleString()})
          </button>
        </form>

        <!-- Summary column -->
        <div class="checkout-summary-box">
          <h4 style="margin-bottom:1rem; font-family:var(--font-display); border-bottom:1px solid var(--border-glass); padding-bottom:0.5rem;">商品明細</h4>
          
          <div style="max-height:220px; overflow-y:auto; margin-bottom:1.5rem; display:flex; flex-direction:column; gap:0.75rem;">
            ${state.cart.map(item => `
              <div style="display:flex; justify-content:space-between; align-items:center; font-size:0.85rem;">
                <div style="max-width:70%;">
                  <span style="font-weight:600;">${item.chName}</span>
                  <div style="color:var(--text-secondary); font-size:0.75rem;">${item.size} / ${item.color} x ${item.quantity}</div>
                </div>
                <span style="color:var(--accent-cyan); font-weight:600;">NT$ ${(item.price * item.quantity).toLocaleString()}</span>
              </div>
            `).join('')}
          </div>

          <div class="checkout-summary-item">
            <span>商品小計</span>
            <span>NT$ ${total.toLocaleString()}</span>
          </div>
          <div class="checkout-summary-item">
            <span>物流運費</span>
            <span>NT$ 0 (免運優惠)</span>
          </div>
          <div class="checkout-summary-item total">
            <span>結帳總額</span>
            <span>NT$ ${total.toLocaleString()}</span>
          </div>
        </div>

      </div>
    </div>
  `;

  openModal(modalHTML);

  // Hook payment details visibility toggling
  const paymentSelect = document.getElementById('chPayment');
  const cardDetails = document.getElementById('creditCardDetails');
  
  paymentSelect.addEventListener('change', (e) => {
    const isCredit = e.target.value === 'credit';
    cardDetails.style.display = isCredit ? 'block' : 'none';
    
    // Toggle card input validation requirements
    const cardInputs = cardDetails.querySelectorAll('input');
    cardInputs.forEach(input => {
      input.required = isCredit;
    });
  });

  // Handle Checkout submission
  document.getElementById('checkoutSubmitForm').addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Animate mockup billing API processing
    const payVal = paymentSelect.value;
    const payLabels = {
      credit: '信用卡一次付清',
      linepay: 'LINE Pay 條碼金流',
      applepay: 'Apple Pay 支付',
      cod: '超商/宅配貨到付款'
    };

    openModal(`
      <div class="checkout-success-body page-fade-in" style="padding:4rem 2rem;">
        <i class="fa-solid fa-rotate-notch fa-spin success-icon" style="color:var(--accent-cyan);"></i>
        <h3>正在與您的金融機構安全連線...</h3>
        <p>請勿重新整理頁面或點選返回，正在授權與核對帳單資訊。</p>
      </div>
    `);

    setTimeout(() => {
      // Complete mock order creation
      const orderId = 'SF' + Math.floor(Math.random() * 899999 + 100000);
      const deliveryAddress = document.getElementById('chAddress').value;
      const recName = document.getElementById('chName').value;

      openModal(`
        <div class="checkout-success-body page-fade-in">
          <i class="fa-solid fa-circle-check success-icon"></i>
          <h3>感謝您的訂購！交易已順利完成</h3>
          <p>我們已將訂單明細及出貨通知發送至您的電子信箱，請密切留意。</p>
          
          <div style="background:var(--bg-glass); border:1px solid var(--border-glass); border-radius:var(--radius-md); padding:1.5rem; text-align:left; font-size:0.9rem; margin-bottom:2rem; display:flex; flex-direction:column; gap:0.5rem;">
            <div><strong>訂單編號:</strong> <span style="color:var(--accent-cyan); font-weight:600;">${orderId}</span></div>
            <div><strong>收件姓名:</strong> <span>${recName}</span></div>
            <div><strong>配送地址:</strong> <span>${deliveryAddress}</span></div>
            <div><strong>付款方式:</strong> <span>${payLabels[payVal]}</span></div>
            <div><strong>結帳金額:</strong> <span style="color:var(--accent-cyan); font-weight:600;">NT$ ${total.toLocaleString()}</span></div>
          </div>

          <button class="btn-premium" onclick="closeModal()" style="width:100%; justify-content:center;">返回商店</button>
        </div>
      `);

      // Clear Cart
      state.cart = [];
      saveState();
      renderCartItems();
      showToast('訂單建立成功！感謝您的選購。');
    }, 2000);
  });
}
