import random
import flet as ft


def main(page):
    def btn_click(e):
        respotas_da_sabedoria = [
            'É certo.',
            'É decididamente assim.',
            'Sem dúvida.',
            'Sim, definitivamente.',
            'Você pode confiar nele.',
            'A meu ver, sim.',
            'Muito provavelmente.',
            'Perspectiva boa.',
            'Sim.',
            'As placas indicam que sim.',
            'Resposta nebulosa, tente novamente.',
            'Pergunte novamente mais tarde.',
            'Melhor não contar agora.',
            'Não é possível prever agora.',
            'Concentre-se e pergunte novamente.',
            'Não conte com isso.',
            'Minha resposta é não.',
            'Minhas fontes dizem que não.',
            'Perspectiva não tão boa.',
            'Muito duvidoso.',
            'Tudo indica que sim',
            'Afirmativo',
            'Negativo',
            'Provavelmente',
            'Duvidoso',
            '42',
            'Cristiano Ronaldo',
            'Obrigado meu Deus',
            'Sei lá',
            'Pergunta de novo',
            'QUE ISSO MEU FI CALMA',
            'CAVALO',
            'Eu gosto',
            'Eu não gosto',
            'Não vale nem 10 conto',
            'Razoável',
            'Sua mãe não te deu educação não?',
            'Melhor perguntar lá no posto ****',
            'Aprovado',
            'Eu não apostaria nisso',
            'Amém, na paz do Senhor',
            'Vou precisar de muito tempo para calcular a respota disso',
            '24',
            'Vai dormir',
            'Melhor você procurar um terapeuta',
            'Vai pra igreja',
            '5',
            'Sim, mas só se você me pagar um café',
            'Não, mas eu posso fazer um bolo',
            'Sim, mas só se você dançar a macarena',
            'Não, mas eu posso te ensinar a fazer uma piada',
            'Sim, mas só se você me contar uma piada antes',
            'Não, mas eu posso te ajudar a encontrar um unicórnio',
            'Sim, mas só se você me der um abraço',
            'Não, mas eu posso te ensinar a fazer um truque de mágica',
            'Sim, mas só se você me deixar escolher o próximo filme que vamos assistir',
            'Não, mas eu posso te ensinar a fazer um origami',
            'Sim, com certeza',
            'Não, de jeito nenhum',
            'Talvez, depende',
            'Provavelmente sim',
            'Provavelmente não',
            'Não posso prever agora',
            'Melhor não te contar',
            'Concentre-se e pergunte novamente',
            'As chances são boas',
            'As chances são ruins',
            'A resposta está dentro de você',
            'A resposta é óbvia',
            'Não conte com isso',
            'É certo que sim',
            'Muito duvidoso',
            'Pergunte a outra pessoa',
            'Siga sua intuição',
            'Espere e verá',
            'Com certeza, sim',
            'Jamais, não',
            'Talvez, quem sabe',
            'Muito provável, sim',
            'Pouco provável, não',
            'Não dá para prever agora',
            'Melhor guardar segredo',
            'Refaça a pergunta com clareza',
            'As chances são favoráveis',
            'As chances são desfavoráveis',
            'A resposta está no seu coração',
            'A resposta é evidente',
            'Nem pense nisso',
            'Sem dúvida, sim',
            'Quase impossível, não',
            'Procure outra opinião',
            'Confie na sua intuição',
            'Aguarde e verá',
            'Pode crer, sim',
            'Nem a pau, não',
            'Quem sabe, né',
            'Capaz, sim',
            'Difícil, não',
            'Tá nebuloso agora',
            'Melhor ficar na sua',
            'Capricha na pergunta aí',
            'As chances tão maneiras',
            'As chances tão zicadas',
            'A resposta tá no seu peito',
            'A resposta tá na cara',
            'Sai dessa, mano',
            'Claro que sim, ué',
            'Nem ferrando, não',
            'Pede a bença pra alguém',
            'Segue o baile, vai',
            'Relaxa e curte',
            'Sim, sim, sim',
            'Não, não, não',
            'Pode ser, vai saber',
            'É bem capaz, sim',
            'É bem difícil, não',
            'Tá complicado agora',
            'Melhor ficar quieto',
            'Manda ver na pergunta',
            'As chances tão boas',
            'As chances tão ruins',
            'A resposta tá no seu sangue',
            'A resposta tá no seu olho',
            'Cai fora, cara',
            'Lógico que sim, pô',
            'Pergunta pro seu anjo',
            'Siga o seu coração',
            'Deixa rolar',
            'Sim, e eu sou o Batman',
            'Não, e você é o Coringa',
            'Talvez, se você for o Homem-Aranha',
            'Com certeza, se você for a Mulher-Maravilha',
            'De jeito nenhum, se você for o Thanos',
            'Não sei, pergunte ao Yoda',
            'Melhor não saber, é um mistério',
            'Repita a pergunta, HAL 9000',
            'As chances são de 42%',
            'As chances são de -1%',
            'A resposta está na Força',
            'A resposta está no Matrix',
            'Sai daqui, ET',
            'Claro que sim, meu precioso',
            'Nem sonhando, Harry Potter',
            'Pergunte ao Dumbledore',
            'Siga o coelho branco',
            'Hakuna Matata',
            'Sim, e você é o Rei Leão',
            'Não, e você é o Scar',
            'Talvez, se você for o Nemo',
            'Com certeza, se você for a Elsa',
            'De jeito nenhum, se você for o Darth Vader',
            'Não sei, pergunte ao Groot',
            'Melhor não saber, é um segredo',
            'Repita a pergunta, R2-D2',
            'As chances são de 007%',
            'As chances são de 666%',
            'A resposta está no Anel',
            'A resposta está no DeLorean',
            'Sai daqui, Predador',
            'Claro que sim, Buzz Lightyear',
            'Nem sonhando, Freddy Krueger',
            'Pergunte ao Gandalf',
            'Siga o caminho de tijolos amarelos',
            'Que a sorte esteja a seu favor',
            'Sim, e você é o Neo',
            'Não, e você é o Agente Smith',
            'Talvez, se você for o Indiana Jones',
            'Com certeza, se você for o Rocky Balboa',
            'De jeito nenhum, se você for o Voldemort',
            'Não sei, pergunte ao Sherlock Holmes',
            'Melhor não saber, é um spoiler',
            'As chances são de 88%',
            'As chances são de 0,01%',
            'A resposta está no Titanic',
            'A resposta está no Avatar',
            'Sai daqui, Tubarão',
            'Claro que sim, Forrest Gump',
            'Nem sonhando, O Exorcista',
            'Pergunte ao Yoda',
            'Siga o caminho do arco-íris',
            'Houston, temos um problema',
            'Sim, e você é o Harry Potter',
            'Não, e você é o Draco Malfoy',
            'Talvez, se você for o Frodo Bolseiro',
            'Com certeza, se você for o Luke Skywalker',
            'De jeito nenhum, se você for o Sauron',
            'Não sei, pergunte ao Spock',
            'Melhor não saber, é um paradoxo',
            'Repita a pergunta, Jarvis',
            'As chances são de 3,14%',
            'As chances são de 1/∞%',
            'A resposta está no Guia do Mochileiro das Galáxias',
            'A resposta está no Cubo Mágico',
            'Sai daqui, Alien',
            'Claro que sim, Tony Stark',
            'Nem sonhando, Coringa',
            'Pergunte ao Doutor Estranho',
            'Siga o fluxo da Força',
            'Vida longa e próspera',
            'Sim, e você é o Capitão América',
            'Não, e você é o Loki',
            'Talvez, se você for o Wolverine',
            'Com certeza, se você for o Homem de Ferro',
            'De jeito nenhum, se você for o Magneto',
            'Não sei, pergunte ao Sheldon Cooper',
            'Melhor não saber, é um enigma',
            'Repita a pergunta, Cortana',
            'As chances são de 0,001%',
            'A resposta está no Senhor dos Anéis',
            'A resposta está no Star Wars',
            'Sai daqui, Zumbi',
            'Claro que sim, Batman',
            'Nem sonhando, Pennywise',
            'Pergunte ao Mestre dos Magos',
            'Siga o seu destino',
            'Que a Força esteja com você',
            'Sim, e você é o Pequeno Príncipe',
            'Não, e você é o Conde Drácula',
            'Talvez, se você for o Sherlock Holmes',
            'Com certeza, se você for o Dom Quixote',
            'De jeito nenhum, se você for o Capitão Nemo',
            'Não sei, pergunte ao Bilbo Bolseiro',
            'Repita a pergunta, Alice',
            'As chances são de 1984%',
            'As chances são de 451%',
            'A resposta está no Código Da Vinci',
            'A resposta está no O Alquimista',
            'Sai daqui, Frankenstein',
            'Claro que sim, Harry Potter',
            'Nem sonhando, Jogos Vorazes',
            'Pergunte ao O Pequeno Príncipe',
            'Siga a estrada de tijolos amarelos',
            'Não entre em pânico',
            'Sim, e você é o Douglas Adams',
            'Não, e você é o Vogon',
            'Talvez, se você for o Marvin',
            'Com certeza, se você for o Ford Prefect',
            'De jeito nenhum, se você for o Prostetnic Vogon Jeltz',
            'Não sei, pergunte ao Guia do Mochileiro das Galáxias',
            'Melhor não saber, é uma resposta muito longa',
            'Repita a pergunta, Arthur Dent',
            'As chances são de 0%',
            'A resposta está no número 42',
            'A resposta está na toalha',
            'Sai daqui, Golgafrincham',
            'Claro que sim, Zaphod Beeblebrox',
            'Nem sonhando, Agrajag',
            'Pergunte ao Slartibartfast',
            'Siga o sinal de saída',
            'Sim, e você é o Gandalf',
            'Não, e você é o Saruman',
            'Talvez, se você for o Bilbo',
            'Com certeza, se você for o Aragorn',
            'De jeito nenhum, se você for o Gollum',
            'Não sei, pergunte ao Smaug',
            'Melhor não saber, é um perigo',
            'Repita a pergunta, Frodo',
            'As chances são de 50%',
            'As chances são de 0,00001%',
            'A resposta está no Um Anel',
            'A resposta está na Montanha Solitária',
            'Sai daqui, Orc',
            'Claro que sim, Legolas',
            'Nem sonhando, Balrog',
            'Pergunte ao Elrond',
            'Siga a Sociedade do Anel',
            'Você não passará',
            'Sim, e você é o Link',
            'Não, e você é o Ganon',
            'Talvez, se você for o Zelda',
            'Com certeza, se você for o Impa',
            'De jeito nenhum, se você for o Vaati',
            'Não sei, pergunte ao Navi',
            'Melhor não saber, é uma surpresa',
            'Repita a pergunta, Sheik',
            'As chances são de 100%',
            'A resposta está na Triforce',
            'A resposta está na Master Sword',
            'Sai daqui, Skull Kid',
            'Claro que sim, Epona',
            'Nem sonhando, Dark Link',
            'Pergunte ao Deku Tree',
            'Siga a Song of Storms',
            'It’s dangerous to go alone',
            'Yes, and you are the Doctor',
            'No, and you are the Dalek',
            'Maybe, if you are the TARDIS',
            'For sure, if you are the River Song',
            'No way, if you are the Cyberman',
            'I don’t know, ask the Sonic Screwdriver',
            'Better not to know, it’s a spoiler',
            'Repeat the question, Amy Pond',
            'The chances are of 100%',
            'The chances are of 0%',
            'The answer is in the Time Lord',
            'The answer is in the Gallifrey',
            'Get out of here, Weeping Angel',
            'Of course, yes, Clara Oswald',
            'Not in your dreams, The Master',
            'Ask the Torchwood',
            'Follow the Bad Wolf',
            'Don’t blink',

        ]
        if not pergunta.value:
            pergunta.error_text = "Por favor escreva uma pergunta"
            page.update()
        else:
            # valor = pergunta.value

            sabedoria = f'{random.choice(respotas_da_sabedoria)}'
            txt_resposta = ft.Text(f"Pergunta: {pergunta.value}\nResposta: {sabedoria}", size=25)
            page.add(txt_resposta)

    texto_dica = ft.Text(f"Faça perguntas de sim ou não", size=25)
    pergunta = ft.TextField(label="Qual sua pergunta?", width=400, autofocus=True)
    btn_perguntar = ft.ElevatedButton("Perguntar", on_click=btn_click)

    # page.add(texto_dica)
    page.add(texto_dica, pergunta, btn_perguntar)


ft.app(target=main, view=ft.AppView.WEB_BROWSER)
