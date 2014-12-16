'use strict';

angular.module('avm.tabs.drinks')
	.service('ratingService', function ($q, $filter) {
		var self = this;
		var ratings = [
			{
				"id": "almond",
				"rate": {
					"rate": 4.6,
					"based": 50217,
					"ratings": {
						"one": 1685,
						"two": 712,
						"three": 1958,
						"four": 8323,
						"five": 37539
					}
				},
				"price": 120,
				"totalComments": 3,
				"comments": ["Tasty almond juice!", "Awesome almond juice!", "Definitely want more almond juice!"]
			},
			{
				"id": "ambarella",
				"rate": {
					"rate": 4.6,
					"based": 50217,
					"ratings": {
						"one": 1685,
						"two": 712,
						"three": 1958,
						"four": 8323,
						"five": 37539
					}
				},
				"price": 120,
				"totalComments": 3,
				"comments": ["Tasty ambarella juice!", "Awesome ambarella juice!", "Definitely want more ambarella juice!"]
			},
			{
				"id": "apple",
				"rate": {
					"rate": 4.6,
					"based": 50217,
					"ratings": {
						"one": 1685,
						"two": 712,
						"three": 1958,
						"four": 8323,
						"five": 37539
					}
				},
				"price": 120,
				"totalComments": 3,
				"comments": ["Tasty apple juice!", "Awesome apple juice!", "Definitely want more apple juice!"]
			},
			{
				"id": "apricot",
				"rate": {
					"rate": 4.6,
					"based": 50217,
					"ratings": {
						"one": 1685,
						"two": 712,
						"three": 1958,
						"four": 8323,
						"five": 37539
					}
				},
				"price": 120,
				"totalComments": 3,
				"comments": ["Tasty apricot juice!", "Awesome apricot juice!", "Definitely want more apricot juice!"]
			},
			{
				"id": "baeli_fruit",
				"rate": {
					"rate": 4.6,
					"based": 50217,
					"ratings": {
						"one": 1685,
						"two": 712,
						"three": 1958,
						"four": 8323,
						"five": 37539
					}
				},
				"price": 120,
				"totalComments": 3,
				"comments": ["Tasty baeli_fruit juice!", "Awesome baeli_fruit juice!", "Definitely want more baeli_fruit juice!"]
			},
			{
				"id": "banana",
				"rate": {
					"rate": 4.6,
					"based": 50217,
					"ratings": {
						"one": 1685,
						"two": 712,
						"three": 1958,
						"four": 8323,
						"five": 37539
					}
				},
				"price": 120,
				"totalComments": 3,
				"comments": ["Tasty banana juice!", "Awesome banana juice!", "Definitely want more banana juice!"]
			},
			{
				"id": "beetroot",
				"rate": {
					"rate": 4.6,
					"based": 50217,
					"ratings": {
						"one": 1685,
						"two": 712,
						"three": 1958,
						"four": 8323,
						"five": 37539
					}
				},
				"price": 120,
				"totalComments": 3,
				"comments": ["Tasty beetroot juice!", "Awesome beetroot juice!", "Definitely want more beetroot juice!"]
			},
			{
				"id": "bitter_gourd",
				"rate": {
					"rate": 4.6,
					"based": 50217,
					"ratings": {
						"one": 1685,
						"two": 712,
						"three": 1958,
						"four": 8323,
						"five": 37539
					}
				},
				"price": 120,
				"totalComments": 3,
				"comments": ["Tasty bitter_gourd juice!", "Awesome bitter_gourd juice!", "Definitely want more bitter_gourd juice!"]
			},
			{
				"id": "cantaloupe",
				"rate": {
					"rate": 4.6,
					"based": 50217,
					"ratings": {
						"one": 1685,
						"two": 712,
						"three": 1958,
						"four": 8323,
						"five": 37539
					}
				},
				"price": 120,
				"totalComments": 3,
				"comments": ["Tasty cantaloupe juice!", "Awesome cantaloupe juice!", "Definitely want more cantaloupe juice!"]
			},
			{
				"id": "carrot",
				"rate": {
					"rate": 4.6,
					"based": 50217,
					"ratings": {
						"one": 1685,
						"two": 712,
						"three": 1958,
						"four": 8323,
						"five": 37539
					}
				},
				"price": 120,
				"totalComments": 3,
				"comments": ["Tasty carrot juice!", "Awesome carrot juice!", "Definitely want more carrot juice!"]
			},
			{
				"id": "cashew_apple",
				"rate": {
					"rate": 4.6,
					"based": 50217,
					"ratings": {
						"one": 1685,
						"two": 712,
						"three": 1958,
						"four": 8323,
						"five": 37539
					}
				},
				"price": 120,
				"totalComments": 3,
				"comments": ["Tasty cashew_apple juice!", "Awesome cashew_apple juice!", "Definitely want more cashew_apple juice!"]
			},
			{
				"id": "cashew_nut",
				"rate": {
					"rate": 4.6,
					"based": 50217,
					"ratings": {
						"one": 1685,
						"two": 712,
						"three": 1958,
						"four": 8323,
						"five": 37539
					}
				},
				"price": 120,
				"totalComments": 3,
				"comments": ["Tasty cashew_nut juice!", "Awesome cashew_nut juice!", "Definitely want more cashew_nut juice!"]
			},
			{
				"id": "cocoa_fruit",
				"rate": {
					"rate": 4.6,
					"based": 50217,
					"ratings": {
						"one": 1685,
						"two": 712,
						"three": 1958,
						"four": 8323,
						"five": 37539
					}
				},
				"price": 120,
				"totalComments": 3,
				"comments": ["Tasty cocoa_fruit juice!", "Awesome cocoa_fruit juice!", "Definitely want more cocoa_fruit juice!"]
			},
			{
				"id": "cucumber",
				"rate": {
					"rate": 4.6,
					"based": 50217,
					"ratings": {
						"one": 1685,
						"two": 712,
						"three": 1958,
						"four": 8323,
						"five": 37539
					}
				},
				"price": 120,
				"totalComments": 3,
				"comments": ["Tasty cucumber juice!", "Awesome cucumber juice!", "Definitely want more cucumber juice!"]
			},
			{
				"id": "curry_leaf",
				"rate": {
					"rate": 4.6,
					"based": 50217,
					"ratings": {
						"one": 1685,
						"two": 712,
						"three": 1958,
						"four": 8323,
						"five": 37539
					}
				},
				"price": 120,
				"totalComments": 3,
				"comments": ["Tasty curry_leaf juice!", "Awesome curry_leaf juice!", "Definitely want more curry_leaf juice!"]
			},
			{
				"id": "custard_apple",
				"rate": {
					"rate": 4.6,
					"based": 50217,
					"ratings": {
						"one": 1685,
						"two": 712,
						"three": 1958,
						"four": 8323,
						"five": 37539
					}
				},
				"price": 120,
				"totalComments": 3,
				"comments": ["Tasty custard_apple juice!", "Awesome custard_apple juice!", "Definitely want more custard_apple juice!"]
			},
			{
				"id": "dates",
				"rate": {
					"rate": 4.6,
					"based": 50217,
					"ratings": {
						"one": 1685,
						"two": 712,
						"three": 1958,
						"four": 8323,
						"five": 37539
					}
				},
				"price": 120,
				"totalComments": 3,
				"comments": ["Tasty dates juice!", "Awesome dates juice!", "Definitely want more dates juice!"]
			},
			{
				"id": "dragon_fruit",
				"rate": {
					"rate": 4.6,
					"based": 50217,
					"ratings": {
						"one": 1685,
						"two": 712,
						"three": 1958,
						"four": 8323,
						"five": 37539
					}
				},
				"price": 120,
				"totalComments": 3,
				"comments": ["Tasty dragon_fruit juice!", "Awesome dragon_fruit juice!", "Definitely want more dragon_fruit juice!"]
			},
			{
				"id": "durian",
				"rate": {
					"rate": 4.6,
					"based": 50217,
					"ratings": {
						"one": 1685,
						"two": 712,
						"three": 1958,
						"four": 8323,
						"five": 37539
					}
				},
				"price": 120,
				"totalComments": 3,
				"comments": ["Tasty durian juice!", "Awesome durian juice!", "Definitely want more durian juice!"]
			},
			{
				"id": "fig",
				"rate": {
					"rate": 4.6,
					"based": 50217,
					"ratings": {
						"one": 1685,
						"two": 712,
						"three": 1958,
						"four": 8323,
						"five": 37539
					}
				},
				"price": 120,
				"totalComments": 3,
				"comments": ["Tasty fig juice!", "Awesome fig juice!", "Definitely want more fig juice!"]
			},
			{
				"id": "ginger",
				"rate": {
					"rate": 4.6,
					"based": 50217,
					"ratings": {
						"one": 1685,
						"two": 712,
						"three": 1958,
						"four": 8323,
						"five": 37539
					}
				},
				"price": 120,
				"totalComments": 3,
				"comments": ["Tasty ginger juice!", "Awesome ginger juice!", "Definitely want more ginger juice!"]
			},
			{
				"id": "gotukola",
				"rate": {
					"rate": 4.6,
					"based": 50217,
					"ratings": {
						"one": 1685,
						"two": 712,
						"three": 1958,
						"four": 8323,
						"five": 37539
					}
				},
				"price": 120,
				"totalComments": 3,
				"comments": ["Tasty gotukola juice!", "Awesome gotukola juice!", "Definitely want more gotukola juice!"]
			},
			{
				"id": "grapefruit",
				"rate": {
					"rate": 4.6,
					"based": 50217,
					"ratings": {
						"one": 1685,
						"two": 712,
						"three": 1958,
						"four": 8323,
						"five": 37539
					}
				},
				"price": 120,
				"totalComments": 3,
				"comments": ["Tasty grapefruit juice!", "Awesome grapefruit juice!", "Definitely want more grapefruit juice!"]
			},
			{
				"id": "grapes",
				"rate": {
					"rate": 4.6,
					"based": 50217,
					"ratings": {
						"one": 1685,
						"two": 712,
						"three": 1958,
						"four": 8323,
						"five": 37539
					}
				},
				"price": 120,
				"totalComments": 3,
				"comments": ["Tasty grapes juice!", "Awesome grapes juice!", "Definitely want more grapes juice!"]
			},
			{
				"id": "guava",
				"rate": {
					"rate": 4.6,
					"based": 50217,
					"ratings": {
						"one": 1685,
						"two": 712,
						"three": 1958,
						"four": 8323,
						"five": 37539
					}
				},
				"price": 120,
				"totalComments": 3,
				"comments": ["Tasty guava juice!", "Awesome guava juice!", "Definitely want more guava juice!"]
			},
			{
				"id": "jackfruit",
				"rate": {
					"rate": 4.6,
					"based": 50217,
					"ratings": {
						"one": 1685,
						"two": 712,
						"three": 1958,
						"four": 8323,
						"five": 37539
					}
				},
				"price": 120,
				"totalComments": 3,
				"comments": ["Tasty jackfruit juice!", "Awesome jackfruit juice!", "Definitely want more jackfruit juice!"]
			},
			{
				"id": "jambu",
				"rate": {
					"rate": 4.6,
					"based": 50217,
					"ratings": {
						"one": 1685,
						"two": 712,
						"three": 1958,
						"four": 8323,
						"five": 37539
					}
				},
				"price": 120,
				"totalComments": 3,
				"comments": ["Tasty jambu juice!", "Awesome jambu juice!", "Definitely want more jambu juice!"]
			},
			{
				"id": "kirala",
				"rate": {
					"rate": 4.6,
					"based": 50217,
					"ratings": {
						"one": 1685,
						"two": 712,
						"three": 1958,
						"four": 8323,
						"five": 37539
					}
				},
				"price": 120,
				"totalComments": 3,
				"comments": ["Tasty kirala juice!", "Awesome kirala juice!", "Definitely want more kirala juice!"]
			},
			{
				"id": "kiwi",
				"rate": {
					"rate": 4.6,
					"based": 50217,
					"ratings": {
						"one": 1685,
						"two": 712,
						"three": 1958,
						"four": 8323,
						"five": 37539
					}
				},
				"price": 120,
				"totalComments": 3,
				"comments": ["Tasty kiwi juice!", "Awesome kiwi juice!", "Definitely want more kiwi juice!"]
			},
			{
				"id": "lawulu",
				"rate": {
					"rate": 4.6,
					"based": 50217,
					"ratings": {
						"one": 1685,
						"two": 712,
						"three": 1958,
						"four": 8323,
						"five": 37539
					}
				},
				"price": 120,
				"totalComments": 3,
				"comments": ["Tasty lawulu juice!", "Awesome lawulu juice!", "Definitely want more lawulu juice!"]
			},
			{
				"id": "lemon",
				"rate": {
					"rate": 4.6,
					"based": 50217,
					"ratings": {
						"one": 1685,
						"two": 712,
						"three": 1958,
						"four": 8323,
						"five": 37539
					}
				},
				"price": 120,
				"totalComments": 3,
				"comments": ["Tasty lemon juice!", "Awesome lemon juice!", "Definitely want more lemon juice!"]
			},
			{
				"id": "lime",
				"rate": {
					"rate": 4.6,
					"based": 50217,
					"ratings": {
						"one": 1685,
						"two": 712,
						"three": 1958,
						"four": 8323,
						"five": 37539
					}
				},
				"price": 120,
				"totalComments": 3,
				"comments": ["Tasty lime juice!", "Awesome lime juice!", "Definitely want more lime juice!"]
			},
			{
				"id": "lovi",
				"rate": {
					"rate": 4.6,
					"based": 50217,
					"ratings": {
						"one": 1685,
						"two": 712,
						"three": 1958,
						"four": 8323,
						"five": 37539
					}
				},
				"price": 120,
				"totalComments": 3,
				"comments": ["Tasty lovi juice!", "Awesome lovi juice!", "Definitely want more lovi juice!"]
			},
			{
				"id": "mandarin",
				"rate": {
					"rate": 4.6,
					"based": 50217,
					"ratings": {
						"one": 1685,
						"two": 712,
						"three": 1958,
						"four": 8323,
						"five": 37539
					}
				},
				"price": 120,
				"totalComments": 3,
				"comments": ["Tasty mandarin juice!", "Awesome mandarin juice!", "Definitely want more mandarin juice!"]
			},
			{
				"id": "mango",
				"rate": {
					"rate": 4.6,
					"based": 50217,
					"ratings": {
						"one": 1685,
						"two": 712,
						"three": 1958,
						"four": 8323,
						"five": 37539
					}
				},
				"price": 120,
				"totalComments": 3,
				"comments": ["Tasty mango juice!", "Awesome mango juice!", "Definitely want more mango juice!"]
			},
			{
				"id": "mangosteen",
				"rate": {
					"rate": 4.6,
					"based": 50217,
					"ratings": {
						"one": 1685,
						"two": 712,
						"three": 1958,
						"four": 8323,
						"five": 37539
					}
				},
				"price": 120,
				"totalComments": 3,
				"comments": ["Tasty mangosteen juice!", "Awesome mangosteen juice!", "Definitely want more mangosteen juice!"]
			},
			{
				"id": "naminan",
				"rate": {
					"rate": 4.6,
					"based": 50217,
					"ratings": {
						"one": 1685,
						"two": 712,
						"three": 1958,
						"four": 8323,
						"five": 37539
					}
				},
				"price": 120,
				"totalComments": 3,
				"comments": ["Tasty naminan juice!", "Awesome naminan juice!", "Definitely want more naminan juice!"]
			},
			{
				"id": "nelli",
				"rate": {
					"rate": 4.6,
					"based": 50217,
					"ratings": {
						"one": 1685,
						"two": 712,
						"three": 1958,
						"four": 8323,
						"five": 37539
					}
				},
				"price": 120,
				"totalComments": 3,
				"comments": ["Tasty nelli juice!", "Awesome nelli juice!", "Definitely want more nelli juice!"]
			},
			{
				"id": "orange",
				"rate": {
					"rate": 4.6,
					"based": 50217,
					"ratings": {
						"one": 1685,
						"two": 712,
						"three": 1958,
						"four": 8323,
						"five": 37539
					}
				},
				"price": 120,
				"totalComments": 3,
				"comments": ["Tasty orange juice!", "Awesome orange juice!", "Definitely want more orange juice!"]
			},
			{
				"id": "palm_fruit",
				"rate": {
					"rate": 4.6,
					"based": 50217,
					"ratings": {
						"one": 1685,
						"two": 712,
						"three": 1958,
						"four": 8323,
						"five": 37539
					}
				},
				"price": 120,
				"totalComments": 3,
				"comments": ["Tasty palm_fruit juice!", "Awesome palm_fruit juice!", "Definitely want more palm_fruit juice!"]
			},
			{
				"id": "papaya",
				"rate": {
					"rate": 4.6,
					"based": 50217,
					"ratings": {
						"one": 1685,
						"two": 712,
						"three": 1958,
						"four": 8323,
						"five": 37539
					}
				},
				"price": 120,
				"totalComments": 3,
				"comments": ["Tasty papaya juice!", "Awesome papaya juice!", "Definitely want more papaya juice!"]
			},
			{
				"id": "passion_fruit",
				"rate": {
					"rate": 4.6,
					"based": 50217,
					"ratings": {
						"one": 1685,
						"two": 712,
						"three": 1958,
						"four": 8323,
						"five": 37539
					}
				},
				"price": 120,
				"totalComments": 3,
				"comments": ["Tasty passion_fruit juice!", "Awesome passion_fruit juice!", "Definitely want more passion_fruit juice!"]
			},
			{
				"id": "peach",
				"rate": {
					"rate": 4.6,
					"based": 50217,
					"ratings": {
						"one": 1685,
						"two": 712,
						"three": 1958,
						"four": 8323,
						"five": 37539
					}
				},
				"price": 120,
				"totalComments": 3,
				"comments": ["Tasty peach juice!", "Awesome peach juice!", "Definitely want more peach juice!"]
			},
			{
				"id": "peanut",
				"rate": {
					"rate": 4.6,
					"based": 50217,
					"ratings": {
						"one": 1685,
						"two": 712,
						"three": 1958,
						"four": 8323,
						"five": 37539
					}
				},
				"price": 120,
				"totalComments": 3,
				"comments": ["Tasty peanut juice!", "Awesome peanut juice!", "Definitely want more peanut juice!"]
			},
			{
				"id": "pear",
				"rate": {
					"rate": 4.6,
					"based": 50217,
					"ratings": {
						"one": 1685,
						"two": 712,
						"three": 1958,
						"four": 8323,
						"five": 37539
					}
				},
				"price": 120,
				"totalComments": 3,
				"comments": ["Tasty pear juice!", "Awesome pear juice!", "Definitely want more pear juice!"]
			},
			{
				"id": "pineapple",
				"rate": {
					"rate": 4.6,
					"based": 50217,
					"ratings": {
						"one": 1685,
						"two": 712,
						"three": 1958,
						"four": 8323,
						"five": 37539
					}
				},
				"price": 120,
				"totalComments": 3,
				"comments": ["Tasty pineapple juice!", "Awesome pineapple juice!", "Definitely want more pineapple juice!"]
			},
			{
				"id": "pomegranate",
				"rate": {
					"rate": 4.6,
					"based": 50217,
					"ratings": {
						"one": 1685,
						"two": 712,
						"three": 1958,
						"four": 8323,
						"five": 37539
					}
				},
				"price": 120,
				"totalComments": 3,
				"comments": ["Tasty pomegranate juice!", "Awesome pomegranate juice!", "Definitely want more pomegranate juice!"]
			},
			{
				"id": "raisin",
				"rate": {
					"rate": 4.6,
					"based": 50217,
					"ratings": {
						"one": 1685,
						"two": 712,
						"three": 1958,
						"four": 8323,
						"five": 37539
					}
				},
				"price": 120,
				"totalComments": 3,
				"comments": ["Tasty raisin juice!", "Awesome raisin juice!", "Definitely want more raisin juice!"]
			},
			{
				"id": "rambutan",
				"rate": {
					"rate": 4.6,
					"based": 50217,
					"ratings": {
						"one": 1685,
						"two": 712,
						"three": 1958,
						"four": 8323,
						"five": 37539
					}
				},
				"price": 120,
				"totalComments": 3,
				"comments": ["Tasty rambutan juice!", "Awesome rambutan juice!", "Definitely want more rambutan juice!"]
			},
			{
				"id": "sapodilla",
				"rate": {
					"rate": 4.6,
					"based": 50217,
					"ratings": {
						"one": 1685,
						"two": 712,
						"three": 1958,
						"four": 8323,
						"five": 37539
					}
				},
				"price": 120,
				"totalComments": 3,
				"comments": ["Tasty sapodilla juice!", "Awesome sapodilla juice!", "Definitely want more sapodilla juice!"]
			},
			{
				"id": "silver_melon",
				"rate": {
					"rate": 4.6,
					"based": 50217,
					"ratings": {
						"one": 1685,
						"two": 712,
						"three": 1958,
						"four": 8323,
						"five": 37539
					}
				},
				"price": 120,
				"totalComments": 3,
				"comments": ["Tasty silver_melon juice!", "Awesome silver_melon juice!", "Definitely want more silver_melon juice!"]
			},
			{
				"id": "sour_guava",
				"rate": {
					"rate": 4.6,
					"based": 50217,
					"ratings": {
						"one": 1685,
						"two": 712,
						"three": 1958,
						"four": 8323,
						"five": 37539
					}
				},
				"price": 120,
				"totalComments": 3,
				"comments": ["Tasty sour_guava juice!", "Awesome sour_guava juice!", "Definitely want more sour_guava juice!"]
			},
			{
				"id": "sour_orange",
				"rate": {
					"rate": 4.6,
					"based": 50217,
					"ratings": {
						"one": 1685,
						"two": 712,
						"three": 1958,
						"four": 8323,
						"five": 37539
					}
				},
				"price": 120,
				"totalComments": 3,
				"comments": ["Tasty sour_orange juice!", "Awesome sour_orange juice!", "Definitely want more sour_orange juice!"]
			},
			{
				"id": "soursop_annona",
				"rate": {
					"rate": 4.6,
					"based": 50217,
					"ratings": {
						"one": 1685,
						"two": 712,
						"three": 1958,
						"four": 8323,
						"five": 37539
					}
				},
				"price": 120,
				"totalComments": 3,
				"comments": ["Tasty soursop_annona juice!", "Awesome soursop_annona juice!", "Definitely want more soursop_annona juice!"]
			},
			{
				"id": "starfruit",
				"rate": {
					"rate": 4.6,
					"based": 50217,
					"ratings": {
						"one": 1685,
						"two": 712,
						"three": 1958,
						"four": 8323,
						"five": 37539
					}
				},
				"price": 120,
				"totalComments": 3,
				"comments": ["Tasty starfruit juice!", "Awesome starfruit juice!", "Definitely want more starfruit juice!"]
			},
			{
				"id": "strawberry",
				"rate": {
					"rate": 4.6,
					"based": 50217,
					"ratings": {
						"one": 1685,
						"two": 712,
						"three": 1958,
						"four": 8323,
						"five": 37539
					}
				},
				"price": 120,
				"totalComments": 3,
				"comments": ["Tasty strawberry juice!", "Awesome strawberry juice!", "Definitely want more strawberry juice!"]
			},
			{
				"id": "sugar_cane",
				"rate": {
					"rate": 4.6,
					"based": 50217,
					"ratings": {
						"one": 1685,
						"two": 712,
						"three": 1958,
						"four": 8323,
						"five": 37539
					}
				},
				"price": 120,
				"totalComments": 3,
				"comments": ["Tasty sugar_cane juice!", "Awesome sugar_cane juice!", "Definitely want more sugar_cane juice!"]
			},
			{
				"id": "sweet_coconut",
				"rate": {
					"rate": 4.6,
					"based": 50217,
					"ratings": {
						"one": 1685,
						"two": 712,
						"three": 1958,
						"four": 8323,
						"five": 37539
					}
				},
				"price": 120,
				"totalComments": 3,
				"comments": ["Tasty sweet_coconut juice!", "Awesome sweet_coconut juice!", "Definitely want more sweet_coconut juice!"]
			},
			{
				"id": "sweet_melon",
				"rate": {
					"rate": 4.6,
					"based": 50217,
					"ratings": {
						"one": 1685,
						"two": 712,
						"three": 1958,
						"four": 8323,
						"five": 37539
					}
				},
				"price": 120,
				"totalComments": 3,
				"comments": ["Tasty sweet_melon juice!", "Awesome sweet_melon juice!", "Definitely want more sweet_melon juice!"]
			},
			{
				"id": "tamarind",
				"rate": {
					"rate": 4.6,
					"based": 50217,
					"ratings": {
						"one": 1685,
						"two": 712,
						"three": 1958,
						"four": 8323,
						"five": 37539
					}
				},
				"price": 120,
				"totalComments": 3,
				"comments": ["Tasty tamarind juice!", "Awesome tamarind juice!", "Definitely want more tamarind juice!"]
			},
			{
				"id": "tangerine",
				"rate": {
					"rate": 4.6,
					"based": 50217,
					"ratings": {
						"one": 1685,
						"two": 712,
						"three": 1958,
						"four": 8323,
						"five": 37539
					}
				},
				"price": 120,
				"totalComments": 3,
				"comments": ["Tasty tangerine juice!", "Awesome tangerine juice!", "Definitely want more tangerine juice!"]
			},
			{
				"id": "tomato",
				"rate": {
					"rate": 4.6,
					"based": 50217,
					"ratings": {
						"one": 1685,
						"two": 712,
						"three": 1958,
						"four": 8323,
						"five": 37539
					}
				},
				"price": 120,
				"totalComments": 3,
				"comments": ["Tasty tomato juice!", "Awesome tomato juice!", "Definitely want more tomato juice!"]
			},
			{
				"id": "veralu",
				"rate": {
					"rate": 4.6,
					"based": 50217,
					"ratings": {
						"one": 1685,
						"two": 712,
						"three": 1958,
						"four": 8323,
						"five": 37539
					}
				},
				"price": 120,
				"totalComments": 3,
				"comments": ["Tasty veralu juice!", "Awesome veralu juice!", "Definitely want more veralu juice!"]
			},
			{
				"id": "watermelon",
				"rate": {
					"rate": 4.6,
					"based": 50217,
					"ratings": {
						"one": 1685,
						"two": 712,
						"three": 1958,
						"four": 8323,
						"five": 37539
					}
				},
				"price": 120,
				"totalComments": 3,
				"comments": ["Tasty watermelon juice!", "Awesome watermelon juice!", "Definitely want more watermelon juice!"]
			},
			{
				"id": "woodapple",
				"rate": {
					"rate": 4.6,
					"based": 50217,
					"ratings": {
						"one": 1685,
						"two": 712,
						"three": 1958,
						"four": 8323,
						"five": 37539
					}
				},
				"price": 120,
				"totalComments": 3,
				"comments": ["Tasty woodapple juice!", "Awesome woodapple juice!", "Definitely want more woodapple juice!"]
			}
		];

		/**
		 * Retrieves all ratings
		 * @returns {promise}
		 */
		self.getAll = function () {
			var deferred = $q.defer();
			deferred.resolve(ratings);
			return deferred.promise;
		};

		/**
		 * Retrieves drink by id
		 * @returns {promise}
		 */
		self.getOne = function (id) {
			var deferred = $q.defer();
			deferred.resolve($filter('filter')(drinks, {id: id})[0]);
			return deferred.promise;
		}
	});