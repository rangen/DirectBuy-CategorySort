sol = require('./index')
result = sol([
    {
      "name": "Women's Accessories",
      "id": 1,
      "parent_id": 998,
    },
    {
      "name": "Coverups",
      "id": 51,
      "parent_id": 57
    },
    {
      "name": "Sandals",
      "id": 702,
      "parent_id": 999
    },
    {
      "name": "High Heels",
      "id": 901,
      "parent_id": 999
    },
    {
      "name": "Pumps",
      "id": 76,
      "parent_id": 999
    },
    {
      "name": "Women's Shoes",
      "id": 999,
      "parent_id": 998
    },
    {
      "name": "Swimwear",
      "id": 57,
      "parent_id": 998
    },
    {
      "name": "Women",
      "id": 998,
      "parent_id": null
    },
    {
      "name": "Men",
      "id": 20,
      "parent_id": null,
    },
    {
      "name": "Necklaces",
      "id": 22,
      "parent_id": 20,
    },
    {
      "name": "Men's Winterwear",
      "id": 29,
      "parent_id": 20,
    },
    {
      "name": "Men's Thermals",
      "id": 24,
      "parent_id": 29,
    }
  ]);

  console.log(result);