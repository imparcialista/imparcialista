from python.ferramentas import *

gui.PAUSE = 0.5
selecionar_todos = 233, 271
fim_do_scroll = 1356, 736
proxima_pagina = 688, 745
exportar_xmls = 1225, 436
clicar_download = 653, 588
desselecionar = 759, 245

def ir_para_proxima_pagina():
    for i in range(6):
        clicar(fim_do_scroll)
    clicar(proxima_pagina)
    esperar(3.5)

def exportador(qtd_paginas):
    qtd_paginas = qtd_paginas + 1
    while qtd_paginas != 0:
        if qtd_paginas > 1:
            clicar(selecionar_todos)    # seleciona 100 itens
            ir_para_proxima_pagina()
            clicar(selecionar_todos)    # seleciona 200 itens
            qtd_paginas -= 1
        else:
            clicar(selecionar_todos)    # seleciona 100 itens
            ir_para_proxima_pagina()
            qtd_paginas -= 1

        clicar(exportar_xmls)
        esperar(30)
        clicar(clicar_download)
        esperar(1)
        esc()
        clicar(desselecionar)
        ir_para_proxima_pagina()
        esperar(1)

pausa(4,
      'Coloque no bling')

exportador(6)


