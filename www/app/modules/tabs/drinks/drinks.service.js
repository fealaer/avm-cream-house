'use strict';

angular.module('avm.tabs.drinks')
	.service('drinksService', function ($q, $filter, ratingService) {
		var self = this;
		var initialised = false;

		var drinks = [
			{
				"id": "almond",
				"name": {
					"en": "Almond Juice",
					"ru": "Сок из Миндаля"
				},
				"properties": {
					"density": "liquid",
					"flavor": ["sweet"]
				},
				"ingredients": ["almond"]
			},
			{
				"id": "ambarella",
				"name": {
					"en": "Ambarella Juice",
					"ru": "Сок из Амбареллы"
				},
				"properties": {
					"density": "liquid",
					"flavor": [""]
				},
				"ingredients": ["ambarella"]
			},
			{
				"id": "apple",
				"name": {
					"en": "Apple Juice",
					"ru": "Сок из Яблок"
				},
				"properties": {
					"density": "liquid",
					"flavor": ["sweet"]
				},
				"ingredients": ["apple"]
			},
			{
				"id": "apricot",
				"name": {
					"en": "Apricot Juice",
					"ru": "Сок из Абрикоса"
				},
				"propeties": {
					"density": "thick",
					"flavor": ["sweet"]
				},
				"ingredients": ["apricot"]
			},
			{
				"id": "baeli_fruit",
				"name": {
					"en": "Baeli Fruit Juice",
					"ru": "Сок из Баиля"
				},
				"propeties": {
					"density": "thick",
					"flavor": ["sweet"]
				},
				"ingredients": ["baeli_fruit"]
			},
			{
				"id": "banana",
				"name": {
					"en": "Banana Juice",
					"ru": "Сок из Банана"
				},
				"properties": {
					"density": "thick",
					"flavor": ["sweet"]
				},
				"ingredients": ["banana"]
			},
			{
				"id": "beetroot",
				"name": {
					"en": "Beetroot Juice",
					"ru": "Сок из Свеклы"
				},
				"properties": {
					"density": "liquid",
					"flavor": ["sweet"]
				},
				"ingredients": ["beetroot"]
			},
			{
				"id": "bitter_gourd",
				"name": {
					"en": "Bitter Gourd Juice",
					"ru": "Сок из Горького огурца"
				},
				"propeties": {
					"density": "liquid",
					"flavor": ["bitter"]
				},
				"ingredients": ["bitter_gourd"]
			},
			{
				"id": "cantaloupe",
				"name": {
					"en": "Cantaloupe Juice",
					"ru": "Сок из Канталупы"
				},
				"propeties": {
					"density": "liquid",
					"flavor": ["sweet"]
				},
				"ingredients": ["cantaloupe"]
			},
			{
				"id": "carrot",
				"name": {
					"en": "Carrot Juice",
					"ru": "Сок из Моркови"
				},
				"propeties": {
					"density": "liquid",
					"flavor": ["sweet"]
				},
				"ingredients": ["carrot"]
			},
			{
				"id": "cashew_apple",
				"name": {
					"en": "Cashew Fruit Juice",
					"ru": "Сок из Яблока Кешью"
				},
				"propeties": {
					"density": "liquid",
					"flavor": ["sweet"]
				},
				"ingredients": ["cashew_apple"]
			},
			{
				"id": "cashew_nut",
				"name": {
					"en": "Сashew Nut Drink",
					"ru": "Напиток с Кешью"
				},
				"propeties": {
					"density": "thick",
					"flavor": ["sweet"]
				},
				"ingredients": ["cashew_nut"]
			},
			{
				"id": "cocoa_fruit",
				"name": {
					"en": "Cocoa Fruit Juice",
					"ru": "Сок из Какао"
				},
				"propeties": {
					"density": "liquid",
					"flavor": ["sour", "sweet"]
				},
				"ingredients": ["cocoa_fruit"]
			},

			{
				"id": "cucumber",
				"name": {
					"en": "Cucumber Juice",
					"ru": "Сок из Огурца"
				},
				"propeties": {
					"density": "liquid",
					"flavor": ["sweet"]
				},
				"ingredients": ["cucumber"]
			},
			{
				"id": "curry_leaf",
				"name": {
					"en": "Curry leaf Juice",
					"ru": "Сок из Листьев Карри"
				},
				"propeties": {
					"density": "",
					"flavor": [""]
				},
				"ingredients": ["curry_leaf"]
			},
			{
				"id": "custard_apple",
				"name": {
					"en": "Custard Apple Juice",
					"ru": "Сок из Черимойи"
				},
				"propeties": {
					"density": "thick",
					"flavor": ["sour", "sweet"]
				},
				"ingredients": ["custard_apple"]
			},
			{
				"id": "dates",
				"name": {
					"en": "Dates Juice",
					"ru": "Сок из Фиников"
				},
				"propeties": {
					"density": "thick",
					"flavor": ["sweet"]
				},
				"ingredients": ["dates"]
			},
			{
				"id": "dragon_fruit",
				"name": {
					"en": "Dragon Fruit Juice",
					"ru": "Сок из Питайи"
				},
				"propeties": {
					"density": "liquid",
					"flavor": ["sour", "sweet"]
				},
				"ingredients": ["dragon_fruit"]
			},
			{
				"id": "durian",
				"name": {
					"en": "Durian Juice",
					"ru": "Сок из Дуриана"
				},
				"propeties": {
					"density": "thick",
					"flavor": ["sweet"]
				},
				"ingredients": ["durian"]
			},
			{
				"id": "fig",
				"name": {
					"en": "Fig Juice",
					"ru": "Сок из Инжира"
				},
				"propeties": {
					"density": "liquid",
					"flavor": ["sweet"]
				},
				"ingredients": ["fig"]
			},
			{
				"id": "ginger",
				"name": {
					"en": "Ginger Juice",
					"ru": "Сок из Имбиря"
				},
				"propeties": {
					"density": "liquid",
					"flavor": ["burning"]
				},
				"ingredients": ["ginger"]
			},
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! Start here !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

			{
				"id": "gotukola",
				"name": {
					"en": "Gotukola Juice",
					"ru": "Сок из Центеллы"
				},
				"propeties": {
					"density": "",
					"flavor": [""]
				},
				"ingredients": ["gotukola"]
			},
			{
				"id": "grapefruit",
				"name": {
					"en": "Grapefruit Juice",
					"ru": "Сок из Грейпфрута"
				},
				"propeties": {
					"density": "",
					"flavor": [""]
				},
				"ingredients": ["grapefruit"]
			},
			{
				"id": "grapes",
				"name": {
					"en": "Grapes Juice",
					"ru": "Сок из Винограда"
				},
				"propeties": {
					"density": "",
					"flavor": [""]
				},
				"ingredients": ["grapes"]
			},
			{
				"id": "guava",
				"name": {
					"en": "Guava Juice",
					"ru": "Сок из Гуавы"
				},
				"properties": {
					"density": "thick",
					"flavor": ["sour"]
				},
				"ingredients": ["guava"]
			},
			{
				"id": "jackfruit",
				"name": {
					"en": "Jackfruit Juice",
					"ru": "Сок из Джекфрута"
				},
				"propeties": {
					"density": "",
					"flavor": [""]
				},
				"ingredients": ["jackfruit"]
			},
			{
				"id": "jambu",
				"name": {
					"en": "Jambu Juice",
					"ru": "Сок из Джамбу"
				},
				"propeties": {
					"density": "",
					"flavor": [""]
				},
				"ingredients": ["jambu"]
			},
			{
				"id": "kirala",
				"name": {
					"en": "Kirala Juice",
					"ru": "Сок из Киралы"
				},
				"propeties": {
					"density": "",
					"flavor": [""]
				},
				"ingredients": ["kirala"]
			},
			{
				"id": "kiwi",
				"name": {
					"en": "Kiwi Juice",
					"ru": "Сок из Киви"
				},
				"properties": {
					"density": "",
					"flavor": [""]
				},
				"ingredients": ["kiwi"]
			},
			{
				"id": "lawulu",
				"name": {
					"en": "Lawulu Juice",
					"ru": "Сок из Лавулу"
				},
				"propeties": {
					"density": "",
					"flavor": [""]
				},
				"ingredients": ["lawulu"]
			},
			{
				"id": "lemon",
				"name": {
					"en": "Lemon Juice",
					"ru": "Сок из Лемона"
				},
				"properties": {
					"density": "",
					"flavor": [""]
				},
				"ingredients": ["lemon"]
			},
			{
				"id": "lime",
				"name": {
					"en": "Lime Juice",
					"ru": "Сок из Лайма"
				},
				"properties": {
					"density": "",
					"flavor": [""]
				},
				"ingredients": ["lime"]
			},
			{
				"id": "lovi",
				"name": {
					"en": "Lovi Juice",
					"ru": "Сок из Лови"
				},
				"propeties": {
					"density": "",
					"flavor": [""]
				},
				"ingredients": ["lovi"]
			},
			{
				"id": "mandarin",
				"name": {
					"en": "Mandarin Juice",
					"ru": "Сок из Мандарина"
				},
				"propeties": {
					"density": "",
					"flavor": [""]
				},
				"ingredients": ["mandarin"]
			},
			{
				"id": "mango",
				"name": {
					"en": "Mango Juice",
					"ru": "Сок из Манго"
				},
				"properties": {
					"density": "",
					"flavor": [""]
				},
				"ingredients": ["mango"]
			},
			{
				"id": "mangosteen",
				"name": {
					"en": "Мangosteen Juice",
					"ru": "Сок из Мангустина"
				},
				"propeties": {
					"density": "",
					"flavor": [""]
				},
				"ingredients": ["mangosteen"]
			},
			{
				"id": "naminan",
				"name": {
					"en": "Naminan Juice",
					"ru": "Сок из Наминана"
				},
				"propeties": {
					"density": "",
					"flavor": [""]
				},
				"ingredients": ["naminan"]
			},
			{
				"id": "nelli",
				"name": {
					"en": "Nelli Juice",
					"ru": "Сок из Нелли"
				},
				"propeties": {
					"density": "",
					"flavor": [""]
				},
				"ingredients": ["nelli"]
			},
			{
				"id": "orange",
				"name": {
					"en": "Orange Juice",
					"ru": "Апельсиновый сок"
				},
				"properties": {
					"density": "",
					"flavor": [""]
				},
				"ingredients": ["orange"]
			},
			{
				"id": "palm_fruit",
				"name": {
					"en": "Palm fruit Juice",
					"ru": "Сок из Пальмировой пальмы"
				},
				"propeties": {
					"density": "",
					"flavor": [""]
				},
				"ingredients": ["palm_fruit"]
			},
			{
				"id": "papaya",
				"name": {
					"en": "Papaya Juice",
					"ru": "Сок из Папайи"
				},
				"properties": {
					"density": "",
					"flavor": [""]
				},
				"ingredients": ["papaya"]
			},
			{
				"id": "passion_fruit",
				"name": {
					"en": "Passion Fruit Juice",
					"ru": "Сок из Маракуи"
				},
				"properties": {
					"density": "",
					"flavor": [""]
				},
				"ingredients": ["passion_fruit"]
			},
			{
				"id": "peach",
				"name": {
					"en": "Peach Juice",
					"ru": "Сок из Персика"
				},
				"propeties": {
					"density": "",
					"flavor": [""]
				},
				"ingredients": ["peach"]
			},
			{
				"id": "peanut",
				"name": {
					"en": "Peanut Juice",
					"ru": "Сок из Арахиса"
				},
				"propeties": {
					"density": "",
					"flavor": [""]
				},
				"ingredients": ["peanut"]
			},
			{
				"id": "pear",
				"name": {
					"en": "Pear Juice",
					"ru": "Сок из Груши"
				},
				"propeties": {
					"density": "",
					"flavor": [""]
				},
				"ingredients": ["pear"]
			},
			{
				"id": "pineapple",
				"name": {
					"en": "Pineapple Juice",
					"ru": "Сок из Ананаса"
				},
				"propeties": {
					"density": "",
					"flavor": [""]
				},
				"ingredients": ["pineapple"]
			},
			{
				"id": "pomegranate",
				"name": {
					"en": "Pomegranate Juice",
					"ru": "Сок из Граната"
				},
				"propeties": {
					"density": "",
					"flavor": [""]
				},
				"ingredients": ["pomegranate"]
			},
			{
				"id": "raisin",
				"name": {
					"en": "Raisin Juice",
					"ru": "Сок из Изюма"
				},
				"propeties": {
					"density": "",
					"flavor": [""]
				},
				"ingredients": ["raisin"]
			},
			{
				"id": "rambutan",
				"name": {
					"en": "Rambutan Juice",
					"ru": "Сок из Рамбутана"
				},
				"propeties": {
					"density": "",
					"flavor": [""]
				},
				"ingredients": ["rambutan"]
			},
			{
				"id": "sapodilla",
				"name": {
					"en": "Sapodilla Juice",
					"ru": "Сок из Саподиллы"
				},
				"propeties": {
					"density": "",
					"flavor": [""]
				},
				"ingredients": ["sapodilla"]
			},
			{
				"id": "silver_melon",
				"name": {
					"en": "Silver Melon Juice",
					"ru": "Сок из Серебрянной Дыни"
				},
				"propeties": {
					"density": "",
					"flavor": [""]
				},
				"ingredients": ["silver_melon"]
			},
			{
				"id": "sour_orange",
				"name": {
					"en": "Sour Orange Juice",
					"ru": "Сок из Кислого Апельсина"
				},
				"propeties": {
					"density": "",
					"flavor": [""]
				},
				"ingredients": ["sour_orange"]
			},
			{
				"id": "sour_guava",
				"name": {
					"en": "Sour Guava Juice",
					"ru": "Сок из Кислой Гуавы"
				},
				"propeties": {
					"density": "",
					"flavor": [""]
				},
				"ingredients": ["sour_guava"]
			},
			{
				"id": "soursop_annona",
				"name": {
					"en": "Soursop Annona Juice",
					"ru": "Сок из Анноны"
				},
				"propeties": {
					"density": "",
					"flavor": [""]
				},
				"ingredients": ["soursop_annona"]
			},
			{
				"id": "starfruit",
				"name": {
					"en": "Starfruit Juice",
					"ru": "Сок из Карамболи"
				},
				"propeties": {
					"density": "",
					"flavor": [""]
				},
				"ingredients": ["starfruit"]
			},
			{
				"id": "strawberry",
				"name": {
					"en": "Strawberry Juice",
					"ru": "Сок из Клубники"
				},
				"propeties": {
					"density": "",
					"flavor": [""]
				},
				"ingredients": ["strawberry"]
			},
			{
				"id": "sugar_cane",
				"name": {
					"en": "Sugar Cane Juice",
					"ru": "Сок из Сахарного тросника"
				},
				"propeties": {
					"density": "",
					"flavor": [""]
				},
				"ingredients": ["sugar_cane"]
			},
			{
				"id": "sweet_coconut",
				"name": {
					"en": "Sweet Coconut Juice",
					"ru": "Сок из Сладкого Кокоса"
				},
				"propeties": {
					"density": "",
					"flavor": [""]
				},
				"ingredients": ["sweet_coconut"]
			},
			{
				"id": "sweet_melon",
				"name": {
					"en": "Sweet Melon Juice",
					"ru": "Сок из Сладкой Дыни"
				},
				"propeties": {
					"density": "",
					"flavor": [""]
				},
				"ingredients": ["sweet_melon"]
			},
			{
				"id": "tamarind",
				"name": {
					"en": "Tamarind Juice",
					"ru": "Сок из Тамаринда"
				},
				"propeties": {
					"density": "",
					"flavor": [""]
				},
				"ingredients": ["tamarind"]
			},
			{
				"id": "tangerine",
				"name": {
					"en": "Tangerine Juice",
					"ru": "Сок из Тангерина"
				},
				"propeties": {
					"density": "",
					"flavor": [""]
				},
				"ingredients": ["tangerine"]
			},
			{
				"id": "tomato",
				"name": {
					"en": "Tomato Juice",
					"ru": "Сок из Помидоров"
				},
				"propeties": {
					"density": "",
					"flavor": [""]
				},
				"ingredients": ["tomato"]
			},
			{
				"id": "veralu",
				"name": {
					"en": "Veralu Juice",
					"ru": "Сок из Вералу"
				},
				"propeties": {
					"density": "",
					"flavor": [""]
				},
				"ingredients": ["veralu"]
			},
			{
				"id": "watermelon",
				"name": {
					"en": "Watermelon Juice",
					"ru": "Сок из Арбуза"
				},
				"properties": {
					"density": "",
					"flavor": [""]
				},
				"ingredients": ["watermelon"]
			},
			{
				"id": "woodapple",
				"name": {
					"en": "Woodapple Juice",
					"ru": "Сок из Деревянного Яблока"
				},
				"propeties": {
					"density": "",
					"flavor": [""]
				},
				"ingredients": ["woodapple"]
			}
		];

		self.init = function () {
			if (!initialised) {
				ratingService.getAll().then(function (ratings) {
					_.merge(drinks, ratings);
					initialised = true;
				});
			}
		};

		/**
		 * Retrieves all drinks
		 * @returns {promise}
		 */
		self.getAll = function () {
			self.init();
			var deferred = $q.defer();
			deferred.resolve(drinks);
			return deferred.promise;
		};

		/**
		 * Retrieves drink by id
		 * @returns {promise}
		 */
		self.getOne = function (id) {
			self.init();
			var deferred = $q.defer();
			deferred.resolve($filter('filter')(drinks, {id: id})[0]);
			return deferred.promise;
		}
	});