import subprocess

li_56 = ["5", "6"]
li_crs = ["c", "r", "s"]
li_abcd = ["a", "b", "c", "d"]

for i_56 in li_56:
    for i_crs in li_crs:
        for i_abcd in li_abcd:
            img = f"{i_56}{i_crs}{i_abcd}.jpg"
            path = f"https://www.rakuten.ne.jp/gold/comodocasa/2023INTIME1000/img/S/{img}"
            cmd = f'curl -OL {path}'
            subprocess.call(cmd.split())
