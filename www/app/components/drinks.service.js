'use strict';

angular.module('avm.components')
  .service('drinksService', function ($q, $filter, ratingService, account, $localStorage, cordovaHelper) {
    var self = this;

    var drinks = [
        {
          "id": "almond_drink",
          "pic": "almond",
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
          "id": "ambarella_juice",
          "pic": "ambarella",
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
          "id": "apple_juice",
          "pic": "apple",
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
          "id": "baeli_fruit_juice",
          "pic": "baeli_fruit",
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
          "id": "banana_juice",
          "pic": "banana",
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
          "id": "beetroot_juice",
          "pic": "beetroot",
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
          "id": "bitter_gourd_juice",
          "pic": "bitter_gourd",
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
          "id": "cantaloupe_juice",
          "pic": "cantaloupe",
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
          "id": "carrot_juice",
          "pic": "carrot",
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
          "id": "cashew_apple_juice",
          "pic": "cashew_apple",
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
          "id": "cashew_nut_drink",
          "pic": "cashew_nut",
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
          "id": "cocoa_fruit_juice",
          "pic": "cocoa_fruit",
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
          "id": "cucumber_juice",
          "pic": "cucumber",
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
          "id": "curry_leaf_juice",
          "pic": "curry_leaf",
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
          "id": "custard_apple_juice",
          "pic": "custard_apple",
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
          "id": "dates_juice",
          "pic": "dates",
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
          "id": "dragon_fruit_juice",
          "pic": "dragon_fruit",
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
          "id": "durian_juice",
          "pic": "durian",
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
          "id": "fig_juice",
          "pic": "fig",
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
          "id": "ginger_juice",
          "pic": "ginger",
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
          "id": "gotukola_juice",
          "pic": "gotukola",
          "name": {
            "en": "Gotukola Juice",
            "ru": "Сок из Центеллы"
          },
          "properties": {
            "density": "Liquid",
            "flavor": ["Bitter", "Sweet"]
          },
          "ingredients": ["gotukola"]
        },
        {
          "id": "grapefruit_juice",
          "pic": "grapefruit",
          "name": {
            "en": "Grapefruit Juice",
            "ru": "Сок из Грейпфрута"
          },
          "properties": {
            "density": "Liquid",
            "flavor": ["Bitter", "Sweet"]
          },
          "ingredients": ["grapefruit"]
        },
        {
          "id": "grapes_juice",
          "pic": "grapes",
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
          "id": "guava_juice",
          "pic": "guava",
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
          "id": "jackfruit_juice",
          "pic": "jackfruit",
          "name": {
            "en": "Jackfruit Juice",
            "ru": "Сок из Джекфрута"
          },
          "properties": {
            "density": "Creamy",
            "flavor": ["Sweet"]
          },
          "ingredients": ["jackfruit"]
        },
        {
          "id": "jambu_juice",
          "pic": "jambu",
          "name": {
            "en": "Jambu Juice",
            "ru": "Сок из Яванского яблока"
          },
          "properties": {
            "density": "Liquid",
            "flavor": ["Sour"]
          },
          "ingredients": ["jambu"]
        },

        {
          "id": "kirala_juice",
          "pic": "kirala",
          "name": {
            "en": "Kirala Juice",
            "ru": "Сок из Киралы"
          },
          "properties": {
            "density": "Liquid",
            "flavor": ["Sour"]
          },
          "ingredients": ["kirala"]
        },

        {
          "id": "kiwi_juice",
          "pic": "kiwi",
          "name": {
            "en": "Kiwi Juice",
            "ru": "Сок из Киви"
          },
          "properties": {
            "density": "Liquid",
            "flavor": ["Sour"]
          },
          "ingredients": ["kiwi"]
        },
        {
          "id": "lawulu_juice",
          "pic": "lawulu",
          "name": {
            "en": "Lawulu Juice",
            "ru": "Сок из Лавулу"
          },
          "properties": {
            "density": "Creamy",
            "flavor": ["Sweet"]
          },
          "ingredients": ["lawulu"]
        },
        {
          "id": "lemon_juice",
          "pic": "lemon",
          "name": {
            "en": "Lemon Juice",
            "ru": "Сок из Лемона"
          },
          "properties": {
            "density": "Liquid",
            "flavor": ["Sour"]
          },
          "ingredients": ["lemon"]
        },
        {
          "id": "lime_juice",
          "pic": "lime",
          "name": {
            "en": "Lime Juice",
            "ru": "Сок из Лайма"
          },
          "properties": {
            "density": "Liquid",
            "flavor": ["Sour"]
          },
          "ingredients": ["lime"]
        },
        {
          "id": "lovi_juice",
          "pic": "lovi",
          "name": {
            "en": "Lovi Juice",
            "ru": "Сок из Лови"
          },
          "properties": {
            "density": "Liquid",
            "flavor": ["Sour"]
          },
          "ingredients": ["lovi"]
        },
        {
          "id": "mandarin_juice",
          "pic": "mandarin",
          "name": {
            "en": "Mandarin Juice",
            "ru": "Сок из Мандарина"
          },
          "properties": {
            "density": "Liquid",
            "flavor": ["Sweet/Sour"]
          },
          "ingredients": ["mandarin"]
        },
        {
          "id": "mango_juice",
          "pic": "mango",
          "name": {
            "en": "Mango Juice",
            "ru": "Сок из Манго"
          },
          "properties": {
            "density": "Creamy",
            "flavor": ["Sweet"]
          },
          "ingredients": ["mango"]
        },
        {
          "id": "mangosteen_juice",
          "pic": "mangosteen",
          "name": {
            "en": "Mangosteen Juice",
            "ru": "Сок из Мангустина"
          },
          "properties": {
            "density": "Liquid",
            "flavor": ["Sweet"]
          },
          "ingredients": ["mangosteen"]
        },
        {
          "id": "naminan_juice",
          "pic": "naminan",
          "name": {
            "en": "Naminan Juice",
            "ru": "Сок из Наминана"
          },
          "properties": {
            "density": "",
            "flavor": ["Bitter"]
          },
          "ingredients": ["naminan"]
        },
        {
          "id": "nelli_juice",
          "pic": "nelli",
          "name": {
            "en": "Nelli Juice",
            "ru": "Сок из Нелли"
          },
          "properties": {
            "density": "Liquid",
            "flavor": ["Sour", "Sweet"]
          },
          "ingredients": ["nelli"]
        },
        {
          "id": "orange_juice",
          "pic": "orange",
          "name": {
            "en": "Orange Juice",
            "ru": "Сок из Апельсина"
          },
          "properties": {
            "density": "Liquid",
            "flavor": ["Sour", "Sweet"]
          },
          "ingredients": ["orange"]
        },
        {
          "id": "palm_fruit_juice",
          "pic": "palm_fruit",
          "name": {
            "en": "Palm fruit Juice",
            "ru": "Сок из Пальмировой пальмы"
          },
          "properties": {
            "density": "Liquid",
            "flavor": ["Bitter"]
          },
          "ingredients": ["palm_fruit"]
        },
        {
          "id": "papaya_juice",
          "pic": "papaya",
          "name": {
            "en": "Papaya Juice",
            "ru": "Сок из Папайи"
          },
          "properties": {
            "density": "Creamy",
            "flavor": ["Sweet"]
          },
          "ingredients": ["papaya"]
        },
        {
          "id": "passion_fruit_juice",
          "pic": "passion_fruit",
          "name": {
            "en": "Passion Fruit Juice",
            "ru": "Сок из Маракуи"
          },
          "properties": {
            "density": "Liquid",
            "flavor": ["Sour", "Sweet"]
          },
          "ingredients": ["passion_fruit"]
        },
        {
          "id": "peanut_drink",
          "pic": "peanut",
          "name": {
            "en": "Peanut Drink",
            "ru": "Напиток из Арахиса"
          },
          "properties": {
            "density": "Creamy",
            "flavor": ["Sweet"]
          },
          "ingredients": ["peanut"]
        },
        {
          "id": "pear_juice",
          "pic": "pear",
          "name": {
            "en": "Pear Juice",
            "ru": "Сок из Груши"
          },
          "properties": {
            "density": "Liquid",
            "flavor": ["Sweet"]
          },
          "ingredients": ["pear"]
        },
        {
          "id": "pineapple_juice",
          "pic": "pineapple",
          "name": {
            "en": "Pineapple Juice",
            "ru": "Сок из Ананаса"
          },
          "properties": {
            "density": "Creamy",
            "flavor": ["Sour", "Sweet"]
          },
          "ingredients": ["pineapple"]
        },
        {
          "id": "pomegranate_juice",
          "pic": "pomegranate",
          "name": {
            "en": "Pomegranate Juice",
            "ru": "Сок из Граната"
          },
          "properties": {
            "density": "Liquid",
            "flavor": ["Sweet"]
          },
          "ingredients": ["pomegranate"]
        },
        {
          "id": "raisin_juice",
          "pic": "raisin",
          "name": {
            "en": "Raisin Juice",
            "ru": "Сок из Изюма"
          },
          "properties": {
            "density": "Creamy",
            "flavor": ["Sweet"]
          },
          "ingredients": ["raisin"]
        },
        {
          "id": "rambutan_juice",
          "pic": "rambutan",
          "name": {
            "en": "Rambutan Juice",
            "ru": "Сок из Рамбутана"
          },
          "properties": {
            "density": "Liquid",
            "flavor": ["Sour", "Sweet"]
          },
          "ingredients": ["rambutan"]
        },
        {
          "id": "sapodilla_juice",
          "pic": "sapodilla",
          "name": {
            "en": "Sapodilla Juice",
            "ru": "Сок из Саподиллы"
          },
          "properties": {
            "density": "Creamy",
            "flavor": ["Sweet"]
          },
          "ingredients": ["sapodilla"]
        },
        {
          "id": "silver_melon_juice",
          "pic": "silver_melon",
          "name": {
            "en": "Silver Melon Juice",
            "ru": "Сок из Серебрянной Дыни"
          },
          "properties": {
            "density": "Liquid",
            "flavor": ["Sweet"]
          },
          "ingredients": ["silver_melon"]
        },
        {
          "id": "sour_orange_juice",
          "pic": "sour_orange",
          "name": {
            "en": "Sour Orange Juice",
            "ru": "Сок из Кислого Апельсина"
          },
          "properties": {
            "density": "Liquid",
            "flavor": ["Sour", "Bitter"]
          },
          "ingredients": ["sour_orange"]
        },
        {
          "id": "sour_guava_juice",
          "pic": "sour_guava",
          "name": {
            "en": "Sour Guava Juice",
            "ru": "Сок из Кислой Гуавы"
          },
          "properties": {
            "density": "Creamy",
            "flavor": ["Sour"]
          },
          "ingredients": ["sour_guava"]
        },
        {
          "id": "soursop_annona_juice",
          "pic": "soursop_annona",
          "name": {
            "en": "Soursop Annona Juice",
            "ru": "Сок из Анноны"
          },
          "properties": {
            "density": "",
            "flavor": ["Sour", "Sweet"]
          },
          "ingredients": ["soursop_annona"]
        },
        {
          "id": "starfruit_juice",
          "pic": "starfruit",
          "name": {
            "en": "Starfruit Juice",
            "ru": "Сок из Карамболи"
          },
          "properties": {
            "density": "Liquid",
            "flavor": ["Sour"]
          },
          "ingredients": ["starfruit"]
        },
        {
          "id": "strawberry_juice",
          "pic": "strawberry",
          "name": {
            "en": "Strawberry Juice",
            "ru": "Сок из Клубники"
          },
          "properties": {
            "density": "Liquid",
            "flavor": ["Sweet"]
          },
          "ingredients": ["strawberry"]
        },
        {
          "id": "sugar_cane_juice",
          "pic": "sugar_cane",
          "name": {
            "en": "Sugar Cane Juice",
            "ru": "Сок из Сахарного тросника"
          },
          "properties": {
            "density": "Liquid",
            "flavor": ["Sweet"]
          },
          "ingredients": ["sugar_cane"]
        },
        {
          "id": "sweet_coconut_juice",
          "pic": "sweet_coconut",
          "name": {
            "en": "Sweet Coconut Juice",
            "ru": "Сок из Сладкого Кокоса"
          },
          "properties": {
            "density": "Creamy",
            "flavor": ["Sweet"]
          },
          "ingredients": ["sweet_coconut"]
        },
        {
          "id": "sweet_melon_juice",
          "pic": "sweet_melon",
          "name": {
            "en": "Sweet Melon Juice",
            "ru": "Сок из Сладкой Дыни"
          },
          "properties": {
            "density": "Liquid",
            "flavor": ["Sweet"]
          },
          "ingredients": ["sweet_melon"]
        },
        {
          "id": "tamarind_juice",
          "pic": "tamarind",
          "name": {
            "en": "Tamarind Juice",
            "ru": "Сок из Тамаринда"
          },
          "properties": {
            "density": "Creamy",
            "flavor": ["Sweet", "Salt"]
          },
          "ingredients": ["tamarind"]
        },
        {
          "id": "tomato_juice",
          "pic": "tomato",
          "name": {
            "en": "Tomato Juice",
            "ru": "Сок из Помидоров"
          },
          "properties": {
            "density": "Liquid",
            "flavor": ["Sweet", "Sour"]
          },
          "ingredients": ["tomato"]
        },
        {
          "id": "veralu_juice",
          "pic": "veralu",
          "name": {
            "en": "Veralu Juice",
            "ru": "Сок из Вералу"
          },
          "properties": {
            "density": "Creamy",
            "flavor": ["Sour"]
          },
          "ingredients": ["veralu"]
        },
        {
          "id": "watermelon_juice",
          "pic": "watermelon",
          "name": {
            "en": "Watermelon Juice",
            "ru": "Сок из Арбуза"
          },
          "properties": {
            "density": "Liquid",
            "flavor": ["Sweet"]
          },
          "ingredients": ["watermelon"]
        },
        {
          "id": "woodapple_juice",
          "pic": "woodapple",
          "name": {
            "en": "Woodapple Juice",
            "ru": "Сок из Деревянного Яблока"
          },
          "properties": {
            "density": "Creamy",
            "flavor": ["Sour", "Sweet"]
          },
          "ingredients": ["woodapple"]
        }
      ];

    self.isDataOld = function () {
      var now = new Date();
      var past = $localStorage.updated;
      return Math.abs(now.getTime() - past.getTime()) >= (1000 * 60 * 10);
    };

    // Is data 10 minutes old
    self.init = function (callback) {
      // Have connection and drinks empty or old data
      if (cordovaHelper.isConnected() && (!$localStorage.drinks.list || self.isDataOld())) {
        ratingService.getAll()
          .then(function (response) {
            var _drinks_ = angular.copy(drinks);
            _.sortBy(_drinks_, 'id');
            _.sortBy(response.result, 'id');
            _.merge(_drinks_, response.result);
            var user = account.getAccountData();
            if ((user.tried && !_.isEmpty(user.tried)) ||
              (user.saved && !_.isEmpty(user.saved))) {
              _.each(_drinks_, function (drink) {
                drink.isTried = _.contains(user.tried, drink.id);
                drink.isSaved = _.contains(user.saved, drink.id);
              });
            }
            $localStorage.drinks.list = _drinks_;
            $localStorage.updated = new Date();
            callback();
          });
      } else {
        callback();
      }
    };

    /**
     * Retrieves all drinks
     * @returns {promise}
     */
    self.getAll = function () {
      var deferred = $q.defer();

      self.init(function () {
        deferred.resolve($localStorage.drinks.list || []);
      });

      return deferred.promise;
    };

    /**
     * Retrieves drink by id
     * @returns {promise}
     */
    self.getOne = function (id) {
      var deferred = $q.defer();

      self.init(function () {
        deferred.resolve($filter('filter')($localStorage.drinks.list || [], {id: id})[0]);
      });

      return deferred.promise;
    }
  });