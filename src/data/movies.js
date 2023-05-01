const movies = [
  {
    title: "John Wick",
    gifs: [
      {
        src: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExY2M2ODIzMDAzMDkwN2Y4NjAxNDgwZDNjYTFiYzM0ZGNjMTVhZmE5OSZjdD1n/CxqGa4O0LQewU/giphy.gif",
        alt: "elmo on toilet",
      },
      {
        src: "https://media.giphy.com/media/j7N0GKEWqZxNC/giphy.gif",
        alt: "lit candle",
      },
    ],
  },
  {
    title: "Top Gun",
    gifs: [
      {
        src: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMDI5ZWE3Y2RlMGUyZjhlN2Q5YzVmYjY0Mzc5YzllNDI1M2NlN2Y5YSZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/9UqRcQHzBou6A/giphy.gif",
        alt: "The spinning top from Inception that Leo uses to determine if he is awake or dreaming.",
      },
      {
        src: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZWIyNTI5NGUzNTk1Yjg3M2UzMGE3YjhhNGVjMmZmZjc0OTk1YzA0ZCZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/12MgUpnxEq3ypy/giphy.gif",
        alt: "Michael Scott of the Office US shooting like an idiot",
      },
    ],
  },
  
  {
    title: "Scary Movie",
    gifs: [
      {
        src: "https://media.giphy.com/media/UseBZDm3O00hy/giphy.gif",
        alt: "Bruce Lee awkwardly screaming with his head vibrating a bit",
      },
      {
        src: "https://media.giphy.com/media/5w2fo5NhQImXfoovWL/giphy.gif",
        alt: "Old-fashioned commercial for a camcorder with an oversized VHS tape",
      },
    ],
  },

  {
    title: "The Nutty Professor",
    gifs: [
      {
        src: "https://media.giphy.com/media/YdwnurOUkUy88/giphy.gif",
        alt: "A chipmunk on a turntable holding a bowl of nuts",
      },
      {
        src: "https://media.giphy.com/media/NqZ0hWhLXZJSg/giphy.gif",
        alt: "The crazy scientist from the intro to the Powerpuff Girls",
      },
    ],
  },

  {
    title: "The Silence of the Lambs",
    gifs: [
      {
        src: "https://media.giphy.com/media/l4EplcXMSWQeN9fQA/giphy.gif",
        alt: "The librarian from All That loudly shouting, 'Quiet! This is a library!'",
      },
      {
        src: "https://media.giphy.com/media/zeJTF4QMUVFM4/giphy.gif",
        alt: "A baby goat fainting out of fear",
      },
    ],
  },

  {
    title: "Grown Ups",
    gifs: [
      {
        src: "https://media.giphy.com/media/7JaSUdsHsO0z9yoR25/giphy.gif",
        alt: "Kevin Hart groaning in an ice bath",
      },
      {
        src: "https://media.giphy.com/media/LOEMHwUd8U0As7pRdv/giphy.gif",
        alt: "Conan O'Brien in a U.P.S. uniform and U.P.S. underwear",
      },
    ],
  },

  {
    title: "Neighbors",
    gifs: [
      {
        src: "https://media.giphy.com/media/yKTkIoGhp4fks/giphy.gif",
        alt: "A horse neighing in the cold air",
      },
      {
        src: "https://media.giphy.com/media/Me8FzKWGBlticgxSRZ/giphy.gif",
        alt: "A wild pig crossing the road with some baby pigs following",
      },
    ],
  },

  {
    title: "The Firm",
    gifs: [
      {
        src: "https://media.giphy.com/media/HzaZtMwr5XRteISSqo/giphy.gif",
        alt: "A wavy inflatable arm mascot jumping on a mattress that doesn't look very soft",
      },
    ],
  },

  {
    title: "10,000 BC",
    gifs: [
      {
        src: "https://media.giphy.com/media/wIJzcll5mxacwbf45q/giphy.gif",
        alt: "A Wheel of Fortune player holding a 10,000 dollar prize",
      },
      {
        src: "https://media.giphy.com/media/QBdU43WCvkUGM14HDu/giphy.gif",
        alt: "Beautiful scenery in British Columbia",
      },
    ],
  },

  {
    title: "American Gangster",
    gifs: [
      {
        src: "",
        alt: "",
      },
      {
        src: "",
        alt: "",
      },
    ],
  },

  {
    title: "Avatar",
    gifs: [
      {
        src: "",
        alt: "",
      },
      {
        src: "",
        alt: "",
      },
    ],
  },

  {
    title: "Titanic",
    gifs: [
      {
        src: "",
        alt: "",
      },
      {
        src: "",
        alt: "",
      },
    ],
  },

  {
    title: "The Lion King",
    gifs: [
      {
        src: "",
        alt: "",
      },
      {
        src: "",
        alt: "",
      },
    ],
  },

  {
    title: "Black Panther",
    gifs: [
      {
        src: "",
        alt: "",
      },
      {
        src: "",
        alt: "",
      },
    ],
  },

  {
    title: "Frozen",
    gifs: [
      {
        src: "",
        alt: "",
      },
      {
        src: "",
        alt: "",
      },
    ],
  },

  {
    title: "Beauty and the Beast",
    gifs: [
      {
        src: "",
        alt: "",
      },
      {
        src: "",
        alt: "",
      },
    ],
  },

  {
    title: "Aquaman",
    gifs: [
      {
        src: "",
        alt: "",
      },
      {
        src: "",
        alt: "",
      },
    ],
  },

  {
    title: "Skyfall",
    gifs: [
      {
        src: "https://media.giphy.com/media/RqSJ6nQVsOpxe/giphy.gif",
        alt: "Bugs Bunny appearing from a hole in the sky",
      },
      {
        src: "https://media.giphy.com/media/lo5jV0hLNr7Gw/giphy.gif",
        alt: "A girl standing on a toilet seat that breaks apart, leading to her falling flat on the floor",
      },
    ],
  },

  {
    title: "Jurassic Park",
    gifs: [
      {
        src: "https://media.giphy.com/media/e7PS71Mo1DQAjzktgr/giphy.gif",
        alt: "A jury dabbing",
      },
      {
        src: "https://media.giphy.com/media/sUt8uDIusftiE/giphy.gif",
        alt: "A man doing something odd to make a donkey start moving",
      },
      {
        src: "https://media.giphy.com/media/8IXGlKRG5lnpY5EYgx/giphy.gif",
        alt: "A talking head saying he feels icky inside",
      },
      {
        src: "https://media.giphy.com/media/ozVjnsXu5f0li/giphy.gif",
        alt: "A cool boy parallel parking a toy car like a boss",
      },
    ],
  },

  {
    title: "The Dark Knight Rises",
    gifs: [
      {
        src: "",
        alt: "",
      },
      {
        src: "",
        alt: "",
      },
    ],
  },

  {
    title: "Joker",
    gifs: [
      {
        src: "",
        alt: "",
      },
      {
        src: "",
        alt: "",
      },
    ],
  },

  {
    title: "Alice in Wonderland",
    gifs: [
      {
        src: "",
        alt: "",
      },
      {
        src: "",
        alt: "",
      },
    ],
  },

  {
    title: "The Dark Knight",
    gifs: [
      {
        src: "",
        alt: "",
      },
      {
        src: "",
        alt: "",
      },
    ],
  },

  {
    title: "Harry Potter",
    gifs: [
      {
        src: "",
        alt: "",
      },
      {
        src: "",
        alt: "",
      },
    ],
  },

  {
    title: "The Jungle Book",
    gifs: [
      {
        src: "",
        alt: "",
      },
      {
        src: "",
        alt: "",
      },
    ],
  },

  {
    title: "Doctor Strange",
    gifs: [
      {
        src: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYmQxNTMyZjhlNWUwYTUxMzYwOWUzODQ1MzMzYmEwOGJlNzU0ZTgzOCZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/hrcYhsqSfzBmwaay8H/giphy.gif",
        alt: "2 Physicians walk into the room, scene from FRIENDS",
      },
      {
        src: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExN2Y3ZjExMDI5NTgxNmQ0NjU5ZWIyNmU0ZGI5OTczNDY3OTMzNGNkNiZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/JsXz0NQ2pdWDFwhaHm/giphy.gif",
        alt: "Winona Ryder with dark hair comments on being unusual",
      },
    ],
  },

  {
    title: "The Lord of the Rings",
    gifs: [
      {
        src: "",
        alt: "",
      },
      {
        src: "",
        alt: "",
      },
    ],
  },

  {
    title: "Spider-Man",
    gifs: [
      {
        src: "",
        alt: "",
      },
      {
        src: "",
        alt: "",
      },
    ],
  },

  {
    title: "Star Wars",
    gifs: [
      {
        src: "",
        alt: "",
      },
      {
        src: "",
        alt: "",
      },
    ],
  },

  {
    title: "The Hunger Games",
    gifs: [
      {
        src: "",
        alt: "",
      },
      {
        src: "",
        alt: "",
      },
    ],
  },

  {
    title: "Guardians of the Galaxy",
    gifs: [
      {
        src: "",
        alt: "",
      },
      {
        src: "",
        alt: "",
      },
    ],
  },

  {
    title: "Wonder Woman",
    gifs: [
      {
        src: "",
        alt: "",
      },
      {
        src: "",
        alt: "",
      },
    ],
  },
].filter(movie => movie.gifs[0].src.length);

module.exports = movies;
