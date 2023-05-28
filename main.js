function newPlayer(playerPic, playerName, playerCountry, countryEmoji) {
  document.write(`
    <div class="player">
        <img src="${playerPic}" alt="player picture">
        <div class="playerText">
            <h1>${playerName}</h1>
            <span class="country">${playerCountry} &nbsp;<span class="flag-${countryEmoji}"></span></span>
        </div>
    </div>
    `);
  document.write(`<div class="gamesContainer">`);
  function newGame(
    gameBanner,
    gameLogo,
    gameTitle,
    gameYear,
    trophyimg,
    trophyCount
  ) {
    document.write(`
        <div class="game">
            <div class="img" style="background-image: url(${gameBanner});"></div>
            <div class="title">
                <img src="${gameLogo}" alt="Game Logo">
                <div class="text">
                                    <h2>${gameTitle}</h2>
                                    <span>${gameYear}</span>
                </div>

            </div>
            <div class="trophies">
                <span>
                    Trophies
                </span>
                <div class="trophiesContainer">
`);
    if (trophyCount > 12) {
      trophyCount = 12;
    }
    for (i = 0; i < trophyCount; i++) {
      document.write(`<img src="${trophyimg}" alt="trophy" >`);
    }
    document.write(`
            </div>
        </div>
        </div>
        `);
  }
  newGame(
    "imgs/background.jpg",
    "imgs/logo.png",
    "GTA V",
    2013,
    "imgs/trophy.png",
    12
  );
  newGame(
    "https://images.igdb.com/igdb/image/upload/t_original/fqxhn1kuw36nq7re6sur.jpg",
    "https://i.psnprofiles.com/games/5555cd/L7b28b0.png",
    "DuckTales: Remasterd",
    2013,
    "https://i.psnprofiles.com/games/5555cd/trophies/1M3cf40e.png",
    6
  );
  document.write(`</div>`);
}
newPlayer("imgs/pic.jpg", "Seif El-Sakka", "Egypt", "eg");
