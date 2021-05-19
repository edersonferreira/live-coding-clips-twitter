# Live Coding Clips (PT-BR/PT)

**Live Coding Clips** é um bot do twitter que a cada 30 minutos posta um clip de algum Live Coder da Twitch.

# Adicionar novos Live Coders

Caso você seja um, e queria adicionar ou editar um live coder, faça uma issue, ou de preferência uma pull request com as suas adições/modificações. Mudando tanto to README, quanto no arquivo `src/getCoder.js` de preferência. Pois é nele que estão os dados.

# Como isso funciona?

Simples. Dessa lista, é escolhido um live coder. depois disso, é pego todos os clipes desse live coder. Caso ele não tiver clipes, o processo se repetirá. Depois disso, é pego um clip aleatório juntamente com a sua twitch, e se tiver, o seu Twitter.

Após isso, é feito o post no twitter com o clipe.

# Como posso contribuir?

Leia o código fonte, entenda como é o funcionamento e faça a sua alteração, adição, remoção ou qualquer outra coisa benéfica ao projeto. e siga o bot no [Twitter](https://twitter.com/clips_coding)
