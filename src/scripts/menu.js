const hamburger_anim_rules = [
  {
    "hidden": {
      "x1": 10,
      "x2": 50,
      "y1": 15,
      "y2": 15,
      "opacity": 1
    },
    "expanded": {
      "x1": 10,
      "x2": 50,
      "y1": 15,
      "y2": 15,
      "opacity": 1
    }
  },
  {
    "hidden": {
      "x1": 10,
      "x2": 50,
      "y1": 30,
      "y2": 30,
      "opacity": 1
    },
    "expanded": {
      "x1": 10,
      "x2": 50,
      "y1": 30,
      "y2": 30,
      "opacity": 1
    }
  },
  {
    "hidden": {
      "x1": 10,
      "x2": 50,
      "y1": 45,
      "y2": 45,
      "opacity": 1
    },
    "expanded": {
      "x1": 10,
      "x2": 50,
      "y1": 55,
      "y2": 55,
      "opacity": 0
    }
  }
]


document.querySelector('.hamburger').addEventListener('click', (e) => {
    let navlinks = document.querySelector('.nav-links');

    navlinks.classList.toggle('expanded');
    document.querySelector('.hamburger').classList.toggle('hamburger-expanded');
  });