'use strict';

angular.module('avm.components')
	.service('drinksService', function ($q, $filter, ratingService, userService) {
		var self = this;
		var initialised = false;

		var drinks = [
			{
				"id": "almond",
				"name": {
					"en": "Almond Drink",
					"ru": "Напиток с Миндалем"
				},
				"properties": {
					"density": "Liquid",
					"flavor": ["Sweet"]
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
					"density": "Liquid",
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
					"density": "Liquid",
					"flavor": ["Sweet"]
				},
				"ingredients": ["apple"]
			},
			{
				"id": "baeli_fruit",
				"name": {
					"en": "Baeli Fruit Juice",
					"ru": "Сок из Баиля"
				},
				"properties": {
					"density": "Creamy",
					"flavor": ["Sweet"]
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
					"density": "Creamy",
					"flavor": ["Sweet"]
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
					"density": "Liquid",
					"flavor": ["Sweet"]
				},
				"ingredients": ["beetroot"]
			},
			{
				"id": "bitter_gourd",
				"name": {
					"en": "Bitter Gourd Juice",
					"ru": "Сок из Горького огурца"
				},
				"properties": {
					"density": "Liquid",
					"flavor": ["Bitter"]
				},
				"ingredients": ["bitter_gourd"]
			},
			{
				"id": "cantaloupe",
				"name": {
					"en": "Cantaloupe Juice",
					"ru": "Сок из Канталупы"
				},
				"properties": {
					"density": "Liquid",
					"flavor": ["Sweet"]
				},
				"ingredients": ["cantaloupe"]
			},
			{
				"id": "carrot",
				"name": {
					"en": "Carrot Juice",
					"ru": "Сок из Моркови"
				},
				"properties": {
					"density": "Liquid",
					"flavor": ["Sweet"]
				},
				"ingredients": ["carrot"]
			},
			{
				"id": "cashew_apple",
				"name": {
					"en": "Cashew Fruit Juice",
					"ru": "Сок из Яблока Кешью"
				},
				"properties": {
					"density": "Liquid",
					"flavor": ["Sweet"]
				},
				"ingredients": ["cashew_apple"]
			},
			{
				"id": "cashew_nut",
				"name": {
					"en": "Cashew Nut Drink",
					"ru": "Напиток с Кешью"
				},
				"properties": {
					"density": "Creamy",
					"flavor": ["Sweet"]
				},
				"ingredients": ["cashew_nut"]
			},
			{
				"id": "cocoa_fruit",
				"name": {
					"en": "Cocoa Fruit Juice",
					"ru": "Сок из Какао"
				},
				"properties": {
					"density": "Liquid",
					"flavor": ["Sour", "Sweet"]
				},
				"ingredients": ["cocoa_fruit"]
			},

			{
				"id": "cucumber",
				"name": {
					"en": "Cucumber Juice",
					"ru": "Сок из Огурца"
				},
				"properties": {
					"density": "Liquid",
					"flavor": ["Sweet"]
				},
				"ingredients": ["cucumber"]
			},
			{
				"id": "curry_leaf",
				"name": {
					"en": "Curry leaf Juice",
					"ru": "Сок из Листьев Карри"
				},
				"properties": {
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
				"properties": {
					"density": "Creamy",
					"flavor": ["Sour", "Sweet"]
				},
				"ingredients": ["custard_apple"]
			},
			{
				"id": "dates",
				"name": {
					"en": "Dates Juice",
					"ru": "Сок из Фиников"
				},
				"properties": {
					"density": "Creamy",
					"flavor": ["Sweet"]
				},
				"ingredients": ["dates"]
			},
			{
				"id": "dragon_fruit",
				"name": {
					"en": "Dragon Fruit Juice",
					"ru": "Сок из Питайи"
				},
				"properties": {
					"density": "Liquid",
					"flavor": ["Sour", "Sweet"]
				},
				"ingredients": ["dragon_fruit"]
			},
			{
				"id": "durian",
				"name": {
					"en": "Durian Juice",
					"ru": "Сок из Дуриана"
				},
				"properties": {
					"density": "Creamy",
					"flavor": ["Sweet"]
				},
				"ingredients": ["durian"]
			},
			{
				"id": "fig",
				"name": {
					"en": "Fig Juice",
					"ru": "Сок из Инжира"
				},
				"properties": {
					"density": "Liquid",
					"flavor": ["Sweet"]
				},
				"ingredients": ["fig"]
			},
			{
				"id": "ginger",
				"name": {
					"en": "Ginger Juice",
					"ru": "Сок из Имбиря"
				},
				"properties": {
					"density": "Liquid",
					"flavor": ["Pungency"]
				},
				"ingredients": ["ginger"]
			},
			{
				"id": "gotukola",
				"name": {
					"en": "Gotukola Juice",
					"ru": "Сок из Центеллы"
				},
				"properties": {
					"density": "Liquid",
					"flavor": ["Bitter","Sweet"]
				},
				"ingredients": ["gotukola"]
			},
			{
				"id": "grapefruit",
				"name": {
					"en": "Grapefruit Juice",
					"ru": "Сок из Грейпфрута"
				},
				"properties": {
					"density": "Liquid",
					"flavor": ["Bitter","Sweet"]
				},
				"ingredients": ["grapefruit"]
			},
			{
				"id": "grapes",
				"name": {
					"en": "Grapes Juice",
					"ru": "Сок из Винограда"
				},
				"properties": {
					"density": "Liquid",
					"flavor": ["Sweet"]
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
					"density": "Creamy",
					"flavor": ["Sour"]
				},
				"ingredients": ["guava"]
			},
			{
				"id": "jackfruit",
				"name": {
					"en": "Jackfruit Juice",
					"ru": "Сок из Джекфрута"
				},
				"properties": {
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
				"properties": {
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
				"properties": {
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
				"properties": {
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
				"properties": {
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
				"properties": {
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
					"en": "Mangosteen Juice",
					"ru": "Сок из Мангустина"
				},
				"properties": {
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
				"properties": {
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
				"properties": {
					"density": "",
					"flavor": [""]
				},
				"ingredients": ["nelli"]
			},
			{
				"id": "orange",
				"name": {
					"en": "Orange Juice",
					"ru": "Сок из Апельсина"
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
				"properties": {
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
				"id": "peanut",
				"name": {
					"en": "Peanut Drink",
					"ru": "Напиток с Арахисом"
				},
				"properties": {
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
				"properties": {
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
				"properties": {
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
				"properties": {
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
				"properties": {
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
				"properties": {
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
				"properties": {
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
				"properties": {
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
				"properties": {
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
				"properties": {
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
				"properties": {
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
				"properties": {
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
				"properties": {
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
				"properties": {
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
				"properties": {
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
				"properties": {
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
				"properties": {
					"density": "",
					"flavor": [""]
				},
				"ingredients": ["tamarind"]
			},
			{
				"id": "tomato",
				"name": {
					"en": "Tomato Juice",
					"ru": "Сок из Помидоров"
				},
				"properties": {
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
				"properties": {
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
				"properties": {
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
					userService.getUser().then(function (user) {
						_.each(drinks, function (drink) {
							drink.isTried = _.contains(user.tried, drink.id);
							drink.isSaved = _.contains(user.saved, drink.id);
						});
						initialised = true;
					});
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