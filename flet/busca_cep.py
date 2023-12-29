import flet as ft
import requests


def main(page):
    def btn_click(e):
        if not txt_cep.value:
            txt_cep.error_text = "Por favor digite o CEP correto"
            page.update()
        else:
            cep = txt_cep.value
            # page.clean()

            requisicao = requests.get(f'https://cep.awesomeapi.com.br/json/{cep}')
            requisicao_dic = requisicao.json()

            page.add(ft.Text(f"{requisicao_dic}"))
            page.add(ft.TextField(label='Destinatário', width=500))

            page.add(
                ft.Row(controls=[
                    ft.TextField(label='Número', value=f'', width=100),
                    ft.TextField(label='Complemento', value=f'', width=300),
                ])
            )

            page.add(
                ft.Row(controls=[
                    ft.TextField(label='CEP',value=f'{requisicao_dic["cep"]}', read_only=True),
                    ft.TextField(label='Endereço', value=f'{requisicao_dic["address"]}', read_only=True),
                    ft.TextField(label='Estado', value=f'{requisicao_dic["state"]}', read_only=True),
                ])
            )

    txt_cep = ft.TextField(label="Seu CEP", width=200)
    page.add(txt_cep, ft.ElevatedButton("Buscar", on_click=btn_click))


ft.app(target=main, view=ft.AppView.WEB_BROWSER)
