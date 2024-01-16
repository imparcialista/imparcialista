from python.programas.meta.ignorar import access_token
import flet as ft
import requests
import json


def main(page):
    page.title = "Atualizar estoque no Mercado Livre"
    page.window_title_bar_hidden = False
    page.window_frameless = False
    page.window_left = 200
    page.window_top = 200
    page.window_width = 400
    page.window_height = 340
    page.window_always_on_top = False
    # page.window_movable = True
    page.window_opacity = 0.90
    scroll = ft.ScrollMode.ALWAYS
    def btn_click(e):

        if not id_mlb.value:
            id_mlb.error_text = "Por favor insira um id"
            page.update()
        else:
            # valor = pergunta.value
            def atualizar_estoque(produto, quantidade):
                url = f"https://api.mercadolibre.com/items/{produto}"

                payload = json.dumps({
                    "available_quantity": quantidade
                })

                headers = {
                    'Authorization': f'Bearer {access_token}',
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }

                response = requests.request("PUT", url, headers=headers, data=payload)
                retorno = response.json()
                retorno = f'Título: {retorno["title"]} | Estoque: {qtd_mlb.value}'
                return retorno

            valor_id = f'MLB{id_mlb.value}'
            resposta = (atualizar_estoque(valor_id, qtd_mlb.value))
            txt_resposta = ft.Text(f"{resposta}", size=20)
            page.add(txt_resposta)

    texto_dica = ft.Text(f"Insira o id do Mercado Livre", size=25)
    id_mlb = ft.TextField(label="Qual o id do anúncio?", width=200, autofocus=True, value='1849528667', prefix_text='MLB ')
    qtd_mlb = ft.TextField(label="Quantidade", width=200, value='33')
    btn_perguntar = ft.ElevatedButton("Atualizar", on_click=btn_click)

    # page.add(texto_dica)
    page.add(texto_dica, id_mlb, qtd_mlb, btn_perguntar)


ft.app(target=main)
