from python.ferramentas import *
from ignorar import link_zx

'''
    O programa vai precisar de uma pasta com as imagens já feitas e o nome de cada imagem, a descrição para a
    postagem, e a data para agendamento 
'''


linhas = 1
contador = 0
gui.PAUSE = 0.15

lista_data = []
lista_descricao = []
lista_arquivo = []

clicar_caminho_da_pasta = 1000, 60
clicar_nome_do_arquivo = 1000, 700
fb_lista = 555, 252
ig_lista = 555, 374
descricao = 555, 604
adicionar_foto = 238, 423
carregar_do_computador = 238, 469
descer_pagina = 618, 665
opcao_programar = 357, 623
selecionar_data = 297, 498
botao_programar = 540, 713

inicio = time.time()
pausa(1,
      'Selecione a pasta com as imagens')

pasta_com_fotos = selecionar_pasta(f'Pasta com as imagens')

link  = link_zx


def abrir_pagina(site):
    pyperclip.copy(f'{site}')
    gui.hotkey('ctrl', 't')
    esperar(0.25)
    gui.hotkey('ctrl', 'v')
    esperar(0.25)
    enter()
    esperar(10)


def fechar_pagina():
    gui.hotkey('ctrl', 'w')


pausa(3,
      'coloque na planilha para copiar os valores')


for i in range(linhas):
    lista_data.append(copiar_e_colar())
    gui.press('right')
    lista_descricao.append(copiar_e_colar())
    gui.press('right')
    lista_arquivo.append(copiar_e_colar())

    gui.press('home')
    gui.press('down')

pausa(3,
      'Os valores foram copiados, agora deixe o programa programar as postagens')

for linha in range(linhas):
    gui.PAUSE = 1
    abrir_pagina(link)
    clicar(fb_lista)
    clicar(ig_lista)
    clicar(descricao)
    esperar(1)
    texto = pyperclip.copy(lista_descricao[linha])
    gui.hotkey('ctrl', 'v')
    esperar(2)
    gui.press('space')
    clicar(adicionar_foto)
    esperar(0.5)
    clicar(carregar_do_computador)
    esperar(0.5)
    ir_para_pasta(clicar_caminho_da_pasta, pasta_com_fotos)
    esperar(1)
    clicar(clicar_nome_do_arquivo)
    esperar(0.5)
    escrever(f'LRC-{lista_arquivo[linha]}')
    esperar(0.5)
    gui.hotkey('alt', 'a')
    esperar(0.5)
    clicar(descer_pagina)
    esperar(0.5)
    clicar(opcao_programar)
    esperar(0.5)
    clicar(descer_pagina)
    esperar(0.5)
    clicar(selecionar_data)
    esperar(1)

    for i in range(2):
        gui.hotkey('ctrl', 'a')
        gui.press('backspace')
        escrever(lista_data[linha])
        esperar(2)
        tab()
        gui.press('1', 2)
        tab()
        gui.press('0')
        tab()
        gui.press('a')
        tab()

    clicar(botao_programar)
    esperar(8)
    fechar_pagina()

fim = time.time()
tempo_total = fim - inicio
print(f"Tempo de execução: {tempo_total} segundos")