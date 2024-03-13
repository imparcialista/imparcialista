from python.ferramentas import *
from ignorar2 import link_zx_lucas

'''
    O programa vai precisar de uma pasta com as imagens já feitas e o nome de cada imagem, a descrição para a
    postagem, e a data para agendamento 
'''

gui.FAILSAFE = True

def encontrar_imagem(imagem):
    time.sleep(0.25)
    while not gui.locateOnScreen(imagem, confidence=0.8):  # reconhecimento de imagem
        print(f'nao encontrou {imagem}')
        time.sleep(1)
    encontrou = gui.locateOnScreen(imagem, confidence=0.8)
    print(f'encontrou {imagem}')
    return encontrou


linhas = 8
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
pasta = r'D:\Organizar\Tudo\A Pasta Geral\arrumar\ETP1 LUCAS\imagens\post_redes\meta'


inicio = time.time()
# pausa(1,
#       'Selecione a pasta com as fotos para postar')

# pasta_com_fotos = selecionar_pasta(f'Pasta com as imagens')
pasta_com_fotos = pasta

link  = link_zx_lucas

def abrir_pagina(site):
    pyperclip.copy(f'{site}')
    gui.hotkey('ctrl', 't')
    esperar(0.25)
    gui.hotkey('ctrl', 'v')
    esperar(0.25)
    enter()


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

# pausa(3,
#       'Os valores foram copiados, agora deixe o programa programar as postagens')

def encontrar_e_clicar(imagem):
    encontrou = encontrar_imagem(imagem)
    clicar(encontrou)


def centro(posicoes_imagem):
    return (posicoes_imagem[0] + posicoes_imagem[2]/2), (posicoes_imagem[1] + posicoes_imagem[3]/2)


for linha in range(linhas):
    gui.PAUSE = 0.25
    abrir_pagina(link)
    encontrar_e_clicar('add-foto.png')
    esperar(0.5)
    # encontrar_e_clicar('add-foto-desktop.png')
    esperar(1)
    ir_para_pasta(clicar_caminho_da_pasta, pasta_com_fotos)
    esperar(1)
    encontrar_e_clicar('nome-arquivo-pasta.png')
    escrever(f'LRC-{lista_arquivo[linha]}')
    esperar(0.5)
    encontrar_e_clicar('botao-abrir-pasta.png')
    encontrar_e_clicar('descer-pagina.png')
    encontrar_e_clicar('descricao-fb.png')
    esperar(1)
    texto = pyperclip.copy(lista_descricao[linha])
    gui.hotkey('ctrl', 'v')
    esperar(0.25)
    gui.press('space')
    encontrar_e_clicar('botao-agendar.png')
    esperar(0.5)
    tab()

    for i in range(2):
        gui.hotkey('ctrl', 'a')
        gui.press('backspace')
        escrever(lista_data[linha])
        esperar(0.5)
        tab()
        gui.press('1')
        esperar(0.5)
        gui.press('1')
        tab()
        gui.press('0')
        tab()
        tab()

    # clicar(botao_programar)
    encontrar_e_clicar('botao-programar.png')
    esperar(5)
    encontrar_imagem('publicou.png')
    fechar_pagina()

fim = time.time()
tempo_total = fim - inicio
print(f"Tempo de execução: {tempo_total:0f} segundos")