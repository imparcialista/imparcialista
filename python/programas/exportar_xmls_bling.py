from python.ferramentas import *

gui.FAILSAFE = True

confianca = 0.95
gui.PAUSE = 0.5
selecionar_todos = 233, 271
fim_do_scroll = 1356, 736
proxima_pagina = 688, 745
exportar_xmls = 1225, 436
clicar_download = 653, 588
desselecionar = 759, 245

def ir_para_proxima_pagina():
    for i in range(6):
        # clicar(fim_do_scroll)
        encontrar_e_clicar('descer_pagina.png', confianca)

    # clicar(proxima_pagina)
    encontrar_e_clicar('botao_proxima_pagina.png', confianca)
    esperar(3.5)

def exportador(qtd_paginas):
    # qtd_paginas = qtd_paginas + 1
    while qtd_paginas != 0:
        if qtd_paginas > 1:
            # clicar(selecionar_todos)    # seleciona 100 itens
            encontrar_e_clicar('botao_selecionar.png', confianca)

            ir_para_proxima_pagina()

            # clicar(selecionar_todos)    # seleciona 200 itens
            encontrar_e_clicar('botao_selecionar.png', confianca)
            qtd_paginas -= 1
        else:
            #clicar(selecionar_todos)    # seleciona 100 itens
            encontrar_e_clicar('botao_selecionar.png', confianca)

            ir_para_proxima_pagina()
            qtd_paginas -= 1


        verificador = apenas_encontrar_imagem('verificador.png', 0.8)

        if verificador:
            encontrar_e_clicar('verificador.png', 0.8)


        # clicar(exportar_xmls)
        encontrar_e_clicar('botao_exportar_xml.png', 0.90)
        # esperar(30)

        # clicar(clicar_download)
        encontrar_e_clicar('botao_fazer_download_xml.png', confianca)
        esperar(1)
        esc()

        # clicar(desselecionar)
        encontrar_e_clicar('botao_selecionar.png', confianca)

        ir_para_proxima_pagina()
        esperar(1)


notas = int(entrada_usuario(
        'Insira a quantidade de notas fiscais',
        'Notas fiscais',
    '1000'))

qtd_paginas = 0

while notas > 0:
    notas -= 100
    qtd_paginas += 1

print(f'Páginas: {qtd_paginas}')

pausa(5,
     'Coloque no bling')


exportador(qtd_paginas)

