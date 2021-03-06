const randomNumber = require("./randomNumber");

function getCoder() {
  // list of live coders twitch and twitter
  const list = [
    ["ChicoCodes", "franciscosouza"],
    ["CodeShow", "rochacbruno"],
    ["CodigoFalado", "CodigoFalado"],
    ["LINUXtips", "badtux_"],
    ["Nonykko", "nonykko"],
    ["NpXbr", "npxbr"],
    ["PACHIcodes", "pachicodes"],
    ["PixlRose", "pixlrose"],
    ["ProfBrunoLopes", "brunolopesjn"],
    ["PunkDoDevOps", "punkdodevops"],
    ["Saviomz", ""],
    ["Victor_Perin", "Victor_Perin"],
    ["adielseffrin", "adielseffrin"],
    ["bug_elseif", "bug_elseif"],
    ["clarisse_alvarenga", ""],
    ["clauzinhando", "clauzinhando"],
    ["davibusanello", "davibusanello"],
    ["dunossauro", "dunossauro"],
    ["edersondeveloper", "edersondev_"],
    ["erikaheidi", "erikaheidi"],
    ["itsevolution", "itsevolution_"],
    ["jpbrab0", "jpbrab0"],
    ["juhbotelho", "juhbotelho"],
    ["julialabs", ""],
    ["kastr0walker", "kastrowalker"],
    ["levxyca", "levxyca"],
    ["moniquelive", "moniquelive"],
    ["morgannadev", "morgannadev"],
    ["muffyway", "muffyway"],
    ["oxeChicao", "oxechicao"],
    ["pokemaobr", "pokemaobr"],
    ["tonhocodes", "tonhocodes"],
    ["vitthin", "vitthor_"],
    ["wesleycsj", "wesleycsj"],
    ["xTecna", "WNXTecna"],
  ];

  // get a random live coder and return it
  const number = randomNumber(0, list.length);
  const coder = list[number];
  return coder;
}

module.exports = getCoder;
