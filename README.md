# fighthub
Interface para o calendário de eventos do fighthub

---

# Roadmap

### Data
- [x] Se já passou
- [x] Se é essa semana
    - [x] Get Week Number
- [x] Se é hoje
- [!] Intervalo entre datas (daqui a 2 dias, etc.)
- [x] Se está acontecendo (entre start.datetime e end.datetime)
- [ ] Parsing das datas do google (dia da semana)
- [ ] Prepend zero

### Stream
- [ ] Se tem link do stream na descrição
- [ ] Se stream está acontecendo agora
- [ ] Pegar só o canal da stream (arrancar o 'https://twitch.tv/' da url)

### API
- [ ] Fetch dos dados
- [ ] Destruturação de objetos (separar algumas coisas em variáveis, eu deveria mutar os objetos?)
- [ ] Separe items[] com filter. Use um filter pra semana. `const thisWeek = items[].filter()`

### Rendering
- [ ] Multitwitch
- [ ] Card
- [ ] Separador
    - [ ] Eventos nesta semana
    - [ ] Resto dos eventos
- [ ] Loader

### CSS
- [ ] Header
- [ ] Separador
- [ ] Card
- [ ] Multitwitch
- [ ] Loader
