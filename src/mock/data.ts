import { basePath } from '@/constants/const';
import { PhotoType } from '@/types';

export const DATA: PhotoType[] = [
  {
    id: 0,
    url: `${basePath}/img/photos/1.jpg`,
    likes: 11,
    comments: [
      {
        id: 0,
        avatar: `${basePath}/img/icons/avatar-6.svg`,
        message: 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце-концов это просто непрофессионально. Непонятен один момент: как так-то?!',
        name: 'Степан'
      },
      {
        id: 1,
        avatar: `${basePath}/img/icons/avatar-2.svg`,
        message: 'Кадрирование просто никакое. Фильтр подобран неудачно: я бы использовал сепию, выставленную на 80%',
        name: 'Аким'
      },
      {
        id: 2,
        avatar: `${basePath}/img/icons/avatar-2.svg`,
        message: 'Я потерял из-за этой фотки семью, детей и кота. Они сказали что не разделяют моей любви к искусству и ушли к соседу. Всё отлично!',
        name: 'Аким'
      },
      {
        id: 3,
        avatar: `${basePath}/img/icons/avatar-5.svg`,
        message: 'Я залип на этой фотке и не могу оторваться. Совсем не знаю что мне делать. Разве это композиция?! Что это за композиция?!',
        name: 'Тимур'
      },
      {
        id: 4,
        avatar: `${basePath}/img/icons/avatar-6.svg`,
        message: 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше. Нормас.',
        name: 'Степан'
      },
      {
        id: 5,
        avatar: `${basePath}/img/icons/avatar-5.svg`,
        message: 'Лица у людей на фотке перекошены, как-будто их избивают. Как можно было поймать такой неудачный момент?! Горизонт завален.',
        name: 'Тимур'
      },
      {
        id: 6,
        avatar: `${basePath}/img/icons/avatar-5.svg`,
        message: 'Фига се! В целом всё неплохо. Но не всё.',
        name: 'Тимур'
      },
      {
        id: 7,
        avatar: `${basePath}/img/icons/avatar-2.svg`,
        message: 'Не представляю как можно сфотографировать море и закат лучше. Это просто апогей. После этого мы можем сжечь все фотоаппараты, потому что всё-равно вершина достигнута. Фокус размыт. Или это просто кто-то заляпал объектив?',
        name: 'Аким'
      },
      {
        id: 8,
        avatar: `${basePath}/img/icons/avatar-6.svg`,
        message: 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше. Шоб я так жил!',
        name: 'Степан'
      }
    ],
    description: 'Если чётко сформулировать желание для Вселенной, то всё обязательно сбудется. Верьте в себя. Главное хотеть и мечтать..... / I\'ve bought some potatoes.'
  },
  {
    id: 1,
    url: `${basePath}/img/photos/2.jpg`,
    likes: 44,
    comments: [
      {
        id: 100,
        avatar: `${basePath}/img/icons/avatar-1.svg`,
        message: 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше. Разве это композиция?! Что это за композиция?! Лица у людей на фотке перекошены, как-будто их избивают. Как можно было поймать такой неудачный момент?! Я потерял из-за этой фотки семью, детей и кота. Они сказали что не разделяют моей любви к искусству и ушли к соседу.',
        name: 'Николай'
      },
      {
        id: 101,
        avatar: `${basePath}/img/icons/avatar-2.svg`,
        message: 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце-концов это просто непрофессионально. Шоб я так жил! Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше. Я залип на этой фотке и не могу оторваться. Совсем не знаю что мне делать.',
        name: 'Аким'
      },
      {
        id: 102,
        avatar: `${basePath}/img/icons/avatar-3.svg`,
        message: 'Фига се! Фильтр подобран неудачно: я бы использовал сепию, выставленную на 80% Нормас. Кадрирование просто никакое.',
        name: 'Ким'
      },
      {
        id: 103,
        avatar: `${basePath}/img/icons/avatar-1.svg`,
        message: 'В целом всё неплохо. Но не всё. Всё отлично! Горизонт завален. Не представляю как можно сфотографировать море и закат лучше. Это просто апогей. После этого мы можем сжечь все фотоаппараты, потому что всё-равно вершина достигнута.',
        name: 'Николай'
      }
    ],
    description: 'Как же круто тут кормят #food #foodgram #instafood #delicious #yummy'
  },
  {
    id: 2,
    url: `${basePath}/img/photos/3.jpg`,
    likes: 39,
    comments: [
      {
        id: 200,
        avatar: `${basePath}/img/icons/avatar-1.svg`,
        message: 'Фокус размыт. Или это просто кто-то заляпал объектив?',
        name: 'Николай'
      },
      {
        id: 201,
        avatar: `${basePath}/img/icons/avatar-5.svg`,
        message: 'Шоб я так жил!',
        name: 'Тимур'
      },
      {
        id: 202,
        avatar: `${basePath}/img/icons/avatar-2.svg`,
        message: 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце-концов это просто непрофессионально.',
        name: 'Аким'
      },
      {
        id: 203,
        avatar: `${basePath}/img/icons/avatar-1.svg`,
        message: 'Всё отлично!',
        name: 'Николай'
      },
      {
        id: 204,
        avatar: `${basePath}/img/icons/avatar-6.svg`,
        message: 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
        name: 'Степан'
      },
      {
        id: 205,
        avatar: `${basePath}/img/icons/avatar-4.svg`,
        message: 'Фильтр подобран неудачно: я бы использовал сепию, выставленную на 80%',
        name: 'Харитон'
      },
      {
        id: 206,
        avatar: `${basePath}/img/icons/avatar-6.svg`,
        message: 'Я залип на этой фотке и не могу оторваться. Совсем не знаю что мне делать.',
        name: 'Степан'
      },
      {
        id: 207,
        avatar: `${basePath}/img/icons/avatar-3.svg`,
        message: 'Горизонт завален.',
        name: 'Ким'
      },
      {
        id: 208,
        avatar: `${basePath}/img/icons/avatar-1.svg`,
        message: 'Кадрирование просто никакое.',
        name: 'Николай'
      },
      {
        id: 209,
        avatar: `${basePath}/img/icons/avatar-5.svg`,
        message: 'Я потерял из-за этой фотки семью, детей и кота. Они сказали что не разделяют моей любви к искусству и ушли к соседу.',
        name: 'Тимур'
      },
      {
        id: 210,
        avatar: `${basePath}/img/icons/avatar-4.svg`,
        message: 'Нормас.',
        name: 'Харитон'
      }
    ],
    description: '#fun #party #cool #young'
  },
  {
    id: 3,
    url: `${basePath}/img/photos/4.jpg`,
    likes: 6,
    comments: [
      {
        id: 300,
        avatar: `${basePath}/img/icons/avatar-4.svg`,
        message: 'Кадрирование просто никакое.',
        name: 'Харитон'
      },
      {
        id: 301,
        avatar: `${basePath}/img/icons/avatar-5.svg`,
        message: 'Разве это композиция?! Что это за композиция?!',
        name: 'Тимур'
      },
      {
        id: 302,
        avatar: `${basePath}/img/icons/avatar-3.svg`,
        message: 'Всё отлично!',
        name: 'Ким'
      },
      {
        id: 303,
        avatar: `${basePath}/img/icons/avatar-6.svg`,
        message: 'Фильтр подобран неудачно: я бы использовал сепию, выставленную на 80%',
        name: 'Степан'
      },
      {
        id: 304,
        avatar: `${basePath}/img/icons/avatar-2.svg`,
        message: 'Нормас.',
        name: 'Аким'
      },
      {
        id: 305,
        avatar: `${basePath}/img/icons/avatar-1.svg`,
        message: 'Я потерял из-за этой фотки семью, детей и кота. Они сказали что не разделяют моей любви к искусству и ушли к соседу.',
        name: 'Николай'
      },
      {
        id: 306,
        avatar: `${basePath}/img/icons/avatar-6.svg`,
        message: 'Лица у людей на фотке перекошены, как-будто их избивают. Как можно было поймать такой неудачный момент?!',
        name: 'Степан'
      },
      {
        id: 307,
        avatar: `${basePath}/img/icons/avatar-5.svg`,
        message: 'Я залип на этой фотке и не могу оторваться. Совсем не знаю что мне делать.',
        name: 'Тимур'
      },
      {
        id: 308,
        avatar: `${basePath}/img/icons/avatar-2.svg`,
        message: 'В целом всё неплохо. Но не всё.',
        name: 'Аким'
      },
      {
        id: 309,
        avatar: `${basePath}/img/icons/avatar-2.svg`,
        message: 'Фокус размыт. Или это просто кто-то заляпал объектив?',
        name: 'Аким'
      },
      {
        id: 310,
        avatar: `${basePath}/img/icons/avatar-2.svg`,
        message: 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце-концов это просто непрофессионально.',
        name: 'Аким'
      },
      {
        id: 311,
        avatar: `${basePath}/img/icons/avatar-5.svg`,
        message: 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
        name: 'Тимур'
      },
      {
        id: 312,
        avatar: `${basePath}/img/icons/avatar-6.svg`,
        message: 'Фига се!',
        name: 'Степан'
      },
      {
        id: 313,
        avatar: `${basePath}/img/icons/avatar-1.svg`,
        message: 'Не представляю как можно сфотографировать море и закат лучше. Это просто апогей. После этого мы можем сжечь все фотоаппараты, потому что всё-равно вершина достигнута.',
        name: 'Николай'
      },
      {
        id: 314,
        avatar: `${basePath}/img/icons/avatar-2.svg`,
        message: 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
        name: 'Аким'
      },
      {
        id: 315,
        avatar: `${basePath}/img/icons/avatar-1.svg`,
        message: 'Шоб я так жил!',
        name: 'Николай'
      }
    ],
    description: 'Норм'
  },
  {
    id: 4,
    url: `${basePath}/img/photos/5.jpg`,
    likes: 36,
    comments: [
      {
        id: 400,
        avatar: `${basePath}/img/icons/avatar-1.svg`,
        message: 'Шоб я так жил! Горизонт завален. Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
        name: 'Николай'
      },
      {
        id: 401,
        avatar: `${basePath}/img/icons/avatar-6.svg`,
        message: 'Разве это композиция?! Что это за композиция?! Нормас. Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
        name: 'Степан'
      },
      {
        id: 402,
        avatar: `${basePath}/img/icons/avatar-5.svg`,
        message: 'Кадрирование просто никакое. Непонятен один момент: как так-то?! Фига се!',
        name: 'Тимур'
      },
      {
        id: 403,
        avatar: `${basePath}/img/icons/avatar-2.svg`,
        message: 'Фокус размыт. Или это просто кто-то заляпал объектив? В целом всё неплохо. Но не всё. Я потерял из-за этой фотки семью, детей и кота. Они сказали что не разделяют моей любви к искусству и ушли к соседу.',
        name: 'Аким'
      },
      {
        id: 404,
        avatar: `${basePath}/img/icons/avatar-3.svg`,
        message: 'Я залип на этой фотке и не могу оторваться. Совсем не знаю что мне делать. Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце-концов это просто непрофессионально. Всё отлично!',
        name: 'Ким'
      },
      {
        id: 405,
        avatar: `${basePath}/img/icons/avatar-6.svg`,
        message: 'Лица у людей на фотке перекошены, как-будто их избивают. Как можно было поймать такой неудачный момент?! Фильтр подобран неудачно: я бы использовал сепию, выставленную на 80% Не представляю как можно сфотографировать море и закат лучше. Это просто апогей. После этого мы можем сжечь все фотоаппараты, потому что всё-равно вершина достигнута.',
        name: 'Степан'
      }
    ],
    description: ''
  },
  {
    id: 5,
    url: `${basePath}/img/photos/6.jpg`,
    likes: 43,
    comments: [
      {
        id: 500,
        avatar: `${basePath}/img/icons/avatar-2.svg`,
        message: 'Шоб я так жил!',
        name: 'Аким'
      },
      {
        id: 501,
        avatar: `${basePath}/img/icons/avatar-2.svg`,
        message: 'Фильтр подобран неудачно: я бы использовал сепию, выставленную на 80%',
        name: 'Аким'
      },
      {
        id: 502,
        avatar: `${basePath}/img/icons/avatar-6.svg`,
        message: 'Нормас.',
        name: 'Степан'
      },
      {
        id: 503,
        avatar: `${basePath}/img/icons/avatar-6.svg`,
        message: 'Фига се!',
        name: 'Степан'
      },
      {
        id: 504,
        avatar: `${basePath}/img/icons/avatar-2.svg`,
        message: 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
        name: 'Аким'
      },
      {
        id: 505,
        avatar: `${basePath}/img/icons/avatar-2.svg`,
        message: 'В целом всё неплохо. Но не всё.',
        name: 'Аким'
      },
      {
        id: 506,
        avatar: `${basePath}/img/icons/avatar-2.svg`,
        message: 'Я залип на этой фотке и не могу оторваться. Совсем не знаю что мне делать.',
        name: 'Аким'
      },
      {
        id: 507,
        avatar: `${basePath}/img/icons/avatar-6.svg`,
        message: 'Я потерял из-за этой фотки семью, детей и кота. Они сказали что не разделяют моей любви к искусству и ушли к соседу.',
        name: 'Степан'
      },
      {
        id: 508,
        avatar: `${basePath}/img/icons/avatar-6.svg`,
        message: 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
        name: 'Степан'
      },
      {
        id: 509,
        avatar: `${basePath}/img/icons/avatar-4.svg`,
        message: 'Кадрирование просто никакое.',
        name: 'Харитон'
      },
      {
        id: 510,
        avatar: `${basePath}/img/icons/avatar-5.svg`,
        message: 'Не представляю как можно сфотографировать море и закат лучше. Это просто апогей. После этого мы можем сжечь все фотоаппараты, потому что всё-равно вершина достигнута.',
        name: 'Тимур'
      },
      {
        id: 511,
        avatar: `${basePath}/img/icons/avatar-2.svg`,
        message: 'Горизонт завален.',
        name: 'Аким'
      },
      {
        id: 512,
        avatar: `${basePath}/img/icons/avatar-3.svg`,
        message: 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце-концов это просто непрофессионально.',
        name: 'Ким'
      },
      {
        id: 513,
        avatar: `${basePath}/img/icons/avatar-1.svg`,
        message: 'Непонятен один момент: как так-то?!',
        name: 'Николай'
      },
      {
        id: 514,
        avatar: `${basePath}/img/icons/avatar-6.svg`,
        message: 'Фокус размыт. Или это просто кто-то заляпал объектив?',
        name: 'Степан'
      },
      {
        id: 515,
        avatar: `${basePath}/img/icons/avatar-2.svg`,
        message: 'Лица у людей на фотке перекошены, как-будто их избивают. Как можно было поймать такой неудачный момент?!',
        name: 'Аким'
      }
    ],
    description: 'Вот это тачка! #wow #car #carwow #drive'
  },
  {
    id: 6,
    url: `${basePath}/img/photos/7.jpg`,
    likes: 4,
    comments: [
      {
        id: 600,
        avatar: `${basePath}/img/icons/avatar-5.svg`,
        message: 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце-концов это просто непрофессионально.',
        name: 'Тимур'
      },
      {
        id: 601,
        avatar: `${basePath}/img/icons/avatar-3.svg`,
        message: 'Кадрирование просто никакое.',
        name: 'Ким'
      },
      {
        id: 602,
        avatar: `${basePath}/img/icons/avatar-3.svg`,
        message: 'Шоб я так жил!',
        name: 'Ким'
      },
      {
        id: 603,
        avatar: `${basePath}/img/icons/avatar-5.svg`,
        message: 'Непонятен один момент: как так-то?!',
        name: 'Тимур'
      },
      {
        id: 604,
        avatar: `${basePath}/img/icons/avatar-5.svg`,
        message: 'Лица у людей на фотке перекошены, как-будто их избивают. Как можно было поймать такой неудачный момент?!',
        name: 'Тимур'
      },
      {
        id: 605,
        avatar: `${basePath}/img/icons/avatar-1.svg`,
        message: 'Фига се!',
        name: 'Николай'
      },
      {
        id: 606,
        avatar: `${basePath}/img/icons/avatar-3.svg`,
        message: 'Разве это композиция?! Что это за композиция?!',
        name: 'Ким'
      },
      {
        id: 607,
        avatar: `${basePath}/img/icons/avatar-2.svg`,
        message: 'Я залип на этой фотке и не могу оторваться. Совсем не знаю что мне делать.',
        name: 'Аким'
      },
      {
        id: 608,
        avatar: `${basePath}/img/icons/avatar-5.svg`,
        message: 'Не представляю как можно сфотографировать море и закат лучше. Это просто апогей. После этого мы можем сжечь все фотоаппараты, потому что всё-равно вершина достигнута.',
        name: 'Тимур'
      },
      {
        id: 609,
        avatar: `${basePath}/img/icons/avatar-6.svg`,
        message: 'В целом всё неплохо. Но не всё.',
        name: 'Степан'
      },
      {
        id: 610,
        avatar: `${basePath}/img/icons/avatar-2.svg`,
        message: 'Нормас.',
        name: 'Аким'
      },
      {
        id: 611,
        avatar: `${basePath}/img/icons/avatar-4.svg`,
        message: 'Горизонт завален.',
        name: 'Харитон'
      },
      {
        id: 612,
        avatar: `${basePath}/img/icons/avatar-3.svg`,
        message: 'Всё отлично!',
        name: 'Ким'
      },
      {
        id: 613,
        avatar: `${basePath}/img/icons/avatar-3.svg`,
        message: 'Я потерял из-за этой фотки семью, детей и кота. Они сказали что не разделяют моей любви к искусству и ушли к соседу.',
        name: 'Ким'
      },
      {
        id: 614,
        avatar: `${basePath}/img/icons/avatar-4.svg`,
        message: 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
        name: 'Харитон'
      },
      {
        id: 615,
        avatar: `${basePath}/img/icons/avatar-2.svg`,
        message: 'Фокус размыт. Или это просто кто-то заляпал объектив?',
        name: 'Аким'
      },
      {
        id: 616,
        avatar: `${basePath}/img/icons/avatar-3.svg`,
        message: 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
        name: 'Ким'
      }
    ],
    description: ''
  },
  {
    id: 7,
    url: `${basePath}/img/photos/8.jpg`,
    likes: 40,
    comments: [
      {
        id: 700,
        avatar: `${basePath}/img/icons/avatar-1.svg`,
        message: 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше. Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце-концов это просто непрофессионально.',
        name: 'Николай'
      },
      {
        id: 701,
        avatar: `${basePath}/img/icons/avatar-4.svg`,
        message: 'Непонятен один момент: как так-то?! Всё отлично!',
        name: 'Харитон'
      },
      {
        id: 702,
        avatar: `${basePath}/img/icons/avatar-6.svg`,
        message: 'Разве это композиция?! Что это за композиция?! Горизонт завален.',
        name: 'Степан'
      },
      {
        id: 703,
        avatar: `${basePath}/img/icons/avatar-5.svg`,
        message: 'Фига се! Я потерял из-за этой фотки семью, детей и кота. Они сказали что не разделяют моей любви к искусству и ушли к соседу.',
        name: 'Тимур'
      },
      {
        id: 704,
        avatar: `${basePath}/img/icons/avatar-6.svg`,
        message: 'В целом всё неплохо. Но не всё. Я залип на этой фотке и не могу оторваться. Совсем не знаю что мне делать.',
        name: 'Степан'
      },
      {
        id: 705,
        avatar: `${basePath}/img/icons/avatar-2.svg`,
        message: 'Шоб я так жил! Не представляю как можно сфотографировать море и закат лучше. Это просто апогей. После этого мы можем сжечь все фотоаппараты, потому что всё-равно вершина достигнута.',
        name: 'Аким'
      },
      {
        id: 706,
        avatar: `${basePath}/img/icons/avatar-2.svg`,
        message: 'Кадрирование просто никакое. Лица у людей на фотке перекошены, как-будто их избивают. Как можно было поймать такой неудачный момент?!',
        name: 'Аким'
      },
      {
        id: 707,
        avatar: `${basePath}/img/icons/avatar-4.svg`,
        message: 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше. Фокус размыт. Или это просто кто-то заляпал объектив?',
        name: 'Харитон'
      }
    ],
    description: 'Тестим новую камеру! #camera #test #new #newcameratest #pic #photo #instaphoto'
  },
  {
    id: 8,
    url: `${basePath}/img/photos/9.jpg`,
    likes: 4,
    comments: [
      {
        id: 800,
        avatar: `${basePath}/img/icons/avatar-4.svg`,
        message: 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
        name: 'Харитон'
      },
      {
        id: 801,
        avatar: `${basePath}/img/icons/avatar-6.svg`,
        message: 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
        name: 'Степан'
      },
      {
        id: 802,
        avatar: `${basePath}/img/icons/avatar-6.svg`,
        message: 'Фига се!',
        name: 'Степан'
      },
      {
        id: 803,
        avatar: `${basePath}/img/icons/avatar-6.svg`,
        message: 'Непонятен один момент: как так-то?!',
        name: 'Степан'
      },
      {
        id: 804,
        avatar: `${basePath}/img/icons/avatar-4.svg`,
        message: 'Шоб я так жил!',
        name: 'Харитон'
      },
      {
        id: 805,
        avatar: `${basePath}/img/icons/avatar-2.svg`,
        message: 'Я залип на этой фотке и не могу оторваться. Совсем не знаю что мне делать.',
        name: 'Аким'
      },
      {
        id: 806,
        avatar: `${basePath}/img/icons/avatar-6.svg`,
        message: 'Кадрирование просто никакое.',
        name: 'Степан'
      },
      {
        id: 807,
        avatar: `${basePath}/img/icons/avatar-5.svg`,
        message: 'Горизонт завален.',
        name: 'Тимур'
      },
      {
        id: 808,
        avatar: `${basePath}/img/icons/avatar-6.svg`,
        message: 'Фокус размыт. Или это просто кто-то заляпал объектив?',
        name: 'Степан'
      },
      {
        id: 809,
        avatar: `${basePath}/img/icons/avatar-6.svg`,
        message: 'Фильтр подобран неудачно: я бы использовал сепию, выставленную на 80%',
        name: 'Степан'
      },
      {
        id: 810,
        avatar: `${basePath}/img/icons/avatar-2.svg`,
        message: 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце-концов это просто непрофессионально.',
        name: 'Аким'
      },
      {
        id: 811,
        avatar: `${basePath}/img/icons/avatar-6.svg`,
        message: 'Лица у людей на фотке перекошены, как-будто их избивают. Как можно было поймать такой неудачный момент?!',
        name: 'Степан'
      },
      {
        id: 812,
        avatar: `${basePath}/img/icons/avatar-4.svg`,
        message: 'В целом всё неплохо. Но не всё.',
        name: 'Харитон'
      },
      {
        id: 813,
        avatar: `${basePath}/img/icons/avatar-5.svg`,
        message: 'Нормас.',
        name: 'Тимур'
      },
      {
        id: 814,
        avatar: `${basePath}/img/icons/avatar-5.svg`,
        message: 'Разве это композиция?! Что это за композиция?!',
        name: 'Тимур'
      },
      {
        id: 815,
        avatar: `${basePath}/img/icons/avatar-1.svg`,
        message: 'Всё отлично!',
        name: 'Николай'
      }
    ],
    description: 'Цените каждое мгновенье. Цените тех, кто рядом с вами и отгоняйте все сомненья. Не обижайте всех словами......'
  },
  {
    id: 9,
    url: `${basePath}/img/photos/10.jpg`,
    likes: 34,
    comments: [
      {
        id: 900,
        avatar: `${basePath}/img/icons/avatar-3.svg`,
        message: 'Фокус размыт. Или это просто кто-то заляпал объектив? Разве это композиция?! Что это за композиция?! Нормас. Я потерял из-за этой фотки семью, детей и кота. Они сказали что не разделяют моей любви к искусству и ушли к соседу. Не представляю как можно сфотографировать море и закат лучше. Это просто апогей. После этого мы можем сжечь все фотоаппараты, потому что всё-равно вершина достигнута. Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше. Фига се! Кадрирование просто никакое. В целом всё неплохо. Но не всё.',
        name: 'Ким'
      },
      {
        id: 901,
        avatar: `${basePath}/img/icons/avatar-2.svg`,
        message: 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце-концов это просто непрофессионально. Шоб я так жил! Горизонт завален. Лица у людей на фотке перекошены, как-будто их избивают. Как можно было поймать такой неудачный момент?! Я залип на этой фотке и не могу оторваться. Совсем не знаю что мне делать. Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше. Непонятен один момент: как так-то?! Фильтр подобран неудачно: я бы использовал сепию, выставленную на 80% Всё отлично!',
        name: 'Аким'
      }
    ],
    description: ''
  },
  {
    id: 10,
    url: `${basePath}/img/photos/11.jpg`,
    likes: 11,
    comments: [
      {
        id: 1000,
        avatar: `${basePath}/img/icons/avatar-5.svg`,
        message: 'Я потерял из-за этой фотки семью, детей и кота. Они сказали что не разделяют моей любви к искусству и ушли к соседу.',
        name: 'Тимур'
      },
      {
        id: 1001,
        avatar: `${basePath}/img/icons/avatar-5.svg`,
        message: 'Лица у людей на фотке перекошены, как-будто их избивают. Как можно было поймать такой неудачный момент?!',
        name: 'Тимур'
      },
      {
        id: 1002,
        avatar: `${basePath}/img/icons/avatar-3.svg`,
        message: 'Непонятен один момент: как так-то?!',
        name: 'Ким'
      },
      {
        id: 1003,
        avatar: `${basePath}/img/icons/avatar-6.svg`,
        message: 'Шоб я так жил!',
        name: 'Степан'
      },
      {
        id: 1004,
        avatar: `${basePath}/img/icons/avatar-3.svg`,
        message: 'Не представляю как можно сфотографировать море и закат лучше. Это просто апогей. После этого мы можем сжечь все фотоаппараты, потому что всё-равно вершина достигнута.',
        name: 'Ким'
      },
      {
        id: 1005,
        avatar: `${basePath}/img/icons/avatar-2.svg`,
        message: 'Кадрирование просто никакое.',
        name: 'Аким'
      },
      {
        id: 1006,
        avatar: `${basePath}/img/icons/avatar-2.svg`,
        message: 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
        name: 'Аким'
      },
      {
        id: 1007,
        avatar: `${basePath}/img/icons/avatar-6.svg`,
        message: 'Горизонт завален.',
        name: 'Степан'
      },
      {
        id: 1008,
        avatar: `${basePath}/img/icons/avatar-3.svg`,
        message: 'Всё отлично!',
        name: 'Ким'
      },
      {
        id: 1009,
        avatar: `${basePath}/img/icons/avatar-4.svg`,
        message: 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
        name: 'Харитон'
      },
      {
        id: 1010,
        avatar: `${basePath}/img/icons/avatar-4.svg`,
        message: 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце-концов это просто непрофессионально.',
        name: 'Харитон'
      },
      {
        id: 1011,
        avatar: `${basePath}/img/icons/avatar-2.svg`,
        message: 'Фига се!',
        name: 'Аким'
      },
      {
        id: 1012,
        avatar: `${basePath}/img/icons/avatar-1.svg`,
        message: 'В целом всё неплохо. Но не всё.',
        name: 'Николай'
      },
      {
        id: 1013,
        avatar: `${basePath}/img/icons/avatar-1.svg`,
        message: 'Фильтр подобран неудачно: я бы использовал сепию, выставленную на 80%',
        name: 'Николай'
      },
      {
        id: 1014,
        avatar: `${basePath}/img/icons/avatar-1.svg`,
        message: 'Разве это композиция?! Что это за композиция?!',
        name: 'Николай'
      }
    ],
    description: 'Тестим новую камеру! #camera #test #new #newcameratest #pic #photo #instaphoto'
  },
  {
    id: 11,
    url: `${basePath}/img/photos/12.jpg`,
    likes: 34,
    comments: [
      {
        id: 1100,
        avatar: `${basePath}/img/icons/avatar-2.svg`,
        message: 'Непонятен один момент: как так-то?!',
        name: 'Аким'
      },
      {
        id: 1101,
        avatar: `${basePath}/img/icons/avatar-2.svg`,
        message: 'Фокус размыт. Или это просто кто-то заляпал объектив?',
        name: 'Аким'
      },
      {
        id: 1102,
        avatar: `${basePath}/img/icons/avatar-1.svg`,
        message: 'Лица у людей на фотке перекошены, как-будто их избивают. Как можно было поймать такой неудачный момент?!',
        name: 'Николай'
      },
      {
        id: 1103,
        avatar: `${basePath}/img/icons/avatar-5.svg`,
        message: 'Я залип на этой фотке и не могу оторваться. Совсем не знаю что мне делать.',
        name: 'Тимур'
      },
      {
        id: 1104,
        avatar: `${basePath}/img/icons/avatar-1.svg`,
        message: 'Кадрирование просто никакое.',
        name: 'Николай'
      },
      {
        id: 1105,
        avatar: `${basePath}/img/icons/avatar-5.svg`,
        message: 'Фильтр подобран неудачно: я бы использовал сепию, выставленную на 80%',
        name: 'Тимур'
      },
      {
        id: 1106,
        avatar: `${basePath}/img/icons/avatar-1.svg`,
        message: 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
        name: 'Николай'
      },
      {
        id: 1107,
        avatar: `${basePath}/img/icons/avatar-4.svg`,
        message: 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце-концов это просто непрофессионально.',
        name: 'Харитон'
      },
      {
        id: 1108,
        avatar: `${basePath}/img/icons/avatar-6.svg`,
        message: 'Разве это композиция?! Что это за композиция?!',
        name: 'Степан'
      },
      {
        id: 1109,
        avatar: `${basePath}/img/icons/avatar-5.svg`,
        message: 'Не представляю как можно сфотографировать море и закат лучше. Это просто апогей. После этого мы можем сжечь все фотоаппараты, потому что всё-равно вершина достигнута.',
        name: 'Тимур'
      },
      {
        id: 1110,
        avatar: `${basePath}/img/icons/avatar-1.svg`,
        message: 'Шоб я так жил!',
        name: 'Николай'
      },
      {
        id: 1111,
        avatar: `${basePath}/img/icons/avatar-5.svg`,
        message: 'В целом всё неплохо. Но не всё.',
        name: 'Тимур'
      },
      {
        id: 1112,
        avatar: `${basePath}/img/icons/avatar-6.svg`,
        message: 'Я потерял из-за этой фотки семью, детей и кота. Они сказали что не разделяют моей любви к искусству и ушли к соседу.',
        name: 'Степан'
      },
      {
        id: 1113,
        avatar: `${basePath}/img/icons/avatar-5.svg`,
        message: 'Всё отлично!',
        name: 'Тимур'
      },
      {
        id: 1114,
        avatar: `${basePath}/img/icons/avatar-1.svg`,
        message: 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
        name: 'Николай'
      }
    ],
    description: 'Летний чил на югах. #тай #отдых #лето #чил #travel #travelgram #summergram #chill'
  },
  {
    id: 12,
    url: `${basePath}/img/photos/13.jpg`,
    likes: 19,
    comments: [
      {
        id: 1200,
        avatar: `${basePath}/img/icons/avatar-5.svg`,
        message: 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше. Фильтр подобран неудачно: я бы использовал сепию, выставленную на 80%',
        name: 'Тимур'
      },
      {
        id: 1201,
        avatar: `${basePath}/img/icons/avatar-1.svg`,
        message: 'Не представляю как можно сфотографировать море и закат лучше. Это просто апогей. После этого мы можем сжечь все фотоаппараты, потому что всё-равно вершина достигнута. Разве это композиция?! Что это за композиция?!',
        name: 'Николай'
      },
      {
        id: 1202,
        avatar: `${basePath}/img/icons/avatar-6.svg`,
        message: 'Кадрирование просто никакое. Всё отлично!',
        name: 'Степан'
      },
      {
        id: 1203,
        avatar: `${basePath}/img/icons/avatar-3.svg`,
        message: 'Я залип на этой фотке и не могу оторваться. Совсем не знаю что мне делать. Фокус размыт. Или это просто кто-то заляпал объектив?',
        name: 'Ким'
      },
      {
        id: 1204,
        avatar: `${basePath}/img/icons/avatar-1.svg`,
        message: 'Я потерял из-за этой фотки семью, детей и кота. Они сказали что не разделяют моей любви к искусству и ушли к соседу. Фига се!',
        name: 'Николай'
      },
      {
        id: 1205,
        avatar: `${basePath}/img/icons/avatar-4.svg`,
        message: 'Непонятен один момент: как так-то?! Горизонт завален.',
        name: 'Харитон'
      },
      {
        id: 1206,
        avatar: `${basePath}/img/icons/avatar-3.svg`,
        message: 'Шоб я так жил! В целом всё неплохо. Но не всё.',
        name: 'Ким'
      }
    ],
    description: 'Хорошо, когда в жизни есть #друзья, которые вместе со мной могут зайти в #барнарубинштейна и бахнуть #пивка'
  },
  {
    id: 13,
    url: `${basePath}/img/photos/14.jpg`,
    likes: 8,
    comments: [
      {
        id: 1300,
        avatar: `${basePath}/img/icons/avatar-2.svg`,
        message: 'Кадрирование просто никакое.',
        name: 'Аким'
      },
      {
        id: 1301,
        avatar: `${basePath}/img/icons/avatar-4.svg`,
        message: 'Нормас.',
        name: 'Харитон'
      },
      {
        id: 1302,
        avatar: `${basePath}/img/icons/avatar-4.svg`,
        message: 'Фильтр подобран неудачно: я бы использовал сепию, выставленную на 80%',
        name: 'Харитон'
      },
      {
        id: 1303,
        avatar: `${basePath}/img/icons/avatar-6.svg`,
        message: 'Не представляю как можно сфотографировать море и закат лучше. Это просто апогей. После этого мы можем сжечь все фотоаппараты, потому что всё-равно вершина достигнута.',
        name: 'Степан'
      },
      {
        id: 1304,
        avatar: `${basePath}/img/icons/avatar-3.svg`,
        message: 'Фига се!',
        name: 'Ким'
      },
      {
        id: 1305,
        avatar: `${basePath}/img/icons/avatar-1.svg`,
        message: 'Фокус размыт. Или это просто кто-то заляпал объектив?',
        name: 'Николай'
      },
      {
        id: 1306,
        avatar: `${basePath}/img/icons/avatar-6.svg`,
        message: 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
        name: 'Степан'
      },
      {
        id: 1307,
        avatar: `${basePath}/img/icons/avatar-1.svg`,
        message: 'Я потерял из-за этой фотки семью, детей и кота. Они сказали что не разделяют моей любви к искусству и ушли к соседу.',
        name: 'Николай'
      },
      {
        id: 1308,
        avatar: `${basePath}/img/icons/avatar-4.svg`,
        message: 'Я залип на этой фотке и не могу оторваться. Совсем не знаю что мне делать.',
        name: 'Харитон'
      },
      {
        id: 1309,
        avatar: `${basePath}/img/icons/avatar-5.svg`,
        message: 'Шоб я так жил!',
        name: 'Тимур'
      },
      {
        id: 1310,
        avatar: `${basePath}/img/icons/avatar-1.svg`,
        message: 'В целом всё неплохо. Но не всё.',
        name: 'Николай'
      },
      {
        id: 1311,
        avatar: `${basePath}/img/icons/avatar-3.svg`,
        message: 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
        name: 'Ким'
      },
      {
        id: 1312,
        avatar: `${basePath}/img/icons/avatar-5.svg`,
        message: 'Лица у людей на фотке перекошены, как-будто их избивают. Как можно было поймать такой неудачный момент?!',
        name: 'Тимур'
      },
      {
        id: 1313,
        avatar: `${basePath}/img/icons/avatar-3.svg`,
        message: 'Горизонт завален.',
        name: 'Ким'
      },
      {
        id: 1314,
        avatar: `${basePath}/img/icons/avatar-2.svg`,
        message: 'Всё отлично!',
        name: 'Аким'
      }
    ],
    description: 'Цените каждое мгновенье. Цените тех, кто рядом с вами и отгоняйте все сомненья. Не обижайте всех словами......'
  },
  {
    id: 14,
    url: `${basePath}/img/photos/15.jpg`,
    likes: 15,
    comments: [
      {
        id: 1400,
        avatar: `${basePath}/img/icons/avatar-5.svg`,
        message: 'Шоб я так жил!',
        name: 'Тимур'
      },
      {
        id: 1401,
        avatar: `${basePath}/img/icons/avatar-5.svg`,
        message: 'Фильтр подобран неудачно: я бы использовал сепию, выставленную на 80%',
        name: 'Тимур'
      },
      {
        id: 1402,
        avatar: `${basePath}/img/icons/avatar-4.svg`,
        message: 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
        name: 'Харитон'
      },
      {
        id: 1403,
        avatar: `${basePath}/img/icons/avatar-2.svg`,
        message: 'Я залип на этой фотке и не могу оторваться. Совсем не знаю что мне делать.',
        name: 'Аким'
      },
      {
        id: 1404,
        avatar: `${basePath}/img/icons/avatar-4.svg`,
        message: 'Нормас.',
        name: 'Харитон'
      },
      {
        id: 1405,
        avatar: `${basePath}/img/icons/avatar-5.svg`,
        message: 'В целом всё неплохо. Но не всё.',
        name: 'Тимур'
      },
      {
        id: 1406,
        avatar: `${basePath}/img/icons/avatar-3.svg`,
        message: 'Фига се!',
        name: 'Ким'
      },
      {
        id: 1407,
        avatar: `${basePath}/img/icons/avatar-3.svg`,
        message: 'Я потерял из-за этой фотки семью, детей и кота. Они сказали что не разделяют моей любви к искусству и ушли к соседу.',
        name: 'Ким'
      },
      {
        id: 1408,
        avatar: `${basePath}/img/icons/avatar-2.svg`,
        message: 'Непонятен один момент: как так-то?!',
        name: 'Аким'
      },
      {
        id: 1409,
        avatar: `${basePath}/img/icons/avatar-2.svg`,
        message: 'Разве это композиция?! Что это за композиция?!',
        name: 'Аким'
      },
      {
        id: 1410,
        avatar: `${basePath}/img/icons/avatar-5.svg`,
        message: 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце-концов это просто непрофессионально.',
        name: 'Тимур'
      },
      {
        id: 1411,
        avatar: `${basePath}/img/icons/avatar-1.svg`,
        message: 'Лица у людей на фотке перекошены, как-будто их избивают. Как можно было поймать такой неудачный момент?!',
        name: 'Николай'
      },
      {
        id: 1412,
        avatar: `${basePath}/img/icons/avatar-3.svg`,
        message: 'Не представляю как можно сфотографировать море и закат лучше. Это просто апогей. После этого мы можем сжечь все фотоаппараты, потому что всё-равно вершина достигнута.',
        name: 'Ким'
      },
      {
        id: 1413,
        avatar: `${basePath}/img/icons/avatar-6.svg`,
        message: 'Горизонт завален.',
        name: 'Степан'
      }
    ],
    description: 'Хорошо, когда в жизни есть #друзья, которые вместе со мной могут зайти в #барнарубинштейна и бахнуть #пивка'
  },
  {
    id: 15,
    url: `${basePath}/img/photos/16.jpg`,
    likes: 36,
    comments: [
      {
        id: 1500,
        avatar: `${basePath}/img/icons/avatar-6.svg`,
        message: 'Я залип на этой фотке и не могу оторваться. Совсем не знаю что мне делать. Кадрирование просто никакое. Лица у людей на фотке перекошены, как-будто их избивают. Как можно было поймать такой неудачный момент?! Я потерял из-за этой фотки семью, детей и кота. Они сказали что не разделяют моей любви к искусству и ушли к соседу.',
        name: 'Степан'
      },
      {
        id: 1501,
        avatar: `${basePath}/img/icons/avatar-2.svg`,
        message: 'Непонятен один момент: как так-то?! Всё отлично! Фига се! Разве это композиция?! Что это за композиция?!',
        name: 'Аким'
      },
      {
        id: 1502,
        avatar: `${basePath}/img/icons/avatar-2.svg`,
        message: 'Не представляю как можно сфотографировать море и закат лучше. Это просто апогей. После этого мы можем сжечь все фотоаппараты, потому что всё-равно вершина достигнута. В целом всё неплохо. Но не всё. Нормас. Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
        name: 'Аким'
      },
      {
        id: 1503,
        avatar: `${basePath}/img/icons/avatar-6.svg`,
        message: 'Фокус размыт. Или это просто кто-то заляпал объектив? Шоб я так жил! Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше. Горизонт завален.',
        name: 'Степан'
      }
    ],
    description: 'Как же круто тут кормят #food #foodgram #instafood #delicious #yummy'
  },
  {
    id: 16,
    url: `${basePath}/img/photos/17.jpg`,
    likes: 18,
    comments: [
      {
        id: 1600,
        avatar: `${basePath}/img/icons/avatar-2.svg`,
        message: 'Лица у людей на фотке перекошены, как-будто их избивают. Как можно было поймать такой неудачный момент?! Я потерял из-за этой фотки семью, детей и кота. Они сказали что не разделяют моей любви к искусству и ушли к соседу. Я залип на этой фотке и не могу оторваться. Совсем не знаю что мне делать. Кадрирование просто никакое. Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце-концов это просто непрофессионально. Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше. Горизонт завален. В целом всё неплохо. Но не всё. Непонятен один момент: как так-то?!',
        name: 'Аким'
      },
      {
        id: 1601,
        avatar: `${basePath}/img/icons/avatar-1.svg`,
        message: 'Фокус размыт. Или это просто кто-то заляпал объектив? Фильтр подобран неудачно: я бы использовал сепию, выставленную на 80% Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше. Разве это композиция?! Что это за композиция?! Фига се! Не представляю как можно сфотографировать море и закат лучше. Это просто апогей. После этого мы можем сжечь все фотоаппараты, потому что всё-равно вершина достигнута. Шоб я так жил! Нормас. Всё отлично!',
        name: 'Николай'
      }
    ],
    description: ''
  },
  {
    id: 17,
    url: `${basePath}/img/photos/18.jpg`,
    likes: 4,
    comments: [
      {
        id: 1700,
        avatar: `${basePath}/img/icons/avatar-3.svg`,
        message: 'Фига се!',
        name: 'Ким'
      },
      {
        id: 1701,
        avatar: `${basePath}/img/icons/avatar-4.svg`,
        message: 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
        name: 'Харитон'
      },
      {
        id: 1702,
        avatar: `${basePath}/img/icons/avatar-1.svg`,
        message: 'Фильтр подобран неудачно: я бы использовал сепию, выставленную на 80%',
        name: 'Николай'
      },
      {
        id: 1703,
        avatar: `${basePath}/img/icons/avatar-2.svg`,
        message: 'Не представляю как можно сфотографировать море и закат лучше. Это просто апогей. После этого мы можем сжечь все фотоаппараты, потому что всё-равно вершина достигнута.',
        name: 'Аким'
      },
      {
        id: 1704,
        avatar: `${basePath}/img/icons/avatar-4.svg`,
        message: 'Разве это композиция?! Что это за композиция?!',
        name: 'Харитон'
      },
      {
        id: 1705,
        avatar: `${basePath}/img/icons/avatar-2.svg`,
        message: 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
        name: 'Аким'
      },
      {
        id: 1706,
        avatar: `${basePath}/img/icons/avatar-4.svg`,
        message: 'Горизонт завален.',
        name: 'Харитон'
      },
      {
        id: 1707,
        avatar: `${basePath}/img/icons/avatar-5.svg`,
        message: 'Шоб я так жил!',
        name: 'Тимур'
      },
      {
        id: 1708,
        avatar: `${basePath}/img/icons/avatar-3.svg`,
        message: 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце-концов это просто непрофессионально.',
        name: 'Ким'
      },
      {
        id: 1709,
        avatar: `${basePath}/img/icons/avatar-4.svg`,
        message: 'В целом всё неплохо. Но не всё.',
        name: 'Харитон'
      },
      {
        id: 1710,
        avatar: `${basePath}/img/icons/avatar-6.svg`,
        message: 'Всё отлично!',
        name: 'Степан'
      },
      {
        id: 1711,
        avatar: `${basePath}/img/icons/avatar-5.svg`,
        message: 'Я залип на этой фотке и не могу оторваться. Совсем не знаю что мне делать.',
        name: 'Тимур'
      },
      {
        id: 1712,
        avatar: `${basePath}/img/icons/avatar-5.svg`,
        message: 'Я потерял из-за этой фотки семью, детей и кота. Они сказали что не разделяют моей любви к искусству и ушли к соседу.',
        name: 'Тимур'
      },
      {
        id: 1713,
        avatar: `${basePath}/img/icons/avatar-6.svg`,
        message: 'Кадрирование просто никакое.',
        name: 'Степан'
      },
      {
        id: 1714,
        avatar: `${basePath}/img/icons/avatar-6.svg`,
        message: 'Непонятен один момент: как так-то?!',
        name: 'Степан'
      },
      {
        id: 1715,
        avatar: `${basePath}/img/icons/avatar-1.svg`,
        message: 'Лица у людей на фотке перекошены, как-будто их избивают. Как можно было поймать такой неудачный момент?!',
        name: 'Николай'
      },
      {
        id: 1716,
        avatar: `${basePath}/img/icons/avatar-1.svg`,
        message: 'Фокус размыт. Или это просто кто-то заляпал объектив?',
        name: 'Николай'
      }
    ],
    description: 'Если чётко сформулировать желание для Вселенной, то всё обязательно сбудется. Верьте в себя. Главное хотеть и мечтать..... / I\'ve bought some potatoes.'
  },
  {
    id: 18,
    url: `${basePath}/img/photos/19.jpg`,
    likes: 43,
    comments: [
      {
        id: 1800,
        avatar: `${basePath}/img/icons/avatar-4.svg`,
        message: 'Горизонт завален. Непонятен один момент: как так-то?!',
        name: 'Харитон'
      },
      {
        id: 1801,
        avatar: `${basePath}/img/icons/avatar-5.svg`,
        message: 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце-концов это просто непрофессионально. Не представляю как можно сфотографировать море и закат лучше. Это просто апогей. После этого мы можем сжечь все фотоаппараты, потому что всё-равно вершина достигнута.',
        name: 'Тимур'
      },
      {
        id: 1802,
        avatar: `${basePath}/img/icons/avatar-3.svg`,
        message: 'Фокус размыт. Или это просто кто-то заляпал объектив? Разве это композиция?! Что это за композиция?!',
        name: 'Ким'
      },
      {
        id: 1803,
        avatar: `${basePath}/img/icons/avatar-5.svg`,
        message: 'В целом всё неплохо. Но не всё. Фильтр подобран неудачно: я бы использовал сепию, выставленную на 80%',
        name: 'Тимур'
      },
      {
        id: 1804,
        avatar: `${basePath}/img/icons/avatar-5.svg`,
        message: 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше. Я потерял из-за этой фотки семью, детей и кота. Они сказали что не разделяют моей любви к искусству и ушли к соседу.',
        name: 'Тимур'
      },
      {
        id: 1805,
        avatar: `${basePath}/img/icons/avatar-6.svg`,
        message: 'Фига се! Шоб я так жил!',
        name: 'Степан'
      },
      {
        id: 1806,
        avatar: `${basePath}/img/icons/avatar-5.svg`,
        message: 'Нормас. Я залип на этой фотке и не могу оторваться. Совсем не знаю что мне делать.',
        name: 'Тимур'
      },
      {
        id: 1807,
        avatar: `${basePath}/img/icons/avatar-3.svg`,
        message: 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше. Всё отлично!',
        name: 'Ким'
      }
    ],
    description: 'Затусили с друзьями на море #laptevsea #north #northeastpassage'
  },
  {
    id: 19,
    url: `${basePath}/img/photos/20.jpg`,
    likes: 19,
    comments: [
      {
        id: 1900,
        avatar: `${basePath}/img/icons/avatar-4.svg`,
        message: 'Не представляю как можно сфотографировать море и закат лучше. Это просто апогей. После этого мы можем сжечь все фотоаппараты, потому что всё-равно вершина достигнута. Нормас. Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце-концов это просто непрофессионально.',
        name: 'Харитон'
      },
      {
        id: 1901,
        avatar: `${basePath}/img/icons/avatar-3.svg`,
        message: 'Фокус размыт. Или это просто кто-то заляпал объектив? Я потерял из-за этой фотки семью, детей и кота. Они сказали что не разделяют моей любви к искусству и ушли к соседу. Фига се!',
        name: 'Ким'
      },
      {
        id: 1902,
        avatar: `${basePath}/img/icons/avatar-6.svg`,
        message: 'Непонятен один момент: как так-то?! Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше. Шоб я так жил!',
        name: 'Степан'
      },
      {
        id: 1903,
        avatar: `${basePath}/img/icons/avatar-2.svg`,
        message: 'Всё отлично! В целом всё неплохо. Но не всё. Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
        name: 'Аким'
      },
      {
        id: 1904,
        avatar: `${basePath}/img/icons/avatar-3.svg`,
        message: 'Горизонт завален. Разве это композиция?! Что это за композиция?! Я залип на этой фотке и не могу оторваться. Совсем не знаю что мне делать.',
        name: 'Ким'
      }
    ],
    description: 'Господи, это такая милота, я сейчас умру от нежности, у меня закшалил мимимиметр'
  },
  {
    id: 20,
    url: `${basePath}/img/photos/21.jpg`,
    likes: 33,
    comments: [
      {
        id: 2000,
        avatar: `${basePath}/img/icons/avatar-4.svg`,
        message: 'Фильтр подобран неудачно: я бы использовал сепию, выставленную на 80% Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
        name: 'Харитон'
      },
      {
        id: 2001,
        avatar: `${basePath}/img/icons/avatar-2.svg`,
        message: 'Непонятен один момент: как так-то?! Горизонт завален.',
        name: 'Аким'
      },
      {
        id: 2002,
        avatar: `${basePath}/img/icons/avatar-6.svg`,
        message: 'Шоб я так жил! Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
        name: 'Степан'
      },
      {
        id: 2003,
        avatar: `${basePath}/img/icons/avatar-3.svg`,
        message: 'В целом всё неплохо. Но не всё. Всё отлично!',
        name: 'Ким'
      },
      {
        id: 2004,
        avatar: `${basePath}/img/icons/avatar-3.svg`,
        message: 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце-концов это просто непрофессионально. Фига се!',
        name: 'Ким'
      },
      {
        id: 2005,
        avatar: `${basePath}/img/icons/avatar-6.svg`,
        message: 'Нормас. Фокус размыт. Или это просто кто-то заляпал объектив?',
        name: 'Степан'
      },
      {
        id: 2006,
        avatar: `${basePath}/img/icons/avatar-1.svg`,
        message: 'Я потерял из-за этой фотки семью, детей и кота. Они сказали что не разделяют моей любви к искусству и ушли к соседу. Я залип на этой фотке и не могу оторваться. Совсем не знаю что мне делать.',
        name: 'Николай'
      },
      {
        id: 2007,
        avatar: `${basePath}/img/icons/avatar-3.svg`,
        message: 'Разве это композиция?! Что это за композиция?! Не представляю как можно сфотографировать море и закат лучше. Это просто апогей. После этого мы можем сжечь все фотоаппараты, потому что всё-равно вершина достигнута.',
        name: 'Ким'
      }
    ],
    description: 'Как же круто тут кормят #food #foodgram #instafood #delicious #yummy'
  },
  {
    id: 21,
    url: `${basePath}/img/photos/22.jpg`,
    likes: 26,
    comments: [
      {
        id: 2100,
        avatar: `${basePath}/img/icons/avatar-1.svg`,
        message: 'Фокус размыт. Или это просто кто-то заляпал объектив? Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
        name: 'Николай'
      },
      {
        id: 2101,
        avatar: `${basePath}/img/icons/avatar-5.svg`,
        message: 'В целом всё неплохо. Но не всё. Фига се!',
        name: 'Тимур'
      },
      {
        id: 2102,
        avatar: `${basePath}/img/icons/avatar-6.svg`,
        message: 'Кадрирование просто никакое. Шоб я так жил!',
        name: 'Степан'
      },
      {
        id: 2103,
        avatar: `${basePath}/img/icons/avatar-1.svg`,
        message: 'Фильтр подобран неудачно: я бы использовал сепию, выставленную на 80% Я залип на этой фотке и не могу оторваться. Совсем не знаю что мне делать.',
        name: 'Николай'
      },
      {
        id: 2104,
        avatar: `${basePath}/img/icons/avatar-6.svg`,
        message: 'Нормас. Горизонт завален.',
        name: 'Степан'
      },
      {
        id: 2105,
        avatar: `${basePath}/img/icons/avatar-2.svg`,
        message: 'Разве это композиция?! Что это за композиция?! Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце-концов это просто непрофессионально.',
        name: 'Аким'
      },
      {
        id: 2106,
        avatar: `${basePath}/img/icons/avatar-6.svg`,
        message: 'Я потерял из-за этой фотки семью, детей и кота. Они сказали что не разделяют моей любви к искусству и ушли к соседу. Не представляю как можно сфотографировать море и закат лучше. Это просто апогей. После этого мы можем сжечь все фотоаппараты, потому что всё-равно вершина достигнута.',
        name: 'Степан'
      }
    ],
    description: '#fun #party #cool #young'
  },
  {
    id: 22,
    url: `${basePath}/img/photos/23.jpg`,
    likes: 39,
    comments: [
      {
        id: 2200,
        avatar: `${basePath}/img/icons/avatar-4.svg`,
        message: 'В целом всё неплохо. Но не всё.',
        name: 'Харитон'
      },
      {
        id: 2201,
        avatar: `${basePath}/img/icons/avatar-5.svg`,
        message: 'Разве это композиция?! Что это за композиция?!',
        name: 'Тимур'
      },
      {
        id: 2202,
        avatar: `${basePath}/img/icons/avatar-1.svg`,
        message: 'Шоб я так жил!',
        name: 'Николай'
      },
      {
        id: 2203,
        avatar: `${basePath}/img/icons/avatar-1.svg`,
        message: 'Кадрирование просто никакое.',
        name: 'Николай'
      },
      {
        id: 2204,
        avatar: `${basePath}/img/icons/avatar-4.svg`,
        message: 'Фокус размыт. Или это просто кто-то заляпал объектив?',
        name: 'Харитон'
      },
      {
        id: 2205,
        avatar: `${basePath}/img/icons/avatar-3.svg`,
        message: 'Не представляю как можно сфотографировать море и закат лучше. Это просто апогей. После этого мы можем сжечь все фотоаппараты, потому что всё-равно вершина достигнута.',
        name: 'Ким'
      },
      {
        id: 2206,
        avatar: `${basePath}/img/icons/avatar-1.svg`,
        message: 'Горизонт завален.',
        name: 'Николай'
      },
      {
        id: 2207,
        avatar: `${basePath}/img/icons/avatar-5.svg`,
        message: 'Лица у людей на фотке перекошены, как-будто их избивают. Как можно было поймать такой неудачный момент?!',
        name: 'Тимур'
      },
      {
        id: 2208,
        avatar: `${basePath}/img/icons/avatar-1.svg`,
        message: 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
        name: 'Николай'
      },
      {
        id: 2209,
        avatar: `${basePath}/img/icons/avatar-3.svg`,
        message: 'Всё отлично!',
        name: 'Ким'
      },
      {
        id: 2210,
        avatar: `${basePath}/img/icons/avatar-1.svg`,
        message: 'Нормас.',
        name: 'Николай'
      },
      {
        id: 2211,
        avatar: `${basePath}/img/icons/avatar-5.svg`,
        message: 'Непонятен один момент: как так-то?!',
        name: 'Тимур'
      },
      {
        id: 2212,
        avatar: `${basePath}/img/icons/avatar-1.svg`,
        message: 'Фильтр подобран неудачно: я бы использовал сепию, выставленную на 80%',
        name: 'Николай'
      }
    ],
    description: 'Отдыхаем... #chill #relax #group #photo'
  },
  {
    id: 23,
    url: `${basePath}/img/photos/24.jpg`,
    likes: 1,
    comments: [
      {
        id: 2300,
        avatar: `${basePath}/img/icons/avatar-4.svg`,
        message: 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
        name: 'Харитон'
      },
      {
        id: 2301,
        avatar: `${basePath}/img/icons/avatar-3.svg`,
        message: 'В целом всё неплохо. Но не всё.',
        name: 'Ким'
      },
      {
        id: 2302,
        avatar: `${basePath}/img/icons/avatar-5.svg`,
        message: 'Не представляю как можно сфотографировать море и закат лучше. Это просто апогей. После этого мы можем сжечь все фотоаппараты, потому что всё-равно вершина достигнута.',
        name: 'Тимур'
      },
      {
        id: 2303,
        avatar: `${basePath}/img/icons/avatar-6.svg`,
        message: 'Всё отлично!',
        name: 'Степан'
      },
      {
        id: 2304,
        avatar: `${basePath}/img/icons/avatar-4.svg`,
        message: 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
        name: 'Харитон'
      },
      {
        id: 2305,
        avatar: `${basePath}/img/icons/avatar-3.svg`,
        message: 'Непонятен один момент: как так-то?!',
        name: 'Ким'
      },
      {
        id: 2306,
        avatar: `${basePath}/img/icons/avatar-1.svg`,
        message: 'Лица у людей на фотке перекошены, как-будто их избивают. Как можно было поймать такой неудачный момент?!',
        name: 'Николай'
      },
      {
        id: 2307,
        avatar: `${basePath}/img/icons/avatar-5.svg`,
        message: 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце-концов это просто непрофессионально.',
        name: 'Тимур'
      },
      {
        id: 2308,
        avatar: `${basePath}/img/icons/avatar-2.svg`,
        message: 'Я потерял из-за этой фотки семью, детей и кота. Они сказали что не разделяют моей любви к искусству и ушли к соседу.',
        name: 'Аким'
      },
      {
        id: 2309,
        avatar: `${basePath}/img/icons/avatar-1.svg`,
        message: 'Разве это композиция?! Что это за композиция?!',
        name: 'Николай'
      },
      {
        id: 2310,
        avatar: `${basePath}/img/icons/avatar-4.svg`,
        message: 'Фига се!',
        name: 'Харитон'
      },
      {
        id: 2311,
        avatar: `${basePath}/img/icons/avatar-2.svg`,
        message: 'Нормас.',
        name: 'Аким'
      },
      {
        id: 2312,
        avatar: `${basePath}/img/icons/avatar-4.svg`,
        message: 'Горизонт завален.',
        name: 'Харитон'
      },
      {
        id: 2313,
        avatar: `${basePath}/img/icons/avatar-1.svg`,
        message: 'Фокус размыт. Или это просто кто-то заляпал объектив?',
        name: 'Николай'
      },
      {
        id: 2314,
        avatar: `${basePath}/img/icons/avatar-4.svg`,
        message: 'Кадрирование просто никакое.',
        name: 'Харитон'
      },
      {
        id: 2315,
        avatar: `${basePath}/img/icons/avatar-6.svg`,
        message: 'Шоб я так жил!',
        name: 'Степан'
      },
      {
        id: 2316,
        avatar: `${basePath}/img/icons/avatar-2.svg`,
        message: 'Фильтр подобран неудачно: я бы использовал сепию, выставленную на 80%',
        name: 'Аким'
      },
      {
        id: 2317,
        avatar: `${basePath}/img/icons/avatar-5.svg`,
        message: 'Я залип на этой фотке и не могу оторваться. Совсем не знаю что мне делать.',
        name: 'Тимур'
      }
    ],
    description: 'Цените каждое мгновенье. Цените тех, кто рядом с вами и отгоняйте все сомненья. Не обижайте всех словами......'
  },
  {
    id: 24,
    url: `${basePath}/img/photos/25.jpg`,
    likes: 46,
    comments: [
      {
        id: 2400,
        avatar: `${basePath}/img/icons/avatar-4.svg`,
        message: 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце-концов это просто непрофессионально. Фокус размыт. Или это просто кто-то заляпал объектив? Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше. Шоб я так жил! Нормас. Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
        name: 'Харитон'
      },
      {
        id: 2401,
        avatar: `${basePath}/img/icons/avatar-6.svg`,
        message: 'Кадрирование просто никакое. В целом всё неплохо. Но не всё. Не представляю как можно сфотографировать море и закат лучше. Это просто апогей. После этого мы можем сжечь все фотоаппараты, потому что всё-равно вершина достигнута. Непонятен один момент: как так-то?! Лица у людей на фотке перекошены, как-будто их избивают. Как можно было поймать такой неудачный момент?! Всё отлично!',
        name: 'Степан'
      },
      {
        id: 2402,
        avatar: `${basePath}/img/icons/avatar-2.svg`,
        message: 'Горизонт завален. Фига се! Я потерял из-за этой фотки семью, детей и кота. Они сказали что не разделяют моей любви к искусству и ушли к соседу. Я залип на этой фотке и не могу оторваться. Совсем не знаю что мне делать. Фильтр подобран неудачно: я бы использовал сепию, выставленную на 80% Разве это композиция?! Что это за композиция?!',
        name: 'Аким'
      }
    ],
    description: 'Вот это тачка! #wow #car #carwow #drive'
  }
]; 