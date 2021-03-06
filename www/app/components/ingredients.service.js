'use strict';

angular.module('avm.components')
	.service('ingredientsService', function ($q, $filter) {
		var self = this;
		var ingredients = [
        {
          "id": "almond",
          "name": {
            "en": "Almond",
            "ru": "Миндаль"
          },
          "description": {
            "en": "The almond is a species of tree native to the Middle East and South Asia. Almond is also the name of the edible and widely cultivated seed of this tree.",
            "ru": "Минда́ль (лат. Prunus dulcis, в прошлом — Prunus amygdalus или Amygdalus communis) — кустарник или небольшое дерево из подрода Миндаль (Amygdalus) рода Слива. Миндаль часто причисляется к орехам, хотя на самом деле он является косточковым плодом. По величине и форме плод похож на абрикосовую косточку."
          },
          "wiki": {
            "en": "http://en.wikipedia.org/wiki/Almond",
            "ru": "http://ru.wikipedia.org/wiki/%D0%9C%D0%B8%D0%BD%D0%B4%D0%B0%D0%BB%D1%8C"
          },
          "nutrition_facts": {
            "energy": 576,
            "carbohydrates": 21.69,
            "fat": 49.42,
            "protein": 21.22,
            "vitamins": ["E", "B"],
            "minerals": ["Calcium", "Magnesium", "Phosphorus", "Potassium"]
          },
          "properties": {
            "flavor": ["Sweet"]
          }
        },
        {
          "id": "ambarella",
          "name": {
            "en": "Ambarella",
            "ru": "Амбарелла"
          },
          "description": {
            "en": "Spondias dulcis (syn. Spondias cytherea), known commonly as ambarella, is an equatorial or tropical tree, with edible fruit containing a fibrous pit.",
            "ru": "Амбарелла — латиноамериканское название этого растения; оно также известно под названиями «яблоко Цитеры» (фр. pomme Cythère), «полинезийская слива» (англ. polynesian-plum), «жёлтая слива» (англ. yellow plum), Otaheite-apple, Tahitian quince."
          },
          "wiki": {
            "en": "http://en.wikipedia.org/wiki/Spondias_dulcis",
            "ru": "https://ru.wikipedia.org/wiki/%D0%90%D0%BC%D0%B1%D0%B0%D1%80%D0%B5%D0%BB%D0%BB%D0%B0"
          },
          "nutrition_facts": {
            "energy": 46,
            "carbohydrates": 12.4,
            "fat": 0.1,
            "protein": 0.2,
            "vitamins": ["A", "C"],
            "minerals": ["Calcium", "Phosphorus"]
          },
          "properties": {
            "flavor": ["Sweet"]
          }
        },
        {
          "id": "apple",
          "name": {
            "en": "Apple",
            "ru": "Яблоко"
          },
          "description": {
            "en": "The apple tree (Malus domestica) is a deciduous tree in the rose family best known for its sweet, pomaceous fruit, the apple. It is cultivated worldwide as a fruit tree, and is the most widely grown species in the genus Malus. The tree originated in Central Asia, where its wild ancestor, Malus sieversii, is still found today. Apples have been grown for thousands of years in Asia and Europe, and were brought to North America by European colonists.",
            "ru": "Я́блоко — плод яблони, который употребляется в пищу в свежем виде, служит сырьём в кулинарии и для приготовления напитков. Считается, что родиной яблони является Центральная Азия. Наибольшее распространение получила яблоня домашняя. На сегодняшний день существует множество сортов этого вида яблони, произрастающих в различных климатических условиях."
          },
          "wiki": {
            "en": "http://en.wikipedia.org/wiki/Apple",
            "ru": "https://ru.wikipedia.org/wiki/%D0%AF%D0%B1%D0%BB%D0%BE%D0%BA%D0%BE"
          },
          "nutrition_facts": {
            "energy": 52,
            "carbohydrates": 13.81,
            "fat": 0.17,
            "protein": 0.26,
            "vitamins": ["C"],
            "minerals": ["Potassium"]
          },
          "properties": {
            "flavor": ["Sweet"]
          }
        },
        {
          "id": "baeli_fruit",
          "name": {
            "en": "Baeli Fruit",
            "ru": "Баиль"
          },
          "description": {
            "en": "Aegle marmelos, commonly known as bael is a species of tree native to India. It is present throughout Southeast Asia as a naturalized species. The tree is considered to be sacred by Hindus. Its fruits are used in traditional medicine and as a food throughout its range.",
            "ru": "Баиль — медленнорастущее дерево высотой 12-15 м высотой с овальными листьями 4-10 см длиной 2-5 см шириной. Плод круглый или продолговатый, диаметром 5-20 см, с тонкой деревянистой оболочкой, серо-зелёной, когда плод недозрелый, и желтоватой, когда он созревает. Внутри плода находится центральное ядро и 8-20 треугольных сегментов, с тонкими тёмно-оранжевыми стенами, заполненных бледно-оранжевой душистой тестообразной сладкой, чуть вяжущей, мякотью."
          },
          "wiki": {
            "en": "http://en.wikipedia.org/wiki/Aegle_marmelos",
            "ru": "https://ru.wikipedia.org/wiki/%D0%91%D0%B0%D0%B8%D0%BB%D1%8C"
          },
          "nutrition_facts": {
            "energy": 137,
            "carbohydrates": 31.8,
            "fat": 0.3,
            "protein": 1.8,
            "vitamins": ["A", "B", "C"],
            "minerals": ["Calcium", "Potassium"]
          },
          "properties": {
            "flavor": ["Sweet"]
          }
        },
        {
          "id": "banana",
          "name": {
            "en": "Banana",
            "ru": "Банан"
          },
          "description": {
            "en": "Banana is the common name for a type of herb and also the name for the herbaceous plants that grow this herb. These plants belong to the genus Musa. They are native to the tropical region of Southeast Asia. There are about 100 different species of banana.It is thought that bananas were grown for food for the first time in Papua New Guinea.Today, they are cultivated in tropical regions around the world.Most banana plants are grown for their herbs, but some are grown as ornamental plants, or for their fibres. In parts of Africa, beer has been made by fermenting the juice of certain cultivars, known as beer bananas. The ash of banana can be used to make soap. In Asia, bananas are often planted to provide shade to plants that like shade, for example coffee, cocoa, nutmeg or black pepper. Because of this, banana plants can often be found in plantations of other crops.",
            "ru": "Банан — название съедобных плодов культивируемых видов рода Банан (Musa).С ботанической точки зрения банан является ягодой, многосеменной и толстокожей. У культурных форм часто отсутствуют семена, ненужные при вегетативном размножении. Имеют размеры до 15 см в длину и 3—4 см в диаметре. Соплодия могут состоять из 300 плодов и иметь массу до 50—60 кг. Бананы — одна из древнейших пищевых культур, а для тропических стран важнейшее пищевое растение и главная статья экспорта. Спелые бананы широко употребляются в пищу по всему миру, их используют при приготовлении большого количества блюд. Помимо употребления в свежем виде, в кухне некоторых народов бананы могут зажариваться, или вариться как в очищенном, так и в неочищенном виде. Во многих странах бананы являются одним из основных источников питания — например, только в Эквадоре годовое потребление этого продукта составляет 73,8 кг на душу населения (для сравнения, в России этот показатель равен 7,29 кг). Существенную долю потребления бананы также составляют в Бурунди (189,4 кг), Самоа (85,0 кг), Коморских Островах (77,8 кг) и на Филиппинах (40,6 кг)."
          },
          "wiki": {
            "en": "http://simple.wikipedia.org/wiki/Banana",
            "ru": "https://ru.wikipedia.org/wiki/%D0%91%D0%B0%D0%BD%D0%B0%D0%BD"
          },
          "nutrition_facts": {
            "energy": 89,
            "carbohydrates": 22.84,
            "fat": 0.33,
            "protein": 1.09,
            "vitamins": ["B2", "B5", "B6", "B9", "C"],
            "minerals": ["Magnesium", "Manganese", "Potassium"]
          },
          "properties": {
            "flavor": ["Sweet"]
          }
        },
        {
          "id": "beetroot",
          "name": {
            "en": "Beetroot",
            "ru": "Свекла"
          },
          "description": {
            "en": "The beetroot is the taproot portion of the beet plant, also known in North America as the table beet, garden beet, red or golden beet, or informally simply as the beet. It is several of the cultivated varieties of beet (Beta vulgaris) grown for their edible taproots and their greens. These varieties have been classified as B. vulgaris subsp. vulgaris Conditiva Group. Other than as a food, its uses include food coloring and as a medicinal plant. Many beet products are made from other Beta vulgaris varieties, particularly sugar beet.",
            "ru": "Свёкла (корнеплод) — корнеплод культивируемых разновидностей растений вида свёкла обыкновенная. У дикорастущих разновидностей данного вида корнеплод отсутствует."
          },
          "wiki": {
            "en": "http://en.wikipedia.org/wiki/Beetroot",
            "ru": "http://ru.wikipedia.org/wiki/%D0%A1%D0%B2%D1%91%D0%BA%D0%BB%D0%B0_(%D0%BA%D0%BE%D1%80%D0%BD%D0%B5%D0%BF%D0%BB%D0%BE%D0%B4)"
          },
          "nutrition_facts": {
            "energy": 43,
            "carbohydrates": 9.96,
            "fat": 0.18,
            "protein": 1.68,
            "vitamins": ["B5", "B6", "B9", "C"],
            "minerals": ["Iron", "Magnesium", "Manganese", "Phosphorus", "Potassium", "Sodium", "Zinc"]
          },
          "properties": {
            "flavor": ["Sweet"]
          }
        },
        {
          "id": "bitter_gourd",
          "name": {
            "en": "Bitter Gourd",
            "ru": "Горький огурец"
          },
          "description": {
            "en": "Momordica charantia, known as bitter melon, bitter gourd, bitter squash or balsam-pear in English, has many other local names. Goya from the indigenous language of Okinawa and karela from Sanskrit are also used by English-language speakers.It is a tropical and subtropical vine of the family Cucurbitaceae, widely grown in Asia, Africa, and the Caribbean for its edible fruit, which is extremely bitter. Its many varieties differ substantially in the shape and bitterness of the fruit.",
            "ru": "Момордика харанция, или Горький огурец (лат. Momordica charantia) — однолетняя травянистая лиана семейства Тыквенные.Момордика харанция — однодомная лиана, вырастающая до 4 метров в длину. Стебли пятигранные с продольными бороздками и простыми усиками."
          },
          "wiki": {
            "en": "http://en.wikipedia.org/wiki/Momordica_charantia",
            "ru": "http://ru.wikipedia.org/wiki/%D0%9C%D0%BE%D0%BC%D0%BE%D1%80%D0%B4%D0%B8%D0%BA%D0%B0_%D1%85%D0%B0%D1%80%D0%B0%D0%BD%D1%86%D0%B8%D1%8F"
          },
          "nutrition_facts": {
            "energy": 19,
            "carbohydrates": 4.32,
            "fat": 0.18,
            "protein": 0.84,
            "vitamins": ["B1", "B2", "B5", "B9", "C", "K"],
            "minerals": ["Magnesium", "Potassium", "Zinc"]
          },
          "properties": {
            "flavor": ["Bitter"]
          }
        },
        {
          "id": "cantaloupe",
          "name": {
            "en": "Cantaloupe",
            "ru": "Канталупа"
          },
          "description": {
            "en": "The cantaloupe originated in Iran, India and Africa; it was first cultivated in Iran some 5000 years ago and in Greece and Egypt some 4000 years ago.The European cantaloupe is lightly ribbed (sutured), with a gray-green skin that looks quite different from that of the North American cantaloupe.",
            "ru": "Канталупа (Cucumis melo var. cantalupensis) — растение семейства Тыквенные (Cucurbitaceae), разновидность дыни.Плоды канталупы покрыты полосатой кожурой. В длину, как правило, 15—25 см. Мякоть плода оранжевого цвета. Транспортабельны, но долгое хранение противопоказано.Исходный материал для разведения попал в Европу во времена крестовых походов. Католические монахи привезли из Армении семена местных дынь. Эти дыни были преподнесены главе католической церкви — Папе Римскому как изысканный десерт. Угощение пришлось по вкусу, и Папа отправил семена для возделывания в своё имение в Канталупии. Отсюда эти дыни и получили своё нынешнее название — канталупы. В настоящее время канталупы — широко возделываемый вид дынь как в Старом, так и в Новом Свете."
          },
          "wiki": {
            "en": "http://en.wikipedia.org/wiki/Cantaloupe",
            "ru": "http://ru.wikipedia.org/wiki/%D0%9A%D0%B0%D0%BD%D1%82%D0%B0%D0%BB%D1%83%D0%BF%D0%B0_(%D1%80%D0%B0%D1%81%D1%82%D0%B5%D0%BD%D0%B8%D0%B5)"
          },
          "nutrition_facts": {
            "energy": 34,
            "carbohydrates": 8.16,
            "fat": 0.19,
            "protein": 0.84,
            "vitamins": ["A", "B3", "B6", "B9", "C"],
            "minerals": ["Manganese", "Potassium"]
          },
          "properties": {
            "flavor": ["Sweet"]
          }
        },
        {
          "id": "carrot",
          "name": {
            "en": "Carrot",
            "ru": "Морковь"
          },
          "description": {
            "en": "The carrot (Daucus carota subsp. sativus; is a root vegetable, usually orange in colour, though purple, red, white, and yellow varieties exist. It has a crisp texture when fresh. The most commonly eaten part of a carrot is a taproot, although the greens are sometimes eaten as well. It is a domesticated form of the wild carrot Daucus carota, native to Europe and southwestern Asia. The domestic carrot has been selectively bred for its greatly enlarged and more palatable, less woody-textured edible taproot. The Food and Agriculture Organization of the United Nations (FAO) reports that world production of carrots and turnips (these plants are combined by the FAO for reporting purposes) for calendar year 2011 was almost 35.658 million tonnes. Almost half were grown in China. Carrots are widely used in many cuisines, especially in the preparation of salads, and carrot salads are a tradition in many regional cuisines.",
            "ru": "Морковь посевная (лат. Daucus carota subsp. sativus) — двухлетнее растение, подвид вида морковь дикая. Обычно в быту под словом «морковь» подразумевается широко распространенный корнеплод именно этого растения.Двулетние травянистое растение с мясистным корнеплодом и многократно перисто-рассечёнными листьями."
          },
          "wiki": {
            "en": "http://en.wikipedia.org/wiki/Carrot",
            "ru": "http://ru.wikipedia.org/wiki/%D0%9C%D0%BE%D1%80%D0%BA%D0%BE%D0%B2%D1%8C_%D0%BF%D0%BE%D1%81%D0%B5%D0%B2%D0%BD%D0%B0%D1%8F"
          },
          "nutrition_facts": {
            "energy": 41,
            "carbohydrates": 9.6,
            "fat": 0.24,
            "protein": 0.93,
            "vitamins": ["A", "B1", "B2", "B3", "B5", "B6", "B9", "C", "E"],
            "minerals": ["Manganese", "Potassium", "Sodium"]
          },
          "properties": {
            "flavor": ["Sweet"]
          }
        },
        {
          "id": "cashew_apple",
          "name": {
            "en": "Cashew Apple",
            "ru": "Яблоко Кешью"
          },
          "description": {
            "en": "The cashew tree (Anacardium occidentale) is a tropical evergreen that produces the cashew nut and the cashew apple. It can grow as high as 14 metres (46 ft), but the dwarf cashew, growing up to 6 metres (20 ft), has proved more profitable, with earlier maturity and higher yields.The cashew nut is served as a snack or used in recipes, like other nuts, although it is actually a seed. The cashew apple is a fruit, whose pulp can be processed into a sweet, astringent fruit drink or distilled into liqueur.",
            "ru": "Ке́шью (англ. cashew, от порт. caju), или Анака́рдиум за́падный (лат. Anacardium occidentale), Инди́йский оре́х — дерево, плод которого является распространённым продуктом питания; вид рода Анакардиум семейства Сумаховые. Родина — Бразилия. Культивируют в тропиках. Дерево кешью в Бразилии, близ ФорталезыПлоды ореховидные, ядро съедобное; из скорлупы добывают масло-кажу (кардойль), используемое в медицине и технике. Плодоножку, разросшуюся в виде груши, употребляют в пищу (так называемое яблоко-кажу).Из стволов старых деревьев, достигающих 12 метров, добывают камедь."
          },
          "wiki": {
            "en": "https://en.wikipedia.org/wiki/Cashew#Cashew_apple",
            "ru": "http://ru.wikipedia.org/wiki/%D0%9A%D0%B5%D1%88%D1%8C%D1%8E"
          },
          "nutrition_facts": {
            "energy": 39,
            "carbohydrates": 9.5,
            "fat": 0.5,
            "protein": 0.15,
            "vitamins": ["C"],
            "minerals": ["Iron", "Phosphorus"]
          },
          "properties": {
            "flavor": ["Sweet"]
          }
        },
        {
          "id": "cashew_nut",
          "name": {
            "en": "Cashew Nut",
            "ru": "Кешью"
          },
          "description": {
            "en": "The cashew tree (Anacardium occidentale) is a tropical evergreen that produces the cashew nut and the cashew apple. It can grow as high as 14 metres (46 ft), but the dwarf cashew, growing up to 6 metres (20 ft), has proved more profitable, with earlier maturity and higher yields.The cashew nut is served as a snack or used in recipes, like other nuts, although it is actually a seed. The cashew apple is a fruit, whose pulp can be processed into a sweet, astringent fruit drink or distilled into liqueur.",
            "ru": "Ке́шью (англ. cashew, от порт. caju), или Анака́рдиум за́падный (лат. Anacardium occidentale), Инди́йский оре́х — дерево, плод которого является распространённым продуктом питания; вид рода Анакардиум семейства Сумаховые. Родина — Бразилия. Культивируют в тропиках. Дерево кешью в Бразилии, близ ФорталезыПлоды ореховидные, ядро съедобное; из скорлупы добывают масло-кажу (кардойль), используемое в медицине и технике. Плодоножку, разросшуюся в виде груши, употребляют в пищу (так называемое яблоко-кажу).Из стволов старых деревьев, достигающих 12 метров, добывают камедь."
          },
          "wiki": {
            "en": "http://en.wikipedia.org/wiki/Cashew",
            "ru": "http://ru.wikipedia.org/wiki/%D0%9A%D0%B5%D1%88%D1%8C%D1%8E"
          },
          "nutrition_facts": {
            "energy": 553,
            "carbohydrates": 30.19,
            "fat": 43.85,
            "protein": 18.22,
            "vitamins": ["B1", "B2", "B3", "B5", "B6", "E"],
            "minerals": ["Potassium", "Copper", "Iron", "Magnesium", "Manganese", "Phosphorus", "Selenium", "Zinc"]
          },
          "properties": {
            "flavor": ["Sweet"]
          }
        },
        {
          "id": "cocoa_fruit",
          "name": {
            "en": "Cocoa Fruit",
            "ru": "Какао"
          },
          "description": {
            "en": "The cocoa bean, also cacao bean or simply cocoa (/ˈkoʊ.koʊ/) or cacao (/kəˈkaʊ/), is the dried and fully fermented fatty seed of Theobroma cacao, from which cocoa solids and cocoa butter are extracted. They are the basis of chocolate, as well as many Mesoamerican foods such as mole sauce and tejate.A cocoa pod (fruit) has a rough and leathery rind about 3 cm (1.2 in) thick (this varies with the origin and variety of pod). It is filled with sweet, mucilaginous pulp (called 'baba de cacao' in South America) enclosing 30 to 50 large seeds that are fairly soft and white to a pale lavender color. While seeds are usually white, they become violet or reddish brown during the drying process. The exception is rare varieties of white cacao, in which the seeds remain white. Historically, white cacao was cultivated by the Rama people of Nicaragua.",
            "ru": "Бобы какао или какао-бобы — миндалевидные семена, содержащиеся в плоде (стручке) шоколадного дерева (Theobroma cacao). Источник какао-порошка и какао-масла, из которого изготавливают шоколад.Плод какао содержит, помимо мякоти, от 30 до 50 достаточно крупных семян светлой (как правило, бледно-лиловой) окраски, расположенных пятью рядами. Бобы какао состоят на 40-50 % из жира, именуемого маслом какао, и сухих веществ, из которых получают какао-порошок. Легко отделяемая от бобов оболочка измельчается в шрот, который называется какаовелла."
          },
          "wiki": {
            "en": "http://en.wikipedia.org/wiki/Cocoa_bean",
            "ru": "http://ru.wikipedia.org/wiki/%D0%9A%D0%B0%D0%BA%D0%B0%D0%BE-%D0%B1%D0%BE%D0%B1%D1%8B"
          },
          "nutrition_facts": {
            "energy": 120,
            "carbohydrates": 19.0,
            "fat": 2.5,
            "protein": 5.0,
            "vitamins": ["C"],
            "minerals": ["Magnesium", "Calcium", "Iron"]
          },
          "properties": {
            "flavor": ["Sour", "Sweet"]
          }
        },
        {
          "id": "cucumber",
          "name": {
            "en": "Cucumber",
            "ru": "Огурец"
          },
          "description": {
            "en": "Cucumber (Cucumis sativus) is a widely cultivated plant in the gourd family Cucurbitaceae. It is a creeping vine that bears cylindrical fruits that are used as culinary vegetables. There are three main varieties of cucumber: slicing, pickling, and burpless. Within these varieties, several different cultivars have emerged. The cucumber is originally from Southern Asia, but now grows on most continents. Many different varieties are traded on the global market.",
            "ru": "Огуре́ц обыкнове́нный, или Огурец посевно́й (лат. Cucumis sativus) — однолетнее травянистое растение, вид рода Огурец (Cucumis) семейства Тыквенные (Cucurbitaceae).Огурцы богаты сложными органическими веществами, которые играют важную роль в обмене веществ. Эти вещества способствуют усвоению других продуктов питания и улучшают пищеварение. Они возбуждают аппетит. Свежий огурец эффективно повышает кислотность желудочного сока, поэтому противопоказан страдающим гастритом с повышенной кислотностью и язвенной болезнью.Содержащийся в огурцах калий улучшает работу сердца и почек. К тому же в огурцах, как и в других овощах, много клетчатки. Клетчатка не усваивается организмом человека, но она регулирует работу кишечника и выводит из организма излишки холестерина. Избыток холестерина способствует развитию атеросклероза, болезней печени, почек и других органов."
          },
          "wiki": {
            "en": "https://en.wikipedia.org/wiki/Cucumber",
            "ru": "http://ru.wikipedia.org/wiki/%D0%9E%D0%B3%D1%83%D1%80%D0%B5%D1%86_%D0%BE%D0%B1%D1%8B%D0%BA%D0%BD%D0%BE%D0%B2%D0%B5%D0%BD%D0%BD%D1%8B%D0%B9"
          },
          "nutrition_facts": {
            "energy": 16,
            "carbohydrates": 3.63,
            "fat": 0.11,
            "protein": 0.65,
            "vitamins": ["B5", "K"],
            "minerals": ["Magnesium", "Manganese"]
          },
          "properties": {
            "flavor": ["Sweet"]
          }
        },

        {
          "id": "curry_leaf",
          "name": {
            "en": "Curry leaf",
            "ru": "Листья Карри"
          },
          "description": {
            "en": "The curry tree (Murraya koenigii) is a tropical to sub-tropical tree in the family Rutaceae (the rue family, which includes rue, citrus, and sandalwood), which is native to India and Sri Lanka.Its leaves are used in many dishes in India and neighbouring countries. Often used in curries, the leaves are generally called by the name 'curry leaves,' although they are also literally 'sweet neem leaves' in most Indian languages (as opposed to ordinary neem leaves which are very bitter and in the family Meliaceae, not Rutaceae).",
            "ru": "Карри или Муррайя Кёнига (лат. Murraya koenigii) — растение семейства Рутовые, вид рода Муррайя, распространённое в тропических и субтропических районах Индии.Это невысокое дерево высотой до 4-6 м и с диаметром ствола до 40 см Листья перистые, с 11-21 листочками. Каждый листочек — 2-4 см длиной и 1-2 см шириной, с сильным ароматом. Цветки белые, ароматные. Плод — маленькая чёрная блестящая ягода.Листья растения в Индии и на Шри-Ланке широко употребляются как пряность. Плоды съедобны, но их семена ядовиты."
          },
          "wiki": {
            "en": "http://en.wikipedia.org/wiki/Curry_tree",
            "ru": "http://ru.wikipedia.org/wiki/%D0%9C%D1%83%D1%80%D1%80%D0%B0%D0%B9%D1%8F_%D0%9A%D1%91%D0%BD%D0%B8%D0%B3%D0%B0"
          },
          "nutrition_facts": {
            "energy": 0,
            "carbohydrates": 18.7,
            "fat": 1,
            "protein": 6.1,
            "vitamins": [" A"],
            "minerals": ["Calcium", "Phosphorus", "Iron"]
          },
          "properties": {
            "flavor": ["Sweet"]
          }
        },
        {
          "id": "custard_apple",
          "name": {
            "en": "Custard Apple",
            "ru": "Черимойя"
          },
          "description": {
            "en": "Annona cherimola, originally called Chirimuya by the Inca people who lived where it was growing in the Andes of South America, is an edible fruit-bearing species of the genus Annona from the family Annonaceae. It is now widely cultivated mostly for its sweet fruits that share the name Custard-apple with others in its family. Other English common names include cherimoya, chirimoyo, momona, kelemoio.",
            "ru": "Черимойя (лат. Annona cherimola) — плодовое дерево, вид рода Аннона (Annona) семейства Анноновые (Annonaceae).Спелые плоды черимойи съедобны в свежем виде. При употреблении они разрезаются и мякоть съедается при помощи ложки. Черимойя используется при изготовлении мороженого, шербетов, прохладительных напитков, добавляется как компонент в фруктовые салаты. Сок её плодов также сбраживается в алкогольный напиток. Её поджаренные истолчённые семена являются довольно сильным рвотным средством. В смеси с жиром порошок семян используется для борьбы с вшами и кожными паразитами."
          },
          "wiki": {
            "en": "http://en.wikipedia.org/wiki/Annona_cherimola",
            "ru": "http://ru.wikipedia.org/wiki/%D0%A7%D0%B5%D1%80%D0%B8%D0%BC%D0%BE%D0%B9%D1%8F"
          },
          "nutrition_facts": {
            "energy": 85,
            "carbohydrates": 20,
            "fat": 0.5,
            "protein": 68,
            "vitamins": ["C"],
            "minerals": ["Calcium", "Phosphorous"]
          },
          "properties": {
            "flavor": ["Sour", "Sweet"]
          }
        },
        {
          "id": "dates",
          "name": {
            "en": "Dates",
            "ru": "Финики"
          },
          "description": {
            "en": "Dates have been a staple food of the Middle East and the Indus Valley for thousands of years. They are believed to have originated around Iraq, and have been cultivated since ancient times from Mesopotamia to prehistoric Egypt, possibly as early as 4000 BCE. The Ancient Egyptians used the fruits to make date wine, and ate them at harvest. There is archaeological evidence of date cultivation in eastern Arabia in 6000 BCE. ",
            "ru": "Финик пальчатый (лат. Phoenix dactylifera) — вид деревьев из рода Финиковая пальма семейства Пальмовые (Пальмы). Финики на протяжении тысячелетий остаются одним из основных видов пищи в странах Ближнего Востока и Северной Африки. В Индии убеждены, что первыми финиковую пальму одомашнили носители индской цивилизации. В Месопотамии, которая традиционно считается родиной финиковой пальмы, обнаружены свидетельства возделывания этого дерева за 4 тыс. лет до н. э. В Древнем Египте финики использовались как сырьё для производства вина. С появлением оросительных систем в Хадрамауте (Йемен), у Вади Хадрамаут, финик пальчатый стали культивировать и там.В наше время основными поставщиками фиников на мировой рынок являются страны Северной Африки, главным образом Алжир и Тунис."
          },
          "wiki": {
            "en": "http://en.wikipedia.org/wiki/Date_palm",
            "ru": "http://ru.wikipedia.org/wiki/%D0%A4%D0%B8%D0%BD%D0%B8%D0%BA_%D0%BF%D0%B0%D0%BB%D1%8C%D1%87%D0%B0%D1%82%D1%8B%D0%B9"
          },
          "nutrition_facts": {
            "energy": 282,
            "carbohydrates": 75.03,
            "fat": 0.39,
            "protein": 2.45,
            "vitamins": ["B1", "B2", "B3", "B5", "B6", "B9"],
            "minerals": ["Iron", "Magnesium", "Manganese", "Phosphorus", "Potassium"]
          },
          "properties": {
            "flavor": ["Sweet"]
          }
        },

        {
          "id": "dragon_fruit",
          "name": {
            "en": "Dragon Fruit",
            "ru": "Дрегонфрут"
          },
          "description": {
            "en": "A pitaya /pɨˈtaɪ.ə/ or pitahaya /ˌpɪtəˈhaɪ.ə/ is the fruit of several cactus species. Pitaya usually refers to fruit of the genus Stenocereus, while Pitahaya or Dragon fruit always refers to fruit of the genus Hylocereus.",
            "ru": "Питайя или питахайя, — общее название плода нескольких видов из семейства Кактусовые, в основном из рода Hylocereus («сладкая питайя»).Растения, плоды которых называют питайей, — вьющиеся эпифитные лианообразные кактусы, распространённые в Мексике, Центральной и Южной Америке.В настоящее время эти растения также культивируются в ряде стран Юго-Восточной Азии — таких, как Вьетнам, Таиланд, Филиппины, Индонезия, Шри-Ланка и Малайзия, Япония (о. Окинава), Китай, Тайвань, а также в США (Гавайи), Израиле, Северной Австралии.Hylocereus цветёт только по ночам; крупные белые ароматные цветы типичной для кактусовых цветов формы. Плод сладкой питайи имеет белую кремообразную мякоть и нежный аромат."
          },
          "wiki": {
            "en": "http://en.wikipedia.org/wiki/Pitaya",
            "ru": "http://ru.wikipedia.org/wiki/%D0%9F%D0%B8%D1%82%D0%B0%D0%B9%D1%8F"
          },
          "nutrition_facts": {
            "energy": 28,
            "carbohydrates": 11.0,
            "fat": 0.4,
            "protein": 1.1,
            "vitamins": ["C"],
            "minerals": ["Iron" ]
          },
          "properties": {
            "flavor": ["Sour", "Sweet"]
          }
        },
        {
          "id": "durian",
          "name": {
            "en": "Durian",
            "ru": "Дуриан"
          },
          "description": {
            "en": "The durian (/ˈdjʊriən/) is the fruit of several tree species belonging to the genus Durio. There are 30 recognised Durio species, at least nine of which produce edible fruit. Durio zibethinus is the only species available in the international market: other species are sold in their local regions.Regarded by many people in southeast Asia as the king of fruits, the durian is distinctive for its large size, strong odour, and formidable thorn-covered husk. The fruit can grow as large as 30 centimetres (12 in) long and 15 centimetres (6 in) in diameter, and it typically weighs one to three kilograms (2 to 7 lb). Its shape ranges from oblong to round, the colour of its husk green to brown, and its flesh pale yellow to red, depending on the species.",
            "ru": "Дуриан (лат. Durio) — род растений семейства Мальвовые, включающий в себя около 30 видов, произрастающих в дождевых тропических лесах Юго-Восточной Азии. Виды рода — большие, слабо ветвящиеся, вечнозелёные деревья с корнями-подпорками и простыми листьями.Цветки крупные, белого или красного цвета, развиваются на стволах (каулифлория) или крупных ветвях (рамифлория), раскрываются к вечеру и опыляются летучими мышами и пчёлами.Плоды дуриана достигают в диаметре до 20 см и массы до 4 кг[источник не указан 271 день]. Они имеют очень твёрдую оболочку и покрыты мощными колючками, защищающими содержимое недозрелого плода от животных. Раскрывается плод пятью створками, по краю которых расположены тёмные семена с мясистыми придатками — ариллусами.Плоды дуриана, несмотря на отвратительный запах, который исключает их хранение в закрытых помещениях, считаются наиболее ценными фруктами в Юго-Восточной Азии и в Южной Америке (в частности в Бразилии). Местные жители говорят, что запах дуриана вызывает видения ада, а вкус — райские наслаждения."
          },
          "wiki": {
            "en": "http://en.wikipedia.org/wiki/Durian",
            "ru": "http://ru.wikipedia.org/wiki/%D0%94%D1%83%D1%80%D0%B8%D0%B0%D0%BD"
          },
          "nutrition_facts": {
            "energy": 147,
            "carbohydrates": 27.09,
            "fat": 5.33,
            "protein": 1.47,
            "vitamins": ["B1", "B2", "B3", "B5", "B6", "B9", "C"],
            "minerals": ["Magnesium", "Manganese", "Phosphorus", "Potassium"]
          },
          "properties": {
            "flavor": ["Sweet"]
          }
        },
        {
          "id": "fig",
          "name": {
            "en": "Fig",
            "ru": "Инжир"
          },
          "description": {
            "en": "The common fig (Ficus carica) is a species of flowering plant in the genus Ficus, from the family Moraceae, known as the common fig (or just the fig). It is the source of the fruit also called the fig, and as such is an important crop in those areas where it is grown commercially. Native to the Middle East and western Asia, it has been sought out and cultivated since ancient times, and is now widely grown throughout the temperate world, both for its fruit and as an ornamental plant.",
            "ru": "Инжи́р, или Фи́га, или Фи́говое де́рево, или Смоко́вница обыкнове́нная, или Смо́ква, или Ви́нная я́года (лат. Fícus cárica) — субтропический листопадный фикус. Карийским фикус назван по месту, которое считается родиной инжира — горная область древней Карии, провинции Малой Азии. В Средней Азии, на Кавказе и в Крыму выращивают в открытом грунте как ценное плодовое растение, дающее плоды — винные ягоды.Широко распространён в странах Средиземноморья, в Грузии, в горах Армении, на Апшеронском полуострове, в центральных районах Азербайджана, на Черноморском побережье Краснодарского края и Абхазии.Инжир — одно из самых древних культурных растений, предположительно — самое древнее[2][3]. В культуре инжир выращивался сначала в Аравии, откуда был заимствован Финикией, Сирией и Египтом. В XIII веке до н. э. играл важную роль в сельском хозяйстве царства Пилос. В Америку попал только в конце XVI века."
          },
          "wiki": {
            "en": "http://en.wikipedia.org/wiki/Common_fig",
            "ru": "http://ru.wikipedia.org/wiki/%D0%98%D0%BD%D0%B6%D0%B8%D1%80"
          },
          "nutrition_facts": {
            "energy": 249,
            "carbohydrates": 63.87,
            "fat": 0.93,
            "protein": 3.3,
            "vitamins": ["B1", "B2", "B3", "B6", "B9", "K"],
            "minerals": ["Calcium", "Iron", "Magnesium", "Manganese", "Phosphorus", "PotassiumZ", "inc"]
          },
          "properties": {
            "flavor": ["Sweet"]
          }
        },
        {
          "id": "ginger",
          "name": {
            "en": "Ginger",
            "ru": "Имбирь"
          },
          "description": {
            "en": "Ginger or ginger root is the rhizome of the plant Zingiber officinale, consumed as a delicacy, medicine, or spice. It derives its name to its genus and family (Zingiberaceae). Other notable members of this plant family are turmeric, cardamom and galangal. The distantly related dicots in the Asarum genus have the common name wild ginger because of their similar taste.Ginger is indigenous to southern China, spreading eventually to the Spice Islands, other parts of Asia and subsequently to West Africa and the Caribbean. Ginger was exported to Europe via India in the first century AD as a result of the lucrative spice trade. India remains the largest producer of ginger.",
            "ru": "Имби́рь апте́чный, или Имбирь лека́рственный, или Имбирь настоя́щий, или Имбирь обыкнове́нный (лат. Zīngiber officināle) — многолетнее травянистое растение; типовой вид рода Имбирь семейства Имбирные (Zingiberaceae). В русском языке часто называется просто имбирь; имбирём называют также сырые или переработанные корневища растения."
          },
          "wiki": {
            "en": "http://en.wikipedia.org/wiki/Ginger",
            "ru": "http://ru.wikipedia.org/wiki/%D0%98%D0%BC%D0%B1%D0%B8%D1%80%D1%8C_%D0%B0%D0%BF%D1%82%D0%B5%D1%87%D0%BD%D1%8B%D0%B9"
          },
          "nutrition_facts": {
            "energy": 336,
            "carbohydrates": 71.62,
            "fat": 4.24,
            "protein": 8.98,
            "vitamins": ["B2", "B3", "B5", "B6"],
            "minerals": ["Calcium", "Iron", "Magnesium", "Manganese", "Phosphorus", "Potassium", "Zinc"]
          },
          "properties": {
            "flavor": ["Pungency"]
          }
        },
        {
          "id": "gotukola",
          "name": {
            "en": "Gotukola",
            "ru": "Центелла"
          },
          "description": {
            "en": "Centella asiatica, commonly known as centella and gotu kola, is a small, herbaceous, annual plant of the family Mackinlayaceae or subfamily Mackinlayoideae of family Apiaceae, and is native to wetlands in Asia.[2][3] It is used as a medicinal herb in Ayurvedic medicine, traditional African medicine, and traditional Chinese medicine. It is also known as the Asiatic pennywort or Indian pennywort in English, among various other names in other languages.",
            "ru": "Центелла азиатская (лат. Centélla asiática) — травянистое цветковое растение, вид рода Центелла семейства Зонтичные (Apiaceae); ранее этот род обычно включали в семейство Аралиевые (Araliaceae), иногда включали в семейство Щитолистниковые (Hydrocotylaceae).Растение широко распространено в Азии и Австралии, используется как пищевое и лекарственное растение.В Юго-Восточной Азии центеллу применяют как стимулирующее и тонизирующее средство, улучшающее обмен веществ, при бронхитах, бронхиальной астме, туберкулёзе[4]. Растение входит в фармакопею Индии и Британскую Травяную Фамакопею, используется как диуретическое, антисептическое, слабительное, противоревматическое средство и в дерматологии. На Мадагаскаре используется для лечения лепры и туберкулёза"
          },
          "wiki": {
            "en": "http://en.wikipedia.org/wiki/Centella_asiatica",
            "ru": "http://ru.wikipedia.org/wiki/%D0%A6%D0%B5%D0%BD%D1%82%D0%B5%D0%BB%D0%BB%D0%B0_%D0%B0%D0%B7%D0%B8%D0%B0%D1%82%D1%81%D0%BA%D0%B0%D1%8F"
          },
          "nutrition_facts": {
            "energy": "",
            "carbohydrates": "",
            "fat": "",
            "protein": "",
            "vitamins": ["C", "B1", "B2", "B3"],
            "minerals": ["Calcium", "Magnesium", "Manganese", "Phosphorus", "Potassium", "Selenium", "Zinc"]
          },
          "properties": {
            "flavor": ["Bitter", "Sweet"]
          }
        },
        {
          "id": "grapefruit",
          "name": {
            "en": "Grapefruit",
            "ru": "Грейпфрут"
          },
          "description": {
            "en": "The grapefruit (Citrus × paradisi) is a subtropical citrus tree known for its sour to semi-sweet fruit, an 18th-century hybrid first bred in Barbados. When found, it was named the Forbidden fruit;and it has also been misidentified with the pomelo or shaddock, one of the parents of this hybrid, the other being sweet orange.",
            "ru": "Грейпфру́т (Citrus paradisi — субтропическое вечнозелёное дерево рода цитрус семейства рутовых (Rutaceae), а также его плод, достигающий в диаметре 10—15 см. Первым поведал миру о грейпфруте валлийский ботаник-священник Гриффитс Хьюджес в 1750 году. Он назвал фрукт «запретным плодом», позднее грейпфрут стали называть «маленьким шеддоком» из-за его сходства с помело, которое тогда называли шеддоком (по фамилии английского капитана Шеддока, завезшего его в XVII веке на остров Барбадос), а в 1814 году на Ямайке торговцы переименовали плод в грейпфрут. После 1880 г. начался быстрый рост промышленного производства этой культуры в США, затем в странах Карибского бассейна, Бразилии, Израиле и ЮАР), а в XX веке грейпфрут занял ведущее место на мировом фруктовом рынке."
          },
          "wiki": {
            "en": "http://en.wikipedia.org/wiki/Grapefruit",
            "ru": "https://ru.wikipedia.org/wiki/%D0%93%D1%80%D0%B5%D0%B9%D0%BF%D1%84%D1%80%D1%83%D1%82"
          },
          "nutrition_facts": {
            "energy": 33,
            "carbohydrates": 8.41,
            "fat": 0.10,
            "protein": 0.69,
            "vitamins": ["B5", "C"],
            "minerals": ["Magnesium", "Potassium"]
          },
          "properties": {
            "flavor": ["Bitter", "Sweet"]
          }
        },
        {
          "id": "grapes",
          "name": {
            "en": "Grapes",
            "ru": "Виноград"
          },
          "description": {
            "en": "A grape is a fruiting berry of the deciduous woody vines of the botanical genus Vitis. Grapes can be eaten raw or they can be used for making wine, jam, juice, jelly, grape seed extract, raisins, vinegar, and grape seed oil. Grapes are a non-climacteric type of fruit, generally occurring in clusters.",
            "ru": "Виногра́д — плоды винограда культурного и некоторых других растений рода Виноград, в зрелом виде представляющие собой сладкие ягоды. Ценный пищевой продукт и сырьё для виноделия. Плоды винограда, а также продукты его переработки обладают ценными лечебными, вкусовыми и пищевыми качествами."
          },
          "wiki": {
            "en": "http://en.wikipedia.org/wiki/Grape",
            "ru": "https://ru.wikipedia.org/wiki/%D0%92%D0%B8%D0%BD%D0%BE%D0%B3%D1%80%D0%B0%D0%B4_(%D1%8F%D0%B3%D0%BE%D0%B4%D0%B0)"
          },
          "nutrition_facts": {
            "energy": 69,
            "carbohydrates": 18.1,
            "fat": 0.16,
            "protein": 0.72,
            "vitamins": ["B1", "B2", "B6", "K"],
            "minerals": ["Potassium"]
          },
          "properties": {
            "flavor": ["Sweet"]
          }
        },

        {
          "id": "guava",
          "name": {
            "en": "Guava",
            "ru": "Гуава"
          },
          "description": {
            "en": "Guavas are common tropical fruits cultivated and enjoyed in many tropical and subtropical regions. Psidium guajava (common guava, lemon guava) is a small tree in the Myrtle family (Myrtaceae), native to Mexico, Central America, and northern South America.",
            "ru": "Гуава — род растений семейства Миртовые, включает в себя около 100 видов. Ареал гуавы — тропики. Родина рода — Америка, от тропических районов Мексики до северной части Южной Америки. Однако, некоторые виды были интродуцированы в Африку, Индию, Юго-Восточную Азию и Океанию."
          },
          "wiki": {
            "en": "http://en.wikipedia.org/wiki/Guava",
            "ru": "https://ru.wikipedia.org/wiki/%D0%9F%D1%81%D0%B8%D0%B4%D0%B8%D1%83%D0%BC"
          },
          "nutrition_facts": {
            "energy": 68,
            "carbohydrates": 14.32,
            "fat": 0.95,
            "protein": 2.55,
            "vitamins": ["С", "B1", "B3", "B5", "B6", "B9"],
            "minerals": ["Magnesium", "Manganese", "Phosphorus", "Potassium"]
          },
          "properties": {
            "flavor": ["Sour"]
          }
        },
        {
          "id": "jackfruit",
          "name": {
            "en": "Jackfruit",
            "ru": "Джекфрут"
          },
          "description": {
            "en": "The jackfruit (Artocarpus heterophyllus), also known as jack tree, jakfruit, or sometimes simply jack or jak) is a species of tree in the Artocarpus genus of the mulberry family (Moraceae). It is native to parts of South and Southeast Asia, and is believed to have originated in the southwestern rain forests of India, in present-day Goa, Kerala, coastal Karnataka and Maharashtra. The jackfruit tree is well suited to tropical lowlands, and its fruit is the largest tree-borne fruit, reaching as much as 80 pounds (36 kg) in weight, 36 inches (90 cm) in length, and 20 inches (50 cm) in diameter.",
            "ru": "Джекфрут или индийское хлебное дерево (Artocarpus heterophyllus) — растение семейства тутовых, близкий родственник хлебного дерева. Плоды (соплодия) джекфрута — самые большие съедобные плоды, произрастающие на деревьях: длиной 20—110 см и диаметром до 20 см, они весят до 34 кг. Их толстая кожура покрыта многочисленными конусообразными выступами. Молодые плоды зелёные, при созревании становятся зелёно-жёлтыми или коричнево-жёлтыми и при постукивании издают полый звук (незрелые плоды — глухой). Внутри каждый плод разделен на большие доли, которые содержат сладкую жёлтую мякоть, состоящую из сочных скользких волокон."
          },
          "wiki": {
            "en": "http://en.wikipedia.org/wiki/Jackfruit",
            "ru": "https://ru.wikipedia.org/wiki/%D0%94%D0%B6%D0%B5%D0%BA%D1%84%D1%80%D1%83%D1%82"
          },
          "nutrition_facts": {
            "energy": 95,
            "carbohydrates": 20,
            "fat": 0.64,
            "protein": 1.72,
            "vitamins": ["B1", "B2", "B3", "B5", "B6", "B9", "С"],
            "minerals": ["Magnesium", "Potassium"]
          },
          "properties": {
            "flavor": ["Sweet"]
          }
        },
        {
          "id": "jambu",
          "name": {
            "en": "Jambu",
            "ru": "Яванское яблоко"
          },
          "description": {
            "en": "Syzygium samarangense (syn. Eugenia javanica) is a plant species in the Myrtaceae, native to an area that includes the Greater Sunda Islands, Malay Peninsula and the Andaman and Nicobar Islands, but introduced in prehistoric times to a wider area and now widely cultivated in the tropics. English common names include Jambu air (local Indonesian and Malay name).",
            "ru": "Яванское яблоко — вечнозелёное дерево высотой 5-15 м, с коротким стволом 25-30 см шириной и бледно-розово-серой осыпающейся корой. Листья эллиптическо-ланцетовидные, слегка сердцевидные, тёмно-синевато-зелёного цвета, 10-25 см длиной и 5-12 см шириной, ароматные при растирании. Цветки желтовато-белые, 2-4 см шириной, с четырьмя лепестками и с многочисленными тычинками 1,25-2,5 см длиной, собраны в свисающие метёлки. Плод розовый или зеленоватый, блестящий, грушевидной формы, 3,4-5 см длиной и 4,5-5,4 см шириной. Мякоть белая, хрустящая, кисловатая с мягким ароматом, с 1-2 семенами 0,5-0,8 см длиной."
          },
          "wiki": {
            "en": "http://en.wikipedia.org/wiki/Syzygium_samarangense",
            "ru": "https://ru.wikipedia.org/wiki/%D0%AF%D0%B2%D0%B0%D0%BD%D1%81%D0%BA%D0%BE%D0%B5_%D1%8F%D0%B1%D0%BB%D0%BE%D0%BA%D0%BE"
          },
          "nutrition_facts": {
            "energy": 25,
            "carbohydrates": 5.7,
            "fat": 0.3,
            "protein": 0.6,
            "vitamins": ["A", "C"],
            "minerals": ["Calcium", "Iron"]
          },
          "properties": {
            "flavor": ["Sour"]
          }
        },
        {
          "id": "kirala",
          "name": {
            "en": "Kirala",
            "ru": "Кирала"
          },
          "description": {
            "en": "Kirala (Sonneratia caseolaris) or Mangrove Apple is a fruit that is endemic to the isle of Sri Lanka and is mostly grown near salt water bodies.  The Kirala tree grows quite tall with thin branches. The fruit is green coloured with a star shaped covering on the top, which once removed uncovers a reddish rim that contrasts with the green peel and the white flesh inside the fruit. Inside embedded in the flesh, there are many seeds and once ripened it cannot be stored at room temperature for more than a day as it perishes rapidly, becoming liable to insect damage. Most of the time the fruit is not plucked from the tree, but is awaited, till it drops from the tree after ripening.Even then one has to be very careful to ascertain that the fruit is not infected with insects and not left on the ground too long. However, the ripened ‘Kirala’ has a very delightful taste as a fruit and is used to make an even more delightful fruit drink that is rich in vitamins. It is also said that ‘Kirala’ is a very cooling drink that soothes the body and is also a good remedy for stomach related ailments.",
            "ru": "Кирала или Мангровое яблоко является эндемичным фруктом Шри - Ланки и чаще всего произрастает вблизи солёной воды. Обладает приятным освежающим вкусом, полезен для желудка."
          },
          "wiki": {
            "en": "http://en.wikipedia.org/wiki/Sonneratia_caseolaris",
            "ru": ""
          },
          "nutrition_facts": null,
          "properties": {
            "flavor": ["Sweet"]
          }
        },
        {
          "id": "kiwi",
          "name": {
            "en": "Kiwi",
            "ru": "Киви"
          },
          "description": {
            "en": "The kiwifruit or Chinese gooseberry, is the edible berry of a woody vine in the genus Actinidia.The most common cultivar group of kiwifruit ('Hayward') is oval, about the size of a large hen's egg (5–8 cm (2.0–3.1 in) in length and 4.5–5.5 cm (1.8–2.2 in) in diameter). It has a fibrous, dull greenish-brown skin and bright green or golden flesh with rows of tiny, black, edible seeds. The fruit has a soft texture and a sweet but unique flavor, and today is a commercial crop in several countries, such as Italy, New Zealand, Chile, Greece, and France.",
            "ru": "Киви — название плодов культурных сортов растений, принадлежащих к роду Актини́дия, виду Актини́дия кита́йская (лат. Actinidia chinensis) или Актинидия деликатесная (лат. Actinidia deliciosa). Сами растения представляют собой крупные древовидные лианы родом из Китая, поэтому киви иногда называют «китайским крыжовником»."
          },
          "wiki": {
            "en": "http://en.wikipedia.org/wiki/Kiwifruit",
            "ru": "https://ru.wikipedia.org/wiki/%D0%9A%D0%B8%D0%B2%D0%B8_(%D1%84%D1%80%D1%83%D0%BA%D1%82)"
          },
          "nutrition_facts": {
            "energy": 60,
            "carbohydrates": 14.66,
            "fat": 0.52,
            "protein": 1.14,
            "vitamins": ["C", "B5", "B9", "E", "K"],
            "minerals": ["Magnesium", "Manganese", "Phosphorus", "Potassium"]
          },
          "properties": {
            "flavor": ["Sour"]
          }
        },
        {
          "id": "lawulu",
          "name": {
            "en": "Lawulu",
            "ru": "Лавулу"
          },
          "description": {
            "en": "The canistel (Pouteria campechiana) is an evergreen tree native to southern Mexico and Central America. It is cultivated in other countries, such as Brazil, Taiwan, Vietnam and the Philippines for its fruit.The canistel grows up to 10 meters (33 ft) high, and produces orange-yellow fruit, also called yellow sapote, up to 7 centimeters (2.8 in) long, which are edible raw. Canistel flesh is sweet, with a texture often compared to that of a hard-boiled egg yolk, hence its colloquial name Eggfruit. It is closely related to the Mamey sapote and abiu.",
            "ru": "Канистел (лат. Pouteria campechiana) — плодовое дерево семейства Сапотовые.Канистел — вечнозелёное прямое дерево высотой, в основном, до 8 м, с коричневой корой, содержащей клейкий латекс. Листья глянцевые ланцетовидно-продолговатые, 11,25-28 см длиной и 4-7,5 см шириной. Плод может иметь различную форму и размер. Он может быть круглым, овальным или веретенообразным, с искривлённым клювом или без него, выпяченным на одной стороне. Его длина варьируется от 7,5 до 12,5 см, а ширина с 5 до 7,5 см. Недозрелый плод зелёного цвета, твёрдый и клейкий внутри. При созревании он становится лимонно-жёлтым или бледно-оранжево-жёлтым. Внутри содержится жёлтая, относительно крепкая и мучнистая мякоть с 1-4 крупными семенами."
          },
          "wiki": {
            "en": "http://en.wikipedia.org/wiki/Pouteria_campechiana",
            "ru": "http://ru.wikipedia.org/wiki/%D0%9A%D0%B0%D0%BD%D0%B8%D1%81%D1%82%D0%B5%D0%BB"
          },
          "nutrition_facts": {
            "energy": 138.8,
            "carbohydrates": 36.69,
            "fat": 0.13,
            "protein": 1.68,
            "vitamins": ["B1", "B3", "C"],
            "minerals": ["Iron", "Phosphorus"]
          },
          "properties": {
            "flavor": ["Sweet"]
          }
        },
        {
          "id": "lemon",
          "name": {
            "en": "Lemon",
            "ru": "Лемон"
          },
          "description": {
            "en": "The lemon (Citrus × limon) is a small evergreen tree native to Asia. The tree's ellipsoidal yellow fruit is used for culinary and non-culinary purposes throughout the world, primarily for its juice, though the pulp and rind (zest) are also used in cooking and baking. The juice of the lemon is about 5% to 6% citric acid, which gives lemons a sour taste. The distinctive sour taste of lemon juice makes it a key ingredient in drinks and foods such as lemonade and lemon meringue pie.",
            "ru": "Лимон (лат. Citrus limon) — вид небольших деревьев из рода Цитрус (Citrus) подтрибы Цитрусовые (Citreae) семейства Рутовые (Rutacea). Лимоном также называют плод этого растения."
          },
          "wiki": {
            "en": "http://en.wikipedia.org/wiki/Lemon",
            "ru": "https://ru.wikipedia.org/wiki/%D0%9B%D0%B8%D0%BC%D0%BE%D0%BD"
          },
          "nutrition_facts": {
            "energy": 29,
            "carbohydrates": 5.3,
            "fat": 0.3,
            "protein": 1.1,
            "vitamins": ["B6", "C"],
            "minerals": ["Iron"]
          },
          "properties": {
            "flavor": ["Sour"]
          }
        },
        {
          "id": "lime",
          "name": {
            "en": "Lime",
            "ru": "Лайм"
          },
          "description": {
            "en": "Lime (from Arabic and French lim) is a term referring to a citrus tree and its fruit which is typically round, green, 3–6 centimetres (1.2–2.4 in) in diameter, and containing sour (acidic) pulp. There are several species of citrus trees whose fruits are called limes, including the Key lime (Citrus aurantifolia), Persian lime, kaffir lime, and desert lime. Limes are an excellent source of vitamin C, and are often used to accent the flavours of foods and beverages. They are grown year-round in tropical climates and are usually smaller and less sour than lemons, although varieties may differ in sugar and acidic content.",
            "ru": "Лайм (лат. Citrus aurantiifolia) — вид цитрусовых растений семейства Рутовые (Rutaceae), происходящих из Индии, генетически схожий с лимоном.Название происходит от персидского лиму.В Средиземноморье проник во второй половине I тыс. н. э."
          },
          "wiki": {
            "en": "http://en.wikipedia.org/wiki/Lime_(fruit)",
            "ru": "https://ru.wikipedia.org/wiki/%D0%9B%D0%B0%D0%B9%D0%BC"
          },
          "nutrition_facts": {
            "energy": 30,
            "carbohydrates": 10.5,
            "fat": 0.2,
            "protein": 0.7,
            "vitamins": ["С"],
            "minerals": ["Iron"]
          },
          "properties": {
            "flavor": ["Sour"]
          }
        },
        {
          "id": "lovi",
          "name": {
            "en": "Lovi",
            "ru": "Лови (Батоко плам)"
          },
          "description": {
            "en": "Flacourtia inermis, known commonly as lovi-lovi, or batoko plum, is a species of flowering plant native to the Philippines, but which has naturalized in tropical Asia and Africa. This tree is very common in the South India;especially in Kerala where it is commonly known as loika or lavalolikka.",
            "ru": "атоко палм – очень интересное растение. Родом оно с Юго-Восточной Азии, с Филиппин, затем оно распространилось оттуда в Среднюю Азию и Африку, а потом – практически по всему тропическому миру. По вкусу напоминает гибрид сливы с черноплодной рябиной - сам плод размером с ранетку. Все ветви усыпаны плодами, - в одном плоде около десятка семян. Плоды очень сочные."
          },
          "wiki": {
            "en": "http://en.wikipedia.org/wiki/Flacourtia_inermis",
            "ru": ""
          },
          "nutrition_facts": null,
          "properties": {
            "flavor": ["Sweet", "Sour"]
          }
        },
        {
          "id": "mandarin",
          "name": {
            "en": "Mandarin",
            "ru": "Мандарин"
          },
          "description": {
            "en": "The mandarin orange (Citrus reticulata), also known as the mandarin or mandarine, is a small citrus tree with fruit resembling other oranges[citation needed]. Mandarin oranges are usually eaten plain or in fruit salads. Specifically reddish-orange mandarin cultivars can be marketed as tangerines, but this is not a botanical classification.The tree is more drought-tolerant than the fruit. The mandarin is tender and is damaged easily by cold. It can be grown in tropical and subtropical areas.",
            "ru": "Мандарин (лат. Citrus reticulata) — вечнозелёный кустарник, вид рода Цитрус (Citrus) семейства Рутовые (Rutaceae); это же слово обозначает плод данного кустарника.Слово «мандарин» заимствовано в русский язык из испанского языка (вероятно, через французский язык). Испанское название mandarino образовано от se mondar («легко очищаться») и содержит указание на свойство кожуры плода легко отделяться от мякоти."
          },
          "wiki": {
            "en": "http://en.wikipedia.org/wiki/Mandarin_orange",
            "ru": "https://ru.wikipedia.org/wiki/%D0%9C%D0%B0%D0%BD%D0%B4%D0%B0%D1%80%D0%B8%D0%BD"
          },
          "nutrition_facts": {
            "energy": 53,
            "carbohydrates": 13.34,
            "fat": 0.31,
            "protein": 0.81,
            "vitamins": ["B1", "B6", "C", "A"],
            "minerals": ["Copper", "Calcium"]
          },
          "properties": {
            "flavor": ["Sweet/Sour"]
          }
        },
        {
          "id": "mango",
          "name": {
            "en": "Mango",
            "ru": "Манго"
          },
          "description": {
            "en": "The mango is a juicy stone fruit belonging to the genus Mangifera, consisting of numerous tropical fruiting trees, cultivated mostly for edible fruit. The majority of these species are found in nature as wild mangoes. They all belong to the flowering plant family Anacardiaceae. The mango is native to South and Southeast Asia, from where it has been distributed worldwide to become one of the most cultivated fruits in the tropics. The highest concentration of Mangifera genus is in India.",
            "ru": "Манго — плоды манго индийского (Mangifera indica), растения рода Манго семейства Сумаховые. Плоды обладают волокнистой структурой и сладким вкусом, кожура окрашена в тона красного, зелёного или жёлтого цветов, у мякоти цвет жёлтый или оранжевый."
          },
          "wiki": {
            "en": "http://en.wikipedia.org/wiki/Mango",
            "ru": "https://ru.wikipedia.org/wiki/%D0%9C%D0%B0%D0%BD%D0%B3%D0%BE_(%D1%84%D1%80%D1%83%D0%BA%D1%82)"
          },
          "nutrition_facts": {
            "energy": 60,
            "carbohydrates": 15,
            "fat": 0.38,
            "protein": 0.82,
            "vitamins": ["A", "B6", "B9", "C", "E"],
            "minerals": ["Potassium"]
          },
          "properties": {
            "flavor": ["Sweet"]
          }
        },
        {
          "id": "mangosteen",
          "name": {
            "en": "Mangosteen",
            "ru": "Мангустин"
          },
          "description": {
            "en": "The purple mangosteen (Garcinia mangostana), colloquially known simply as mangosteen, is a tropical evergreen tree believed to have originated in the Sunda Islands and the Moluccas of Indonesia. It grows mainly in Southeast Asia, and also in tropical South American countries such as Colombia, in the state of Kerala in India and in Puerto Rico,[1][2] where the tree has been introduced. The tree grows from 6 to 25 m (19.7 to 82.0 ft) tall.[3] The fruit of the mangosteen is sweet and tangy, juicy, somewhat fibrous, with fluid-filled vesicles (like the flesh of citrus fruits), with an inedible, deep reddish-purple colored rind (exocarp) when ripe. In each fruit, the fragrant edible flesh that surrounds each seed is botanically endocarp, i.e., the inner layer of the ovary. Seeds are almond-shaped and sized.",
            "ru": "Мангостан или мангустин, также мангостин, гарциния, мангкут (лат. Garcinia mangostana) — плодовое дерево семейства Клузиевые, а также его плоды."
          },
          "wiki": {
            "en": "http://en.wikipedia.org/wiki/Purple_mangosteen",
            "ru": "https://ru.wikipedia.org/wiki/%D0%9C%D0%B0%D0%BD%D0%B3%D0%BE%D1%81%D1%82%D0%B0%D0%BD"
          },
          "nutrition_facts": {
            "energy": 73,
            "carbohydrates": 17.91,
            "fat": 0.58,
            "protein": 0.41,
            "vitamins": ["B1", "B2", "B9"],
            "minerals": ["Manganese"]
          },
          "properties": {
            "flavor": ["Sweet"]
          }
        },
        {
          "id": "naminan",
          "name": {
            "en": "Naminan",
            "ru": "Наминан"
          },
          "description": {
            "en": "Cynometra cauliflora, known in Indonesia (Maluku and Manado) as namu-namu (due to the flattened, crescent shaped pods, which look similar to the Indonesian pastry, namu-namu), Ternate namo-namo, this tree is a native of Malaysia, found mainly in northern Peninsular Malaysia.",
            "ru": "Местное название растения индон. Namnam. В русскоязычной литературе встречаются варианты написания «нам-нам» и «ням-ням». Небольшое вечнозелёное дерево или кустарник высотой 5—15 метров. Листья сложные, состоят из одной пары вытянуто-яйцевидных тупоконечных листочков длиной 5—16 см. Листовые пластинки тёмно-зелёные, блестящие, с цельным краем. Незрелые семена очень кислые, спелые имеют вкус от кислого до сладковатого."
          },
          "wiki": {
            "en": "http://en.wikipedia.org/wiki/Cynometra_cauliflora",
            "ru": "https://ru.wikipedia.org/wiki/%D0%A6%D0%B8%D0%BD%D0%BE%D0%BC%D0%B5%D1%82%D1%80%D0%B0_%D1%81%D1%82%D0%B2%D0%BE%D0%BB%D0%BE%D1%86%D0%B2%D0%B5%D1%82%D0%BD%D0%B0%D1%8F"
          },
          "nutrition_facts": null,
          "properties": {
            "flavor": ["Sweet", "Sour", "Bitter"]
          }
        },
        {
          "id": "nelli",
          "name": {
            "en": "Nelli",
            "ru": "Нелли"
          },
          "description": {
            "en": "The tree is small to medium in size, reaching 8 to 18 m in height, with a crooked trunk and spreading branches. The branchlets are glabrous or finely pubescent, 10–20 cm long, usually deciduous; the leaves are simple, subsessile and closely set along branchlets, light green, resembling pinnate leaves. The flowers are greenish-yellow. The fruit is nearly spherical, light greenish yellow, quite smooth and hard on appearance, with six vertical stripes or furrows.Ripening in autumn, the berries are harvested by hand after climbing to upper branches bearing the fruits. The taste of Indian gooseberry is sour, bitter and astringent, and it is quite fibrous. In India, it is common to eat gooseberries steeped in salt water and turmeric to make the sour fruits palatable",
            "ru": "Один из древнейших и известнейших фруктов в Азии. Тысячелетиями он употребляется в Аюрведе как средство омоложения организма, активизации жизненной энергии. Жители Цейлона с любовью называют растение Нелли. Красные или желто-зеленые фрукты внешне похожи на крыжовник. Они кислы на вкус и обладают вяжущим действием. Этим проявляется одно из важных свойств Нелли: фрукты обладают невероятно высоким содержанием витамина С ( ca. 500 – 1000mg/100g, то есть самым высоким среди известного нам растительного мира. Другой особенностью является длительное сохранение витамина С в организме, поэтому Phyllanthus emblica почитают также защитой от вирусов. Фрукты Нелли содержат специальный энзим SOD, имеющий омолаживающее действие на организм. Энзим SOD связывает свободные радикалы и ограничивает их разрушительное воздействие. Действие энзима особенно усиливается при сочетании с витамином С и минеральными элементами. Таким образом становится понятен широкий спектр действия Нелли и его употребление в восточной медицине в течение 5000 лет."
          },
          "wiki": {
            "en": "http://en.wikipedia.org/wiki/Phyllanthus_emblica",
            "ru": "https://ru.wikipedia.org/wiki/%D0%A4%D0%B8%D0%BB%D0%BB%D0%B0%D0%BD%D1%82%D1%83%D1%81_%D1%8D%D0%BC%D0%B1%D0%BB%D0%B8%D0%BA%D0%B0"
          },
          "nutrition_facts": {
            "energy": 44,
            "carbohydrates": "",
            "fat": "",
            "protein": "",
            "vitamins": ["C", "A", "B"],
            "minerals": ["Copper", "Calcium", "Phosphorus", "Manganese", "Magnesium", "Potassium"]
          },
          "properties": {
            "flavor": ["Sour", "Sweet"]
          }
        },
        {
          "id": "orange",
          "name": {
            "en": "Orange",
            "ru": "Апельсин"
          },
          "description": {
            "en": "The orange (specifically, the sweet orange) is the fruit of the citrus species Citrus × sinensis in the family Rutaceae. The fruit of the Citrus sinensis is considered a sweet orange, whereas the fruit of the Citrus aurantium is considered a bitter orange. The orange is a hybrid, possibly between pomelo (Citrus maxima) and mandarin (Citrus reticulata), which has been cultivated since ancient times.",
            "ru": "Апельси́н — плод апельсинового дерева (Citrus sinensis), которое представляет собой гибрид, возможно, мандарина (Citrus reticulata) и помело (Citrus maxima) и культивировалось в Китае ещё за 2,5 тысячи лет до н. э.В Европу дерево было привезено португальскими мореплавателями. После этого быстро распространилась мода на выращивание апельсиновых деревьев; для этого стали строить специальные стеклянные сооружения, названные оранжереями (от фр. orange ‘апельсин’). Теперь апельсиновые деревья растут по всему побережью Средиземного моря (а также — в Центральной Америке)."
          },
          "wiki": {
            "en": "http://en.wikipedia.org/wiki/Orange_(fruit)",
            "ru": "https://ru.wikipedia.org/wiki/%D0%90%D0%BF%D0%B5%D0%BB%D1%8C%D1%81%D0%B8%D0%BD"
          },
          "nutrition_facts": {
            "energy": 47,
            "carbohydrates": 11.75,
            "fat": 0.12,
            "protein": 0.94,
            "vitamins": ["B1", "B5", "B6", "B9", "C"],
            "minerals": ["Calcium", "Potassium"]
          },
          "properties": {
            "flavor": ["Sour", "Sweet"]
          }
        },
        {
          "id": "palm_fruit",
          "name": {
            "en": "Palm Fruit",
            "ru": "Пальмировая пальма"
          },
          "description": {
            "en": "Borassus flabellifer, the Asian palmyra palm, toddy palm, or sugar palm, is native to the Indian subcontinent and Southeast Asia, including Nepal, India, Bangladesh, Sri Lanka, Cambodia, Laos, Burma, Thailand, Vietnam, Malaysia, Indonesia and the Philippines. It is reportedly naturalized in Mauritania, Socotra, and parts of China. It is a palm tree, one of the sugar palm group.",
            "ru": "Пальмировая пальма, или Пальмира (лат. Borassus flabellifer) — древовидное растение семейства Пальмовые.Важное в экономическом отношении растение, с древних времён культивируемое в Индии и в Шри-Ланке."
          },
          "wiki": {
            "en": "http://en.wikipedia.org/wiki/Borassus_flabellifer",
            "ru": "https://ru.wikipedia.org/wiki/%D0%9F%D0%B0%D0%BB%D1%8C%D0%BC%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D1%8F_%D0%BF%D0%B0%D0%BB%D1%8C%D0%BC%D0%B0"
          },
          "nutrition_facts": {
            "energy": 43,
            "carbohydrates": 10.9,
            "fat": 0.1,
            "protein": 0.8,
            "vitamins": ["B3", "C"],
            "minerals": ["Calcium", "Phosphorous", " Iron"]
          },
          "properties": {
            "flavor": ["Bitter"]
          }
        },
        {
          "id": "papaya",
          "name": {
            "en": "Papaya",
            "ru": "Папайя"
          },
          "description": {
            "en": "The papaya is a large, tree-like plant, with a single stem growing from 5 to 10 m (16 to 33 ft) tall, with spirally arranged leaves confined to the top of the trunk. The lower trunk is conspicuously scarred where leaves and fruit were borne. The leaves are large, 50–70 cm (20–28 in) in diameter, deeply palmately lobed, with seven lobes. Unusually for such large plants, the trees are dioecious. The tree is usually unbranched, unless lopped. The flowers are similar in shape to the flowers of the Plumeria, but are much smaller and wax-like. They appear on the axils of the leaves, maturing into large fruit - 15–45 cm (5.9–17.7 in) long and 10–30 cm (3.9–11.8 in) in diameter. The fruit is ripe when it feels soft (as soft as a ripe avocado or a bit softer) and its skin has attained an amber to orange hue.",
            "ru": "Папайя, или дынное дерево (лат. Cárica papáya) — древесное растение; вид рода Карика (Carica) семейства Кариковые. Слово рарауа — латинизированное малабарское название растения."
          },
          "wiki": {
            "en": "http://en.wikipedia.org/wiki/Papaya",
            "ru": "http://ru.wikipedia.org/wiki/%D0%9F%D0%B0%D0%BF%D0%B0%D0%B9%D1%8F"
          },
          "nutrition_facts": {
            "energy": 43,
            "carbohydrates": 10.82,
            "fat": 0.26,
            "protein": 0.47,
            "vitamins": ["A", "B9", "C"],
            "minerals": ["Magnesium"]
          },
          "properties": {
            "flavor": ["Sweet"]
          }
        },
        {
          "id": "passion_fruit",
          "name": {
            "en": "Passion Fruit",
            "ru": "Маракуя"
          },
          "description": {
            "en": "Passiflora edulis is a vine species of passion flower that is native to Brazil, Paraguay and northern Argentina. Its common names include passion fruit (US), passionfruit (UK and Commonwealth), and purple granadilla (South Africa).It is cultivated commercially in tropical and subtropical areas for its sweet, seedy fruit and is widely grown in several countries of South America, Central America, the Caribbean, Africa, Southern Asia, Israel, Australia, Hawaii (Lilikoʻi)[1] and United States.",
            "ru": "Мараку́йя, или Страстоцвет съедобный, или Пассифлора съедобная, или Гранадилла пурпурная (лат. Passiflora edulis) — вечнозелёная тропическая лиана, вид растений из рода Страстоцвет (Passiflora) семейства Страстоцветные (Passifloraceae)."
          },
          "wiki": {
            "en": "http://en.wikipedia.org/wiki/Passiflora_edulis",
            "ru": "https://ru.wikipedia.org/wiki/%D0%9C%D0%B0%D1%80%D0%B0%D0%BA%D1%83%D0%B9%D1%8F"
          },
          "nutrition_facts": {
            "energy": 97,
            "carbohydrates": "",
            "fat": "",
            "protein": "",
            "vitamins": ["A", "B2", "B3", "B6", "C"],
            "minerals": ["Iron", "Magnesium", "Phosphorus", "Potassium"]
          },
          "properties": {
            "flavor": ["Sour", "Sweet"]
          }
        },
        {
          "id": "peanut",
          "name": {
            "en": "Peanut",
            "ru": "Арахис"
          },
          "description": {
            "en": "The peanut or groundnut (Arachis hypogaea) is a species in the family Fabaceae (commonly known as the bean, pea or legume family). The peanut was probably first domesticated and cultivated in the valleys of Paraguay. It is an annual herbaceous plant growing 30 to 50 cm (1.0 to 1.6 ft) tall. The leaves are opposite, pinnate with four leaflets (two opposite pairs; no terminal leaflet); each leaflet is 1 to 7 cm (⅜ to 2¾ in) long and 1 to 3 cm (⅜ to 1 inch) across.",
            "ru": "Арахисс культурный, или Арахис подземный, или Земляной орех (лат. Arāchis hypogaēa) — растение; вид рода Арахис семейства Бобовые (Fabaceae), важная сельскохозяйственная культура, возделываемая в промышленных масштабах ради плодов — арахисовых «орехов».Распространённое название растения «земляной орех» не народное, оно попало в русский язык как переводное из иностранных языков. С точки зрения ботаники называть арахис орехом неправильно. Он является бобовой травой."
          },
          "wiki": {
            "en": "http://en.wikipedia.org/wiki/Peanut",
            "ru": "https://ru.wikipedia.org/wiki/%D0%90%D1%80%D0%B0%D1%85%D0%B8%D1%81_%D0%BA%D1%83%D0%BB%D1%8C%D1%82%D1%83%D1%80%D0%BD%D1%8B%D0%B9"
          },
          "nutrition_facts": {
            "energy": 570,
            "carbohydrates": 21,
            "fat": 48,
            "protein": 25,
            "vitamins": ["B1", "B2", "B3", "B5", "B6", "B9", "E"],
            "minerals": ["Calcium", "Iron", "Magnesium", "Manganese", "Phosphorus", "Potassium", "Zinc"]
          },
          "properties": {
            "flavor": ["Sweet"]
          }
        },
        {
          "id": "pear",
          "name": {
            "en": "Pear",
            "ru": "Груша"
          },
          "description": {
            "en": "The pear is any of several tree and shrub species of genus Pyrus /ˈpaɪrəs/, in the family Rosaceae. It is also the name of the pomaceous fruit of these trees. Several species of pear are valued for their edible fruit, while others are cultivated as ornamental trees.",
            "ru": "Груша (лат. Pýrus) — род плодовых и декоративных деревьев и кустарников семейства Розовые (Rosaceae). Слово груша в русских письменных источниках встречается с XII века в форме хруша. В XVII веке вместо «груша» употреблялось слово «дуля», заимствованное из польского языка от dula."
          },
          "wiki": {
            "en": "http://en.wikipedia.org/wiki/Pear",
            "ru": "https://ru.wikipedia.org/wiki/%D0%93%D1%80%D1%83%D1%88%D0%B0"
          },
          "nutrition_facts": {
            "energy": 57,
            "carbohydrates": 15.23,
            "fat": 0.14,
            "protein": 0.36,
            "vitamins": ["С", "K"],
            "minerals": ["Phosphorus"]
          },
          "properties": {
            "flavor": ["Sweet"]
          }
        },
        {
          "id": "pineapple",
          "name": {
            "en": "Pineapple",
            "ru": "Ананас"
          },
          "description": {
            "en": "The pineapple (Ananas comosus) is a tropical plant with edible multiple fruit consisting of coalesced berries, and the most economically significant plant in the Bromeliaceae family. Pineapples may be cultivated from a crown cutting of the fruit, possibly flowering in 20–24 months and fruiting in the following six months. Pineapple does not ripen significantly post-harvest.",
            "ru": "Ананас настоящий — многолетнее травянистое растение, вид рода Ананас (Ananas) семейства Бромелиевые (Bromeliaceae). Ананас настоящий представлен в культуре многочисленным разнообразием сортов не только в Южной Америке, где растут представители рода Ананас, но и по всем тропическим странам всего земного шара."
          },
          "wiki": {
            "en": "http://en.wikipedia.org/wiki/Pineapple",
            "ru": "https://ru.wikipedia.org/wiki/%D0%90%D0%BD%D0%B0%D0%BD%D0%B0%D1%81_%D0%BA%D1%80%D1%83%D0%BF%D0%BD%D0%BE%D1%85%D0%BE%D1%85%D0%BE%D0%BB%D0%BA%D0%BE%D0%B2%D1%8B%D0%B9"
          },
          "nutrition_facts": {
            "energy": 50,
            "carbohydrates": 13.12,
            "fat": 0.12,
            "protein": 0.54,
            "vitamins": ["B1", "B6", "B9", "C"],
            "minerals": ["Manganese"]
          },
          "properties": {
            "flavor": ["Sour", "Sweet"]
          }
        },
        {
          "id": "pomegranate",
          "name": {
            "en": "Pomegranate",
            "ru": "Гранат"
          },
          "description": {
            "en": "The pomegranate, botanical name Punica granatum, is a fruit-bearing deciduous shrub or small tree growing between 5 and 8 m (16–26 ft) tall. In the Northern Hemisphere, the fruit is typically in season from September to February, and in the Southern Hemisphere from March to May. As intact arils or juice, pomegranates are used in cooking, baking, meal garnishes, juice blends, smoothies, and alcoholic beverages, such as cocktails and wine.",
            "ru": "Гранат обыкновенный (лат. Punica granatum) — вид растений из рода Гранат семейства Дербенниковые (Lythraceae). Родовое название лат. Punica «пуника» происходит от латинского слова лат. punicus — пунический, карфагенский, по широкому распространению растения в этой стране (современный Тунис). Видовое название лат. granátum происходит от лат. granatus — зернистый, по находящимся внутри плода многочисленным, окружённым сочным покровом семенам."
          },
          "wiki": {
            "en": "http://en.wikipedia.org/wiki/Pomegranate",
            "ru": "https://ru.wikipedia.org/wiki/%D0%93%D1%80%D0%B0%D0%BD%D0%B0%D1%82_%D0%BE%D0%B1%D1%8B%D0%BA%D0%BD%D0%BE%D0%B2%D0%B5%D0%BD%D0%BD%D1%8B%D0%B9"
          },
          "nutrition_facts": {
            "energy": 83,
            "carbohydrates": 18.7,
            "fat": 1.17,
            "protein": 1.67,
            "vitamins": ["B1", "B5", "B6", "B9", "C", "K"],
            "minerals": ["Manganese", "Phosphorus", "Potassium"]
          },
          "properties": {
            "flavor": ["Sweet"]
          }
        },
        {
          "id": "raisin",
          "name": {
            "en": "Raisin",
            "ru": "Изюм"
          },
          "description": {
            "en": "A raisin is a dried grape. Raisins are produced in many regions of the world and may be eaten raw or used in cooking, baking and brewing. In the United Kingdom, Ireland, New Zealand and Australia the word Raisin is reserved for the dark-coloured dried large grape, with Sultana being a golden-coloured dried grape, and Currant being a dried small Black Corinth grape.",
            "ru": "Изюм (от тюрк. Usum — виноград) — сушёные ягоды винограда. Как продукт имеет наибольшее кулинарное применение на Ближнем и Среднем Востоке, а также в Средиземноморье."
          },
          "wiki": {
            "en": "http://en.wikipedia.org/wiki/Raisin",
            "ru": "https://ru.wikipedia.org/wiki/%D0%98%D0%B7%D1%8E%D0%BC"
          },
          "nutrition_facts": {
            "energy": 299,
            "carbohydrates": 79.18,
            "fat": 0.46,
            "protein": 3.07,
            "vitamins": ["B1", "B2", "B3", "B6"],
            "minerals": ["Iron", "Magnesium", "Manganese", "Phosphorus", "Potassium"]
          },
          "properties": {
            "flavor": ["Sweet"]
          }
        },
        {
          "id": "rambutan",
          "name": {
            "en": "Rambutan",
            "ru": "Рамбутан"
          },
          "description": {
            "en": "The rambutan is a medium-sized tropical tree in the family Sapindaceae. The name also refers to the fruit produced by this tree. The rambutan is native to Malaysia and other regions of tropical Southeast Asia. It is closely related to several other edible tropical fruits including the lychee, longan, and mamoncillo.",
            "ru": "Рамбутан (лат. Nephelium lappaceum) — плодовое тропическое дерево семейства Сапиндовые, родом из Юго-Восточной Азии, культивируется во многих странах этого региона. Название растения произошло от индонезийского rambut, что в переводе означает «волос», из-за внешнего вида плодов."
          },
          "wiki": {
            "en": "http://en.wikipedia.org/wiki/Rambutan",
            "ru": "https://ru.wikipedia.org/wiki/%D0%A0%D0%B0%D0%BC%D0%B1%D1%83%D1%82%D0%B0%D0%BD"
          },
          "nutrition_facts": {
            "energy": 82,
            "carbohydrates": 20.87,
            "fat": 0.21,
            "protein": 0.65,
            "vitamins": ["B3", "C"],
            "minerals": ["Manganese"]
          },
          "properties": {
            "flavor": ["Sour", "Sweet"]
          }
        },
        {
          "id": "sapodilla",
          "name": {
            "en": "Sapodilla",
            "ru": "Саподилла"
          },
          "description": {
            "en": "Manilkara zapota, commonly known as the sapodilla, is a long-lived, evergreen tree native to southern Mexico, Central America and the Caribbean. An example natural occurrence is in coastal Yucatán in the Petenes mangroves ecoregion, where it is a subdominant plant species.It was introduced to the Philippines during Spanish colonization. It is grown in large quantities in India, Thailand, Malaysia, Cambodia, Indonesia, Bangladesh and Mexico.",
            "ru": "Саподилла, сапотилла: чику, сапотиловое дерево, масляное дерево, ахра (лат. Manilkara zapota) — плодовое дерево семейства Сапотовые. Саподилла — вечнозелёное медленнорастущее дерево с пирамидальной кроной, 18—30 м высотой. При повреждении коры оно обильно выделяет белый клейкий латекс."
          },
          "wiki": {
            "en": "http://en.wikipedia.org/wiki/Manilkara_zapota",
            "ru": "https://ru.wikipedia.org/wiki/%D0%A1%D0%B0%D0%BF%D0%BE%D0%B4%D0%B8%D0%BB%D0%BB%D0%B0"
          },
          "nutrition_facts": {
            "energy": 83,
            "carbohydrates": 19.96,
            "fat": 1.1,
            "protein": 0.44,
            "vitamins": ["B5", "C"],
            "minerals": ["Iron"]
          },
          "properties": {
            "flavor": ["Sweet"]
          }
        },
        {
          "id": "silver_melon",
          "name": {
            "en": "Silver Melon",
            "ru": "Серебрянная Дыня"
          },
          "description": {
            "en": "A melon is any of various plants of the family Cucurbitaceae with edible, fleshy fruit. The word Melon can refer to either the plant or specifically to the fruit. Many different cultivars have been produced, particularly of muskmelons. Although the melon is a botanical fruit (specifically, a berry), some varieties may be considered vegetables rather than fruits. ",
            "ru": "Дыня (лат. Cucumis melo) — растение семейства Тыквенные (Cucurbitaceae), вид рода Огурец (Cucumis), бахчевая культура. Родиной дыни считается Средняя Азия и Малая Азия. Дыня тепло- и светолюбивое растение, устойчивое к засолению почвы и засухе, плохо переносит повышенную влажность воздуха. На одном растении в зависимости от сорта и места возделывания может сформироваться от двух до восьми плодов, массой от 1,5 до 10 кг. Плод дыни — тыквина — имеет шаровидную или цилиндрическую форму, зелёной, жёлтой, коричневой или белой окраски, как правило с зелёными полосками. Период вызревания от двух до шести месяцев."
          },
          "wiki": {
            "en": "http://en.wikipedia.org/wiki/Melon",
            "ru": "https://ru.wikipedia.org/wiki/%D0%94%D1%8B%D0%BD%D1%8F"
          },
          "nutrition_facts": {
            "energy": 34,
            "carbohydrates": 8,
            "fat": 0.2,
            "protein": 0.8,
            "vitamins": ["A", "C", "B6"],
            "minerals": ["Potassium"]
          },
          "properties": {
            "flavor": ["Sweet"]
          }
        },
        {
          "id": "sour_orange",
          "name": {
            "en": "Sour Orange",
            "ru": "Кислый Апельсин"
          },
          "description": {
            "en": "Green orange (Citrus reticulata × maxima)is a citrus hybrid originating in Vietnam. The fruit is more akin to a mandarin or tangerine. The fruit may be easily recognized by its thick skin, which is typically bright green, although the skin may also be partly green and partly orange, or entirely orange. Its flesh is orange, dark and sweet.",
            "ru": "Свежие плоды имеют слишком кислый вкус, иногда с горечью, из-за чего не могут употребляться в свежем виде, но высоко ценятся для изготовления мармелада, приправ и ликеров. Листья, цветки и плоды являются лучшим источником бигарадиевого масла, применяемого в парфюмерии.Произошел из Юго-Восточной Азии, в диком состоянии неизвестен. В Средиземноморье завезен арабами в XI в., за пять столетий до интродукции сладкого апельсина. Широко разводится в тропических и субтропических странах, является основным подвоем цитрусовых.Деревья в высоту до 10 м; черешки ширококрылые; цветки крупные, душистые, обоеполые, частично функционально мужские. Плоды почти круглые, кожура толстая с грубоватой поверхностью; ароматные; часто ярко-оранжево-красные при созревании; мякоть очень кислая или горькая; семена многочисленные, полиэмбриональные, нуцеллярные зародыши встречаются в 75-85% семян. Основной гликозид — аурантамарин."
          },
          "wiki": {
            "en": "https://en.wikipedia.org/wiki/Bergamot_orange",
            "ru": "https://ru.wikipedia.org/wiki/%D0%91%D0%B5%D1%80%D0%B3%D0%B0%D0%BC%D0%BE%D1%82"
          },
          "nutrition_facts": {
            "energy": 14,
            "carbohydrates": 4.8,
            "fat": 0.12,
            "protein": 0.18,
            "vitamins": ["E", "C"],
            "minerals": ["Potassium", "Magnesium", "Calcium", "Phosphorus"]
          },
          "properties": {
            "flavor": ["Sour", "Bitter"]
          }
        },
        {
          "id": "sour_guava",
          "name": {
            "en": "Sour Guava",
            "ru": "Кислая Гуава"
          },
          "description": {
            "en": "Guavas (singular guava) are common tropical fruits cultivated and enjoyed in many tropical and subtropical regions. Psidium guajava (common guava, lemon guava) is a small tree in the Myrtle family (Myrtaceae), native to Mexico, Central America, and northern South America. Although related species may also be called guavas, they actually belong to other genera, such as the Strawberry guava Acca sellowiana.",
            "ru": "Гуава (лат. Psidium) — род растений семейства Миртовые, включает в себя около 100 видов. Ареал гуавы — тропики. Родина рода — Америка, от тропических районов Мексики до северной части Южной Америки. Однако, некоторые виды были интродуцированы в Африку, Индию, Юго-Восточную Азию и Океанию."
          },
          "wiki": {
            "en": "http://en.wikipedia.org/wiki/Guava",
            "ru": "https://ru.wikipedia.org/wiki/%D0%9F%D1%81%D0%B8%D0%B4%D0%B8%D1%83%D0%BC"
          },
          "nutrition_facts": {
            "energy": 68,
            "carbohydrates": 14.32,
            "fat": 0.95,
            "protein": 2.55,
            "vitamins": ["С", "B1", "B3", "B5", "B6", "B9"],
            "minerals": ["Magnesium", "Manganese", "Phosphorus", "Potassium"]
          },
          "properties": {
            "flavor": ["Sour"]
          }
        },
        {
          "id": "soursop_annona",
          "name": {
            "en": "Soursop Annona",
            "ru": "Аннона"
          },
          "description": {
            "en": "Soursop is the fruit of Annona muricata, a broadleaf, flowering, evergreen tree native to Mexico, Cuba, Central America, the Caribbean, and northern South America, primarily Colombia, Brazil, Peru, Ecuador, Venezuela, and Puerto Rico. Soursop is also produced in some parts of Africa, especially in Eastern Nigeria, Southeast Asia and the Pacific. It is in the same genus as the chirimoya and the same family as the pawpaw.",
            "ru": "Аннона (лат. Annona) — обширный род двудольных цветковых растений, входящее в семейство Анноновые (Annonaceae). Все виды рода — деревья и кустарники. Несколько видов аннон культивируются ради их съедобных плодов. Различные части многих видов аннон используются в традиционной медицине для лечения разных заболеваний."
          },
          "wiki": {
            "en": "http://en.wikipedia.org/wiki/Soursop",
            "ru": "https://ru.wikipedia.org/wiki/%D0%90%D0%BD%D0%BD%D0%BE%D0%BD%D0%B0"
          },
          "nutrition_facts": {
            "energy": 66,
            "carbohydrates": 16.84,
            "fat": 0.3,
            "protein": 1,
            "vitamins": ["B1", "B2", "B3", "B5", "B6", "C"],
            "minerals": ["Iron", "Magnesium", "Potassium"]
          },
          "properties": {
            "flavor": ["Sour", "Sweet"]
          }
        },
        {
          "id": "starfruit",
          "name": {
            "en": "Starfruit",
            "ru": "Карамбола"
          },
          "description": {
            "en": "Carambola, also known as starfruit, is the fruit of Averrhoa carambola, a species of tree native to the Philippines, Indonesia, Malaysia, India, Bangladesh and Sri Lanka. The fruit is popular throughout Southeast Asia, the South Pacific and parts of East Asia. The tree is also cultivated throughout non-indigenous tropical areas, such as in Latin America, the Caribbean, and the southern United States.",
            "ru": "Карамбола (лат. Averrhoa carambola) — Вечнозелёное дерево семейства Кисличные, произрастающее на Шри-Ланке, в Индии и Индонезии, а ныне также распространённое в Южной и Юго-Восточной Азии. В настоящее время акклиматизировано в Бразилии, Гане, Гвиане, Французской Полинезии, США (в штатах Флорида, Гавайи), Израиле."
          },
          "wiki": {
            "en": "http://en.wikipedia.org/wiki/Carambola",
            "ru": "https://ru.wikipedia.org/wiki/%D0%9A%D0%B0%D1%80%D0%B0%D0%BC%D0%B1%D0%BE%D0%BB%D0%B0"
          },
          "nutrition_facts": {
            "energy": 31,
            "carbohydrates": 6.73,
            "fat": 0.33,
            "protein": 1.04,
            "vitamins": ["B5", "С"],
            "minerals": ["Magnesium"]
          },
          "properties": {
            "flavor": ["Sour"]
          }
        },
        {
          "id": "strawberry",
          "name": {
            "en": "Strawberry",
            "ru": "Клубника"
          },
          "description": {
            "en": "The garden strawberry (or simply strawberry ; Fragaria × ananassa) is a widely grown hybrid species of the genus Fragaria (collectively known as the strawberries). It is cultivated worldwide for its fruit. The fruit (which is not a botanical berry, but an aggregate accessory fruit) is widely appreciated for its characteristic aroma, bright red color, juicy texture, and sweetness. It is consumed in large quantities, either fresh or in such prepared foods as preserves, fruit juice, pies, ice creams, milkshakes, and chocolates. Artificial strawberry flavoring is also widely used in many products like hand sanitizers, lip gloss, perfume, and many others.",
            "ru": "Земляника садовая — многолетнее травянистое растение рода Земляника семейства Розовые. Это растение и его ягоды нередко, в том числе в научно-популярной литературе, ошибочно называют клубникой либо викторией, хотя словом клубника правильнее именовать другие виды того же рода — клубнику настоящую (Fragaria moschata) и клубнику луговую (Fragaria viridis), при этом также ошибочно называя Земляникой садовой культурные разновидности земляники лесной (альпийской, ремонтантной)."
          },
          "wiki": {
            "en": "http://en.wikipedia.org/wiki/Strawberry",
            "ru": "https://ru.wikipedia.org/wiki/%D0%97%D0%B5%D0%BC%D0%BB%D1%8F%D0%BD%D0%B8%D0%BA%D0%B0_%D0%B0%D0%BD%D0%B0%D0%BD%D0%B0%D1%81%D0%BD%D0%B0%D1%8F"
          },
          "nutrition_facts": {
            "energy": 33,
            "carbohydrates": 7.68,
            "fat": 0.3,
            "protein": 0.67,
            "vitamins": ["C", "B9"],
            "minerals": ["Manganese", "Magnesium"]
          },
          "properties": {
            "flavor": ["Sweet"]
          }
        },
        {
          "id": "sugar_cane",
          "name": {
            "en": "Sugar Cane",
            "ru": "Сахарный тросник"
          },
          "description": {
            "en": "Sugarcane is one of the several species of tall perennial true grasses of the genus Saccharum, tribe Andropogoneae, native to the warm temperate to tropical regions of South Asia, and used for sugar production.They have stout jointed fibrous stalks that are rich in sugar, and measure two to six metres (6 to 19 feet) tall. All sugar cane species interbreed and the major commercial cultivars are complex hybrids.",
            "ru": "Сахарный тростник культивируемый, или Сахарный тростник благородный — вид растений рода Сахарный тростник (Saccharum) семейства Злаки. Используется человеком, наряду с сахарной свёклой, для получения сахара."
          },
          "wiki": {
            "en": "http://en.wikipedia.org/wiki/Sugarcane",
            "ru": "http://ru.wikipedia.org/wiki/%D0%A1%D0%B0%D1%85%D0%B0%D1%80%D0%BD%D1%8B%D0%B9_%D1%82%D1%80%D0%BE%D1%81%D1%82%D0%BD%D0%B8%D0%BA"
          },
          "nutrition_facts": {
            "energy": 26.56,
            "carbohydrates": 27.51,
            "fat": 0,
            "protein": 0.27,
            "vitamins": ["B2"],
            "minerals": ["Iron", "Potassium"]
          },
          "properties": {
            "flavor": ["Sweet"]
          }
        },
        {
          "id": "coconut",
          "name": {
            "en": "Coconut",
            "ru": "Кокос"
          },
          "description": {
            "en": "The Coconut tree (Cocos nucifera) is a member of the family Arecaceae (palm family). It is the only accepted species in the genus Cocos. The term Coconut can refer to the entire coconut palm, the seed, or the fruit, which, botanically, is a drupe, not a nut. The spelling cocoanut is an archaic form of the word. The term is derived from 16th-century Portuguese and Spanish coco, meaning Head or Skull,from the three indentations on the coconut shell that resemble facial features.",
            "ru": "Кокосовая пальма — растение семейства Пальмовые (Арековые); единственный вид рода Cocos. Научное название рода происходит от португальского слова coco (обезьяна) и дано из-за пятен на орехе, которые делают его похожим на морду обезьяны. Видовое название nucífera — от латинских слова nux (орех) и ferre (нести)."
          },
          "wiki": {
            "en": "http://en.wikipedia.org/wiki/Coconut",
            "ru": "https://ru.wikipedia.org/wiki/%D0%9A%D0%BE%D0%BA%D0%BE%D1%81%D0%BE%D0%B2%D0%B0%D1%8F_%D0%BF%D0%B0%D0%BB%D1%8C%D0%BC%D0%B0"
          },
          "nutrition_facts": {
            "energy": 354,
            "carbohydrates": 24.23,
            "fat": 33.49,
            "protein": 3.33,
            "vitamins": ["B1", "B3", "B5", "B6", "C"],
            "minerals": ["Iron", "Magnesium", "Phosphorus", "Potassium", "Zinc"]
          },
          "properties": {
            "flavor": ["Sweet"]
          }
        },
        {
          "id": "sweet_melon",
          "name": {
            "en": "Sweet Melon",
            "ru": "Сладкая Дыня"
          },
          "description": {
            "en": "A melon is any of various plants of the family Cucurbitaceae with edible, fleshy fruit. The word Melon can refer to either the plant or specifically to the fruit. Many different cultivars have been produced, particularly of muskmelons. Although the melon is a botanical fruit (specifically, a berry), some varieties may be considered vegetables rather than fruits. ",
            "ru": "Дыня (лат. Cucumis melo) — растение семейства Тыквенные (Cucurbitaceae), вид рода Огурец (Cucumis), бахчевая культура. Родиной дыни считается Средняя Азия и Малая Азия. Дыня тепло- и светолюбивое растение, устойчивое к засолению почвы и засухе, плохо переносит повышенную влажность воздуха. На одном растении в зависимости от сорта и места возделывания может сформироваться от двух до восьми плодов, массой от 1,5 до 10 кг. Плод дыни — тыквина — имеет шаровидную или цилиндрическую форму, зелёной, жёлтой, коричневой или белой окраски, как правило с зелёными полосками. Период вызревания от двух до шести месяцев."
          },
          "wiki": {
            "en": "http://en.wikipedia.org/wiki/Melon",
            "ru": "https://ru.wikipedia.org/wiki/%D0%94%D1%8B%D0%BD%D1%8F"
          },
          "nutrition_facts": {
            "energy": 34,
            "carbohydrates": 8,
            "fat": 0.2,
            "protein": 0.8,
            "vitamins": ["A", "C", "B6"],
            "minerals": ["Potassium"]
          },
          "properties": {
            "flavor": ["Sweet"]
          }
        },
        {
          "id": "tamarind",
          "name": {
            "en": "Tamarind",
            "ru": "Тамаринд"
          },
          "description": {
            "en": "Tamarind (Tamarindus indica) (from Arabic Indian date) is a leguminous tree in the family Fabaceae indigenous to tropical Africa. The genus Tamarindus is a monotypic taxon, having only a single species. The tamarind tree produces edible, pod-like fruit which are used extensively in cuisines around the world. Other uses include traditional medicine and metal polish. The wood can be used in carpentry. Because of the tamarind's many uses, cultivation has spread around the world in tropical and subtropical zones.",
            "ru": "Тамаринд индийский, или Индийский финик (лат. Tamaríndus índica) — растение семейства Бобовые (Fabaceae), единственный вид рода Тамаринд. Это тропическое дерево, родиной которого является восточная Африка, в том числе сухие лиственные леса Мадагаскара. В диком виде произрастает в Судане, но в настоящее время растение распространено на территории большинства тропических стран Азии, куда он попал благодаря культивированию ещё за несколько тысяч лет до нашей эры. В XVI веке интродуцирован в Мексике и в Южной Америке. Культивируется в тропиках всех континентов"
          },
          "wiki": {
            "en": "http://en.wikipedia.org/wiki/Tamarind",
            "ru": "https://ru.wikipedia.org/wiki/%D0%A2%D0%B0%D0%BC%D0%B0%D1%80%D0%B8%D0%BD%D0%B4"
          },
          "nutrition_facts": {
            "energy": 239,
            "carbohydrates": 62.5,
            "fat": 0.6,
            "protein": 2.8,
            "vitamins": ["B1", "B2", "B3", "B6"],
            "minerals": ["Calcium", "Iron", "Magnesium", "Phosphorus", "Potassium"]
          },
          "properties": {
            "flavor": ["Sweet", "Salt"]
          }
        },
        {
          "id": "tomato",
          "name": {
            "en": "Tomato",
            "ru": "Томат"
          },
          "description": {
            "en": "The tomato is the edible, often red fruit/berry of the nightshade Solanum lycopersicum, commonly known as a tomato plant. The species originated in the South American Andes and its use as a food originated in Mexico, and spread throughout the world following the Spanish colonization of the Americas. Its many varieties are now widely grown, sometimes in greenhouses in cooler climates..",
            "ru": "Томат (лат. Solanum lycopersicum) — однолетнее или многолетнее травянистое растение, вид рода Паслён (Solanum) семейства Паслёновые. Возделывается как овощная культура. Плод томата (ягода) в разговорной речи называется помидор."
          },
          "wiki": {
            "en": "http://en.wikipedia.org/wiki/Tomato",
            "ru": "https://ru.wikipedia.org/wiki/%D0%A2%D0%BE%D0%BC%D0%B0%D1%82"
          },
          "nutrition_facts": {
            "energy": 18,
            "carbohydrates": 3.9,
            "fat": 0.2,
            "protein": 0.9,
            "vitamins": ["A", "B6", "C", "K"],
            "minerals": ["Manganese", "Potassium"]
          },
          "properties": {
            "flavor": ["Sweet", "Sour"]
          }
        },
        {
          "id": "veralu",
          "name": {
            "en": "Veralu",
            "ru": "Вералу"
          },
          "description": {
            "en": "This is a tropical fruit found in the Indian Subcontinent, Indo-China and South East Asia. It is an ornamental medium sized tree indigenous to Sri Lanka, producing smooth, ovoid green fruits. The fruit has nutritive and medicinal values.",
            "ru": "Тропический фрукт, произрастающий на территории Индии, Индо-Китая и Восточной Азии. Имеет большое значение в питании и мадицине. На Шри Ланке называется Цейлонскими оливками. "
          },
          "wiki": {
            "en": "http://en.wikipedia.org/wiki/Elaeocarpus_serratus",
            "ru": ""
          },
          "nutrition_facts": {
            "energy": "",
            "carbohydrates": "",
            "fat": "",
            "protein": "",
            "vitamins": [],
            "minerals": ["Iron"]
          },
          "properties": {
            "flavor": ["Sour"]
          }
        },
        {
          "id": "watermelon",
          "name": {
            "en": "Watermelon",
            "ru": "Арбуз"
          },
          "description": {
            "en": "Watermelon (Citrullus lanatus var. lanatus, family Cucurbitaceae) is a vine-like (scrambler and trailer) flowering plant originally from southern Africa. It is a large, sprawling annual plant with coarse, hairy pinnately-lobed leaves and white to yellow flowers. It is grown for its edible fruit, also known as a watermelon, which is a special kind of berry referred to by botanists as a pepo. The fruit has a smooth hard rind, usually green with dark green stripes or yellow spots, and a juicy, sweet interior flesh, usually deep red to pink, but sometimes orange, yellow, or white, with many seeds.",
            "ru": "Арбуз обыкновенный  — однолетнее травянистое растение, вид рода Арбуз (Citrullus) семейства Тыквенные (Cucurbitaceae). Бахчевая культура. Плод — тыквина, шаровидной, овальной, уплощённой или цилиндрической формы; окраска коры от белой и жёлтой до тёмно-зелёной с рисунком в виде сетки, полос, пятен; мякоть розовая, красная, малиновая, реже — белая и жёлтая. Тыквина морфологически (по строению) схожа с ягодой."
          },
          "wiki": {
            "en": "http://en.wikipedia.org/wiki/Watermelon",
            "ru": "https://ru.wikipedia.org/wiki/%D0%90%D1%80%D0%B1%D1%83%D0%B7_%D0%BE%D0%B1%D1%8B%D0%BA%D0%BD%D0%BE%D0%B2%D0%B5%D0%BD%D0%BD%D1%8B%D0%B9"
          },
          "nutrition_facts": {
            "energy": 30,
            "carbohydrates": 7.55,
            "fat": 0.15,
            "protein": 0.61,
            "vitamins": ["С", "A", "B5"],
            "minerals": ["Magnesium"]
          },
          "properties": {
            "flavor": ["Sweet"]
          }
        },
        {
          "id": "woodapple",
          "name": {
            "en": "Woodapple",
            "ru": "Деревянное Яблоко"
          },
          "description": {
            "en": "Limonia acidissima (syn. Feronia elephantum, Feronia limonia, Hesperethusa crenulata,[1] Schinus limonia) is the only species within the monotypic genus Limonia. It is native in the Indomalaya ecozone to Bangladesh, India, Pakistan, Sri Lanka, and in Indochinese ecoregion east to Java and the Malesia ecoregion. Vernacular names in English include: wood-apple, elephant-apple, monkey fruit, and curd fruit; and listed below are the variety of common names in the languages of its native habitat regions.",
            "ru": "Деревянное яблоко или Ферония лимонная (лат. Limonia acidissima, ранее — Feronia limonia) — плодовое дерево семейства Рутовые.Мякоть деревянного яблока съедобна. Для того, чтобы употребить её в пищу, нужно предварительно разбить киркой древесную оболочку плода."
          },
          "wiki": {
            "en": "http://en.wikipedia.org/wiki/Limonia_acidissima",
            "ru": "https://ru.wikipedia.org/wiki/%D0%94%D0%B5%D1%80%D0%B5%D0%B2%D1%8F%D0%BD%D0%BD%D0%BE%D0%B5_%D1%8F%D0%B1%D0%BB%D0%BE%D0%BA%D0%BE"
          },
          "nutrition_facts": {
            "energy": 140,
            "carbohydrates": 18,
            "fat": 4,
            "protein": 7,
            "vitamins": ["C", "E"],
            "minerals": ["Calcium", "Phosphorous"]
          },
          "properties": {
            "flavor": ["Sour", "Sweet"]
          }
        },
        {
          "id": "avocado",
          "name": {
            "en": "Avocado",
            "ru": "Авокадо"
          },
          "description": {
            "en": "The avocado (Persea americana) is a tree native to Mexico and Central America, classified in the flowering plant family Lauraceae along with cinnamon, camphor and bay laurel. Avocado or alligator pear also refers to the fruit, botanically a large berry that contains a single seed.",
            "ru": "Авокадо - вечнозелёное плодовое растение. Плоды растения также называются авокадо, их мякоть богата витаминами и важными минеральными веществами."
          },
          "wiki": {
            "en": "https://en.wikipedia.org/wiki/Avocado",
            "ru": "https://ru.wikipedia.org/wiki/%D0%90%D0%B2%D0%BE%D0%BA%D0%B0%D0%B4%D0%BE"
          },
          "nutrition_facts": {
            "energy": 160,
            "carbohydrates": 8.53,
            "fat": 14.66,
            "protein": 2,
            "vitamins": ["B1", "B2", "B3", "B5", "B6", "B9", "C", "E", "K"],
            "minerals": ["Magnesium", "Manganese", "Phosphorus", "Potassium", "Zinc"]
          },
          "properties": {
            "flavor": ["Sweet"]
          }
        },
        {
          "id": "uguressa",
          "name": {
            "en": "Uguressa",
            "ru": "Флакуртия"
          },
          "description": {
            "en": "Flacourtia indica (syn. Flacourtia ramontchi), known commonly as ramontchi, governor’s plum, batoko plum, and Indian plum, is a species of flowering plant native to much of Africa and tropical and temperate parts of Asia. The Ramontchi fruit itself is a pome about an inch thick and red ripening purple. It is very fleshy and has 6 to 10 seeds in layered carpels. The pulp is yellow or white and sweet with an acidic tang.",
            "ru": "Флакуртия вид растений из рода Флакуртия (Flacourtia) семейства Ивовые (Salicaceae), произрастающий в Африке, тропических и субтропических областях Азии. Культивируется как плодовое растение. Плоды округлые, диаметром 8—10 мм с блестящей коричневато-фиолетовой кожицей и плотной сочной мякотью, ароматной, кисло-сладкого вкуса. Содержат 5—6 плоских бежевого цвета семян, расположенных звездообразно вокруг центра плода."
          },
          "wiki": {
            "en": "http://en.wikipedia.org/wiki/Flacourtia_indica",
            "ru": "http://ru.wikipedia.org/wiki/%D0%A4%D0%BB%D0%B0%D0%BA%D1%83%D1%80%D1%82%D0%B8%D1%8F_%D0%B8%D0%BD%D0%B4%D0%B8%D0%B9%D1%81%D0%BA%D0%B0%D1%8F"
          },
          "nutrition_facts": null,
          "properties": {
            "flavor": ["Sour", "Sweet"]
          }
        },
        {
          "id": "coffee",
          "name": {
            "en": "Coffee",
            "ru": "Кофе"
          },
          "description": {
            "en": "Coffee is a brewed drink with a distinct aroma and flavor, prepared from roasted coffee beans, the seeds found inside \"berries\" of the Coffea plant.",
            "ru": "Кофе — напиток, изготавливаемый из жареных семян (зёрен) нескольких видов растений, относящихся к роду Кофе (Coffea) семейства Мареновые (Rubiaceae)."
          },
          "wiki": {
            "en": "http://en.wikipedia.org/wiki/Coffee",
            "ru": "https://ru.wikipedia.org/wiki/%D0%9A%D0%BE%D1%84%D0%B5"
          },
          "nutrition_facts": null,
          "properties": {
            "flavor": ["Sweet", "Bitter"]
          }
        },
        {
          "id": "young_coconut",
          "name": {
            "en": "Young coconut",
            "ru": "Молодой кокос"
          },
          "description": {
            "en": "The Coconut tree (Cocos nucifera) is a member of the family Arecaceae (palm family). It is the only accepted species in the genus Cocos. The term Coconut can refer to the entire coconut palm, the seed, or the fruit, which, botanically, is a drupe, not a nut. The spelling cocoanut is an archaic form of the word. The term is derived from 16th-century Portuguese and Spanish coco, meaning Head or Skull,from the three indentations on the coconut shell that resemble facial features.",
            "ru": "Кокосовая пальма — растение семейства Пальмовые (Арековые); единственный вид рода Cocos. Научное название рода происходит от португальского слова coco (обезьяна) и дано из-за пятен на орехе, которые делают его похожим на морду обезьяны. Видовое название nucífera — от латинских слова nux (орех) и ferre (нести)."
          },
          "wiki": {
            "en": "http://en.wikipedia.org/wiki/Coconut",
            "ru": "https://ru.wikipedia.org/wiki/%D0%9A%D0%BE%D0%BA%D0%BE%D1%81%D0%BE%D0%B2%D0%B0%D1%8F_%D0%BF%D0%B0%D0%BB%D1%8C%D0%BC%D0%B0"
          },
          "nutrition_facts": {
            "energy": 354,
            "carbohydrates": 24.23,
            "fat": 33.49,
            "protein": 3.33,
            "vitamins": ["B1", "B3", "B5", "B6", "C"],
            "minerals": ["Iron", "Magnesium", "Phosphorus", "Potassium", "Zinc"]
          },
          "properties": {
            "flavor": ["Sweet"]
          }
        },
        {
          "id": "king_coconut",
          "name": {
            "en": "King coconut",
            "ru": "Королевский кокос"
          },
          "description": {
            "en": "King coconut is a type of coconut fruit cultivated in Sri Lanka where it is known as Thembili. It is sweeter than regular coconuts.",
            "ru": "На Шри-Ланке растет так называемый королевский кокос. В отличие от обычного, имеет ярко-оранжевые плоды. Считается, что невероятно хорошо утоляет жажду, добавляет энергии и помогает от похмелья."
          },
          "wiki": {
            "en": "http://en.wikipedia.org/wiki/King_coconut",
            "ru": ""
          },
          "nutrition_facts": null,
          "properties": {
            "flavor": ["Sweet"]
          }
        },
        {
          "id": "lettuce",
          "name": {
            "en": "Lettuce",
            "ru": "Салат Латук"
          },
          "description": {
            "en": "Lettuce (Lactuca sativa) is an annual plant of the daisy family Asteraceae. It is most often grown as a leaf vegetable, but sometimes for its stem and seeds.",
            "ru": "Латук посевной (лат. Lactuca sativa), или Салат латук — вид однолетних травянистых растений рода Латук семейства Астровые (Asteraceae)."
          },
          "wiki": {
            "en": "http://en.wikipedia.org/wiki/Lettuce",
            "ru": "https://ru.wikipedia.org/wiki/%D0%9B%D0%B0%D1%82%D1%83%D0%BA_%D0%BF%D0%BE%D1%81%D0%B5%D0%B2%D0%BD%D0%BE%D0%B9"
          },
          "nutrition_facts": {
            "energy": 13,
            "carbohydrates": 2.23,
            "fat": 0.22,
            "protein": 1.35,
            "vitamins": ["A", "B1", "B2", "B5", "B6", "B9", "K"],
            "minerals": ["Iron", "Manganese"]
          },
          "properties": {
            "flavor": ["Sweet"]
          }
        },
        {
          "id": "cinnamon",
          "name": {
            "en": "Cinnamon",
            "ru": "Корица"
          },
          "description": {
            "en": "Cinnamon is the name for perhaps a dozen species of trees and the commercial spice products that some of them produce. All are members of the genus Cinnamomum in the family Lauraceae. Only a few of them are grown commercially for spice.",
            "ru": "Корица (Cinnamomum verum) — небольшое вечнозеленое дерево высотой 10-15 м, которое относится к семейству лавровых (Lauraceae)."
          },
          "wiki": {
            "en": "http://en.wikipedia.org/wiki/Cinnamon",
            "ru": "https://ru.wikipedia.org/wiki/%D0%9A%D0%BE%D1%80%D0%B8%D1%86%D0%B0_%28%D0%BF%D1%80%D1%8F%D0%BD%D0%BE%D1%81%D1%82%D1%8C%29"
          },
          "nutrition_facts": null,
          "properties": {
            "flavor": ["Sweet"]
          }
        },
        {
          "id": "rose_syrup",
          "name": {
            "en": "Rose Syrup",
            "ru": "Розовая вода"
          },
          "description": {
            "en": "Rose water is a flavoured water made by steeping rose petals in water. It is the hydrosol portion of the distillate of rose petals, a by-product of the production of rose oil for use in perfume. It is used to flavour food, as a component in some cosmetic and medical preparations, and for religious purposes throughout Europe and Asia. Rose syrup is made from rose water, with sugar added.",
            "ru": "Розовая вода (Розы гидролат) — водный раствор компонентов эфирного масла розы; косметическо-ароматическое средство с ярко выраженным запахом розы. Розовая вода получается путем водной дистилляции из эфиромасличных сортов роз ('Rose Edouard' и других) и является побочным продуктом при производстве розового масла."
          },
          "wiki": {
            "en": "http://en.wikipedia.org/wiki/Rose_water",
            "ru": "https://ru.wikipedia.org/wiki/%D0%A0%D0%BE%D0%B7%D0%BE%D0%B2%D0%B0%D1%8F_%D0%B2%D0%BE%D0%B4%D0%B0"
          },
          "nutrition_facts": null,
          "properties": {
            "flavor": ["Sweet"]
          }
        },
        {
          "id": "sarsaparilla",
          "name": {
            "en": "Sarsaparilla",
            "ru": "Сарсапарилла"
          },
          "description": {
            "en": "Indian sarsaparilla is a species of plant that is found in South Asia. It is a slender, laticiferous, twining, sometimes prostrate or semi-erect shrub. Roots are woody and aromatic. The stem is numerous, slender, terete, thickened at the nodes.",
            "ru": "Сарсапарилла - это тропическая многолетняя стелющаяся по земле лоза, цепляющаяся посредством усиков. Сарсапарилла используется как антивоспалительное и кровеочистительное средство, при лечении болезней печени, ревматизме, подагре, как улучшающий регенерацию при лечении кожных заболеваний и даже таких как псориаз, герпес, для улучшения процесса пищеварения, в качестве мочегонного, потогонного средства, при мочекаменной болезни и половой слабости."
          },
          "wiki": {
            "en": "http://en.wikipedia.org/wiki/Hemidesmus_indicus",
            "ru": ""
          },
          "nutrition_facts": null,
          "properties": {
            "flavor": ["Sweet"]
          }
        },
        {
          "id": "welpenela",
          "name": {
            "en": "Welpenela",
            "ru": "Велпенела"
          },
          "description": {
            "en": "Cardiospermum is a genus of approximately 14 species in the soapberry family, Sapindaceae, which are native to the American, Indian, and African tropics.",
            "ru": "Кардиоспермум (лат. Cardiospermum) — род двудольных цветковых растений, включённый в семейство Сапиндовые (Sapindaceae)."
          },
          "wiki": {
            "en": "http://en.wikipedia.org/wiki/Cardiospermum",
            "ru": "https://ru.wikipedia.org/wiki/%D0%9A%D0%B0%D1%80%D0%B4%D0%B8%D0%BE%D1%81%D0%BF%D0%B5%D1%80%D0%BC%D1%83%D0%BC"
          },
          "nutrition_facts": null,
          "properties": {
            "flavor": ["Sweet"]
          }
        },
        {
          "id": "dang",
          "name": {
            "en": "Dang",
            "ru": "Данг"
          },
          "description": {
            "en": "",
            "ru": ""
          },
          "wiki": {
            "en": "",
            "ru": ""
          },
          "nutrition_facts": null,
          "properties": {
            "flavor": ["Sweet"]
          }
        },
        {
          "id": "fresh_milk",
          "name": {
            "en": "Milk",
            "ru": "Молоко"
          },
          "description": {
            "en": "",
            "ru": ""
          },
          "wiki": {
            "en": "",
            "ru": ""
          },
          "nutrition_facts": null,
          "properties": {
            "flavor": null
          }
        },
        {
          "id": "bee_honey",
          "name": {
            "en": "Honey",
            "ru": "Мёд"
          },
          "description": {
            "en": "Honey is a sweet food made by bees using nectar from flowers. The variety produced by honey bees (the genus Apis) is the one most commonly referred to, as it is the type of honey collected by most beekeepers and consumed by people.",
            "ru": "Мёд пчелиный — продукт, представляющий собой частично переваренный в зобе медоносной пчелы (Apis mellifera) нектар. Мёд содержит 13—22 % воды, 75—80 % углеводов (глюкоза, фруктоза, сахароза), витамины В1, В2, В6, Е, К, С, провитамин А-каротин, фолиевую кислоту."
          },
          "wiki": {
            "en": "https://en.wikipedia.org/wiki/Honey",
            "ru": "https://ru.wikipedia.org/wiki/%D0%9C%D1%91%D0%B4"
          },
          "nutrition_facts": null,
          "properties": {
            "flavor": ["Sweet"]
          }
        },
        {
          "id": "chocolate",
          "name": {
            "en": "Chocolate",
            "ru": "Шоколад"
          },
          "description": {
            "en": "Chocolate is a typically sweet, usually brown, food preparation of Theobroma cacao seeds, roasted and ground, often flavored, as with vanilla. It is made in the form of a liquid, paste or in a block or used as a flavoring ingredient in other sweet foods.",
            "ru": "Шоколад — кондитерское изделие на основе масла какао, которое является продуктом переработки какао-бобов — семян шоколадного дерева, богатых теобромином и кофеином."
          },
          "wiki": {
            "en": "https://en.wikipedia.org/wiki/Chocolate",
            "ru": "https://ru.wikipedia.org/wiki/%D0%A8%D0%BE%D0%BA%D0%BE%D0%BB%D0%B0%D0%B4"
          },
          "nutrition_facts": null,
          "properties": {
            "flavor": ["Sweet"]
          }
        },
        {
          "id": "yogurt",
          "name": {
            "en": "Yogurt",
            "ru": "Йогурт"
          },
          "description": {
            "en": "Yogurt, yoghurt, or yoghourt is a food produced by bacterial fermentation of milk.",
            "ru": "Йогурт — кисломолочный продукт с повышенным содержанием обезжиренных веществ молока, изготовляемый путём сквашивания протосимбиотической смесью чистых культур Lactobacillus bulgaricus (болгарская палочка) и Streptococcus thermophilus (термофильный стрептококк)."
          },
          "wiki": {
            "en": "https://en.wikipedia.org/wiki/Yogurt",
            "ru": "https://ru.wikipedia.org/wiki/%D0%99%D0%BE%D0%B3%D1%83%D1%80%D1%82"
          },
          "nutrition_facts": null,
          "properties": {
            "flavor": ["Sweet"]
          }
        },
        {
          "id": "ice",
          "name": {
            "en": "Ice",
            "ru": "Лед"
          },
          "description": {
            "en": "",
            "ru": ""
          },
          "wiki": {
            "en": "",
            "ru": ""
          },
          "nutrition_facts": null,
          "properties": {
            "flavor": null
          }
        },
        {
          "id": "faluda",
          "name": {
            "en": "Faluda",
            "ru": "Фалуда"
          },
          "description": {
            "en": "Falooda (also Faluda), is a cold beverage popular in Indian subcontinent. Traditionally it is made from mixing rose syrup, vermicelli, psyllium (ispaghol) or basil (sabza/takmaria) seeds, tapioca pearls and pieces of gelatin with milk or water.",
            "ru": ""
          },
          "wiki": {
            "en": "http://en.wikipedia.org/wiki/Falooda",
            "ru": ""
          },
          "nutrition_facts": null,
          "properties": {
            "flavor": ["Sweet"]
          }
        },
        {
          "id": "soda",
          "name": {
            "en": "Soda",
            "ru": "Содовая"
          },
          "description": {
            "en": "Carbonated water (also known as club soda, soda water, sparkling water, seltzer water, or fizzy water) is water into which carbon dioxide gas under pressure has been dissolved.",
            "ru": "Газированная вода (устар. «шипучие воды», просторечное — «газировка») — прохладительный напиток из минеральной или обычной ароматизированной воды, насыщенной углекислым газом."
          },
          "wiki": {
            "en": "http://en.wikipedia.org/wiki/Carbonated_water",
            "ru": "https://ru.wikipedia.org/wiki/%D0%93%D0%B0%D0%B7%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D0%B0%D1%8F_%D0%B2%D0%BE%D0%B4%D0%B0"
          },
          "nutrition_facts": null,
          "properties": {
            "flavor": null
          }
        },
        {
          "id": "mint",
          "name": {
            "en": "Mint",
            "ru": "Мята"
          },
          "description": {
            "en": "Mentha (also known as mint, from Greek mintha, Linear B mi-ta) is a genus of plants in the family Lamiaceae (mint family). The species are not clearly distinct and estimates of the number of species varies from 13 to 18.",
            "ru": "Мята (лат. Mentha) — род растений семейства Яснотковые. Все виды сильно ароматичны, большинство из них содержит много ментола."
          },
          "wiki": {
            "en": "https://en.wikipedia.org/wiki/Mentha",
            "ru": "https://ru.wikipedia.org/wiki/%D0%9C%D1%8F%D1%82%D0%B0"
          },
          "nutrition_facts": null,
          "properties": {
            "flavor": null
          }
        },
        {
          "id": "curd",
          "name": {
            "en": "Buffalo curd",
            "ru": "Буйволиный творог"
          },
          "description": {
            "en": "Buffalo curd is a traditional type of yogurt prepared from buffalo milk. It is popular throughout south Asian countries such as India, Pakistan, Sri Lanka, Nepal, etc.",
            "ru": ""
          },
          "wiki": {
            "en": "https://en.wikipedia.org/wiki/Buffalo_curd",
            "ru": ""
          },
          "nutrition_facts": null,
          "properties": {
            "flavor": null
          }
        }
      ];

		/**
		 * Retrieves all ingredients
		 * @returns {promise}
		 */
		self.getAll = function () {
			var deferred = $q.defer();
			deferred.resolve(ingredients);
			return deferred.promise;
		};

		/**
		 * Retrieves ingredient by id
		 * @returns {promise}
		 */
		self.getOne = function (id) {
			var deferred = $q.defer();
			deferred.resolve($filter('filter')(ingredients, {id: id})[0]);
			return deferred.promise;
		}
	});