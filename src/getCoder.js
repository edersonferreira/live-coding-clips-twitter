const randomNumber = require('./randomNumber');

function getCoder() {
  // list of live coders twitch and twitter
  const list = [
    ['4RT110Rcav', ''],
    ['ChicaoCodes', 'chicaothiago'],
    ['ChicoCodes', 'franciscosouza'],
    ['CodeShow', 'rochacbruno'],
    ['CodigoFalado', 'CodigoFalado'],
    ['EduardoCodes', 'duromeiro'],
    ['LINUXtips', 'badtux_'],
    ['LiveDePython', 'dunossauro'],
    ['Nonykko', 'nonykko'],
    ['NpXbr', 'npxbr'],
    ['PACHIcodes', 'pachicodes'],
    ['PauloMoraesDev', 'paulomoraesdev'],
    ['Paulo_Kiitasu', ''],
    ['PixlRose', 'pixlrose'],
    ['ProfBrunoLopes', 'brunolopesjn'],
    ['PunkDoDevOps', 'punkdodevops'],
    ['RacerXDL', 'lucasteske'],
    ['Saviomz', ''],
    ['TavernaDev', 'TavernaDev'],
    ['TiaguMB', 'TiaguMB'],
    ['Victor_Perin', 'Victor_Perin'],
    ['clarisse_alvarenga', ''],
    ['codandoerrado', 'CodandoErrado'],
    ['danielhe4rt', 'danielhe4rt'],
    ['edersondeveloper', 'edersondev_'],
    ['erikaheidi', 'erikaheidi'],
    ['felipef0ntana', 'f0ntana'],
    ['itsevolution', 'itsevolution_'],
    ['josevalim', 'josevalim'],
    ['jpbrab0', 'jpbrab0'],
    ['juhbotelho', 'juhbotelho'],
    ['julialabs', ''],
    ['kastr0walker', ''],
    ['levxyca', 'levxyca'],
    ['muffyway', 'muffyway'],
    ['pokemaobr', 'pokemaobr'],
    ['wesleycsj', 'wesleycsj'],
    ['xDIDAdev', 'xdidadev'],
    ['xTecna', 'WNXTecna'],
  ];

  // get a random live coder and return it
  const number = randomNumber(0, list.length);
  const coder = list[number];
  return coder;
}

module.exports = getCoder;
