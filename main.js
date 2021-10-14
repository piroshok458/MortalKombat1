const player1 = {
    name: "liukang",
    hp: 100,
    img: "http://reactmarathon-api.herokuapp.com/assets/liukang.gif",
    weapon: ["sword"],
    attack: function () {
      console.log(this.name + "Fight");
    },
  };
  

const player2 = {
    name: 'Kitana',
    hp:70,
    img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
    weapon: ['fire', 'ice',],
    attack: function () {
        console.log(this.name + 'Fight...')
    },
};

const $arenas = document.querySelector('.arenas');

function createPlayer(playerClass, obj) {
    const $player = document.createElement('div');
    $player.classList.add(playerClass);

    const $progressbar = document.createElement('div');
    $progressbar.classList.add('progressbar');
    $player.appendChild($progressbar);

    const $life = document.createElement('div');
    $life.classList.add('life');
    $life.style.width = obj.hp + '%' ;


    const $name = document.createElement('div');
    $name.classList.add('name');
    $name.innerText = obj.name;

    $progressbar.appendChild($life);
    $progressbar.appendChild($name);

    const $character = document.createElement('div');
    $character.classList.add('character');
    

    $player.appendChild($character);
     

    const $img = document.createElement('img');
    $img.src = obj.img;

    $character.appendChild($img);

    return $player;
    

}

$arenas.appendChild(createPlayer('player1', player1));
$arenas.appendChild(createPlayer('player2', player2));