document.addEventListener('DOMContentLoaded', () => {
  const menuItems = {
    'Фаст-Фуд': [
      { name: 'Хот-Дог', price: 500 },
      { name: 'Фри', price: 800 },
      { name: 'Пюре', price: 600 },
      { name: 'Рис', price: 600 },
      { name: 'Сырные Палочки', price: 1700 },
      { name: 'Куриные Наггетсы', price: 1000 },
      { name: 'Куриный Филе(KFC)', price: 1600 }
    ],
    'Первые Блюда': [
      { name: 'Шурпа Из Баранины', price: 1500 },
      { name: 'Жидкий Лагман', price: 1500 },
      { name: 'Рамен Из Курицы', price: 1600 },
      { name: 'Окорошка', price: 1400 },
      { name: 'Солянка', price: 1500 }
    ],
    'Вторые Блюда': [
      { name: 'Манты', price: 1700 },
      { name: 'Жареная Рыба', price: 3600 },
      { name: 'Гуйру Лагман', price: 1700 },
      { name: 'Цомян Лагман', price: 1800 },
      { name: 'Плов', price: 1600 },
      { name: 'Куырдак(Баранина)', price: 2600 },
      { name: 'Куырдак(Конина)', price: 2700 },
      { name: 'Фрикасе с Рисом', price: 1900 },
      { name: 'Фетучина Альфедо', price: 2500 }
    ],
    'Салаты': [
      { name: 'Свежий Салат', price: 1300 },
      { name: 'Ачучук', price: 1100 },
      { name: 'Салат Тайский', price: 2000 },
      { name: 'Цезарь с Курицей', price: 2200 },
      { name: 'Хрустящий Баклажан', price: 2500 },
      { name: 'Салат Руккола со Свеклой', price: 2500 },
      { name: 'Салат Витамина', price: 2300 },
      { name: 'Нежность', price: 1800 },
      { name: 'Жульен', price: 2000 }
    ],
    'Пицца': [
      { name: 'Маргарита', price: 2390 },
      { name: 'Пепперони', price: 2400 },
      { name: 'Болонье', price: 2500 },
      { name: 'Пицца Куриный', price: 2500 },
      { name: 'Пицца 4 Сезона', price: 2600 },
      { name: 'Мексиканц', price: 2500 },
      { name: 'Пицца Детский', price: 2500 }
    ],
    'Закуски': [
      { name: 'Пивной Сет', price: 4500 },
      { name: 'Гренки Чесночный', price: 800 },
      { name: 'Луковые Кольца', price: 1500 },
      { name: 'Чечил Жереный', price: 1300 }
    ],
    'Холодные Закуски': [
      { name: 'Русская Закуска', price: 2500 },
      { name: 'Рыбная Ассорти', price: 5500 },
      { name: 'Мясное Ассорти', price: 5000 },
      { name: 'Ассорти Кавказское', price: 2800 },
      { name: 'Ассорти Трио', price: 4800 }
    ],
    'Шашлык': [
      { name: 'Бараньи Ребра', price: 2400 },
      { name: 'Баранья Мякоть', price: 2300 },
      { name: 'Люля Кебаб', price: 2000 },
      { name: 'Печень', price: 1500 },
      { name: 'Окорачка', price: 1900 },
      { name: 'Крылышки', price: 1800 },
      { name: 'Овощной', price: 1300 },
      { name: 'Шампиньон', price: 1400 },
      { name: 'Утиная Грудка', price: 1100 }
    ],
    'Блюда на Компанию': [
      { name: 'Ассорти Шашлык', price: 14000 },
      { name: 'Плов(Леген)', price: 7000 },
      { name: 'Манты(Леген)', price: 8000 },
      { name: 'MIXI Гриль', price: 17000 },
      { name: 'Куырдак Баранина', price: 11000 },
      { name: 'Куырдак Конина', price: 12000 }
    ],
    'Выпечка': [
      { name: 'Лепешки', price: 300 },
      { name: 'Самса', price: 400 },
      { name: 'Белый-Черный Хлеб', price: 300 }
    ],
    'Соусы': [
      { name: 'Сырный соус', price: 600 },
      { name: 'Тар-Тар', price: 500 },
      { name: 'Сметана', price: 400 },
      { name: 'Кетчуп', price: 300 }
    ],
    'Горячие Напитки': [
      { name: 'Черный/Зеленый Чай', price: 950 },
      { name: 'Ташкентский Чай', price: 1450 },
      { name: 'Марокканский Чай', price: 1600 }
    ],
    'Добавки к Чаю': [
      { name: 'Лимон', price: 490 },
      { name: 'Молоко', price: 490 },
      { name: 'Мед', price: 490 },
      { name: 'Науат', price: 490 },
      { name: 'Сиропы', price: 490 }
    ],
    'Пиво Разливное': [
      { name: '5OKEAN Пражское(Прага)', price: 550 },
      { name: 'YICHANG', price: 490 },
      { name: 'Михалыч', price: 490 }
    ],
    'Закуски к Пиву': [
      { name: 'Кириешки', price: 350 },
      { name: 'Курт', price: 450 },
      { name: 'Арахис', price: 650 },
      { name: 'лечил', price: 850 }, 
      { name: 'Чипсы', price: 800 },
      { name: 'Фисташки', price: 850 }
    ],
    'Водка': [
      { name: 'Синяя Гора', price: '400/4500' }, 
      { name: 'Зеленая Марка', price: '450/4500' },
      { name: 'MOROSHA', price: '450/4500' },
      { name: 'Кызыл Жар', price: '500/4500' },
      { name: 'Булъбашъ', price: '500/5000' },
      { name: 'Хортиция', price: '500/5000' },
      { name: 'FINLANDIA', price: '900/9000' },
      { name: 'ABSOLUT VODKA', price: '1000/10000' },
      { name: 'CRREY COOSE', price: '1600/16000' }
    ],
    'Виски': [
      { name: 'CHIVAS REAL', price: '2300/23000' },
      { name: 'JAMESON', price: '1600/16000' }
    ],
    'Martini': [
      { name: 'MARTINI BLANCO', price: '900/9000' },
      { name: 'MARTINI ROSSO', price: '900/9000' }
    ],
    'Вино': [
      { name: 'Сладость Лозы', price: 2650 },
      { name: 'Алазанская Долина', price: 2950 },
      { name: 'Хванчкара', price: 4950 }
    ],
    'Коньяк': [
      { name: 'КАЗАХСТАН "3*"', price: 3950 },
      { name: 'КАЗАХСТАН "5*"', price: 6950 }
    ],
    'Текила': [
      { name: 'OLMEGA BLANCA', price: '1100/11000' },
      { name: 'OLMEGA COLD', price: '1200/12000' }
    ],
    'Прохладительные напитки': [
      { name: 'Минеральная Вода', price: 450 },
      { name: 'Maxi Чай', price: '350/700' },
      { name: 'Fuse Tea', price: '350/700' },
      { name: 'Coca Cola', price: '350/750' },
      { name: 'Fanta', price: '350/700' },
      { name: 'Sprite', price: '350/700' },
      { name: 'Сок в Ассортименте', price: 950 },
      { name: 'Dizzi', price: 900 },
      { name: 'GORILLA', price: 1000 },
      { name: 'Borjomi', price: 1100 },
      { name: 'Red Bull', price: 1400 }
    ],
    'Лимонады': [
      { name: 'Компот', price: 1300 },
      { name: 'Киви Лайм', price: 2200 },
      { name: 'Манго-Маракуйя', price: 2200 },
      { name: 'Арбузный Лимонад с Мятой', price: 2200 },
      { name: 'Ягодный', price: 2200 },
      { name: 'Лимонады(Барбарис, Киви, Манго, Арбуз, Гранат, Мохито)', price: '350/700' }
    ],
    'Молочный Коктейль': [
      { name: 'Банановый', price: 1300 },
      { name: 'Клубника', price: 1300 },
      { name: 'Орео', price: 1300 },
      { name: 'Сливочный', price: 1300 }
    ],
    'Табачные Изделия': [
      { name: 'Зажигалка', price: 400 },
      { name: 'Орбит', price: 400 }, 
      { name: 'LM Капсула', price: 1400 },
      { name: 'ESSE', price: 1400 },
      { name: 'PARLAMENT', price: 1600 },
      { name: 'WINSTON', price: 1600 }
    ]
  };

  const menuCategoriesContainer = document.querySelector('.menu-categories');
  const categoryLinksContainer = document.querySelector('.category-links ul');

  function displayMenuItems() {
    for (const category in menuItems) {
      // Создаем контейнер для категории
      const categoryContainer = document.createElement('div');
      categoryContainer.classList.add('menu-category');
      categoryContainer.id = category.replace(/ /g, '-').toLowerCase(); // Создаем ID на основе названия категории

      // Добавляем заголовок категории как ссылку
      const categoryTitle = document.createElement('a');
      categoryTitle.href = `#${categoryContainer.id}`; 
      categoryTitle.textContent = category;
      categoryTitle.classList.add('category-link');
      categoryContainer.appendChild(categoryTitle);

      // Создаем контейнер для блюд категории
      const dishesContainer = document.createElement('div');
      dishesContainer.classList.add('dishes-container');
      dishesContainer.id = `${categoryContainer.id}-dishes`;
      categoryContainer.appendChild(dishesContainer);

      // Добавляем блюда в категорию
      for (const dish of menuItems[category]) {
        const dishElement = document.createElement('div');
        dishElement.classList.add('dish');
        dishElement.innerHTML = `
          <h3>${dish.name}</h3>
          <p>${dish.price}тг</p> 
        `;
        dishesContainer.appendChild(dishElement);
      }

      // Добавляем категорию в общее меню
      menuCategoriesContainer.appendChild(categoryContainer);

      // Добавляем ссылку на категорию в верхнее меню
      const categoryLink = document.createElement('li');
      const link = document.createElement('a');
      link.href = `#${categoryContainer.id}`;
      link.textContent = category;
      categoryLink.appendChild(link);
      categoryLinksContainer.appendChild(categoryLink);
    }
  }

  displayMenuItems();

  const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) { // Показываем кнопку, когда прокрутили больше 300px
    backToTopButton.style.display = 'block';
  } else {
    backToTopButton.style.display = 'none';
  }
});

backToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // Плавная прокрутка
  });
});

  // Плавная прокрутка к категории
  const categoryLinks = document.querySelectorAll('.category-links a');
  categoryLinks.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();

      const targetId = this.getAttribute('href'); 
      const targetElement = document.querySelector(targetId); 

      targetElement.scrollIntoView({
        behavior: 'smooth', 
        block: 'start' 

        
      });
    });
  });
});